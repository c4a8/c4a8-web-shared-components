import { useState } from '#imports';

export const useDynamicPageMeta = () => useState('dynamicPageMeta', () => ({}));
