import{_ as J}from"./47cPpJ4J.js";import{_ as D}from"./CWz3-rwU.js";import{U as E}from"./CPWX9PGn.js";import{_ as V,c as a,o as n,a as b,b as t,d as h,m as X,n as r,t as l,w as Y,F as _,r as v,e as $}from"./CQk6B_Hx.js";import{S as ee}from"./DqToivUt.js";import"./dqOtRiGh.js";const T={tagName:"quotes-entry",mounted(){this.$refs.root&&E.init([this.$refs.root])},props:{entry:{type:Object,required:!0},image:{type:Boolean,default:!1},hasAnimation:{type:Boolean,default:!1},active:{type:Boolean,default:!1}}},te={key:0,class:"quotes__entry-img-wrapper col-lg-5"},ne={class:"quotes__entry-text font-weight-light mt-3 font-size-2"},oe={class:"quotes__entry-text-wrapper"},ae={class:"quotes__entry-infos"},se={class:"quotes__entry-name font-size-2"},ie={key:0,class:"quotes__entry-position"},re={class:"quotes__entry-company"};function me(s,y,e,O,U,o){const k=D;return n(),a("div",{class:r(["quotes__entry row no-gutters",{active:e.active}]),ref:"root"},[e.image?(n(),a("div",te,[t("div",{class:r(["quotes__entry-img",e.hasAnimation?"utility-animation fade-in-bottom":""]),"data-utility-animation-step":"1",ref:"entry-img"},[h(k,X(e.entry,{cloudinary:!0,"img-src-sets":"quotes"}),null,16)],2)])):b("",!0),t("div",{class:r(["quotes__entry-quote-wrapper",[e.hasAnimation?"utility-animation fade-in-bottom":"",e.image?"col-lg-6 offset-lg-1 disabledpb-lg-0":"col-lg-12",e.image?"":"mx-auto"]]),"data-utility-animation-step":"1"},[y[0]||(y[0]=t("div",{class:"quotes__entry-quote"},"„",-1)),t("div",ne,[t("div",oe,l(e.entry.text),1)]),t("div",ae,[t("div",se,l(e.entry.name),1),e.entry.position?(n(),a("div",ie,l(e.entry.position),1)):b("",!0),t("div",re,l(e.entry.company)+" ",1)])],2)],2)}const le=V(T,[["render",me]]);T.__docgenInfo={exportName:"default",displayName:"quotes-entry",description:"",tags:{},props:[{name:"entry",type:{name:"object"},required:!0},{name:"image",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hasAnimation",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"active",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/quotes-entry.vue"]};const M={tagName:"quotes",props:{page:{type:Object,required:!0},quotes:{type:Object,required:!0},spacing:{type:String,default:""},noFullscreen:{type:Boolean,default:!1}},mounted(){this.$refs.header&&E.init([this.$refs.header])},computed:{quotesSpacing(){return this.spacing},quotesNoFullscreen(){return this.noFullscreen},quotesImagesCount(){var s;return((s=this.quotes.footerImage)==null?void 0:s.length)||0},quotesImage(){var s;return!!((s=this.quotes.items[0])!=null&&s.img)},quotesSlidesToShow(){return this.quotesImage?1.05:1},quotesColSize(){return Math.floor(9/this.quotesImagesCount)},slickOptions(){return{rows:0,centerMode:!0,centerPadding:this.quotesImage?"0px":"15px",prevArrow:'<span class="quotes__arrow-left slick-arrow rounded-circle"></span>',nextArrow:'<span class="quotes__arrow-right slick-arrow rounded-circle"></span>',dots:this.quotes.items.length>1,dotsClass:"slick-pagination mt-8",slidesToShow:1,slidesToScroll:1,infinite:!1,responsive:[{breakpoint:992,settings:{slidesToShow:this.quotesSlidesToShow}},{breakpoint:576,settings:{slidesToShow:this.quotesSlidesToShow}}]}}}},ue={class:"container space-top-1 space-bottom-2 space-top-lg-2 space-bottom-lg-0"},de={class:"quotes__row row"},ce={class:"utility-animation col-lg-12 mb-4 mb-lg-6 fade-in-bottom","data-utility-animation-step":"1",ref:"header"},pe={key:0,class:"row mt-7 mt-md-0 justify-content-center"};function ge(s,y,e,O,U,o){const k=J,W=le,Q=ee,Z=D;return n(),a("div",{class:r(["quotes",o.quotesImage?"mb-8":"quotes--no-image",o.quotesNoFullscreen?"quotes--no-fullscreenn":"",o.quotesSpacing])},[t("div",ue,[t("div",de,[t("div",ce,[h(k,{level:e.quotes.level,text:e.quotes.headline,classes:`${e.quotes.headlineClasses||"h2-font-size"} quotes__headline`},null,8,["level","text","classes"])],512),h(Q,{options:o.slickOptions,"hide-background":!0,class:"quotes__slider col-sm-12 mb-lg-n8","hide-container":!0},{default:Y(()=>[(n(!0),a(_,null,v(e.quotes.items,(m,i)=>(n(),$(W,{key:i,entry:m,active:i===0,image:o.quotesImage,"has-animation":i===0},null,8,["entry","active","image","has-animation"]))),128))]),_:1},8,["options"])]),o.quotesImagesCount!==0?(n(),a("div",pe,[(n(!0),a(_,null,v(e.quotes.footerImage,(m,i)=>(n(),a("div",{key:i,class:r(["d-flex justify-content-center",`col-lg-${o.quotesColSize}`])},[h(Z,{cloudinary:!0,img:m.image,alt:m.alt},null,8,["img","alt"])],2))),128))])):b("",!0)])],2)}const fe=V(M,[["render",ge]]);M.__docgenInfo={exportName:"default",displayName:"quotes",description:"",tags:{},props:[{name:"page",type:{name:"object"},required:!0},{name:"quotes",type:{name:"object"},required:!0},{name:"spacing",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"noFullscreen",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/quotes.vue"]};const qe={title:"Components/Quotes",component:fe},u={args:{quotes:{headline:"Das sagen unsere Kunden",level:"h3",items:[{text:"Die Entscheidung für einen Wechsel in die Azure Cloud wurde maßgeblich durch den Dialog mit glueckkanja vorangetrieben. Neben einer insgesamt kosteneffizienten Cloud-Infrastruktur haben wir zusammen mit unserem 100 % Cloud Modern Desktop einen Arbeitsplatz geschaffen, mit dem wir unsere Geschäftsanwender schnell, sicher und flexibel unterstützen können.",name:"Patrick Lange",company:"Franz Haniel & Cie. GmbH",img:"/testimonals/patrick-lange.jpg",alt:"Patrick Lange"},{text:"Für eine sich so schnell verändernde Branche und insbesondere für unser Uniper Business ist Microsoft 365 die richtige Wahl, da es einzigartige Möglichkeiten in Bezug auf Skalierbarkeit, Performance und Sicherheit der Plattform bietet und mit glueckkanja haben wir den Partner gefunden, um das Beste aus dieser Technologie herauszuholen.",name:"Hans Pezold",company:"Uniper SE",img:"/testimonals/hans-pezold.jpg",alt:"Hans Pezold"},{text:"Der sichere, moderne digitale Arbeitsplatz für Kommunikation & Zusammenarbeit kann von überall und von jedem Gerät aus genutzt werden, das in der Cloud läuft. Seit wir diesen Client betreiben, hatten wir im Vergleich zu unserer bestehenden Plattform keinen einzigen Sicherheitsvorfall auf all diesen neuen Geräten.",name:"Stefan Haas",company:"Schenker AG",img:"/testimonals/steffan-haas.jpg",alt:"Stefan Haas"},{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"Lorem ipsum dolor sit",company:"Lorem ipsum dolor sit",img:"/testimonals/steffan-haas.jpg",alt:"Lorem ipsum dolor sit"}]}}},d={args:{quotes:{headline:"Das sagen unsere Kunden",headlineClasses:"h3-font-size",level:"h3",items:[{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"Patrick Lange",company:"Franz Haniel & Cie. GmbH",img:"/testimonals/patrick-lange.jpg",alt:"Patrick Lange"},{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"Lorem ipsum dolor sit",company:"Lorem ipsum dolor sit",img:"/testimonals/steffan-haas.jpg",alt:"Lorem ipsum dolor sit"}]}}},c={args:{quotes:{items:[{text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",name:"Patrick Lange",company:"Franz Haniel & Cie. GmbH",img:"/testimonals/patrick-lange.jpg",alt:"Patrick Lange"}]}}},p={args:{quotes:{items:[{text:"Lorem ipsum dolor sit amet, consetetur sadipscing",name:"Ronnie Kolk",position:"Projektmanager",company:"Pöppelmann GmbH & Co.KG"},{text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt",name:"Ronnie Kolk",position:"Projektmanager",company:"Pöppelmann GmbH & Co.KG"},{text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et",name:"Ronnie Kolk",position:"Projektmanager",company:"Pöppelmann GmbH & Co.KG"},{text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur",name:"Ronnie Kolk",position:"Projektmanager",company:"Pöppelmann GmbH & Co.KG"}]}}},g={args:{quotes:{footerImage:[{image:"logos/msft-misa-mxdr.png",alt:"msft-misa-mxdr"},{image:"logos/msft-misa-mxdr.png",alt:"msft-misa-mxdr"},{image:"logos/div-cyberwehr.png",alt:"star"}],items:[{text:"Lorem ipsum dolor sit amet, consetetur sadipscing",name:"Ronnie Kolk",position:"Projektmanager",company:"Pöppelmann GmbH & Co.KG"},{text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt",name:"Ronnie Kolk",position:"Projektmanager",company:"Pöppelmann GmbH & Co.KG"},{text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et",name:"Ronnie Kolk",position:"Projektmanager",company:"Pöppelmann GmbH & Co.KG"},{text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur",name:"Ronnie Kolk",position:"Projektmanager",company:"Pöppelmann GmbH & Co.KG"}]}}},f={args:{noFullscreen:!0,quotes:{items:[{text:"Lorem ipsum dolor sit amet, consetetur sadipscing",name:"Ronnie Kolk",position:"Projektmanager",company:"Pöppelmann GmbH & Co.KG"}]}}};var q,x,L;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    quotes: {
      headline: 'Das sagen unsere Kunden',
      level: 'h3',
      items: [{
        text: 'Die Entscheidung für einen Wechsel in die Azure Cloud wurde maßgeblich durch den Dialog mit glueckkanja vorangetrieben. Neben einer insgesamt kosteneffizienten Cloud-Infrastruktur haben wir zusammen mit unserem 100 % Cloud Modern Desktop einen Arbeitsplatz geschaffen, mit dem wir unsere Geschäftsanwender schnell, sicher und flexibel unterstützen können.',
        name: 'Patrick Lange',
        company: 'Franz Haniel & Cie. GmbH',
        img: '/testimonals/patrick-lange.jpg',
        alt: 'Patrick Lange'
      }, {
        text: 'Für eine sich so schnell verändernde Branche und insbesondere für unser Uniper Business ist Microsoft 365 die richtige Wahl, da es einzigartige Möglichkeiten in Bezug auf Skalierbarkeit, Performance und Sicherheit der Plattform bietet und mit glueckkanja haben wir den Partner gefunden, um das Beste aus dieser Technologie herauszuholen.',
        name: 'Hans Pezold',
        company: 'Uniper SE',
        img: '/testimonals/hans-pezold.jpg',
        alt: 'Hans Pezold'
      }, {
        text: 'Der sichere, moderne digitale Arbeitsplatz für Kommunikation & Zusammenarbeit kann von überall und von jedem Gerät aus genutzt werden, das in der Cloud läuft. Seit wir diesen Client betreiben, hatten wir im Vergleich zu unserer bestehenden Plattform keinen einzigen Sicherheitsvorfall auf all diesen neuen Geräten.',
        name: 'Stefan Haas',
        company: 'Schenker AG',
        img: '/testimonals/steffan-haas.jpg',
        alt: 'Stefan Haas'
      }, {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        name: 'Lorem ipsum dolor sit',
        company: 'Lorem ipsum dolor sit',
        img: '/testimonals/steffan-haas.jpg',
        alt: 'Lorem ipsum dolor sit'
      }]
    }
  }
}`,...(L=(x=u.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var P,C,j;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    quotes: {
      headline: 'Das sagen unsere Kunden',
      headlineClasses: 'h3-font-size',
      level: 'h3',
      items: [{
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        name: 'Patrick Lange',
        company: 'Franz Haniel & Cie. GmbH',
        img: '/testimonals/patrick-lange.jpg',
        alt: 'Patrick Lange'
      }, {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        name: 'Lorem ipsum dolor sit',
        company: 'Lorem ipsum dolor sit',
        img: '/testimonals/steffan-haas.jpg',
        alt: 'Lorem ipsum dolor sit'
      }]
    }
  }
}`,...(j=(C=d.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var G,S,w;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    quotes: {
      items: [{
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        name: 'Patrick Lange',
        company: 'Franz Haniel & Cie. GmbH',
        img: '/testimonals/patrick-lange.jpg',
        alt: 'Patrick Lange'
      }]
    }
  }
}`,...(w=(S=c.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var z,K,F;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    quotes: {
      items: [{
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing',
        name: 'Ronnie Kolk',
        position: 'Projektmanager',
        company: 'Pöppelmann GmbH & Co.KG'
      }, {
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt',
        name: 'Ronnie Kolk',
        position: 'Projektmanager',
        company: 'Pöppelmann GmbH & Co.KG'
      }, {
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et',
        name: 'Ronnie Kolk',
        position: 'Projektmanager',
        company: 'Pöppelmann GmbH & Co.KG'
      }, {
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur',
        name: 'Ronnie Kolk',
        position: 'Projektmanager',
        company: 'Pöppelmann GmbH & Co.KG'
      }]
    }
  }
}`,...(F=(K=p.parameters)==null?void 0:K.docs)==null?void 0:F.source}}};var H,A,I;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    quotes: {
      footerImage: [{
        image: 'logos/msft-misa-mxdr.png',
        alt: 'msft-misa-mxdr'
      }, {
        image: 'logos/msft-misa-mxdr.png',
        alt: 'msft-misa-mxdr'
      }, {
        image: 'logos/div-cyberwehr.png',
        alt: 'star'
      }],
      items: [{
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing',
        name: 'Ronnie Kolk',
        position: 'Projektmanager',
        company: 'Pöppelmann GmbH & Co.KG'
      }, {
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt',
        name: 'Ronnie Kolk',
        position: 'Projektmanager',
        company: 'Pöppelmann GmbH & Co.KG'
      }, {
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et',
        name: 'Ronnie Kolk',
        position: 'Projektmanager',
        company: 'Pöppelmann GmbH & Co.KG'
      }, {
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur',
        name: 'Ronnie Kolk',
        position: 'Projektmanager',
        company: 'Pöppelmann GmbH & Co.KG'
      }]
    }
  }
}`,...(I=(A=g.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var R,N,B;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    noFullscreen: true,
    quotes: {
      items: [{
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing',
        name: 'Ronnie Kolk',
        position: 'Projektmanager',
        company: 'Pöppelmann GmbH & Co.KG'
      }]
    }
  }
}`,...(B=(N=f.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};const xe=["Long","Short","OneItem","NoImage","FooterImage","NoFullscreen"];export{g as FooterImage,u as Long,f as NoFullscreen,p as NoImage,c as OneItem,d as Short,xe as __namedExportsOrder,qe as default};
