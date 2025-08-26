<template>
  <div style="width: 100%; height: 100%; overflow: scroll" id="my-cal-inline-it-sa-termin"></div>
</template>

<script>
export default {
  tagName: 'cal-calendar',
  mounted() {
    this.initCal();
  },
  methods: {
    initCal() {
      if (typeof window !== 'undefined' && !window.Cal) {
        (function (C, A, L) {
          let p = function (a, ar) {
            a.q.push(ar);
          };
          let d = C.document;
          C.Cal =
            C.Cal ||
            function () {
              let cal = C.Cal;
              let ar = arguments;
              if (!cal.loaded) {
                cal.ns = {};
                cal.q = cal.q || [];
                d.head.appendChild(d.createElement('script')).src = A;
                cal.loaded = true;
              }
              if (ar[0] === L) {
                const api = function () {
                  p(api, arguments);
                };
                const namespace = ar[1];
                api.q = api.q || [];
                if (typeof namespace === 'string') {
                  cal.ns[namespace] = cal.ns[namespace] || api;
                  p(cal.ns[namespace], ar);
                  p(cal, ['initNamespace', namespace]);
                } else p(cal, ar);
                return;
              }
              p(cal, ar);
            };
        })(window, 'https://app.cal.com/embed/embed.js', 'init');
      }

      if (typeof window !== 'undefined' && window.Cal) {
        window.Cal('init', 'it-sa-termin', { origin: 'https://app.cal.com' });

        window.Cal.ns['it-sa-termin']('inline', {
          elementOrSelector: '#my-cal-inline-it-sa-termin',
          config: { layout: 'week_view', theme: 'auto' },
          calLink: 'glueckkanja/it-sa-termin',
        });

        window.Cal.ns['it-sa-termin']('ui', {
          cssVarsPerTheme: {
            light: { 'cal-brand': '#292929' },
            dark: { 'cal-brand': '#fafafa' },
          },
          hideEventTypeDetails: false,
          layout: 'week_view',
        });
      }
    },
  },
};
</script>
