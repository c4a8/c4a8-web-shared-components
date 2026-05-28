<template>
  <span :class="classList" :style="parentStyle">
    <component
      :is="icon"
      v-bind="settings"
      :color="props.color"
      :strokeColor="props.strokeColor"
      :closed="closed"
      :step="step"
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
import Booking from './icons/booking.vue';
import CheckMark from './icons/check-mark.vue';
import Check from './icons/check.vue';
import Checkbox from './icons/checkbox.vue';
import Close from './icons/close.vue';
import ComputerShield from './icons/computer-shield.vue';
import EmailActionUnread from './icons/email-action-unread.vue';
import Emergency from './icons/emergency.vue';
import Expand from './icons/expand.vue';
import Grid from './icons/grid-icon.vue';
import Hand from './icons/hand.vue';
import ImageCredits from './icons/image-credits.vue';
import Info from './icons/info.vue';
import ListView from './icons/list-view.vue';
import Magnifier from './icons/magnifier.vue';
import Mail from './icons/mail.vue';
import Meerkat from './icons/meerkat.vue';
import Minus from './icons/minus.vue';
import OutlineHeart from './icons/outline-heart.vue';
import OutlineComment from './icons/outline-comment.vue';
import OutlineShare from './icons/outline-share.vue';
import Phone from './icons/phone.vue';
import PhoneCharger from './icons/phone-charger.vue';
import PhoneMail from './icons/phone-mail.vue';
import Pin from './icons/pin.vue';
import Plus from './icons/plus.vue';
import VMenu from './icons/v-menu.vue';
import PlusMinus from './icons/plus-minus.vue';
import Rocket from './icons/rocket.vue';
import Reload from './icons/reload.vue';
import Ribbon from './icons/ribbon.vue';
import Smile from './icons/smile.vue';
import StrategySplit from './icons/strategy-split.vue';
import TileView from './icons/tile-view.vue';
import User from './icons/user.vue';
import Quote from './icons/quote.vue';
import World from './icons/world.vue';
import XMark from './icons/x-mark.vue';
import Heart from './icons/heart.vue';
import ChargingStation from './icons/charging-station.vue';

