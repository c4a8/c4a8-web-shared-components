const SEGMENT_SEPARATOR = '|';

const FORMAT_LABELS = new Set([
  'a demanda',
  'auf anfrage',
  'bajo demanda',
  'bajo petición',
  'bajo peticion',
  'community event',
  'conference',
  'conferencia',
  'conferencias',
  'congreso',
  'congreso y expo',
  'congress',
  'congress & expo',
  'event',
  'evento',
  'expo',
  'fair',
  'feria',
  'karriere-event',
  'kongres & expo',
  'kongress',
  'konferenz',
  'messe',
  'on demand',
  'on request',
  'on-site workshop',
  'onsite workshop',
  'summit',
  'theater',
  'training',
  'workshop',
]);

const ONLINE_PATTERN = /online|webinar|webcast|teams|virtual|remote|livestream/i;
const CLOCK_PATTERN = /^\d{1,2}([:.]\d{2})?\s*(?:[-–—]\s*\d{1,2}([:.]\d{2})?)?\s*(uhr|am|pm|h)?\s*(cet|cest|mez)?$/i;
const CLOCK_WORDS = /\b(uhr|am|pm|cet|cest|mez)\b/i;
const DAY_RANGE = /(\d{1,2})\s*(?:st|nd|rd|th)?\s*\.?\s*[-–—/]\s*(\d{1,2})\s*(?:st|nd|rd|th)?\s*\.?/;
const TITLE_PREFIX = /^(?:dr|prof)\.?\s+/i;
const UMLAUTS = { ä: 'ae', ö: 'oe', ü: 'ue', ß: 'ss' };

const ENTITIES = { '&ndash;': '–', '&mdash;': '—', '&nbsp;': ' ', '&amp;': '&', '&quot;': '"', '&#39;': "'" };

const segmentsOf = (time) =>
  String(time ?? '')
    .split(SEGMENT_SEPARATOR)
    .map((segment) => segment.trim())
    .filter(Boolean);

const isFormatLabel = (segment) => FORMAT_LABELS.has(segment.toLowerCase());
const isClock = (segment) => CLOCK_PATTERN.test(segment) || CLOCK_WORDS.test(segment);

export function decodeEntities(text) {
  if (!text) return null;

  return String(text).replace(/&(ndash|mdash|nbsp|amp|quot|#39);/g, (entity) => ENTITIES[entity] ?? entity);
}

export function parseEventTime(time) {
  const segments = segmentsOf(time);
  const candidates = segments
    .slice(1)
    .filter((segment) => !isFormatLabel(segment) && !isClock(segment) && !ONLINE_PATTERN.test(segment));

  return {
    online: segments.some((segment) => ONLINE_PATTERN.test(segment)),
    place: candidates.length ? candidates[candidates.length - 1] : null,
  };
}

export function resolveEventEndDate(time, startDate) {
  const [datePart] = segmentsOf(time);

  if (!datePart || !startDate) return null;

  const range = datePart.match(DAY_RANGE);

  if (!range) return null;

  const start = new Date(`${startDate}T00:00:00Z`);

  if (Number.isNaN(start.getTime())) return null;

  const firstDay = Number(range[1]);
  const lastDay = Number(range[2]);

  if (firstDay !== start.getUTCDate()) return null;
  if (lastDay <= firstDay || lastDay - firstDay > 13) return null;

  const end = new Date(start);
  end.setUTCDate(lastDay);

  if (end.getUTCMonth() !== start.getUTCMonth()) return null;

  return end.toISOString().slice(0, 10);
}

export function personSlug(name) {
  return String(name ?? '')
    .replace(TITLE_PREFIX, '')
    .toLowerCase()
    .replace(/[äöüß]/g, (char) => UMLAUTS[char])
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
