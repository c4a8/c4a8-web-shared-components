export default {
  tagName: 'emergency',
  computed: {
    style() {
      return `fill: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`;
    },
  },
  props: {
    settings: Object,
    color: String,
  },
  template: `
    <svg v-bind="settings" viewBox="0 0 51.9 44.2" xml:space="preserve" :style="style">
      <g>
        <path d="M23.7,13.9L5.6,14c-1.7,0-3,1.3-3,3v18c0,1.7,1.3,3,3,3h30c1.7,0,3-1.3,3-3v-2.9H37l0.1,2.9
          c0,0.8-0.7,1.5-1.5,1.5h-30c-0.8,0-1.5-0.7-1.5-1.5V17c0-0.8,0.7-1.5,1.5-1.5h17.6"></path>
        <path d="M21.5,27.3c-0.2,0.1-0.5,0.1-0.8,0L8.8,20.1C8.7,20,8.5,20,8.4,20c-0.2,0-0.5,0.1-0.6,0.3
          c-0.1,0.2-0.1,0.3-0.1,0.5s0.2,0.3,0.3,0.4l12.8,7.6c0.1,0.1,0.3,0.1,0.4,0.1s0.3,0,0.4-0.1l6.4-3.9c0,0,0.3-0.4,0-0.8
          c-0.2-0.4-0.7-0.4-1-0.2L21.5,27.3z"></path>
        <path d="M13.5,29.3c-0.2-0.3-0.7-0.4-1.1-0.2L7,31.7c-0.3,0.1-0.5,0.5-0.3,0.8c0,0,0,0.1,0.1,0.1
          C6.9,32.9,7.1,33,7.4,33c0.1,0,0.3,0,0.4-0.1l5.4-2.7c0.3-0.1,0.5-0.5,0.4-0.8C13.6,29.4,13.6,29.3,13.5,29.3z"></path>
        <path d="M28,30.2l5.5,2.7c0.1,0.1,0.2,0.1,0.4,0.1c0.3,0,0.5-0.1,0.7-0.3c0.1-0.1,0.1-0.3,0.1-0.5
          c-0.1-0.2-0.2-0.3-0.4-0.4l-5.4-2.7C28.7,29,28.5,29,28.4,29c-0.3,0-0.5,0.1-0.7,0.3c-0.1,0.1-0.1,0.3-0.1,0.5
          C27.7,30,27.8,30.1,28,30.2z"></path>
        <path d="M46,27.4H32.4c-0.9,0-1.7-0.8-1.7-1.7v-1c0-1.5,1.2-2.6,2.7-2.6H45c1.5,0,2.7,1.2,2.7,2.6v1C47.7,26.6,46.9,27.4,46,27.4z
          M33.4,23.5c-0.7,0-1.2,0.6-1.2,1.2v1c0,0.1,0.1,0.3,0.3,0.3H46c0.1,0,0.3-0.1,0.3-0.3v-1c0-0.7-0.6-1.2-1.2-1.2H33.4z"></path>
        <path d="M44.6,23.5c-0.4,0-0.7-0.3-0.7-0.6l-0.9-10c-0.1-0.6-0.6-1.1-1.2-1.1l0,0h-5.3c-0.6,0-1.2,0.5-1.2,1.1l-0.8,9.9
          c0,0.4-0.4,0.7-0.8,0.6c-0.4,0-0.7-0.4-0.6-0.8l0.8-9.9c0.2-1.4,1.3-2.4,2.7-2.4h5.3l0,0c1.3,0,2.5,1,2.6,2.3l0.9,10
          C45.4,23.1,45.1,23.5,44.6,23.5C44.7,23.5,44.6,23.5,44.6,23.5z"></path>
        <path d="M39.2,8c-0.4,0-0.7-0.3-0.7-0.7v-3c0-0.4,0.3-0.7,0.7-0.7s0.7,0.3,0.7,0.7v2.9C39.9,7.6,39.6,8,39.2,8z"></path>
        <path d="M45,10.4c-0.2,0-0.4-0.1-0.5-0.2c-0.3-0.3-0.3-0.7,0-1l2.1-2.1c0.3-0.3,0.7-0.3,1,0s0.3,0.7,0,1l-2.1,2.1
          C45.4,10.3,45.2,10.4,45,10.4z"></path>
        <path d="M50.4,15.7h-2.9c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7h2.9c0.4,0,0.7,0.3,0.7,0.7S50.7,15.7,50.4,15.7z"></path>
        <path d="M33.4,10.4c-0.2,0-0.4-0.1-0.5-0.2l-2.1-2.1c-0.3-0.3-0.3-0.7,0-1s0.7-0.3,1,0l2.1,2.1c0.3,0.3,0.3,0.7,0,1
          C33.7,10.3,33.5,10.4,33.4,10.4z"></path>
        <path d="M30.9,15.7H28c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7h2.9c0.4,0,0.7,0.3,0.7,0.7S31.3,15.7,30.9,15.7z"></path>
      </g>
    </svg>
  `,
};
