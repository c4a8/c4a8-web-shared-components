<template></template>

<script setup>
import { useHead } from '#imports';
import useEnvironment from '../composables/useEnvironment';
import useConfig from '../composables/useConfig';

if (useEnvironment() !== 'development') {
  const config = useConfig();
  const googleTagManagerId = config?.public?.googleTagManagerId || 'NO_ID_PROVIDED';
  const googleTagManagerDomain = config?.public?.googleTagManagerDomain || 'NO_DOMAIN_PROVIDED';

  const defaultGtagConfig = {
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    ad_storage: 'denied',
    personalization_storage: 'denied',
    functionality_storage: 'denied',
    security_storage: 'denied',
    analytics_storage: 'granted',
    wait_for_update: 500,
  };

  const customGtagConfig = config?.public?.gtag || {};

  const gtagConfig = {
    ...defaultGtagConfig,
    ...customGtagConfig,
  };

  useHead({
    script: [
      {
        type: 'text/javascript',
        children: `
          function loadGTM() {
            const originalDocumentCookie = document.cookie;
            function interceptCookieWrite(cookieValue) {
              const cookieData = cookieValue.split(';')[0];
              const [cookieName, cookieContent] = cookieData.split('=');
              sessionStorage.setItem(cookieName.trim(), cookieContent.trim());
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
              set: function (cookieValue) {
                interceptCookieWrite(cookieValue);
              },
              get: function () {
                return interceptCookieRead();
              },
              configurable: true,
            });

            // limit the hosted Tag Manager to only statistical non-personal data
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                dataLayer.push(arguments);
            }

            gtag("consent", "default", ${JSON.stringify(gtagConfig)});
            gtag("set", "ads_data_redaction", true);

          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://${googleTagManagerDomain}/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${googleTagManagerId}');
        }

        loadGTM();
        `,
      },
    ],
  });
} else {
  console.debug('Tag Manager not loaded in development');
}
</script>
