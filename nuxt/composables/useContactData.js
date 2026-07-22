import { computed } from 'vue';
import { useI18n } from '#imports';

export function useContactData(contactData) {
  const { $getLocale } = useI18n();

  const data = computed(() => {
    switch ($getLocale()) {
      case 'en':
        return contactData.infosEn;
      case 'es':
        return contactData.infosEs;
      default:
        return contactData.infos;
    }
  });

  return data;
}
