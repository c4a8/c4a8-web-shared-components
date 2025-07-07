import{_ as W}from"./BfxxziY9.js";import{_ as C}from"./rigcSH9g.js";import{_ as I}from"./B-YuWX5T.js";import{S as L}from"./BFpn3PQE.js";import{U as j}from"./GkLlHyI4.js";import{_ as N,c as i,a as p,b as o,d as a,F as V,r as J,f as v,n as t,o as s}from"./Dh7ZAFHk.js";import"./DjHNF5Y7.js";const B={tagName:"icon-blocks",props:{iconBlocks:{type:Object,required:!0},level:{type:String,default:"h3"},classes:{type:String,default:"font-size-3 bold"},columns:{type:[Boolean,Number],default:!1},headline:{type:String,default:null},sticky:{type:Boolean,default:!1},spacing:{type:String,default:""}},computed:{columnClass(){if(this.columns){const m=12/this.columns,e=`col-md-${m}`;return m%2===0?`col-6 ${e}`:e}return"col-md-4"}},mounted(){this.sticky&&L.init([this.$el]),j.init([this.$el])}},R={class:"container space-2"},H={key:0,class:"row mt-5 mb-8 px-lg-3 fade-in-bottom","data-utility-animation-step":"1"},F={class:"col"},q={class:"row"},U=["innerHTML"],G={key:1,class:"row justify-content-center mt-8"};function K(d,m,e,S,X,z){const f=W,x=C,T=I;return e.iconBlocks?(s(),i("div",{key:0,class:t(["icon-blocks","utility-animation",e.spacing,"container-fluid",{"is-sticky-scroller":e.sticky}]),style:v({backgroundColor:e.iconBlocks.bgColor})},[o("div",R,[e.headline?(s(),i("div",H,[o("div",F,[a(f,{text:e.headline,level:e.level},null,8,["text","level"])])])):p("",!0),o("div",q,[(s(!0),i(V,null,J(e.iconBlocks.items,(n,u)=>(s(),i("div",{key:u,class:t([z.columnClass,"mb-5","mb-md-8","fade-in-bottom"]),"data-utility-animation-step":"1",style:v({"--utility-animation-index":u+1})},[o("div",{class:t(["px-lg-3",{"text-center":n.copy===""}])},[o("figure",{class:t(["max-w-15rem","mb-4",{"mx-auto":n.copy===""}])},[a(x,{img:n.image,cloudinary:n.cloudinary,alt:e.iconBlocks.alt},null,8,["img","cloudinary","alt"])],2),a(f,{text:n.headline,level:e.level,classes:e.classes},null,8,["text","level","classes"]),o("div",{innerHTML:n.copy},null,8,U)],2)],6))),128))]),e.iconBlocks.cta?(s(),i("div",G,[a(T,{text:e.iconBlocks.cta.text,href:e.iconBlocks.cta.href,skin:e.iconBlocks.cta.skin,button:e.iconBlocks.cta.button},null,8,["text","href","skin","button"])])):p("",!0)])],6)):p("",!0)}const Q=N(B,[["render",K]]);B.__docgenInfo={exportName:"default",displayName:"icon-blocks",description:"",tags:{},props:[{name:"iconBlocks",type:{name:"object"},required:!0},{name:"level",type:{name:"string"},defaultValue:{func:!1,value:"'h3'"}},{name:"classes",type:{name:"string"},defaultValue:{func:!1,value:"'font-size-3 bold'"}},{name:"columns",type:{name:"boolean|number"},defaultValue:{func:!1,value:"false"}},{name:"headline",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"sticky",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"spacing",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/icon-blocks.vue"]};const se={title:"Components/Icon Blocks",component:Q,decorators:[d=>({components:{story:d},template:`
        <div>
          <story />
          <div style="height: 200vh;" class="dummy-content"></div>
        </div>
      `})]},r={args:{iconBlocks:{items:[{image:"../svg/logos/logo-windows10.svg",alt:"Windows 10",headline:"Windows 10",copy:""},{image:"../svg/icons-large/icon-azure-ad.svg",alt:"Azure Active Directory",headline:"Azure Active Directory",copy:""},{image:"../svg/icons-large/icon-msft-defender-for-endpoint-org.svg",alt:"Microsoft Defender for Endpoint",headline:"Microsoft Defender<br />for Endpoint",copy:""},{image:"../svg/icons-large/icon-endpoint-manager.svg",alt:"Endpoint gk-SecOfferingMDATPOnePager",headline:"Endpoint Manager",copy:""},{image:"../svg/icons-large/icon-m365-apps.svg",alt:"Endpoint gk-SecOfferingMDATPOnePager",headline:"Microsoft 365 Apps<br />for Enterprise",copy:""},{image:"../svg/icons-large/icon-realmjoin.svg",alt:"Endpoint gk-SecOfferingMDATPOnePager",headline:"RealmJoin",copy:""}]}}},c={args:{columns:4,classes:"h3-font-size",iconBlocks:{cta:{text:"Button",href:"javascript:void(0)",skin:"primary",button:!0},items:[{image:"../svg/logos/logo-windows10.svg",alt:"Windows 10",headline:"Windows 10",copy:""},{image:"../svg/icons-large/icon-azure-ad.svg",alt:"Azure Active Directory",headline:"Azure Active Directory",copy:""},{image:"../svg/icons-large/icon-msft-defender-for-endpoint-org.svg",alt:"Microsoft Defender for Endpoint",headline:"Microsoft Defender<br />for Endpoint",copy:""},{image:"../svg/icons-large/icon-endpoint-manager.svg",alt:"Endpoint gk-SecOfferingMDATPOnePager",headline:"Endpoint Manager",copy:""},{image:"../svg/icons-large/icon-m365-apps.svg",alt:"Endpoint gk-SecOfferingMDATPOnePager",headline:"Microsoft 365 Apps<br />for Enterprise",copy:""},{image:"../svg/icons-large/icon-realmjoin.svg",alt:"Endpoint gk-SecOfferingMDATPOnePager",headline:"RealmJoin",copy:""}]}}},l={args:{columns:4,classes:"font-size-1 bold",sticky:!0,iconBlocks:{items:[{image:"../svg/logos/logo-windows10.svg",alt:"Windows 10",headline:"Windows 10",copy:""},{image:"../svg/icons-large/icon-azure-ad.svg",alt:"Azure Active Directory",headline:"Azure Active Directory",copy:""},{image:"../svg/icons-large/icon-msft-defender-for-endpoint-org.svg",alt:"Microsoft Defender for Endpoint",headline:"Microsoft Defender<br />for Endpoint",copy:""},{image:"../svg/icons-large/icon-endpoint-manager.svg",alt:"Endpoint gk-SecOfferingMDATPOnePager",headline:"Endpoint Manager",copy:""},{image:"../svg/icons-large/icon-m365-apps.svg",alt:"Endpoint gk-SecOfferingMDATPOnePager",headline:"Microsoft 365 Apps<br />for Enterprise",copy:""},{image:"../svg/icons-large/icon-realmjoin.svg",alt:"Endpoint gk-SecOfferingMDATPOnePager",headline:"RealmJoin",copy:""}]}}},g={args:{iconBlocks:{items:[{image:"../svg/logos/logo-windows10.svg",alt:"Windows 10",headline:"Windows 10",copy:`
            <ul class="dashed">
              <li>Lorem Ipsum </li>
              <li>Lorem Ipsum </li>
              <li>Lorem Ipsum </li>
            </ul>
          `},{image:"../svg/logos/logo-windows10.svg",alt:"Windows 11",headline:"Windows 11",copy:`
            <ul class="dashed">
              <li>Lorem Ipsum </li>
              <li>Lorem Ipsum </li>
              <li>Lorem Ipsum </li>
            </ul>
          `}]}}};var y,h,k;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    iconBlocks: {
      items: [{
        image: '../svg/logos/logo-windows10.svg',
        alt: 'Windows 10',
        headline: 'Windows 10',
        copy: ''
      }, {
        image: '../svg/icons-large/icon-azure-ad.svg',
        alt: 'Azure Active Directory',
        headline: 'Azure Active Directory',
        copy: ''
      }, {
        image: '../svg/icons-large/icon-msft-defender-for-endpoint-org.svg',
        alt: 'Microsoft Defender for Endpoint',
        headline: 'Microsoft Defender<br />for Endpoint',
        copy: ''
      }, {
        image: '../svg/icons-large/icon-endpoint-manager.svg',
        alt: 'Endpoint gk-SecOfferingMDATPOnePager',
        headline: 'Endpoint Manager',
        copy: ''
      }, {
        image: '../svg/icons-large/icon-m365-apps.svg',
        alt: 'Endpoint gk-SecOfferingMDATPOnePager',
        headline: 'Microsoft 365 Apps<br />for Enterprise',
        copy: ''
      }, {
        image: '../svg/icons-large/icon-realmjoin.svg',
        alt: 'Endpoint gk-SecOfferingMDATPOnePager',
        headline: 'RealmJoin',
        copy: ''
      }]
    }
  }
}`,...(k=(h=r.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var A,w,_;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    columns: 4,
    classes: 'h3-font-size',
    iconBlocks: {
      cta: {
        text: 'Button',
        href: 'javascript:void(0)',
        skin: 'primary',
        button: true
      },
      items: [{
        image: '../svg/logos/logo-windows10.svg',
        alt: 'Windows 10',
        headline: 'Windows 10',
        copy: ''
      }, {
        image: '../svg/icons-large/icon-azure-ad.svg',
        alt: 'Azure Active Directory',
        headline: 'Azure Active Directory',
        copy: ''
      }, {
        image: '../svg/icons-large/icon-msft-defender-for-endpoint-org.svg',
        alt: 'Microsoft Defender for Endpoint',
        headline: 'Microsoft Defender<br />for Endpoint',
        copy: ''
      }, {
        image: '../svg/icons-large/icon-endpoint-manager.svg',
        alt: 'Endpoint gk-SecOfferingMDATPOnePager',
        headline: 'Endpoint Manager',
        copy: ''
      }, {
        image: '../svg/icons-large/icon-m365-apps.svg',
        alt: 'Endpoint gk-SecOfferingMDATPOnePager',
        headline: 'Microsoft 365 Apps<br />for Enterprise',
        copy: ''
      }, {
        image: '../svg/icons-large/icon-realmjoin.svg',
        alt: 'Endpoint gk-SecOfferingMDATPOnePager',
        headline: 'RealmJoin',
        copy: ''
      }]
    }
  }
}`,...(_=(w=c.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var b,D,E;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    columns: 4,
    classes: 'font-size-1 bold',
    sticky: true,
    iconBlocks: {
      items: [{
        image: '../svg/logos/logo-windows10.svg',
        alt: 'Windows 10',
        headline: 'Windows 10',
        copy: ''
      }, {
        image: '../svg/icons-large/icon-azure-ad.svg',
        alt: 'Azure Active Directory',
        headline: 'Azure Active Directory',
        copy: ''
      }, {
        image: '../svg/icons-large/icon-msft-defender-for-endpoint-org.svg',
        alt: 'Microsoft Defender for Endpoint',
        headline: 'Microsoft Defender<br />for Endpoint',
        copy: ''
      }, {
        image: '../svg/icons-large/icon-endpoint-manager.svg',
        alt: 'Endpoint gk-SecOfferingMDATPOnePager',
        headline: 'Endpoint Manager',
        copy: ''
      }, {
        image: '../svg/icons-large/icon-m365-apps.svg',
        alt: 'Endpoint gk-SecOfferingMDATPOnePager',
        headline: 'Microsoft 365 Apps<br />for Enterprise',
        copy: ''
      }, {
        image: '../svg/icons-large/icon-realmjoin.svg',
        alt: 'Endpoint gk-SecOfferingMDATPOnePager',
        headline: 'RealmJoin',
        copy: ''
      }]
    }
  }
}`,...(E=(D=l.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var M,O,P;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    iconBlocks: {
      items: [{
        image: '../svg/logos/logo-windows10.svg',
        alt: 'Windows 10',
        headline: 'Windows 10',
        copy: \`
            <ul class="dashed">
              <li>Lorem Ipsum </li>
              <li>Lorem Ipsum </li>
              <li>Lorem Ipsum </li>
            </ul>
          \`
      }, {
        image: '../svg/logos/logo-windows10.svg',
        alt: 'Windows 11',
        headline: 'Windows 11',
        copy: \`
            <ul class="dashed">
              <li>Lorem Ipsum </li>
              <li>Lorem Ipsum </li>
              <li>Lorem Ipsum </li>
            </ul>
          \`
      }]
    }
  }
}`,...(P=(O=g.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};const ae=["IconBlocks","CustomColumnCount","HeadlineAndSticky","List"];export{c as CustomColumnCount,l as HeadlineAndSticky,r as IconBlocks,g as List,ae as __namedExportsOrder,se as default};
