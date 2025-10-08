declare namespace _default {
    let tagName: string;
    namespace props {
        namespace serviceOverview {
            export let type: ObjectConstructor;
            let _default: null;
            export { _default as default };
        }
        namespace content {
            let type_1: StringConstructor;
            export { type_1 as type };
            export let required: boolean;
        }
        namespace quote {
            let type_2: (ObjectConstructor | ArrayConstructor)[];
            export { type_2 as type };
            let _default_1: null;
            export { _default_1 as default };
        }
        namespace blogRecent {
            let type_3: ObjectConstructor;
            export { type_3 as type };
            let _default_2: null;
            export { _default_2 as default };
        }
    }
    namespace computed {
        function stickyBlockOptions(): string;
    }
}
export default _default;
