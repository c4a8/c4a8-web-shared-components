declare namespace _default {
    let tagName: string;
    function data(): {
        bgColorRgbaValue: null;
    };
    namespace computed {
        function classList(): string[];
        function isCorporate(): boolean;
        function style(): string[];
        function dataValue(): any;
        function links(): any;
        function locations(): any[];
    }
    function mounted(): void;
    namespace methods {
        function bgColorRgba(): string | null;
    }
    namespace props {
        let data: ObjectConstructor;
        namespace noMargin {
            let type: BooleanConstructor;
        }
        let lang: StringConstructor;
    }
}
export default _default;
