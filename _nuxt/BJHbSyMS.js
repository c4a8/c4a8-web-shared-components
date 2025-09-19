var re=Object.defineProperty;var oe=(o,t,e)=>t in o?re(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var A=(o,t,e)=>oe(o,typeof t!="symbol"?t+"":t,e);import{_ as ae}from"./BR50kyFp.js";import{_ as ie}from"./Dm6jW46a.js";import{_ as le}from"./BRSZA843.js";import{_ as Q}from"./B9yBj5AQ.js";import{au as ce,a9 as de,_ as C,c,o as a,a as u,b as r,d as p,t as g,w as f,n as d,T as ue,E as pe,k as L,p as ge,e as b,m as j,F as R,r as me,f as he,g as E}from"./Bzskhjow.js";import{_ as fe}from"./DJ4-pFMl.js";import{_ as _e}from"./Cmx1DRTb.js";import{P as Z}from"./FWnOHSgg.js";import"./REbE9nHb.js";import"./CNA0L6dr.js";class Y extends ce{constructor(t,e,l){super(t,e),this.selectedValue=0,this.products=null,this.range=null,this.pricing=l;const i=this.pricing?this.pricing:{format:"de-DE",currency:"EUR",defaultPlan:"monthly"};this.priceFormatter=new Intl.NumberFormat(i.format,{style:"currency",currency:i.currency,maximumFractionDigits:0}),this.selectedPlan=["monthly","annual"].includes(i.defaultPlan)?i.defaultPlan:console.error('Please provide a valid plan in site.data.products.pricing.defaultPlan: "annual" or "monthly"!'),this.currentPrice=0,this.init()}init(){if(window.handleChange)return console.error("remove handleChange from app.js");this.bindEvents()}bindEvents(){const t=this.root.querySelector(".pricing-slider__info");t&&t.addEventListener("click",this.handleInfoClick.bind(this)),window.handleChange=this.handlePricingSlider.bind(this),window.fixSliderText=this.fixText.bind(this),window.prepareSlider=this.prepare.bind(this)}handleInfoClick(){const t=this.root.querySelector(".pricing-slider__modal");de.open(t)}handlePricingSlider({from:t}){this.selectedValue=parseInt(t);const e=this.getRecommendedProduct(this.selectedValue);if(!e)return;const l=this.selectedValue-e.value;var i=parseInt(e.price[this.selectedPlan])+l*parseFloat(e.additionalUsersFee[this.selectedPlan]);this.currentPrice=i,this.updateElements(this.priceFormatter.format(i),e.title,this.formatExtraUsers(l))}getRecommendedProduct(t){let e=null;const l=`No products found for value ${t} in site.data.products.list`;if(this.products)return this.products.forEach(function(i){i.value<=t&&(e=i)}),e||console.error(l),e;console.error(l)}formatExtraUsers(t){const e=this.range.unit;return t>0?"+ "+t+" "+e:""}prepare(t){const e=document.querySelector(".js-slider-data"),l=5;this.products=JSON.parse(e.dataset.products),this.range=JSON.parse(e.dataset.range),this.selectedValue=t.from,setTimeout(()=>{this.fixText()},l)}fixText(){const t=document.querySelector(".irs-single"),e=t.innerHTML;e.includes(this.range.unit)||(t.innerHTML=[e,this.range.unit].join(" "))}updateElements(t,e,l){const i=document.querySelector(".js-result-price"),n=document.querySelector(".js-result-product"),m=document.querySelector(".js-result-extra");i.innerHTML=t,n.innerHTML=e,m.innerHTML=l,this.fixText()}}A(Y,"rootSelector",".pricing-slider");const K={tagName:"pricing-slider",props:{slider:Object,tooltip:String,modalId:String,products:Object,light:{type:Boolean,default:!1}},data(){return{loading:!0,options:{type:"single",hide_min_max:!0,foreground_target_el:null,secondary_target_el:null,secondary_val:{steps:null,values:null},result_max_target_el:null,hide_from_to:!1,result_min_target_el:".js-result-price",extra_classes:"range-slider-custom"}}},mounted(){this.pollForJQuery()},computed:{pricingSliderRange(){return this.slider&&this.slider.range?this.slider.range:{}},hsIonRangeSliderOptions(){return{extra_classes:"range-slider-custom",hide_from_to:!1,min:this.pricingSliderRange.min,max:this.pricingSliderRange.max,from:this.pricingSliderRange.from,step:this.pricingSliderRange.step,result_min_target_el:".js-result-price"}}},methods:{handleRangeSliderStart(o){!window.prepareSlider||!window.handleChange||(window.prepareSlider(o),window.handleChange(o))},handleRangeSliderChange(o){window.handleChange&&window.handleChange(o)},bindEvents(){document.addEventListener(pe.CLIENT_ONLY_LIB_LOADED,this.initRangeSlider)},initRangeSlider(){!this.$refs.slider||!window.$||(this.loading=!1,window.$(this.$refs.slider).ionRangeSlider(this.options))},init(){var n;const{min:o,max:t,from:e,step:l,unit:i}=this.pricingSliderRange;Object.assign(this.options,{min:o,max:t,from:e,step:l,postfix:` ${i}`}),this.options.onStart=this.handleRangeSliderStart,this.options.onChange=this.handleRangeSliderChange,this.$refs.root&&new Y(this.$refs.root,null,(n=this.products)==null?void 0:n.pricing),ue.isClientOnlyLibLoaded()?this.initRangeSlider():this.bindEvents()},pollForJQuery(){let t=0;const e=()=>{if(window.$){this.init();return}t++,t<30&&setTimeout(e,100)};e()}}},be=["data-range","data-products"],ye=["data-hs-ion-range-slider-options"],ve={class:"product-stage__result-container"},we={class:"text-center text-midnight"},ke={class:"pricing-slider__info font-size-5"},xe={key:0},Se={class:"container"},Ce={class:"row"},Pe=["innerHTML"];function Te(o,t,e,l,i,n){var _;const m=le,h=Q;return a(),c("div",{class:d(["pricing-slider",{"pricing-slider--loading":i.loading,"pricing-slider--light":e.light}]),ref:"root"},[n.pricingSliderRange?(a(),c("div",{key:0,class:"js-slider-data","data-range":JSON.stringify(n.pricingSliderRange),"data-products":JSON.stringify((_=e.products)==null?void 0:_.list)},[r("input",{class:"pricing-slider__slider js-ion-range-slider",type:"text","data-hs-ion-range-slider-options":JSON.stringify(n.hsIonRangeSliderOptions),ref:"slider"},null,8,ye)],8,be)):u("",!0),r("div",ve,[r("div",we,[t[0]||(t[0]=r("span",{class:"font-size-5 js-result-price"},"0",-1)),r("span",ke,[p(m,{icon:"info",size:"small"})]),n.pricingSliderRange&&n.pricingSliderRange.resultPer?(a(),c("span",xe,"| "+g(n.pricingSliderRange.resultPer),1)):u("",!0)]),t[1]||(t[1]=r("div",{class:"text-center text-midnight"},[r("strong",{class:"js-result-product"}),r("span",{class:"js-result-extra"})],-1)),p(h,{slim:!0,center:!0,class:"pricing-slider__modal","modal-id":e.modalId},{default:f(()=>[r("div",Se,[r("div",Ce,[r("div",{class:"col",innerHTML:e.tooltip},null,8,Pe)])])]),_:1},8,["modal-id"])])],2)}const Ae=C(K,[["render",Te]]);K.__docgenInfo={exportName:"default",displayName:"pricing-slider",description:"",tags:{},props:[{name:"slider",type:{name:"object"}},{name:"tooltip",type:{name:"string"}},{name:"modalId",type:{name:"string"}},{name:"products",type:{name:"object"}},{name:"light",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/pricing-slider.vue"]};const X={props:{href:String}},Le=["href"];function je(o,t,e,l,i,n){return e.href?(a(),c("a",{key:0,href:e.href},[L(o.$slots,"default")],8,Le)):L(o.$slots,"default",{key:1})}const Re=C(X,[["render",je]]);X.__docgenInfo={exportName:"default",displayName:"conditional-link",description:"",tags:{},props:[{name:"href",type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/conditional-link.vue"]};const $={tagName:"product-stage",props:{stage:Object,products:Object,light:{type:Boolean,default:!0}},computed:{shapeClasses(){return this.overlapping?"position-absolute bottom-0 left-0 z-index-1 w-100":"position-relative z-index-1"},cardWrapperClasses(){var t;return["product-stage__card-wrapper",`col-${(t=this.cards)!=null&&t.tabs?"":"lg-"}`+12/this.cards.list.length,{"px-1 px-lg-3 nav-item":this.cards.tabs,"mb-6 mb-md-8 mb-lg-0":!this.cards.tabs}]},bgColor(){return(this.stage.bgColor||"var(--color-primary)").replace(";","")},shape(){return this.stage.shape||null},cards(){return this.stage.cards||null},overlapping(){return this.cards&&this.stage.headline||this.stage.description}},methods:{hasLink(o){return!!o.link}}},Ee=["innerHTML"],Ie={class:"container"},Me={class:"row"},Ne=["innerHTML"],Be={key:2,class:"row justify-content-center py-6"},Oe=["innerHTML"],qe={key:3,class:"row justify-content-center py-6"},De={key:4,class:"space-bottom-2 space-bottom-lg-3"},Ue={class:"d-flex flex-column align-items-center position-relative z-index-2"},ze={key:1,class:"mb-6 flex-grow-1"},He={key:0,class:"align-items-center d-flex flex-column justify-content-center text-center col-md-4 py-10",style:{"background-color":"var(--color-black-4)"}},We={class:"font-size-3"},Fe={class:"font-size-1 w-50"};function Ve(o,t,e,l,i,n){const m=ae,h=ie,_=Ae,ee=Q,te=fe,se=Re,ne=_e;return a(),c("section",{class:"product-stage position-relative overflow-hidden",style:he({backgroundColor:n.bgColor})},[t[0]||(t[0]=ge('<div class="svg-shape-animation"><svg class="position-absolute" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1440 965" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.0591615" fill-rule="evenodd" clip-rule="evenodd" d="M0 0L316 695L1441 965L0 840V0Z" fill="url(#paint0_linear)"></path><path opacity="0.0339753" fill-rule="evenodd" clip-rule="evenodd" d="M747 147L1439 965L1440 0H340L747 147Z" fill="black"></path><path opacity="0.174464" fill-rule="evenodd" clip-rule="evenodd" d="M646 0L1261 222L1368 685L628 890L646 0Z" fill="white"></path><defs><linearGradient id="paint0_linear" x1="-327.295" y1="767.888" x2="135.719" y2="1396.04" gradientUnits="userSpaceOnUse"><stop></stop><stop offset="1" stop-color="white" stop-opacity="0.01"></stop></linearGradient></defs></svg></div>',1)),r("div",{class:d(["product-stage__content","position-relative",{container:!e.stage.cutoff},{"d-flex justify-content-center":e.stage.cutoff}])},[r("div",{class:d(e.stage.cutoff?"row position-relative justify-content-end":"")},[r("div",{class:d(e.stage.cutoff?"col col-lg-6 px-10":"")},[r("div",{class:d(["space-top-2 space-top-lg-4 space-top-xl-5 space-bottom-1 space-bottom-lg-2",{"text-white":e.light}])},[p(m,{classes:e.stage.headlineClasses,level:e.stage.headlineLevel||"h1"},{default:f(()=>[E(g(e.stage.headline),1)]),_:1},8,["classes","level"]),e.stage.description?(a(),c("p",{key:0,class:"lead mt-5 px-0",innerHTML:e.stage.description},null,8,Ee)):u("",!0),p(h,j(e.stage.cta,{style:{color:e.stage.cta.color}}),null,16,["style"])],2),e.stage.slider&&e.products?(a(),b(_,{key:0,slider:e.stage.slider,tooltip:e.stage.tooltip,"modal-id":e.stage.modalId,products:e.products,light:e.light},null,8,["slider","tooltip","modal-id","products","light"])):e.stage.modalId&&e.stage.tooltip?(a(),b(ee,{key:1,slim:!0,center:!0,class:"pricing-slider__modal","modal-id":e.stage.modalId},{default:f(()=>[r("div",Ie,[r("div",Me,[r("div",{class:"col",innerHTML:e.stage.tooltip},null,8,Ne)])])]),_:1},8,["modal-id"])):u("",!0),e.stage.additionalCopy?(a(),c("div",Be,[r("div",{class:d(["text-center",{"text-white":e.light}]),innerHTML:e.stage.additionalCopy},null,10,Oe)])):u("",!0),e.stage.buttons?(a(),c("div",qe,[p(te,{list:e.stage.buttons},null,8,["list"])])):(a(),c("div",De)),n.cards?(a(),c("ul",{key:5,class:d(["row nav nav-pills",{"px-1 px-lg-0":n.cards.tabs}]),role:"tablist"},[(a(!0),c(R,null,me(n.cards.list,(s,S)=>{var P,T;return a(),c("li",{key:S,class:d(n.cardWrapperClasses)},[p(se,{link:n.hasLink(s),href:(P=s==null?void 0:s.link)==null?void 0:P.href,target:(T=s==null?void 0:s.link)==null?void 0:T.target,class:d(["product-stage__tab h-100 rounded position-relative d-block",{active:n.cards.tabs&&S===0}]),id:s!=null&&s.id?(s==null?void 0:s.id)+"-tab":"","data-toggle":"pill",role:"tab","aria-controls":s==null?void 0:s.id,"aria-selected":n.cards.tabs&&S===0},{default:f(()=>[r("div",{class:d(["product-stage__tab-content position-relative h-100",{"product-stage__tab-content--alternative-border":n.cards.tabs}])},[r("div",{class:d(["rounded",{"p-2 p-lg-8":s.link,"p-8 bg-white shadow-lg":!s.link}])},[r("div",Ue,[s.title?(a(),c("h2",{key:0,class:d(["font-size-3 mb-2 mb-md-6 text-center",{"text-primary":s.link}])},g(s.title),3)):u("",!0),s.description?(a(),c("p",ze,g(s.description),1)):u("",!0),s.cta!==s.href?(a(),b(h,{key:2,text:s.cta.text,href:s.cta.href,target:s.cta.target,skin:s.cta.skin,classes:"align-self-center z-index-2"},null,8,["text","href","target","skin"])):u("",!0)])],2)],2)]),_:2},1032,["link","href","target","class","id","aria-controls","aria-selected"])],2)}),128))],2)):u("",!0)],2),e.stage.cutoff?(a(),c("div",He,[p(m,{level:"h2"},{default:f(()=>[E(g(e.stage.cutoff.headline),1)]),_:1}),r("p",We,g(e.stage.cutoff.subline),1),p(h,j(e.stage.cutoff.cta,{class:"mt-4 mb-8",width:"w-60"}),null,16),r("p",Fe,g(e.stage.cutoff.copy),1)])):u("",!0)],2)],2),n.shape?(a(),c(R,{key:0},[n.shape.isActive!==!1?(a(),b(ne,{key:0,align:"bottom",peak:"left",obliquity:4,classes:n.shapeClasses,color:n.shape.color},null,8,["classes","color"])):u("",!0)],64)):u("",!0)],4)}const Je=C($,[["render",Ve]]);$.__docgenInfo={exportName:"default",displayName:"product-stage",description:"",tags:{},props:[{name:"stage",type:{name:"object"}},{name:"products",type:{name:"object"}},{name:"light",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/product-stage.vue"]};const rt={argTypes:{},component:Je,title:"Components/Product Stage"},y={args:{light:!1,stage:{bgColor:"var(--color-secondary)",headline:"A price that's right for you",description:"Priced <a href='https://docs.radiusaas.com/licensing'><font color='#000000'>per user</font></a> with unlimited devices - no base price, setup fees or complicated product tiers. Get access to all features. ",shape:{isActive:!0,color:"var(--color-white)"},background:{img:"svg/product-backgrounds/radiusaas-background.svg",alt:"Alt text"},slider:{range:{min:50,max:2e4,step:25,from:1e3,unit:"Users",resultPer:"mo"}},buttons:[{skin:"primary is-cutoff",ctaText:"Lorem ipsum dolor sit amet",ctaHref:"javascript:void(0);",onSurface:!0}],tooltip:"lorem ipsum dolor sit amet"},products:Z}},v={args:{stage:{bgColor:"var(--color-secondary)",headline:"A price that's right for you",shape:{isActive:!0,color:"var(--color-white)"},background:{img:"svg/product-backgrounds/radiusaas-background.svg",alt:"Alt text"},slider:{range:{min:50,max:2e4,step:25,from:1e3,unit:"Users",resultPer:"mo"}},modalId:"product-stage-modal",tooltip:'<h3>Pricing Details</h3>All prices exclude sales tax. Our offers exclusively address professional customers. Billing for RADIUSaaS is based on a per-user model, with no setup or base fees. The subscription allows each user to authenticate to multiple devices. Subscribers are granted full access to all features, and we ensure RADIUSaaS remains up-to-date with the latest updates. A minimum subscription for 50 users per organization is required. <a href="javascript:void(0);" class="is-copy-link">Learn more on our license page</a>.',additionalCopy:'Learn more on our <a href="javascript:void(0);" class="is-copy-link">license page</a>.<br/>Are you a non-profit organization? Please <a class="is-copy-link" href="javascript:void(0);">contact us</a> for special pricing.'},products:Z}},w={args:{stage:{bgColor:"var(--color-primary)",headline:"Start now",description:"Try SCEPman for free or buy it now. We would also be happy to create an individual quote for you.",background:{img:"svg/product-backgrounds/radiusaas-background.svg",alt:"Alt text"},cards:{tabs:!0,list:[{title:"Buy now",id:"buy",link:{href:"#buy"}},{title:"Try for free",id:"try",link:{href:"#try"}},{title:"Get quote",id:"quote",link:{href:"#quote"}}]},shape:{isActive:!0,color:"var(--color-white)"}}}},k={args:{stage:{bgColor:"var(--color-blue-light);",headline:"Become a Partner",description:"We aim to build the best technology for enabling Microsoft 365 and Windows workstations in enterprises. To support that goal, we are looking for a global community of trusted partners to help deliver sales, service, and support.",background:{img:"svg/product-backgrounds/radiusaas-background.svg",alt:"Alt text"},cards:{list:[{title:"Register as a Partner",description:"Do you want to resell TerraProvider? Contact us!",cta:{text:"Apply now",href:"#partner",skin:"primary is-cutoff"}},{title:"Partner Portal",description:"Already a registered partner? Access the partner center.",cta:{text:"Sign in",href:"#signin",skin:"primary is-cutoff",target:"_blank"}}]},shape:{isActive:!0,color:"var(--color-white)"}}}},x={args:{stage:{bgColor:"var(--color-orange);",headline:"Start now",description:"When signing up you get access to the RJ Portal within your Microsoft 365 tenant to find out about all the awesome possibilities to manage Windows and Mac applications without leaving the platform. But also managing all devices, users and groups, get access to open source remediations scripts and automation and so much more...<br></br><a>Book 30 minutes with Ugur now</a>",cutoff:{headline:"Ready to Explore?",subline:"Welcome to our Portal!",copy:"This sign in button redirects you to the basic Entra login within your tenant and asks you to consent only basic profile access to allow us to read your name and email address."},cta:{text:"Book 30 minutes with Ugur now",href:"",icon:"booking",color:"var(--color-sahara-sand)",link:!0,underline:!0}}}};var I,M,N;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(N=(M=y.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var B,O,q;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(q=(O=v.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var D,U,z;w.parameters={...w.parameters,docs:{...(D=w.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(z=(U=w.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var H,W,F;k.parameters={...k.parameters,docs:{...(H=k.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(F=(W=k.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var V,J,G;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    stage: {
      bgColor: 'var(--color-orange);',
      headline: 'Start now',
      description: 'When signing up you get access to the RJ Portal within your Microsoft 365 tenant to find out about all the awesome possibilities to manage Windows and Mac applications without leaving the platform. But also managing all devices, users and groups, get access to open source remediations scripts and automation and so much more...<br></br><a>Book 30 minutes with Ugur now</a>',
      cutoff: {
        headline: 'Ready to Explore?',
        subline: 'Welcome to our Portal!',
        copy: 'This sign in button redirects you to the basic Entra login within your tenant and asks you to consent only basic profile access to allow us to read your name and email address.'
      },
      cta: {
        text: 'Book 30 minutes with Ugur now',
        href: '',
        icon: 'booking',
        color: 'var(--color-sahara-sand)',
        link: true,
        underline: true
      }
    }
  }
}`,...(G=(J=x.parameters)==null?void 0:J.docs)==null?void 0:G.source}}};const ot=["Default","NoDescription","Tabs","Cards","Cutoff"];export{k as Cards,x as Cutoff,y as Default,v as NoDescription,w as Tabs,ot as __namedExportsOrder,rt as default};
