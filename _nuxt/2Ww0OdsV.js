import{_ as S}from"./CyrHamPw.js";import{_ as D}from"./D5XM50Jq.js";import{_ as U}from"./NuHKKISs.js";import{_ as E}from"./NwtD0vKs.js";import{_ as B}from"./DQOixfJN.js";import{_ as C,c as h,b as i,d as s,t as I,e as N,a as p,f as A,n as J,T,a9 as q,ay as z,S as g,L as O,o as c}from"./Co5femKL.js";import{L as M}from"./BPeX3XRz.js";import"./B_ewqVlY.js";import"./CMmm5nM3.js";import"./CuOzPA0h.js";import"./BO8BPqvz.js";import"./BjvH0yEG.js";import"./DsDL2EhU.js";import"./BlBRxHGO.js";import"./GH2Gd3Vu.js";import"./DlQXtTOl.js";const f={tagName:"job-list-detail",computed:{classList(){return["job-list__detail page-detail",`${this.hasLoading?g.LOADING:""}`,`${this.hasLoader?"loading":""}`,`${this.hideLoading?g.HIDE_LOADING:""}`,`${this.hasBack?"page-detail--has-back":""}`,"vue-component"]},headlineClassList(){return`job-list__detail-headline page-detail__headline ${this.headlineClasses?this.headlineClasses:""}`},headlineLevelValue(){return this.headlineLevel?this.headlineLevel:"h1"},style(){return`--page-detail-color: var(${this.color}); --color-icon-hover-color: var(--page-detail-color)`},color(){return this.detailColor?this.detailColor:"--color-job-list-detail"},getUuid(){return"job-list-detail-style"}},mounted(){this.loading=new M(this.$refs["job-list-detail"],()=>{this.hasLoader=!0}),this.loading.on(!0),this.init()},data(){return{loadingDelay:300,sleepDelay:1300,loading:{},hasLoading:!0,hasLoader:!1,hideLoading:!1,api:{},hasBack:!1,entryData:{},personQuote:null,videoInner:null,jobIdValue:null}},methods:{init(){var a;const t=this.mockApplyUrl,e=this.mockDocumentsUrl;this.api=new z({...this.apiUrl&&{apiUrl:this.apiUrl},client_name:this.clientName,apiKey:this.apiKey,mockApplyUrl:t,mockDocumentsUrl:e}),this.api.setLang(this.lang);const n=this.api.getJobId()||this.jobId;this.jobIdValue=n,this.showBackButton();const l=(a=window.i18n)==null?void 0:a.loader;l?l.then(()=>{this.loadJob()}):this.loadJob()},showBackButton(){document.referrer.indexOf(document.location.host)!==-1&&(this.hasBack=!0)},loadJob(){var t;this.loadLocalJobData(),(t=this.api)==null||t.getOpening(this.jobIdValue).then(e=>e.json()).then(e=>{this.handleJob(e)}).catch(e=>{console.error("Job-list Error:",e)})},handleCta(){var t;q.open((t=this.$refs["modal-component"])==null?void 0:t.modal)},handleJob(t){T.sleep(this.sleepDelay).then(()=>{const e=t.objects?t.objects[0]:t;if(e){const n=this.$t("gender"),{title:l,description:a}=e,o={description:a,title:l,gender:n};this.hideLoading=!0,this.update(o)}else console.error("handleJob has no entry")})},stopLoading(){setTimeout(()=>{this.loading.off(!0,!0),this.hasLoading=!1},this.loadingDelay)},update(t){this.entryData=t,this.stopLoading()},loadLocalJobData(){const t=`${this.api.jobDataUrl}${this.jobIdValue}.json`;return this.addCustomStyle(),fetch(t,{method:"GET",headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{if(e.videoInner)return this.videoInner=e.videoInner;this.personQuote=e.personQuote}).catch(e=>{console.error("Job-list-Detail Local Job Data Error:",e)})},addCustomStyle(){var e;const t=document.createElement("style");t.id=this.getUuid,(e=document.getElementById(this.getUuid))==null||e.remove(),t.innerHTML=`
        .show-in-${this.jobIdValue}.d-none {
          display: block !important;
        }
      `,document.head.appendChild(t)}},props:{detailColor:String,clientName:String,jobId:String,apiUrl:String,headlineLevel:String,headlineClasses:String,ctaText:String,ctaButton:Boolean,form:Object,googleMaps:Object,modalSuccess:Object,modalError:Object,apiKey:String,mockApplyUrl:String,mockDocumentsUrl:String,lang:String}},V=["id","jobId","apiUrl"],K={class:"job-list__detail-container page-detail__container container"},F={class:"job-list__detail-start page-detail__start row"},G={class:"job-list__sticky-start page-detail__sticky-start col-md-11 col-lg-5"},Q={class:"job-list__detail-intro page-detail__intro js-sticky-block","data-hs-sticky-block-options":`{
                "parentSelector": ".job-list__sticky-start",
                "breakpoint": "lg",
                "startPoint": ".job-list__sticky-start",
                "endPoint": ".job-list__sticky-end",
                "stickyOffsetTop": 200,
                "stickyOffsetBottom": 20
              }`},W={class:"job-list__detail-back page-detail__back page-detail__animation-3 back back--animated"},H={class:"job-list__detail-gender"},P={class:"job-list__detail-cta"},R={class:"job-list__detail-content page-detail__content page-detail__animation-3 col-md-11 offset-lg-1 col-lg-6"},Y=["innerHTML"],X={key:1,class:"job-list__detail-quote"};function Z(t,e,n,l,a,o){var d,m,u;const k=S,j=D,x=U,w=E,v=O("person-quote"),L=B;return c(),h("div",{class:J(o.classList),style:A(o.style),id:n.clientName,jobId:a.jobIdValue,apiUrl:n.apiUrl,ref:"job-list-detail"},[i("div",K,[i("div",F,[i("div",G,[i("div",Q,[i("div",W,[s(k,{icon:"arrow",direction:"left",hover:"true",circle:"true"})]),s(j,{text:(d=a.entryData)==null?void 0:d.title,level:o.headlineLevelValue,classes:o.headlineClassList},null,8,["text","level","classes"]),i("span",H,I((m=a.entryData)==null?void 0:m.gender),1),e[0]||(e[0]=i("div",{class:"job-list__detail-share"},null,-1)),i("div",P,[s(x,{text:n.ctaText,button:n.ctaButton,onClick:o.handleCta},null,8,["text","button","onClick"])])])]),i("div",R,[i("div",{class:"job-list__detail-description page-detail__description has-no-border richtext",innerHTML:(u=a.entryData)==null?void 0:u.description},null,8,Y),a.videoInner?(c(),N(w,{key:0,variant:"reversed",video:a.videoInner.video},null,8,["video"])):p("",!0),a.personQuote?(c(),h("div",X,[s(v,{img:a.personQuote.img,text:a.personQuote.text,name:a.personQuote.name},null,8,["img","text","name"])])):p("",!0)])])]),e[1]||(e[1]=i("div",{class:"job-list__sticky-end"},null,-1)),s(L,{ref:"modal-component",clientName:n.clientName,apiUrl:n.apiUrl,jobId:a.jobIdValue,apiKey:n.apiKey,mockApplyUrl:n.mockApplyUrl,mockDocumentsUrl:n.mockDocumentsUrl,error:n.modalError,success:n.modalSuccess,form:n.form,application:!0},null,8,["clientName","apiUrl","jobId","apiKey","mockApplyUrl","mockDocumentsUrl","error","success","form"])],14,V)}const $=C(f,[["render",Z]]);f.__docgenInfo={exportName:"default",displayName:"job-list-detail",description:"",tags:{},props:[{name:"detailColor",type:{name:"string"}},{name:"clientName",type:{name:"string"}},{name:"jobId",type:{name:"string"}},{name:"apiUrl",type:{name:"string"}},{name:"headlineLevel",type:{name:"string"}},{name:"headlineClasses",type:{name:"string"}},{name:"ctaText",type:{name:"string"}},{name:"ctaButton",type:{name:"boolean"}},{name:"form",type:{name:"object"}},{name:"googleMaps",type:{name:"object"}},{name:"modalSuccess",type:{name:"object"}},{name:"modalError",type:{name:"object"}},{name:"apiKey",type:{name:"string"}},{name:"mockApplyUrl",type:{name:"string"}},{name:"mockDocumentsUrl",type:{name:"string"}},{name:"lang",type:{name:"string"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/job-list-detail.vue"]};const be={title:"Components/JobListDetail",component:$},r={args:{lang:"de",ctaText:"Jetzt bewerben",detailColor:"--color-job-list-detail",clientName:"c4a8",jobId:"",apiUrl:"",ctaButton:!0,form:{headline:"Jetzt bewerben",cta:{skin:"primary",width:"w-100 w-lg-30"},ctaText:"Bewerbung absenden",method:"post",action:"",fields:[{label:"Vorname",type:"text",col:6,rowStart:!0,required:!0,id:"firstName"},{label:"Nachname",type:"text",col:6,rowEnd:!0,required:!0,id:"lastName"},{label:"E-Mail Adresse",type:"email",col:6,rowStart:!0,required:!0,id:"email"},{label:"Telefon",type:"text",col:6,rowEnd:!0,required:!0,id:"phone"},{label:"Kündigungsfrist (optional)",type:"text",col:6,rowStart:!0,id:"cancellation"},{label:"Gehaltsvorstellung (optional)",type:"text",col:6,rowEnd:!0,id:"salary"},{label:"Nachricht (optional)",type:"textarea",id:"message"},{type:"file",col:12,rowStart:!0,rowEnd:!0,formAttachments:{required:!0,requiredMsg:"Bitte einen Anhang hinzufügen",id:"file",description:"Anhänge wie Lebenslauf und Anschreiben hinzufügen",text:"Oder Dateien auswählen",extensions:["pdf"],maxSize:2e7}},{label:"<small>Lorem ipsum dolor sit amet, consectetur adipiscing elit <a href='javascript:void()'>Lorem Ipsum</a>. Sit amet consectetur adipiscing elit.</small>",type:"checkbox",id:"privacy",required:!0}]},headlineLevel:"",headlineClasses:"",gender:"",googleMaps:null,apiKey:"4254caca2f454e9887552ac9012fac13",mockApplyUrl:"",mockDocumentsUrl:"",modalSuccess:{cta:{skin:"primary",width:"w-100 w-lg-30",text:"Schließen"},headline:{text:"Yeah, danke für deine Bewerbung, "},subline:"Wir freuen uns, dass du uns deine Unterlagen geschickt hast und haben dir zur Bestätigung eine Mail geschickt. Wir schauen uns deine Bewerbung jetzt in Ruhe an und melden uns bei dir innerhalb einer Woche. Großes glueckkanja Ehrenwort!"},modalError:{cta:{skin:"primary",width:"w-100 w-lg-30",text:"Schließen"},headline:{text:"Ooops!"},subline:"Etwas ist schief gelaufen!",text:"Bitte versuche es später noch einmal oder kontaktiere uns unter:",mail:"info@glueckkanja.de",phone:"+49 69 4005520"}}};var b,_,y;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(y=(_=r.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};const _e=["jobListDetail"];export{_e as __namedExportsOrder,be as default,r as jobListDetail};
