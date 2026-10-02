declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    list: ObjectConstructor;
    lang: StringConstructor;
    classes: StringConstructor;
    hidden: {
        default: null;
    };
    noAnimation: {
        default: null;
    };
}>, {}, {
    inTransition: boolean;
    isExpanded: boolean;
    parentOfParent: null;
    hover: boolean;
}, {
    classList(): (string | undefined)[];
    hasNoAnimation(): boolean;
    classListTitle(): string[];
    classListList(): string[];
    hasActiveItem(): boolean | undefined;
    isHidden(): boolean;
}, {
    bindEvents(): void;
    handleUpdate(event: any): void;
    isLowerBreakpoint(): boolean;
    isExpandable(): boolean;
    updateHeight(): void;
    handleClick(event: any): void;
    handleMouseOver(index: any): void;
    handleMouseOut(index: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    list: ObjectConstructor;
    lang: StringConstructor;
    classes: StringConstructor;
    hidden: {
        default: null;
    };
    noAnimation: {
        default: null;
    };
}>> & Readonly<{}>, {
    hidden: null;
    noAnimation: null;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
