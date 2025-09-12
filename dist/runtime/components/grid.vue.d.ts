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
    }
    function mounted(): void;
    namespace methods {
        function getItemStyle(index: any): string;
    }
    namespace props {
        namespace items {
            export let type: ArrayConstructor;
            function _default(): never[];
            export { _default as default };
        }
        let headline: StringConstructor;
        let headlineLevel: StringConstructor;
        let headlineClasses: StringConstructor;
        namespace light {
            let _default_1: boolean;
            export { _default_1 as default };
        }
        let bgColor: StringConstructor;
    }
}
export default _default;
