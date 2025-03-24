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
    }
    namespace computed {
        function classList(): any[];
        function contactVariantClass(): string[];
        function contactLight(): "" | "contact__person--light";
        function contactBoxClass(): "" | "col-md-10 col-lg-5 offset-lg-1 order-2";
        function contactFormClass(): "" | "col-md-10 col-lg-6 order-1";
        function contactContainerClass(): "" | "container pt-8 pt-lg-10";
        function contactRowClass(): "" | "row justify-content-center";
        function styleObject(): {
            '--color-contact-background': any;
            '--contact-copy-color': any;
            '--color-contact-box-background': any;
            '--contact-box-copy-color': any;
        };
    }
}
export default _default;
