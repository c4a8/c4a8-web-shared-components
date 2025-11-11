import PageDefault from '../components/page-default.vue';
import VHeader from '../components/v-header.vue';
import Content from '../components/content.vue';
import Hero from '../components/hero.vue';
import IntroText from '../components/intro-text.vue';
import VFooter from '../components/v-footer.vue';
import FabHint from '../components/fab-hint.vue';
import BackToTop from '../components/back-to-top.vue';
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
      components: { story, PageDefault, VHeader, VFooter, Content, Hero, IntroText, FabHint, BackToTop },
      setup() {
        return { args: context.args };
      },
      template: `
        <PageDefault v-bind="args.page">
          <v-header v-bind="args.header" />
          <Content>
       	    <Hero :hero="args.hero" />
            <FabHint v-bind="args.fabHint" />
            <BackToTop v-if="args.page.hasBackToTop" />
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
  page: {
    hasFabHint: true,
  },
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
    copy: '<strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing elit. <span class="highlight">Vivamus facilisis</span> urna eu <span class="highlight">placerat malesuada</span>. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.<br><br>Praesent cursus, nulla ut <span class="highlight">dictum pharetra</span>, risus orci finibus felis, nec <span class="highlight">rhoncus urna</span> turpis nec augue. In hac habitasse platea dictumst. <strong>Lorem ipsum dolor</strong> sit amet, consectetur adipiscing elit. Proin hendrerit, urna non euismod tincidunt, velit nunc gravida enim, at <span class="highlight">tempus eros</span> nulla eu erat.',
  },
};

export const Casestudy = {
  args: {
    ...caseStudyData,
  },
};

export const CasestudyWithBack = {
  args: {
    ...caseStudyData,
    page: {
      hasBackToTop: true,
      hasFabHint: true,
    },
  },
};
