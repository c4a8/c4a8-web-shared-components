declare namespace _default {
    let tagName: string;
    function setup(): {
        authors: any;
        isAtEnd: import("vue").Ref<boolean, boolean>;
    };
    namespace computed {
        function stickyOffsetTop(): 100 | 124;
        function shouldShowStickyBlocks(): boolean;
        function asideNavValue(): any;
        function enhancedPost(): {
            body: any;
        };
        function normalizedPost(): {
            url: any;
            date: any;
            moment: any;
            excerpt: any;
        };
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
