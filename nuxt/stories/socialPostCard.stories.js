import SocialPostCard from '../components/social-post-card.vue';

export default {
  component: SocialPostCard,
  argTypes: {},
  title: 'Components/Social Post Card',
};

const base = {
  author: {
    name: 'glueckkanja',
    handle: '@glueckkanja',
    avatarUrl: 'https://i.pravatar.cc/80?img=12',
  },
  postedAt: '2025-12-15',
  postUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:1234567890',
  stats: { likes: 128, comments: 12, reposts: 4 },
};

export const TextOnly = {
  args: {
    ...base,
    contentHtml:
      'We are excited to share our latest insights on Microsoft 365 security hardening. <br/>Read more in our blog and let us know your thoughts!',
  },
};

export const WithImage = {
  args: {
    ...base,
    contentHtml:
      'Throwback to our last community event – thanks to everyone who joined! #community #events',
    media: [
      { type: 'image', src: 'https://picsum.photos/id/1074/800/500' },
    ],
  },
};

export const Animated = {
  args: {
    ...base,
    hasAnimation: true,
    contentHtml:
      'Automation is key. Here’s how we streamline AVD deployments. 🚀',
    media: [
      { type: 'image', src: 'https://picsum.photos/id/1011/800/500' },
    ],
  },
};


