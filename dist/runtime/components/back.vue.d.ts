declare namespace _default {
    let name: string;
    namespace props {
        namespace classes {
            export let type: StringConstructor;
            let _default: string;
            export { _default as default };
        }
        namespace fallback {
            let type_1: StringConstructor;
            export { type_1 as type };
            let _default_1: string;
            export { _default_1 as default };
        }
    }
    function data(): {
        State: {
            ACTIVE: string;
            READY: string;
            ERROR: string;
            VALID: string;
            SUCCESS: string;
            HAS_ERROR: string;
            HOVERING: string;
            DRAGGING: string;
            HIDDEN: string;
            INVISIBLE: string;
            EXPANDED: string;
            EXPANDABLE: string;
            OFF_SCREEN: string;
            COLLAPSED: string;
            IS_COLLAPSING: string;
            SHOW: string;
            FADE: string;
            INITIALIZED: string;
            LOADING: string;
            HIDE_LOADING: string;
            HAS_LOADING: string;
            END: string;
            IS_SCROLLED: string;
            MODAL_OPEN: string;
            HAS_BACKGROUND: string;
            IS_FULL: string;
            STICKY: string;
            IN_TRANSITION: string;
            IS_STARTING: string;
            ON_SURFACE: string;
        };
        canGoBack: boolean;
        hasInternalHistory: boolean;
    };
    function mounted(): void;
    namespace methods {
        function handleClick(e: any): void;
    }
}
export default _default;
