declare namespace _default {
    let tagName: string;
    let inheritAttrs: boolean;
    namespace components {
        export { ContentNode };
    }
    namespace computed {
        function isStorybook(): boolean;
        function value(): any;
        function tag(): any;
        function computedClass(): any;
        function bodyNodes(): any;
    }
}
export default _default;
declare namespace ContentNode {
    let name: string;
    namespace props {
        namespace node {
            let type: (ArrayConstructor | StringConstructor)[];
            let required: boolean;
        }
    }
    namespace methods {
        function getNodeTag(node: any): any;
        function getNodeAttrs(node: any): any;
        function getNodeClass(node: any): any;
        function getNodeChildren(node: any): any[];
        function isKramdownAttr(child: any): boolean;
        function renderNode(node: any): any;
    }
    function render(): any;
}
