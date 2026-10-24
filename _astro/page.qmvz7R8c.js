var e={},t=new Set,n=new WeakSet,r=!0,i=void 0,a=!1;function o(e){a||(a=!0,r??=e?.prefetchAll??!1,i??=e?.defaultStrategy??`hover`,s(),c(),l(),d())}function s(){for(let e of[`touchstart`,`mousedown`])document.addEventListener(e,e=>{let t=e.target.closest(`a`);m(t,`tap`)&&f(t.href,{ignoreSlowConnection:!0})},{passive:!0})}function c(){let e;document.body.addEventListener(`focusin`,e=>{let n=e.target.closest(`a`);m(n,`hover`)&&t(n.href)},{passive:!0}),document.body.addEventListener(`focusout`,r,{passive:!0}),g(()=>{for(let e of document.getElementsByTagName(`a`))n.has(e)||m(e,`hover`)&&(n.add(e),e.addEventListener(`mouseenter`,e=>t(e.currentTarget.href),{passive:!0}),e.addEventListener(`mouseleave`,r,{passive:!0}))});function t(t){e&&clearTimeout(e),e=setTimeout(()=>{f(t)},80)}function r(){e&&=(clearTimeout(e),0)}}function l(){let e;g(()=>{for(let t of document.getElementsByTagName(`a`))n.has(t)||m(t,`viewport`)&&(n.add(t),e??=u(),e.observe(t))})}function u(){let e=new WeakMap;return new IntersectionObserver((t,n)=>{for(let r of t){let t=r.target,i=e.get(t);r.isIntersecting?(i&&clearTimeout(i),e.set(t,setTimeout(()=>{n.unobserve(t),e.delete(t),f(t.href)},300))):i&&(clearTimeout(i),e.delete(t))}})}function d(){g(()=>{for(let e of document.getElementsByTagName(`a`))m(e,`load`)&&f(e.href)})}function f(n,r){n=n.replace(/#.*/,``);let i=r?.ignoreSlowConnection??!1;if(p(n,i)){if(t.add(n),document.createElement(`link`).relList?.supports?.(`prefetch`)){let e=document.createElement(`link`);e.rel=`prefetch`,e.setAttribute(`href`,n),document.head.append(e)}else{let t=new Headers;for(let[n,r]of Object.entries(e))t.set(n,r);fetch(n,{priority:`low`,headers:t}).catch(()=>{})}}}function p(e,n){if(!navigator.onLine||!n&&h())return!1;try{let n=new URL(e,location.href);return location.origin===n.origin&&(location.pathname!==n.pathname||location.search!==n.search)&&!t.has(e)}catch{}return!1}function m(e,t){if(e?.tagName!==`A`)return!1;let n=e.dataset.astroPrefetch;return n===`false`?!1:t===`tap`&&(n!=null||r)&&h()?!0:n==null&&r||n===``?t===i:n===t}function h(){if(`connection`in navigator){let e=navigator.connection;return e.saveData||/2g/.test(e.effectiveType)}return!1}function g(e){e();let t=!1;document.addEventListener(`astro:page-load`,()=>{t?e():t=!0}),new MutationObserver(t=>{for(let n of t)for(let t of n.addedNodes)if(t instanceof Element&&(t.tagName===`A`||t.querySelector?.(`a`))){e();return}}).observe(document.body,{childList:!0,subtree:!0})}var _={copy:{label:`Copy page`,icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy-icon lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`,className:`copy-action`,action:async()=>{let e=new URL(`index.md`,window.location.href.replace(/\/?$/,`/`)).toString();try{let t=new ClipboardItem({"text/plain":fetch(e).then(e=>e.text()).then(e=>new Blob([e],{type:`text/plain`})).catch(t=>{throw Error(`Received ${t.message} for ${e}`)})});await navigator.clipboard.write([t]);let n=document.querySelector(`.copy-action`),r=n.innerHTML,i=n.querySelector(`span`);i&&(i.textContent=`Copied!`),setTimeout(()=>{n.innerHTML=r},2e3)}catch(e){console.error(`Failed to copy Markdown:`,e)}}},view:{label:`View as Markdown`,icon:`<svg xmlns="http://www.w3.org/2000/svg" width="208" height="128" viewBox="0 0 208 128"><rect width="198" height="118" x="5" y="5" ry="10" stroke="currentColor" stroke-width="10" fill="transparent"/><path stroke="currentColor" fill="currentColor" d="M30 98V30h20l20 25 20-25h20v68H90V59L70 84 50 59v39zm125 0l-30-33h20V30h20v35h20z"/></svg>`,action:()=>{window.open(new URL(`index.md`,window.location.href.replace(/\/?$/,`/`)),`_blank`)}},chatgpt:{label:`Open in ChatGPT`,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320" stroke="transparent" fill="currentColor"><path d="m297.06 130.97c7.26-21.79 4.76-45.66-6.85-65.48-17.46-30.4-52.56-46.04-86.84-38.68-15.25-17.18-37.16-26.95-60.13-26.81-35.04-.08-66.13 22.48-76.91 55.82-22.51 4.61-41.94 18.7-53.31 38.67-17.59 30.32-13.58 68.54 9.92 94.54-7.26 21.79-4.76 45.66 6.85 65.48 17.46 30.4 52.56 46.04 86.84 38.68 15.24 17.18 37.16 26.95 60.13 26.8 35.06.09 66.16-22.49 76.94-55.86 22.51-4.61 41.94-18.7 53.31-38.67 17.57-30.32 13.55-68.51-9.94-94.51zm-120.28 168.11c-14.03.02-27.62-4.89-38.39-13.88.49-.26 1.34-.73 1.89-1.07l63.72-36.8c3.26-1.85 5.26-5.32 5.24-9.07v-89.83l26.93 15.55c.29.14.48.42.52.74v74.39c-.04 33.08-26.83 59.9-59.91 59.97zm-128.84-55.03c-7.03-12.14-9.56-26.37-7.15-40.18.47.28 1.3.79 1.89 1.13l63.72 36.8c3.23 1.89 7.23 1.89 10.47 0l77.79-44.92v31.1c.02.32-.13.63-.38.83l-64.41 37.19c-28.69 16.52-65.33 6.7-81.92-21.95zm-16.77-139.09c7-12.16 18.05-21.46 31.21-26.29 0 .55-.03 1.52-.03 2.2v73.61c-.02 3.74 1.98 7.21 5.23 9.06l77.79 44.91-26.93 15.55c-.27.18-.61.21-.91.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89zm221.26 51.49-77.79-44.92 26.93-15.54c.27-.18.61-.21.91-.08l64.42 37.19c28.68 16.57 38.51 53.26 21.94 81.94-7.01 12.14-18.05 21.44-31.2 26.28v-75.81c.03-3.74-1.96-7.2-5.2-9.06zm26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8c-3.23-1.89-7.23-1.89-10.47 0l-77.79 44.92v-31.1c-.02-.32.13-.63.38-.83l64.41-37.16c28.69-16.55 65.37-6.7 81.91 22 6.99 12.12 9.52 26.31 7.15 40.1zm-168.51 55.43-26.94-15.55c-.29-.14-.48-.42-.52-.74v-74.39c.02-33.12 26.89-59.96 60.01-59.94 14.01 0 27.57 4.92 38.34 13.88-.49.26-1.33.73-1.89 1.07l-63.72 36.8c-3.26 1.85-5.26 5.31-5.24 9.06l-.04 89.79zm14.63-31.54 34.65-20.01 34.65 20v40.01l-34.65 20-34.65-20z"/></svg>`,action:()=>{let e=`Read from ${window.location.href} so I can ask questions about it.`;window.open(`https://chat.openai.com/?q=${e}`,`_blank`)}},claude:{label:`Open in Claude`,icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92.2 65" stroke="transparent" fill="currentColor"><path class="st0" d="M66.5,0H52.4l25.7,65h14.1L66.5,0z M25.7,0L0,65h14.4l5.3-13.6h26.9L51.8,65h14.4L40.5,0C40.5,0,25.7,0,25.7,0zM24.3,39.3l8.8-22.8l8.8,22.8H24.3z"></path></svg>`,action:()=>{let e=`Read from ${window.location.href} so I can ask questions about it.`;window.open(`https://claude.ai/new?q=${e}`,`_blank`)}},lechat:{label:`Open in Le Chat`,icon:`<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Mistral AI</title><path d="M17.143 3.429v3.428h-3.429v3.429h-3.428V6.857H6.857V3.43H3.43v13.714H0v3.428h10.286v-3.428H6.857v-3.429h3.429v3.429h3.429v-3.429h3.428v3.429h-3.428v3.428H24v-3.428h-3.43V3.429z"/></svg>`,action:()=>{let e=`Read from ${window.location.href} so I can ask questions about it.`;window.open(`https://chat.mistral.ai/chat?q=${e}`,`_blank`)}},grok:{label:`Open in Grok`,icon:`<svg viewBox="0 0 1024 1024" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M395.479 633.828L735.91 381.105C752.599 368.715 776.454 373.548 784.406 392.792C826.26 494.285 807.561 616.253 724.288 699.996C641.016 783.739 525.151 802.104 419.247 760.277L303.556 814.143C469.49 928.202 670.987 899.995 796.901 773.282C896.776 672.843 927.708 535.937 898.785 412.476L899.047 412.739C857.105 231.37 909.358 158.874 1016.4 10.6326C1018.93 7.11771 1021.47 3.60279 1024 0L883.144 141.651V141.212L395.392 633.916"/><path d="M325.226 695.251C206.128 580.84 226.662 403.776 328.285 301.668C403.431 226.097 526.549 195.254 634.026 240.596L749.454 186.994C728.657 171.88 702.007 155.623 671.424 144.2C533.19 86.9942 367.693 115.465 255.323 228.382C147.234 337.081 113.244 504.215 171.613 646.833C215.216 753.423 143.739 828.818 71.7385 904.916C46.2237 931.893 20.6216 958.87 0 987.429L325.139 695.339"/></svg>`,action:()=>{let e=`Read from ${window.location.href} so I can ask questions about it.`;window.open(`https://grok.com/?q=${e}`,`_blank`)}}};function v(e){return e.map(e=>{if(typeof e==`string`){let t=_[e];return t?{...t}:(console.warn(`Unknown action: ${e}. Available actions: ${Object.keys(_).join(`, `)}`),null)}return typeof e==`object`&&e?{...e}:null}).filter(Boolean)}function y(e){let t=v(e.actions);document.addEventListener(`DOMContentLoaded`,()=>{let n=document.querySelector(`.sl-container>h1`);if(!n){console.warn(`Contextual menu: Could not find page title element`);return}let r=n.parentElement;if(!r){console.warn(`Contextual menu: Could not find parent element of title`);return}let i=document.createElement(`div`);i.id=`contextual-menu-container`,i.className=`contextual-menu-container`;let a=null;if(t.length>0){let n=t[0];a=document.createElement(`button`),a.className=`contextual-main-action ${n.className||``}`.trim(),a.addEventListener(`click`,e=>{e.preventDefault(),n.action&&typeof n.action==`function`&&n.action()});let r=``;n.icon&&(r+=n.icon),e.hideMainActionLabel||(r+=`<span>${n.label}</span>`),a.innerHTML=r}let o=document.createElement(`button`);o.id=`contextual-menu-trigger`,o.className=`contextual-menu-trigger`,o.ariaLabel=`Open contextual menu`,o.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" 
           width="16" 
           height="16" 
           viewBox="0 0 24 24"
           fill="none" 
           stroke="currentColor" 
           stroke-width="2" 
           stroke-linecap="round" 
           stroke-linejoin="round">
        <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zM12 13a1 1 0 110-2 1 1 0 010 2zM12 20a1 1 0 110-2 1 1 0 010 2z"/>
      </svg>
    `;let s=document.createElement(`div`);s.id=`contextual-dropdown-menu`,s.className=`contextual-dropdown-menu`,t.forEach(e=>{let t=document.createElement(`button`);t.className=`contextual-menu-item ${e.className||``}`.trim(),t.textContent=e.label,t.addEventListener(`click`,t=>{t.preventDefault(),e.action&&typeof e.action==`function`&&e.action(),d()}),e.icon&&(t.innerHTML=`${e.icon}<span>${e.label}</span>`),s.appendChild(t)}),a&&i.appendChild(a),i.appendChild(o),i.appendChild(s),r.style.display=`flex`,r.style.justifyContent=`space-between`,r.style.alignItems=`flex-start`,r.classList.add(`contextual-menu-parent`),r.appendChild(i);let c=document.createElement(`style`);c.textContent=`
      .contextual-menu-container {
        position: relative;
        display: inline-flex;
        align-items: center;
        margin-left: auto;
      }
      
      .contextual-main-action {
        background: var(--sl-color-bg);
        color: var(--sl-color-text);
        border: 1px solid var(--sl-color-gray-5);
        border-right: none;
        border-radius: 0.5rem 0 0 0.5rem;
        padding: 8px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        text-decoration: none;
        height: 2rem;
        font-size: 14px;
        line-height: 1.5;
        font-family: inherit;
      }
      
      .contextual-main-action:hover {
        background: var(--sl-color-hairline-light);
      }
      
      .contextual-main-action svg {
        width: 16px;
        height: 16px;
        flex-shrink: 0;
      }
      
      .contextual-menu-trigger {
        background: var(--sl-color-bg);
        border: 1px solid var(--sl-color-gray-5);
        border-radius: 0 0.5rem 0.5rem 0;
        padding: 8px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 2rem;
        color: var(--sl-color-text);
      }
      
      .contextual-menu-trigger:hover {
        background: var(--sl-color-hairline-light);
      }
      
      .contextual-dropdown-menu {
        position: absolute;
        top: calc(100% + 10px);
        right: 0;
        background: var(--sl-color-bg);
        border: 1px solid var(--sl-color-gray-5);
        border-radius: 0.5rem;
        box-shadow: var(--sl-shadow-md);
        min-width: 180px;
        opacity: 0;
        visibility: hidden;
        transform: translateY(-10px);
        transition: opacity 0.15s ease, visibility 0.15s ease, transform 0.15s ease;
        z-index: 1000;
        padding: 4px;
      }
      
      .contextual-dropdown-menu.show {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }
      
      .contextual-menu-item {
        display: flex;
        align-items: center;
        padding: 8px 12px;
        color: var(--sl-color-text);
        text-decoration: none;
        font-size: 14px;
        line-height: 1.5;
        gap: 8px;
        border-radius: 0.5rem;
        border: none;
        background: transparent;
        width: 100%;
        text-align: left;
        cursor: pointer;
        font-family: inherit;
      }
      
      .contextual-menu-item:hover {
        background: var(--sl-color-hairline-light);
      }
      
      .contextual-menu-item svg {
        width: 16px;
        height: 16px;
        flex-shrink: 0;
      }
      
        /* Mobile responsive */
        @media (max-width: 72rem) {
          .contextual-menu-parent {
            flex-direction: column;
          }

          .contextual-menu-container {
            margin-left: 0;
          }
          
          .contextual-dropdown-menu {
            left: 0;
            right: auto;
          }
        }
    `,document.head.appendChild(c);let l=!1,u=()=>{l=!l,s.classList.toggle(`show`,l),o.ariaExpanded=l.toString()},d=()=>{l=!1,s.classList.remove(`show`),o.ariaExpanded=`false`};return o.addEventListener(`click`,e=>{e.stopPropagation(),u()}),document.addEventListener(`click`,e=>{i.contains(e.target)||d()}),()=>{i.parentNode&&i.parentNode.removeChild(i),c.parentNode&&c.parentNode.removeChild(c)}})}y({actions:[`copy`,`view`,`chatgpt`,`claude`]}),o();export{y as default};