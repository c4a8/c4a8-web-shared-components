import{_ as w}from"./BpztMl_M.js";import{_ as E}from"./-k9YLxK7.js";import{_ as H}from"./Dlmo-TKZ.js";import{_ as z}from"./CLsAdSoR.js";import{_ as M}from"./nmk8Qfx-.js";import{_ as S,c,b as n,d as o,n as l,w as T,m as _,a as h,g as B,j as P,k as V,e as v,F as r,r as d,f as L,o as t}from"./DtdzaNpP.js";import"./CY3T7eBr.js";import"./BT67XrWw.js";let N=0;const k={tagName:"location-section",data(){return{instanceId:++N}},props:{classes:String,overline:String,headline:String,locationHeadline:String,contactHeadline:String,locationEntries:Object,locationCta:Object,contactEntries:Array,landingpageCta:Object,images:Array,backgroundColor:{type:String,default:"var(--color-surface-background)"}},computed:{classList(){return this.classes?this.classes:"mb-7 pb-11"},sliderConfig(){return{hideContainer:!0,hideBackground:!0,options:{dots:!1,navigation:{enabled:!0,nextEl:`.next-element-${this.instanceId}`,prevEl:`.prev-element-${this.instanceId}`},loop:!0,breakpoints:{320:{slidesPerView:1.5,spaceBetween:10},576:{slidesPerView:1.5,spaceBetween:10},992:{slidesPerView:3,spaceBetween:10},1200:{slidesPerView:4,spaceBetween:20}}}}}}},A={class:"location-section__slider-container d-flex align-items-center justify-content-center"},F={class:"location-section__slider-controls position-absolute d-flex align-items-center justify-content-center col-10 col-xxl-11 mx-auto z-index-2"},I={class:"location-section__content container pt-5"},K={class:"row row-cols-2 pb-5"},D={key:0,class:"d-flex align-items-center justify-content-end"},R={class:"d-flex pt-2 row row-cols-3"},G={class:"d-flex flex-column"},J={class:"font-size-1 py-1"},q={class:"d-flex align-items-start"},Q=["innerHTML"],U={class:"d-flex flex-column"},W={class:"font-size-1"},X={class:"d-flex align-items-start my-n1"},Y=["innerHTML"];function Z(ee,m,e,ne,u,p){const C=w,j=E,i=H,g=z,f=M;return t(),c("div",{class:l([p.classList,"location-section"]),style:L({backgroundColor:e.backgroundColor})},[n("div",A,[n("div",F,[n("div",{class:l(["slick__arrow-left rounded-circle",`prev-element-${u.instanceId}`])},null,2),n("div",{class:l(["slick__arrow-right rounded-circle",`next-element-${u.instanceId}`])},null,2)]),o(j,_(p.sliderConfig,{class:"",v2:!0}),{default:T(()=>[(t(!0),c(r,null,d(e.images,(a,O)=>(t(),v(C,{key:O,cloudinary:a.cloudinary,img:a.img},null,8,["cloudinary","img"]))),128))]),_:1},16)]),n("div",I,[n("div",K,[n("div",null,[o(i,{level:"h5",text:e.overline},null,8,["text"]),m[0]||(m[0]=B()),o(i,{level:"h3",text:e.headline},null,8,["text"])]),e.landingpageCta?(t(),c("div",D,[o(g,P(V(e.landingpageCta)),null,16)])):h("",!0)]),n("div",R,[n("div",G,[o(i,{level:"h5",class:"pv-2",text:e.locationHeadline},null,8,["text"]),(t(!0),c(r,null,d(e.locationEntries,a=>(t(),c("div",J,[n("div",q,[o(f,{icon:a.icon,size:"small",class:"pr-2 pt-1"},null,8,["icon"]),n("p",{innerHTML:a.content},null,8,Q)])]))),256)),e.locationCta?(t(),v(g,_({key:0},e.locationCta,{class:e.locationCta.classes?e.locationCta.classes:"d-flex justify-content-end"}),null,16,["class"])):h("",!0)]),n("div",U,[o(i,{level:"h5",class:"pb-2",text:e.contactHeadline},null,8,["text"]),(t(!0),c(r,null,d(e.contactEntries,a=>(t(),c("div",W,[n("div",X,[o(f,{icon:a.icon,size:"small",class:"pr-2 pt-1"},null,8,["icon"]),n("p",{innerHTML:a.content},null,8,Y)])]))),256))])])])],6)}const $=S(k,[["render",Z]]);k.__docgenInfo={exportName:"default",displayName:"location-section",description:"",tags:{},props:[{name:"classes",type:{name:"string"}},{name:"overline",type:{name:"string"}},{name:"headline",type:{name:"string"}},{name:"locationHeadline",type:{name:"string"}},{name:"contactHeadline",type:{name:"string"}},{name:"locationEntries",type:{name:"object"}},{name:"locationCta",type:{name:"object"}},{name:"contactEntries",type:{name:"array"}},{name:"landingpageCta",type:{name:"object"}},{name:"images",type:{name:"array"}},{name:"backgroundColor",type:{name:"string"},defaultValue:{func:!1,value:"'var(--color-surface-background)'"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/location-section.vue"]};const de={component:$,title:"Components/LocationSection"},s={args:{overline:"Hauptsitz",headline:"Offenbach am Main",location:{street:"Kaiserstraße 39",city:"Offenbach am Main",office:"Hauptsitz"},contactHeadline:"Kontakt",contactEntries:[{icon:"phone",content:"+49 69 4005520"},{icon:"email-action-unread",content:"info@glueckkanja.com"}],locationHeadline:"Adresse",locationEntries:[{icon:"pin",content:"Kaiserstraße 39 <br /> 63065 Offenbach am Main"},{icon:"charging-station",content:"E-Tankstellen in der <br /> Tiefgarage verfügbar"}],locationCta:{text:"Anfahrt und Parken",href:"/",link:!0,reversed:!0},landingpageCta:{text:"Mehr erfahren",href:"/"},images:[{img:"https://res.cloudinary.com/c4a8/image/upload/v1756124382/company/locations/Offenbach/gk-Commodore.jpg"},{img:"https://res.cloudinary.com/c4a8/image/upload/v1756124378/company/locations/Offenbach/_JR_8457.jpg"},{img:"https://res.cloudinary.com/c4a8/image/upload/v1756124376/company/locations/Offenbach/gk-OG.jpg"},{img:"https://res.cloudinary.com/c4a8/image/upload/v1756124376/company/locations/Offenbach/gk-Treppe.jpg"},{img:"https://res.cloudinary.com/c4a8/image/upload/v1756124374/company/locations/Offenbach/gk-Empfang-03.jpg"}]}};var y,x,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    overline: 'Hauptsitz',
    headline: 'Offenbach am Main',
    location: {
      street: 'Kaiserstraße 39',
      city: 'Offenbach am Main',
      office: 'Hauptsitz'
    },
    contactHeadline: 'Kontakt',
    contactEntries: [{
      icon: 'phone',
      content: '+49 69 4005520'
    }, {
      icon: 'email-action-unread',
      content: 'info@glueckkanja.com'
    }],
    locationHeadline: 'Adresse',
    locationEntries: [{
      icon: 'pin',
      content: 'Kaiserstraße 39 <br /> 63065 Offenbach am Main'
    }, {
      icon: 'charging-station',
      content: 'E-Tankstellen in der <br /> Tiefgarage verfügbar'
    }],
    locationCta: {
      text: 'Anfahrt und Parken',
      href: "/",
      link: true,
      reversed: true
    },
    landingpageCta: {
      text: 'Mehr erfahren',
      href: '/'
    },
    images: [{
      img: 'https://res.cloudinary.com/c4a8/image/upload/v1756124382/company/locations/Offenbach/gk-Commodore.jpg'
    }, {
      img: 'https://res.cloudinary.com/c4a8/image/upload/v1756124378/company/locations/Offenbach/_JR_8457.jpg'
    }, {
      img: 'https://res.cloudinary.com/c4a8/image/upload/v1756124376/company/locations/Offenbach/gk-OG.jpg'
    }, {
      img: 'https://res.cloudinary.com/c4a8/image/upload/v1756124376/company/locations/Offenbach/gk-Treppe.jpg'
    }, {
      img: 'https://res.cloudinary.com/c4a8/image/upload/v1756124374/company/locations/Offenbach/gk-Empfang-03.jpg'
    }]
  }
}`,...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const me=["Default"];export{s as Default,me as __namedExportsOrder,de as default};
