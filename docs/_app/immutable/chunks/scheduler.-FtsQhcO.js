function w(){}const A=t=>t;function v(t,n){for(const e in n)t[e]=n[e];return t}function j(t){return t()}function B(){return Object.create(null)}function E(t){t.forEach(j)}function C(t){return typeof t=="function"}function F(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let i;function P(t,n){return t===n?!0:(i||(i=document.createElement("a")),i.href=n,t===i.href)}function S(t){return Object.keys(t).length===0}function y(t,...n){if(t==null){for(const r of n)r(void 0);return w}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function U(t){let n;return y(t,e=>n=e)(),n}function D(t,n,e){t.$$.on_destroy.push(y(n,e))}function G(t,n,e,r){if(t){const o=m(t,n,e,r);return t[0](o)}}function m(t,n,e,r){return t[1]&&r?v(e.ctx.slice(),t[1](r(n))):e.ctx}function H(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const l=[],_=Math.max(n.dirty.length,o.length);for(let s=0;s<_;s+=1)l[s]=n.dirty[s]|o[s];return l}return n.dirty|o}return n.dirty}function I(t,n,e,r,o,l){if(o){const _=m(n,e,r,l);t.p(_,o)}}function J(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function K(t,n,e){return t.set(e),n}let f;function d(t){f=t}function k(){if(!f)throw new Error("Function called outside component initialization");return f}function L(t){k().$$.on_mount.push(t)}function N(t){k().$$.after_update.push(t)}const a=[],g=[];let c=[];const p=[],x=Promise.resolve();let b=!1;function q(){b||(b=!0,x.then(z))}function Q(){return q(),x}function O(t){c.push(t)}function R(t){p.push(t)}const h=new Set;let u=0;function z(){if(u!==0)return;const t=f;do{try{for(;u<a.length;){const n=a[u];u++,d(n),M(n.$$)}}catch(n){throw a.length=0,u=0,n}for(d(null),a.length=0,u=0;g.length;)g.pop()();for(let n=0;n<c.length;n+=1){const e=c[n];h.has(e)||(h.add(e),e())}c.length=0}while(a.length);for(;p.length;)p.pop()();b=!1,h.clear(),d(t)}function M(t){if(t.fragment!==null){t.update(),E(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function T(t){const n=[],e=[];c.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),c=n}export{j as A,a as B,q as C,N as a,g as b,D as c,P as d,R as e,O as f,G as g,J as h,A as i,H as j,K as k,U as l,y as m,w as n,L as o,C as p,B as q,E as r,F as s,Q as t,I as u,z as v,S as w,T as x,f as y,d as z};
