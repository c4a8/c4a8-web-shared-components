import useConfig from '../composables/useConfig.js';

export default function useEnvironment() {
  const config = useConfig();

  return config?.public?.environment || 'development';
}
