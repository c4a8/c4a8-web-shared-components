declare namespace _default {
    namespace props {
        namespace icon {
            export let type: StringConstructor;
            let _default: string;
            export { _default as default };
        }
        namespace modal {
            let type_1: ObjectConstructor;
            export { type_1 as type };
            let _default_1: null;
            export { _default_1 as default };
        }
        namespace bgColor {
            let type_2: StringConstructor;
            export { type_2 as type };
            let _default_2: null;
            export { _default_2 as default };
        }
        namespace iconColor {
            let type_3: StringConstructor;
            export { type_3 as type };
            let _default_3: null;
            export { _default_3 as default };
        }
    }
    function data(): {
        modalDisplay: string;
        buttonDisplay: string;
    };
    namespace computed {
        function fabButtonClass(): string[];
        function fabButtonIconStyle(): {
            display: any;
            color?: any;
            '--color-fab-background'?: any;
        };
        function modalStyle(): any;
    }
    function mounted(): void;
    function beforeDestroy(): void;
    namespace methods {
        function bindEvents(): void;
        function unbindEvents(): void;
        function handleOutsideClick(e: any): void;
        function toggleModal(): void;
    }
}
export default _default;
