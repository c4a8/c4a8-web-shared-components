import NewsletterBannerComponent from '../components/newsletter-banner.vue';
import lottieFile from '/Users/lisa.nagl/Code/c4a8-web-shared-components/src/stories/data/lottie-azure.json'

export default {
  component: NewsletterBannerComponent,
  title: 'Components/NewsletterBanner',

};

export const Default = {
  args: {
    bgColor: 'var(--color-yellow)',
    iconColor: 'var(--color-white)',
    icon: 'origamiBird',   
    bannertext: 'Jetzt zum Newsletter anmelden Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore .',
    ctaText: 'Abbonieren',
      cta: {
        skin: 'primary',
       
      },
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
