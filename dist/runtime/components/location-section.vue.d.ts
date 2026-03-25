declare namespace _default {
    let tagName: string;
    function data(): {
        instanceId: number;
    };
    namespace props {
        let classes: StringConstructor;
        let overline: StringConstructor;
        let headline: StringConstructor;
        let locationHeadline: StringConstructor;
        let contactHeadline: StringConstructor;
        let locationEntries: ObjectConstructor;
        let locationCta: ObjectConstructor;
        let contactEntries: ArrayConstructor;
        let landingpageCta: ObjectConstructor;
        let images: ArrayConstructor;
        namespace backgroundColor {
            export let type: StringConstructor;
            let _default: string;
            export { _default as default };
        }
    }
    namespace computed {
        function classList(): any;
        function sliderConfig(): any;
    }
}
export default _default;
