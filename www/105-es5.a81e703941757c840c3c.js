(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{xhj9:function(t,e,s){"use strict";s.r(e),s.d(e,"scopeCss",(function(){return W}));const o=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",c=new RegExp("(-shadowcsshost"+o,"gim"),n=new RegExp("(-shadowcsscontext"+o,"gim"),r=new RegExp("(-shadowcssslotted"+o,"gim"),a=/-shadowcsshost-no-combinator([^\s]*)/,l=[/::shadow/g,/::content/g],h=/-shadowcsshost/gim,i=/:host/gim,p=/::slotted/gim,d=/:host-context/gim,u=/\/\*\s*[\s\S]*?\*\//g,g=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,m=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,w=/([{}])/g,f=(t,e)=>{const s=x(t);let o=0;return s.escapedString.replace(m,(...t)=>{const c=t[2];let n="",r=t[4],a="";r&&r.startsWith("{%BLOCK%")&&(n=s.blocks[o++],r=r.substring("%BLOCK%".length+1),a="{");const l=e({selector:c,content:n});return"".concat(t[1]).concat(l.selector).concat(t[3]).concat(a).concat(l.content).concat(r)})},x=t=>{const e=t.split(w),s=[],o=[];let c=0,n=[];for(let r=0;r<e.length;r++){const t=e[r];"}"===t&&c--,c>0?n.push(t):(n.length>0&&(o.push(n.join("")),s.push("%BLOCK%"),n=[]),s.push(t)),"{"===t&&c++}return n.length>0&&(o.push(n.join("")),s.push("%BLOCK%")),{escapedString:s.join(""),blocks:o}},_=(t,e,s)=>t.replace(e,(...t)=>{if(t[2]){const e=t[2].split(","),o=[];for(let c=0;c<e.length;c++){const n=e[c].trim();if(!n)break;o.push(s("-shadowcsshost-no-combinator",n,t[3]))}return o.join(",")}return"-shadowcsshost-no-combinator"+t[3]}),b=(t,e,s)=>t+e.replace("-shadowcsshost","")+s,O=(t,e,s)=>e.indexOf("-shadowcsshost")>-1?b(t,e,s):t+e+s+", "+e+" "+t+s,S=(t,e,s,o,c)=>f(t,t=>{let c=t.selector,n=t.content;return"@"!==t.selector[0]?c=((t,e,s,o)=>t.split(",").map(t=>o&&t.indexOf("."+o)>-1?t.trim():((t,e)=>!(t=>(t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")))(e).test(t))(t,e)?((t,e,s)=>{const o="."+(e=e.replace(/\[is=([^\]]*)\]/g,(t,...e)=>e[0])),c=t=>{let c=t.trim();if(!c)return"";if(t.indexOf("-shadowcsshost-no-combinator")>-1)c=((t,e,s)=>{if(h.lastIndex=0,h.test(t)){const e=".".concat(s);return t.replace(a,(t,s)=>s.replace(/([^:]*)(:*)(.*)/,(t,s,o,c)=>s+e+o+c)).replace(h,e+" ")}return e+" "+t})(t,e,s);else{const e=t.replace(h,"");if(e.length>0){const t=e.match(/([^:]*)(:*)(.*)/);t&&(c=t[1]+o+t[2]+t[3])}}return c},n=(t=>{const e=[];let s,o=0;return s=(t=t.replace(/(\[[^\]]*\])/g,(t,s)=>{const c="__ph-".concat(o,"__");return e.push(s),o++,c})).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(t,s,c)=>{const n="__ph-".concat(o,"__");return e.push(c),o++,s+n}),{content:s,placeholders:e}})(t);let r,l="",i=0;const p=/( |>|\+|~(?!=))\s*/g;let d=!((t=n.content).indexOf("-shadowcsshost-no-combinator")>-1);for(;null!==(r=p.exec(t));){const e=r[1],s=t.slice(i,r.index).trim();d=d||s.indexOf("-shadowcsshost-no-combinator")>-1,l+="".concat(d?c(s):s," ").concat(e," "),i=p.lastIndex}const u=t.substring(i);return d=d||u.indexOf("-shadowcsshost-no-combinator")>-1,l+=d?c(u):u,g=n.placeholders,l.replace(/__ph-(\d+)__/g,(t,e)=>g[+e]);var g})(t,e,s).trim():t.trim()).join(", "))(t.selector,e,s,o):(t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document"))&&(n=S(t.content,e,s,o)),{selector:c.replace(/\s{2,}/g," ").trim(),content:n}}),W=(t,e,s)=>{const o=e+"-h",a=e+"-s",h=t.match(g)||[];t=t.replace(u,"");const m=[];if(s){const e=t=>{const e="/*!@___".concat(m.length,"___*/");return m.push({placeholder:e,comment:"/*!@".concat(t.selector,"*/")}),t.selector=e+t.selector,t};t=f(t,t=>"@"!==t.selector[0]?e(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=f(t.content,e),t):t)}const w=((t,e,s,o,a)=>{const h=((t,e)=>{const s="."+e+" > ",o=[];return t=t.replace(r,(...t)=>{if(t[2]){const e=t[2].trim(),c=s+e+t[3];let n="";for(let s=t[4]-1;s>=0;s--){const e=t[5][s];if("}"===e||","===e)break;n=e+n}const r=n+c,a="".concat(n.trimRight()).concat(c.trim());return r.trim()!==a.trim()&&o.push({orgSelector:r,updatedSelector:"".concat(a,", ").concat(r)}),c}return"-shadowcsshost-no-combinator"+t[3]}),{selectors:o,cssText:t}})(t=(t=>_(t,n,O))(t=(t=>_(t,c,b))(t=t.replace(d,"-shadowcsscontext").replace(i,"-shadowcsshost").replace(p,"-shadowcssslotted"))),o);return t=(t=>l.reduce((t,e)=>t.replace(e," "),t))(t=h.cssText),e&&(t=S(t,e,s,o)),{cssText:(t=(t=t.replace(/-shadowcsshost-no-combinator/g,".".concat(s))).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:h.selectors}})(t,e,o,a);return t=[w.cssText,...h].join("\n"),s&&m.forEach(({placeholder:e,comment:s})=>{t=t.replace(e,s)}),w.slottedSelectors.forEach(e=>{t=t.replace(e.orgSelector,e.updatedSelector)}),t}}}]);