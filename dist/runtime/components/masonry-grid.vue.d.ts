declare namespace _default {
    let tagName: string;
    function data(): any;
    namespace computed {
        function headlineValue(): any;
        function styleVars(): any;
        function displayedItems(): any;
        function showLoadMore(): any;
    }
    namespace watch {
        function items(): void;
        function initialItemsCount(newVal: any): void;
    }
    function mounted(): void;
    function updated(): void;
    namespace methods {
        function reinitUtilityAnimation(): void;
        function loadMore(): void;
    }
    namespace props {
        namespace items {
            export let type: ArrayConstructor;
            function _default(): never[];
            export { _default as default };
        }
        namespace columns {
            let type_1: ObjectConstructor;
            export { type_1 as type };
            function _default_1(): {
                sm: number;
                md: number;
                lg: number;
                xl: number;
            };
            export { _default_1 as default };
        }
        namespace gap {
            let type_2: StringConstructor;
            export { type_2 as type };
            let _default_2: string;
            export { _default_2 as default };
        }
        namespace observeOnScroll {
            let type_3: BooleanConstructor;
            export { type_3 as type };
            let _default_3: boolean;
            export { _default_3 as default };
        }
        namespace initialItemsCount {
            let type_4: NumberConstructor;
            export { type_4 as type };
            let _default_4: null;
            export { _default_4 as default };
        }
        namespace itemsPerLoad {
            let type_5: NumberConstructor;
            export { type_5 as type };
            let _default_5: number;
            export { _default_5 as default };
        }
        namespace headline {
            let type_6: ObjectConstructor;
            export { type_6 as type };
            let _default_6: null;
            export { _default_6 as default };
        }
        namespace socials {
            let type_7: ArrayConstructor;
            export { type_7 as type };
            function _default_7(): {
                icon: string;
                url: string;
                title: string;
            }[];
            export { _default_7 as default };
        }
    }
}
export default _default;
