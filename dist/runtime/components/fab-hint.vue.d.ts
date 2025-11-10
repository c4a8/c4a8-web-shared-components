declare namespace _default {
    let tagName: string;
    function data(): {
        expaned: boolean;
        isVisible: boolean;
    };
    namespace computed {
        function classList(): string[];
        function containerStyle(): {
            '--fab-hint-icon-color'?: any;
            '--fab-hint-bg-color'?: any;
        };
        function iconValue(): any;
        function titleValue(): any;
        function enhancedText(): string;
    }
    function mounted(): void;
    function beforeUnmount(): void;
    namespace methods {
        function bindEvents(): void;
        function unbindEvents(): void;
        function handleOutsideClick(e: any): void;
        function handleClick(): void;
        function handleClose(): void;
        function handleScroll(): void;
    }
    namespace props {
        let icon: StringConstructor;
        let iconColor: StringConstructor;
        let bgColor: StringConstructor;
        let text: StringConstructor;
        let title: StringConstructor;
    }
}
export default _default;
