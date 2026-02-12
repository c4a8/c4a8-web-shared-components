import MasonryGrid from '../components/masonry-grid.vue';
import SocialPostCard from '../components/social-post-card.vue';

export default {
  component: MasonryGrid,
  argTypes: {},
  title: 'Components/Masonry Grid',
};

const mockPosts = [
  {
    author: { name: 'glueckkanja', handle: '@glueckkanja' },
    postedAt: 1770218107043,
    postUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:1',
    companyPageUrl: 'https://www.linkedin.com/company/glueckkanja',
    contentHtml:
      'Launching our new whitepaper on Zero Trust adoption. Learn how to implement comprehensive security strategies.',
    stats: { likes: 45, comments: 3, reposts: 1 },
    media: [{ type: 'image', src: 'https://picsum.photos/id/1024/800/600' }],
  },
  {
    author: { name: 'glueckkanja', handle: '@glueckkanja' },
    postedAt: 1770218107043,
    postUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:2',
    companyPageUrl: 'https://www.linkedin.com/company/glueckkanja',
    contentHtml: 'Proud of our team winning the Partner of the Year award! 🏆',
    stats: { likes: 210, comments: 22, reposts: 7 },
    media: [{ type: 'image', src: 'https://picsum.photos/id/1005/800/900' }],
  },
  {
    author: { name: 'glueckkanja', handle: '@glueckkanja' },
    postedAt: 1770201385023,
    postUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:3',
    companyPageUrl: 'https://www.linkedin.com/company/glueckkanja',
    contentHtml: 'Quick tip: Secure score improvements you can do today.',
    stats: { likes: 80, comments: 6, reposts: 2 },
  },
  {
    author: { name: 'glueckkanja', handle: '@glueckkanja' },
    postedAt: 1770124985023,
    postUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:4',
    companyPageUrl: 'https://www.linkedin.com/company/glueckkanja',
    contentHtml: 'Event recap: Key takeaways from our latest webinar on cloud security.',
    stats: { likes: 60, comments: 4, reposts: 1 },
    media: [{ type: 'image', src: 'https://picsum.photos/id/1035/800/500' }],
  },
  {
    author: { name: 'glueckkanja', handle: '@glueckkanja' },
    postedAt: 1770038585023,
    postUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:5',
    companyPageUrl: 'https://www.linkedin.com/company/glueckkanja',
    contentHtml: 'We are hiring! Join our growing engineering team.',
    stats: { likes: 120, comments: 10, reposts: 5 },
  },
  {
    author: { name: 'glueckkanja', handle: '@glueckkanja' },
    postedAt: 1769952185023,
    postUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:6',
    companyPageUrl: 'https://www.linkedin.com/company/glueckkanja',
    contentHtml: 'AVD automation – a behind-the-scenes look at our deployment process.',
    stats: { likes: 90, comments: 8, reposts: 3 },
    media: [{ type: 'image', src: 'https://picsum.photos/id/1015/800/700' }],
  },
  {
    author: { name: 'glueckkanja', handle: '@glueckkanja' },
    postedAt: 1769865785023,
    postUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7',
    companyPageUrl: 'https://www.linkedin.com/company/glueckkanja',
    contentHtml: 'Watch our latest video on Microsoft 365 security best practices!',
    stats: { likes: 150, comments: 15, reposts: 8 },
    media: [
      {
        type: 'video',
        src: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        thumbnail: 'https://picsum.photos/id/1018/800/450',
      },
    ],
  },
  {
    author: { name: 'glueckkanja', handle: '@glueckkanja' },
    postedAt: 1769779385023,
    postUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:8',
    companyPageUrl: 'https://www.linkedin.com/company/glueckkanja',
    contentHtml:
      'New blog post: Understanding Azure AD security configurations. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    stats: { likes: 75, comments: 5, reposts: 2 },
    media: [{ type: 'image', src: 'https://picsum.photos/id/1025/800/600' }],
    resharedPost: {
      author: { name: 'glueckkanja', handle: '@glueckkanja', avatarUrl: 'https://i.pravatar.cc/80?img=19' },
      postUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:8',
      companyPageUrl: 'https://www.linkedin.com/company/glueckkanja',
      contentHtml:
        'New blog post: Understanding Azure AD security configurations. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      media: [{ type: 'image' }],
    },
  },
  {
    author: { name: 'glueckkanja', handle: '@glueckkanja' },
    postedAt: 1769779385023,
    postUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:8',
    companyPageUrl: 'https://www.linkedin.com/company/glueckkanja',
    contentHtml:
      'New blog post: Understanding Azure AD security configurations. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    stats: { likes: 75, comments: 5, reposts: 2 },
    media: [{ type: 'image', src: 'https://picsum.photos/id/1025/800/600' }],
  },
  {
    author: { name: 'glueckkanja', handle: '@glueckkanja' },
    postedAt: 1769779385023,
    postUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:8',
    companyPageUrl: 'https://www.linkedin.com/company/glueckkanja',
    contentHtml:
      'New blog post: Understanding Azure AD security configurations. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    stats: { likes: 75, comments: 5, reposts: 2 },
    media: [{ type: 'image', src: 'https://picsum.photos/id/1025/800/600' }],
    resharedPost: {
      author: { name: 'glueckkanja', handle: '@glueckkanja', avatarUrl: 'https://i.pravatar.cc/80?img=19' },
      postUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:8',
      companyPageUrl: 'https://www.linkedin.com/company/glueckkanja',
      contentHtml:
        'New blog post: Understanding Azure AD security configurations. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      media: [{ type: 'image', src: 'https://picsum.photos/id/1025/800/600' }],
    },
  },
];

export const Default = {
  args: {
    items: mockPosts,
    headline: { text: 'Social Feed' },
  },
  render: (args) => ({
    components: { MasonryGrid, SocialPostCard },
    setup() {
      return { args };
    },
    template: `
      <MasonryGrid v-bind="args">
        <template #default="{ item, index }">
          <SocialPostCard v-bind="item" :index="index" :hasAnimation="true" />
        </template>
      </MasonryGrid>
    `,
  }),
};

export const WithLoadMore = {
  args: {
    items: mockPosts,
    columns: { sm: 1, md: 2, lg: 3, xl: 3 },
    gap: '1rem',
    observeOnScroll: true,
    initialItemsCount: 3,
    itemsPerLoad: 3,
  },
  render: (args) => ({
    components: { MasonryGrid, SocialPostCard },
    setup() {
      return { args };
    },
    template: `
      <MasonryGrid v-bind="args">
        <template #default="{ item, index }">
          <SocialPostCard v-bind="item" :index="index" :hasAnimation="true" />
        </template>
      </MasonryGrid>
    `,
  }),
};
