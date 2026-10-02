declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    sequence: ObjectConstructor;
    fixed: BooleanConstructor;
    cta: ObjectConstructor;
}>, {}, {
    defaultTextSize: string;
    defaultSublineSize: string;
    timeout: null;
    textTimeout: null;
    letterDelay: number;
    sizeBasedDelay: null;
    minDelay: number;
    currentDelay: number;
    lastDelay: number;
    delayOffset: number;
    sublineDelay: number;
    buttonDelay: number;
    step: number;
    textValue: string;
    currentSubline: string;
    currentSublineSize: null;
    currentTextSize: string;
    currentText: string;
    isEnded: boolean;
    isSecondLast: boolean;
    showSubline: boolean;
    sublineValue: null;
    isCalculated: boolean;
    calculationStep: number;
    calculatedMaxHeight: number;
}, {
    classList(): string[];
    isFixed(): boolean;
    textClassList(): string[];
    sublineClassList(): (string | null)[];
    placeholderSublineClassList(): (string | null)[];
    placeholderTextClassList(): string[];
    placeholderCtaClassList(): string[];
    ctaClassList(): string[];
    sequenceData(): any;
    ctaData(): any;
}, {
    getDelayByValue(value: any): void;
    calculateDelay(): void;
    showButtonAtLastRun(timeout: any): void;
    end(): void;
    next(): void;
    animateText(): void;
    resetText(): void;
    animate(): void;
    typeLetter(letter: any): void;
    calculateNextMaxHeight(): true | undefined;
    handleResize(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    sequence: ObjectConstructor;
    fixed: BooleanConstructor;
    cta: ObjectConstructor;
}>> & Readonly<{}>, {
    fixed: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
