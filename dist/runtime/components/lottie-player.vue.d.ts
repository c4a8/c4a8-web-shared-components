declare namespace _default {
    let name: string;
    let tagName: string;
    function data(): {
        animation: null;
        containerId: string;
        isPlaying: boolean;
        isPaused: boolean;
        lottie: null;
    };
    namespace computed {
        function classList(): string[];
        function containerStyle(): any;
    }
    namespace props {
        namespace animationData {
            let type: ObjectConstructor;
            let required: boolean;
        }
        namespace path {
            let type_1: StringConstructor;
            export { type_1 as type };
            let _default: string;
            export { _default as default };
        }
        namespace loop {
            let type_2: (BooleanConstructor | NumberConstructor)[];
            export { type_2 as type };
            let _default_1: boolean;
            export { _default_1 as default };
        }
        namespace autoplay {
            let type_3: BooleanConstructor;
            export { type_3 as type };
            let _default_2: boolean;
            export { _default_2 as default };
        }
        namespace width {
            let type_4: (NumberConstructor | StringConstructor)[];
            export { type_4 as type };
            let _default_3: string;
            export { _default_3 as default };
        }
        namespace height {
            let type_5: (NumberConstructor | StringConstructor)[];
            export { type_5 as type };
            let _default_4: string;
            export { _default_4 as default };
        }
        namespace background {
            let type_6: StringConstructor;
            export { type_6 as type };
            let _default_5: string;
            export { _default_5 as default };
        }
        namespace renderer {
            let type_7: StringConstructor;
            export { type_7 as type };
            let _default_6: string;
            export { _default_6 as default };
            export function validator(value: any): boolean;
        }
        namespace speed {
            let type_8: NumberConstructor;
            export { type_8 as type };
            let _default_7: number;
            export { _default_7 as default };
        }
        namespace direction {
            let type_9: NumberConstructor;
            export { type_9 as type };
            let _default_8: number;
            export { _default_8 as default };
            export function validator_1(value: any): boolean;
            export { validator_1 as validator };
        }
        namespace segments {
            let type_10: ArrayConstructor;
            export { type_10 as type };
            function _default_9(): never[];
            export { _default_9 as default };
        }
        namespace noMargin {
            let type_11: BooleanConstructor;
            export { type_11 as type };
            let _default_10: boolean;
            export { _default_10 as default };
        }
    }
    function mounted(): Promise<void>;
    function beforeUnmount(): void;
    namespace methods {
        function getSize(size: any): any;
        function initAnimation(): void;
        function play(): void;
        function pause(): void;
        function stop(): void;
        function setSpeed(speed: any): void;
        function setDirection(direction: any): void;
        function goToAndPlay(value: any, isFrame?: boolean): void;
        function goToAndStop(value: any, isFrame?: boolean): void;
        function setSegment(segments: any): void;
        function destroyAnimation(): void;
        function onDOMLoaded(): void;
        function onDataReady(): void;
        function onComplete(): void;
        function onLoopComplete(): void;
        function onEnterFrame(event: any): void;
        function onSegmentStart(event: any): void;
        function onDestroy(): void;
        function onError(error: any): void;
    }
    namespace watch {
        export namespace animationData_1 {
            function handler(): void;
            let deep: boolean;
        }
        export { animationData_1 as animationData };
        export function path(): void;
        export function loop(): void;
        export function autoplay(): void;
        export function speed(): void;
        export function direction(): void;
        export function segments(): void;
    }
}
export default _default;
