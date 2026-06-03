import{_ as S}from"./C3YSgGwR.js";import{_ as w}from"./Cqqf1rnI.js";import{_ as E}from"./RLGpvrP9.js";import{_ as H}from"./ClUDrWYc.js";import{_ as z}from"./DS91dpid.js";import{_ as M,c as o,a as r,b as n,d as c,n as m,w as T,m as h,g as B,j as P,k as V,e as v,F as d,r as u,f as L,o as t}from"./411QC_by.js";import"./D8iXS4Xf.js";import"./DOudr2uk.js";let N=0;const k={tagName:"location-section",data(){return{instanceId:++N}},props:{classes:String,overline:String,headline:String,locationHeadline:String,contactHeadline:String,locationEntries:Object,locationCta:Object,contactEntries:Array,landingpageCta:Object,images:Array,backgroundColor:{type:String,default:"var(--color-surface-background)"}},computed:{imgSrcSets(){return{srcSets:[{params:"c_fill,ar_16:10"}]}},classList(){return this.classes?this.classes:"mb-7 pb-11"},sliderConfig(){return{hideContainer:!0,hideBackground:!0,options:{dots:!1,navigation:{enabled:!0,nextEl:`.next-element-${this.instanceId}`,prevEl:`.prev-element-${this.instanceId}`},loop:!0,breakpoints:{320:{slidesPerView:1.5,spaceBetween:10},576:{slidesPerView:1.5,spaceBetween:10},992:{slidesPerView:2.5,spaceBetween:10},1200:{slidesPerView:4,spaceBetween:20}}}}}}},A={key:0,class:"location-section__slider-container d-flex align-items-center justify-content-center"},F={class:"location-section__slider-controls position-absolute d-flex align-items-center justify-content-center col-10 col-xxl-11 mx-auto z-index-2"},I={class:"location-section__slider-image-wrapper"},K={class:"location-section__content container pt-8"},D={class:"row row-cols-2 pb-5"},R={key:0,class:"d-flex align-items-center justify-content-end"},G={class:"d-flex pt-2 row row-cols-3"},J={class:"d-flex flex-column"},q={class:"font-size-1 py-1"},Q={class:"d-flex align-items-start"},U=["innerHTML"],W={class:"d-flex flex-column"},X={class:"font-size-1"},Y={class:"d-flex align-items-start my-n1"},Z=["innerHTML"];function $(ne,g,e,te,p,l){const C=S,j=w,i=E,_=H,f=z;return t(),o("div",{class:m([l.classList,"location-section"]),style:L({backgroundColor:e.backgroundColor})},[e.images&&e.images.length>0?(t(),o("div",A,[n("div",F,[n("div",{class:m(["slick__arrow-left rounded-circle",`prev-element-${p.instanceId}`])},null,2),n("div",{class:m(["slick__arrow-right rounded-circle",`next-element-${p.instanceId}`])},null,2)]),c(j,h(l.sliderConfig,{v2:!0}),{default:T(()=>[(t(!0),o(d,null,u(e.images,(a,O)=>(t(),o("div",I,[(t(),v(C,{key:O,cloudinary:a.cloudinary,img:a.img,imgSrcSets:a.srcSets||l.imgSrcSets,class:"location-section__slider-image"},null,8,["cloudinary","img","imgSrcSets"]))]))),256))]),_:1},16)])):r("",!0),n("div",K,[n("div",D,[n("div",null,[c(i,{level:"h5",text:e.overline},null,8,["text"]),g[0]||(g[0]=B()),c(i,{level:"h3",text:e.headline},null,8,["text"])]),e.landingpageCta?(t(),o("div",R,[c(_,P(V(e.landingpageCta)),null,16)])):r("",!0)]),n("div",G,[n("div",J,[c(i,{level:"h5",class:"pv-2",text:e.locationHeadline},null,8,["text"]),(t(!0),o(d,null,u(e.locationEntries,a=>(t(),o("div",q,[n("div",Q,[c(f,{icon:a.icon,size:"small",class:"pr-2 pt-1"},null,8,["icon"]),n("p",{innerHTML:a.content},null,8,U)])]))),256)),e.locationCta?(t(),v(_,h({key:0},e.locationCta,{class:e.locationCta.classes?e.locationCta.classes:"d-flex justify-content-end"}),null,16,["class"])):r("",!0)]),n("div",W,[c(i,{level:"h5",class:"pb-2",text:e.contactHeadline},null,8,["text"]),(t(!0),o(d,null,u(e.contactEntries,a=>(t(),o("div",X,[n("div",Y,[c(f,{icon:a.icon,size:"small",class:"pr-2 pt-1"},null,8,["icon"]),n("p",{innerHTML:a.content},null,8,Z)])]))),256))])])])],6)}const ee=M(k,[["render",$]]);k.__docgenInfo={exportName:"default",displayName:"location-section",description:"",tags:{},props:[{name:"classes",type:{name:"string"}},{name:"overline",type:{name:"string"}},{name:"headline",type:{name:"string"}},{name:"locationHeadline",type:{name:"string"}},{name:"contactHeadline",type:{name:"string"}},{name:"locationEntries",type:{name:"object"}},{name:"locationCta",type:{name:"object"}},{name:"contactEntries",type:{name:"array"}},{name:"landingpageCta",type:{name:"object"}},{name:"images",type:{name:"array"}},{name:"backgroundColor",type:{name:"string"},defaultValue:{func:!1,value:"'var(--color-surface-background)'"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/location-section.vue"]};const de={component:ee,title:"Components/LocationSection"},s={args:{overline:"Hauptsitz",headline:"Offenbach am Main",location:{street:"Kaiserstraße 39",city:"Offenbach am Main",office:"Hauptsitz"},contactHeadline:"Kontakt",contactEntries:[{icon:"phone",content:"+49 69 4005520"},{icon:"email-action-unread",content:"info@glueckkanja.com"}],locationHeadline:"Adresse",locationEntries:[{icon:"pin",content:"Kaiserstraße 39 <br /> 63065 Offenbach am Main"},{icon:"charging-station",content:"E-Tankstellen in der <br /> Tiefgarage verfügbar"}],locationCta:{text:"Anfahrt und Parken",href:"/",link:!0,reversed:!0},landingpageCta:{text:"Mehr erfahren",href:"/"},images:[{img:"https://res.cloudinary.com/c4a8/image/upload/v1756124382/company/locations/Offenbach/gk-Commodore.jpg"},{img:"https://res.cloudinary.com/c4a8/image/upload/v1756124378/company/locations/Offenbach/_JR_8457.jpg"},{img:"https://res.cloudinary.com/c4a8/image/upload/v1756124376/company/locations/Offenbach/gk-OG.jpg"},{img:"https://res.cloudinary.com/c4a8/image/upload/v1756124376/company/locations/Offenbach/gk-Treppe.jpg"},{img:"https://res.cloudinary.com/c4a8/image/upload/v1756124374/company/locations/Offenbach/gk-Empfang-03.jpg"}]}};var y,x,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const ue=["Default"];export{s as Default,ue as __namedExportsOrder,de as default};
