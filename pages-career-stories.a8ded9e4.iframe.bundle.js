"use strict";(self.webpackChunkshared_components=self.webpackChunkshared_components||[]).push([[5764,7151,8828,3249,8384],{"./stories/components/fabButton.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Contact:()=>Contact,Emergency:()=>Emergency,__namedExportsOrder:()=>__namedExportsOrder,default:()=>fabButton_stories});function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const fabButton_stories=_objectSpread(_objectSpread({},(0,__webpack_require__("./.storybook/templates.js").lA)({component:'<div style="height: 100vh;" class="dummy-content"></div>\n\n{%\n  include fab-button.html\n%}\n\n<div style="height: 500vh" class="dummy-content"></div>\n',argTypes:{icon:{description:"Fab Button Icon",type:"object"},modal:{description:"The Modal that gets called after fab Button is pressed",type:"object"},noSticky:{description:"Disables Sticky for the fab Button",type:"boolean"},bgColor:{description:"Sets the Background Color of the fab Button",type:"string"},iconColor:{description:"Sets the color of the Icon",type:"string"},trigger:{description:"Trigger for the Modal",type:"string"}}})),{},{title:"Components/Fab Button"});var Contact={args:{modal:{contact:{infos:{person:{image:"people/people-sophie-luna.png",cloudinary:!0,alt:"Kontakt mit Sophie",name:"Hast du Fragen? Sprich uns gerne an!",details:[{text:"kontakt@glueckkanja.com",href:"mailto:kontakt@glueckkanja.com",icon:"site/mail"},{text:"+49 69 4005520",href:"tel:+49 69 4005520",notes:"( Mo-Do 09-17 Uhr )",icon:"site/phone"}]},form:{ctaText:"Absenden",cta:{skin:"primary is-light"},method:"post",action:"/mock/fabButton.json",fields:[{label:"Vorname",type:"text",id:"prename",required:!0,requiredMsg:"Bitte geben Sie Ihren Vornamen an."},{label:"Nachname",type:"text",id:"surname",required:!0,requiredMsg:"Bitte geben Sie Ihren Nachnamen an."},{label:"Email-Adresse",type:"email",id:"email",required:!0,requiredMsg:"Bitte geben Sie Ihre E-Mail-Adresse ein."},{label:"Nachricht",type:"textarea",id:"message",required:!1,requiredMsg:"Bitte ausfüllen"},{label:"Ich bin mit der Speicherung meiner Daten einverstanden, die Datenschutzerklärung habe ich gelesen und akzeptiert. Meine Einwilligung kann ich jederzeit widerrufen.",type:"checkbox",id:"checkbox1",required:!0},{type:"hidden",id:"_to",value:"loremipsum@glueckkanja.com"},{type:"hidden",id:"_gotcha"}]}}}}}},Emergency={args:{bgColor:"var(--color-orange)",iconColor:"var(--color-white)",icon:"emergency",modal:{contact:{infos:{person:{image:"people/people-sophie-luna.png",cloudinary:!0,alt:"Kontakt mit Sophie",name:"Hast du Fragen? Sprich uns gerne an!",details:[{text:"kontakt@glueckkanja.com",href:"mailto:kontakt@glueckkanja.com",icon:"site/mail"},{text:"+49 69 4005520",href:"tel:+49 69 4005520",notes:"( Mo-Do 09-17 Uhr )",icon:"site/phone"}]},form:{ctaText:"Absenden",cta:{skin:"primary is-light"},method:"post",action:"/mock/fabButton.json",fields:[{label:"Vorname",type:"text",id:"prename",required:!0,requiredMsg:"Bitte geben Sie Ihren Vornamen an."},{label:"Nachname",type:"text",id:"surname",required:!0,requiredMsg:"Bitte geben Sie Ihren Nachnamen an."},{label:"Email-Adresse",type:"email",id:"email",required:!0,requiredMsg:"Bitte geben Sie Ihre E-Mail-Adresse ein."},{label:"Nachricht",type:"textarea",id:"message",required:!1,requiredMsg:"Bitte ausfüllen"},{label:"Ich bin mit der Speicherung meiner Daten einverstanden, die Datenschutzerklärung habe ich gelesen und akzeptiert. Meine Einwilligung kann ich jederzeit widerrufen.",type:"checkbox",id:"checkbox1",required:!0},{type:"hidden",id:"_to",value:"loremipsum@glueckkanja.com"},{type:"hidden",id:"_gotcha"}]}}}}}};const __namedExportsOrder=["Contact","Emergency"]},"./stories/components/faq.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MultipleEntries:()=>MultipleEntries,OneEntry:()=>OneEntry,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_templates__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./.storybook/templates.js"),_storybook_generatedIncludes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/generatedIncludes.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__=_objectSpread(_objectSpread({},(0,_storybook_templates__WEBPACK_IMPORTED_MODULE_0__.lA)({component:_storybook_generatedIncludes__WEBPACK_IMPORTED_MODULE_1__.vn,argTypes:{headline:{description:"Adds a Headline to the component",type:"object"},entries:{description:"List of Summaries with corresponding text",type:"object"}}})),{},{title:"Components/Faq"});var OneEntry={args:{headline:{level:"h3",text:"FAQs 1 Entry"},entries:[{summary:"Lorem ipsum dolor sit amet, consectet",text:"<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p><p>      Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p><p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p> "}]}},MultipleEntries={args:{headline:{text:"FAQs X Entries"},entries:[{summary:"Lorem ipsum dolor sit amet, consectet Lorem ipsum dolor sit amet, consectet Lorem ipsum dolor sit amet, consectet",text:'<p>Lorem ipsum dolor sit amet <a class="is-component" data-trigger-id="bewerbung2" data-trigger="modal">Initiativbewerbung</a>, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>'},{summary:"Lorem ipsum dolor",text:"<p>Lorem ipsum dolor sit amore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>"},{summary:"sit amet, consectet",text:"<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>"},{summary:"Lorem ipsum dolor sit amet",text:"<p>Lorem ipsum dolor sit amore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>"},{summary:"Lorem ipsum dolor",text:"<p>Lorem ipsum dolor sit amore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>"}]}};const __namedExportsOrder=["OneEntry","MultipleEntries"]},"./stories/components/jobList.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{List:()=>List,ListFilteredById:()=>ListFilteredById,ListFilteredByLang:()=>ListFilteredByLang,ListFilteredByTags:()=>ListFilteredByTags,ListFilteredByTeam:()=>ListFilteredByTeam,ListLimit:()=>ListLimit,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_templates__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./.storybook/templates.js"),_storybook_generatedIncludes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/generatedIncludes.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Job/List"};var Template=function Template(args){return(0,_storybook_templates__WEBPACK_IMPORTED_MODULE_0__.a0)(args,_storybook_generatedIncludes__WEBPACK_IMPORTED_MODULE_1__.av)},baseArgs={clientName:"c4a8",headlineText:"Offene Stellen",headlineLevel:"h2",sublineText:"Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in",detailUrl:{default:(0,_storybook_templates__WEBPACK_IMPORTED_MODULE_0__.Z)("Components/Job/Detail","De"),en:(0,_storybook_templates__WEBPACK_IMPORTED_MODULE_0__.Z)("Components/Job/Detail","En")},lang:"de"},List=Template.bind({});List.args=_objectSpread({},baseArgs);var ListLimit=Template.bind({});ListLimit.args=_objectSpread(_objectSpread({},baseArgs),{},{maxItems:4,expandText:"Weitere Stellenanzeigen",sublineText:null});var ListFilteredById=Template.bind({});ListFilteredById.args=_objectSpread(_objectSpread({},baseArgs),{},{headlineText:"Einzelne Stellenausschreibung mit Id",jobId:"1327578",apiUrl:"mock/jobList.xml"});var ListFilteredByTags=Template.bind({});ListFilteredByTags.args=_objectSpread(_objectSpread({},baseArgs),{},{headlineText:"Offene Microsoft Azure + Trainee Stellen",tags:"MicroSoft Azure,trainee",apiUrl:"mock/jobList.xml"});var ListFilteredByTeam=Template.bind({});ListFilteredByTeam.args=_objectSpread(_objectSpread({},baseArgs),{},{headlineText:"Offene Stellen in Team 1",team:"Projects & Account Management",apiUrl:"mock/jobList.xml"});var ListFilteredByLang=Template.bind({});ListFilteredByLang.args=_objectSpread(_objectSpread({},baseArgs),{},{headlineText:"English Jobs",lang:"en"}),List.parameters={...List.parameters,docs:{...List.parameters?.docs,source:{originalSource:"args => createComponent(args, component)",...List.parameters?.docs?.source}}},ListLimit.parameters={...ListLimit.parameters,docs:{...ListLimit.parameters?.docs,source:{originalSource:"args => createComponent(args, component)",...ListLimit.parameters?.docs?.source}}},ListFilteredById.parameters={...ListFilteredById.parameters,docs:{...ListFilteredById.parameters?.docs,source:{originalSource:"args => createComponent(args, component)",...ListFilteredById.parameters?.docs?.source}}},ListFilteredByTags.parameters={...ListFilteredByTags.parameters,docs:{...ListFilteredByTags.parameters?.docs,source:{originalSource:"args => createComponent(args, component)",...ListFilteredByTags.parameters?.docs?.source}}},ListFilteredByTeam.parameters={...ListFilteredByTeam.parameters,docs:{...ListFilteredByTeam.parameters?.docs,source:{originalSource:"args => createComponent(args, component)",...ListFilteredByTeam.parameters?.docs?.source}}},ListFilteredByLang.parameters={...ListFilteredByLang.parameters,docs:{...ListFilteredByLang.parameters?.docs,source:{originalSource:"args => createComponent(args, component)",...ListFilteredByLang.parameters?.docs?.source}}};const __namedExportsOrder=["List","ListLimit","ListFilteredById","ListFilteredByTags","ListFilteredByTeam","ListFilteredByLang"]},"./stories/components/textImage.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{JobApplication:()=>JobApplication,LeftFloating:()=>LeftFloating,LeftFloatingBg:()=>LeftFloatingBg,Right:()=>Right,WithAnimation:()=>WithAnimation,WithBadge:()=>WithBadge,WithoutAnimation:()=>WithoutAnimation,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_templates__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./.storybook/templates.js"),_storybook_generatedIncludes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/generatedIncludes.js"),_data_lottie1_json__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/data/lottie1.json"),process=__webpack_require__("./node_modules/process/browser.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Text Image"};var Template=function Template(args){return(0,_storybook_templates__WEBPACK_IMPORTED_MODULE_0__.a0)(args,_storybook_generatedIncludes__WEBPACK_IMPORTED_MODULE_1__.ds)},Right=Template.bind({});Right.args={image:(0,_storybook_templates__WEBPACK_IMPORTED_MODULE_0__.OX)("svg/icons/icon-products.svg"),alt:"Consulting Services",headline:"Consulting Services",offset:!0,list:[{ctaText:"Modern Workplace",ctaHref:"/de/modern-workplace/consulting-services",link:!0},{ctaText:"Azure",ctaHref:"/de/azure/azure-consulting",link:!0},{ctaText:"Security",ctaHref:"/de/security/security-consulting",link:!0}],copy:"Unsere Consulting Services konzentrieren sich auf die wichtigsten Themen für unsere Kunden: <strong>Modern Workplace, Azure Datacenter, Transformation Services und DevOps</strong>. Sie arbeiten Hand in Hand mit unseren Experten, die Ihnen die Best Practices und Richtlinien für eine erfolgreiche Implementierung aufzeigen. Mit unserer tiefen technischen Expertise sorgen wir dafür, dass Ihre Cloud-Umgebung effizient, sicher und leistungsstark ist."};var WithoutAnimation=Template.bind({});WithoutAnimation.args={noAnimation:!0,image:(0,_storybook_templates__WEBPACK_IMPORTED_MODULE_0__.OX)("svg/icons/icon-consulting-services.svg"),alt:"Consulting Services",headline:"Consulting Services",offset:!0,list:[{ctaText:"Modern Workplace",ctaHref:"/de/modern-workplace/consulting-services",link:!0},{ctaText:"Azure",ctaHref:"/de/azure/azure-consulting",link:!0},{ctaText:"Security",ctaHref:"/de/security/security-consulting",link:!0}],copy:"Unsere Consulting Services konzentrieren sich auf die wichtigsten Themen für unsere Kunden: <strong>Modern Workplace, Azure Datacenter, Transformation Services und DevOps</strong>. Sie arbeiten Hand in Hand mit unseren Experten, die Ihnen die Best Practices und Richtlinien für eine erfolgreiche Implementierung aufzeigen. Mit unserer tiefen technischen Expertise sorgen wir dafür, dass Ihre Cloud-Umgebung effizient, sicher und leistungsstark ist."};var JobApplication=Template.bind({});JobApplication.args={image:(0,_storybook_templates__WEBPACK_IMPORTED_MODULE_0__.OX)("svg/icons/icon-hand.svg"),left:!0,bgColor:"var(--color-text-image-background)",white:!0,copy:"Komm zu uns, anderes Wording natürlich. Abschließende prominente Aufforderung die Stellenseite zu besuchen",copyClasses:"h2-font-size",firstColWidth:5,secondColWidth:7,reduceSpacing:!0,cta:{text:"Initiativbewerbung",trigger:"modal"},modal:{jobId:"1338121",apiKey:process.env.STORYBOOK_PERSONIO_API_KEY,modalId:"bewerbung1",form:{headline:"Bewerbungsformular (m/w/d)",cta:{skin:"primary",width:"w-100 w-lg-30"},ctaText:"Bewerbung absenden",method:"post",action:"",fields:[{label:"Vorname",type:"text",col:6,rowStart:!0,required:!0,id:"firstName"},{label:"Nachname",type:"text",col:6,rowEnd:!0,required:!0,id:"lastName"},{label:"E-Mail Adresse",type:"email",col:6,rowStart:!0,required:!0,id:"email"},{label:"Telefon",type:"text",col:6,rowEnd:!0,required:!0,id:"phone"},{label:"Kündigungsfrist (optional)",type:"text",col:6,rowStart:!0,id:"cancellation"},{label:"Gehaltsvorstellung (optional)",type:"text",col:6,rowEnd:!0,id:"salary"},{label:"Nachricht (optional)",type:"textarea",id:"message"},{type:"file",col:12,rowStart:!0,rowEnd:!0,formAttachments:{required:!0,requiredMsg:"Bitte einen Anhang hinzufügen",id:"file",description:"Anhänge wie Lebenslauf und Anschreiben hinzufügen",text:"Oder Dateien auswählen",extensions:["pdf"],maxSize:2e7}},{label:"<small>Lorem ipsum dolor sit amet, consectetur adipiscing elit <a href='javascript:void()'>Lorem Ipsum</a>. Sit amet consectetur adipiscing elit.</small>",type:"checkbox",id:"privacy",required:!0}]},success:{cta:{skin:"primary",width:"w-100 w-lg-30",text:"Schließen"},headline:{text:"Vielen Dank"},subline:"Inhaltlich: Deine Bewerbung ist bei uns eingegangen. Super, wir freuen uns.  Eine Bestätigunsmail solltest du in deinem Postfach von dir angegebne Adresse finden.",subheadline:{text:"So geht es nun weiter"},text:"Text sollte beinhalten dass die Bewerbungsunterlagen sorgfältig geprüft werden und dass der Bewerber in der Regel innerhalb einer Woche Feedback erwarten kann"}}};var LeftFloating=Template.bind({});LeftFloating.args={href:"",image:(0,_storybook_templates__WEBPACK_IMPORTED_MODULE_0__.OX)("svg/products/protection-shield.svg"),imagePreset:"textImageFloatingSmallSquare",imageClasses:"center",headline:"Why authenticate with certificates to access the network?",level:"h2",spacing:"space-bottom-2 space-bottom-lg-3",left:!0,float:!0,copy:'We hear this question frequently: <strong>&quot;Why should I not log in to my WIFI by using my (Azure) Active Directory credentials?&quot; </strong><br /><br />We believe that users should use their (Azure) Active Directory credentials as little as possible. Working password-less is state of the art and prevents identity theft. This is why we use certificates for network authentication. While authenticating with certificates, no credentials are transferred. <br /><br />There is another benefit: device certificates are available for the operating system prior to user login. Therefore, network connections can be established before Windows user logon. <br /><br />And finally, it is not a big deal: Certificates and WIFI profiles can be deployed to clients easily. You just need a Certificate Authority (e.g. <a href="https://scepman.com/" target="_blank">SCEPman</a> – super-easy) and a device management system, like Microsoft Intune or JAMF.'};var WithBadge=Template.bind({});WithBadge.args={badge:{text:"Badge Text"},cta:{text:"Jetzt anmelden",href:"javascript:void(0)"},href:"",image:(0,_storybook_templates__WEBPACK_IMPORTED_MODULE_0__.OX)("svg/products/protection-shield.svg"),imagePreset:"textImageFloatingSmallSquare",imageClasses:"center",headline:"Why authenticate with certificates to access the network?",level:"h2",left:!0,float:!0,copy:'We hear this question frequently: <strong>&quot;Why should I not log in to my WIFI by using my (Azure) Active Directory credentials?&quot; </strong><br /><br />We believe that users should use their (Azure) Active Directory credentials as little as possible. Working password-less is state of the art and prevents identity theft. This is why we use certificates for network authentication. While authenticating with certificates, no credentials are transferred. <br /><br />There is another benefit: device certificates are available for the operating system prior to user login. Therefore, network connections can be established before Windows user logon. <br /><br />And finally, it is not a big deal: Certificates and WIFI profiles can be deployed to clients easily. You just need a Certificate Authority (e.g. <a href="https://scepman.com/" target="_blank">SCEPman</a> – super-easy) and a device management system, like Microsoft Intune or JAMF.'};var LeftFloatingBg=Template.bind({});LeftFloatingBg.args={href:"",image:"visuals/security-ninjacat.png",alt:"Calling with teams",cloudinary:!0,bgColor:"#f5f5f5",headline:"Workplace Ninja Virtual Edition",level:"h2",left:!0,float:!0,copy:"Dieses Jahr findet die Workplace Ninja Virtual Edition 2021 <strong>vom 31. August bis 2. September </strong> statt. Eine der wichtigsten europäischen Technologiekonferenzen für Hardcore-Techies in ConfigMgr, Intune, Microsoft Security, Azure AD, PowerShell und Azure Virtual Desktop. Ziel der Veranstaltung ist es, Workplace-Experten zusammenzubringen, um ihr Wissen zu teilen und gemeinsam zu lernen. glueckkanja ist dieses Jahr Platin-Sponsor und wird mit zwei Beiträgen dabei sein. Aufgrund der COVID-19 ist die Veranstaltung <strong>virtuell und komplett kostenlos</strong>. Die Anmeldung ist bereits möglich. Wir freuen uns darauf, euch dort zu treffen.",background:(0,_storybook_templates__WEBPACK_IMPORTED_MODULE_0__.OX)("svg/shapes/shape-5.svg"),list:[{ctaText:"Jetzt anmelden",ctaHref:"https://www.eventbrite.ch/e/workplace-ninja-virtual-edition-2021-tickets-135839310033",link:!1,target:"_blank"}]};var WithAnimation=Template.bind({});WithAnimation.args={lottie:_data_lottie1_json__WEBPACK_IMPORTED_MODULE_2__,alt:"Consulting Services",headline:"Consulting Services",offset:!0,list:[{ctaText:"Modern Workplace",ctaHref:"/de/modern-workplace/consulting-services",link:!0},{ctaText:"Azure",ctaHref:"/de/azure/azure-consulting",link:!0},{ctaText:"Security",ctaHref:"/de/security/security-consulting",link:!0}],copy:"Unsere Consulting Services konzentrieren sich auf die wichtigsten Themen für unsere Kunden: <strong>Modern Workplace, Azure Datacenter, Transformation Services und DevOps</strong>. Sie arbeiten Hand in Hand mit unseren Experten, die Ihnen die Best Practices und Richtlinien für eine erfolgreiche Implementierung aufzeigen. Mit unserer tiefen technischen Expertise sorgen wir dafür, dass Ihre Cloud-Umgebung effizient, sicher und leistungsstark ist."},Right.parameters={...Right.parameters,docs:{...Right.parameters?.docs,source:{originalSource:"args => createComponent(args, component)",...Right.parameters?.docs?.source}}},WithoutAnimation.parameters={...WithoutAnimation.parameters,docs:{...WithoutAnimation.parameters?.docs,source:{originalSource:"args => createComponent(args, component)",...WithoutAnimation.parameters?.docs?.source}}},JobApplication.parameters={...JobApplication.parameters,docs:{...JobApplication.parameters?.docs,source:{originalSource:"args => createComponent(args, component)",...JobApplication.parameters?.docs?.source}}},LeftFloating.parameters={...LeftFloating.parameters,docs:{...LeftFloating.parameters?.docs,source:{originalSource:"args => createComponent(args, component)",...LeftFloating.parameters?.docs?.source}}},WithBadge.parameters={...WithBadge.parameters,docs:{...WithBadge.parameters?.docs,source:{originalSource:"args => createComponent(args, component)",...WithBadge.parameters?.docs?.source}}},LeftFloatingBg.parameters={...LeftFloatingBg.parameters,docs:{...LeftFloatingBg.parameters?.docs,source:{originalSource:"args => createComponent(args, component)",...LeftFloatingBg.parameters?.docs?.source}}},WithAnimation.parameters={...WithAnimation.parameters,docs:{...WithAnimation.parameters?.docs,source:{originalSource:"args => createComponent(args, component)",...WithAnimation.parameters?.docs?.source}}};const __namedExportsOrder=["Right","WithoutAnimation","JobApplication","LeftFloating","WithBadge","LeftFloatingBg","WithAnimation"]},"./stories/pages/career.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Career:()=>Career,__namedExportsOrder:()=>__namedExportsOrder,default:()=>career_stories});var templates=__webpack_require__("./.storybook/templates.js");var jobList_stories=__webpack_require__("./stories/components/jobList.stories.js"),textImage_stories=__webpack_require__("./stories/components/textImage.stories.js"),fabButton_stories=__webpack_require__("./stories/components/fabButton.stories.js"),faq_stories=__webpack_require__("./stories/components/faq.stories.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const career_stories=_objectSpread(_objectSpread({},(0,templates.tI)({page:!0})),{},{title:"Pages/Career"});var baseArgs=_objectSpread(_objectSpread(_objectSpread(_objectSpread({},null===faq_stories.MultipleEntries||void 0===faq_stories.MultipleEntries?void 0:faq_stories.MultipleEntries.args),null===jobList_stories.List||void 0===jobList_stories.List?void 0:jobList_stories.List.args),null===textImage_stories.JobApplication||void 0===textImage_stories.JobApplication?void 0:textImage_stories.JobApplication.args),{},{hero:{v2:!0,bgColor:"var(--color-blue-dark)",light:!0,lightOverline:!1,overline:"Karriere",fullscreen:!0,animation:{sequence:[{text:"HEY,",textSize:"font-size-7"},{text:"Wo bin ich denn hier gelandet?"},{text:"Da, wo eine neue Welt entsteht"},{text:"Gemeinsam",subline:"wollen wir nichts weniger als die Welt verändern: die Dinge neu denken, die Revolution des Digitalen, einen Entwicklungssprung für unsere Kunden. Dafür braucht es Menschen, die nicht nach einem bloßen Job, sondern nach einer echten Aufgabe suchen. Menschen, die eine Vision haben. Menschen, die Utopien Realität werden lassen wollen."}]},background:{icon:"smile"},cta:{text:"Zu den Stellenanzeigen"}},detailUrl:{default:(0,templates.Z)("Pages/Jobs",""),en:(0,templates.Z)("Pages/Jobs","")},maxItems:4,expandText:"Weitere Stellenanzeigen",fabModal:_objectSpread({},null===fabButton_stories.Contact||void 0===fabButton_stories.Contact?void 0:fabButton_stories.Contact.args),faqModal:{id:"bewerbung",apiUrl:"mock/jobList.xml",jobId:"1327578",form:{headline:"Bewerbungsformular (m/w/d)",cta:{skin:"primary",width:"w-100 w-lg-30"},ctaText:"Bewerbung absenden",method:"post",action:"",fields:[{label:"Vorname",type:"text",col:6,rowStart:!0,required:!0,id:"firstName"},{label:"Nachname",type:"text",col:6,rowEnd:!0,required:!0,id:"lastName"},{label:"E-Mail Adresse",type:"email",col:6,rowStart:!0,required:!0,id:"email"},{label:"Telefon",type:"text",col:6,rowEnd:!0,required:!0,id:"phone"},{label:"Kündigungsfrist (optional)",type:"text",col:6,rowStart:!0,id:"cancellation"},{label:"Gehaltsvorstellung (optional)",type:"text",col:6,rowEnd:!0,id:"salary"},{label:"Nachricht (optional)",type:"textarea",id:"message"},{type:"file",col:12,rowStart:!0,rowEnd:!0,formAttachments:{required:!0,requiredMsg:"Bitte einen Anhang hinzufügen",id:"file",description:"Anhänge wie Lebenslauf und Anschreiben hinzufügen",text:"Oder Dateien auswählen",extensions:["pdf"],maxSize:2e7}},{label:"<small>Lorem ipsum dolor sit amet, consectetur adipiscing elit <a href='javascript:void()'>Lorem Ipsum</a>. Sit amet consectetur adipiscing elit.</small>",type:"checkbox",id:"privacy",required:!0}]},success:{cta:{skin:"primary",width:"w-100 w-lg-30",text:"Schließen"},headline:{text:"Vielen Dank"},subline:"Inhaltlich: Deine Bewerbung ist bei uns eingegangen. Super, wir freuen uns.  Eine Bestätigunsmail solltest du in deinem Postfach von dir angegebne Adresse finden.",subheadline:{text:"So geht es nun weiter"},text:"Text sollte beinhalten dass die Bewerbungsunterlagen sorgfältig geprüft werden und dass der Bewerber in der Regel innerhalb einer Woche Feedback erwarten kann"}},faqApplicationProcess:{headline:{text:'<span class="h3-font-size">Bewerbungsprozess & Kontakt</span>'},entries:[{summary:"An wen kann ich mich wenden, wenn ich Fragen zur Bewerbung habe oder das Unternehmen näher kennenlernen möchte?",text:"<p>Steffi ist deine Ansprechpartnerin. <a class='fab-trigger'>Kontaktiere sie jederzeit</a> für hilfreiche Tipps und Infos.</p>"},{summary:"Kann ich mich auf mehrere Stellen gleichzeitig bewerben?",text:'<p><a href="mailto:v-steffi.altendorf@glueckkanja.com">Wende dich an Steffi</a>, um gemeinsam herauszufinden, welche Stelle am besten zu dir passt. Du kannst dich auch auf eine Stelle bewerben und im Anschreiben weitere Interessen erwähnen.</p>'},{summary:"Wie lange vor dem Einstiegstermin sollte ich mich bewerben? Wie lange dauert es von der Bewerbung bis zum Einstieg?",text:"<p>Bewirb dich, wenn du bereit für ein neues Abenteuer bist – keine festen Starttermine. Wir sind bereit, wenn du es bist 😉</p>"},{summary:"Ich finde keine offene Stelle, die zu mir passt. Was kann ich tun?",text:"<p>Wir sind offen für neue Ideen. Kontaktiere uns über den Button <a class='is-component' data-trigger-id='bewerbung' data-trigger='modal'>\"Initiativbewerbung\"</a>, auch wenn die passende Stelle nicht online ist.</p>"},{summary:"Ich habe bisher wenig Berufserfahrung. Kann ich mich trotzdem bewerben?",text:"<p>Ja! Bewirb dich direkt nach Uni, FH oder Ausbildung. Wir bieten ein Up-Skilling Programm für Einsteiger/innen mit Microsoft-Trainings.</p>"}]},faqApplicationDocuments:{headline:{text:'<span class="h3-font-size">Bewerbungsunterlagen & Interviews</span>'},entries:[{summary:"Wann ist meine Bewerbung vollständig?",text:"<p>Deine Bewerbung sollte bestehen aus: Anschreiben, Lebenslauf, (Arbeits–)Zeugnisse und sonstige relevante Nachweise/Zertifikate.</p>"},{summary:"Wie geht es nach dem Versand meiner Bewerbung weiter?",text:"<p>Nach gründlicher Prüfung melden wir uns bei dir. Bei erfolgreichen Gesprächen erhältst du ein Angebot und den Arbeitsvertrag. Anschließend beginnt das Onboarding.</p>"},{summary:"Wen lerne ich in den Gesprächen kennen?",text:"<p>Du triffst Recruiterin Steffi, deinen zukünftigen Lead, Teammitglieder und jemanden aus dem Management Board.</p>"},{summary:"Wie kann ich mich auf das Vorstellungsgespräch vorbereiten?",text:"<p>Sei du selbst! Authentizität, Leidenschaft, Eigeninitiative und Wissen über uns sind wichtige Faktoren.</p>"}]},faqApplicationEvents:{headline:{text:'<span class="h3-font-size">Events & Kanäle</span>'},entries:[{summary:"Auf welchen Events und Kanälen kann ich euch unverbindlich kennenlernen?",text:'<p>Wir lassen uns gerne kennenlernen! Folge uns auf <a href="https://twitter.com/glueckkanjagab" target="_blank">Twitter</a>, <a href="https://www.linkedin.com/company/glueckkanja-gab" target="_blank">LinkedIn</a> und <a href="https://www.youtube.com/user/glueckkanja" target="_blank">YouTube</a> und besuche unsere Website für wertvolle Informationen. Wenn du uns persönlich treffen möchtest, komm uns im Mai auf der <a href="https://www.uni-frankfurt.de/98499590/Jobmesse_IT" target="_blank">IT Jobmesse der Goethe-Universität Frankfurt</a> an unserem Stand besuchen und stell uns deine Fragen. Wir freuen uns darauf, dich kennenzulernen!</p>'}]}});baseArgs.modal.apiUrl=baseArgs.faqModal.apiUrl,baseArgs.modal.jobId=baseArgs.faqModal.jobId;var Career=function Template(args){return(0,templates.Xu)(args,'{%\n  include hero.html\n%}\n\n{%\n  include fab-button.html\n  modal=fabModal.modal\n  bgColor=null\n%}\n\n{%\n  include faq.html\n%}\n\n{%\n  include job-list.html\n%}\n\n{%\n  include text-image.html\n  headline=nil\n%}\n\n<list-container\n  headline="Brauchst du Hilfe?<br />Wir haben Antworten."\n  spacing="space-top-3 space-bottom-3"\n>\n  {%\n    include faq.html\n    headline=faqApplicationProcess.headline\n    entries=faqApplicationProcess.entries\n  %}\n\n  {%\n    include faq.html\n    headline=faqApplicationDocuments.headline\n    entries=faqApplicationDocuments.entries\n  %}\n\n  {%\n    include faq.html\n    headline=faqApplicationEvents.headline\n    entries=faqApplicationEvents.entries\n  %}\n</list-container>\n\n{%\n  include modal.html\n  form=faqModal.form\n  success=faqModal.success\n  modalId="bewerbung2"\n  application=true\n  clientName=faqModal.clientName\n  apiUrl=faqModal.apiUrl\n  jobId=faqModal.jobId\n  apiKey=faqModal.apiKey\n%}\n')}.bind({});Career.args=_objectSpread({},baseArgs);const __namedExportsOrder=["Career"]}}]);