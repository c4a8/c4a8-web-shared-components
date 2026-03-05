import{F as c}from"./D5bkap-j.js";import"./oTPXMCDg.js";import"./DdwyHImI.js";import"./YUr7EH3x.js";import"./GPTXL0Is.js";import"./ClBnplXB.js";import"./cU_pY7fI.js";import"./CYSogweK.js";import"./Caukqe0U.js";import"./DJ65ZwOS.js";import"./OKyuW4Sz.js";import"./18KT6of_.js";import"./BQQwvqeU.js";import"./BTmnygiy.js";import"./Z41llcMN.js";import"./Bxz0stV8.js";const v={component:c,title:"Components/Fab Button",argTypes:{icon:{description:"Fab Button Icon",type:"object"},modal:{description:"The Modal that gets called after fab Button is pressed",type:"object"},noSticky:{description:"Disables Sticky for the fab Button",type:"boolean"},bgColor:{description:"Sets the Background Color of the fab Button",type:"string"},iconColor:{description:"Sets the color of the Icon",type:"string"},trigger:{description:"Trigger for the Modal",type:"string"}},decorators:[l=>({components:{story:l},template:`
        <main>
          <div style="height: 100vh;" class="dummy-content"></div>
          <story />
          <div style="height: 500vh;" class="dummy-content"></div>
        </main>
        <footer style="height: 80vh" class="dummy-content">Footer</footer>
      `})]},e={args:{modal:{contact:{infos:{person:{image:"people/people-sophie-luna.png",cloudinary:!0,alt:"Kontakt mit Sophie",name:"Hast du Fragen? Sprich uns gerne an!",details:[{text:"kontakt@glueckkanja.com",href:"mailto:kontakt@glueckkanja.com",icon:"site/mail"},{text:"+49 69 4005520",href:"tel:+49 69 4005520",notes:"( Mo-Do 09-17 Uhr )",icon:"site/phone"}]},form:{ctaText:"Absenden",cta:{skin:"primary is-light"},method:"post",action:"/mock/fabButton.json",fields:[{label:"Vorname",type:"text",id:"prename",required:!0,requiredMsg:"Bitte geben Sie Ihren Vornamen an."},{label:"Nachname",type:"text",id:"surname",required:!0,requiredMsg:"Bitte geben Sie Ihren Nachnamen an."},{label:"Email-Adresse",type:"email",id:"email",required:!0,requiredMsg:"Bitte geben Sie Ihre E-Mail-Adresse ein."},{label:"Nachricht",type:"textarea",id:"message",required:!1,requiredMsg:"Bitte ausfüllen"},{label:"Ich bin mit der Speicherung meiner Daten einverstanden, die Datenschutzerklärung habe ich gelesen und akzeptiert. Meine Einwilligung kann ich jederzeit widerrufen.",type:"checkbox",id:"checkbox1",required:!0},{type:"hidden",id:"_to",value:"loremipsum@glueckkanja.com"},{type:"hidden",id:"_gotcha"}]}}}}}},n={args:{bgColor:"var(--color-orange)",iconColor:"var(--color-white)",icon:"emergency",modal:{contact:{infos:{person:{image:"people/people-sophie-luna.png",cloudinary:!0,alt:"Kontakt mit Sophie",name:"Hast du Fragen? Sprich uns gerne an!",details:[{text:"kontakt@glueckkanja.com",href:"mailto:kontakt@glueckkanja.com",icon:"site/mail"},{text:"+49 69 4005520",href:"tel:+49 69 4005520",notes:"( Mo-Do 09-17 Uhr )",icon:"site/phone"}]},form:{ctaText:"Absenden",cta:{skin:"primary is-light"},method:"post",action:"/mock/fabButton.json",fields:[{label:"Vorname",type:"text",id:"prename",required:!0,requiredMsg:"Bitte geben Sie Ihren Vornamen an."},{label:"Nachname",type:"text",id:"surname",required:!0,requiredMsg:"Bitte geben Sie Ihren Nachnamen an."},{label:"Email-Adresse",type:"email",id:"email",required:!0,requiredMsg:"Bitte geben Sie Ihre E-Mail-Adresse ein."},{label:"Nachricht",type:"textarea",id:"message",required:!1,requiredMsg:"Bitte ausfüllen"},{label:"Ich bin mit der Speicherung meiner Daten einverstanden, die Datenschutzerklärung habe ich gelesen und akzeptiert. Meine Einwilligung kann ich jederzeit widerrufen.",type:"checkbox",id:"checkbox1",required:!0},{type:"hidden",id:"_to",value:"loremipsum@glueckkanja.com"},{type:"hidden",id:"_gotcha"}]}}}}}};var t,i,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    modal: {
      contact: {
        infos: {
          person: {
            image: 'people/people-sophie-luna.png',
            cloudinary: true,
            alt: 'Kontakt mit Sophie',
            name: 'Hast du Fragen? Sprich uns gerne an!',
            details: [{
              text: 'kontakt@glueckkanja.com',
              href: 'mailto:kontakt@glueckkanja.com',
              icon: 'site/mail'
            }, {
              text: '+49 69 4005520',
              href: 'tel:+49 69 4005520',
              notes: '( Mo-Do 09-17 Uhr )',
              icon: 'site/phone'
            }]
          },
          form: {
            ctaText: 'Absenden',
            cta: {
              skin: 'primary is-light'
            },
            method: 'post',
            action: '/mock/fabButton.json',
            fields: [{
              label: 'Vorname',
              type: 'text',
              id: 'prename',
              required: true,
              requiredMsg: 'Bitte geben Sie Ihren Vornamen an.'
            }, {
              label: 'Nachname',
              type: 'text',
              id: 'surname',
              required: true,
              requiredMsg: 'Bitte geben Sie Ihren Nachnamen an.'
            }, {
              label: 'Email-Adresse',
              type: 'email',
              id: 'email',
              required: true,
              requiredMsg: 'Bitte geben Sie Ihre E-Mail-Adresse ein.'
            }, {
              label: 'Nachricht',
              type: 'textarea',
              id: 'message',
              required: false,
              requiredMsg: 'Bitte ausfüllen'
            }, {
              label: 'Ich bin mit der Speicherung meiner Daten einverstanden, die Datenschutzerklärung habe ich gelesen und akzeptiert. Meine Einwilligung kann ich jederzeit widerrufen.',
              type: 'checkbox',
              id: 'checkbox1',
              required: true
            }, {
              type: 'hidden',
              id: '_to',
              value: 'loremipsum@glueckkanja.com'
            }, {
              type: 'hidden',
              id: '_gotcha'
            }]
          }
        }
      }
    }
  }
}`,...(r=(i=e.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};var a,o,s;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    bgColor: 'var(--color-orange)',
    iconColor: 'var(--color-white)',
    icon: 'emergency',
    modal: {
      contact: {
        infos: {
          person: {
            image: 'people/people-sophie-luna.png',
            cloudinary: true,
            alt: 'Kontakt mit Sophie',
            name: 'Hast du Fragen? Sprich uns gerne an!',
            details: [{
              text: 'kontakt@glueckkanja.com',
              href: 'mailto:kontakt@glueckkanja.com',
              icon: 'site/mail'
            }, {
              text: '+49 69 4005520',
              href: 'tel:+49 69 4005520',
              notes: '( Mo-Do 09-17 Uhr )',
              icon: 'site/phone'
            }]
          },
          form: {
            ctaText: 'Absenden',
            cta: {
              skin: 'primary is-light'
            },
            method: 'post',
            action: '/mock/fabButton.json',
            fields: [{
              label: 'Vorname',
              type: 'text',
              id: 'prename',
              required: true,
              requiredMsg: 'Bitte geben Sie Ihren Vornamen an.'
            }, {
              label: 'Nachname',
              type: 'text',
              id: 'surname',
              required: true,
              requiredMsg: 'Bitte geben Sie Ihren Nachnamen an.'
            }, {
              label: 'Email-Adresse',
              type: 'email',
              id: 'email',
              required: true,
              requiredMsg: 'Bitte geben Sie Ihre E-Mail-Adresse ein.'
            }, {
              label: 'Nachricht',
              type: 'textarea',
              id: 'message',
              required: false,
              requiredMsg: 'Bitte ausfüllen'
            }, {
              label: 'Ich bin mit der Speicherung meiner Daten einverstanden, die Datenschutzerklärung habe ich gelesen und akzeptiert. Meine Einwilligung kann ich jederzeit widerrufen.',
              type: 'checkbox',
              id: 'checkbox1',
              required: true
            }, {
              type: 'hidden',
              id: '_to',
              value: 'loremipsum@glueckkanja.com'
            }, {
              type: 'hidden',
              id: '_gotcha'
            }]
          }
        }
      }
    }
  }
}`,...(s=(o=n.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const I=["Contact","Emergency"];export{e as Contact,n as Emergency,I as __namedExportsOrder,v as default};
