declare namespace _default {
    let tagName: string;
    namespace computed {
        function classValue(): string[];
        function colorStyling(): any[];
    }
    function mounted(): void;
    namespace props {
        let classes: StringConstructor;
        let headline: StringConstructor;
        let level: StringConstructor;
        let bgColor: StringConstructor;
        let headlineColor: StringConstructor;
        namespace headlineSticky {
            let _default: boolean;
            export { _default as default };
        }
        let spacing: StringConstructor;
    }
}
export default _default;
