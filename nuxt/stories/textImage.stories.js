import TextImageComponent from '../components/text-image.vue';
import lottie1 from './data/lottie1.json';

export default {
  title: 'Components/Text Image',
  component: TextImageComponent,
};

export const Right = {
  args: {
    image: 'svg/icons/icon-products.svg',
    alt: 'Consulting Services',
    headlineText: 'Consulting Services',
    offset: true,
    list: [
      {
        ctaText: 'Modern Workplace',
        ctaHref: '/de/modern-workplace/consulting-services',
        link: true,
      },
      {
        ctaText: 'Azure',
        ctaHref: '/de/azure/azure-consulting',
        link: true,
      },
      {
        ctaText: 'Security',
        ctaHref: '/de/security/security-consulting',
        link: true,
      },
    ],
    copy: 'Unsere Consulting Services konzentrieren sich auf die wichtigsten Themen für unsere Kunden: <strong>Modern Workplace, Azure Datacenter, Transformation Services und DevOps</strong>. Sie arbeiten Hand in Hand mit unseren Experten, die Ihnen die Best Practices und Richtlinien für eine erfolgreiche Implementierung aufzeigen. Mit unserer tiefen technischen Expertise sorgen wir dafür, dass Ihre Cloud-Umgebung effizient, sicher und leistungsstark ist.',
  },
};

export const WithoutAnimation = {
  args: {
    noAnimation: true,
    image: 'svg/icons/icon-consulting-services.svg',
    alt: 'Consulting Services',
    headlineText: 'Consulting Services',
    offset: true,
    list: [
      {
        ctaText: 'Modern Workplace',
        ctaHref: '/de/modern-workplace/consulting-services',
        link: true,
      },
      {
        ctaText: 'Azure',
        ctaHref: '/de/azure/azure-consulting',
        link: true,
      },
      {
        ctaText: 'Security',
        ctaHref: '/de/security/security-consulting',
        link: true,
      },
    ],
    copy: 'Unsere Consulting Services konzentrieren sich auf die wichtigsten Themen für unsere Kunden: <strong>Modern Workplace, Azure Datacenter, Transformation Services und DevOps</strong>. Sie arbeiten Hand in Hand mit unseren Experten, die Ihnen die Best Practices und Richtlinien für eine erfolgreiche Implementierung aufzeigen. Mit unserer tiefen technischen Expertise sorgen wir dafür, dass Ihre Cloud-Umgebung effizient, sicher und leistungsstark ist.',
  },
};

export const JobApplication = {
  args: {

    copy: 'Keine passende offene Stelle gefunden? Kein Problem: Gerne lernen wir dich auch einfach so kennen. Vielleicht wissen wir nämlich nur noch nicht, dass wir dich brauchen, weil wir noch nicht wissen, dass es dich gibt!',
    cta: {
      text: 'Initiativbewerbung',
      trigger: "modal",

    },
    modal: {
      show: true,
      application: true,

      form: {
        ctaText: "Absenden",
        cta: {
          skin: "primary is-light",
        },
        method: "post",
        action: "/successful/",
        fields: [
          {
            label: "Name*",
            type: "text",
            id: "name",
            required: true,
            requiredMsg: "Bitte Namen eingeben",
          },
          {
            label: "Unternehmen*",
            type: "text",
            id: "company",
            required: true,
            requiredMsg: "Bitte Unternehmensnamen ausfüllen",
          },
          {
            label: "Email-Adresse*",
            type: "email",
            id: "email",
            required: true,
            requiredMsg: "Bitte E-Mail-Adresse eingeben",
          },
          {
            label:
              'Deine Daten werden zur Bearbeitung und Beantwortung deiner Anfrage bei uns gespeichert. Weitere Informationen zum Datenschutz findest du in unserer <a href="/de/datenschutz">Datenschutzerklärung</a>.',
            type: "checkbox",
            id: "dataprotection",
            required: true,
            requiredMsg: "Bitte bestätigen",
          },
          {
            type: "hidden",
            id: "_subject",
            value: "Form: Managed Red Tenant | DE",
          },
          {
            type: "hidden",
            id: "_topic",
            value: "Security",
          },

          {
            type: "hidden",
            id: "inbox_key",
            value: "gkgab-contact-form",
          },
          {
            type: "hidden",
            id: "_gotcha",
          },
        ],
      },
      success: {
        cta: {
          skin: 'primary',
          width: 'w-100 w-lg-30',
          text: 'Schließen',
        },
        headline: {
          text: 'Vielen Dank',
        },
        subline:
          'Inhaltlich: Deine Bewerbung ist bei uns eingegangen. Super, wir freuen uns.  Eine Bestätigunsmail solltest du in deinem Postfach von dir angegebne Adresse finden.',
        subheadline: {
          text: 'So geht es nun weiter',
        },
        text: 'Text sollte beinhalten dass die Bewerbungsunterlagen sorgfältig geprüft werden und dass der Bewerber in der Regel innerhalb einer Woche Feedback erwarten kann',
      },


    },
      copyClasses: 'h3-font-size',
       
        white: true,
        image: "/svg/icon-hand.svg",
        cloudinary: false,
        bgColor: 'var(--color-career-background)',
        left: true,
        spacing: 'space-top-2 space-bottom-2',

  },


};

