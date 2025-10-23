declare namespace _default {
    let tagName: string;
    namespace props {
        namespace bgColor {
            export let type: StringConstructor;
            let _default: string;
            export { _default as default };
        }
        namespace icon {
            let type_1: StringConstructor;
            export { type_1 as type };
            let _default_1: string;
            export { _default_1 as default };
        }
        namespace modal {
            let type_2: ObjectConstructor;
            export { type_2 as type };
            let _default_2: null;
            export { _default_2 as default };
        }
        namespace noSticky {
            let type_3: BooleanConstructor;
            export { type_3 as type };
            let _default_3: boolean;
            export { _default_3 as default };
        }
        namespace iconColor {
            let type_4: StringConstructor;
            export { type_4 as type };
            let _default_4: null;
            export { _default_4 as default };
        }
        namespace text {
            let type_5: StringConstructor;
            export { type_5 as type };
        }
        namespace cta {
            let type_6: ObjectConstructor;
            export { type_6 as type };
            let _default_5: null;
            export { _default_5 as default };
        }
        namespace light {
            let type_7: BooleanConstructor;
            export { type_7 as type };
            let _default_6: boolean;
            export { _default_6 as default };
        }
    }
    namespace computed {
        function classList(): (string | {
            [x: number]: any;
        })[];
        function iconStyle(): {
            color: any;
        };
        function bannerStyle(): any;
        function success(): () => /*elided*/ any;
    }
    function data(): {
        resetDelay: number;
        isExpanded: boolean;
        expandedClass: string;
        offScreenClass: string;
        success: boolean;
        idle: boolean;
    };
    function mounted(): void;
    namespace methods {
        function setIdle(): void;
        function setSpeed(): string;
        function init(): void;
        function bindEvents(): void;
        function bindTriggerEvent(): void;
        function handleTriggerClick(e: any): void;
        function handleOutsideClick(e: any): void;
        function handleClose(): void;
        function handleClick(): void;
        function getContrastColor(): "var(--color-black)" | "var(--color-white)";
    }
    function beforeDestroy(): void;
}
export default _default;
