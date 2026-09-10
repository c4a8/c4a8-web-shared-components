import{_ as u}from"./Bf_U3L-O.js";import{V as n}from"./B7aA9yia.js";import{_ as l}from"./C4BBu9Qb.js";import{_ as c}from"./CaES-_pc.js";import{I as m}from"./gpzIOAll.js";import{V as g}from"./vNZSxmtF.js";import{F as p}from"./DpUIrwzD.js";import{_ as h}from"./Dnp76OxQ.js";import{H as t}from"./CbABglIS.js";import{JobApplication as d}from"./B1cN-_1Z.js";import"./DjOMUHhY.js";import"./CXMxLiql.js";import"./CKbD5-8G.js";import"./D0JZsg_6.js";import"./B5V-cRg9.js";import"./3t-2BVUU.js";import"./DEeeREni.js";import"./Dj-zVoYb.js";import"./CyqzUmjo.js";import"./Bo0UDt7B.js";import"./Cc_eq3Z8.js";import"./Th_t7MN_.js";import"./B_3uHjT4.js";import"./CDY5Tyat.js";import"./7GXqDc2H.js";import"./CWWu9oqd.js";import"./DPMFaKwf.js";import"./C3tmIh2O.js";import"./B0Uw0Szy.js";import"./ot1944s6.js";import"./-_gES4nC.js";import"./Kur3QCdN.js";import"./v7eQpoMj.js";import"./1pr9khVy.js";import"./DweU2ruy.js";import"./_1vLXP-S.js";const X={component:n,title:"Pages/Career",parameters:{isPage:!0,layout:"fullscreen"},decorators:[(s,o)=>({components:{story:s,PageDefault:u,VHeader:n,VFooter:g,Content:l,Hero:c,IntroText:m,FabButton:p,TextImage:h},setup(){return{args:o.args}},template:`
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
      `})]},e={args:{header:{home:t.home,navigation:t.navigation,theme:"gk"},footer:{lang:"de",noMargin:!0},hero:{overline:"Karriere",bgColor:"var(--color-gk-dark-blue)",light:!0,lightOverline:!1,fullscreen:!0,background:{icon:"smile",iconColor:"var(--color-gk-yellow)"},animation:{sequence:[{text:"HEY,",textSize:"font-size-7"},{text:"Wo bin ich denn hier gelandet?"},{text:"Da, wo eine neue Welt entsteht"},{text:"Gemeinsam",subline:"<strong>wollen wir die Welt verändern:</strong> die Dinge neu denken, neue Ideen entwickeln und Lösungen schaffen, die unsere Kunden wirklich voranbringen. Dafür braucht es Menschen, die nicht nur nach einem Job, sondern nach einer echten Aufgabe suchen. Menschen mit einer Vision und dem Wunsch, etwas Sinnvolles zu bewegen. <strong>Menschen wie dich.</strong>"}]},cta:{text:"Zu den Stellenanzeigen",href:"/de/stellenanzeigen",skin:"primary"}},fabButton:{modal:{contact:{headline:"Hast du Fragen? Sprich uns gerne an!",infos:{person:{image:"/people/jan-riechert.jpg",cloudinary:!0,alt:"Kontakt mit unserem People & Culture Team",name:"Hast du Fragen? Sprich uns gerne an!",details:[{text:"Jan Riechert",href:"mailto:jan.riechert@glueckkanja.com",icon:"site/mail"},{text:"+49 69 400552 228",href:"tel:+49 69 400552228",notes:"Keiner da? Wir rufen asap zurück.",icon:"site/phone"}]}}}}},introText:{headline:"Headline Lorem ipsum",copy:'<strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing elit. <span class="highlight">Vivamus facilisis</span> urna eu <span class="highlight">placerat malesuada</span>. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.<br><br>Praesent cursus, nulla ut <span class="highlight">dictum pharetra</span>, risus orci finibus felis, nec <span class="highlight">rhoncus urna</span> turpis nec augue. In hac habitasse platea dictumst. <strong>Lorem ipsum dolor</strong> sit amet, consectetur adipiscing elit. Proin hendrerit, urna non euismod tincidunt, velit nunc gravida enim, at <span class="highlight">tempus eros</span> nulla eu erat.'},textImage:{...d.args}}};var r,a,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
      bgColor: 'var(--color-gk-dark-blue)',
      light: true,
      lightOverline: false,
      fullscreen: true,
      background: {
        icon: 'smile',
        iconColor: 'var(--color-gk-yellow)'
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
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const $=["Career"];export{e as Career,$ as __namedExportsOrder,X as default};
