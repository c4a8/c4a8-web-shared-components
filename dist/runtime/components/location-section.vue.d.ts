declare namespace _default {
    let tagName: string;
    namespace props {
        let headline: StringConstructor;
        let overline: StringConstructor;
        let locationEntries: ObjectConstructor;
        let locationCta: ObjectConstructor;
        let landingpageCta: ObjectConstructor;
        let contactEntries: ArrayConstructor;
        let images: ArrayConstructor;
    }
    namespace computed {
        function sliderConfig(): {
            hideContainer: boolean;
            hideBackground: boolean;
            options: {
                dots: boolean;
                navigation: {
                    enabled: boolean;
                    nextEl: string;
                    prevEl: string;
                };
                breakpoints: {
                    320: {
                        slidesPerView: number;
                        spaceBetween: number;
                    };
                    576: {
                        slidesPerView: number;
                        spaceBetween: number;
                    };
                    992: {
                        slidesPerView: number;
                        spaceBetween: number;
                    };
                    1200: {
                        slidesPerView: number;
                        spaceBetween: number;
                        loop: boolean;
                    };
                };
            };
        };
    }
}
export default _default;
