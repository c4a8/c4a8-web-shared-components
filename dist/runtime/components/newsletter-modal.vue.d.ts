declare namespace _default {
    let tagName: string;
    namespace props {
        namespace bgColor {
            let type: StringConstructor;
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
        namespace iconColor {
            let type_5: StringConstructor;
            export { type_5 as type };
            let _default: string;
            export { _default as default };
        }
        namespace confirmation {
            let type_6: ObjectConstructor;
            export { type_6 as type };
            let _default_1: null;
            export { _default_1 as default };
        }
        namespace light {
            let type_7: BooleanConstructor;
            export { type_7 as type };
            let _default_2: boolean;
            export { _default_2 as default };
        }
    }
    function data(): any;
    namespace computed {
        function newsletterStyle(): any;
    }
    namespace methods {
        function handleSuccess(): void;
    }
}
export default _default;
