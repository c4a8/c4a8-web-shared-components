declare namespace _default {
    let tagName: string;
    function data(): {
        follow: string;
    };
    namespace computed {
        function classValue(): string[];
        function iconClasses(): string[];
        function socialItemClass(): (string | (() => string[]))[];
        function getList(): any;
    }
    let methods: {};
    namespace props {
        namespace hideLabel {
            export let type: BooleanConstructor;
            let _default: boolean;
            export { _default as default };
        }
        namespace author {
            let _default_1: null;
            export { _default_1 as default };
        }
        namespace vertical {
            let _default_2: null;
            export { _default_2 as default };
        }
        namespace expand {
            let _default_3: null;
            export { _default_3 as default };
        }
        namespace shareUrl {
            let _default_4: null;
            export { _default_4 as default };
        }
    }
}
export default _default;
