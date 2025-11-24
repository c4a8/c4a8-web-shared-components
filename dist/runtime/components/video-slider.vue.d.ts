declare namespace _default {
    let tagName: string;
    function data(): {
        triggerButtonClick: boolean;
        currentTabIndex: number;
        currentTab: null;
        slickElement: null;
        options: {
            centerMode: boolean;
            infinite: boolean;
            centerPadding: string;
            slidesToShow: number;
            responsive: {
                breakpoint: number;
                settings: {
                    centerPadding: string;
                };
            }[];
            prevArrow: string;
            nextArrow: string;
        };
    };
    namespace computed {
        function tabCount(): any;
        function copyColor(): any;
        function backgroundColor(): any;
        function style(): string;
    }
    function mounted(): void;
    namespace methods {
        function bindEvents(): void;
        function handlePositionChange(_: any, slick: any, currentSlide: any): void;
        function handleAfterChangeClick(): void;
        function handleCtaClick(e: any): void;
        function handleTabClick(index: any): void;
        function handleVideoInnerEvent(index: any): void;
        function handleSliderClick(event: any): void;
    }
    namespace props {
        namespace headline {
            let type: ObjectConstructor;
        }
        namespace subline {
            let type_1: StringConstructor;
            export { type_1 as type };
            export let required: boolean;
        }
        namespace tabs {
            let type_2: ArrayConstructor;
            export { type_2 as type };
            let required_1: boolean;
            export { required_1 as required };
        }
        namespace cta {
            let type_3: ObjectConstructor;
            export { type_3 as type };
        }
    }
}
export default _default;
