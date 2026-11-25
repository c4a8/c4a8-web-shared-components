import BaseComponent from './base-component.js';
import Modal from '../modal.js';
import Tools from '../tools.js';

class PricingSlider extends BaseComponent {
  static rootSelector = '.pricing-slider';

  constructor(root, options, pricing) {
    super(root, options);

    this.selectedValue = 0;
    this.products = null;
    this.range = null;
    this.currentPrice = 0;

    this.setPricing(pricing);
    this.init();
  }

  // TODO move to a product related component
  setPricing(pricing) {
    this.pricing = pricing;

    const pricingData = this.pricing
      ? this.pricing
      : {
          format: 'de-DE',
          currency: 'EUR',
          defaultPlan: 'monthly',
        };

    // the price table's formatter (currency display, cents), but whole amounts without ",00":
    // "8.250 €" and "$10,395" as before, "$14,602.50" where a converted price has cents
    this.priceFormatter = Tools.getPriceFormatter(pricingData, { trailingZeroDisplay: 'stripIfInteger' });

    this.selectedPlan = ['monthly', 'annual'].includes(pricingData.defaultPlan)
      ? pricingData.defaultPlan
      : console.error('Please provide a valid plan in site.data.products.pricing.defaultPlan: "annual" or "monthly"!');
  }

  /**
   * New prices or another currency after the slider started (a page that converts its
   * prices once it knows the visitor's country): format and show the current value again.
   * Before the slider started there is nothing to show; it reads the new list when it starts.
   */
  update(pricing, products) {
    this.setPricing(pricing);

    if (!this.range) return;

    this.products = products || this.products;
    this.handlePricingSlider({ from: this.selectedValue });
  }

  // Removes the window handlers, if they are still this instance's, so the next slider can bind its own
  destroy() {
    if (this.handlers) {
      Object.entries(this.handlers).forEach(([name, handler]) => {
        if (window[name] === handler) delete window[name];
      });
    }

    if (this.info && this.infoHandler) {
      this.info.removeEventListener('click', this.infoHandler);
    }
  }

  init() {
    if (window.handleChange) return console.error('remove handleChange from app.js');

    this.bindEvents();
  }

  bindEvents() {
    this.info = this.root.querySelector('.pricing-slider__info');

    if (this.info) {
      this.infoHandler = this.handleInfoClick.bind(this);
      this.info.addEventListener('click', this.infoHandler);
    }

    // TODO rename after global migration
    this.handlers = {
      handleChange: this.handlePricingSlider.bind(this),
      fixSliderText: this.fixText.bind(this),
      prepareSlider: this.prepare.bind(this),
    };

    Object.assign(window, this.handlers);
  }

  handleInfoClick() {
    const modal = this.root.querySelector('.pricing-slider__modal');

    Modal.open(modal);
  }

  /**
   *
   * @param {object} slider contains from value
   * @param {boolean} updateElements standard is true, maybe overidden for return value
   * @returns price if updateElements is false
   */
  handlePricingSlider({ from }) {
    this.selectedValue = parseInt(from);

    const product = this.getRecommendedProduct(this.selectedValue);

    if (!product) return;

    const extraUsers = this.selectedValue - product.value;

    // to the cent: converted prices have cents ("14,602.50"), the table shows them too
    var price =
      Math.round(
        (parseFloat(product.price[this.selectedPlan]) +
          extraUsers * parseFloat(product.additionalUsersFee[this.selectedPlan])) *
          100,
      ) / 100;

    this.currentPrice = price;

    this.updateElements(this.priceFormatter.format(price), product.title, this.formatExtraUsers(extraUsers));
  }

  getRecommendedProduct(selectedValue) {
    let recommendedProduct = null;

    const errorMessage = `No products found for value ${selectedValue} in site.data.products.list`;

    if (this.products) {
      this.products.forEach(function (product) {
        if (product.value <= selectedValue) {
          recommendedProduct = product;
        }
      });

      if (!recommendedProduct) console.error(errorMessage);

      return recommendedProduct;
    } else {
      console.error(errorMessage);
    }
  }

  formatExtraUsers(extraUsers) {
    const unit = this.range.unit;

    if (extraUsers > 0) {
      return '+ ' + extraUsers + ' ' + unit;
    } else {
      return '';
    }
  }

  prepare(slider) {
    const dataElement = document.querySelector('.js-slider-data');
    const timeout = 5;

    this.products = JSON.parse(dataElement.dataset.products);
    this.range = JSON.parse(dataElement.dataset.range);

    this.selectedValue = slider.from;

    setTimeout(() => {
      this.fixText();
    }, timeout);
  }

  fixText() {
    const sliderTextElement = document.querySelector('.irs-single');

    // the timeout of prepare() can fire after the slider is gone
    if (!sliderTextElement || !this.range) return;

    const currentSliderContent = sliderTextElement.innerHTML;

    if (!currentSliderContent.includes(this.range.unit)) {
      sliderTextElement.innerHTML = [currentSliderContent, this.range.unit].join(' ');
    }
  }

  updateElements(price, product, extra) {
    const priceElement = document.querySelector('.js-result-price');
    const productElement = document.querySelector('.js-result-product');
    const extraElement = document.querySelector('.js-result-extra');

    priceElement.innerHTML = price;
    productElement.innerHTML = product;
    extraElement.innerHTML = extra;

    this.fixText();
  }
}

export default PricingSlider;
