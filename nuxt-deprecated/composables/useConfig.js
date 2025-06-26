import { useRuntimeConfig } from '#imports';

export default function useConfig() {
  let config = {};

  if (typeof useRuntimeConfig === 'function') {
    const runetimeConfig = useRuntimeConfig();

    config = { ...runetimeConfig };
  }

  return config;
}
