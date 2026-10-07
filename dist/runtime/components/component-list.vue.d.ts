declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    list: {
        default: null;
        type: ArrayConstructor;
    };
}>, {}, {}, {
    enhancedList(): unknown[];
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    list: {
        default: null;
        type: ArrayConstructor;
    };
}>> & Readonly<{}>, {
    list: unknown[];
}, {}, {
    'blog-recent': import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        bgColor: {
            type: StringConstructor;
            default: string;
        };
        dataAuthors: ObjectConstructor;
        headline: StringConstructor;
        headlineLevel: StringConstructor;
        headlineClasses: StringConstructor;
        subline: StringConstructor;
        sublineClasses: StringConstructor;
        spacing: StringConstructor;
        posts: {
            type: (ArrayConstructor | StringConstructor)[];
            default: never[];
        };
        cta: {
            default: null;
        };
        hideContainer: {
            default: boolean;
        };
        limitEvents: NumberConstructor;
        limit: {
            type: NumberConstructor;
            default: number;
        };
        slider: {
            default: null;
        };
        sliderOptions: ObjectConstructor;
        sticky: {
            default: null;
        };
        events: BooleanConstructor;
        combine: BooleanConstructor;
        caseStudies: BooleanConstructor;
        reversed: BooleanConstructor;
        tag: {
            type: StringConstructor;
            default: null;
        };
    }>, {
        config: {};
        strategy: any;
    }, {
        hideData: string[];
        filesValue: never[];
        sliderInitialized: boolean;
    }, {
        classList(): string[];
        showComponent(): true | {
            limit: number;
            sort: {
                moment: number;
            }[];
            reversed: boolean;
            where: {
                layout: {
                    IN: string[];
                };
                path?: undefined;
            } | {
                path: {
                    LIKE: string[];
                };
                layout?: undefined;
            } | {
                path: {
                    LIKE: string[];
                };
                layout?: undefined;
            } | {
                path: {
                    LIKE: string[];
                };
                layout?: undefined;
            } | {
                layout?: undefined;
                path?: undefined;
            };
            path: string;
            limitEvents: number | undefined;
        };
        query(): {
            limit: number;
            sort: {
                moment: number;
            }[];
            reversed: boolean;
            where: {
                layout: {
                    IN: string[];
                };
                path?: undefined;
            } | {
                path: {
                    LIKE: string[];
                };
                layout?: undefined;
            } | {
                path: {
                    LIKE: string[];
                };
                layout?: undefined;
            } | {
                path: {
                    LIKE: string[];
                };
                layout?: undefined;
            } | {
                layout?: undefined;
                path?: undefined;
            };
            path: string;
            limitEvents: number | undefined;
        };
        getSpacing(): string;
        hasBackground(): string;
        blogRecentContainerClass(): string[];
        hiddenContainer(): boolean;
        skinClass(): string;
        itemClass(): string;
        postsArray(): any;
        carouselOptions(): {
            rows: number;
            slidesToShow: number;
            slidesToScroll: number;
            prevArrow: string;
            nextArrow: string;
            dots: boolean;
            centerMode: boolean;
            infinite: boolean;
            dotsClass: string;
            responsive: ({
                breakpoint: number;
                settings: {
                    slidesToShow: number;
                    slidesToScroll: number;
                    infinite: boolean;
                    centerMode?: undefined;
                    centerPadding?: undefined;
                    dots?: undefined;
                };
            } | {
                breakpoint: number;
                settings: {
                    centerMode: boolean;
                    infinite: boolean;
                    centerPadding: string;
                    slidesToShow: number;
                    slidesToScroll: number;
                    dots: boolean;
                };
            })[];
        };
        headlineLevelValue(): string;
        headlineClassesValue(): string;
        sublineClassesValue(): string;
        imgUrl(): any;
    }, {
        scheduleInit(): void;
        init(): void;
        event(post: any): boolean;
        blogTitleUrl(post: any): any;
        target(post: any): "_blank" | "_self";
        postUrl(post: any): any;
        excerpt(post: any): any;
        updateFiles(files: any): boolean;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        bgColor: {
            type: StringConstructor;
            default: string;
        };
        dataAuthors: ObjectConstructor;
        headline: StringConstructor;
        headlineLevel: StringConstructor;
        headlineClasses: StringConstructor;
        subline: StringConstructor;
        sublineClasses: StringConstructor;
        spacing: StringConstructor;
        posts: {
            type: (ArrayConstructor | StringConstructor)[];
            default: never[];
        };
        cta: {
            default: null;
        };
        hideContainer: {
            default: boolean;
        };
        limitEvents: NumberConstructor;
        limit: {
            type: NumberConstructor;
            default: number;
        };
        slider: {
            default: null;
        };
        sliderOptions: ObjectConstructor;
        sticky: {
            default: null;
        };
        events: BooleanConstructor;
        combine: BooleanConstructor;
        caseStudies: BooleanConstructor;
        reversed: BooleanConstructor;
        tag: {
            type: StringConstructor;
            default: null;
        };
    }>> & Readonly<{}>, {
        limit: number;
        sticky: null;
        cta: null;
        posts: string | unknown[];
        events: boolean;
        reversed: boolean;
        combine: boolean;
        caseStudies: boolean;
        bgColor: string;
        hideContainer: boolean;
        slider: null;
        tag: string;
    }, {}, {
        MarkdownFiles: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            list: ArrayConstructor;
            hideData: {
                type: ArrayConstructor;
                default: () => never[];
            };
            sort: ObjectConstructor;
            limit: NumberConstructor;
            query: ObjectConstructor;
            isRecent: BooleanConstructor;
            hideItems: {
                type: FunctionConstructor;
                default: null;
            };
            strategy: {
                type: StringConstructor;
            };
        }>, {
            currentLocale: string;
        }, {}, {
            structuredList(): {
                url: any;
                date: any;
                moment: any;
                excerpt: any;
            }[] | undefined;
        }, {
            addPathPrefix(path: any, lang: any, strategy: any): any;
            extractDate(path: any): any;
            getDate(dateString: any): any;
            isDate(dateString: any): boolean | null;
            cleanDate(date: any): any;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            list: ArrayConstructor;
            hideData: {
                type: ArrayConstructor;
                default: () => never[];
            };
            sort: ObjectConstructor;
            limit: NumberConstructor;
            query: ObjectConstructor;
            isRecent: BooleanConstructor;
            hideItems: {
                type: FunctionConstructor;
                default: null;
            };
            strategy: {
                type: StringConstructor;
            };
        }>> & Readonly<{}>, {
            isRecent: boolean;
            hideData: unknown[];
            hideItems: Function;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    quotes: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        quotes: {
            type: ObjectConstructor;
            required: true;
        };
        spacing: {
            type: StringConstructor;
            default: string;
        };
        noFullscreen: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, {}, {}, {
        quotesSpacing(): string;
        quotesNoFullscreen(): boolean;
        quotesImagesCount(): any;
        quotesImage(): boolean;
        quotesSlidesToShow(): 1 | 1.05;
        quotesColSize(): number;
        slickOptions(): {
            rows: number;
            centerMode: boolean;
            centerPadding: string;
            prevArrow: string;
            nextArrow: string;
            dots: boolean;
            dotsClass: string;
            slidesToShow: number;
            slidesToScroll: number;
            infinite: boolean;
            responsive: {
                breakpoint: number;
                settings: {
                    slidesToShow: number;
                };
            }[];
        };
    }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        quotes: {
            type: ObjectConstructor;
            required: true;
        };
        spacing: {
            type: StringConstructor;
            default: string;
        };
        noFullscreen: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        spacing: string;
        noFullscreen: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
