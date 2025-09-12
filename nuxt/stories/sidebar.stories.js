import SidebarComponent from '../components/sidebar.vue';

export default {
  title: 'Components/Sidebar',
  component: SidebarComponent,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (story, context) => ({
      components: { story },
      setup() {
        return { args: context.args };
      },
      template: `
        <story />
        <div style="height: 200vh;" class="dummy-content is--dark"></div>
      `,
    }),
  ],
};

export const Default = {
  args: {
    headlineText: 'Visit us at<br />it-sa 2025<br/> in Nürnberg!',
    color: 'var(--color-orange)',
    date: 'October 7-9',
    location: 'Exhibition Center | Hall 6, Booth 232',
    hint: 'Follow the Footsteps!',
    sections: [
      {
        color: 'var(--color-celery)',
        overline: 'Managed',
        title: 'Intune',
        width: 97,
        text: `Ein Arbeitsplatz, der sich selbst managt. Windows, macOS, iOS und Android – konsistent, sicher, automatisiert.<br>Wir setzen auf Infrastructure as Code mit Blueprints und TerraProvider, automatisieren Application Lifecycle mit Runbooks und RealmJoin und überwachen alles kontinuierlich mit Alerts und Analytics. So entstehen Arbeitsumgebungen, die sich anpassen, bevor sie Probleme machen. 100% Made and Operated in Germany.`,
        cta: {
          text: 'Lorem Ipsum dolor sit',
          href: 'javascript:void(0)',
          link: true,
        },
      },
      {
        color: 'var(--color-ripe-lemon)',
        overline: 'Managed',
        title: 'Entra',
        width: 39,
        text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`,
      },
      {
        color: 'var(--color-red)',
        overline: 'Managed',
        title: 'Red Tenant',
        width: 74,
        text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`,
        textColor: 'var(--color-white)',
        cta: {
          text: 'Lorem Ipsum dolor sit',
          href: 'javascript:void(0)',
          link: true,
        },
      },
      {
        color: 'var(--color-gigas)',
        overline: 'Managed',
        title: 'Soc',
        width: 37,
        text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`,
        textColor: 'var(--color-white)',
        cta: {
          text: 'Lorem Ipsum dolor sit',
          href: 'javascript:void(0)',
          link: true,
        },
      },
      {
        color: 'var(--color-denim)',
        overline: 'Managed',
        title: 'Azure',
        width: 69,
        text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`,
        textColor: 'var(--color-white)',
        cta: {
          text: 'Lorem Ipsum dolor sit',
          href: 'javascript:void(0)',
          link: true,
        },
      },
    ],
  },
};
