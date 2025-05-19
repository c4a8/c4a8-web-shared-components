declare namespace _default {
    let name: string;
    function setup(): {
        authors: any;
        isAtEnd: any;
    };
    function data(): {
        hasBack: boolean;
        stickyPosition: number;
        isStickyEndReached: boolean;
        hsStickyBlockOptions: null;
        loadingDelay: number;
        percentageInViewport: number;
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
        function setStickyPosition(): void;
        function isInViewport(): boolean;
        function setShapePosition(): void;
        function handleStickyShapeEnd(): void;
        function getRelativePosition(): number;
        function resetShape(): void;
        function isSticky(): boolean;
        function isStickyShapeEnd(): boolean;
        function getHsStickyBlockOptions(): any;
        function getStickyOffsetTop(): any;
        function isStickyEnd(): boolean;
        function handleScroll(): void;
        function handleResize(): void;
    }
    function mounted(): void;
    function beforeUnmount(): void;
}
export default _default;
