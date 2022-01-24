import BaseComponent from './base-component.js';
import Tools from '../tools.js';
import State from '../state.js';

class TextAnimation extends BaseComponent {
  static rootSelector = '.text-animation';
  static instances = [];

  constructor(root, options) {
    super(root, options);

    const parent = Tools.getParentComponent(this.root);

    this.iconSelector = '.js-text-animation__icon';
    this.buttonSelector = '.text-animation__cta';
    this.placeHolderSelector = '.text-animation__placeholder';
    this.visibleSelector = '.text-animation__visible';
    this.textSelector = '.text-animation__text';
    this.sublineSelector = '.text-animation__subline';

    this.icon = parent?.querySelector(this.iconSelector);
    this.placeholder = this.root.querySelector(this.placeHolderSelector);
    this.visible = this.root.querySelector(this.visibleSelector);
    this.placeholderButton = this.placeholder?.querySelector(this.buttonSelector);
    this.placeholderText = this.placeholder?.querySelector(this.textSelector);
    this.placeholderSubline = this.placeholder?.querySelector(this.sublineSelector);
    this.button = this.visible?.querySelector(this.buttonSelector);
    this.text = this.visible?.querySelector(this.textSelector);
    this.subline = this.visible?.querySelector(this.sublineSelector);

    this.defaultTextSize = 'h1-font-size';
    this.defaultSublineSize = 'font-size-2';
    this.timeout = null;
    this.letterDelay = 120;
    this.sizeBasedDelay = this.letterDelay;
    this.minDelay = 3100;
    this.delayOffset = 3200;
    this.sublineDelay = 1150;
    this.buttonDelay = 800;
    this.step = 0;

    this.sequence = this.root.dataset.sequence ? JSON.parse(this.root.dataset.sequence) : [];

    this.start();
  }

  getDelayByValue(value) {
    switch (value) {
      case 1:
        this.sizeBasedDelay = this.letterDelay / 2.5;
        break;
      case 6:
      default:
        this.sizeBasedDelay = this.letterDelay;
        break;
    }
  }

  start() {
    this.animate();
  }

  calculateDelay() {
    this.currentSequenceStep = this.sequence[this.step];
    this.currentText = this.currentSequenceStep.text;
    this.currentTextSize = this.currentSequenceStep.textSize || this.defaultTextSize;

    const textSizeValue = parseInt(this.currentTextSize.match(/\d+/)[0]);

    this.getDelayByValue(textSizeValue);

    this.currentSubline = this.currentSequenceStep?.subline || '';
    this.currentDelay =
      this.currentText.length * this.sizeBasedDelay +
      this.delayOffset +
      (this.currentSubline.length > 0 ? this.sublineDelay : 0);

    if (this.currentDelay < this.minDelay) this.currentDelay = this.minDelay;
  }

  end() {
    window.clearTimeout(this.timeout);
  }

  next() {
    if (this.step >= this.sequence.length - 1) {
      // TODO remove me after testing
      this.icon.classList.remove(State.END);
      this.root.classList.remove(State.END);
      this.button.classList.toggle(State.INVISIBLE);
      this.icon?.classList.remove(`icon--step-3`);
      this.step = 0;
      this.animate();

      return;
    }

    this.step++;

    this.animate();

    if (!this.icon) return;

    this.icon.classList.remove(`icon--step-${this.step - 1}`);
    this.icon.classList.add(`icon--step-${this.step}`);
  }

  resetText() {
    this.text.innerHTML = '';
    this.subline.innerHTML = '';
    this.placeholderText.innerHTML = '';
    this.placeholderSubline.innerHTML = '';
    this.subline.classList.add(State.INVISIBLE);

    this.oldStep = this.sequence[this.step - 1];
    this.nextStep = this.sequence[this.step + 1] || this.sequence[0];

    this.text.classList.remove(this.currentTextSize);
    this.subline.classList.remove(this.currentSublineSize);
    this.placeholderText.classList.remove(this.currentTextSize);
    this.placeholderSubline.classList.remove(this.currentSublineSize);

    this.currentTextSize = this.nextStep.textSize || this.defaultTextSize;
    this.text.classList.add(this.currentTextSize);
    this.placeholderText.classList.add(this.currentTextSize);

    this.currentSublineSize = this.nextStep.sublineSize || this.defaultSublineSize;
    this.subline.classList.add(this.currentSublineSize);
    this.placeholderSubline.classList.add(this.currentSublineSize);
  }

  animate() {
    this.calculateDelay();
    this.animateText();

    this.timeout = setTimeout(() => {
      this.resetText();
      this.next();
    }, this.currentDelay);
  }

  animateText() {
    this.text.classList.add(this.currentTextSize);
    this.currentSublineSize = this.currentSequenceStep.sublineSize || this.defaultSublineSize;
    this.subline.classList.add(this.currentSublineSize);
    this.placeholderText.classList.add(this.currentTextSize);
    this.placeholderText.innerHTML = this.currentText;
    this.placeholderSubline.classList.add(this.currentSublineSize);
    this.placeholderSubline.innerHTML = this.currentSubline;

    if (this.step + 1 === this.sequence.length) {
      this.root.classList.add(State.END);
      this.icon.classList.add(State.END);
      this.placeholderButton.classList.remove(State.INVISIBLE);
    } else {
      this.placeholderButton.classList.add(State.INVISIBLE);
    }

    var textTimeout;

    for (let i = 0; i < this.currentText.length; i++) {
      textTimeout = i * this.sizeBasedDelay + this.sizeBasedDelay;

      setTimeout(() => {
        this.typeLetter(this.currentText[i]);
      }, textTimeout);
    }

    if (this.currentSubline.length) {
      textTimeout = textTimeout + this.sublineDelay;

      setTimeout(() => {
        this.subline.innerHTML = this.currentSubline;
        this.subline.classList.remove(State.INVISIBLE);
      }, textTimeout);
    }

    this.showButtonAtLastRun(textTimeout);
  }

  showButtonAtLastRun(timeout) {
    if (this.step + 1 < this.sequence.length) return;

    setTimeout(() => {
      // TODO comment this in when ready
      // this.end();
      this.button.classList.toggle(State.INVISIBLE);
    }, timeout + this.buttonDelay);
  }

  typeLetter(letter) {
    if (!letter) return;

    this.text.innerHTML = this.text.innerHTML + letter;
  }
}

export default TextAnimation;
