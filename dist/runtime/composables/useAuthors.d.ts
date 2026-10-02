export function normalizeUmlauts(str: any): any;
export function reduceAuthors(meta: any, names: any): {} | null;
export default function useAuthors(names: any): {
    authors: any;
    pending: import("vue").Ref<boolean, boolean>;
    error: import("vue").Ref<import("nuxt/app").NuxtError<unknown> | undefined, import("nuxt/app").NuxtError<unknown> | undefined>;
    refresh: () => Promise<void>;
};
