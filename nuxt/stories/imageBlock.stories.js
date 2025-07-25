import ImageBlockComponent from '../components/image-block.vue';

export default {
  title: 'Components/Image Block',
  component: ImageBlockComponent,
};

export const ImageBlock = {
  args: {
    imageBlock: {
      image: '/infographics/6r-flowchart.svg',
      alt: 'image-placeholder',
    },
  },
};
