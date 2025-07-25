<template>
  <span :class="classList" :style="parentStyle">
    <component
      :is="icon"
      v-bind="settings"
      :color="props.color"
      :closed="closed"
      :step="step"
      :stroke-width="strokeWidth"
    />
  </span>
</template>
<script>
import Tools from '../utils/tools.js';

// TODO figure out why auto-import does not work here correctly. rendering it manually works fine.
import ArrowCurl from './icons/arrow-curl.vue';
import ArrowExternal from './icons/arrow-external.vue';
import ArrowNarrow from './icons/arrow-narrow.vue';
import Arrow from './icons/arrow.vue';
import Bin from './icons/bin.vue';
import CheckMark from './icons/check-mark.vue';
import Check from './icons/check.vue';
import Close from './icons/close.vue';
import ComputerShield from './icons/computer-shield.vue';
import EmailActionUnread from './icons/email-action-unread.vue';
import Emergency from './icons/emergency.vue';
import Expand from './icons/expand.vue';
import Grid from './icons/grid.vue';
import Hand from './icons/hand.vue';
import ImageCredits from './icons/image-credits.vue';
import Info from './icons/info.vue';
import ListView from './icons/list-view.vue';
import Magnifier from './icons/magnifier.vue';
import Mail from './icons/mail.vue';
import Meerkat from './icons/meerkat.vue';
import Minus from './icons/minus.vue';
import Phone from './icons/phone.vue';
import PhoneCharger from './icons/phone-charger.vue';
import PhoneMail from './icons/phone-mail.vue';
import Pin from './icons/pin.vue';
import Plus from './icons/plus.vue';
import VMenu from './icons/v-menu.vue';
import PlusMinus from './icons/plus-minus.vue';
import Rocket from './icons/rocket.vue';
import Reload from './icons/reload.vue';
import Smile from './icons/smile.vue';
import StrategySplit from './icons/strategy-split.vue';
import TileView from './icons/tile-view.vue';
import Quote from './icons/quote.vue';
import World from './icons/world.vue';
import XMark from './icons/x-mark.vue';

export default {
  components: {
    'arrow-curl': ArrowCurl,
    'arrow-external': ArrowExternal,
    'arrow-narrow': ArrowNarrow,
    arrow: Arrow,
    bin: Bin,
    'check-mark': CheckMark,
    check: Check,
    close: Close,
    'computer-shield': ComputerShield,
    'email-action-unread': EmailActionUnread,
    emergency: Emergency,
    expand: Expand,
    grid: Grid,
    hand: Hand,
    'image-credits': ImageCredits,
    info: Info,
    'list-view': ListView,
    magnifier: Magnifier,
    mail: Mail,
    meerkat: Meerkat,
    minus: Minus,
    phone: Phone,
    'phone-charger': PhoneCharger,
    'phone-mail': PhoneMail,
    pin: Pin,
    plus: Plus,
    'v-menu': VMenu,
    'plus-minus': PlusMinus,
    rocket: Rocket,
    reload: Reload,
    smile: Smile,
    'strategy-split': StrategySplit,
    'tile-view': TileView,
    quote: Quote,
    world: World,
    'x-mark': XMark,
  },
  tagName: 'icon',
  data() {
    return Tools.validateVueProps(this);
  },
  computed: {
    classList() {
      return [
        'icon',
        `${this.classes ? this.classes : ''}`,
        `${this.props.hasBackground ? 'icon--has-background' : ''}`,
        `icon--${this.props.direction}`,
        `icon--${this.props.icon}`,
        `${this.props.animation ? 'js-text-animation__icon' : ''}`,
        `${this.props.circle ? 'icon--circle' : ''}`,
        `${this.props.hover ? 'icon--hover' : ''}`,
        'vue-component',
      ];
    },
    innerSize() {
      var innerSize;

      switch (this.props.size) {
        case 'xxl':
          innerSize = '200px';
          break;
        case 'xl':
          innerSize = '120px';
          break;
        case 'medium':
          innerSize = '28px';
          break;
        case 'small':
          innerSize = '18px';
          break;
        case 'xs':
          innerSize = '10px';
          break;
        default:
        case 'large':
          innerSize = '48px';
          break;
      }

      return innerSize;
    },
    parentStyle() {
      return `--color-icon: ${this.props.color}; --icon-rotation: ${this.rotation}`;
    },
    rotation() {
      if (this.props.direction === 'left') {
        return '180deg';
      } else if (this.props.direction === 'clockwise') {
        return '90deg';
      } else {
        return '0deg';
      }
    },
    settings() {
      return {
        width: this.innerSize,
        height: this.innerSize,
        padding: this.props.padding,
        'xml:space': 'preserve',
        version: '1.1',
        xmlns: 'http://www.w3.org/2000/svg',
        'xmlns:link': 'http://www.w3.org/1999/xlink',
      };
    },
  },
  props: {
    icon: {
      default: 'close',
    },
    color: {
      default: 'currentColor',
    },
    direction: {
      default: 'right',
    },
    size: {
      default: 'large',
    },
    circle: {
      default: null,
    },
    hover: {
      default: null,
    },
    padding: {
      default: 6,
    },
    animation: {
      default: null,
    },
    classes: {
      default: '',
    },
    closed: {
      default: null,
    },
    hasBackground: {
      default: null,
    },
    step: {
      default: null,
    },
    strokeWidth: {
      default: null,
    },
  },
};
</script>
