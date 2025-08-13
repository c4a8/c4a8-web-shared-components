declare namespace _default {
    let tagName: string;
    namespace props {
        namespace spacing {
            export let type: StringConstructor;
            let _default: string;
            export { _default as default };
        }
        namespace headline {
            let type_1: StringConstructor;
            export { type_1 as type };
            let _default_1: null;
            export { _default_1 as default };
        }
        namespace headlineLevel {
            let type_2: NumberConstructor;
            export { type_2 as type };
            let _default_2: number;
            export { _default_2 as default };
        }
        namespace subline {
            let type_3: StringConstructor;
            export { type_3 as type };
            let _default_3: null;
            export { _default_3 as default };
        }
        namespace contents {
            let type_4: ArrayConstructor;
            export { type_4 as type };
            export let required: boolean;
        }
        namespace bgColor {
            let type_5: StringConstructor;
            export { type_5 as type };
            let _default_4: null;
            export { _default_4 as default };
        }
        namespace bgColorHover {
            let type_6: StringConstructor;
            export { type_6 as type };
            let _default_5: null;
            export { _default_5 as default };
        }
        namespace cta {
            let type_7: ObjectConstructor;
            export { type_7 as type };
            function _default_6(): {
                text: null;
                toggleText: null;
                href: null;
            };
            export { _default_6 as default };
        }
        namespace limit {
            let type_8: NumberConstructor;
            export { type_8 as type };
            let _default_7: number;
            export { _default_7 as default };
        }
        namespace maxLimit {
            let type_9: NumberConstructor;
            export { type_9 as type };
            let _default_8: number;
            export { _default_8 as default };
        }
        namespace gridSize {
            let type_10: NumberConstructor;
            export { type_10 as type };
            let _default_9: number;
            export { _default_9 as default };
        }
    }
    function data(): any;
    function mounted(): void;
    namespace computed {
        function containerClasses(): any[];
        function columnClass(): string;
        function toggleCtaText(): any;
        function slicedContents(): any;
    }
    namespace methods {
        function toggleLimit(): void;
    }
}
export default _default;
