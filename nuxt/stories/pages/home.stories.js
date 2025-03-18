import { useAppStore } from '../stores/app';
import PageDefault from '../components/page-default.vue';
import VHeader from '../components/v-header.vue';
import Content from '../components/content.vue';
import Hero from '../components/hero.vue';
// import VFooter from '../components/v-footer.vue';
import HeaderData from '../.storybook/data/header';

export default {
  title: 'Pages/Home',
  parameters: {
    isPage: true,
    layout: 'fullscreen',
  },

  render: (args) => ({
    components: { PageDefault, VHeader, Content, Hero },
    setup() {
      const store = useAppStore();

      return {
        args,
        store,
      };
    },
    template: `
      <PageDefault>
        <v-header v-bind="args.header" />
        <Content>
    	    <Hero :hero="args.hero" />
          <br><br><br><br><br><br><br>

          {{ store }}
        </Content>
      </PageDefault>
    `,
  }),
};

export const Home = {
  args: {
    header: {
      home: HeaderData.home,
      navigation: HeaderData.navigation,
      light: true,
      lang: 'en',
      product: true,
      button: {
        text: 'Start now',
        href: '/start-now/',
        skin: 'primary is-cutoff',
      },
      home: {
        name: 'home',
        imgLight: '/logos/radius-logo-white.svg',
        img: '/logos/radius-logo-green.svg',
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
              active: true,
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
      bgColor: 'var(--color-blue-medium)',
      headline: 'Ihre Cloud Strategie',
      headlineClasses: 'h2-font-size bold',
      lightOverline: true,
      subline: 'Microsoft stellt die Technologie, wir die Expertise. Sie brauchen nur noch den Erfolg zu ernten.',
      textShadow: true,
      ctaList: [
        {
          ctaText: 'Kontakt aufnehmen',
          ctaHref: 'javascript:void(0);',
          skin: 'primary',
          icon: 'phone',
        },
        {
          ctaText: 'Mail us',
          ctaHref: 'javascript:void(0);',
          skin: 'secondary',
          icon: 'mail',
          hasBackground: true,
        },
      ],
      badges: [
        {
          img: '/logos/partner-seal-mpoy.svg',
          alt: 'Partner of the Year Award',
        },
        {
          img: '/logos/partner-seal-mssp.svg',
          alt: 'Security MSSP of the Year',
        },
      ],
    },
  },
};
