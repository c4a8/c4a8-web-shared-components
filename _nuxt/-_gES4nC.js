function i(n,r,s="100% 0px"){const e=new IntersectionObserver(([t])=>{t.isIntersecting&&(e.disconnect(),r())},{rootMargin:s});return e.observe(n),e}export{i as w};
