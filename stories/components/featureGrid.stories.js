import { getAssetPath, getDefaultSettings } from '../../.storybook/templates';
import { includesfeaturegridhtml as component } from '../../.storybook/generatedIncludes';
import lottie1 from '../data/lottie1.json';

export default {
  ...getDefaultSettings({
    component,
    argTypes: {
      featureGrid: {
        description: 'A List of Features with a corresponding Headline',
        type: 'object',
      },
      centered: {
        description: 'Toggle to center feature Grid',
        type: 'boolean',
      },
      spacing: {
        description: 'Adds helper classes for the spacing',
        control: {
          type: 'text',
        },
        type: {
          summary: 'Bootstrap Spacing',
          detail: 'space-bottom-1, space-bottom-2, space-top-1, space-top-2',
        },
      },
    },
  }),
  title: 'Components/Feature Grid',
};

export const Default = {
  args: {
    featureGrid: {
      headline: 'Specifications',
      features: [
        {
          title: 'Contact Sources',
          image: {
            src: 'svg/icons/unifiedcontacts_feature_contactsources.svg',
            alt: 'Contact Sources',
          },
          list: ['Azure AD Users', 'Azure AD Contacts (coming soon)', 'Personal Exchange Online Contacts'],
        },
        {
          title: 'Contact Card',
          image: {
            src: 'svg/icons/unifiedcontacts_feature_contactcards.svg',
            alt: 'Contact Card',
          },
          list: ['Place PSTN calls', 'Place Teams calls', 'Write email', 'Start Teams chat', 'Get presence status'],
        },
        {
          title: 'Platforms',
          image: {
            src: 'svg/icons/unifiedcontacts_feature_platforms.svg',
            alt: 'Platforms',
          },
          list: ['Teams Desktop Client', 'Teams Web App', 'Teams Mobile App'],
        },
        {
          title: 'ISO 27001',
          image: {
            src: 'svg/icons/unifiedcontacts_feature_certificates.svg',
            alt: 'ISO 27001',
          },
          list: [
            'Our development and operations teams are certified',
            '<a href="https://www.datenschutz-cert.de/uploads/tx_dsnordreferenzen/glueckkanja_ISO27001_Urkunde_20211203_digital.pdf">ISO 27001 Certificate</a>',
          ],
        },
      ],
    },
  },
};

export const WithImage = {
  args: {
    featureGrid: {
      image: {
        src: getAssetPath('img/image-placeholder-1.jpg'),
        alt: 'lorem ipsum dolor sit amet',
      },
      headline: 'Specifications',
      features: [
        {
          title: 'Contact Sources',
          image: {
            src: 'svg/icons/unifiedcontacts_feature_contactsources.svg',
            alt: 'Contact Sources',
          },
          list: ['Azure AD Users', 'Azure AD Contacts (coming soon)', 'Personal Exchange Online Contacts'],
        },
        {
          title: 'Contact Card',
          image: {
            src: 'svg/icons/unifiedcontacts_feature_contactcards.svg',
            alt: 'Contact Card',
          },
          list: ['Place PSTN calls', 'Place Teams calls', 'Write email', 'Start Teams chat', 'Get presence status'],
        },
        {
          title: 'Platforms',
          image: {
            src: 'svg/icons/unifiedcontacts_feature_platforms.svg',
            alt: 'Platforms',
          },
          list: ['Teams Desktop Client', 'Teams Web App', 'Teams Mobile App'],
        },
        {
          title: 'ISO 27001',
          image: {
            src: 'svg/icons/unifiedcontacts_feature_certificates.svg',
            alt: 'ISO 27001',
          },
          copy: 'lorem ipsum dolor sit amet',
          list: [
            'Our development and operations teams are certified',
            '<a href="https://www.datenschutz-cert.de/uploads/tx_dsnordreferenzen/glueckkanja_ISO27001_Urkunde_20211203_digital.pdf">ISO 27001 Certificate</a>',
          ],
          copy_1: 'Provide an easy to use web interface for your help desk staff',
          list_1: [
            'Leverage the power of Intune in your help desk',
            'Execute important tasks with "just a click"',
            'Integration of remote support tools and help desk tickets',
          ],
        },
      ],
    },
  },
};

