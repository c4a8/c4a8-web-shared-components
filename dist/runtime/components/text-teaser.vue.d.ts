declare namespace _default {
    let tagName: string;
    namespace computed {
        function classList(): any[];
        function style(): string[];
        function rowBackgroundClass(): string[];
        function colBackgroundClass(): string[];
        function ctaListClass(): string[];
        function logoClass(): string[];
        function ctaListNormalize(): any;
    }
    function mounted(): void;
    namespace props {
        let ctaList: ArrayConstructor;
        let spacing: StringConstructor;
        let background: StringConstructor;
        let bgColor: StringConstructor;
        let logo: ObjectConstructor;
        let copy: StringConstructor;
    }
}
export default _default;
