declare namespace _default {
    let tagName: string;
    function data(): {
        index: number;
        lastIndex: number;
        inAnimation: boolean;
    };
    namespace computed {
        function classList(): any[];
        function style(): string;
        function reducedAnimationValue(): boolean;
        function limitValue(): number;
        function isFirstEntry(): boolean;
        function isLastEntry(): boolean;
        function activeEntry(): any;
        function currentPage(): any;
        function lastPage(): any;
        function pagination(): boolean;
        function limitedEntries(): any;
        function sliderOptions(): {
            rows: number;
            slidesToShow: number;
            slidesToScroll: number;
            dots: boolean;
            centerMode: boolean;
            fade: boolean;
            dotsClass: string;
            arrows: boolean;
            responsive: {
                breakpoint: number;
                settings: {
                    centerMode: boolean;
                    infinite: boolean;
                    centerPadding: string;
                    slidesToShow: number;
                    slidesToScroll: number;
                    dots: boolean;
                    fade: boolean;
                };
            }[];
        };
        function rightDirection(): boolean;
    }
    namespace methods {
        function handleTransitionsEnd(): void;
        function next(): void;
        function prev(): void;
        function switchSlide(next: any): void;
    }
    namespace props {
        let entries: ArrayConstructor;
        let limit: NumberConstructor;
        let spacing: StringConstructor;
        namespace reduceAnimation {
            let _default: null;
            export { _default as default };
        }
        let animationColor: StringConstructor;
    }
}
export default _default;
