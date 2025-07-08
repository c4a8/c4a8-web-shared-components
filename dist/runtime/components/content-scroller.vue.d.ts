declare namespace _default {
    let tagName: string;
    function data(): {
        blockScrollPercentage: never[];
        scrollDistancePercentage: number;
        minHeight: number;
        blockCount: number;
        isScrolledUpOut: boolean;
        isScrolledDownOut: boolean;
    };
    namespace computed {
        function classList(): (string | (() => any))[];
        function blocksValue(): any;
        function headlineValue(): any;
        function overlappingSizeValue(): any;
        function style(): any;
    }
    namespace props {
        namespace headline {
            let _default: null;
            export { _default as default };
        }
        namespace subline {
            export let type: StringConstructor;
            let _default_1: string;
            export { _default_1 as default };
        }
        namespace sublineClasses {
            let type_1: StringConstructor;
            export { type_1 as type };
            let _default_2: null;
            export { _default_2 as default };
        }
        let blocks: ArrayConstructor;
        let overlappingSize: StringConstructor;
        namespace skin {
            let type_2: StringConstructor;
            export { type_2 as type };
            let _default_3: string;
            export { _default_3 as default };
        }
        namespace footerHeadline {
            let type_3: StringConstructor;
            export { type_3 as type };
            let _default_4: string;
            export { _default_4 as default };
        }
        namespace footerSubline {
            let type_4: StringConstructor;
            export { type_4 as type };
            let _default_5: string;
            export { _default_5 as default };
        }
    }
    function mounted(): void;
    function beforeDestroy(): void;
    namespace methods {
        function handleScroll(): void;
        function handleResize(): void;
        function resetIsScrolledUpOut(): void;
        function resetIsScrolledDownOut(): void;
        function setBlockMaxPercentage(index: any): void;
        function setBlockMinPercentage(index: any): void;
        function updateBlocks(): void;
        function getViewportHeight(): number;
        function calcScrollDistancePercentage(): void;
        function calcBlockCount(): void;
        function calcBlockStyle(index: any): {
            '--content-scroller-block-scroll-percentage': any;
        }[];
        function calcMinHeight(): void;
    }
}
export default _default;
