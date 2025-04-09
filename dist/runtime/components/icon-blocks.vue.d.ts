declare namespace _default {
    let tagName: string;
    namespace props {
        namespace iconBlocks {
            let type: ObjectConstructor;
            let required: boolean;
        }
        namespace level {
            let type_1: StringConstructor;
            export { type_1 as type };
            let _default: string;
            export { _default as default };
        }
        namespace classes {
            let type_2: StringConstructor;
            export { type_2 as type };
            let _default_1: string;
            export { _default_1 as default };
        }
        namespace columns {
            let type_3: (BooleanConstructor | NumberConstructor)[];
            export { type_3 as type };
            let _default_2: boolean;
            export { _default_2 as default };
        }
        namespace headline {
            let type_4: StringConstructor;
            export { type_4 as type };
            let _default_3: null;
            export { _default_3 as default };
        }
        namespace sticky {
            let type_5: BooleanConstructor;
            export { type_5 as type };
            let _default_4: boolean;
            export { _default_4 as default };
        }
        namespace spacing {
            let type_6: StringConstructor;
            export { type_6 as type };
            let _default_5: string;
            export { _default_5 as default };
        }
    }
    namespace computed {
        function columnClass(): string;
    }
    function mounted(): void;
}
export default _default;
