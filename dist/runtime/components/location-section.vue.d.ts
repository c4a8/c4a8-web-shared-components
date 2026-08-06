declare namespace _default {
    let tagName: string;
    namespace props {
        let classes: StringConstructor;
        let overline: StringConstructor;
        let headline: StringConstructor;
        let locationHeadline: StringConstructor;
        let contactHeadline: StringConstructor;
        let locationEntries: ObjectConstructor;
        let locationCta: ObjectConstructor;
        let contactEntries: ArrayConstructor;
        let landingpageCta: ObjectConstructor;
        let images: ArrayConstructor;
        namespace backgroundColor {
            export let type: StringConstructor;
            let _default: string;
            export { _default as default };
        }
    }
    namespace computed {
        function imgSrcSets(): {
            srcSets: {
                params: string;
            }[];
        };
        function classList(): any;
        function sliderImages(): any;
        function sliderConfig(): {
            hideContainer: boolean;
            hideBackground: boolean;
            options: {
                navigation: boolean;
                controlsClass: string;
                loop: boolean;
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
                    };
                };
            };
        };
    }
}
export default _default;
