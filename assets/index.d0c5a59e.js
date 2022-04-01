const uy=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};uy();function kc(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const hy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fy=kc(hy);function Pf(t){return!!t||t===""}function Rc(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=De(s)?gy(s):Rc(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(De(t))return t;if(Pe(t))return t}}const dy=/;(?![^(]*\))/g,py=/:(.+)/;function gy(t){const e={};return t.split(dy).forEach(n=>{if(n){const s=n.split(py);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Nc(t){let e="";if(De(t))e=t;else if(Y(t))for(let n=0;n<t.length;n++){const s=Nc(t[n]);s&&(e+=s+" ")}else if(Pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const di=t=>De(t)?t:t==null?"":Y(t)||Pe(t)&&(t.toString===Mf||!Z(t.toString))?JSON.stringify(t,xf,2):String(t),xf=(t,e)=>e&&e.__v_isRef?xf(t,e.value):vs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Of(e)?{[`Set(${e.size})`]:[...e.values()]}:Pe(e)&&!Y(e)&&!Lf(e)?String(e):e,de={},ys=[],Tt=()=>{},my=()=>!1,yy=/^on[^a-z]/,vo=t=>yy.test(t),Pc=t=>t.startsWith("onUpdate:"),nt=Object.assign,xc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},vy=Object.prototype.hasOwnProperty,ie=(t,e)=>vy.call(t,e),Y=Array.isArray,vs=t=>_o(t)==="[object Map]",Of=t=>_o(t)==="[object Set]",Z=t=>typeof t=="function",De=t=>typeof t=="string",Oc=t=>typeof t=="symbol",Pe=t=>t!==null&&typeof t=="object",Df=t=>Pe(t)&&Z(t.then)&&Z(t.catch),Mf=Object.prototype.toString,_o=t=>Mf.call(t),_y=t=>_o(t).slice(8,-1),Lf=t=>_o(t)==="[object Object]",Dc=t=>De(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ci=kc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},wy=/-(\w)/g,Lt=wo(t=>t.replace(wy,(e,n)=>n?n.toUpperCase():"")),by=/\B([A-Z])/g,Fs=wo(t=>t.replace(by,"-$1").toLowerCase()),bo=wo(t=>t.charAt(0).toUpperCase()+t.slice(1)),ia=wo(t=>t?`on${bo(t)}`:""),Er=(t,e)=>!Object.is(t,e),oa=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Fi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ey=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let bu;const Ty=()=>bu||(bu=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let $t;class Uf{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&$t&&(this.parent=$t,this.index=($t.scopes||($t.scopes=[])).push(this)-1)}run(e){if(this.active)try{return $t=this,e()}finally{$t=this.parent}}on(){$t=this}off(){$t=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function Ff(t){return new Uf(t)}function Iy(t,e=$t){e&&e.active&&e.effects.push(t)}const Mc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},$f=t=>(t.w&yn)>0,Bf=t=>(t.n&yn)>0,Sy=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=yn},Cy=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];$f(r)&&!Bf(r)?r.delete(t):e[n++]=r,r.w&=~yn,r.n&=~yn}e.length=n}},Oa=new WeakMap;let ir=0,yn=1;const Da=30;let Nt;const Dn=Symbol(""),Ma=Symbol("");class Lc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Iy(this,s)}run(){if(!this.active)return this.fn();let e=Nt,n=fn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Nt,Nt=this,fn=!0,yn=1<<++ir,ir<=Da?Sy(this):Eu(this),this.fn()}finally{ir<=Da&&Cy(this),yn=1<<--ir,Nt=this.parent,fn=n,this.parent=void 0}}stop(){this.active&&(Eu(this),this.onStop&&this.onStop(),this.active=!1)}}function Eu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let fn=!0;const Vf=[];function $s(){Vf.push(fn),fn=!1}function Bs(){const t=Vf.pop();fn=t===void 0?!0:t}function pt(t,e,n){if(fn&&Nt){let s=Oa.get(t);s||Oa.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Mc()),jf(r)}}function jf(t,e){let n=!1;ir<=Da?Bf(t)||(t.n|=yn,n=!$f(t)):n=!t.has(Nt),n&&(t.add(Nt),Nt.deps.push(t))}function Gt(t,e,n,s,r,i){const o=Oa.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Y(t))o.forEach((c,l)=>{(l==="length"||l>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Y(t)?Dc(n)&&a.push(o.get("length")):(a.push(o.get(Dn)),vs(t)&&a.push(o.get(Ma)));break;case"delete":Y(t)||(a.push(o.get(Dn)),vs(t)&&a.push(o.get(Ma)));break;case"set":vs(t)&&a.push(o.get(Dn));break}if(a.length===1)a[0]&&La(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);La(Mc(c))}}function La(t,e){for(const n of Y(t)?t:[...t])(n!==Nt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Ay=kc("__proto__,__v_isRef,__isVue"),qf=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Oc)),ky=Uc(),Ry=Uc(!1,!0),Ny=Uc(!0),Tu=Py();function Py(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ae(this);for(let i=0,o=this.length;i<o;i++)pt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ae)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){$s();const s=ae(this)[e].apply(this,n);return Bs(),s}}),t}function Uc(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Wy:Gf:e?Wf:Kf).get(s))return s;const o=Y(s);if(!t&&o&&ie(Tu,r))return Reflect.get(Tu,r,i);const a=Reflect.get(s,r,i);return(Oc(r)?qf.has(r):Ay(r))||(t||pt(s,"get",r),e)?a:Te(a)?!o||!Dc(r)?a.value:a:Pe(a)?t?Xf(a):Zn(a):a}}const xy=Hf(),Oy=Hf(!0);function Hf(t=!1){return function(n,s,r,i){let o=n[s];if(Tr(o)&&Te(o)&&!Te(r))return!1;if(!t&&!Tr(r)&&(Yf(r)||(r=ae(r),o=ae(o)),!Y(n)&&Te(o)&&!Te(r)))return o.value=r,!0;const a=Y(n)&&Dc(s)?Number(s)<n.length:ie(n,s),c=Reflect.set(n,s,r,i);return n===ae(i)&&(a?Er(r,o)&&Gt(n,"set",s,r):Gt(n,"add",s,r)),c}}function Dy(t,e){const n=ie(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Gt(t,"delete",e,void 0),s}function My(t,e){const n=Reflect.has(t,e);return(!Oc(e)||!qf.has(e))&&pt(t,"has",e),n}function Ly(t){return pt(t,"iterate",Y(t)?"length":Dn),Reflect.ownKeys(t)}const zf={get:ky,set:xy,deleteProperty:Dy,has:My,ownKeys:Ly},Uy={get:Ny,set(t,e){return!0},deleteProperty(t,e){return!0}},Fy=nt({},zf,{get:Ry,set:Oy}),Fc=t=>t,Eo=t=>Reflect.getPrototypeOf(t);function pi(t,e,n=!1,s=!1){t=t.__v_raw;const r=ae(t),i=ae(e);e!==i&&!n&&pt(r,"get",e),!n&&pt(r,"get",i);const{has:o}=Eo(r),a=s?Fc:n?Vc:Ir;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function gi(t,e=!1){const n=this.__v_raw,s=ae(n),r=ae(t);return t!==r&&!e&&pt(s,"has",t),!e&&pt(s,"has",r),t===r?n.has(t):n.has(t)||n.has(r)}function mi(t,e=!1){return t=t.__v_raw,!e&&pt(ae(t),"iterate",Dn),Reflect.get(t,"size",t)}function Iu(t){t=ae(t);const e=ae(this);return Eo(e).has.call(e,t)||(e.add(t),Gt(e,"add",t,t)),this}function Su(t,e){e=ae(e);const n=ae(this),{has:s,get:r}=Eo(n);let i=s.call(n,t);i||(t=ae(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Er(e,o)&&Gt(n,"set",t,e):Gt(n,"add",t,e),this}function Cu(t){const e=ae(this),{has:n,get:s}=Eo(e);let r=n.call(e,t);r||(t=ae(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Gt(e,"delete",t,void 0),i}function Au(){const t=ae(this),e=t.size!==0,n=t.clear();return e&&Gt(t,"clear",void 0,void 0),n}function yi(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ae(o),c=e?Fc:t?Vc:Ir;return!t&&pt(a,"iterate",Dn),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function vi(t,e,n){return function(...s){const r=this.__v_raw,i=ae(r),o=vs(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?Fc:e?Vc:Ir;return!e&&pt(i,"iterate",c?Ma:Dn),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Zt(t){return function(...e){return t==="delete"?!1:this}}function $y(){const t={get(i){return pi(this,i)},get size(){return mi(this)},has:gi,add:Iu,set:Su,delete:Cu,clear:Au,forEach:yi(!1,!1)},e={get(i){return pi(this,i,!1,!0)},get size(){return mi(this)},has:gi,add:Iu,set:Su,delete:Cu,clear:Au,forEach:yi(!1,!0)},n={get(i){return pi(this,i,!0)},get size(){return mi(this,!0)},has(i){return gi.call(this,i,!0)},add:Zt("add"),set:Zt("set"),delete:Zt("delete"),clear:Zt("clear"),forEach:yi(!0,!1)},s={get(i){return pi(this,i,!0,!0)},get size(){return mi(this,!0)},has(i){return gi.call(this,i,!0)},add:Zt("add"),set:Zt("set"),delete:Zt("delete"),clear:Zt("clear"),forEach:yi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=vi(i,!1,!1),n[i]=vi(i,!0,!1),e[i]=vi(i,!1,!0),s[i]=vi(i,!0,!0)}),[t,n,e,s]}const[By,Vy,jy,qy]=$y();function $c(t,e){const n=e?t?qy:jy:t?Vy:By;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ie(n,r)&&r in s?n:s,r,i)}const Hy={get:$c(!1,!1)},zy={get:$c(!1,!0)},Ky={get:$c(!0,!1)},Kf=new WeakMap,Wf=new WeakMap,Gf=new WeakMap,Wy=new WeakMap;function Gy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xy(t){return t.__v_skip||!Object.isExtensible(t)?0:Gy(_y(t))}function Zn(t){return Tr(t)?t:Bc(t,!1,zf,Hy,Kf)}function Yy(t){return Bc(t,!1,Fy,zy,Wf)}function Xf(t){return Bc(t,!0,Uy,Ky,Gf)}function Bc(t,e,n,s,r){if(!Pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Xy(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function dn(t){return Tr(t)?dn(t.__v_raw):!!(t&&t.__v_isReactive)}function Tr(t){return!!(t&&t.__v_isReadonly)}function Yf(t){return!!(t&&t.__v_isShallow)}function Jf(t){return dn(t)||Tr(t)}function ae(t){const e=t&&t.__v_raw;return e?ae(e):t}function Is(t){return Fi(t,"__v_skip",!0),t}const Ir=t=>Pe(t)?Zn(t):t,Vc=t=>Pe(t)?Xf(t):t;function Qf(t){fn&&Nt&&(t=ae(t),jf(t.dep||(t.dep=Mc())))}function Zf(t,e){t=ae(t),t.dep&&La(t.dep)}function Te(t){return!!(t&&t.__v_isRef===!0)}function jc(t){return ed(t,!1)}function Jy(t){return ed(t,!0)}function ed(t,e){return Te(t)?t:new Qy(t,e)}class Qy{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ae(e),this._value=n?e:Ir(e)}get value(){return Qf(this),this._value}set value(e){e=this.__v_isShallow?e:ae(e),Er(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Ir(e),Zf(this))}}function Mn(t){return Te(t)?t.value:t}const Zy={get:(t,e,n)=>Mn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Te(r)&&!Te(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function td(t){return dn(t)?t:new Proxy(t,Zy)}function ev(t){const e=Y(t)?new Array(t.length):{};for(const n in t)e[n]=nv(t,n);return e}class tv{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function nv(t,e,n){const s=t[e];return Te(s)?s:new tv(t,e,n)}class sv{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Lc(e,()=>{this._dirty||(this._dirty=!0,Zf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ae(this);return Qf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function rv(t,e,n=!1){let s,r;const i=Z(t);return i?(s=t,r=Tt):(s=t.get,r=t.set),new sv(s,r,i||!r,n)}Promise.resolve();function pn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){To(i,e,n)}return r}function It(t,e,n,s){if(Z(t)){const i=pn(t,e,n,s);return i&&Df(i)&&i.catch(o=>{To(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(It(t[i],e,n,s));return r}function To(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){pn(c,null,10,[t,o,a]);return}}iv(t,n,r,s)}function iv(t,e,n,s=!0){console.error(t)}let $i=!1,Ua=!1;const ut=[];let Vt=0;const ur=[];let or=null,us=0;const hr=[];let sn=null,hs=0;const nd=Promise.resolve();let qc=null,Fa=null;function Hc(t){const e=qc||nd;return t?e.then(this?t.bind(this):t):e}function ov(t){let e=Vt+1,n=ut.length;for(;e<n;){const s=e+n>>>1;Sr(ut[s])<t?e=s+1:n=s}return e}function sd(t){(!ut.length||!ut.includes(t,$i&&t.allowRecurse?Vt+1:Vt))&&t!==Fa&&(t.id==null?ut.push(t):ut.splice(ov(t.id),0,t),rd())}function rd(){!$i&&!Ua&&(Ua=!0,qc=nd.then(ad))}function av(t){const e=ut.indexOf(t);e>Vt&&ut.splice(e,1)}function id(t,e,n,s){Y(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),rd()}function cv(t){id(t,or,ur,us)}function lv(t){id(t,sn,hr,hs)}function zc(t,e=null){if(ur.length){for(Fa=e,or=[...new Set(ur)],ur.length=0,us=0;us<or.length;us++)or[us]();or=null,us=0,Fa=null,zc(t,e)}}function od(t){if(hr.length){const e=[...new Set(hr)];if(hr.length=0,sn){sn.push(...e);return}for(sn=e,sn.sort((n,s)=>Sr(n)-Sr(s)),hs=0;hs<sn.length;hs++)sn[hs]();sn=null,hs=0}}const Sr=t=>t.id==null?1/0:t.id;function ad(t){Ua=!1,$i=!0,zc(t),ut.sort((n,s)=>Sr(n)-Sr(s));const e=Tt;try{for(Vt=0;Vt<ut.length;Vt++){const n=ut[Vt];n&&n.active!==!1&&pn(n,null,14)}}finally{Vt=0,ut.length=0,od(),$i=!1,qc=null,(ut.length||ur.length||hr.length)&&ad(t)}}function uv(t,e,...n){const s=t.vnode.props||de;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||de;f?r=n.map(g=>g.trim()):h&&(r=n.map(Ey))}let a,c=s[a=ia(e)]||s[a=ia(Lt(e))];!c&&i&&(c=s[a=ia(Fs(e))]),c&&It(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,It(l,t,6,r)}}function cd(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!Z(t)){const c=l=>{const u=cd(l,e,!0);u&&(a=!0,nt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(s.set(t,null),null):(Y(i)?i.forEach(c=>o[c]=null):nt(o,i),s.set(t,o),o)}function Kc(t,e){return!t||!vo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ie(t,e[0].toLowerCase()+e.slice(1))||ie(t,Fs(e))||ie(t,e))}let vt=null,ld=null;function Bi(t){const e=vt;return vt=t,ld=t&&t.type.__scopeId||null,e}function ud(t,e=vt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Uu(-1);const i=Bi(e),o=t(...r);return Bi(i),s._d&&Uu(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function aa(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:g,ctx:m,inheritAttrs:I}=t;let _,k;const D=Bi(t);try{if(n.shapeFlag&4){const O=r||s;_=Rt(u.call(O,O,h,i,g,f,m)),k=c}else{const O=e;_=Rt(O.length>1?O(i,{attrs:c,slots:a,emit:l}):O(i,null)),k=e.props?c:hv(c)}}catch(O){dr.length=0,To(O,t,1),_=Ke(jn)}let U=_;if(k&&I!==!1){const O=Object.keys(k),{shapeFlag:se}=U;O.length&&se&7&&(o&&O.some(Pc)&&(k=fv(k,o)),U=Cr(U,k))}return n.dirs&&(U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&(U.transition=n.transition),_=U,Bi(D),_}const hv=t=>{let e;for(const n in t)(n==="class"||n==="style"||vo(n))&&((e||(e={}))[n]=t[n]);return e},fv=(t,e)=>{const n={};for(const s in t)(!Pc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function dv(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?ku(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!Kc(l,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?ku(s,o,l):!0:!!o;return!1}function ku(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Kc(n,i))return!0}return!1}function pv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const gv=t=>t.__isSuspense;function mv(t,e){e&&e.pendingBranch?Y(t)?e.effects.push(...t):e.effects.push(t):lv(t)}function Ai(t,e){if(Oe){let n=Oe.provides;const s=Oe.parent&&Oe.parent.provides;s===n&&(n=Oe.provides=Object.create(s)),n[t]=e}}function xt(t,e,n=!1){const s=Oe||vt;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Z(e)?e.call(s.proxy):e}}const Ru={};function fr(t,e,n){return hd(t,e,n)}function hd(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=de){const a=Oe;let c,l=!1,u=!1;if(Te(t)?(c=()=>t.value,l=Yf(t)):dn(t)?(c=()=>t,s=!0):Y(t)?(u=!0,l=t.some(dn),c=()=>t.map(k=>{if(Te(k))return k.value;if(dn(k))return Pn(k);if(Z(k))return pn(k,a,2)})):Z(t)?e?c=()=>pn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),It(t,a,3,[f])}:c=Tt,e&&s){const k=c;c=()=>Pn(k())}let h,f=k=>{h=_.onStop=()=>{pn(k,a,4)}};if(Ar)return f=Tt,e?n&&It(e,a,3,[c(),u?[]:void 0,f]):c(),Tt;let g=u?[]:Ru;const m=()=>{if(!!_.active)if(e){const k=_.run();(s||l||(u?k.some((D,U)=>Er(D,g[U])):Er(k,g)))&&(h&&h(),It(e,a,3,[k,g===Ru?void 0:g,f]),g=k)}else _.run()};m.allowRecurse=!!e;let I;r==="sync"?I=m:r==="post"?I=()=>st(m,a&&a.suspense):I=()=>{!a||a.isMounted?cv(m):m()};const _=new Lc(c,I);return e?n?m():g=_.run():r==="post"?st(_.run.bind(_),a&&a.suspense):_.run(),()=>{_.stop(),a&&a.scope&&xc(a.scope.effects,_)}}function yv(t,e,n){const s=this.proxy,r=De(t)?t.includes(".")?fd(s,t):()=>s[t]:t.bind(s,s);let i;Z(e)?i=e:(i=e.handler,n=e);const o=Oe;Ss(this);const a=hd(r,i.bind(s),n);return o?Ss(o):Fn(),a}function fd(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Pn(t,e){if(!Pe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Te(t))Pn(t.value,e);else if(Y(t))for(let n=0;n<t.length;n++)Pn(t[n],e);else if(Of(t)||vs(t))t.forEach(n=>{Pn(n,e)});else if(Lf(t))for(const n in t)Pn(t[n],e);return t}function dd(t){return Z(t)?{setup:t,name:t.name}:t}const $a=t=>!!t.type.__asyncLoader,pd=t=>t.type.__isKeepAlive;function vv(t,e){gd(t,"a",e)}function _v(t,e){gd(t,"da",e)}function gd(t,e,n=Oe){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Io(e,s,n),n){let r=n.parent;for(;r&&r.parent;)pd(r.parent.vnode)&&wv(s,e,n,r),r=r.parent}}function wv(t,e,n,s){const r=Io(e,t,s,!0);Wc(()=>{xc(s[e],r)},n)}function Io(t,e,n=Oe,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;$s(),Ss(n);const a=It(e,n,t,o);return Fn(),Bs(),a});return s?r.unshift(i):r.push(i),i}}const Qt=t=>(e,n=Oe)=>(!Ar||t==="sp")&&Io(t,e,n),bv=Qt("bm"),md=Qt("m"),Ev=Qt("bu"),Tv=Qt("u"),Iv=Qt("bum"),Wc=Qt("um"),Sv=Qt("sp"),Cv=Qt("rtg"),Av=Qt("rtc");function kv(t,e=Oe){Io("ec",t,e)}let Ba=!0;function Rv(t){const e=vd(t),n=t.proxy,s=t.ctx;Ba=!1,e.beforeCreate&&Nu(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:g,updated:m,activated:I,deactivated:_,beforeDestroy:k,beforeUnmount:D,destroyed:U,unmounted:O,render:se,renderTracked:H,renderTriggered:W,errorCaptured:Se,serverPrefetch:_e,expose:He,inheritAttrs:_t,components:wt,directives:mt,filters:Re}=e;if(l&&Nv(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const pe in o){const le=o[pe];Z(le)&&(s[pe]=le.bind(n))}if(r){const pe=r.call(n,n);Pe(pe)&&(t.data=Zn(pe))}if(Ba=!0,i)for(const pe in i){const le=i[pe],ct=Z(le)?le.bind(n,n):Z(le.get)?le.get.bind(n,n):Tt,rs=!Z(le)&&Z(le.set)?le.set.bind(n):Tt,Ft=Et({get:ct,set:rs});Object.defineProperty(s,pe,{enumerable:!0,configurable:!0,get:()=>Ft.value,set:St=>Ft.value=St})}if(a)for(const pe in a)yd(a[pe],s,n,pe);if(c){const pe=Z(c)?c.call(n):c;Reflect.ownKeys(pe).forEach(le=>{Ai(le,pe[le])})}u&&Nu(u,t,"c");function Ne(pe,le){Y(le)?le.forEach(ct=>pe(ct.bind(n))):le&&pe(le.bind(n))}if(Ne(bv,h),Ne(md,f),Ne(Ev,g),Ne(Tv,m),Ne(vv,I),Ne(_v,_),Ne(kv,Se),Ne(Av,H),Ne(Cv,W),Ne(Iv,D),Ne(Wc,O),Ne(Sv,_e),Y(He))if(He.length){const pe=t.exposed||(t.exposed={});He.forEach(le=>{Object.defineProperty(pe,le,{get:()=>n[le],set:ct=>n[le]=ct})})}else t.exposed||(t.exposed={});se&&t.render===Tt&&(t.render=se),_t!=null&&(t.inheritAttrs=_t),wt&&(t.components=wt),mt&&(t.directives=mt)}function Nv(t,e,n=Tt,s=!1){Y(t)&&(t=Va(t));for(const r in t){const i=t[r];let o;Pe(i)?"default"in i?o=xt(i.from||r,i.default,!0):o=xt(i.from||r):o=xt(i),Te(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Nu(t,e,n){It(Y(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function yd(t,e,n,s){const r=s.includes(".")?fd(n,s):()=>n[s];if(De(t)){const i=e[t];Z(i)&&fr(r,i)}else if(Z(t))fr(r,t.bind(n));else if(Pe(t))if(Y(t))t.forEach(i=>yd(i,e,n,s));else{const i=Z(t.handler)?t.handler.bind(n):e[t.handler];Z(i)&&fr(r,i,t)}}function vd(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Vi(c,l,o,!0)),Vi(c,e,o)),i.set(e,c),c}function Vi(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Vi(t,i,n,!0),r&&r.forEach(o=>Vi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Pv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Pv={data:Pu,props:kn,emits:kn,methods:kn,computed:kn,beforeCreate:Je,created:Je,beforeMount:Je,mounted:Je,beforeUpdate:Je,updated:Je,beforeDestroy:Je,beforeUnmount:Je,destroyed:Je,unmounted:Je,activated:Je,deactivated:Je,errorCaptured:Je,serverPrefetch:Je,components:kn,directives:kn,watch:Ov,provide:Pu,inject:xv};function Pu(t,e){return e?t?function(){return nt(Z(t)?t.call(this,this):t,Z(e)?e.call(this,this):e)}:e:t}function xv(t,e){return kn(Va(t),Va(e))}function Va(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Je(t,e){return t?[...new Set([].concat(t,e))]:e}function kn(t,e){return t?nt(nt(Object.create(null),t),e):e}function Ov(t,e){if(!t)return e;if(!e)return t;const n=nt(Object.create(null),t);for(const s in e)n[s]=Je(t[s],e[s]);return n}function Dv(t,e,n,s=!1){const r={},i={};Fi(i,So,1),t.propsDefaults=Object.create(null),_d(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Yy(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Mv(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ae(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];const g=e[f];if(c)if(ie(i,f))g!==i[f]&&(i[f]=g,l=!0);else{const m=Lt(f);r[m]=ja(c,a,m,g,t,!1)}else g!==i[f]&&(i[f]=g,l=!0)}}}else{_d(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!ie(e,h)&&((u=Fs(h))===h||!ie(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=ja(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!ie(e,h)&&!0)&&(delete i[h],l=!0)}l&&Gt(t,"set","$attrs")}function _d(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ci(c))continue;const l=e[c];let u;r&&ie(r,u=Lt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Kc(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=ae(n),l=a||de;for(let u=0;u<i.length;u++){const h=i[u];n[h]=ja(r,c,h,l[h],t,!ie(l,h))}}return o}function ja(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ie(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&Z(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Ss(r),s=l[n]=c.call(null,e),Fn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Fs(n))&&(s=!0))}return s}function wd(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!Z(t)){const u=h=>{c=!0;const[f,g]=wd(h,e,!0);nt(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return s.set(t,ys),ys;if(Y(i))for(let u=0;u<i.length;u++){const h=Lt(i[u]);xu(h)&&(o[h]=de)}else if(i)for(const u in i){const h=Lt(u);if(xu(h)){const f=i[u],g=o[h]=Y(f)||Z(f)?{type:f}:f;if(g){const m=Mu(Boolean,g.type),I=Mu(String,g.type);g[0]=m>-1,g[1]=I<0||m<I,(m>-1||ie(g,"default"))&&a.push(h)}}}const l=[o,a];return s.set(t,l),l}function xu(t){return t[0]!=="$"}function Ou(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Du(t,e){return Ou(t)===Ou(e)}function Mu(t,e){return Y(e)?e.findIndex(n=>Du(n,t)):Z(e)&&Du(e,t)?0:-1}const bd=t=>t[0]==="_"||t==="$stable",Gc=t=>Y(t)?t.map(Rt):[Rt(t)],Lv=(t,e,n)=>{const s=ud((...r)=>Gc(e(...r)),n);return s._c=!1,s},Ed=(t,e,n)=>{const s=t._ctx;for(const r in t){if(bd(r))continue;const i=t[r];if(Z(i))e[r]=Lv(r,i,s);else if(i!=null){const o=Gc(i);e[r]=()=>o}}},Td=(t,e)=>{const n=Gc(e);t.slots.default=()=>n},Uv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ae(e),Fi(e,"_",n)):Ed(e,t.slots={})}else t.slots={},e&&Td(t,e);Fi(t.slots,So,1)},Fv=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=de;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(nt(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Ed(e,r)),o=e}else e&&(Td(t,e),o={default:1});if(i)for(const a in r)!bd(a)&&!(a in o)&&delete r[a]};function qk(t,e){const n=vt;if(n===null)return t;const s=n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=de]=e[i];Z(o)&&(o={mounted:o,updated:o}),o.deep&&Pn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function Cn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&($s(),It(c,n,8,[t.el,a,t,e]),Bs())}}function Id(){return{app:null,config:{isNativeTag:my,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $v=0;function Bv(t,e){return function(s,r=null){r!=null&&!Pe(r)&&(r=null);const i=Id(),o=new Set;let a=!1;const c=i.app={_uid:$v++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:u_,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&Z(l.install)?(o.add(l),l.install(c,...u)):Z(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=Ke(s,r);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,Zc(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function qa(t,e,n,s,r=!1){if(Y(t)){t.forEach((f,g)=>qa(f,e&&(Y(e)?e[g]:e),n,s,r));return}if($a(s)&&!r)return;const i=s.shapeFlag&4?Zc(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===de?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(De(l)?(u[l]=null,ie(h,l)&&(h[l]=null)):Te(l)&&(l.value=null)),Z(c))pn(c,a,12,[o,u]);else{const f=De(c),g=Te(c);if(f||g){const m=()=>{if(t.f){const I=f?u[c]:c.value;r?Y(I)&&xc(I,i):Y(I)?I.includes(i)||I.push(i):f?u[c]=[i]:(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,ie(h,c)&&(h[c]=o)):Te(c)&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,st(m,n)):m()}}}const st=mv;function Vv(t){return jv(t)}function jv(t,e){const n=Ty();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:g=Tt,cloneNode:m,insertStaticContent:I}=t,_=(d,p,y,b=null,w=null,C=null,P=!1,S=null,R=!!p.dynamicChildren)=>{if(d===p)return;d&&!er(d,p)&&(b=$(d),yt(d,w,C,!0),d=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:T,ref:V,shapeFlag:M}=p;switch(T){case Xc:k(d,p,y,b);break;case jn:D(d,p,y,b);break;case ki:d==null&&U(p,y,b,P);break;case kt:mt(d,p,y,b,w,C,P,S,R);break;default:M&1?H(d,p,y,b,w,C,P,S,R):M&6?Re(d,p,y,b,w,C,P,S,R):(M&64||M&128)&&T.process(d,p,y,b,w,C,P,S,R,ge)}V!=null&&w&&qa(V,d&&d.ref,C,p||d,!p)},k=(d,p,y,b)=>{if(d==null)s(p.el=a(p.children),y,b);else{const w=p.el=d.el;p.children!==d.children&&l(w,p.children)}},D=(d,p,y,b)=>{d==null?s(p.el=c(p.children||""),y,b):p.el=d.el},U=(d,p,y,b)=>{[d.el,d.anchor]=I(d.children,p,y,b,d.el,d.anchor)},O=({el:d,anchor:p},y,b)=>{let w;for(;d&&d!==p;)w=f(d),s(d,y,b),d=w;s(p,y,b)},se=({el:d,anchor:p})=>{let y;for(;d&&d!==p;)y=f(d),r(d),d=y;r(p)},H=(d,p,y,b,w,C,P,S,R)=>{P=P||p.type==="svg",d==null?W(p,y,b,w,C,P,S,R):He(d,p,w,C,P,S,R)},W=(d,p,y,b,w,C,P,S)=>{let R,T;const{type:V,props:M,shapeFlag:j,transition:K,patchFlag:re,dirs:we}=d;if(d.el&&m!==void 0&&re===-1)R=d.el=m(d.el);else{if(R=d.el=o(d.type,C,M&&M.is,M),j&8?u(R,d.children):j&16&&_e(d.children,R,null,b,w,C&&V!=="foreignObject",P,S),we&&Cn(d,null,b,"created"),M){for(const ye in M)ye!=="value"&&!Ci(ye)&&i(R,ye,null,M[ye],C,d.children,b,w,N);"value"in M&&i(R,"value",null,M.value),(T=M.onVnodeBeforeMount)&&At(T,b,d)}Se(R,d,d.scopeId,P,b)}we&&Cn(d,null,b,"beforeMount");const he=(!w||w&&!w.pendingBranch)&&K&&!K.persisted;he&&K.beforeEnter(R),s(R,p,y),((T=M&&M.onVnodeMounted)||he||we)&&st(()=>{T&&At(T,b,d),he&&K.enter(R),we&&Cn(d,null,b,"mounted")},w)},Se=(d,p,y,b,w)=>{if(y&&g(d,y),b)for(let C=0;C<b.length;C++)g(d,b[C]);if(w){let C=w.subTree;if(p===C){const P=w.vnode;Se(d,P,P.scopeId,P.slotScopeIds,w.parent)}}},_e=(d,p,y,b,w,C,P,S,R=0)=>{for(let T=R;T<d.length;T++){const V=d[T]=S?rn(d[T]):Rt(d[T]);_(null,V,p,y,b,w,C,P,S)}},He=(d,p,y,b,w,C,P)=>{const S=p.el=d.el;let{patchFlag:R,dynamicChildren:T,dirs:V}=p;R|=d.patchFlag&16;const M=d.props||de,j=p.props||de;let K;y&&An(y,!1),(K=j.onVnodeBeforeUpdate)&&At(K,y,p,d),V&&Cn(p,d,y,"beforeUpdate"),y&&An(y,!0);const re=w&&p.type!=="foreignObject";if(T?_t(d.dynamicChildren,T,S,y,b,re,C):P||ct(d,p,S,null,y,b,re,C,!1),R>0){if(R&16)wt(S,p,M,j,y,b,w);else if(R&2&&M.class!==j.class&&i(S,"class",null,j.class,w),R&4&&i(S,"style",M.style,j.style,w),R&8){const we=p.dynamicProps;for(let he=0;he<we.length;he++){const ye=we[he],bt=M[ye],is=j[ye];(is!==bt||ye==="value")&&i(S,ye,bt,is,w,d.children,y,b,N)}}R&1&&d.children!==p.children&&u(S,p.children)}else!P&&T==null&&wt(S,p,M,j,y,b,w);((K=j.onVnodeUpdated)||V)&&st(()=>{K&&At(K,y,p,d),V&&Cn(p,d,y,"updated")},b)},_t=(d,p,y,b,w,C,P)=>{for(let S=0;S<p.length;S++){const R=d[S],T=p[S],V=R.el&&(R.type===kt||!er(R,T)||R.shapeFlag&70)?h(R.el):y;_(R,T,V,null,b,w,C,P,!0)}},wt=(d,p,y,b,w,C,P)=>{if(y!==b){for(const S in b){if(Ci(S))continue;const R=b[S],T=y[S];R!==T&&S!=="value"&&i(d,S,T,R,P,p.children,w,C,N)}if(y!==de)for(const S in y)!Ci(S)&&!(S in b)&&i(d,S,y[S],null,P,p.children,w,C,N);"value"in b&&i(d,"value",y.value,b.value)}},mt=(d,p,y,b,w,C,P,S,R)=>{const T=p.el=d?d.el:a(""),V=p.anchor=d?d.anchor:a("");let{patchFlag:M,dynamicChildren:j,slotScopeIds:K}=p;K&&(S=S?S.concat(K):K),d==null?(s(T,y,b),s(V,y,b),_e(p.children,y,V,w,C,P,S,R)):M>0&&M&64&&j&&d.dynamicChildren?(_t(d.dynamicChildren,j,y,w,C,P,S),(p.key!=null||w&&p===w.subTree)&&Sd(d,p,!0)):ct(d,p,y,V,w,C,P,S,R)},Re=(d,p,y,b,w,C,P,S,R)=>{p.slotScopeIds=S,d==null?p.shapeFlag&512?w.ctx.activate(p,y,b,P,R):ss(p,y,b,w,C,P,R):Ne(d,p,R)},ss=(d,p,y,b,w,C,P)=>{const S=d.component=s_(d,b,w);if(pd(d)&&(S.ctx.renderer=ge),r_(S),S.asyncDep){if(w&&w.registerDep(S,pe),!d.el){const R=S.subTree=Ke(jn);D(null,R,p,y)}return}pe(S,d,p,y,w,C,P)},Ne=(d,p,y)=>{const b=p.component=d.component;if(dv(d,p,y))if(b.asyncDep&&!b.asyncResolved){le(b,p,y);return}else b.next=p,av(b.update),b.update();else p.component=d.component,p.el=d.el,b.vnode=p},pe=(d,p,y,b,w,C,P)=>{const S=()=>{if(d.isMounted){let{next:V,bu:M,u:j,parent:K,vnode:re}=d,we=V,he;An(d,!1),V?(V.el=re.el,le(d,V,P)):V=re,M&&oa(M),(he=V.props&&V.props.onVnodeBeforeUpdate)&&At(he,K,V,re),An(d,!0);const ye=aa(d),bt=d.subTree;d.subTree=ye,_(bt,ye,h(bt.el),$(bt),d,w,C),V.el=ye.el,we===null&&pv(d,ye.el),j&&st(j,w),(he=V.props&&V.props.onVnodeUpdated)&&st(()=>At(he,K,V,re),w)}else{let V;const{el:M,props:j}=p,{bm:K,m:re,parent:we}=d,he=$a(p);if(An(d,!1),K&&oa(K),!he&&(V=j&&j.onVnodeBeforeMount)&&At(V,we,p),An(d,!0),M&&Q){const ye=()=>{d.subTree=aa(d),Q(M,d.subTree,d,w,null)};he?p.type.__asyncLoader().then(()=>!d.isUnmounted&&ye()):ye()}else{const ye=d.subTree=aa(d);_(null,ye,y,b,d,w,C),p.el=ye.el}if(re&&st(re,w),!he&&(V=j&&j.onVnodeMounted)){const ye=p;st(()=>At(V,we,ye),w)}p.shapeFlag&256&&d.a&&st(d.a,w),d.isMounted=!0,p=y=b=null}},R=d.effect=new Lc(S,()=>sd(d.update),d.scope),T=d.update=R.run.bind(R);T.id=d.uid,An(d,!0),T()},le=(d,p,y)=>{p.component=d;const b=d.vnode.props;d.vnode=p,d.next=null,Mv(d,p.props,b,y),Fv(d,p.children,y),$s(),zc(void 0,d.update),Bs()},ct=(d,p,y,b,w,C,P,S,R=!1)=>{const T=d&&d.children,V=d?d.shapeFlag:0,M=p.children,{patchFlag:j,shapeFlag:K}=p;if(j>0){if(j&128){Ft(T,M,y,b,w,C,P,S,R);return}else if(j&256){rs(T,M,y,b,w,C,P,S,R);return}}K&8?(V&16&&N(T,w,C),M!==T&&u(y,M)):V&16?K&16?Ft(T,M,y,b,w,C,P,S,R):N(T,w,C,!0):(V&8&&u(y,""),K&16&&_e(M,y,b,w,C,P,S,R))},rs=(d,p,y,b,w,C,P,S,R)=>{d=d||ys,p=p||ys;const T=d.length,V=p.length,M=Math.min(T,V);let j;for(j=0;j<M;j++){const K=p[j]=R?rn(p[j]):Rt(p[j]);_(d[j],K,y,null,w,C,P,S,R)}T>V?N(d,w,C,!0,!1,M):_e(p,y,b,w,C,P,S,R,M)},Ft=(d,p,y,b,w,C,P,S,R)=>{let T=0;const V=p.length;let M=d.length-1,j=V-1;for(;T<=M&&T<=j;){const K=d[T],re=p[T]=R?rn(p[T]):Rt(p[T]);if(er(K,re))_(K,re,y,null,w,C,P,S,R);else break;T++}for(;T<=M&&T<=j;){const K=d[M],re=p[j]=R?rn(p[j]):Rt(p[j]);if(er(K,re))_(K,re,y,null,w,C,P,S,R);else break;M--,j--}if(T>M){if(T<=j){const K=j+1,re=K<V?p[K].el:b;for(;T<=j;)_(null,p[T]=R?rn(p[T]):Rt(p[T]),y,re,w,C,P,S,R),T++}}else if(T>j)for(;T<=M;)yt(d[T],w,C,!0),T++;else{const K=T,re=T,we=new Map;for(T=re;T<=j;T++){const lt=p[T]=R?rn(p[T]):Rt(p[T]);lt.key!=null&&we.set(lt.key,T)}let he,ye=0;const bt=j-re+1;let is=!1,vu=0;const Zs=new Array(bt);for(T=0;T<bt;T++)Zs[T]=0;for(T=K;T<=M;T++){const lt=d[T];if(ye>=bt){yt(lt,w,C,!0);continue}let Ct;if(lt.key!=null)Ct=we.get(lt.key);else for(he=re;he<=j;he++)if(Zs[he-re]===0&&er(lt,p[he])){Ct=he;break}Ct===void 0?yt(lt,w,C,!0):(Zs[Ct-re]=T+1,Ct>=vu?vu=Ct:is=!0,_(lt,p[Ct],y,null,w,C,P,S,R),ye++)}const _u=is?qv(Zs):ys;for(he=_u.length-1,T=bt-1;T>=0;T--){const lt=re+T,Ct=p[lt],wu=lt+1<V?p[lt+1].el:b;Zs[T]===0?_(null,Ct,y,wu,w,C,P,S,R):is&&(he<0||T!==_u[he]?St(Ct,y,wu,2):he--)}}},St=(d,p,y,b,w=null)=>{const{el:C,type:P,transition:S,children:R,shapeFlag:T}=d;if(T&6){St(d.component.subTree,p,y,b);return}if(T&128){d.suspense.move(p,y,b);return}if(T&64){P.move(d,p,y,ge);return}if(P===kt){s(C,p,y);for(let M=0;M<R.length;M++)St(R[M],p,y,b);s(d.anchor,p,y);return}if(P===ki){O(d,p,y);return}if(b!==2&&T&1&&S)if(b===0)S.beforeEnter(C),s(C,p,y),st(()=>S.enter(C),w);else{const{leave:M,delayLeave:j,afterLeave:K}=S,re=()=>s(C,p,y),we=()=>{M(C,()=>{re(),K&&K()})};j?j(C,re,we):we()}else s(C,p,y)},yt=(d,p,y,b=!1,w=!1)=>{const{type:C,props:P,ref:S,children:R,dynamicChildren:T,shapeFlag:V,patchFlag:M,dirs:j}=d;if(S!=null&&qa(S,null,y,d,!0),V&256){p.ctx.deactivate(d);return}const K=V&1&&j,re=!$a(d);let we;if(re&&(we=P&&P.onVnodeBeforeUnmount)&&At(we,p,d),V&6)L(d.component,y,b);else{if(V&128){d.suspense.unmount(y,b);return}K&&Cn(d,null,p,"beforeUnmount"),V&64?d.type.remove(d,p,y,w,ge,b):T&&(C!==kt||M>0&&M&64)?N(T,p,y,!1,!0):(C===kt&&M&384||!w&&V&16)&&N(R,p,y),b&&ra(d)}(re&&(we=P&&P.onVnodeUnmounted)||K)&&st(()=>{we&&At(we,p,d),K&&Cn(d,null,p,"unmounted")},y)},ra=d=>{const{type:p,el:y,anchor:b,transition:w}=d;if(p===kt){v(y,b);return}if(p===ki){se(d);return}const C=()=>{r(y),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:P,delayLeave:S}=w,R=()=>P(y,C);S?S(d.el,C,R):R()}else C()},v=(d,p)=>{let y;for(;d!==p;)y=f(d),r(d),d=y;r(p)},L=(d,p,y)=>{const{bum:b,scope:w,update:C,subTree:P,um:S}=d;b&&oa(b),w.stop(),C&&(C.active=!1,yt(P,d,p,y)),S&&st(S,p),st(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},N=(d,p,y,b=!1,w=!1,C=0)=>{for(let P=C;P<d.length;P++)yt(d[P],p,y,b,w)},$=d=>d.shapeFlag&6?$(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),ue=(d,p,y)=>{d==null?p._vnode&&yt(p._vnode,null,null,!0):_(p._vnode||null,d,p,null,null,null,y),od(),p._vnode=d},ge={p:_,um:yt,m:St,r:ra,mt:ss,mc:_e,pc:ct,pbc:_t,n:$,o:t};let te,Q;return e&&([te,Q]=e(ge)),{render:ue,hydrate:te,createApp:Bv(ue,te)}}function An({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Sd(t,e,n=!1){const s=t.children,r=e.children;if(Y(s)&&Y(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=rn(r[i]),a.el=o.el),n||Sd(o,a))}}function qv(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Hv=t=>t.__isTeleport,Cd="components";function zv(t,e){return Wv(Cd,t,!0,e)||t}const Kv=Symbol();function Wv(t,e,n=!0,s=!1){const r=vt||Oe;if(r){const i=r.type;if(t===Cd){const a=c_(i);if(a&&(a===e||a===Lt(e)||a===bo(Lt(e))))return i}const o=Lu(r[t]||i[t],e)||Lu(r.appContext[t],e);return!o&&s?i:o}}function Lu(t,e){return t&&(t[e]||t[Lt(e)]||t[bo(Lt(e))])}const kt=Symbol(void 0),Xc=Symbol(void 0),jn=Symbol(void 0),ki=Symbol(void 0),dr=[];let Ln=null;function Un(t=!1){dr.push(Ln=t?null:[])}function Gv(){dr.pop(),Ln=dr[dr.length-1]||null}let ji=1;function Uu(t){ji+=t}function Ad(t){return t.dynamicChildren=ji>0?Ln||ys:null,Gv(),ji>0&&Ln&&Ln.push(t),t}function qi(t,e,n,s,r,i){return Ad(Qe(t,e,n,s,r,i,!0))}function Yc(t,e,n,s,r){return Ad(Ke(t,e,n,s,r,!0))}function Ha(t){return t?t.__v_isVNode===!0:!1}function er(t,e){return t.type===e.type&&t.key===e.key}const So="__vInternal",kd=({key:t})=>t!=null?t:null,Ri=({ref:t,ref_key:e,ref_for:n})=>t!=null?De(t)||Te(t)||Z(t)?{i:vt,r:t,k:e,f:!!n}:t:null;function Qe(t,e=null,n=null,s=0,r=null,i=t===kt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&kd(e),ref:e&&Ri(e),scopeId:ld,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(Qc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=De(n)?8:16),ji>0&&!o&&Ln&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ln.push(c),c}const Ke=Xv;function Xv(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Kv)&&(t=jn),Ha(t)){const a=Cr(t,e,!0);return n&&Qc(a,n),a}if(l_(t)&&(t=t.__vccOpts),e){e=Yv(e);let{class:a,style:c}=e;a&&!De(a)&&(e.class=Nc(a)),Pe(c)&&(Jf(c)&&!Y(c)&&(c=nt({},c)),e.style=Rc(c))}const o=De(t)?1:gv(t)?128:Hv(t)?64:Pe(t)?4:Z(t)?2:0;return Qe(t,e,n,s,r,o,i,!0)}function Yv(t){return t?Jf(t)||So in t?nt({},t):t:null}function Cr(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Qv(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&kd(a),ref:e&&e.ref?n&&r?Y(r)?r.concat(Ri(e)):[r,Ri(e)]:Ri(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==kt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Cr(t.ssContent),ssFallback:t.ssFallback&&Cr(t.ssFallback),el:t.el,anchor:t.anchor}}function Jv(t=" ",e=0){return Ke(Xc,null,t,e)}function Jc(t,e){const n=Ke(ki,null,t);return n.staticCount=e,n}function Hk(t="",e=!1){return e?(Un(),Yc(jn,null,t)):Ke(jn,null,t)}function Rt(t){return t==null||typeof t=="boolean"?Ke(jn):Y(t)?Ke(kt,null,t.slice()):typeof t=="object"?rn(t):Ke(Xc,null,String(t))}function rn(t){return t.el===null||t.memo?t:Cr(t)}function Qc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(Y(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Qc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(So in e)?e._ctx=vt:r===3&&vt&&(vt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Z(e)?(e={default:e,_ctx:vt},n=32):(e=String(e),s&64?(n=16,e=[Jv(e)]):n=8);t.children=e,t.shapeFlag|=n}function Qv(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Nc([e.class,s.class]));else if(r==="style")e.style=Rc([e.style,s.style]);else if(vo(r)){const i=e[r],o=s[r];o&&i!==o&&!(Y(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function At(t,e,n,s=null){It(t,e,7,[n,s])}function Zv(t,e,n,s){let r;const i=n&&n[s];if(Y(t)||De(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Pe(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const za=t=>t?Nd(t)?Zc(t)||t.proxy:za(t.parent):null,Hi=nt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>za(t.parent),$root:t=>za(t.root),$emit:t=>t.emit,$options:t=>vd(t),$forceUpdate:t=>()=>sd(t.update),$nextTick:t=>Hc.bind(t.proxy),$watch:t=>yv.bind(t)}),e_={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(s!==de&&ie(s,e))return o[e]=1,s[e];if(r!==de&&ie(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&ie(l,e))return o[e]=3,i[e];if(n!==de&&ie(n,e))return o[e]=4,n[e];Ba&&(o[e]=0)}}const u=Hi[e];let h,f;if(u)return e==="$attrs"&&pt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==de&&ie(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ie(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return r!==de&&ie(r,e)?(r[e]=n,!0):s!==de&&ie(s,e)?(s[e]=n,!0):ie(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==de&&ie(t,o)||e!==de&&ie(e,o)||(a=i[0])&&ie(a,o)||ie(s,o)||ie(Hi,o)||ie(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?this.set(t,e,n.get(),null):n.value!=null&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},t_=Id();let n_=0;function s_(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||t_,i={uid:n_++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Uf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wd(s,r),emitsOptions:cd(s,r),emit:null,emitted:null,propsDefaults:de,inheritAttrs:s.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=uv.bind(null,i),t.ce&&t.ce(i),i}let Oe=null;const Rd=()=>Oe||vt,Ss=t=>{Oe=t,t.scope.on()},Fn=()=>{Oe&&Oe.scope.off(),Oe=null};function Nd(t){return t.vnode.shapeFlag&4}let Ar=!1;function r_(t,e=!1){Ar=e;const{props:n,children:s}=t.vnode,r=Nd(t);Dv(t,n,r,e),Uv(t,s);const i=r?i_(t,e):void 0;return Ar=!1,i}function i_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Is(new Proxy(t.ctx,e_));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?a_(t):null;Ss(t),$s();const i=pn(s,t,0,[t.props,r]);if(Bs(),Fn(),Df(i)){if(i.then(Fn,Fn),e)return i.then(o=>{Fu(t,o,e)}).catch(o=>{To(o,t,0)});t.asyncDep=i}else Fu(t,i,e)}else Pd(t,e)}function Fu(t,e,n){Z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Pe(e)&&(t.setupState=td(e)),Pd(t,n)}let $u;function Pd(t,e,n){const s=t.type;if(!t.render){if(!e&&$u&&!s.render){const r=s.template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=nt(nt({isCustomElement:i,delimiters:a},o),c);s.render=$u(r,l)}}t.render=s.render||Tt}Ss(t),$s(),Rv(t),Bs(),Fn()}function o_(t){return new Proxy(t.attrs,{get(e,n){return pt(t,"get","$attrs"),e[n]}})}function a_(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=o_(t))},slots:t.slots,emit:t.emit,expose:e}}function Zc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(td(Is(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Hi)return Hi[n](t)}}))}function c_(t){return Z(t)&&t.displayName||t.name}function l_(t){return Z(t)&&"__vccOpts"in t}const Et=(t,e)=>rv(t,e,Ar);function xd(t,e,n){const s=arguments.length;return s===2?Pe(e)&&!Y(e)?Ha(e)?Ke(t,null,[e]):Ke(t,e):Ke(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ha(n)&&(n=[n]),Ke(t,e,n))}const u_="3.2.31",h_="http://www.w3.org/2000/svg",Nn=typeof document!="undefined"?document:null,Bu=Nn&&Nn.createElement("template"),f_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Nn.createElementNS(h_,t):Nn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Nn.createTextNode(t),createComment:t=>Nn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Nn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Bu.innerHTML=s?`<svg>${t}</svg>`:t;const a=Bu.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function d_(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function p_(t,e,n){const s=t.style,r=De(n);if(n&&!r){for(const i in n)Ka(s,i,n[i]);if(e&&!De(e))for(const i in e)n[i]==null&&Ka(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Vu=/\s*!important$/;function Ka(t,e,n){if(Y(n))n.forEach(s=>Ka(t,e,s));else if(e.startsWith("--"))t.setProperty(e,n);else{const s=g_(t,e);Vu.test(n)?t.setProperty(Fs(s),n.replace(Vu,""),"important"):t[s]=n}}const ju=["Webkit","Moz","ms"],ca={};function g_(t,e){const n=ca[e];if(n)return n;let s=Lt(e);if(s!=="filter"&&s in t)return ca[e]=s;s=bo(s);for(let r=0;r<ju.length;r++){const i=ju[r]+s;if(i in t)return ca[e]=i}return e}const qu="http://www.w3.org/1999/xlink";function m_(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(qu,e.slice(6,e.length)):t.setAttributeNS(qu,e,n);else{const i=fy(e);n==null||i&&!Pf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function y_(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=Pf(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let zi=Date.now,Od=!1;if(typeof window!="undefined"){zi()>document.createEvent("Event").timeStamp&&(zi=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);Od=!!(t&&Number(t[1])<=53)}let Wa=0;const v_=Promise.resolve(),__=()=>{Wa=0},w_=()=>Wa||(v_.then(__),Wa=zi());function b_(t,e,n,s){t.addEventListener(e,n,s)}function E_(t,e,n,s){t.removeEventListener(e,n,s)}function T_(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=I_(e);if(s){const l=i[e]=S_(s,r);b_(t,a,l,c)}else o&&(E_(t,a,o,c),i[e]=void 0)}}const Hu=/(?:Once|Passive|Capture)$/;function I_(t){let e;if(Hu.test(t)){e={};let n;for(;n=t.match(Hu);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Fs(t.slice(2)),e]}function S_(t,e){const n=s=>{const r=s.timeStamp||zi();(Od||r>=n.attached-1)&&It(C_(s,n.value),e,5,[s])};return n.value=t,n.attached=w_(),n}function C_(t,e){if(Y(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const zu=/^on[a-z]/,A_=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?d_(t,s,r):e==="style"?p_(t,n,s):vo(e)?Pc(e)||T_(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):k_(t,e,s,r))?y_(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),m_(t,e,s,r))};function k_(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&zu.test(e)&&Z(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||zu.test(e)&&De(n)?!1:e in t}const R_=["ctrl","shift","alt","meta"],N_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>R_.some(n=>t[`${n}Key`]&&!e.includes(n))},zk=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=N_[e[r]];if(i&&i(n,e))return}return t(n,...s)},Kk={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):tr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),tr(t,!0),s.enter(t)):s.leave(t,()=>{tr(t,!1)}):tr(t,e))},beforeUnmount(t,{value:e}){tr(t,e)}};function tr(t,e){t.style.display=e?t._vod:"none"}const P_=nt({patchProp:A_},f_);let Ku;function x_(){return Ku||(Ku=Vv(P_))}const O_=(...t)=>{const e=x_().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=D_(s);if(!r)return;const i=e._component;!Z(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function D_(t){return De(t)?document.querySelector(t):t}var M_=!1;/*!
  * pinia v2.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let Dd;const Co=t=>Dd=t,Md=Symbol();function Ga(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var pr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(pr||(pr={}));function L_(){const t=Ff(!0),e=t.run(()=>jc({}));let n=[],s=[];const r=Is({install(i){Co(r),r._a=i,i.provide(Md,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!M_?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const Ld=()=>{};function Wu(t,e,n,s=Ld){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&Rd()&&Wc(r),r}function os(t,...e){t.slice().forEach(n=>{n(...e)})}function Xa(t,e){for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];Ga(r)&&Ga(s)&&t.hasOwnProperty(n)&&!Te(s)&&!dn(s)?t[n]=Xa(r,s):t[n]=s}return t}const U_=Symbol();function F_(t){return!Ga(t)||!t.hasOwnProperty(U_)}const{assign:Bt}=Object;function $_(t){return!!(Te(t)&&t.effect)}function B_(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=r?r():{});const u=ev(n.state.value[t]);return Bt(u,i,Object.keys(o||{}).reduce((h,f)=>(h[f]=Is(Et(()=>{Co(n);const g=n._s.get(t);return o[f].call(g,g)})),h),{}))}return c=Ud(t,l,e,n),c.$reset=function(){const h=r?r():{};this.$patch(f=>{Bt(f,h)})},c}function Ud(t,e,n={},s,r){let i;const o=n.state,a=Bt({actions:{}},n),c={deep:!0};let l,u,h=Is([]),f=Is([]),g;const m=s.state.value[t];!o&&!m&&(s.state.value[t]={}),jc({});function I(H){let W;l=u=!1,typeof H=="function"?(H(s.state.value[t]),W={type:pr.patchFunction,storeId:t,events:g}):(Xa(s.state.value[t],H),W={type:pr.patchObject,payload:H,storeId:t,events:g}),Hc().then(()=>{l=!0}),u=!0,os(h,W,s.state.value[t])}const _=Ld;function k(){i.stop(),h=[],f=[],s._s.delete(t)}function D(H,W){return function(){Co(s);const Se=Array.from(arguments),_e=[],He=[];function _t(Re){_e.push(Re)}function wt(Re){He.push(Re)}os(f,{args:Se,name:H,store:O,after:_t,onError:wt});let mt;try{mt=W.apply(this&&this.$id===t?this:O,Se)}catch(Re){throw os(He,Re),Re}return mt instanceof Promise?mt.then(Re=>(os(_e,Re),Re)).catch(Re=>(os(He,Re),Promise.reject(Re))):(os(_e,mt),mt)}}const U={_p:s,$id:t,$onAction:Wu.bind(null,f),$patch:I,$reset:_,$subscribe(H,W={}){const Se=Wu(h,H,W.detached,()=>_e()),_e=i.run(()=>fr(()=>s.state.value[t],He=>{(W.flush==="sync"?u:l)&&H({storeId:t,type:pr.direct,events:g},He)},Bt({},c,W)));return Se},$dispose:k},O=Zn(Bt({},U));s._s.set(t,O);const se=s._e.run(()=>(i=Ff(),i.run(()=>e())));for(const H in se){const W=se[H];if(Te(W)&&!$_(W)||dn(W))o||(m&&F_(W)&&(Te(W)?W.value=m[H]:Xa(W,m[H])),s.state.value[t][H]=W);else if(typeof W=="function"){const Se=D(H,W);se[H]=Se,a.actions[H]=W}}return Bt(O,se),Bt(ae(O),se),Object.defineProperty(O,"$state",{get:()=>s.state.value[t],set:H=>{I(W=>{Bt(W,H)})}}),s._p.forEach(H=>{Bt(O,i.run(()=>H({store:O,app:s._a,pinia:s,options:a})))}),m&&o&&n.hydrate&&n.hydrate(O.$state,m),l=!0,u=!0,O}function Wk(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,c){const l=Rd();return a=a||l&&xt(Md),a&&Co(a),a=Dd,a._s.has(s)||(i?Ud(s,e,r,a):B_(s,r,a)),a._s.get(s)}return o.$id=s,o}/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Fd=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Vs=t=>Fd?Symbol(t):"_vr_"+t,V_=Vs("rvlm"),Gu=Vs("rvd"),el=Vs("r"),tl=Vs("rl"),Ya=Vs("rvl"),fs=typeof window!="undefined";function j_(t){return t.__esModule||Fd&&t[Symbol.toStringTag]==="Module"}const fe=Object.assign;function la(t,e){const n={};for(const s in e){const r=e[s];n[s]=Array.isArray(r)?r.map(t):t(r)}return n}const gr=()=>{},q_=/\/$/,H_=t=>t.replace(q_,"");function ua(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(s=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),r=t(i)),c>-1&&(s=s||e.slice(0,c),o=e.slice(c,e.length)),s=G_(s!=null?s:e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function z_(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Xu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function K_(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Cs(e.matched[s],n.matched[r])&&$d(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Cs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function $d(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!W_(t[n],e[n]))return!1;return!0}function W_(t,e){return Array.isArray(t)?Yu(t,e):Array.isArray(e)?Yu(e,t):t===e}function Yu(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function G_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],!(r===1||o==="."))if(o==="..")r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var kr;(function(t){t.pop="pop",t.push="push"})(kr||(kr={}));var mr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(mr||(mr={}));function X_(t){if(!t)if(fs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),H_(t)}const Y_=/^[^#]+#/;function J_(t,e){return t.replace(Y_,"#")+e}function Q_(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Ao=()=>({left:window.pageXOffset,top:window.pageYOffset});function Z_(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Q_(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ju(t,e){return(history.state?history.state.position-e:-1)+t}const Ja=new Map;function ew(t,e){Ja.set(t,e)}function tw(t){const e=Ja.get(t);return Ja.delete(t),e}let nw=()=>location.protocol+"//"+location.host;function Bd(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Xu(c,"")}return Xu(n,t)+s+r}function sw(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const g=Bd(t,location),m=n.value,I=e.value;let _=0;if(f){if(n.value=g,e.value=f,o&&o===m){o=null;return}_=I?f.position-I.position:0}else s(g);r.forEach(k=>{k(n.value,m,{delta:_,type:kr.pop,direction:_?_>0?mr.forward:mr.back:mr.unknown})})};function c(){o=n.value}function l(f){r.push(f);const g=()=>{const m=r.indexOf(f);m>-1&&r.splice(m,1)};return i.push(g),g}function u(){const{history:f}=window;!f.state||f.replaceState(fe({},f.state,{scroll:Ao()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function Qu(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Ao():null}}function rw(t){const{history:e,location:n}=window,s={value:Bd(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:nw()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),r.value=l}catch(g){console.error(g),n[u?"replace":"assign"](f)}}function o(c,l){const u=fe({},e.state,Qu(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=fe({},r.value,e.state,{forward:c,scroll:Ao()});i(u.current,u,!0);const h=fe({},Qu(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function iw(t){t=X_(t);const e=rw(t),n=sw(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=fe({location:"",base:t,go:s,createHref:J_.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function ow(t){return typeof t=="string"||t&&typeof t=="object"}function Vd(t){return typeof t=="string"||typeof t=="symbol"}const en={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},jd=Vs("nf");var Zu;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Zu||(Zu={}));function As(t,e){return fe(new Error,{type:t,[jd]:!0},e)}function tn(t,e){return t instanceof Error&&jd in t&&(e==null||!!(t.type&e))}const eh="[^/]+?",aw={sensitive:!1,strict:!1,start:!0,end:!0},cw=/[.+*?^${}()[\]/\\]/g;function lw(t,e){const n=fe({},aw,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const f=l[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(cw,"\\$&"),g+=40;else if(f.type===1){const{value:m,repeatable:I,optional:_,regexp:k}=f;i.push({name:m,repeatable:I,optional:_});const D=k||eh;if(D!==eh){g+=10;try{new RegExp(`(${D})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${m}" (${D}): `+O.message)}}let U=I?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;h||(U=_&&l.length<2?`(?:/${U})`:"/"+U),_&&(U+="?"),r+=U,g+=20,_&&(g+=-8),I&&(g+=-20),D===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const g=u[f]||"",m=i[f-1];h[m.name]=g&&m.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of f)if(g.type===0)u+=g.value;else if(g.type===1){const{value:m,repeatable:I,optional:_}=g,k=m in l?l[m]:"";if(Array.isArray(k)&&!I)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const D=Array.isArray(k)?k.join("/"):k;if(!D)if(_)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=D}}return u}return{re:o,score:s,keys:i,parse:a,stringify:c}}function uw(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function hw(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=uw(s[n],r[n]);if(i)return i;n++}return r.length-s.length}const fw={type:0,value:""},dw=/[a-zA-Z0-9_]/;function pw(t){if(!t)return[[]];if(t==="/")return[[fw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:dw.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function gw(t,e,n){const s=lw(pw(t.path),n),r=fe(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function mw(t,e){const n=[],s=new Map;e=nh({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,f){const g=!f,m=vw(u);m.aliasOf=f&&f.record;const I=nh(e,u),_=[m];if("alias"in u){const U=typeof u.alias=="string"?[u.alias]:u.alias;for(const O of U)_.push(fe({},m,{components:f?f.record.components:m.components,path:O,aliasOf:f?f.record:m}))}let k,D;for(const U of _){const{path:O}=U;if(h&&O[0]!=="/"){const se=h.record.path,H=se[se.length-1]==="/"?"":"/";U.path=h.record.path+(O&&H+O)}if(k=gw(U,h,I),f?f.alias.push(k):(D=D||k,D!==k&&D.alias.push(k),g&&u.name&&!th(k)&&o(u.name)),"children"in m){const se=m.children;for(let H=0;H<se.length;H++)i(se[H],k,f&&f.children[H])}f=f||k,c(k)}return D?()=>{o(D)}:gr}function o(u){if(Vd(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&hw(u,n[h])>=0&&(u.record.path!==n[h].record.path||!qd(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!th(u)&&s.set(u.record.name,u)}function l(u,h){let f,g={},m,I;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw As(1,{location:u});I=f.record.name,g=fe(yw(h.params,f.keys.filter(D=>!D.optional).map(D=>D.name)),u.params),m=f.stringify(g)}else if("path"in u)m=u.path,f=n.find(D=>D.re.test(m)),f&&(g=f.parse(m),I=f.record.name);else{if(f=h.name?s.get(h.name):n.find(D=>D.re.test(h.path)),!f)throw As(1,{location:u,currentLocation:h});I=f.record.name,g=fe({},h.params,u.params),m=f.stringify(g)}const _=[];let k=f;for(;k;)_.unshift(k.record),k=k.parent;return{name:I,path:m,params:g,matched:_,meta:ww(_)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function yw(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function vw(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:_w(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function _w(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function th(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ww(t){return t.reduce((e,n)=>fe(e,n.meta),{})}function nh(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function qd(t,e){return e.children.some(n=>n===t||qd(t,n))}const Hd=/#/g,bw=/&/g,Ew=/\//g,Tw=/=/g,Iw=/\?/g,zd=/\+/g,Sw=/%5B/g,Cw=/%5D/g,Kd=/%5E/g,Aw=/%60/g,Wd=/%7B/g,kw=/%7C/g,Gd=/%7D/g,Rw=/%20/g;function nl(t){return encodeURI(""+t).replace(kw,"|").replace(Sw,"[").replace(Cw,"]")}function Nw(t){return nl(t).replace(Wd,"{").replace(Gd,"}").replace(Kd,"^")}function Qa(t){return nl(t).replace(zd,"%2B").replace(Rw,"+").replace(Hd,"%23").replace(bw,"%26").replace(Aw,"`").replace(Wd,"{").replace(Gd,"}").replace(Kd,"^")}function Pw(t){return Qa(t).replace(Tw,"%3D")}function xw(t){return nl(t).replace(Hd,"%23").replace(Iw,"%3F")}function Ow(t){return t==null?"":xw(t).replace(Ew,"%2F")}function Ki(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Dw(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(zd," "),o=i.indexOf("="),a=Ki(o<0?i:i.slice(0,o)),c=o<0?null:Ki(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function sh(t){let e="";for(let n in t){const s=t[n];if(n=Pw(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(s)?s.map(i=>i&&Qa(i)):[s&&Qa(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Mw(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Array.isArray(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}function nr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function on(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(As(4,{from:n,to:e})):h instanceof Error?a(h):ow(h)?a(As(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function ha(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Lw(a)){const l=(a.__vccOpts||a)[e];l&&r.push(on(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=j_(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&on(f,n,s,i,o)()}))}}return r}function Lw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function rh(t){const e=xt(el),n=xt(tl),s=Et(()=>e.resolve(Mn(t.to))),r=Et(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Cs.bind(null,u));if(f>-1)return f;const g=ih(c[l-2]);return l>1&&ih(u)===g&&h[h.length-1].path!==g?h.findIndex(Cs.bind(null,c[l-2])):f}),i=Et(()=>r.value>-1&&Bw(n.params,s.value.params)),o=Et(()=>r.value>-1&&r.value===n.matched.length-1&&$d(n.params,s.value.params));function a(c={}){return $w(c)?e[Mn(t.replace)?"replace":"push"](Mn(t.to)).catch(gr):Promise.resolve()}return{route:s,href:Et(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const Uw=dd({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:rh,setup(t,{slots:e}){const n=Zn(rh(t)),{options:s}=xt(el),r=Et(()=>({[oh(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[oh(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:xd("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),Fw=Uw;function $w(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Bw(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Array.isArray(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function ih(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const oh=(t,e,n)=>t!=null?t:e!=null?e:n,Vw=dd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const s=xt(Ya),r=Et(()=>t.route||s.value),i=xt(Gu,0),o=Et(()=>r.value.matched[i]);Ai(Gu,i+1),Ai(V_,o),Ai(Ya,r);const a=jc();return fr(()=>[a.value,o.value,t.name],([c,l,u],[h,f,g])=>{l&&(l.instances[u]=c,f&&f!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),c&&l&&(!f||!Cs(l,f)||!h)&&(l.enterCallbacks[u]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=r.value,l=o.value,u=l&&l.components[t.name],h=t.name;if(!u)return ah(n.default,{Component:u,route:c});const f=l.props[t.name],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,I=xd(u,fe({},g,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return ah(n.default,{Component:I,route:c})||I}}});function ah(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Xd=Vw;function jw(t){const e=mw(t.routes,t),n=t.parseQuery||Dw,s=t.stringifyQuery||sh,r=t.history,i=nr(),o=nr(),a=nr(),c=Jy(en);let l=en;fs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=la.bind(null,v=>""+v),h=la.bind(null,Ow),f=la.bind(null,Ki);function g(v,L){let N,$;return Vd(v)?(N=e.getRecordMatcher(v),$=L):$=v,e.addRoute($,N)}function m(v){const L=e.getRecordMatcher(v);L&&e.removeRoute(L)}function I(){return e.getRoutes().map(v=>v.record)}function _(v){return!!e.getRecordMatcher(v)}function k(v,L){if(L=fe({},L||c.value),typeof v=="string"){const Q=ua(n,v,L.path),d=e.resolve({path:Q.path},L),p=r.createHref(Q.fullPath);return fe(Q,d,{params:f(d.params),hash:Ki(Q.hash),redirectedFrom:void 0,href:p})}let N;if("path"in v)N=fe({},v,{path:ua(n,v.path,L.path).path});else{const Q=fe({},v.params);for(const d in Q)Q[d]==null&&delete Q[d];N=fe({},v,{params:h(v.params)}),L.params=h(L.params)}const $=e.resolve(N,L),ue=v.hash||"";$.params=u(f($.params));const ge=z_(s,fe({},v,{hash:Nw(ue),path:$.path})),te=r.createHref(ge);return fe({fullPath:ge,hash:ue,query:s===sh?Mw(v.query):v.query||{}},$,{redirectedFrom:void 0,href:te})}function D(v){return typeof v=="string"?ua(n,v,c.value.path):fe({},v)}function U(v,L){if(l!==v)return As(8,{from:L,to:v})}function O(v){return W(v)}function se(v){return O(fe(D(v),{replace:!0}))}function H(v){const L=v.matched[v.matched.length-1];if(L&&L.redirect){const{redirect:N}=L;let $=typeof N=="function"?N(v):N;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=D($):{path:$},$.params={}),fe({query:v.query,hash:v.hash,params:v.params},$)}}function W(v,L){const N=l=k(v),$=c.value,ue=v.state,ge=v.force,te=v.replace===!0,Q=H(N);if(Q)return W(fe(D(Q),{state:ue,force:ge,replace:te}),L||N);const d=N;d.redirectedFrom=L;let p;return!ge&&K_(s,$,N)&&(p=As(16,{to:d,from:$}),rs($,$,!0,!1)),(p?Promise.resolve(p):_e(d,$)).catch(y=>tn(y)?tn(y,2)?y:ct(y):pe(y,d,$)).then(y=>{if(y){if(tn(y,2))return W(fe(D(y.to),{state:ue,force:ge,replace:te}),L||d)}else y=_t(d,$,!0,te,ue);return He(d,$,y),y})}function Se(v,L){const N=U(v,L);return N?Promise.reject(N):Promise.resolve()}function _e(v,L){let N;const[$,ue,ge]=qw(v,L);N=ha($.reverse(),"beforeRouteLeave",v,L);for(const Q of $)Q.leaveGuards.forEach(d=>{N.push(on(d,v,L))});const te=Se.bind(null,v,L);return N.push(te),as(N).then(()=>{N=[];for(const Q of i.list())N.push(on(Q,v,L));return N.push(te),as(N)}).then(()=>{N=ha(ue,"beforeRouteUpdate",v,L);for(const Q of ue)Q.updateGuards.forEach(d=>{N.push(on(d,v,L))});return N.push(te),as(N)}).then(()=>{N=[];for(const Q of v.matched)if(Q.beforeEnter&&!L.matched.includes(Q))if(Array.isArray(Q.beforeEnter))for(const d of Q.beforeEnter)N.push(on(d,v,L));else N.push(on(Q.beforeEnter,v,L));return N.push(te),as(N)}).then(()=>(v.matched.forEach(Q=>Q.enterCallbacks={}),N=ha(ge,"beforeRouteEnter",v,L),N.push(te),as(N))).then(()=>{N=[];for(const Q of o.list())N.push(on(Q,v,L));return N.push(te),as(N)}).catch(Q=>tn(Q,8)?Q:Promise.reject(Q))}function He(v,L,N){for(const $ of a.list())$(v,L,N)}function _t(v,L,N,$,ue){const ge=U(v,L);if(ge)return ge;const te=L===en,Q=fs?history.state:{};N&&($||te?r.replace(v.fullPath,fe({scroll:te&&Q&&Q.scroll},ue)):r.push(v.fullPath,ue)),c.value=v,rs(v,L,N,te),ct()}let wt;function mt(){wt=r.listen((v,L,N)=>{const $=k(v),ue=H($);if(ue){W(fe(ue,{replace:!0}),$).catch(gr);return}l=$;const ge=c.value;fs&&ew(Ju(ge.fullPath,N.delta),Ao()),_e($,ge).catch(te=>tn(te,12)?te:tn(te,2)?(W(te.to,$).then(Q=>{tn(Q,20)&&!N.delta&&N.type===kr.pop&&r.go(-1,!1)}).catch(gr),Promise.reject()):(N.delta&&r.go(-N.delta,!1),pe(te,$,ge))).then(te=>{te=te||_t($,ge,!1),te&&(N.delta?r.go(-N.delta,!1):N.type===kr.pop&&tn(te,20)&&r.go(-1,!1)),He($,ge,te)}).catch(gr)})}let Re=nr(),ss=nr(),Ne;function pe(v,L,N){ct(v);const $=ss.list();return $.length?$.forEach(ue=>ue(v,L,N)):console.error(v),Promise.reject(v)}function le(){return Ne&&c.value!==en?Promise.resolve():new Promise((v,L)=>{Re.add([v,L])})}function ct(v){return Ne||(Ne=!v,mt(),Re.list().forEach(([L,N])=>v?N(v):L()),Re.reset()),v}function rs(v,L,N,$){const{scrollBehavior:ue}=t;if(!fs||!ue)return Promise.resolve();const ge=!N&&tw(Ju(v.fullPath,0))||($||!N)&&history.state&&history.state.scroll||null;return Hc().then(()=>ue(v,L,ge)).then(te=>te&&Z_(te)).catch(te=>pe(te,v,L))}const Ft=v=>r.go(v);let St;const yt=new Set;return{currentRoute:c,addRoute:g,removeRoute:m,hasRoute:_,getRoutes:I,resolve:k,options:t,push:O,replace:se,go:Ft,back:()=>Ft(-1),forward:()=>Ft(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ss.add,isReady:le,install(v){const L=this;v.component("RouterLink",Fw),v.component("RouterView",Xd),v.config.globalProperties.$router=L,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Mn(c)}),fs&&!St&&c.value===en&&(St=!0,O(r.location).catch(ue=>{}));const N={};for(const ue in en)N[ue]=Et(()=>c.value[ue]);v.provide(el,L),v.provide(tl,Zn(N)),v.provide(Ya,c);const $=v.unmount;yt.add(v),v.unmount=function(){yt.delete(v),yt.size<1&&(l=en,wt&&wt(),c.value=en,St=!1,Ne=!1),$()}}}}function as(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function qw(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Cs(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Cs(l,c))||r.push(c))}return[n,s,r]}function Gk(){return xt(tl)}const Hw={setup(t){return(e,n)=>(Un(),Yc(Mn(Xd)))}},zw="modulepreload",ch={},Kw="/prueba/",lh=function(e,n){return!n||n.length===0?e():Promise.all(n.map(s=>{if(s=`${Kw}${s}`,s in ch)return;ch[s]=!0;const r=s.endsWith(".css"),i=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${i}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":zw,r||(o.as="script",o.crossOrigin=""),o.href=s,document.head.appendChild(o),r)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};var Ww="/prueba/assets/1.5aad1b01.jpg",Gw="/prueba/assets/2.6c6fe12e.jpg",Xw="/prueba/assets/3.c25a1509.jpg",Yw="/prueba/assets/navbar-logo.8c94bc3b.svg",Jw=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n};const Qw={},Zw={class:"navbar navbar-expand-lg navbar-dark fixed-top",id:"mainNav"},eb=Jc('<div class="container"><a class="navbar-brand" href="#page-top"><img src="'+Yw+'" alt="..."></a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"> Menu <i class="fas fa-bars ms-1"></i></button><div class="collapse navbar-collapse" id="navbarResponsive"><ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0"><li class="nav-item"><a class="nav-link" href="#programa">Programaci\xF3n</a></li><li class="nav-item"><a class="nav-link" href="#danthea">Compa\xF1ia</a></li><li class="nav-item"><a class="nav-link" href="#escola">Escola</a></li><li class="nav-item"><a class="nav-link" href="#equipo">Equipo</a></li><li class="nav-item"><a class="nav-link" href="#contact">Contacto</a></li></ul></div></div>',1),tb=[eb];function nb(t,e){return Un(),qi("nav",Zw,tb)}var sb=Jw(Qw,[["render",nb]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},rb=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Jd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(f=64)),s.push(n[u],n[h],n[f],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Yd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):rb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const f=i<<2|a>>4;if(s.push(f),l!==64){const g=a<<4&240|l>>2;if(s.push(g),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},ib=function(t){const e=Yd(t);return Jd.encodeByteArray(e,!0)},Qd=function(t){return ib(t).replace(/\./g,"")},ob=function(t){try{return Jd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zd(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Me())}function ep(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function tp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cb(){return Me().indexOf("Electron/")>=0}function np(){const t=Me();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function lb(){return Me().indexOf("MSAppHost/")>=0}function ub(){return typeof indexedDB=="object"}function hb(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb="FirebaseError";class Tn extends Error{constructor(e,n,s){super(n);this.code=e,this.customData=s,this.name=fb,Object.setPrototypeOf(this,Tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hr.prototype.create)}}class Hr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?db(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Tn(r,a,s)}}function db(t,e){return t.replace(pb,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const pb=/\{\$([^}]+)}/g;function gb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(uh(i)&&uh(o)){if(!Wi(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function uh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function mb(t,e){const n=new yb(t,e);return n.subscribe.bind(n)}class yb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");vb(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=fa),r.error===void 0&&(r.error=fa),r.complete===void 0&&(r.complete=fa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function fa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(t,e){return new Promise((n,s)=>{t.onsuccess=r=>{n(r.target.result)},t.onerror=r=>{var i;s(`${e}: ${(i=r.target.error)===null||i===void 0?void 0:i.message}`)}})}class hh{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n){return new sp(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new rp(this._db.createObjectStore(e,n))}close(){this._db.close()}}class sp{constructor(e){this._transaction=e,this.complete=new Promise((n,s)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{s(this._transaction.error)},this._transaction.onabort=()=>{s(this._transaction.error)}})}objectStore(e){return new rp(this._transaction.objectStore(e))}}class rp{constructor(e){this._store=e}index(e){return new fh(this._store.index(e))}createIndex(e,n,s){return new fh(this._store.createIndex(e,n,s))}get(e){const n=this._store.get(e);return ar(n,"Error reading from IndexedDB")}put(e,n){const s=this._store.put(e,n);return ar(s,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return ar(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return ar(e,"Error clearing IndexedDB object store")}}class fh{constructor(e){this._index=e}get(e){const n=this._index.get(e);return ar(n,"Error reading from IndexedDB")}}function _b(t,e,n){return new Promise((s,r)=>{try{const i=indexedDB.open(t,e);i.onsuccess=o=>{s(new hh(o.target.result))},i.onerror=o=>{var a;r(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},i.onupgradeneeded=o=>{n(new hh(i.result),o.oldVersion,o.newVersion,new sp(i.transaction))}}catch(i){r(`Error opening indexedDB: ${i.message}`)}})}class vn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ab;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Eb(e))try{this.getOrInitializeService({instanceIdentifier:Rn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Rn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rn){return this.instances.has(e)}getOptions(e=Rn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:bb(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Rn){return this.component?this.component.multipleInstances?e:Rn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bb(t){return t===Rn?void 0:t}function Eb(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const Ib={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},Sb=oe.INFO,Cb={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},Ab=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Cb[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sl{constructor(e){this.name=e,this._logLevel=Sb,this._logHandler=Ab,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ib[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Rb(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Rb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Za="@firebase/app",dh="0.7.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl=new sl("@firebase/app"),Nb="@firebase/app-compat",Pb="@firebase/analytics-compat",xb="@firebase/analytics",Ob="@firebase/app-check-compat",Db="@firebase/app-check",Mb="@firebase/auth",Lb="@firebase/auth-compat",Ub="@firebase/database",Fb="@firebase/database-compat",$b="@firebase/functions",Bb="@firebase/functions-compat",Vb="@firebase/installations",jb="@firebase/installations-compat",qb="@firebase/messaging",Hb="@firebase/messaging-compat",zb="@firebase/performance",Kb="@firebase/performance-compat",Wb="@firebase/remote-config",Gb="@firebase/remote-config-compat",Xb="@firebase/storage",Yb="@firebase/storage-compat",Jb="@firebase/firestore",Qb="@firebase/firestore-compat",Zb="firebase",eE="9.6.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip="[DEFAULT]",tE={[Za]:"fire-core",[Nb]:"fire-core-compat",[xb]:"fire-analytics",[Pb]:"fire-analytics-compat",[Db]:"fire-app-check",[Ob]:"fire-app-check-compat",[Mb]:"fire-auth",[Lb]:"fire-auth-compat",[Ub]:"fire-rtdb",[Fb]:"fire-rtdb-compat",[$b]:"fire-fn",[Bb]:"fire-fn-compat",[Vb]:"fire-iid",[jb]:"fire-iid-compat",[qb]:"fire-fcm",[Hb]:"fire-fcm-compat",[zb]:"fire-perf",[Kb]:"fire-perf-compat",[Wb]:"fire-rc",[Gb]:"fire-rc-compat",[Xb]:"fire-gcs",[Yb]:"fire-gcs-compat",[Jb]:"fire-fst",[Qb]:"fire-fst-compat","fire-js":"fire-js",[Zb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=new Map,ec=new Map;function nE(t,e){try{t.container.addComponent(e)}catch(n){rl.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qn(t){const e=t.name;if(ec.has(e))return rl.debug(`There were multiple attempts to register component ${e}.`),!1;ec.set(e,t);for(const n of Gi.values())nE(n,t);return!0}function ko(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Hn=new Hr("app","Firebase",sE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Hn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js=eE;function op(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:ip,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Hn.create("bad-app-name",{appName:String(s)});const r=Gi.get(s);if(r){if(Wi(t,r.options)&&Wi(n,r.config))return r;throw Hn.create("duplicate-app",{appName:s})}const i=new Tb(s);for(const a of ec.values())i.addComponent(a);const o=new rE(t,n,i);return Gi.set(s,o),o}function il(t=ip){const e=Gi.get(t);if(!e)throw Hn.create("no-app",{appName:t});return e}function Ot(t,e,n){var s;let r=(s=tE[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rl.warn(a.join(" "));return}qn(new vn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE="firebase-heartbeat-database",oE=1,Rr="firebase-heartbeat-store";let da=null;function ap(){return da||(da=_b(iE,oE,(t,e)=>{switch(e){case 0:t.createObjectStore(Rr)}}).catch(t=>{throw Hn.create("storage-open",{originalErrorMessage:t.message})})),da}async function aE(t){try{return(await ap()).transaction(Rr).objectStore(Rr).get(cp(t))}catch(e){throw Hn.create("storage-get",{originalErrorMessage:e.message})}}async function ph(t,e){try{const s=(await ap()).transaction(Rr,"readwrite");return await s.objectStore(Rr).put(e,cp(t)),s.complete}catch(n){throw Hn.create("storage-set",{originalErrorMessage:n.message})}}function cp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE=1024,lE=30*24*60*60*1e3;class uE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=gh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=lE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=gh(),{heartbeatsToSend:n,unsentEntries:s}=hE(this._heartbeatsCache.heartbeats),r=Qd(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function gh(){return new Date().toISOString().substring(0,10)}function hE(t,e=cE){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),mh(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),mh(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class fE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ub()?hb().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await aE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ph(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ph(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function mh(t){return Qd(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(t){qn(new vn("platform-logger",e=>new kb(e),"PRIVATE")),qn(new vn("heartbeat",e=>new uE(e),"PRIVATE")),Ot(Za,dh,t),Ot(Za,dh,"esm2017"),Ot("fire-js","")}dE("");var pE=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},x,ol=ol||{},z=pE||self;function Xi(){}function tc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Kr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function gE(t){return Object.prototype.hasOwnProperty.call(t,pa)&&t[pa]||(t[pa]=++mE)}var pa="closure_uid_"+(1e9*Math.random()>>>0),mE=0;function yE(t,e,n){return t.call.apply(t.bind,arguments)}function vE(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function $e(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?$e=yE:$e=vE,$e.apply(null,arguments)}function _i(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function qe(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function In(){this.s=this.s,this.o=this.o}var _E=0,wE={};In.prototype.s=!1;In.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),_E!=0)){var t=gE(this);delete wE[t]}};In.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const lp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},up=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<s;i++)i in r&&e.call(n,r[i],i,t)};function bE(t){e:{var e=f0;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in s&&e.call(void 0,s[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function yh(t){return Array.prototype.concat.apply([],arguments)}function al(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Yi(t){return/^[\s\xa0]*$/.test(t)}var vh=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ze(t,e){return t.indexOf(e)!=-1}function ga(t,e){return t<e?-1:t>e?1:0}var et;e:{var _h=z.navigator;if(_h){var wh=_h.userAgent;if(wh){et=wh;break e}}et=""}function cl(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function hp(t){const e={};for(const n in t)e[n]=t[n];return e}var bh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function fp(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<bh.length;i++)n=bh[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ll(t){return ll[" "](t),t}ll[" "]=Xi;function EE(t){var e=SE;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var TE=Ze(et,"Opera"),ks=Ze(et,"Trident")||Ze(et,"MSIE"),dp=Ze(et,"Edge"),nc=dp||ks,pp=Ze(et,"Gecko")&&!(Ze(et.toLowerCase(),"webkit")&&!Ze(et,"Edge"))&&!(Ze(et,"Trident")||Ze(et,"MSIE"))&&!Ze(et,"Edge"),IE=Ze(et.toLowerCase(),"webkit")&&!Ze(et,"Edge");function gp(){var t=z.document;return t?t.documentMode:void 0}var Ji;e:{var ma="",ya=function(){var t=et;if(pp)return/rv:([^\);]+)(\)|;)/.exec(t);if(dp)return/Edge\/([\d\.]+)/.exec(t);if(ks)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(IE)return/WebKit\/(\S+)/.exec(t);if(TE)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ya&&(ma=ya?ya[1]:""),ks){var va=gp();if(va!=null&&va>parseFloat(ma)){Ji=String(va);break e}}Ji=ma}var SE={};function CE(){return EE(function(){let t=0;const e=vh(String(Ji)).split("."),n=vh("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=ga(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||ga(r[2].length==0,i[2].length==0)||ga(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var sc;if(z.document&&ks){var Eh=gp();sc=Eh||parseInt(Ji,10)||void 0}else sc=void 0;var AE=sc,kE=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{z.addEventListener("test",Xi,e),z.removeEventListener("test",Xi,e)}catch{}return t}();function We(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}We.prototype.h=function(){this.defaultPrevented=!0};function Nr(t,e){if(We.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(pp){e:{try{ll(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:RE[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Nr.Z.h.call(this)}}qe(Nr,We);var RE={2:"touch",3:"pen",4:"mouse"};Nr.prototype.h=function(){Nr.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Wr="closure_listenable_"+(1e6*Math.random()|0),NE=0;function PE(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=r,this.key=++NE,this.ca=this.fa=!1}function Ro(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function No(t){this.src=t,this.g={},this.h=0}No.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=ic(t,e,s,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new PE(e,this.src,i,!!s,r),e.fa=n,t.push(e)),e};function rc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=lp(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Ro(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ic(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==s)return r}return-1}var ul="closure_lm_"+(1e6*Math.random()|0),_a={};function mp(t,e,n,s,r){if(s&&s.once)return vp(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)mp(t,e[i],n,s,r);return null}return n=dl(n),t&&t[Wr]?t.N(e,n,Kr(s)?!!s.capture:!!s,r):yp(t,e,n,!1,s,r)}function yp(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Kr(r)?!!r.capture:!!r,a=fl(t);if(a||(t[ul]=a=new No(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=xE(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)kE||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(wp(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function xE(){function t(n){return e.call(t.src,t.listener,n)}var e=OE;return t}function vp(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)vp(t,e[i],n,s,r);return null}return n=dl(n),t&&t[Wr]?t.O(e,n,Kr(s)?!!s.capture:!!s,r):yp(t,e,n,!0,s,r)}function _p(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)_p(t,e[i],n,s,r);else s=Kr(s)?!!s.capture:!!s,n=dl(n),t&&t[Wr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=ic(i,n,s,r),-1<n&&(Ro(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=fl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ic(e,n,s,r)),(n=-1<t?e[t]:null)&&hl(n))}function hl(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Wr])rc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(wp(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=fl(e))?(rc(n,t),n.h==0&&(n.src=null,e[ul]=null)):Ro(t)}}}function wp(t){return t in _a?_a[t]:_a[t]="on"+t}function OE(t,e){if(t.ca)t=!0;else{e=new Nr(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&hl(t),t=n.call(s,e)}return t}function fl(t){return t=t[ul],t instanceof No?t:null}var wa="__closure_events_fn_"+(1e9*Math.random()>>>0);function dl(t){return typeof t=="function"?t:(t[wa]||(t[wa]=function(e){return t.handleEvent(e)}),t[wa])}function Le(){In.call(this),this.i=new No(this),this.P=this,this.I=null}qe(Le,In);Le.prototype[Wr]=!0;Le.prototype.removeEventListener=function(t,e,n,s){_p(this,t,e,n,s)};function Be(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new We(e,t);else if(e instanceof We)e.target=e.target||t;else{var r=e;e=new We(s,t),fp(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=wi(o,s,!0,e)&&r}if(o=e.g=t,r=wi(o,s,!0,e)&&r,r=wi(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=wi(o,s,!1,e)&&r}Le.prototype.M=function(){if(Le.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Ro(n[s]);delete t.g[e],t.h--}}this.I=null};Le.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Le.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function wi(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&rc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var pl=z.JSON.stringify;function DE(){var t=Ep;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class ME{constructor(){this.h=this.g=null}add(e,n){const s=bp.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var bp=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new LE,t=>t.reset());class LE{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function UE(t){z.setTimeout(()=>{throw t},0)}function gl(t,e){oc||FE(),ac||(oc(),ac=!0),Ep.add(t,e)}var oc;function FE(){var t=z.Promise.resolve(void 0);oc=function(){t.then($E)}}var ac=!1,Ep=new ME;function $E(){for(var t;t=DE();){try{t.h.call(t.g)}catch(n){UE(n)}var e=bp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ac=!1}function Po(t,e){Le.call(this),this.h=t||1,this.g=e||z,this.j=$e(this.kb,this),this.l=Date.now()}qe(Po,Le);x=Po.prototype;x.da=!1;x.S=null;x.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Be(this,"tick"),this.da&&(ml(this),this.start()))}};x.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ml(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}x.M=function(){Po.Z.M.call(this),ml(this),delete this.g};function yl(t,e,n){if(typeof t=="function")n&&(t=$e(t,n));else if(t&&typeof t.handleEvent=="function")t=$e(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function Tp(t){t.g=yl(()=>{t.g=null,t.i&&(t.i=!1,Tp(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class BE extends In{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Tp(this)}M(){super.M(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pr(t){In.call(this),this.h=t,this.g={}}qe(Pr,In);var Th=[];function Ip(t,e,n,s){Array.isArray(n)||(n&&(Th[0]=n.toString()),n=Th);for(var r=0;r<n.length;r++){var i=mp(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Sp(t){cl(t.g,function(e,n){this.g.hasOwnProperty(n)&&hl(e)},t),t.g={}}Pr.prototype.M=function(){Pr.Z.M.call(this),Sp(this)};Pr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function xo(){this.g=!0}xo.prototype.Aa=function(){this.g=!1};function VE(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function jE(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function ps(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+HE(t,n)+(s?" "+s:"")})}function qE(t,e){t.info(function(){return"TIMEOUT: "+e})}xo.prototype.info=function(){};function HE(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return pl(n)}catch{return e}}var es={},Ih=null;function Oo(){return Ih=Ih||new Le}es.Ma="serverreachability";function Cp(t){We.call(this,es.Ma,t)}qe(Cp,We);function xr(t){const e=Oo();Be(e,new Cp(e,t))}es.STAT_EVENT="statevent";function Ap(t,e){We.call(this,es.STAT_EVENT,t),this.stat=e}qe(Ap,We);function tt(t){const e=Oo();Be(e,new Ap(e,t))}es.Na="timingevent";function kp(t,e){We.call(this,es.Na,t),this.size=e}qe(kp,We);function Gr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){t()},e)}var Do={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Rp={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function vl(){}vl.prototype.h=null;function Sh(t){return t.h||(t.h=t.i())}function Np(){}var Xr={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function _l(){We.call(this,"d")}qe(_l,We);function wl(){We.call(this,"c")}qe(wl,We);var cc;function Mo(){}qe(Mo,vl);Mo.prototype.g=function(){return new XMLHttpRequest};Mo.prototype.i=function(){return{}};cc=new Mo;function Yr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new Pr(this),this.P=zE,t=nc?125:void 0,this.W=new Po(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Pp}function Pp(){this.i=null,this.g="",this.h=!1}var zE=45e3,lc={},Qi={};x=Yr.prototype;x.setTimeout=function(t){this.P=t};function uc(t,e,n){t.K=1,t.v=Uo(Xt(e)),t.s=n,t.U=!0,xp(t,null)}function xp(t,e){t.F=Date.now(),Jr(t),t.A=Xt(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),$p(n.h,"t",s),t.C=0,n=t.l.H,t.h=new Pp,t.g=ig(t.l,n?e:null,!t.s),0<t.O&&(t.L=new BE($e(t.Ia,t,t.g),t.O)),Ip(t.V,t.g,"readystatechange",t.gb),e=t.H?hp(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),xr(1),VE(t.j,t.u,t.A,t.m,t.X,t.s)}x.gb=function(t){t=t.target;const e=this.L;e&&jt(t)==3?e.l():this.Ia(t)};x.Ia=function(t){try{if(t==this.g)e:{const u=jt(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||nc||this.g&&(this.h.h||this.g.ga()||Rh(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?xr(3):xr(2)),Lo(this);var n=this.g.ba();this.N=n;t:if(Op(this)){var s=Rh(this.g);t="";var r=s.length,i=jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){xn(this),yr(this);var o="";break t}this.h.i=new z.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,jE(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Yi(a)){var l=a;break t}}l=null}if(n=l)ps(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,hc(this,n);else{this.i=!1,this.o=3,tt(12),xn(this),yr(this);break e}}this.U?(Dp(this,u,o),nc&&this.i&&u==3&&(Ip(this.V,this.W,"tick",this.fb),this.W.start())):(ps(this.j,this.m,o,null),hc(this,o)),u==4&&xn(this),this.i&&!this.I&&(u==4?tg(this.l,this):(this.i=!1,Jr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,tt(12)):(this.o=0,tt(13)),xn(this),yr(this)}}}catch{}finally{}};function Op(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Dp(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=KE(t,n),r==Qi){e==4&&(t.o=4,tt(14),s=!1),ps(t.j,t.m,null,"[Incomplete Response]");break}else if(r==lc){t.o=4,tt(15),ps(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else ps(t.j,t.m,r,null),hc(t,r);Op(t)&&r!=Qi&&r!=lc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,tt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Rl(e),e.L=!0,tt(11))):(ps(t.j,t.m,n,"[Invalid Chunked Response]"),xn(t),yr(t))}x.fb=function(){if(this.g){var t=jt(this.g),e=this.g.ga();this.C<e.length&&(Lo(this),Dp(this,t,e),this.i&&t!=4&&Jr(this))}};function KE(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Qi:(n=Number(e.substring(n,s)),isNaN(n)?lc:(s+=1,s+n>e.length?Qi:(e=e.substr(s,n),t.C=s+n,e)))}x.cancel=function(){this.I=!0,xn(this)};function Jr(t){t.Y=Date.now()+t.P,Mp(t,t.P)}function Mp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Gr($e(t.eb,t),e)}function Lo(t){t.B&&(z.clearTimeout(t.B),t.B=null)}x.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(qE(this.j,this.A),this.K!=2&&(xr(3),tt(17)),xn(this),this.o=2,yr(this)):Mp(this,this.Y-t)};function yr(t){t.l.G==0||t.I||tg(t.l,t)}function xn(t){Lo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ml(t.W),Sp(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function hc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||fc(n.i,t))){if(n.I=t.N,!t.J&&fc(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)no(n),Bo(n);else break e;kl(n),tt(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=Gr($e(n.ab,n),6e3));if(1>=jp(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else On(n,11)}else if((t.J||n.g==t)&&no(n),!Yi(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const m=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.i;!i.g&&(Ze(m,"spdy")||Ze(m,"quic")||Ze(m,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Tl(i,i.h),i.h=null))}if(s.D){const I=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(s.sa=I,be(s.F,s.D,I))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=rg(s,s.H?s.la:null,s.W),o.J){qp(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(Lo(a),Jr(a)),s.g=o}else Zp(s);0<n.l.length&&Vo(n)}else l[0]!="stop"&&l[0]!="close"||On(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?On(n,7):Al(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}xr(4)}catch{}}function WE(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(tc(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function bl(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(tc(t)||typeof t=="string")up(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(tc(t)||typeof t=="string"){n=[];for(var s=t.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,t)n[s++]=r;s=WE(t),r=s.length;for(var i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}}function qs(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof qs)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}x=qs.prototype;x.R=function(){El(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};x.T=function(){return El(this),this.g.concat()};function El(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];zn(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)s=t.g[e],zn(r,s)||(t.g[n++]=s,r[s]=1),e++;t.g.length=n}}x.get=function(t,e){return zn(this.h,t)?this.h[t]:e};x.set=function(t,e){zn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};x.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);t.call(e,i,r,this)}};function zn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Lp=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function GE(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Kn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Kn){this.g=e!==void 0?e:t.g,Zi(this,t.j),this.s=t.s,eo(this,t.i),to(this,t.m),this.l=t.l,e=t.h;var n=new Or;n.i=e.i,e.g&&(n.g=new qs(e.g),n.h=e.h),Ch(this,n),this.o=t.o}else t&&(n=String(t).match(Lp))?(this.g=!!e,Zi(this,n[1]||"",!0),this.s=vr(n[2]||""),eo(this,n[3]||"",!0),to(this,n[4]),this.l=vr(n[5]||"",!0),Ch(this,n[6]||"",!0),this.o=vr(n[7]||"")):(this.g=!!e,this.h=new Or(null,this.g))}Kn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(cr(e,Ah,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(cr(e,Ah,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(cr(n,n.charAt(0)=="/"?ZE:QE,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",cr(n,t0)),t.join("")};function Xt(t){return new Kn(t)}function Zi(t,e,n){t.j=n?vr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function eo(t,e,n){t.i=n?vr(e,!0):e}function to(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ch(t,e,n){e instanceof Or?(t.h=e,n0(t.h,t.g)):(n||(e=cr(e,e0)),t.h=new Or(e,t.g))}function be(t,e,n){t.h.set(e,n)}function Uo(t){return be(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function XE(t){return t instanceof Kn?Xt(t):new Kn(t,void 0)}function YE(t,e,n,s){var r=new Kn(null,void 0);return t&&Zi(r,t),e&&eo(r,e),n&&to(r,n),s&&(r.l=s),r}function vr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function cr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,JE),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function JE(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ah=/[#\/\?@]/g,QE=/[#\?:]/g,ZE=/[#\?]/g,e0=/[#\?@]/g,t0=/#/g;function Or(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Sn(t){t.g||(t.g=new qs,t.h=0,t.i&&GE(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}x=Or.prototype;x.add=function(t,e){Sn(this),this.i=null,t=Hs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Up(t,e){Sn(t),e=Hs(t,e),zn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,zn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&El(t)))}function Fp(t,e){return Sn(t),e=Hs(t,e),zn(t.g.h,e)}x.forEach=function(t,e){Sn(this),this.g.forEach(function(n,s){up(n,function(r){t.call(e,r,s,this)},this)},this)};x.T=function(){Sn(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var r=t[s],i=0;i<r.length;i++)n.push(e[s]);return n};x.R=function(t){Sn(this);var e=[];if(typeof t=="string")Fp(this,t)&&(e=yh(e,this.g.get(Hs(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=yh(e,t[n])}return e};x.set=function(t,e){return Sn(this),this.i=null,t=Hs(this,t),Fp(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};x.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function $p(t,e,n){Up(t,e),0<n.length&&(t.i=null,t.g.set(Hs(t,e),al(n)),t.h+=n.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),t.push(o)}}return this.i=t.join("&")};function Hs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function n0(t,e){e&&!t.j&&(Sn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Up(this,s),$p(this,r,n))},t)),t.j=e}var s0=class{constructor(t,e){this.h=t,this.g=e}};function Bp(t){this.l=t||r0,z.PerformanceNavigationTiming?(t=z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(z.g&&z.g.Ea&&z.g.Ea()&&z.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var r0=10;function Vp(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function jp(t){return t.h?1:t.g?t.g.size:0}function fc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Tl(t,e){t.g?t.g.add(e):t.h=e}function qp(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Bp.prototype.cancel=function(){if(this.i=Hp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Hp(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return al(t.i)}function Il(){}Il.prototype.stringify=function(t){return z.JSON.stringify(t,void 0)};Il.prototype.parse=function(t){return z.JSON.parse(t,void 0)};function i0(){this.g=new Il}function o0(t,e,n){const s=n||"";try{bl(t,function(r,i){let o=r;Kr(r)&&(o=pl(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function a0(t,e){const n=new xo;if(z.Image){const s=new Image;s.onload=_i(bi,n,s,"TestLoadImage: loaded",!0,e),s.onerror=_i(bi,n,s,"TestLoadImage: error",!1,e),s.onabort=_i(bi,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=_i(bi,n,s,"TestLoadImage: timeout",!1,e),z.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function bi(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Qr(t){this.l=t.$b||null,this.j=t.ib||!1}qe(Qr,vl);Qr.prototype.g=function(){return new Fo(this.l,this.j)};Qr.prototype.i=function(t){return function(){return t}}({});function Fo(t,e){Le.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Sl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}qe(Fo,Le);var Sl=0;x=Fo.prototype;x.open=function(t,e){if(this.readyState!=Sl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Dr(this)};x.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||z).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zr(this)),this.readyState=Sl};x.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Dr(this)),this.g&&(this.readyState=3,Dr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof z.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;zp(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function zp(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}x.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Zr(this):Dr(this),this.readyState==3&&zp(this)}};x.Ua=function(t){this.g&&(this.response=this.responseText=t,Zr(this))};x.Ta=function(t){this.g&&(this.response=t,Zr(this))};x.ha=function(){this.g&&Zr(this)};function Zr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Dr(t)}x.setRequestHeader=function(t,e){this.v.append(t,e)};x.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Dr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Fo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var c0=z.JSON.parse;function ke(t){Le.call(this),this.headers=new qs,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Kp,this.K=this.L=!1}qe(ke,Le);var Kp="",l0=/^https?$/i,u0=["POST","PUT"];x=ke.prototype;x.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():cc.g(),this.C=this.u?Sh(this.u):Sh(cc),this.g.onreadystatechange=$e(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){kh(this,i);return}t=n||"";const r=new qs(this.headers);s&&bl(s,function(i,o){r.set(o,i)}),s=bE(r.T()),n=z.FormData&&t instanceof z.FormData,!(0<=lp(u0,e))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Xp(this),0<this.B&&((this.K=h0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=$e(this.pa,this)):this.A=yl(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){kh(this,i)}};function h0(t){return ks&&CE()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function f0(t){return t.toLowerCase()=="content-type"}x.pa=function(){typeof ol!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Be(this,"timeout"),this.abort(8))};function kh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Wp(t),$o(t)}function Wp(t){t.D||(t.D=!0,Be(t,"complete"),Be(t,"error"))}x.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Be(this,"complete"),Be(this,"abort"),$o(this))};x.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),$o(this,!0)),ke.Z.M.call(this)};x.Fa=function(){this.s||(this.F||this.v||this.l?Gp(this):this.cb())};x.cb=function(){Gp(this)};function Gp(t){if(t.h&&typeof ol!="undefined"&&(!t.C[1]||jt(t)!=4||t.ba()!=2)){if(t.v&&jt(t)==4)yl(t.Fa,0,t);else if(Be(t,"readystatechange"),jt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Lp)[1]||null;if(!r&&z.self&&z.self.location){var i=z.self.location.protocol;r=i.substr(0,i.length-1)}s=!l0.test(r?r.toLowerCase():"")}n=s}if(n)Be(t,"complete"),Be(t,"success");else{t.m=6;try{var o=2<jt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Wp(t)}}finally{$o(t)}}}}function $o(t,e){if(t.g){Xp(t);const n=t.g,s=t.C[0]?Xi:null;t.g=null,t.C=null,e||Be(t,"ready");try{n.onreadystatechange=s}catch{}}}function Xp(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}function jt(t){return t.g?t.g.readyState:0}x.ba=function(){try{return 2<jt(this)?this.g.status:-1}catch{return-1}};x.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),c0(e)}};function Rh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Kp:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}x.Da=function(){return this.m};x.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function d0(t){let e="";return cl(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Cl(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=d0(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):be(t,e,n))}function sr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Yp(t){this.za=0,this.l=[],this.h=new xo,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=sr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=sr("baseRetryDelayMs",5e3,t),this.$a=sr("retryDelaySeedMs",1e4,t),this.Ya=sr("forwardChannelMaxRetries",2,t),this.ra=sr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Bp(t&&t.concurrentRequestLimit),this.Ca=new i0,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}x=Yp.prototype;x.ma=8;x.G=1;function Al(t){if(Jp(t),t.G==3){var e=t.V++,n=Xt(t.F);be(n,"SID",t.J),be(n,"RID",e),be(n,"TYPE","terminate"),ei(t,n),e=new Yr(t,t.h,e,void 0),e.K=2,e.v=Uo(Xt(n)),n=!1,z.navigator&&z.navigator.sendBeacon&&(n=z.navigator.sendBeacon(e.v.toString(),"")),!n&&z.Image&&(new Image().src=e.v,n=!0),n||(e.g=ig(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Jr(e)}sg(t)}x.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Bo(t){t.g&&(Rl(t),t.g.cancel(),t.g=null)}function Jp(t){Bo(t),t.u&&(z.clearTimeout(t.u),t.u=null),no(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&z.clearTimeout(t.m),t.m=null)}function ba(t,e){t.l.push(new s0(t.Za++,e)),t.G==3&&Vo(t)}function Vo(t){Vp(t.i)||t.m||(t.m=!0,gl(t.Ha,t),t.C=0)}function p0(t,e){return jp(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Gr($e(t.Ha,t,e),ng(t,t.C)),t.C++,!0)}x.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new Yr(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=hp(i),fp(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Qp(this,r,e),n=Xt(this.F),be(n,"RID",t),be(n,"CVER",22),this.D&&be(n,"X-HTTP-Session-Id",this.D),ei(this,n),this.o&&i&&Cl(n,this.o,i),Tl(this.i,r),this.Ra&&be(n,"TYPE","init"),this.ja?(be(n,"$req",e),be(n,"SID","null"),r.$=!0,uc(r,n,null)):uc(r,n,e),this.G=2}}else this.G==3&&(t?Nh(this,t):this.l.length==0||Vp(this.i)||Nh(this))};function Nh(t,e){var n;e?n=e.m:n=t.V++;const s=Xt(t.F);be(s,"SID",t.J),be(s,"RID",n),be(s,"AID",t.U),ei(t,s),t.o&&t.s&&Cl(s,t.o,t.s),n=new Yr(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Qp(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Tl(t.i,n),uc(n,s,e)}function ei(t,e){t.j&&bl({},function(n,s){be(e,s,n)})}function Qp(t,e,n){n=Math.min(t.l.length,n);var s=t.j?$e(t.j.Oa,t.j,t):null;e:{var r=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{o0(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function Zp(t){t.g||t.u||(t.Y=1,gl(t.Ga,t),t.A=0)}function kl(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Gr($e(t.Ga,t),ng(t,t.A)),t.A++,!0)}x.Ga=function(){if(this.u=null,eg(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Gr($e(this.bb,this),t)}};x.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,tt(10),Bo(this),eg(this))};function Rl(t){t.B!=null&&(z.clearTimeout(t.B),t.B=null)}function eg(t){t.g=new Yr(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Xt(t.oa);be(e,"RID","rpc"),be(e,"SID",t.J),be(e,"CI",t.N?"0":"1"),be(e,"AID",t.U),ei(t,e),be(e,"TYPE","xmlhttp"),t.o&&t.s&&Cl(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Uo(Xt(e)),n.s=null,n.U=!0,xp(n,t)}x.ab=function(){this.v!=null&&(this.v=null,Bo(this),kl(this),tt(19))};function no(t){t.v!=null&&(z.clearTimeout(t.v),t.v=null)}function tg(t,e){var n=null;if(t.g==e){no(t),Rl(t),t.g=null;var s=2}else if(fc(t.i,e))n=e.D,qp(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Oo(),Be(s,new kp(s,n,e,r)),Vo(t)}else Zp(t);else if(r=e.o,r==3||r==0&&0<t.I||!(s==1&&p0(t,e)||s==2&&kl(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:On(t,5);break;case 4:On(t,10);break;case 3:On(t,6);break;default:On(t,2)}}}function ng(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function On(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=$e(t.jb,t);n||(n=new Kn("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||Zi(n,"https"),Uo(n)),a0(n.toString(),s)}else tt(2);t.G=0,t.j&&t.j.va(e),sg(t),Jp(t)}x.jb=function(t){t?(this.h.info("Successfully pinged google.com"),tt(2)):(this.h.info("Failed to ping google.com"),tt(1))};function sg(t){t.G=0,t.I=-1,t.j&&((Hp(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,al(t.l),t.l.length=0),t.j.ua())}function rg(t,e,n){let s=XE(n);if(s.i!="")e&&eo(s,e+"."+s.i),to(s,s.m);else{const r=z.location;s=YE(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&cl(t.aa,function(r,i){be(s,i,r)}),e=t.D,n=t.sa,e&&n&&be(s,e,n),be(s,"VER",t.ma),ei(t,s),s}function ig(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new ke(new Qr({ib:!0})):new ke(t.qa),e.L=t.H,e}function og(){}x=og.prototype;x.xa=function(){};x.wa=function(){};x.va=function(){};x.ua=function(){};x.Oa=function(){};function so(){if(ks&&!(10<=Number(AE)))throw Error("Environmental error: no available transport.")}so.prototype.g=function(t,e){return new gt(t,e)};function gt(t,e){Le.call(this),this.g=new Yp(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Yi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Yi(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new zs(this)}qe(gt,Le);gt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),gl($e(t.hb,t,e))),tt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=rg(t,null,t.W),Vo(t)};gt.prototype.close=function(){Al(this.g)};gt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,ba(this.g,e)}else this.v?(e={},e.__data__=pl(t),ba(this.g,e)):ba(this.g,t)};gt.prototype.M=function(){this.g.j=null,delete this.j,Al(this.g),delete this.g,gt.Z.M.call(this)};function ag(t){_l.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}qe(ag,_l);function cg(){wl.call(this),this.status=1}qe(cg,wl);function zs(t){this.g=t}qe(zs,og);zs.prototype.xa=function(){Be(this.g,"a")};zs.prototype.wa=function(t){Be(this.g,new ag(t))};zs.prototype.va=function(t){Be(this.g,new cg(t))};zs.prototype.ua=function(){Be(this.g,"b")};so.prototype.createWebChannel=so.prototype.g;gt.prototype.send=gt.prototype.u;gt.prototype.open=gt.prototype.m;gt.prototype.close=gt.prototype.close;Do.NO_ERROR=0;Do.TIMEOUT=8;Do.HTTP_ERROR=6;Rp.COMPLETE="complete";Np.EventType=Xr;Xr.OPEN="a";Xr.CLOSE="b";Xr.ERROR="c";Xr.MESSAGE="d";Le.prototype.listen=Le.prototype.N;ke.prototype.listenOnce=ke.prototype.O;ke.prototype.getLastError=ke.prototype.La;ke.prototype.getLastErrorCode=ke.prototype.Da;ke.prototype.getStatus=ke.prototype.ba;ke.prototype.getResponseJson=ke.prototype.Qa;ke.prototype.getResponseText=ke.prototype.ga;ke.prototype.send=ke.prototype.ea;var g0=function(){return new so},m0=function(){return Oo()},Ea=Do,y0=Rp,v0=es,Ph={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},_0=Qr,Ei=Np,w0=ke;const xh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ks="9.6.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=new sl("@firebase/firestore");function Oh(){return Wn.logLevel}function F(t,...e){if(Wn.logLevel<=oe.DEBUG){const n=e.map(Nl);Wn.debug(`Firestore (${Ks}): ${t}`,...n)}}function _n(t,...e){if(Wn.logLevel<=oe.ERROR){const n=e.map(Nl);Wn.error(`Firestore (${Ks}): ${t}`,...n)}}function Dh(t,...e){if(Wn.logLevel<=oe.WARN){const n=e.map(Nl);Wn.warn(`Firestore (${Ks}): ${t}`,...n)}}function Nl(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t="Unexpected state"){const e=`FIRESTORE (${Ks}) INTERNAL ASSERTION FAILED: `+t;throw _n(e),new Error(e)}function me(t,e){t||X()}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Tn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class E0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(rt.UNAUTHENTICATED))}shutdown(){}}class T0{constructor(e){this.t=e,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new zt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new zt,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new zt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(me(typeof s.accessToken=="string"),new b0(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new rt(e)}}class I0{constructor(e,n,s){this.type="FirstParty",this.user=rt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class S0{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new I0(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class C0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class A0{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const s=i=>{i.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string"),this.p=n.token,new C0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.I(s),this.T=s=>n.writeSequenceNumber(s))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k0(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pl.A=-1;class lg{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=k0(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ce(t,e){return t<e?-1:t>e?1:0}function Rs(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ge(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Ge(0,0))}static max(){return new ee(new Ge(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ts(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ug(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,n,s){n===void 0?n=0:n>e.length&&X(),s===void 0?s=e.length-n:s>e.length-n&&X(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Mr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Mr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ee extends Mr{construct(e,n,s){return new Ee(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new B(E.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ee(n)}static emptyPath(){return new Ee([])}}const R0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends Mr{construct(e,n,s){return new ot(e,n,s)}static isValidIdentifier(e){return R0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ot(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new B(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new B(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new B(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new B(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(n)}static emptyPath(){return new ot([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e){this.fields=e,e.sort(ot.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Rs(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new je(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new je(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}je.EMPTY_BYTE_STRING=new je("");const N0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wn(t){if(me(!!t),typeof t=="string"){let e=0;const n=N0.exec(t);if(me(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ns(t){return typeof t=="string"?je.fromBase64String(t):je.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function fg(t){const e=t.mapValue.fields.__previous_value__;return hg(e)?fg(e):e}function Ur(t){const e=wn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Ps{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ps("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ps&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(t){return t==null}function ro(t){return t===0&&1/t==-1/0}function x0(t){return typeof t=="number"&&Number.isInteger(t)&&!ro(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(Ee.fromString(e))}static fromName(e){return new q(Ee.fromString(e).popFirst(5))}static empty(){return new q(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new Ee(e.slice()))}}function Gn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?hg(t)?4:O0(t)?9:10:X()}function Ut(t,e){if(t===e)return!0;const n=Gn(t);if(n!==Gn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ur(t).isEqual(Ur(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=wn(s.timestampValue),o=wn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Ns(s.bytesValue).isEqual(Ns(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Ae(s.geoPointValue.latitude)===Ae(r.geoPointValue.latitude)&&Ae(s.geoPointValue.longitude)===Ae(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Ae(s.integerValue)===Ae(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Ae(s.doubleValue),o=Ae(r.doubleValue);return i===o?ro(i)===ro(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Rs(t.arrayValue.values||[],e.arrayValue.values||[],Ut);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Mh(i)!==Mh(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Ut(i[a],o[a])))return!1;return!0}(t,e);default:return X()}}function Fr(t,e){return(t.values||[]).find(n=>Ut(n,e))!==void 0}function xs(t,e){if(t===e)return 0;const n=Gn(t),s=Gn(e);if(n!==s)return ce(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Ae(r.integerValue||r.doubleValue),a=Ae(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Lh(t.timestampValue,e.timestampValue);case 4:return Lh(Ur(t),Ur(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Ns(r),a=Ns(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ce(o[c],a[c]);if(l!==0)return l}return ce(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ce(Ae(r.latitude),Ae(i.latitude));return o!==0?o:ce(Ae(r.longitude),Ae(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=xs(o[c],a[c]);if(l)return l}return ce(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ce(a[u],l[u]);if(h!==0)return h;const f=xs(o[a[u]],c[l[u]]);if(f!==0)return f}return ce(a.length,l.length)}(t.mapValue,e.mapValue);default:throw X()}}function Lh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=wn(t),s=wn(e),r=ce(n.seconds,s.seconds);return r!==0?r:ce(n.nanos,s.nanos)}function _s(t){return dc(t)}function dc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=wn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ns(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,q.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=dc(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${dc(s.fields[a])}`;return i+"}"}(t.mapValue):X();var e,n}function pc(t){return!!t&&"integerValue"in t}function xl(t){return!!t&&"arrayValue"in t}function Uh(t){return!!t&&"nullValue"in t}function Fh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ni(t){return!!t&&"mapValue"in t}function _r(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ts(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=_r(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=_r(t.arrayValue.values[n]);return e}return Object.assign({},t)}function O0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.value=e}static empty(){return new ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Ni(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=_r(n)}setAll(e){let n=ot.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=_r(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Ni(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ut(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Ni(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){ts(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new ht(_r(this.value))}}function dg(t){const e=[];return ts(t.fields,(n,s)=>{const r=new ot([n]);if(Ni(s)){const i=dg(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Lr(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new ze(e,0,ee.min(),ee.min(),ht.empty(),0)}static newFoundDocument(e,n,s){return new ze(e,1,n,ee.min(),s,0)}static newNoDocument(e,n){return new ze(e,2,n,ee.min(),ht.empty(),0)}static newUnknownDocument(e,n){return new ze(e,3,n,ee.min(),ht.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ze(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function D0(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=ee.fromTimestamp(s===1e9?new Ge(n+1,0):new Ge(n,s));return new Os(r,q.empty(),e)}function M0(t){return new Os(t.readTime,t.key,-1)}class Os{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Os(ee.min(),q.empty(),-1)}static max(){return new Os(ee.max(),q.empty(),-1)}}function L0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.P=null}}function $h(t,e=null,n=[],s=[],r=null,i=null,o=null){return new U0(t,e,n,s,r,i,o)}function Ol(t){const e=J(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+_s(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Ws(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>_s(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>_s(s)).join(",")),e.P=n}return e.P}function F0(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${_s(s.value)}`;var s}).join(", ")}]`),Ws(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>_s(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>_s(n)).join(",")),`Target(${e})`}function Dl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!K0(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!Ut(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Vh(t.startAt,e.startAt)&&Vh(t.endAt,e.endAt)}function gc(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class at extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.V(e,n,s):new $0(e,n,s):n==="array-contains"?new j0(e,s):n==="in"?new q0(e,s):n==="not-in"?new H0(e,s):n==="array-contains-any"?new z0(e,s):new at(e,n,s)}static V(e,n,s){return n==="in"?new B0(e,s):new V0(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(xs(n,this.value)):n!==null&&Gn(this.value)===Gn(n)&&this.v(xs(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class $0 extends at{constructor(e,n,s){super(e,n,s),this.key=q.fromName(s.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.v(n)}}class B0 extends at{constructor(e,n){super(e,"in",n),this.keys=pg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class V0 extends at{constructor(e,n){super(e,"not-in",n),this.keys=pg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function pg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>q.fromName(s.referenceValue))}class j0 extends at{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return xl(n)&&Fr(n.arrayValue,this.value)}}class q0 extends at{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Fr(this.value.arrayValue,n)}}class H0 extends at{constructor(e,n){super(e,"not-in",n)}matches(e){if(Fr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Fr(this.value.arrayValue,n)}}class z0 extends at{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!xl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Fr(this.value.arrayValue,s))}}class io{constructor(e,n){this.position=e,this.inclusive=n}}class ws{constructor(e,n="asc"){this.field=e,this.dir=n}}function K0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Bh(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=q.comparator(q.fromName(o.referenceValue),n.key):s=xs(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Vh(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ut(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.D=null,this.C=null,this.startAt,this.endAt}}function W0(t,e,n,s,r,i,o,a){return new ti(t,e,n,s,r,i,o,a)}function Ml(t){return new ti(t)}function Pi(t){return!Ws(t.limit)&&t.limitType==="F"}function oo(t){return!Ws(t.limit)&&t.limitType==="L"}function gg(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function mg(t){for(const e of t.filters)if(e.S())return e.field;return null}function G0(t){return t.collectionGroup!==null}function $r(t){const e=J(t);if(e.D===null){e.D=[];const n=mg(e),s=gg(e);if(n!==null&&s===null)n.isKeyField()||e.D.push(new ws(n)),e.D.push(new ws(ot.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.D.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new ws(ot.keyField(),i))}}}return e.D}function Xn(t){const e=J(t);if(!e.C)if(e.limitType==="F")e.C=$h(e.path,e.collectionGroup,$r(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of $r(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new ws(i.field,o))}const s=e.endAt?new io(e.endAt.position,!e.endAt.inclusive):null,r=e.startAt?new io(e.startAt.position,!e.startAt.inclusive):null;e.C=$h(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.C}function X0(t,e,n){return new ti(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function jo(t,e){return Dl(Xn(t),Xn(e))&&t.limitType===e.limitType}function yg(t){return`${Ol(Xn(t))}|lt:${t.limitType}`}function mc(t){return`Query(target=${F0(Xn(t))}; limitType=${t.limitType})`}function Ll(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):q.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Bh(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,$r(n),s)||n.endAt&&!function(r,i,o){const a=Bh(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,$r(n),s))}(t,e)}function Y0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function vg(t){return(e,n)=>{let s=!1;for(const r of $r(t)){const i=J0(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function J0(t,e,n){const s=t.field.isKeyField()?q.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?xs(a,c):X()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return X()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _g(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ro(e)?"-0":e}}function wg(t){return{integerValue:""+t}}function Q0(t,e){return x0(e)?wg(e):_g(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(){this._=void 0}}function Z0(t,e,n){return t instanceof ao?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Br?Eg(t,e):t instanceof Vr?Tg(t,e):function(s,r){const i=bg(s,r),o=jh(i)+jh(s.k);return pc(i)&&pc(s.k)?wg(o):_g(s.M,o)}(t,e)}function eT(t,e,n){return t instanceof Br?Eg(t,e):t instanceof Vr?Tg(t,e):n}function bg(t,e){return t instanceof co?pc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class ao extends qo{}class Br extends qo{constructor(e){super(),this.elements=e}}function Eg(t,e){const n=Ig(e);for(const s of t.elements)n.some(r=>Ut(r,s))||n.push(s);return{arrayValue:{values:n}}}class Vr extends qo{constructor(e){super(),this.elements=e}}function Tg(t,e){let n=Ig(e);for(const s of t.elements)n=n.filter(r=>!Ut(r,s));return{arrayValue:{values:n}}}class co extends qo{constructor(e,n){super(),this.M=e,this.k=n}}function jh(t){return Ae(t.integerValue||t.doubleValue)}function Ig(t){return xl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function tT(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Br&&s instanceof Br||n instanceof Vr&&s instanceof Vr?Rs(n.elements,s.elements,Ut):n instanceof co&&s instanceof co?Ut(n.k,s.k):n instanceof ao&&s instanceof ao}(t.transform,e.transform)}class nT{constructor(e,n){this.version=e,this.transformResults=n}}class gn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new gn}static exists(e){return new gn(void 0,e)}static updateTime(e){return new gn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ho{}function sT(t,e,n){t instanceof zo?function(s,r,i){const o=s.value.clone(),a=zh(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Gs?function(s,r,i){if(!xi(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=zh(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Sg(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function yc(t,e,n){t instanceof zo?function(s,r,i){if(!xi(s.precondition,r))return;const o=s.value.clone(),a=Kh(s.fieldTransforms,i,r);o.setAll(a),r.convertToFoundDocument(Hh(r),o).setHasLocalMutations()}(t,e,n):t instanceof Gs?function(s,r,i){if(!xi(s.precondition,r))return;const o=Kh(s.fieldTransforms,i,r),a=r.data;a.setAll(Sg(s)),a.setAll(o),r.convertToFoundDocument(Hh(r),a).setHasLocalMutations()}(t,e,n):function(s,r){xi(s.precondition,r)&&r.convertToNoDocument(ee.min())}(t,e)}function rT(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=bg(s.transform,r||null);i!=null&&(n==null&&(n=ht.empty()),n.set(s.field,i))}return n||null}function qh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Rs(n,s,(r,i)=>tT(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Hh(t){return t.isFoundDocument()?t.version:ee.min()}class zo extends Ho{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}}class Gs extends Ho{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Sg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function zh(t,e,n){const s=new Map;me(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,eT(o,a,n[r]))}return s}function Kh(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Z0(i,o,e))}return s}class Cg extends Ho{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class iT extends Ho{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce,ne;function aT(t){switch(t){default:return X();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function Ag(t){if(t===void 0)return _n("GRPC error has no .code"),E.UNKNOWN;switch(t){case Ce.OK:return E.OK;case Ce.CANCELLED:return E.CANCELLED;case Ce.UNKNOWN:return E.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return E.INTERNAL;case Ce.UNAVAILABLE:return E.UNAVAILABLE;case Ce.UNAUTHENTICATED:return E.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case Ce.NOT_FOUND:return E.NOT_FOUND;case Ce.ALREADY_EXISTS:return E.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return E.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case Ce.ABORTED:return E.ABORTED;case Ce.OUT_OF_RANGE:return E.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return E.UNIMPLEMENTED;case Ce.DATA_LOSS:return E.DATA_LOSS;default:return X()}}(ne=Ce||(Ce={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ts(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return ug(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n){this.comparator=e,this.root=n||Fe.EMPTY}insert(e,n){return new Ue(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Fe.BLACK,null,null))}remove(e){return new Ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Fe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ti(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ti(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ti(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ti(this.root,e,this.comparator,!0)}}class Ti{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Fe{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:Fe.RED,this.left=r!=null?r:Fe.EMPTY,this.right=i!=null?i:Fe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Fe(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Fe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Fe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}Fe.EMPTY=null,Fe.RED=!0,Fe.BLACK=!1;Fe.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Fe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.comparator=e,this.data=new Ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Wh(this.data.getIterator())}getIteratorFrom(e){return new Wh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ve)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ve(this.comparator);return n.data=e,n}}class Wh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT=new Ue(q.comparator);function Yn(){return cT}const lT=new Ue(q.comparator);function vc(){return lT}function Ta(){return new Xs(t=>t.toString(),(t,e)=>t.isEqual(e))}const uT=new Ue(q.comparator),hT=new Ve(q.comparator);function ve(...t){let e=hT;for(const n of t)e=e.add(n);return e}const fT=new Ve(ce);function kg(){return fT}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,ni.createSynthesizedTargetChangeForCurrentChange(e,n)),new Ko(ee.min(),s,kg(),Yn(),ve())}}class ni{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new ni(je.EMPTY_BYTE_STRING,n,ve(),ve(),ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,n,s,r){this.O=e,this.removedTargetIds=n,this.key=s,this.F=r}}class Rg{constructor(e,n){this.targetId=e,this.$=n}}class Ng{constructor(e,n,s=je.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Gh{constructor(){this.B=0,this.L=Yh(),this.U=je.EMPTY_BYTE_STRING,this.q=!1,this.G=!0}get current(){return this.q}get resumeToken(){return this.U}get K(){return this.B!==0}get j(){return this.G}W(e){e.approximateByteSize()>0&&(this.G=!0,this.U=e)}H(){let e=ve(),n=ve(),s=ve();return this.L.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:X()}}),new ni(this.U,this.q,e,n,s)}J(){this.G=!1,this.L=Yh()}Y(e,n){this.G=!0,this.L=this.L.insert(e,n)}X(e){this.G=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.G=!0,this.q=!0}}class dT{constructor(e){this.nt=e,this.st=new Map,this.it=Yn(),this.rt=Xh(),this.ot=new Ve(ce)}ut(e){for(const n of e.O)e.F&&e.F.isFoundDocument()?this.at(n,e.F):this.ct(n,e.key,e.F);for(const n of e.removedTargetIds)this.ct(n,e.key,e.F)}ht(e){this.forEachTarget(e,n=>{const s=this.lt(n);switch(e.state){case 0:this.ft(n)&&s.W(e.resumeToken);break;case 1:s.tt(),s.K||s.J(),s.W(e.resumeToken);break;case 2:s.tt(),s.K||this.removeTarget(n);break;case 3:this.ft(n)&&(s.et(),s.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),s.W(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((s,r)=>{this.ft(r)&&n(r)})}_t(e){const n=e.targetId,s=e.$.count,r=this.wt(n);if(r){const i=r.target;if(gc(i))if(s===0){const o=new q(i.path);this.ct(n,o,ze.newNoDocument(o,ee.min()))}else me(s===1);else this.gt(n)!==s&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&gc(a.target)){const c=new q(a.target.path);this.it.get(c)!==null||this.It(o,c)||this.ct(o,c,ze.newNoDocument(c,e))}i.j&&(n.set(o,i.H()),i.J())}});let s=ve();this.rt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.wt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.it.forEach((i,o)=>o.setReadTime(e));const r=new Ko(e,n,this.ot,this.it,s);return this.it=Yn(),this.rt=Xh(),this.ot=new Ve(ce),r}at(e,n){if(!this.ft(e))return;const s=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,s),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(e))}ct(e,n,s){if(!this.ft(e))return;const r=this.lt(e);this.It(e,n)?r.Y(n,1):r.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(e)),s&&(this.it=this.it.insert(n,s))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new Gh,this.st.set(e,n)),n}Tt(e){let n=this.rt.get(e);return n||(n=new Ve(ce),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.K?null:this.nt.Et(e)}dt(e){this.st.set(e,new Gh),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function Xh(){return new Ue(q.comparator)}function Yh(){return new Ue(q.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),gT=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class mT{constructor(e,n){this.databaseId=e,this.N=n}}function lo(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Pg(t,e){return t.N?e.toBase64():e.toUint8Array()}function yT(t,e){return lo(t,e.toTimestamp())}function Kt(t){return me(!!t),ee.fromTimestamp(function(e){const n=wn(e);return new Ge(n.seconds,n.nanos)}(t))}function Ul(t,e){return function(n){return new Ee(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function xg(t){const e=Ee.fromString(t);return me(Mg(e)),e}function _c(t,e){return Ul(t.databaseId,e.path)}function Ia(t,e){const n=xg(e);if(n.get(1)!==t.databaseId.projectId)throw new B(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(Og(n))}function wc(t,e){return Ul(t.databaseId,e)}function vT(t){const e=xg(t);return e.length===4?Ee.emptyPath():Og(e)}function bc(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Og(t){return me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Jh(t,e,n){return{name:_c(t,e),fields:n.value.mapValue.fields}}function _T(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.N?(me(l===void 0||typeof l=="string"),je.fromBase64String(l||"")):(me(l===void 0||l instanceof Uint8Array),je.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?E.UNKNOWN:Ag(c.code);return new B(l,c.message||"")}(o);n=new Ng(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Ia(t,s.document.name),i=Kt(s.document.updateTime),o=new ht({mapValue:{fields:s.document.fields}}),a=ze.newFoundDocument(r,i,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new Oi(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Ia(t,s.document),i=s.readTime?Kt(s.readTime):ee.min(),o=ze.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Oi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Ia(t,s.document),i=s.removedTargetIds||[];n=new Oi([],i,r,null)}else{if(!("filter"in e))return X();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new oT(r),o=s.targetId;n=new Rg(o,i)}}return n}function wT(t,e){let n;if(e instanceof zo)n={update:Jh(t,e.key,e.value)};else if(e instanceof Cg)n={delete:_c(t,e.key)};else if(e instanceof Gs)n={update:Jh(t,e.key,e.data),updateMask:NT(e.fieldMask)};else{if(!(e instanceof iT))return X();n={verify:_c(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof ao)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Br)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Vr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof co)return{fieldPath:i.field.canonicalString(),increment:o.k};throw X()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:yT(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:X()}(t,e.precondition)),n}function bT(t,e){return t&&t.length>0?(me(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Kt(s.updateTime):Kt(r);return i.isEqual(ee.min())&&(i=Kt(r)),new nT(i,s.transformResults||[])}(n,e))):[]}function ET(t,e){return{documents:[wc(t,e.path)]}}function TT(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=wc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=wc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(Fh(h.value))return{unaryFilter:{field:cs(h.field),op:"IS_NAN"}};if(Uh(h.value))return{unaryFilter:{field:cs(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Fh(h.value))return{unaryFilter:{field:cs(h.field),op:"IS_NOT_NAN"}};if(Uh(h.value))return{unaryFilter:{field:cs(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:cs(h.field),op:AT(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:cs(u.field),direction:CT(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.N||Ws(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function IT(t){let e=vT(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){me(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=Dg(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new ws(gs(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Ws(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new io(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new io(f,h)}(n.endAt)),W0(e,r,o,i,a,"F",c,l)}function ST(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return X()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Dg(t){return t?t.unaryFilter!==void 0?[RT(t)]:t.fieldFilter!==void 0?[kT(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Dg(e)).reduce((e,n)=>e.concat(n)):X():[]}function CT(t){return pT[t]}function AT(t){return gT[t]}function cs(t){return{fieldPath:t.canonicalString()}}function gs(t){return ot.fromServerFormat(t.fieldPath)}function kT(t){return at.create(gs(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(t.fieldFilter.op),t.fieldFilter.value)}function RT(t){switch(t.unaryFilter.op){case"IS_NAN":const e=gs(t.unaryFilter.field);return at.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=gs(t.unaryFilter.field);return at.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=gs(t.unaryFilter.field);return at.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=gs(t.unaryFilter.field);return at.create(r,"!=",{nullValue:"NULL_VALUE"});default:return X()}}function NT(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Mg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,s)=>{n(e)})}static reject(e){return new A((n,s)=>{s(e)})}static waitFor(e){return new A((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=A.resolve(!1);for(const s of e)n=n.next(r=>r?A.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}}function si(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&sT(i,e,s[r])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&yc(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&yc(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const s=e.get(n.key),r=s;this.applyToLocalView(r),s.isValidDocument()||r.convertToNoDocument(ee.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&Rs(this.mutations,e.mutations,(n,s)=>qh(n,s))&&Rs(this.baseMutations,e.baseMutations,(n,s)=>qh(n,s))}}class Fl{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){me(e.mutations.length===s.length);let r=uT;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Fl(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,n,s,r,i=ee.min(),o=ee.min(),a=je.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new $n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{constructor(e){this.Jt=e}}function LT(t){const e=IT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?X0(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(){this.qe=new FT}addToCollectionParentIndex(e,n){return this.qe.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.qe.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getFieldIndex(e,n){return A.resolve(null)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}updateCollectionGroup(e,n,s){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class FT{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Ve(Ee.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ve(Ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e){this.wn=e}next(){return this.wn+=2,this.wn}static mn(){return new Ds(0)}static gn(){return new Ds(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ri(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==PT)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(){this.changes=new Xs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?A.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e,n,s){this.fs=e,this.$s=n,this.indexManager=s}Bs(e,n){return this.$s.getAllMutationBatchesAffectingDocumentKey(e,n).next(s=>this.Ls(e,n,s))}Ls(e,n,s){return this.fs.getEntry(e,n).next(r=>{for(const i of s)i.applyToLocalView(r);return r})}Us(e,n){e.forEach((s,r)=>{for(const i of n)i.applyToLocalView(r)})}qs(e,n){return this.fs.getEntries(e,n).next(s=>this.Gs(e,s).next(()=>s))}Gs(e,n){return this.$s.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>this.Us(n,s))}Ks(e,n,s){return function(r){return q.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.Qs(e,n.path):G0(n)?this.js(e,n,s):this.Ws(e,n,s)}Qs(e,n){return this.Bs(e,new q(n)).next(s=>{let r=vc();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}js(e,n,s){const r=n.collectionGroup;let i=vc();return this.indexManager.getCollectionParents(e,r).next(o=>A.forEach(o,a=>{const c=function(l,u){return new ti(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.Ws(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}Ws(e,n,s){let r;return this.fs.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.$s.getAllMutationBatchesAffectingQuery(e,n))).next(i=>{for(const o of i)for(const a of o.mutations){const c=a.key;let l=r.get(c);l==null&&(l=ze.newInvalidDocument(c),r=r.insert(c,l)),yc(a,l,o.localWriteTime),l.isFoundDocument()||(r=r.remove(c))}}).next(()=>(r.forEach((i,o)=>{Ll(n,o)||(r=r.remove(i))}),r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.zs=s,this.Hs=r}static Js(e,n){let s=ve(),r=ve();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new $l(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{Ys(e){this.Xs=e}Ks(e,n,s,r){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(n)||s.isEqual(ee.min())?this.Zs(e,n):this.Xs.qs(e,r).next(i=>{const o=this.ti(n,i);return(Pi(n)||oo(n))&&this.ei(n.limitType,o,r,s)?this.Zs(e,n):(Oh()<=oe.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),mc(n)),this.Xs.Ks(e,n,D0(s,-1)).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}ti(e,n){let s=new Ve(vg(e));return n.forEach((r,i)=>{Ll(e,i)&&(s=s.add(i))}),s}ei(e,n,s,r){if(s.size!==n.size)return!0;const i=e==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Zs(e,n){return Oh()<=oe.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",mc(n)),this.Xs.Ks(e,n,Os.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e,n,s,r){this.persistence=e,this.ni=n,this.M=r,this.si=new Ue(ce),this.ii=new Xs(i=>Ol(i),Dl),this.ri=new Map,this.oi=e.getRemoteDocumentCache(),this.ls=e.getTargetCache(),this.ds=e.getBundleCache(),this.ui(s)}ui(e){this.indexManager=this.persistence.getIndexManager(e),this.$s=this.persistence.getMutationQueue(e,this.indexManager),this.ai=new BT(this.oi,this.$s,this.indexManager),this.oi.setIndexManager(this.indexManager),this.ni.Ys(this.ai)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.si))}}function qT(t,e,n,s){return new jT(t,e,n,s)}async function Lg(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.$s.getAllMutationBatches(s).next(i=>(r=i,n.ui(e),n.$s.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ve();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.ai.qs(s,c).next(l=>({ci:l,removedBatchIds:o,addedBatchIds:a}))})})}function HT(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.oi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=A.resolve();return h.forEach(g=>{f=f.next(()=>l.getEntry(a,g)).next(m=>{const I=c.docVersions.get(g);me(I!==null),m.version.compareTo(I)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),f.next(()=>o.$s.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.$s.performConsistencyCheck(s)).next(()=>n.ai.qs(s,r))})}function Ug(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ls.getLastRemoteSnapshotVersion(n))}function zT(t,e){const n=J(t),s=e.snapshotVersion;let r=n.si;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.oi.newChangeBuffer({trackRemovals:!0});r=n.si;const a=[];e.targetChanges.forEach((l,u)=>{const h=r.get(u);if(!h)return;a.push(n.ls.removeMatchingKeys(i,l.removedDocuments,u).next(()=>n.ls.addMatchingKeys(i,l.addedDocuments,u)));let f=h.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(u)?f=f.withResumeToken(je.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,s)),r=r.insert(u,f),function(g,m,I){return g.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(h,f,l)&&a.push(n.ls.updateTargetData(i,f))});let c=Yn();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(KT(i,o,e.documentUpdates).next(l=>{c=l})),!s.isEqual(ee.min())){const l=n.ls.getLastRemoteSnapshotVersion(i).next(u=>n.ls.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return A.waitFor(a).next(()=>o.apply(i)).next(()=>n.ai.Gs(i,c)).next(()=>c)}).then(i=>(n.si=r,i))}function KT(t,e,n){let s=ve();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let i=Yn();return n.forEach((o,a)=>{const c=r.get(o);a.isNoDocument()&&a.version.isEqual(ee.min())?(e.removeEntry(o,a.readTime),i=i.insert(o,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(a),i=i.insert(o,a)):F("LocalStore","Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",a.version)}),i})}function WT(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.$s.getNextMutationBatchAfterBatchId(s,e)))}function GT(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.ls.getTargetData(s,e).next(i=>i?(r=i,A.resolve(r)):n.ls.allocateTargetId(s).next(o=>(r=new $n(e,o,0,s.currentSequenceNumber),n.ls.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.si.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.si=n.si.insert(s.targetId,s),n.ii.set(e,s.targetId)),s})}async function Ec(t,e,n){const s=J(t),r=s.si.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!si(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.si=s.si.remove(e),s.ii.delete(r.target)}function Qh(t,e,n){const s=J(t);let r=ee.min(),i=ve();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=J(a),h=u.ii.get(l);return h!==void 0?A.resolve(u.si.get(h)):u.ls.getTargetData(c,l)}(s,o,Xn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.ls.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.ni.Ks(o,e,n?r:ee.min(),n?i:ve())).next(a=>(XT(s,Y0(e),a),{documents:a,hi:i})))}function XT(t,e,n){let s=ee.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.ri.set(e,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e){this.M=e,this._i=new Map,this.wi=new Map}getBundleMetadata(e,n){return A.resolve(this._i.get(n))}saveBundleMetadata(e,n){var s;return this._i.set(n.id,{id:(s=n).id,version:s.version,createTime:Kt(s.createTime)}),A.resolve()}getNamedQuery(e,n){return A.resolve(this.wi.get(n))}saveNamedQuery(e,n){return this.wi.set(n.name,function(s){return{name:s.name,query:LT(s.bundledQuery),readTime:Kt(s.readTime)}}(n)),A.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(){this.overlays=new Ue(q.comparator),this.mi=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.Xt(e,n,i)}),A.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.mi.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.mi.delete(s)),A.resolve()}getOverlaysForCollection(e,n,s){const r=Ta(),i=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return A.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Ue((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Ta(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Ta(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return A.resolve(a)}Xt(e,n,s){if(s===null)return;const r=this.overlays.get(s.key);if(r!==null){const o=this.mi.get(r.largestBatchId).delete(s.key);this.mi.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new DT(n,s));let i=this.mi.get(n);i===void 0&&(i=ve(),this.mi.set(n,i)),this.mi.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(){this.gi=new Ve(xe.yi),this.pi=new Ve(xe.Ii)}isEmpty(){return this.gi.isEmpty()}addReference(e,n){const s=new xe(e,n);this.gi=this.gi.add(s),this.pi=this.pi.add(s)}Ti(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Ei(new xe(e,n))}Ai(e,n){e.forEach(s=>this.removeReference(s,n))}Ri(e){const n=new q(new Ee([])),s=new xe(n,e),r=new xe(n,e+1),i=[];return this.pi.forEachInRange([s,r],o=>{this.Ei(o),i.push(o.key)}),i}bi(){this.gi.forEach(e=>this.Ei(e))}Ei(e){this.gi=this.gi.delete(e),this.pi=this.pi.delete(e)}Pi(e){const n=new q(new Ee([])),s=new xe(n,e),r=new xe(n,e+1);let i=ve();return this.pi.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new xe(e,0),s=this.gi.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class xe{constructor(e,n){this.key=e,this.Vi=n}static yi(e,n){return q.comparator(e.key,n.key)||ce(e.Vi,n.Vi)}static Ii(e,n){return ce(e.Vi,n.Vi)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.$s=[],this.vi=1,this.Si=new Ve(xe.yi)}checkEmpty(e){return A.resolve(this.$s.length===0)}addMutationBatch(e,n,s,r){const i=this.vi;this.vi++,this.$s.length>0&&this.$s[this.$s.length-1];const o=new OT(i,n,s,r);this.$s.push(o);for(const a of r)this.Si=this.Si.add(new xe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.Di(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Ci(s),i=r<0?0:r;return A.resolve(this.$s.length>i?this.$s[i]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.$s.length===0?-1:this.vi-1)}getAllMutationBatches(e){return A.resolve(this.$s.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new xe(n,0),r=new xe(n,Number.POSITIVE_INFINITY),i=[];return this.Si.forEachInRange([s,r],o=>{const a=this.Di(o.Vi);i.push(a)}),A.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ve(ce);return n.forEach(r=>{const i=new xe(r,0),o=new xe(r,Number.POSITIVE_INFINITY);this.Si.forEachInRange([i,o],a=>{s=s.add(a.Vi)})}),A.resolve(this.xi(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;q.isDocumentKey(i)||(i=i.child(""));const o=new xe(new q(i),0);let a=new Ve(ce);return this.Si.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.Vi)),!0)},o),A.resolve(this.xi(a))}xi(e){const n=[];return e.forEach(s=>{const r=this.Di(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){me(this.Ni(n.batchId,"removed")===0),this.$s.shift();let s=this.Si;return A.forEach(n.mutations,r=>{const i=new xe(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Si=s})}dn(e){}containsKey(e,n){const s=new xe(n,0),r=this.Si.firstAfterOrEqual(s);return A.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.$s.length,A.resolve()}Ni(e,n){return this.Ci(e)}Ci(e){return this.$s.length===0?0:e-this.$s[0].batchId}Di(e){const n=this.Ci(e);return n<0||n>=this.$s.length?null:this.$s[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e){this.ki=e,this.docs=new Ue(q.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.ki(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return A.resolve(s?s.document.mutableCopy():ze.newInvalidDocument(n))}getEntries(e,n){let s=Yn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():ze.newInvalidDocument(r))}),A.resolve(s)}getAllFromCollection(e,n,s){let r=Yn();const i=new q(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||L0(M0(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return A.resolve(r)}getAllFromCollectionGroup(e,n,s,r){X()}Mi(e,n){return A.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new eI(this)}getSize(e){return A.resolve(this.size)}}class eI extends $T{constructor(e){super(),this.qn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.qn.addEntry(e,r)):this.qn.removeEntry(s)}),A.waitFor(n)}getFromCache(e,n){return this.qn.getEntry(e,n)}getAllFromCache(e,n){return this.qn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e){this.persistence=e,this.Oi=new Xs(n=>Ol(n),Dl),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Fi=0,this.$i=new Bl,this.targetCount=0,this.Bi=Ds.mn()}forEachTarget(e,n){return this.Oi.forEach((s,r)=>n(r)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Fi)}allocateTargetId(e){return this.highestTargetId=this.Bi.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Fi&&(this.Fi=n),A.resolve()}In(e){this.Oi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Bi=new Ds(n),this.highestTargetId=n),e.sequenceNumber>this.Fi&&(this.Fi=e.sequenceNumber)}addTargetData(e,n){return this.In(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.In(n),A.resolve()}removeTargetData(e,n){return this.Oi.delete(n.target),this.$i.Ri(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Oi.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Oi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),A.waitFor(i).next(()=>r)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const s=this.Oi.get(n)||null;return A.resolve(s)}addMatchingKeys(e,n,s){return this.$i.Ti(n,s),A.resolve()}removeMatchingKeys(e,n,s){this.$i.Ai(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),A.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.$i.Ri(n),A.resolve()}getMatchingKeysForTargetId(e,n){const s=this.$i.Pi(n);return A.resolve(s)}containsKey(e,n){return A.resolve(this.$i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e,n){this.Li={},this.overlays={},this.ts=new Pl(0),this.es=!1,this.es=!0,this.referenceDelegate=e(this),this.ls=new tI(this),this.indexManager=new UT,this.fs=function(s){return new ZT(s)}(s=>this.referenceDelegate.Ui(s)),this.M=new MT(n),this.ds=new YT(this.M)}start(){return Promise.resolve()}shutdown(){return this.es=!1,Promise.resolve()}get started(){return this.es}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new JT,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Li[e.toKey()];return s||(s=new QT(n,this.referenceDelegate),this.Li[e.toKey()]=s),s}getTargetCache(){return this.ls}getRemoteDocumentCache(){return this.fs}getBundleCache(){return this.ds}runTransaction(e,n,s){F("MemoryPersistence","Starting transaction:",e);const r=new sI(this.ts.next());return this.referenceDelegate.qi(),s(r).next(i=>this.referenceDelegate.Gi(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ki(e,n){return A.or(Object.values(this.Li).map(s=>()=>s.containsKey(e,n)))}}class sI extends xT{constructor(e){super(),this.currentSequenceNumber=e}}class Vl{constructor(e){this.persistence=e,this.Qi=new Bl,this.ji=null}static Wi(e){return new Vl(e)}get zi(){if(this.ji)return this.ji;throw X()}addReference(e,n,s){return this.Qi.addReference(s,n),this.zi.delete(s.toString()),A.resolve()}removeReference(e,n,s){return this.Qi.removeReference(s,n),this.zi.add(s.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.zi.add(n.toString()),A.resolve()}removeTarget(e,n){this.Qi.Ri(n.targetId).forEach(r=>this.zi.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.zi.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}qi(){this.ji=new Set}Gi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.zi,s=>{const r=q.fromPath(s);return this.Hi(e,r).next(i=>{i||n.removeEntry(r,ee.min())})}).next(()=>(this.ji=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hi(e,n).next(s=>{s?this.zi.delete(n.toString()):this.zi.add(n.toString())})}Ui(e){return 0}Hi(e,n){return A.or([()=>A.resolve(this.Qi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ki(e,n)])}}class Zh{constructor(){this.activeTargetIds=kg()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class rI{constructor(){this.Fr=new Zh,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,s){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new Zh,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{Br(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Gr(),this.Kr=[],this.Qr()}Br(e){this.Kr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Kr)e(0)}Gr(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Kr)e(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,s,r,i){const o=this.oo(e,n);F("RestConnection","Sending: ",o,s);const a={};return this.uo(a,r,i),this.ao(e,o,a,s).then(c=>(F("RestConnection","Received: ",c),c),c=>{throw Dh("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}co(e,n,s,r,i){return this.ro(e,n,s,r,i)}uo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ks,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}oo(e,n){const s=oI[e];return`${this.so}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}ao(e,n,s,r){return new Promise((i,o)=>{const a=new w0;a.listenOnce(y0.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ea.NO_ERROR:const l=a.getResponseJson();F("Connection","XHR received:",JSON.stringify(l)),i(l);break;case Ea.TIMEOUT:F("Connection",'RPC "'+e+'" timed out'),o(new B(E.DEADLINE_EXCEEDED,"Request time out"));break;case Ea.HTTP_ERROR:const u=a.getStatus();if(F("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(g){const m=g.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(m)>=0?m:E.UNKNOWN}(h.status);o(new B(f,h.message))}else o(new B(E.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new B(E.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{F("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}ho(e,n,s){const r=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=g0(),o=m0(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new _0({})),this.uo(a.initMessageHeaders,n,s),Zd()||tp()||cb()||np()||lb()||ep()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");F("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const f=new aI({jr:m=>{h?F("Connection","Not sending because WebChannel is closed:",m):(u||(F("Connection","Opening WebChannel transport."),l.open(),u=!0),F("Connection","WebChannel sending:",m),l.send(m))},Wr:()=>l.close()}),g=(m,I,_)=>{m.listen(I,k=>{try{_(k)}catch(D){setTimeout(()=>{throw D},0)}})};return g(l,Ei.EventType.OPEN,()=>{h||F("Connection","WebChannel transport opened.")}),g(l,Ei.EventType.CLOSE,()=>{h||(h=!0,F("Connection","WebChannel transport closed"),f.eo())}),g(l,Ei.EventType.ERROR,m=>{h||(h=!0,Dh("Connection","WebChannel transport errored:",m),f.eo(new B(E.UNAVAILABLE,"The operation could not be completed")))}),g(l,Ei.EventType.MESSAGE,m=>{var I;if(!h){const _=m.data[0];me(!!_);const k=_,D=k.error||((I=k[0])===null||I===void 0?void 0:I.error);if(D){F("Connection","WebChannel received error:",D);const U=D.status;let O=function(H){const W=Ce[H];if(W!==void 0)return Ag(W)}(U),se=D.message;O===void 0&&(O=E.INTERNAL,se="Unknown error status: "+U+" with message "+D.message),h=!0,f.eo(new B(O,se)),l.close()}else F("Connection","WebChannel received:",_),f.no(_)}}),g(o,v0.STAT_EVENT,m=>{m.stat===Ph.PROXY?F("Connection","Detected buffering proxy"):m.stat===Ph.NOPROXY&&F("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.Zr()},0),f}}function Sa(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(t){return new mT(t,!0)}class Fg{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Jn=e,this.timerId=n,this.lo=s,this.fo=r,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),s=Math.max(0,Date.now()-this.yo),r=Math.max(0,n-s);r>0&&F("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.mo=this.Jn.enqueueAfterDelay(this.timerId,r,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,n,s,r,i,o,a,c){this.Jn=e,this.Ao=s,this.Ro=r,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Po=0,this.Vo=null,this.vo=null,this.stream=null,this.So=new Fg(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.Vo===null&&(this.Vo=this.Jn.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(_n(n.toString()),_n("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Po===n&&this.Uo(s,r)},s=>{e(()=>{const r=new B(E.UNKNOWN,"Fetching auth token failed: "+s.message);return this.qo(r)})})}Uo(e,n){const s=this.Lo(this.Po);this.stream=this.Go(e,n),this.stream.zr(()=>{s(()=>(this.state=2,this.vo=this.Jn.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(r=>{s(()=>this.qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.Jn.enqueueAndForget(()=>this.Po===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class lI extends $g{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.M=i}Go(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=_T(this.M,e),s=function(r){if(!("targetChange"in r))return ee.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?ee.min():i.readTime?Kt(i.readTime):ee.min()}(e);return this.listener.Ko(n,s)}Qo(e){const n={};n.database=bc(this.M),n.addTarget=function(r,i){let o;const a=i.target;return o=gc(a)?{documents:ET(r,a)}:{query:TT(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Pg(r,i.resumeToken):i.snapshotVersion.compareTo(ee.min())>0&&(o.readTime=lo(r,i.snapshotVersion.toTimestamp())),o}(this.M,e);const s=ST(this.M,e);s&&(n.labels=s),this.Oo(n)}jo(e){const n={};n.database=bc(this.M),n.removeTarget=e,this.Oo(n)}}class uI extends $g{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.M=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Go(e,n){return this.bo.ho("Write",e,n)}onMessage(e){if(me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const n=bT(e.writeResults,e.commitTime),s=Kt(e.commitTime);return this.listener.Jo(s,n)}return me(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=bc(this.M),this.Oo(e)}Ho(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>wT(this.M,s))};this.Oo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=s,this.M=r,this.Zo=!1}tu(){if(this.Zo)throw new B(E.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.ro(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new B(E.UNKNOWN,r.toString())})}co(e,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.co(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new B(E.UNKNOWN,r.toString())})}terminate(){this.Zo=!0}}class fI{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.au(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.au(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(_n(n),this.su=!1):F("OnlineStateTracker",n)}au(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.cu=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br(o=>{s.enqueueAndForget(async()=>{ns(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=J(a);c.lu.add(4),await ii(c),c._u.set("Unknown"),c.lu.delete(4),await Go(c)}(this))})}),this._u=new fI(s,r)}}async function Go(t){if(ns(t))for(const e of t.fu)await e(!0)}async function ii(t){for(const e of t.fu)await e(!1)}function Bg(t,e){const n=J(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),Hl(n)?ql(n):Ys(n).Co()&&jl(n,e))}function Vg(t,e){const n=J(t),s=Ys(n);n.hu.delete(e),s.Co()&&jg(n,e),n.hu.size===0&&(s.Co()?s.ko():ns(n)&&n._u.set("Unknown"))}function jl(t,e){t.wu.Z(e.targetId),Ys(t).Qo(e)}function jg(t,e){t.wu.Z(e),Ys(t).jo(e)}function ql(t){t.wu=new dT({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.hu.get(e)||null}),Ys(t).start(),t._u.iu()}function Hl(t){return ns(t)&&!Ys(t).Do()&&t.hu.size>0}function ns(t){return J(t).lu.size===0}function qg(t){t.wu=void 0}async function pI(t){t.hu.forEach((e,n)=>{jl(t,e)})}async function gI(t,e){qg(t),Hl(t)?(t._u.uu(e),ql(t)):t._u.set("Unknown")}async function mI(t,e,n){if(t._u.set("Online"),e instanceof Ng&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.hu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.hu.delete(o),s.wu.removeTarget(o))}(t,e)}catch(s){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await uo(t,s)}else if(e instanceof Oi?t.wu.ut(e):e instanceof Rg?t.wu._t(e):t.wu.ht(e),!n.isEqual(ee.min()))try{const s=await Ug(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.wu.yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.hu.get(c);l&&r.hu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.hu.get(a);if(!c)return;r.hu.set(a,c.withResumeToken(je.EMPTY_BYTE_STRING,c.snapshotVersion)),jg(r,a);const l=new $n(c.target,a,1,c.sequenceNumber);jl(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){F("RemoteStore","Failed to raise snapshot:",s),await uo(t,s)}}async function uo(t,e,n){if(!si(e))throw e;t.lu.add(1),await ii(t),t._u.set("Offline"),n||(n=()=>Ug(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Go(t)})}function Hg(t,e){return e().catch(n=>uo(t,n,e))}async function Xo(t){const e=J(t),n=bn(e);let s=e.cu.length>0?e.cu[e.cu.length-1].batchId:-1;for(;yI(e);)try{const r=await WT(e.localStore,s);if(r===null){e.cu.length===0&&n.ko();break}s=r.batchId,vI(e,r)}catch(r){await uo(e,r)}zg(e)&&Kg(e)}function yI(t){return ns(t)&&t.cu.length<10}function vI(t,e){t.cu.push(e);const n=bn(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function zg(t){return ns(t)&&!bn(t).Do()&&t.cu.length>0}function Kg(t){bn(t).start()}async function _I(t){bn(t).Xo()}async function wI(t){const e=bn(t);for(const n of t.cu)e.Ho(n.mutations)}async function bI(t,e,n){const s=t.cu.shift(),r=Fl.from(s,e,n);await Hg(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Xo(t)}async function EI(t,e){e&&bn(t).zo&&await async function(n,s){if(r=s.code,aT(r)&&r!==E.ABORTED){const i=n.cu.shift();bn(n).No(),await Hg(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Xo(n)}var r}(t,e),zg(t)&&Kg(t)}async function tf(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const s=ns(n);n.lu.add(3),await ii(n),s&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Go(n)}async function TI(t,e){const n=J(t);e?(n.lu.delete(2),await Go(n)):e||(n.lu.add(2),await ii(n),n._u.set("Unknown"))}function Ys(t){return t.mu||(t.mu=function(e,n,s){const r=J(e);return r.tu(),new lI(n,r.bo,r.authCredentials,r.appCheckCredentials,r.M,s)}(t.datastore,t.asyncQueue,{zr:pI.bind(null,t),Jr:gI.bind(null,t),Ko:mI.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),Hl(t)?ql(t):t._u.set("Unknown")):(await t.mu.stop(),qg(t))})),t.mu}function bn(t){return t.gu||(t.gu=function(e,n,s){const r=J(e);return r.tu(),new uI(n,r.bo,r.authCredentials,r.appCheckCredentials,r.M,s)}(t.datastore,t.asyncQueue,{zr:_I.bind(null,t),Jr:EI.bind(null,t),Yo:wI.bind(null,t),Jo:bI.bind(null,t)}),t.fu.push(async e=>{e?(t.gu.No(),await Xo(t)):(await t.gu.stop(),t.cu.length>0&&(F("RemoteStore",`Stopping write stream with ${t.cu.length} pending writes`),t.cu=[]))})),t.gu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new zt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new zl(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Kl(t,e){if(_n("AsyncQueue",`${e}: ${t}`),si(t))return new B(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||q.comparator(n.key,s.key):(n,s)=>q.comparator(n.key,s.key),this.keyedMap=vc(),this.sortedSet=new Ue(this.comparator)}static emptySet(e){return new bs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof bs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new bs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(){this.yu=new Ue(q.comparator)}track(e){const n=e.doc.key,s=this.yu.get(n);s?e.type!==0&&s.type===3?this.yu=this.yu.insert(n,e):e.type===3&&s.type!==1?this.yu=this.yu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.yu=this.yu.remove(n):e.type===1&&s.type===2?this.yu=this.yu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):X():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Ms{constructor(e,n,s,r,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new Ms(e,n,bs.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&jo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(){this.Iu=void 0,this.listeners=[]}}class SI{constructor(){this.queries=new Xs(e=>yg(e),jo),this.onlineState="Unknown",this.Tu=new Set}}async function Wg(t,e){const n=J(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new II),r)try{i.Iu=await n.onListen(s)}catch(o){const a=Kl(o,`Initialization of query '${mc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Eu(n.onlineState),i.Iu&&e.Au(i.Iu)&&Wl(n)}async function Gg(t,e){const n=J(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function CI(t,e){const n=J(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Au(r)&&(s=!0);o.Iu=r}}s&&Wl(n)}function AI(t,e,n){const s=J(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Wl(t){t.Tu.forEach(e=>{e.next()})}class Xg{constructor(e,n,s){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=s||{}}Au(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Ms(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.Vu(e)&&(this.Ru.next(e),n=!0):this.vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}vu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Du||!s)&&(!e.docs.isEmpty()||n==="Offline")}Vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=Ms.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e){this.key=e}}class Jg{constructor(e){this.key=e}}class kI{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=ve(),this.mutatedKeys=ve(),this.Lu=vg(e),this.Uu=new bs(this.Lu)}get qu(){return this.Fu}Gu(e,n){const s=n?n.Ku:new nf,r=n?n.Uu:this.Uu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=Pi(this.query)&&r.size===this.query.limit?r.last():null,l=oo(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),g=Ll(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),I=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let _=!1;f&&g?f.data.isEqual(g.data)?m!==I&&(s.track({type:3,doc:g}),_=!0):this.Qu(f,g)||(s.track({type:2,doc:g}),_=!0,(c&&this.Lu(g,c)>0||l&&this.Lu(g,l)<0)&&(a=!0)):!f&&g?(s.track({type:0,doc:g}),_=!0):f&&!g&&(s.track({type:1,doc:f}),_=!0,(c||l)&&(a=!0)),_&&(g?(o=o.add(g),i=I?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),Pi(this.query)||oo(this.query))for(;o.size>this.query.limit;){const u=Pi(this.query)?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Uu:o,Ku:s,ei:a,mutatedKeys:i}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const i=e.Ku.pu();i.sort((l,u)=>function(h,f){const g=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return g(h)-g(f)}(l.type,u.type)||this.Lu(l.doc,u.doc)),this.ju(s);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,c=a!==this.$u;return this.$u=a,i.length!==0||c?{snapshot:new Ms(this.query,e.Uu,r,i,e.mutatedKeys,a===0,c,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Ku:new nf,mutatedKeys:this.mutatedKeys,ei:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=ve(),this.Uu.forEach(s=>{this.Hu(s.key)&&(this.Bu=this.Bu.add(s.key))});const n=[];return e.forEach(s=>{this.Bu.has(s)||n.push(new Jg(s))}),this.Bu.forEach(s=>{e.has(s)||n.push(new Yg(s))}),n}Ju(e){this.Fu=e.hi,this.Bu=ve();const n=this.Gu(e.documents);return this.applyChanges(n,!0)}Yu(){return Ms.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class RI{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class NI{constructor(e){this.key=e,this.Xu=!1}}class PI{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Zu={},this.ta=new Xs(a=>yg(a),jo),this.ea=new Map,this.na=new Set,this.sa=new Ue(q.comparator),this.ia=new Map,this.ra=new Bl,this.oa={},this.ua=new Map,this.aa=Ds.gn(),this.onlineState="Unknown",this.ca=void 0}get isPrimaryClient(){return this.ca===!0}}async function xI(t,e){const n=jI(t);let s,r;const i=n.ta.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.Yu();else{const o=await GT(n.localStore,Xn(e));n.isPrimaryClient&&Bg(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await OI(n,e,s,a==="current")}return r}async function OI(t,e,n,s){t.ha=(u,h,f)=>async function(g,m,I,_){let k=m.view.Gu(I);k.ei&&(k=await Qh(g.localStore,m.query,!1).then(({documents:O})=>m.view.Gu(O,k)));const D=_&&_.targetChanges.get(m.targetId),U=m.view.applyChanges(k,g.isPrimaryClient,D);return rf(g,m.targetId,U.zu),U.snapshot}(t,u,h,f);const r=await Qh(t.localStore,e,!0),i=new kI(e,r.hi),o=i.Gu(r.documents),a=ni.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);rf(t,n,c.zu);const l=new RI(e,n,i);return t.ta.set(e,l),t.ea.has(n)?t.ea.get(n).push(e):t.ea.set(n,[e]),c.snapshot}async function DI(t,e){const n=J(t),s=n.ta.get(e),r=n.ea.get(s.targetId);if(r.length>1)return n.ea.set(s.targetId,r.filter(i=>!jo(i,e))),void n.ta.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ec(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Vg(n.remoteStore,s.targetId),Tc(n,s.targetId)}).catch(ri)):(Tc(n,s.targetId),await Ec(n.localStore,s.targetId,!0))}async function MI(t,e,n){const s=qI(t);try{const r=await function(i,o){const a=J(i),c=Ge.now(),l=o.reduce((h,f)=>h.add(f.key),ve());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.ai.qs(h,l).next(f=>{u=f;const g=[];for(const m of o){const I=rT(m,u.get(m.key));I!=null&&g.push(new Gs(m.key,I,dg(I.value.mapValue),gn.exists(!0)))}return a.$s.addMutationBatch(h,c,g,o)})).then(h=>(h.applyToLocalDocumentSet(u),{batchId:h.batchId,changes:u}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.oa[i.currentUser.toKey()];c||(c=new Ue(ce)),c=c.insert(o,a),i.oa[i.currentUser.toKey()]=c}(s,r.batchId,n),await oi(s,r.changes),await Xo(s.remoteStore)}catch(r){const i=Kl(r,"Failed to persist write");n.reject(i)}}async function Qg(t,e){const n=J(t);try{const s=await zT(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.ia.get(i);o&&(me(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Xu=!0:r.modifiedDocuments.size>0?me(o.Xu):r.removedDocuments.size>0&&(me(o.Xu),o.Xu=!1))}),await oi(n,s,e)}catch(s){await ri(s)}}function sf(t,e,n){const s=J(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ta.forEach((i,o)=>{const a=o.view.Eu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=J(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Eu(o)&&(c=!0)}),c&&Wl(a)}(s.eventManager,e),r.length&&s.Zu.Ko(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function LI(t,e,n){const s=J(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.ia.get(e),i=r&&r.key;if(i){let o=new Ue(q.comparator);o=o.insert(i,ze.newNoDocument(i,ee.min()));const a=ve().add(i),c=new Ko(ee.min(),new Map,new Ve(ce),o,a);await Qg(s,c),s.sa=s.sa.remove(i),s.ia.delete(e),Gl(s)}else await Ec(s.localStore,e,!1).then(()=>Tc(s,e,n)).catch(ri)}async function UI(t,e){const n=J(t),s=e.batch.batchId;try{const r=await HT(n.localStore,e);em(n,s,null),Zg(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await oi(n,r)}catch(r){await ri(r)}}async function FI(t,e,n){const s=J(t);try{const r=await function(i,o){const a=J(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.$s.lookupMutationBatch(c,o).next(u=>(me(u!==null),l=u.keys(),a.$s.removeMutationBatch(c,u))).next(()=>a.$s.performConsistencyCheck(c)).next(()=>a.ai.qs(c,l))})}(s.localStore,e);em(s,e,n),Zg(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await oi(s,r)}catch(r){await ri(r)}}function Zg(t,e){(t.ua.get(e)||[]).forEach(n=>{n.resolve()}),t.ua.delete(e)}function em(t,e,n){const s=J(t);let r=s.oa[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.oa[s.currentUser.toKey()]=r}}function Tc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ea.get(e))t.ta.delete(s),n&&t.Zu.la(s,n);t.ea.delete(e),t.isPrimaryClient&&t.ra.Ri(e).forEach(s=>{t.ra.containsKey(s)||tm(t,s)})}function tm(t,e){t.na.delete(e.path.canonicalString());const n=t.sa.get(e);n!==null&&(Vg(t.remoteStore,n),t.sa=t.sa.remove(e),t.ia.delete(n),Gl(t))}function rf(t,e,n){for(const s of n)s instanceof Yg?(t.ra.addReference(s.key,e),$I(t,s)):s instanceof Jg?(F("SyncEngine","Document no longer in limbo: "+s.key),t.ra.removeReference(s.key,e),t.ra.containsKey(s.key)||tm(t,s.key)):X()}function $I(t,e){const n=e.key,s=n.path.canonicalString();t.sa.get(n)||t.na.has(s)||(F("SyncEngine","New document in limbo: "+n),t.na.add(s),Gl(t))}function Gl(t){for(;t.na.size>0&&t.sa.size<t.maxConcurrentLimboResolutions;){const e=t.na.values().next().value;t.na.delete(e);const n=new q(Ee.fromString(e)),s=t.aa.next();t.ia.set(s,new NI(n)),t.sa=t.sa.insert(n,s),Bg(t.remoteStore,new $n(Xn(Ml(n.path)),s,2,Pl.A))}}async function oi(t,e,n){const s=J(t),r=[],i=[],o=[];s.ta.isEmpty()||(s.ta.forEach((a,c)=>{o.push(s.ha(c,e,n).then(l=>{if(l){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),r.push(l);const u=$l.Js(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.Zu.Ko(r),await async function(a,c){const l=J(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>A.forEach(c,h=>A.forEach(h.zs,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>A.forEach(h.Hs,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!si(u))throw u;F("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.si.get(h),g=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(g);l.si=l.si.insert(h,m)}}}(s.localStore,i))}async function BI(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const s=await Lg(n.localStore,e);n.currentUser=e,function(r,i){r.ua.forEach(o=>{o.forEach(a=>{a.reject(new B(E.CANCELLED,i))})}),r.ua.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await oi(n,s.ci)}}function VI(t,e){const n=J(t),s=n.ia.get(e);if(s&&s.Xu)return ve().add(s.key);{let r=ve();const i=n.ea.get(e);if(!i)return r;for(const o of i){const a=n.ta.get(o);r=r.unionWith(a.view.qu)}return r}}function jI(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Qg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=VI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=LI.bind(null,e),e.Zu.Ko=CI.bind(null,e.eventManager),e.Zu.la=AI.bind(null,e.eventManager),e}function qI(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=UI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=FI.bind(null,e),e}class HI{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=Wo(e.databaseInfo.databaseId),this.sharedClientState=this.da(e),this.persistence=this._a(e),await this.persistence.start(),this.gcScheduler=this.wa(e),this.localStore=this.ma(e)}wa(e){return null}ma(e){return qT(this.persistence,new VT,e.initialUser,this.M)}_a(e){return new nI(Vl.Wi,this.M)}da(e){return new rI}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class zI{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>sf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=BI.bind(null,this.syncEngine),await TI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new SI}createDatastore(e){const n=Wo(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new cI(r));var r;return function(i,o,a,c){return new hI(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>sf(this.syncEngine,a,0),o=ef.vt()?new ef:new iI,new dI(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new PI(s,r,i,o,a,c);return l&&(u.ca=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=J(e);F("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await ii(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ya(this.observer.next,e)}error(e){this.observer.error?this.ya(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}pa(){this.muted=!0}ya(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=rt.UNAUTHENTICATED,this.clientId=lg.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{F("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(F("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Kl(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function WI(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Lg(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function GI(t,e){t.asyncQueue.verifyOperationInProgress();const n=await XI(t);F("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>tf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>tf(e.remoteStore,i)),t.onlineComponents=e}async function XI(t){return t.offlineComponents||(F("FirestoreClient","Using default OfflineComponentProvider"),await WI(t,new HI)),t.offlineComponents}async function sm(t){return t.onlineComponents||(F("FirestoreClient","Using default OnlineComponentProvider"),await GI(t,new zI)),t.onlineComponents}function YI(t){return sm(t).then(e=>e.syncEngine)}async function rm(t){const e=await sm(t),n=e.eventManager;return n.onListen=xI.bind(null,e.syncEngine),n.onUnlisten=DI.bind(null,e.syncEngine),n}function JI(t,e,n={}){const s=new zt;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new nm({next:h=>{i.enqueueAndForget(()=>Gg(r,u));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new B(E.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new B(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Xg(Ml(o.path),l,{includeMetadataChanges:!0,Du:!0});return Wg(r,u)}(await rm(t),t.asyncQueue,e,n,s)),s.promise}function QI(t,e,n={}){const s=new zt;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new nm({next:h=>{i.enqueueAndForget(()=>Gg(r,u)),h.fromCache&&a.source==="server"?c.reject(new B(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Xg(o,l,{includeMetadataChanges:!0,Du:!0});return Wg(r,u)}(await rm(t),t.asyncQueue,e,n,s)),s.promise}const of=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(t,e,n){if(!n)throw new B(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ZI(t,e,n,s){if(e===!0&&s===!0)throw new B(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function af(t){if(!q.isDocumentKey(t))throw new B(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function cf(t){if(q.isDocumentKey(t))throw new B(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Xl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function En(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xl(t);throw new B(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new B(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,ZI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lf({}),this._settingsFrozen=!1,e instanceof Ps?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new B(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ps(r.options.projectId)}(e))}get app(){if(!this._app)throw new B(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lf(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new E0;switch(n.type){case"gapi":const s=n.client;return me(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new S0(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new B(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=of.get(e);n&&(F("ComponentProvider","Removing Datastore"),of.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dt(this.firestore,e,this._key)}}class ai{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ai(this.firestore,e,this._query)}}class mn extends ai{constructor(e,n,s){super(e,n,Ml(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dt(this.firestore,null,new q(e))}withConverter(e){return new mn(this.firestore,e,this._path)}}function eS(t,e,...n){if(t=Xe(t),im("collection","path",e),t instanceof Yl){const s=Ee.fromString(e,...n);return cf(s),new mn(t,null,s)}{if(!(t instanceof dt||t instanceof mn))throw new B(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ee.fromString(e,...n));return cf(s),new mn(t.firestore,null,s)}}function tS(t,e,...n){if(t=Xe(t),arguments.length===1&&(e=lg.R()),im("doc","path",e),t instanceof Yl){const s=Ee.fromString(e,...n);return af(s),new dt(t,null,new q(s))}{if(!(t instanceof dt||t instanceof mn))throw new B(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ee.fromString(e,...n));return af(s),new dt(t.firestore,t instanceof mn?t.converter:null,new q(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(){this.Na=Promise.resolve(),this.ka=[],this.Ma=!1,this.Oa=[],this.Fa=null,this.$a=!1,this.Ba=!1,this.La=[],this.So=new Fg(this,"async_queue_retry"),this.Ua=()=>{const n=Sa();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=Sa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Ua)}get isShuttingDown(){return this.Ma}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.qa(),this.Ga(e)}enterRestrictedMode(e){if(!this.Ma){this.Ma=!0,this.Ba=e||!1;const n=Sa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Ua)}}enqueue(e){if(this.qa(),this.Ma)return new Promise(()=>{});const n=new zt;return this.Ga(()=>this.Ma&&this.Ba?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ka.push(e),this.Ka()))}async Ka(){if(this.ka.length!==0){try{await this.ka[0](),this.ka.shift(),this.So.reset()}catch(e){if(!si(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.ka.length>0&&this.So.Io(()=>this.Ka())}}Ga(e){const n=this.Na.then(()=>(this.$a=!0,e().catch(s=>{this.Fa=s,this.$a=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw _n("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.$a=!1,s))));return this.Na=n,n}enqueueAfterDelay(e,n,s){this.qa(),this.La.indexOf(e)>-1&&(n=0);const r=zl.createAndSchedule(this,e,n,s,i=>this.Qa(i));return this.Oa.push(r),r}qa(){this.Fa&&X()}verifyOperationInProgress(){}async ja(){let e;do e=this.Na,await e;while(e!==this.Na)}Wa(e){for(const n of this.Oa)if(n.timerId===e)return!0;return!1}za(e){return this.ja().then(()=>{this.Oa.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Oa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ja()})}Ha(e){this.La.push(e)}Qa(e){const n=this.Oa.indexOf(e);this.Oa.splice(n,1)}}class Js extends Yl{constructor(e,n,s){super(e,n,s),this.type="firestore",this._queue=new nS,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||om(this),this._firestoreClient.terminate()}}function sS(t=il()){return ko(t,"firestore").getImmediate()}function Jl(t){return t._firestoreClient||om(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function om(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new P0(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new KI(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ls(je.fromBase64String(e))}catch(n){throw new B(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ls(je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS=/^__.*__$/;class iS{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Gs(e,this.data,this.fieldMask,n,this.fieldTransforms):new zo(e,this.data,n,this.fieldTransforms)}}class am{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Gs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function cm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class eu{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.M=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Ja(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ya(){return this.settings.Ya}Xa(e){return new eu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Za(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Xa({path:s,tc:!1});return r.ec(e),r}nc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Xa({path:s,tc:!1});return r.Ja(),r}sc(e){return this.Xa({path:void 0,tc:!0})}ic(e){return ho(e,this.settings.methodName,this.settings.rc||!1,this.path,this.settings.oc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ja(){if(this.path)for(let e=0;e<this.path.length;e++)this.ec(this.path.get(e))}ec(e){if(e.length===0)throw this.ic("Document fields must not be empty");if(cm(this.Ya)&&rS.test(e))throw this.ic('Document fields cannot begin and end with "__"')}}class oS{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.M=s||Wo(e)}uc(e,n,s,r=!1){return new eu({Ya:e,methodName:n,oc:s,path:ot.emptyPath(),tc:!1,rc:r},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function lm(t){const e=t._freezeSettings(),n=Wo(t._databaseId);return new oS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function aS(t,e,n,s,r,i={}){const o=t.uc(i.merge||i.mergeFields?2:0,e,n,r);tu("Data must be an object, but it was:",o,s);const a=um(s,o);let c,l;if(i.merge)c=new Lr(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=Ic(e,h,n);if(!o.contains(f))throw new B(E.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);fm(u,f)||u.push(f)}c=new Lr(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new iS(new ht(a),c,l)}class Jo extends Ql{_toFieldTransform(e){if(e.Ya!==2)throw e.Ya===1?e.ic(`${this._methodName}() can only appear at the top level of your update data`):e.ic(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Jo}}function cS(t,e,n,s){const r=t.uc(1,e,n);tu("Data must be an object, but it was:",r,s);const i=[],o=ht.empty();ts(s,(c,l)=>{const u=nu(e,c,n);l=Xe(l);const h=r.nc(u);if(l instanceof Jo)i.push(u);else{const f=Qo(l,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new Lr(i);return new am(o,a,r.fieldTransforms)}function lS(t,e,n,s,r,i){const o=t.uc(1,e,n),a=[Ic(e,s,n)],c=[r];if(i.length%2!=0)throw new B(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Ic(e,i[f])),c.push(i[f+1]);const l=[],u=ht.empty();for(let f=a.length-1;f>=0;--f)if(!fm(l,a[f])){const g=a[f];let m=c[f];m=Xe(m);const I=o.nc(g);if(m instanceof Jo)l.push(g);else{const _=Qo(m,I);_!=null&&(l.push(g),u.set(g,_))}}const h=new Lr(l);return new am(u,h,o.fieldTransforms)}function Qo(t,e){if(hm(t=Xe(t)))return tu("Unsupported field value:",e,t),um(t,e);if(t instanceof Ql)return function(n,s){if(!cm(s.Ya))throw s.ic(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ic(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.tc&&e.Ya!==4)throw e.ic("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Qo(o,s.sc(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Xe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Q0(s.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Ge.fromDate(n);return{timestampValue:lo(s.M,r)}}if(n instanceof Ge){const r=new Ge(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:lo(s.M,r)}}if(n instanceof Zl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ls)return{bytesValue:Pg(s.M,n._byteString)};if(n instanceof dt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ic(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Ul(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ic(`Unsupported field value: ${Xl(n)}`)}(t,e)}function um(t,e){const n={};return ug(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ts(t,(s,r)=>{const i=Qo(r,e.Za(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function hm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ge||t instanceof Zl||t instanceof Ls||t instanceof dt||t instanceof Ql)}function tu(t,e,n){if(!hm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Xl(n);throw s==="an object"?e.ic(t+" a custom object"):e.ic(t+" "+s)}}function Ic(t,e,n){if((e=Xe(e))instanceof Yo)return e._internalPath;if(typeof e=="string")return nu(t,e);throw ho("Field path arguments must be of type string or ",t,!1,void 0,n)}const uS=new RegExp("[~\\*/\\[\\]]");function nu(t,e,n){if(e.search(uS)>=0)throw ho(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Yo(...e.split("."))._internalPath}catch{throw ho(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ho(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new B(E.INVALID_ARGUMENT,a+t+c)}function fm(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new hS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(su("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class hS extends dm{data(){return super.data()}}function su(t,e){return typeof e=="string"?nu(t,e):e instanceof Yo?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class pm extends dm{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Di(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(su("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Di extends pm{data(e={}){return super.data(e)}}class fS{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new lr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Di(this._firestore,this._userDataWriter,s.key,s,new lr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new Di(s._firestore,s._userDataWriter,o.doc.key,o.doc,new lr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Di(s._firestore,s._userDataWriter,o.doc.key,o.doc,new lr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:dS(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function dS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(t){if(oo(t)&&t.explicitOrderBy.length===0)throw new B(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gS{}function mS(t,...e){for(const n of e)t=n._apply(t);return t}class yS extends gS{constructor(e,n){super(),this.hc=e,this.dc=n,this.type="orderBy"}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new B(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new B(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new ws(r,i);return function(a,c){if(gg(a)===null){const l=mg(a);l!==null&&_S(a,l,c.field)}}(s,o),o}(e._query,this.hc,this.dc);return new ai(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new ti(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function vS(t,e="asc"){const n=e,s=su("orderBy",t);return new yS(s,n)}function _S(t,e,n){if(!n.isEqual(e))throw new B(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{convertValue(e,n="none"){switch(Gn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ns(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw X()}}convertObject(e,n){const s={};return ts(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Zl(Ae(e.latitude),Ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=fg(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ur(e));default:return null}}convertTimestamp(e){const n=wn(e);return new Ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ee.fromString(e);me(Mg(s));const r=new Ps(s.get(1),s.get(3)),i=new q(s.popFirst(5));return r.isEqual(n)||_n(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bS(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xk(t){t=En(t,dt);const e=En(t.firestore,Js);return JI(Jl(e),t._key).then(n=>TS(e,t,n))}class gm extends wS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ls(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new dt(this.firestore,null,n)}}function ES(t){t=En(t,ai);const e=En(t.firestore,Js),n=Jl(e),s=new gm(e);return pS(t._query),QI(n,t._query).then(r=>new fS(e,s,t,r))}function Yk(t,e,n,...s){t=En(t,dt);const r=En(t.firestore,Js),i=lm(r);let o;return o=typeof(e=Xe(e))=="string"||e instanceof Yo?lS(i,"updateDoc",t._key,e,n,s):cS(i,"updateDoc",t._key,e),ru(r,[o.toMutation(t._key,gn.exists(!0))])}function Jk(t){return ru(En(t.firestore,Js),[new Cg(t._key,gn.none())])}function Qk(t,e){const n=En(t.firestore,Js),s=tS(t),r=bS(t.converter,e);return ru(n,[aS(lm(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,gn.exists(!1))]).then(()=>s)}function ru(t,e){return function(n,s){const r=new zt;return n.asyncQueue.enqueueAndForget(async()=>MI(await YI(n),s,r)),r.promise}(Jl(t),e)}function TS(t,e,n){const s=n.docs.get(e._key),r=new gm(t);return new pm(t,r,e._key,s,new lr(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Ks=n})(js),qn(new vn("firestore",(n,{options:s})=>{const r=n.getProvider("app").getImmediate(),i=new Js(r,new T0(n.getProvider("auth-internal")),new A0(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i},"PUBLIC")),Ot(xh,"3.4.7",t),Ot(xh,"3.4.7","esm2017")})();var IS="firebase",SS="9.6.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ot(IS,SS,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm="firebasestorage.googleapis.com",ym="storageBucket",CS=2*60*1e3,AS=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie extends Tn{constructor(e,n){super(Ca(e),`Firebase Storage: ${n} (${Ca(e)})`);this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ie.prototype)}_codeEquals(e){return Ca(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Ca(t){return"storage/"+t}function iu(){const t="An unknown error occurred, please check the error payload for server response.";return new Ie("unknown",t)}function kS(t){return new Ie("object-not-found","Object '"+t+"' does not exist.")}function RS(t){return new Ie("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function NS(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ie("unauthenticated",t)}function PS(){return new Ie("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function xS(t){return new Ie("unauthorized","User does not have permission to access '"+t+"'.")}function OS(){return new Ie("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function vm(){return new Ie("canceled","User canceled the upload/download.")}function DS(t){return new Ie("invalid-url","Invalid URL '"+t+"'.")}function MS(t){return new Ie("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function LS(){return new Ie("no-default-bucket","No default bucket found. Did you set the '"+ym+"' property when initializing the app?")}function _m(){return new Ie("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function US(){return new Ie("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function FS(){return new Ie("no-download-url","The given file does not have any download URLs.")}function Sc(t){return new Ie("invalid-argument",t)}function wm(){return new Ie("app-deleted","The Firebase app was deleted.")}function $S(t){return new Ie("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function wr(t,e){return new Ie("invalid-format","String does not match format '"+t+"': "+e)}function rr(t){throw new Ie("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=ft.makeFromUrl(e,n)}catch{return new ft(e,"")}if(s.path==="")return s;throw MS(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function l(O){O.path_=decodeURIComponent(O.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${u}/b/${r}/o${f}`,"i"),m={bucket:1,path:3},I=n===mm?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",k=new RegExp(`^https?://${I}/${r}/${_}`,"i"),U=[{regex:a,indices:c,postModify:i},{regex:g,indices:m,postModify:l},{regex:k,indices:{bucket:1,path:2},postModify:l}];for(let O=0;O<U.length;O++){const se=U[O],H=se.regex.exec(e);if(H){const W=H[se.indices.bucket];let Se=H[se.indices.path];Se||(Se=""),s=new ft(W,Se),se.postModify(s);break}}if(s==null)throw DS(e);return s}}class BS{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VS(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(..._){l||(l=!0,e.apply(null,_))}function h(_){r=setTimeout(()=>{r=null,t(g,c())},_)}function f(){i&&clearTimeout(i)}function g(_,...k){if(l){f();return}if(_){f(),u.call(null,_,...k);return}if(c()||o){f(),u.call(null,_,...k);return}s<64&&(s*=2);let U;a===1?(a=2,U=0):U=(s+Math.random())*1e3,h(U)}let m=!1;function I(_){m||(m=!0,f(),!l&&(r!==null?(_||(a=2),clearTimeout(r),h(0)):_||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,I(!0)},n),I}function jS(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qS(t){return t!==void 0}function HS(t){return typeof t=="function"}function zS(t){return typeof t=="object"&&!Array.isArray(t)}function Zo(t){return typeof t=="string"||t instanceof String}function uf(t){return ou()&&t instanceof Blob}function ou(){return typeof Blob!="undefined"}function hf(t,e,n,s){if(s<e)throw Sc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Sc(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function bm(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bn;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Bn||(Bn={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e,n,s,r,i,o,a,c,l,u,h){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new Ii(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Bn.NO_ERROR,c=i.getStatus();if(!a||this.isRetryStatusCode_(c)){const u=i.getErrorCode()===Bn.ABORT;s(!1,new Ii(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new Ii(l,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());qS(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=iu();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?wm():vm();o(c)}else{const c=OS();o(c)}};this.canceled_?n(!1,new Ii(!1,null,!0)):this.backoffId_=VS(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&jS(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,i=this.additionalRetryCodes_.indexOf(e)!==-1;return n||r||i}}class Ii{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function WS(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function GS(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function XS(t,e){e&&(t["X-Firebase-GMPID"]=e)}function YS(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function JS(t,e,n,s,r,i){const o=bm(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return XS(c,e),WS(c,n),GS(c,i),YS(c,s),new KS(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QS(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function ZS(...t){const e=QS();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(ou())return new Blob(t);throw new Ie("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function eC(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(t){return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Aa{constructor(e,n){this.data=e,this.contentType=n||null}}function nC(t,e){switch(t){case Pt.RAW:return new Aa(Em(e));case Pt.BASE64:case Pt.BASE64URL:return new Aa(Tm(t,e));case Pt.DATA_URL:return new Aa(rC(e),iC(e))}throw iu()}function Em(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function sC(t){let e;try{e=decodeURIComponent(t)}catch{throw wr(Pt.DATA_URL,"Malformed data URL.")}return Em(e)}function Tm(t,e){switch(t){case Pt.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw wr(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case Pt.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw wr(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=tC(e)}catch{throw wr(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class Im{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw wr(Pt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=oC(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function rC(t){const e=new Im(t);return e.base64?Tm(Pt.BASE64,e.rest):sC(e.rest)}function iC(t){return new Im(t).contentType}function oC(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,n){let s=0,r="";uf(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(uf(this.data_)){const s=this.data_,r=eC(s,e,n);return r===null?null:new an(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new an(s,!0)}}static getBlob(...e){if(ou()){const n=e.map(s=>s instanceof an?s.data_:s);return new an(ZS.apply(null,n))}else{const n=e.map(o=>Zo(o)?nC(Pt.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new an(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(t){let e;try{e=JSON.parse(t)}catch{return null}return zS(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aC(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function cC(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function Cm(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lC(t,e){return e}class Ye{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||lC}}let Si=null;function uC(t){return!Zo(t)||t.length<2?t:Cm(t)}function Am(){if(Si)return Si;const t=[];t.push(new Ye("bucket")),t.push(new Ye("generation")),t.push(new Ye("metageneration")),t.push(new Ye("name","fullPath",!0));function e(i,o){return uC(o)}const n=new Ye("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new Ye("size");return r.xform=s,t.push(r),t.push(new Ye("timeCreated")),t.push(new Ye("updated")),t.push(new Ye("md5Hash",null,!0)),t.push(new Ye("cacheControl",null,!0)),t.push(new Ye("contentDisposition",null,!0)),t.push(new Ye("contentEncoding",null,!0)),t.push(new Ye("contentLanguage",null,!0)),t.push(new Ye("contentType",null,!0)),t.push(new Ye("metadata","customMetadata",!0)),Si=t,Si}function hC(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new ft(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function fC(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return hC(s,t),s}function km(t,e,n){const s=Sm(e);return s===null?null:fC(t,s,n)}function dC(t,e,n,s){const r=Sm(e);if(r===null||!Zo(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,f="/b/"+o(u)+"/o/"+o(h),g=ci(f,n,s),m=bm({alt:"media",token:l});return g+m})[0]}function Rm(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Qs{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t){if(!t)throw iu()}function au(t,e){function n(s,r){const i=km(t,r,e);return Wt(i!==null),i}return n}function pC(t,e){function n(s,r){const i=km(t,r,e);return Wt(i!==null),dC(i,r,t.host,t._protocol)}return n}function li(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=PS():r=NS():n.getStatus()===402?r=RS(t.bucket):n.getStatus()===403?r=xS(t.path):r=s,r.serverResponse=s.serverResponse,r}return e}function Nm(t){const e=li(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=kS(t.path)),i.serverResponse=r.serverResponse,i}return n}function gC(t,e,n){const s=e.fullServerUrl(),r=ci(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Qs(r,i,au(t,n),o);return a.errorHandler=Nm(e),a}function mC(t,e,n){const s=e.fullServerUrl(),r=ci(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Qs(r,i,pC(t,n),o);return a.errorHandler=Nm(e),a}function yC(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Pm(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=yC(null,e)),s}function vC(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let U="";for(let O=0;O<2;O++)U=U+Math.random().toString().slice(2);return U}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=Pm(e,s,r),u=Rm(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,f=`\r
--`+c+"--",g=an.getBlob(h,s,f);if(g===null)throw _m();const m={name:l.fullPath},I=ci(i,t.host,t._protocol),_="POST",k=t.maxUploadRetryTime,D=new Qs(I,_,au(t,n),k);return D.urlParams=m,D.headers=o,D.body=g.uploadData(),D.errorHandler=li(e),D}class fo{constructor(e,n,s,r){this.current=e,this.total=n,this.finalized=!!s,this.metadata=r||null}}function cu(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Wt(!1)}return Wt(!!n&&(e||["active"]).indexOf(n)!==-1),n}function _C(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o=Pm(e,s,r),a={name:o.fullPath},c=ci(i,t.host,t._protocol),l="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=Rm(o,n),f=t.maxUploadRetryTime;function g(I){cu(I);let _;try{_=I.getResponseHeader("X-Goog-Upload-URL")}catch{Wt(!1)}return Wt(Zo(_)),_}const m=new Qs(c,l,g,f);return m.urlParams=a,m.headers=u,m.body=h,m.errorHandler=li(e),m}function wC(t,e,n,s){const r={"X-Goog-Upload-Command":"query"};function i(l){const u=cu(l,["active","final"]);let h=null;try{h=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Wt(!1)}h||Wt(!1);const f=Number(h);return Wt(!isNaN(f)),new fo(f,s.size(),u==="final")}const o="POST",a=t.maxUploadRetryTime,c=new Qs(n,o,i,a);return c.headers=r,c.errorHandler=li(e),c}const ff=256*1024;function bC(t,e,n,s,r,i,o,a){const c=new fo(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=s.size()),s.size()!==c.total)throw US();const l=c.total-c.current;let u=l;r>0&&(u=Math.min(u,r));const h=c.current,f=h+u,m={"X-Goog-Upload-Command":u===l?"upload, finalize":"upload","X-Goog-Upload-Offset":`${c.current}`},I=s.slice(h,f);if(I===null)throw _m();function _(O,se){const H=cu(O,["active","final"]),W=c.current+u,Se=s.size();let _e;return H==="final"?_e=au(e,i)(O,se):_e=null,new fo(W,Se,H==="final",_e)}const k="POST",D=e.maxUploadRetryTime,U=new Qs(n,k,_,D);return U.headers=m,U.body=I.uploadData(),U.progressCallback=a||null,U.errorHandler=li(t),U}const it={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ka(t){switch(t){case"running":case"pausing":case"canceling":return it.RUNNING;case"paused":return it.PAUSED;case"success":return it.SUCCESS;case"canceled":return it.CANCELED;case"error":return it.ERROR;default:return it.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e,n,s){if(HS(e)||n!=null||s!=null)this.next=e,this.error=n!=null?n:void 0,this.complete=s!=null?s:void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class TC{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Bn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Bn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Bn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw rr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw rr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw rr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw rr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw rr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class IC extends TC{initXhr(){this.xhr_.responseType="text"}}function ds(){return new IC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e,n,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=s,this._mappings=Am(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=r=>{this._request=void 0,this._chunkMultiplier=1,r._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=r,this._transition("error"))},this._metadataErrorHandler=r=>{this._request=void 0,r._codeEquals("canceled")?this.completeTransitions_():(this._error=r,this._transition("error"))},this._promise=new Promise((r,i)=>{this._resolve=r,this._reject=i,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,s])=>{switch(this._state){case"running":e(n,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const s=_C(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,ds,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,s)=>{const r=wC(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,ds,n,s);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=ff*this._chunkMultiplier,n=new fo(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((r,i)=>{let o;try{o=bC(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,ds,r,i);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){ff*this._chunkMultiplier<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const s=gC(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(s,ds,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const s=vC(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,ds,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":this._state=e,this._request!==void 0&&this._request.cancel();break;case"pausing":this._state=e,this._request!==void 0&&this._request.cancel();break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=vm(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=ka(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,s,r){const i=new EC(n||void 0,s||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(ka(this._state)){case it.SUCCESS:ls(this._resolve.bind(null,this.snapshot))();break;case it.CANCELED:case it.ERROR:const n=this._reject;ls(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(ka(this._state)){case it.RUNNING:case it.PAUSED:e.next&&ls(e.next.bind(e,this.snapshot))();break;case it.SUCCESS:e.complete&&ls(e.complete.bind(e))();break;case it.CANCELED:case it.ERROR:e.error&&ls(e.error.bind(e,this._error))();break;default:e.error&&ls(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n){this._service=e,n instanceof ft?this._location=n:this._location=ft.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Jn(e,n)}get root(){const e=new ft(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Cm(this._location.path)}get storage(){return this._service}get parent(){const e=aC(this._location.path);if(e===null)return null;const n=new ft(this._location.bucket,e);return new Jn(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw $S(e)}}function CC(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new SC(t,new an(e),n)}function AC(t){t._throwIfRoot("getDownloadURL");const e=mC(t.storage,t._location,Am());return t.storage.makeRequestWithTokens(e,ds).then(n=>{if(n===null)throw FS();return n})}function kC(t,e){const n=cC(t._location.path,e),s=new ft(t._location.bucket,n);return new Jn(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RC(t){return/^[A-Za-z]+:\/\//.test(t)}function NC(t,e){return new Jn(t,e)}function xm(t,e){if(t instanceof lu){const n=t;if(n._bucket==null)throw LS();const s=new Jn(n,n._bucket);return e!=null?xm(s,e):s}else return e!==void 0?kC(t,e):t}function PC(t,e){if(e&&RC(e)){if(t instanceof lu)return NC(t,e);throw Sc("To use ref(service, url), the first argument must be a Storage instance.")}else return xm(t,e)}function df(t,e){const n=e==null?void 0:e[ym];return n==null?null:ft.makeFromBucketSpec(n,t)}class lu{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=mm,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=CS,this._maxUploadRetryTime=AS,this._requests=new Set,r!=null?this._bucket=ft.makeFromBucketSpec(r,this._host):this._bucket=df(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ft.makeFromBucketSpec(this._url,e):this._bucket=df(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){hf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){hf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Jn(this,e)}_makeRequest(e,n,s,r){if(this._deleted)return new BS(wm());{const i=JS(e,this._appId,s,r,n,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const pf="@firebase/storage",gf="0.9.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om="storage";function Zk(t,e,n){return t=Xe(t),CC(t,e,n)}function eR(t){return t=Xe(t),AC(t)}function tR(t,e){return t=Xe(t),PC(t,e)}function xC(t=il(),e){return t=Xe(t),ko(t,Om).getImmediate({identifier:e})}function OC(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new lu(n,s,r,e,js)}function DC(){qn(new vn(Om,OC,"PUBLIC").setMultipleInstances(!0)),Ot(pf,gf,""),Ot(pf,gf,"esm2017")}DC();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function uu(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Dm(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const MC=Dm,Mm=new Hr("auth","Firebase",Dm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf=new sl("@firebase/auth");function Mi(t,...e){mf.logLevel<=oe.ERROR&&mf.error(`Auth (${js}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(t,...e){throw hu(t,...e)}function Dt(t,...e){return hu(t,...e)}function LC(t,e,n){const s=Object.assign(Object.assign({},MC()),{[e]:n});return new Hr("auth","Firebase",s).create(e,{appName:t.name})}function hu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Mm.create(t,...e)}function G(t,e,...n){if(!t)throw hu(e,...n)}function qt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Mi(e),new Error(e)}function Jt(t,e){t||qt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf=new Map;function Ht(t){Jt(t instanceof Function,"Expected a class definition");let e=yf.get(t);return e?(Jt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,yf.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UC(t,e){const n=ko(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Wi(i,e!=null?e:{}))return r;Yt(r,"already-initialized")}return n.initialize({options:e})}function FC(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Ht);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function $C(){return vf()==="http:"||vf()==="https:"}function vf(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BC(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($C()||ep()||"connection"in navigator)?navigator.onLine:!0}function VC(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,n){this.shortDelay=e,this.longDelay=n,Jt(n>e,"Short delay should be less than long delay!"),this.isMobile=Zd()||tp()}get(){return BC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(t,e){Jt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qC=new ui(3e4,6e4);function HC(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ea(t,e,n,s,r={}){return Um(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=zr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Lm.fetch()(Fm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Um(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},jC),e);try{const r=new KC(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ra(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ra(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ra(t,"email-already-in-use",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw LC(t,u,l);Yt(t,u)}}catch(r){if(r instanceof Tn)throw r;Yt(t,"network-request-failed")}}async function zC(t,e,n,s,r={}){const i=await ea(t,e,n,s,r);return"mfaPendingCredential"in i&&Yt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Fm(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?fu(t.config,r):`${t.config.apiScheme}://${r}`}class KC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Dt(this.auth,"network-request-failed")),qC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ra(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Dt(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WC(t,e){return ea(t,"POST","/v1/accounts:delete",e)}async function GC(t,e){return ea(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function XC(t,e=!1){const n=Xe(t),s=await n.getIdToken(e),r=du(s);G(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:br(Na(r.auth_time)),issuedAtTime:br(Na(r.iat)),expirationTime:br(Na(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Na(t){return Number(t)*1e3}function du(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Mi("JWT malformed, contained fewer than 3 sections"),null;try{const r=ob(n);return r?JSON.parse(r):(Mi("Failed to decode base64 JWT payload"),null)}catch(r){return Mi("Caught error parsing JWT payload as JSON",r),null}}function YC(t){const e=du(t);return G(e,"internal-error"),G(typeof e.exp!="undefined","internal-error"),G(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Tn&&JC(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function JC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=br(this.lastLoginAt),this.creationTime=br(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function po(t){var e;const n=t.auth,s=await t.getIdToken(),r=await jr(t,GC(n,{idToken:s}));G(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?tA(i.providerUserInfo):[],a=eA(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new $m(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function ZC(t){const e=Xe(t);await po(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function eA(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function tA(t){return t.map(e=>{var{providerId:n}=e,s=uu(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nA(t,e){const n=await Um(t,{},async()=>{const s=zr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Fm(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Lm.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken!="undefined","internal-error"),G(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):YC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return G(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await nA(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new qr;return s&&(G(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(G(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(G(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qr,this.toJSON())}_performRefresh(){return qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(t,e){G(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Vn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=uu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new QC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new $m(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await jr(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return XC(this,e)}reload(){return ZC(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Vn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await po(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await jr(this,WC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,D=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:U,emailVerified:O,isAnonymous:se,providerData:H,stsTokenManager:W}=n;G(U&&W,e,"internal-error");const Se=qr.fromJSON(this.name,W);G(typeof U=="string",e,"internal-error"),nn(h,e.name),nn(f,e.name),G(typeof O=="boolean",e,"internal-error"),G(typeof se=="boolean",e,"internal-error"),nn(g,e.name),nn(m,e.name),nn(I,e.name),nn(_,e.name),nn(k,e.name),nn(D,e.name);const _e=new Vn({uid:U,auth:e,email:f,emailVerified:O,displayName:h,isAnonymous:se,photoURL:m,phoneNumber:g,tenantId:I,stsTokenManager:Se,createdAt:k,lastLoginAt:D});return H&&Array.isArray(H)&&(_e.providerData=H.map(He=>Object.assign({},He))),_&&(_e._redirectEventId=_),_e}static async _fromIdTokenResponse(e,n,s=!1){const r=new qr;r.updateFromServerResponse(n);const i=new Vn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await po(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Bm.type="NONE";const _f=Bm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(t,e,n){return`firebase:${t}:${e}:${n}`}class Es{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Li(this.userKey,r.apiKey,i),this.fullPersistenceKey=Li("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Es(Ht(_f),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||Ht(_f);const o=Li(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Vn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Es(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Es(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zm(e))return"Blackberry";if(Km(e))return"Webos";if(pu(e))return"Safari";if((e.includes("chrome/")||jm(e))&&!e.includes("edge/"))return"Chrome";if(Hm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Vm(t=Me()){return/firefox\//i.test(t)}function pu(t=Me()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jm(t=Me()){return/crios\//i.test(t)}function qm(t=Me()){return/iemobile/i.test(t)}function Hm(t=Me()){return/android/i.test(t)}function zm(t=Me()){return/blackberry/i.test(t)}function Km(t=Me()){return/webos/i.test(t)}function ta(t=Me()){return/iphone|ipad|ipod/i.test(t)}function sA(t=Me()){var e;return ta(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function rA(){return np()&&document.documentMode===10}function Wm(t=Me()){return ta(t)||Hm(t)||Km(t)||zm(t)||/windows phone/i.test(t)||qm(t)}function iA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(t,e=[]){let n;switch(t){case"Browser":n=wf(Me());break;case"Worker":n=`${wf(Me())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${js}/${s}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bf(this),this.idTokenSubscription=new bf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Mm,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ht(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Es.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let s=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=s==null?void 0:s._redirectEventId,o=await this.tryRedirectSignIn(e);(!r||r===i)&&(o==null?void 0:o.user)&&(s=o.user)}return s?s._redirectEventId?(G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)):this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await po(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=VC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Xe(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ht(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Hr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ht(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Es.create(this,[Ht(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return G(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Xm(t){return Xe(t)}class bf{constructor(e){this.auth=e,this.observer=null,this.addObserver=mb(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return qt("not implemented")}_getIdTokenResponse(e){return qt("not implemented")}_linkToIdToken(e,n){return qt("not implemented")}_getReauthenticationResolver(e){return qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ts(t,e){return zC(t,"POST","/v1/accounts:signInWithIdp",HC(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA="http://localhost";class Qn extends Ym{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Qn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=uu(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Qn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ts(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ts(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ts(e,n)}buildRequest(){const e={requestUri:aA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends Jm{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends hi{constructor(){super("facebook.com")}static credential(e){return Qn._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cn.credential(e.oauthAccessToken)}catch{return null}}}cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";cn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends hi{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Qn._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return ln.credential(n,s)}catch{return null}}}ln.GOOGLE_SIGN_IN_METHOD="google.com";ln.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends hi{constructor(){super("github.com")}static credential(e){return Qn._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return un.credential(e.oauthAccessToken)}catch{return null}}}un.GITHUB_SIGN_IN_METHOD="github.com";un.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends hi{constructor(){super("twitter.com")}static credential(e,n){return Qn._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return hn.credential(n,s)}catch{return null}}}hn.TWITTER_SIGN_IN_METHOD="twitter.com";hn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Vn._fromIdTokenResponse(e,s,r),o=Ef(s);return new Us({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Ef(s);return new Us({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Ef(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go extends Tn{constructor(e,n,s,r){var i;super(n.code,n.message);this.operationType=s,this.user=r,Object.setPrototypeOf(this,go.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new go(e,n,s,r)}}function Qm(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?go._fromErrorAndOperation(t,i,e,s):i})}async function cA(t,e,n=!1){const s=await jr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Us._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lA(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await jr(t,Qm(s,r,e,t),n);G(i.idToken,s,"internal-error");const o=du(i.idToken);G(o,s,"internal-error");const{sub:a}=o;return G(t.uid===a,s,"user-mismatch"),Us._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Yt(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uA(t,e,n=!1){const s="signIn",r=await Qm(t,s,e),i=await Us._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}const mo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(mo,"1"),this.storage.removeItem(mo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hA(){const t=Me();return pu(t)||ta(t)}const fA=1e3,dA=10;class ey extends Zm{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=hA()&&iA(),this.fallbackToPolling=Wm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);rA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,dA):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},fA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ey.type="LOCAL";const pA=ey;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty extends Zm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ty.type="SESSION";const ny=ty;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gA(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new na(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await gA(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}na.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=gu("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(){return window}function yA(t){Mt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(){return typeof Mt().WorkerGlobalScope!="undefined"&&typeof Mt().importScripts=="function"}async function vA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _A(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function wA(){return sy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry="firebaseLocalStorageDb",bA=1,yo="firebaseLocalStorage",iy="fbase_key";class fi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function sa(t,e){return t.transaction([yo],e?"readwrite":"readonly").objectStore(yo)}function EA(){const t=indexedDB.deleteDatabase(ry);return new fi(t).toPromise()}function Ac(){const t=indexedDB.open(ry,bA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(yo,{keyPath:iy})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(yo)?e(s):(s.close(),await EA(),e(await Ac()))})})}async function Tf(t,e,n){const s=sa(t,!0).put({[iy]:e,value:n});return new fi(s).toPromise()}async function TA(t,e){const n=sa(t,!1).get(e),s=await new fi(n).toPromise();return s===void 0?null:s.value}function If(t,e){const n=sa(t,!0).delete(e);return new fi(n).toPromise()}const IA=800,SA=3;class oy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ac(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>SA)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=na._getInstance(wA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await vA(),!this.activeServiceWorker)return;this.sender=new mA(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_A()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ac();return await Tf(e,mo,"1"),await If(e,mo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Tf(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>TA(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>If(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=sa(r,!1).getAll();return new fi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),IA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}oy.type="LOCAL";const CA=oy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function kA(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Dt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",AA().appendChild(s)})}function RA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ui(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(t,e){return e?Ht(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu extends Ym{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return Ts(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ts(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ts(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function PA(t){return uA(t.auth,new mu(t),t.bypassAuthState)}function xA(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),lA(n,new mu(t),t.bypassAuthState)}async function OA(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),cA(n,new mu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return PA;case"linkViaPopup":case"linkViaRedirect":return OA;case"reauthViaPopup":case"reauthViaRedirect":return xA;default:Yt(this.auth,"internal-error")}}resolve(e){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA=new ui(2e3,1e4);class ms extends ay{constructor(e,n,s,r,i){super(e,n,r,i);this.provider=s,this.authWindow=null,this.pollId=null,ms.currentPopupAction&&ms.currentPopupAction.cancel(),ms.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Jt(this.filter.length===1,"Popup operations only handle one event");const e=gu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ms.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,DA.get())};e()}}ms.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA="pendingRedirect",Pa=new Map;class LA extends ay{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s);this.eventId=null}async execute(){let e=Pa.get(this.auth._key());if(!e){try{const s=await UA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Pa.set(this.auth._key(),e)}return this.bypassAuthState||Pa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function UA(t,e){const n=$A(e),s=FA(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function FA(t){return Ht(t._redirectPersistence)}function $A(t){return Li(MA,t.config.apiKey,t.name)}async function BA(t,e,n=!1){const s=Xm(t),r=NA(s,e),o=await new LA(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA=10*60*1e3;class jA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!cy(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Dt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=VA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sf(e))}saveEventToCache(e){this.cachedEventUids.add(Sf(e)),this.lastProcessedEventTime=Date.now()}}function Sf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function cy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HA(t,e={}){return ea(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,KA=/^https?/;async function WA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await HA(t);for(const n of e)try{if(GA(n))return}catch{}Yt(t,"unauthorized-domain")}function GA(t){const e=Cc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!KA.test(n))return!1;if(zA.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA=new ui(3e4,6e4);function Cf(){const t=Mt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function YA(t){return new Promise((e,n)=>{var s,r,i;function o(){Cf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cf(),n(Dt(t,"network-request-failed"))},timeout:XA.get()})}if(!((r=(s=Mt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Mt().gapi)===null||i===void 0)&&i.load)o();else{const a=RA("iframefcb");return Mt()[a]=()=>{gapi.load?o():n(Dt(t,"network-request-failed"))},kA(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Ui=null,e})}let Ui=null;function JA(t){return Ui=Ui||YA(t),Ui}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA=new ui(5e3,15e3),ZA="__/auth/iframe",ek="emulator/auth/iframe",tk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sk(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?fu(e,ek):`https://${t.config.authDomain}/${ZA}`,s={apiKey:e.apiKey,appName:t.name,v:js},r=nk.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${zr(s).slice(1)}`}async function rk(t){const e=await JA(t),n=Mt().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:sk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tk,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Dt(t,"network-request-failed"),a=Mt().setTimeout(()=>{i(o)},QA.get());function c(){Mt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ok=500,ak=600,ck="_blank",lk="http://localhost";class Af{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uk(t,e,n,s=ok,r=ak){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},ik),{width:s.toString(),height:r.toString(),top:i,left:o}),l=Me().toLowerCase();n&&(a=jm(l)?ck:n),Vm(l)&&(e=e||lk,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[g,m])=>`${f}${g}=${m},`,"");if(sA(l)&&a!=="_self")return hk(e||"",a),new Af(null);const h=window.open(e||"",a,u);G(h,t,"popup-blocked");try{h.focus()}catch{}return new Af(h)}function hk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fk="__/auth/handler",dk="emulator/auth/handler";function kf(t,e,n,s,r,i){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:js,eventId:r};if(e instanceof Jm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",gb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof hi){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${pk(t)}?${zr(a).slice(1)}`}function pk({config:t}){return t.emulator?fu(t,dk):`https://${t.authDomain}/${fk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa="webStorageSupport";class gk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ny,this._completeRedirectFn=BA}async _openPopup(e,n,s,r){var i;Jt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=kf(e,n,s,Cc(),r);return uk(e,o,gu())}async _openRedirect(e,n,s,r){return await this._originValidation(e),yA(kf(e,n,s,Cc(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Jt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await rk(e),s=new jA(e);return n.register("authEvent",r=>(G(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xa,{type:xa},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[xa];o!==void 0&&n(!!o),Yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=WA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Wm()||pu()||ta()}}const mk=gk;var Rf="@firebase/auth",Nf="0.19.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function _k(t){qn(new vn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{G(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),G(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gm(t)},u=new oA(a,c,l);return FC(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),qn(new vn("auth-internal",e=>{const n=Xm(e.getProvider("auth").getImmediate());return(s=>new yk(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(Rf,Nf,vk(t)),Ot(Rf,Nf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wk(t=il()){const e=ko(t,"auth");return e.isInitialized()?e.getImmediate():UC(t,{popupRedirectResolver:mk,persistence:[CA,pA,ny]})}_k("Browser");const ly={apiKey:"AIzaSyAkt3AmCaXbu0jEPoyhIj-WcXHlTnaxOHM",authDomain:"sala-61df8.firebaseapp.com",projectId:"sala-61df8",storageBucket:"sala-61df8.appspot.com",messagingSenderId:"86157962154",appId:"1:86157962154:web:341a5b22ce70022e69d9d3"},bk=op(ly),nR=xC(bk),Ek=op(ly),Tk=sS(Ek);wk();const Ik={class:"card",style:{width:"18rem"}},Sk=["src"],Ck={class:"card-body"},Ak={class:"card-title text-uppercase text-center"},kk={class:"card-text text-uppercase text-center",style:{"font-family":"'Courier New'"}},Rk={class:"text-center"},Nk={class:"text-center"},Pk=Qe("div",{class:"text-center"},null,-1),xk={props:{obra:{type:Object,required:!0}},setup(t){return(e,n)=>{const s=zv("router-link");return Un(),qi("div",Ik,[Ke(s,{to:{name:"detalle",params:{id:t.obra.id}}},{default:ud(()=>[Qe("img",{src:t.obra.photo,class:"card-img-top",alt:""},null,8,Sk)]),_:1},8,["to"]),Qe("div",Ck,[Qe("h5",Ak,di(t.obra.company),1),Qe("p",kk,di(t.obra.title),1),Qe("p",Rk,di(t.obra.age),1),Qe("p",Nk,di(t.obra.date),1),Pk])])}}},Ok=Jc('<header class="masthead"><div class="container"><div class="masthead-subheading">Benvidos a noso espazo!</div><div class="masthead-heading text-uppercase">Sala Gurug\xFA</div><a class="btn btn-info btn-xl text-uppercase" href="#programa">Programaci\xF3n</a></div></header>',1),Dk={class:"page-section bg-light",id:"programa"},Mk={class:"container"},Lk={class:"text-center"},Uk=Qe("h2",{class:"section-heading text-uppercase"},"Programaci\xF3n",-1),Fk=Qe("h3",{class:"section-subheading text-muted"},"Artes \xC9scenicas.",-1),$k={class:"row justify-content-center"},Bk=Jc('<section class="page-section" id="escola"><div class="container"><div class="text-center"><h2 class="section-heading text-uppercase">Escola de teatro</h2><h3 class="section-subheading text-muted">Motaxe de espet\xE1culos.</h3></div><div class="row text-center"><div class="col-md-4"><span class="fa-stack fa-4x"><i class="fas fa-circle fa-stack-2x text-info"></i><i class="fas fa-masks-theater fa-stack-1x fa-inverse"></i></span><h4 class="my-3">Infantil</h4><p class="text-muted">Grupos reducidos de 8 a 12 anos.</p></div><div class="col-md-4"><span class="fa-stack fa-4x"><i class="fas fa-circle fa-stack-2x text-info"></i><i class="fas fa-masks-theater fa-stack-1x fa-inverse"></i></span><h4 class="my-3">Xuvenil</h4><p class="text-muted">Grupos reducidos de 12 a 18 anos.</p></div><div class="col-md-4"><span class="fa-stack fa-4x"><i class="fas fa-circle fa-stack-2x text-info"></i><i class="fas fa-masks-theater fa-stack-1x fa-inverse"></i></span><h4 class="my-3">Adultos</h4><p class="text-muted">Maiores de 18 a\xF1os.</p></div></div></div></section><section class="page-section bg-light" id="equipo"><div class="container"><div class="text-center"><h2 class="section-heading text-uppercase">O noso equipo</h2><h3 class="section-subheading text-muted"> Forma parte da nosa familia. </h3></div><div class="row"><div class="col-lg-4"><div class="team-member"><img class="mx-auto rounded-circle" src="'+Ww+'" alt="..."><h4>Carlos Clemente</h4><p class="text-muted">Director</p><a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i class="fab fa-twitter"></i></a><a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i class="fab fa-facebook-f"></i></a><a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a></div></div><div class="col-lg-4"><div class="team-member"><img class="mx-auto rounded-circle" src="'+Gw+'" alt="..."><h4>Carlos Miranda</h4><p class="text-muted">Audiovisuais</p><a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Twitter Profile"><i class="fab fa-twitter"></i></a><a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Facebook Profile"><i class="fab fa-facebook-f"></i></a><a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a></div></div><div class="col-lg-4"><div class="team-member"><img class="mx-auto rounded-circle" src="'+Xw+'" alt="..."><h4>Maria L\xF3pez</h4><p class="text-muted">Escenograf\xEDa / Iluminaci\xF3n</p><a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i class="fab fa-twitter"></i></a><a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i class="fab fa-facebook-f"></i></a><a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a></div></div></div><div class="row"><div class="col-lg-8 mx-auto text-center"><p class="large text-muted"> Colabora con n\xF3s e disfruta da paix\xF3n das artes. </p></div></div></div></section><section class="page-section" id="contact"><div class="container"><div class="text-center"><h2 class="section-heading text-uppercase">Contactan\xF3s</h2><h3 class="section-subheading text-muted"> Consultan\xF3s calquera d\xFAbida. </h3></div><form id="contactForm" data-sb-form-api-token="API_TOKEN"><div class="row align-items-stretch mb-5"><div class="col-md-6"><div class="form-group"><input class="form-control" id="name" type="text" placeholder="O ten nome *" data-sb-validations="required"><div class="invalid-feedback" data-sb-feedback="name:required"> Un nome \xE9 requrido. </div></div><div class="form-group"><input class="form-control" id="email" type="email" placeholder="O teu correo *" data-sb-validations="required,email"><div class="invalid-feedback" data-sb-feedback="email:required"> Un correo e requerido. </div><div class="invalid-feedback" data-sb-feedback="email:email"> Correo non v\xE1lido. </div></div><div class="form-group mb-md-0"><input class="form-control" id="phone" type="tel" placeholder="O teu tel\xE9fono *" data-sb-validations="required"><div class="invalid-feedback" data-sb-feedback="phone:required"> Un tel\xE9fono \xE9 requerido. </div></div></div><div class="col-md-6"><div class="form-group form-group-textarea mb-md-0"><textarea class="form-control" id="message" placeholder="O teu mensaxe *" data-sb-validations="required"></textarea><div class="invalid-feedback" data-sb-feedback="message:required"> Unha mensaxe e requerida. </div></div></div></div><div class="d-none" id="submitSuccessMessage"><div class="text-center text-white mb-3"><div class="fw-bolder">Formulario enviado!</div> To activate this form, sign up at <br><a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a></div></div><div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3"> Error sending message! </div></div><div class="text-center"><button class="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit"> Mandar Mensaxe </button></div></form></div></section><footer class="footer py-4"><div class="container"><div class="row align-items-center"><div class="col-lg-4 text-lg-start"> Copyright \xA9 Your Website 2022 </div><div class="col-lg-4 my-3 my-lg-0"><a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i class="fab fa-twitter"></i></a><a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a><a class="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a></div><div class="col-lg-4 text-lg-end"><a class="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a><a class="link-dark text-decoration-none" href="#!">Terms of Use</a></div></div></div></footer>',4),Vk={setup(t){const e=Zn([]);async function n(){const s=mS(eS(Tk,"obras"),vS("date","desc"));(await ES(s)).forEach(i=>{let o=i.data();o.id=i.id,e.push(o),console.log(e)})}return md(()=>{n()}),(s,r)=>(Un(),qi("main",null,[Ke(sb),Ok,Qe("section",Dk,[Qe("div",Mk,[Qe("div",Lk,[Uk,Fk,Qe("div",$k,[(Un(!0),qi(kt,null,Zv(Mn(e),i=>(Un(),Yc(xk,{class:"col-4 m-2",key:i.id,obra:i},null,8,["obra"]))),128))])])])]),Bk]))}},jk=jw({history:iw("/prueba/"),routes:[{path:"/",name:"sala",component:Vk},{path:"/detalle/:id",name:"detalle",props:!0,component:()=>lh(()=>import("./Detalle.4685e52d.js"),[])},{path:"/formulario",name:"formulario",component:()=>lh(()=>import("./Formulario.c6c99ea2.js"),[])}]}),yu=O_(Hw);yu.use(L_());yu.use(jk);yu.mount("#app");export{Yk as A,qk as B,Kk as C,zk as D,kt as F,sb as N,Xk as Y,Qe as a,Hk as b,qi as c,md as d,zv as e,Ke as f,Mn as g,tS as h,Jv as i,Tk as j,Zv as k,Wk as l,Qv as m,ES as n,Un as o,eS as p,Jk as q,Zn as r,tR as s,di as t,Gk as u,nR as v,ud as w,Zk as x,eR as y,Qk as z};
