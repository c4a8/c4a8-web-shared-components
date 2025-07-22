import { computed, unref } from 'vue';
import { useI18n } from '#imports';

import Tools from '../utils/tools.js';

export default function useFormattedDate(moment) {
  const { locale } = useI18n();

  return computed(() => {
    return Tools.getFormattedDate(unref(moment), locale.value);
  });
}
