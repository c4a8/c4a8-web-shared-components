declare namespace _default {
    let tagName: string;
    namespace props {
        namespace calendarId {
            export let type: StringConstructor;
            let _default: string;
            export { _default as default };
        }
        namespace calLink {
            let type_1: StringConstructor;
            export { type_1 as type };
            let _default_1: string;
            export { _default_1 as default };
        }
        namespace lightBrandColor {
            let type_2: StringConstructor;
            export { type_2 as type };
            let _default_2: string;
            export { _default_2 as default };
        }
        namespace darkBrandColor {
            let type_3: StringConstructor;
            export { type_3 as type };
            let _default_3: string;
            export { _default_3 as default };
        }
    }
    namespace computed {
        function calendarElementId(): string;
    }
    function mounted(): void;
    namespace methods {
        function initCal(): void;
    }
}
export default _default;
