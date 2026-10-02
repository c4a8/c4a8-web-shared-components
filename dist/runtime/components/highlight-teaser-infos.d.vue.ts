declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    pagination: BooleanConstructor;
    lastIndex: NumberConstructor;
    index: NumberConstructor;
    currentPage: NumberConstructor;
    lastPage: NumberConstructor;
    entry: ObjectConstructor;
    entries: ArrayConstructor;
    prev: FunctionConstructor;
    next: FunctionConstructor;
    isFirstEntry: BooleanConstructor;
    isLastEntry: BooleanConstructor;
    reducedAnimation: BooleanConstructor;
}>, {}, {
    isFadingOut: boolean;
    isFadingIn: boolean;
    currentIndex: number;
    timeout: null;
    timeoutDelay: number;
    reducedTimeoutDelay: number;
    skipTransitionEnd: boolean;
}, {
    logo(): any;
    currentEntry(): unknown;
    isInAnimation(): boolean;
    isFirstEntryOrInAnimation(): boolean;
    isLastEntryOrInAnimation(): boolean;
}, {
    emitTransitionEnd(): void;
    resetTransitions(): void;
    handleTransitionEnd(): void;
    resetTranstitionsFallback(): void;
    update(forced?: boolean): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    pagination: BooleanConstructor;
    lastIndex: NumberConstructor;
    index: NumberConstructor;
    currentPage: NumberConstructor;
    lastPage: NumberConstructor;
    entry: ObjectConstructor;
    entries: ArrayConstructor;
    prev: FunctionConstructor;
    next: FunctionConstructor;
    isFirstEntry: BooleanConstructor;
    isLastEntry: BooleanConstructor;
    reducedAnimation: BooleanConstructor;
}>> & Readonly<{}>, {
    pagination: boolean;
    isFirstEntry: boolean;
    isLastEntry: boolean;
    reducedAnimation: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
