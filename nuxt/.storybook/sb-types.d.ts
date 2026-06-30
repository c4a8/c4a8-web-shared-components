// Vite returns the compiled CSS as a string when a style file is imported with
// the `?inline` query. Declare it so the theme imports in preview.ts type-check.
declare module '*.scss?inline' {
  const css: string;
  export default css;
}
