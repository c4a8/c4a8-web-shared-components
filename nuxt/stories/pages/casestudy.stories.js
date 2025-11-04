// import { getAssetPath } from '../.storybook/templates';
import PageDefault from '../components/page-default.vue';
import VHeader from '../components/v-header.vue';
import Content from '../components/content.vue';
import Hero from '../components/hero.vue';
import IntroText from '../components/intro-text.vue';
import VFooter from '../components/v-footer.vue';
import FabHint from '../components/fab-hint.vue';
// import Back
import HeaderData from '../.storybook/data/header';

export default {
  component: VHeader,
  title: 'Pages/Casestudy',
  parameters: {
    isPage: true,
    layout: 'fullscreen',
  },
  decorators: [
    (story, context) => ({
      components: { story, PageDefault, VHeader, VFooter, Content, Hero, IntroText, FabHint },
      setup() {
        return { args: context.args };
      },
      template: `
        <PageDefault>
          <v-header v-bind="args.header" />
          <Content>
       	    <Hero :hero="args.hero" />
            <FabHint v-bind="args.fabHint" />
            <IntroText v-bind="args.introText" />
            <div style="height: 200vh;" class="dummy-content"></div>
          </Content>
          <v-footer v-bind="args.footer" />
        </PageDefault>
      `,
    }),
  ],
};

const caseStudyData = {
  args: {
    header: {
      home: HeaderData.home,
      navigation: HeaderData.navigation,
      theme: 'gk',
    },
    footer: {
      lang: 'de',
      noMargin: true,
    },
    hero: {
      variant: 'hero--study',
      back: true,
      headline: 'Azure @DEKRA',
      subline:
        '<span class="highlight">Effiziente Umsetzung</span> der DEKRA Cloud First Journey mit DevOps und Infrastructure as Code (IaC)',
      DISABLEDbackground: {
        img: '/casestudies/casestudy-dekra-v2.png',
        alt: 'DEKRA Casestudy',
        spacing: 'space-top-lg-4',
      },
      shape: {
        img: '/casestudies/casestudy-dekra-v2.png',
        alt: 'DEKRA Casestudy',
        cloudinary: true,
        bottom: true,
      },
      bgColor: '#24a1fa',
      bgWidth: 70,
    },
    fabHint: {
      text: 'Slider: © lorem; Kacheln: 1: © lorem; 2: © Author - example.com - 123456789; 3: © Author - example.com - 123456789; 4: © example.com; CTA Jobs: © Author - example.com - 123456789; Kacheln: 1: © <a href="https://www.example.com/">https://www.example.com/</a>; 2: © lorem; 3: © <a href="https://www.example.com/">https://www.example.com/</a>; CTA: © Author - example.com - 123456789',
    },
    introText: {
      headline: 'Headline Lorem ipsum',
      copy: '<strong>RADIUSaaS</strong> offers easy and <span class="highlight">secure authentication for accessing network resources</span>. It delivers the comfort, reliability, and scalability of a native cloud SaaS. From a protocol side, we support <span class="highlight">RADIUS</span> as well as <span class="highlight">RadSec.</span><br><br>Authentication is based on certificates. <strong>RADIUSaaS</strong> can validate any certificate which can be used for client authentication. However, to be able to lock someone out of your network with a revoked certificate, choose a <span class="highlight">Certificate Authority (CA)</span> that has an <span class="highlight">Online Certificate Status Protocol (OCSP)</span>. <strong>RADIUSaaS</strong> automatically generates XML configuration files for WIFI and LAN profiles. ',
    },
  },
};

export const Casestudy = {
  ...caseStudyData,
};

export const CasestudyWithBack = {
  ...caseStudyData,
  backToTop: {},
};
