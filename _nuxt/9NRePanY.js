import{_ as l}from"./C207M8H_.js";import{V as n}from"./Q1yulWr1.js";import{_ as m}from"./BL_VDBxW.js";import{_ as g}from"./B0ejAhdL.js";import"./BM8S5Lo-.js";import{_ as p}from"./B0ghXqeE.js";import{H as a}from"./Dl7xyO-b.js";import{P as c}from"./DZAKhzN2.js";import"./mTDM_l7k.js";import"./ng6ZpGsy.js";import"./BN5defaO.js";import"./Dp1pzeXC.js";import"./C6iTuytH.js";import"./AsAknkM1.js";import"./BwujrSpP.js";import"./IVd6PCG-.js";import"./Das4yBVx.js";import"./DPMFaKwf.js";import"./BrYFPBB3.js";import"./BKQBNzEE.js";import"./C3AcGwKy.js";import"./DZlbDMQg.js";import"./_DgV_7gd.js";import"./CQ9nanxY.js";import"./BrVwj7Br.js";import"./D1RNqOU0.js";import"./x96KkGEi.js";import"./0VXlCbem.js";import"./yQ5bUWoI.js";import"./CkdonGQe.js";import"./BrPK2RKJ.js";import"./tg794zUq.js";import"./Cv57cmtg.js";import"./CnxRl7MP.js";import"./BVxADMhz.js";import"./D2JoVWBN.js";import"./C9OrNwtL.js";import"./CkIBnGrV.js";import"./CpVvvlGm.js";import"./JjTtIGbZ.js";import"./hvE8DdO1.js";const tt={component:n,title:"Pages/Blog",parameters:{isPage:!0,layout:"fullscreen"},decorators:[(i,s)=>({components:{story:i,PageDefault:l,VHeader:n,Content:m,Hero:g,Blog:p},setup(){return{args:s.args}},template:`
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
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const nt=["Default"];export{t as Default,nt as __namedExportsOrder,tt as default};
