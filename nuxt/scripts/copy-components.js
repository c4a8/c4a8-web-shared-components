import path from 'path';
import { fileURLToPath } from 'url';
import { copyDirectories } from './copy-directories.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directories = [
  {
    source: path.join(__dirname, '../components'),
    destination: path.join(__dirname, '../src/runtime/components'),
    extensions: ['.vue'],
    recursive: true,
  },
  {
    source: path.join(__dirname, '../server'),
    destination: path.join(__dirname, '../src/runtime/server'),
    extensions: ['.ts', '.js'],
    recursive: true,
  },
  {
    source: path.join(__dirname, '../composables'),
    destination: path.join(__dirname, '../src/runtime/composables'),
    extensions: ['.js'],
    recursive: true,
  },
  {
    source: path.join(__dirname, '../pages'),
    destination: path.join(__dirname, '../src/runtime/pages'),
    extensions: ['.vue'],
    recursive: true,
  },
  {
    source: path.join(__dirname, '../utils'),
    destination: path.join(__dirname, '../src/runtime/utils'),
    extensions: ['.js'],
    recursive: true,
  },
  {
    source: path.join(__dirname, '../locales'),
    destination: path.join(__dirname, '../src/runtime/locales'),
    extensions: ['.js'],
    recursive: true,
  },
  {
    source: path.join(__dirname, '../stores'),
    destination: path.join(__dirname, '../src/runtime/stores'),
    extensions: ['.js'],
    recursive: true,
  },
];

copyDirectories(directories);
