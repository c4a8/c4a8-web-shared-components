import{_ as z}from"./CpIcFR8r.js";import{_ as E}from"./Q7-8E8IQ.js";import{_ as F,c as t,b as a,n as d,d as L,a as s,w as H,F as h,r as u,o as n,g as N,t as l,f as R,e as W}from"./BkCUMCv2.js";const A={tagName:"v-table",props:{headline:{type:String,default:null},table:{type:Array,required:!0},hideContainer:{type:Boolean,default:!1},style:{type:String,default:""},classes:{type:String,default:""},head:{type:Boolean,default:!1},agenda:{type:Boolean,default:!1},sticky:{type:Boolean,default:!1},headBg:{type:String},headColor:{type:String}},mounted(){this.setStyle()},methods:{setStyle(){this.$refs.head&&(this.$refs.head.style.backgroundColor=this.headBg,this.$refs.head.style.color=this.headColor),this.$refs.headSticky&&(this.$refs.headSticky.style.backgroundColor=this.headBg)}},computed:{tableHideContainer(){return this.hideContainer},styleClass(){return this.sticky?"table-sticky":"table-striped"},tableRows(){return this.head?this.table.slice(1):this.table}}},V={key:0,class:"agenda"},D={key:0},P={key:0,ref:"head"},K=["innerHTML"],U=["innerHTML"],I=["innerHTML"],O=["innerHTML"];function G(q,c,e,J,Z,o){const _=z,B=E;return n(),t("div",null,[a("div",{class:d([o.tableHideContainer?"mb-8":"container","mt-8 mt-lg-10"])},[a("div",{class:d([o.tableHideContainer?"":"row"])},[a("div",{class:d(["table-responsive",e.classes])},[L(_,{level:"h2",class:"space-bottom-1"},{default:H(()=>[N(l(e.headline),1)]),_:1}),e.agenda?(n(),t("table",V,[(n(!0),t(h,null,u(e.table,i=>(n(),t("tr",{key:i.id},[a("td",null,[a("span",null,l(i.timeFrom),1),i.timeTo?(n(),t("span",D," - "+l(i.timeTo),1)):s("",!0),c[0]||(c[0]=a("br",null,null,-1)),a("strong",null,l(i.title),1),c[1]||(c[1]=a("br",null,null,-1)),i.speaker?(n(),t("em",{key:1,style:R(i.highlight?"--color-highlight-underline: var(--color-yellow)":"--color-highlight-underline: null"),class:"highlight-underline"},l(i.speaker),5)):s("",!0),a("p",null,l(i.description),1)])]))),128))])):s("",!0),a("table",{class:d(["v-table table",e.sticky?"sticky":"",o.styleClass])},[e.head&&e.table.length?(n(),t("thead",P,[a("tr",null,[e.sticky?(n(),t("th",{key:0,class:"stickyColumn col-3 col-lg-4 py-3 font-size-1",innerHTML:e.table[0][0],ref:"headSticky"},null,8,K)):s("",!0),(n(!0),t(h,null,u(e.sticky?e.table[0].length-1:e.table[0],(i,r)=>(n(),t("th",{key:"head-"+r,innerHTML:e.sticky?e.table[0][r+1]:i},null,8,U))),128))])],512)):s("",!0),a("tbody",null,[(n(!0),t(h,null,u(o.tableRows,(i,r)=>(n(),t("tr",{key:"row-"+r},[e.sticky?(n(),t("td",{key:0,class:"stickyColumn col-3 col-lg-4",innerHTML:o.tableRows[r][0]},null,8,I)):s("",!0),(n(!0),t(h,null,u(e.sticky?i.length-1:i,(f,y)=>(n(),t("td",{key:"cell-"+r+"-"+y},[(e.sticky?i[y+1]==="check":f==="check")?(n(),W(B,{key:0,icon:"check-mark",color:"var(--color-black)",size:"medium"})):(n(),t("div",{key:1,innerHTML:e.sticky?e.table[r+1][y+1]:f},null,8,O))]))),128))]))),128))])],2)],2)],2)],2)])}const j=F(A,[["render",G]]);A.__docgenInfo={exportName:"default",displayName:"v-table",description:"",tags:{},props:[{name:"headline",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"table",type:{name:"array"},required:!0},{name:"hideContainer",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"style",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"classes",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"head",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"agenda",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"sticky",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"headBg",type:{name:"string"}},{name:"headColor",type:{name:"string"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/v-table.vue"]};const $={title:"Components/Table",component:j,argTypes:{}},m={args:{head:"true",hideContainer:"true",table:[["header1","header2"],["data1","data2"]]}},g={args:{agenda:"true",headline:"Event-Agenda",head:"true",HideContainer:"true",table:[{timeFrom:"09:00",timeTo:"09:30",title:"Einlass & Warm-Up inkl. Frühstück"},{timeFrom:"09:30",timeTo:"09:45",title:"Begrüßung & Einführung"},{timeFrom:"09:45",timeTo:"10:30",title:"Microsoft Session: Hot News zum Windows-Cloud PC (App Streaming & KI)",speaker:"Klaus Harrer-Nemecek, Endpoint Solution Engineer (Microsoft)",highlight:!0,description:"Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man ergibt keinen Sinn. Wirklich keinen Sinn. Man wird zusammenhangslos eingeschoben und rumgedreht – und oftmals gar nicht erst gelesen. Aber bin ich allein deshalb ein schlechterer Text als andere? Na gut, ich werde nie in den Bestsellerlisten stehen. Aber andere Texte schaffen das auch nicht. Und darum stört es mich nicht besonders blind zu sein. Und sollten Sie diese Zeilen noch immer lesen, so habe ich als kleiner Blindtext etwas geschafft, wovon all die richtigen und wichtigen Texte meist nur träumen."},{timeFrom:"10:30",timeTo:"11:30",title:"Windows 365 & Link vs. Azure Virtual Desktop",speaker:"Timo Herzig, Cloud Architect",description:"Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen Sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans. Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien. Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile in den Mund fliegen. Nicht einmal von der allmächtigen Interpunktion werden die Blindtexte beherrscht – ein geradezu unorthographisches Leben."},{timeFrom:"ab 11:30",to:"12:30",title:"Mittagspause"},{timeFrom:"12:30",timeTo:"13:30",title:"Microsoft Lizenz Wrap-Up & Azure FinOps",speaker:"Lukas Schneider, Head of Business Development & Alliances, John-Cian Maier, Sales Manager (Seidl Software)",highlight:!0,description:"Das Layout ist fertig, der Text lässt auf sich warten. Damit das Layout nun nicht nackt im Raume steht und sich klein und leer vorkommt, springe ich ein: der Blindtext."},{timeFrom:"13:30",timeTo:"14:30",title:"Microsoft 365 Copilot Control System",speaker:"Christoph Wilfing, CEO & Microsoft MVP (atwork)",highlight:!0},{timeFrom:"14:30",timeTo:"15:30",title:"Modern Client Management at Scale (Evergreen Approach)",speaker:"Alexander Schlindwein, Managed Services Lead"},{timeFrom:"ab 15:30",title:"Abschluss & Apéro",description:"Lass den Tag mit entspannten Gesprächen, Networking und Getränken ausklingen."}]}},k={args:{head:"true",headBg:"var(--color-gigas)",headColor:"var(--color-white)",sticky:"true",table:[["Risk Measures / GK Services","NIS2","CSOC","APT Response","Preventive Services","Managed Red Tennant","AzERE","Data Security","Workplace / Azure"],["Risk Analysis and Information System Security","12.2 a)","","","check","","","check",""],["Incident Handling","12.2 b)","check","check","","","","",""],["Business Continuity","12.2 c)","","check","","","check","",""],["Supply Chain Security","12.2 d)","check","","","","","",""],["Security in Network and Information Systems","12.2 e)","check","","","check","","","check"],["Effectiveness of Cybersecurity Risk Management Measures","12.2 f)","check","","","","","",""],["Basic Computer Hygiene Practices and Cybersecurity Training","12.2 g)","check","","","","","",""],["Cryptography","12.2 h)","","","","","","check","check"],["Human Resources Security, Access Control Policies and Asset Management","12.2 i)","","","","","","","check"],["Multifactor Authentication or Secured Communication","12.2 j)","","","","","","","check"]]}};var p,b,S;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    head: 'true',
    hideContainer: 'true',
    table: [['header1', 'header2'], ['data1', 'data2']]
  }
}`,...(S=(b=m.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var C,v,M;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    agenda: 'true',
    headline: 'Event-Agenda',
    head: 'true',
    HideContainer: 'true',
    table: [{
      timeFrom: '09:00',
      timeTo: '09:30',
      title: 'Einlass & Warm-Up inkl. Frühstück'
    }, {
      timeFrom: '09:30',
      timeTo: '09:45',
      title: 'Begrüßung & Einführung'
    }, {
      timeFrom: '09:45',
      timeTo: '10:30',
      title: 'Microsoft Session: Hot News zum Windows-Cloud PC (App Streaming & KI)',
      speaker: 'Klaus Harrer-Nemecek, Endpoint Solution Engineer (Microsoft)',
      highlight: true,
      description: 'Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man ergibt keinen Sinn. Wirklich keinen Sinn. Man wird zusammenhangslos eingeschoben und rumgedreht – und oftmals gar nicht erst gelesen. Aber bin ich allein deshalb ein schlechterer Text als andere? Na gut, ich werde nie in den Bestsellerlisten stehen. Aber andere Texte schaffen das auch nicht. Und darum stört es mich nicht besonders blind zu sein. Und sollten Sie diese Zeilen noch immer lesen, so habe ich als kleiner Blindtext etwas geschafft, wovon all die richtigen und wichtigen Texte meist nur träumen.'
    }, {
      timeFrom: '10:30',
      timeTo: '11:30',
      title: 'Windows 365 & Link vs. Azure Virtual Desktop',
      speaker: 'Timo Herzig, Cloud Architect',
      description: 'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen Sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans. Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien. Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile in den Mund fliegen. Nicht einmal von der allmächtigen Interpunktion werden die Blindtexte beherrscht – ein geradezu unorthographisches Leben.'
    }, {
      timeFrom: 'ab 11:30',
      to: '12:30',
      title: 'Mittagspause'
    }, {
      timeFrom: '12:30',
      timeTo: '13:30',
      title: 'Microsoft Lizenz Wrap-Up & Azure FinOps',
      speaker: 'Lukas Schneider, Head of Business Development & Alliances, John-Cian Maier, Sales Manager (Seidl Software)',
      highlight: true,
      description: 'Das Layout ist fertig, der Text lässt auf sich warten. Damit das Layout nun nicht nackt im Raume steht und sich klein und leer vorkommt, springe ich ein: der Blindtext.'
    }, {
      timeFrom: '13:30',
      timeTo: '14:30',
      title: 'Microsoft 365 Copilot Control System',
      speaker: 'Christoph Wilfing, CEO & Microsoft MVP (atwork)',
      highlight: true
    }, {
      timeFrom: '14:30',
      timeTo: '15:30',
      title: 'Modern Client Management at Scale (Evergreen Approach)',
      speaker: 'Alexander Schlindwein, Managed Services Lead'
    }, {
      timeFrom: 'ab 15:30',
      title: 'Abschluss & Apéro',
      description: 'Lass den Tag mit entspannten Gesprächen, Networking und Getränken ausklingen.'
    }]
  }
}`,...(M=(v=g.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};var T,w,x;k.parameters={...k.parameters,docs:{...(T=k.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    head: 'true',
    headBg: 'var(--color-gigas)',
    headColor: 'var(--color-white)',
    sticky: 'true',
    table: [['Risk Measures / GK Services', 'NIS2', 'CSOC', 'APT Response', 'Preventive Services', 'Managed Red Tennant', 'AzERE', 'Data Security', 'Workplace / Azure'], ['Risk Analysis and Information System Security', '12.2 a)', '', '', 'check', '', '', 'check', ''], ['Incident Handling', '12.2 b)', 'check', 'check', '', '', '', '', ''], ['Business Continuity', '12.2 c)', '', 'check', '', '', 'check', '', ''], ['Supply Chain Security', '12.2 d)', 'check', '', '', '', '', '', ''], ['Security in Network and Information Systems', '12.2 e)', 'check', '', '', 'check', '', '', 'check'], ['Effectiveness of Cybersecurity Risk Management Measures', '12.2 f)', 'check', '', '', '', '', '', ''], ['Basic Computer Hygiene Practices and Cybersecurity Training', '12.2 g)', 'check', '', '', '', '', '', ''], ['Cryptography', '12.2 h)', '', '', '', '', '', 'check', 'check'], ['Human Resources Security, Access Control Policies and Asset Management', '12.2 i)', '', '', '', '', '', '', 'check'], ['Multifactor Authentication or Secured Communication', '12.2 j)', '', '', '', '', '', '', 'check']]
  }
}`,...(x=(w=k.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};const ee=["Table","Agenda","StickyColumn"];export{g as Agenda,k as StickyColumn,m as Table,ee as __namedExportsOrder,$ as default};
