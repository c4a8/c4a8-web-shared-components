declare namespace _default {
    let tagName: string;
    function data(): {
        expaned: boolean;
        isVisible: boolean;
    };
    namespace computed {
        function classList(): string[];
    }
    function mounted(): void;
    function beforeUnmount(): void;
    namespace methods {
        function bindEvents(): void;
        function unbindEvents(): void;
        function handleClick(): void;
        function handleScroll(): void;
    }
}
export default _default;
