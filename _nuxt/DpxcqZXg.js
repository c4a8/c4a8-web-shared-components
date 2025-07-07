import{V as z}from"./9clLzIoC.js";import{H as e}from"./CbABglIS.js";import"./DjHNF5Y7.js";import"./Dh7ZAFHk.js";import"./rigcSH9g.js";import"./B-YuWX5T.js";import"./D6i485wk.js";const T={title:"Components/Header",component:z,parameters:{layout:"fullscreen"},decorators:[(j,q)=>({components:{story:j},setup(){return{args:q.args}},template:`
        <story />
        <div v-if="args.onSurface" style="height: 200vh;background-color: var(--color-yellow);opacity: 1;" class="dummy-content is--dark"></div>
        <div v-else style="height: 200vh;" class="dummy-content is--dark"></div>
      `})]},a={args:{home:e.home,navigation:e.navigation}},r={args:{home:e.home,navigation:e.navigation,light:!0,blendMode:!0,bgColor:"var(--color-blue-dark)"}},o={args:{home:e.home,navigation:e.navigation,lang:"en"}},t={args:{home:e.home,navigation:e.navigation,lang:"es"}},g={home:e.home,navigation:e.navigation,lang:"en",product:!0,button:{text:"Start now",href:"/start-now/",skin:"primary is-cutoff"},home:{name:"home",imgLight:"/products/scepman/scepman-logo-all-white.svg",img:"/products/scepman/scepman-logo-rgb.svg",languages:{en:{title:"Home EN",url:"",alt:"alt text EN"}}},navigation:[{name:"home",languages:{de:{title:"Home",url:""},en:{title:"Home EN",url:""}}},{name:"pricing",languages:{en:{title:"Pricing EN",url:"/iframe.html"}}},{name:"partner",languages:{en:{title:"Partner EN",url:""}}},{name:"docs",languages:{en:{title:"Docs",url:"https://docs.radiusaas.com/",target:"_blank"}}}],showSecondaryNavigation:!0,theme:"radiusaas"},n={args:{...g,onSurface:!0}},s={args:{...g}},c={args:{light:!0,...g,onSurface:!0}},i={args:{light:!0,blendMode:!0,...g}},d={args:{home:e.home,navigation:e.navigation,lang:"en",search:!0}};var m,u,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    home: HeaderData.home,
    navigation: HeaderData.navigation
    // lang: 'de', // should be default
  }
}`,...(l=(u=a.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var p,h,v;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    home: HeaderData.home,
    navigation: HeaderData.navigation,
    light: true,
    blendMode: true,
    bgColor: 'var(--color-blue-dark)'
  }
}`,...(v=(h=r.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var H,S,f;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    home: HeaderData.home,
    navigation: HeaderData.navigation,
    lang: 'en'
  }
}`,...(f=(S=o.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var b,D,y;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    home: HeaderData.home,
    navigation: HeaderData.navigation,
    lang: 'es'
  }
}`,...(y=(D=t.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var E,P,N;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...productArgs,
    onSurface: true
  }
}`,...(N=(P=n.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var k,L,M;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...productArgs
  }
}`,...(M=(L=s.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var w,A,x;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    light: true,
    ...productArgs,
    onSurface: true
  }
}`,...(x=(A=c.parameters)==null?void 0:A.docs)==null?void 0:x.source}}};var _,C,O;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    light: true,
    blendMode: true,
    ...productArgs
  }
}`,...(O=(C=i.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var B,V,$;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    home: HeaderData.home,
    navigation: HeaderData.navigation,
    lang: 'en',
    search: true
  }
}`,...($=(V=d.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};const U=["Header","HeaderLight","HeaderEN","HeaderES","HeaderProductOnSurface","HeaderProduct","HeaderProductLight","HeaderProductLightBlendMode","HeaderSearch"];export{a as Header,o as HeaderEN,t as HeaderES,r as HeaderLight,s as HeaderProduct,c as HeaderProductLight,i as HeaderProductLightBlendMode,n as HeaderProductOnSurface,d as HeaderSearch,U as __namedExportsOrder,T as default};
