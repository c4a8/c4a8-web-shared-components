import{_ as u}from"./cECdXoz2.js";import{V as n}from"./PmA8xmDD.js";import{_ as l}from"./Dhf8p4oa.js";import{_ as c}from"./CckVniRJ.js";import{I as m}from"./BANj1t1-.js";import{V as g}from"./DUDcGe3U.js";import{F as h}from"./-9Ge_8Lv.js";import{_ as p}from"./CbBHdG7O.js";import{H as t}from"./CbABglIS.js";import{JobApplication as d}from"./DtQ6GapL.js";import"./CL240g-6.js";import"./Dccbvwdj.js";import"./DI0LRPFV.js";import"./CQl-DGMO.js";import"./C34I-ysO.js";import"./G5E8nIOj.js";import"./L63yDLZr.js";import"./B_NaFUFB.js";import"./UR7_3Cmp.js";import"./BKLF-Ocb.js";import"./DZPusMw6.js";import"./_nIEBOUS.js";import"./XBx_rLb2.js";import"./WBLclHzT.js";import"./DDawstpH.js";import"./MgNeN2Qd.js";import"./Dl4DfknO.js";import"./BMVzp8GN.js";import"./CCo8Lx9L.js";import"./EwgUaGjm.js";import"./CTmIJWHy.js";import"./ChBTxhDK.js";import"./oSH-19Jz.js";import"./_1vLXP-S.js";const Q={component:n,title:"Pages/Career",parameters:{isPage:!0,layout:"fullscreen"},decorators:[(s,o)=>({components:{story:s,PageDefault:u,VHeader:n,VFooter:g,Content:l,Hero:c,IntroText:m,FabButton:h,TextImage:p},setup(){return{args:o.args}},template:`
        <PageDefault>
          <v-header v-bind="args.header" />
          <Content>
            <Hero :hero="args.hero" />
            <FabButton v-bind="args.fabButton" />
            <IntroText v-bind="args.introText" />
            <TextImage v-bind="args.textImage" />
            <div style="height: 200vh;" class="dummy-content"></div>
          </Content>
          <v-footer v-bind="args.footer" />
        </PageDefault>
      `})]},e={args:{header:{home:t.home,navigation:t.navigation,theme:"gk"},footer:{lang:"de",noMargin:!0},hero:{overline:"Karriere",bgColor:"var(--color-blue-dark)",light:!0,lightOverline:!1,fullscreen:!0,background:{icon:"smile",iconColor:"var(--color-yellow)"},animation:{sequence:[{text:"HEY,",textSize:"font-size-7"},{text:"Wo bin ich denn hier gelandet?"},{text:"Da, wo eine neue Welt entsteht"},{text:"Gemeinsam",subline:"<strong>wollen wir die Welt verändern:</strong> die Dinge neu denken, neue Ideen entwickeln und Lösungen schaffen, die unsere Kunden wirklich voranbringen. Dafür braucht es Menschen, die nicht nur nach einem Job, sondern nach einer echten Aufgabe suchen. Menschen mit einer Vision und dem Wunsch, etwas Sinnvolles zu bewegen. <strong>Menschen wie dich.</strong>"}]},cta:{text:"Zu den Stellenanzeigen",href:"/de/stellenanzeigen",skin:"primary"}},fabButton:{modal:{contact:{headline:"Hast du Fragen? Sprich uns gerne an!",infos:{person:{image:"/people/jan-riechert.jpg",cloudinary:!0,alt:"Kontakt mit unserem People & Culture Team",name:"Hast du Fragen? Sprich uns gerne an!",details:[{text:"Jan Riechert",href:"mailto:jan.riechert@glueckkanja.com",icon:"site/mail"},{text:"+49 69 400552 228",href:"tel:+49 69 400552228",notes:"Keiner da? Wir rufen asap zurück.",icon:"site/phone"}]}}}}},introText:{headline:"Headline Lorem ipsum",copy:'<strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing elit. <span class="highlight">Vivamus facilisis</span> urna eu <span class="highlight">placerat malesuada</span>. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.<br><br>Praesent cursus, nulla ut <span class="highlight">dictum pharetra</span>, risus orci finibus felis, nec <span class="highlight">rhoncus urna</span> turpis nec augue. In hac habitasse platea dictumst. <strong>Lorem ipsum dolor</strong> sit amet, consectetur adipiscing elit. Proin hendrerit, urna non euismod tincidunt, velit nunc gravida enim, at <span class="highlight">tempus eros</span> nulla eu erat.'},textImage:{...d.args}}};var r,a,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    header: {
      home: HeaderData.home,
      navigation: HeaderData.navigation,
      theme: 'gk'
    },
    footer: {
      lang: 'de',
      noMargin: true
    },
    hero: {
      overline: 'Karriere',
      bgColor: 'var(--color-blue-dark)',
      light: true,
      lightOverline: false,
      fullscreen: true,
      background: {
        icon: 'smile',
        iconColor: 'var(--color-yellow)'
      },
      animation: {
        sequence: [{
          text: 'HEY,',
          textSize: 'font-size-7'
        }, {
          text: 'Wo bin ich denn hier gelandet?'
        }, {
          text: 'Da, wo eine neue Welt entsteht'
        }, {
          text: 'Gemeinsam',
          subline: '<strong>wollen wir die Welt verändern:</strong> die Dinge neu denken, neue Ideen entwickeln und Lösungen schaffen, die unsere Kunden wirklich voranbringen. Dafür braucht es Menschen, die nicht nur nach einem Job, sondern nach einer echten Aufgabe suchen. Menschen mit einer Vision und dem Wunsch, etwas Sinnvolles zu bewegen. <strong>Menschen wie dich.</strong>'
        }]
      },
      cta: {
        text: 'Zu den Stellenanzeigen',
        href: '/de/stellenanzeigen',
        skin: 'primary'
      }
    },
    fabButton: {
      modal: {
        contact: {
          headline: 'Hast du Fragen? Sprich uns gerne an!',
          infos: {
            person: {
              image: '/people/jan-riechert.jpg',
              cloudinary: true,
              alt: 'Kontakt mit unserem People & Culture Team',
              name: 'Hast du Fragen? Sprich uns gerne an!',
              details: [{
                text: 'Jan Riechert',
                href: 'mailto:jan.riechert@glueckkanja.com',
                icon: 'site/mail'
              }, {
                text: '+49 69 400552 228',
                href: 'tel:+49 69 400552228',
                notes: 'Keiner da? Wir rufen asap zurück.',
                icon: 'site/phone'
              }]
            }
          }
        }
      }
    },
    introText: {
      headline: 'Headline Lorem ipsum',
      copy: '<strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing elit. <span class="highlight">Vivamus facilisis</span> urna eu <span class="highlight">placerat malesuada</span>. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.<br><br>Praesent cursus, nulla ut <span class="highlight">dictum pharetra</span>, risus orci finibus felis, nec <span class="highlight">rhoncus urna</span> turpis nec augue. In hac habitasse platea dictumst. <strong>Lorem ipsum dolor</strong> sit amet, consectetur adipiscing elit. Proin hendrerit, urna non euismod tincidunt, velit nunc gravida enim, at <span class="highlight">tempus eros</span> nulla eu erat.'
    },
    textImage: {
      ...JobApplication.args
    }
  }
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const U=["Career"];export{e as Career,U as __namedExportsOrder,Q as default};
