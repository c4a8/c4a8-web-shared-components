declare namespace _default {
    let tagName: string;
    function data(): {
        filesValue: never[];
    };
    function setup(): {
        config: {};
        locale: import("vue").WritableComputedRef<string, string>;
        strategy: any;
        authors: any;
    };
    namespace computed {
        function showNoPosts(): boolean;
        function showFilter(): boolean;
        function imgUrl(): any;
        function highlightPost(): any;
        function highlightPostExternalLanguage(): any;
        function showComponent(): true | (() => {
            limit: any;
            sort: any;
            reversed: any;
            where: {
                path: {
                    LIKE: string[];
                };
            };
            path: string;
            additionalCollections: string[];
        });
        function query(): {
            limit: any;
            sort: any;
            reversed: any;
            where: {
                path: {
                    LIKE: string[];
                };
            };
            path: string;
            additionalCollections: string[];
        };
    }
    namespace methods {
        function blogTitleUrl(post: any): any;
        function updateFiles(files: any): true | undefined;
    }
    namespace props {
        namespace posts {
            let type: ArrayConstructor;
            let required: never[];
        }
        namespace blogMaxBlogPosts {
            let type_1: NumberConstructor;
            export { type_1 as type };
            let _default: number;
            export { _default as default };
            let required_1: boolean;
            export { required_1 as required };
        }
        let paginator_page: NumberConstructor;
        let paginator_total_pages: NumberConstructor;
        let paginator_previous_page: NumberConstructor;
        let paginator_previous_page_path: StringConstructor;
        let paginator_next_page: NumberConstructor;
        let paginator_next_page_path: StringConstructor;
    }
}
export default _default;
