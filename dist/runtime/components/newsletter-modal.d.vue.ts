declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    bgColor: {
        type: StringConstructor;
    };
    headline: {
        type: StringConstructor;
    };
    text: {
        type: StringConstructor;
    };
    formular: {
        type: ObjectConstructor;
    };
    lottie: {
        type: ObjectConstructor;
    };
    iconColor: {
        type: StringConstructor;
        default: string;
    };
    confirmation: {
        type: ObjectConstructor;
        default: null;
    };
    light: {
        type: BooleanConstructor;
        default: boolean;
    };
    onSurface: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {
    success: boolean;
    idle: boolean;
    screenXS: boolean;
    heightFixed: string;
    isMobile: boolean;
    isSmall: boolean;
}, {
    formularConfig(): {
        form: any;
    };
    contrastColor(): "var(--color-black)" | "var(--color-gk-white)";
    currentHeadline(): any;
    currentText(): any;
    contentClasses(): string[];
    headlineClasses(): string[];
    formularClasses(): "" | "mt-n5 d-flex justify-content-center align-items-center";
    containerClasses(): string[];
    lottieAnimation(): any;
    lottieSpeed(): 1 | 40;
    lottieSize(): 100 | 120;
    iconHeartDisplay(): "" | "none";
    birdAnimationClass(): "" | "fade-out-animation";
    heartAnimationClass(): "" | "fade-in-animation";
    iconHeartMobileClass(): "" | "mb-11";
}, {
    handleFormSubmit(event: any): void;
    handleSuccess(): void;
    setIdle(): void;
    checkBreakpoint(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    bgColor: {
        type: StringConstructor;
    };
    headline: {
        type: StringConstructor;
    };
    text: {
        type: StringConstructor;
    };
    formular: {
        type: ObjectConstructor;
    };
    lottie: {
        type: ObjectConstructor;
    };
    iconColor: {
        type: StringConstructor;
        default: string;
    };
    confirmation: {
        type: ObjectConstructor;
        default: null;
    };
    light: {
        type: BooleanConstructor;
        default: boolean;
    };
    onSurface: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    light: boolean;
    onSurface: boolean;
    iconColor: string;
    confirmation: Record<string, any>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
