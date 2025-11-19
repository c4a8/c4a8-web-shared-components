import{B as A}from"./Cn6qv6Vc.js";import{P as L}from"./DZAKhzN2.js";import"./DUNP09xx.js";import"./Ce31W9B-.js";import"./BZ6FwJgF.js";import"./Dn9yFvl7.js";import"./DUAPE82W.js";import"./Cp5Et-DT.js";import"./CQlSXLUL.js";import"./D0TsvtPN.js";import"./Bj-rOsTz.js";import"./C83V8mEg.js";import"./Ce5EUAgy.js";import"./Diww8ydI.js";import"./BE79M1G5.js";import"./BWY4oW6y.js";const V={component:A,argTypes:{limit:{description:"Amount of visible Words in a Post Preview",type:"number"},headline:{description:"Headline of the Component",type:"string"},subline:{description:"Subline of the Component",type:"string"},level:{description:"Headline Level",type:"string"},headlineClasses:{description:"Headline Classes",type:"string"},sublineClasses:{description:"Subline Classes",type:"string"},spacing:{description:"Component Spacing",type:"string"},slider:{description:"Enables Slider",type:"boolean"},bgColor:{description:"Sets Background Color",type:"string"},cta:{description:"Cta Object",type:"object"},caseStudies:{description:"Filters for Casestudies",type:"boolean"},events:{description:"Filters for Events",type:"boolean"},combine:{description:"Combines different types of Blogs",type:"boolean"},limitCaseStudies:{description:"Limits the Amount of Casestudies in Blog Recent",type:"number"},limitEvents:{description:"Limits the Amount of Events in Blog Recent",type:"number"},hideContainer:{description:"Places Blogs in a grid form",type:"boolean"},sticky:{description:"Enables Sticky Feature for Component",type:"boolean"},tag:{description:"Filters for certain Tags",type:"string"}},title:"Components/Blog Recent"},e={args:{limit:21,headline:"lorem ipsum headline",slider:!0,posts:L}},r={args:{limit:21,headline:"lorem ipsum headline",subline:"lorem ipsum subline lorem ipsum lorem ipsum lorem ipsum",slider:!0}},t={args:{limit:21,headline:"lorem ipsum headline",level:"h2",headlineClasses:"text-white",slider:!0,bgColor:"var(--color-gigas)"}},i={args:{limit:21,headline:"lorem ipsum headline",slider:!0,events:!0,cta:{text:"Primary Button",href:"https://www.youtube.com/watch?v=m2pa27Hv8K0",skin:"primary",button:!0,external:!0}}},s={args:{reversed:!0,limit:21,headline:"lorem ipsum headline",slider:!0,events:!0,cta:{text:"Primary Button Internal",href:"javascript:void(0)",skin:"primary",button:!0,external:!1}}},n={args:{limit:21,limitCaseStudies:5,headline:"lorem ipsum headline",slider:!0,caseStudies:!0}},o={args:{limit:21,headline:"lorem ipsum headline",slider:!1,hideContainer:!0}},a={args:{limit:21,limitEvents:2,headline:"lorem ipsum headline",slider:!0,combine:!0}};var l,m,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(B=(S=s.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var R,x,E;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    limit: 21,
    limitCaseStudies: 5,
    headline: 'lorem ipsum headline',
    slider: true,
    caseStudies: true
  }
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var w,P,H;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    limit: 21,
    headline: 'lorem ipsum headline',
    slider: false,
    hideContainer: true
  }
}`,...(H=(P=o.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var k,j,F;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    limit: 21,
    limitEvents: 2,
    headline: 'lorem ipsum headline',
    slider: true,
    combine: true
  }
}`,...(F=(j=a.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};const X=["BlogRecent","BlogRecentSubline","BlogRecentHeadline","Events","EventsReversed","CaseStudies","HideContainer","Combined"];export{e as BlogRecent,t as BlogRecentHeadline,r as BlogRecentSubline,n as CaseStudies,a as Combined,i as Events,s as EventsReversed,o as HideContainer,X as __namedExportsOrder,V as default};
