declare namespace _default {
    let tagName: string;
    function data(): {
        expaned: boolean;
        translationData: {};
    };
    namespace computed {
        function classList(): string[];
        function offsetTop(): number;
        function options(): {};
        function containerStyle(): {
            '--fab-hint-icon-color'?: any;
            '--fab-hint-bg-color'?: any;
        };
        function iconValue(): any;
        function titleValue(): any;
        function enhancedText(): string;
    }
    function beforeMount(): void;
    function mounted(): void;
    namespace methods {
        function addObserver(): void;
        function isVisible(style: any): boolean;
        function handleClick(): void;
        function handleClose(): void;
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
