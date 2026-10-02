declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    video: ObjectConstructor;
    variant: StringConstructor;
    spacing: StringConstructor;
    overlapping: StringConstructor;
    level: {
        default: string;
    };
    noAnimation: {
        type: BooleanConstructor;
        default: boolean;
    };
    playlist: {
        type: BooleanConstructor;
        default: boolean;
    };
    subtitles: {
        type: StringConstructor;
        default: null;
    };
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {
    isPlayed: boolean;
    elementClasses: {};
}, {
    videoClass(): any[];
    videoPlayerClass(): any[];
    videoContentClass(): any[];
    videoTextClasses(): string[];
    isCompact(): boolean;
    variantClasses(): "" | "bg-dark" | "col-md-6 order-md-2";
    isVariantRow(): boolean;
    videoParsed(): any;
    onClickVideoContent(): "this.querySelector('a').click()" | null;
    onClick(): "this.querySelector('a').click()" | null;
    videoId(): string;
    videoFrameId(): string;
    headlineClasses(): string;
    dataOptionsLightBox(): string;
    options(): {
        videoId: any;
        parentSelector: string;
        targetSelector: string;
        isAutoplay: boolean;
    };
    dataOptionsRegular(): string;
    dataSrc(): string;
    embedSrc(): string;
    dataCaption(): any;
}, {
    isReversed(): boolean;
    handleButtonClick(): void;
    handleLightboxClick(): void;
    handleLightboxClose(): void;
    handleClose(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    video: ObjectConstructor;
    variant: StringConstructor;
    spacing: StringConstructor;
    overlapping: StringConstructor;
    level: {
        default: string;
    };
    noAnimation: {
        type: BooleanConstructor;
        default: boolean;
    };
    playlist: {
        type: BooleanConstructor;
        default: boolean;
    };
    subtitles: {
        type: StringConstructor;
        default: null;
    };
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    level: string;
    lazy: boolean;
    noAnimation: boolean;
    playlist: boolean;
    subtitles: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
