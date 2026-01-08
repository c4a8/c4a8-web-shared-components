import MasonryGrid from '../components/masonry-grid.vue';
import SocialPostCard from '../components/social-post-card.vue';

export default {
  component: MasonryGrid,
  argTypes: {},
  title: 'Components/Masonry Grid',
};

const mockPosts = [
  {
    author: { name: 'glueckkanja', handle: '@glueckkanja', avatarUrl: 'https://i.pravatar.cc/80?img=12' },
    postedAt: '1 day ago',
    postUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:1',
    companyPageUrl: 'https://www.linkedin.com/company/glueckkanja',
    contentHtml:
      'Launching our new whitepaper on Zero Trust adoption. Learn how to implement comprehensive security strategies.',
    stats: { likes: 45, comments: 3, reposts: 1 },
    media: [{ type: 'image', src: 'https://picsum.photos/id/1024/800/600' }],
  },
  {
    author: { name: 'glueckkanja', handle: '@glueckkanja', avatarUrl: 'https://i.pravatar.cc/80?img=13' },
    postedAt: '2 days ago',
    postUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:2',
    companyPageUrl: 'https://www.linkedin.com/company/glueckkanja',
    contentHtml: 'Proud of our team winning the Partner of the Year award! 🏆',
    stats: { likes: 210, comments: 22, reposts: 7 },
    media: [{ type: 'image', src: 'https://picsum.photos/id/1005/800/900' }],
  },
  {
    author: { name: 'glueckkanja', handle: '@glueckkanja', avatarUrl: 'https://i.pravatar.cc/80?img=14' },
    postedAt: '3 days ago',
    postUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:3',
    companyPageUrl: 'https://www.linkedin.com/company/glueckkanja',
    contentHtml: 'Quick tip: Secure score improvements you can do today.',
    stats: { likes: 80, comments: 6, reposts: 2 },
  },
  {
    author: { name: 'glueckkanja', handle: '@glueckkanja', avatarUrl: 'https://i.pravatar.cc/80?img=15' },
    postedAt: '4 days ago',
    postUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:4',
    companyPageUrl: 'https://www.linkedin.com/company/glueckkanja',
    contentHtml: 'Event recap: Key takeaways from our latest webinar on cloud security.',
    stats: { likes: 60, comments: 4, reposts: 1 },
    media: [{ type: 'image', src: 'https://picsum.photos/id/1035/800/500' }],
  },
  {
    author: { name: 'glueckkanja', handle: '@glueckkanja', avatarUrl: 'https://i.pravatar.cc/80?img=16' },
    postedAt: '5 days ago',
    postUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:5',
    companyPageUrl: 'https://www.linkedin.com/company/glueckkanja',
    contentHtml: 'We are hiring! Join our growing engineering team.',
    stats: { likes: 120, comments: 10, reposts: 5 },
  },
  {
    author: { name: 'glueckkanja', handle: '@glueckkanja', avatarUrl: 'https://i.pravatar.cc/80?img=17' },
    postedAt: '1 week ago',
    postUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:6',
    companyPageUrl: 'https://www.linkedin.com/company/glueckkanja',
    contentHtml: 'AVD automation – a behind-the-scenes look at our deployment process.',
    stats: { likes: 90, comments: 8, reposts: 3 },
    media: [{ type: 'image', src: 'https://picsum.photos/id/1015/800/700' }],
  },
  {
    author: { name: 'glueckkanja', handle: '@glueckkanja', avatarUrl: 'https://i.pravatar.cc/80?img=18' },
    postedAt: '1 week ago',
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
    author: { name: 'glueckkanja', handle: '@glueckkanja', avatarUrl: 'https://i.pravatar.cc/80?img=19' },
    postedAt: '2 weeks ago',
    postUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:8',
    companyPageUrl: 'https://www.linkedin.com/company/glueckkanja',
    contentHtml: 'New blog post: Understanding Azure AD security configurations.',
    stats: { likes: 75, comments: 5, reposts: 2 },
    media: [{ type: 'image', src: 'https://picsum.photos/id/1025/800/600' }],
  },
];

export const Default = {
  args: {
    items: mockPosts,
    columns: { sm: 1, md: 2, lg: 3, xl: 4 },
    gap: '1rem',
    observeOnScroll: true,
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
    columns: { sm: 1, md: 2, lg: 3, xl: 4 },
    gap: '1rem',
    observeOnScroll: true,
    initialItemsCount: 4,
    itemsPerLoad: 4,
    loadMoreText: 'Weitere Posts',
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
