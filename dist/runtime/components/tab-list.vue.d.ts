declare namespace _default {
    let tagName: string;
    function data(): {
        smallVariant: string;
        showLeftArrow: boolean;
        showRightArrow: boolean;
        currentIndex: number;
        currentTabId: string;
    };
    function mounted(): void;
    namespace computed {
        function leftValue(): boolean;
        function columnClassList(): any[];
        function variantClass(): any;
        function classList(): (string | (() => any))[];
        function listClassList(): string[];
        function isSmall(): any;
        function hideContainer(): boolean;
    }
    namespace methods {
        function canScrollLeft(): any;
        function canScrollRight(): any;
        function tabClassList(index: any): string[];
        function ariaSelected(index: any): any;
        function boxClassList(tab: any): string[];
        function isLink(tab: any): any;
        function linkAttributes(tab: any, index: any): {};
        function handleContentSwitch(id: any): void;
        function handleClick(e: any): void;
        function handleScroll(): void;
        function getArrowOffset(): any;
        function scrollToTab(index: any): void;
        function scrollToNext(): void;
        function scrollToPrevious(): void;
    }
    namespace props {
        let list: ArrayConstructor;
        let tabs: BooleanConstructor;
        namespace left {
            let _default: null;
            export { _default as default };
        }
        let variant: StringConstructor;
    }
}
export default _default;
