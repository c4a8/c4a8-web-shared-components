import fs from 'fs';
import path from 'path';

export const copyFiles = (source, destination, extensions, recursive) => {
  if (!fs.existsSync(source)) {
    return;
  }

  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  } else {
    const files = fs.readdirSync(destination);
    files.forEach((file) => {
      const destinationFile = path.join(destination, file);
      fs.rmSync(destinationFile, { recursive: true, force: true });
    });
  }

  const files = fs.readdirSync(source, { withFileTypes: true });
  files.forEach((file) => {
    const sourceFile = path.join(source, file.name);
    const destinationFile = path.join(destination, file.name);

    if (file.isDirectory() && recursive) {
      copyFiles(sourceFile, destinationFile, extensions, recursive);
    } else if (file.isFile() && extensions.some((ext) => file.name.endsWith(ext))) {
      try {
        fs.copyFileSync(sourceFile, destinationFile);
      } catch (err) {
        console.error(`Error copying file ${file.name} from ${source} to ${destination}:`, err);
      }
    }
  });
};

export const copyDirectories = (directories) => {
  directories.forEach(({ source, destination, extensions, recursive }) => {
    copyFiles(source, destination, extensions, recursive);
  });
};

