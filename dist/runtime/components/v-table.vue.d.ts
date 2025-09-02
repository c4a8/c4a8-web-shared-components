declare namespace _default {
    let tagName: string;
    namespace props {
        namespace headline {
            export let type: StringConstructor;
            let _default: null;
            export { _default as default };
        }
        namespace table {
            let type_1: ArrayConstructor;
            export { type_1 as type };
            export let required: boolean;
        }
        namespace hideContainer {
            let type_2: BooleanConstructor;
            export { type_2 as type };
            let _default_1: boolean;
            export { _default_1 as default };
        }
        namespace style {
            let type_3: StringConstructor;
            export { type_3 as type };
            let _default_2: string;
            export { _default_2 as default };
        }
        namespace classes {
            let type_4: StringConstructor;
            export { type_4 as type };
            let _default_3: string;
            export { _default_3 as default };
        }
        namespace head {
            let type_5: BooleanConstructor;
            export { type_5 as type };
            let _default_4: boolean;
            export { _default_4 as default };
        }
        namespace agenda {
            let type_6: BooleanConstructor;
            export { type_6 as type };
            let _default_5: boolean;
            export { _default_5 as default };
        }
    }
    namespace computed {
        function tableHideContainer(): any;
        function styleClass(): any;
        function tableRows(): any;
    }
}
export default _default;
