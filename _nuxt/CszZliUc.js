import{_ as l}from"./D20DW1h0.js";import{V as t}from"./0I1y-C1S.js";import{_ as m}from"./Rg9oEC5I.js";import{_ as g}from"./CGe4q7Q2.js";import"./5W49cqgM.js";import{_ as p}from"./D8S4PQ-d.js";import{H as a}from"./CbABglIS.js";import{P as c}from"./DZAKhzN2.js";import"./BtJ25r9L.js";import"./CopiTpYZ.js";import"./BgVRqVdr.js";import"./CJt83o-e.js";import"./l-iGtiou.js";import"./QKBmdhVS.js";import"./DJh1cR_O.js";import"./LubtsSmK.js";import"./MgNeN2Qd.js";import"./COwXTYXi.js";import"./DcKsWCJW.js";import"./ZFFYmMGS.js";import"./Dm9V_DOQ.js";import"./DWNRX7fi.js";import"./Dzzd9Bf3.js";import"./NtkD6mSU.js";import"./CQoPThz4.js";import"./B7SEC1Io.js";import"./CVlJLv3D.js";import"./WmNMllUk.js";import"./AAGerYMp.js";import"./CFdzQWQK.js";import"./Blz2eZN2.js";import"./Bd2N7Pnj.js";import"./oZEPLtEc.js";import"./Dui-UP6n.js";const G={component:t,title:"Pages/Blog",parameters:{isPage:!0,layout:"fullscreen"},decorators:[(i,s)=>({components:{story:i,PageDefault:l,VHeader:t,Content:m,Hero:g,Blog:p},setup(){return{args:s.args}},template:`
        <PageDefault>
          <v-header v-bind="args.header" />
          <Content>
            <Hero :hero="args.hero" />
            <Blog v-bind="args.blogData" />
          </Content>
        </PageDefault>
      `})]},n={args:{header:{home:a.home,navigation:a.navigation,lang:"en",product:!0,button:{text:"Start now",href:"/start-now/",skin:"primary is-cutoff"},home:{name:"home",imgLight:"/products/scepman/scepman-logo-all-white.svg",img:"/products/scepman/scepman-logo-rgb.svg",languages:{en:{title:"Home EN",url:"",alt:"alt text EN"}}},navigation:[{name:"home",languages:{de:{title:"Home",url:""},en:{title:"Home EN",url:""}}},{name:"pricing",languages:{en:{title:"Pricing EN",url:"/iframe.html"}}},{name:"partner",languages:{en:{title:"Partner EN",url:""}}},{name:"docs",languages:{en:{title:"Docs",url:"https://docs.radiusaas.com/",target:"_blank"}}}],showSecondaryNavigation:!0,theme:"radiusaas"},hero:{headline:"Blog",subline:"Lorem ipsum dolor sit",bgColor:"var(--color-yellow)",variant:"hero--small",background:{spacing:"space-top-lg-4 space-bottom-lg-4"}},blogData:{posts:c}}};var e,o,r;n.parameters={...n.parameters,docs:{...(e=n.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
      bgColor: 'var(--color-yellow)',
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
}`,...(r=(o=n.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const J=["Default"];export{n as Default,J as __namedExportsOrder,G as default};
