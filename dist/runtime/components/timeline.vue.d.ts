declare namespace _default {
    let tagName: string;
    let components: {
        'timeline-entry-inner-text': {
            tagName: string;
            computed: {};
            template: string;
            props: {
                entry: ObjectConstructor;
                simple: BooleanConstructor;
            };
        };
    };
    namespace computed {
        function classList(): any[];
        function copyColor(): any;
        function backgroundColor(): any;
        function style(): string;
        function headlineClasses(): string;
        function lineEndStyle(): string;
        function simpleValue(): boolean;
        function iconName(): string;
    }
    function mounted(): void;
    function data(): {
        lastIndex: null;
        isReady: boolean;
        startDelay: number;
        isVisible: boolean;
        percentageInViewport: number;
        minPercentage: number;
        maxPercentage: number;
        entryContainerStates: never[];
        entryContainerStyles: never[];
    };
    namespace methods {
        function bindEvents(): void;
        function startAnimation(): void;
        function getEntryLineStyle(index: any): string;
        function handleScroll(): void;
        function updateAnimation(): void;
        function setAnimationStart(): void;
        function setAnimationEnd(): void;
        function showEntryByPercent(percentage: any): void;
        function updateNextStep(index: any, percentage: any, stepSize: any): void;
        function getEntryContainerClasses(index: any): any[];
        function getEntryContainerStyle(index: any): string;
        function getScrollPercentage(): number | undefined;
        function isInViewport(): void;
    }
    namespace props {
        let headline: ObjectConstructor;
        namespace bgColor {
            let _default: null;
            export { _default as default };
        }
        namespace color {
            let _default_1: null;
            export { _default_1 as default };
        }
        let entries: ArrayConstructor;
        namespace expanded {
            let _default_2: null;
            export { _default_2 as default };
        }
        let spacing: StringConstructor;
        namespace simple {
            let _default_3: null;
            export { _default_3 as default };
        }
        let subline: StringConstructor;
    }
}
export default _default;
