declare namespace _default {
    let tagName: string;
    namespace props {
        namespace sections {
            let type: ArrayConstructor;
        }
        namespace headlineText {
            let type_1: StringConstructor;
            export { type_1 as type };
        }
        namespace color {
            let type_2: StringConstructor;
            export { type_2 as type };
        }
        namespace date {
            let type_3: StringConstructor;
            export { type_3 as type };
        }
        namespace location {
            let type_4: StringConstructor;
            export { type_4 as type };
        }
        namespace hint {
            let type_5: StringConstructor;
            export { type_5 as type };
        }
    }
    namespace computed {
        function mainStyle(): any;
    }
    function data(): {
        isReady: boolean;
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
        modalStore: null;
    };
    function mounted(): void;
    function beforeUnmount(): void;
    namespace methods {
        function registerDialogs(): void;
        function handleScroll(): void;
        function getDialogByIndex(index: any): any;
        function openDialog(index: any): void;
        function closeDialog(index: any): void;
    }
}
export default _default;
