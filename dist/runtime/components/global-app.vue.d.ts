declare namespace _default {
    let tagName: string;
    function mounted(): void;
    namespace methods {
        function captureBodyMutation(): void;
        function handleBodyMutation(mutations: any): void;
        function triggerResizeEvent(): void;
    }
    namespace computed {
        function classList(): any[];
    }
    namespace props {
        namespace classes {
            export let type: ArrayConstructor;
            function _default(): never[];
            export { _default as default };
        }
        namespace isLoading {
            let type_1: BooleanConstructor;
            export { type_1 as type };
            let _default_1: boolean;
            export { _default_1 as default };
        }
    }
    function data(): {
        lastBodyHeight: null;
    };
}
export default _default;
