declare namespace _default {
    let tagName: string;
    namespace props {
        namespace bgColor {
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
        namespace iconColor {
            let type_2: StringConstructor;
            export { type_2 as type };
            let _default_2: string;
            export { _default_2 as default };
        }
        namespace text {
            let type_3: StringConstructor;
            export { type_3 as type };
        }
        namespace textMobile {
            let type_4: StringConstructor;
            export { type_4 as type };
        }
        namespace cta {
            let type_5: ObjectConstructor;
            export { type_5 as type };
            let _default_3: null;
            export { _default_3 as default };
        }
        namespace light {
            let type_6: BooleanConstructor;
            export { type_6 as type };
            let _default_4: boolean;
            export { _default_4 as default };
        }
    }
    namespace computed {
        function isMobile(): boolean;
        function classList(): (string | {
            [x: number]: any;
        })[];
        function contrastColor(): any;
        function bannerStyle(): any;
        function modalStyle(): any;
        function lottieSize(): 110 | 180;
        function lottieAnimation(): any;
    }
    function data(): {
        isExpanded: boolean;
        expandedClass: string;
        offScreenClass: string;
        success: boolean;
        idle: boolean;
        lottieFiles: null;
        observer: null;
    };
    function created(): void;
    function mounted(): void;
    namespace methods {
        function init(): void;
        function bindEvents(): void;
        function bindTriggerEvent(): void;
        function handleTriggerClick(e: any): void;
        function handleOutsideClick(e: any): void;
        function handleClick(): void;
        function hexToRGB(): void;
        function setLottieColors(): void;
        function onComplete(): void;
    }
    function beforeDestroy(): void;
}
export default _default;
