import{a as Z}from"./D72VV5Dy.js";import{_ as $}from"./DPL8tNAx.js";import"./D_Q4lDQN.js";import"./CZWkLJ5X.js";const ar={component:$,argTypes:{text:{description:"The Text of the Cta",type:"string",required:!0},analytics:Z,link:{description:"Toggles Link Mode",type:"boolean"},skin:{description:"The skin of the Cta",control:{type:"select"},options:["","primary","secondary","primary is-cutoff","secondary is-cutoff","primary is-cutoff is-light","secondary is-cutoff is-light","primary is-light","secondary is-light"]},width:{description:"Adds helper classes for the width:",table:{disabled:!1},control:{type:"text"},type:{summary:"Bootstrap widths",detail:"w-10, w-20, w-30, ... or w-lg-80, w-md-60, ..."}},grow:{control:{type:"boolean"},description:"Will apply w-lg-auto when you don't specify a width.",type:{summary:null}},href:{description:"The link of the Cta",type:"string"},target:{description:"The link target",type:{summary:"Bootstrap widths",detail:"w-10, w-20, w-30, ... or w-lg-80, w-md-60, ..."},options:["","_self","_blank","_parent","_top"],control:{type:"select"}},button:{description:"Toggles Button Mode",type:"boolean"},alternativeHref:{description:"An alternative link for the pricing details toggle",type:"string"},type:{description:"The type attribute of the Cta",control:{type:"select"},options:["","submit","reset","button"],type:"string"},trigger:{description:"A trigger for modals or other components",control:{type:"select"},options:["","modal"],type:"string"},external:{description:"Adds an external icon to the Cta",type:"boolean"},icon:{description:"Adds an icon to the Cta",control:{type:"text"},type:{summary:"Icon name",detail:"arrow, mail, phone, ..."}},download:{description:"Adds an download icon to the Cta",type:"boolean"},reversed:{description:"Reverses the order of the icon and the text. Does not work with download.",type:"boolean"},active:{description:"Sets the active State of the Cta",type:"boolean"},hasBackground:{description:"Sets a semi transparent background for the secondary skin",type:"boolean"},classes:{description:"Adds classes:",table:{disabled:!1},control:{type:"text"},type:{summary:"Examples",detail:"space-4, parent-component-class, ..."}}},title:"Components/Cta"},t={args:{text:"Primary Button Cutoff",skin:"primary is-cutoff",button:!0}},e={args:{text:"Secondary Button Cutoff",href:"javascript:void(0)",skin:"secondary is-cutoff"}},o={args:{text:"Secondary Button Cutoff",href:"javascript:void(0)",skin:"secondary is-cutoff",hasBackground:!0}},a={args:{text:"Primary Button",href:"javascript:void(0)",skin:"primary",button:!0}},n={args:{text:"Primary Button",href:"javascript:void(0)",skin:"primary",button:!0,download:!0}},s={args:{text:"Primary Button",href:"javascript:void(0)",skin:"primary",button:!0,external:!0}},i={args:{text:"Secondary Button",href:"javascript:void(0)",skin:"secondary",button:!0}},c={args:{text:"Secondary Button",href:"javascript:void(0)",skin:"secondary",button:!0,monochrome:!0}},d={args:{text:"Primary Link",href:"javascript:void(0)",link:!0}},r={args:{text:"Primary Link",href:"javascript:void(0)",link:!0,active:!0}};r.argTypes={width:{table:{disable:!0}},skin:{table:{disable:!0}}};const u={args:{text:"Primary Link",href:"javascript:void(0)",link:!0,monochrome:!0}},p={args:{text:"Primary Link lorem ipsum dolor sit amet",href:"javascript:void(0)",link:!0,reversed:!0}},m={args:{text:"Primary Button",href:"javascript:void(0)",skin:"primary",button:!0,loading:!0}};var y,l,f;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    text: 'Primary Button Cutoff',
    skin: 'primary is-cutoff',
    button: true
  }
}`,...(f=(l=t.parameters)==null?void 0:l.docs)==null?void 0:f.source}}};var g,h,v;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    text: 'Secondary Button Cutoff',
    href: 'javascript:void(0)',
    skin: 'secondary is-cutoff'
  }
}`,...(v=(h=e.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var k,B,x;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    text: 'Secondary Button Cutoff',
    href: 'javascript:void(0)',
    skin: 'secondary is-cutoff',
    hasBackground: true
  }
}`,...(x=(B=o.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var b,P,S;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    text: 'Primary Button',
    href: 'javascript:void(0)',
    skin: 'primary',
    button: true
  }
}`,...(S=(P=a.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var w,j,C;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    text: 'Primary Button',
    href: 'javascript:void(0)',
    skin: 'primary',
    button: true,
    download: true
  }
}`,...(C=(j=n.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var L,_,T;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    text: 'Primary Button',
    href: 'javascript:void(0)',
    skin: 'primary',
    button: true,
    external: true
  }
}`,...(T=(_=s.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var A,M,E;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    text: 'Secondary Button',
    href: 'javascript:void(0)',
    skin: 'secondary',
    button: true
  }
}`,...(E=(M=i.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var D,H,R;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    text: 'Secondary Button',
    href: 'javascript:void(0)',
    skin: 'secondary',
    button: true,
    monochrome: true
  }
}`,...(R=(H=c.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var q,I,O;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    text: 'Primary Link',
    href: 'javascript:void(0)',
    link: true
  }
}`,...(O=(I=d.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var W,z,F;r.parameters={...r.parameters,docs:{...(W=r.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    text: 'Primary Link',
    href: 'javascript:void(0)',
    link: true,
    active: true
  }
}`,...(F=(z=r.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var G,J,K;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    text: 'Primary Link',
    href: 'javascript:void(0)',
    link: true,
    monochrome: true
  }
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var N,Q,U;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    text: 'Primary Link lorem ipsum dolor sit amet',
    href: 'javascript:void(0)',
    link: true,
    reversed: true
  }
}`,...(U=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var V,X,Y;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    text: 'Primary Button',
    href: 'javascript:void(0)',
    skin: 'primary',
    button: true,
    loading: true
  }
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const nr=["PrimaryButtonCutoff","SecondaryButtonCutoff","SecondaryButtonHasBackground","PrimaryButton","PrimaryButtonDownload","PrimaryButtonExternal","SecondaryButton","SecondaryButtonMonochrome","PrimaryLink","PrimaryLinkActive","PrimaryLinkMonochrome","PrimaryLinkReversed","PrimaryButtonLoading"];export{a as PrimaryButton,t as PrimaryButtonCutoff,n as PrimaryButtonDownload,s as PrimaryButtonExternal,m as PrimaryButtonLoading,d as PrimaryLink,r as PrimaryLinkActive,u as PrimaryLinkMonochrome,p as PrimaryLinkReversed,i as SecondaryButton,e as SecondaryButtonCutoff,o as SecondaryButtonHasBackground,c as SecondaryButtonMonochrome,nr as __namedExportsOrder,ar as default};
