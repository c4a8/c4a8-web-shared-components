declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    animation: ObjectConstructor;
    icon: StringConstructor;
    iconColor: StringConstructor;
    fixed: BooleanConstructor;
    cta: ObjectConstructor;
    classes: StringConstructor;
}>, {}, {
    textAnimationStep: number;
    isEnded: boolean;
    isSecondLast: boolean;
}, {
    animationData(): any;
    sequence(): any;
    classList(): (string | undefined)[];
    isFixed(): boolean;
    iconClassList(): string;
}, {
    handleTextAnimationState(state: any): void;
    handleTextAnimationEnded(event: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    animation: ObjectConstructor;
    icon: StringConstructor;
    iconColor: StringConstructor;
    fixed: BooleanConstructor;
    cta: ObjectConstructor;
    classes: StringConstructor;
}>> & Readonly<{}>, {
    fixed: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
