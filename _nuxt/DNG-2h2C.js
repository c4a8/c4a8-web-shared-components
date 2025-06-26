import{_ as p}from"./zz1nX9cR.js";import{A as s}from"./hvE8DdO1.js";import"./D2E9H4tO.js";const k={component:p,argTypes:{authors:{description:"List of Authors",type:"array"},noLink:{description:"Authors won't act as Link",type:"boolean"},dataLang:{},dataAuthors:{},lang:{description:"Sets the language",type:"string"}},title:"Components/Authors"},t={args:{authorsList:["Author Name","Second Name"],dataAuthors:s}},r={args:{authorsList:["Author Name","Second Author"],noLink:!0,dataAuthors:s}},o={args:{authorsList:"Author",noLink:!0,dataAuthors:s}};var a,e,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    authorsList: ['Author Name', 'Second Name'],
    dataAuthors: Authors
  }
}`,...(n=(e=t.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};var u,i,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    authorsList: ['Author Name', 'Second Author'],
    noLink: true,
    dataAuthors: Authors
  }
}`,...(h=(i=r.parameters)==null?void 0:i.docs)==null?void 0:h.source}}};var c,m,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    authorsList: 'Author',
    noLink: true,
    dataAuthors: Authors
  }
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const l=["WithLink","WithoutLink","SingleName"];export{o as SingleName,t as WithLink,r as WithoutLink,l as __namedExportsOrder,k as default};
