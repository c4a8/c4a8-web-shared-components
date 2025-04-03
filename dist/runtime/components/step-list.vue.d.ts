declare namespace _default {
    let tagName: string;
    namespace props {
        namespace background {
            export let type: StringConstructor;
            let _default: string;
            export { _default as default };
        }
        namespace color {
            let type_1: StringConstructor;
            export { type_1 as type };
            let _default_1: string;
            export { _default_1 as default };
        }
        namespace headline {
            let type_2: ObjectConstructor;
            export { type_2 as type };
            let _default_2: null;
            export { _default_2 as default };
        }
        namespace subline {
            let type_3: StringConstructor;
            export { type_3 as type };
            let _default_3: string;
            export { _default_3 as default };
        }
        namespace list {
            let type_4: ArrayConstructor;
            export { type_4 as type };
            export let required: boolean;
        }
        namespace variant {
            let type_5: StringConstructor;
            export { type_5 as type };
            let _default_4: null;
            export { _default_4 as default };
        }
        namespace sticky {
            let type_6: BooleanConstructor;
            export { type_6 as type };
            let _default_5: boolean;
            export { _default_5 as default };
        }
    }
    function mounted(): void;
    namespace methods {
        function animationIndex(index: any, isIcon?: boolean): number;
    }
}
export default _default;
