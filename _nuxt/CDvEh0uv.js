import{_ as N}from"./Dz20wBT1.js";import{_ as L}from"./Dk5yPmrG.js";import{_ as D,c as a,o as i,d as w,f as y,T as m,b as n,a as g,n as p,t as x,F as A,r as R,e as k}from"./BU-HxDal.js";import{_ as U}from"./9LeK0cJi.js";import{_ as H}from"./BYiouHr1.js";import{U as O}from"./BqaZ3Fkv.js";import{g as h}from"./esXqDRs6.js";const T={tagName:"img-filter",props:{img:String,alt:String,cloudinary:{default:null},lazy:Boolean,classes:String,color:String},computed:{cloudinaryValue(){return m.isTrue(this.cloudinary)},colorValue(){return this.color?this.color:"#000520"},svgFilter(){const s=parseFloat((m.red(this.colorValue)/255).toFixed(5)),l=parseFloat((m.green(this.colorValue)/255).toFixed(5)),e=parseFloat((m.blue(this.colorValue)/255).toFixed(5)),c=1,b=Math.max(s,l,e),o=Math.min(s,l,e),r=100*(b+o)/2+"%",u="img-to-color";return`
        filter: saturate(0%) brightness(0%) invert(${r}) opacity(${c});
        filter: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg">          <filter id="${u}" color-interpolation-filters="sRGB">            <feColorMatrix type="matrix" values="              0 0 0 0 ${s}              0 0 0 0 ${l}              0 0 0 0 ${e}              0 0 0 ${c} 0            "/>          </filter>        </svg>
 #${u}')
      `}}};function j(s,l,e,c,b,o){const r=L;return i(),a("div",{class:"img-filter vue-component",style:y(o.svgFilter)},[w(r,{img:e.img,alt:e.alt,cloudinary:o.cloudinaryValue,lazy:e.lazy},null,8,["img","alt","cloudinary","lazy"])],4)}const $=D(T,[["render",j]]);T.__docgenInfo={exportName:"default",displayName:"img-filter",description:"",tags:{},props:[{name:"img",type:{name:"string"}},{name:"alt",type:{name:"string"}},{name:"cloudinary",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"lazy",type:{name:"boolean"}},{name:"classes",type:{name:"string"}},{name:"color",type:{name:"string"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/img-filter.vue"]};const I={tagName:"step-list",props:{background:{type:String,default:"var(--color-primary-accent)"},color:{type:String,default:"var(--color-copy-light)"},headline:{type:Object,default:null},subline:{type:String,default:""},list:{type:Array,required:!0},variant:{type:String,default:null},sticky:{type:Boolean,default:!1}},mounted(){this.$refs.root&&O.init([this.$refs.root])},methods:{animationIndex(s,l=!1){return s*2+(l?2:1)}}},q={class:"container"},J={key:0,class:"step-list__header row fade-in-bottom","data-utility-animation-step":"1"},Z={class:"step-list__subline font-size-2"},Q={class:"row"},X={class:"col-lg-12"},Y={class:"step-list__list"},ee=["data-content"],te={key:0,class:"step-list__counter-icon"},ne={class:"step-list__title step-list__title--no-small"},ie={class:"step-list__title step-list__title--no-default"},se=["innerHTML"];function le(s,l,e,c,b,o){const r=N,u=$,M=L,K=U,G=H;return i(),a("div",{ref:"root",class:p(["step-list utility-animation",[e.sticky?"is-sticky-scroller":"",e.variant?"step-list--"+e.variant:""]]),style:y(e.variant?null:{"--step-list-background":e.background,"--step-list-color":e.color})},[n("div",q,[e.headline?(i(),a("div",J,[n("div",{class:p(["col",e.variant?"":"col-lg-8"])},[w(r,{text:e.headline.text,level:e.headline.level,classes:e.headline.classes+" step-list__headline"},null,8,["text","level","classes"]),n("div",Z,x(e.subline),1)],2)])):g("",!0),n("div",Q,[n("div",X,[n("ul",Y,[(i(!0),a(A,null,R(e.list,(t,d)=>(i(),a(A,{key:d},[n("li",{class:"step-list__list-element font-size-2 fade-in-bottom","data-utility-animation-step":"1",style:y(`--utility-animation-index: ${d+1}`)},[n("div",{class:p(["step-list__counter",[t.step||t.img?"step-list__counter--manual":"",t.overlapping?"step-list__counter--overlapping":""]]),"data-content":t.step||""},[t.img?(i(),a("div",te,[t.tint?(i(),k(u,{key:0,img:t.img,cloudinary:t.cloudinary,alt:t.alt},null,8,["img","cloudinary","alt"])):(i(),k(M,{key:1,src:t.img,alt:t.alt},null,8,["src","alt"]))])):g("",!0)],10,ee),n("div",ne,x(t.title),1),n("div",{class:p(["step-list__content font-size-1",e.variant?"":"light"])},[n("div",ie,x(t.title),1),n("div",{innerHTML:t.content},null,8,se),t.ctaText?(i(),k(K,{key:0,text:t.ctaText,href:t.ctaHref,link:t.link,target:t.target,type:t.type},null,8,["text","href","link","target","type"])):g("",!0)],2)],4),d<e.list.length-1?(i(),a("li",{key:0,class:"step-list__icon fade-in-bottom","data-utility-animation-step":"1",style:y(`--utility-animation-index: ${d+2}`)},[w(G,{icon:"arrow-narrow",color:"var(--color-step-list-highlight)"})],4)):g("",!0)],64))),128))])])])])],6)}const ae=D(I,[["render",le]]);I.__docgenInfo={exportName:"default",displayName:"step-list",description:"",tags:{},props:[{name:"background",type:{name:"string"},defaultValue:{func:!1,value:"'var(--color-primary-accent)'"}},{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'var(--color-copy-light)'"}},{name:"headline",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"subline",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"list",type:{name:"array"},required:!0},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"sticky",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/step-list.vue"]};const pe={title:"Components/Step List",component:ae},_={args:{headline:{text:"Unser Bewerbungsprozess",level:"h3"},subline:"Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans.",list:[{title:"Lorem ipsum dolor",content:"Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie"},{title:"Sit amet, consectet",content:"Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans."},{title:"Lorem ipsum dolor sit",content:"Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie"}]}},f={args:{variant:"small",headline:{text:"Experiencing & Pilot Package",level:"h2"},list:[{title:"Envisioning & Experience Workshop",content:'<ul class="dashed"> <li>AVD Architektur</li> <li>Roadmap Implementierung</li> <li>Lizenzierung</li> <li>Bewertung Benutzer & Apps (limitiert auf 3-5 Apps)</li> <li>Prod. Anforderungen & Governance</li> <li>Überprüfung des aktuellen Azure Footprint</li> <li><strong><span class="highlight-yellow">Konzept Po</span>werPoint</strong></li> </ul>'},{title:"Pilot Implementaion",content:'<ul class="dashed"> <li>Pilot AVD Implementierung</li> <li>Manuelle Einrichtung eines Multisession Images mit 3 Geschäftsanwendungen</li> <li>Setup auf Basis von Best Practices für AVD Security & Networking</li> <li>Standard AVD Policies (GPOs)</li> <li>Automatische AVD Herunterskalierung</li> <li><strong>Ideal zum Te<span class="highlight-yellow">sten von Erfahrun</span>gen und Leistungen</strong></li> </ul>'},{step:99,title:"Roadmap to Production",content:'<ul class="dashed"> <li><strong>Ro<span class="highlight-yellow">admap zum produktiven</span> Einsatz</strong></li> <li>Präsentation der Pilot- und Testergebnisse</li> <li>Überprüfung zusätzlicher Geschäftsanwendungen</li> <li>Prozess Diskussion zu:</li> <ul class="dashed"> <li>Updates (OS & Apps)</li> <li>Monitoring</li> <li>Printing</li> </ul> </ul>'}]}},v={args:{variant:"small",list:[{img:h("../svg/icons/icon-hand.svg"),tint:!0,alt:"lorem ipsum dolor sit amet, consectetur adipis",title:"Anmelden",content:"10. - 12.11.2021",ctaText:"Jetzt registrieren",ctaHref:"https://www.eventbrite.de/e/138562252427",link:!0},{img:h("../svg/icons/icon-consulting-services.svg"),alt:"lorem ipsum dolor sit amet, consectetur adipis",title:"Wo",content:"Remote per Teams Meeting"},{img:h("../svg/icons/phone-mail.svg"),tint:!0,alt:"lorem ipsum dolor sit amet, consectetur adipis",title:"Gebühr",content:"1300,00 € pro Teilnehmer<br/>(200,00 € Discount bei laufenden Projekten oder ab zwei Teilnehmern eines Unternehmens)"},{img:h("../svg/icons/icon-checklist-write.svg"),overlapping:!0,alt:"lorem ipsum dolor sit amet, consectetur adipis",title:"Zielgruppe",content:"Windows Client Architekten, Cloud Architekten, SCCM Spezialisten"}]}};var z,S,P;_.parameters={..._.parameters,docs:{...(z=_.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    headline: {
      text: 'Unser Bewerbungsprozess',
      level: 'h3'
    },
    subline: 'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans.',
    list: [{
      title: 'Lorem ipsum dolor',
      content: 'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie'
    }, {
      title: 'Sit amet, consectet',
      content: 'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans.'
    }, {
      title: 'Lorem ipsum dolor sit',
      content: 'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie'
    }]
  }
}`,...(P=(S=_.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var V,B,W;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: 'small',
    headline: {
      text: 'Experiencing & Pilot Package',
      level: 'h2'
    },
    list: [{
      title: 'Envisioning & Experience Workshop',
      content: '<ul class="dashed"> <li>AVD Architektur</li> <li>Roadmap Implementierung</li> <li>Lizenzierung</li> <li>Bewertung Benutzer & Apps (limitiert auf 3-5 Apps)</li> <li>Prod. Anforderungen & Governance</li> <li>Überprüfung des aktuellen Azure Footprint</li> <li><strong><span class="highlight-yellow">Konzept Po</span>werPoint</strong></li> </ul>'
    }, {
      title: 'Pilot Implementaion',
      content: '<ul class="dashed"> <li>Pilot AVD Implementierung</li> <li>Manuelle Einrichtung eines Multisession Images mit 3 Geschäftsanwendungen</li> <li>Setup auf Basis von Best Practices für AVD Security & Networking</li> <li>Standard AVD Policies (GPOs)</li> <li>Automatische AVD Herunterskalierung</li> <li><strong>Ideal zum Te<span class="highlight-yellow">sten von Erfahrun</span>gen und Leistungen</strong></li> </ul>'
    }, {
      step: 99,
      title: 'Roadmap to Production',
      content: '<ul class="dashed"> <li><strong>Ro<span class="highlight-yellow">admap zum produktiven</span> Einsatz</strong></li> <li>Präsentation der Pilot- und Testergebnisse</li> <li>Überprüfung zusätzlicher Geschäftsanwendungen</li> <li>Prozess Diskussion zu:</li> <ul class="dashed"> <li>Updates (OS & Apps)</li> <li>Monitoring</li> <li>Printing</li> </ul> </ul>'
    }]
  }
}`,...(W=(B=f.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var C,F,E;v.parameters={...v.parameters,docs:{...(C=v.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'small',
    list: [{
      img: getAssetPath('../svg/icons/icon-hand.svg'),
      tint: true,
      alt: 'lorem ipsum dolor sit amet, consectetur adipis',
      title: 'Anmelden',
      content: '10. - 12.11.2021',
      ctaText: 'Jetzt registrieren',
      ctaHref: 'https://www.eventbrite.de/e/138562252427',
      link: true
    }, {
      img: getAssetPath('../svg/icons/icon-consulting-services.svg'),
      alt: 'lorem ipsum dolor sit amet, consectetur adipis',
      title: 'Wo',
      content: 'Remote per Teams Meeting'
    }, {
      img: getAssetPath('../svg/icons/phone-mail.svg'),
      tint: true,
      alt: 'lorem ipsum dolor sit amet, consectetur adipis',
      title: 'Gebühr',
      content: '1300,00 € pro Teilnehmer<br/>(200,00 € Discount bei laufenden Projekten oder ab zwei Teilnehmern eines Unternehmens)'
    }, {
      img: getAssetPath('../svg/icons/icon-checklist-write.svg'),
      overlapping: true,
      alt: 'lorem ipsum dolor sit amet, consectetur adipis',
      title: 'Zielgruppe',
      content: 'Windows Client Architekten, Cloud Architekten, SCCM Spezialisten'
    }]
  }
}`,...(E=(F=v.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};const he=["Default","Small","SmallWithIcons"];export{_ as Default,f as Small,v as SmallWithIcons,he as __namedExportsOrder,pe as default};
