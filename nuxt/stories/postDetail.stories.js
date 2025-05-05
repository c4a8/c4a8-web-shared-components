import PostDetailComponent from '../components/post-detail.vue';

export default {
  component: PostDetailComponent,
  argTypes: {},
  title: 'Components/Post Detail',
};

export const PostDetail = {
  args: {
    post: {
      _path: '/events/2021-06-17-audiocodes-review',
      url: 'javascript:void(0);',
      layout: 'post',
      title: 'Audiocodes & Devices Review',
      date: '2021-06-17',
      moment: '2021-06-17',
      author: ['Carolin Kanja', 'Jan Petersen'],
      categories: ['Microsoft', 'Teams', 'Calling', 'Audiocodes'],
      tags: ['Microsoft', 'Teams', 'Calling', 'Audiocodes'],
      blogtitlepic: 'head-audiocodes-review',
      socialimg: 'https://res.cloudinary.com/c4a8/image/upload/v1625931868/blog/heads/head-audiocodes-review.jpg',
      excerpt:
        'Audiocodes &quot; hat mir mehrere Geräte &quot; für einen Test zur Verfügung gestellt. Ich habe sie alle eingerichtet und getestet. Hier ist eine kurze Zusammenfassung meiner Ergebnisse.',
    },
  },
};

export const NoAuthor = {
  args: {
    post: {
      _path: '/events/2021-06-17-audiocodes-review',
      url: 'javascript:void(0);',
      layout: 'post',
      title: 'Audiocodes & Devices Review',
      date: '2021-06-17',
      moment: '2021-06-17',
      categories: ['Microsoft', 'Teams', 'Calling', 'Audiocodes'],
      tags: ['Microsoft', 'Teams', 'Calling', 'Audiocodes'],
      blogtitlepic: 'head-audiocodes-review',
      socialimg: 'https://res.cloudinary.com/c4a8/image/upload/v1625931868/blog/heads/head-audiocodes-review.jpg',
      excerpt:
        'Audiocodes &quot; hat mir mehrere Geräte &quot; für einen Test zur Verfügung gestellt. Ich habe sie alle eingerichtet und getestet. Hier ist eine kurze Zusammenfassung meiner Ergebnisse.',
    },
  },
};
