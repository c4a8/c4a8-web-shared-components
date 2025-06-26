const g={"font-size-base":"1rem","font-size-sm":"0.85rem","font-size-xs":"0.7565rem","font-size-lg":"1.5rem","font-size-1-xl":"1rem","font-size-1-lg":"1rem","font-size-1-sm":"1rem","font-size-1-line-height-xl":"1.6","font-size-1-line-height-lg":"1.6","font-size-1-line-height-sm":"1.6","font-size-2-xl":"1.25rem","font-size-2-lg":"1.25rem","font-size-2-sm":"1.125rem","font-size-2-line-height-xl":"1.7em","font-size-2-line-height-lg":"1.7em","font-size-2-line-height-sm":"1.6667em","font-size-3-xl":"1.5625rem","font-size-3-lg":"1.25rem","font-size-3-sm":"1.25rem","font-size-3-line-height-xl":"1.6em","font-size-3-line-height-lg":"1.6em","font-size-3-line-height-sm":"1.6em","font-size-4-xl":"1.95313rem","font-size-4-lg":"1.5625rem","font-size-4-sm":"1.375rem","font-size-4-line-height-xl":"1.7em","font-size-4-line-height-lg":"1.7em","font-size-4-line-height-sm":"1.6365em","font-size-5-xl":"3rem","font-size-5-lg":"2.5rem","font-size-5-sm":"2rem","font-size-5-line-height-xl":"1.6","font-size-5-line-height-lg":"1.6","font-size-5-line-height-sm":"1.6","font-size-6-xl":"6rem","font-size-6-lg":"5rem","font-size-6-sm":"4rem","font-size-6-line-height-xl":"1.1em","font-size-6-line-height-lg":"1.1em","font-size-6-line-height-sm":"1.1em","font-size-7-xl":"12.2070375rem","font-size-7-lg":"10.742193rem","font-size-7-sm":"9.76563rem","font-size-7-line-height-xl":"8rem","font-size-7-line-height-lg":"12rem","font-size-7-line-height-sm":"8rem","font-size-8-xl":"0.875rem","font-size-8-lg":"0.875rem","font-size-8-sm":"0.875rem","font-size-8-line-height-xl":"1.6","font-size-8-line-height-lg":"1.6","font-size-8-line-height-sm":"1.6","h1-font-size-xl":"5rem","h1-font-size-lg":"calc(5rem / 1.3)","h1-font-size-sm":"calc(5rem / 1.8)","h1-line-height-xl":"1.225em","h1-line-height-lg":"1.225em","h1-line-height-sm":"1.305em","h2-font-size-xl":"3.75rem","h2-font-size-lg":"calc(3.75rem / 1.3)","h2-font-size-sm":"calc(3.75rem / 1.8)","h2-line-height-xl":"1.2em","h2-line-height-lg":"1.2em","h2-line-height-sm":"1.2em","h3-font-size-xl":"2.5rem","h3-font-size-lg":"calc(2.5rem / 1.3)","h3-font-size-sm":"1.625rem","h3-line-height-xl":"1.5em","h3-line-height-lg":"1.6em","h3-line-height-sm":"1.3847em","h4-font-size-xl":"1.8rem","h4-font-size-lg":"calc(1.8rem / 1.2)","h4-font-size-sm":"1.5rem","h4-line-height-xl":"1.4585em","h4-line-height-lg":"1.4585em","h4-line-height-sm":"1.4165em"},T={title:"Docs/Typography",component:{},decorators:[i=>({components:{story:i},template:`
        <div>
          <story />
          <div class="typography-docs">
            <!-- Headline Sizes -->
            <h2>Headline Sizes:</h2>
            <div class="space-top-2" style="display: flex; grid-gap: 10px; flex-direction: column;">
              <div v-for="(typeValues, index) in types" :key="index">
                <div :class="['typography__item', typeValues.class, typeValues.light ? 'light' : '', typeValues.bold ? 'bold' : '']">
                  <template v-if="!typeValues.headline">
                    {{ typeValues.class }} {{ typeValues.light ? 'light' : typeValues.bold ? 'bold' : '' }}
                  </template>
                  <template v-else>
                    <div style="margin: 1em 0;" class="h4-font-size">{{ typeValues.headline }}</div>
                  </template>
                  <div v-if="typeValues.docs" class="typography__tooltip" v-html="typeValues.docs"></div>
                </div>
              </div>
            </div>

            <!-- Text Highlights -->
            <div class="space-top-2">
              <h2>Text Highlights:</h2>
              <div class="space-top-1">
                <div class="space-top-1">
                  <h4>&lt;span class="highlight"&gt;</h4>
                  <p>Lorem ipsum dolor sit amet, <span class="highlight">consetetur sadipscing elitr</span>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est <span class="highlight">Lorem ipsum dolor</span> sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                </div>
                <div class="space-top-1">
                  <h4>&lt;span class="highlight-orange"&gt;</h4>
                  <p>Lorem ipsum dolor sit amet, <span class="highlight-orange">consetetur sadipscing elitr</span>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est <span class="highlight-orange">Lorem ipsum dolor</span> sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                </div>
                <div class="space-top-1">
                  <h4>&lt;span class="highlight-yellow"&gt;</h4>
                  <p>Lorem ipsum dolor sit amet, <span class="highlight-yellow">consetetur sadipscing elitr</span>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est <span class="highlight-yellow">Lorem ipsum dolor</span> sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                </div>
                <div class="space-top-1">
                  <h4>&lt;span class="highlight-underline"&gt;</h4>
                  <p>Lorem ipsum dolor sit amet, <span class="highlight-underline">consetetur sadipscing elitr</span>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                  <h4>&lt;span style="--color-highlight-underline: var(--color-primary)" class="highlight-underline"&gt;</h4>
                  <p>Stet clita kasd gubergren, no sea takimata sanctus est <span style="--color-highlight-underline: var(--color-primary)" class="highlight-underline">Lorem ipsum dolor</span> sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                </div>
                <div class="space-top-1">
                  <h4>&lt;span class="highlight-animated"&gt;</h4>
                  <p>Lorem ipsum dolor sit amet, <span class="highlight-animated">consetetur sadipscing elitr</span>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                  <h4>&lt;span style="--color-highlight-animated: var(--color-primary)" class="highlight-animated"&gt;</h4>
                  <p>Stet clita kasd gubergren, no sea takimata sanctus est <span style="--color-highlight-animated: var(--color-primary)" class="highlight-animated">Lorem ipsum dolor</span> sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,props:{types:{type:Array,default:()=>[]}}})]},t=["sm","lg","xl"],z={"h1-font-size":{breakpoints:t,variant:"light"},"h2-font-size":{breakpoints:t,variant:"bold"},"h3-font-size":{breakpoints:t,variant:"bold"},"h4-font-size":{breakpoints:t},"h5-font-size":{breakpoints:t},"h6-font-size":{breakpoints:t},"Copy Sizes":null,"font-size-sm":{breakpoints:[""],variant:"bold"},"font-size-1":{breakpoints:t,variant:"bold"},"font-size-2":{breakpoints:t,variant:"bold"},"font-size-3":{breakpoints:t,variant:"bold"},"font-size-4":{breakpoints:t,variant:"light"},"Extra Sizes":null,"font-size-5":{breakpoints:t,variant:"light"},"font-size-6":{breakpoints:t,variant:"light"},"font-size-7":{breakpoints:t,variant:"light"},"font-size-8":{breakpoints:t,variant:"bold"}},c=16,p=[],v=new Intl.NumberFormat("en-EN",{minimumFractionDigits:0,maximumFractionDigits:2}),H=i=>{const e=i.split("-");return e[0]==="font"?"font-size-"+e[2]:e[0]},_=function(i,e){if(!e)return;let o="",n=e.length>1?"Above (lg) Breakpoint":"All Breakpoints";const l=H(i);return e.forEach(function(s){const k=`${i}${s?"-"+s:""}`,r=g[k],u=`${l}-line-height`,L=`${u}${s?"-"+s:""}`,a=g[L]||g[u];if(!r)return;let m;if(r.indexOf("calc(")!==-1){const f=r.replace("calc(","").replace(")","").replace("rem","").split("/"),$=parseFloat(f[0]),q=parseFloat(f[1]);m=$/q*c}else m=r.replace("rem","")*c;let d;a&&a.indexOf("rem")!==-1?d=a.replace("rem","")*c:a&&(d=a.replace("em","")*m);const V=`<div class="typgraphy__tooltip-details">font-size: ${v.format(m)}px`,F=`${a?"<br/>line-height: "+v.format(d)+"px":""}`,S=`${V}${F}</div>`;o+=`${s?"Breakpoint ("+s+")":n}: ${S}`}),o===""?null:o};Object.keys(z).forEach(i=>{const e=z[i];if(!e)return p.push({headline:i});const o=_(i,e==null?void 0:e.breakpoints),n={class:i,docs:o};if(p.push(n),e.variant){const l={...n};l[e.variant]=!0,p.push(l)}});const h={args:{types:[...p]}};var y,b,x;h.parameters={...h.parameters,docs:{...(y=h.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    types: [...generatedTypes]
  }
}`,...(x=(b=h.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const j=["Typography"];export{h as Typography,j as __namedExportsOrder,T as default};
