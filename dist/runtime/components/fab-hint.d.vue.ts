declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    icon: StringConstructor;
    iconColor: StringConstructor;
    bgColor: StringConstructor;
    text: StringConstructor;
    title: StringConstructor;
}>, {}, {
    expaned: boolean;
    isVisible: boolean;
}, {
    classList(): string[];
    containerStyle(): {
        '--fab-hint-icon-color'?: string | undefined;
        '--fab-hint-bg-color'?: string | undefined;
    };
    iconValue(): string;
    titleValue(): any;
    enhancedText(): string;
}, {
    bindEvents(): void;
    unbindEvents(): void;
    handleOutsideClick(e: any): void;
    handleClick(): void;
    handleClose(): void;
    handleScroll(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    icon: StringConstructor;
    iconColor: StringConstructor;
    bgColor: StringConstructor;
    text: StringConstructor;
    title: StringConstructor;
}>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
