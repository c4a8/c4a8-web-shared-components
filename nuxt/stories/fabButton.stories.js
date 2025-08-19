import FabButton from '../components/fab-button';

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
};

export const Contact = {
  args: {
    modal: {
      show: true,
      application: true,
      contact: {
        headline: 'Hast du Fragen? Sprich uns gerne an!',
        infos: {
          person: {
            image: 'people/people-sophie-luna.png',
            cloudinary: true,
            alt: 'Kontakt mit Sophie',
            name: 'Hast du Fragen? Sprich uns gerne an!',
            details: [
              {
                text: 'Lorem ipsum dolor & Sit amet lorem',
                href: 'mailto:kontakt@glueckkanja.com',
                icon: 'site/mail',
              },
              {
                text: '+49 69 4005520',
                href: 'tel:+49 69 4005520',
                notes: 'lorem ipsum dolor sit amet lore lorem ipsum dolor sit amet lore',
                icon: 'site/phone',
              },
            ],
          },
        },
      },
    },
  },
};

