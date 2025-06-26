import PageDefault from '../components/page-default.vue';
import VHeader from '../components/v-header.vue';
import Content from '../components/content.vue';
import Hero from '../components/hero.vue';
import IntroText from '../components/intro-text.vue';
import Blog from '../components/blog.vue';
// import VFooter from '../components/v-footer.vue';
import HeaderData from '../.storybook/data/header';
import Posts from '../.storybook/data/posts';

export default {
  component: VHeader,
  title: 'Pages/Blog',
  parameters: {
    isPage: true,
    layout: 'fullscreen',
  },
  decorators: [
    (story, context) => ({
      components: { story, PageDefault, VHeader, Content, Hero, Blog },
      setup() {
        return { args: context.args };
      },
      template: `
        <PageDefault>
          <v-header v-bind="args.header" />
          <Content>
       	    <Hero :hero="args.hero" />
            <Blog v-bind="args.blogData" />
          </Content>
        </PageDefault>
      `,
    }),
  ],
};

export const Default = {
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
      headline: 'Blog',
      subline: 'Lorem ipsum dolor sit',
      bgColor: 'var(--color-yellow)',
      variant: 'hero--small',
      background: {
        spacing: 'space-top-lg-4 space-bottom-lg-4',
      },
    },
    // introText: {
    //   headline: 'Headline Lorem ipsum',
    //   copy: '<strong>RADIUSaaS</strong> offers easy and <span class="highlight">secure authentication for accessing network resources</span>. It delivers the comfort, reliability, and scalability of a native cloud SaaS. From a protocol side, we support <span class="highlight">RADIUS</span> as well as <span class="highlight">RadSec.</span><br><br>Authentication is based on certificates. <strong>RADIUSaaS</strong> can validate any certificate which can be used for client authentication. However, to be able to lock someone out of your network with a revoked certificate, choose a <span class="highlight">Certificate Authority (CA)</span> that has an <span class="highlight">Online Certificate Status Protocol (OCSP)</span>. <strong>RADIUSaaS</strong> automatically generates XML configuration files for WIFI and LAN profiles. ',
    // },
    blogData: {
      posts: Posts,
    },
  },
};
