declare namespace _default {
    let tagName: string;
    namespace props {
        namespace page {
            let type: ObjectConstructor;
            let required: boolean;
        }
        namespace quotes {
            let type_1: ObjectConstructor;
            export { type_1 as type };
            let required_1: boolean;
            export { required_1 as required };
        }
        namespace spacing {
            let type_2: StringConstructor;
            export { type_2 as type };
            let _default: string;
            export { _default as default };
        }
        namespace noFullscreen {
            let type_3: BooleanConstructor;
            export { type_3 as type };
            let _default_1: boolean;
            export { _default_1 as default };
        }
    }
    function mounted(): void;
    namespace computed {
        function quotesSpacing(): any;
        function quotesNoFullscreen(): any;
        function quotesImagesCount(): any;
        function quotesImage(): boolean;
        function quotesSlidesToShow(): 1 | 1.05;
        function quotesColSize(): number;
        function slickOptions(): {
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
                    slidesToShow: () => 1 | 1.05;
                };
            }[];
        };
    }
}
export default _default;
