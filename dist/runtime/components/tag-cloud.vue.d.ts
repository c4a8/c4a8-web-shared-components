declare namespace _default {
    let tagName: string;
    namespace props {
        namespace items {
            let type: ArrayConstructor;
            let required: boolean;
        }
        namespace level {
            let type_1: StringConstructor;
            export { type_1 as type };
            let _default: string;
            export { _default as default };
        }
        namespace headline {
            let type_2: StringConstructor;
            export { type_2 as type };
            let required_1: boolean;
            export { required_1 as required };
        }
        namespace subline {
            let type_3: StringConstructor;
            export { type_3 as type };
            let _default_1: null;
            export { _default_1 as default };
        }
        namespace sticky {
            let type_4: BooleanConstructor;
            export { type_4 as type };
            let _default_2: boolean;
            export { _default_2 as default };
        }
    }
    namespace computed {
        function jsonItems(): string;
    }
    function mounted(): void;
    function beforeUnmount(): void;
}
export default _default;
