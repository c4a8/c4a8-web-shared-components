import { useSchemaOrg } from '#imports';

function stripHtml(html = '') {
  return html.replace(/<[^>]*>/g, '');
}

function mapStructuredDataToFAQ(unstructuredData) {
  const data = unstructuredData?.value ?? unstructuredData;

  if (!data || !data.accordion || !Array.isArray(data.accordion.tabs)) return null;

  return {
    '@type': 'FAQPage',
    mainEntity: data.accordion.tabs.map((tab, index) => ({
      '@type': 'Question',
      '@id': `#faq-question-${index + 1}`,
      name: stripHtml(tab.headline),
      acceptedAnswer: {
        '@type': 'Answer',
        text: stripHtml(tab.content),
      },
    })),
  };
}

export function useStructuredData(data, type) {
  if (type === 'FAQPage') {
    const faqSchema = mapStructuredDataToFAQ(data);

    if (faqSchema) {
      useSchemaOrg(faqSchema);
    }

    return;
  }

  useSchemaOrg(data);
}
