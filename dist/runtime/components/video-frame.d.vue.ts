declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    thumb: StringConstructor;
    alt: StringConstructor;
    id: StringConstructor;
    preset: {
        type: StringConstructor;
        default: string;
    };
    container: {
        type: BooleanConstructor;
        default: boolean;
    };
    corner: {
        type: (ObjectConstructor | BooleanConstructor)[];
        default: boolean;
    };
    spacingTop: {
        type: BooleanConstructor;
        default: boolean;
    };
    fullWidth: {
        type: BooleanConstructor;
        default: boolean;
    };
    headline: {
        type: (ObjectConstructor | BooleanConstructor)[];
        default: boolean;
    };
    sticky: {
        type: BooleanConstructor;
        default: boolean;
    };
    ctaData: {
        type: ObjectConstructor;
    };
    playlist: {
        type: BooleanConstructor;
        default: boolean;
    };
    subtitles: {
        type: StringConstructor;
        default: null;
    };
    color: {
        type: StringConstructor;
    };
    fontSize: {
        type: StringConstructor;
    };
    cover: {
        type: BooleanConstructor;
        default: boolean;
    };
    lightbox: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {
    isPlayed: boolean;
    options: {};
    openIframe: boolean;
}, {
    headlineClasses(): string;
    hasVideo(): boolean;
    parentId(): string;
    targetId(): string;
    stickyClassList(): (string | {
        'video-frame--cover': boolean;
    })[];
    rootClassList(): {
        'video-frame--played': boolean;
    }[];
    containerClass(): (string | {
        'video-frame--played': boolean;
    } | {
        'video-frame__container--spacing': boolean;
        'video-frame--top-overflow': any;
    })[];
    rowClass(): (string | {
        'position-relative': boolean | Record<string, any>;
    })[];
    mainClass(): (string | {
        'video-frame--played': boolean;
    } | {
        'video-frame--full-width': boolean;
    })[];
    stickyStyles(): {
        position: string;
        top: string;
    } | {
        position?: undefined;
        top?: undefined;
    };
    playerClass(): string[];
    cornerClass(): any[];
    rootStyle(): {
        '--video-frame-color': string;
        '--video-frame-headline-color': string;
    };
    videoPlayerOptions(): {
        videoId?: undefined;
        parentSelector?: undefined;
        targetSelector?: undefined;
        isAutoplay?: undefined;
        classMap?: undefined;
    } | {
        videoId: string;
        parentSelector: string;
        targetSelector: string;
        isAutoplay: boolean;
        classMap: {
            toggle: string;
        };
    };
    embedSrc(): string;
    showIframe(): boolean;
    showLightbox(): boolean;
}, {
    handleClick(): void;
    setPlayed(): void;
    handleLightboxClose(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    thumb: StringConstructor;
    alt: StringConstructor;
    id: StringConstructor;
    preset: {
        type: StringConstructor;
        default: string;
    };
    container: {
        type: BooleanConstructor;
        default: boolean;
    };
    corner: {
        type: (ObjectConstructor | BooleanConstructor)[];
        default: boolean;
    };
    spacingTop: {
        type: BooleanConstructor;
        default: boolean;
    };
    fullWidth: {
        type: BooleanConstructor;
        default: boolean;
    };
    headline: {
        type: (ObjectConstructor | BooleanConstructor)[];
        default: boolean;
    };
    sticky: {
        type: BooleanConstructor;
        default: boolean;
    };
    ctaData: {
        type: ObjectConstructor;
    };
    playlist: {
        type: BooleanConstructor;
        default: boolean;
    };
    subtitles: {
        type: StringConstructor;
        default: null;
    };
    color: {
        type: StringConstructor;
    };
    fontSize: {
        type: StringConstructor;
    };
    cover: {
        type: BooleanConstructor;
        default: boolean;
    };
    lightbox: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    headline: boolean | Record<string, any>;
    preset: string;
    sticky: boolean;
    container: boolean;
    cover: boolean;
    lightbox: boolean;
    corner: boolean | Record<string, any>;
    spacingTop: boolean;
    fullWidth: boolean;
    playlist: boolean;
    subtitles: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
