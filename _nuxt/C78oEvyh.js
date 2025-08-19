import{V as J}from"./CZlH4QI6.js";import{H as e}from"./CbABglIS.js";import"./Ljd56Lu7.js";import"./ZWnqNTUS.js";import"./d2rH4ue3.js";import"./CbyT3h9U.js";import"./CHjb5xPv.js";const Y={title:"Components/Header",component:J,parameters:{layout:"fullscreen"},decorators:[(G,I)=>({components:{story:G},setup(){return{args:I.args}},template:`
        <story />
        <div v-if="args.onSurface" style="height: 200vh;background-color: var(--color-yellow);opacity: 1;" class="dummy-content is--dark"></div>
        <div v-else style="height: 200vh;" class="dummy-content is--dark"></div>
      `})]},a={args:{home:e.home,navigation:e.navigation}},r={args:{home:e.home,navigation:e.navigation,light:!0,blendMode:!0,bgColor:"var(--color-blue-dark)"}},n={args:{home:e.home,navigation:e.navigation,lang:"en"}},t={args:{home:e.home,navigation:e.navigation,lang:"es"}},d={home:e.home,navigation:e.navigation,lang:"en",product:!0,button:{text:"Start now",href:"/start-now/",skin:"primary is-cutoff"},home:{name:"home",imgLight:"/products/scepman/scepman-logo-all-white.svg",img:"/products/scepman/scepman-logo-rgb.svg",languages:{en:{title:"Home EN",url:"",alt:"alt text EN"}}},navigation:[{name:"home",languages:{de:{title:"Home",url:""},en:{title:"Home EN",url:""}}},{name:"pricing",languages:{en:{title:"Pricing EN",url:"/iframe.html"}}},{name:"partner",languages:{en:{title:"Partner EN",url:""}}},{name:"docs",languages:{en:{title:"Docs",url:"https://docs.radiusaas.com/",target:"_blank"}}}],showSecondaryNavigation:!0,theme:"radiusaas"},o={args:{...d,onSurface:!0}},s={args:{...d}},i={args:{home:e.home,navigation:e.navigation,lang:"en",product:!0,button:{text:"Start now",href:"/start-now/",skin:"primary is-cutoff"},home:{name:"home",imgLight:"/products/scepman/scepman-logo-all-white.svg",img:"/products/terraprovider/logo-terraprovider.svg",languages:{en:{title:"Home EN",url:"",alt:"alt text EN"}}},navigation:[{name:"home",languages:{de:{title:"Home",url:""},en:{title:"Home EN",url:""}}},{name:"pricing",languages:{en:{title:"Pricing EN",url:"/iframe.html"}}},{name:"partner",languages:{en:{title:"Partner EN",url:""}}},{name:"docs",languages:{en:{title:"Docs",url:"https://docs.radiusaas.com/",target:"_blank"}}}],showSecondaryNavigation:!0,theme:"radiusaas"}},g={args:{light:!0,...d,onSurface:!0}},c={args:{light:!0,blendMode:!0,...d}},m={args:{home:e.home,navigation:e.navigation,lang:"en",search:!0}};var u,l,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    home: HeaderData.home,
    navigation: HeaderData.navigation
    // lang: 'de', // should be default
  }
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var h,v,H;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    home: HeaderData.home,
    navigation: HeaderData.navigation,
    light: true,
    blendMode: true,
    bgColor: 'var(--color-blue-dark)'
  }
}`,...(H=(v=r.parameters)==null?void 0:v.docs)==null?void 0:H.source}}};var S,f,E;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    home: HeaderData.home,
    navigation: HeaderData.navigation,
    lang: 'en'
  }
}`,...(E=(f=n.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var N,b,P;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    home: HeaderData.home,
    navigation: HeaderData.navigation,
    lang: 'es'
  }
}`,...(P=(b=t.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};var D,y,w;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...productArgs,
    onSurface: true
  }
}`,...(w=(y=o.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var k,L,x;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...productArgs
  }
}`,...(x=(L=s.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};var M,_,A;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    home: HeaderData.home,
    navigation: HeaderData.navigation,
    lang: 'en',
    product: true,
    button: {
      text: 'Start now',
      href: '/start-now/',
      skin: 'primary is-cutoff'
    },
    home: {
      name: 'home',
      imgLight: '/products/scepman/scepman-logo-all-white.svg',
      img: '/products/terraprovider/logo-terraprovider.svg',
      languages: {
        en: {
          title: 'Home EN',
          url: '',
          alt: 'alt text EN'
        }
      }
    },
    navigation: [{
      name: 'home',
      languages: {
        de: {
          title: 'Home',
          url: ''
        },
        en: {
          title: 'Home EN',
          url: ''
        }
      }
    }, {
      name: 'pricing',
      languages: {
        en: {
          title: 'Pricing EN',
          url: '/iframe.html'
        }
      }
    }, {
      name: 'partner',
      languages: {
        en: {
          title: 'Partner EN',
          url: ''
        }
      }
    }, {
      name: 'docs',
      languages: {
        en: {
          title: 'Docs',
          url: 'https://docs.radiusaas.com/',
          target: '_blank'
        }
      }
    }],
    showSecondaryNavigation: true,
    theme: 'radiusaas'
  }
}`,...(A=(_=i.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var C,O,B;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    light: true,
    ...productArgs,
    onSurface: true
  }
}`,...(B=(O=g.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var V,$,j;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    light: true,
    blendMode: true,
    ...productArgs
  }
}`,...(j=($=c.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var q,z,F;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    home: HeaderData.home,
    navigation: HeaderData.navigation,
    lang: 'en',
    search: true
  }
}`,...(F=(z=m.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};const Z=["Header","HeaderLight","HeaderEN","HeaderES","HeaderProductOnSurface","HeaderProduct","HeaderProduct2","HeaderProductLight","HeaderProductLightBlendMode","HeaderSearch"];export{a as Header,n as HeaderEN,t as HeaderES,r as HeaderLight,s as HeaderProduct,i as HeaderProduct2,g as HeaderProductLight,c as HeaderProductLightBlendMode,o as HeaderProductOnSurface,m as HeaderSearch,Z as __namedExportsOrder,Y as default};
