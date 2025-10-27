import{_ as v}from"./BWN-yRMJ.js";import{_ as B}from"./Csfb8wo9.js";import{_ as q}from"./C7IbtALb.js";import{_ as M,c as m,b as i,d as l,w as T,n as h,E as a,T as c,S as g,o as d,a as p,e as w,m as j}from"./CANVhtT2.js";import"./D1PDFFka.js";import"./OBT3TP2i.js";import"./RV7LjVkR.js";import"./Bm7Wq2Ym.js";import"./3UWwhgVq.js";import"./BD7v0aS1.js";import"./BnBAHj-E.js";import"./D4LraFuh.js";import"./_PVa5RZu.js";const x={tagName:"fab-button",props:{icon:{type:String,default:"phone-mail"},modal:{type:Object,default:null},noSticky:{type:Boolean,default:!1},bgColor:{type:String,default:null},iconColor:{type:String,default:null},trigger:{type:[String,Number],default:null}},computed:{classList(){return["fab-button",this.noSticky?"":"fab-button--sticky",this.trigger?"fab-button--has-trigger":"",{[this.expandedClass]:this.isExpanded},{[this.hasTriggerClass]:this.hasTrigger}]},iconStyle(){let e={};return this.bgColor&&(e["--color-fab-background"]=this.bgColor),this.iconColor&&(e.color=this.iconColor),e},offsetTop(){return window?window.innerHeight*.97:null}},data(){return{resetDelay:300,isExpanded:!1,hasTrigger:!1,expandedClass:g.EXPANDED,offScreenClass:g.OFF_SCREEN,hasTriggerClass:"fab-button--has-trigger"}},mounted(){this.iconElement=this.$refs.icon,this.linkElement=this.$refs.link instanceof NodeList?this.$refs.link:[this.$refs.link],this.modalElement=this.$refs.modal,this.closeElement=this.$refs.close,this.root=this.$refs.root,this.hasTrigger=this.root.classList.contains(this.hasTriggerClass),this.init()},methods:{init(){this.bindEvents()},bindEvents(){var e;if(!this.iconElement||!this.modalElement||this.hasTrigger)return this.bindTriggerEvent();this.linkElement.forEach(n=>{n.addEventListener("click",this.handleClick)}),this.iconElement.addEventListener("click",this.handleClick),(e=this.closeElement)==null||e.addEventListener("click",this.handleClose),document.addEventListener(a.FORM_AJAX_SUBMIT,this.handleSubmit),window.addEventListener("click",this.handleOutsideClick),this.modalElement.style.opacity="1",this.modalElement.style.opacity=""},bindTriggerEvent(){this.iconElement.addEventListener("click",this.handleTriggerClick)},handleTriggerClick(e){const t=e.currentTarget.dataset.triggerId;document.dispatchEvent(new CustomEvent(a.OPEN_MODAL,{detail:{id:t}}))},handleOutsideClick(e){this.root.classList.contains(this.expandedClass)&&c.isOutsideOf("fab-button",e)&&c.isOutsideOf("fab-trigger",e)&&this.handleClose(),c.isOutsideOf("fab-trigger",e)||this.handleClick()},handleSubmit(){this.handleClose()},handleClose(){this.handleClick(),setTimeout(()=>{document.dispatchEvent(new CustomEvent(a.FAB_BUTTON_CLOSE,{detail:{target:this.root}}))},this.resetDelay)},handleClick(){this.isExpanded=!this.isExpanded,this.modalElement.classList.toggle(this.offScreenClass),this.modalElement.classList.contains(this.offScreenClass)&&(this.modalElement.style.opacity="")}},beforeDestroy(){window.removeEventListener("click",this.handleOutsideClick),document.removeEventListener(a.FORM_AJAX_SUBMIT,this.handleSubmit)}},N={key:0,class:"fab-button__modal is-off-screen",ref:"modal"},I={class:"fab-button__close",ref:"close"},A={class:"fab-trigger",ref:"link"};function D(e,n,t,L,V,s){const u=v,S=B,C=q;return d(),m("div",{class:h(s.classList),ref:"root"},[n[0]||(n[0]=i("div",{class:"fab-button__start"},null,-1)),l(C,{"sticky-offset-top":s.offsetTop},{default:T(()=>[i("div",{class:h(["fab-button__wrapper",["fab-button__wrapper",t.noSticky?"":"js-sticky-block"]])},[t.modal?(d(),m("div",N,[i("div",I,[l(u,{icon:"close",circle:!0,hover:!0,size:"medium"})],512),t.modal.contact?(d(),w(S,{key:0,contact:t.modal.contact.infos,collapsed:!0,ajax:!0},null,8,["contact"])):p("",!0)],512)):p("",!0),i("div",j({class:"fab-button__icon",ref:"icon",style:s.iconStyle},t.trigger?{"data-trigger-id":t.trigger}:{}),[l(u,{icon:t.icon,size:"large"},null,8,["icon"])],16)],2)]),_:1},8,["sticky-offset-top"]),i("a",A,null,512)],2)}const O=M(x,[["render",D]]);x.__docgenInfo={exportName:"default",displayName:"fab-button",description:"",tags:{},props:[{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:"'phone-mail'"}},{name:"modal",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"noSticky",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"bgColor",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"iconColor",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"trigger",type:{name:"string|number"},defaultValue:{func:!1,value:"null"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/fab-button.vue"]};const Y={component:O,title:"Components/Fab Button",argTypes:{icon:{description:"Fab Button Icon",type:"object"},modal:{description:"The Modal that gets called after fab Button is pressed",type:"object"},noSticky:{description:"Disables Sticky for the fab Button",type:"boolean"},bgColor:{description:"Sets the Background Color of the fab Button",type:"string"},iconColor:{description:"Sets the color of the Icon",type:"string"},trigger:{description:"Trigger for the Modal",type:"string"}},decorators:[e=>({components:{story:e},template:`
        <story />
        <div style="height: 200vh;" class="dummy-content"></div>
      `})]},r={args:{modal:{contact:{infos:{person:{image:"people/people-sophie-luna.png",cloudinary:!0,alt:"Kontakt mit Sophie",name:"Hast du Fragen? Sprich uns gerne an!",details:[{text:"kontakt@glueckkanja.com",href:"mailto:kontakt@glueckkanja.com",icon:"site/mail"},{text:"+49 69 4005520",href:"tel:+49 69 4005520",notes:"( Mo-Do 09-17 Uhr )",icon:"site/phone"}]},form:{ctaText:"Absenden",cta:{skin:"primary is-light"},method:"post",action:"/mock/fabButton.json",fields:[{label:"Vorname",type:"text",id:"prename",required:!0,requiredMsg:"Bitte geben Sie Ihren Vornamen an."},{label:"Nachname",type:"text",id:"surname",required:!0,requiredMsg:"Bitte geben Sie Ihren Nachnamen an."},{label:"Email-Adresse",type:"email",id:"email",required:!0,requiredMsg:"Bitte geben Sie Ihre E-Mail-Adresse ein."},{label:"Nachricht",type:"textarea",id:"message",required:!1,requiredMsg:"Bitte ausfüllen"},{label:"Ich bin mit der Speicherung meiner Daten einverstanden, die Datenschutzerklärung habe ich gelesen und akzeptiert. Meine Einwilligung kann ich jederzeit widerrufen.",type:"checkbox",id:"checkbox1",required:!0},{type:"hidden",id:"_to",value:"loremipsum@glueckkanja.com"},{type:"hidden",id:"_gotcha"}]}}}}}},o={args:{bgColor:"var(--color-orange)",iconColor:"var(--color-white)",icon:"emergency",modal:{contact:{infos:{person:{image:"people/people-sophie-luna.png",cloudinary:!0,alt:"Kontakt mit Sophie",name:"Hast du Fragen? Sprich uns gerne an!",details:[{text:"kontakt@glueckkanja.com",href:"mailto:kontakt@glueckkanja.com",icon:"site/mail"},{text:"+49 69 4005520",href:"tel:+49 69 4005520",notes:"( Mo-Do 09-17 Uhr )",icon:"site/phone"}]},form:{ctaText:"Absenden",cta:{skin:"primary is-light"},method:"post",action:"/mock/fabButton.json",fields:[{label:"Vorname",type:"text",id:"prename",required:!0,requiredMsg:"Bitte geben Sie Ihren Vornamen an."},{label:"Nachname",type:"text",id:"surname",required:!0,requiredMsg:"Bitte geben Sie Ihren Nachnamen an."},{label:"Email-Adresse",type:"email",id:"email",required:!0,requiredMsg:"Bitte geben Sie Ihre E-Mail-Adresse ein."},{label:"Nachricht",type:"textarea",id:"message",required:!1,requiredMsg:"Bitte ausfüllen"},{label:"Ich bin mit der Speicherung meiner Daten einverstanden, die Datenschutzerklärung habe ich gelesen und akzeptiert. Meine Einwilligung kann ich jederzeit widerrufen.",type:"checkbox",id:"checkbox1",required:!0},{type:"hidden",id:"_to",value:"loremipsum@glueckkanja.com"},{type:"hidden",id:"_gotcha"}]}}}}}};var f,b,k;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(k=(b=r.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var y,_,E;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(E=(_=o.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const Z=["Contact","Emergency"];export{r as Contact,o as Emergency,Z as __namedExportsOrder,Y as default};
