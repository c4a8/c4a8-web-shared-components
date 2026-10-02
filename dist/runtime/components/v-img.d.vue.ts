declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    imgSrcSets: {
        type: (ObjectConstructor | StringConstructor)[];
        default: null;
    };
    img: StringConstructor;
    alt: StringConstructor;
    cloudinary: BooleanConstructor;
    crossorigin: StringConstructor;
    lazy: BooleanConstructor;
    class: StringConstructor;
    preset: StringConstructor;
    lottie: ObjectConstructor;
    lottieSettings: ObjectConstructor;
    animated: BooleanConstructor;
}>, {
    config: {};
}, {
    dimensions: {
        naturalHeight: null;
        naturalWidth: null;
    };
    dimStack: {};
    previousImg: null;
    srcset: string;
    noCloudinary: null;
    sizes: null;
}, {
    classList(): (string | string[])[];
    classListComponent(): string[];
    isLottie(): boolean;
    jsonLottieData(): any;
    jsonLottieSettingsData(): any;
    isCloudinary(): boolean;
    source(): string | null;
    loading(): "lazy" | null;
    crossOriginValue(): string | null;
    hasPictureTag(): boolean;
    pictureWrapperClassList(): any[];
    imgSrcSetValue(): any;
    imgSrcSetSources(): any;
    imgSrcSetImg(): string | null;
}, {
    getSourceSetMedia(srcSet: any): any;
    canGenerateSrcSet(): boolean;
    getSetup(): {
        preset: any;
        transformationsString: string;
    };
    getPreset(): any;
    hasProtocol(): boolean;
    getBaseAssetPath(): string | undefined;
    getCloudinaryBasePathLink(srcSet: any): string;
    getCloudinaryLink(): string;
    getCloudinaryLinkWithTransformation(): string;
    loadImage(link: any): void;
    getTransformationString(preset: any): string;
    buildSrcSet(preset: any, transformationsString: any): void;
    isGif(): boolean | undefined;
    isSvg(): boolean;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    imgSrcSets: {
        type: (ObjectConstructor | StringConstructor)[];
        default: null;
    };
    img: StringConstructor;
    alt: StringConstructor;
    cloudinary: BooleanConstructor;
    crossorigin: StringConstructor;
    lazy: BooleanConstructor;
    class: StringConstructor;
    preset: StringConstructor;
    lottie: ObjectConstructor;
    lottieSettings: ObjectConstructor;
    animated: BooleanConstructor;
}>> & Readonly<{}>, {
    cloudinary: boolean;
    animated: boolean;
    imgSrcSets: string | Record<string, any>;
    lazy: boolean;
}, {}, {}, {}, "imgSrcSetImg", import("vue").ComponentProvideOptions, true, {}, any>;
