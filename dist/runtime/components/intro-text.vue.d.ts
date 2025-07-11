declare namespace _default {
    let tagName: string;
    namespace computed {
        function classList(): any[];
        function containerClasses(): any[];
    }
    function mounted(): void;
    namespace props {
        let copy: StringConstructor;
        let variant: StringConstructor;
        let headline: StringConstructor;
        let spacing: StringConstructor;
        namespace containerSpacing {
            export let type: StringConstructor;
            let _default: string;
            export { _default as default };
        }
        namespace headlineClasses {
            let type_1: StringConstructor;
            export { type_1 as type };
            let _default_1: string;
            export { _default_1 as default };
        }
        let copyClasses: StringConstructor;
    }
}
export default _default;
