declare namespace _default {
    let name: string;
    function setup(props: any): {
        formattedMoment: import("vue").ComputedRef<any>;
    };
    namespace props {
        export namespace badge {
            export let type: ObjectConstructor;
            let _default: null;
            export { _default as default };
        }
        export let showBadge: BooleanConstructor;
        export namespace image {
            let type_1: ObjectConstructor;
            export { type_1 as type };
            let _default_1: null;
            export { _default_1 as default };
        }
        export namespace moment {
            let type_2: StringConstructor;
            export { type_2 as type };
            let _default_2: null;
            export { _default_2 as default };
        }
        export namespace time {
            let type_3: StringConstructor;
            export { type_3 as type };
            let _default_3: null;
            export { _default_3 as default };
        }
        export namespace headlineText {
            let type_4: StringConstructor;
            export { type_4 as type };
            export let required: boolean;
        }
        export namespace headlineLevel {
            let type_5: StringConstructor;
            export { type_5 as type };
            let _default_4: string;
            export { _default_4 as default };
        }
        export namespace headlineClasses {
            let type_6: StringConstructor;
            export { type_6 as type };
            let _default_5: string;
            export { _default_5 as default };
        }
        export namespace name_1 {
            let type_7: ArrayConstructor;
            export { type_7 as type };
            let _default_6: null;
            export { _default_6 as default };
        }
        export { name_1 as name };
        export namespace price {
            let type_8: StringConstructor;
            export { type_8 as type };
            let _default_7: null;
            export { _default_7 as default };
        }
    }
}
export default _default;
