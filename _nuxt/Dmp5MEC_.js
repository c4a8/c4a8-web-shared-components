import{_ as F}from"./6XbFelo_.js";import{P as A}from"./DZAKhzN2.js";import"./BvNBs35S.js";import"./CV0-TAqy.js";import"./MXNaWOe6.js";import"./BvOkbsjE.js";import"./5GZFpEqa.js";import"./BtKxkMcr.js";import"./CRJiVXqU.js";import"./CpmK0_Tr.js";import"./FECscspt.js";import"./BPyAfcDP.js";import"./DGvx1glh.js";import"./CajngY8W.js";import"./C0jt2fdE.js";import"./BmmglYY5.js";const X={component:F,argTypes:{limit:{description:"Amount of visible Words in a Post Preview",type:"number"},headline:{description:"Headline of the Component",type:"string"},subline:{description:"Subline of the Component",type:"string"},level:{description:"Headline Level",type:"string"},headlineClasses:{description:"Headline Classes",type:"string"},sublineClasses:{description:"Subline Classes",type:"string"},spacing:{description:"Component Spacing",type:"string"},slider:{description:"Enables Slider",type:"boolean"},bgColor:{description:"Sets Background Color",type:"string"},cta:{description:"Cta Object",type:"object"},caseStudies:{description:"Filters for Casestudies",type:"boolean"},events:{description:"Filters for Events",type:"boolean"},combine:{description:"Combines different types of Blogs",type:"boolean"},limitCaseStudies:{description:"Limits the Amount of Casestudies in Blog Recent",type:"number"},limitEvents:{description:"Limits the Amount of Events in Blog Recent",type:"number"},hideContainer:{description:"Places Blogs in a grid form",type:"boolean"},sticky:{description:"Enables Sticky Feature for Component",type:"boolean"},tag:{description:"Filters for certain Tags",type:"string"}},title:"Components/Blog Recent"},e={args:{limit:21,headline:"lorem ipsum headline",slider:!0,posts:A}},r={args:{limit:21,headline:"lorem ipsum headline",subline:"lorem ipsum subline lorem ipsum lorem ipsum lorem ipsum",slider:!0}},t={args:{limit:21,headline:"lorem ipsum headline",level:"h2",headlineClasses:"text-white",slider:!0,bgColor:"var(--color-gigas)"}},i={args:{limit:21,headline:"lorem ipsum headline",slider:!0,events:!0,cta:{text:"Primary Button",href:"https://www.youtube.com/watch?v=m2pa27Hv8K0",skin:"primary",button:!0,external:!0}}},s={args:{reversed:!0,limit:21,headline:"lorem ipsum headline",slider:!0,events:!0,cta:{text:"Primary Button Internal",href:"javascript:void(0)",skin:"primary",button:!0,external:!1}}},n={args:{limit:21,limitCaseStudies:5,headline:"lorem ipsum headline",slider:!0,caseStudies:!0}},o={args:{limit:21,headline:"lorem ipsum headline",slider:!1,hideContainer:!0}},a={args:{limit:21,limitEvents:2,headline:"lorem ipsum headline",slider:!0,combine:!0}};var l,m,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    limit: 21,
    headline: 'lorem ipsum headline',
    slider: true,
    posts: Posts
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,u,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    limit: 21,
    headline: 'lorem ipsum headline',
    subline: 'lorem ipsum subline lorem ipsum lorem ipsum lorem ipsum',
    slider: true
  }
}`,...(c=(u=r.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var g,h,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    limit: 21,
    headline: 'lorem ipsum headline',
    level: 'h2',
    headlineClasses: 'text-white',
    slider: true,
    bgColor: 'var(--color-gigas)'
  }
}`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var v,y,C;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    limit: 21,
    headline: 'lorem ipsum headline',
    slider: true,
    events: true,
    cta: {
      text: 'Primary Button',
      href: 'https://www.youtube.com/watch?v=m2pa27Hv8K0',
      skin: 'primary',
      button: true,
      external: true
    }
  }
}`,...(C=(y=i.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var f,S,B;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    reversed: true,
    limit: 21,
    headline: 'lorem ipsum headline',
    slider: true,
    events: true,
    cta: {
      text: 'Primary Button Internal',
      href: 'javascript:void(0)',
      skin: 'primary',
      button: true,
      external: false
    }
  }
}`,...(B=(S=s.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var x,E,R;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    limit: 21,
    limitCaseStudies: 5,
    headline: 'lorem ipsum headline',
    slider: true,
    caseStudies: true
  }
}`,...(R=(E=n.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var w,P,H;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    limit: 21,
    headline: 'lorem ipsum headline',
    slider: false,
    hideContainer: true
  }
}`,...(H=(P=o.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var _,k,j;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    limit: 21,
    limitEvents: 2,
    headline: 'lorem ipsum headline',
    slider: true,
    combine: true
  }
}`,...(j=(k=a.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};const Y=["BlogRecent","BlogRecentSubline","BlogRecentHeadline","Events","EventsReversed","CaseStudies","HideContainer","Combined"];export{e as BlogRecent,t as BlogRecentHeadline,r as BlogRecentSubline,n as CaseStudies,a as Combined,i as Events,s as EventsReversed,o as HideContainer,Y as __namedExportsOrder,X as default};
