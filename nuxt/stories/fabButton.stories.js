import FabButton from '../components/fab-button';
import lottieFile from '/Users/lisa.nagl/Code/c4a8-web-shared-components/src/stories/data/lottie-azure.json'
export default {
  component: FabButton,
  title: 'Components/Fab Button',
  argTypes: {
    icon: {
      description: 'Fab Button Icon',
      type: 'object',
    },
    modal: {
      description: 'The Modal that gets called after fab Button is pressed',
      type: 'object',
    },
    noSticky: {
      description: 'Disables Sticky for the fab Button',
      type: 'boolean',
    },
    bgColor: {
      description: 'Sets the Background Color of the fab Button',
      type: 'string',
    },
    iconColor: {
      description: 'Sets the color of the Icon',
      type: 'string',
    },
    trigger: {
      description: 'Trigger for the Modal',
      type: 'string',
    },
  },
  decorators: [
    (story) => ({
      components: { story },
      template: `
        <story />
        <div style="height: 200vh;" class="dummy-content"></div>
      `,
    }),
  ],
};

export const Contact = {
  args: {
    modal: {
      contact: {
        infos: {
          person: {
            image: 'people/people-sophie-luna.png',
            cloudinary: true,
            alt: 'Kontakt mit Sophie',
            name: 'Hast du Fragen? Sprich uns gerne an!',
            details: [
              {
                text: 'kontakt@glueckkanja.com',
                href: 'mailto:kontakt@glueckkanja.com',
                icon: 'site/mail',
              },
              {
                text: '+49 69 4005520',
                href: 'tel:+49 69 4005520',
                notes: '( Mo-Do 09-17 Uhr )',
                icon: 'site/phone',
              },
            ],
          },
          form: {
            ctaText: 'Absenden',
            cta: {
              skin: 'primary is-light',
            },
            method: 'post',
            action: '/mock/fabButton.json',
            fields: [
              {
                label: 'Vorname',
                type: 'text',
                id: 'prename',
                required: true,
                requiredMsg: 'Bitte geben Sie Ihren Vornamen an.',
              },
              {
                label: 'Nachname',
                type: 'text',
                id: 'surname',
                required: true,
                requiredMsg: 'Bitte geben Sie Ihren Nachnamen an.',
              },
              {
                label: 'Email-Adresse',
                type: 'email',
                id: 'email',
                required: true,
                requiredMsg: 'Bitte geben Sie Ihre E-Mail-Adresse ein.',
              },
              {
                label: 'Nachricht',
                type: 'textarea',
                id: 'message',
                required: false,
                requiredMsg: 'Bitte ausfüllen',
              },
              {
                label:
                  'Ich bin mit der Speicherung meiner Daten einverstanden, die Datenschutzerklärung habe ich gelesen und akzeptiert. Meine Einwilligung kann ich jederzeit widerrufen.',
                type: 'checkbox',
                id: 'checkbox1',
                required: true,
              },
              {
                type: 'hidden',
                id: '_to',
                value: 'loremipsum@glueckkanja.com',
              },
              {
                type: 'hidden',
                id: '_gotcha',
              },
            ],
          },
        },
      },
    },
  },
};

export const Emergency = {
  args: {
    bgColor: 'var(--color-orange)',
    iconColor: 'var(--color-white)',
    icon: 'emergency',
    modal: {
      contact: {
        infos: {
          person: {
            image: 'people/people-sophie-luna.png',
            cloudinary: true,
            alt: 'Kontakt mit Sophie',
            name: 'Hast du Fragen? Sprich uns gerne an!',
            details: [
              {
                text: 'kontakt@glueckkanja.com',
                href: 'mailto:kontakt@glueckkanja.com',
                icon: 'site/mail',
              },
              {
                text: '+49 69 4005520',
                href: 'tel:+49 69 4005520',
                notes: '( Mo-Do 09-17 Uhr )',
                icon: 'site/phone',
              },
            ],
          },
          form: {
            ctaText: 'Absenden',
            cta: {
              skin: 'primary is-light',
            },
            method: 'post',
            action: '/mock/fabButton.json',
            fields: [
              {
                label: 'Vorname',
                type: 'text',
                id: 'prename',
                required: true,
                requiredMsg: 'Bitte geben Sie Ihren Vornamen an.',
              },
              {
                label: 'Nachname',
                type: 'text',
                id: 'surname',
                required: true,
                requiredMsg: 'Bitte geben Sie Ihren Nachnamen an.',
              },
              {
                label: 'Email-Adresse',
                type: 'email',
                id: 'email',
                required: true,
                requiredMsg: 'Bitte geben Sie Ihre E-Mail-Adresse ein.',
              },
              {
                label: 'Nachricht',
                type: 'textarea',
                id: 'message',
                required: false,
                requiredMsg: 'Bitte ausfüllen',
              },
              {
                label:
                  'Ich bin mit der Speicherung meiner Daten einverstanden, die Datenschutzerklärung habe ich gelesen und akzeptiert. Meine Einwilligung kann ich jederzeit widerrufen.',
                type: 'checkbox',
                id: 'checkbox1',
                required: true,
              },
              {
                type: 'hidden',
                id: '_to',
                value: 'loremipsum@glueckkanja.com',
              },
              {
                type: 'hidden',
                id: '_gotcha',
              },
            ],
          },
        },
      },
    },
  },
};

export const Newsletter = {
  args: {
    bgColor: 'var(--color-gigas)',
    iconColor: 'var(--color-white)',
    icon: 'emergency',
    newsletter: {
      headline: 'Newsletter Subscription',

      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est ',


      confirmHeadline: 'Danke für deine Anmeldung!',
      confirmText: 'Du hast dich erfolgreich für unseren Newsletter angemeldet. Wir freuen uns, dich als Abonnent:in begrüßen zu dürfen! Schau gerne in deinem Posteingang nach einer Bestätigungs-E-Mail von uns.',


      formular: {
        form: {
          cta: {
            skin: 'primary',
            width: 'w-20',
          },
          ctaText: 'Abbonieren',
          ctaPosition: 'justify-content-end',
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
      lottie: lottieFile,
    }
  },

}
