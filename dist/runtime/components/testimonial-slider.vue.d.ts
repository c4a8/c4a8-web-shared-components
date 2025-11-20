declare namespace _default {
    let tagName: string;
    namespace props {
        namespace headline {
            export let type: StringConstructor;
            let _default: null;
            export { _default as default };
        }
        namespace headlineLevel {
            let type_1: (StringConstructor | NumberConstructor)[];
            export { type_1 as type };
            let _default_1: null;
            export { _default_1 as default };
        }
        namespace subline {
            let type_2: StringConstructor;
            export { type_2 as type };
            let _default_2: null;
            export { _default_2 as default };
        }
        namespace slides {
            let type_3: ArrayConstructor;
            export { type_3 as type };
            function _default_3(): never[];
            export { _default_3 as default };
        }
        namespace sticky {
            let type_4: BooleanConstructor;
            export { type_4 as type };
            let _default_4: boolean;
            export { _default_4 as default };
        }
        namespace ignoreLang {
            let type_5: BooleanConstructor;
            export { type_5 as type };
            let _default_5: boolean;
            export { _default_5 as default };
        }
        namespace spacing {
            let type_6: StringConstructor;
            export { type_6 as type };
            let _default_6: string;
            export { _default_6 as default };
        }
        namespace lang {
            let type_7: StringConstructor;
            export { type_7 as type };
            let _default_7: string;
            export { _default_7 as default };
        }
    }
    function mounted(): void;
    namespace computed {
        function testimonialsSliderHeadline(): any;
        function testimonialsSliderHeadlineLevel(): any;
        function testimonialsSliderSubline(): any;
        function testimonialsSliderSticky(): any;
        function testimonialsSliderSpacing(): any;
        function sortedSlides(): any[];
        function filteredSlides(): () => any[];
        function slickOptions(): {
            dots: boolean;
            dotsClass: string;
            prevArrow: string;
            nextArrow: string;
            slidesToScroll: number;
            slidesToShow: number;
            responsive: ({
                breakpoint: number;
                settings: {
                    slidesToShow: number;
                    slidesToScroll: number;
                    variableWidth: boolean;
                };
                todobreakpoint?: undefined;
            } | {
                todobreakpoint: number;
                settings: string;
                breakpoint?: undefined;
            })[];
        };
    }
}
export default _default;
