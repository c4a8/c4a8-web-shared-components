declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    post: {
        type: ObjectConstructor;
        required: true;
    };
    shareUrl: {
        type: StringConstructor;
        default: string;
    };
    noHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    noTags: {
        type: BooleanConstructor;
        default: boolean;
    };
    isTechArticle: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    authors: any;
    isAtEnd: import("vue").Ref<boolean, boolean>;
    endPoint: import("vue").Ref<null, null>;
    stickyContentHeight: import("vue").Ref<number, number>;
    store: import("pinia").Store<"app", {
        loading: boolean;
        hero: {};
        page: {
            isLoaded: boolean;
        };
        header: {
            isScrolled: boolean;
            isLight: boolean;
            isHovering: boolean;
            isProduct: boolean;
            isExpanded: boolean;
            isBlending: boolean;
            isUpdating: boolean;
            navigation: null;
            meta: null;
            contact: null;
            button: null;
            search: boolean;
            theme: null;
            showSecondaryNavigation: boolean;
        };
    }, {
        getLoading: (state: {
            loading: boolean;
            hero: {};
            page: {
                isLoaded: boolean;
            };
            header: {
                isScrolled: boolean;
                isLight: boolean;
                isHovering: boolean;
                isProduct: boolean;
                isExpanded: boolean;
                isBlending: boolean;
                isUpdating: boolean;
                navigation: null;
                meta: null;
                contact: null;
                button: null;
                search: boolean;
                theme: null;
                showSecondaryNavigation: boolean;
            };
        } & import("pinia").PiniaCustomStateProperties<{
            loading: boolean;
            hero: {};
            page: {
                isLoaded: boolean;
            };
            header: {
                isScrolled: boolean;
                isLight: boolean;
                isHovering: boolean;
                isProduct: boolean;
                isExpanded: boolean;
                isBlending: boolean;
                isUpdating: boolean;
                navigation: null;
                meta: null;
                contact: null;
                button: null;
                search: boolean;
                theme: null;
                showSecondaryNavigation: boolean;
            };
        }>) => boolean;
        getHero: (state: {
            loading: boolean;
            hero: {};
            page: {
                isLoaded: boolean;
            };
            header: {
                isScrolled: boolean;
                isLight: boolean;
                isHovering: boolean;
                isProduct: boolean;
                isExpanded: boolean;
                isBlending: boolean;
                isUpdating: boolean;
                navigation: null;
                meta: null;
                contact: null;
                button: null;
                search: boolean;
                theme: null;
                showSecondaryNavigation: boolean;
            };
        } & import("pinia").PiniaCustomStateProperties<{
            loading: boolean;
            hero: {};
            page: {
                isLoaded: boolean;
            };
            header: {
                isScrolled: boolean;
                isLight: boolean;
                isHovering: boolean;
                isProduct: boolean;
                isExpanded: boolean;
                isBlending: boolean;
                isUpdating: boolean;
                navigation: null;
                meta: null;
                contact: null;
                button: null;
                search: boolean;
                theme: null;
                showSecondaryNavigation: boolean;
            };
        }>) => {};
        getPage: (state: {
            loading: boolean;
            hero: {};
            page: {
                isLoaded: boolean;
            };
            header: {
                isScrolled: boolean;
                isLight: boolean;
                isHovering: boolean;
                isProduct: boolean;
                isExpanded: boolean;
                isBlending: boolean;
                isUpdating: boolean;
                navigation: null;
                meta: null;
                contact: null;
                button: null;
                search: boolean;
                theme: null;
                showSecondaryNavigation: boolean;
            };
        } & import("pinia").PiniaCustomStateProperties<{
            loading: boolean;
            hero: {};
            page: {
                isLoaded: boolean;
            };
            header: {
                isScrolled: boolean;
                isLight: boolean;
                isHovering: boolean;
                isProduct: boolean;
                isExpanded: boolean;
                isBlending: boolean;
                isUpdating: boolean;
                navigation: null;
                meta: null;
                contact: null;
                button: null;
                search: boolean;
                theme: null;
                showSecondaryNavigation: boolean;
            };
        }>) => {
            isLoaded: boolean;
        };
        getHeader: (state: {
            loading: boolean;
            hero: {};
            page: {
                isLoaded: boolean;
            };
            header: {
                isScrolled: boolean;
                isLight: boolean;
                isHovering: boolean;
                isProduct: boolean;
                isExpanded: boolean;
                isBlending: boolean;
                isUpdating: boolean;
                navigation: null;
                meta: null;
                contact: null;
                button: null;
                search: boolean;
                theme: null;
                showSecondaryNavigation: boolean;
            };
        } & import("pinia").PiniaCustomStateProperties<{
            loading: boolean;
            hero: {};
            page: {
                isLoaded: boolean;
            };
            header: {
                isScrolled: boolean;
                isLight: boolean;
                isHovering: boolean;
                isProduct: boolean;
                isExpanded: boolean;
                isBlending: boolean;
                isUpdating: boolean;
                navigation: null;
                meta: null;
                contact: null;
                button: null;
                search: boolean;
                theme: null;
                showSecondaryNavigation: boolean;
            };
        }>) => {
            isScrolled: boolean;
            isLight: boolean;
            isHovering: boolean;
            isProduct: boolean;
            isExpanded: boolean;
            isBlending: boolean;
            isUpdating: boolean;
            navigation: null;
            meta: null;
            contact: null;
            button: null;
            search: boolean;
            theme: null;
            showSecondaryNavigation: boolean;
        };
        isHeaderScrolled: (state: {
            loading: boolean;
            hero: {};
            page: {
                isLoaded: boolean;
            };
            header: {
                isScrolled: boolean;
                isLight: boolean;
                isHovering: boolean;
                isProduct: boolean;
                isExpanded: boolean;
                isBlending: boolean;
                isUpdating: boolean;
                navigation: null;
                meta: null;
                contact: null;
                button: null;
                search: boolean;
                theme: null;
                showSecondaryNavigation: boolean;
            };
        } & import("pinia").PiniaCustomStateProperties<{
            loading: boolean;
            hero: {};
            page: {
                isLoaded: boolean;
            };
            header: {
                isScrolled: boolean;
                isLight: boolean;
                isHovering: boolean;
                isProduct: boolean;
                isExpanded: boolean;
                isBlending: boolean;
                isUpdating: boolean;
                navigation: null;
                meta: null;
                contact: null;
                button: null;
                search: boolean;
                theme: null;
                showSecondaryNavigation: boolean;
            };
        }>) => boolean;
        isHeaderLight: (state: {
            loading: boolean;
            hero: {};
            page: {
                isLoaded: boolean;
            };
            header: {
                isScrolled: boolean;
                isLight: boolean;
                isHovering: boolean;
                isProduct: boolean;
                isExpanded: boolean;
                isBlending: boolean;
                isUpdating: boolean;
                navigation: null;
                meta: null;
                contact: null;
                button: null;
                search: boolean;
                theme: null;
                showSecondaryNavigation: boolean;
            };
        } & import("pinia").PiniaCustomStateProperties<{
            loading: boolean;
            hero: {};
            page: {
                isLoaded: boolean;
            };
            header: {
                isScrolled: boolean;
                isLight: boolean;
                isHovering: boolean;
                isProduct: boolean;
                isExpanded: boolean;
                isBlending: boolean;
                isUpdating: boolean;
                navigation: null;
                meta: null;
                contact: null;
                button: null;
                search: boolean;
                theme: null;
                showSecondaryNavigation: boolean;
            };
        }>) => boolean;
        isHeaderHovering: (state: {
            loading: boolean;
            hero: {};
            page: {
                isLoaded: boolean;
            };
            header: {
                isScrolled: boolean;
                isLight: boolean;
                isHovering: boolean;
                isProduct: boolean;
                isExpanded: boolean;
                isBlending: boolean;
                isUpdating: boolean;
                navigation: null;
                meta: null;
                contact: null;
                button: null;
                search: boolean;
                theme: null;
                showSecondaryNavigation: boolean;
            };
        } & import("pinia").PiniaCustomStateProperties<{
            loading: boolean;
            hero: {};
            page: {
                isLoaded: boolean;
            };
            header: {
                isScrolled: boolean;
                isLight: boolean;
                isHovering: boolean;
                isProduct: boolean;
                isExpanded: boolean;
                isBlending: boolean;
                isUpdating: boolean;
                navigation: null;
                meta: null;
                contact: null;
                button: null;
                search: boolean;
                theme: null;
                showSecondaryNavigation: boolean;
            };
        }>) => boolean;
        isHeaderProduct: (state: {
            loading: boolean;
            hero: {};
            page: {
                isLoaded: boolean;
            };
            header: {
                isScrolled: boolean;
                isLight: boolean;
                isHovering: boolean;
                isProduct: boolean;
                isExpanded: boolean;
                isBlending: boolean;
                isUpdating: boolean;
                navigation: null;
                meta: null;
                contact: null;
                button: null;
                search: boolean;
                theme: null;
                showSecondaryNavigation: boolean;
            };
        } & import("pinia").PiniaCustomStateProperties<{
            loading: boolean;
            hero: {};
            page: {
                isLoaded: boolean;
            };
            header: {
                isScrolled: boolean;
                isLight: boolean;
                isHovering: boolean;
                isProduct: boolean;
                isExpanded: boolean;
                isBlending: boolean;
                isUpdating: boolean;
                navigation: null;
                meta: null;
                contact: null;
                button: null;
                search: boolean;
                theme: null;
                showSecondaryNavigation: boolean;
            };
        }>) => boolean;
        isHeaderExpanded: (state: {
            loading: boolean;
            hero: {};
            page: {
                isLoaded: boolean;
            };
            header: {
                isScrolled: boolean;
                isLight: boolean;
                isHovering: boolean;
                isProduct: boolean;
                isExpanded: boolean;
                isBlending: boolean;
                isUpdating: boolean;
                navigation: null;
                meta: null;
                contact: null;
                button: null;
                search: boolean;
                theme: null;
                showSecondaryNavigation: boolean;
            };
        } & import("pinia").PiniaCustomStateProperties<{
            loading: boolean;
            hero: {};
            page: {
                isLoaded: boolean;
            };
            header: {
                isScrolled: boolean;
                isLight: boolean;
                isHovering: boolean;
                isProduct: boolean;
                isExpanded: boolean;
                isBlending: boolean;
                isUpdating: boolean;
                navigation: null;
                meta: null;
                contact: null;
                button: null;
                search: boolean;
                theme: null;
                showSecondaryNavigation: boolean;
            };
        }>) => boolean;
        isHeaderBlending: (state: {
            loading: boolean;
            hero: {};
            page: {
                isLoaded: boolean;
            };
            header: {
                isScrolled: boolean;
                isLight: boolean;
                isHovering: boolean;
                isProduct: boolean;
                isExpanded: boolean;
                isBlending: boolean;
                isUpdating: boolean;
                navigation: null;
                meta: null;
                contact: null;
                button: null;
                search: boolean;
                theme: null;
                showSecondaryNavigation: boolean;
            };
        } & import("pinia").PiniaCustomStateProperties<{
            loading: boolean;
            hero: {};
            page: {
                isLoaded: boolean;
            };
            header: {
                isScrolled: boolean;
                isLight: boolean;
                isHovering: boolean;
                isProduct: boolean;
                isExpanded: boolean;
                isBlending: boolean;
                isUpdating: boolean;
                navigation: null;
                meta: null;
                contact: null;
                button: null;
                search: boolean;
                theme: null;
                showSecondaryNavigation: boolean;
            };
        }>) => boolean;
        isHeaderUpdating: (state: {
            loading: boolean;
            hero: {};
            page: {
                isLoaded: boolean;
            };
            header: {
                isScrolled: boolean;
                isLight: boolean;
                isHovering: boolean;
                isProduct: boolean;
                isExpanded: boolean;
                isBlending: boolean;
                isUpdating: boolean;
                navigation: null;
                meta: null;
                contact: null;
                button: null;
                search: boolean;
                theme: null;
                showSecondaryNavigation: boolean;
            };
        } & import("pinia").PiniaCustomStateProperties<{
            loading: boolean;
            hero: {};
            page: {
                isLoaded: boolean;
            };
            header: {
                isScrolled: boolean;
                isLight: boolean;
                isHovering: boolean;
                isProduct: boolean;
                isExpanded: boolean;
                isBlending: boolean;
                isUpdating: boolean;
                navigation: null;
                meta: null;
                contact: null;
                button: null;
                search: boolean;
                theme: null;
                showSecondaryNavigation: boolean;
            };
        }>) => boolean;
        getHeaderNavigation: (state: {
            loading: boolean;
            hero: {};
            page: {
                isLoaded: boolean;
            };
            header: {
                isScrolled: boolean;
                isLight: boolean;
                isHovering: boolean;
                isProduct: boolean;
                isExpanded: boolean;
                isBlending: boolean;
                isUpdating: boolean;
                navigation: null;
                meta: null;
                contact: null;
                button: null;
                search: boolean;
                theme: null;
                showSecondaryNavigation: boolean;
            };
        } & import("pinia").PiniaCustomStateProperties<{
            loading: boolean;
            hero: {};
            page: {
                isLoaded: boolean;
            };
            header: {
                isScrolled: boolean;
                isLight: boolean;
                isHovering: boolean;
                isProduct: boolean;
                isExpanded: boolean;
                isBlending: boolean;
                isUpdating: boolean;
                navigation: null;
                meta: null;
                contact: null;
                button: null;
                search: boolean;
                theme: null;
                showSecondaryNavigation: boolean;
            };
        }>) => null;
        getHeaderMeta: (state: {
            loading: boolean;
            hero: {};
            page: {
                isLoaded: boolean;
            };
            header: {
                isScrolled: boolean;
                isLight: boolean;
                isHovering: boolean;
                isProduct: boolean;
                isExpanded: boolean;
                isBlending: boolean;
                isUpdating: boolean;
                navigation: null;
                meta: null;
                contact: null;
                button: null;
                search: boolean;
                theme: null;
                showSecondaryNavigation: boolean;
            };
        } & import("pinia").PiniaCustomStateProperties<{
            loading: boolean;
            hero: {};
            page: {
                isLoaded: boolean;
            };
            header: {
                isScrolled: boolean;
                isLight: boolean;
                isHovering: boolean;
                isProduct: boolean;
                isExpanded: boolean;
                isBlending: boolean;
                isUpdating: boolean;
                navigation: null;
                meta: null;
                contact: null;
                button: null;
                search: boolean;
                theme: null;
                showSecondaryNavigation: boolean;
            };
        }>) => null;
        getHeaderContact: (state: {
            loading: boolean;
            hero: {};
            page: {
                isLoaded: boolean;
            };
            header: {
                isScrolled: boolean;
                isLight: boolean;
                isHovering: boolean;
                isProduct: boolean;
                isExpanded: boolean;
                isBlending: boolean;
                isUpdating: boolean;
                navigation: null;
                meta: null;
                contact: null;
                button: null;
                search: boolean;
                theme: null;
                showSecondaryNavigation: boolean;
            };
        } & import("pinia").PiniaCustomStateProperties<{
            loading: boolean;
            hero: {};
            page: {
                isLoaded: boolean;
            };
            header: {
                isScrolled: boolean;
                isLight: boolean;
                isHovering: boolean;
                isProduct: boolean;
                isExpanded: boolean;
                isBlending: boolean;
                isUpdating: boolean;
                navigation: null;
                meta: null;
                contact: null;
                button: null;
                search: boolean;
                theme: null;
                showSecondaryNavigation: boolean;
            };
        }>) => null;
        getHeaderButton: (state: {
            loading: boolean;
            hero: {};
            page: {
                isLoaded: boolean;
            };
            header: {
                isScrolled: boolean;
                isLight: boolean;
                isHovering: boolean;
                isProduct: boolean;
                isExpanded: boolean;
                isBlending: boolean;
                isUpdating: boolean;
                navigation: null;
                meta: null;
                contact: null;
                button: null;
                search: boolean;
                theme: null;
                showSecondaryNavigation: boolean;
            };
        } & import("pinia").PiniaCustomStateProperties<{
            loading: boolean;
            hero: {};
            page: {
                isLoaded: boolean;
            };
            header: {
                isScrolled: boolean;
                isLight: boolean;
                isHovering: boolean;
                isProduct: boolean;
                isExpanded: boolean;
                isBlending: boolean;
                isUpdating: boolean;
                navigation: null;
                meta: null;
                contact: null;
                button: null;
                search: boolean;
                theme: null;
                showSecondaryNavigation: boolean;
            };
        }>) => null;
        getHeaderSearch: (state: {
            loading: boolean;
            hero: {};
            page: {
                isLoaded: boolean;
            };
            header: {
                isScrolled: boolean;
                isLight: boolean;
                isHovering: boolean;
                isProduct: boolean;
                isExpanded: boolean;
                isBlending: boolean;
                isUpdating: boolean;
                navigation: null;
                meta: null;
                contact: null;
                button: null;
                search: boolean;
                theme: null;
                showSecondaryNavigation: boolean;
            };
        } & import("pinia").PiniaCustomStateProperties<{
            loading: boolean;
            hero: {};
            page: {
                isLoaded: boolean;
            };
            header: {
                isScrolled: boolean;
                isLight: boolean;
                isHovering: boolean;
                isProduct: boolean;
                isExpanded: boolean;
                isBlending: boolean;
                isUpdating: boolean;
                navigation: null;
                meta: null;
                contact: null;
                button: null;
                search: boolean;
                theme: null;
                showSecondaryNavigation: boolean;
            };
        }>) => boolean;
        getHeaderTheme: (state: {
            loading: boolean;
            hero: {};
            page: {
                isLoaded: boolean;
            };
            header: {
                isScrolled: boolean;
                isLight: boolean;
                isHovering: boolean;
                isProduct: boolean;
                isExpanded: boolean;
                isBlending: boolean;
                isUpdating: boolean;
                navigation: null;
                meta: null;
                contact: null;
                button: null;
                search: boolean;
                theme: null;
                showSecondaryNavigation: boolean;
            };
        } & import("pinia").PiniaCustomStateProperties<{
            loading: boolean;
            hero: {};
            page: {
                isLoaded: boolean;
            };
            header: {
                isScrolled: boolean;
                isLight: boolean;
                isHovering: boolean;
                isProduct: boolean;
                isExpanded: boolean;
                isBlending: boolean;
                isUpdating: boolean;
                navigation: null;
                meta: null;
                contact: null;
                button: null;
                search: boolean;
                theme: null;
                showSecondaryNavigation: boolean;
            };
        }>) => null;
        getHeaderSecondaryNavigation: (state: {
            loading: boolean;
            hero: {};
            page: {
                isLoaded: boolean;
            };
            header: {
                isScrolled: boolean;
                isLight: boolean;
                isHovering: boolean;
                isProduct: boolean;
                isExpanded: boolean;
                isBlending: boolean;
                isUpdating: boolean;
                navigation: null;
                meta: null;
                contact: null;
                button: null;
                search: boolean;
                theme: null;
                showSecondaryNavigation: boolean;
            };
        } & import("pinia").PiniaCustomStateProperties<{
            loading: boolean;
            hero: {};
            page: {
                isLoaded: boolean;
            };
            header: {
                isScrolled: boolean;
                isLight: boolean;
                isHovering: boolean;
                isProduct: boolean;
                isExpanded: boolean;
                isBlending: boolean;
                isUpdating: boolean;
                navigation: null;
                meta: null;
                contact: null;
                button: null;
                search: boolean;
                theme: null;
                showSecondaryNavigation: boolean;
            };
        }>) => boolean;
        getPageIsLoaded: (state: {
            loading: boolean;
            hero: {};
            page: {
                isLoaded: boolean;
            };
            header: {
                isScrolled: boolean;
                isLight: boolean;
                isHovering: boolean;
                isProduct: boolean;
                isExpanded: boolean;
                isBlending: boolean;
                isUpdating: boolean;
                navigation: null;
                meta: null;
                contact: null;
                button: null;
                search: boolean;
                theme: null;
                showSecondaryNavigation: boolean;
            };
        } & import("pinia").PiniaCustomStateProperties<{
            loading: boolean;
            hero: {};
            page: {
                isLoaded: boolean;
            };
            header: {
                isScrolled: boolean;
                isLight: boolean;
                isHovering: boolean;
                isProduct: boolean;
                isExpanded: boolean;
                isBlending: boolean;
                isUpdating: boolean;
                navigation: null;
                meta: null;
                contact: null;
                button: null;
                search: boolean;
                theme: null;
                showSecondaryNavigation: boolean;
            };
        }>) => boolean;
    }, {
        setLoading(loading: any): void;
        setHero(hero: any): void;
        setPage(page: any): void;
        setHeader(header: any): void;
        setHeaderScrolled(isScrolled: any): void;
        setHeaderLight(isLight: any): void;
        setHeaderHovering(isHovering: any): void;
        setHeaderProduct(isProduct: any): void;
        setHeaderExpanded(isExpanded: any): void;
        setHeaderBlending(isBlending: any): void;
        setHeaderUpdating(isUpdating: any): void;
        setHeaderNavigation(navigation: any): void;
        setHeaderMeta(meta: any): void;
        setHeaderContact(contact: any): void;
        setHeaderButton(button: any): void;
        setHeaderSearch(search: any): void;
        setHeaderTheme(theme: any): void;
        setHeaderSecondaryNavigation(showSecondaryNavigation: any): void;
        resetHeader(): void;
        setPageIsLoaded(isLoaded: any): void;
    }>;
    ContentRendererLink: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
            href?: any;
        }> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            href?: any;
        }> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<{
        href?: any;
    }> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            default?: (props: {}) => any;
        };
    });
}, {
    shouldShowStickyBlocks: boolean;
}, {
    contentWidth(): (string | null)[];
    tagsWidth(): "full-width content-grid--side-bar" | null;
    stickyOffsetTop(): 100 | 124;
    asideNavValue(): any;
    enhancedPost(): {
        body: any;
        url: any;
        date: any;
        moment: any;
        excerpt: any;
        headlineText: any;
        author: any;
    } | null;
    normalizedPost(): {
        url: any;
        date: any;
        moment: any;
        excerpt: any;
        headlineText: any;
        author: any;
    } | null;
    avatars(): any;
    blogImagePath(): string;
    formattedDate(): string;
    formattedDateXml(): string;
}, {
    checkStickyBlocks(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    post: {
        type: ObjectConstructor;
        required: true;
    };
    shareUrl: {
        type: StringConstructor;
        default: string;
    };
    noHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    noTags: {
        type: BooleanConstructor;
        default: boolean;
    };
    isTechArticle: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    shareUrl: string;
    noHeader: boolean;
    noTags: boolean;
    isTechArticle: boolean;
}, {}, {
    ContentRendererLink: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
            href?: any;
        }> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            href?: any;
        }> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<{
        href?: any;
    }> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            default?: (props: {}) => any;
        };
    });
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
