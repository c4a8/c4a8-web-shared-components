declare namespace _default {
    let name: string;
    namespace props {
        namespace targetDate {
            let type: (DateConstructor | StringConstructor)[];
            let required: boolean;
        }
        namespace bgColor {
            let type_1: StringConstructor;
            export { type_1 as type };
            let required_1: boolean;
            export { required_1 as required };
            let _default: string;
            export { _default as default };
        }
        namespace fontColor {
            let type_2: StringConstructor;
            export { type_2 as type };
            let required_2: boolean;
            export { required_2 as required };
            let _default_1: string;
            export { _default_1 as default };
        }
    }
    function data(): {
        timeLeft: {
            days: number;
            hours: number;
            minutes: number;
            seconds: number;
        };
        intervalId: null;
    };
    namespace methods {
        function calculateTimeLeft(target: any): {
            days: number;
            hours: number;
            minutes: number;
            seconds: number;
        };
        function updateCountdown(): void;
    }
    function mounted(): void;
    function beforeUnmount(): void;
    namespace watch {
        function targetDate(): void;
    }
}
export default _default;
