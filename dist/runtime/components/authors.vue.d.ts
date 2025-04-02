declare namespace _default {
    let tagName: string;
    function setup(): {
        locale: any;
    };
    namespace computed {
        function classList(): string[];
        function seperator(): " & " | ", ";
        function authorArray(): any;
        function hasDataAndAuthors(): any;
        function langValue(): any;
    }
    namespace methods {
        function authorsSeperator(array: any, element: any): boolean;
        function authorStart(array: any, element: any): any;
        function authorLink(author: any): string | null;
    }
    namespace props {
        let authorsList: ArrayConstructor;
        namespace noLink {
            let _default: null;
            export { _default as default };
        }
        namespace dataLang {
            let _default_1: string;
            export { _default_1 as default };
        }
        namespace dataAuthors {
            let _default_2: null;
            export { _default_2 as default };
        }
        let lang: StringConstructor;
    }
}
export default _default;
