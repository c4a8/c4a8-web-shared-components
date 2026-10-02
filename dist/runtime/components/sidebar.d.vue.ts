declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    sections: {
        type: ArrayConstructor;
    };
    headlineText: {
        type: StringConstructor;
    };
    color: {
        type: StringConstructor;
    };
    date: {
        type: StringConstructor;
    };
    location: {
        type: StringConstructor;
    };
    hint: {
        type: StringConstructor;
    };
}>, {}, {
    isReady: boolean;
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
    modalStore: null;
}, {
    mainStyle(): {
        '--color-headlines': string | undefined;
    };
}, {
    registerDialogs(): void;
    handleScroll(): void;
    getDialogByIndex(index: any): any;
    openDialog(index: any): void;
    closeDialog(index: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    sections: {
        type: ArrayConstructor;
    };
    headlineText: {
        type: StringConstructor;
    };
    color: {
        type: StringConstructor;
    };
    date: {
        type: StringConstructor;
    };
    location: {
        type: StringConstructor;
    };
    hint: {
        type: StringConstructor;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
