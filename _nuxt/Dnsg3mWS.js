import{_ as w}from"./BYYfgA38.js";import{_ as v}from"./CFnYkEj-.js";import{_ as L}from"./C9H7sky3.js";import{_ as S}from"./BoWzOUfH.js";import{_ as D}from"./D7npM6IC.js";import{_ as U,c as E,b as i,d as s,t as B,e as I,a as C,f as N,n as A,T as J,a9 as T,ay as z,S as u,o as h}from"./B2iMc_ZQ.js";import{L as O}from"./BiNK43qf.js";import"./B8WBIsCi.js";import"./DGp2rC9j.js";import"./Cqw2kOCt.js";import"./BWa1ETee.js";import"./BRYKKOl-.js";import"./__QZoZam.js";import"./BZFXTzLA.js";import"./YVzt89ZV.js";import"./P8VXDEGD.js";const _={tagName:"job-list-detail",computed:{classList(){return["job-list__detail page-detail",`${this.hasLoading?u.LOADING:""}`,`${this.hasLoader?"loading":""}`,`${this.hideLoading?u.HIDE_LOADING:""}`,`${this.hasBack?"page-detail--has-back":""}`,"vue-component"]},headlineClassList(){return`job-list__detail-headline page-detail__headline ${this.headlineClasses?this.headlineClasses:""}`},headlineLevelValue(){return this.headlineLevel?this.headlineLevel:"h1"},style(){return`--page-detail-color: var(${this.color}); --color-icon-hover-color: var(--page-detail-color)`},color(){return this.detailColor?this.detailColor:"--color-job-list-detail"},getUuid(){return"job-list-detail-style"}},mounted(){this.loading=new O(this.$refs["job-list-detail"],()=>{this.hasLoader=!0}),this.loading.on(!0),this.init()},data(){return{loadingDelay:300,sleepDelay:1300,loading:{},hasLoading:!0,hasLoader:!1,hideLoading:!1,api:{},hasBack:!1,entryData:{},personQuote:null,videoInner:null,jobIdValue:null}},methods:{init(){var a;const t=this.mockApplyUrl,e=this.mockDocumentsUrl;this.api=new z({...this.apiUrl&&{apiUrl:this.apiUrl},client_name:this.clientName,apiKey:this.apiKey,mockApplyUrl:t,mockDocumentsUrl:e}),this.api.setLang(this.lang);const n=this.api.getJobId()||this.jobId;this.jobIdValue=n,this.showBackButton();const l=(a=window.i18n)==null?void 0:a.loader;l?l.then(()=>{this.loadJob()}):this.loadJob()},showBackButton(){document.referrer.indexOf(document.location.host)!==-1&&(this.hasBack=!0)},loadJob(){var t;this.loadLocalJobData(),(t=this.api)==null||t.getOpening(this.jobIdValue).then(e=>e.json()).then(e=>{this.handleJob(e)}).catch(e=>{console.error("Job-list Error:",e)})},handleCta(){var t;T.open((t=this.$refs["modal-component"])==null?void 0:t.modal)},handleJob(t){J.sleep(this.sleepDelay).then(()=>{const e=t.objects?t.objects[0]:t;if(e){const n=this.$t("gender"),{title:l,description:a}=e,o={description:a,title:l,gender:n};this.hideLoading=!0,this.update(o)}else console.error("handleJob has no entry")})},stopLoading(){setTimeout(()=>{this.loading.off(!0,!0),this.hasLoading=!1},this.loadingDelay)},update(t){this.entryData=t,this.stopLoading()},loadLocalJobData(){const t=`${this.api.jobDataUrl}${this.jobIdValue}.json`;return this.addCustomStyle(),fetch(t,{method:"GET",headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{if(e.videoInner)return this.videoInner=e.videoInner;this.personQuote=e.personQuote}).catch(e=>{console.error("Job-list-Detail Local Job Data Error:",e)})},addCustomStyle(){var e;const t=document.createElement("style");t.id=this.getUuid,(e=document.getElementById(this.getUuid))==null||e.remove(),t.innerHTML=`
        .show-in-${this.jobIdValue}.d-none {
          display: block !important;
        }
      `,document.head.appendChild(t)}},props:{detailColor:String,clientName:String,jobId:String,apiUrl:String,headlineLevel:String,headlineClasses:String,ctaText:String,ctaButton:Boolean,form:Object,googleMaps:Object,modalSuccess:Object,modalError:Object,apiKey:String,mockApplyUrl:String,mockDocumentsUrl:String,lang:String}},q=["id","jobId","apiUrl"],M={class:"job-list__detail-container page-detail__container container"},V={class:"job-list__detail-start page-detail__start row"},K={class:"job-list__sticky-start page-detail__sticky-start col-md-11 col-lg-5"},F={class:"job-list__detail-intro page-detail__intro js-sticky-block","data-hs-sticky-block-options":`{
                "parentSelector": ".job-list__sticky-start",
                "breakpoint": "lg",
                "startPoint": ".job-list__sticky-start",
                "endPoint": ".job-list__sticky-end",
                "stickyOffsetTop": 200,
                "stickyOffsetBottom": 20
              }`},G={class:"job-list__detail-back page-detail__back page-detail__animation-3 back back--animated"},W={class:"job-list__detail-gender"},H={class:"job-list__detail-cta"},Q={class:"job-list__detail-content page-detail__content page-detail__animation-3 col-md-11 offset-lg-1 col-lg-6"},P=["innerHTML"];function R(t,e,n,l,a,o){var c,d,m;const y=w,f=v,k=L,j=S,x=D;return h(),E("div",{class:A(o.classList),style:N(o.style),id:n.clientName,jobId:a.jobIdValue,apiUrl:n.apiUrl,ref:"job-list-detail"},[i("div",M,[i("div",V,[i("div",K,[i("div",F,[i("div",G,[s(y,{icon:"arrow",direction:"left",hover:"true",circle:"true"})]),s(f,{text:(c=a.entryData)==null?void 0:c.title,level:o.headlineLevelValue,classes:o.headlineClassList},null,8,["text","level","classes"]),i("span",W,B((d=a.entryData)==null?void 0:d.gender),1),e[0]||(e[0]=i("div",{class:"job-list__detail-share"},null,-1)),i("div",H,[s(k,{text:n.ctaText,button:n.ctaButton,onClick:o.handleCta},null,8,["text","button","onClick"])])])]),i("div",Q,[i("div",{class:"job-list__detail-description page-detail__description has-no-border richtext",innerHTML:(m=a.entryData)==null?void 0:m.description},null,8,P),a.videoInner?(h(),I(j,{key:0,variant:"reversed",video:a.videoInner.video},null,8,["video"])):C("",!0)])])]),e[1]||(e[1]=i("div",{class:"job-list__sticky-end"},null,-1)),s(x,{ref:"modal-component",clientName:n.clientName,apiUrl:n.apiUrl,jobId:a.jobIdValue,apiKey:n.apiKey,mockApplyUrl:n.mockApplyUrl,mockDocumentsUrl:n.mockDocumentsUrl,error:n.modalError,success:n.modalSuccess,form:n.form,application:!0},null,8,["clientName","apiUrl","jobId","apiKey","mockApplyUrl","mockDocumentsUrl","error","success","form"])],14,q)}const Y=U(_,[["render",R]]);_.__docgenInfo={exportName:"default",displayName:"job-list-detail",description:"",tags:{},props:[{name:"detailColor",type:{name:"string"}},{name:"clientName",type:{name:"string"}},{name:"jobId",type:{name:"string"}},{name:"apiUrl",type:{name:"string"}},{name:"headlineLevel",type:{name:"string"}},{name:"headlineClasses",type:{name:"string"}},{name:"ctaText",type:{name:"string"}},{name:"ctaButton",type:{name:"boolean"}},{name:"form",type:{name:"object"}},{name:"googleMaps",type:{name:"object"}},{name:"modalSuccess",type:{name:"object"}},{name:"modalError",type:{name:"object"}},{name:"apiKey",type:{name:"string"}},{name:"mockApplyUrl",type:{name:"string"}},{name:"mockDocumentsUrl",type:{name:"string"}},{name:"lang",type:{name:"string"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/job-list-detail.vue"]};const he={title:"Components/JobListDetail",component:Y},r={args:{lang:"de",ctaText:"Jetzt bewerben",detailColor:"--color-job-list-detail",clientName:"c4a8",jobId:"",apiUrl:"",ctaButton:!0,form:{headline:"Jetzt bewerben",cta:{skin:"primary",width:"w-100 w-lg-30"},ctaText:"Bewerbung absenden",method:"post",action:"",fields:[{label:"Vorname",type:"text",col:6,rowStart:!0,required:!0,id:"firstName"},{label:"Nachname",type:"text",col:6,rowEnd:!0,required:!0,id:"lastName"},{label:"E-Mail Adresse",type:"email",col:6,rowStart:!0,required:!0,id:"email"},{label:"Telefon",type:"text",col:6,rowEnd:!0,required:!0,id:"phone"},{label:"Kündigungsfrist (optional)",type:"text",col:6,rowStart:!0,id:"cancellation"},{label:"Gehaltsvorstellung (optional)",type:"text",col:6,rowEnd:!0,id:"salary"},{label:"Nachricht (optional)",type:"textarea",id:"message"},{type:"file",col:12,rowStart:!0,rowEnd:!0,formAttachments:{required:!0,requiredMsg:"Bitte einen Anhang hinzufügen",id:"file",description:"Anhänge wie Lebenslauf und Anschreiben hinzufügen",text:"Oder Dateien auswählen",extensions:["pdf"],maxSize:2e7}},{label:"<small>Lorem ipsum dolor sit amet, consectetur adipiscing elit <a href='javascript:void()'>Lorem Ipsum</a>. Sit amet consectetur adipiscing elit.</small>",type:"checkbox",id:"privacy",required:!0}]},headlineLevel:"",headlineClasses:"",gender:"",googleMaps:null,apiKey:"4254caca2f454e9887552ac9012fac13",mockApplyUrl:"",mockDocumentsUrl:"",modalSuccess:{cta:{skin:"primary",width:"w-100 w-lg-30",text:"Schließen"},headline:{text:"Yeah, danke für deine Bewerbung, "},subline:"Wir freuen uns, dass du uns deine Unterlagen geschickt hast und haben dir zur Bestätigung eine Mail geschickt. Wir schauen uns deine Bewerbung jetzt in Ruhe an und melden uns bei dir innerhalb einer Woche. Großes glueckkanja Ehrenwort!"},modalError:{cta:{skin:"primary",width:"w-100 w-lg-30",text:"Schließen"},headline:{text:"Ooops!"},subline:"Etwas ist schief gelaufen!",text:"Bitte versuche es später noch einmal oder kontaktiere uns unter:",mail:"info@glueckkanja.de",phone:"+49 69 4005520"}}};var p,g,b;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    lang: 'de',
    ctaText: 'Jetzt bewerben',
    detailColor: '--color-job-list-detail',
    clientName: 'c4a8',
    jobId: '',
    apiUrl: '',
    ctaButton: true,
    form: {
      headline: 'Jetzt bewerben',
      cta: {
        skin: 'primary',
        width: 'w-100 w-lg-30'
      },
      ctaText: 'Bewerbung absenden',
      method: 'post',
      action: '',
      fields: [{
        label: 'Vorname',
        type: 'text',
        col: 6,
        rowStart: true,
        required: true,
        id: 'firstName'
      }, {
        label: 'Nachname',
        type: 'text',
        col: 6,
        rowEnd: true,
        required: true,
        id: 'lastName'
      }, {
        label: 'E-Mail Adresse',
        type: 'email',
        col: 6,
        rowStart: true,
        required: true,
        id: 'email'
      }, {
        label: 'Telefon',
        type: 'text',
        col: 6,
        rowEnd: true,
        required: true,
        id: 'phone'
      }, {
        label: 'Kündigungsfrist (optional)',
        type: 'text',
        col: 6,
        rowStart: true,
        id: 'cancellation'
      }, {
        label: 'Gehaltsvorstellung (optional)',
        type: 'text',
        col: 6,
        rowEnd: true,
        id: 'salary'
      }, {
        label: 'Nachricht (optional)',
        type: 'textarea',
        id: 'message'
      }, {
        type: 'file',
        col: 12,
        rowStart: true,
        rowEnd: true,
        formAttachments: {
          required: true,
          requiredMsg: 'Bitte einen Anhang hinzufügen',
          id: 'file',
          description: 'Anhänge wie Lebenslauf und Anschreiben hinzufügen',
          text: 'Oder Dateien auswählen',
          extensions: ['pdf'],
          maxSize: 20000000
        }
      }, {
        label: "<small>Lorem ipsum dolor sit amet, consectetur adipiscing elit <a href='javascript:void()'>Lorem Ipsum</a>. Sit amet consectetur adipiscing elit.</small>",
        type: 'checkbox',
        id: 'privacy',
        required: true
      }]
    },
    headlineLevel: '',
    headlineClasses: '',
    gender: '',
    googleMaps: null,
    apiKey: '4254caca2f454e9887552ac9012fac13',
    mockApplyUrl: '',
    mockDocumentsUrl: '',
    modalSuccess: {
      cta: {
        skin: 'primary',
        width: 'w-100 w-lg-30',
        text: 'Schließen'
      },
      headline: {
        text: 'Yeah, danke für deine Bewerbung, '
      },
      subline: 'Wir freuen uns, dass du uns deine Unterlagen geschickt hast und haben dir zur Bestätigung eine Mail geschickt. Wir schauen uns deine Bewerbung jetzt in Ruhe an und melden uns bei dir innerhalb einer Woche. Großes glueckkanja Ehrenwort!'
    },
    modalError: {
      cta: {
        skin: 'primary',
        width: 'w-100 w-lg-30',
        text: 'Schließen'
      },
      headline: {
        text: 'Ooops!'
      },
      subline: 'Etwas ist schief gelaufen!',
      text: 'Bitte versuche es später noch einmal oder kontaktiere uns unter:',
      mail: 'info@glueckkanja.de',
      phone: '+49 69 4005520'
    }
  }
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const pe=["jobListDetail"];export{pe as __namedExportsOrder,he as default,r as jobListDetail};
