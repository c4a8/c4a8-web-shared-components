export default PricingSlider;
declare class PricingSlider extends BaseComponent {
    constructor(root: any, options: any, pricing: any);
    selectedValue: number;
    products: any;
    range: any;
    pricing: any;
    currentPrice: number;
    setPricing(pricing: any): void;
    priceFormatter: Intl.NumberFormat | undefined;
    selectedPlan: any;
    /**
     * New prices or another currency after the slider started (a page that converts its
     * prices once it knows the visitor's country): format and show the current value again.
     * Before the slider started there is nothing to show; it reads the new list when it starts.
     */
    update(pricing: any, products: any): void;
    destroy(): void;
    init(): void;
    bindEvents(): void;
    info: any;
    infoHandler: any;
    handlers: {
        handleChange: any;
        fixSliderText: any;
        prepareSlider: any;
    } | undefined;
    handleInfoClick(): void;
    /**
     *
     * @param {object} slider contains from value
     * @param {boolean} updateElements standard is true, maybe overidden for return value
     * @returns price if updateElements is false
     */
    handlePricingSlider({ from }: object): void;
    getRecommendedProduct(selectedValue: any): null | undefined;
    formatExtraUsers(extraUsers: any): string;
    prepare(slider: any): void;
    fixText(): void;
    updateElements(price: any, product: any, extra: any): void;
}
import BaseComponent from './base-component.js.js';
