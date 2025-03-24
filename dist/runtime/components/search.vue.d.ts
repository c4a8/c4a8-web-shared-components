declare namespace _default {
    let tagName: string;
    namespace computed {
        function classList(): string[];
        function limitedResults(): any;
    }
    function data(): {
        search: null;
        store: null;
        results: null;
        maxResults: number;
        searchExpanded: boolean;
    };
    namespace methods {
        function handleEnter(): void | Promise<void>;
        function handleSearch(): void;
        function initSearchEngine(): void;
        function handleSearchBar(): void;
        function handleOutsideClick(e: any): void;
    }
    namespace props {
        let placeholder: StringConstructor;
        let endpoint: StringConstructor;
        let language: StringConstructor;
    }
}
export default _default;
