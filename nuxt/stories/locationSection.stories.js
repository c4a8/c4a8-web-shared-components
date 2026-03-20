import locationSectionComponent from '../components/location-section.vue';


export default {
    component: locationSectionComponent,
    title: 'Components/LocationSection',
};

export const Default = {
    args: {
    overline: "Hauptsitz",
    headline: "Offenbach",
    location: {
      street: "Kaiserstraße 39",
      city: "Offenbach am Main",
      office: "Hauptsitz",
    },
    contactEntries: [
      {
        icon: "phone",
        headline: "Rufen Sie uns an",
        subline: "+49 69 4005520",
      },
      {
        icon: "email-action-unread",
        headline: "Schreiben Sie uns",
        subline: "info@glueckkanja.com",
      },
    ],
    locationEntries: [
      {
        icon: "pin",
        headline: "Kommen Sie Vorbei",
        subline: "Kaiserstraße 39 <br /> 63065 Offenbach am Main",
      },
      {
        icon: "phone-charger",
        headline: "Mit einem Elektrofahrzeug zu uns",
        subline: "E-Tankstellen in unserer Tiefgarage",
      },
    ],
    images: [
      {
        img: "https://res.cloudinary.com/c4a8/image/upload/v1756123640/company/locations/Switzerland/switzerland-img-2.jpg",
      },
      {
        img: "https://res.cloudinary.com/c4a8/image/upload/v1756123640/company/locations/Switzerland/switzerland-img-1.jpg",
      },
      {
        img: "https://res.cloudinary.com/c4a8/image/upload/v1756123640/company/locations/Switzerland/switzerland-img-3.jpg",
      },
      {
        img: "https://res.cloudinary.com/c4a8/image/upload/v1756123640/company/locations/Switzerland/switzerland-img-4.jpg",
      },
      {
        img: "https://res.cloudinary.com/c4a8/image/upload/v1756123640/company/locations/Switzerland/switzerland-img-5.jpg",
      },
    ],
  }
};
