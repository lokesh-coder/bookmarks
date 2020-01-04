var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function a(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function u(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function i(){return f(" ")}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let m;function p(t){m=t}const h=[],g=[],b=[],$=[],y=Promise.resolve();let x=!1;function _(t){b.push(t)}function k(){const t=new Set;do{for(;h.length;){const t=h.shift();p(t),v(t.$$)}for(;g.length;)g.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];t.has(e)||(e(),t.add(e))}b.length=0}while(h.length);for(;$.length;)$.pop()();x=!1}function v(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(_)}}const w=new Set;let A;function E(t,n){t&&t.i&&(w.delete(t),t.i(n))}function C(t,e,c){const{fragment:a,on_mount:l,on_destroy:u,after_update:s}=t.$$;a&&a.m(e,c),_(()=>{const e=l.map(n).filter(r);u?u.push(...e):o(e),t.$$.on_mount=[]}),s.forEach(_)}function N(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function T(t,n){-1===t.$$.dirty[0]&&(h.push(t),x||(x=!0,y.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function j(n,r,c,a,l,u,s=[-1]){const f=m;p(n);const i=r.props||{},d=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:l,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:e(),dirty:s};let h=!1;d.ctx=c?c(n,i,(t,e,o=e)=>(d.ctx&&l(d.ctx[t],d.ctx[t]=o)&&(d.bound[t]&&d.bound[t](o),h&&T(n,t)),e)):[],d.update(),h=!0,o(d.before_update),d.fragment=!!a&&a(d.ctx),r.target&&(r.hydrate?d.fragment&&d.fragment.l(function(t){return Array.from(t.childNodes)}(r.target)):d.fragment&&d.fragment.c(),r.intro&&E(n.$$.fragment),C(n,r.target,r.anchor),k()),p(f)}class O{$destroy(){N(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}class S extends O{constructor(t){super(),j(this,t,null,null,c,{})}}var Z={bookmarks:[{id:1578117813826,title:"yoyo",url:"https://dribbble.com/shots/7045637/attachments/45917?mode=media",category:"portfolio",tags:["personal"],icon:"https://cdn.dribbble.com/assets/favicon-63b2904a073c89b52b19aa08cebc16a154bcf83fee8ecc6439968b1e6db569c7.ico",time:"2020-01-04T06:03:33.826Z"}],lastUpdated:"2020-01-04T06:03:33.826Z"};function q(t,n,e){const o=t.slice();return o[1]=n[e],o}function B(n){let e,o,r=n[1].url+"";return{c(){e=s("div"),o=f(r),d(e,"class","bg-white p-4 border-b border-gray-200")},m(t,n){l(t,e,n),a(e,o)},p:t,d(t){t&&u(e)}}}function M(t){let n,e,o,r,c,f,m;const p=new S({});let h=Z.bookmarks,g=[];for(let n=0;n<h.length;n+=1)g[n]=B(q(t,h,n));return{c(){var t;n=s("main"),(t=p.$$.fragment)&&t.c(),e=i(),o=s("div"),r=s("h1"),r.textContent="my bookmarks",c=i(),f=s("div");for(let t=0;t<g.length;t+=1)g[t].c();d(r,"class","text-3xl uppercase font-light text-pink-500 text-center py-12"),d(f,"class","shadow-lg rounded-lg overflow-hidden"),d(o,"class","w-2/6 mx-auto "),d(n,"class","bg-gray-100 h-screen")},m(t,u){l(t,n,u),C(p,n,null),a(n,e),a(n,o),a(o,r),a(o,c),a(o,f);for(let t=0;t<g.length;t+=1)g[t].m(f,null);m=!0},p(t,[n]){if(0&n){let e;for(h=Z.bookmarks,e=0;e<h.length;e+=1){const o=q(t,h,e);g[e]?g[e].p(o,n):(g[e]=B(o),g[e].c(),g[e].m(f,null))}for(;e<g.length;e+=1)g[e].d(1);g.length=h.length}},i(t){m||(E(p.$$.fragment,t),m=!0)},o(t){!function(t,n,e,o){if(t&&t.o){if(w.has(t))return;w.add(t),A.c.push(()=>{w.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}(p.$$.fragment,t),m=!1},d(t){t&&u(n),N(p),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(g,t)}}}function P(t,n,e){let{name:o}=n;return t.$set=t=>{"name"in t&&e(0,o=t.name)},[o]}return new class extends O{constructor(t){super(),j(this,t,P,M,c,{name:0})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
