declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    textStart: StringConstructor;
    textEnd: StringConstructor;
    overlineStart: StringConstructor;
    overlineEnd: StringConstructor;
}>, {}, {
    show: boolean;
    end: boolean;
    overline: string;
    endDelay: number;
    startDelay: number;
    isLower: null;
}, {
    classList(): string[];
    fontSize(): "font-size-5" | "font-size-6 bold";
    letterSwitchEndClassList(): string[];
    letterSwitchAnimationClassList(): string[];
}, {
    bindEvents(): void;
    handleResize(): void;
    isLowerBreakpoint(): boolean;
    setHeight(): void;
    startAnimation(): void;
    showEndAnimation(): void;
    switchOverline(callback: any): void;
    emitEnded(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    textStart: StringConstructor;
    textEnd: StringConstructor;
    overlineStart: StringConstructor;
    overlineEnd: StringConstructor;
}>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
