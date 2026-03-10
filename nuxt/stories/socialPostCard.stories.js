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
    url: 'https://www.glueckkanja.com',
  },
  postedAt: 1770218107043,
  postUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:1234567890',
  stats: { likes: 128, comments: 12, reposts: 13 },
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
    contentHtml: 'Throwback to our last community event – thanks to everyone who joined! #community #events',
    media: [{ type: 'image', src: 'https://picsum.photos/id/1074/800/500' }],
  },
};

export const Animated = {
  args: {
    ...base,
    hasAnimation: true,
    contentHtml: "Automation is key. Here's how we streamline AVD deployments. 🚀",
    media: [{ type: 'image', src: 'https://picsum.photos/id/1011/800/500' }],
  },
};

export const LongText = {
  args: {
    ...base,
    contentHtml:
      'We are excited to share our latest insights on Microsoft 365 security hardening. This comprehensive guide covers everything from basic configuration to advanced threat protection. Read more in our blog and let us know your thoughts! We would love to hear from you and discuss how these strategies can help your organization.',
    media: [{ type: 'image', src: 'https://picsum.photos/id/1074/800/500' }],
    maxContentLength: 150,
  },
};

export const ResharedPost = {
  args: {
    ...base,
    contentHtml: 'Throwback to our last community event – thanks to everyone who joined! #community #events',
    media: [{ type: 'image', src: 'https://picsum.photos/id/1074/800/500' }],
    resharedPost: {
      author: {
        name: 'glueckkanja',
        handle: '@glueckkanja',
        avatarUrl: 'https://i.pravatar.cc/80?img=12',
      },
      contentHtml: 'Reshare Throwback to our last community event – thanks to everyone who joined! #community #events',
      media: [{ type: 'image', src: 'https://picsum.photos/id/1074/800/500' }],
    },
  },
};

export const ResharedPostNoAuthor = {
  args: {
    ...base,
    contentHtml: 'Throwback to our last community event – thanks to everyone who joined! #community #events',
    media: [{ type: 'image', src: 'https://picsum.photos/id/1074/800/500' }],
    resharedPost: {
      contentHtml: 'Reshare Throwback to our last community event – thanks to everyone who joined! #community #events',
      media: [{ type: 'image', src: 'https://picsum.photos/id/1074/800/500' }],
    },
  },
};
