// import { getParams } from '../.storybook/templates';
import HeaderComponent from '../components/v-header.vue';
import HeaderData from '../.storybook/data/header';

export default {
  title: 'Components/Header',
  // ...getParams({ page: true }), // TODO make sure padding is removed for that
  component: HeaderComponent,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (story, context) => ({
      components: { story },
      setup() {
        return { args: context.args };
      },
      template: `
        <story />
        <div v-if="args.onSurface" style="height: 200vh;background-color: var(--color-gk-yellow);opacity: 1;" class="dummy-content is--dark"></div>
        <div v-else style="height: 200vh;" class="dummy-content is--dark"></div>
      `,
    }),
  ],
};

export const Header = {
  args: {
    home: HeaderData.home,
    navigation: HeaderData.navigation,
    // lang: 'de', // should be default
  },
};

export const HeaderLight = {
  args: {
    home: HeaderData.home,
    navigation: HeaderData.navigation,
    light: true,
    blendMode: true,
    bgColor: 'var(--color-gk-dark-blue)',
  },
};

export const HeaderEN = {
  args: {
    home: HeaderData.home,
    navigation: HeaderData.navigation,
    lang: 'en',
  },
};

export const HeaderES = {
  args: {
    home: HeaderData.home,
    navigation: HeaderData.navigation,
    lang: 'es',
  },
};

const productArgs = {
  home: HeaderData.home,
  navigation: HeaderData.navigation,
  lang: 'en',
  product: true,
  button: {
    text: 'Start now',
    href: '/start-now/',
    skin: 'primary is-cutoff',
  },
  home: {
    name: 'home',
    imgLight: '/products/scepman/scepman-logo-all-white.svg',
    img: '/products/scepman/scepman-logo-rgb.svg',
    languages: {
      en: {
        title: 'Home EN',
        url: '',
        alt: 'alt text EN',
      },
      es: {
        title: 'Home ES',
        url: '',
        alt: 'alt text ES',
      },
    },
  },
  navigation: [
    {
      name: 'home',
      languages: {
        de: {
          title: 'Home',
          url: '',
        },
        en: {
          title: 'Home EN',
          url: '',
        },
        es: {
          title: 'Inicio ES',
          url: '',
        },
      },
    },
    {
      name: 'pricing',
      languages: {
        en: {
          title: 'Pricing EN',
          url: '/iframe.html',
        },
        es: {
          title: 'Precios ES',
          url: '/iframe.html',
        },
      },
    },
    {
      name: 'partner',
      languages: {
        en: {
          title: 'Partner EN',
          url: '',
        },
        es: {
          title: 'Socios ES',
          url: '',
        },
      },
    },
    {
      name: 'docs',
      languages: {
        en: {
          title: 'Docs',
          url: 'https://docs.radiusaas.com/',
          target: '_blank',
        },
        es: {
          title: 'Docs',
          url: 'https://docs.radiusaas.com/',
          target: '_blank',
        },
      },
    },
  ],
  showSecondaryNavigation: true,
  theme: 'radiusaas',
};

export const HeaderProductOnSurface = {
  args: { ...productArgs, onSurface: true },
};

export const HeaderProduct = {
  args: { ...productArgs },
};

export const HeaderProductEN = {
  args: { ...productArgs, lang: 'en' },
};

export const HeaderProductES = {
  args: { ...productArgs, lang: 'es' },
};

const konnektNav = ['Home', 'Preise', 'Partner', 'Support Hub', 'Events', 'Über uns'].map((title, index) => ({
  name: `konnekt-${index}`,
  languages: {
    de: {
      title,
      url: '',
    },
  },
}));

export const HeaderProductKonnektDE = {
  args: {
    lang: 'de',
    product: true,
    theme: 'konnekt',
    showSecondaryNavigation: true,
    button: {
      text: 'Kostenlos testen',
      href: '/trial/',
      skin: 'primary is-cutoff',
    },
    home: {
      name: 'home',
      imgLight: '/products/konnekt/gkgab-konnekt-logo-white.svg',
      img: '/products/konnekt/KONNEKT-logo-rgb.svg',
      languages: {
        de: {
          title: 'Home',
          url: '',
          alt: 'KONNEKT Logo',
        },
      },
    },
    navigation: konnektNav,
  },
};

export const HeaderProduct2 = {
  args: {
    home: HeaderData.home,
    navigation: HeaderData.navigation,
    lang: 'en',
    product: true,
    button: {
      text: 'Start now',
      href: '/start-now/',
      skin: 'primary is-cutoff',
    },
    home: {
      name: 'home',
      imgLight: '/products/scepman/scepman-logo-all-white.svg',
      img: '/products/terraprovider/logo-terraprovider.svg',
      languages: {
        en: {
          title: 'Home EN',
          url: '',
          alt: 'alt text EN',
        },
      },
    },
    navigation: [
      {
        name: 'home',
        languages: {
          de: {
            title: 'Home',
            url: '',
          },
          en: {
            title: 'Home EN',
            url: '',
          },
        },
      },
      {
        name: 'pricing',
        languages: {
          en: {
            title: 'Pricing EN',
            url: '/iframe.html',
          },
        },
      },
      {
        name: 'partner',
        languages: {
          en: {
            title: 'Partner EN',
            url: '',
          },
        },
      },
      {
        name: 'docs',
        languages: {
          en: {
            title: 'Docs',
            url: 'https://docs.radiusaas.com/',
            target: '_blank',
          },
        },
      },
    ],
    showSecondaryNavigation: true,
    theme: 'radiusaas',
  },
};
export const HeaderProductLight = {
  args: {
    light: true,
    ...productArgs,
    onSurface: true,
  },
};

export const HeaderProductLightBlendMode = {
  args: {
    light: true,
    blendMode: true,
    ...productArgs,
  },
};

export const HeaderSearch = {
  args: {
    home: HeaderData.home,
    navigation: HeaderData.navigation,
    lang: 'en',
    search: true,
  },
};
