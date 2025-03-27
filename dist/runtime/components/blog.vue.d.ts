declare namespace _default {
    let tagName: string;
    function data(): {
        filesValue: never[];
    };
    function created(): Promise<void>;
    namespace computed {
        function blogImagePath(): any;
        function highlightPost(): any;
    }
    namespace methods {
        function updateFiles(files: any): true | undefined;
    }
    namespace props {
        namespace posts {
            let type: ArrayConstructor;
            let required: boolean;
        }
        namespace blogMaxBlogPosts {
            let type_1: NumberConstructor;
            export { type_1 as type };
            let _default: number;
            export { _default as default };
            let required_1: boolean;
            export { required_1 as required };
        }
        let lang: StringConstructor;
        let paginator_page: NumberConstructor;
        let paginator_total_pages: NumberConstructor;
        let paginator_previous_page: NumberConstructor;
        let paginator_previous_page_path: StringConstructor;
        let paginator_next_page: NumberConstructor;
        let paginator_next_page_path: StringConstructor;
    }
}
export default _default;
