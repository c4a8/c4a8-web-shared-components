declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    author: {
        type: ObjectConstructor;
        default: () => {};
    };
    postedAt: {
        type: NumberConstructor;
    };
    contentHtml: {
        type: StringConstructor;
    };
    media: {
        type: ArrayConstructor;
        default: () => never[];
    };
    stats: {
        type: ObjectConstructor;
        default: () => {};
    };
    postUrl: {
        type: StringConstructor;
    };
    hasAnimation: {
        default: null;
    };
    resharedPost: {
        type: ObjectConstructor;
        default: null;
    };
    index: NumberConstructor;
    maxContentLength: {
        type: NumberConstructor;
        default: number;
    };
    companyPageUrl: {
        type: StringConstructor;
    };
}>, {}, {}, {
    classList(): string[];
    hasAnimationValue(): boolean;
    utilityAnimationStep(): "1" | null;
    style(): string | null;
    firstMedia(): {} | null;
    formattedPostedAt(): any;
    postedAtISO(): any;
    truncatedContent(): any;
    truncatedRepostContent(): any;
    showReadMore(): boolean;
    showRepostReadMore(): boolean;
}, {
    hasReadMore(content: any): boolean;
    truncateContent(content: any): any;
    formatDate(date: any): any;
    handleClick(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    author: {
        type: ObjectConstructor;
        default: () => {};
    };
    postedAt: {
        type: NumberConstructor;
    };
    contentHtml: {
        type: StringConstructor;
    };
    media: {
        type: ArrayConstructor;
        default: () => never[];
    };
    stats: {
        type: ObjectConstructor;
        default: () => {};
    };
    postUrl: {
        type: StringConstructor;
    };
    hasAnimation: {
        default: null;
    };
    resharedPost: {
        type: ObjectConstructor;
        default: null;
    };
    index: NumberConstructor;
    maxContentLength: {
        type: NumberConstructor;
        default: number;
    };
    companyPageUrl: {
        type: StringConstructor;
    };
}>> & Readonly<{}>, {
    author: Record<string, any>;
    hasAnimation: null;
    media: unknown[];
    stats: Record<string, any>;
    resharedPost: Record<string, any>;
    maxContentLength: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
