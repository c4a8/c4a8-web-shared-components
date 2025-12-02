declare namespace _default {
    namespace props {
        let tabs: {
            id: StringConstructor;
            open: BooleanConstructor;
            headlineText: StringConstructor;
            headlineLevel: (StringConstructor | NumberConstructor)[];
            headlineClasses: (ObjectConstructor | ArrayConstructor | StringConstructor)[];
            content: {
                headline: StringConstructor;
                headlineLevel: StringConstructor;
                copy: StringConstructor;
                grid: ObjectConstructor;
            };
        }[];
    }
}
export default _default;
