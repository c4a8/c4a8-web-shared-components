import{_ as d}from"./By5AAY1x.js";import{V as t}from"./D9-rULM2.js";import{_ as g}from"./vTxTPXtK.js";import{_ as h}from"./DQ9oNz1j.js";import{I as f}from"./B-ZEPH66.js";import{V as _}from"./guFrka2j.js";import{_ as b}from"./w-aop2PH.js";import{_ as v}from"./B5P0jn_R.js";import{H as s}from"./CbABglIS.js";import"./C7Ix_DiM.js";import"./YnR-nSjt.js";import"./CGb7orug.js";import"./f7cXC5CZ.js";import"./CsbSeCQ_.js";import"./D-fIcqtg.js";import"./BDTth2XY.js";import"./0PQL0aeX.js";import"./Col4g_4y.js";import"./zZar5o81.js";import"./PJUhUj38.js";import"./D4zJZDca.js";import"./CKE67oSH.js";import"./3iP2KpB8.js";const O={component:t,title:"Pages/Casestudy",parameters:{isPage:!0,layout:"fullscreen"},decorators:[(c,l)=>({components:{story:c,PageDefault:d,VHeader:t,VFooter:_,Content:g,Hero:h,IntroText:f,FabHint:b,BackToTop:v},setup(){return{args:l.args}},template:`
        <PageDefault v-bind="args.page">
          <v-header v-bind="args.header" />
          <Content>
            <Hero :hero="args.hero" />
            <FabHint v-bind="args.fabHint" />
            <BackToTop v-if="args.page.hasBackToTop" />
            <IntroText v-bind="args.introText" />
            <div style="height: 200vh;" class="dummy-content"></div>
          </Content>
          <v-footer v-bind="args.footer" />
        </PageDefault>
      `})]},u={page:{hasFabHint:!0},header:{home:s.home,navigation:s.navigation,theme:"gk"},footer:{lang:"de",noMargin:!0},hero:{variant:"hero--study",back:!0,headline:"Azure @DEKRA",subline:'<span class="highlight">Effiziente Umsetzung</span> der DEKRA Cloud First Journey mit DevOps und Infrastructure as Code (IaC)',DISABLEDbackground:{img:"/casestudies/casestudy-dekra-v2.png",alt:"DEKRA Casestudy",spacing:"space-top-lg-4"},shape:{img:"/casestudies/casestudy-dekra-v2.png",alt:"DEKRA Casestudy",cloudinary:!0,bottom:!0},bgColor:"#24a1fa",bgWidth:70},fabHint:{text:'Slider: © lorem; Kacheln: 1: © lorem; 2: © Author - example.com - 123456789; 3: © Author - example.com - 123456789; 4: © example.com; CTA Jobs: © Author - example.com - 123456789; Kacheln: 1: © <a href="https://www.example.com/">https://www.example.com/</a>; 2: © lorem; 3: © <a href="https://www.example.com/">https://www.example.com/</a>; CTA: © Author - example.com - 123456789'},introText:{headline:"Headline Lorem ipsum",copy:'<strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing elit. <span class="highlight">Vivamus facilisis</span> urna eu <span class="highlight">placerat malesuada</span>. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.<br><br>Praesent cursus, nulla ut <span class="highlight">dictum pharetra</span>, risus orci finibus felis, nec <span class="highlight">rhoncus urna</span> turpis nec augue. In hac habitasse platea dictumst. <strong>Lorem ipsum dolor</strong> sit amet, consectetur adipiscing elit. Proin hendrerit, urna non euismod tincidunt, velit nunc gravida enim, at <span class="highlight">tempus eros</span> nulla eu erat.'}},e={args:{...u}},a={args:{...u,page:{hasBackToTop:!0,hasFabHint:!0}}};var r,o,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    ...caseStudyData
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var i,m,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...caseStudyData,
    page: {
      hasBackToTop: true,
      hasFabHint: true
    }
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const M=["Casestudy","CasestudyWithBack"];export{e as Casestudy,a as CasestudyWithBack,M as __namedExportsOrder,O as default};
