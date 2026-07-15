import{_ as S}from"./CMMbC4Xx.js";import{_ as E}from"./D2sdp5ph.js";import{_ as H}from"./FYwJFbgo.js";import{_ as z}from"./DAYBPgHH.js";import{_ as M}from"./DNg53hn7.js";import{_ as T,c as o,a as d,b as n,d as i,n as g,w as B,m as y,e as v,g as P,j as V,k as I,F as p,r as u,f as L,o as t}from"./D06yWl8D.js";import"./CC0_HOOp.js";import"./uUyQqtaz.js";let N=0;const C={tagName:"location-section",data(){return{instanceId:++N}},props:{classes:String,overline:String,headline:String,locationHeadline:String,contactHeadline:String,locationEntries:Object,locationCta:Object,contactEntries:Array,landingpageCta:Object,images:Array,backgroundColor:{type:String,default:"transparent"}},computed:{imgSrcSets(){return{srcSets:[{params:"c_fill,ar_16:10"}]}},classList(){return this.classes?this.classes:"mb-5 pb-11"},sliderImages(){if(!this.images||this.images.length===0)return[];const m=8;if(this.images.length>=m)return this.images;const s=[];for(;s.length<m;)s.push(...this.images);return s},sliderConfig(){return{hideContainer:!0,hideBackground:!0,options:{dots:!1,navigation:{enabled:!0,nextEl:`.next-element-${this.instanceId}`,prevEl:`.prev-element-${this.instanceId}`},loop:!0,breakpoints:{320:{slidesPerView:1.5,spaceBetween:10},576:{slidesPerView:1.5,spaceBetween:10},992:{slidesPerView:2.5,spaceBetween:10},1200:{slidesPerView:4,spaceBetween:20}}}}}}},A={key:0,class:"location-section__slider-container d-flex align-items-center justify-content-center"},F={class:"location-section__slider-controls position-absolute d-flex align-items-center justify-content-center col-10 col-xxl-11 mx-auto z-index-2"},K={class:"location-section__slider-image-wrapper"},D={class:"location-section__content container pt-lg-8 pt-5 pl-lg-0 pr-lg-0 pl-7 pr-7"},R={class:"row pb-5 d-flex justify-content-between"},G={key:0,class:"d-flex align-items-center"},J={class:"d-flex pt-2 row row-cols-lg-3 row-cols-1"},q={class:"d-flex flex-column"},Q={class:"font-size-1 py-1"},U={class:"d-flex align-items-start"},W=["innerHTML"],X={class:"d-flex flex-column"},Y={class:"font-size-1"},Z={class:"d-flex align-items-start my-n1"},$=["innerHTML"];function ee(m,s,e,te,_,c){const w=S,j=E,r=H,f=z,h=M;return t(),o("div",{class:g([c.classList,"location-section"]),style:L({backgroundColor:e.backgroundColor})},[e.images&&e.images.length>0?(t(),o("div",A,[n("div",F,[n("div",{class:g(["slick__arrow-left rounded-circle",`prev-element-${_.instanceId}`])},null,2),n("div",{class:g(["slick__arrow-right rounded-circle",`next-element-${_.instanceId}`])},null,2)]),i(j,y(c.sliderConfig,{v2:!0}),{default:B(()=>[(t(!0),o(p,null,u(c.sliderImages,(a,O)=>(t(),o("div",K,[(t(),v(w,{key:O,cloudinary:a.cloudinary,img:a.img,imgSrcSets:a.srcSets||c.imgSrcSets,class:"location-section__slider-image"},null,8,["cloudinary","img","imgSrcSets"]))]))),256))]),_:1},16)])):d("",!0),n("div",D,[n("div",R,[n("div",null,[i(r,{level:"h5",text:e.overline},null,8,["text"]),s[0]||(s[0]=P()),i(r,{level:"h3",text:e.headline},null,8,["text"])]),e.landingpageCta?(t(),o("div",G,[i(f,V(I(e.landingpageCta)),null,16)])):d("",!0)]),n("div",J,[n("div",q,[i(r,{level:"h5",class:"pv-2",text:e.locationHeadline},null,8,["text"]),(t(!0),o(p,null,u(e.locationEntries,a=>(t(),o("div",Q,[n("div",U,[i(h,{icon:a.icon,size:"small",class:"pr-2 pt-1"},null,8,["icon"]),n("p",{innerHTML:a.content},null,8,W)])]))),256))]),n("div",X,[i(r,{level:"h5",class:"pb-2",text:e.contactHeadline},null,8,["text"]),(t(!0),o(p,null,u(e.contactEntries,a=>(t(),o("div",Y,[n("div",Z,[i(h,{icon:a.icon,size:"small",class:"pr-2 pt-1"},null,8,["icon"]),n("p",{innerHTML:a.content},null,8,$)])]))),256))])]),e.locationCta?(t(),v(f,y({key:0},e.locationCta,{class:"pt-3 pt-lg-0 row"}),null,16)):d("",!0)])],6)}const ne=T(C,[["render",ee]]);C.__docgenInfo={exportName:"default",displayName:"location-section",description:"",tags:{},props:[{name:"classes",type:{name:"string"}},{name:"overline",type:{name:"string"}},{name:"headline",type:{name:"string"}},{name:"locationHeadline",type:{name:"string"}},{name:"contactHeadline",type:{name:"string"}},{name:"locationEntries",type:{name:"object"}},{name:"locationCta",type:{name:"object"}},{name:"contactEntries",type:{name:"array"}},{name:"landingpageCta",type:{name:"object"}},{name:"images",type:{name:"array"}},{name:"backgroundColor",type:{name:"string"},defaultValue:{func:!1,value:"'transparent'"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/location-section.vue"]};const de={component:ne,title:"Components/LocationSection"},l={args:{overline:"Hauptsitz",headline:"Offenbach am Main",location:{street:"Kaiserstraße 39",city:"Offenbach am Main",office:"Hauptsitz"},contactHeadline:"Kontakt",contactEntries:[{icon:"phone",content:"+49 69 4005520"},{icon:"email-action-unread",content:"info@glueckkanja.com"}],locationHeadline:"Adresse",locationEntries:[{icon:"pin",content:"Kaiserstraße 39 <br /> 63065 Offenbach am Main"},{icon:"charging-station",content:"E-Tankstellen in der <br /> Tiefgarage verfügbar"}],locationCta:{text:"Anfahrt und Parken",href:"/",link:!0,reversed:!0},landingpageCta:{text:"Mehr erfahren",href:"/"},images:[{img:"https://res.cloudinary.com/c4a8/image/upload/v1756124382/company/locations/Offenbach/gk-Commodore.jpg"},{img:"https://res.cloudinary.com/c4a8/image/upload/v1756124378/company/locations/Offenbach/_JR_8457.jpg"},{img:"https://res.cloudinary.com/c4a8/image/upload/v1756124376/company/locations/Offenbach/gk-OG.jpg"},{img:"https://res.cloudinary.com/c4a8/image/upload/v1756124376/company/locations/Offenbach/gk-Treppe.jpg"},{img:"https://res.cloudinary.com/c4a8/image/upload/v1756124374/company/locations/Offenbach/gk-Empfang-03.jpg"}]}};var x,b,k;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(k=(b=l.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};const ge=["Default"];export{l as Default,ge as __namedExportsOrder,de as default};
