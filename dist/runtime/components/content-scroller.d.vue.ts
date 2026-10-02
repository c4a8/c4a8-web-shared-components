declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    headline: {
        default: null;
    };
    subline: {
        type: StringConstructor;
        default: string;
    };
    sublineClasses: {
        type: StringConstructor;
        default: null;
    };
    blocks: ArrayConstructor;
    overlappingSize: StringConstructor;
    skin: {
        type: StringConstructor;
        default: string;
    };
}>, {}, {
    blockScrollPercentage: never[];
    scrollDistancePercentage: number;
    minHeight: number;
    blockCount: number;
    isScrolledUpOut: boolean;
    isScrolledDownOut: boolean;
}, {
    classList(): string[];
    blocksValue(): any;
    headlineValue(): any;
    overlappingSizeValue(): string;
    style(): {
        '--content-scroller-min-height': string;
    };
}, {
    handleScroll(): void;
    handleResize(): void;
    resetIsScrolledUpOut(): void;
    resetIsScrolledDownOut(): void;
    setBlockMaxPercentage(index: any): void;
    setBlockMinPercentage(index: any): void;
    updateBlocks(): void;
    getViewportHeight(): number;
    calcScrollDistancePercentage(): void;
    calcBlockCount(): void;
    calcBlockStyle(index: any): {
        '--content-scroller-block-scroll-percentage': undefined;
    }[];
    calcMinHeight(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    headline: {
        default: null;
    };
    subline: {
        type: StringConstructor;
        default: string;
    };
    sublineClasses: {
        type: StringConstructor;
        default: null;
    };
    blocks: ArrayConstructor;
    overlappingSize: StringConstructor;
    skin: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    headline: null;
    subline: string;
    sublineClasses: string;
    skin: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