export const Centered = {
  args: {
    centered: true,
    featureGrid: {
      headline: 'Specifications',
      features: [
        {
          title: 'Contact Sources',
          image: {
            src: 'svg/icons/unifiedcontacts_feature_contactsources.svg',
            alt: 'Contact Sources',
          },
          list: ['Azure AD Users', 'Azure AD Contacts (coming soon)', 'Personal Exchange Online Contacts'],
          cta: {
            text: 'With Button',
            skin: 'primary is-cutoff',
            href: 'javascript:void(0)',
          },
        },
        {
          title: 'Contact Card',
          image: {
            src: 'svg/icons/unifiedcontacts_feature_contactcards.svg',
            alt: 'Contact Card',
          },
          list: ['Place PSTN calls', 'Place Teams calls', 'Write email', 'Start Teams chat', 'Get presence status'],
        },
        {
          title: 'Platforms',
          image: {
            src: 'svg/icons/unifiedcontacts_feature_platforms.svg',
            alt: 'Platforms',
          },
          list: ['Teams Desktop Client', 'Teams Web App', 'Teams Mobile App'],
        },
        {
          title: 'ISO 27001',
          image: {
            src: 'svg/icons/unifiedcontacts_feature_certificates.svg',
            alt: 'ISO 27001',
          },
          list: [
            'Our development and operations teams are certified',
            '<a href="https://www.datenschutz-cert.de/uploads/tx_dsnordreferenzen/glueckkanja_ISO27001_Urkunde_20211203_digital.pdf">ISO 27001 Certificate</a>',
          ],
        },
      ],
    },
  },
};

export const WithAnimation = {
  args: {
    featureGrid: {
      image: {
        alt: 'lorem ipsum dolor sit amet',
        lottie: lottie1,
      },
      headline: 'Specifications',
      headlineClasses: 'text-left',
      features: [
        {
          title: 'Contact Sources',
          image: {
            src: 'svg/icons/unifiedcontacts_feature_contactsources.svg',
            alt: 'Contact Sources',
          },
          list: ['Azure AD Users', 'Azure AD Contacts (coming soon)', 'Personal Exchange Online Contacts'],
        },
        {
          title: 'Contact Card',
          image: {
            src: 'svg/icons/unifiedcontacts_feature_contactcards.svg',
            alt: 'Contact Card',
          },
          list: ['Place PSTN calls', 'Place Teams calls', 'Write email', 'Start Teams chat', 'Get presence status'],
        },
        {
          title: 'Platforms',
          image: {
            src: 'svg/icons/unifiedcontacts_feature_platforms.svg',
            alt: 'Platforms',
          },
          list: ['Teams Desktop Client', 'Teams Web App', 'Teams Mobile App'],
        },
        {
          title: 'ISO 27001',
          image: {
            src: 'svg/icons/unifiedcontacts_feature_certificates.svg',
            alt: 'ISO 27001',
          },
          list: [
            'Our development and operations teams are certified',
            '<a href="https://www.datenschutz-cert.de/uploads/tx_dsnordreferenzen/glueckkanja_ISO27001_Urkunde_20211203_digital.pdf">ISO 27001 Certificate</a>',
          ],
        },
      ],
    },
  },
};

export const WithOverline = {
  args: {
    centered: true,
    featureGrid: {
      overline: 'This is an overline',
      overlineClasses: 'highlight-orange',
      overlinePosition: 'left',
      lightOverline: true,
      headline: 'Specifications',
      subline: 'Lorem ipsum dolor sit amet',
      imageWidth: '80',
      features: [
        {
          title: 'Contact Sources',
          image: {
            src: getAssetPath('img/image-placeholder-1.jpg'),
            alt: 'Contact Sources',
          },
          copy: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        },
        {
          title: 'Contact Card',
          image: {
            src: getAssetPath('img/image-placeholder-1.jpg'),
            alt: 'Contact Card',
          },
          copy: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        },
        {
          title: 'Platforms',
          image: {
            src: getAssetPath('img/image-placeholder-1.jpg'),
            alt: 'Platforms',
          },
          copy: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        },
        {
          title: 'ISO 27001',
          image: {
            src: getAssetPath('img/image-placeholder-1.jpg'),
            alt: 'ISO 27001',
          },
          copy: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        },
      ],
    },
  },
};
