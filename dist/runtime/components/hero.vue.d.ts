declare namespace _default {
    let tagName: string;
    let components: {
        'hero-pattern': {
            tagName: string;
            template: string;
        };
    };
    function setup(): {
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
    };
    function data(): {
        introHeight: null;
        style: null;
        isUpperBreakpoint: null;
    };
    function created(): void;
    function mounted(): void;
    function beforeDestroy(): void;
    namespace methods {
        function preloadKeyAsset(): void;
        function handleResize(): void;
        function setStyle(): void;
        function setIntroStyle(): void;
        function handleLetterSwitcherEnded(): void;
    }
    namespace computed {
        function classList(): (string | (() => any))[];
        function shape(): any;
        function overlineClassList(): string[];
        function contentClassList(): (string | (() => any))[];
        function cta(): any;
        function isLight(): any;
        function isLightOverline(): any;
        function background(): any;
        function bgColor(): any;
        function bgWidth(): any;
        function overline(): any;
        function overlineBgColor(): any;
        function overlineFull(): any;
        function subline(): any;
        function headlineText(): any;
        function headlineClasses(): any;
        function headlineClassList(): (string | (() => any))[];
        function textShadow(): any;
        function level(): any;
        function animation(): any;
        function letterSwitcher(): any;
        function icon(): any;
        function fullscreen(): boolean;
        function spacing(): any;
        function img(): any;
        function hasStickyScroller(): any;
        function lottieSettings(): any;
        function lottieFileData(): any;
        function showShape(): any;
        function shapeFullscreen(): boolean;
        function shapeOffsetY(): any;
        function shapeOffsetX(): any;
        function shapeStyle(): {
            '--hero-shape-offset-y': () => any;
            '--hero-shape-offset-x': () => any;
        };
        function shapeBottom(): any;
        function shapeTop(): any;
        function shapeMobileOrder(): any;
        function shapePosition(): "hero--shape-top" | "hero--shape-bottom" | "hero--shape-center" | null;
        function shapeInContentMobile(): boolean;
        function shapeInContentValue(): boolean;
        function shapeInContent(): boolean;
        function shapeClasses(): any;
        function shapeIsSVG(): any;
        function variant(): any;
        function pattern(): any;
        function ctaList(): any;
        function showShapeContainer(): () => any;
        function isCentered(): boolean;
        function isSmall(): boolean;
        function imgSrcSets(): "heroStudy" | null;
        function badges(): any;
        function hasBack(): any;
        function heroJson(): any;
    }
    namespace props {
        let hero: ObjectConstructor;
        let lottieData: StringConstructor;
    }
}
export default _default;
