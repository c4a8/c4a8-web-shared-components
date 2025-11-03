import{_}from"./BVlzOcJV.js";import{T as y}from"./CEmaPbtH.js";import{_ as C}from"./DU-7d33D.js";import{_ as k,c as a,e as w,a as l,b as T,w as j,t as s,F as S,r as M,d as u,n as m,T as c,o as n,g as z,m as L}from"./DMRI4M43.js";import"./DZPO-HCX.js";import"./DCrPD754.js";import"./COarLoei.js";import"./B4CZ-dqu.js";import"./sgoF-Q-D.js";import"./DHYSfBUw.js";import"./DsDL2EhU.js";const b={tagName:"testimonial-grid",props:{spacing:{type:String,default:"space-top-2 space-bottom-2"},headline:{type:String,default:null},headlineLevel:{type:Number,default:2},subline:{type:String,default:null},contents:{type:Array,required:!0},bgColor:{type:String,default:null},bgColorHover:{type:String,default:null},cta:{type:Object,default:()=>({text:null,toggleText:null,href:null})},limit:{type:Number,default:4},maxLimit:{type:Number,default:10},gridSize:{type:Number,default:2}},data(){return{toggleLimitValue:this.limit,limitValue:this.limit,lang:c.getLang(),isMobile:c.isBelowBreakpoint("md")}},mounted(){this.isMobile&&(this.limitValue=3,this.toggleLimitValue=this.limitValue);const o={en:{text:"Show more",toggleText:"Show less"},de:{text:"Mehr anzeigen",toggleText:"Weniger anzeigen"},es:{text:"Mostrar más",toggleText:"Mostrar menos"}},r=o[this.lang]||o.en;this.cta.text==null&&(this.cta.text=r.text),this.cta.toggleText==null&&(this.cta.toggleText=r.toggleText)},computed:{containerClasses(){return[this.spacing]},columnClass(){return"col-lg-"+12/this.gridSize},toggleCtaText(){return this.toggleLimitValue===this.limitValue?this.cta.text:this.cta.toggleText},slicedContents(){return this.contents.slice(0,this.toggleLimitValue)},showCta(){return this.contents.length>this.limitValue}},methods:{toggleLimit(){this.toggleLimitValue=this.toggleLimitValue===this.limitValue?this.maxLimit:this.limitValue}}},I={key:1,class:"testimonial-grid__subline"},H={class:"row"},F={key:2,class:"testimonial-grid__cta d-flex justify-content-center mx-auto"};function N(o,r,e,U,D,t){const p=_,f=y,v=C;return n(),a("section",{class:m([t.containerClasses,"col-lg-8 row-mt-4 mx-auto justify-content-center container"])},[e.headline?(n(),w(p,{key:0,level:"h"+e.headlineLevel,class:"space-bottom-1"},{default:j(()=>[z(s(e.headline),1)]),_:1},8,["level"])):l("",!0),e.subline?(n(),a("div",I,s(e.subline),1)):l("",!0),T("div",H,[e.contents?(n(!0),a(S,{key:0},M(t.slicedContents,(x,V)=>(n(),a("div",{key:V,class:m([t.columnClass,"testimonial-grid__content-block"])},[u(f,L({ref_for:!0},x),null,16)],2))),128)):l("",!0)]),t.showCta?(n(),a("div",F,[u(v,{text:t.toggleCtaText,skin:e.cta.skin,monochrome:e.cta.monochrome,onClick:t.toggleLimit},null,8,["text","skin","monochrome","onClick"])])):l("",!0)],2)}const K=k(b,[["render",N]]);b.__docgenInfo={exportName:"default",displayName:"testimonial-grid",description:"",tags:{},props:[{name:"spacing",type:{name:"string"},defaultValue:{func:!1,value:'"space-top-2 space-bottom-2"'}},{name:"headline",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"headlineLevel",type:{name:"number"},defaultValue:{func:!1,value:"2"}},{name:"subline",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"contents",type:{name:"array"},required:!0},{name:"bgColor",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"bgColorHover",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"cta",type:{name:"object"},defaultValue:{func:!1,value:`{
  text: null,
  toggleText: null,
  href: null
}`}},{name:"limit",type:{name:"number"},defaultValue:{func:!1,value:"4"}},{name:"maxLimit",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"gridSize",type:{name:"number"},defaultValue:{func:!1,value:"2"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/testimonial-grid.vue"]};const X={title:"Components/TestimonialGrid",component:K,argTypes:{}},i={args:{headline:"Menschen bei glueckkanja",subline:'In unserer Reihe "Inside glueckkanja" stellen sich Mitarbeitende vor und gewähren spannende Einblicke in ihre Aufgaben.',cta:{text:"Weitere Stories ansehen",toggleText:"Weniger anzeigen",href:"https://www.glueckkanja.com",skin:"secondary",monochrome:!0},contents:[{name:"Max Mustermann",title:"Developer",video:{lightbox:!0,large:!0,thumb:"/thumbs/thumb-avd-foundation-webcast.jpg",alt:"Video Casestudy Franz Haniel",id:"0U_mV706VKI"},bgColor:"var(--color-blue-light)"},{name:"Matti Puolitaival",title:"Designer",img:{img:"/people/testimonials/matti-puolitaival.png",cloudinary:!0,alt:"lorem ipsum"},bgColor:"var(--color-blue-light)"},{href:"glueckkanja.com",name:"Sophie Luna",title:"HR Specialist",img:{img:"/people/people-sophie-luna.png",cloudinary:!0,alt:"lorem ipsum"}},{name:"John Doe",title:"Project Manager",video:{lightbox:!0,large:!0,thumb:"/thumbs/thumb-avd-foundation-webcast.jpg",alt:"Video Casestudy Franz Haniel",id:"0U_mV706VKI"},bgColor:"var(--color-blue-light)"},{name:"Erika Musterfrau",title:"HR Manager",video:{thumb:"/thumbs/thumb-avd-foundation-webcast.jpg",id:"0U_mV706VKI",fullWidth:!0},bgColor:"var(--color-blue-light)",bgColor:"var(--color-blue-light)"},{name:"Jane Doe",title:"Azure Specialist",video:{lightbox:!0,large:!0,thumb:"/thumbs/thumb-avd-foundation-webcast.jpg",alt:"Video Casestudy Franz Haniel",id:"0U_mV706VKI"},bgColor:"var(--color-blue-light)"},{name:"John Smith",title:"Cloud Architect",video:{lightbox:!0,large:!0,thumb:"/thumbs/thumb-avd-foundation-webcast.jpg",alt:"Video Casestudy Franz Haniel",id:"0U_mV706VKI"},bgColor:"var(--color-blue-light)"}]}};var g,d,h;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    headline: "Menschen bei glueckkanja",
    subline: 'In unserer Reihe "Inside glueckkanja" stellen sich Mitarbeitende vor und gewähren spannende Einblicke in ihre Aufgaben.',
    cta: {
      text: "Weitere Stories ansehen",
      toggleText: "Weniger anzeigen",
      href: "https://www.glueckkanja.com",
      skin: "secondary",
      monochrome: true
    },
    contents: [{
      name: "Max Mustermann",
      title: "Developer",
      video: {
        lightbox: true,
        large: true,
        thumb: "/thumbs/thumb-avd-foundation-webcast.jpg",
        alt: 'Video Casestudy Franz Haniel',
        id: "0U_mV706VKI"
      },
      bgColor: "var(--color-blue-light)"
    }, {
      name: "Matti Puolitaival",
      title: "Designer",
      img: {
        img: "/people/testimonials/matti-puolitaival.png",
        cloudinary: true,
        alt: "lorem ipsum"
      },
      bgColor: "var(--color-blue-light)"
    }, {
      href: "glueckkanja.com",
      name: "Sophie Luna",
      title: "HR Specialist",
      img: {
        img: "/people/people-sophie-luna.png",
        cloudinary: true,
        alt: "lorem ipsum"
      }
    }, {
      name: "John Doe",
      title: "Project Manager",
      video: {
        lightbox: true,
        large: true,
        thumb: "/thumbs/thumb-avd-foundation-webcast.jpg",
        alt: 'Video Casestudy Franz Haniel',
        id: "0U_mV706VKI"
      },
      bgColor: "var(--color-blue-light)"
    }, {
      name: "Erika Musterfrau",
      title: "HR Manager",
      video: {
        thumb: "/thumbs/thumb-avd-foundation-webcast.jpg",
        id: "0U_mV706VKI",
        fullWidth: true
      },
      bgColor: "var(--color-blue-light)",
      bgColor: "var(--color-blue-light)"
    }, {
      name: "Jane Doe",
      title: "Azure Specialist",
      video: {
        lightbox: true,
        large: true,
        thumb: "/thumbs/thumb-avd-foundation-webcast.jpg",
        alt: 'Video Casestudy Franz Haniel',
        id: "0U_mV706VKI"
      },
      bgColor: "var(--color-blue-light)"
    }, {
      name: "John Smith",
      title: "Cloud Architect",
      video: {
        lightbox: true,
        large: true,
        thumb: "/thumbs/thumb-avd-foundation-webcast.jpg",
        alt: 'Video Casestudy Franz Haniel',
        id: "0U_mV706VKI"
      },
      bgColor: "var(--color-blue-light)"
    }]
  }
}`,...(h=(d=i.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const Y=["TestimonialGrid"];export{i as TestimonialGrid,Y as __namedExportsOrder,X as default};
