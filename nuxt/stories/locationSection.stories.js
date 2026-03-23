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
    landingpageCta: {
      text: 'Landingpage',
      href: '/',
    },
    locationCta: {
      text: 'Anfahrt und Parken',
      trigger: 'modal',
    },
    images: [
      {
        img: 'https://res.cloudinary.com/c4a8/image/upload/v1756123640/company/locations/Switzerland/switzerland-img-2.jpg',
      },
      {
        img: 'https://res.cloudinary.com/c4a8/image/upload/v1756123640/company/locations/Switzerland/switzerland-img-1.jpg',
      },
      {
        img: 'https://res.cloudinary.com/c4a8/image/upload/v1756123640/company/locations/Switzerland/switzerland-img-3.jpg',
      },
      {
        img: 'https://res.cloudinary.com/c4a8/image/upload/v1756123640/company/locations/Switzerland/switzerland-img-4.jpg',
      },
      {
        img: 'https://res.cloudinary.com/c4a8/image/upload/v1756123640/company/locations/Switzerland/switzerland-img-5.jpg',
      },
    ],
  },
};
