declare namespace _default {
    let tagName: string;
    namespace computed {
        function outsidePreset(): "animated" | null;
        function isOutsideImageWebpOrGif(): any;
        function imageWrapperClasses(): (string | null)[];
        function containerClasses(): any[];
        function accordionClasses(): (string | null)[];
        function fallbackImageClasses(): (string | null)[];
        function columnClasses(): (string | null)[];
        function headlineClasses(): string;
    }
    function mounted(): void;
    namespace methods {
        function isUpperBreakpoint(): boolean;
        function selectFallbackImage(): void;
        function getActiveTab(): any;
        function handleClick(index: any): void;
        function changeToFallbackImage(): void;
        function changeOutsideImage(index: any): void;
        function getTabByIndex(index: any): any;
        function allTabsClosed(): boolean;
        function getStateByIndex(index: any): any;
        function getId(accordion: any, index: any, name: any): string;
        function isExpanded(tab: any): "true" | "false";
        function buttonClasses(tab: any): (string | null)[];
        function contentClasses(tab: any): (string | null)[];
        function cardClasses(index: any): (string | null)[];
        function cardStyle(index: any): string;
        function accordionId(accordion: any): string;
        function cloudinary(image: any): any;
        function getImage(tab: any): any;
        function getTab(tab: any): any;
    }
    function data(): {
        showOutsideImage: boolean;
        outsideImage: boolean;
        outsideAnimated: boolean;
        outsideAlt: string;
        states: never[];
        fallbackImage: boolean;
        fallbackAnimated: boolean;
        fallbackAlt: string;
    };
    namespace props {
        let accordion: ObjectConstructor;
        namespace shadowless {
            let _default: null;
            export { _default as default };
        }
        namespace left {
            let _default_1: null;
            export { _default_1 as default };
        }
        let spacing: StringConstructor;
    }
}
export default _default;
