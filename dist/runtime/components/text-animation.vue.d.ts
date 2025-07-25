declare namespace _default {
    let tagName: string;
    namespace props {
        let sequence: ObjectConstructor;
        let fixed: BooleanConstructor;
        let cta: ObjectConstructor;
    }
    function data(): {
        defaultTextSize: string;
        defaultSublineSize: string;
        timeout: null;
        textTimeout: null;
        letterDelay: number;
        sizeBasedDelay: null;
        minDelay: number;
        currentDelay: number;
        lastDelay: number;
        delayOffset: number;
        sublineDelay: number;
        buttonDelay: number;
        step: number;
        textValue: string;
        currentSubline: string;
        currentSublineSize: null;
        currentTextSize: string;
        currentText: string;
        isEnded: boolean;
        isSecondLast: boolean;
        showSubline: boolean;
        sublineValue: null;
        isCalculated: boolean;
        calculationStep: number;
        calculatedMaxHeight: number;
    };
    namespace computed {
        function classList(): string[];
        function isFixed(): boolean;
        function textClassList(): any[];
        function sublineClassList(): any[];
        function placeholderSublineClassList(): any[];
        function placeholderTextClassList(): any[];
        function placeholderCtaClassList(): string[];
        function ctaClassList(): string[];
        function sequenceData(): any;
        function ctaData(): any;
    }
    namespace methods {
        function getDelayByValue(value: any): void;
        function calculateDelay(): void;
        function showButtonAtLastRun(timeout: any): void;
        function end(): void;
        function next(): void;
        function animateText(): void;
        function resetText(): void;
        function animate(): void;
        function typeLetter(letter: any): void;
        function calculateNextMaxHeight(): any;
        function handleResize(): void;
    }
    function updated(): void;
    function created(): void;
    function beforeDestroy(): void;
    function mounted(): void;
    namespace watch {
        function isCalculated(newValue: any): void;
    }
}
export default _default;
