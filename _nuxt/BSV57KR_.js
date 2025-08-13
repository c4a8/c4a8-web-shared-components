var X=Object.defineProperty;var $=(n,t,e)=>t in n?X(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var A=(n,t,e)=>$(n,typeof t!="symbol"?t+"":t,e);import{_ as ee}from"./BpH5EwoC.js";import{_ as te}from"./BP2uoDTo.js";import{_ as U}from"./Bd_6pyRi.js";import{au as se,ar as re,_ as S,c,o as a,a as d,b as i,d as g,t as y,w as x,n as u,T as ne,a0 as ie,H as L,I as ae,e as h,F as T,r as oe,f as le,g as ce}from"./CKOiqI2k.js";import{_ as de}from"./3IbIGMv7.js";import{_ as ue}from"./DwrQoX4a.js";import{_ as pe}from"./DhJOML4p.js";import{P as F}from"./FWnOHSgg.js";import"./Dy_jxy9t.js";import"./yvdQAB9J.js";class V extends se{constructor(t,e,l){super(t,e),this.selectedValue=0,this.products=null,this.range=null,this.pricing=l;const o=this.pricing?this.pricing:{format:"de-DE",currency:"EUR",defaultPlan:"monthly"};this.priceFormatter=new Intl.NumberFormat(o.format,{style:"currency",currency:o.currency,maximumFractionDigits:0}),this.selectedPlan=["monthly","annual"].includes(o.defaultPlan)?o.defaultPlan:console.error('Please provide a valid plan in site.data.products.pricing.defaultPlan: "annual" or "monthly"!'),this.currentPrice=0,this.init()}init(){if(window.handleChange)return console.error("remove handleChange from app.js");this.bindEvents()}bindEvents(){const t=this.root.querySelector(".pricing-slider__info");t&&t.addEventListener("click",this.handleInfoClick.bind(this)),window.handleChange=this.handlePricingSlider.bind(this),window.fixSliderText=this.fixText.bind(this),window.prepareSlider=this.prepare.bind(this)}handleInfoClick(){const t=this.root.querySelector(".pricing-slider__modal");re.open(t)}handlePricingSlider({from:t}){this.selectedValue=parseInt(t);const e=this.getRecommendedProduct(this.selectedValue);if(!e)return;const l=this.selectedValue-e.value;var o=parseInt(e.price[this.selectedPlan])+l*parseFloat(e.additionalUsersFee[this.selectedPlan]);this.currentPrice=o,this.updateElements(this.priceFormatter.format(o),e.title,this.formatExtraUsers(l))}getRecommendedProduct(t){let e=null;const l=`No products found for value ${t} in site.data.products.list`;if(this.products)return this.products.forEach(function(o){o.value<=t&&(e=o)}),e||console.error(l),e;console.error(l)}formatExtraUsers(t){const e=this.range.unit;return t>0?"+ "+t+" "+e:""}prepare(t){const e=document.querySelector(".js-slider-data"),l=5;this.products=JSON.parse(e.dataset.products),this.range=JSON.parse(e.dataset.range),this.selectedValue=t.from,setTimeout(()=>{this.fixText()},l)}fixText(){const t=document.querySelector(".irs-single"),e=t.innerHTML;e.includes(this.range.unit)||(t.innerHTML=[e,this.range.unit].join(" "))}updateElements(t,e,l){const o=document.querySelector(".js-result-price"),r=document.querySelector(".js-result-product"),p=document.querySelector(".js-result-extra");o.innerHTML=t,r.innerHTML=e,p.innerHTML=l,this.fixText()}}A(V,"rootSelector",".pricing-slider");const J={tagName:"pricing-slider",props:{slider:Object,tooltip:String,modalId:String,products:Object,light:{type:Boolean,default:!1}},data(){return{loading:!0,options:{type:"single",hide_min_max:!0,foreground_target_el:null,secondary_target_el:null,secondary_val:{steps:null,values:null},result_max_target_el:null,hide_from_to:!1,result_min_target_el:".js-result-price",extra_classes:"range-slider-custom"}}},mounted(){this.pollForJQuery()},computed:{pricingSliderRange(){return this.slider&&this.slider.range?this.slider.range:{}},hsIonRangeSliderOptions(){return{extra_classes:"range-slider-custom",hide_from_to:!1,min:this.pricingSliderRange.min,max:this.pricingSliderRange.max,from:this.pricingSliderRange.from,step:this.pricingSliderRange.step,result_min_target_el:".js-result-price"}}},methods:{handleRangeSliderStart(n){!window.prepareSlider||!window.handleChange||(window.prepareSlider(n),window.handleChange(n))},handleRangeSliderChange(n){window.handleChange&&window.handleChange(n)},bindEvents(){document.addEventListener(ie.CLIENT_ONLY_LIB_LOADED,this.initRangeSlider)},initRangeSlider(){!this.$refs.slider||!window.$||(this.loading=!1,window.$(this.$refs.slider).ionRangeSlider(this.options))},init(){var r;const{min:n,max:t,from:e,step:l,unit:o}=this.pricingSliderRange;Object.assign(this.options,{min:n,max:t,from:e,step:l,postfix:` ${o}`}),this.options.onStart=this.handleRangeSliderStart,this.options.onChange=this.handleRangeSliderChange,this.$refs.root&&new V(this.$refs.root,null,(r=this.products)==null?void 0:r.pricing),ne.isClientOnlyLibLoaded()?this.initRangeSlider():this.bindEvents()},pollForJQuery(){let t=0;const e=()=>{if(window.$){this.init();return}t++,t<30&&setTimeout(e,100)};e()}}},ge=["data-range","data-products"],me=["data-hs-ion-range-slider-options"],he={class:"product-stage__result-container"},fe={class:"text-center text-midnight"},_e={class:"pricing-slider__info font-size-5"},ve={key:0},be={class:"container"},ye={class:"row"},xe=["innerHTML"];function ke(n,t,e,l,o,r){var m;const p=te,k=U;return a(),c("div",{class:u(["pricing-slider",{"pricing-slider--loading":o.loading,"pricing-slider--light":e.light}]),ref:"root"},[r.pricingSliderRange?(a(),c("div",{key:0,class:"js-slider-data","data-range":JSON.stringify(r.pricingSliderRange),"data-products":JSON.stringify((m=e.products)==null?void 0:m.list)},[i("input",{class:"pricing-slider__slider js-ion-range-slider",type:"text","data-hs-ion-range-slider-options":JSON.stringify(r.hsIonRangeSliderOptions),ref:"slider"},null,8,me)],8,ge)):d("",!0),i("div",he,[i("div",fe,[t[0]||(t[0]=i("span",{class:"font-size-5 js-result-price"},"0",-1)),i("span",_e,[g(p,{icon:"info",size:"small"})]),r.pricingSliderRange&&r.pricingSliderRange.resultPer?(a(),c("span",ve,"| "+y(r.pricingSliderRange.resultPer),1)):d("",!0)]),t[1]||(t[1]=i("div",{class:"text-center text-midnight"},[i("strong",{class:"js-result-product"}),i("span",{class:"js-result-extra"})],-1)),g(k,{slim:!0,center:!0,class:"pricing-slider__modal","modal-id":e.modalId},{default:x(()=>[i("div",be,[i("div",ye,[i("div",{class:"col",innerHTML:e.tooltip},null,8,xe)])])]),_:1},8,["modal-id"])])],2)}const we=S(J,[["render",ke]]);J.__docgenInfo={exportName:"default",displayName:"pricing-slider",description:"",tags:{},props:[{name:"slider",type:{name:"object"}},{name:"tooltip",type:{name:"string"}},{name:"modalId",type:{name:"string"}},{name:"products",type:{name:"object"}},{name:"light",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/pricing-slider.vue"]};const W={props:{href:String}},Se=["href"];function Ce(n,t,e,l,o,r){return e.href?(a(),c("a",{key:0,href:e.href},[L(n.$slots,"default")],8,Se)):L(n.$slots,"default",{key:1})}const Pe=S(W,[["render",Ce]]);W.__docgenInfo={exportName:"default",displayName:"conditional-link",description:"",tags:{},props:[{name:"href",type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/conditional-link.vue"]};const G={tagName:"product-stage",props:{stage:Object,products:Object,light:{type:Boolean,default:!0}},computed:{shapeClasses(){return this.overlapping?"position-absolute bottom-0 left-0 z-index-1 w-100":"position-relative z-index-1"},cardWrapperClasses(){var t;return["product-stage__card-wrapper",`col-${(t=this.cards)!=null&&t.tabs?"":"lg-"}`+12/this.cards.list.length,{"px-1 px-lg-3 nav-item":this.cards.tabs,"mb-6 mb-md-8 mb-lg-0":!this.cards.tabs}]},bgColor(){return(this.stage.bgColor||"var(--color-primary)").replace(";","")},shape(){return this.stage.shape||null},cards(){return this.stage.cards||null},overlapping(){return this.cards&&this.stage.headline||this.stage.description}},methods:{hasLink(n){return!!n.link}}},Ae={class:"product-stage__content container position-relative"},Le=["innerHTML"],Te={class:"container"},je={class:"row"},Re=["innerHTML"],Ee={key:2,class:"row justify-content-center py-6"},Ie=["innerHTML"],Ne={key:3,class:"row justify-content-center py-6"},Me={key:4,class:"space-bottom-2 space-bottom-lg-3"},Oe={class:"d-flex flex-column align-items-center position-relative z-index-2"},qe={key:1,class:"mb-6 flex-grow-1"};function De(n,t,e,l,o,r){const p=ee,k=we,m=U,Q=de,Z=ue,Y=Pe,K=pe;return a(),c("section",{class:"product-stage position-relative overflow-hidden",style:le({backgroundColor:r.bgColor})},[t[0]||(t[0]=ae('<div class="svg-shape-animation"><svg class="position-absolute" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1440 965" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.0591615" fill-rule="evenodd" clip-rule="evenodd" d="M0 0L316 695L1441 965L0 840V0Z" fill="url(#paint0_linear)"></path><path opacity="0.0339753" fill-rule="evenodd" clip-rule="evenodd" d="M747 147L1439 965L1440 0H340L747 147Z" fill="black"></path><path opacity="0.174464" fill-rule="evenodd" clip-rule="evenodd" d="M646 0L1261 222L1368 685L628 890L646 0Z" fill="white"></path><defs><linearGradient id="paint0_linear" x1="-327.295" y1="767.888" x2="135.719" y2="1396.04" gradientUnits="userSpaceOnUse"><stop></stop><stop offset="1" stop-color="white" stop-opacity="0.01"></stop></linearGradient></defs></svg></div>',1)),i("div",Ae,[i("div",{class:u(["space-top-2 space-top-lg-4 space-top-xl-5 space-bottom-1 space-bottom-lg-2",{"text-white":e.light}])},[g(p,{classes:e.stage.headlineClasses,level:e.stage.headlineLevel||"h1"},{default:x(()=>[ce(y(e.stage.headline),1)]),_:1},8,["classes","level"]),e.stage.description?(a(),c("p",{key:0,class:"col-lg-8 lead mt-5 px-0",innerHTML:e.stage.description},null,8,Le)):d("",!0)],2),e.stage.slider&&e.products?(a(),h(k,{key:0,slider:e.stage.slider,tooltip:e.stage.tooltip,"modal-id":e.stage.modalId,products:e.products,light:e.light},null,8,["slider","tooltip","modal-id","products","light"])):e.stage.modalId&&e.stage.tooltip?(a(),h(m,{key:1,slim:!0,center:!0,class:"pricing-slider__modal","modal-id":e.stage.modalId},{default:x(()=>[i("div",Te,[i("div",je,[i("div",{class:"col",innerHTML:e.stage.tooltip},null,8,Re)])])]),_:1},8,["modal-id"])):d("",!0),e.stage.additionalCopy?(a(),c("div",Ee,[i("div",{class:u(["text-center",{"text-white":e.light}]),innerHTML:e.stage.additionalCopy},null,10,Ie)])):d("",!0),e.stage.buttons?(a(),c("div",Ne,[g(Q,{list:e.stage.buttons},null,8,["list"])])):(a(),c("div",Me)),r.cards?(a(),c("ul",{key:5,class:u(["row nav nav-pills",{"px-1 px-lg-0":r.cards.tabs}]),role:"tablist"},[(a(!0),c(T,null,oe(r.cards.list,(s,w)=>{var C,P;return a(),c("li",{key:w,class:u(r.cardWrapperClasses)},[g(Y,{link:r.hasLink(s),href:(C=s==null?void 0:s.link)==null?void 0:C.href,target:(P=s==null?void 0:s.link)==null?void 0:P.target,class:u(["product-stage__tab h-100 rounded position-relative d-block",{active:r.cards.tabs&&w===0}]),id:s!=null&&s.id?(s==null?void 0:s.id)+"-tab":"","data-toggle":"pill",role:"tab","aria-controls":s==null?void 0:s.id,"aria-selected":r.cards.tabs&&w===0},{default:x(()=>[i("div",{class:u(["product-stage__tab-content position-relative h-100",{"product-stage__tab-content--alternative-border":r.cards.tabs}])},[i("div",{class:u(["rounded",{"p-2 p-lg-8":s.link,"p-8 bg-white shadow-lg":!s.link}])},[i("div",Oe,[s.title?(a(),c("h2",{key:0,class:u(["font-size-3 mb-2 mb-md-6 text-center",{"text-primary":s.link}])},y(s.title),3)):d("",!0),s.description?(a(),c("p",qe,y(s.description),1)):d("",!0),s.cta!==s.href?(a(),h(Z,{key:2,text:s.cta.text,href:s.cta.href,target:s.cta.target,skin:s.cta.skin,classes:"align-self-center z-index-2"},null,8,["text","href","target","skin"])):d("",!0)])],2)],2)]),_:2},1032,["link","href","target","class","id","aria-controls","aria-selected"])],2)}),128))],2)):d("",!0)]),r.shape?(a(),c(T,{key:0},[r.shape.isActive!==!1?(a(),h(K,{key:0,align:"bottom",peak:"left",obliquity:4,classes:r.shapeClasses,color:r.shape.color},null,8,["classes","color"])):d("",!0)],64)):d("",!0)],4)}const Be=S(G,[["render",De]]);G.__docgenInfo={exportName:"default",displayName:"product-stage",description:"",tags:{},props:[{name:"stage",type:{name:"object"}},{name:"products",type:{name:"object"}},{name:"light",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/product-stage.vue"]};const Ke={argTypes:{},component:Be,title:"Components/Product Stage"},f={args:{light:!1,stage:{bgColor:"var(--color-secondary)",headline:"A price that's right for you",description:"Priced <a href='https://docs.radiusaas.com/licensing'><font color='#000000'>per user</font></a> with unlimited devices - no base price, setup fees or complicated product tiers. Get access to all features. ",shape:{isActive:!0,color:"var(--color-white)"},background:{img:"svg/product-backgrounds/radiusaas-background.svg",alt:"Alt text"},slider:{range:{min:50,max:2e4,step:25,from:1e3,unit:"Users",resultPer:"mo"}},buttons:[{skin:"primary is-cutoff",ctaText:"Lorem ipsum dolor sit amet",ctaHref:"javascript:void(0);",onSurface:!0}],tooltip:"lorem ipsum dolor sit amet"},products:F}},_={args:{stage:{bgColor:"var(--color-secondary)",headline:"A price that's right for you",shape:{isActive:!0,color:"var(--color-white)"},background:{img:"svg/product-backgrounds/radiusaas-background.svg",alt:"Alt text"},slider:{range:{min:50,max:2e4,step:25,from:1e3,unit:"Users",resultPer:"mo"}},modalId:"product-stage-modal",tooltip:'<h3>Pricing Details</h3>All prices exclude sales tax. Our offers exclusively address professional customers. Billing for RADIUSaaS is based on a per-user model, with no setup or base fees. The subscription allows each user to authenticate to multiple devices. Subscribers are granted full access to all features, and we ensure RADIUSaaS remains up-to-date with the latest updates. A minimum subscription for 50 users per organization is required. <a href="javascript:void(0);" class="is-copy-link">Learn more on our license page</a>.',additionalCopy:'Learn more on our <a href="javascript:void(0);" class="is-copy-link">license page</a>.<br/>Are you a non-profit organization? Please <a class="is-copy-link" href="javascript:void(0);">contact us</a> for special pricing.'},products:F}},v={args:{stage:{bgColor:"var(--color-primary)",headline:"Start now",description:"Try SCEPman for free or buy it now. We would also be happy to create an individual quote for you.",background:{img:"svg/product-backgrounds/radiusaas-background.svg",alt:"Alt text"},cards:{tabs:!0,list:[{title:"Buy now",id:"buy",link:{href:"#buy"}},{title:"Try for free",id:"try",link:{href:"#try"}},{title:"Get quote",id:"quote",link:{href:"#quote"}}]},shape:{isActive:!0,color:"var(--color-white)"}}}},b={args:{stage:{bgColor:"var(--color-blue-light);",headline:"Become a Partner",description:"We aim to build the best technology for enabling Microsoft 365 and Windows workstations in enterprises. To support that goal, we are looking for a global community of trusted partners to help deliver sales, service, and support.",background:{img:"svg/product-backgrounds/radiusaas-background.svg",alt:"Alt text"},cards:{list:[{title:"Register as a Partner",description:"Do you want to resell TerraProvider? Contact us!",cta:{text:"Apply now",href:"#partner",skin:"primary is-cutoff"}},{title:"Partner Portal",description:"Already a registered partner? Access the partner center.",cta:{text:"Sign in",href:"#signin",skin:"primary is-cutoff",target:"_blank"}}]},shape:{isActive:!0,color:"var(--color-white)"}}}};var j,R,E;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    light: false,
    stage: {
      bgColor: 'var(--color-secondary)',
      headline: "A price that's right for you",
      description: "Priced <a href='https://docs.radiusaas.com/licensing'><font color='#000000'>per user</font></a> with unlimited devices - no base price, setup fees or complicated product tiers. Get access to all features. ",
      shape: {
        isActive: true,
        color: 'var(--color-white)'
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
}`,...(E=(R=f.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var I,N,M;_.parameters={..._.parameters,docs:{...(I=_.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    stage: {
      bgColor: 'var(--color-secondary)',
      headline: "A price that's right for you",
      shape: {
        isActive: true,
        color: 'var(--color-white)'
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
}`,...(M=(N=_.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var O,q,D;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
        color: 'var(--color-white)'
      }
    }
  }
}`,...(D=(q=v.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var B,H,z;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    stage: {
      bgColor: 'var(--color-blue-light);',
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
        color: 'var(--color-white)'
      }
    }
  }
}`,...(z=(H=b.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};const Xe=["Default","NoDescription","Tabs","Cards"];export{b as Cards,f as Default,_ as NoDescription,v as Tabs,Xe as __namedExportsOrder,Ke as default};
