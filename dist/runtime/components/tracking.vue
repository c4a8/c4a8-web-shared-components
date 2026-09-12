<template></template>

<script setup>
import { useHead } from '#imports';
import useEnvironment from '../composables/useEnvironment';
import useConfig from '../composables/useConfig';

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
</script>
