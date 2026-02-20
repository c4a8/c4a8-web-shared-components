declare namespace _default {
    let tagName: string;
    namespace props {
        namespace light {
            export let type: BooleanConstructor;
            let _default: boolean;
            export { _default as default };
        }
        let form: ObjectConstructor;
        let headline: ObjectConstructor;
        let formSuccessMessage: StringConstructor;
        let bgColor: StringConstructor;
        let img: ObjectConstructor;
        namespace spacing {
            let type_1: StringConstructor;
            export { type_1 as type };
            let _default_1: string;
            export { _default_1 as default };
        }
    }
    function data(): {
        loading: boolean;
        status: null;
    };
    namespace methods {
        function handleFormSuccess(status: any): void;
        function getLoadingStatus(loading: any): void;
    }
}
export default _default;
