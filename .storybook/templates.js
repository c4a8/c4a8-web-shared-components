import { Liquid } from 'liquidjs';
// to force hot reload on includes add them here
import { AllIncludes } from './generatedIncludes';
import { hrefTo } from './tools';
import ImgSrcSets from './data/imgSrcSets';
import Cloudinary from './config/cloudinary';
import CloudinaryTag from '../assets/js/liquid/tags/cloudinaryTag';
import StreamlinelightTag from '../assets/js/liquid/tags/streamlinelightTag';

const site = {
  cloudinary: Cloudinary,
  data: {
    imgSrcSets: ImgSrcSets,
  },
};

const fixComponent = function (text) {
  let fixedText = text;

  const includesRegex = new RegExp(/{%(\s)*include([\S\s]*?)%}/, 'g');
  const matchAllIncludes = fixedText.match(includesRegex);

  if (matchAllIncludes) {
    for (let i = 0; i < matchAllIncludes.length; i++) {
      const includeText = matchAllIncludes[i];

      fixedText = fixedText.replace(includeText, fixInclude(includeText));
    }
  }

  return fixedText;
};

const fixInclude = function (includeText) {
  let include = includeText.replace(/\n/g, ',').replace(/=/g, ':');

  const lastIndex = include.lastIndexOf(',');

  include = include.substr(0, lastIndex) + include.substr(lastIndex + 1);
  include = include.replace('{%,', '{%');

  return include;
};

const registerTags = function (engine) {
  const cloudinaryTag = new CloudinaryTag({ engine, site });
  const streamlinelightTag = new StreamlinelightTag({ engine: cloudinaryTag.engine, site });

  return streamlinelightTag.engine;
};

export const createComponent = function async(include, component) {
  const globals = { site };
  const partialsPath = 'includes';
  const includesPath = `${partialsPath}/`;

  let engine = new Liquid({
    partials: [partialsPath],
    dynamicPartials: false,
    globals,
    fs: {
      readFileSync(file) {
        const request = new XMLHttpRequest();
        if (
          (request.open('GET', `${includesPath}${file}`, !1),
          request.send(),
          request.status < 200 || 300 <= request.status)
        ) {
          throw new Error(request.statusText);
        }

        return fixComponent(request.responseText);
      },
      existsSync() {
        return true;
      },
      exists() {
        return true;
      },
      resolve(_, file) {
        return file;
      },
      dirname() {
        return;
      },
      sep() {
        return;
      },
    },
  });

  engine = registerTags(engine);

  // add map of jekyll filter
  engine.filters.impls.jsonify = engine.filters?.impls?.json;

  const wrapper = document.createElement('div');
  const tpl = engine.parse(fixComponent(component));
  const html = engine.renderSync(tpl, include);

  wrapper.innerHTML = html;

  return wrapper;
};

const getTitle = ({ page, title }) => {
  const titleText = `${page ? 'Pages' : 'Components'}/${title}`;

  return {
    title: titleText,
    ...(page && { parameters: { root: true } }),
  };
};

export { hrefTo, getTitle, site };
