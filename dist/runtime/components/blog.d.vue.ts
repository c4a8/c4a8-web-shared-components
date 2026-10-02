declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    posts: {
        type: ArrayConstructor;
    };
    blogMaxBlogPosts: {
        type: NumberConstructor;
        default: number;
    };
    paginator_page: NumberConstructor;
    paginator_total_pages: NumberConstructor;
    paginator_previous_page: NumberConstructor;
    paginator_previous_page_path: StringConstructor;
    paginator_next_page: NumberConstructor;
    paginator_next_page_path: StringConstructor;
    hasHighlight: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultView: {
        type: StringConstructor;
        default: string;
    };
    onlyView: {
        type: StringConstructor;
    };
    enabledDropdowns: {
        type: ArrayConstructor;
        default: () => string[];
    };
    reversed: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    config: {};
    locale: string;
    strategy: any;
}, {
    filesValue: never[];
}, {
    blogContainerClassList(): string[];
    showNoPosts(): boolean;
    showFilter(): boolean;
    imgUrl(): any;
    highlightPost(): any;
    highlightPostExternalLanguage(): any;
    showComponent(): true | {
        limit: number;
        sort: {
            moment: number;
        }[];
        reversed: boolean;
        where: {
            path: {
                LIKE: string[];
            };
        };
        path: string;
        additionalCollections: string[];
    };
    query(): {
        limit: number;
        sort: {
            moment: number;
        }[];
        reversed: boolean;
        where: {
            path: {
                LIKE: string[];
            };
        };
        path: string;
        additionalCollections: string[];
    };
}, {
    blogTitleUrl(post: any): any;
    updateFiles(files: any): true | undefined;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    posts: {
        type: ArrayConstructor;
    };
    blogMaxBlogPosts: {
        type: NumberConstructor;
        default: number;
    };
    paginator_page: NumberConstructor;
    paginator_total_pages: NumberConstructor;
    paginator_previous_page: NumberConstructor;
    paginator_previous_page_path: StringConstructor;
    paginator_next_page: NumberConstructor;
    paginator_next_page_path: StringConstructor;
    hasHighlight: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultView: {
        type: StringConstructor;
        default: string;
    };
    onlyView: {
        type: StringConstructor;
    };
    enabledDropdowns: {
        type: ArrayConstructor;
        default: () => string[];
    };
    reversed: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    reversed: boolean;
    blogMaxBlogPosts: number;
    hasHighlight: boolean;
    defaultView: string;
    enabledDropdowns: unknown[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
