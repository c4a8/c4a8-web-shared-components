import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const presetPath = path.join(__dirname, '../node_modules/@storybook-vue/nuxt/preset.js');

try {
  // Read the current content
  const content = fs.readFileSync(presetPath, 'utf8');

  // Replace the old export with the new one
  const newContent = content.replace(
    "module.exports = require('./dist/preset.cjs')",
    "export * from './dist/preset.mjs';"
  );

  // Write the new content back to the file
  fs.writeFileSync(presetPath, newContent);

  console.log('Successfully updated preset.js');
} catch (error) {
  console.error('Error updating preset.js:', error.message);
  process.exit(1);
}