export default {
  components: {
    'arrow-curl': ArrowCurl,
    'arrow-external': ArrowExternal,
    'arrow-narrow': ArrowNarrow,
    arrow: Arrow,
    bin: Bin,
    booking: Booking,
    'check-mark': CheckMark,
    check: Check,
    checkbox: Checkbox,
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
    'outline-heart': OutlineHeart,
    'outline-comment': OutlineComment,
    'outline-share': OutlineShare,
    phone: Phone,
    'phone-charger': PhoneCharger,
    'phone-mail': PhoneMail,
    pin: Pin,
    plus: Plus,
    'v-menu': VMenu,
    'plus-minus': PlusMinus,
    rocket: Rocket,
    reload: Reload,
    ribbon: Ribbon,
    smile: Smile,
    'strategy-split': StrategySplit,
    'tile-view': TileView,
    user: User,
    quote: Quote,
    world: World,
    'x-mark': XMark,
    heart: Heart,
    'charging-station': ChargingStation,
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
      if (typeof this.props.size == 'number') {
        innerSize = `${this.props.size}px`;
      } else {
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
      const settingsObj = {
        width: this.innerSize,
        height: this.innerSize,
        padding: this.props.padding,
        'xml:space': 'preserve',
        version: '1.1',
        xmlns: 'http://www.w3.org/2000/svg',
        'xmlns:link': 'http://www.w3.org/1999/xlink',
      };

      if (this.strokeWidth) {
        settingsObj.strokeWidth = this.strokeWidth;
      }

      return settingsObj;
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
    strokeColor: {
      String,
    },
  },
};
</script>
<style>
.icon {
  display: inline-flex;
}
.icon svg {
  margin-bottom: 0;
}
.icon svg path,
.icon svg line,
.icon svg polyline {
  transition: d cubic-bezier(0.19, 1, 0.2, 1) 0.7s, stroke-width ease-in 0.3s, transform cubic-bezier(0.19, 1, 0.2, 1) 0.7s;
}
.icon.icon--expand svg {
  transition: transform cubic-bezier(0.19, 1, 0.2, 1) 0.4s;
}
.icon.icon--circle {
  flex: 1;
  border: 1px solid var(--color-icon);
  border-radius: 100%;
  justify-content: center;
  align-items: center;
}
.icon.icon--circle svg {
  width: 60%;
}
.icon.icon--hover {
  cursor: pointer;
}
.icon.icon--hover:hover {
  background-color: var(--color-icon-hover-background);
  color: var(--color-icon-hover-color);
}
.icon.icon--has-background {
  background-color: var(--color-icon-check-background);
  border-color: var(--color-icon-check-background);
}
.icon.icon--has-background.icon--circle {
  flex: none;
}
.icon.icon--smile svg .hand {
  transition: stroke-width ease-in 0.2s;
}
.icon.icon--smile.icon--step-1 svg .hand,
.icon.icon--smile.icon--step-1 svg .left-eyebrow,
.icon.icon--smile.icon--step-1 svg .right-eyebrow {
  stroke-width: 6px !important;
}
.icon.icon--smile.icon--step-1 svg .hand {
  transition-delay: 0.25s;
}
.icon.icon--smile.icon--step-2 svg .left-eyebrow,
.icon.icon--smile.icon--step-2 svg .right-eyebrow {
  transition-delay: 0s;
  transition-duration: 0.25s;
}
.icon.icon--smile.icon--step-2 svg .mouth-upper {
  stroke-width: 6px !important;
}
.icon.icon--smile.icon--step-2 svg .circle {
  transform: rotate(54deg);
  transform-origin: center center;
}
.icon.icon--smile.icon--step-2 svg .hand-upper {
  stroke-width: 6px !important;
  transition-delay: 0.25s;
}
.icon.icon--smile.icon--step-2 svg .hand {
  stroke-width: 0 !important;
}
.icon.icon--smile.icon--step-3 svg .right-eye,
.icon.icon--smile.icon--step-3 svg .left-eye,
.icon.icon--smile.icon--step-3 svg .mouth-upper {
  stroke-width: 0px !important;
}
.icon.icon--smile.icon--step-3 svg .right-eyebrow,
.icon.icon--smile.icon--step-3 svg .left-eyebrow {
  stroke-width: 6px !important;
  transition-delay: 0.2s;
  transition-duration: 0.45s;
}
.icon.icon--smile.icon--step-3 svg .circle {
  transform-origin: center center;
}
.icon.icon--smile.icon--step-3 svg .hand-upper {
  transition-duration: 0s;
  stroke-width: 0 !important;
}

.shared-components .icon {
  width: auto;
  height: auto;
}

.icon--rocket-cls-1,
.icon--rocket-cls-10,
.icon--rocket-cls-2,
.icon--rocket-cls-4,
.icon--rocket-cls-5,
.icon--rocket-cls-6,
.icon--rocket-cls-9 {
  fill: none;
}

.icon--rocket-cls-2 {
  clip-rule: evenodd;
}

.icon--rocket-cls-3 {
  clip-path: url(#icon--rocket-clip-path);
}

.icon--rocket-cls-4 {
  stroke: #000;
}

.icon--rocket-cls-10,
.icon--rocket-cls-4,
.icon--rocket-cls-5,
.icon--rocket-cls-6,
.icon--rocket-cls-9 {
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 3px;
}

.icon--rocket-cls-5 {
  stroke: #533e8e;
}

.icon--rocket-cls-6 {
  stroke: #ef8331;
}

.icon--rocket-cls-7 {
  clip-path: url(#icon--rocket-clip-path-2);
}

.icon--rocket-cls-8 {
  fill: #72b4df;
}

.icon--rocket-cls-9 {
  stroke: #008186;
}

.icon--rocket-cls-10 {
  stroke: #fdd117;
}
</style>
