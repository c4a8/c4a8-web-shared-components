declare namespace _default {
    let name: string;
    function setup(): {
        authors: any;
        isAtEnd: import("vue").Ref<boolean, boolean>;
        endPoint: import("vue").Ref<null, null>;
    };
    function data(): {
        hasBack: boolean;
        stickyPosition: number;
        hsStickyBlockOptions: null;
        loadingDelay: number;
        percentageInViewport: number;
        stickyOffsetTop: number;
        stickyUnstuckOffsetTop: number;
    };
    namespace props {
        namespace detailColor {
            let type: StringConstructor;
        }
        namespace detailShapeColor {
            let type_1: StringConstructor;
            export { type_1 as type };
        }
    }
    namespace computed {
        function hasShape(): boolean;
    }
    namespace methods {
        function showBackButton(): void;
        function getDOMElement(selector: any): any;
        function setStickyPosition(): void;
        function isInViewport(): boolean;
        function setShapePosition(): void;
        function handleStickyShapeEnd(): void;
        function getStickyBlock(): any;
        function getRelativePosition(): number;
        function resetShape(): void;
        function isSticky(): boolean;
        function setStickyUnstuckOffsetTop(): void;
        function handleScroll(): void;
        function handleResize(): void;
    }
    function mounted(): void;
    function beforeUnmount(): void;
}
export default _default;