export const LeftFloating = {
  args: {
    href: '',
    image: 'svg/products/protection-shield.svg',
    imagePreset: 'textImageFloatingSmallSquare',
    imageClasses: 'center',
    headlineText: 'Why authenticate with certificates to access the network?',
    level: 'h2',
    spacing: 'space-bottom-2 space-bottom-lg-3',
    left: true,
    float: true,
    copy: 'We hear this question frequently: <strong>&quot;Why should I not log in to my WIFI by using my (Azure) Active Directory credentials?&quot; </strong><br /><br />We believe that users should use their (Azure) Active Directory credentials as little as possible. Working password-less is state of the art and prevents identity theft. This is why we use certificates for network authentication. While authenticating with certificates, no credentials are transferred. <br /><br />There is another benefit: device certificates are available for the operating system prior to user login. Therefore, network connections can be established before Windows user logon. <br /><br />And finally, it is not a big deal: Certificates and WIFI profiles can be deployed to clients easily. You just need a Certificate Authority (e.g. <a href="https://scepman.com/" target="_blank">SCEPman</a> – super-easy) and a device management system, like Microsoft Intune or JAMF.',
  },
};

export const WithBadge = {
  args: {
    badge: {
      text: 'Badge Text',
    },
    cta: {
      text: 'Jetzt anmelden',
      href: 'javascript:void(0)',
    },
    href: '',
    image: 'svg/products/protection-shield.svg',
    imagePreset: 'textImageFloatingSmallSquare',
    imageClasses: 'center',
    headlineText: 'Why authenticate with certificates to access the network?',
    level: 'h2',
    left: true,
    float: true,
    copy: 'We hear this question frequently: <strong>&quot;Why should I not log in to my WIFI by using my (Azure) Active Directory credentials?&quot; </strong><br /><br />We believe that users should use their (Azure) Active Directory credentials as little as possible. Working password-less is state of the art and prevents identity theft. This is why we use certificates for network authentication. While authenticating with certificates, no credentials are transferred. <br /><br />There is another benefit: device certificates are available for the operating system prior to user login. Therefore, network connections can be established before Windows user logon. <br /><br />And finally, it is not a big deal: Certificates and WIFI profiles can be deployed to clients easily. You just need a Certificate Authority (e.g. <a href="https://scepman.com/" target="_blank">SCEPman</a> – super-easy) and a device management system, like Microsoft Intune or JAMF.',
  },
};

export const LeftFloatingBg = {
  args: {
    href: '',
    image: 'visuals/security-ninjacat.png',
    alt: 'Calling with teams',
    cloudinary: true,
    bgColor: '#f5f5f5',
    headlineText: 'Workplace Ninja Virtual Edition',
    level: 'h2',
    left: true,
    float: true,
    copy: 'Dieses Jahr findet die Workplace Ninja Virtual Edition 2021 <strong>vom 31. August bis 2. September </strong> statt. Eine der wichtigsten europäischen Technologiekonferenzen für Hardcore-Techies in ConfigMgr, Intune, Microsoft Security, Azure AD, PowerShell und Azure Virtual Desktop. Ziel der Veranstaltung ist es, Workplace-Experten zusammenzubringen, um ihr Wissen zu teilen und gemeinsam zu lernen. glueckkanja ist dieses Jahr Platin-Sponsor und wird mit zwei Beiträgen dabei sein. Aufgrund der COVID-19 ist die Veranstaltung <strong>virtuell und komplett kostenlos</strong>. Die Anmeldung ist bereits möglich. Wir freuen uns darauf, euch dort zu treffen.',
    background: 'svg/shapes/shape-5.svg',
    list: [
      {
        ctaText: 'Jetzt anmelden',
        ctaHref: 'https://www.eventbrite.ch/e/workplace-ninja-virtual-edition-2021-tickets-135839310033',
        link: false,
        target: '_blank',
      },
    ],
  },
};

export const WithAnimation = {
  args: {
    lottie: lottie1,
    alt: 'Consulting Services',
    headlineText: 'Consulting Services',
    offset: true,
    list: [
      {
        ctaText: 'Modern Workplace',
        ctaHref: '/de/modern-workplace/consulting-services',
        link: true,
      },
      {
        ctaText: 'Azure',
        ctaHref: '/de/azure/azure-consulting',
        link: true,
      },
      {
        ctaText: 'Security',
        ctaHref: '/de/security/security-consulting',
        link: true,
      },
    ],
    copy: 'Unsere Consulting Services konzentrieren sich auf die wichtigsten Themen für unsere Kunden: <strong>Modern Workplace, Azure Datacenter, Transformation Services und DevOps</strong>. Sie arbeiten Hand in Hand mit unseren Experten, die Ihnen die Best Practices und Richtlinien für eine erfolgreiche Implementierung aufzeigen. Mit unserer tiefen technischen Expertise sorgen wir dafür, dass Ihre Cloud-Umgebung effizient, sicher und leistungsstark ist.',
  },
};

export const WithList = {
  args: {
    image: 'svg/icons/icon-products.svg',
    alt: "Azure Training Timeline",
    level: "h2",
    headlineText: "Tag 1 - Tag 4",
    overline: "10:00 - 17:00 Uhr",
    listTitle: "Überblick",
    listItems: [
      "Azure Abonnements verwalten",
      "Identitäten sichern",
      "Infrastruktur verwalten",
      "Virtuelle Netzwerke konfigurieren",
      "Azure- und lokale Standorte verbinden",
      "Netzwerkverkehr verwalten",
      "Speicherlösungen implementieren",
      "Virtuelle Maschinen erstellen und skalieren",
      "Webanwendungen und Container implementieren",
      "Daten sichern und teilen",
      "Lösungen überwachen"
    ],
    copy: 'Das Training wird Remote über Microsoft Teams durchgeführt. Sie benötigen ein Windows 11 Notebook mit vorbereiteter Virtualisierung und entsprechender Festplattenkapazität. Zusätzlich brauchen Sie Microsoft Teams, eine stabile Internetverbindung, ein Headset und eine Webcam.',
  },
};

