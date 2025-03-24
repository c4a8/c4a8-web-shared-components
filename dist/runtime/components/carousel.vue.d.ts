declare namespace _default {
    let tagName: string;
    function data(): {
        clientWidth: null;
        resizeObserver: null;
    };
    namespace computed {
        function jsonItems(): any;
        function classList(): string[];
        function style(): string[];
    }
    function mounted(): void;
    function beforeDestroy(): void;
    namespace methods {
        function updateClientWidth(): void;
    }
    namespace props {
        let items: ArrayConstructor;
        let bgColor: StringConstructor;
    }
}
export default _default;
