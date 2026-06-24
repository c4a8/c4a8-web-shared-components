const p=`// https://chir.ag/projects/name-that-color/

$color-blue-dark: #000520;
$color-blue-medium: #0072c6;

$white-30: rgba(255, 255, 255, 0.3);
$white-50: rgba(255, 255, 255, 0.5);
$white-80: rgba(255, 255, 255, 0.8);
$color-primary-accent: $color-blue-medium;
$color-copy: $color-blue-dark;

// plain copies
$gray-600: #8c98a4;

:root {
  // corp
  --color-gk-light-blue: #5cbbff;
  --color-gk-mid-blue: #0072c6;
  --color-gk-dark-blue: #000520;
  --color-gk-yellow: #fcd116;
  --color-gk-orange: #f8842c;
  --color-gk-red: #e44418;
  --color-gk-violet: #543b9c;
  --color-gk-green: #acd653;
  --color-gk-petrol: #008187;
  --color-gk-lightest-blue: #cce3f4;
  --color-gk-white: #ffffff;
  --color-gk-light-grey: #f5f5f5;
  --color-gk-grey: #7f7f7f;

  // shades
  --color-gk-dark-blue-shade-90: #1a1e36;
  --color-gk-dark-blue-shade-80: #33374d;
  --color-gk-dark-blue-shade-70: #4c5063;
  --color-gk-dark-blue-shade-60: #666979;
  --color-gk-dark-blue-shade-50: #80828f;
  --color-gk-dark-blue-shade-40: #999ba6;
  --color-gk-dark-blue-shade-30: #b3b4bc;
  --color-gk-dark-blue-shade-20: #cccdd2;
  --color-gk-dark-blue-shade-10: #e5e6e9;

  // products
  --color-products-dark-blue: #011e33;
  --color-products-dark-grey: #808e99;
  --color-products-mid-grey: #d1d9dd;
  --color-products-light-grey: #f1f3f4;
  --color-konnekt-green: #7dc2b8;
  --color-konnekt-light-green: #c2deda;
  --color-konnekt-dark-blue: #00508b;
  --color-konnekt-dark-green: #60ada2;
  --color-radius-emerald: #1d7537;
  --color-radius-light-orange: #fcb975;
  --color-radius-dark-green: #78963a;
  --color-radius-dark-emerald: #114621;
  --color-rm-light-apricot: #ffc8ad;
  --color-rm-apricot: #f3b394;
  --color-rm-dark-purple: #3b296d;
  --color-rm-dark-apricot: #e0a588;
  --color-scepman-mid-yellow: #f7cb0b;
  --color-scepman-purple: #716fa7;
  --color-scepman-light-purple: #a09edb;
  --color-scepman-dark-yellow: #caa712;
  --color-scepman-dark-purple: #4f4e75;
  --color-tp-purple: #8853bd;
  --color-tp-light-purple: #d1b1f1;
  --color-tp-dark-purple: #5f3a84;
  --color-tp-dark-blue: #4083b3;
  --color-rj-light-yellow: #fbf38c;
  --color-rj-yellow: #e1d429;
  --color-rj-dark-orange: #c66a23;
  --color-uc-light-yellow: #ffdf9c;
  --color-uc-yellow: #f5c663;
  --color-uc-dark-petrol: #005a5f;
  --color-se-blue: #2e96e2;
  --color-se-dark-blue: #226ea6;
  --color-se-light-yellow: #f7e7a0;
  --color-se-yellow: #debf37;

  --color-black: #000000;
  --color-black-85: #262626;
  --color-black-70: #4c4c4c;
  --color-black-40: #999;
  --color-black-30: #b2b2b2;
  --color-black-15: #d9d9d9;
  --color-black-2: #fbfbfb;

  --color-white-30: #{$white-30};
  --color-white-50: #{$white-50};
  --color-white-80: #{$white-80};

  --color-blue-lighter: #77c6ff;
  --color-blue-jeans: #24a1fa;
  --color-celery: #9fc54f;
  --color-ziggurat: #bfdfe1;
  --color-frost: #edf5db;
  --color-sushi: #809f3e;
  --color-yellow-medium: #dab61d;
  --color-french-rose: #ed4c78;
  --color-trout: #4c5062;
  --color-porcelain: #f3f5f6;
  --color-bon-jour: #e5e2e2;
  --color-deep-sea: #008774;
  --color-mint-green: #80f785;
  --color-nevada: #60727f;
  --color-summer-green: #8ebeb2;
  --color-sunglow: #ffd233;
  --color-biloba-flower: #bd90ea;
  --color-lavender: #ad76e5;
  --color-perfume: #ddc3f7;
  --color-varden: #fff8dc;
  --color-sahara: #bd9d11;
  --color-portage: #9898f9;
  --color-sahara-sand: #f6ee8c;
  --color-cyprus: #004144;
  --color-wax-flower: #ffbb9a;
  --color-jacarta: #19122f;
  --color-wistful: #b2a7d2;
  --color-lochmara: #007ac8;
  --color-denim: #1476bf;
  --color-polar: #f6f9fd;
  --color-cornflower-blue: #6195ed;
  --color-anakiwa: #97d4ff;
  --color-butterfly-bush: #524fa3;

  --color-headlines: var(--color-gk-dark-blue);
  --color-copy: var(--color-gk-dark-blue);
  --color-copy-light: var(--color-gk-white);
  --color-copy-lowlight: var(--color-black-30);
  --color-copy-reduced: var(--color-gk-grey);
  --color-copy-hover: var(--color-black-70);

  --color-active: var(--color-primary);

  // more abstract color assignments
  --color-surface-background: var(--color-gk-light-grey);
  --color-background: var(--color-gk-white);

  // rules that default to everything

  --color-border-default: var(--color-black-30);
  --color-border-light: var(--color-black-15);

  --color-service-overview-border: var(--color-border-default);

  --color-services-border: var(--color-service-overview-border);
  --color-services-labels: var(--color-trout);

  --color-page-detail-border: var(--color-border-default);
  --color-page-detail-copy: var(--color-black-85);
  --color-page-detail-shape: var(--color-gk-yellow);
  --color-page-detail-details: var(--color-gk-orange);

  --color-job-list-border: var(--color-border-default);

  --color-job-list-detail: var(--color-gk-yellow);
  --color-job-list-detail-copy: var(--color-black-85);

  --color-person-quote-detail: var(--color-gk-yellow);

  --color-icon-hover-background: var(--color-black-85);
  --color-icon-hover-color: var(--color-gk-white);

  --color-icon-check-background: var(--color-gk-lightest-blue);

  --color-modal-background: var(--color-gk-white);

  --color-form-background: var(--color-porcelain);
  --color-form-background-light: var(--color-gk-white);
  --color-form-error: var(--color-gk-red);
  --color-form-success: var(--color-deep-sea);
  --color-form-border: var(--color-bon-jour);
  --color-form-border-hover: var(--color-border-default);

  --color-google-maps-popup-background: var(--color-gk-dark-blue);

  --color-hero-icon: var(--color-gk-yellow);
  --color-hero-study-background: var(--color-primary);
  --color-hero-study-copy: var(--color-copy);
  --color-hero-image-content-grid-overline-text: var(--color-gk-dark-blue);
  --color-hero-text-overline-text: var(--color-gk-orange);

  --color-people-square-copy: var(--color-gk-white);

  --color-step-list-highlight: var(--color-gk-yellow);
  --color-step-list-highlight-copy: var(--color-copy);
  --color-step-list-border: var(--color-border-light);

  --color-career-background: var(--color-gk-dark-blue);

  --color-text-image-background: var(--color-career-background);

  --color-pricing-product-border: var(--color-gk-dark-blue-shade-40);

  --color-fab-background: var(--color-gk-yellow);

  --color-testimonials: var(--color-blue-jeans);

  --color-event-teaser-timing: var(--color-gk-dark-blue-shade-40);
  --color-event-teaser-timing-highlight: var(--color-gk-orange);
  --color-event-teaser-background: var(--color-black-2);
  --color-event-teaser-teaser-background: var(--color-gk-petrol);
  --color-event-teaser-teaser-copy: var(--color-gk-white);

  --color-event-detail: var(--color-surface-background);
  --color-event-detail-shape: var(--color-gk-yellow);

  --color-badge-icon: var(--color-gk-white);
  --color-badge-background: var(--color-gk-orange);

  --color-card-background: var(--color-surface-background);
  --color-card-highlight: var(--color-gk-orange);

  --color-back-to-top-border: var(--color-border-default);
  --color-back-to-top-hover-background: var(--color-gk-dark-blue);
  --color-back-to-top-hover-foreground: var(--color-gk-white);

  --color-faq-border: var(--color-trout);

  --color-modal-error-title: var(--color-gk-red);
  --color-modal-error-contact: var(--color-black);

  --color-letter-switcher-highlight: var(--color-lochmara);
  --color-letter-switcher-copy: var(--color-copy-light);
  --color-letter-switcher-overline: var(--color-gk-yellow);
  --color-letter-switcher-underline: var(--color-gk-orange);

  --color-scroll-arrow: var(--color-gk-orange);

  --color-header-background: var(--color-gk-white);
  --color-header-border: var(--color-gk-dark-blue-shade-20);
  --color-header-container-border: var(--color-gk-dark-blue-shade-10);
  --color-header-contact-background: var(--color-polar);
  --color-header-active: var(--color-active);
  --color-header-product-subtitle: var(--color-gk-dark-blue-shade-60);

  --color-link-list-border: var(--color-gk-dark-blue-shade-20);
  --color-link-list-icon: var(--color-gk-dark-blue-shade-30);
  --color-link-list-title: var(--color-trout);
  --color-link-list-active: var(--color-active);

  --color-toggle-switch-indicator: var(--color-products-dark-blue);

  --color-accordion-hover-background: var(--color-surface-background);
  --color-table-mark: var(--color-gk-yellow);

  --color-emergency: var(--color-gk-orange);
  --color-emergency-accent: var(--color-rj-dark-orange);

  --color-input-placeholder: var(--color-gk-dark-blue-shade-30);

  --color-highlight-underline: var(--color-highlight-second);
  --color-highlight-animated: var(--color-highlight-second);

  --color-link: var(--color-primary);
  --color-link-hover: var(--color-primary-accent);
}

.bg-grey {
  background-color: var(--color-bg-grey);
}
`,v=`// gk theme — AUTO-GENERATED from figma/tokens/glueckkanja.tokens.json
// Regenerate via: node scripts/sync-figma-tokens.mjs — do not edit by hand.

:root {
  --site: 'gk';

  // Theme colors (Figma source of truth)
  --color-headlines: var(--color-gk-dark-blue);
  --color-copy: var(--color-gk-dark-blue);
  --color-primary: var(--color-gk-light-blue);
  --color-primary-accent: var(--color-gk-mid-blue);
  --color-primary-accent-light: var(--color-gk-mid-blue);
  --color-primary-on-surface: var(--color-gk-white);
  --color-primary-accent-on-surface: var(--color-white-50);
  --color-secondary: var(--color-gk-light-blue);
  --color-secondary-accent: var(--color-gk-mid-blue);
  --color-secondary-accent-light: var(--color-gk-mid-blue);
  --color-secondary-on-surface: var(--color-gk-white);
  --color-secondary-accent-on-surface: var(--color-white-80);
  --color-highlight: var(--color-gk-mid-blue);
  --color-highlight-second: var(--color-gk-yellow);
  --color-copy-highlight: var(--color-gk-petrol);
  --color-copy-on-primary: var(--color-gk-white);
  --color-copy-on-primary-accent: var(--color-gk-white);
  --color-copy-on-primary-on-surface: var(--color-gk-light-blue);
  --color-copy-on-primary-accent-on-surface: var(--color-gk-mid-blue);
  --color-copy-on-secondary: var(--color-gk-light-blue);
  --color-copy-on-secondary-accent: var(--color-gk-mid-blue);
  --color-copy-on-secondary-on-surface: var(--color-gk-white);
  --color-copy-on-secondary-accent-on-surface: var(--color-white-80);
  --color-bg-grey: var(--color-gk-dark-blue-shade-10);
  --color-bg-dark-grey: var(--color-gk-dark-blue-shade-40);
  --color-svg-icon: var(--color-gk-light-blue);
  --color-svg-icon--hover: var(--color-gk-mid-blue);
  --color-bg-checkbox: var(--color-gk-mid-blue);
  --color-border: var(--color-gk-dark-blue);
  --color-loading: var(--color-gk-light-blue);
  --color-loading--1: var(--color-gk-light-blue);
  --color-loading--2: var(--color-gk-yellow);
  --color-loading--3: var(--color-gk-green);
  --color-loading--4: var(--color-gk-orange);

  // specific overrides
  --color-override-event-copy: var(--color-gk-white);

  // fonts
  --font-family: 'Lato', sans-serif;

  // cta
  --cta-cutoff: 0;
  --cta-normal: 1;
}
`,g=n=>{const o=[],e=new Set,r=/(--color-[\w-]+)\s*:\s*([^;]+);/g;let l;for(;(l=r.exec(n))!==null;){const c=l[1],u=l[2].trim();e.has(c)||(e.add(c),o.push({name:c,value:u}))}return o},k=n=>{const o=[],e=new Map;return n.forEach(r=>{const l=r.name.replace("--color-","").split("-")[0];if(!e.has(l)){const c={prefix:l,colors:[]};e.set(l,c),o.push(c)}e.get(l).colors.push(r)}),o},b=["gk","products","konnekt","radius","rm","scepman","tp","rj","uc","se"],h=k(g(p)).filter(n=>b.includes(n.prefix)),f=k(g(v)),t={docs:{display:"flex",flexDirection:"column",gap:"3rem"},group:{marginTop:"1.75rem",paddingTop:"1.75rem",borderTop:"1px solid #e5e6e9"},list:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))",gap:"0.75rem 1.25rem"},item:{display:"flex",alignItems:"center",gap:"0.65rem",cursor:"pointer",userSelect:"none"},circle:{flex:"0 0 auto",display:"inline-block",width:"37px",height:"37px",borderRadius:"50%",border:"1px solid rgba(0, 5, 32, 0.15)"},text:{display:"flex",flexDirection:"column",minWidth:"0",fontFamily:"'SFMono-Regular', Consolas, monospace",lineHeight:"1.35"},name:{fontSize:"12px",fontWeight:"700",color:"#000520",wordBreak:"break-all"},value:{fontSize:"11px",color:"#666979",wordBreak:"break-all"},resolved:{fontSize:"11px",color:"#999ba6"},hint:{fontSize:"11px",fontWeight:"700",color:"#0072c6"}},y={title:"Docs/Colors",component:{},decorators:[n=>({components:{story:n},data(){return{baseGroups:h,themeGroups:f,styles:t}},methods:{circleStyle(o){return{...t.circle,backgroundColor:`var(${o.name})`}},copy(o){const e=()=>{o.copied=!0,setTimeout(()=>{o.copied=!1},2e3)},r=document.createElement("textarea");r.value=o.name,r.style.position="fixed",r.style.top="0",r.style.left="0",r.style.opacity="0",document.body.appendChild(r),r.focus(),r.select();let l=!1;try{l=document.execCommand("copy")}catch(c){console.debug(c)}if(r.remove(),l){e();return}navigator.clipboard&&navigator.clipboard.writeText&&navigator.clipboard.writeText(o.name).then(e).catch(c=>console.debug(c))}},mounted(){const o=document.createElement("span");o.style.display="none",this.$el.appendChild(o);const e=r=>{o.style.backgroundColor="",o.style.backgroundColor=`var(${r.name})`,r.resolved=getComputedStyle(o).backgroundColor};[...this.baseGroups,...this.themeGroups].forEach(r=>r.colors.forEach(e)),o.remove()},template:`
        <div :style="styles.docs">
          <story />

          <section>
            <h2>Base Colors <small style="font-weight: 400; opacity: 0.6;">(_colors.scss)</small></h2>
            <div v-for="group in baseGroups" :key="group.prefix" :style="styles.group">
              <div :style="styles.list">
                <div
                  v-for="color in group.colors"
                  :key="color.name"
                  :style="styles.item"
                  :title="color.name"
                  @click="copy(color)"
                  @mouseenter="color.hover = true"
                  @mouseleave="color.hover = false"
                >
                  <span :style="circleStyle(color)"></span>
                  <span :style="styles.text">
                    <code :style="styles.name">{{ color.name }}</code>
                    <span v-if="color.hover" :style="styles.hint">{{ color.copied ? 'Copied!' : 'copy to clipboard' }}</span>
                    <template v-else>
                      <span :style="styles.value">{{ color.value }}</span>
                      <span v-if="color.resolved" :style="styles.resolved">{{ color.resolved }}</span>
                    </template>
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2>Theme Rules <small style="font-weight: 400; opacity: 0.6;">(themes/_gk.scss — default theme)</small></h2>
            <div v-for="group in themeGroups" :key="group.prefix" :style="styles.group">
              <div :style="styles.list">
                <div
                  v-for="color in group.colors"
                  :key="color.name"
                  :style="styles.item"
                  :title="color.name"
                  @click="copy(color)"
                  @mouseenter="color.hover = true"
                  @mouseleave="color.hover = false"
                >
                  <span :style="circleStyle(color)"></span>
                  <span :style="styles.text">
                    <code :style="styles.name">{{ color.name }}</code>
                    <span v-if="color.hover" :style="styles.hint">{{ color.copied ? 'Copied!' : 'copy to clipboard' }}</span>
                    <template v-else>
                      <span :style="styles.value">{{ color.value }}</span>
                      <span v-if="color.resolved" :style="styles.resolved">{{ color.resolved }}</span>
                    </template>
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      `})]},a={};var s,d,i;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(i=(d=a.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const m=["Colors"];export{a as Colors,m as __namedExportsOrder,y as default};
