import{i as s,u as _,j as q,c as x,b as u,t as d,n as B,o as h}from"./BLzLulwC.js";const y={class:"code-block"},c={__name:"code-block",setup(S){const l=s(null),t=s(!1),r=_(),v=q(()=>{var o,n;const e=(n=(o=r.default)==null?void 0:o.call(r)[0])==null?void 0:n.children;return typeof e=="string"?e.trim():e});function g(){var o;const e=((o=l.value)==null?void 0:o.innerText)??"";navigator.clipboard.writeText(e).then(()=>{t.value=!0}).catch(n=>{console.debug(n)}),setTimeout(()=>{t.value=!1},2e3)}return(e,o)=>(h(),x("div",y,[u("button",{class:B(["code-block__copy",{"code-block__copy--copied":t.value}]),onClick:g},d(t.value?"Copied!":"Copy"),3),u("code",{ref_key:"codeRef",ref:l,class:"code-block__code"},d(v.value),513)]))}};c.__docgenInfo={exportName:"default",displayName:"code-block",description:"",tags:{},sourceFiles:["/home/runner/work/c4a8-web-shared-components/c4a8-web-shared-components/nuxt/components/code-block.vue"]};const E={component:c,title:"Components/Code Block"},i={render:()=>({components:{CodeBlockComponent:c},template:`
      <CodeBlockComponent>
        javascript:void(0); console.log('Hello World');
      </CodeBlockComponent>
    `})},a={render:()=>({components:{CodeBlockComponent:c},template:`
      <CodeBlockComponent>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </CodeBlockComponent>
    `})};var m,p,C;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CodeBlockComponent
    },
    template: \`
      <CodeBlockComponent>
        javascript:void(0); console.log('Hello World');
      </CodeBlockComponent>
    \`
  })
}`,...(C=(p=i.parameters)==null?void 0:p.docs)==null?void 0:C.source}}};var f,k,b;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CodeBlockComponent
    },
    template: \`
      <CodeBlockComponent>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </CodeBlockComponent>
    \`
  })
}`,...(b=(k=a.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};const L=["Default","MultiLine"];export{i as Default,a as MultiLine,L as __namedExportsOrder,E as default};
