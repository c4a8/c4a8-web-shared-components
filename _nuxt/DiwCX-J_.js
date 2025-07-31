import{g as G}from"./esXqDRs6.js";import{_ as B}from"./BKbL6RUF.js";import{_ as L}from"./B4hoE9i_.js";import{_ as R}from"./BR-f_oy-.js";import{_ as F}from"./CDMTHC6g.js";import{_ as j,c as n,o as a,b as _,a as i,e as h,d as C,F as v,r as S,h as V,i as q,f as W,n as M,t as J,m as K}from"./Dnht6_LH.js";import{U as Q}from"./DvWzOWTL.js";import{l as X}from"./_1vLXP-S.js";import"./D-tlEuJt.js";const N={tagName:"feature-grid-item",computed:{classList(){return["feature-grid__item mb-3 fade-in-bottom",this.classes!==""?this.classes:"",this.centered?"is-centered":"","vue-component"]},style(){return`--utility-animation-index: ${this.index};`},image(){var e;return(e=this.item)==null?void 0:e.image},title(){var e;return(e=this.item)==null?void 0:e.title},headlineLevel(){var e;return(e=this.item)!=null&&e.level?this.item.level:"h3"},headlineClasses(){var s;const e="mb-2",c=(s=this.item)!=null&&s.classes?this.item.classes:"font-size-2 bold";return`${e} ${c}`},description(){var e;return(e=this.item)==null?void 0:e.description},copy(){var e;return(e=this.item)==null?void 0:e.copy},secondCopy(){var e;return(e=this.item)==null?void 0:e.copy_1},list(){var e;return(e=this.item)==null?void 0:e.list},secondList(){var e;return(e=this.item)==null?void 0:e.list_1},ctaClasses(){var s;if(!this.item.cta)return;const e="mt-5",c=((s=this.item)==null?void 0:s.cta.align)==="right"?"d-flex justify-content-end":"";return`${e} ${c}`}},methods:{},props:{classes:String,item:Object,index:Number,centered:Boolean}},Y={class:"bg-white d-flex flex-column h-100 py-5 px-3"},Z={key:0,class:"w-100 max-w-10rem mb-5 mx-auto"},$=["innerHTML"],ee=["innerHTML"],te={key:4,class:"dashed m-0 flex-grow-1",style:{"margin-bottom":"10px !important"}},se=["innerHTML"],ae=["innerHTML"],ne={key:6,class:"dashed m-0 flex-grow-1"},ie=["innerHTML"],re={key:7,class:"ctaClasses"};function ce(e,c,s,H,E,t){const f=L,g=R,p=F;return a(),n("div",{class:M(t.classList),"data-utility-animation-step":"1",style:W(t.style)},[_("div",Y,[t.image?(a(),n("figure",Z,[C(f,{img:t.image.src,alt:t.image.alt,cloudinary:t.image.cloudinary},null,8,["img","alt","cloudinary"])])):i("",!0),t.title?(a(),h(g,{key:1,text:t.title,level:t.headlineLevel,classes:t.headlineClasses},null,8,["text","level","classes"])):i("",!0),t.description?(a(),n("p",{key:2,class:"mb-0",innerHTML:t.description},null,8,$)):i("",!0),t.copy?(a(),n("p",{key:3,class:"mb-0 font-size-sm d-flex",style:{"padding-bottom":"5px"},innerHTML:t.copy},null,8,ee)):i("",!0),t.list?(a(),n("ul",te,[(a(!0),n(v,null,S(t.list,(o,r)=>(a(),n("li",{class:"feature-grid-item__text font-size-sm",innerHTML:o,key:r},null,8,se))),128))])):i("",!0),t.secondCopy?(a(),n("p",{key:5,class:"mb-0 font-size-sm d-flex",style:{"padding-bottom":"5px"},innerHTML:t.secondCopy},null,8,ae)):i("",!0),t.secondList?(a(),n("ul",ne,[(a(!0),n(v,null,S(t.secondList,(o,r)=>(a(),n("li",{class:"feature-grid-item__text font-size-sm",innerHTML:o,key:r},null,8,ie))),128))])):i("",!0),s.item.cta?(a(),n("div",re,[C(p,V(q(s.item.cta)),null,16)])):i("",!0)])],6)}const oe=j(N,[["render",ce]]);N.__docgenInfo={exportName:"default",displayName:"feature-grid-item",description:"",tags:{},props:[{name:"classes",type:{name:"string"}},{name:"item",type:{name:"object"}},{name:"index",type:{name:"number"}},{name:"centered",type:{name:"boolean"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/feature-grid-item.vue"]};const U={tagName:"feature-grid",props:{backgroundColor:{type:String,default:"var(--color-bg-grey)"},description:String,headline:String,gridSize:{type:Number,default:4},image:Object,features:Array,footer:String,centered:Boolean,headlineClasses:String,headlineLevel:String,headlineRowClasses:String,spacing:{type:String,default:"space-top-2"}},mounted(){this.$refs.root&&Q.init([this.$refs.root])},computed:{columnClass(){return"col-lg-"+12/this.gridSize},headlineRowClassesValue(){return["fade-in-bottom",this.headlineRowClasses?this.headlineRowClasses:null].join(" ")},containerClasses(){return["container",this.spacing]},styleObject(){return{backgroundColor:this.backgroundColor}}}},le={key:1,class:"feature-grid__description w-lg-50 text-center mt-3 mx-auto"},de={key:2,class:"d-flex mt-8 justify-content-center fade-in-bottom","data-utility-animation-step":"1"},me={key:3,class:"my-8"},ue={class:"d-flex flex-wrap"},fe=["innerHTML"];function ge(e,c,s,H,E,t){const f=B,g=L,p=oe;return a(),n("div",{class:"feature-grid utility-animation py-7",style:W(t.styleObject),ref:"root"},[_("div",{class:M(t.containerClasses)},[s.headline?(a(),h(f,{key:0,text:s.headline,centered:!0,headlineClasses:s.headlineClasses,classes:t.headlineRowClassesValue,utilityAnimationStep:"1",noContainer:!0,level:s.headlineLevel,spacing:""},null,8,["text","headlineClasses","classes","level"])):i("",!0),s.description?(a(),n("p",le,J(s.description),1)):i("",!0),s.image?(a(),n("figure",de,[C(g,K(s.image,{img:s.image.src}),null,16,["img"])])):i("",!0),s.features?(a(),n("div",me,[_("div",ue,[(a(!0),n(v,null,S(s.features,(o,r)=>(a(),h(p,{key:r,classes:t.columnClass,index:r+1,item:o,centered:s.centered},null,8,["classes","index","item","centered"]))),128))])])):i("",!0),s.footer?(a(),n("div",{key:4,class:"container pb-6",innerHTML:s.footer},null,8,fe)):i("",!0)],2)],4)}const pe=j(U,[["render",ge]]);U.__docgenInfo={exportName:"default",displayName:"feature-grid",description:"",tags:{},props:[{name:"backgroundColor",type:{name:"string"},defaultValue:{func:!1,value:"'var(--color-bg-grey)'"}},{name:"description",type:{name:"string"}},{name:"headline",type:{name:"string"}},{name:"gridSize",type:{name:"number"},defaultValue:{func:!1,value:"4"}},{name:"image",type:{name:"object"}},{name:"features",type:{name:"array"}},{name:"footer",type:{name:"string"}},{name:"centered",type:{name:"boolean"}},{name:"headlineClasses",type:{name:"string"}},{name:"headlineLevel",type:{name:"string"}},{name:"headlineRowClasses",type:{name:"string"}},{name:"spacing",type:{name:"string"},defaultValue:{func:!1,value:"'space-top-2'"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/feature-grid.vue"]};const be={component:pe,argTypes:{centered:{description:"Toggle to center feature Grid",type:"boolean"},spacing:{description:"Adds helper classes for the spacing",control:{type:"text"},type:{summary:"Bootstrap Spacing",detail:"space-bottom-1, space-bottom-2, space-top-1, space-top-2"}}},title:"Components/Feature Grid"},l={args:{headline:"Specifications",features:[{title:"Contact Sources",image:{src:"../svg/icons/unifiedcontacts_feature_contactsources.svg",alt:"Contact Sources"},list:["Azure AD Users","Azure AD Contacts (coming soon)","Personal Exchange Online Contacts"]},{title:"Contact Card",image:{src:"../svg/icons/unifiedcontacts_feature_contactcards.svg",alt:"Contact Card"},list:["Place PSTN calls","Place Teams calls","Write email","Start Teams chat","Get presence status"]},{title:"Platforms",image:{src:"../svg/icons/unifiedcontacts_feature_platforms.svg",alt:"Platforms"},list:["Teams Desktop Client","Teams Web App","Teams Mobile App"]},{title:"ISO 27001",image:{src:"../svg/icons/unifiedcontacts_feature_certificates.svg",alt:"ISO 27001"},list:["Our development and operations teams are certified",'<a href="https://www.datenschutz-cert.de/uploads/tx_dsnordreferenzen/glueckkanja_ISO27001_Urkunde_20211203_digital.pdf">ISO 27001 Certificate</a>']}]}},d={args:{image:{src:G("img/image-placeholder-1.jpg"),alt:"lorem ipsum dolor sit amet"},headline:"Specifications",headlineClasses:"h4-font-size",features:[{title:"Contact Sources",image:{src:"../svg/icons/unifiedcontacts_feature_contactsources.svg",alt:"Contact Sources"},list:["Azure AD Users","Azure AD Contacts (coming soon)","Personal Exchange Online Contacts"]},{title:"Contact Card",image:{src:"../svg/icons/unifiedcontacts_feature_contactcards.svg",alt:"Contact Card"},list:["Place PSTN calls","Place Teams calls","Write email","Start Teams chat","Get presence status"]},{title:"Platforms",image:{src:"../svg/icons/unifiedcontacts_feature_platforms.svg",alt:"Platforms"},list:["Teams Desktop Client","Teams Web App","Teams Mobile App"]},{title:"ISO 27001",image:{src:"../svg/icons/unifiedcontacts_feature_certificates.svg",alt:"ISO 27001"},copy:"lorem ipsum dolor sit amet",list:["Our development and operations teams are certified",'<a href="https://www.datenschutz-cert.de/uploads/tx_dsnordreferenzen/glueckkanja_ISO27001_Urkunde_20211203_digital.pdf">ISO 27001 Certificate</a>'],copy_1:"Provide an easy to use web interface for your help desk staff",list_1:["Leverage the power of Intune in your help desk",'Execute important tasks with "just a click"',"Integration of remote support tools and help desk tickets"]}]}},m={args:{centered:!0,headline:"Specifications",features:[{title:"Contact Sources",image:{src:"../svg/icons/unifiedcontacts_feature_contactsources.svg",alt:"Contact Sources"},list:["Azure AD Users","Azure AD Contacts (coming soon)","Personal Exchange Online Contacts"],cta:{text:"With Button",skin:"primary is-cutoff",href:"javascript:void(0)"}},{title:"Contact Card",image:{src:"../svg/icons/unifiedcontacts_feature_contactcards.svg",alt:"Contact Card"},list:["Place PSTN calls","Place Teams calls","Write email","Start Teams chat","Get presence status"]},{title:"Platforms",image:{src:"../svg/icons/unifiedcontacts_feature_platforms.svg",alt:"Platforms"},list:["Teams Desktop Client","Teams Web App","Teams Mobile App"]},{title:"ISO 27001",image:{src:"../svg/icons/unifiedcontacts_feature_certificates.svg",alt:"ISO 27001"},list:["Our development and operations teams are certified",'<a href="https://www.datenschutz-cert.de/uploads/tx_dsnordreferenzen/glueckkanja_ISO27001_Urkunde_20211203_digital.pdf">ISO 27001 Certificate</a>']}]}},u={args:{image:{alt:"lorem ipsum dolor sit amet",lottie:X},headline:"Specifications",headlineRowClasses:"text-left",features:[{title:"Contact Sources",image:{src:"../svg/icons/unifiedcontacts_feature_contactsources.svg",alt:"Contact Sources"},list:["Azure AD Users","Azure AD Contacts (coming soon)","Personal Exchange Online Contacts"]},{title:"Contact Card",image:{src:"../svg/icons/unifiedcontacts_feature_contactcards.svg",alt:"Contact Card"},list:["Place PSTN calls","Place Teams calls","Write email","Start Teams chat","Get presence status"]},{title:"Platforms",image:{src:"../svg/icons/unifiedcontacts_feature_platforms.svg",alt:"Platforms"},list:["Teams Desktop Client","Teams Web App","Teams Mobile App"]},{title:"ISO 27001",image:{src:"../svg/icons/unifiedcontacts_feature_certificates.svg",alt:"ISO 27001"},list:["Our development and operations teams are certified",'<a href="https://www.datenschutz-cert.de/uploads/tx_dsnordreferenzen/glueckkanja_ISO27001_Urkunde_20211203_digital.pdf">ISO 27001 Certificate</a>']}]}};var y,k,x;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    headline: 'Specifications',
    features: [{
      title: 'Contact Sources',
      image: {
        src: '../svg/icons/unifiedcontacts_feature_contactsources.svg',
        alt: 'Contact Sources'
      },
      list: ['Azure AD Users', 'Azure AD Contacts (coming soon)', 'Personal Exchange Online Contacts']
    }, {
      title: 'Contact Card',
      image: {
        src: '../svg/icons/unifiedcontacts_feature_contactcards.svg',
        alt: 'Contact Card'
      },
      list: ['Place PSTN calls', 'Place Teams calls', 'Write email', 'Start Teams chat', 'Get presence status']
    }, {
      title: 'Platforms',
      image: {
        src: '../svg/icons/unifiedcontacts_feature_platforms.svg',
        alt: 'Platforms'
      },
      list: ['Teams Desktop Client', 'Teams Web App', 'Teams Mobile App']
    }, {
      title: 'ISO 27001',
      image: {
        src: '../svg/icons/unifiedcontacts_feature_certificates.svg',
        alt: 'ISO 27001'
      },
      list: ['Our development and operations teams are certified', '<a href="https://www.datenschutz-cert.de/uploads/tx_dsnordreferenzen/glueckkanja_ISO27001_Urkunde_20211203_digital.pdf">ISO 27001 Certificate</a>']
    }]
  }
}`,...(x=(k=l.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var T,b,A;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    image: {
      src: getAssetPath('img/image-placeholder-1.jpg'),
      alt: 'lorem ipsum dolor sit amet'
    },
    headline: 'Specifications',
    headlineClasses: 'h4-font-size',
    features: [{
      title: 'Contact Sources',
      image: {
        src: '../svg/icons/unifiedcontacts_feature_contactsources.svg',
        alt: 'Contact Sources'
      },
      list: ['Azure AD Users', 'Azure AD Contacts (coming soon)', 'Personal Exchange Online Contacts']
    }, {
      title: 'Contact Card',
      image: {
        src: '../svg/icons/unifiedcontacts_feature_contactcards.svg',
        alt: 'Contact Card'
      },
      list: ['Place PSTN calls', 'Place Teams calls', 'Write email', 'Start Teams chat', 'Get presence status']
    }, {
      title: 'Platforms',
      image: {
        src: '../svg/icons/unifiedcontacts_feature_platforms.svg',
        alt: 'Platforms'
      },
      list: ['Teams Desktop Client', 'Teams Web App', 'Teams Mobile App']
    }, {
      title: 'ISO 27001',
      image: {
        src: '../svg/icons/unifiedcontacts_feature_certificates.svg',
        alt: 'ISO 27001'
      },
      copy: 'lorem ipsum dolor sit amet',
      list: ['Our development and operations teams are certified', '<a href="https://www.datenschutz-cert.de/uploads/tx_dsnordreferenzen/glueckkanja_ISO27001_Urkunde_20211203_digital.pdf">ISO 27001 Certificate</a>'],
      copy_1: 'Provide an easy to use web interface for your help desk staff',
      list_1: ['Leverage the power of Intune in your help desk', 'Execute important tasks with "just a click"', 'Integration of remote support tools and help desk tickets']
    }]
  }
}`,...(A=(b=d.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var P,O,w;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    centered: true,
    headline: 'Specifications',
    features: [{
      title: 'Contact Sources',
      image: {
        src: '../svg/icons/unifiedcontacts_feature_contactsources.svg',
        alt: 'Contact Sources'
      },
      list: ['Azure AD Users', 'Azure AD Contacts (coming soon)', 'Personal Exchange Online Contacts'],
      cta: {
        text: 'With Button',
        skin: 'primary is-cutoff',
        href: 'javascript:void(0)'
      }
    }, {
      title: 'Contact Card',
      image: {
        src: '../svg/icons/unifiedcontacts_feature_contactcards.svg',
        alt: 'Contact Card'
      },
      list: ['Place PSTN calls', 'Place Teams calls', 'Write email', 'Start Teams chat', 'Get presence status']
    }, {
      title: 'Platforms',
      image: {
        src: '../svg/icons/unifiedcontacts_feature_platforms.svg',
        alt: 'Platforms'
      },
      list: ['Teams Desktop Client', 'Teams Web App', 'Teams Mobile App']
    }, {
      title: 'ISO 27001',
      image: {
        src: '../svg/icons/unifiedcontacts_feature_certificates.svg',
        alt: 'ISO 27001'
      },
      list: ['Our development and operations teams are certified', '<a href="https://www.datenschutz-cert.de/uploads/tx_dsnordreferenzen/glueckkanja_ISO27001_Urkunde_20211203_digital.pdf">ISO 27001 Certificate</a>']
    }]
  }
}`,...(w=(O=m.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var z,I,D;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    image: {
      alt: 'lorem ipsum dolor sit amet',
      lottie: lottie1
    },
    headline: 'Specifications',
    headlineRowClasses: 'text-left',
    features: [{
      title: 'Contact Sources',
      image: {
        src: '../svg/icons/unifiedcontacts_feature_contactsources.svg',
        alt: 'Contact Sources'
      },
      list: ['Azure AD Users', 'Azure AD Contacts (coming soon)', 'Personal Exchange Online Contacts']
    }, {
      title: 'Contact Card',
      image: {
        src: '../svg/icons/unifiedcontacts_feature_contactcards.svg',
        alt: 'Contact Card'
      },
      list: ['Place PSTN calls', 'Place Teams calls', 'Write email', 'Start Teams chat', 'Get presence status']
    }, {
      title: 'Platforms',
      image: {
        src: '../svg/icons/unifiedcontacts_feature_platforms.svg',
        alt: 'Platforms'
      },
      list: ['Teams Desktop Client', 'Teams Web App', 'Teams Mobile App']
    }, {
      title: 'ISO 27001',
      image: {
        src: '../svg/icons/unifiedcontacts_feature_certificates.svg',
        alt: 'ISO 27001'
      },
      list: ['Our development and operations teams are certified', '<a href="https://www.datenschutz-cert.de/uploads/tx_dsnordreferenzen/glueckkanja_ISO27001_Urkunde_20211203_digital.pdf">ISO 27001 Certificate</a>']
    }]
  }
}`,...(D=(I=u.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};const Ae=["Default","WithImageAndH4FontSize","Centered","WithAnimation"];export{m as Centered,l as Default,u as WithAnimation,d as WithImageAndH4FontSize,Ae as __namedExportsOrder,be as default};
