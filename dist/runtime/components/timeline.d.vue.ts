declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    headline: ObjectConstructor;
    bgColor: {
        default: null;
    };
    color: {
        default: null;
    };
    entries: ArrayConstructor;
    expanded: {
        default: null;
    };
    spacing: StringConstructor;
    simple: {
        default: null;
    };
    subline: StringConstructor;
}>, {}, {
    lastIndex: null;
    isReady: boolean;
    startDelay: number;
    isVisible: boolean;
    percentageInViewport: number;
    minPercentage: number;
    maxPercentage: number;
    entryContainerStates: never[];
    entryContainerStyles: never[];
}, {
    classList(): (string | undefined)[];
    copyColor(): "var(--color-copy-light)";
    backgroundColor(): "var(--color-gk-dark-blue)";
    style(): string;
    headlineClasses(): string;
    lineEndStyle(): string;
    simpleValue(): boolean;
    iconName(): "strategy-split";
}, {
    bindEvents(): void;
    startAnimation(): void;
    getEntryLineStyle(index: any): string;
    handleScroll(): void;
    updateAnimation(): void;
    setAnimationStart(): void;
    setAnimationEnd(): void;
    showEntryByPercent(percentage: any): void;
    updateNextStep(index: any, percentage: any, stepSize: any): void;
    getEntryContainerClasses(index: any): (string | undefined)[];
    getEntryContainerStyle(index: any): string;
    getScrollPercentage(): number | undefined;
    isInViewport(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    headline: ObjectConstructor;
    bgColor: {
        default: null;
    };
    color: {
        default: null;
    };
    entries: ArrayConstructor;
    expanded: {
        default: null;
    };
    spacing: StringConstructor;
    simple: {
        default: null;
    };
    subline: StringConstructor;
}>> & Readonly<{}>, {
    color: null;
    expanded: null;
    bgColor: null;
    simple: null;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
