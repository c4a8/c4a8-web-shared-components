declare namespace _default {
    let name: string;
    namespace props {
        namespace value {
            let type: (StringConstructor | NumberConstructor)[];
            let required: boolean;
        }
        namespace label {
            let type_1: StringConstructor;
            export { type_1 as type };
            let required_1: boolean;
            export { required_1 as required };
        }
        namespace bgColor {
            let type_2: StringConstructor;
            export { type_2 as type };
            let required_2: boolean;
            export { required_2 as required };
        }
        namespace fontColor {
            let type_3: StringConstructor;
            export { type_3 as type };
            let required_3: boolean;
            export { required_3 as required };
        }
    }
    function data(): {
        current: any;
        next: any;
        isFlipping: boolean;
    };
    namespace watch {
        function value(newVal: any, oldVal: any): void;
    }
    namespace methods {
        function setStyle(): void;
    }
    function mounted(): void;
    namespace computed {
        function color(): any;
    }
}
export default _default;
