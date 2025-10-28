import NewsletterComponent from '../components/newsletter.vue';
import birdIdle from '/Users/lisa.nagl/Code/c4a8-web-shared-components/nuxt/stories/data/BirdieNoflap.json';
import birdFly from '/Users/lisa.nagl/Code/c4a8-web-shared-components/nuxt/stories/data/BirdieFlap.json';

export default {
  component: NewsletterComponent,
  title: 'Components/Newsletter',
    decorators: [
    (story) => ({
      components: { story },
      template: `
        <div>
          <div style="height: 100vh;" class="dummy-content"></div>
          <story />
          <div style="height: 100vh;" class="dummy-content"></div>
        </div>
      `,
    }),
  ],

};

export const Default = {
  args: {
    text: 'Jetzt zum Newsletter anmelden Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
    cta: {
      text: 'Abonnieren',
      skin: 'primary',
    },
    modal: {
      headline: 'Newsletter Subscription',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est ',
      confirmation: {
        headline: 'Danke für deine Anmeldung!',
        text: 'Du hast dich erfolgreich für unseren Newsletter angemeldet. Wir freuen uns, dich als Abonnent:in begrüßen zu dürfen! Schau gerne in deinem Posteingang nach einer Bestätigungs-E-Mail von uns.',
      },
      formular: {
        form: {
          cta: {
            skin: 'primary',
            width: 'w-40',
          },       
          ctaPosition: '',
          ctaText: 'Abonnieren',
          method: 'post',
          action: '../',
          fields: [
            {
              label: 'E-Mail Adresse',
              type: 'email',

              rowStart: true,
              required: true,
              id: 'email',
            },
            {
              label: "Deine Daten werden zur Bearbeitung und Beantwortung deiner Anfrage bei uns gespeichert. Weitere Informationen zum Datenschutz findest du in unserer <a href='/de/datenschutz/'>Datenschutzerklärung</a>.",
              type: "checkbox",
              id: "dataprotection",
              required: true,
              requiredMsg: "Bitte bestätigen"
            },
            {
              type: 'hidden',
              id: '_gotcha',
            },
          ],
        },
      },
      lottie: {
        idle: birdIdle,
        fly: birdFly,
      }
    }
  },
}

export const Light = {
  args: {
    bgColor: 'var(--color-yellow)',
    iconColor: 'var(--color-orange)',
    //light: true,
    text: 'Jetzt zum Newsletter anmelden Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
    cta: {
      text: 'Abonnieren',
      skin: 'primary',
    },
    modal: {
      headline: 'Newsletter Subscription',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est ',
      confirmation: {
        headline: 'Danke für deine Anmeldung!',
        text: 'Du hast dich erfolgreich für unseren Newsletter angemeldet. Wir freuen uns, dich als Abonnent:in begrüßen zu dürfen! Schau gerne in deinem Posteingang nach einer Bestätigungs-E-Mail von uns.',
      },
      formular: {
        form: {
          cta: {
            skin: 'primary',
            width: 'w-40',
          },       
          ctaPosition: '',
          ctaText: 'Abonnieren',
          method: 'post',
          action: '../',
          fields: [
            {
              label: 'E-Mail Adresse',
              type: 'email',

              rowStart: true,
              required: true,
              id: 'email',
            },
            {
              label: "Deine Daten werden zur Bearbeitung und Beantwortung deiner Anfrage bei uns gespeichert. Weitere Informationen zum Datenschutz findest du in unserer <a href='/de/datenschutz/'>Datenschutzerklärung</a>.",
              type: "checkbox",
              id: "dataprotection",
              required: true,
              requiredMsg: "Bitte bestätigen"
            },
            {
              type: 'hidden',
              id: '_gotcha',
            },
          ],
        },
      },
      lottie: {
        idle: birdIdle,
        fly: birdFly,
      }
    }
  },
}