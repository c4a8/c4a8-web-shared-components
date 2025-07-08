declare namespace _default {
    let tagName: string;
    function data(): {
        defaultIcon: string;
    };
    namespace computed {
        function classList(): string[];
        function itemsWithFallback(): any[];
    }
    namespace props {
        let items: ArrayConstructor;
    }
}
export default _default;
