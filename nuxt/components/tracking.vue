<script>
import { useHead } from '#imports';
import useEnvironment from '../composables/useEnvironment';
import useConfig from '../composables/useConfig';

export default {
  tagName: 'tracking',
  setup() {
    if (useEnvironment() !== 'development') {
      const config = useConfig();
      const googleTagManagerId = config?.public?.googleTagManagerId || 'NO_ID_PROVIDED';
      const googleTagManagerDomain = config?.public?.googleTagManagerDomain || 'NO_DOMAIN_PROVIDED';

      const gtagConfig = {
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        ad_storage: 'denied',
        personalization_storage: 'denied',
        functionality_storage: 'denied',
        security_storage: 'denied',
        analytics_storage: 'granted',
        wait_for_update: 500,
        ...(config?.public?.gtag || {}),
      };

      useHead({
        script: [
          {
            type: 'text/javascript',
            defer: true,
            innerHTML: `
          function loadGTM() {
            const originalDocumentCookie = document.cookie;
            function interceptCookieWrite(cookieValue) {
              const [pair, ...attributes] = String(cookieValue).split(';');
              const separator = pair.indexOf('=');
              const cookieName = (separator < 0 ? pair : pair.slice(0, separator)).trim();
              const cookieContent = separator < 0 ? '' : pair.slice(separator + 1).trim();
              if (!cookieName) return;

              // A write with Max-Age <= 0 or a past Expires date is a deletion: a real cookie jar
              // drops the cookie, so the sessionStorage mirror must not keep the stale value either.
              // Max-Age takes precedence over Expires (RFC 6265).
              let maxAge = null;
              let expires = null;
              for (const attribute of attributes) {
                const attributeSeparator = attribute.indexOf('=');
                const attributeName = (attributeSeparator < 0 ? attribute : attribute.slice(0, attributeSeparator)).trim().toLowerCase();
                const attributeValue = attributeSeparator < 0 ? '' : attribute.slice(attributeSeparator + 1).trim();
                if (attributeName === 'max-age') maxAge = Number(attributeValue);
                if (attributeName === 'expires') expires = Date.parse(attributeValue);
              }
              const isDeletion = maxAge !== null && !Number.isNaN(maxAge)
                ? maxAge <= 0
                : expires !== null && !Number.isNaN(expires) && expires <= Date.now();

              if (isDeletion) {
                sessionStorage.removeItem(cookieName);
                return;
              }
              sessionStorage.setItem(cookieName, cookieContent);
            }

            function interceptCookieRead() {
              const cookieNames = Object.keys(sessionStorage);
              const interceptedCookies = {};
              for (const cookieName of cookieNames) {
                const storedCookieValue = sessionStorage.getItem(cookieName);
                if (storedCookieValue !== null) {
                  interceptedCookies[cookieName] = storedCookieValue;
                }
              }
              const interceptedCookieString = Object.entries(interceptedCookies)
                .map(([name, value]) => name + '=' + value)
                .join('; ');

              if (Object.keys(interceptedCookies).length > 0) {
                return interceptedCookieString;
              }

              return '';
            }

            Object.defineProperty(document, 'cookie', {
              set: function (cookieValue) { interceptCookieWrite(cookieValue); },
              get: function () { return interceptCookieRead(); },
              configurable: true,
            });

            // The Google tag served through googleTagManagerDomain reports the gateway's health by
            // loading gtm.js?gtg_health=1 straight from www.googletagmanager.com, the one request the
            // first-party host is meant to avoid. Dropping the URL in the src setter means the request
            // is never made (no CSP violation, no console error). The synthetic error event leaves the
            // tag in the same "check failed" state as a blocked request, visible only as gtb=3 on the
            // GA4 hits; the tag itself keeps working.
            function interceptScriptSrc(scriptSrc) {
              Object.defineProperty(HTMLScriptElement.prototype, 'src', {
                configurable: true,
                enumerable: scriptSrc.enumerable,
                get: scriptSrc.get,
                set: function (value) {
                  if (String(value).indexOf('gtg_health=1') === -1) {
                    scriptSrc.set.call(this, value);
                    return;
                  }
                  const script = this;
                  setTimeout(function () { script.dispatchEvent(new Event('error')); }, 0);
                },
              });
            }

            const scriptSrc = Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype, 'src');
            if (scriptSrc && scriptSrc.set) {
              interceptScriptSrc(scriptSrc);
            }

            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            window.gtag = gtag;

            gtag("consent", "default", ${JSON.stringify(gtagConfig)});
            gtag("set", "ads_data_redaction", true);

            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://${googleTagManagerDomain}/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${googleTagManagerId}');
          }

          if ('requestIdleCallback' in window) {
            window.requestIdleCallback(loadGTM);
          } else {
            window.addEventListener('load', loadGTM);
          }
        `,
          },
        ],
      });
    }

    // The component only registers the head script and renders nothing. It must
    // still render the same "nothing" on the server and on the client: an empty
    // <template> compiles to "write nothing" for the server but to "return null"
    // for the client, and the client turns null into a placeholder comment. The
    // server HTML then lacks the comment the client expects in front of #app
    // (global-app.vue renders <tracking /> as its first root node), Vue reports a
    // hydration mismatch and re-renders the whole page on the client. A render
    // function that returns null produces the placeholder comment on both sides.
    return () => null;
  },
};
</script>
