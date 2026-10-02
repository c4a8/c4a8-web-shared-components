declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    icon: {
        type: StringConstructor;
        default: string;
    };
    modal: {
        type: ObjectConstructor;
        default: null;
    };
    noSticky: {
        type: BooleanConstructor;
        default: boolean;
    };
    bgColor: {
        type: StringConstructor;
        default: null;
    };
    iconColor: {
        type: StringConstructor;
        default: null;
    };
    trigger: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
}>, {}, {
    resetDelay: number;
    isExpanded: boolean;
    hasTrigger: boolean;
    expandedClass: string;
    offScreenClass: string;
    hasTriggerClass: string;
}, {
    classList(): (string | {
        [x: string]: boolean;
    })[];
    iconStyle(): {
        '--color-fab-background': string;
        color: string;
    };
}, {
    init(): void;
    bindEvents(): void;
    bindTriggerEvent(): void;
    handleTriggerClick(e: any): void;
    handleOutsideClick(e: any): void;
    handleSubmit(): void;
    handleClose(): void;
    handleClick(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    icon: {
        type: StringConstructor;
        default: string;
    };
    modal: {
        type: ObjectConstructor;
        default: null;
    };
    noSticky: {
        type: BooleanConstructor;
        default: boolean;
    };
    bgColor: {
        type: StringConstructor;
        default: null;
    };
    iconColor: {
        type: StringConstructor;
        default: null;
    };
    trigger: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
}>> & Readonly<{}>, {
    modal: Record<string, any>;
    icon: string;
    bgColor: string;
    trigger: string | number;
    noSticky: boolean;
    iconColor: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
