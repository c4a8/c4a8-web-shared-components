import{_ as A}from"./D_Q4lDQN.js";import{_ as j}from"./DPL8tNAx.js";import{_ as C}from"./CwH31ri4.js";import{_ as M}from"./rWWPhF_O.js";import{_ as I,c,b as e,d as n,F as _,r as q,w as v,f as u,n as D,S as T,o as d,t as r,e as E,a as B,m as z,g as h}from"./CZWkLJ5X.js";import{u as R}from"./C4lqzGGi.js";const k={tagName:"sidebar",props:{sections:{type:Array},headlineText:{type:String},color:{type:String},date:{type:String},location:{type:String},hint:{type:String}},computed:{mainStyle(){return{"--color-headlines":this.color}}},data(){return{isReady:!1,State:T,modalStore:null}},mounted(){this.isReady=!0,this.modalStore=R(),this.$nextTick(()=>{this.registerDialogs()}),window.addEventListener("scroll",this.handleScroll)},beforeUnmount(){this.modalStore&&this.sections&&this.sections.forEach(o=>{this.modalStore.unregisterModal(o.title)}),window.removeEventListener("scroll",this.handleScroll)},methods:{registerDialogs(){!this.sections||!this.modalStore||this.sections.forEach((o,t)=>{this.modalStore.registerModal(o.title,{open:()=>this.openDialog(t),close:()=>this.closeDialog(t)})})},handleScroll(){this.sections.forEach((o,t)=>{const s=this.getDialogByIndex(t);s&&s.open&&s.close()})},getDialogByIndex(o){const t=this.$refs[`dialog${o}`];if(t)return t[0]},openDialog(o){const t=this.getDialogByIndex(o);!t||!t.showModal||t.showModal()},closeDialog(o){const t=this.getDialogByIndex(o);!t||!t.close||t.close()}}},F={class:"sidebar__nav"},N={class:"sidebar__controls"},O=["onClick"],H={class:"sidebar__section-content"},V={class:"sidebar__section-name"},P={class:"sidebar__section-overline"},W={class:"sidebar__section-title"},G={class:"sidebar__dialog-content"},J={class:"sidebar__dialog-wrapper"},U={class:"sidebar__dialog-section"},Y={class:"sidebar__dialog-section-overline"},$={class:"sidebar__dialog-section-title"},K={class:"sidebar__dialog-infos"},Q=["innerHTML"],X={class:"sidebar__row row"},Z={class:"col"},ee=["innerHTML"],te={class:"sidebar__row sidebar__row--left row"},oe={class:"col"},ae={class:"sidebar__date"},se={class:"sidebar__location"},re={class:"sidebar__hint"};function ie(o,t,s,de,p,m){const g=A,x=j,L=C,S=M;return d(),c("div",{class:D(["sidebar",{[p.State.READY]:p.isReady}])},[e("nav",F,[e("div",N,[(d(!0),c(_,null,q(s.sections,(a,i)=>(d(),c(_,{key:i},[e("button",{class:"sidebar__button","aria-haspopup":"dialog",style:u({"--sidebar-section-color":a.color,"--sidebar-section-width":a.width,"--sidebar-section-index":i}),onClick:w=>m.openDialog(i)},[t[0]||(t[0]=e("div",{class:"sidebar__section-bar"},null,-1)),e("div",H,[e("div",V,[e("div",P,r(a.overline),1),e("div",W,r(a.title),1)])])],12,O),e("dialog",{class:"sidebar__dialog",ref_for:!0,ref:`dialog${i}`,style:u({"--sidebar-dialog-background-color":a.color,"--sidebar-dialog-text-color":a.textColor})},[n(g,{class:"sidebar__dialog-close",icon:"close",onClick:w=>m.closeDialog(i),hover:!0,circle:!0},null,8,["onClick"]),e("div",G,[e("div",J,[e("div",U,[e("div",Y,r(a.overline),1),e("div",$,r(a.title),1)]),e("div",K,[e("div",{class:"sidebar__dialog-text",innerHTML:a.text},null,8,Q),a.cta?(d(),E(x,z({key:0,class:"sidebar__dialog-cta"},{ref_for:!0},a.cta),null,16)):B("",!0)])])])],4)],64))),128))])]),n(S,{class:"sidebar__main",style:u(m.mainStyle)},{default:v(()=>[e("div",X,[e("div",Z,[n(L,{level:"h1",class:"sidebar__headline font-size-6"},{default:v(()=>[e("span",{innerHTML:s.headlineText},null,8,ee)]),_:1})])]),e("div",te,[e("div",oe,[e("div",ae,r(s.date),1),e("span",se,[h(r(s.location)+" ",1),e("div",re,[h(r(s.hint)+" ",1),n(g,{icon:"arrow-curl",size:"medium",direction:"left"})])])])])]),_:1},8,["style"])],2)}const ne=I(k,[["render",ie]]);k.__docgenInfo={exportName:"default",displayName:"sidebar",description:"",tags:{},props:[{name:"sections",type:{name:"array"}},{name:"headlineText",type:{name:"string"}},{name:"color",type:{name:"string"}},{name:"date",type:{name:"string"}},{name:"location",type:{name:"string"}},{name:"hint",type:{name:"string"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/sidebar.vue"]};const _e={title:"Components/Sidebar",component:ne,parameters:{layout:"fullscreen"},decorators:[(o,t)=>({components:{story:o},setup(){return{args:t.args}},template:`
        <story />
        <div style="height: 200vh;" class="dummy-content is--dark"></div>
      `})]},l={args:{headlineText:"Visit us at<br />it-sa 2025<br/> in Nürnberg!",color:"var(--color-orange)",date:"October 7-9",location:"Exhibition Center | Hall 6, Booth 232",hint:"Follow the Footsteps!",sections:[{color:"var(--color-celery)",overline:"Managed",title:"Intune",width:97,text:"Ein Arbeitsplatz, der sich selbst managt. Windows, macOS, iOS und Android – konsistent, sicher, automatisiert.<br>Wir setzen auf Infrastructure as Code mit Blueprints und TerraProvider, automatisieren Application Lifecycle mit Runbooks und RealmJoin und überwachen alles kontinuierlich mit Alerts und Analytics. So entstehen Arbeitsumgebungen, die sich anpassen, bevor sie Probleme machen. 100% Made and Operated in Germany.",cta:{text:"Lorem Ipsum dolor sit",href:"javascript:void(0)",link:!0}},{color:"var(--color-ripe-lemon)",overline:"Managed",title:"Entra",width:39,text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},{color:"var(--color-red)",overline:"Managed",title:"Red Tenant",width:74,text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",textColor:"var(--color-white)",cta:{text:"Lorem Ipsum dolor sit",href:"javascript:void(0)",link:!0}},{color:"var(--color-gigas)",overline:"Managed",title:"Soc",width:37,text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",textColor:"var(--color-white)",cta:{text:"Lorem Ipsum dolor sit",href:"javascript:void(0)",link:!0}},{color:"var(--color-denim)",overline:"Managed",title:"Azure",width:69,text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",textColor:"var(--color-white)",cta:{text:"Lorem Ipsum dolor sit",href:"javascript:void(0)",link:!0}}]}};var b,y,f;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    headlineText: 'Visit us at<br />it-sa 2025<br/> in Nürnberg!',
    color: 'var(--color-orange)',
    date: 'October 7-9',
    location: 'Exhibition Center | Hall 6, Booth 232',
    hint: 'Follow the Footsteps!',
    sections: [{
      color: 'var(--color-celery)',
      overline: 'Managed',
      title: 'Intune',
      width: 97,
      text: \`Ein Arbeitsplatz, der sich selbst managt. Windows, macOS, iOS und Android – konsistent, sicher, automatisiert.<br>Wir setzen auf Infrastructure as Code mit Blueprints und TerraProvider, automatisieren Application Lifecycle mit Runbooks und RealmJoin und überwachen alles kontinuierlich mit Alerts und Analytics. So entstehen Arbeitsumgebungen, die sich anpassen, bevor sie Probleme machen. 100% Made and Operated in Germany.\`,
      cta: {
        text: 'Lorem Ipsum dolor sit',
        href: 'javascript:void(0)',
        link: true
      }
    }, {
      color: 'var(--color-ripe-lemon)',
      overline: 'Managed',
      title: 'Entra',
      width: 39,
      text: \`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\`
    }, {
      color: 'var(--color-red)',
      overline: 'Managed',
      title: 'Red Tenant',
      width: 74,
      text: \`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.\`,
      textColor: 'var(--color-white)',
      cta: {
        text: 'Lorem Ipsum dolor sit',
        href: 'javascript:void(0)',
        link: true
      }
    }, {
      color: 'var(--color-gigas)',
      overline: 'Managed',
      title: 'Soc',
      width: 37,
      text: \`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\`,
      textColor: 'var(--color-white)',
      cta: {
        text: 'Lorem Ipsum dolor sit',
        href: 'javascript:void(0)',
        link: true
      }
    }, {
      color: 'var(--color-denim)',
      overline: 'Managed',
      title: 'Azure',
      width: 69,
      text: \`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\`,
      textColor: 'var(--color-white)',
      cta: {
        text: 'Lorem Ipsum dolor sit',
        href: 'javascript:void(0)',
        link: true
      }
    }]
  }
}`,...(f=(y=l.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const ve=["Default"];export{l as Default,ve as __namedExportsOrder,_e as default};
