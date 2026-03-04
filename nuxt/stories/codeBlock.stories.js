import CodeBlockComponent from '../components/code-block.vue';

export default {
  component: CodeBlockComponent,
  title: 'Components/Code Block',
};

export const Default = {
  render: () => ({
    components: { CodeBlockComponent },
    template: `
      <CodeBlockComponent>
        javascript:void(0); console.log('Hello World');
      </CodeBlockComponent>
    `,
  }),
};

export const MultiLine = {
  render: () => ({
    components: { CodeBlockComponent },
    template: `
      <CodeBlockComponent>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </CodeBlockComponent>
    `,
  }),
};
