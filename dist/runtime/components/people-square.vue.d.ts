declare namespace _default {
    let tagName: string;
    namespace props {
        namespace grid {
            let type: ArrayConstructor;
            let required: boolean;
        }
        namespace width {
            let type_1: NumberConstructor;
            export { type_1 as type };
            let _default: number;
            export { _default as default };
        }
        namespace height {
            let type_2: NumberConstructor;
            export { type_2 as type };
            let _default_1: number;
            export { _default_1 as default };
        }
        namespace absolute {
            let type_3: BooleanConstructor;
            export { type_3 as type };
            let _default_2: boolean;
            export { _default_2 as default };
        }
    }
    function data(): {
        animatedValues: {};
    };
    namespace computed {
        function peopleSquareSize(): any;
    }
    namespace methods {
        function isExtended(element: any): boolean;
        function getElementStyle(element: any, index: any): any;
        function numberValue(n: any): any;
        function playAnimation(n: any): void;
    }
    function mounted(): void;
}
export default _default;
