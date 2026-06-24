import{a as ir}from"./D72VV5Dy.js";import{_ as ar}from"./OS6fr7Le.js";import"./D8RIkAZa.js";import"./C709lw48.js";const fr={component:ar,argTypes:{text:{description:"The Text of the Cta",type:"string",required:!0},analytics:ir,link:{description:"Toggles Link Mode",type:"boolean"},skin:{description:"The skin of the Cta",control:{type:"select"},options:["","primary","secondary","primary is-cutoff","secondary is-cutoff","primary is-cutoff is-light","secondary is-cutoff is-light","primary is-light","secondary is-light"]},width:{description:"Adds helper classes for the width:",table:{disabled:!1},control:{type:"text"},type:{summary:"Bootstrap widths",detail:"w-10, w-20, w-30, ... or w-lg-80, w-md-60, ..."}},grow:{control:{type:"boolean"},description:"Will apply w-lg-auto when you don't specify a width.",type:{summary:null}},href:{description:"The link of the Cta",type:"string"},target:{description:"The link target",type:{summary:"Bootstrap widths",detail:"w-10, w-20, w-30, ... or w-lg-80, w-md-60, ..."},options:["","_self","_blank","_parent","_top"],control:{type:"select"}},button:{description:"Toggles Button Mode",type:"boolean"},alternativeHref:{description:"An alternative link for the pricing details toggle",type:"string"},type:{description:"The type attribute of the Cta",control:{type:"select"},options:["","submit","reset","button"],type:"string"},trigger:{description:"A trigger for modals or other components",control:{type:"select"},options:["","modal"],type:"string"},external:{description:"Adds an external icon to the Cta",type:"boolean"},icon:{description:"Adds an icon to the Cta",control:{type:"text"},type:{summary:"Icon name",detail:"arrow, mail, phone, ..."}},download:{description:"Adds an download icon to the Cta",type:"boolean"},reversed:{description:"Reverses the order of the icon and the text. Does not work with download.",type:"boolean"},active:{description:"Sets the active State of the Cta",type:"boolean"},hasBackground:{description:"Sets a semi transparent background for the secondary skin",type:"boolean"},classes:{description:"Adds classes:",table:{disabled:!1},control:{type:"text"},type:{summary:"Examples",detail:"space-4, parent-component-class, ..."}}},title:"Components/Cta"},r={href:"javascript:void(0)"},cr=[{label:"Primary / Secondary buttons",variants:[{...r,text:"Primary",skin:"primary",button:!0},{...r,text:"Secondary",skin:"secondary",button:!0},{...r,text:"Secondary monochrome",skin:"secondary",button:!0,monochrome:!0}]},{label:"Cutoff buttons",variants:[{...r,text:"Primary cutoff",skin:"primary is-cutoff",button:!0},{...r,text:"Secondary cutoff",skin:"secondary is-cutoff",button:!0},{...r,text:"Secondary cutoff bg",skin:"secondary is-cutoff",button:!0,hasBackground:!0}]},{label:"Buttons with icons",variants:[{...r,text:"Primary external",skin:"primary",button:!0,external:!0},{...r,text:"Primary download",skin:"primary",button:!0,download:!0},{...r,text:"Secondary external",skin:"secondary",button:!0,external:!0}]}],dr=[{label:"Default",onSurface:!1},{label:"On surface",onSurface:!0}],e={parameters:{controls:{disable:!0}},render:()=>({components:{CtaComponent:ar},setup(){return{sections:dr.map(f=>({...f,rows:cr.map(v=>({...v,variants:v.variants.map(sr=>({...sr,onSurface:f.onSurface}))}))}))}},template:`
      <div style="display: flex; flex-direction: column; gap: 3rem;">
        <section
          v-for="section in sections"
          :key="section.label"
          :style="section.onSurface
            ? 'background: var(--color-primary); padding: 2rem; border-radius: 4px; color: var(--color-copy-on-primary); --color-headlines: var(--color-copy-on-primary);'
            : ''"
        >
          <h3 style="margin-bottom: 1.5rem;">{{ section.label }}</h3>
          <div style="display: flex; flex-direction: column; gap: 1.5rem;">
            <div v-for="row in section.rows" :key="row.label">
              <div style="font-size: 0.75rem; opacity: 0.8; margin-bottom: 0.5rem;">{{ row.label }}</div>
              <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 1rem;">
                <cta-component
                  v-for="(variant, index) in row.variants"
                  :key="index"
                  v-bind="variant"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    `})},o={args:{text:"Primary Button Cutoff",skin:"primary is-cutoff",button:!0}},n={args:{text:"Secondary Button Cutoff",href:"javascript:void(0)",skin:"secondary is-cutoff"}},a={args:{text:"Secondary Button Cutoff",href:"javascript:void(0)",skin:"secondary is-cutoff",hasBackground:!0}},s={args:{text:"Primary Button",href:"javascript:void(0)",skin:"primary",button:!0}},i={args:{text:"Primary Button",href:"javascript:void(0)",skin:"primary",button:!0,download:!0}},c={args:{text:"Primary Button",href:"javascript:void(0)",skin:"primary",button:!0,external:!0}},d={args:{text:"Secondary Button",href:"javascript:void(0)",skin:"secondary",button:!0}},u={args:{text:"Secondary Button",href:"javascript:void(0)",skin:"secondary",button:!0,monochrome:!0}},p={args:{text:"Primary Link",href:"javascript:void(0)",link:!0}},t={args:{text:"Primary Link",href:"javascript:void(0)",link:!0,active:!0}};t.argTypes={width:{table:{disable:!0}},skin:{table:{disable:!0}}};const m={args:{text:"Primary Link",href:"javascript:void(0)",link:!0,monochrome:!0}},l={args:{text:"Primary Link lorem ipsum dolor sit amet",href:"javascript:void(0)",link:!0,reversed:!0}},y={args:{text:"Primary Button",href:"javascript:void(0)",skin:"primary",button:!0,loading:!0}};var g,h,k;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => ({
    components: {
      CtaComponent
    },
    setup() {
      const sections = overviewSections.map(section => ({
        ...section,
        rows: overviewRows.map(row => ({
          ...row,
          variants: row.variants.map(variant => ({
            ...variant,
            onSurface: section.onSurface
          }))
        }))
      }));
      return {
        sections
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 3rem;">
        <section
          v-for="section in sections"
          :key="section.label"
          :style="section.onSurface
            ? 'background: var(--color-primary); padding: 2rem; border-radius: 4px; color: var(--color-copy-on-primary); --color-headlines: var(--color-copy-on-primary);'
            : ''"
        >
          <h3 style="margin-bottom: 1.5rem;">{{ section.label }}</h3>
          <div style="display: flex; flex-direction: column; gap: 1.5rem;">
            <div v-for="row in section.rows" :key="row.label">
              <div style="font-size: 0.75rem; opacity: 0.8; margin-bottom: 0.5rem;">{{ row.label }}</div>
              <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 1rem;">
                <cta-component
                  v-for="(variant, index) in row.variants"
                  :key="index"
                  v-bind="variant"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    \`
  })
}`,...(k=(h=e.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var b,x,w;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    text: 'Primary Button Cutoff',
    skin: 'primary is-cutoff',
    button: true
  }
}`,...(w=(x=o.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var S,B,P;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    text: 'Secondary Button Cutoff',
    href: 'javascript:void(0)',
    skin: 'secondary is-cutoff'
  }
}`,...(P=(B=n.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var j,C,L;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    text: 'Secondary Button Cutoff',
    href: 'javascript:void(0)',
    skin: 'secondary is-cutoff',
    hasBackground: true
  }
}`,...(L=(C=a.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var _,T,A;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    text: 'Primary Button',
    href: 'javascript:void(0)',
    skin: 'primary',
    button: true
  }
}`,...(A=(T=s.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var M,R,D;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    text: 'Primary Button',
    href: 'javascript:void(0)',
    skin: 'primary',
    button: true,
    download: true
  }
}`,...(D=(R=i.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var E,O,H;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    text: 'Primary Button',
    href: 'javascript:void(0)',
    skin: 'primary',
    button: true,
    external: true
  }
}`,...(H=(O=c.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var z,q,I;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    text: 'Secondary Button',
    href: 'javascript:void(0)',
    skin: 'secondary',
    button: true
  }
}`,...(I=(q=d.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var W,F,G;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    text: 'Secondary Button',
    href: 'javascript:void(0)',
    skin: 'secondary',
    button: true,
    monochrome: true
  }
}`,...(G=(F=u.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var J,K,N;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    text: 'Primary Link',
    href: 'javascript:void(0)',
    link: true
  }
}`,...(N=(K=p.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var Q,U,V;t.parameters={...t.parameters,docs:{...(Q=t.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    text: 'Primary Link',
    href: 'javascript:void(0)',
    link: true,
    active: true
  }
}`,...(V=(U=t.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var X,Y,Z;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    text: 'Primary Link',
    href: 'javascript:void(0)',
    link: true,
    monochrome: true
  }
}`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,rr,tr;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    text: 'Primary Link lorem ipsum dolor sit amet',
    href: 'javascript:void(0)',
    link: true,
    reversed: true
  }
}`,...(tr=(rr=l.parameters)==null?void 0:rr.docs)==null?void 0:tr.source}}};var er,or,nr;y.parameters={...y.parameters,docs:{...(er=y.parameters)==null?void 0:er.docs,source:{originalSource:`{
  args: {
    text: 'Primary Button',
    href: 'javascript:void(0)',
    skin: 'primary',
    button: true,
    loading: true
  }
}`,...(nr=(or=y.parameters)==null?void 0:or.docs)==null?void 0:nr.source}}};const vr=["Overview","PrimaryButtonCutoff","SecondaryButtonCutoff","SecondaryButtonHasBackground","PrimaryButton","PrimaryButtonDownload","PrimaryButtonExternal","SecondaryButton","SecondaryButtonMonochrome","PrimaryLink","PrimaryLinkActive","PrimaryLinkMonochrome","PrimaryLinkReversed","PrimaryButtonLoading"];export{e as Overview,s as PrimaryButton,o as PrimaryButtonCutoff,i as PrimaryButtonDownload,c as PrimaryButtonExternal,y as PrimaryButtonLoading,p as PrimaryLink,t as PrimaryLinkActive,m as PrimaryLinkMonochrome,l as PrimaryLinkReversed,d as SecondaryButton,n as SecondaryButtonCutoff,a as SecondaryButtonHasBackground,u as SecondaryButtonMonochrome,vr as __namedExportsOrder,fr as default};
