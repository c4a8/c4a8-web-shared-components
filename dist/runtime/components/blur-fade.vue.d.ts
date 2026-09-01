declare namespace _default {
    let tagName: string;
    namespace computed {
        function stepCount(): number;
        function gradientDirection(): any;
        function layers(): any[];
        function tintStyle(): any;
    }
    namespace props {
        namespace direction {
            export let type: StringConstructor;
            let _default: string;
            export { _default as default };
        }
        namespace maxBlur {
            let type_1: (NumberConstructor | StringConstructor)[];
            export { type_1 as type };
            let _default_1: number;
            export { _default_1 as default };
        }
        namespace steps {
            let type_2: (NumberConstructor | StringConstructor)[];
            export { type_2 as type };
            let _default_2: number;
            export { _default_2 as default };
        }
        namespace tint {
            let type_3: StringConstructor;
            export { type_3 as type };
            let _default_3: string;
            export { _default_3 as default };
        }
    }
}
export default _default;
