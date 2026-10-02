declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<{}, {}, {
    animation: null;
    containerId: string;
    isPlaying: boolean;
    isPaused: boolean;
    lottie: null;
}, {
    classList(): string[];
    containerStyle(): any;
}, {
    getSize(size: any): any;
    initAnimation(): void;
    play(): void;
    pause(): void;
    stop(): void;
    setSpeed(speed: any): void;
    setDirection(direction: any): void;
    goToAndPlay(value: any, isFrame?: boolean): void;
    goToAndStop(value: any, isFrame?: boolean): void;
    setSegment(segments: any): void;
    destroyAnimation(): void;
    onDOMLoaded(): void;
    onDataReady(): void;
    onComplete(): void;
    onLoopComplete(): void;
    onEnterFrame(event: any): void;
    onSegmentStart(event: any): void;
    onDestroy(): void;
    onError(error: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {
    path: string;
    height: string | number;
    background: string;
    width: string | number;
    direction: number;
    loop: number | boolean;
    autoplay: boolean;
    renderer: string;
    speed: number;
    segments: unknown[];
    noMargin: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
