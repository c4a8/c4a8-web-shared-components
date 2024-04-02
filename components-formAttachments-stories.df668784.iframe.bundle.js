"use strict";(self.webpackChunkshared_components=self.webpackChunkshared_components||[]).push([[6548],{"./stories/components/formAttachments.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NotRequired:()=>NotRequired,RequiredMaxTwoFiles:()=>RequiredMaxTwoFiles,RequiredWithError:()=>RequiredWithError,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_templates__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./.storybook/templates.js"),_storybook_generatedIncludes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/generatedIncludes.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__=_objectSpread(_objectSpread({},(0,_storybook_templates__WEBPACK_IMPORTED_MODULE_0__.lA)({component:_storybook_generatedIncludes__WEBPACK_IMPORTED_MODULE_1__.vH,argTypes:{description:{description:"Description of the Form Attachment",type:"string"},text:{description:"Smaller underlined Subtext below the Description",type:"string"},extensions:{description:"Acceptable file types",control:{type:"array"},type:{summary:"Filetypes",detail:"pdf, txt, doc, ..."}},maxSize:{description:"Allowed max Filesize",type:"number"},id:{description:"Input Id for the Form Attachment",type:"string"},required:{description:"Toggle for required Form Attachment",type:"boolean"},requiredMsg:{description:"Message for the required Form Attachment",type:"string"},hasError:{description:"Toggle for Error in Form Attachment",type:"boolean"}}})),{},{title:"Components/Form Attachments"});var baseArgs={description:"Anhänge wie Lebenslauf und Anschreiben hinzufügen",text:"Oder Dateien auswählen",extensions:["pdf","txt","doc"],maxSize:2e7,id:"file"},NotRequired={args:_objectSpread({},baseArgs)},RequiredWithError={args:_objectSpread(_objectSpread({},baseArgs),{},{required:!0,requiredMsg:"Bitte einen Anhang hinzufügen",hasError:!0})},RequiredMaxTwoFiles={args:_objectSpread(_objectSpread({},baseArgs),{},{required:!0,requiredMsg:"Bitte einen Anhang hinzufügen",maxFiles:2})};const __namedExportsOrder=["NotRequired","RequiredWithError","RequiredMaxTwoFiles"]}}]);