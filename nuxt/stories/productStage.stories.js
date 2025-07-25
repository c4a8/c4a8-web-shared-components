import ProductStage from '../components/product-stage.vue';
import Products from '../.storybook/data/products.js';

export default {
  argTypes: {},
  component: ProductStage,
  title: 'Components/Product Stage',
};

export const Default = {
  args: {
    light: false,
    stage: {
      bgColor: 'var(--color-secondary)',
      headline: "A price that's right for you",
      description:
        "Priced <a href='https://docs.radiusaas.com/licensing'><font color='#000000'>per user</font></a> with unlimited devices - no base price, setup fees or complicated product tiers. Get access to all features. ",
      shape: {
        isActive: true,
        color: 'var(--color-white)',
      },
      background: {
        img: 'svg/product-backgrounds/radiusaas-background.svg',
        alt: 'Alt text',
      },
      slider: {
        range: {
          min: 50,
          max: 20000,
          step: 25,
          from: 1000,
          unit: 'Users',
          resultPer: 'mo',
        },
      },
      buttons: [
        {
          skin: 'primary is-cutoff',
          ctaText: 'Lorem ipsum dolor sit amet',
          ctaHref: 'javascript:void(0);',
          onSurface: true,
        },
      ],
      tooltip: 'lorem ipsum dolor sit amet',
    },
    products: Products,
  },
};

export const NoDescription = {
  args: {
    stage: {
      bgColor: 'var(--color-secondary)',
      headline: "A price that's right for you",
      shape: {
        isActive: true,
        color: 'var(--color-white)',
      },
      background: {
        img: 'svg/product-backgrounds/radiusaas-background.svg',
        alt: 'Alt text',
      },
      slider: {
        range: {
          min: 50,
          max: 20000,
          step: 25,
          from: 1000,
          unit: 'Users',
          resultPer: 'mo',
        },
      },
      modalId: 'product-stage-modal',
      tooltip:
        '<h3>Pricing Details</h3>All prices exclude sales tax. Our offers exclusively address professional customers. Billing for RADIUSaaS is based on a per-user model, with no setup or base fees. The subscription allows each user to authenticate to multiple devices. Subscribers are granted full access to all features, and we ensure RADIUSaaS remains up-to-date with the latest updates. A minimum subscription for 50 users per organization is required. <a href="javascript:void(0);" class="is-copy-link">Learn more on our license page</a>.',
      additionalCopy:
        'Learn more on our <a href="javascript:void(0);" class="is-copy-link">license page</a>.<br/>Are you a non-profit organization? Please <a class="is-copy-link" href="javascript:void(0);">contact us</a> for special pricing.',
    },
    products: Products,
  },
};

export const Tabs = {
  args: {
    stage: {
      bgColor: 'var(--color-primary)',
      headline: 'Start now',
      description: 'Try SCEPman for free or buy it now. We would also be happy to create an individual quote for you.',
      background: {
        img: 'svg/product-backgrounds/radiusaas-background.svg',
        alt: 'Alt text',
      },
      cards: {
        tabs: true,
        list: [
          {
            title: 'Buy now',
            id: 'buy',
            link: {
              href: '#buy',
            },
          },
          {
            title: 'Try for free',
            id: 'try',
            link: {
              href: '#try',
            },
          },
          {
            title: 'Get quote',
            id: 'quote',
            link: {
              href: '#quote',
            },
          },
        ],
      },
      shape: {
        isActive: true,
        color: 'var(--color-white)',
      },
    },
  },
};

export const Cards = {
  args: {
    stage: {
      bgColor: 'var(--color-blue-light);',
      headline: 'Become a Partner',
      description:
        'We aim to build the best technology for enabling Microsoft 365 and Windows workstations in enterprises. To support that goal, we are looking for a global community of trusted partners to help deliver sales, service, and support.',
      background: {
        img: 'svg/product-backgrounds/radiusaas-background.svg',
        alt: 'Alt text',
      },
      cards: {
        list: [
          {
            title: 'Register as a Partner',
            description: 'Do you want to resell TerraProvider? Contact us!',
            cta: {
              text: 'Apply now',
              href: '#partner',
              skin: 'primary is-cutoff',
            },
          },
          {
            title: 'Partner Portal',
            description: 'Already a registered partner? Access the partner center.',
            cta: {
              text: 'Sign in',
              href: '#signin',
              skin: 'primary is-cutoff',
              target: '_blank',
            },
          },
        ],
      },
      shape: {
        isActive: true,
        color: 'var(--color-white)',
      },
    },
  },
};
