declare namespace _default {
    let tagName: string;
    function data(): {
        isFadingOut: boolean;
        isFadingIn: boolean;
        currentIndex: number;
        timeout: null;
        timeoutDelay: number;
        reducedTimeoutDelay: number;
        skipTransitionEnd: boolean;
    };
    namespace computed {
        function logo(): any;
        function currentEntry(): any;
        function isInAnimation(): any;
        function isFirstEntryOrInAnimation(): any;
        function isLastEntryOrInAnimation(): any;
    }
    function mounted(): void;
    function beforeDestroy(): void;
    namespace methods {
        function emitTransitionEnd(): void;
        function resetTransitions(): void;
        function handleTransitionEnd(): void;
        function resetTranstitionsFallback(): void;
        function update(forced?: boolean): void;
    }
    namespace watch {
        function index(): void;
    }
    namespace props {
        let pagination: BooleanConstructor;
        let lastIndex: NumberConstructor;
        let index: NumberConstructor;
        let currentPage: NumberConstructor;
        let lastPage: NumberConstructor;
        let entry: ObjectConstructor;
        let entries: ArrayConstructor;
        let prev: FunctionConstructor;
        let next: FunctionConstructor;
        let isFirstEntry: BooleanConstructor;
        let isLastEntry: BooleanConstructor;
        let reducedAnimation: BooleanConstructor;
    }
}
export default _default;
