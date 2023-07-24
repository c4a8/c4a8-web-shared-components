export default {
  tagName: 'arrow-curl',
  computed: {
    style() {
      return `stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`;
    },
  },
  props: {
    settings: Object,
    color: String,
  },
  template: `
  <svg v-bind="settings" viewBox="0 0 26 28">
    <path d="M24.9384 0.252534C25.3512 0.218513 25.7134 0.525585 25.7475 0.938399C25.7815 1.35121 25.4744 1.71344 25.0616 1.74747L24.9384 0.252534ZM12.8286 3.88889L13.2309 4.52181L13.2309 4.52181L12.8286 3.88889ZM7.47313 12.5556L6.74138 12.3911L6.74138 12.3911L7.47313 12.5556ZM6.54139 27.5213C6.25346 27.8191 5.77865 27.8271 5.48088 27.5392L0.628414 22.847C0.330642 22.5591 0.322666 22.0843 0.610598 21.7865C0.89853 21.4888 1.37334 21.4808 1.67111 21.7687L5.98441 25.9395L10.1552 21.6262C10.4431 21.3284 10.9179 21.3204 11.2157 21.6084C11.5135 21.8963 11.5215 22.3711 11.2335 22.6689L6.54139 27.5213ZM25 1C25.0616 1.74747 25.0616 1.74746 25.0617 1.74746C25.0616 1.74746 25.0616 1.74747 25.0615 1.74747C25.0614 1.74749 25.0611 1.74751 25.0606 1.74755C25.0598 1.74762 25.0584 1.74773 25.0565 1.74789C25.0527 1.74821 25.0468 1.74871 25.0389 1.74939C25.0231 1.75075 24.9992 1.75283 24.9676 1.75565C24.9044 1.76131 24.8106 1.76994 24.6895 1.78173C24.4472 1.80532 24.0962 1.84151 23.664 1.8917C22.7987 1.99215 21.611 2.1483 20.3198 2.37103C19.0268 2.59406 17.6404 2.88208 16.3745 3.24447C15.0976 3.61001 13.9923 4.03778 13.2309 4.52181L12.4262 3.25597C13.3688 2.65666 14.6369 2.18165 15.9617 1.8024C17.2975 1.42 18.7409 1.12122 20.0648 0.892859C21.3904 0.664204 22.6066 0.504381 23.491 0.401705C23.9335 0.35033 24.2938 0.31317 24.5441 0.288795C24.6693 0.276606 24.767 0.267609 24.8339 0.261625C24.8673 0.258634 24.893 0.256395 24.9106 0.254887C24.9194 0.254133 24.9261 0.253562 24.9308 0.253171C24.9331 0.252975 24.9349 0.252825 24.9362 0.252719C24.9368 0.252666 24.9373 0.252624 24.9377 0.252593C24.9379 0.252578 24.938 0.252563 24.9381 0.252555C24.9383 0.252543 24.9384 0.252534 25 1ZM13.2309 4.52181C12.58 4.93566 11.5526 5.93156 10.5608 7.3853C9.57807 8.82573 8.66724 10.6624 8.20489 12.72L6.74138 12.3911C7.25274 10.1154 8.25333 8.1059 9.32172 6.53992C10.381 4.98725 11.5445 3.81648 12.4262 3.25597L13.2309 4.52181ZM8.20489 12.72C7.41961 16.2147 7.05543 19.7828 6.88837 22.4848C6.80495 23.834 6.77093 24.9629 6.75775 25.7534C6.75116 26.1485 6.74978 26.4588 6.75004 26.6694C6.75017 26.7748 6.7507 26.8552 6.7512 26.9088C6.75145 26.9356 6.75169 26.9557 6.75186 26.9689C6.75194 26.9755 6.75201 26.9803 6.75206 26.9834C6.75208 26.985 6.7521 26.9861 6.75211 26.9867C6.75212 26.9871 6.75212 26.9873 6.75212 26.9874C6.75212 26.9875 6.75212 26.9875 6.75212 26.9875C6.75212 26.9875 6.75212 26.9874 6.00223 27C5.25233 27.0126 5.25233 27.0125 5.25233 27.0123C5.25233 27.0123 5.25233 27.0121 5.25232 27.0119C5.25232 27.0116 5.25231 27.0111 5.2523 27.0106C5.25228 27.0094 5.25226 27.0079 5.25223 27.0059C5.25217 27.0018 5.25209 26.9961 5.25199 26.9885C5.25179 26.9735 5.25153 26.9514 5.25126 26.9227C5.25073 26.8652 5.25017 26.7808 5.25004 26.6713C5.24977 26.4523 5.25121 26.133 5.25795 25.7283C5.27145 24.9191 5.30621 23.7673 5.39122 22.3923C5.56103 19.6459 5.9323 15.9918 6.74138 12.3911L8.20489 12.72Z" :fill="color"/>
  </svg>
  `,
};
