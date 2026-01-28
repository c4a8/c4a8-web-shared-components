import { useSchemaOrg } from '#imports';

function stripHtml(html = '') {
  return String(html).replace(/<[^>]*>/g, '');
}

function unwrap(data) {
  return data?.value ?? data;
}

function get(obj, path) {
  if (!path) return undefined;
  return path.split('.').reduce((acc, key) => acc?.[key], obj);
}

function isNonEmptyArray(v) {
  return Array.isArray(v) && v.length > 0;
}

/**
 * Declarative shapes: each shape says
 * - where the items are (itemsPath)
 * - how to read question/answer fields (questionPath/answerPath)
 * - optional rootPath if the useful object is nested
 */
const FAQ_SHAPES = [
  {
    id: 'accordion-tabs',
    itemsPath: 'accordion.tabs',
    questionPath: 'headline',
    answerPath: 'content',
  },
  {
    id: 'faq-entries',
    itemsPath: 'entries',
    questionPath: 'summary',
    answerPath: 'text',
  },
];

function buildFAQSchemaFromShape(data, shape) {
  const d = unwrap(data);

  const items = get(d, shape.itemsPath);
  if (!isNonEmptyArray(items)) return null;

  const valid = items.filter((item) => {
    const q = get(item, shape.questionPath);
    const a = get(item, shape.answerPath);

    return typeof q === 'string' && q.trim() && typeof a === 'string' && a.trim();
  });

  if (!valid.length) return null;

  return {
    '@type': 'FAQPage',
    mainEntity: valid.map((item, index) => ({
      '@type': 'Question',
      '@id': `#faq-question-${index + 1}`,
      name: stripHtml(get(item, shape.questionPath)),
      acceptedAnswer: {
        '@type': 'Answer',
        text: stripHtml(get(item, shape.answerPath)),
      },
    })),
  };
}

function mapToFAQSchema(data) {
  for (const shape of FAQ_SHAPES) {
    const schema = buildFAQSchemaFromShape(data, shape);

    if (schema) return schema;
  }

  return null;
}

export function useStructuredData(data, type) {
  if (type === 'FAQPage') {
    const faqSchema = mapToFAQSchema(data);

    if (faqSchema) useSchemaOrg(faqSchema);

    return;
  }

  useSchemaOrg(unwrap(data));
}
