declare namespace _default {
    let tagName: string;
    namespace props {
        let label: StringConstructor;
        let items: ArrayConstructor;
        namespace filterable {
            let _default: null;
            export { _default as default };
        }
        namespace hasAnimation {
            let _default_1: null;
            export { _default_1 as default };
        }
        let index: NumberConstructor;
    }
    namespace computed {
        function isStorybook(): boolean;
        function teleportSelector(): string;
        function dropdownLabelClasses(): string[];
        function parsedItems(): any;
        function filteredItems(): any;
        function filterableValue(): boolean;
        function style(): any;
    }
    namespace methods {
        function initActiveSelection(): void;
        function updateUtilityAnimation(): void;
        function resetSelection(): void;
        function applySelection(): void;
        function handleSelection(selection: any): void;
        function toggleDropdown(): void;
        function closeModal(): void;
        function modalOpened(): void;
        function modalClosed(): void;
        function toggleIconClasses(selection: any): string[];
        function handleMouseEnter(e: any): any;
        function handleMouseDown(e: any): any;
        function handleClick(e: any): any;
        function getCheckboxId(item: any, index: any): string;
        function resetFilterText(): void;
        function resetModal(): void;
        function handleResize(): void;
    }
    function beforeMount(): void;
    function mounted(): void;
    function beforeDestroy(): void;
    function data(): {
        activeSelection: never[];
        isOpen: boolean;
        filterText: string;
        minCharsToFilter: number;
    };
}
export default _default;
