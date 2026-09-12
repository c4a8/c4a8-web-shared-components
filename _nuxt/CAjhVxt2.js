import{_ as l}from"./C9_H0GTM.js";import{V as n}from"./BRkMJVv1.js";import{_ as m}from"./DhMZSafY.js";import{_ as g}from"./BxLZBdHz.js";import"./D2-cDRk9.js";import{_ as p}from"./DVcyEGGS.js";import{H as a}from"./CbABglIS.js";import{P as c}from"./DZAKhzN2.js";import"./Cu3ICpES.js";import"./BYfczSQ8.js";import"./C-EBGDIU.js";import"./DIurgmRX.js";import"./BlzRiT65.js";import"./-CRva9Iu.js";import"./B4qwWun6.js";import"./COXvX3dm.js";import"./DPMFaKwf.js";import"./V4xJYDcG.js";import"./BGvfqs-w.js";import"./WRH-8jaC.js";import"./BV6mfVRr.js";import"./BjP09q_d.js";import"./SCAdELzo.js";import"./DwvMCSW1.js";import"./rPBxLszp.js";import"./DmSmpd65.js";import"./BZYKUvrO.js";import"./E633faax.js";import"./MH60Kw8G.js";import"./BZuqh7jY.js";import"./BXQrAwWY.js";import"./DbCngGf8.js";import"./COemE4jT.js";import"./B2LEUnMa.js";import"./DO1XGnRo.js";import"./CcwKeeLh.js";const K={component:n,title:"Pages/Blog",parameters:{isPage:!0,layout:"fullscreen"},decorators:[(i,s)=>({components:{story:i,PageDefault:l,VHeader:n,Content:m,Hero:g,Blog:p},setup(){return{args:s.args}},template:`
        <PageDefault>
          <v-header v-bind="args.header" />
          <Content>
            <Hero :hero="args.hero" />
            <Blog v-bind="args.blogData" />
          </Content>
        </PageDefault>
      `})]},t={args:{header:{home:a.home,navigation:a.navigation,lang:"en",product:!0,button:{text:"Start now",href:"/start-now/",skin:"primary is-cutoff"},home:{name:"home",imgLight:"/products/scepman/scepman-logo-all-white.svg",img:"/products/scepman/scepman-logo-rgb.svg",languages:{en:{title:"Home EN",url:"",alt:"alt text EN"}}},navigation:[{name:"home",languages:{de:{title:"Home",url:""},en:{title:"Home EN",url:""}}},{name:"pricing",languages:{en:{title:"Pricing EN",url:"/iframe.html"}}},{name:"partner",languages:{en:{title:"Partner EN",url:""}}},{name:"docs",languages:{en:{title:"Docs",url:"https://docs.radiusaas.com/",target:"_blank"}}}],showSecondaryNavigation:!0,theme:"radiusaas"},hero:{headline:"Blog",subline:"Lorem ipsum dolor sit",bgColor:"var(--color-gk-yellow)",variant:"hero--small",background:{spacing:"space-top-lg-4 space-bottom-lg-4"}},blogData:{posts:c}}};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    header: {
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
        img: '/products/scepman/scepman-logo-rgb.svg',
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
    },
    hero: {
      headline: 'Blog',
      subline: 'Lorem ipsum dolor sit',
      bgColor: 'var(--color-gk-yellow)',
      variant: 'hero--small',
      background: {
        spacing: 'space-top-lg-4 space-bottom-lg-4'
      }
    },
    // introText: {
    //   headline: 'Headline Lorem ipsum',
    //   copy: '<strong>RADIUSaaS</strong> offers easy and <span class="highlight">secure authentication for accessing network resources</span>. It delivers the comfort, reliability, and scalability of a native cloud SaaS. From a protocol side, we support <span class="highlight">RADIUS</span> as well as <span class="highlight">RadSec.</span><br><br>Authentication is based on certificates. <strong>RADIUSaaS</strong> can validate any certificate which can be used for client authentication. However, to be able to lock someone out of your network with a revoked certificate, choose a <span class="highlight">Certificate Authority (CA)</span> that has an <span class="highlight">Online Certificate Status Protocol (OCSP)</span>. <strong>RADIUSaaS</strong> automatically generates XML configuration files for WIFI and LAN profiles. ',
    // },
    blogData: {
      posts: Posts
    }
  }
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const Q=["Default"];export{t as Default,Q as __namedExportsOrder,K as default};
