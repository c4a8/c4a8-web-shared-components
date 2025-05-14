declare namespace _default {
    let tagName: string;
    namespace props {
        namespace table {
            let type: ArrayConstructor;
            let required: boolean;
        }
        namespace hideContainer {
            let type_1: BooleanConstructor;
            export { type_1 as type };
            let _default: boolean;
            export { _default as default };
        }
        namespace style {
            let type_2: StringConstructor;
            export { type_2 as type };
            let _default_1: string;
            export { _default_1 as default };
        }
        namespace classes {
            let type_3: StringConstructor;
            export { type_3 as type };
            let _default_2: string;
            export { _default_2 as default };
        }
        namespace head {
            let type_4: BooleanConstructor;
            export { type_4 as type };
            let _default_3: boolean;
            export { _default_3 as default };
        }
    }
    namespace computed {
        function tableHideContainer(): any;
        function styleClass(): any;
        function tableRows(): any;
    }
}
export default _default;
