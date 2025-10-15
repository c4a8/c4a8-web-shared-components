import{_ as S}from"./Bik103Ho.js";import{_ as O}from"./CiEyICWK.js";import{_ as E}from"./cE7kaSOe.js";import{_ as R}from"./C4hTekg0.js";import{U as q}from"./BGWpmB-Z.js";import{_ as F,c as a,b as o,a as n,f as c,d as P,F as g,r as y,o as t,n as h,e as l,t as d}from"./DbuLZWCj.js";import"./VzEZu9cs.js";import"./DQIej4gr.js";const w={props:{productBlocks:Object,headline:String},computed:{backgroundColorStyle(){return{backgroundColor:this.productBlocks.bgColor}}},methods:{animationStyle(p){return{"--utility-animation-index":p}}},mounted(){this.$refs.root&&q.init([this.$refs.root])}},M={class:"container space-2"},H={class:"row"},B={class:"product-blocks__content"},W={key:0},G={key:1},Y={key:2,class:"dashed"},V={class:"product-blocks__buttons"};function L(p,j,s,J,U,u){const x=S,A=O,T=E,z=R;return t(),a("div",{class:"product-blocks utility-animation container-fluid",style:c(u.backgroundColorStyle),ref:"root"},[o("div",M,[s.headline?(t(),a("div",{key:0,class:"container pb-4 pb-lg-6 fade-in-bottom","data-utility-animation-step":"1",style:c(u.animationStyle(1))},[P(x,{text:s.headline,centered:!0},null,8,["text"])],4)):n("",!0),o("div",H,[(t(!0),a(g,null,y(s.productBlocks.items,(e,m)=>(t(),a("div",{key:m,class:"product-blocks__item col-md-6 mb-5 mb-md-0 space-1 fade-in-bottom","data-utility-animation-step":"1",style:c(u.animationStyle(m+1))},[o("div",{class:h(["product-blocks__block",{"text-center":e.copy===""},"pl-lg-3 pr-lg-8"])},[o("div",B,[o("figure",{class:h(["product-blocks__img",{"mx-auto":e.copy===""},"mb-4"])},[e.image?(t(),l(A,{key:0,img:e.image,cloudinary:e.cloudinary,alt:e.alt},null,8,["img","cloudinary","alt"])):n("",!0)],2),e.headline?(t(),a("h3",W,d(e.headline),1)):n("",!0),e.copy?(t(),a("p",G,d(e.copy),1)):n("",!0),e.bulletList?(t(),a("ul",Y,[(t(!0),a(g,null,y(e.bulletList,(I,D)=>(t(),a("li",{key:D},d(I),1))),128))])):n("",!0)]),o("div",V,[e.list?(t(),l(T,{key:0,list:e.list},null,8,["list"])):e.ctaText?(t(),l(z,{key:1,text:e.ctaText,href:e.ctaHref,link:e.link,target:e.target,type:e.type},null,8,["text","href","link","target","type"])):n("",!0)])],2)],4))),128))])])],4)}const N=F(w,[["render",L]]);w.__docgenInfo={exportName:"default",displayName:"product-blocks",description:"",tags:{},props:[{name:"productBlocks",type:{name:"object"}},{name:"headline",type:{name:"string"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/product-blocks.vue"]};const oe={title:"Components/Product Blocks",component:N},r={args:{productBlocks:{items:[{image:"https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-AzERE.png",headline:"Ready for The Day After It Actually Happens?",copy:"AzERE, the Azure Emergency Response Environment, is your line of defense against IT disasters. It creates a secure environment for the fast recovery of your mission-critical services. With a deployment and infrastructure that are fully automated and based on Infrastructure as Code, AzERE ensures that your organization remains resilient in the face of emergencies."},{image:"https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-AzureFoundation.png",headline:"Cloud Strategy as Fast as Your Coffee Intake",copy:"Imagine being able to automatically and flawlessly roll out your cloud environments with predefined standards, easily meet your compliance requirements, and benefit from the flexibility and scalability of the cloud - all while keeping costs under control. Azure Foundation makes this possible by creating a solid foundation for your cloud strategy that optimizes security, compliance and performance."},{image:"https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-AVDFoundation.png",headline:"Say Goodbye to Tech Headaches",copy:"Our AVD Foundation harnesses cutting-edge best practices and Infrastructure as Code (IaC) to deliver swift deployment perfectly tailored to your unique requirements. Armed with over 1,000 pre-configured software packages via RealmJoin and seamlessly integrated with Entra ID and Intune, we present a platform thats not just powerful, but supremely adaptable."},{image:"https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-AMM.png",headline:"Cloud Chaos? Will AMM Be Your Azure GPS?",copy:"AMM provides a comprehensive solution assessment, facilitating rapid migration by analyzing your entire IT infrastructure—both physical and virtual. This assessment considers your plans, current deployment, usage, processes, and data, ensuring a tailored approach to migration."},{image:"https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-CloudCompetenceCenter.png",headline:"Your Cloud's New Brain Trust!",copy:"Why establish a Cloud Competence Center? In today's rapidly evolving digital landscape, staying ahead requires constant adoption. Our Cloud Competence Center as a Service provides expert guidance and methodologies for your cloud initiatives, helping you overcome common obstacles and harness the full power of cloud computing"},{image:"https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-CSOC.png",headline:"Safe, or Playing Security Roulette?",copy:"Located in Germany, our Cloud Security Operations Center (CSOC), offers a fortress of digital security, 24/7. Merging Microsoft's cutting-edge technology with the finesse of human expertise, we deliver unmatched vigilance for your IT infrastructure. Trust in our certified engineers to shield every aspect of your enterprise, from OnPrem to Cloud to OT/IoT, with unparalleled precision. Discover our standardized cybersecurity solution, where technology meets expert craftsmanship."}],cloudinary:!0}}},i={args:{productBlocks:{items:[{image:"https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-AzERE.png",headline:"Ready for The Day After It Actually Happens?",copy:"AzERE, the Azure Emergency Response Environment, is your line of defense against IT disasters. It creates a secure environment for the fast recovery of your mission-critical services. With a deployment and infrastructure that are fully automated and based on Infrastructure as Code, AzERE ensures that your organization remains resilient in the face of emergencies.",list:[{ctaText:"Read more",ctaHref:"/azure/azure-emergency-response-environment",link:!0},{ctaText:"Download PDF",ctaHref:"/documents/onepager/gk-OnePager-AzERE.pdf",link:!0}]},{image:"https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-AzureFoundation.png",headline:"Cloud Strategy as Fast as Your Coffee Intake",copy:"Imagine being able to automatically and flawlessly roll out your cloud environments with predefined standards, easily meet your compliance requirements, and benefit from the flexibility and scalability of the cloud - all while keeping costs under control. Azure Foundation makes this possible by creating a solid foundation for your cloud strategy that optimizes security, compliance and performance.",list:[{ctaText:"Read more",ctaHref:"/azure/azure-foundation",link:!0},{ctaText:"Download PDF",ctaHref:"/documents/onepager/gk-OnePager-AzureFoundation.pdf",link:!0}]},{image:"https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-AVDFoundation.png",headline:"Say Goodbye to Tech Headaches",copy:"Our AVD Foundation harnesses cutting-edge best practices and Infrastructure as Code (IaC) to deliver swift deployment perfectly tailored to your unique requirements. Armed with over 1,000 pre-configured software packages via RealmJoin and seamlessly integrated with Entra ID and Intune, we present a platform thats not just powerful, but supremely adaptable.",list:[{ctaText:"Read more",ctaHref:"/azure/avd-foundation",link:!0},{ctaText:"Download PDF",ctaHref:"/documents/onepager/gk-OnePager-AvDFoundation.pdf",link:!0,skin:"secondary"}]},{image:"https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-AMM.png",headline:"Cloud Chaos? Will AMM Be Your Azure GPS?",copy:"AMM provides a comprehensive solution assessment, facilitating rapid migration by analyzing your entire IT infrastructure—both physical and virtual. This assessment considers your plans, current deployment, usage, processes, and data, ensuring a tailored approach to migration.",list:[{ctaText:"Read more",ctaHref:"https://www.glueckkanja.com/",link:!0},{ctaText:"Download PDF",ctaHref:"/documents/onepager/gk-OnePager-AMM.pdf",link:!0,skin:"secondary"}]},{image:"https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-CloudCompetenceCenter.png",headline:"Your Cloud's New Brain Trust!",copy:"Why establish a Cloud Competence Center? In today's rapidly evolving digital landscape, staying ahead requires constant adoption. Our Cloud Competence Center as a Service provides expert guidance and methodologies for your cloud initiatives, helping you overcome common obstacles and harness the full power of cloud computing",list:[{ctaText:"Read more",ctaHref:"/azure/cloud-competence-center",link:!0},{ctaText:"Download PDF",ctaHref:"/documents/onepager/gk-OnePager-CloudCompetenceCenter.pdf",link:!0,skin:"secondary"}]},{image:"https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-CSOC.png",headline:"Safe, or Playing Security Roulette?",copy:"Located in Germany, our Cloud Security Operations Center (CSOC), offers a fortress of digital security, 24/7. Merging Microsoft's cutting-edge technology with the finesse of human expertise, we deliver unmatched vigilance for your IT infrastructure. Trust in our certified engineers to shield every aspect of your enterprise, from OnPrem to Cloud to OT/IoT, with unparalleled precision. Discover our standardized cybersecurity solution, where technology meets expert craftsmanship.",list:[{ctaText:"Read more",ctaHref:"/security/cloud-security-operations-center",link:!0},{ctaText:"Download PDF",ctaHref:"/documents/onepager/gk-OnePager-CSOC.pdf",link:!0,skin:"secondary"}]}],cloudinary:!0}}};var f,b,C;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    productBlocks: {
      items: [{
        image: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-AzERE.png',
        headline: 'Ready for The Day After It Actually Happens?',
        copy: 'AzERE, the Azure Emergency Response Environment, is your line of defense against IT disasters. It creates a secure environment for the fast recovery of your mission-critical services. With a deployment and infrastructure that are fully automated and based on Infrastructure as Code, AzERE ensures that your organization remains resilient in the face of emergencies.'
      }, {
        image: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-AzureFoundation.png',
        headline: 'Cloud Strategy as Fast as Your Coffee Intake',
        copy: 'Imagine being able to automatically and flawlessly roll out your cloud environments with predefined standards, easily meet your compliance requirements, and benefit from the flexibility and scalability of the cloud - all while keeping costs under control. Azure Foundation makes this possible by creating a solid foundation for your cloud strategy that optimizes security, compliance and performance.'
      }, {
        image: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-AVDFoundation.png',
        headline: 'Say Goodbye to Tech Headaches',
        copy: 'Our AVD Foundation harnesses cutting-edge best practices and Infrastructure as Code (IaC) to deliver swift deployment perfectly tailored to your unique requirements. Armed with over 1,000 pre-configured software packages via RealmJoin and seamlessly integrated with Entra ID and Intune, we present a platform thats not just powerful, but supremely adaptable.'
      }, {
        image: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-AMM.png',
        headline: 'Cloud Chaos? Will AMM Be Your Azure GPS?',
        copy: 'AMM provides a comprehensive solution assessment, facilitating rapid migration by analyzing your entire IT infrastructure—both physical and virtual. This assessment considers your plans, current deployment, usage, processes, and data, ensuring a tailored approach to migration.'
      }, {
        image: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-CloudCompetenceCenter.png',
        headline: "Your Cloud's New Brain Trust!",
        copy: "Why establish a Cloud Competence Center? In today's rapidly evolving digital landscape, staying ahead requires constant adoption. Our Cloud Competence Center as a Service provides expert guidance and methodologies for your cloud initiatives, helping you overcome common obstacles and harness the full power of cloud computing"
      }, {
        image: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-CSOC.png',
        headline: "Safe, or Playing Security Roulette?",
        copy: "Located in Germany, our Cloud Security Operations Center (CSOC), offers a fortress of digital security, 24/7. Merging Microsoft's cutting-edge technology with the finesse of human expertise, we deliver unmatched vigilance for your IT infrastructure. Trust in our certified engineers to shield every aspect of your enterprise, from OnPrem to Cloud to OT/IoT, with unparalleled precision. Discover our standardized cybersecurity solution, where technology meets expert craftsmanship."
      }],
      cloudinary: true
    }
  }
}`,...(C=(b=r.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var k,v,_;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    productBlocks: {
      items: [{
        image: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-AzERE.png',
        headline: 'Ready for The Day After It Actually Happens?',
        copy: 'AzERE, the Azure Emergency Response Environment, is your line of defense against IT disasters. It creates a secure environment for the fast recovery of your mission-critical services. With a deployment and infrastructure that are fully automated and based on Infrastructure as Code, AzERE ensures that your organization remains resilient in the face of emergencies.',
        list: [{
          ctaText: 'Read more',
          ctaHref: '/azure/azure-emergency-response-environment',
          link: true
        }, {
          ctaText: 'Download PDF',
          ctaHref: '/documents/onepager/gk-OnePager-AzERE.pdf',
          link: true
        }]
      }, {
        image: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-AzureFoundation.png',
        headline: 'Cloud Strategy as Fast as Your Coffee Intake',
        copy: 'Imagine being able to automatically and flawlessly roll out your cloud environments with predefined standards, easily meet your compliance requirements, and benefit from the flexibility and scalability of the cloud - all while keeping costs under control. Azure Foundation makes this possible by creating a solid foundation for your cloud strategy that optimizes security, compliance and performance.',
        list: [{
          ctaText: 'Read more',
          ctaHref: '/azure/azure-foundation',
          link: true
        }, {
          ctaText: 'Download PDF',
          ctaHref: '/documents/onepager/gk-OnePager-AzureFoundation.pdf',
          link: true
        }]
      }, {
        image: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-AVDFoundation.png',
        headline: 'Say Goodbye to Tech Headaches',
        copy: 'Our AVD Foundation harnesses cutting-edge best practices and Infrastructure as Code (IaC) to deliver swift deployment perfectly tailored to your unique requirements. Armed with over 1,000 pre-configured software packages via RealmJoin and seamlessly integrated with Entra ID and Intune, we present a platform thats not just powerful, but supremely adaptable.',
        list: [{
          ctaText: 'Read more',
          ctaHref: '/azure/avd-foundation',
          link: true
        }, {
          ctaText: 'Download PDF',
          ctaHref: '/documents/onepager/gk-OnePager-AvDFoundation.pdf',
          link: true,
          skin: 'secondary'
        }]
      }, {
        image: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-AMM.png',
        headline: 'Cloud Chaos? Will AMM Be Your Azure GPS?',
        copy: 'AMM provides a comprehensive solution assessment, facilitating rapid migration by analyzing your entire IT infrastructure—both physical and virtual. This assessment considers your plans, current deployment, usage, processes, and data, ensuring a tailored approach to migration.',
        list: [{
          ctaText: 'Read more',
          ctaHref: 'https://www.glueckkanja.com/',
          link: true
        }, {
          ctaText: 'Download PDF',
          ctaHref: '/documents/onepager/gk-OnePager-AMM.pdf',
          link: true,
          skin: 'secondary'
        }]
      }, {
        image: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-CloudCompetenceCenter.png',
        headline: "Your Cloud's New Brain Trust!",
        copy: "Why establish a Cloud Competence Center? In today's rapidly evolving digital landscape, staying ahead requires constant adoption. Our Cloud Competence Center as a Service provides expert guidance and methodologies for your cloud initiatives, helping you overcome common obstacles and harness the full power of cloud computing",
        list: [{
          ctaText: 'Read more',
          ctaHref: '/azure/cloud-competence-center',
          link: true
        }, {
          ctaText: 'Download PDF',
          ctaHref: '/documents/onepager/gk-OnePager-CloudCompetenceCenter.pdf',
          link: true,
          skin: 'secondary'
        }]
      }, {
        image: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-CSOC.png',
        headline: "Safe, or Playing Security Roulette?",
        copy: "Located in Germany, our Cloud Security Operations Center (CSOC), offers a fortress of digital security, 24/7. Merging Microsoft's cutting-edge technology with the finesse of human expertise, we deliver unmatched vigilance for your IT infrastructure. Trust in our certified engineers to shield every aspect of your enterprise, from OnPrem to Cloud to OT/IoT, with unparalleled precision. Discover our standardized cybersecurity solution, where technology meets expert craftsmanship.",
        list: [{
          ctaText: 'Read more',
          ctaHref: '/security/cloud-security-operations-center',
          link: true
        }, {
          ctaText: 'Download PDF',
          ctaHref: '/documents/onepager/gk-OnePager-CSOC.pdf',
          link: true,
          skin: 'secondary'
        }]
      }],
      cloudinary: true
    }
  }
}`,...(_=(v=i.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};const ne=["Default","WithLinks"];export{r as Default,i as WithLinks,ne as __namedExportsOrder,oe as default};
