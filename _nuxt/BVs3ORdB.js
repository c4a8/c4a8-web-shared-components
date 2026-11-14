var le=Object.defineProperty;var ce=(s,t,e)=>t in s?le(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var j=(s,t,e)=>ce(s,typeof t!="symbol"?t+"":t,e);import{_ as de}from"./MJ4og3cV.js";import{_ as ue}from"./bVsxqf0H.js";import{_ as K}from"./BPTfXgHw.js";import{aE as ge,T as X,aa as pe,_ as T,c as o,o as r,a as l,b as a,d as m,t as h,w as f,n as c,W as E,h as M,y as he,e as g,F as P,r as me,f as L,m as I,g as B}from"./CrBxyuTZ.js";import{_ as fe}from"./CfvI5qzD.js";import{_ as _e}from"./DciEsTOg.js";import{_ as be}from"./BSIMZCmf.js";import{_ as ve}from"./B2K_11B9.js";import{P as $}from"./FWnOHSgg.js";import"./BeXQrhCF.js";import"./DxVuysH7.js";import"./3frobszv.js";import"./-_gES4nC.js";import"./bSV29bw4.js";import"./DgKWCSG1.js";import"./DSMzQdWw.js";class ee extends ge{constructor(t,e,d){super(t,e),this.selectedValue=0,this.products=null,this.range=null,this.currentPrice=0,this.setPricing(d),this.init()}setPricing(t){this.pricing=t;const e=this.pricing?this.pricing:{format:"de-DE",currency:"EUR",defaultPlan:"monthly"};this.priceFormatter=X.getPriceFormatter(e,{trailingZeroDisplay:"stripIfInteger"}),this.selectedPlan=["monthly","annual"].includes(e.defaultPlan)?e.defaultPlan:console.error('Please provide a valid plan in site.data.products.pricing.defaultPlan: "annual" or "monthly"!')}update(t,e){this.setPricing(t),this.range&&(this.products=e||this.products,this.handlePricingSlider({from:this.selectedValue}))}destroy(){this.handlers&&Object.entries(this.handlers).forEach(([t,e])=>{window[t]===e&&delete window[t]}),this.info&&this.infoHandler&&this.info.removeEventListener("click",this.infoHandler)}init(){if(window.handleChange)return console.error("remove handleChange from app.js");this.bindEvents()}bindEvents(){this.info=this.root.querySelector(".pricing-slider__info"),this.info&&(this.infoHandler=this.handleInfoClick.bind(this),this.info.addEventListener("click",this.infoHandler)),this.handlers={handleChange:this.handlePricingSlider.bind(this),fixSliderText:this.fixText.bind(this),prepareSlider:this.prepare.bind(this)},Object.assign(window,this.handlers)}handleInfoClick(){const t=this.root.querySelector(".pricing-slider__modal");pe.open(t)}handlePricingSlider({from:t}){this.selectedValue=parseInt(t);const e=this.getRecommendedProduct(this.selectedValue);if(!e)return;const d=this.selectedValue-e.value;var u=Math.round((parseFloat(e.price[this.selectedPlan])+d*parseFloat(e.additionalUsersFee[this.selectedPlan]))*100)/100;this.currentPrice=u,this.updateElements(this.priceFormatter.format(u),e.title,this.formatExtraUsers(d))}getRecommendedProduct(t){let e=null;const d=`No products found for value ${t} in site.data.products.list`;if(this.products)return this.products.forEach(function(u){u.value<=t&&(e=u)}),e||console.error(d),e;console.error(d)}formatExtraUsers(t){const e=this.range.unit;return t>0?"+ "+t+" "+e:""}prepare(t){const e=document.querySelector(".js-slider-data"),d=5;this.products=JSON.parse(e.dataset.products),this.range=JSON.parse(e.dataset.range),this.selectedValue=t.from,setTimeout(()=>{this.fixText()},d)}fixText(){const t=document.querySelector(".irs-single");if(!t||!this.range)return;const e=t.innerHTML;e.includes(this.range.unit)||(t.innerHTML=[e,this.range.unit].join(" "))}updateElements(t,e,d){const u=document.querySelector(".js-result-price"),i=document.querySelector(".js-result-product"),p=document.querySelector(".js-result-extra");u.innerHTML=t,i.innerHTML=e,p.innerHTML=d,this.fixText()}}j(ee,"rootSelector",".pricing-slider");const te={tagName:"pricing-slider",props:{slider:Object,tooltip:String,modalId:String,products:Object,light:{type:Boolean,default:!1}},data(){return{loading:!0,options:{type:"single",hide_min_max:!0,foreground_target_el:null,secondary_target_el:null,secondary_val:{steps:null,values:null},result_max_target_el:null,hide_from_to:!1,result_min_target_el:".js-result-price",extra_classes:"range-slider-custom"}}},mounted(){this.pollForJQuery()},beforeUnmount(){var s,t;this.unmounted=!0,document.removeEventListener(E.CLIENT_ONLY_LIB_LOADED,this.initRangeSlider),window.$&&this.$refs.slider&&((s=window.$(this.$refs.slider).data("ionRangeSlider"))==null||s.destroy()),(t=this.pricingSlider)==null||t.destroy(),this.pricingSlider=null},watch:{products(s){var t;(t=this.pricingSlider)==null||t.update(s==null?void 0:s.pricing,s==null?void 0:s.list)}},computed:{pricingSliderRange(){return this.slider&&this.slider.range?this.slider.range:{}},hsIonRangeSliderOptions(){return{extra_classes:"range-slider-custom",hide_from_to:!1,min:this.pricingSliderRange.min,max:this.pricingSliderRange.max,from:this.pricingSliderRange.from,step:this.pricingSliderRange.step,result_min_target_el:".js-result-price"}}},methods:{handleRangeSliderStart(s){!window.prepareSlider||!window.handleChange||(window.prepareSlider(s),window.handleChange(s))},handleRangeSliderChange(s){window.handleChange&&window.handleChange(s)},bindEvents(){document.addEventListener(E.CLIENT_ONLY_LIB_LOADED,this.initRangeSlider)},initRangeSlider(){this.unmounted||!this.$refs.slider||!window.$||(this.loading=!1,window.$(this.$refs.slider).ionRangeSlider(this.options))},init(){var i;const{min:s,max:t,from:e,step:d,unit:u}=this.pricingSliderRange;Object.assign(this.options,{min:s,max:t,from:e,step:d,postfix:` ${u}`}),this.options.onStart=this.handleRangeSliderStart,this.options.onChange=this.handleRangeSliderChange,this.$refs.root&&(this.pricingSlider=new ee(this.$refs.root,null,(i=this.products)==null?void 0:i.pricing)),X.isClientOnlyLibLoaded()?this.initRangeSlider():this.bindEvents()},pollForJQuery(){let t=0;const e=()=>{if(!this.unmounted){if(window.$){this.init();return}t++,t<30&&setTimeout(e,100)}};e()}}},ye=["data-range","data-products"],ke=["data-hs-ion-range-slider-options"],we={class:"product-stage__result-container"},xe={class:"text-center text-midnight"},Se={class:"pricing-slider__info font-size-5"},Ce={key:0},Pe={class:"container"},Le={class:"row"},Te=["innerHTML"];function Ae(s,t,e,d,u,i){var _;const p=ue,x=K;return r(),o("div",{class:c(["pricing-slider",{"pricing-slider--loading":u.loading,"pricing-slider--light":e.light}]),ref:"root"},[i.pricingSliderRange?(r(),o("div",{key:0,class:"js-slider-data","data-range":JSON.stringify(i.pricingSliderRange),"data-products":JSON.stringify((_=e.products)==null?void 0:_.list)},[a("input",{class:"pricing-slider__slider js-ion-range-slider",type:"text","data-hs-ion-range-slider-options":JSON.stringify(i.hsIonRangeSliderOptions),ref:"slider"},null,8,ke)],8,ye)):l("",!0),a("div",we,[a("div",xe,[t[0]||(t[0]=a("span",{class:"font-size-5 js-result-price"},"0",-1)),a("span",Se,[m(p,{icon:"info",size:"small"})]),i.pricingSliderRange&&i.pricingSliderRange.resultPer?(r(),o("span",Ce,"| "+h(i.pricingSliderRange.resultPer),1)):l("",!0)]),t[1]||(t[1]=a("div",{class:"text-center text-midnight"},[a("strong",{class:"js-result-product"}),a("span",{class:"js-result-extra"})],-1)),m(x,{slim:!0,center:!0,class:"pricing-slider__modal","modal-id":e.modalId},{default:f(()=>[a("div",Pe,[a("div",Le,[a("div",{class:"col",innerHTML:e.tooltip},null,8,Te)])])]),_:1},8,["modal-id"])])],2)}const Re=T(te,[["render",Ae]]);te.__docgenInfo={exportName:"default",displayName:"pricing-slider",description:"",tags:{},props:[{name:"slider",type:{name:"object"}},{name:"tooltip",type:{name:"string"}},{name:"modalId",type:{name:"string"}},{name:"products",type:{name:"object"}},{name:"light",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/pricing-slider.vue"]};const se={props:{href:String}},je=["href"];function Ee(s,t,e,d,u,i){return e.href?(r(),o("a",{key:0,href:e.href},[M(s.$slots,"default")],8,je)):M(s.$slots,"default",{key:1})}const Me=T(se,[["render",Ee]]);se.__docgenInfo={exportName:"default",displayName:"conditional-link",description:"",tags:{},props:[{name:"href",type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/conditional-link.vue"]};const ne={tagName:"product-stage",props:{stage:Object,products:Object,light:{type:Boolean,default:!0}},computed:{shapeClasses(){return this.overlapping?"position-absolute bottom-0 left-0 z-index-1 w-100":"position-relative z-index-1"},cardWrapperClasses(){var t;return["product-stage__card-wrapper",`col-${(t=this.cards)!=null&&t.tabs?"":"lg-"}`+12/this.cards.list.length,{"px-1 px-lg-3 nav-item":this.cards.tabs,"mb-6 mb-md-8 mb-lg-0":!this.cards.tabs}]},bgColor(){return(this.stage.bgColor||"var(--color-primary)").replace(";","")},cutoffBgColor(){return(this.stage.cutoff.bgColor||"var(--color-gk-light-grey)").replace(";","")},shape(){return this.stage.shape||null},cards(){return this.stage.cards||null},overlapping(){return this.cards&&this.stage.headline||this.stage.description}},methods:{hasLink(s){return!!s.link}}},Ie={class:"svg-shape-animation"},Be=["innerHTML"],Ne={class:"container"},Oe={class:"row"},He=["innerHTML"],De={key:2,class:"row justify-content-center py-6"},qe=["innerHTML"],Ue={key:3,class:"row justify-content-center py-6"},ze={key:4,class:"space-bottom-2 space-bottom-lg-3"},We={class:"d-flex flex-column align-items-center h-100 position-relative z-index-2"},Fe={key:1,class:"mb-6 flex-grow-1"},Ve={class:c(["space-top-2 space-top-lg-4 space-top-xl-5 space-bottom-1 space-bottom-lg-2 text-center align-items-center d-flex flex-column"])},Je={key:1,class:"col-lg-8 lead mt-5 px-0"},Ge=["innerHTML"],Ze={key:0,class:"product-stage__bottom-container container position-relative pt-8 pt-lg-0"};function Qe(s,t,e,d,u,i){const p=de,x=Re,_=K,ie=fe,S=_e,re=Me,ae=be,oe=ve;return r(),o(P,null,[a("section",{class:c(["product-stage position-relative overflow-hidden",e.stage.cutoff?"product-stage--cutoff":""]),style:L({backgroundColor:i.bgColor})},[a("div",Ie,[(r(),o("svg",{class:c(["position-absolute",e.stage.cutoff?"w-md-60":""]),width:"100%",height:"100%",preserveAspectRatio:"none",viewBox:"0 0 1440 965",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[...t[0]||(t[0]=[he('<path opacity="0.0591615" fill-rule="evenodd" clip-rule="evenodd" d="M0 0L316 695L1441 965L0 840V0Z" fill="url(#paint0_linear)"></path><path opacity="0.0339753" fill-rule="evenodd" clip-rule="evenodd" d="M747 147L1439 965L1440 0H340L747 147Z" fill="black"></path><path opacity="0.174464" fill-rule="evenodd" clip-rule="evenodd" d="M646 0L1261 222L1368 685L628 890L646 0Z" fill="white"></path><defs><linearGradient id="paint0_linear" x1="-327.295" y1="767.888" x2="135.719" y2="1396.04" gradientUnits="userSpaceOnUse"><stop></stop><stop offset="1" stop-color="white" stop-opacity="0.01"></stop></linearGradient></defs>',4)])],2))]),a("div",{class:c(e.stage.cutoff?"container":"")},[a("div",{class:c(e.stage.cutoff?"row":"")},[a("div",{class:c(["product-stage__content position-relative",e.stage.cutoff?"col-md-7":"container"])},[a("div",{class:c(["space-top-2 space-top-lg-4 space-top-xl-5 space-bottom-1 space-bottom-lg-2",{"text-white":e.light}])},[m(p,{classes:e.stage.headlineClasses,level:e.stage.headlineLevel||"h1"},{default:f(()=>[B(h(e.stage.headline),1)]),_:1},8,["classes","level"]),e.stage.description?(r(),o("p",{key:0,class:c(["lead mt-5 px-0",e.stage.cutoff?"col-lg-10":"col-lg-8"]),innerHTML:e.stage.description},null,10,Be)):l("",!0)],2),e.stage.slider&&e.products?(r(),g(x,{key:0,slider:e.stage.slider,tooltip:e.stage.tooltip,"modal-id":e.stage.modalId,products:e.products,light:e.light},null,8,["slider","tooltip","modal-id","products","light"])):e.stage.modalId&&e.stage.tooltip?(r(),g(_,{key:1,slim:!0,center:!0,light:e.light,class:"pricing-slider__modal","modal-id":e.stage.modalId},{default:f(()=>[a("div",Ne,[a("div",Oe,[a("div",{class:"col",innerHTML:e.stage.tooltip},null,8,He)])])]),_:1},8,["light","modal-id"])):l("",!0),e.stage.additionalCopy?(r(),o("div",De,[a("div",{class:c(["text-center",{"text-white":e.light}]),innerHTML:e.stage.additionalCopy},null,10,qe)])):l("",!0),e.stage.buttons?(r(),o("div",Ue,[m(ie,{list:e.stage.buttons},null,8,["list"])])):(r(),o("div",ze)),i.cards?(r(),o("ul",{key:5,class:c(["row nav nav-pills",{"px-1 px-lg-0":i.cards.tabs}]),role:"tablist"},[(r(!0),o(P,null,me(i.cards.list,(n,C)=>{var A,R;return r(),o("li",{key:C,class:c(i.cardWrapperClasses)},[m(re,{link:i.hasLink(n),href:(A=n==null?void 0:n.link)==null?void 0:A.href,target:(R=n==null?void 0:n.link)==null?void 0:R.target,class:c(["product-stage__tab h-100 rounded position-relative d-block",{active:i.cards.tabs&&C===0}]),id:n!=null&&n.id?(n==null?void 0:n.id)+"-tab":"","data-toggle":"pill",role:"tab","aria-controls":n==null?void 0:n.id,"aria-selected":i.cards.tabs&&C===0},{default:f(()=>[a("div",{class:c(["product-stage__tab-content position-relative h-100",{"product-stage__tab-content--alternative-border":i.cards.tabs}])},[a("div",{class:c(["rounded h-100",{"p-2 p-lg-8":n.link,"p-8 bg-white shadow-lg":!n.link}])},[a("div",We,[n.title?(r(),o("h2",{key:0,class:c(["font-size-3 mb-2 mb-md-6 text-center",{"text-primary":n.link}])},h(n.title),3)):l("",!0),n.description?(r(),o("p",Fe,h(n.description),1)):l("",!0),n.cta!==n.href?(r(),g(S,{key:2,text:n.cta.text,href:n.cta.href,target:n.cta.target,skin:n.cta.skin,classes:"align-self-center mt-auto z-index-2"},null,8,["text","href","target","skin"])):l("",!0)])],2)],2)]),_:2},1032,["link","href","target","class","id","aria-controls","aria-selected"])],2)}),128))],2)):l("",!0)],2),e.stage.cutoff?(r(),o("div",{key:0,class:c(["cutoff__content",e.stage.cutoff?"col-md-5":""]),style:L({backgroundColor:i.cutoffBgColor})},[a("div",Ve,[e.stage.cutoff.headline?(r(),g(p,{key:0,classes:e.stage.cutoff.headlineClasses,level:e.stage.cutoff.headlineLevel||"h1"},{default:f(()=>[B(h(e.stage.cutoff.headline),1)]),_:1},8,["classes","level"])):l("",!0),e.stage.cutoff.subline?(r(),o("p",Je,h(e.stage.cutoff.subline),1)):l("",!0),e.stage.cutoff.button?(r(),g(S,I({key:2},e.stage.cutoff.button,{class:"my-4",width:"w-80"}),null,16)):l("",!0),e.stage.cutoff.description?(r(),o("p",{key:3,class:"col-lg-8 mt-5 px-0",innerHTML:e.stage.cutoff.description},null,8,Ge)):l("",!0),e.stage.cutoff.cta?(r(),g(S,I({key:4},e.stage.cutoff.cta,{class:"mt-md-11 pt-11 bold z-index-2",style:{color:e.stage.cutoff.cta.color,textDecoration:"underline"}}),null,16,["style"])):l("",!0)])],6)):l("",!0)],2)],2),i.shape?(r(),o(P,{key:0},[i.shape.isActive!==!1?(r(),g(ae,{key:0,align:"bottom",peak:"left",obliquity:4,classes:i.shapeClasses,color:i.shape.color},null,8,["classes","color"])):l("",!0)],64)):l("",!0)],6),e.stage.image?(r(),o("div",Ze,[m(oe,{src:e.stage.image.src,alt:e.stage.image.alt,cloudinary:e.stage.image.cloudinary,class:"product-stage__bottom-image w-md-60",style:L(e.stage.image.style)},null,8,["src","alt","cloudinary","style"])])):l("",!0)],64)}const Ye=T(ne,[["render",Qe]]);ne.__docgenInfo={exportName:"default",displayName:"product-stage",description:"",tags:{},props:[{name:"stage",type:{name:"object"}},{name:"products",type:{name:"object"}},{name:"light",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/product-stage.vue"]};const ht={argTypes:{},component:Ye,title:"Components/Product Stage"},b={args:{light:!1,stage:{bgColor:"var(--color-secondary)",headline:"A price that's right for you",description:"Priced <a href='https://docs.radiusaas.com/licensing'><font color='#000000'>per user</font></a> with unlimited devices - no base price, setup fees or complicated product tiers. Get access to all features. ",shape:{isActive:!0,color:"var(--color-gk-white)"},background:{img:"svg/product-backgrounds/radiusaas-background.svg",alt:"Alt text"},slider:{range:{min:50,max:2e4,step:25,from:1e3,unit:"Users",resultPer:"mo"}},buttons:[{skin:"primary is-cutoff",ctaText:"Lorem ipsum dolor sit amet",ctaHref:"javascript:void(0);",onSurface:!0}],tooltip:"lorem ipsum dolor sit amet"},products:$}},v={args:{stage:{bgColor:"var(--color-secondary)",headline:"A price that's right for you",shape:{isActive:!0,color:"var(--color-gk-white)"},background:{img:"svg/product-backgrounds/radiusaas-background.svg",alt:"Alt text"},slider:{range:{min:50,max:2e4,step:25,from:1e3,unit:"Users",resultPer:"mo"}},modalId:"product-stage-modal",tooltip:'<h3>Pricing Details</h3>All prices exclude sales tax. Our offers exclusively address professional customers. Billing for RADIUSaaS is based on a per-user model, with no setup or base fees. The subscription allows each user to authenticate to multiple devices. Subscribers are granted full access to all features, and we ensure RADIUSaaS remains up-to-date with the latest updates. A minimum subscription for 50 users per organization is required. <a href="javascript:void(0);" class="is-copy-link">Learn more on our license page</a>.',additionalCopy:'Learn more on our <a href="javascript:void(0);" class="is-copy-link">license page</a>.<br/>Are you a non-profit organization? Please <a class="is-copy-link" href="javascript:void(0);">contact us</a> for special pricing.'},products:$}},y={args:{stage:{bgColor:"var(--color-primary)",headline:"Start now",description:"Try SCEPman for free or buy it now. We would also be happy to create an individual quote for you.",background:{img:"svg/product-backgrounds/radiusaas-background.svg",alt:"Alt text"},cards:{tabs:!0,list:[{title:"Buy now",id:"buy",link:{href:"#buy"}},{title:"Try for free",id:"try",link:{href:"#try"}},{title:"Get quote",id:"quote",link:{href:"#quote"}}]},shape:{isActive:!0,color:"var(--color-gk-white)"}}}},k={args:{stage:{bgColor:"var(--color-gk-light-blue);",headline:"Become a Partner",description:"We aim to build the best technology for enabling Microsoft 365 and Windows workstations in enterprises. To support that goal, we are looking for a global community of trusted partners to help deliver sales, service, and support.",background:{img:"svg/product-backgrounds/radiusaas-background.svg",alt:"Alt text"},cards:{list:[{title:"Register as a Partner",description:"Do you want to resell TerraProvider? Contact us!",cta:{text:"Apply now",href:"#partner",skin:"primary is-cutoff"}},{title:"Partner Portal",description:"Already a registered partner? Access the partner center.",cta:{text:"Sign in",href:"#signin",skin:"primary is-cutoff",target:"_blank"}}]},shape:{isActive:!0,color:"var(--color-gk-white)"}}}},w={args:{stage:{bgColor:"var(--color-gk-orange);",headline:"Start now",headlineLevel:"h3",headlineClasses:"bold",description:"When signing up you get access to the RJ Portal within your Microsoft 365 tenant to find out about all the awesome possibilities to manage Windows and Mac applications without leaving the platform. But also managing all devices, users and groups, get access to open source remediations scripts and automation and so much more...",cutoff:{headline:"Ready to Explore?",headlineLevel:"h3",headlineClasses:"bold",subline:"Welcome to our Portal!",description:"This sign in button redirects you to the basic Entra login within your tenant and asks you to consent only basic profile access to allow us to read your name and email address.",button:{text:"Sign in",skin:"primary is-cutoff"},cta:{text:"Book 30 Minutes with Ugur now",link:!0,icon:"booking",color:"var(--color-black)"}},image:{src:"https://res.cloudinary.com/c4a8/image/upload/v1758548434/products/realmjoin/realmjoin-laptop.svg",alt:"Illustration of the RJ Portal"}}}};var N,O,H;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    light: false,
    stage: {
      bgColor: 'var(--color-secondary)',
      headline: "A price that's right for you",
      description: "Priced <a href='https://docs.radiusaas.com/licensing'><font color='#000000'>per user</font></a> with unlimited devices - no base price, setup fees or complicated product tiers. Get access to all features. ",
      shape: {
        isActive: true,
        color: 'var(--color-gk-white)'
      },
      background: {
        img: 'svg/product-backgrounds/radiusaas-background.svg',
        alt: 'Alt text'
      },
      slider: {
        range: {
          min: 50,
          max: 20000,
          step: 25,
          from: 1000,
          unit: 'Users',
          resultPer: 'mo'
        }
      },
      buttons: [{
        skin: 'primary is-cutoff',
        ctaText: 'Lorem ipsum dolor sit amet',
        ctaHref: 'javascript:void(0);',
        onSurface: true
      }],
      tooltip: 'lorem ipsum dolor sit amet'
    },
    products: Products
  }
}`,...(H=(O=b.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var D,q,U;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    stage: {
      bgColor: 'var(--color-secondary)',
      headline: "A price that's right for you",
      shape: {
        isActive: true,
        color: 'var(--color-gk-white)'
      },
      background: {
        img: 'svg/product-backgrounds/radiusaas-background.svg',
        alt: 'Alt text'
      },
      slider: {
        range: {
          min: 50,
          max: 20000,
          step: 25,
          from: 1000,
          unit: 'Users',
          resultPer: 'mo'
        }
      },
      modalId: 'product-stage-modal',
      tooltip: '<h3>Pricing Details</h3>All prices exclude sales tax. Our offers exclusively address professional customers. Billing for RADIUSaaS is based on a per-user model, with no setup or base fees. The subscription allows each user to authenticate to multiple devices. Subscribers are granted full access to all features, and we ensure RADIUSaaS remains up-to-date with the latest updates. A minimum subscription for 50 users per organization is required. <a href="javascript:void(0);" class="is-copy-link">Learn more on our license page</a>.',
      additionalCopy: 'Learn more on our <a href="javascript:void(0);" class="is-copy-link">license page</a>.<br/>Are you a non-profit organization? Please <a class="is-copy-link" href="javascript:void(0);">contact us</a> for special pricing.'
    },
    products: Products
  }
}`,...(U=(q=v.parameters)==null?void 0:q.docs)==null?void 0:U.source}}};var z,W,F;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    stage: {
      bgColor: 'var(--color-primary)',
      headline: 'Start now',
      description: 'Try SCEPman for free or buy it now. We would also be happy to create an individual quote for you.',
      background: {
        img: 'svg/product-backgrounds/radiusaas-background.svg',
        alt: 'Alt text'
      },
      cards: {
        tabs: true,
        list: [{
          title: 'Buy now',
          id: 'buy',
          link: {
            href: '#buy'
          }
        }, {
          title: 'Try for free',
          id: 'try',
          link: {
            href: '#try'
          }
        }, {
          title: 'Get quote',
          id: 'quote',
          link: {
            href: '#quote'
          }
        }]
      },
      shape: {
        isActive: true,
        color: 'var(--color-gk-white)'
      }
    }
  }
}`,...(F=(W=y.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var V,J,G;k.parameters={...k.parameters,docs:{...(V=k.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    stage: {
      bgColor: 'var(--color-gk-light-blue);',
      headline: 'Become a Partner',
      description: 'We aim to build the best technology for enabling Microsoft 365 and Windows workstations in enterprises. To support that goal, we are looking for a global community of trusted partners to help deliver sales, service, and support.',
      background: {
        img: 'svg/product-backgrounds/radiusaas-background.svg',
        alt: 'Alt text'
      },
      cards: {
        list: [{
          title: 'Register as a Partner',
          description: 'Do you want to resell TerraProvider? Contact us!',
          cta: {
            text: 'Apply now',
            href: '#partner',
            skin: 'primary is-cutoff'
          }
        }, {
          title: 'Partner Portal',
          description: 'Already a registered partner? Access the partner center.',
          cta: {
            text: 'Sign in',
            href: '#signin',
            skin: 'primary is-cutoff',
            target: '_blank'
          }
        }]
      },
      shape: {
        isActive: true,
        color: 'var(--color-gk-white)'
      }
    }
  }
}`,...(G=(J=k.parameters)==null?void 0:J.docs)==null?void 0:G.source}}};var Z,Q,Y;w.parameters={...w.parameters,docs:{...(Z=w.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    stage: {
      bgColor: 'var(--color-gk-orange);',
      headline: 'Start now',
      headlineLevel: 'h3',
      headlineClasses: 'bold',
      description: 'When signing up you get access to the RJ Portal within your Microsoft 365 tenant to find out about all the awesome possibilities to manage Windows and Mac applications without leaving the platform. But also managing all devices, users and groups, get access to open source remediations scripts and automation and so much more...',
      cutoff: {
        headline: 'Ready to Explore?',
        headlineLevel: 'h3',
        headlineClasses: 'bold',
        subline: 'Welcome to our Portal!',
        description: 'This sign in button redirects you to the basic Entra login within your tenant and asks you to consent only basic profile access to allow us to read your name and email address.',
        button: {
          text: 'Sign in',
          skin: 'primary is-cutoff'
        },
        cta: {
          text: 'Book 30 Minutes with Ugur now',
          link: true,
          icon: 'booking',
          color: 'var(--color-black)'
        }
      },
      image: {
        src: 'https://res.cloudinary.com/c4a8/image/upload/v1758548434/products/realmjoin/realmjoin-laptop.svg',
        alt: 'Illustration of the RJ Portal'
        // style: {
        //   marginLeft: '-6%',
        // },
      }
    }
  }
}`,...(Y=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};const mt=["Default","NoDescription","Tabs","Cards","Cutoff"];export{k as Cards,w as Cutoff,b as Default,v as NoDescription,y as Tabs,mt as __namedExportsOrder,ht as default};
