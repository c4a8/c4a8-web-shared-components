declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    accordion: ObjectConstructor;
    shadowless: {
        default: null;
    };
    left: {
        default: null;
    };
    spacing: StringConstructor;
}>, {}, {
    showOutsideImage: boolean;
    outsideImage: boolean;
    outsideAnimated: boolean;
    outsideAlt: string;
    states: never[];
    fallbackImage: boolean;
    fallbackAnimated: boolean;
    fallbackAlt: string;
    tabs: never[];
}, {
    outsidePreset(): "animated" | null;
    isOutsideImageWebpOrGif(): any;
    imageWrapperClasses(): (string | null)[];
    containerClasses(): (string | null | undefined)[];
    accordionClasses(): (string | null)[];
    fallbackImageClasses(): (string | null)[];
    columnClasses(): (string | null)[];
    headlineClasses(): string;
}, {
    changeExpandedStateOnAnchor(): void;
    getHash(): string;
    isUpperBreakpoint(): boolean;
    selectFallbackImage(): void;
    getActiveTab(): any;
    handleClick(index: any): void;
    changeToFallbackImage(): void;
    changeOutsideImage(index: any): void;
    getTabByIndex(index: any): any;
    allTabsClosed(): boolean;
    getStateByIndex(index: any): undefined;
    getId(accordion: any, index: any, name: any, saveElement?: boolean): string;
    isExpanded(tab: any): "true" | "false";
    buttonClasses(tab: any): (string | null)[];
    contentClasses(tab: any): (string | null)[];
    cardClasses(index: any): (string | null)[];
    cardStyle(index: any): string;
    accordionId(accordion: any): string;
    cloudinary(image: any): any;
    getImage(tab: any): any;
    getTab(tab: any): any;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    accordion: ObjectConstructor;
    shadowless: {
        default: null;
    };
    left: {
        default: null;
    };
    spacing: StringConstructor;
}>> & Readonly<{}>, {
    shadowless: null;
    left: null;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
