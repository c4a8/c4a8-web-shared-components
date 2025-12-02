declare namespace _default {
    namespace props {
        namespace headline {
            export let type: StringConstructor;
            let _default: string;
            export { _default as default };
        }
        namespace headlineLevel {
            let type_1: (NumberConstructor | StringConstructor)[];
            export { type_1 as type };
            let _default_1: string;
            export { _default_1 as default };
        }
        namespace subline {
            let type_2: StringConstructor;
            export { type_2 as type };
            let _default_2: string;
            export { _default_2 as default };
        }
        namespace contents {
            let type_3: ArrayConstructor;
            export { type_3 as type };
            function _default_3(): never[];
            export { _default_3 as default };
        }
        namespace bgColor {
            let type_4: StringConstructor;
            export { type_4 as type };
            let _default_4: string;
            export { _default_4 as default };
        }
        namespace bgColorHover {
            let type_5: StringConstructor;
            export { type_5 as type };
            let _default_5: string;
            export { _default_5 as default };
        }
    }
    namespace computed {
        function listSize(): any;
        function isEven(): boolean;
    }
    namespace methods {
        function isOdd(index: any): boolean;
        function getAspectRatio(index: any): string;
        function handleScrollEvent(): void;
        function currentlyInViewPort(): void;
    }
    function mounted(): void;
    function beforeUnmount(): void;
}
export default _default;
