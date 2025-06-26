import{_ as M}from"./BvNBs35S.js";import{_ as z}from"./BtKxkMcr.js";import{_ as U,c,b as s,e as x,d as L,a as h,t as Y,F as q,r as X,f as d,n as k,T as b,S as a,q as G,o as r}from"./CV0-TAqy.js";const J={tagName:"timeline-entry-inner-text",computed:{},template:`
    <div :class="['timeline__entry-inner-text', { 'timeline__entry-inner-text--simple': simple }]">
      <template v-if="entry.title">
        <div class="timeline__entry-title">{{ entry.title }}</div>
        <p class="timeline__entry-text">{{ entry.text }}</p>
      </template>
      <template v-else><span v-html="entry"></span></template>
    </div>
  `,props:{entry:Object,simple:Boolean}},H={tagName:"timeline",components:{"timeline-entry-inner-text":J},computed:{classList(){return["timeline","has-background","timeline--headline-sticky has-headline-sticky",this.isReady?a.READY:"",this.expanded?a.EXPANDED:"",this.spacing,this.simpleValue?"timeline--simple":"","vue-component"]},copyColor(){return this.color?this.color:"var(--color-copy-light)"},backgroundColor(){return this.bgColor?this.bgColor:"var(--color-blue-dark)"},style(){return`--color-timeline-background: ${this.backgroundColor}; --color-timeline-color: ${this.copyColor};`},headlineClasses(){var e;return`timeline__headline headline-sticky__target h2-font-size light ${(e=this.headline)!=null&&e.classes?this.headline.classes:""}`},lineEndStyle(){var e;return`--timeline-line-position: ${(e=this.entries)==null?void 0:e.length}`},simpleValue(){return b.isTrue(this.simple)},iconName(){return"strategy-split"}},mounted(){this.bindEvents(),this.handleScroll()},data(){return{lastIndex:null,isReady:!1,startDelay:500,isVisible:!1,percentageInViewport:40,minPercentage:-10,maxPercentage:100,entryContainerStates:[],entryContainerStyles:[]}},methods:{bindEvents(){document.addEventListener("scroll",this.handleScroll)},startAnimation(){setTimeout(()=>{this.isReady=!0},this.startDelay)},getEntryLineStyle(e){return`--timeline-line-position: ${e}`},handleScroll(){this.expanded?this.isInViewport():this.updateAnimation()},updateAnimation(){const e=this.getScrollPercentage();if(e<=this.minPercentage)return this.setAnimationStart();if(e>=this.maxPercentage)return this.setAnimationEnd();this.isReady||this.startAnimation(),this.showEntryByPercent(e)},setAnimationStart(){this.isReady=!1},setAnimationEnd(){for(let i=0;i<this.entries.length;i++)this.entryContainerStyles[i]="0",this.entryContainerStates[i]=[a.SHOW,a.IS_FULL]},showEntryByPercent(e){const i=this.maxPercentage/this.entries.length;for(let n=0;n<this.entries.length;n++)this.updateNextStep(n,e,i)},updateNextStep(e,i,n){this.entryContainerStates[e]=a.SHOW;const o=0,u=n*e,t=n*(e+1);let l=0;if(i>=u&&i<=t){const p=n,y=i-u,_=60;l=this.maxPercentage-Math.ceil(y*100/p),l<_&&(this.entryContainerStates[e]=[a.SHOW,"timeline__entry-container--visible"])}else i>t?(l=o,this.entryContainerStates[e]=[a.SHOW,a.IS_FULL]):l=this.maxPercentage;this.simpleValue&&(l<this.maxPercentage&&l>o?l=1:l=0),this.entryContainerStyles[e]=`${l}`},getEntryContainerClasses(e){return["timeline__entry-container",this.entryContainerStates[e]]},getEntryContainerStyle(e){return`--timeline-entry-container-percentage: ${this.entryContainerStyles[e]?this.entryContainerStyles[e]:this.simpleValue?0:this.maxPercentage}`},getScrollPercentage(){const e=this.$refs.root,i=e.getBoundingClientRect().height,n=window.innerHeight/3;let o=b.getScrollTop(e)-n;o<0&&(o=0);const u=window.scrollY-o,t=i-n;return u*100/t},isInViewport(){if(this.isVisible)return;const e=this.$refs.root;b.isInViewportPercent(e,this.percentageInViewport)&&this.startAnimation()}},props:{headline:Object,bgColor:{default:null},color:{default:null},entries:Array,expanded:{default:null},spacing:String,simple:{default:null},subline:String}},K={class:"container"},Q={class:"timeline__row row"},Z={class:"timeline__col col"},$={key:0,class:"timeline__header"},ee={key:0,class:"timeline__subline"},te={class:"timeline__content"},ne={class:"timeline__line"},ie={class:"timeline__entry-inner"},se={class:"timeline__entry-inner-line"},le={key:0,class:"timeline__entry-vertical-line"},re={class:"timeline__entry-inner"},ae={class:"timeline__entry-inner-line"},oe={key:0,class:"timeline__entry-vertical-line"};function ce(e,i,n,o,u,t){var _,w,C,P;const l=M,p=G("timeline-entry-inner-text"),y=z;return r(),c("div",{class:k(t.classList),style:d(t.style),ref:"root"},[s("div",K,[s("div",Q,[s("div",Z,[n.subline?(r(),c("div",$,[L(l,{text:(_=n.headline)==null?void 0:_.text,level:(w=n.headline)==null?void 0:w.level,classes:t.headlineClasses},null,8,["text","level","classes"]),n.subline?(r(),c("div",ee,Y(n.subline),1)):h("",!0)])):(r(),x(l,{key:1,text:(C=n.headline)==null?void 0:C.text,level:(P=n.headline)==null?void 0:P.level,classes:t.headlineClasses},null,8,["text","level","classes"])),s("div",te,[s("div",ne,[i[0]||(i[0]=s("div",{class:"timeline__line-start"},[s("div",{class:"timeline__line-corner"},[s("span")])],-1)),(r(!0),c(q,null,X(n.entries,(V,m)=>(r(),c("div",{class:k(t.getEntryContainerClasses(m)),style:d(t.getEntryContainerStyle(m)),key:m},[s("div",{class:"timeline__entry",style:d(t.getEntryLineStyle(m))},[s("div",ie,[L(p,{entry:V,simple:t.simpleValue},null,8,["entry","simple"]),s("div",se,[t.simpleValue?(r(),x(y,{key:0,icon:t.iconName,class:"timeline__entry-inner-line-icon"},null,8,["icon"])):h("",!0)]),t.simpleValue?(r(),c("div",le)):h("",!0)])],4),s("div",{class:"timeline__entry-line",style:d(t.getEntryLineStyle(m)),ref_for:!0,ref:"entry-line"},null,4),s("div",{class:"timeline__entry-spacer",style:d(t.getEntryLineStyle(m))},[s("div",re,[L(p,{entry:V,simple:t.simpleValue},null,8,["entry","simple"]),s("div",ae,[t.simpleValue?(r(),x(y,{key:0,icon:t.iconName,class:"timeline__entry-inner-line-icon"},null,8,["icon"])):h("",!0)]),t.simpleValue?(r(),c("div",oe)):h("",!0)])],4)],6))),128)),s("div",{class:"timeline__line-end",style:d(t.lineEndStyle)},null,4)])])])])])],6)}const me=U(H,[["render",ce]]);H.__docgenInfo={exportName:"default",displayName:"timeline",description:"",tags:{},props:[{name:"headline",type:{name:"object"}},{name:"bgColor",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"entries",type:{name:"array"}},{name:"expanded",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"spacing",type:{name:"string"}},{name:"simple",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"subline",type:{name:"string"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt-storybook-test/components/timeline.vue"]};const pe={title:"Components/Timeline",component:me,decorators:[e=>({components:{story:e},template:`
        <div>
          <div style="height: 60vh;" class="dummy-content"></div>
          <story />
          <div style="height: 300vh;" class="dummy-content"></div>
        </div>
      `})]},g={args:{headline:{text:"Lorem was sie erwartet",level:"h3"},entries:["Initial Security Audit & Recommendations","Roadmap Workshops","Implementation of Security Solutions","Initial Baselining","Blueprint Matching"]}},v={args:{expanded:!0,headline:{text:"Lorem was sie erwartet",level:"h3"},entries:["Initial Security Audit & Recommendations","Roadmap Workshops","Implementation of Security Solutions","Initial Baselining","Blueprint Matching"]}},f={args:{simple:!0,headline:{text:"Lorem was sie erwartet",level:"h3"},entries:[{title:"Title 1",text:"Lorem ipsum dolor sit amet, consectet"},{title:"Title 2",text:"Lorem ipsum dolor sit amet, consectet"},{title:"Title 3",text:"Lorem ipsum dolor sit amet, consectet"},{title:"Title 4",text:"Lorem ipsum dolor sit amet, consectet"}]}},S={args:{simple:!0,headline:{text:"Lorem was sie erwartet",level:"h3"},subline:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ",entries:[{title:"Title 1",text:"Lorem ipsum dolor sit amet, consectet"},{title:"Title 2",text:"Lorem ipsum dolor sit amet, consectet"},{title:"Title 3",text:"Lorem ipsum dolor sit amet, consectet"}]}};var E,I,T;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    headline: {
      text: 'Lorem was sie erwartet',
      level: 'h3'
    },
    entries: ['Initial Security Audit & Recommendations', 'Roadmap Workshops', 'Implementation of Security Solutions', 'Initial Baselining', 'Blueprint Matching']
  }
}`,...(T=(I=g.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var A,B,R;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    expanded: true,
    headline: {
      text: 'Lorem was sie erwartet',
      level: 'h3'
    },
    entries: ['Initial Security Audit & Recommendations', 'Roadmap Workshops', 'Implementation of Security Solutions', 'Initial Baselining', 'Blueprint Matching']
  }
}`,...(R=(B=v.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var N,W,D;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    simple: true,
    headline: {
      text: 'Lorem was sie erwartet',
      level: 'h3'
    },
    entries: [{
      title: 'Title 1',
      text: 'Lorem ipsum dolor sit amet, consectet'
    }, {
      title: 'Title 2',
      text: 'Lorem ipsum dolor sit amet, consectet'
    }, {
      title: 'Title 3',
      text: 'Lorem ipsum dolor sit amet, consectet'
    }, {
      title: 'Title 4',
      text: 'Lorem ipsum dolor sit amet, consectet'
    }]
  }
}`,...(D=(W=f.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var O,j,F;S.parameters={...S.parameters,docs:{...(O=S.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    simple: true,
    headline: {
      text: 'Lorem was sie erwartet',
      level: 'h3'
    },
    subline: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ',
    entries: [{
      title: 'Title 1',
      text: 'Lorem ipsum dolor sit amet, consectet'
    }, {
      title: 'Title 2',
      text: 'Lorem ipsum dolor sit amet, consectet'
    }, {
      title: 'Title 3',
      text: 'Lorem ipsum dolor sit amet, consectet'
    }]
  }
}`,...(F=(j=S.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};const ye=["Default","Expanded","Simple","SimpleWithSubline"];export{g as Default,v as Expanded,f as Simple,S as SimpleWithSubline,ye as __namedExportsOrder,pe as default};
