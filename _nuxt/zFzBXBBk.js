import{E as f}from"./CbhbZ9qT.js";import{_ as y,c as u,b as x,F as w,r as b,n as T,o as c,e as M,m as k}from"./Bu6tSsIc.js";import"./DK8IqcF6.js";import"./D2Y-pIO_.js";import"./DDrXwds_.js";import"./Cdbkmgzt.js";import"./BLspgml_.js";import"./DvbQbW6B.js";const h={name:"EventList",props:{list:{type:Array,required:!0},overlap:{type:Boolean,default:!1},settings:{type:Array,default:()=>[]},sticky:{type:Boolean,default:!1}},computed:{mergedTeasers(){var n;let e=0;const a=[];return(n=this.list)==null||n.forEach((t,o)=>{const l=o+1;let r=this.settings[e]||{},i=t.variant||r.variant;if(r.teaser){const v=this.getTeaserProps(r.teaser,{},i,l);a.push(v),e++,r=this.settings[e]||{},i=t.variant||r.variant}const m=this.getTeaserProps(t,t,i,l);a.push(m),e++}),a}},methods:{getTeaserProps(e,a,n,t){let o={...a,...e};return o.variant=n||a.variant,o.index=t,o}}},N={class:"event-list__row row col-lg-12"};function _(e,a,n,t,o,l){const r=f;return c(),u("div",{class:T(["event-list container",{"event-list--overlap":n.overlap,"is-sticky-scroller":n.sticky}])},[x("div",N,[(c(!0),u(w,null,b(l.mergedTeasers,(i,m)=>(c(),M(r,k({key:m,ref_for:!0},i),null,16))),128))])],2)}const E=y(h,[["render",_]]);h.__docgenInfo={displayName:"EventList",exportName:"default",description:"",tags:{},props:[{name:"list",type:{name:"array"},required:!0},{name:"overlap",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"settings",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"sticky",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/event-list.vue"]};const z={component:E,argTypes:{list:{description:"List of Events",type:"array"},settings:{description:"Event Teaser Variant/Size",type:"array"}},title:"Components/Event List"},s={args:{list:[{url:"javascript:void(0)",headline:"Neue Headline 2. Thema, maximal 2 Zeilig",content:"Even in the midst of the all the negative influences from family TWhen I was a young man, even a teenager for that matter, I always had an optimism that was",moment:"16.02.2022",time:"14-15 Uhr",shapes:[{color:"var(--color-green-blue)"},{color:"var(--color-yellow)"}],webcast:!0,author:["Nadine Kern","Max Mustermann"],image:{img:"/demo/authors-demo.png",alt:"lorem ipsum"},badge:{text:"Neuer Webcast",icon:""},cta:{text:"Jetzt anmelden",href:"javascript:void(0)",skin:"primary",button:!0,external:!0}},{url:"javascript:void(0)",headline:"Neue Headline 2. Thema, maximal 2 Zeilig",content:"<ul><li>I always had an optimism that was hard for others</li><li>Even in the midst of the all the negative influences from family TWhen I was a young man, even a teenager for that matter, I always had an optimism that was</li></ul>",moment:"16.02.2022",time:"14-15 Uhr",shapes:[{color:"var(--color-green)"}],webcast:!0,author:["Nadine Kern","Max Mustermann"],image:{img:"/demo/authors-demo.png",alt:"lorem ipsum"},badge:{text:"Neuer Webcast",icon:""},cta:{text:"Jetzt anmelden",href:"javascript:void(0)",skin:"primary",button:!0,external:!0}},{url:"javascript:void(0)",headline:"Microsoft 365 Holistic Workplace Security via Teams Meeting",time:"1-4 Tage",shapes:[{color:"var(--color-yellow)"},{color:"var(--color-blue-medium)"}],author:["Nadine Kern","Max Mustermann"],image:{img:"/demo/authors-demo.png",alt:"lorem ipsum"},badge:{text:"Training",textColor:"var(--color-black)",color:"var(--color-sunglow)"},price:"Kostenlos"},{url:"javascript:void(0)",headline:"Microsoft 365 Holistic Workplace Security via Teams Meeting",time:"1-4 Tage",shapes:[{color:"var(--color-yellow)"},{color:"var(--color-blue-medium)"}],author:["Nadine Kern","Max Mustermann"],image:{img:"/demo/authors-demo.png",alt:"lorem ipsum"},badge:{text:"Training",textColor:"var(--color-black)",color:"var(--color-sunglow)"},price:"Kostenlos"},{url:"javascript:void(0)",headline:"Microsoft 365 Holistic Workplace Security via Teams Meeting",time:"1-4 Tage",shapes:[{color:"var(--color-yellow)"},{color:"var(--color-blue-medium)"}],author:["Nadine Kern","Max Mustermann"],image:{img:"/demo/authors-demo.png",alt:"lorem ipsum"},badge:{text:"Training",textColor:"var(--color-black)",color:"var(--color-sunglow)"},price:"Kostenlos"},{url:"javascript:void(0)",headline:"Microsoft 365 Holistic Workplace Security via Teams Meeting",time:"1-4 Tage",shapes:[{color:"var(--color-yellow)"},{color:"var(--color-blue-medium)"}],author:["Nadine Kern","Max Mustermann"],image:{img:"/demo/authors-demo.png",alt:"lorem ipsum"},badge:{text:"Training",textColor:"var(--color-black)",color:"var(--color-sunglow)"},price:"Kostenlos"}],settings:[{variant:6},{variant:6},{variant:8,teaser:{url:"javascript:void(0)",teaser:!0,headline:"Eigenes Training Lorem Ipsum dolor Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",content:"<ul><li>I always had an optimism that was hard for others</li><li>Even in the midst of the all the negative influences from family TWhen I was a young man, even a teenager for that matter, I always had an optimism that was</li></ul>",cta:{text:"Schulungen anfragen",skin:"secondary is-light",button:!0}}},{variant:4}]}};var d,p,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    list: [{
      url: 'javascript:void(0)',
      headline: 'Neue Headline 2. Thema, maximal 2 Zeilig',
      content: 'Even in the midst of the all the negative influences from family TWhen I was a young man, even a teenager for that matter, I always had an optimism that was',
      moment: '16.02.2022',
      time: '14-15 Uhr',
      shapes: [{
        color: 'var(--color-green-blue)'
      }, {
        color: 'var(--color-yellow)'
      }],
      webcast: true,
      author: ['Nadine Kern', 'Max Mustermann'],
      image: {
        img: '/demo/authors-demo.png',
        alt: 'lorem ipsum'
      },
      badge: {
        text: 'Neuer Webcast',
        icon: ''
      },
      cta: {
        text: 'Jetzt anmelden',
        href: 'javascript:void(0)',
        skin: 'primary',
        button: true,
        external: true
      }
    }, {
      url: 'javascript:void(0)',
      headline: 'Neue Headline 2. Thema, maximal 2 Zeilig',
      content: '<ul><li>I always had an optimism that was hard for others</li><li>Even in the midst of the all the negative influences from family TWhen I was a young man, even a teenager for that matter, I always had an optimism that was</li></ul>',
      moment: '16.02.2022',
      time: '14-15 Uhr',
      shapes: [{
        color: 'var(--color-green)'
      }],
      webcast: true,
      author: ['Nadine Kern', 'Max Mustermann'],
      image: {
        img: '/demo/authors-demo.png',
        alt: 'lorem ipsum'
      },
      badge: {
        text: 'Neuer Webcast',
        icon: ''
      },
      cta: {
        text: 'Jetzt anmelden',
        href: 'javascript:void(0)',
        skin: 'primary',
        button: true,
        external: true
      }
    }, {
      url: 'javascript:void(0)',
      headline: 'Microsoft 365 Holistic Workplace Security via Teams Meeting',
      time: '1-4 Tage',
      shapes: [{
        color: 'var(--color-yellow)'
      }, {
        color: 'var(--color-blue-medium)'
      }],
      author: ['Nadine Kern', 'Max Mustermann'],
      image: {
        img: '/demo/authors-demo.png',
        alt: 'lorem ipsum'
      },
      badge: {
        text: 'Training',
        textColor: 'var(--color-black)',
        color: 'var(--color-sunglow)'
      },
      price: 'Kostenlos'
    }, {
      url: 'javascript:void(0)',
      headline: 'Microsoft 365 Holistic Workplace Security via Teams Meeting',
      time: '1-4 Tage',
      shapes: [{
        color: 'var(--color-yellow)'
      }, {
        color: 'var(--color-blue-medium)'
      }],
      author: ['Nadine Kern', 'Max Mustermann'],
      image: {
        img: '/demo/authors-demo.png',
        alt: 'lorem ipsum'
      },
      badge: {
        text: 'Training',
        textColor: 'var(--color-black)',
        color: 'var(--color-sunglow)'
      },
      price: 'Kostenlos'
    }, {
      url: 'javascript:void(0)',
      headline: 'Microsoft 365 Holistic Workplace Security via Teams Meeting',
      time: '1-4 Tage',
      shapes: [{
        color: 'var(--color-yellow)'
      }, {
        color: 'var(--color-blue-medium)'
      }],
      author: ['Nadine Kern', 'Max Mustermann'],
      image: {
        img: '/demo/authors-demo.png',
        alt: 'lorem ipsum'
      },
      badge: {
        text: 'Training',
        textColor: 'var(--color-black)',
        color: 'var(--color-sunglow)'
      },
      price: 'Kostenlos'
    }, {
      url: 'javascript:void(0)',
      headline: 'Microsoft 365 Holistic Workplace Security via Teams Meeting',
      time: '1-4 Tage',
      shapes: [{
        color: 'var(--color-yellow)'
      }, {
        color: 'var(--color-blue-medium)'
      }],
      author: ['Nadine Kern', 'Max Mustermann'],
      image: {
        img: '/demo/authors-demo.png',
        alt: 'lorem ipsum'
      },
      badge: {
        text: 'Training',
        textColor: 'var(--color-black)',
        color: 'var(--color-sunglow)'
      },
      price: 'Kostenlos'
    }],
    settings: [{
      variant: 6
    }, {
      variant: 6
    }, {
      variant: 8,
      teaser: {
        url: 'javascript:void(0)',
        teaser: true,
        headline: 'Eigenes Training Lorem Ipsum dolor Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        content: '<ul><li>I always had an optimism that was hard for others</li><li>Even in the midst of the all the negative influences from family TWhen I was a young man, even a teenager for that matter, I always had an optimism that was</li></ul>',
        cta: {
          text: 'Schulungen anfragen',
          skin: 'secondary is-light',
          button: true
        }
      }
    }, {
      variant: 4
    }]
  }
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const B=["EventList"];export{s as EventList,B as __namedExportsOrder,z as default};
