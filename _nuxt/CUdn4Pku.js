import{_ as y}from"./S0YkLtJP.js";import{_ as D}from"./60Oeallx.js";import{_ as M,c as a,d as p,b as r,w as B,f as S,n as g,T as b,o as l,a as c,h as F,i as A,t as _,F as V,r as H,e as T,m as O}from"./AtAUNdjP.js";const I={tagName:"content-scroller",data(){return{blockScrollPercentage:[],scrollDistancePercentage:0,minHeight:0,blockCount:0,isScrolledUpOut:!1,isScrolledDownOut:!1}},computed:{classList(){return["content-scroller vue-component",this.overlappingSizeValue,this.skin?`content-scroller--${this.skin}`:""]},blocksValue(){return b.getJSON(this.blocks)},headlineValue(){const e=b.getJSON(this.headline);return{...e,level:e.level||"h2",classes:`content-scroller__headline ${e.classes||"h3-font-size"}`}},overlappingSizeValue(){return this.overlappingSize||this.skin||"mt-md-n10"},style(){return{"--content-scroller-min-height":`${this.minHeight}px`}}},props:{headline:{default:null},subline:{type:String,default:""},sublineClasses:{type:String,default:null},blocks:Array,overlappingSize:String,skin:{type:String,default:""},footerHeadline:{type:String,default:""},footerSubline:{type:String,default:""}},mounted(){this.calcBlockCount(),this.$nextTick(()=>{this.handleResize()}),window.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleResize)},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.handleResize)},methods:{handleScroll(){this.calcScrollDistancePercentage(),this.updateBlocks()},handleResize(){this.calcMinHeight(),this.handleScroll()},resetIsScrolledUpOut(){const e=this.$refs.block;e&&(e.forEach((s,n)=>{this.setBlockMinPercentage(n)}),this.isScrolledUpOut=!0)},resetIsScrolledDownOut(){const e=this.$refs.block;e&&(e.forEach((s,n)=>{this.setBlockMaxPercentage(n)}),this.isScrolledDownOut=!0)},setBlockMaxPercentage(e){this.blockScrollPercentage[e]=100},setBlockMinPercentage(e){this.blockScrollPercentage[e]=0},updateBlocks(){if(!this.isScrolledUpOut&&this.scrollDistancePercentage<=0)return this.resetIsScrolledUpOut();if(!this.isScrolledDownOut&&this.scrollDistancePercentage>=100)return this.resetIsScrolledDownOut();if(this.scrollDistancePercentage<=0||this.scrollDistancePercentage>=100)return;this.isScrolledUpOut=!1,this.isScrolledDownOut=!1;const n=100/this.blockCount,u=this.$refs.block;u&&u.forEach((f,t)=>{const i=t*n,d=(t+1)*n;if(this.scrollDistancePercentage>=i&&this.scrollDistancePercentage<=d){let o=(this.scrollDistancePercentage-i)/n*100;this.blockScrollPercentage[t]=o}else this.scrollDistancePercentage<i?this.setBlockMinPercentage(t):this.scrollDistancePercentage>d&&this.setBlockMaxPercentage(t)})},getViewportHeight(){return window.innerHeight},calcScrollDistancePercentage(){const e=this.$el,s=window.scrollY,n=e.getBoundingClientRect().top+window.scrollY,f=e.offsetHeight/2;let t=0;s>=n&&(t=(s-n)/f*100),this.scrollDistancePercentage=t},calcBlockCount(){const e=this.blocks.length;e&&(this.blockCount=e)},calcBlockStyle(e){return[{"--content-scroller-block-scroll-percentage":this.blockScrollPercentage[e]}]},calcMinHeight(){const e=this.$refs.placeholder;e&&(this.minHeight=e.offsetHeight)}}},U={class:"content-scroller__row"},E={class:"content-scroller__grid col"},L={class:"content-scroller__content-wrapper"},R={class:"content-scroller__content"},W={class:"content-scroller__header"},N={key:0,class:"content-scroller__footer"},j=["innerHTML"],Z=["innerHTML"],K={class:"content-scroller__blocks"},J={class:"content-scroller__blocks-placeholder",ref:"placeholder"},Y={class:"content-scroller__blocks-frame"},q={class:"content-scroller__block-space"},G={class:"content-scroller__block-content"};function Q(e,s,n,u,f,t){const i=y,d=D;return l(),a("div",{class:g(t.classList),style:S(t.style)},[p(d,{class:"content-scroller__wrapper"},{default:B(()=>[r("div",U,[r("div",E,[r("div",L,[r("div",R,[r("div",W,[p(i,F(A(t.headlineValue)),null,16),n.subline?(l(),a("p",{key:0,class:g(["content-scroller__subline",n.sublineClasses])},_(n.subline),3)):c("",!0)]),n.footerHeadline||n.footerSubline?(l(),a("div",N,[n.footerHeadline?(l(),a("span",{key:0,class:"content-scroller__headline-footer",innerHTML:n.footerHeadline},null,8,j)):c("",!0),n.footerSubline?(l(),a("p",{key:1,class:"content-scroller__subline-footer",innerHTML:n.footerSubline},null,8,Z)):c("",!0)])):c("",!0)])]),r("div",K,[r("div",J,[r("div",Y,[(l(!0),a(V,null,H(t.blocksValue,(o,k)=>(l(),a("section",{class:g(["content-scroller__block",{"is-left":o.isLeft}]),key:k,ref_for:!0,ref:"block",style:S(t.calcBlockStyle(k))},[r("main",null,[r("div",q,[o.headline?(l(),T(i,O({key:0,ref_for:!0},o.headline,{level:o.headline.level||"h3",classes:"content-scroller__block-headline"}),null,16,["level"])):c("",!0),r("p",G,_(o.content),1)])])],6))),128))])],512)])])])]),_:1}),s[0]||(s[0]=r("div",{class:"content-scroller__background"},null,-1))],6)}const X=M(I,[["render",Q]]);I.__docgenInfo={exportName:"default",displayName:"content-scroller",description:"",tags:{},props:[{name:"headline",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"subline",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"sublineClasses",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"blocks",type:{name:"array"}},{name:"overlappingSize",type:{name:"string"}},{name:"skin",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"footerHeadline",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"footerSubline",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/content-scroller.vue"]};const te={component:X,argTypes:{},title:"Components/Content Scroller"},h={args:{headline:{text:"Egal, welcher Weg Sie in die Cloud führt. Wir bringen Sie mit Azure ans Ziel."},blocks:[{headline:{text:"Ist Ihre Infrastruktur fit für die Cloud?"},content:"Mit Blick auf das Tempo von Produkt- und Prozessdigitalisierung ist der Umstieg auf die Cloud für Unternehmen nur eine Frage der Zeit. Um die Technologie effizient und effektiv zu nutzen, muss Ihre Infrastruktur jedoch bereit dafür sein."},{headline:{text:"Wir decken das komplette Azure Ökosystem ab"},content:"Infrastruktur, DevOps, Anwendungsentwicklung und Sicherheit – mit den Managed Services von glueckkanja erhalten Sie ein Komplettpaket, um das Maximum aus der Cloud herauszuholen"},{headline:{text:"Von der Planung bis zum Betrieb"},content:"123"},{headline:{text:"Der Partner an Ihrer Seite"},content:"Als Microsoft Advanced Specialization Partner unterstützen wir Sie mit umfangreichem Fachwissen bei all Ihren Vorhaben rund um die Cloud und stellen sicher, dass Sie stets von den bestmöglichen Technologien profitieren."}]}},m={args:{headline:{text:"Ihr seid einer Ransomware-Attacke zum Opfer gefallen?"},subline:"Regel Nummer 1: keine Panik. Wir verraten euch, welche Fragen im Fall einer erfolgreichen Cyberattacke aufkommen und wie AzERE diese beantworten würde:",sublineClasses:"mt-lg-10 font-size-3 light wide",blocks:[{headline:{text:"Ist Ihre Infrastruktur fit für die Cloud?"},content:"Mit Blick auf das Tempo von Produkt- und Prozessdigitalisierung ist der Umstieg auf die Cloud für Unternehmen nur eine Frage der Zeit. Um die Technologie effizient und effektiv zu nutzen, muss Ihre Infrastruktur jedoch bereit dafür sein."},{headline:{text:"Wir decken das komplette Azure Ökosystem ab"},content:"Infrastruktur, DevOps, Anwendungsentwicklung und Sicherheit – mit den Managed Services von glueckkanja erhalten Sie ein Komplettpaket, um das Maximum aus der Cloud herauszuholen"},{headline:{text:"Von der Planung bis zum Betrieb"},content:"123"},{headline:{text:"Der Partner an Ihrer Seite"},content:"Als Microsoft Advanced Specialization Partner unterstützen wir Sie mit umfangreichem Fachwissen bei all Ihren Vorhaben rund um die Cloud und stellen sicher, dass Sie stets von den bestmöglichen Technologien profitieren."}]}};var v,P,w;h.parameters={...h.parameters,docs:{...(v=h.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    headline: {
      text: 'Egal, welcher Weg Sie in die Cloud führt. Wir bringen Sie mit Azure ans Ziel.'
    },
    blocks: [{
      headline: {
        text: 'Ist Ihre Infrastruktur fit für die Cloud?'
      },
      content: 'Mit Blick auf das Tempo von Produkt- und Prozessdigitalisierung ist der Umstieg auf die Cloud für Unternehmen nur eine Frage der Zeit. Um die Technologie effizient und effektiv zu nutzen, muss Ihre Infrastruktur jedoch bereit dafür sein.'
    }, {
      headline: {
        text: 'Wir decken das komplette Azure Ökosystem ab'
      },
      content: 'Infrastruktur, DevOps, Anwendungsentwicklung und Sicherheit – mit den Managed Services von glueckkanja erhalten Sie ein Komplettpaket, um das Maximum aus der Cloud herauszuholen'
    }, {
      headline: {
        text: 'Von der Planung bis zum Betrieb'
      },
      content: '123'
      // content:
      // 'Wir beraten Sie nicht nur bei dem Aufbau Ihrer Cloud-Strategie oder der Auswahl der passenden Microsoft Technologien. Wir implementieren diese auch in Ihr Unternehmen und stellen als Managed Service eine optimale Nutzung sicher.',
    }, {
      headline: {
        text: 'Der Partner an Ihrer Seite'
      },
      content: 'Als Microsoft Advanced Specialization Partner unterstützen wir Sie mit umfangreichem Fachwissen bei all Ihren Vorhaben rund um die Cloud und stellen sicher, dass Sie stets von den bestmöglichen Technologien profitieren.'
    }]
  }
}`,...(w=(P=h.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var z,C,x;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    headline: {
      text: 'Ihr seid einer Ransomware-Attacke zum Opfer gefallen?'
    },
    subline: 'Regel Nummer 1: keine Panik. Wir verraten euch, welche Fragen im Fall einer erfolgreichen Cyberattacke aufkommen und wie AzERE diese beantworten würde:',
    sublineClasses: 'mt-lg-10 font-size-3 light wide',
    blocks: [{
      headline: {
        text: 'Ist Ihre Infrastruktur fit für die Cloud?'
      },
      content: 'Mit Blick auf das Tempo von Produkt- und Prozessdigitalisierung ist der Umstieg auf die Cloud für Unternehmen nur eine Frage der Zeit. Um die Technologie effizient und effektiv zu nutzen, muss Ihre Infrastruktur jedoch bereit dafür sein.'
    }, {
      headline: {
        text: 'Wir decken das komplette Azure Ökosystem ab'
      },
      content: 'Infrastruktur, DevOps, Anwendungsentwicklung und Sicherheit – mit den Managed Services von glueckkanja erhalten Sie ein Komplettpaket, um das Maximum aus der Cloud herauszuholen'
    }, {
      headline: {
        text: 'Von der Planung bis zum Betrieb'
      },
      content: '123'
    }, {
      headline: {
        text: 'Der Partner an Ihrer Seite'
      },
      content: 'Als Microsoft Advanced Specialization Partner unterstützen wir Sie mit umfangreichem Fachwissen bei all Ihren Vorhaben rund um die Cloud und stellen sicher, dass Sie stets von den bestmöglichen Technologien profitieren.'
    }]
  }
}`,...(x=(C=m.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};const re=["ContentScroller","ContentScrollerSubline"];export{h as ContentScroller,m as ContentScrollerSubline,re as __namedExportsOrder,te as default};
