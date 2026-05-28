import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentsDir = path.resolve(__dirname, '../src/runtime/components');

const processDirectory = (dir) => {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);

    if (fs.lstatSync(filePath).isDirectory()) {
      processDirectory(filePath);
      return;
    }

    if (!file.endsWith('.vue')) return;

    let content = fs.readFileSync(filePath, 'utf-8');

    if (content.includes('sfc-tools')) return;

    const relPath = path
      .relative(path.dirname(filePath), path.resolve(__dirname, '../src/assets/scss/sfc-tools'))
      .replace(/\\/g, '/');

    content = content.replace(/(<style\s+[^>]*lang=["']scss["'][^>]*>)/g, `$1\n@import "${relPath}";`);

    fs.writeFileSync(filePath, content);
  });
};

processDirectory(componentsDir);
console.log('✔ Injected sfc-tools import into Vue SFC style blocks');
