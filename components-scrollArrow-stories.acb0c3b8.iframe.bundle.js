"use strict";(self.webpackChunkshared_components=self.webpackChunkshared_components||[]).push([[3514],{"./stories/components/scrollArrow.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ScrollArrow:()=>ScrollArrow,ScrollArrowSpacing:()=>ScrollArrowSpacing,__namedExportsOrder:()=>__namedExportsOrder,default:()=>scrollArrow_stories});var templates=__webpack_require__("./.storybook/templates.js");const scrollArrow_stories={title:"Components/Scroll Arrow"};var Template=function Template(args){return(0,templates.a0)(args,'<div style="height: 50vh"></div>\n\n{%\n  include scroll-arrow.html\n%}\n\n<div style="height: 200vh;">\n\n</div>\n<div class="contact">contact</div>\n<div style="height: 150vh"></div>\n')},ScrollArrow=Template.bind({});ScrollArrow.args={target:".contact"};var ScrollArrowSpacing=Template.bind({});ScrollArrowSpacing.args={target:".contact",spacing:"mt-n10"},ScrollArrow.parameters={...ScrollArrow.parameters,docs:{...ScrollArrow.parameters?.docs,source:{originalSource:"args => createComponent(args, scrollArrowTemplate)",...ScrollArrow.parameters?.docs?.source}}},ScrollArrowSpacing.parameters={...ScrollArrowSpacing.parameters,docs:{...ScrollArrowSpacing.parameters?.docs,source:{originalSource:"args => createComponent(args, scrollArrowTemplate)",...ScrollArrowSpacing.parameters?.docs?.source}}};const __namedExportsOrder=["ScrollArrow","ScrollArrowSpacing"]}}]);