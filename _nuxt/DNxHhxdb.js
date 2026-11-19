import{_ as u}from"./B8CQVETn.js";import{V as n}from"./mivmSTxp.js";import{_ as l}from"./CH3ducCP.js";import{_ as c}from"./D3p0KK__.js";import{I as m}from"./D_ciuhyZ.js";import{V as g}from"./eW6Q4ZyR.js";import{F as p}from"./CSSH2aiA.js";import{_ as h}from"./BvWfFlgp.js";import{H as t}from"./Dl7xyO-b.js";import{JobApplication as d}from"./C_8DZY2G.js";import"./CIWquLdb.js";import"./y5JXzCmH.js";import"./D5SHIuPI.js";import"./dCsjDFCC.js";import"./B8FFpRHF.js";import"./CZ5AmaIf.js";import"./MZRpekHl.js";import"./CxOyRasT.js";import"./eWs_jC4Q.js";import"./B1QpSDvB.js";import"./Bw_h17jq.js";import"./CDKVI00Q.js";import"./x5s4-R6L.js";import"./B0iKeJkm.js";import"./C9ye92o2.js";import"./DJQKjfRp.js";import"./BevYdyew.js";import"./DPMFaKwf.js";import"./Ck5zXHHS.js";import"./BOJ4HzMU.js";import"./CMvE7DAR.js";import"./-_gES4nC.js";import"./2yS36ErN.js";import"./DO1Yi_ii.js";import"./CXCUhiDb.js";import"./DAkIFdPU.js";import"./_1vLXP-S.js";const $={component:n,title:"Pages/Career",parameters:{isPage:!0,layout:"fullscreen"},decorators:[(s,o)=>({components:{story:s,PageDefault:u,VHeader:n,VFooter:g,Content:l,Hero:c,IntroText:m,FabButton:p,TextImage:h},setup(){return{args:o.args}},template:`
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
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const ee=["Career"];export{e as Career,ee as __namedExportsOrder,$ as default};
