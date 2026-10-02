declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    overline: StringConstructor;
    underline: StringConstructor;
    steps: ArrayConstructor;
    color: {
        type: StringConstructor;
        default: string;
    };
    accentColor: {
        type: StringConstructor;
        default: string;
    };
    blogtitlepic: StringConstructor;
    url: StringConstructor;
    title: StringConstructor;
    target: StringConstructor;
    excerpt: StringConstructor;
    author: {
        type: (ArrayConstructor | StringConstructor)[];
    };
    date: StringConstructor;
    footer: StringConstructor;
    tag: {
        default: null;
    };
    large: {
        default: null;
    };
    long: {
        default: null;
    };
    product: {
        default: null;
    };
    subPoints: {
        default: null;
    };
    event: {
        default: null;
    };
    webcast: {
        default: null;
    };
    youtubeUrl: StringConstructor;
    dataAuthors: ObjectConstructor;
    scope: StringConstructor;
    cta: {
        default: null;
    };
    hasAnimation: {
        default: null;
    };
    index: NumberConstructor;
    externalLanguage: StringConstructor;
    spacing: StringConstructor;
    store: {
        default: null;
    };
    row: {
        default: null;
    };
    tags: ArrayConstructor;
    hasNoAspectRatio: {
        type: BooleanConstructor;
    };
    logo: ObjectConstructor;
    img: StringConstructor;
    cloudinary: BooleanConstructor;
    alt: StringConstructor;
}>, {}, {
    wordsToTruncate: number;
    activeView: null;
    imgSrcSets: null;
}, {
    datePublished(): any;
    blogView(): null;
    combinedTitle(): string;
    noLink(): boolean;
    indexValue(): number | null | undefined;
    style(): string | null;
    hasAnimationValue(): boolean;
    utilityAnimationStep(): "1" | null;
    rowValue(): boolean;
    variant(): "card--long" | "card--products" | "card--event" | "card--row" | "card--default";
    classList(): (string | undefined)[];
    productValue(): any;
    truncatedExcerpt(): any;
    strippedExcerpt(): string | undefined;
    cardDate(): any;
    hasExtension(): string | undefined;
    hasBlogTitlePic(): boolean;
    hasNoLink(): boolean;
    ctaValue(): any;
    cardFooterData(): {
        date: any;
        author: string | unknown[] | undefined;
        authorsList: any;
        hasNoLink: boolean;
        dataAuthors: Record<string, any> | undefined;
        isRow: boolean;
        tags: unknown[] | undefined;
    };
}, {
    isTags(target: any): boolean;
    formatDate(date: any): any;
    authorList(author: any): any;
    subPointsList(subpoints: any): any;
    headlineClassValue(index: any): "" | "mt-5";
    handleClick(e: any): void;
    isIncluded(include: any): "check-mark" | "x-mark";
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    overline: StringConstructor;
    underline: StringConstructor;
    steps: ArrayConstructor;
    color: {
        type: StringConstructor;
        default: string;
    };
    accentColor: {
        type: StringConstructor;
        default: string;
    };
    blogtitlepic: StringConstructor;
    url: StringConstructor;
    title: StringConstructor;
    target: StringConstructor;
    excerpt: StringConstructor;
    author: {
        type: (ArrayConstructor | StringConstructor)[];
    };
    date: StringConstructor;
    footer: StringConstructor;
    tag: {
        default: null;
    };
    large: {
        default: null;
    };
    long: {
        default: null;
    };
    product: {
        default: null;
    };
    subPoints: {
        default: null;
    };
    event: {
        default: null;
    };
    webcast: {
        default: null;
    };
    youtubeUrl: StringConstructor;
    dataAuthors: ObjectConstructor;
    scope: StringConstructor;
    cta: {
        default: null;
    };
    hasAnimation: {
        default: null;
    };
    index: NumberConstructor;
    externalLanguage: StringConstructor;
    spacing: StringConstructor;
    store: {
        default: null;
    };
    row: {
        default: null;
    };
    tags: ArrayConstructor;
    hasNoAspectRatio: {
        type: BooleanConstructor;
    };
    logo: ObjectConstructor;
    img: StringConstructor;
    cloudinary: BooleanConstructor;
    alt: StringConstructor;
}>> & Readonly<{}>, {
    long: null;
    webcast: null;
    cloudinary: boolean;
    color: string;
    event: null;
    row: null;
    cta: null;
    store: null;
    large: null;
    tag: null;
    accentColor: string;
    product: null;
    subPoints: null;
    hasAnimation: null;
    hasNoAspectRatio: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
