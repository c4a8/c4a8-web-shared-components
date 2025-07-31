declare namespace _default {
    let tagName: string;
    namespace props {
        let circleContent: StringConstructor;
        let circleIcon: StringConstructor;
        namespace color {
            export let type: StringConstructor;
            let _default: string;
            export { _default as default };
        }
    }
    namespace computed {
        function circleStyle(): any;
    }
}
export default _default;
