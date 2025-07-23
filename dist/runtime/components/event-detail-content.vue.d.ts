declare namespace _default {
    let name: string;
    namespace props {
        let headline: StringConstructor;
        let intro: StringConstructor;
        let paragraphs: ArrayConstructor;
        let bulletpoints: ArrayConstructor;
        namespace headlineLevel {
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
    }
}
export default _default;
