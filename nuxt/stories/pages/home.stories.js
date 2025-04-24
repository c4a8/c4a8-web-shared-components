import PageDefault from '../components/page-default.vue';
import VHeader from '../components/v-header.vue';
import Content from '../components/content.vue';
import Hero from '../components/hero.vue';
import IntroText from '../components/intro-text.vue';
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
      components: { story, PageDefault, VHeader, Content, Hero, IntroText },
      setup() {
        return { args: context.args };
      },
      template: `
        <PageDefault>
          <v-header v-bind="args.header" />
          <Content>
       	    <Hero :hero="args.hero" />
            <IntroText v-bind="args.introText" />
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
    introText: {
      headline: 'Headline Lorem ipsum',
      copy: '<strong>RADIUSaaS</strong> offers easy and <span class="highlight">secure authentication for accessing network resources</span>. It delivers the comfort, reliability, and scalability of a native cloud SaaS. From a protocol side, we support <span class="highlight">RADIUS</span> as well as <span class="highlight">RadSec.</span><br><br>Authentication is based on certificates. <strong>RADIUSaaS</strong> can validate any certificate which can be used for client authentication. However, to be able to lock someone out of your network with a revoked certificate, choose a <span class="highlight">Certificate Authority (CA)</span> that has an <span class="highlight">Online Certificate Status Protocol (OCSP)</span>. <strong>RADIUSaaS</strong> automatically generates XML configuration files for WIFI and LAN profiles. ',
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
    introText: {
      headline: 'Headline Lorem ipsum',
      copy: '<strong>RADIUSaaS</strong> offers easy and <span class="highlight">secure authentication for accessing network resources</span>. It delivers the comfort, reliability, and scalability of a native cloud SaaS. From a protocol side, we support <span class="highlight">RADIUS</span> as well as <span class="highlight">RadSec.</span><br><br>Authentication is based on certificates. <strong>RADIUSaaS</strong> can validate any certificate which can be used for client authentication. However, to be able to lock someone out of your network with a revoked certificate, choose a <span class="highlight">Certificate Authority (CA)</span> that has an <span class="highlight">Online Certificate Status Protocol (OCSP)</span>. <strong>RADIUSaaS</strong> automatically generates XML configuration files for WIFI and LAN profiles. ',
    },
  },
};

export const HomeProductOnSurfaceLight = {
  args: {
    header: {
      onSurface: true,
      light: true,
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
    introText: {
      headline: 'Headline Lorem ipsum',
      copy: '<strong>RADIUSaaS</strong> offers easy and <span class="highlight">secure authentication for accessing network resources</span>. It delivers the comfort, reliability, and scalability of a native cloud SaaS. From a protocol side, we support <span class="highlight">RADIUS</span> as well as <span class="highlight">RadSec.</span><br><br>Authentication is based on certificates. <strong>RADIUSaaS</strong> can validate any certificate which can be used for client authentication. However, to be able to lock someone out of your network with a revoked certificate, choose a <span class="highlight">Certificate Authority (CA)</span> that has an <span class="highlight">Online Certificate Status Protocol (OCSP)</span>. <strong>RADIUSaaS</strong> automatically generates XML configuration files for WIFI and LAN profiles. ',
    },
  },
};
