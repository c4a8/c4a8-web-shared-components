import useConfig from '../composables/useConfig';

export default function useEnvironment() {
  const config = useConfig();

  return config?.public?.environment || 'development';
}
