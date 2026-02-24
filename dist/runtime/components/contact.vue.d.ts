declare namespace _default {
    let tagName: string;
    namespace props {
        let contact: ObjectConstructor;
        let collapsed: BooleanConstructor;
        let ajax: BooleanConstructor;
        let spacing: StringConstructor;
        namespace quote {
            export let type: BooleanConstructor;
            let _default: boolean;
            export { _default as default };
        }
        let bgColor: StringConstructor;
        let color: StringConstructor;
        let boxBgColor: StringConstructor;
        let boxColor: StringConstructor;
        let level: StringConstructor;
        let headline: StringConstructor;
        let subline: StringConstructor;
        let form: ObjectConstructor;
        let buttons: ArrayConstructor;
        let person: ObjectConstructor;
        let noTopSpacing: BooleanConstructor;
        let light: BooleanConstructor;
        let hasGreyBackground: BooleanConstructor;
        let svgShape: ObjectConstructor;
        namespace small {
            let type_1: BooleanConstructor;
            export { type_1 as type };
            let _default_1: boolean;
            export { _default_1 as default };
        }
        namespace quoteColor {
            let type_2: StringConstructor;
            export { type_2 as type };
            let _default_2: string;
            export { _default_2 as default };
        }
        namespace onSurface {
            let type_3: BooleanConstructor;
            export { type_3 as type };
            let _default_3: boolean;
            export { _default_3 as default };
        }
    }
    function data(): {
        loadingDelay: number;
        sleepDelay: number;
        loading: {};
        hasLoading: boolean;
        hasLoader: boolean;
    };
    function mounted(): void;
    namespace methods {
        function startLoading(): void;
        function stopLoading(): void;
    }
    namespace computed {
        function loaderClasses(): string[];
        function classList(): any[];
        function contactVariantClass(): string[];
        function contactLight(): "" | "contact__person--light";
        function contactBoxClass(): "" | "col-md-10 col-lg-5 offset-lg-1 order-2";
        function contactPersonClass(): any;
        function contactFormClass(): any;
        function contactContainerClass(): string;
        function contactRowClass(): string[];
        function styleObject(): any;
    }
}
export default _default;
