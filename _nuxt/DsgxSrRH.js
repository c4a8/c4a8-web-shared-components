import{_ as l}from"./BIkWClt3.js";import{V as n}from"./D6axvIuQ.js";import{_ as m}from"./CCnYazb7.js";import{_ as g}from"./DZdo5yEN.js";import"./Cd8ASGtF.js";import{_ as p}from"./CHMq20IN.js";import{H as a}from"./Dl7xyO-b.js";import{P as c}from"./DZAKhzN2.js";import"./BYSfGv0C.js";import"./D9XX1nKR.js";import"./qH5vO1dt.js";import"./B41_ZzoI.js";import"./ChKKMbiw.js";import"./BX6lb8lx.js";import"./mdaFmOpF.js";import"./DsmLsyh1.js";import"./DPMFaKwf.js";import"./D5gcTh0W.js";import"./BspFEUsq.js";import"./Bfos0MtA.js";import"./D3mlQrms.js";import"./Deg5MkeO.js";import"./B2t3Qi50.js";import"./5SIaG1bJ.js";import"./BCFFTMmG.js";import"./DPTl0T7O.js";import"./p17YO4eS.js";import"./DO1O58cM.js";import"./CAz2Mbd1.js";import"./BGN3y7Ul.js";import"./B7AU9blp.js";import"./DRFJPztI.js";import"./DWVI64L9.js";import"./D6F49oc7.js";import"./DMd_LYj3.js";import"./BK6J7HwW.js";import"./Dkg7Lae1.js";import"./BIK6mpOr.js";const Y={component:n,title:"Pages/Blog",parameters:{isPage:!0,layout:"fullscreen"},decorators:[(i,s)=>({components:{story:i,PageDefault:l,VHeader:n,Content:m,Hero:g,Blog:p},setup(){return{args:s.args}},template:`
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
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const Z=["Default"];export{t as Default,Z as __namedExportsOrder,Y as default};
