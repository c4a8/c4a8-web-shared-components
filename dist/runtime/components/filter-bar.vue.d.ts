declare namespace _default {
    let tagName: string;
    namespace computed {
        function flatSelections(): any;
        function storedItems(): never[];
        function normalizedItems(): any;
        function filteredItems(): any;
        function authors(): any;
        function topics(): any;
        function tags(): any;
        function dropdownCollection(): (() => any)[];
    }
    function setup(): {
        locale: any;
    };
    function created(): void;
    function beforeMount(): void;
    function mounted(): void;
    function beforeDestroy(): void;
    namespace methods {
        function getFilteredTags(): any;
        function addTagToSelection(tag: any, index: any): void;
        function getMaxItems(items: any): any;
        function handleResize(): void;
        function extractPropertyCounts(property: any): any;
        function updatePropertyCount(accumulator: any, propertyValue: any): void;
        function handleView(view: any): void;
        function toggleIconClasses(view: any): string[];
        function isArrayEmpty(array: any): boolean;
        function isArrayEmptyRecursive(array: any): boolean;
        function handleCardTagClicked(event: any): void;
        function getTagByName(tagName: any): void;
        function handleDropdownChange(selection: any, index: any): void;
        function handleDropdownOpened(openedDropdown: any): void;
        function clearAllSelections(): void;
        function removeSelection(e: any, selection: any): void;
        function updateDropdownSelection(selection: any, index: any): void;
    }
    function data(): {
        activeView: string;
        views: string[];
        filterDropdowns: never[];
        selections: never[];
        itemStartPoint: number;
        hasClickedOnTag: boolean;
    };
    namespace props {
        let spacing: StringConstructor;
        let items: StringConstructor;
        let maxBlogPosts: NumberConstructor;
        let dataAuthors: StringConstructor;
    }
}
export default _default;
