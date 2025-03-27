declare namespace _default {
    let tagName: string;
    namespace computed {
        function classList(): any[];
        function checkCardsContainerClass(): string[];
        function containerValue(): string;
        function headlineLevelValue(): any;
        function headlineClassesValue(): string;
        function sublineClassesValue(): string;
        function itemClass(): string;
        function hasProducts(): any;
        function carouselOptions(): {
            slidesToShow: number;
            slidesToScroll: number;
            prevArrow: string;
            nextArrow: string;
            dots: boolean;
            centerMode: boolean;
            dotsClass: string;
            responsive: ({
                breakpoint: number;
                settings: {
                    slidesToShow: number;
                    slidesToScroll: number;
                    dots: boolean;
                    centerMode?: undefined;
                    infinite?: undefined;
                    centerPadding?: undefined;
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
    }
    function mounted(): void;
    let methods: {};
    namespace props {
        let headline: StringConstructor;
        let headlineLevel: StringConstructor;
        let headlineClasses: StringConstructor;
        let subline: StringConstructor;
        let sublineClasses: StringConstructor;
        let spacing: StringConstructor;
        namespace checks {
            let _default: null;
            export { _default as default };
        }
        let classes: StringConstructor;
    }
}
export default _default;
