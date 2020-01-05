var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function f(){return u(" ")}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let p;function m(t){p=t}const h=[],g=[],b=[],$=[],y=Promise.resolve();let x=!1;function _(t){b.push(t)}function k(){const t=new Set;do{for(;h.length;){const t=h.shift();m(t),v(t.$$)}for(;g.length;)g.pop()();for(let e=0;e<b.length;e+=1){const n=b[e];t.has(n)||(n(),t.add(n))}b.length=0}while(h.length);for(;$.length;)$.pop()();x=!1}function v(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const w=new Set;let E;function T(t,e){t&&t.i&&(w.delete(t),t.i(e))}function j(t,n,c){const{fragment:a,on_mount:l,on_destroy:i,after_update:s}=t.$$;a&&a.m(n,c),_(()=>{const n=l.map(e).filter(r);i?i.push(...n):o(n),t.$$.on_mount=[]}),s.forEach(_)}function A(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Z(t,e){-1===t.$$.dirty[0]&&(h.push(t),x||(x=!0,y.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function C(e,r,c,a,l,i,s=[-1]){const u=p;m(e);const f=r.props||{},d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:s};let h=!1;d.ctx=c?c(e,f,(t,n,o=n)=>(d.ctx&&l(d.ctx[t],d.ctx[t]=o)&&(d.bound[t]&&d.bound[t](o),h&&Z(e,t)),n)):[],d.update(),h=!0,o(d.before_update),d.fragment=!!a&&a(d.ctx),r.target&&(r.hydrate?d.fragment&&d.fragment.l(function(t){return Array.from(t.childNodes)}(r.target)):d.fragment&&d.fragment.c(),r.intro&&T(e.$$.fragment),j(e,r.target,r.anchor),k()),m(u)}class N{$destroy(){A(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}class M extends N{constructor(t){super(),C(this,t,null,null,c,{})}}var O={bookmarks:[{id:1578117813826,title:"yoyo",url:"https://dribbble.com/shots/7045637/attachments/45917?mode=media",category:"portfolio",tags:["personal"],icon:"https://cdn.dribbble.com/assets/favicon-63b2904a073c89b52b19aa08cebc16a154bcf83fee8ecc6439968b1e6db569c7.ico",time:"2020-01-04T06:03:33.826Z"},{category:"portfolio",icon:"https://blueprintjs.com/assets/favicon.png",id:1578119852778,tags:["personal"],time:"2020-01-04T06:37:32.778Z",title:"blueprint react framework",url:"https://blueprintjs.com/"},{category:"portfolio",icon:"https://remixicon.com/favicon.ico",id:1578120235116,tags:["personal"],time:"2020-01-04T06:43:55.116Z",title:"REMIX",url:"https://remixicon.com/"}],lastUpdated:"2020-01-05T15:30:52.621Z"};function S(t,e,n){const o=t.slice();return o[1]=e[n],o}function q(e){let n,o,r=e[1].url+"";return{c(){n=s("div"),o=u(r),d(n,"class","bg-white p-4 border-b border-gray-200")},m(t,e){l(t,n,e),a(n,o)},p:t,d(t){t&&i(n)}}}function B(t){let e,n,o,r,c,u,p;const m=new M({});let h=O.bookmarks,g=[];for(let e=0;e<h.length;e+=1)g[e]=q(S(t,h,e));return{c(){var t;e=s("main"),(t=m.$$.fragment)&&t.c(),n=f(),o=s("div"),r=s("h1"),r.textContent="my bookmarks",c=f(),u=s("div");for(let t=0;t<g.length;t+=1)g[t].c();d(r,"class","text-3xl uppercase font-light text-pink-500 text-center py-12"),d(u,"class","shadow-lg rounded-lg overflow-hidden"),d(o,"class","w-2/6 mx-auto "),d(e,"class","bg-gray-100 h-screen")},m(t,i){l(t,e,i),j(m,e,null),a(e,n),a(e,o),a(o,r),a(o,c),a(o,u);for(let t=0;t<g.length;t+=1)g[t].m(u,null);p=!0},p(t,[e]){if(0&e){let n;for(h=O.bookmarks,n=0;n<h.length;n+=1){const o=S(t,h,n);g[n]?g[n].p(o,e):(g[n]=q(o),g[n].c(),g[n].m(u,null))}for(;n<g.length;n+=1)g[n].d(1);g.length=h.length}},i(t){p||(T(m.$$.fragment,t),p=!0)},o(t){!function(t,e,n,o){if(t&&t.o){if(w.has(t))return;w.add(t),E.c.push(()=>{w.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}(m.$$.fragment,t),p=!1},d(t){t&&i(e),A(m),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(g,t)}}}function I(t,e,n){let{name:o}=e;return t.$set=t=>{"name"in t&&n(0,o=t.name)},[o]}return new class extends N{constructor(t){super(),C(this,t,I,B,c,{name:0})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
