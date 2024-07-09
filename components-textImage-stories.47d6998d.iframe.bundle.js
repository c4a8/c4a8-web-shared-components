"use strict";(self.webpackChunkshared_components=self.webpackChunkshared_components||[]).push([[8384],{"./stories/components/textImage.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{JobApplication:()=>JobApplication,LeftFloating:()=>LeftFloating,LeftFloatingBg:()=>LeftFloatingBg,Right:()=>Right,WithAnimation:()=>WithAnimation,WithBadge:()=>WithBadge,WithoutAnimation:()=>WithoutAnimation,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_templates__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./.storybook/templates.js"),_storybook_generatedIncludes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/generatedIncludes.js"),_data_lottie1_json__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/data/lottie1.json"),process=__webpack_require__("./node_modules/process/browser.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Text Image"};var Template=function Template(args){return(0,_storybook_templates__WEBPACK_IMPORTED_MODULE_0__.a0)(args,_storybook_generatedIncludes__WEBPACK_IMPORTED_MODULE_1__.ds)},Right=Template.bind({});Right.args={image:(0,_storybook_templates__WEBPACK_IMPORTED_MODULE_0__.OX)("svg/icons/icon-products.svg"),alt:"Consulting Services",headline:"Consulting Services",offset:!0,list:[{ctaText:"Modern Workplace",ctaHref:"/de/modern-workplace/consulting-services",link:!0},{ctaText:"Azure",ctaHref:"/de/azure/azure-consulting",link:!0},{ctaText:"Security",ctaHref:"/de/security/security-consulting",link:!0}],copy:"Unsere Consulting Services konzentrieren sich auf die wichtigsten Themen für unsere Kunden: <strong>Modern Workplace, Azure Datacenter, Transformation Services und DevOps</strong>. Sie arbeiten Hand in Hand mit unseren Experten, die Ihnen die Best Practices und Richtlinien für eine erfolgreiche Implementierung aufzeigen. Mit unserer tiefen technischen Expertise sorgen wir dafür, dass Ihre Cloud-Umgebung effizient, sicher und leistungsstark ist."};var WithoutAnimation=Template.bind({});WithoutAnimation.args={noAnimation:!0,image:(0,_storybook_templates__WEBPACK_IMPORTED_MODULE_0__.OX)("svg/icons/icon-consulting-services.svg"),alt:"Consulting Services",headline:"Consulting Services",offset:!0,list:[{ctaText:"Modern Workplace",ctaHref:"/de/modern-workplace/consulting-services",link:!0},{ctaText:"Azure",ctaHref:"/de/azure/azure-consulting",link:!0},{ctaText:"Security",ctaHref:"/de/security/security-consulting",link:!0}],copy:"Unsere Consulting Services konzentrieren sich auf die wichtigsten Themen für unsere Kunden: <strong>Modern Workplace, Azure Datacenter, Transformation Services und DevOps</strong>. Sie arbeiten Hand in Hand mit unseren Experten, die Ihnen die Best Practices und Richtlinien für eine erfolgreiche Implementierung aufzeigen. Mit unserer tiefen technischen Expertise sorgen wir dafür, dass Ihre Cloud-Umgebung effizient, sicher und leistungsstark ist."};var JobApplication=Template.bind({});JobApplication.args={image:(0,_storybook_templates__WEBPACK_IMPORTED_MODULE_0__.OX)("svg/icons/icon-hand.svg"),left:!0,bgColor:"var(--color-text-image-background)",white:!0,copy:"Komm zu uns, anderes Wording natürlich. Abschließende prominente Aufforderung die Stellenseite zu besuchen",copyClasses:"h2-font-size",firstColWidth:5,secondColWidth:7,reduceSpacing:!0,cta:{text:"Initiativbewerbung",trigger:"modal"},modal:{jobId:"1338121",apiKey:process.env.STORYBOOK_PERSONIO_API_KEY,modalId:"bewerbung1",form:{headline:"Bewerbungsformular (m/w/d)",cta:{skin:"primary",width:"w-100 w-lg-30"},ctaText:"Bewerbung absenden",method:"post",action:"",fields:[{label:"Vorname",type:"text",col:6,rowStart:!0,required:!0,id:"firstName"},{label:"Nachname",type:"text",col:6,rowEnd:!0,required:!0,id:"lastName"},{label:"E-Mail Adresse",type:"email",col:6,rowStart:!0,required:!0,id:"email"},{label:"Telefon",type:"text",col:6,rowEnd:!0,required:!0,id:"phone"},{label:"Kündigungsfrist (optional)",type:"text",col:6,rowStart:!0,id:"cancellation"},{label:"Gehaltsvorstellung (optional)",type:"text",col:6,rowEnd:!0,id:"salary"},{label:"Nachricht (optional)",type:"textarea",id:"message"},{type:"file",col:12,rowStart:!0,rowEnd:!0,formAttachments:{required:!0,requiredMsg:"Bitte einen Anhang hinzufügen",id:"file",description:"Anhänge wie Lebenslauf und Anschreiben hinzufügen",text:"Oder Dateien auswählen",extensions:["pdf"],maxSize:2e7}},{label:"<small>Lorem ipsum dolor sit amet, consectetur adipiscing elit <a href='javascript:void()'>Lorem Ipsum</a>. Sit amet consectetur adipiscing elit.</small>",type:"checkbox",id:"privacy",required:!0}]},success:{cta:{skin:"primary",width:"w-100 w-lg-30",text:"Schließen"},headline:{text:"Vielen Dank"},subline:"Inhaltlich: Deine Bewerbung ist bei uns eingegangen. Super, wir freuen uns.  Eine Bestätigunsmail solltest du in deinem Postfach von dir angegebne Adresse finden.",subheadline:{text:"So geht es nun weiter"},text:"Text sollte beinhalten dass die Bewerbungsunterlagen sorgfältig geprüft werden und dass der Bewerber in der Regel innerhalb einer Woche Feedback erwarten kann"}}};var LeftFloating=Template.bind({});LeftFloating.args={href:"",image:(0,_storybook_templates__WEBPACK_IMPORTED_MODULE_0__.OX)("svg/products/protection-shield.svg"),imagePreset:"textImageFloatingSmallSquare",imageClasses:"center",headline:"Why authenticate with certificates to access the network?",level:"h2",spacing:"space-bottom-2 space-bottom-lg-3",left:!0,float:!0,copy:'We hear this question frequently: <strong>&quot;Why should I not log in to my WIFI by using my (Azure) Active Directory credentials?&quot; </strong><br /><br />We believe that users should use their (Azure) Active Directory credentials as little as possible. Working password-less is state of the art and prevents identity theft. This is why we use certificates for network authentication. While authenticating with certificates, no credentials are transferred. <br /><br />There is another benefit: device certificates are available for the operating system prior to user login. Therefore, network connections can be established before Windows user logon. <br /><br />And finally, it is not a big deal: Certificates and WIFI profiles can be deployed to clients easily. You just need a Certificate Authority (e.g. <a href="https://scepman.com/" target="_blank">SCEPman</a> – super-easy) and a device management system, like Microsoft Intune or JAMF.'};var WithBadge=Template.bind({});WithBadge.args={badge:{text:"Badge Text"},cta:{text:"Jetzt anmelden",href:"javascript:void(0)"},href:"",image:(0,_storybook_templates__WEBPACK_IMPORTED_MODULE_0__.OX)("svg/products/protection-shield.svg"),imagePreset:"textImageFloatingSmallSquare",imageClasses:"center",headline:"Why authenticate with certificates to access the network?",level:"h2",left:!0,float:!0,copy:'We hear this question frequently: <strong>&quot;Why should I not log in to my WIFI by using my (Azure) Active Directory credentials?&quot; </strong><br /><br />We believe that users should use their (Azure) Active Directory credentials as little as possible. Working password-less is state of the art and prevents identity theft. This is why we use certificates for network authentication. While authenticating with certificates, no credentials are transferred. <br /><br />There is another benefit: device certificates are available for the operating system prior to user login. Therefore, network connections can be established before Windows user logon. <br /><br />And finally, it is not a big deal: Certificates and WIFI profiles can be deployed to clients easily. You just need a Certificate Authority (e.g. <a href="https://scepman.com/" target="_blank">SCEPman</a> – super-easy) and a device management system, like Microsoft Intune or JAMF.'};var LeftFloatingBg=Template.bind({});LeftFloatingBg.args={href:"",image:"visuals/security-ninjacat.png",alt:"Calling with teams",cloudinary:!0,bgColor:"#f5f5f5",headline:"Workplace Ninja Virtual Edition",level:"h2",left:!0,float:!0,copy:"Dieses Jahr findet die Workplace Ninja Virtual Edition 2021 <strong>vom 31. August bis 2. September </strong> statt. Eine der wichtigsten europäischen Technologiekonferenzen für Hardcore-Techies in ConfigMgr, Intune, Microsoft Security, Azure AD, PowerShell und Azure Virtual Desktop. Ziel der Veranstaltung ist es, Workplace-Experten zusammenzubringen, um ihr Wissen zu teilen und gemeinsam zu lernen. glueckkanja ist dieses Jahr Platin-Sponsor und wird mit zwei Beiträgen dabei sein. Aufgrund der COVID-19 ist die Veranstaltung <strong>virtuell und komplett kostenlos</strong>. Die Anmeldung ist bereits möglich. Wir freuen uns darauf, euch dort zu treffen.",background:(0,_storybook_templates__WEBPACK_IMPORTED_MODULE_0__.OX)("svg/shapes/shape-5.svg"),list:[{ctaText:"Jetzt anmelden",ctaHref:"https://www.eventbrite.ch/e/workplace-ninja-virtual-edition-2021-tickets-135839310033",link:!1,target:"_blank"}]};var WithAnimation=Template.bind({});WithAnimation.args={lottie:_data_lottie1_json__WEBPACK_IMPORTED_MODULE_2__,alt:"Consulting Services",headline:"Consulting Services",offset:!0,list:[{ctaText:"Modern Workplace",ctaHref:"/de/modern-workplace/consulting-services",link:!0},{ctaText:"Azure",ctaHref:"/de/azure/azure-consulting",link:!0},{ctaText:"Security",ctaHref:"/de/security/security-consulting",link:!0}],copy:"Unsere Consulting Services konzentrieren sich auf die wichtigsten Themen für unsere Kunden: <strong>Modern Workplace, Azure Datacenter, Transformation Services und DevOps</strong>. Sie arbeiten Hand in Hand mit unseren Experten, die Ihnen die Best Practices und Richtlinien für eine erfolgreiche Implementierung aufzeigen. Mit unserer tiefen technischen Expertise sorgen wir dafür, dass Ihre Cloud-Umgebung effizient, sicher und leistungsstark ist."},Right.parameters={...Right.parameters,docs:{...Right.parameters?.docs,source:{originalSource:"args => createComponent(args, component)",...Right.parameters?.docs?.source}}},WithoutAnimation.parameters={...WithoutAnimation.parameters,docs:{...WithoutAnimation.parameters?.docs,source:{originalSource:"args => createComponent(args, component)",...WithoutAnimation.parameters?.docs?.source}}},JobApplication.parameters={...JobApplication.parameters,docs:{...JobApplication.parameters?.docs,source:{originalSource:"args => createComponent(args, component)",...JobApplication.parameters?.docs?.source}}},LeftFloating.parameters={...LeftFloating.parameters,docs:{...LeftFloating.parameters?.docs,source:{originalSource:"args => createComponent(args, component)",...LeftFloating.parameters?.docs?.source}}},WithBadge.parameters={...WithBadge.parameters,docs:{...WithBadge.parameters?.docs,source:{originalSource:"args => createComponent(args, component)",...WithBadge.parameters?.docs?.source}}},LeftFloatingBg.parameters={...LeftFloatingBg.parameters,docs:{...LeftFloatingBg.parameters?.docs,source:{originalSource:"args => createComponent(args, component)",...LeftFloatingBg.parameters?.docs?.source}}},WithAnimation.parameters={...WithAnimation.parameters,docs:{...WithAnimation.parameters?.docs,source:{originalSource:"args => createComponent(args, component)",...WithAnimation.parameters?.docs?.source}}};const __namedExportsOrder=["Right","WithoutAnimation","JobApplication","LeftFloating","WithBadge","LeftFloatingBg","WithAnimation"]}}]);