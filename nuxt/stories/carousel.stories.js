import CarouselComponent from '../components/carousel.vue';

export default {
  component: CarouselComponent,
  argTypes: {},
  title: 'Components/Carousel',
};

export const Automatic = {
  args: {
    items: [
      {
        img: '/logos/partner-misa-mxdr.svg',
        alt: 'Microsoft Intelligent Security Association',
      },
      {
        img: '/logos/seal-mssp-infrastructure.svg',
        alt: 'MSP Infrastructure Azure',
      },
      {
        img: '/logos/seal-mssp-data-ai.svg',
        alt: 'MSP Data & AI Azure',
      },
      {
        img: '/logos/seal-msp-digital-app-innovation.svg',
        alt: 'MSP Digital & App Innovation Azure',
      },
      {
        img: '/logos/seal-mssp-modern-work.svg',
        alt: 'MSP Modern Work',
      },
      {
        img: '/logos/seal-mssp-security.svg',
        alt: 'MSP Security',
      },
      {
        img: '/logos/isg-2024-m365-services-large-enterprises.svg',
        alt: 'ISG Microsoft 365 Services Large Enterprises',
      },
      {
        img: '/logos/isg-2024-m365-services-midmarket.svg',
        alt: 'ISG Microsoft 365 Services Midmarket',
      },
      {
        img: '/logos/isg-2024-azure-large-enterprises.svg',
        alt: 'ISG Microsoft Azure Large Enterprises',
      },
      {
        img: '/logos/isg-2024-azure-midmarket.svg',
        alt: 'ISG Microsoft Azure Midmarket',
      },
      {
        img: '/logos/iso27001.svg',
        alt: 'ISO 27001',
        url: 'https://www.glueckkanja.com/documents/general/gk-ISO27001Certificate-en.pdf',
        target: '_blank',
        classes: 'max-rem-10 max-lg-rem-11',
      },
      {
        img: '/logos/kununu-compact.svg',
        alt: 'Kununu Logo',
        url: 'https://www.kununu.com/de/glueck-kanja-consulting',
        target: '_blank',
      },
    ],
  },
};

export const Manual = {
  args: {
    component: 'tile',
    items: [
      {
        color: 'var(--color-celery)',
        overline: 'Managed',
        title: 'Intune',
      },
      {
        color: 'var(--color-ripe-lemon)',
        overline: 'Managed',
        title: 'Entra',
      },
      {
        color: 'var(--color-red)',
        overline: 'Managed',
        title: 'Red Tenant',
        textColor: 'var(--color-white)',
      },
      {
        color: 'var(--color-gigas)',
        overline: 'Managed',
        title: 'Soc',
        textColor: 'var(--color-white)',
      },
      {
        color: 'var(--color-denim)',
        overline: 'Managed',
        title: 'Azure',
        textColor: 'var(--color-white)',
      },
    ],
  },
};
