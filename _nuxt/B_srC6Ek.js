import{_ as D}from"./Ddy0pCkd.js";import{_ as I}from"./B3NnQPaA.js";import{_ as E}from"./31bIC53d.js";import{_ as B}from"./C-H5ay9x.js";import{_ as U,c as d,d as h,b as i,w as b,m as k,e as V,a as A,f as q,T as F,L,o as l,t as v,F as p,r as g,n as P}from"./CSkzcT8n.js";import"./BsgdQ6dk.js";import"./ai_adYq7.js";import"./v-YdVQxh.js";import"./Be1XqyUa.js";import"./DOQMiP3G.js";import"./BUUOgiHR.js";import"./DsDL2EhU.js";const x={tagName:"video-slider",data(){return{triggerButtonClick:!1,currentTabIndex:0,currentTab:null,slickElement:null,options:{centerMode:!0,infinite:!0,centerPadding:"20vw",slidesToShow:1,responsive:[{breakpoint:576,settings:{centerPadding:"10vw"}}],prevArrow:"",nextArrow:""}}},computed:{tabCount(){return this.tabs.length},copyColor(){return this.color?this.color:"var(--color-copy)"},backgroundColor(){return this.bgColor?this.bgColor:"var(--color-black-4)"},style(){return`--color-video-slider-background: ${this.backgroundColor}; --color-video-slider-color: ${this.copyColor};`}},mounted(){const t=this.$refs["max-width"],n=t==null?void 0:t.querySelector(".js-slick-carousel");n&&(this.slickElement=$(n),this.bindEvents())},methods:{bindEvents(){this.slickElement.on("afterChange",this.handlePositionChange.bind(this))},handlePositionChange(t,n,e){this.currentTabIndex=n.currentSlide,this.triggerButtonClick&&(this.triggerButtonClick=!1,this.currentTab=n==null?void 0:n.$slides[e],this.handleAfterChangeClick())},handleAfterChangeClick(){var n;const t=(n=this.currentTab)==null?void 0:n.querySelector(".js-video-button");t&&t.click()},handleCtaClick(t){var e;t.preventDefault();const n=(e=this.cta)==null?void 0:e.href;if(n){const a=document.querySelector(n);a&&F.scrollIntoView(a,!0)}},handleTabClick(t){this.slickElement.slick("slickGoTo",t),this.currentTabIndex=t},handleVideoInnerEvent(t){this.handleTabClick(t)},handleSliderClick(t){const e=t.target.closest(".slick-slide"),a=e==null?void 0:e.classList.contains("slick-cloned");if(!e||!a)return;const s=parseInt(e.dataset.slickIndex);this.handleTabClick(s),this.triggerButtonClick=!0}},props:{headline:{type:Object},subline:{type:String,required:!0},tabs:{type:Array,required:!0},cta:{type:Object}}},W={class:"video-slider__row row"},K={class:"video-slider__col col"},N={class:"video-slider__main"},M={class:"video-slider__header"},O={class:"video-slider__subline font-size-4 thin"},R={class:"video-slider__tabs-wrapper"},H={class:"video-slider__tabs d-flex"},J=["onClick"],X={class:"video-slider__footer"};function Z(t,n,e,a,s,o){const y=D,S=L("swiper-container"),T=I,j=E,z=B;return l(),d("div",{class:"video-slider d-flex flex-column justify-content-center",style:q(o.style)},[h(S,k({class:"slider__swiper-container"},s.options),{default:b(()=>{var r,c;return[i("div",W,[i("div",K,[i("div",N,[i("div",M,[h(y,{text:(r=e.headline)==null?void 0:r.text,level:(c=e.headline)==null?void 0:c.level,classes:"video-slider__headline h2-font-size"},null,8,["text","level"]),i("div",O,v(e.subline),1)]),i("div",R,[i("div",H,[(l(!0),d(p,null,g(e.tabs,(_,m)=>(l(),d("div",{key:m,onClick:Q=>o.handleTabClick(m),class:P(["video-slider__tab",{active:m===s.currentTabIndex}])},v(_.label),11,J))),128))])])])])])]}),_:1},16),i("div",{class:"video-slider__max-width slick--no-offset",ref:"max-width",onClick:n[0]||(n[0]=(...r)=>o.handleSliderClick&&o.handleSliderClick(...r))},[h(j,{options:s.options,"hide-background":!0,"hide-container":!0},{default:b(()=>[(l(!0),d(p,null,g(e.tabs,(r,c)=>(l(),d("div",{class:"video-slider__video-tab",key:c},[h(T,{video:{...r.video,lightbox:!0},variant:"compact","no-animation":!0,onLightboxClicked:_=>o.handleVideoInnerEvent(c)},null,8,["video","onLightboxClicked"])]))),128))]),_:1},8,["options"]),i("div",X,[e.cta?(l(),V(z,k({key:0},e.cta,{onClick:o.handleCtaClick}),null,16,["onClick"])):A("",!0)])],512)],4)}const G=U(x,[["render",Z]]);x.__docgenInfo={exportName:"default",displayName:"video-slider",description:"",tags:{},props:[{name:"headline",type:{name:"object"}},{name:"subline",type:{name:"string"},required:!0},{name:"tabs",type:{name:"array"},required:!0},{name:"cta",type:{name:"object"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/video-slider.vue"]};const he={component:G,argTypes:{},title:"Components/Video Slider"},u={args:{headline:{text:"Unsere Workaholics-Cases",level:"h2"},subline:"Erfahre jetzt, wem wir schon alles helfen konnten!",tabs:[{label:"Cloud",video:{thumb:"/it-workaholics/it-workaholics-cloud-thumb.jpg",alt:"Rene",id:"ADTnb8EUnz4",headline:'"Die ganze Last ist runter von meinen Schultern<br /> Jetzt ist wieder alles ganz federleicht!"'}},{label:"Managed Workplace",video:{thumb:"/it-workaholics/it-workaholics-managed-workplace-thumb.jpg",alt:"Diane",id:"0y1xbn9H4kU",headline:'"Die Kollegen lieben mich wieder!"'}},{label:"KI",video:{thumb:"/it-workaholics/it-workaholics-KI-thumb.jpg",alt:"Stefan",id:"fBT9uWXPpzM",headline:'"Der Workshop war für mich wie ein Sprung in die Zukunft!"'}},{label:"Ransomware",video:{thumb:"/it-workaholics/it-workaholics-ransomware-thumb.jpg",alt:"David",id:"vB90U93_xOU",headline:'"Dank glueckkanja fühle ich mich wie neugeboren und habe endlich wieder Freude an meiner Arbeit!"'}}],cta:{text:"Teste dein Stresslevel",href:"#anchor",link:!0}}};var f,w,C;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    headline: {
      text: 'Unsere Workaholics-Cases',
      level: 'h2'
    },
    subline: 'Erfahre jetzt, wem wir schon alles helfen konnten!',
    tabs: [{
      label: 'Cloud',
      video: {
        thumb: '/it-workaholics/it-workaholics-cloud-thumb.jpg',
        alt: 'Rene',
        id: 'ADTnb8EUnz4',
        headline: '"Die ganze Last ist runter von meinen Schultern<br /> Jetzt ist wieder alles ganz federleicht!"'
      }
    }, {
      label: 'Managed Workplace',
      video: {
        thumb: '/it-workaholics/it-workaholics-managed-workplace-thumb.jpg',
        alt: 'Diane',
        id: '0y1xbn9H4kU',
        headline: '"Die Kollegen lieben mich wieder!"'
      }
    }, {
      label: 'KI',
      video: {
        thumb: '/it-workaholics/it-workaholics-KI-thumb.jpg',
        alt: 'Stefan',
        id: 'fBT9uWXPpzM',
        headline: '"Der Workshop war für mich wie ein Sprung in die Zukunft!"'
      }
    }, {
      label: 'Ransomware',
      video: {
        thumb: '/it-workaholics/it-workaholics-ransomware-thumb.jpg',
        alt: 'David',
        id: 'vB90U93_xOU',
        headline: '"Dank glueckkanja fühle ich mich wie neugeboren und habe endlich wieder Freude an meiner Arbeit!"'
      }
    }],
    cta: {
      text: 'Teste dein Stresslevel',
      href: '#anchor',
      link: true
    }
  }
}`,...(C=(w=u.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const ue=["VideoSlider"];export{u as VideoSlider,ue as __namedExportsOrder,he as default};
