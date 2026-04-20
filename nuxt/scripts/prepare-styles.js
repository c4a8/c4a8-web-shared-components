import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, resolve, basename } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const scssInput = resolve(__dirname, '../src/assets/scss/index.scss');
const cssOutput = resolve(__dirname, '../dist/styles/index.css');
const optimizedCssOutput = resolve(__dirname, '../dist/styles/index.min.css');

// Define paths for theme files
const scssThemesDirectory = resolve(__dirname, '../src/assets/scss/themes');
const cssDirectory = resolve(__dirname, '../src/assets/css/themes');

// Ensure the CSS themes directory exists
if (!fs.existsSync(cssDirectory)) {
  fs.mkdirSync(cssDirectory, { recursive: true });
}

// First compile SCSS theme files to CSS
console.log('Compiling SCSS theme files to CSS...');
const scssThemeFiles = fs.readdirSync(scssThemesDirectory).filter((file) => file.endsWith('.scss'));

scssThemeFiles.forEach((file) => {
  const scssFile = resolve(scssThemesDirectory, file);
  const cssFile = resolve(cssDirectory, file.replace(/^_/, '').replace('.scss', '.css'));

  console.log(`Compiling ${file} to CSS...`);
  execSync(`sass ${scssFile} ${cssFile} --no-source-map`, { stdio: 'inherit' });
});

// Get all CSS files (including newly generated ones)
const staticCssFiles = fs
  .readdirSync(cssDirectory)
  .filter((file) => file.endsWith('.css'))
  .map((file) => resolve(cssDirectory, file));

console.log('Compiling main SCSS to CSS...');
execSync(`sass ${scssInput} ${cssOutput} --no-source-map`, { stdio: 'inherit' });

console.log('Optimizing CSS with PostCSS...');
execSync(`postcss ${cssOutput} --no-map -o ${optimizedCssOutput}`, { stdio: 'inherit' });

staticCssFiles.forEach((file) => {
  const fileName = basename(file).replace('.css', '.min.css');
  const optimizedFile = resolve(__dirname, `../dist/styles/${fileName}`);

  console.log(`Optimizing ${fileName} with PostCSS...`);
  execSync(`postcss ${file} --no-map -o ${optimizedFile}`, { stdio: 'inherit' });
});

console.log('Copying SCSS tool files for SFC support...');

const scssSourceDir = resolve(__dirname, '../src/assets/scss');
const scssDistDir = resolve(__dirname, '../dist/styles');

// These are all files inside sfc-tools.scss
const sfcToolFiles = [
  '_colors.scss',
  '_user-variables-type.scss',
  '_user-variables.scss',
  '_animations.scss',
  '_mixins.scss',
  '_z-index.scss',
];

sfcToolFiles.forEach((file) => {
  const src = resolve(scssSourceDir, file);
  const dest = resolve(scssDistDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`  Copied ${file}`);
  } else {
    console.warn(`  Warning: ${file} not found at ${src}`);
  }
});

// Create the sfc-tools entry point
const sfcToolsContent = sfcToolFiles.map((file) => `@import "${file.replace('.scss', '')}";`).join('\n');

fs.writeFileSync(resolve(scssDistDir, 'sfc-tools.scss'), sfcToolsContent + '\n');
console.log('  Created sfc-tools.scss');

console.log('CSS build completed successfully.');
