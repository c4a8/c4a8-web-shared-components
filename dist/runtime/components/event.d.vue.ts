declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    title: StringConstructor;
    date: StringConstructor;
    moment: StringConstructor;
    category: StringConstructor;
    text: StringConstructor;
    excerpt: StringConstructor;
    image: ObjectConstructor;
    bgColor: StringConstructor;
    color: StringConstructor;
    time: StringConstructor;
    timeColor: StringConstructor;
    classes: StringConstructor;
    url: StringConstructor;
    external: BooleanConstructor;
}>, {}, {
    hasMultipleDays: boolean;
}, {
    style(): string;
    textWithAmpersand(): string | undefined;
    normalizedDate(): string | undefined;
    normalizedText(): string | undefined;
    validDate(): Date | null;
    dateDay(): string | number | undefined;
    dateMonth(): string | undefined;
    dateWeekDay(): string | undefined;
    imageValue(): any;
    cloudinary(): any;
    timeValue(): any;
}, {
    handleClick(): Window | null | undefined;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    title: StringConstructor;
    date: StringConstructor;
    moment: StringConstructor;
    category: StringConstructor;
    text: StringConstructor;
    excerpt: StringConstructor;
    image: ObjectConstructor;
    bgColor: StringConstructor;
    color: StringConstructor;
    time: StringConstructor;
    timeColor: StringConstructor;
    classes: StringConstructor;
    url: StringConstructor;
    external: BooleanConstructor;
}>> & Readonly<{}>, {
    external: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
