import SliderComponent from '../components/slider.vue';
import TeamCardsItem from '../components/team-cards-item.vue';

const sliderRender = (content, items) => (args) => ({
  components: { SliderComponent, TeamCardsItem },
  setup() {
    return { args, items };
  },
  template: `
    <SliderComponent v-bind="args">
      ${content}
    </SliderComponent>
  `,
});

export default {
  component: SliderComponent,
  argTypes: {},
  title: 'Components/Slider',
};

export const Slider = {
  args: {},
  render: sliderRender(
    `
    <div class="slider-item" style="padding: 20px; background: #f0f0f0; margin: 10px; border-radius: 8px;" v-for="item in items" :key="item.text">
      {{ item.text }}
    </div>
  `,
    [{ text: 1 }, { text: 2 }, { text: 3 }]
  ),
};

export const TeamCardsSlider = {
  args: {
    hideBackground: true,
    // options: {
    //   rows: 0,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   dots: false,
    //   centerMode: false,
    //   fade: true,
    //   dotsClass: 'slick-pagination is-default',
    //   // arrows: false,
    //   responsive: [
    //     {
    //       breakpoint: 992,
    //       settings: {
    //         centerMode: true,
    //         infinite: false,
    //         centerPadding: '30px',
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         dots: false,
    //         fade: false,
    //       },
    //     },
    //     {
    //       breakpoint: 576,
    //       settings: {
    //         centerMode: true,
    //         infinite: false,
    //         centerPadding: '20px',
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         dots: false,
    //         fade: false,
    //       },
    //     },
    //   ],
    // },
  },
  render: sliderRender(
    `
    <team-cards-item
      v-for="(member, index) in items"
      :key="index"
      :img="member.img"
      :alt="member.alt"
      :name="member.name"
      :job="member.job"
      :description="member.description"
      :skills="member.skills"
      :twitter="member.twitter"
      :linkedin="member.linkedin"
    />
  `,
    [
      {
        img: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/people/people-patrick-treptau.png',
        alt: 'John Doe',
        name: 'John Doe',
        job: 'Frontend Developer',
        description:
          'Passionate about creating beautiful and functional user interfaces. Specializes in Vue.js and modern web technologies.',
        skills: 'Vue.js, JavaScript, CSS, HTML',
        twitter: 'https://twitter.com/johndoe',
        linkedin: 'https://linkedin.com/in/johndoe',
      },
      {
        img: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/people/people-matti-puolitaival.png',
        alt: 'Jane Smith',
        name: 'Jane Smith',
        job: 'Backend Developer',
        description:
          'Experienced in building scalable server-side applications and APIs. Loves working with Node.js and databases.',
        skills: 'Node.js, Python, PostgreSQL, Docker',
        twitter: 'https://twitter.com/janesmith',
        linkedin: 'https://linkedin.com/in/janesmith',
      },
      {
        img: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/people/people-patrick-treptau.png',
        alt: 'Mike Johnson',
        name: 'Mike Johnson',
        job: 'UI/UX Designer',
        description:
          'Creative designer focused on user experience and visual design. Brings ideas to life through thoughtful design.',
        skills: 'Figma, Adobe Creative Suite, User Research',
        twitter: 'https://twitter.com/mikejohnson',
        linkedin: 'https://linkedin.com/in/mikejohnson',
      },
      {
        img: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/people/people-matti-puolitaival.png',
        alt: 'Sarah Wilson',
        name: 'Sarah Wilson',
        job: 'DevOps Engineer',
        description:
          'Expert in cloud infrastructure and deployment automation. Ensures smooth and reliable application delivery.',
        skills: 'AWS, Kubernetes, CI/CD, Terraform',
        twitter: 'https://twitter.com/sarahwilson',
        linkedin: 'https://linkedin.com/in/sarahwilson',
      },
      {
        img: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/people/people-patrick-treptau.png',
        alt: 'John Doe 2',
        name: 'John Doe 2',
        job: 'Frontend Developer 2',
        description:
          'Passionate about creating beautiful and functional user interfaces. Specializes in Vue.js and modern web technologies.',
        skills: 'Vue.js, JavaScript, CSS, HTML',
        twitter: 'https://twitter.com/johndoe',
        linkedin: 'https://linkedin.com/in/johndoe',
      },
    ]
  ),
};
