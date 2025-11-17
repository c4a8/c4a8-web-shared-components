import BackToTop from '../components/back-to-top.vue';

export default {
  component: BackToTop,
  argTypes: {},
  title: 'Components/Back To Top',
  decorators: [
    (story) => ({
      components: { story },
      template: `
        <main>
          <div style="height: 100vh;" class="dummy-content"></div>
          <story />
          <div style="height: 500vh;" class="dummy-content"></div>
        </main>
        <footer style="height: 80vh" class="dummy-content">Footer</footer>
      `,
    }),
  ],
};

export const Default = { args: {} };
