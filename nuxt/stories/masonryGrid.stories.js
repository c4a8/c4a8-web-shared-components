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
    postedAt: '2025-12-12',
    postUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:1',
    contentHtml: 'Launching our new whitepaper on Zero Trust adoption.',
    stats: { likes: 45, comments: 3, reposts: 1 },
    media: [{ type: 'image', src: 'https://picsum.photos/id/1024/800/600' }],
  },
  {
    author: { name: 'glueckkanja', handle: '@glueckkanja', avatarUrl: 'https://i.pravatar.cc/80?img=13' },
    postedAt: '2025-12-10',
    postUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:2',
    contentHtml: 'Proud of our team winning the Partner of the Year award! 🏆',
    stats: { likes: 210, comments: 22, reposts: 7 },
    media: [{ type: 'image', src: 'https://picsum.photos/id/1005/800/900' }],
  },
  {
    author: { name: 'glueckkanja', handle: '@glueckkanja', avatarUrl: 'https://i.pravatar.cc/80?img=14' },
    postedAt: '2025-12-08',
    postUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:3',
    contentHtml: 'Quick tip: Secure score improvements you can do today.',
    stats: { likes: 80, comments: 6, reposts: 2 },
  },
  {
    author: { name: 'glueckkanja', handle: '@glueckkanja', avatarUrl: 'https://i.pravatar.cc/80?img=15' },
    postedAt: '2025-12-06',
    postUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:4',
    contentHtml: 'Event recap: Key takeaways from our latest webinar.',
    stats: { likes: 60, comments: 4, reposts: 1 },
    media: [{ type: 'image', src: 'https://picsum.photos/id/1035/800/500' }],
  },
  {
    author: { name: 'glueckkanja', handle: '@glueckkanja', avatarUrl: 'https://i.pravatar.cc/80?img=16' },
    postedAt: '2025-12-05',
    postUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:5',
    contentHtml: 'We are hiring! Join our growing engineering team.',
    stats: { likes: 120, comments: 10, reposts: 5 },
  },
  {
    author: { name: 'glueckkanja', handle: '@glueckkanja', avatarUrl: 'https://i.pravatar.cc/80?img=17' },
    postedAt: '2025-12-02',
    postUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:6',
    contentHtml: 'AVD automation – a behind-the-scenes look.',
    stats: { likes: 90, comments: 8, reposts: 3 },
    media: [{ type: 'image', src: 'https://picsum.photos/id/1015/800/700' }],
  },
];

export const Default = {
  args: {
    items: mockPosts,
    columns: { sm: 1, md: 2, lg: 3 },
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


