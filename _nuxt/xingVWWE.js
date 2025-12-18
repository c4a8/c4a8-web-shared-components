import{g as s}from"./esXqDRs6.js";import{_ as X}from"./B3bukUFv.js";import{_ as R}from"./f7cXC5CZ.js";import{_ as Y}from"./BDTth2XY.js";import{_ as Z}from"./D-fIcqtg.js";import{_ as B,c as i,o as n,b as v,a as r,e as S,d as A,F as P,r as k,i as $,j as ee,f as F,n as V,t as te,m as se}from"./C7Ix_DiM.js";import{U as ae}from"./PJUhUj38.js";import{l as ne}from"./_1vLXP-S.js";import"./CsbSeCQ_.js";import"./CGb7orug.js";const q={tagName:"feature-grid-item",computed:{classList(){return["feature-grid__item mb-3 fade-in-bottom",this.classes!==""?this.classes:"",this.centered?"is-centered":"","vue-component"]},style(){return`--utility-animation-index: ${this.index};`},image(){var e;return(e=this.item)==null?void 0:e.image},title(){var e;return(e=this.item)==null?void 0:e.title},headlineLevel(){var e;return(e=this.item)!=null&&e.level?this.item.level:"h3"},headlineClasses(){var a;const e="mb-2",o=(a=this.item)!=null&&a.classes?this.item.classes:"font-size-2 bold";return`${e} ${o}`},description(){var e;return(e=this.item)==null?void 0:e.description},copy(){var e;return(e=this.item)==null?void 0:e.copy},secondCopy(){var e;return(e=this.item)==null?void 0:e.copy_1},list(){var e;return(e=this.item)==null?void 0:e.list},secondList(){var e;return(e=this.item)==null?void 0:e.list_1},ctaClasses(){var a;if(!this.item.cta)return;const e="mt-5",o=((a=this.item)==null?void 0:a.cta.align)==="right"?"d-flex justify-content-end":"";return`${e} ${o}`}},methods:{},props:{classes:String,item:Object,index:Number,centered:Boolean}},ie={class:"bg-white d-flex flex-column h-100 py-5 px-3"},re={key:0,class:"w-100 max-w-10rem mb-5 mx-auto"},ce=["innerHTML"],oe=["innerHTML"],le={key:4,class:"dashed m-0 flex-grow-1",style:{"margin-bottom":"10px !important"}},de=["innerHTML"],me=["innerHTML"],ue={key:6,class:"dashed m-0 flex-grow-1"},ge=["innerHTML"],fe={key:7,class:"ctaClasses"};function pe(e,o,a,K,Q,t){const _=R,h=Y,C=Z;return n(),i("div",{class:V(t.classList),"data-utility-animation-step":"1",style:F(t.style)},[v("div",ie,[t.image?(n(),i("figure",re,[A(_,{img:t.image.src,alt:t.image.alt,cloudinary:t.image.cloudinary},null,8,["img","alt","cloudinary"])])):r("",!0),t.title?(n(),S(h,{key:1,text:t.title,level:t.headlineLevel,classes:t.headlineClasses},null,8,["text","level","classes"])):r("",!0),t.description?(n(),i("p",{key:2,class:"mb-0",innerHTML:t.description},null,8,ce)):r("",!0),t.copy?(n(),i("p",{key:3,class:"mb-0 font-size-sm d-flex",style:{"padding-bottom":"5px"},innerHTML:t.copy},null,8,oe)):r("",!0),t.list?(n(),i("ul",le,[(n(!0),i(P,null,k(t.list,(l,c)=>(n(),i("li",{class:"feature-grid-item__text font-size-sm",innerHTML:l,key:c},null,8,de))),128))])):r("",!0),t.secondCopy?(n(),i("p",{key:5,class:"mb-0 font-size-sm d-flex",style:{"padding-bottom":"5px"},innerHTML:t.secondCopy},null,8,me)):r("",!0),t.secondList?(n(),i("ul",ue,[(n(!0),i(P,null,k(t.secondList,(l,c)=>(n(),i("li",{class:"feature-grid-item__text font-size-sm",innerHTML:l,key:c},null,8,ge))),128))])):r("",!0),a.item.cta?(n(),i("div",fe,[A(C,$(ee(a.item.cta)),null,16)])):r("",!0)])],6)}const _e=B(q,[["render",pe]]);q.__docgenInfo={exportName:"default",displayName:"feature-grid-item",description:"",tags:{},props:[{name:"classes",type:{name:"string"}},{name:"item",type:{name:"object"}},{name:"index",type:{name:"number"}},{name:"centered",type:{name:"boolean"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/feature-grid-item.vue"]};const J={tagName:"feature-grid",props:{backgroundColor:{type:String,default:"var(--color-bg-grey)"},description:String,headline:String,gridSize:{type:Number,default:4},image:Object,features:Array,footer:String,centered:Boolean,headlineClasses:String,headlineLevel:String,headlineRowClasses:String,spacing:{type:String,default:"space-top-2"}},mounted(){this.$refs.root&&ae.init([this.$refs.root])},computed:{columnClass(){return"col-lg-"+12/this.gridSize},headlineRowClassesValue(){return["fade-in-bottom",this.headlineRowClasses?this.headlineRowClasses:null].join(" ")},containerClasses(){return["container",this.spacing]},styleObject(){return{backgroundColor:this.backgroundColor}}}},he={key:1,class:"feature-grid__description w-lg-50 text-center mt-3 mx-auto"},Ce={key:2,class:"feature-grid__figure d-flex mt-8 justify-content-center fade-in-bottom","data-utility-animation-step":"1"},ve={key:3,class:"my-8"},Se={class:"d-flex flex-wrap"},Ae=["innerHTML"];function Pe(e,o,a,K,Q,t){const _=X,h=R,C=_e;return n(),i("div",{class:"feature-grid utility-animation py-7",style:F(t.styleObject),ref:"root"},[v("div",{class:V(t.containerClasses)},[a.headline?(n(),S(_,{key:0,text:a.headline,centered:!0,headlineClasses:a.headlineClasses,classes:t.headlineRowClassesValue,utilityAnimationStep:"1",noContainer:!0,level:a.headlineLevel,spacing:""},null,8,["text","headlineClasses","classes","level"])):r("",!0),a.description?(n(),i("p",he,te(a.description),1)):r("",!0),a.image?(n(),i("figure",Ce,[A(h,se(a.image,{img:a.image.src,class:"somehowhier"}),null,16,["img"])])):r("",!0),a.features?(n(),i("div",ve,[v("div",Se,[(n(!0),i(P,null,k(a.features,(l,c)=>(n(),S(C,{key:c,classes:t.columnClass,index:c+1,item:l,centered:a.centered},null,8,["classes","index","item","centered"]))),128))])])):r("",!0),a.footer?(n(),i("div",{key:4,class:"container pb-6",innerHTML:a.footer},null,8,Ae)):r("",!0)],2)],4)}const ke=B(J,[["render",Pe]]);J.__docgenInfo={exportName:"default",displayName:"feature-grid",description:"",tags:{},props:[{name:"backgroundColor",type:{name:"string"},defaultValue:{func:!1,value:"'var(--color-bg-grey)'"}},{name:"description",type:{name:"string"}},{name:"headline",type:{name:"string"}},{name:"gridSize",type:{name:"number"},defaultValue:{func:!1,value:"4"}},{name:"image",type:{name:"object"}},{name:"features",type:{name:"array"}},{name:"footer",type:{name:"string"}},{name:"centered",type:{name:"boolean"}},{name:"headlineClasses",type:{name:"string"}},{name:"headlineLevel",type:{name:"string"}},{name:"headlineRowClasses",type:{name:"string"}},{name:"spacing",type:{name:"string"},defaultValue:{func:!1,value:"'space-top-2'"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/feature-grid.vue"]};const je={component:ke,argTypes:{centered:{description:"Toggle to center feature Grid",type:"boolean"},spacing:{description:"Adds helper classes for the spacing",control:{type:"text"},type:{summary:"Bootstrap Spacing",detail:"space-bottom-1, space-bottom-2, space-top-1, space-top-2"}}},title:"Components/Feature Grid"},d={args:{headline:"Specifications",features:[{title:"Contact Sources",image:{src:s("svg/icons/unifiedcontacts_feature_contactsources.svg"),alt:"Contact Sources"},list:["Azure AD Users","Azure AD Contacts (coming soon)","Personal Exchange Online Contacts"]},{title:"Contact Card",image:{src:s("svg/icons/unifiedcontacts_feature_contactcards.svg"),alt:"Contact Card"},list:["Place PSTN calls","Place Teams calls","Write email","Start Teams chat","Get presence status"]},{title:"Platforms",image:{src:s("svg/icons/unifiedcontacts_feature_platforms.svg"),alt:"Platforms"},list:["Teams Desktop Client","Teams Web App","Teams Mobile App"]},{title:"ISO 27001",image:{src:s("svg/icons/unifiedcontacts_feature_certificates.svg"),alt:"ISO 27001"},list:["Our development and operations teams are certified",'<a href="https://www.datenschutz-cert.de/uploads/tx_dsnordreferenzen/glueckkanja_ISO27001_Urkunde_20211203_digital.pdf">ISO 27001 Certificate</a>']}]}},m={args:{image:{src:s("img/image-placeholder-1.jpg"),alt:"lorem ipsum dolor sit amet"},headline:"Specifications",headlineClasses:"h4-font-size",features:[{title:"Contact Sources",image:{src:s("svg/icons/unifiedcontacts_feature_contactsources.svg"),alt:"Contact Sources"},list:["Azure AD Users","Azure AD Contacts (coming soon)","Personal Exchange Online Contacts"]},{title:"Contact Card",image:{src:s("svg/icons/unifiedcontacts_feature_contactcards.svg"),alt:"Contact Card"},list:["Place PSTN calls","Place Teams calls","Write email","Start Teams chat","Get presence status"]},{title:"Platforms",image:{src:s("svg/icons/unifiedcontacts_feature_platforms.svg"),alt:"Platforms"},list:["Teams Desktop Client","Teams Web App","Teams Mobile App"]},{title:"ISO 27001",image:{src:s("svg/icons/unifiedcontacts_feature_certificates.svg"),alt:"ISO 27001"},copy:"lorem ipsum dolor sit amet",list:["Our development and operations teams are certified",'<a href="https://www.datenschutz-cert.de/uploads/tx_dsnordreferenzen/glueckkanja_ISO27001_Urkunde_20211203_digital.pdf">ISO 27001 Certificate</a>'],copy_1:"Provide an easy to use web interface for your help desk staff",list_1:["Leverage the power of Intune in your help desk",'Execute important tasks with "just a click"',"Integration of remote support tools and help desk tickets"]}]}},u={args:{centered:!0,headline:"Specifications",features:[{title:"Contact Sources",image:{src:s("svg/icons/unifiedcontacts_feature_contactsources.svg"),alt:"Contact Sources"},list:["Azure AD Users","Azure AD Contacts (coming soon)","Personal Exchange Online Contacts"],cta:{text:"With Button",skin:"primary is-cutoff",href:"javascript:void(0)"}},{title:"Contact Card",image:{src:s("svg/icons/unifiedcontacts_feature_contactcards.svg"),alt:"Contact Card"},list:["Place PSTN calls","Place Teams calls","Write email","Start Teams chat","Get presence status"]},{title:"Platforms",image:{src:s("svg/icons/unifiedcontacts_feature_platforms.svg"),alt:"Platforms"},list:["Teams Desktop Client","Teams Web App","Teams Mobile App"]},{title:"ISO 27001",image:{src:s("svg/icons/unifiedcontacts_feature_certificates.svg"),alt:"ISO 27001"},list:["Our development and operations teams are certified",'<a href="https://www.datenschutz-cert.de/uploads/tx_dsnordreferenzen/glueckkanja_ISO27001_Urkunde_20211203_digital.pdf">ISO 27001 Certificate</a>']}]}},g={args:{image:{alt:"lorem ipsum dolor sit amet",lottie:ne},headline:"Specifications",headlineRowClasses:"text-left",features:[{title:"Contact Sources",image:{src:s("svg/icons/unifiedcontacts_feature_contactsources.svg"),alt:"Contact Sources"},list:["Azure AD Users","Azure AD Contacts (coming soon)","Personal Exchange Online Contacts"]},{title:"Contact Card",image:{src:s("svg/icons/unifiedcontacts_feature_contactcards.svg"),alt:"Contact Card"},list:["Place PSTN calls","Place Teams calls","Write email","Start Teams chat","Get presence status"]},{title:"Platforms",image:{src:s("svg/icons/unifiedcontacts_feature_platforms.svg"),alt:"Platforms"},list:["Teams Desktop Client","Teams Web App","Teams Mobile App"]},{title:"ISO 27001",image:{src:s("svg/icons/unifiedcontacts_feature_certificates.svg"),alt:"ISO 27001"},list:["Our development and operations teams are certified",'<a href="https://www.datenschutz-cert.de/uploads/tx_dsnordreferenzen/glueckkanja_ISO27001_Urkunde_20211203_digital.pdf">ISO 27001 Certificate</a>']}]}},f={args:{image:{imgSrcSets:{srcSets:[{src:"svg/products/desktop.svg",media:"(min-width: 765px) and (orientation:landscape)"},{src:"svg/products/mobile.svg"}]}},headline:"Specifications",headlineRowClasses:"text-left",features:[{title:"Contact Sources",image:{src:s("svg/icons/unifiedcontacts_feature_contactsources.svg"),alt:"Contact Sources"},list:["Azure AD Users","Azure AD Contacts (coming soon)","Personal Exchange Online Contacts"]},{title:"Contact Card",image:{src:s("svg/icons/unifiedcontacts_feature_contactcards.svg"),alt:"Contact Card"},list:["Place PSTN calls","Place Teams calls","Write email","Start Teams chat","Get presence status"]},{title:"Platforms",image:{src:s("svg/icons/unifiedcontacts_feature_platforms.svg"),alt:"Platforms"},list:["Teams Desktop Client","Teams Web App","Teams Mobile App"]},{title:"ISO 27001",image:{src:s("svg/icons/unifiedcontacts_feature_certificates.svg"),alt:"ISO 27001"},list:["Our development and operations teams are certified",'<a href="https://www.datenschutz-cert.de/uploads/tx_dsnordreferenzen/glueckkanja_ISO27001_Urkunde_20211203_digital.pdf">ISO 27001 Certificate</a>']}]}},p={args:{image:{src:"svg/products/desktop.svg"},headline:"Specifications",headlineRowClasses:"text-left",features:[{title:"Contact Sources",image:{src:s("svg/icons/unifiedcontacts_feature_contactsources.svg"),alt:"Contact Sources"},list:["Azure AD Users","Azure AD Contacts (coming soon)","Personal Exchange Online Contacts"]},{title:"Contact Card",image:{src:s("svg/icons/unifiedcontacts_feature_contactcards.svg"),alt:"Contact Card"},list:["Place PSTN calls","Place Teams calls","Write email","Start Teams chat","Get presence status"]},{title:"Platforms",image:{src:s("svg/icons/unifiedcontacts_feature_platforms.svg"),alt:"Platforms"},list:["Teams Desktop Client","Teams Web App","Teams Mobile App"]},{title:"ISO 27001",image:{src:s("svg/icons/unifiedcontacts_feature_certificates.svg"),alt:"ISO 27001"},list:["Our development and operations teams are certified",'<a href="https://www.datenschutz-cert.de/uploads/tx_dsnordreferenzen/glueckkanja_ISO27001_Urkunde_20211203_digital.pdf">ISO 27001 Certificate</a>']}]}};var y,T,x;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    headline: 'Specifications',
    features: [{
      title: 'Contact Sources',
      image: {
        src: getAssetPath('svg/icons/unifiedcontacts_feature_contactsources.svg'),
        alt: 'Contact Sources'
      },
      list: ['Azure AD Users', 'Azure AD Contacts (coming soon)', 'Personal Exchange Online Contacts']
    }, {
      title: 'Contact Card',
      image: {
        src: getAssetPath('svg/icons/unifiedcontacts_feature_contactcards.svg'),
        alt: 'Contact Card'
      },
      list: ['Place PSTN calls', 'Place Teams calls', 'Write email', 'Start Teams chat', 'Get presence status']
    }, {
      title: 'Platforms',
      image: {
        src: getAssetPath('svg/icons/unifiedcontacts_feature_platforms.svg'),
        alt: 'Platforms'
      },
      list: ['Teams Desktop Client', 'Teams Web App', 'Teams Mobile App']
    }, {
      title: 'ISO 27001',
      image: {
        src: getAssetPath('svg/icons/unifiedcontacts_feature_certificates.svg'),
        alt: 'ISO 27001'
      },
      list: ['Our development and operations teams are certified', '<a href="https://www.datenschutz-cert.de/uploads/tx_dsnordreferenzen/glueckkanja_ISO27001_Urkunde_20211203_digital.pdf">ISO 27001 Certificate</a>']
    }]
  }
}`,...(x=(T=d.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var O,b,w;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
        src: getAssetPath('svg/icons/unifiedcontacts_feature_contactsources.svg'),
        alt: 'Contact Sources'
      },
      list: ['Azure AD Users', 'Azure AD Contacts (coming soon)', 'Personal Exchange Online Contacts']
    }, {
      title: 'Contact Card',
      image: {
        src: getAssetPath('svg/icons/unifiedcontacts_feature_contactcards.svg'),
        alt: 'Contact Card'
      },
      list: ['Place PSTN calls', 'Place Teams calls', 'Write email', 'Start Teams chat', 'Get presence status']
    }, {
      title: 'Platforms',
      image: {
        src: getAssetPath('svg/icons/unifiedcontacts_feature_platforms.svg'),
        alt: 'Platforms'
      },
      list: ['Teams Desktop Client', 'Teams Web App', 'Teams Mobile App']
    }, {
      title: 'ISO 27001',
      image: {
        src: getAssetPath('svg/icons/unifiedcontacts_feature_certificates.svg'),
        alt: 'ISO 27001'
      },
      copy: 'lorem ipsum dolor sit amet',
      list: ['Our development and operations teams are certified', '<a href="https://www.datenschutz-cert.de/uploads/tx_dsnordreferenzen/glueckkanja_ISO27001_Urkunde_20211203_digital.pdf">ISO 27001 Certificate</a>'],
      copy_1: 'Provide an easy to use web interface for your help desk staff',
      list_1: ['Leverage the power of Intune in your help desk', 'Execute important tasks with "just a click"', 'Integration of remote support tools and help desk tickets']
    }]
  }
}`,...(w=(b=m.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var z,I,D;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    centered: true,
    headline: 'Specifications',
    features: [{
      title: 'Contact Sources',
      image: {
        src: getAssetPath('svg/icons/unifiedcontacts_feature_contactsources.svg'),
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
        src: getAssetPath('svg/icons/unifiedcontacts_feature_contactcards.svg'),
        alt: 'Contact Card'
      },
      list: ['Place PSTN calls', 'Place Teams calls', 'Write email', 'Start Teams chat', 'Get presence status']
    }, {
      title: 'Platforms',
      image: {
        src: getAssetPath('svg/icons/unifiedcontacts_feature_platforms.svg'),
        alt: 'Platforms'
      },
      list: ['Teams Desktop Client', 'Teams Web App', 'Teams Mobile App']
    }, {
      title: 'ISO 27001',
      image: {
        src: getAssetPath('svg/icons/unifiedcontacts_feature_certificates.svg'),
        alt: 'ISO 27001'
      },
      list: ['Our development and operations teams are certified', '<a href="https://www.datenschutz-cert.de/uploads/tx_dsnordreferenzen/glueckkanja_ISO27001_Urkunde_20211203_digital.pdf">ISO 27001 Certificate</a>']
    }]
  }
}`,...(D=(I=u.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var W,j,U;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
        src: getAssetPath('svg/icons/unifiedcontacts_feature_contactsources.svg'),
        alt: 'Contact Sources'
      },
      list: ['Azure AD Users', 'Azure AD Contacts (coming soon)', 'Personal Exchange Online Contacts']
    }, {
      title: 'Contact Card',
      image: {
        src: getAssetPath('svg/icons/unifiedcontacts_feature_contactcards.svg'),
        alt: 'Contact Card'
      },
      list: ['Place PSTN calls', 'Place Teams calls', 'Write email', 'Start Teams chat', 'Get presence status']
    }, {
      title: 'Platforms',
      image: {
        src: getAssetPath('svg/icons/unifiedcontacts_feature_platforms.svg'),
        alt: 'Platforms'
      },
      list: ['Teams Desktop Client', 'Teams Web App', 'Teams Mobile App']
    }, {
      title: 'ISO 27001',
      image: {
        src: getAssetPath('svg/icons/unifiedcontacts_feature_certificates.svg'),
        alt: 'ISO 27001'
      },
      list: ['Our development and operations teams are certified', '<a href="https://www.datenschutz-cert.de/uploads/tx_dsnordreferenzen/glueckkanja_ISO27001_Urkunde_20211203_digital.pdf">ISO 27001 Certificate</a>']
    }]
  }
}`,...(U=(j=g.parameters)==null?void 0:j.docs)==null?void 0:U.source}}};var L,N,M;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    image: {
      imgSrcSets: {
        srcSets: [{
          src: 'svg/products/desktop.svg',
          media: '(min-width: 765px) and (orientation:landscape)'
        }, {
          src: 'svg/products/mobile.svg'
        }]
      }
    },
    headline: 'Specifications',
    headlineRowClasses: 'text-left',
    features: [{
      title: 'Contact Sources',
      image: {
        src: getAssetPath('svg/icons/unifiedcontacts_feature_contactsources.svg'),
        alt: 'Contact Sources'
      },
      list: ['Azure AD Users', 'Azure AD Contacts (coming soon)', 'Personal Exchange Online Contacts']
    }, {
      title: 'Contact Card',
      image: {
        src: getAssetPath('svg/icons/unifiedcontacts_feature_contactcards.svg'),
        alt: 'Contact Card'
      },
      list: ['Place PSTN calls', 'Place Teams calls', 'Write email', 'Start Teams chat', 'Get presence status']
    }, {
      title: 'Platforms',
      image: {
        src: getAssetPath('svg/icons/unifiedcontacts_feature_platforms.svg'),
        alt: 'Platforms'
      },
      list: ['Teams Desktop Client', 'Teams Web App', 'Teams Mobile App']
    }, {
      title: 'ISO 27001',
      image: {
        src: getAssetPath('svg/icons/unifiedcontacts_feature_certificates.svg'),
        alt: 'ISO 27001'
      },
      list: ['Our development and operations teams are certified', '<a href="https://www.datenschutz-cert.de/uploads/tx_dsnordreferenzen/glueckkanja_ISO27001_Urkunde_20211203_digital.pdf">ISO 27001 Certificate</a>']
    }]
  }
}`,...(M=(N=f.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var E,G,H;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    image: {
      src: 'svg/products/desktop.svg'
    },
    headline: 'Specifications',
    headlineRowClasses: 'text-left',
    features: [{
      title: 'Contact Sources',
      image: {
        src: getAssetPath('svg/icons/unifiedcontacts_feature_contactsources.svg'),
        alt: 'Contact Sources'
      },
      list: ['Azure AD Users', 'Azure AD Contacts (coming soon)', 'Personal Exchange Online Contacts']
    }, {
      title: 'Contact Card',
      image: {
        src: getAssetPath('svg/icons/unifiedcontacts_feature_contactcards.svg'),
        alt: 'Contact Card'
      },
      list: ['Place PSTN calls', 'Place Teams calls', 'Write email', 'Start Teams chat', 'Get presence status']
    }, {
      title: 'Platforms',
      image: {
        src: getAssetPath('svg/icons/unifiedcontacts_feature_platforms.svg'),
        alt: 'Platforms'
      },
      list: ['Teams Desktop Client', 'Teams Web App', 'Teams Mobile App']
    }, {
      title: 'ISO 27001',
      image: {
        src: getAssetPath('svg/icons/unifiedcontacts_feature_certificates.svg'),
        alt: 'ISO 27001'
      },
      list: ['Our development and operations teams are certified', '<a href="https://www.datenschutz-cert.de/uploads/tx_dsnordreferenzen/glueckkanja_ISO27001_Urkunde_20211203_digital.pdf">ISO 27001 Certificate</a>']
    }]
  }
}`,...(H=(G=p.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const Ue=["Default","WithImageAndH4FontSize","Centered","WithAnimation","WithImgSrcSet","WithNoHeight"];export{u as Centered,d as Default,g as WithAnimation,m as WithImageAndH4FontSize,f as WithImgSrcSet,p as WithNoHeight,Ue as __namedExportsOrder,je as default};
