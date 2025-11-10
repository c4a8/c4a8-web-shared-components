// import { getAssetPath } from '../.storybook/templates';
import PageDefault from '../components/page-default.vue';
import VHeader from '../components/v-header.vue';
import Content from '../components/content.vue';
import Hero from '../components/hero.vue';
import IntroText from '../components/intro-text.vue';
import VFooter from '../components/v-footer.vue';
import TextImage from '../components/text-image.vue';
// import FabButton from '../components/fab-button.vue';
// import Back
import HeaderData from '../.storybook/data/header';
import { JobApplication } from '../textImage.stories';

export default {
  component: VHeader,
  title: 'Pages/Career',
  parameters: {
    isPage: true,
    layout: 'fullscreen',
  },
  decorators: [
    (story, context) => ({
      components: { story, PageDefault, VHeader, VFooter, Content, Hero, IntroText, TextImage },
      setup() {
        return { args: context.args };
      },
      template: `
        <PageDefault>
          <v-header v-bind="args.header" />
          <Content>
       	    <Hero :hero="args.hero" />
            <IntroText v-bind="args.introText" />
            <TextImage v-bind="args.textImage" />
            <div style="height: 200vh;" class="dummy-content"></div>
          </Content>
          <v-footer v-bind="args.footer" />
        </PageDefault>
      `,
    }),
  ],
};

export const Career = {
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
      overline: 'Karriere',
      bgColor: 'var(--color-blue-dark)',
      light: true,
      lightOverline: false,
      fullscreen: true,
      background: {
        icon: 'smile',
        iconColor: 'var(--color-yellow)',
      },
      animation: {
        sequence: [
          {
            text: 'HEY,',
            textSize: 'font-size-7',
          },
          {
            text: 'Wo bin ich denn hier gelandet?',
          },
          {
            text: 'Da, wo eine neue Welt entsteht',
          },
          {
            text: 'Gemeinsam',
            subline:
              '<strong>wollen wir die Welt verändern:</strong> die Dinge neu denken, neue Ideen entwickeln und Lösungen schaffen, die unsere Kunden wirklich voranbringen. Dafür braucht es Menschen, die nicht nur nach einem Job, sondern nach einer echten Aufgabe suchen. Menschen mit einer Vision und dem Wunsch, etwas Sinnvolles zu bewegen. <strong>Menschen wie dich.</strong>',
          },
        ],
      },
      cta: {
        text: 'Zu den Stellenanzeigen',
        href: '/de/stellenanzeigen',
        skin: 'primary',
      },
    },
    fabButton: {
      modal: {
        contact: {
          headline: 'Hast du Fragen? Sprich uns gerne an!',
          infos: {
            person: {
              image: '/people/jan-riechert.jpg',
              cloudinary: true,
              alt: 'Kontakt mit unserem People & Culture Team',
              name: 'Hast du Fragen? Sprich uns gerne an!',
              details: [
                {
                  text: 'Jan Riechert',
                  href: 'mailto:jan.riechert@glueckkanja.com',
                  icon: 'site/mail',
                },
                {
                  text: '+49 69 400552 228',
                  href: 'tel:+49 69 400552228',
                  notes: 'Keiner da? Wir rufen asap zurück.',
                  icon: 'site/phone',
                },
              ],
            },
          },
        },
      },
    },
    introText: {
      headline: 'Headline Lorem ipsum',
      copy: '<strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing elit. <span class="highlight">Vivamus facilisis</span> urna eu <span class="highlight">placerat malesuada</span>. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.<br><br>Praesent cursus, nulla ut <span class="highlight">dictum pharetra</span>, risus orci finibus felis, nec <span class="highlight">rhoncus urna</span> turpis nec augue. In hac habitasse platea dictumst. <strong>Lorem ipsum dolor</strong> sit amet, consectetur adipiscing elit. Proin hendrerit, urna non euismod tincidunt, velit nunc gravida enim, at <span class="highlight">tempus eros</span> nulla eu erat.',
    },
    textImage: {
      ...JobApplication.args,
    },
  },
};
