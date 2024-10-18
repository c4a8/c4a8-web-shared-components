declare namespace _default {
    let tagName: string;
    let components: {
        'logo-list-items': {
            tagName: string;
            computed: {};
            methods: {
                getItemComponent(item: any): "a" | "span";
                getDelay(index: any): string;
                getIndex(index: any): any;
            };
            template: string;
            props: {
                list: ArrayConstructor;
                isOverlapping: BooleanConstructor;
                isClone: BooleanConstructor;
            };
        };
    };
    function mounted(): void;
    namespace computed {
        function defaultSpacing(): void;
        function classList(): any;
        function isOverlapping(): any;
        function columnsValue(): string;
        function aspectRatioValue(): any;
        function styles(): any;
    }
    namespace props {
        let list: ArrayConstructor;
        namespace sticky {
            let _default: boolean;
            export { _default as default };
        }
        let spacing: StringConstructor;
        let columns: NumberConstructor;
        namespace aspectRatio {
            let _default_1: boolean;
            export { _default_1 as default };
        }
        namespace overlapping {
            let _default_2: boolean;
            export { _default_2 as default };
        }
        let bgColor: StringConstructor;
    }
}
export default _default;
