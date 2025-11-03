import{_ as l}from"./B6SvAqQ9.js";import{V as a}from"./D8RIPwb-.js";import{_ as m}from"./JTJQbH_0.js";import{_ as g}from"./Cje0Q9hY.js";import"./Dvw69DKD.js";import{_ as p}from"./4-Jd3Enl.js";import{H as t}from"./CbABglIS.js";import{P as c}from"./DZAKhzN2.js";import"./B33Brw1U.js";import"./DZPO-HCX.js";import"./DMRI4M43.js";import"./DRkpJ_7f.js";import"./DCrPD754.js";import"./2UDelqdq.js";import"./EOF1GhiT.js";import"./CgrIALS8.js";import"./DU-7d33D.js";import"./BVlzOcJV.js";import"./D_iE2a8P.js";import"./sgoF-Q-D.js";import"./DtmrzR9Z.js";import"./DHYSfBUw.js";import"./Bs503r3U.js";import"./C6rmS4RT.js";import"./BVlKCaGV.js";import"./l1zFX2Q8.js";import"./CVVyOazW.js";import"./DBCr34L5.js";import"./zYeSJnZL.js";import"./BlvKN7Xj.js";import"./Ci0iiqoR.js";const j={component:a,title:"Pages/Blog",parameters:{isPage:!0,layout:"fullscreen"},decorators:[(s,i)=>({components:{story:s,PageDefault:l,VHeader:a,Content:m,Hero:g,Blog:p},setup(){return{args:i.args}},template:`
        <PageDefault>
          <v-header v-bind="args.header" />
          <Content>
            <Hero :hero="args.hero" />
            <Blog v-bind="args.blogData" />
          </Content>
        </PageDefault>
      `})]},n={args:{header:{home:t.home,navigation:t.navigation,lang:"en",product:!0,button:{text:"Start now",href:"/start-now/",skin:"primary is-cutoff"},home:{name:"home",imgLight:"/products/scepman/scepman-logo-all-white.svg",img:"/products/scepman/scepman-logo-rgb.svg",languages:{en:{title:"Home EN",url:"",alt:"alt text EN"}}},navigation:[{name:"home",languages:{de:{title:"Home",url:""},en:{title:"Home EN",url:""}}},{name:"pricing",languages:{en:{title:"Pricing EN",url:"/iframe.html"}}},{name:"partner",languages:{en:{title:"Partner EN",url:""}}},{name:"docs",languages:{en:{title:"Docs",url:"https://docs.radiusaas.com/",target:"_blank"}}}],showSecondaryNavigation:!0,theme:"radiusaas"},hero:{headline:"Blog",subline:"Lorem ipsum dolor sit",bgColor:"var(--color-yellow)",variant:"hero--small",background:{spacing:"space-top-lg-4 space-bottom-lg-4"}},blogData:{posts:c}}};var e,o,r;n.parameters={...n.parameters,docs:{...(e=n.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(r=(o=n.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const q=["Default"];export{n as Default,q as __namedExportsOrder,j as default};
