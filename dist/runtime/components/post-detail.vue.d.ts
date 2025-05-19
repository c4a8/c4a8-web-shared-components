declare namespace _default {
    let tagName: string;
    function setup(): {
        authors: any;
        isAtEnd: import("vue").Ref<boolean, boolean>;
    };
    function data(): {
        shouldShowStickyBlocks: boolean;
    };
    function mounted(): void;
    function unmounted(): void;
    namespace methods {
        function checkStickyBlocks(): void;
    }
    namespace computed {
        function stickyOffsetTop(): 100 | 124;
        function asideNavValue(): any;
        function enhancedPost(): {
            body: any;
        };
        function normalizedPost(): {
            url: any;
            date: any;
            moment: any;
            excerpt: any;
            headlineText: any;
        } | null;
        function blogImagePath(): string;
        function formattedDate(): string;
        function formattedDateXml(): string;
    }
    namespace props {
        namespace post {
            let type: ObjectConstructor;
            let required: boolean;
        }
        namespace shareUrl {
            let type_1: StringConstructor;
            export { type_1 as type };
            let _default: string;
            export { _default as default };
        }
    }
}
export default _default;
