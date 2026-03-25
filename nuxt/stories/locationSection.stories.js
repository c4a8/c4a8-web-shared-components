import locationSectionComponent from '../components/location-section.vue';

export default {
  component: locationSectionComponent,
  title: 'Components/LocationSection',
};

export const Default = {
  args: {
    overline: 'Hauptsitz',
    headline: 'Offenbach am Main',
    location: {
      street: 'Kaiserstraße 39',
      city: 'Offenbach am Main',
      office: 'Hauptsitz',
    },
    contactHeadline: 'Kontakt',
    contactEntries: [
      {
        icon: 'phone',
        content: '+49 69 4005520',
      },
      {
        icon: 'email-action-unread',
        content: 'info@glueckkanja.com',
      },
    ],
    locationHeadline: 'Adresse',
    locationEntries: [
      {
        icon: 'pin',
        content: 'Kaiserstraße 39 <br /> 63065 Offenbach am Main',
      },
      {
        icon: 'charging-station',
        content: 'E-Tankstellen in der <br /> Tiefgarage verfügbar',
      },
    ],
    locationCta: {
      text: 'Anfahrt und Parken',
      href:"/",
      link: true,
      reversed: true,
      classes: 'd-flex justify-content-end',
    },
    landingpageCta: {
      text: 'Mehr erfahren',
      href: '/',
    },
    images: [
      {
        img: 'https://res.cloudinary.com/c4a8/image/upload/v1756124382/company/locations/Offenbach/gk-Commodore.jpg',
      },
      {
        img: 'https://res.cloudinary.com/c4a8/image/upload/v1756124378/company/locations/Offenbach/_JR_8457.jpg',
      },
      {
        img: 'https://res.cloudinary.com/c4a8/image/upload/v1756124376/company/locations/Offenbach/gk-OG.jpg',
      },
      {
        img: 'https://res.cloudinary.com/c4a8/image/upload/v1756124376/company/locations/Offenbach/gk-Treppe.jpg',
      },
      {
        img: 'https://res.cloudinary.com/c4a8/image/upload/v1756124374/company/locations/Offenbach/gk-Empfang-03.jpg',
      },
    ],
  },
};
