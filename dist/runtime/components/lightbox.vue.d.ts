declare namespace _default {
    let tagName: string;
    namespace props {
        namespace images {
            let type: ArrayConstructor;
            let required: boolean;
        }
        let classes: StringConstructor;
        let source: StringConstructor;
        let alt: StringConstructor;
        namespace cloudinary {
            let type_1: BooleanConstructor;
            export { type_1 as type };
            let _default: boolean;
            export { _default as default };
        }
        let sourceCaption: StringConstructor;
    }
    function data(): {
        isOpen: boolean;
        isMounted: boolean;
    };
    function mounted(): void;
    namespace methods {
        function open(): void;
        function close(): void;
    }
}
export default _default;
