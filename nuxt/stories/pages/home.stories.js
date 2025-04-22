import PageDefault from '../components/page-default.vue';
import VHeader from '../components/v-header.vue';
import Content from '../components/content.vue';
import Hero from '../components/hero.vue';
// import VFooter from '../components/v-footer.vue';
import HeaderData from '../.storybook/data/header';

export default {
  component: VHeader,
  title: 'Pages/Home',
  parameters: {
    isPage: true,
    layout: 'fullscreen',
  },
  decorators: [
    (story, context) => ({
      components: { story, PageDefault, VHeader, Content, Hero },
      setup() {
        return { args: context.args };
      },
      template: `
        <PageDefault>
          <v-header v-bind="args.header" />
          <Content>
       	    <Hero :hero="args.hero" />
            <div style="height: 200vh;" class="dummy-content"></div>
          </Content>
        </PageDefault>
      `,
    }),
  ],
};

export const HomeProduct = {
  args: {
    header: {
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
    hero: {
      pattern: true,
      headline: 'SCEPman',
      subline: 'Lorem ipsum dolor sit',
      textShadow: true,
      bgColor: 'var(--color-white)',
      ctaList: [
        {
          ctaText: 'Try SCEPman now',
          ctaHref: 'javascript:void(0);',
          skin: 'primary is-cutoff',
          icon: 'phone',
        },
        {
          ctaText: 'Mail us',
          ctaHref: 'javascript:void(0);',
          skin: 'secondary is-cutoff',
          icon: 'mail',
        },
      ],
      shape: {
        img: '/products/radius/radius-hero-screen.png',
        alt: 'Home',
        cloudinary: true,
        mobileOrder: 5,
      },
    },
  },
};

export const HomeProductOnSurface = {
  args: {
    header: {
      onSurface: true,
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
              url: '',
            },
          },
        },
        {
          name: 'partner',
          languages: {
            en: {
              title: 'Partner EN',
              url: '/iframe.html',
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
    hero: {
      headline: 'SCEPman',
      subline: 'Lorem ipsum dolor sit',
      bgColor: 'var(--color-primary)',
      ctaList: [
        {
          ctaText: 'Try SCEPman now',
          ctaHref: 'javascript:void(0);',
          skin: 'primary is-cutoff',
          icon: 'phone',
          onSurface: true,
        },
        {
          ctaText: 'Mail us',
          ctaHref: 'javascript:void(0);',
          skin: 'secondary is-cutoff',
          icon: 'mail',
          onSurface: true,
        },
      ],
      shape: {
        img: '/products/radius/radius-hero-screen.png',
        alt: 'Home',
        cloudinary: true,
        mobileOrder: 5,
      },
    },
  },
};
