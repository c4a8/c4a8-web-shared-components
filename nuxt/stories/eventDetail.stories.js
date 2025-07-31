import EventDetailComponent from '../components/event-detail.vue';

export default {
  component: EventDetailComponent,
  argTypes: {
    detailColor: {
      description: 'Sets the Event Detail Color',
      control: {
        type: 'text',
      },
    },
    detailShapeColor: {
      description: 'Sets the Event Detail Shape Color',
      control: {
        type: 'text',
      },
    },
    headline: {
      description: 'Headline of Event Detail',
      type: 'string',
    },
    name: {
      description: 'Name of the Event Presenters/Hosts',
      type: 'array',
    },
    headlineLevel: {
      description: 'Adds classes for the Headline Level',
      control: {
        type: 'text',
      },
      type: {
        summary: 'Headline Levels',
        detail: 'h1, h2, h3, h4',
      },
    },
    headlineClasses: {
      description: 'Adds helper classes for the Headline',
      control: {
        type: 'text',
      },
    },
    content: {
      description: 'Event Detail Content',
      type: 'Object',
    },
    form: {
      description: 'Contact form',
      type: 'object',
    },
    formAdditionalFields: {
      description: 'Adds additional Fields to the Form',
      type: 'array',
    },
    formReplaceValue: {
      description: 'Replaces Input Value for Forms',
      type: 'string',
    },
    image: {
      description: 'Event Detail Image',
      type: 'object',
    },
    badge: {
      description: 'Adds Badge to the Even Detail Page',
      type: 'object',
    },
    showBadge: {
      description: 'Show Badge on Event Detail Page Yes/No',
      type: Boolean,
      default: false,
    },
    price: {
      description: 'The Event Price',
      type: 'string',
    },
    moment: {
      description: 'Specific Date',
      type: 'string',
    },
    shapes: {
      description: 'Event Detail Shapes',
      type: 'object',
    },
    time: {
      description: 'Time  or time span of an Event',
      control: {
        type: 'text',
      },
    },
  },
  title: 'Components/Event Detail',
};

export const EventDetail = {
  args: {
    form: {
      uncentered: true,
      ctaText: 'Anfrage Absenden',
      cta: {
        skin: 'primary',
      },
      method: 'post',
      action: '/',
      fields: [
        {
          label: 'Vorname',
          type: 'text',
          id: 'prename',
          required: true,
          requiredMsg: 'Bitte geben Sie Ihren Vornamen an.',
        },
        {
          label: 'Nachnamen',
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
          label: 'Telefon',
          type: 'phone',
          id: 'phone',
          required: true,
          requiredMsg: 'Bitte geben Sie Ihre Telefonnummer an.',
        },
        {
          label: 'Geplante Personenanzahl (ca.)',
          type: 'number',
          id: 'people',
          required: true,
          requiredMsg: 'Bitte geben Sie eine Personenanzahl an.',
          rowStart: true,
          rowEnd: true,
          col: 5,
        },
        {
          label: 'Nachricht (optional)',
          type: 'textarea',
          id: 'message',
          required: false,
          requiredMsg: 'Bitte ausfüllen',
        },
        {
          label:
            'Ich bin mit der Speicherung meiner Daten einverstanden, die Datenschutzerklärung habe ich gelesen und akzeptiert. Meine Einwilligung kann ich jederzeit widerrufen.',
          type: 'checkbox',
          id: 'dataprotection',
          required: false,
          requiredMsg: 'Bitte ausfüllen',
        },
        {
          type: 'hidden',
          id: '_to',
          value: 'michael.ehrich@krekeny.com',
        },
        {
          type: 'hidden',
          id: '_gotcha',
        },
      ],
    },
    formReplaceValue: 'neue event id',
    formAdditionalFields: [
      {
        type: 'hidden',
        id: 'eventid',
        value: '#form-field-replace-value#',
      },
    ],
    headline: 'Microsoft 365 Holistic Workplace Security via Teams Meeting',
    name: ['Nadine Kern', 'Max Mustermann'],
    time: '1-4 Tage',
    shapes: [
      {
        color: 'var(--color-yellow)',
      },
      {
        color: 'var(--color-blue-medium)',
      },
    ],
    image: {
      img: '/demo/authors-demo.png',
      alt: 'lorem ipsum',
    },
    badge: {
      text: 'Training',
      textColor: 'var(--color-black)',
      color: 'var(--color-sunglow)',
    },
    price: 'Kostenlos',
    moment: '16.02.22',
    time: '14:15 Uhr',
    content: {
      headline: 'GK Event',
      intro: "Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans.",
      paragraphs: [
        {
          headline: "Your department, current job:",
          items: [
            'I work as a senior consultant in the Azure department.',
            'I spend most of my days together with customers in varying projects.',
            'I lead the development of gk-gab Azure Foundation product.',
          ]
        },
      ],
    }
  },
};
