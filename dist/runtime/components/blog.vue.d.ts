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
        function blogContainerClassList(): string[];
        function showNoPosts(): boolean;
        function showFilter(): boolean;
        function imgUrl(): any;
        function highlightPost(): any;
        function highlightPostExternalLanguage(): any;
        function showComponent(): any;
        function query(): {
            limit: any;
            sort: {
                moment: number;
            }[];
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
        namespace hasHighlight {
            let type_2: BooleanConstructor;
            export { type_2 as type };
            let _default_1: boolean;
            export { _default_1 as default };
        }
        namespace defaultView {
            let type_3: StringConstructor;
            export { type_3 as type };
            let _default_2: string;
            export { _default_2 as default };
        }
        namespace enabledDropdowns {
            let type_4: ArrayConstructor;
            export { type_4 as type };
            function _default_3(): string[];
            export { _default_3 as default };
        }
    }
}
export default _default;
