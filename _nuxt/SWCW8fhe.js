import{a as U}from"./D72VV5Dy.js";import{_ as V}from"./LPVMOZCi.js";import"./BNN-eIfq.js";import"./B0qg_R3T.js";const rr={component:V,argTypes:{text:{description:"The Text of the Cta",type:"string",required:!0},analytics:U,link:{description:"Toggles Link Mode",type:"boolean"},skin:{description:"The skin of the Cta",control:{type:"select"},options:["","primary","secondary","primary is-cutoff","secondary is-cutoff","primary is-cutoff is-light","secondary is-cutoff is-light","primary is-light","secondary is-light"]},width:{description:"Adds helper classes for the width:",table:{disabled:!1},control:{type:"text"},type:{summary:"Bootstrap widths",detail:"w-10, w-20, w-30, ... or w-lg-80, w-md-60, ..."}},grow:{control:{type:"boolean"},description:"Will apply w-lg-auto when you don't specify a width.",type:{summary:null}},href:{description:"The link of the Cta",type:"string"},target:{description:"The link target",type:{summary:"Bootstrap widths",detail:"w-10, w-20, w-30, ... or w-lg-80, w-md-60, ..."},options:["","_self","_blank","_parent","_top"],control:{type:"select"}},button:{description:"Toggles Button Mode",type:"boolean"},alternativeHref:{description:"An alternative link for the pricing details toggle",type:"string"},type:{description:"The type attribute of the Cta",control:{type:"select"},options:["","submit","reset","button"],type:"string"},trigger:{description:"A trigger for modals or other components",control:{type:"select"},options:["","modal"],type:"string"},external:{description:"Adds an external icon to the Cta",type:"boolean"},icon:{description:"Adds an icon to the Cta",control:{type:"text"},type:{summary:"Icon name",detail:"arrow, mail, phone, ..."}},download:{description:"Adds an download icon to the Cta",type:"boolean"},reversed:{description:"Reverses the order of the icon and the text. Does not work with download.",type:"boolean"},active:{description:"Sets the active State of the Cta",type:"boolean"},hasBackground:{description:"Sets a semi transparent background for the secondary skin",type:"boolean"},classes:{description:"Adds classes:",table:{disabled:!1},control:{type:"text"},type:{summary:"Examples",detail:"space-4, parent-component-class, ..."}}},title:"Components/Cta"},t={args:{text:"Primary Button Cutoff",skin:"primary is-cutoff",button:!0}},e={args:{text:"Secondary Button Cutoff",href:"javascript:void(0)",skin:"secondary is-cutoff"}},o={args:{text:"Secondary Button Cutoff",href:"javascript:void(0)",skin:"secondary is-cutoff",hasBackground:!0}},a={args:{text:"Primary Button",href:"javascript:void(0)",skin:"primary",button:!0}},n={args:{text:"Primary Button",href:"javascript:void(0)",skin:"primary",button:!0,download:!0}},s={args:{text:"Primary Button",href:"javascript:void(0)",skin:"primary",button:!0,external:!0}},i={args:{text:"Secondary Button",href:"javascript:void(0)",skin:"secondary",button:!0}},c={args:{text:"Primary Link",href:"javascript:void(0)",link:!0}},r={args:{text:"Primary Link",href:"javascript:void(0)",link:!0,active:!0}};r.argTypes={width:{table:{disable:!0}},skin:{table:{disable:!0}}};const d={args:{text:"Primary Link",href:"javascript:void(0)",link:!0,monochrome:!0}},p={args:{text:"Primary Link lorem ipsum dolor sit amet",href:"javascript:void(0)",link:!0,reversed:!0}},u={args:{text:"Primary Button",href:"javascript:void(0)",skin:"primary",button:!0,loading:!0}};var m,y,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    text: 'Primary Button Cutoff',
    skin: 'primary is-cutoff',
    button: true
  }
}`,...(l=(y=t.parameters)==null?void 0:y.docs)==null?void 0:l.source}}};var f,g,h;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    text: 'Secondary Button Cutoff',
    href: 'javascript:void(0)',
    skin: 'secondary is-cutoff'
  }
}`,...(h=(g=e.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var v,k,x;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    text: 'Secondary Button Cutoff',
    href: 'javascript:void(0)',
    skin: 'secondary is-cutoff',
    hasBackground: true
  }
}`,...(x=(k=o.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var B,P,b;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    text: 'Primary Button',
    href: 'javascript:void(0)',
    skin: 'primary',
    button: true
  }
}`,...(b=(P=a.parameters)==null?void 0:P.docs)==null?void 0:b.source}}};var w,S,j;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    text: 'Primary Button',
    href: 'javascript:void(0)',
    skin: 'primary',
    button: true,
    download: true
  }
}`,...(j=(S=n.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var C,L,_;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    text: 'Primary Button',
    href: 'javascript:void(0)',
    skin: 'primary',
    button: true,
    external: true
  }
}`,...(_=(L=s.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var T,A,E;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    text: 'Secondary Button',
    href: 'javascript:void(0)',
    skin: 'secondary',
    button: true
  }
}`,...(E=(A=i.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var M,D,H;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    text: 'Primary Link',
    href: 'javascript:void(0)',
    link: true
  }
}`,...(H=(D=c.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var R,q,I;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    text: 'Primary Link',
    href: 'javascript:void(0)',
    link: true,
    active: true
  }
}`,...(I=(q=r.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var O,W,z;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    text: 'Primary Link',
    href: 'javascript:void(0)',
    link: true,
    monochrome: true
  }
}`,...(z=(W=d.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var F,G,J;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    text: 'Primary Link lorem ipsum dolor sit amet',
    href: 'javascript:void(0)',
    link: true,
    reversed: true
  }
}`,...(J=(G=p.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,N,Q;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    text: 'Primary Button',
    href: 'javascript:void(0)',
    skin: 'primary',
    button: true,
    loading: true
  }
}`,...(Q=(N=u.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};const tr=["PrimaryButtonCutoff","SecondaryButtonCutoff","SecondaryButtonHasBackground","PrimaryButton","PrimaryButtonDownload","PrimaryButtonExternal","SecondaryButton","PrimaryLink","PrimaryLinkActive","PrimaryLinkMonochrome","PrimaryLinkReversed","PrimaryButtonLoading"];export{a as PrimaryButton,t as PrimaryButtonCutoff,n as PrimaryButtonDownload,s as PrimaryButtonExternal,u as PrimaryButtonLoading,c as PrimaryLink,r as PrimaryLinkActive,d as PrimaryLinkMonochrome,p as PrimaryLinkReversed,i as SecondaryButton,e as SecondaryButtonCutoff,o as SecondaryButtonHasBackground,tr as __namedExportsOrder,rr as default};
