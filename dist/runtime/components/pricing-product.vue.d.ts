declare namespace _default {
    let tagName: string;
    namespace props {
        let product: ObjectConstructor;
        let index: NumberConstructor;
        let hasAnimation: BooleanConstructor;
        let targetSelectorClass: StringConstructor;
        namespace visibleTabs {
            export let type: ArrayConstructor;
            let _default: null;
            export { _default as default };
        }
        let selectedPlan: StringConstructor;
        let pricing: ObjectConstructor;
    }
    function mounted(): void;
    namespace watch {
        namespace product {
            let handler: string;
            let deep: boolean;
            let flush: string;
        }
        namespace pricing {
            let handler_1: string;
            export { handler_1 as handler };
            let deep_1: boolean;
            export { deep_1 as deep };
            let flush_1: string;
            export { flush_1 as flush };
        }
    }
    namespace methods {
        function updatePrices(): void;
    }
    namespace computed {
        function title(): any;
        function description(): any;
        function price(): any;
        function additionalUsersFee(): any;
        function buttons(): any;
        function includedTargetSelectorClass(): any;
        function computedTargetSelectorClass(): any;
        function visibleTabExpression(): (item: any) => any;
        function filterExpression(): (item: any) => any;
        function filteredButtons(): any;
        function visibleTabButtons(): any;
        function buttonClasses(): string;
        function pricingProductClasses(): string[];
        function pricingProductPriceColumns(): string[];
    }
}
export default _default;
