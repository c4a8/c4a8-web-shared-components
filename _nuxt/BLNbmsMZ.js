import{_ as v}from"./OBT3TP2i.js";import{_ as F,c as e,b as i,n as d,d as M,w as z,F as u,r as h,a as g,o as n,g as E,t as r,f as A}from"./CANVhtT2.js";const y={tagName:"v-table",props:{headline:{type:String,default:null},table:{type:Array,required:!0},hideContainer:{type:Boolean,default:!1},style:{type:String,default:""},classes:{type:String,default:""},head:{type:Boolean,default:!1},agenda:{type:Boolean,default:!1}},computed:{tableHideContainer(){return this.hideContainer},styleClass(){return this.style||"table-striped"},tableRows(){return this.head?this.table.slice(1):this.table}}},_={key:0,class:"agenda"},B={key:0},L={key:0},H=["innerHTML"],N=["innerHTML"];function V(D,s,a,U,K,l){const S=v;return n(),e("div",null,[i("div",{class:d([l.tableHideContainer?"mb-8":"container","mt-8 mt-lg-10"])},[i("div",{class:d([l.tableHideContainer?"":"row"])},[i("div",{class:d(["table-responsive",a.classes])},[M(S,{level:"h2",class:"space-bottom-1"},{default:z(()=>[E(r(a.headline),1)]),_:1}),a.agenda?(n(),e("table",_,[(n(!0),e(u,null,h(a.table,t=>(n(),e("tr",{key:t.id},[i("td",null,[i("span",null,r(t.timeFrom),1),t.timeTo?(n(),e("span",B," - "+r(t.timeTo),1)):g("",!0),s[0]||(s[0]=i("br",null,null,-1)),i("strong",null,r(t.title),1),s[1]||(s[1]=i("br",null,null,-1)),t.speaker?(n(),e("em",{key:1,style:A(t.highlight?"--color-highlight-underline: var(--color-yellow)":"--color-highlight-underline: null"),class:"highlight-underline"},r(t.speaker),5)):g("",!0),i("p",null,r(t.description),1)])]))),128))])):(n(),e("table",{key:1,class:d(["v-table table",l.styleClass])},[a.head&&a.table.length?(n(),e("thead",L,[i("tr",null,[(n(!0),e(u,null,h(a.table[0],(t,o)=>(n(),e("th",{key:"head-"+o,innerHTML:t},null,8,H))),128))])])):g("",!0),i("tbody",null,[(n(!0),e(u,null,h(l.tableRows,(t,o)=>(n(),e("tr",{key:"row-"+o},[(n(!0),e(u,null,h(t,(C,T)=>(n(),e("td",{key:"cell-"+o+"-"+T,innerHTML:C},null,8,N))),128))]))),128))])],2))],2)],2)],2)])}const W=F(y,[["render",V]]);y.__docgenInfo={exportName:"default",displayName:"v-table",description:"",tags:{},props:[{name:"headline",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"table",type:{name:"array"},required:!0},{name:"hideContainer",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"style",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"classes",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"head",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"agenda",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/v-table.vue"]};const R={title:"Components/Table",component:W,argTypes:{}},c={args:{head:"true",hideContainer:"true",table:[["header1","header2"],["data1","data2"]]}},m={args:{agenda:"true",headline:"Event-Agenda",head:"true",HideContainer:"true",table:[{timeFrom:"09:00",timeTo:"09:30",title:"Einlass & Warm-Up inkl. Frühstück"},{timeFrom:"09:30",timeTo:"09:45",title:"Begrüßung & Einführung"},{timeFrom:"09:45",timeTo:"10:30",title:"Microsoft Session: Hot News zum Windows-Cloud PC (App Streaming & KI)",speaker:"Klaus Harrer-Nemecek, Endpoint Solution Engineer (Microsoft)",highlight:!0,description:"Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man ergibt keinen Sinn. Wirklich keinen Sinn. Man wird zusammenhangslos eingeschoben und rumgedreht – und oftmals gar nicht erst gelesen. Aber bin ich allein deshalb ein schlechterer Text als andere? Na gut, ich werde nie in den Bestsellerlisten stehen. Aber andere Texte schaffen das auch nicht. Und darum stört es mich nicht besonders blind zu sein. Und sollten Sie diese Zeilen noch immer lesen, so habe ich als kleiner Blindtext etwas geschafft, wovon all die richtigen und wichtigen Texte meist nur träumen."},{timeFrom:"10:30",timeTo:"11:30",title:"Windows 365 & Link vs. Azure Virtual Desktop",speaker:"Timo Herzig, Cloud Architect",description:"Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen Sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans. Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien. Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile in den Mund fliegen. Nicht einmal von der allmächtigen Interpunktion werden die Blindtexte beherrscht – ein geradezu unorthographisches Leben."},{timeFrom:"ab 11:30",to:"12:30",title:"Mittagspause"},{timeFrom:"12:30",timeTo:"13:30",title:"Microsoft Lizenz Wrap-Up & Azure FinOps",speaker:"Lukas Schneider, Head of Business Development & Alliances, John-Cian Maier, Sales Manager (Seidl Software)",highlight:!0,description:"Das Layout ist fertig, der Text lässt auf sich warten. Damit das Layout nun nicht nackt im Raume steht und sich klein und leer vorkommt, springe ich ein: der Blindtext."},{timeFrom:"13:30",timeTo:"14:30",title:"Microsoft 365 Copilot Control System",speaker:"Christoph Wilfing, CEO & Microsoft MVP (atwork)",highlight:!0},{timeFrom:"14:30",timeTo:"15:30",title:"Modern Client Management at Scale (Evergreen Approach)",speaker:"Alexander Schlindwein, Managed Services Lead"},{timeFrom:"ab 15:30",title:"Abschluss & Apéro",description:"Lass den Tag mit entspannten Gesprächen, Networking und Getränken ausklingen."}]}};var p,b,f;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    head: "true",
    hideContainer: "true",
    table: [["header1", "header2"], ["data1", "data2"]]
  }
}`,...(f=(b=c.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var k,x,w;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    agenda: "true",
    headline: "Event-Agenda",
    head: "true",
    HideContainer: "true",
    table: [{
      timeFrom: "09:00",
      timeTo: "09:30",
      title: "Einlass & Warm-Up inkl. Frühstück"
    }, {
      timeFrom: "09:30",
      timeTo: "09:45",
      title: "Begrüßung & Einführung"
    }, {
      timeFrom: "09:45",
      timeTo: "10:30",
      title: "Microsoft Session: Hot News zum Windows-Cloud PC (App Streaming & KI)",
      speaker: "Klaus Harrer-Nemecek, Endpoint Solution Engineer (Microsoft)",
      highlight: true,
      description: "Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man ergibt keinen Sinn. Wirklich keinen Sinn. Man wird zusammenhangslos eingeschoben und rumgedreht – und oftmals gar nicht erst gelesen. Aber bin ich allein deshalb ein schlechterer Text als andere? Na gut, ich werde nie in den Bestsellerlisten stehen. Aber andere Texte schaffen das auch nicht. Und darum stört es mich nicht besonders blind zu sein. Und sollten Sie diese Zeilen noch immer lesen, so habe ich als kleiner Blindtext etwas geschafft, wovon all die richtigen und wichtigen Texte meist nur träumen."
    }, {
      timeFrom: "10:30",
      timeTo: "11:30",
      title: "Windows 365 & Link vs. Azure Virtual Desktop",
      speaker: "Timo Herzig, Cloud Architect",
      description: "Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen Sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans. Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien. Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile in den Mund fliegen. Nicht einmal von der allmächtigen Interpunktion werden die Blindtexte beherrscht – ein geradezu unorthographisches Leben."
    }, {
      timeFrom: "ab 11:30",
      to: "12:30",
      title: "Mittagspause"
    }, {
      timeFrom: "12:30",
      timeTo: "13:30",
      title: "Microsoft Lizenz Wrap-Up & Azure FinOps",
      speaker: "Lukas Schneider, Head of Business Development & Alliances, John-Cian Maier, Sales Manager (Seidl Software)",
      highlight: true,
      description: "Das Layout ist fertig, der Text lässt auf sich warten. Damit das Layout nun nicht nackt im Raume steht und sich klein und leer vorkommt, springe ich ein: der Blindtext."
    }, {
      timeFrom: "13:30",
      timeTo: "14:30",
      title: "Microsoft 365 Copilot Control System",
      speaker: "Christoph Wilfing, CEO & Microsoft MVP (atwork)",
      highlight: true
    }, {
      timeFrom: "14:30",
      timeTo: "15:30",
      title: "Modern Client Management at Scale (Evergreen Approach)",
      speaker: "Alexander Schlindwein, Managed Services Lead"
    }, {
      timeFrom: "ab 15:30",
      title: "Abschluss & Apéro",
      description: "Lass den Tag mit entspannten Gesprächen, Networking und Getränken ausklingen."
    }]
  }
}`,...(w=(x=m.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const G=["Table","Agenda"];export{m as Agenda,c as Table,G as __namedExportsOrder,R as default};
