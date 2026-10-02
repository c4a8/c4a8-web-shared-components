declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    contact: ObjectConstructor;
    collapsed: BooleanConstructor;
    ajax: BooleanConstructor;
    spacing: StringConstructor;
    quote: {
        type: BooleanConstructor;
        default: boolean;
    };
    bgColor: StringConstructor;
    color: StringConstructor;
    boxBgColor: StringConstructor;
    boxColor: StringConstructor;
    level: StringConstructor;
    headline: StringConstructor;
    subline: StringConstructor;
    form: ObjectConstructor;
    buttons: ArrayConstructor;
    person: ObjectConstructor;
    noTopSpacing: BooleanConstructor;
    light: BooleanConstructor;
    hasGreyBackground: BooleanConstructor;
    svgShape: ObjectConstructor;
    small: {
        type: BooleanConstructor;
        default: boolean;
    };
    quoteColor: {
        type: StringConstructor;
        default: string;
    };
    onSurface: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {
    classList(): (string | string[] | {
        'bg-grey': boolean;
    } | undefined)[];
    contactVariantClass(): string[];
    contactLight(): "" | "contact__person--light";
    contactBoxClass(): "" | "col-md-10 col-lg-5 offset-lg-1 order-2";
    contactPersonClass(): "" | "contact__person--small";
    contactFormClass(): "" | "col-md-10 col-lg-6 order-1";
    contactContainerClass(): string;
    contactRowClass(): string[];
    styleObject(): {
        '--color-contact-background': any;
        '--color-contact-quote-background': any;
        '--contact-copy-color': any;
        '--color-contact-box-background': any;
        '--contact-box-copy-color': any;
    };
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    contact: ObjectConstructor;
    collapsed: BooleanConstructor;
    ajax: BooleanConstructor;
    spacing: StringConstructor;
    quote: {
        type: BooleanConstructor;
        default: boolean;
    };
    bgColor: StringConstructor;
    color: StringConstructor;
    boxBgColor: StringConstructor;
    boxColor: StringConstructor;
    level: StringConstructor;
    headline: StringConstructor;
    subline: StringConstructor;
    form: ObjectConstructor;
    buttons: ArrayConstructor;
    person: ObjectConstructor;
    noTopSpacing: BooleanConstructor;
    light: BooleanConstructor;
    hasGreyBackground: BooleanConstructor;
    svgShape: ObjectConstructor;
    small: {
        type: BooleanConstructor;
        default: boolean;
    };
    quoteColor: {
        type: StringConstructor;
        default: string;
    };
    onSurface: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    small: boolean;
    collapsed: boolean;
    ajax: boolean;
    noTopSpacing: boolean;
    light: boolean;
    hasGreyBackground: boolean;
    quote: boolean;
    quoteColor: string;
    onSurface: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
