import JobListDetailComponent from '../components/job-list-detail';


export default {
  title: 'Components/JobListDetail',
  component: JobListDetailComponent,
};

export const jobListDetail = {
  args: {
    lang: 'de',
    ctaText: 'Jetzt bewerben',

    detailColor: '--color-job-list-detail',
    clientName: 'c4a8',
    jobId: '',
    apiUrl: '',
    ctaButton: true,
    form: {
      headline: 'Jetzt bewerben',
      cta: {
        skin: 'primary',
        width: 'w-100 w-lg-30',
      },
      ctaText: 'Bewerbung absenden',
      method: 'post',
      action: '',
      fields: [
        {
          label: 'Vorname',
          type: 'text',
          col: 6,
          rowStart: true,
          required: true,
          id: 'firstName',
        },
        {
          label: 'Nachname',
          type: 'text',
          col: 6,
          rowEnd: true,
          required: true,
          id: 'lastName',
        },
        {
          label: 'E-Mail Adresse',
          type: 'email',
          col: 6,
          rowStart: true,
          required: true,
          id: 'email',
        },
        {
          label: 'Telefon',
          type: 'text',
          col: 6,
          rowEnd: true,
          required: true,
          id: 'phone',
        },
        {
          label: 'Kündigungsfrist (optional)',
          type: 'text',
          col: 6,
          rowStart: true,
          id: 'cancellation',
        },
        {
          label: 'Gehaltsvorstellung (optional)',
          type: 'text',
          col: 6,
          rowEnd: true,
          id: 'salary',
        },
        {
          label: 'Nachricht (optional)',
          type: 'textarea',
          id: 'message',
        },
        {
          type: 'file',
          col: 12,
          rowStart: true,
          rowEnd: true,
          formAttachments: {
            required: true,
            requiredMsg: 'Bitte einen Anhang hinzufügen',
            id: 'file',
            description: 'Anhänge wie Lebenslauf und Anschreiben hinzufügen',
            text: 'Oder Dateien auswählen',
            extensions: ['pdf'],
            maxSize: 20000000,
          },
        },
        {
          label:
            "<small>Lorem ipsum dolor sit amet, consectetur adipiscing elit <a href='javascript:void()'>Lorem Ipsum</a>. Sit amet consectetur adipiscing elit.</small>",
          type: 'checkbox',
          id: 'privacy',
          required: true,
        },
      ],
    },
    headlineLevel: '',
    headlineClasses: '',
    gender: '',
    googleMaps: null,
    apiKey: '4254caca2f454e9887552ac9012fac13',
    mockApplyUrl: '',
    mockDocumentsUrl: '',
    modalSuccess: {
      cta: {
        skin: 'primary',
        width: 'w-100 w-lg-30',
        text: 'Schließen',
      },
      headline: { text: 'Yeah, danke für deine Bewerbung, ' },
      subline:
        'Wir freuen uns, dass du uns deine Unterlagen geschickt hast und haben dir zur Bestätigung eine Mail geschickt. Wir schauen uns deine Bewerbung jetzt in Ruhe an und melden uns bei dir innerhalb einer Woche. Großes glueckkanja Ehrenwort!',
    },
    modalError: {
      cta: {
        skin: 'primary',
        width: 'w-100 w-lg-30',
        text: 'Schließen',
      },
      headline: {
        text: 'Ooops!',
      },
      subline: 'Etwas ist schief gelaufen!',
      text: 'Bitte versuche es später noch einmal oder kontaktiere uns unter:',
      mail: 'info@glueckkanja.de',
      phone: '+49 69 4005520',
    },
  },
};
