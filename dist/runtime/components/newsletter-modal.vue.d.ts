declare namespace _default {
    let tagName: string;
    namespace props {
        namespace bgColor {
            export let type: StringConstructor;
            let _default: string;
            export { _default as default };
        }
        namespace headline {
            let type_1: StringConstructor;
            export { type_1 as type };
        }
        namespace text {
            let type_2: StringConstructor;
            export { type_2 as type };
        }
        namespace formular {
            let type_3: ObjectConstructor;
            export { type_3 as type };
        }
        namespace lottie {
            let type_4: ObjectConstructor;
            export { type_4 as type };
        }
        namespace confirmHeadline {
            let type_5: StringConstructor;
            export { type_5 as type };
        }
        namespace confirmText {
            let type_6: StringConstructor;
            export { type_6 as type };
        }
        let success: BooleanConstructor;
        let ajax: BooleanConstructor;
    }
    namespace computed {
        function newsletterStyle(): any;
    }
}
export default _default;
