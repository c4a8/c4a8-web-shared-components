import{_ as j}from"./DpnW63Nk.js";import{_ as Q}from"./DhcGu0-_.js";import{_ as q}from"./I76iRMrl.js";import{_ as J}from"./C127T35r.js";import{_ as Y,c,a as u,b as o,n as d,d as g,w as $,t as F,e as W,F as C,r as ee,S,T as h,o as s,f as ne,g as ie}from"./CY3frxvQ.js";import{U as w}from"./CN3PkmwI.js";const H={tagName:"accordion",computed:{outsidePreset(){return this.isOutsideImageWebpOrGif?"animated":null},isOutsideImageWebpOrGif(){return this.outsideImage?this.outsideImage.endsWith(".webp")||this.outsideImage.endsWith(".gif"):!1},imageWrapperClasses(){return["accordion__floating-image-wrapper",h.isTrue(this.shadowless)===!0?null:"drop-shadow"]},containerClasses(){return["accordion__container utility-animation container vue-component",this.spacing,this.accordion.image?"accordion--has-image":null]},accordionClasses(){return["accordion utility-animation container mt-6 mb-4 my-lg-8 vue-component",this.accordion.image?"accordion--has-image":null]},fallbackImageClasses(){return["accordion__fallback-image-wrapper",h.isTrue(this.shadowless)===!0?null:"drop-shadow",this.showOutsideImage?S.SHOW:null]},columnClasses(){return["col",h.isTrue(this.left)?null:"text-center"]},headlineClasses(){var e;return`accordion__headline  ${(e=this.accordion)==null?void 0:e.headlineClasses}`}},mounted(){this.accordion.tabs&&(this.selectFallbackImage(),this.isUpperBreakpoint()?this.changeOutsideImage():(this.outsideImage=this.fallbackImage,this.outsideAlt=this.fallbackAlt),this.accordion.tabs.forEach(e=>{this.states.push(!!e.expanded)}),this.$refs.container&&w.init([this.$refs.container]),this.$refs.accordion&&w.init([this.$refs.accordion]))},methods:{isUpperBreakpoint(){return!h.isBelowBreakpoint("md")},selectFallbackImage(){if(!this.fallbackImage){const e=this.getActiveTab();this.fallbackImage=this.accordion.image||(e==null?void 0:e.image),this.fallbackAnimated=this.accordion.image?this.accordion.animated:e.animated,this.fallbackAlt=this.accordion.image?this.accordion.alt:e==null?void 0:e.alt}},getActiveTab(){var a;const e=(a=this.accordion)==null?void 0:a.tabs.filter(i=>i.expanded);return e?e[0]:null},handleClick(e){const a=this.states[e];this.states=this.states.map(i=>!1),this.states[e]=!a,this.isUpperBreakpoint()&&this.changeOutsideImage(e),this.allTabsClosed()&&this.changeToFallbackImage()},changeToFallbackImage(){this.showOutsideImage=!0,this.accordion.image=this.fallbackImage,this.outsideImage=this.fallbackImage,this.outsideAnimated=this.fallbackAnimated,this.outsideAlt=this.fallbackAlt},changeOutsideImage(e){const a=this.getTabByIndex(e);this.showOutsideImage=!0,this.outsideImage=(a==null?void 0:a.image)||this.fallbackImage,this.outsideAnimated=a!=null&&a.image?a.animated:this.fallbackAnimated,this.outsideAlt=a!=null&&a.image?a.alt:this.fallbackAlt},getTabByIndex(e){var a;return typeof e>"u"?this.getActiveTab():(a=this.accordion)==null?void 0:a.tabs[e]},allTabsClosed(){return this.states.filter(e=>e===!0).length===0},getStateByIndex(e){return this.states[e]},getId(e,a,i){return`${i}${e.id}${a}`},isExpanded(e){return e.expanded?"true":"false"},buttonClasses(e){return["accordion__btn btn btn-link btn-block d-flex justify-content-between",e.expanded?null:"collapsed"]},contentClasses(e){return["accordion__content collapse position-static",e.expanded?"show":null]},cardClasses(e){return["accordion__card",this.getStateByIndex(e)?S.EXPANDED:null]},cardStyle(e){return`--utility-animation-index: ${e}`},accordionId(e){return`#${e.id}`},cloudinary(e){return e.cloudinary||!0},getImage(e){return e.image?e.image:this.accordion.image?this.accordion.image:null},getTab(e){return e.image?e:this.accordion}},data(){return{showOutsideImage:!1,outsideImage:!1,outsideAnimated:!1,outsideAlt:"",states:[],fallbackImage:!1,fallbackAnimated:!1,fallbackAlt:""}},props:{accordion:Object,shadowless:{default:null},left:{default:null},spacing:String}},ae={class:"row"},te=["innerHTML"],oe={key:0,class:"accordion__subline font-size-2"},re={key:0,class:"row accordion__image"},se={class:"row position-relative"},le={class:"accordion__image-spacer col-lg-6"},ce=["id"],de={key:0,class:"accordion__fallback-container mb-4 col-lg-6"},ue=["id"],ge=["data-target","aria-expanded","aria-controls","onClick"],me={class:"card-btn-toggle"},he=["id","aria-labelledby","data-parent"],pe={class:"accordion__richtext richtext richtext__small card-body"},fe={class:"mb-4 col-lg-6 accordion__floating-container"},Ie=["innerHTML"];function ye(e,a,i,Le,l,n){const G=j,m=Q,V=q,Z=J;return s(),c(C,null,[i.accordion.headline?(s(),c("div",{key:0,class:d(n.containerClasses),ref:"container"},[o("div",ae,[o("div",{class:d(n.columnClasses)},[g(G,{classes:n.headlineClasses},{default:$(()=>[o("span",{innerHTML:i.accordion.headline},null,8,te)]),_:1},8,["classes"]),i.accordion.subline?(s(),c("div",oe,F(i.accordion.subline),1)):u("",!0)],2),i.accordion.image?(s(),c("div",re,[g(m,{img:i.accordion.image,cloudinary:n.cloudinary(i.accordion),alt:i.accordion.alt,animated:i.accordion.animated},null,8,["img","cloudinary","alt","animated"])])):u("",!0)])],2)):u("",!0),o("section",{class:d(n.accordionClasses),ref:"accordion"},[o("div",se,[o("div",le,[l.outsideImage?(s(),W(m,{key:0,img:l.outsideImage,cloudinary:n.cloudinary(i.accordion),lazy:!0,alt:i.accordion.alt,animated:l.outsideAnimated,preset:n.outsidePreset},null,8,["img","cloudinary","alt","animated","preset"])):u("",!0)]),o("div",{class:"col-lg-6 position-static",id:i.accordion.id},[l.outsideImage?(s(),c("div",de,[o("div",{class:d(n.fallbackImageClasses)},[g(m,{img:l.outsideImage,cloudinary:n.cloudinary(i.accordion),lazy:!0,alt:l.outsideAlt,animated:l.outsideAnimated,preset:n.outsidePreset},null,8,["img","cloudinary","alt","animated","preset"])],2)])):u("",!0),(s(!0),c(C,null,ee(i.accordion.tabs,(t,r)=>(s(),c("div",{class:d(n.cardClasses(r)),style:ne(n.cardStyle(r)),key:r},[o("div",{class:"accordion__card-header card-collapse",id:n.getId(i.accordion,r,"Heading")},[o("button",{type:"button",class:d(n.buttonClasses(t)),"data-toggle":"collapse","data-target":n.getId(i.accordion,r,"#Content"),"aria-expanded":n.isExpanded(t),"aria-controls":n.getId(i.accordion,r,"Content"),onClick:Fe=>n.handleClick(r)},[ie(F(t==null?void 0:t.headline)+" ",1),o("span",me,[g(V,{icon:"plus-minus",class:"accordion__icon-toggle",closed:!l.states[r]},null,8,["closed"])])],10,ge)],8,ue),o("div",{id:n.getId(i.accordion,r,"Content"),class:d(n.contentClasses(t)),"aria-labelledby":n.getId(i.accordion,r,"Heading"),"data-parent":n.accordionId(i.accordion)},[o("div",pe,[o("div",fe,[n.getImage(t)?(s(),c("div",{key:0,class:d(n.imageWrapperClasses)},[g(m,{img:n.getImage(t),cloudinary:n.cloudinary(t),lazy:!0,alt:t.alt,animated:n.getTab(t).animated},null,8,["img","cloudinary","alt","animated"])],2)):u("",!0)]),o("div",{class:"accordion__text",innerHTML:t.content},null,8,Ie),t.cta?(s(),W(Z,{key:0,text:t.cta.text,link:t.cta.link,href:t.cta.href},null,8,["text","link","href"])):u("",!0)])],10,he)],6))),128))],8,ce)])],2)],64)}const Ae=Y(H,[["render",ye]]);H.__docgenInfo={exportName:"default",displayName:"accordion",description:"",tags:{},props:[{name:"accordion",type:{name:"object"}},{name:"shadowless",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"left",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"spacing",type:{name:"string"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/accordion.vue"]};const ve={component:Ae,argTypes:{accordion:{description:"Object of the Accordion",control:"object",required:!0},"accordion.headline":{description:"The Headline of the Accordion",type:"string"}},title:"Components/Accordion"},p={args:{accordion:{headline:"Features of the Admin Portal",id:"featureAccordion",tabs:[{headline:"WIFI and LAN policy creation 1",content:"<ul><li>Easy download of XML files to generate WIFI and LAN policies</li><li>lorem ipsum dolor sit</li></ul>",expanded:!0,image:"security/CSOC-Services-Incident-Response.png",alt:"Alt 1"},{headline:"WIFI and LAN policy creation 2",content:"Easy download of XML files to generate WIFI and LAN policies",image:"security/CSOC-Services-Threat-Intelligence.png",alt:"Alt 2"},{headline:"WIFI and LAN policy creation 3",content:"Easy download of XML files to generate WIFI and LAN policies",image:"security/CSOC-Services-SOAR.png",alt:"Alt 3"},{headline:"WIFI and LAN policy creation 4",content:"Easy download of XML files to generate WIFI and LAN policies",image:"security/CSOC-Services-Analysis-Reporting.png",alt:"Alt 4"}]}}},f={args:{shadowless:!1,left:!0,accordion:{subline:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",image:"security/CSOC-Services-Default.png",alt:"Products 0",cloudinary:!0,id:"featureAccordion",tabs:[{headline:"WIFI and LAN policy creation",content:"Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies",expanded:!0,image:"security/CSOC-Services-Incident-Response.png",alt:"WIFI and LAN policy creation 1"},{headline:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",content:"Easy download of XML files to generate WIFI and LAN policies",image:"security/CSOC-Services-Threat-Intelligence.png",alt:"WIFI and LAN policy creation 2"},{headline:"WIFI and LAN policy creation (default image)",content:"Easy download of XML files to generate WIFI and LAN policies",image:"security/CSOC-Services-SOAR.png",alt:"WIFI and LAN policy creation 3"},{headline:"WIFI and LAN policy creation",content:"Easy download of XML files to generate WIFI and LAN policies",image:"security/CSOC-Services-Analysis-Reporting.png",alt:"WIFI and LAN policy creation 4"},{headline:"Active Threat Hunting",content:"<ul> <li>Unsere Threat Experts hunten regelmäßig in den Kunden Tenants nach neuen, aufkommenden Bedrohungen und neuen Angriffstechniken, die von unseren Threat Researchern entdeckt wurden</li> <li>Das erweitert die Sicht auf die Bedrohungslage unserer Kunden und erhört so die Qualität des Schutzes</li> </ul>",image:"security/CSOC-Services-Active-Threat-Hunting.png",alt:"WIFI and LAN policy creation 5"},{headline:"Continuous Improvement & Reporting",content:"<ul> <li>Wir verbessern kontinuierlich die Analytic Rules in den Kunden-Repositories und erhöhen so die Sicherheit der Kundenumgebungen</li> <li>Erstellung monatlicher CSOC Berichte mit Empfehlungen für neue Einstellungen und Konfigurationen auf der Grundlage unserer Best Practices (Blueprint)</li> <li>Zugang zu Online Reports, die eine umfangreiche Beschreibung des individuellen Security Zustands des Kunden wiedergeben</li> </ul>",image:"security/CSOC-Services-Continous-Improvement.png",alt:"WIFI and LAN policy creation 6"}]}}},I={args:{shadowless:!0,left:!0,accordion:{subline:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",image:"/products/radius/radius-wifi-lan-policy.gif",alt:"Products 0",cloudinary:!0,headline:"Features of the Admin Portal",headlineClasses:"h3-font-size",id:"featureAccordion",tabs:[{headline:"WIFI and LAN policy creation",content:"Easy download of XML files to generate WIFI and LAN policies",expanded:!0,image:"/products/radius/radius-wifi-lan-policy.gif",alt:"WIFI and LAN policy creation 1"},{headline:"WIFI and LAN policy creation",content:"Easy download of XML files to generate WIFI and LAN policies",image:"/products/radius/radius-logs.gif",alt:"WIFI and LAN policy creation 2"},{headline:"WIFI and LAN policy creation",content:"Easy download of XML files to generate WIFI and LAN policies",alt:"WIFI and LAN policy creation 3"},{headline:"WIFI and LAN policy creation",content:"Easy download of XML files to generate WIFI and LAN policies",image:"/products/radius/radius-wifi-lan-policy.gif",alt:"WIFI and LAN policy creation 4"}]}}},y={args:{shadowless:!1,left:!0,accordion:{subline:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",image:"security/CSOC-Services-Default.png",alt:"Products 0",cloudinary:!0,id:"featureAccordion",tabs:[{headline:"WIFI and LAN policy creation",content:"Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies",image:"security/CSOC-Services-Incident-Response.png",alt:"WIFI and LAN policy creation 1"},{headline:"WIFI and LAN policy creation",content:"Easy download of XML files to generate WIFI and LAN policies",image:"security/CSOC-Services-Threat-Intelligence.png",alt:"WIFI and LAN policy creation 2"},{headline:"WIFI and LAN policy creation (default image)",content:"Easy download of XML files to generate WIFI and LAN policies",image:"security/CSOC-Services-SOAR.png",alt:"WIFI and LAN policy creation 3"},{headline:"WIFI and LAN policy creation",content:"Easy download of XML files to generate WIFI und LAN policies",image:"security/CSOC-Services-Analysis-Reporting.png",alt:"WIFI and LAN policy creation 4"}]}}},A={args:{shadowless:!1,left:!0,accordion:{subline:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",image:"products/konnekt/konnekt-drive-letter.webp",animated:!0,alt:"Products 0",cloudinary:!0,id:"featureAccordion",tabs:[{headline:"Animated Webp",content:"Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies",expanded:!0,image:"products/konnekt/konnekt-drive-letter.webp",cloudinary:!0,alt:"WIFI and LAN policy creation 1",animated:!0},{headline:"Normal Webp",content:"Easy download of XML files to generate WIFI and LAN policies",image:"/products/konnekt/konnekt-hero-image.webp",cloudinary:!0,alt:"WIFI and LAN policy creation 2"},{headline:"WIFI and LAN policy creation (default image)",content:"Easy download of XML files to generate WIFI and LAN policies",image:"security/CSOC-Services-SOAR.png",alt:"WIFI and LAN policy creation 3"},{headline:"WIFI and LAN policy creation",content:"Easy download of XML files to generate WIFI and LAN policies",image:"security/CSOC-Services-Analysis-Reporting.png",alt:"WIFI and LAN policy creation 4"},{headline:"Active Threat Hunting",content:"<ul> <li>Unsere Threat Experts hunten regelmäßig in den Kunden Tenants nach neuen, aufkommenden Bedrohungen und neuen Angriffstechniken, die von unseren Threat Researchern entdeckt wurden</li> <li>Das erweitert die Sicht auf die Bedrohungslage unserer Kunden und erhört so die Qualität des Schutzes</li> </ul>",image:"security/CSOC-Services-Active-Threat-Hunting.png",alt:"WIFI and LAN policy creation 5"},{headline:"Continuous Improvement & Reporting",content:"<ul> <li>Wir verbessern kontinuierlich die Analytic Rules in den Kunden-Repositories und erhöhen so die Sicherheit der Kundenumgebungen</li> <li>Erstellung monatlicher CSOC Berichte mit Empfehlungen für neue Einstellungen und Konfigurationen auf der Grundlage unserer Best Practices (Blueprint)</li> <li>Zugang zu Online Reports, die eine umfangreiche Beschreibung des individuellen Security Zustands des Kunden wiedergeben</li> </ul>",image:"security/CSOC-Services-Continous-Improvement.png",alt:"WIFI and LAN policy creation 6"}]}}},L={args:{accordion:{headline:"Vorteile von AzERE",subline:"Mit AzERE bauen wir eine Disaster Recovery Infrastruktur für geschäftskritische Tools und Services auf, um diese im Falle einer erfolgreichen Cyberattacke schnell und automatisiert wiederherstellen zu können. Damit ist euer Unternehmen für das Worst-Case-Szenario abgesichert. Euer Vorteil: Ihr schont eure Nerven und könnt wieder ruhig schlafen.",id:"featureAccordion",image:"/azure/icon-azere-dark-tenant.png",tabs:[{headline:"Unabhängige, entkoppelte Umgebung",content:"Keine Chance für Lateral Movement: Eine isolierte Backup-Umgebung bewahrt kritische Anwendungen und Daten vor der Ausbreitung einer potenziellen Attacke.",expanded:!0,image:"/azure/icon-azere-dark-tenant.svg",alt:"Eine isolierte Backup-Umgebung"},{headline:"Kommunikationsplattform für Notfälle",content:"Schneller Informationsaustausch ist das A und O in Krisensituationen: Die sofortige Bereitstellung wichtiger Kommunikationstools wie Teams und Exchange für bestimmte Benutzergruppen gewährleistet die Geschäftskontinuität.",expanded:!1,image:"/azure/icon-azere-war-room-communication.svg",alt:"Schneller Informationsaustausch in Krisensituationen"},{headline:"Geschützter Datenspeicher",content:"Die Integrität und Verfügbarkeit von wichtigen Dokumenten und Daten ist essenziell für die Wiederherstellung im Katastrophenfall. Ein unveränderlicher, versionierter Speicher stellt genau das sicher.",expanded:!1,image:"/azure/icon-azere-protected-data-storage.svg",alt:"Ein unveränderlicher, versionierter Speicher"},{headline:"Autonome Wiederherstellung",content:"Abhängigkeiten führen zu Fehlerpotential. AzERE verfügt deshalb über eine saubere und sichere Infrastruktur zur Wiederherstellung wichtiger Anwendungen und Daten, ohne dafür andere Systeme, Tools oder Prozesse zu benötigen.",expanded:!1,image:"/azure/icon-azere-ground-zero-environment.svg",alt:"Autonome Wiederherstellung"},{headline:"Monatliche Fire Tests",content:"Das beste System ist wirkungslos, wenn es nicht funktioniert. Aus diesem Grund testen wir regelmäßig die Konsistenz der Sicherungsdaten und trainieren die Wachsamkeit aller Beteiligten im Sicherungs- und Wiederherstellungsprozess.",expanded:!1,image:"/azure/icon-azere-monthly-fire-tests.svg",alt:"Monatliche Fire Tests"}]}}};var N,k,v;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    accordion: {
      headline: 'Features of the Admin Portal',
      id: 'featureAccordion',
      tabs: [{
        headline: 'WIFI and LAN policy creation 1',
        content: '<ul><li>Easy download of XML files to generate WIFI and LAN policies</li><li>lorem ipsum dolor sit</li></ul>',
        expanded: true,
        image: 'security/CSOC-Services-Incident-Response.png',
        alt: 'Alt 1'
      }, {
        headline: 'WIFI and LAN policy creation 2',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        image: 'security/CSOC-Services-Threat-Intelligence.png',
        alt: 'Alt 2'
      }, {
        headline: 'WIFI and LAN policy creation 3',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        image: 'security/CSOC-Services-SOAR.png',
        alt: 'Alt 3'
      }, {
        headline: 'WIFI and LAN policy creation 4',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        image: 'security/CSOC-Services-Analysis-Reporting.png',
        alt: 'Alt 4'
      }]
    }
  }
}`,...(v=(k=p.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var b,E,_;f.parameters={...f.parameters,docs:{...(b=f.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    shadowless: false,
    left: true,
    accordion: {
      subline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'security/CSOC-Services-Default.png',
      alt: 'Products 0',
      cloudinary: true,
      id: 'featureAccordion',
      tabs: [{
        headline: 'WIFI and LAN policy creation',
        content: 'Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies',
        expanded: true,
        image: 'security/CSOC-Services-Incident-Response.png',
        alt: 'WIFI and LAN policy creation 1'
      }, {
        headline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        image: 'security/CSOC-Services-Threat-Intelligence.png',
        alt: 'WIFI and LAN policy creation 2'
      }, {
        headline: 'WIFI and LAN policy creation (default image)',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        image: 'security/CSOC-Services-SOAR.png',
        alt: 'WIFI and LAN policy creation 3'
      }, {
        headline: 'WIFI and LAN policy creation',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        image: 'security/CSOC-Services-Analysis-Reporting.png',
        alt: 'WIFI and LAN policy creation 4'
      }, {
        headline: 'Active Threat Hunting',
        content: '<ul> <li>Unsere Threat Experts hunten regelmäßig in den Kunden Tenants nach neuen, aufkommenden Bedrohungen und neuen Angriffstechniken, die von unseren Threat Researchern entdeckt wurden</li> <li>Das erweitert die Sicht auf die Bedrohungslage unserer Kunden und erhört so die Qualität des Schutzes</li> </ul>',
        image: 'security/CSOC-Services-Active-Threat-Hunting.png',
        alt: 'WIFI and LAN policy creation 5'
      }, {
        headline: 'Continuous Improvement & Reporting',
        content: '<ul> <li>Wir verbessern kontinuierlich die Analytic Rules in den Kunden-Repositories und erhöhen so die Sicherheit der Kundenumgebungen</li> <li>Erstellung monatlicher CSOC Berichte mit Empfehlungen für neue Einstellungen und Konfigurationen auf der Grundlage unserer Best Practices (Blueprint)</li> <li>Zugang zu Online Reports, die eine umfangreiche Beschreibung des individuellen Security Zustands des Kunden wiedergeben</li> </ul>',
        image: 'security/CSOC-Services-Continous-Improvement.png',
        alt: 'WIFI and LAN policy creation 6'
      }]
    }
  }
}`,...(_=(E=f.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var x,O,z;I.parameters={...I.parameters,docs:{...(x=I.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    shadowless: true,
    left: true,
    accordion: {
      subline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/products/radius/radius-wifi-lan-policy.gif',
      alt: 'Products 0',
      cloudinary: true,
      headline: 'Features of the Admin Portal',
      headlineClasses: 'h3-font-size',
      id: 'featureAccordion',
      tabs: [{
        headline: 'WIFI and LAN policy creation',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        expanded: true,
        image: '/products/radius/radius-wifi-lan-policy.gif',
        alt: 'WIFI and LAN policy creation 1'
      }, {
        headline: 'WIFI and LAN policy creation',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        image: '/products/radius/radius-logs.gif',
        alt: 'WIFI and LAN policy creation 2'
      }, {
        headline: 'WIFI and LAN policy creation',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        alt: 'WIFI and LAN policy creation 3'
      }, {
        headline: 'WIFI and LAN policy creation',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        image: '/products/radius/radius-wifi-lan-policy.gif',
        alt: 'WIFI and LAN policy creation 4'
      }]
    }
  }
}`,...(z=(O=I.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var M,X,T;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    shadowless: false,
    left: true,
    accordion: {
      subline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'security/CSOC-Services-Default.png',
      alt: 'Products 0',
      cloudinary: true,
      id: 'featureAccordion',
      tabs: [{
        headline: 'WIFI and LAN policy creation',
        content: 'Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies',
        image: 'security/CSOC-Services-Incident-Response.png',
        alt: 'WIFI and LAN policy creation 1'
      }, {
        headline: 'WIFI and LAN policy creation',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        image: 'security/CSOC-Services-Threat-Intelligence.png',
        alt: 'WIFI and LAN policy creation 2'
      }, {
        headline: 'WIFI and LAN policy creation (default image)',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        image: 'security/CSOC-Services-SOAR.png',
        alt: 'WIFI and LAN policy creation 3'
      }, {
        headline: 'WIFI and LAN policy creation',
        content: 'Easy download of XML files to generate WIFI und LAN policies',
        image: 'security/CSOC-Services-Analysis-Reporting.png',
        alt: 'WIFI and LAN policy creation 4'
      }]
    }
  }
}`,...(T=(X=y.parameters)==null?void 0:X.docs)==null?void 0:T.source}}};var R,B,K;A.parameters={...A.parameters,docs:{...(R=A.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    shadowless: false,
    left: true,
    accordion: {
      subline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'products/konnekt/konnekt-drive-letter.webp',
      animated: true,
      alt: 'Products 0',
      cloudinary: true,
      id: 'featureAccordion',
      tabs: [{
        headline: 'Animated Webp',
        content: 'Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies. Easy download of XML files to generate WIFI and LAN policies',
        expanded: true,
        image: 'products/konnekt/konnekt-drive-letter.webp',
        cloudinary: true,
        alt: 'WIFI and LAN policy creation 1',
        animated: true
      }, {
        headline: 'Normal Webp',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        image: '/products/konnekt/konnekt-hero-image.webp',
        cloudinary: true,
        alt: 'WIFI and LAN policy creation 2'
      }, {
        headline: 'WIFI and LAN policy creation (default image)',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        image: 'security/CSOC-Services-SOAR.png',
        alt: 'WIFI and LAN policy creation 3'
      }, {
        headline: 'WIFI and LAN policy creation',
        content: 'Easy download of XML files to generate WIFI and LAN policies',
        image: 'security/CSOC-Services-Analysis-Reporting.png',
        alt: 'WIFI and LAN policy creation 4'
      }, {
        headline: 'Active Threat Hunting',
        content: '<ul> <li>Unsere Threat Experts hunten regelmäßig in den Kunden Tenants nach neuen, aufkommenden Bedrohungen und neuen Angriffstechniken, die von unseren Threat Researchern entdeckt wurden</li> <li>Das erweitert die Sicht auf die Bedrohungslage unserer Kunden und erhört so die Qualität des Schutzes</li> </ul>',
        image: 'security/CSOC-Services-Active-Threat-Hunting.png',
        alt: 'WIFI and LAN policy creation 5'
      }, {
        headline: 'Continuous Improvement & Reporting',
        content: '<ul> <li>Wir verbessern kontinuierlich die Analytic Rules in den Kunden-Repositories und erhöhen so die Sicherheit der Kundenumgebungen</li> <li>Erstellung monatlicher CSOC Berichte mit Empfehlungen für neue Einstellungen und Konfigurationen auf der Grundlage unserer Best Practices (Blueprint)</li> <li>Zugang zu Online Reports, die eine umfangreiche Beschreibung des individuellen Security Zustands des Kunden wiedergeben</li> </ul>',
        image: 'security/CSOC-Services-Continous-Improvement.png',
        alt: 'WIFI and LAN policy creation 6'
      }]
    }
  }
}`,...(K=(B=A.parameters)==null?void 0:B.docs)==null?void 0:K.source}}};var D,P,U;L.parameters={...L.parameters,docs:{...(D=L.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    accordion: {
      headline: 'Vorteile von AzERE',
      subline: 'Mit AzERE bauen wir eine Disaster Recovery Infrastruktur für geschäftskritische Tools und Services auf, um diese im Falle einer erfolgreichen Cyberattacke schnell und automatisiert wiederherstellen zu können. Damit ist euer Unternehmen für das Worst-Case-Szenario abgesichert. Euer Vorteil: Ihr schont eure Nerven und könnt wieder ruhig schlafen.',
      id: 'featureAccordion',
      image: '/azure/icon-azere-dark-tenant.png',
      tabs: [{
        headline: 'Unabhängige, entkoppelte Umgebung',
        content: 'Keine Chance für Lateral Movement: Eine isolierte Backup-Umgebung bewahrt kritische Anwendungen und Daten vor der Ausbreitung einer potenziellen Attacke.',
        expanded: true,
        image: '/azure/icon-azere-dark-tenant.svg',
        alt: 'Eine isolierte Backup-Umgebung'
      }, {
        headline: 'Kommunikationsplattform für Notfälle',
        content: 'Schneller Informationsaustausch ist das A und O in Krisensituationen: Die sofortige Bereitstellung wichtiger Kommunikationstools wie Teams und Exchange für bestimmte Benutzergruppen gewährleistet die Geschäftskontinuität.',
        expanded: false,
        image: '/azure/icon-azere-war-room-communication.svg',
        alt: 'Schneller Informationsaustausch in Krisensituationen'
      }, {
        headline: 'Geschützter Datenspeicher',
        content: 'Die Integrität und Verfügbarkeit von wichtigen Dokumenten und Daten ist essenziell für die Wiederherstellung im Katastrophenfall. Ein unveränderlicher, versionierter Speicher stellt genau das sicher.',
        expanded: false,
        image: '/azure/icon-azere-protected-data-storage.svg',
        alt: 'Ein unveränderlicher, versionierter Speicher'
      }, {
        headline: 'Autonome Wiederherstellung',
        content: 'Abhängigkeiten führen zu Fehlerpotential. AzERE verfügt deshalb über eine saubere und sichere Infrastruktur zur Wiederherstellung wichtiger Anwendungen und Daten, ohne dafür andere Systeme, Tools oder Prozesse zu benötigen.',
        expanded: false,
        image: '/azure/icon-azere-ground-zero-environment.svg',
        alt: 'Autonome Wiederherstellung'
      }, {
        headline: 'Monatliche Fire Tests',
        content: 'Das beste System ist wirkungslos, wenn es nicht funktioniert. Aus diesem Grund testen wir regelmäßig die Konsistenz der Sicherungsdaten und trainieren die Wachsamkeit aller Beteiligten im Sicherungs- und Wiederherstellungsprozess.',
        expanded: false,
        image: '/azure/icon-azere-monthly-fire-tests.svg',
        alt: 'Monatliche Fire Tests'
      }]
    }
  }
}`,...(U=(P=L.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};const be=["Default","Image","ImageShadowless","Collapsed","AnimatedImage","MixedAssets"];export{A as AnimatedImage,y as Collapsed,p as Default,f as Image,I as ImageShadowless,L as MixedAssets,be as __namedExportsOrder,ve as default};
