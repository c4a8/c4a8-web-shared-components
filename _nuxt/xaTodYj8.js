import{_ as u}from"./DG0lYFbL.js";import{V as n}from"./C0KvugJ8.js";import{_ as l}from"./CIalVOPM.js";import{_ as c}from"./CnX7fp8L.js";import{I as m}from"./BygSocTX.js";import{V as g}from"./DvNPdxZw.js";import{F as h}from"./B7nT_Ubw.js";import{_ as p}from"./ckDD9LN7.js";import{H as t}from"./CbABglIS.js";import{JobApplication as d}from"./BrYegN5s.js";import"./Co5femKL.js";import"./D6xL3FJ9.js";import"./CyrHamPw.js";import"./B_ewqVlY.js";import"./CMmm5nM3.js";import"./NuHKKISs.js";import"./D5XM50Jq.js";import"./Fe_wL6qv.js";import"./BO8BPqvz.js";import"./Da0H4HkT.js";import"./8mVZFW25.js";import"./BjvH0yEG.js";import"./DyR35SjF.js";import"./Ade5ZbDi.js";import"./DRu6uy7u.js";import"./Dr48KCDd.js";import"./BlBRxHGO.js";import"./GH2Gd3Vu.js";import"./BwihW_0d.js";import"./DQOixfJN.js";import"./esXqDRs6.js";import"./_1vLXP-S.js";const Z={component:n,title:"Pages/Career",parameters:{isPage:!0,layout:"fullscreen"},decorators:[(s,o)=>({components:{story:s,PageDefault:u,VHeader:n,VFooter:g,Content:l,Hero:c,IntroText:m,FabButton:h,TextImage:p},setup(){return{args:o.args}},template:`
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
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const N=["Career"];export{e as Career,N as __namedExportsOrder,Z as default};
