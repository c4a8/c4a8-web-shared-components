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
        let classes: ArrayConstructor;
        namespace isLoading {
            export let type: BooleanConstructor;
            let _default: boolean;
            export { _default as default };
        }
    }
    function data(): {
        lastBodyHeight: null;
    };
}
export default _default;
