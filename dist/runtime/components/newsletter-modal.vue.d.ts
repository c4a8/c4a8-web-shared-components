declare namespace _default {
    let tagName: string;
    namespace props {
        namespace bgColor {
            let type: StringConstructor;
        }
        namespace headline {
            let type_1: StringConstructor;
            export { type_1 as type };
        }
        namespace text {
            let type_2: StringConstructor;
            export { type_2 as type };
        }
        namespace formular {
            let type_3: ObjectConstructor;
            export { type_3 as type };
        }
        namespace lottie {
            let type_4: ObjectConstructor;
            export { type_4 as type };
        }
        namespace iconColor {
            let type_5: StringConstructor;
            export { type_5 as type };
            let _default: string;
            export { _default as default };
        }
        namespace confirmation {
            let type_6: ObjectConstructor;
            export { type_6 as type };
            let _default_1: null;
            export { _default_1 as default };
        }
        namespace light {
            let type_7: BooleanConstructor;
            export { type_7 as type };
            let _default_2: boolean;
            export { _default_2 as default };
        }
    }
    namespace computed {
        function formularConfig(): any;
        function contrastColor(): any;
        function currentHeadline(): any;
        function currentText(): any;
        function contentClasses(): string[];
        function headlineClasses(): string[];
        function formularClasses(): any;
        function containerClasses(): any;
        function lottieAnimation(): any;
        function lottieSpeed(): 1 | 40;
        function lottieSize(): 170 | 220;
        function iconHeartDisplay(): "" | "none";
        function birdAnimationClass(): "" | "fade-out-animation";
        function heartAnimationClass(): "" | "fade-in-animation";
        function iconHeartMobileClass(): any;
    }
    function data(): {
        success: boolean;
        idle: boolean;
        screenXS: boolean;
        heightFixed: string;
        isMobile: boolean;
    };
    function mounted(): void;
    function beforeUnmount(): void;
    namespace methods {
        function handleFormSubmit(event: any): void;
        function handleSuccess(): void;
        function setIdle(): void;
        function checkBreakpoint(): void;
    }
}
export default _default;
