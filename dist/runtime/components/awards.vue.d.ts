declare namespace _default {
    let tagName: string;
    namespace props {
        namespace awards {
            let type: ObjectConstructor;
            let required: boolean;
        }
        namespace level {
            let type_1: StringConstructor;
            export { type_1 as type };
            let _default: string;
            export { _default as default };
        }
        namespace visualOnly {
            let type_2: BooleanConstructor;
            export { type_2 as type };
            let _default_1: boolean;
            export { _default_1 as default };
        }
        namespace cols {
            let type_3: NumberConstructor;
            export { type_3 as type };
            let _default_2: number;
            export { _default_2 as default };
        }
    }
    namespace computed {
        function awardsColsValue(): "col-lg-12 justify-content-center" | "col-lg-6";
        function awardsCol(): number;
        function headlineClasses(): string;
    }
}
export default _default;
