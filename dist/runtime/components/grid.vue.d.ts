declare namespace _default {
    let tagName: string;
    namespace computed {
        function headlineLevelValue(): any;
        function headlineClassesValue(): string;
        function style(): {
            backgroundColor: any;
            "--color-copy": string | null;
            "--color-headlines": string | null;
        };
        function itemsValue(): any;
    }
    namespace methods {
        function getItemStyle(index: any): any;
    }
    namespace props {
        let items: StringConstructor;
        let headline: StringConstructor;
        let headlineLevel: StringConstructor;
        let headlineClasses: StringConstructor;
        namespace light {
            let _default: boolean;
            export { _default as default };
        }
        let bgColor: StringConstructor;
    }
}
export default _default;
