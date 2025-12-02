declare namespace _default {
    let tagName: string;
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
        namespace noSticky {
            let type_2: BooleanConstructor;
            export { type_2 as type };
            let _default_2: boolean;
            export { _default_2 as default };
        }
        namespace bgColor {
            let type_3: StringConstructor;
            export { type_3 as type };
            let _default_3: null;
            export { _default_3 as default };
        }
        namespace iconColor {
            let type_4: StringConstructor;
            export { type_4 as type };
            let _default_4: null;
            export { _default_4 as default };
        }
        namespace trigger {
            let type_5: (StringConstructor | NumberConstructor)[];
            export { type_5 as type };
            let _default_5: null;
            export { _default_5 as default };
        }
    }
    namespace computed {
        function classList(): (string | {
            [x: number]: any;
        })[];
        function iconStyle(): {
            '--color-fab-background': any;
            color: any;
        };
    }
    function data(): {
        resetDelay: number;
        isExpanded: boolean;
        hasTrigger: boolean;
        expandedClass: string;
        offScreenClass: string;
        hasTriggerClass: string;
    };
    function mounted(): void;
    namespace methods {
        function init(): void;
        function bindEvents(): void;
        function bindTriggerEvent(): void;
        function handleTriggerClick(e: any): void;
        function handleOutsideClick(e: any): void;
        function handleSubmit(): void;
        function handleClose(): void;
        function handleClick(): void;
    }
    function beforeDestroy(): void;
}
export default _default;
