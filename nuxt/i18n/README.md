# `i18n/locales/` is GENERATED — do not edit

The per-locale JSON files in `i18n/locales/*.json` are **build artifacts**, not
source. They are rewritten on every Nuxt start (`dev` / `build` / `generate` /
`prepare`) by a top-level writer in [`../nuxt.config.ts`](../nuxt.config.ts):

```ts
import sharedTranslations from './src/runtime/locales/global.js';
for (const [code, messages] of Object.entries(sharedTranslations)) {
  writeFileSync(`i18n/locales/${code}.json`, JSON.stringify(messages));
}
```

`nuxt-i18n-micro` (`translationDir: 'i18n/locales'`) loads these files.

## Edit here → your change is lost on the next run

The single source of truth for shared-component UI strings is:

    nuxt/src/runtime/locales/global.js

This is the module's runtime source — the same file `npm run build` ships to
`dist/runtime/locales/global.js`, which the product sites consume. The dev app
and storybook read it directly, so they preview exactly what ships.

- Edit strings there, then restart Nuxt/storybook (this `i18n/locales/*.json` is
  regenerated from it automatically).
- Run **`npm run build`** to propagate the change into `dist/` before publishing;
  `dist/runtime/locales/global.js` is a build output — never hand-edit it.

Because these files are derived, they can safely be git-ignored.
