declare namespace _default {
    let tagName: string;
    namespace props {
        namespace detailColor {
            export let type: StringConstructor;
            let _default: string;
            export { _default as default };
        }
        namespace detailShapeColor {
            let type_1: StringConstructor;
            export { type_1 as type };
            let _default_1: string;
            export { _default_1 as default };
        }
        let headlineText: StringConstructor;
        let name: ArrayConstructor;
        namespace headlineLevel {
            let type_2: StringConstructor;
            export { type_2 as type };
            let _default_2: string;
            export { _default_2 as default };
        }
        namespace headlineClasses {
            let type_3: StringConstructor;
            export { type_3 as type };
            let _default_3: string;
            export { _default_3 as default };
        }
        let form: ObjectConstructor;
        namespace formAdditionalFields {
            let type_4: (ObjectConstructor | ArrayConstructor)[];
            export { type_4 as type };
            let _default_4: null;
            export { _default_4 as default };
        }
        namespace formReplaceValue {
            let type_5: (ObjectConstructor | StringConstructor | NumberConstructor)[];
            export { type_5 as type };
            let _default_5: null;
            export { _default_5 as default };
        }
        let image: ObjectConstructor;
        let badge: ObjectConstructor;
        let moment: StringConstructor;
        let time: StringConstructor;
        namespace lang {
            let type_6: StringConstructor;
            export { type_6 as type };
            let _default_6: string;
            export { _default_6 as default };
        }
        let body: ObjectConstructor;
    }
    namespace computed {
        function introData(): {
            badge: any;
            image: any;
            moment: any;
            time: any;
            headlineText: any;
            headlineLevel: () => any;
            headlineClasses: () => string;
            name: any;
        };
        function headlineLevelComputed(): any;
        function headlineClassesComputed(): string;
        function stickyOptions(): string;
    }
}
export default _default;
