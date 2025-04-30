export const useBlogStore: import("pinia").StoreDefinition<"blog", {
    blogItems: never[];
    blogView: string;
}, {
    getBlogItems: (state: {
        blogItems: never[];
        blogView: string;
    } & import("pinia").PiniaCustomStateProperties<{
        blogItems: never[];
        blogView: string;
    }>) => never[];
    getBlogView: (state: {
        blogItems: never[];
        blogView: string;
    } & import("pinia").PiniaCustomStateProperties<{
        blogItems: never[];
        blogView: string;
    }>) => string;
}, {
    setBlogItems(items: any): void;
    setBlogView(view: any): void;
}>;
