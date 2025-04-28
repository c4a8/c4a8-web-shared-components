declare namespace _default {
    let tagName: string;
    namespace props {
        let centered: BooleanConstructor;
        namespace level {
            export let type: StringConstructor;
            let _default: string;
            export { _default as default };
        }
        let text: StringConstructor;
        namespace spacing {
            let type_1: StringConstructor;
            export { type_1 as type };
            let _default_1: string;
            export { _default_1 as default };
        }
        let hasAnimation: BooleanConstructor;
        let classes: StringConstructor;
        let headlineClasses: StringConstructor;
        let noContainer: BooleanConstructor;
    }
    function mounted(): void;
    namespace computed {
        function headlineRowClassesValue(): string;
        function containerClass(): "" | "container";
        function animationClass(): "" | "utility-animation";
        function animationStepClass(): "" | "fade-in-bottom";
        function classList(): (string | (() => "" | "utility-animation"))[];
    }
}
export default _default;
