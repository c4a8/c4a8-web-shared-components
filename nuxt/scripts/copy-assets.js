import path from 'path';
import { fileURLToPath } from 'url';
import { copyDirectories } from './copy-directories.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directories = [
  {
    source: path.join(__dirname, '../src/assets/lottie'),
    destination: path.join(__dirname, '../dist/assets/lottie'),
    extensions: ['.json'],
    recursive: true,
  },
];

copyDirectories(directories);

