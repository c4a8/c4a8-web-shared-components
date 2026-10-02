declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    items: {
        type: ArrayConstructor;
        default: () => never[];
    };
    columns: {
        type: ObjectConstructor;
        default: () => {
            sm: number;
            md: number;
            lg: number;
            xl: number;
        };
    };
    gap: {
        type: StringConstructor;
        default: string;
    };
    observeOnScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    initialItemsCount: {
        type: NumberConstructor;
        default: null;
    };
    itemsPerLoad: {
        type: NumberConstructor;
        default: number;
    };
    headline: {
        type: ObjectConstructor;
        default: null;
    };
    socials: {
        type: ArrayConstructor;
        default: () => {
            icon: string;
            url: string;
            title: string;
        }[];
    };
}>, {}, {
    itemsChanged: boolean;
    displayedCount: number | null;
    State: {
        ACTIVE: string;
        READY: string;
        ERROR: string;
        VALID: string;
        SUCCESS: string;
        HAS_ERROR: string;
        HOVERING: string;
        DRAGGING: string;
        HIDDEN: string;
        INVISIBLE: string;
        EXPANDED: string;
        EXPANDABLE: string;
        OFF_SCREEN: string;
        COLLAPSED: string;
        IS_COLLAPSING: string;
        SHOW: string;
        FADE: string;
        INITIALIZED: string;
        LOADING: string;
        HIDE_LOADING: string;
        HAS_LOADING: string;
        END: string;
        IS_SCROLLED: string;
        MODAL_OPEN: string;
        HAS_BACKGROUND: string;
        IS_FULL: string;
        STICKY: string;
        IN_TRANSITION: string;
        IS_STARTING: string;
        ON_SURFACE: string;
    };
    observer: null;
    containerHeight: number;
}, {
    headlineValue(): {
        level: any;
        classes: string;
    };
    styleVars(): {
        '--masonry-columns-sm': any;
        '--masonry-columns-md': any;
        '--masonry-columns-lg': any;
        '--masonry-columns-xl': any;
        '--masonry-gap': string;
    };
    clipperStyle(): {
        maxHeight?: undefined;
        overflow?: undefined;
    } | {
        maxHeight: string;
        overflow: string;
    };
    displayedItems(): unknown[];
    showLoadMore(): boolean;
}, {
    reinitUtilityAnimation(): void;
    loadMore(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        type: ArrayConstructor;
        default: () => never[];
    };
    columns: {
        type: ObjectConstructor;
        default: () => {
            sm: number;
            md: number;
            lg: number;
            xl: number;
        };
    };
    gap: {
        type: StringConstructor;
        default: string;
    };
    observeOnScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    initialItemsCount: {
        type: NumberConstructor;
        default: null;
    };
    itemsPerLoad: {
        type: NumberConstructor;
        default: number;
    };
    headline: {
        type: ObjectConstructor;
        default: null;
    };
    socials: {
        type: ArrayConstructor;
        default: () => {
            icon: string;
            url: string;
            title: string;
        }[];
    };
}>> & Readonly<{}>, {
    headline: Record<string, any>;
    socials: unknown[];
    items: unknown[];
    columns: Record<string, any>;
    gap: string;
    observeOnScroll: boolean;
    initialItemsCount: number;
    itemsPerLoad: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
