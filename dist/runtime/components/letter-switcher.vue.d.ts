declare namespace _default {
    let tagName: string;
    function data(): {
        show: boolean;
        end: boolean;
        overline: string;
        endDelay: number;
        startDelay: number;
        isLower: null;
    };
    namespace computed {
        function classList(): string[];
        function fontSize(): "font-size-5" | "font-size-6 bold";
        function letterSwitchEndClassList(): (string | (() => "font-size-5" | "font-size-6 bold"))[];
        function letterSwitchAnimationClassList(): (string | (() => "font-size-5" | "font-size-6 bold"))[];
    }
    function mounted(): void;
    namespace methods {
        function bindEvents(): void;
        function handleResize(): void;
        function isLowerBreakpoint(): boolean;
        function setHeight(): void;
        function startAnimation(): void;
        function showEndAnimation(): void;
        function switchOverline(callback: any): void;
        function emitEnded(): void;
    }
    namespace props {
        let textStart: StringConstructor;
        let textEnd: StringConstructor;
        let overlineStart: StringConstructor;
        let overlineEnd: StringConstructor;
    }
}
export default _default;
