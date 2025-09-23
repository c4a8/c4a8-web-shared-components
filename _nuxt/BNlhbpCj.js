import{_ as g}from"./BWZzJUQh.js";import{_ as m,c as o,b as a,a as s,F as f,r as _,o as r,d as h,t as i}from"./r-Dn8VN5.js";const d={tagName:"portfolio",props:{items:Array}},y={class:"container space-2"},A={display:"flex",class:"portfolio-items"},z={class:"portfolio-single",style:{width:"378px",left:"0px",top:"0px"}},w=["href"],k={class:"overflow-hidden"},x={class:"portfolio-img",style:{transition:"transform .2s"}},b={class:"p-4"},v={key:0,class:"d-block small text-body font-weight-bold text-cap"},P={key:1,class:"d-block h3 mb-0"};function O(S,j,n,B,C,F){const u=g;return r(),o("div",y,[a("div",A,[n.items?(r(!0),o(f,{key:0},_(n.items,e=>(r(),o("div",z,[e.href?(r(),o("a",{key:0,href:e.href},[a("div",k,[a("div",x,[h(u,{img:e.image,cloudinary:e.cloudinary,alt:e.alt},null,8,["img","cloudinary","alt"])])]),a("div",b,[e.overline?(r(),o("span",v,i(e.overline),1)):s("",!0),e.headline?(r(),o("span",P,i(e.headline),1)):s("",!0)])],8,w)):s("",!0)]))),256)):s("",!0)])])}const N=m(d,[["render",O]]);d.__docgenInfo={exportName:"default",displayName:"portfolio",description:"",tags:{},props:[{name:"items",type:{name:"array"}}],sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/portfolio.vue"]};const $={title:"Components/Portfolio",component:N,argTypes:{}},t={args:{items:[{image:"/azure/one-pager-AzureAwareness.jpg",alt:"Azure Awareness",cloudinary:!0,href:"/documents/onepager/gkgab-AzureAwarenessOnePager.pdf"},{image:"/azure/one-pager-AzureStrategy.jpg",alt:"Azure Awareness",cloudinary:!0,href:"/documents/onepager/gkgab-AzureOfferingStrategyOnePager.pdf"}]}};var c,l,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    items: [{
      image: "/azure/one-pager-AzureAwareness.jpg",
      alt: "Azure Awareness",
      cloudinary: true,
      href: "/documents/onepager/gkgab-AzureAwarenessOnePager.pdf"
    }, {
      image: "/azure/one-pager-AzureStrategy.jpg",
      alt: "Azure Awareness",
      cloudinary: true,
      href: "/documents/onepager/gkgab-AzureOfferingStrategyOnePager.pdf"
    }]
  }
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const D=["Portfolio"];export{t as Portfolio,D as __namedExportsOrder,$ as default};
