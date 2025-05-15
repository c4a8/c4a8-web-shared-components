declare namespace _default {
    let tagName: string;
    namespace computed {
        function style(): string;
        function pathStyle(): string;
        function strokeWidthValue(): any;
    }
    namespace props {
        let settings: ObjectConstructor;
        let color: StringConstructor;
        namespace strokeWidth {
            export let type: NumberConstructor;
            let _default: number;
            export { _default as default };
        }
    }
}
export default _default;
