import DefaultPresets from './default-presets.js';
import TransformationOptions from './transformation-options.js';
import Cloudinary from './cloudinary.js';
import Tools from './tools.js';

const CloudinaryTools = {
  basePath: 'https://res.cloudinary.com/c4a8/image/upload/',
  // Always a fresh object: DefaultPresets is shared by every render in the process,
  // so writing a preset into it leaks that preset into all later images.
  getPreset(presetName) {
    const presets = Cloudinary.presets ?? {};

    return { ...DefaultPresets, ...(presetName ? presets[presetName] : presets.default) };
  },
  getSetup(presetName) {
    const preset = this.getPreset(presetName);
    const transformationsString = this.getTransformationString(preset);

    return { preset, transformationsString };
  },
  getTransformationString(preset) {
    const transformations = [];

    for (const [key, value] of Object.entries(TransformationOptions)) {
      if (preset[key]) {
        transformations.push(`${value}_${preset[key]}`);
      }
    }

    const transformationsIsNotEmpty = transformations.length > 0;

    return transformationsIsNotEmpty ? transformations.join(',') : '';
  },
  getCloudinaryBasePathLink(img, srcSet) {
    return srcSet && srcSet.src ? `${srcSet.src}` : `${this.basePath}${srcSet ? srcSet.params : ''}${img}`;
  },
  getCloudinaryLinkWithTransformation(img, presetName) {
    const { preset, transformationsString } = this.getSetup(presetName);
    const hasWidth = /w_\d+/.test(img);
    const base = this.basePath + transformationsString;
    const end = img.startsWith('/') ? img : `/${img}`;

    return hasWidth ? `${base}${end}` : `${base},w_${preset.fallback_max_width}${end}`;
  },
  getCloudinaryLink({ img, presetName, animated }) {
    return this.isGif(img) || this.isSvg(img) || animated
      ? this.getCloudinaryBasePathLink(img)
      : this.getCloudinaryLinkWithTransformation(img, presetName);
  },
  isGif(img) {
    if (!img) return;

    const extension = img.split('.')[1];

    return extension?.toLowerCase() === 'gif';
  },
  isSvg(img) {
    const extension = Tools.getExtension(this.getCloudinaryBasePathLink(img));

    return extension?.toLowerCase() === 'svg' || img?.indexOf('.svg') !== -1;
  },
};

export default CloudinaryTools;
