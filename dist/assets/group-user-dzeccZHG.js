/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function $l(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ke={},hs=[],dn=()=>{},Hv=()=>!1,wa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ql=t=>t.startsWith("onUpdate:"),Ze=Object.assign,Hl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Wv=Object.prototype.hasOwnProperty,Ae=(t,e)=>Wv.call(t,e),ce=Array.isArray,ds=t=>$i(t)==="[object Map]",Ta=t=>$i(t)==="[object Set]",cd=t=>$i(t)==="[object Date]",pe=t=>typeof t=="function",Ke=t=>typeof t=="string",_n=t=>typeof t=="symbol",Ne=t=>t!==null&&typeof t=="object",jp=t=>(Ne(t)||pe(t))&&pe(t.then)&&pe(t.catch),$p=Object.prototype.toString,$i=t=>$p.call(t),Kv=t=>$i(t).slice(8,-1),qp=t=>$i(t)==="[object Object]",Wl=t=>Ke(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,oi=$l(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ia=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},zv=/-(\w)/g,Wt=Ia(t=>t.replace(zv,(e,n)=>n?n.toUpperCase():"")),Gv=/\B([A-Z])/g,Hr=Ia(t=>t.replace(Gv,"-$1").toLowerCase()),ba=Ia(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ic=Ia(t=>t?`on${ba(t)}`:""),nr=(t,e)=>!Object.is(t,e),Do=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Hp=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Go=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ld;const Aa=()=>ld||(ld=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Kl(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ke(r)?Xv(r):Kl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ke(t)||Ne(t))return t}const Qv=/;(?![^(]*\))/g,Yv=/:([^]+)/,Jv=/\/\*[^]*?\*\//g;function Xv(t){const e={};return t.replace(Jv,"").split(Qv).forEach(n=>{if(n){const r=n.split(Yv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ra(t){let e="";if(Ke(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const r=Ra(t[n]);r&&(e+=r+" ")}else if(Ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Zv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",eE=$l(Zv);function Wp(t){return!!t||t===""}function tE(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Sa(t[r],e[r]);return n}function Sa(t,e){if(t===e)return!0;let n=cd(t),r=cd(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=_n(t),r=_n(e),n||r)return t===e;if(n=ce(t),r=ce(e),n||r)return n&&r?tE(t,e):!1;if(n=Ne(t),r=Ne(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!Sa(t[o],e[o]))return!1}}return String(t)===String(e)}function nE(t,e){return t.findIndex(n=>Sa(n,e))}const Kp=t=>!!(t&&t.__v_isRef===!0),Cr=t=>Ke(t)?t:t==null?"":ce(t)||Ne(t)&&(t.toString===$p||!pe(t.toString))?Kp(t)?Cr(t.value):JSON.stringify(t,zp,2):String(t),zp=(t,e)=>Kp(e)?zp(t,e.value):ds(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[bc(r,i)+" =>"]=s,n),{})}:Ta(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>bc(n))}:_n(e)?bc(e):Ne(e)&&!ce(e)&&!qp(e)?String(e):e,bc=(t,e="")=>{var n;return _n(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Tt;class Gp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Tt,!e&&Tt&&(this.index=(Tt.scopes||(Tt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Tt;try{return Tt=this,e()}finally{Tt=n}}}on(){Tt=this}off(){Tt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Qp(t){return new Gp(t)}function Yp(){return Tt}function rE(t,e=!1){Tt&&Tt.cleanups.push(t)}let De;const Ac=new WeakSet;class Jp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Tt&&Tt.active&&Tt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ac.has(this)&&(Ac.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Zp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ud(this),em(this);const e=De,n=Yt;De=this,Yt=!0;try{return this.fn()}finally{tm(this),De=e,Yt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ql(e);this.deps=this.depsTail=void 0,ud(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ac.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Zc(this)&&this.run()}get dirty(){return Zc(this)}}let Xp=0,ai,ci;function Zp(t,e=!1){if(t.flags|=8,e){t.next=ci,ci=t;return}t.next=ai,ai=t}function zl(){Xp++}function Gl(){if(--Xp>0)return;if(ci){let e=ci;for(ci=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ai;){let e=ai;for(ai=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function em(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function tm(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Ql(r),sE(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Zc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(nm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function nm(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===bi))return;t.globalVersion=bi;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Zc(t)){t.flags&=-3;return}const n=De,r=Yt;De=t,Yt=!0;try{em(t);const s=t.fn(t._value);(e.version===0||nr(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{De=n,Yt=r,tm(t),t.flags&=-3}}function Ql(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ql(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function sE(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Yt=!0;const rm=[];function dr(){rm.push(Yt),Yt=!1}function fr(){const t=rm.pop();Yt=t===void 0?!0:t}function ud(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=De;De=void 0;try{e()}finally{De=n}}}let bi=0;class iE{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Yl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!De||!Yt||De===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==De)n=this.activeLink=new iE(De,this),De.deps?(n.prevDep=De.depsTail,De.depsTail.nextDep=n,De.depsTail=n):De.deps=De.depsTail=n,sm(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=De.depsTail,n.nextDep=void 0,De.depsTail.nextDep=n,De.depsTail=n,De.deps===n&&(De.deps=r)}return n}trigger(e){this.version++,bi++,this.notify(e)}notify(e){zl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Gl()}}}function sm(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)sm(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Qo=new WeakMap,kr=Symbol(""),el=Symbol(""),Ai=Symbol("");function ft(t,e,n){if(Yt&&De){let r=Qo.get(t);r||Qo.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Yl),s.map=r,s.key=n),s.track()}}function Rn(t,e,n,r,s,i){const o=Qo.get(t);if(!o){bi++;return}const c=l=>{l&&l.trigger()};if(zl(),e==="clear")o.forEach(c);else{const l=ce(t),u=l&&Wl(n);if(l&&n==="length"){const d=Number(r);o.forEach((p,m)=>{(m==="length"||m===Ai||!_n(m)&&m>=d)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(Ai)),e){case"add":l?u&&c(o.get("length")):(c(o.get(kr)),ds(t)&&c(o.get(el)));break;case"delete":l||(c(o.get(kr)),ds(t)&&c(o.get(el)));break;case"set":ds(t)&&c(o.get(kr));break}}Gl()}function oE(t,e){const n=Qo.get(t);return n&&n.get(e)}function rs(t){const e=Te(t);return e===t?e:(ft(e,"iterate",Ai),Ht(t)?e:e.map(pt))}function Pa(t){return ft(t=Te(t),"iterate",Ai),t}const aE={__proto__:null,[Symbol.iterator](){return Rc(this,Symbol.iterator,pt)},concat(...t){return rs(this).concat(...t.map(e=>ce(e)?rs(e):e))},entries(){return Rc(this,"entries",t=>(t[1]=pt(t[1]),t))},every(t,e){return In(this,"every",t,e,void 0,arguments)},filter(t,e){return In(this,"filter",t,e,n=>n.map(pt),arguments)},find(t,e){return In(this,"find",t,e,pt,arguments)},findIndex(t,e){return In(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return In(this,"findLast",t,e,pt,arguments)},findLastIndex(t,e){return In(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return In(this,"forEach",t,e,void 0,arguments)},includes(...t){return Sc(this,"includes",t)},indexOf(...t){return Sc(this,"indexOf",t)},join(t){return rs(this).join(t)},lastIndexOf(...t){return Sc(this,"lastIndexOf",t)},map(t,e){return In(this,"map",t,e,void 0,arguments)},pop(){return Gs(this,"pop")},push(...t){return Gs(this,"push",t)},reduce(t,...e){return hd(this,"reduce",t,e)},reduceRight(t,...e){return hd(this,"reduceRight",t,e)},shift(){return Gs(this,"shift")},some(t,e){return In(this,"some",t,e,void 0,arguments)},splice(...t){return Gs(this,"splice",t)},toReversed(){return rs(this).toReversed()},toSorted(t){return rs(this).toSorted(t)},toSpliced(...t){return rs(this).toSpliced(...t)},unshift(...t){return Gs(this,"unshift",t)},values(){return Rc(this,"values",pt)}};function Rc(t,e,n){const r=Pa(t),s=r[e]();return r!==t&&!Ht(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const cE=Array.prototype;function In(t,e,n,r,s,i){const o=Pa(t),c=o!==t&&!Ht(t),l=o[e];if(l!==cE[e]){const p=l.apply(t,i);return c?pt(p):p}let u=n;o!==t&&(c?u=function(p,m){return n.call(this,pt(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const d=l.call(o,u,r);return c&&s?s(d):d}function hd(t,e,n,r){const s=Pa(t);let i=n;return s!==t&&(Ht(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,pt(c),l,t)}),s[e](i,...r)}function Sc(t,e,n){const r=Te(t);ft(r,"iterate",Ai);const s=r[e](...n);return(s===-1||s===!1)&&Zl(n[0])?(n[0]=Te(n[0]),r[e](...n)):s}function Gs(t,e,n=[]){dr(),zl();const r=Te(t)[e].apply(t,n);return Gl(),fr(),r}const lE=$l("__proto__,__v_isRef,__isVue"),im=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(_n));function uE(t){_n(t)||(t=String(t));const e=Te(this);return ft(e,"has",t),e.hasOwnProperty(t)}class om{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?EE:um:i?lm:cm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ce(e);if(!s){let l;if(o&&(l=aE[n]))return l;if(n==="hasOwnProperty")return uE}const c=Reflect.get(e,n,We(e)?e:r);return(_n(n)?im.has(n):lE(n))||(s||ft(e,"get",n),i)?c:We(c)?o&&Wl(n)?c:c.value:Ne(c)?s?dm(c):qi(c):c}}class am extends om{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=xr(i);if(!Ht(r)&&!xr(r)&&(i=Te(i),r=Te(r)),!ce(e)&&We(i)&&!We(r))return l?!1:(i.value=r,!0)}const o=ce(e)&&Wl(n)?Number(n)<e.length:Ae(e,n),c=Reflect.set(e,n,r,We(e)?e:s);return e===Te(s)&&(o?nr(r,i)&&Rn(e,"set",n,r):Rn(e,"add",n,r)),c}deleteProperty(e,n){const r=Ae(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Rn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!_n(n)||!im.has(n))&&ft(e,"has",n),r}ownKeys(e){return ft(e,"iterate",ce(e)?"length":kr),Reflect.ownKeys(e)}}class hE extends om{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const dE=new am,fE=new hE,pE=new am(!0);const tl=t=>t,Eo=t=>Reflect.getPrototypeOf(t);function mE(t,e,n){return function(...r){const s=this.__v_raw,i=Te(s),o=ds(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),d=n?tl:e?nl:pt;return!e&&ft(i,"iterate",l?el:kr),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:c?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function wo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function gE(t,e){const n={get(s){const i=this.__v_raw,o=Te(i),c=Te(s);t||(nr(s,c)&&ft(o,"get",s),ft(o,"get",c));const{has:l}=Eo(o),u=e?tl:t?nl:pt;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ft(Te(s),"iterate",kr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Te(i),c=Te(s);return t||(nr(s,c)&&ft(o,"has",s),ft(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Te(c),u=e?tl:t?nl:pt;return!t&&ft(l,"iterate",kr),c.forEach((d,p)=>s.call(i,u(d),u(p),o))}};return Ze(n,t?{add:wo("add"),set:wo("set"),delete:wo("delete"),clear:wo("clear")}:{add(s){!e&&!Ht(s)&&!xr(s)&&(s=Te(s));const i=Te(this);return Eo(i).has.call(i,s)||(i.add(s),Rn(i,"add",s,s)),this},set(s,i){!e&&!Ht(i)&&!xr(i)&&(i=Te(i));const o=Te(this),{has:c,get:l}=Eo(o);let u=c.call(o,s);u||(s=Te(s),u=c.call(o,s));const d=l.call(o,s);return o.set(s,i),u?nr(i,d)&&Rn(o,"set",s,i):Rn(o,"add",s,i),this},delete(s){const i=Te(this),{has:o,get:c}=Eo(i);let l=o.call(i,s);l||(s=Te(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&Rn(i,"delete",s,void 0),u},clear(){const s=Te(this),i=s.size!==0,o=s.clear();return i&&Rn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=mE(s,t,e)}),n}function Jl(t,e){const n=gE(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ae(n,s)&&s in r?n:r,s,i)}const _E={get:Jl(!1,!1)},yE={get:Jl(!1,!0)},vE={get:Jl(!0,!1)};const cm=new WeakMap,lm=new WeakMap,um=new WeakMap,EE=new WeakMap;function wE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function TE(t){return t.__v_skip||!Object.isExtensible(t)?0:wE(Kv(t))}function qi(t){return xr(t)?t:Xl(t,!1,dE,_E,cm)}function hm(t){return Xl(t,!1,pE,yE,lm)}function dm(t){return Xl(t,!0,fE,vE,um)}function Xl(t,e,n,r,s){if(!Ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=TE(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function rr(t){return xr(t)?rr(t.__v_raw):!!(t&&t.__v_isReactive)}function xr(t){return!!(t&&t.__v_isReadonly)}function Ht(t){return!!(t&&t.__v_isShallow)}function Zl(t){return t?!!t.__v_raw:!1}function Te(t){const e=t&&t.__v_raw;return e?Te(e):t}function eu(t){return!Ae(t,"__v_skip")&&Object.isExtensible(t)&&Hp(t,"__v_skip",!0),t}const pt=t=>Ne(t)?qi(t):t,nl=t=>Ne(t)?dm(t):t;function We(t){return t?t.__v_isRef===!0:!1}function ln(t){return fm(t,!1)}function IE(t){return fm(t,!0)}function fm(t,e){return We(t)?t:new bE(t,e)}class bE{constructor(e,n){this.dep=new Yl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Te(e),this._value=n?e:pt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ht(e)||xr(e);e=r?e:Te(e),nr(e,n)&&(this._rawValue=e,this._value=r?e:pt(e),this.dep.trigger())}}function sr(t){return We(t)?t.value:t}const AE={get:(t,e,n)=>e==="__v_raw"?t:sr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return We(s)&&!We(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function pm(t){return rr(t)?t:new Proxy(t,AE)}function RE(t){const e=ce(t)?new Array(t.length):{};for(const n in t)e[n]=PE(t,n);return e}class SE{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return oE(Te(this._object),this._key)}}function PE(t,e,n){const r=t[e];return We(r)?r:new SE(t,e,n)}class CE{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Yl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=bi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&De!==this)return Zp(this,!0),!0}get value(){const e=this.dep.track();return nm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function kE(t,e,n=!1){let r,s;return pe(t)?r=t:(r=t.get,s=t.set),new CE(r,s,n)}const To={},Yo=new WeakMap;let br;function OE(t,e=!1,n=br){if(n){let r=Yo.get(n);r||Yo.set(n,r=[]),r.push(t)}}function DE(t,e,n=ke){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=F=>s?F:Ht(F)||s===!1||s===0?Sn(F,1):Sn(F);let d,p,m,_,R=!1,S=!1;if(We(t)?(p=()=>t.value,R=Ht(t)):rr(t)?(p=()=>u(t),R=!0):ce(t)?(S=!0,R=t.some(F=>rr(F)||Ht(F)),p=()=>t.map(F=>{if(We(F))return F.value;if(rr(F))return u(F);if(pe(F))return l?l(F,2):F()})):pe(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){dr();try{m()}finally{fr()}}const F=br;br=d;try{return l?l(t,3,[_]):t(_)}finally{br=F}}:p=dn,e&&s){const F=p,ne=s===!0?1/0:s;p=()=>Sn(F(),ne)}const O=Yp(),M=()=>{d.stop(),O&&Hl(O.effects,d)};if(i&&e){const F=e;e=(...ne)=>{F(...ne),M()}}let L=S?new Array(t.length).fill(To):To;const j=F=>{if(!(!(d.flags&1)||!d.dirty&&!F))if(e){const ne=d.run();if(s||R||(S?ne.some((oe,b)=>nr(oe,L[b])):nr(ne,L))){m&&m();const oe=br;br=d;try{const b=[ne,L===To?void 0:S&&L[0]===To?[]:L,_];l?l(e,3,b):e(...b),L=ne}finally{br=oe}}}else d.run()};return c&&c(j),d=new Jp(p),d.scheduler=o?()=>o(j,!1):j,_=F=>OE(F,!1,d),m=d.onStop=()=>{const F=Yo.get(d);if(F){if(l)l(F,4);else for(const ne of F)ne();Yo.delete(d)}},e?r?j(!0):L=d.run():o?o(j.bind(null,!0),!0):d.run(),M.pause=d.pause.bind(d),M.resume=d.resume.bind(d),M.stop=M,M}function Sn(t,e=1/0,n){if(e<=0||!Ne(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,We(t))Sn(t.value,e,n);else if(ce(t))for(let r=0;r<t.length;r++)Sn(t[r],e,n);else if(Ta(t)||ds(t))t.forEach(r=>{Sn(r,e,n)});else if(qp(t)){for(const r in t)Sn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Sn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Hi(t,e,n,r){try{return r?t(...r):t()}catch(s){Ca(s,e,n)}}function yn(t,e,n,r){if(pe(t)){const s=Hi(t,e,n,r);return s&&jp(s)&&s.catch(i=>{Ca(i,e,n)}),s}if(ce(t)){const s=[];for(let i=0;i<t.length;i++)s.push(yn(t[i],e,n,r));return s}}function Ca(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ke;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const d=c.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,l,u)===!1)return}c=c.parent}if(i){dr(),Hi(i,null,10,[t,l,u]),fr();return}}NE(t,n,s,r,o)}function NE(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const It=[];let on=-1;const fs=[];let zn=null,is=0;const mm=Promise.resolve();let Jo=null;function ka(t){const e=Jo||mm;return t?e.then(this?t.bind(this):t):e}function xE(t){let e=on+1,n=It.length;for(;e<n;){const r=e+n>>>1,s=It[r],i=Ri(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function tu(t){if(!(t.flags&1)){const e=Ri(t),n=It[It.length-1];!n||!(t.flags&2)&&e>=Ri(n)?It.push(t):It.splice(xE(e),0,t),t.flags|=1,gm()}}function gm(){Jo||(Jo=mm.then(ym))}function VE(t){ce(t)?fs.push(...t):zn&&t.id===-1?zn.splice(is+1,0,t):t.flags&1||(fs.push(t),t.flags|=1),gm()}function dd(t,e,n=on+1){for(;n<It.length;n++){const r=It[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;It.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function _m(t){if(fs.length){const e=[...new Set(fs)].sort((n,r)=>Ri(n)-Ri(r));if(fs.length=0,zn){zn.push(...e);return}for(zn=e,is=0;is<zn.length;is++){const n=zn[is];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}zn=null,is=0}}const Ri=t=>t.id==null?t.flags&2?-1:1/0:t.id;function ym(t){try{for(on=0;on<It.length;on++){const e=It[on];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Hi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;on<It.length;on++){const e=It[on];e&&(e.flags&=-2)}on=-1,It.length=0,_m(),Jo=null,(It.length||fs.length)&&ym()}}let bt=null,vm=null;function Xo(t){const e=bt;return bt=t,vm=t&&t.type.__scopeId||null,e}function nu(t,e=bt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Id(-1);const i=Xo(e);let o;try{o=t(...s)}finally{Xo(i),r._d&&Id(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ct(t,e){if(bt===null)return t;const n=xa(bt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=ke]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&Sn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function Tr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(dr(),yn(l,n,8,[t.el,c,t,e]),fr())}}const Em=Symbol("_vte"),ME=t=>t.__isTeleport,li=t=>t&&(t.disabled||t.disabled===""),LE=t=>t&&(t.defer||t.defer===""),fd=t=>typeof SVGElement<"u"&&t instanceof SVGElement,pd=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,rl=(t,e)=>{const n=t&&t.to;return Ke(n)?e?e(n):null:n},UE={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,c,l,u){const{mc:d,pc:p,pbc:m,o:{insert:_,querySelector:R,createText:S,createComment:O}}=u,M=li(e.props);let{shapeFlag:L,children:j,dynamicChildren:F}=e;if(t==null){const ne=e.el=S(""),oe=e.anchor=S("");_(ne,n,r),_(oe,n,r);const b=(v,I)=>{L&16&&(s&&s.isCE&&(s.ce._teleportTarget=v),d(j,v,I,s,i,o,c,l))},y=()=>{const v=e.target=rl(e.props,R),I=wm(v,e,S,_);v&&(o!=="svg"&&fd(v)?o="svg":o!=="mathml"&&pd(v)&&(o="mathml"),M||(b(v,I),No(e,!1)))};M&&(b(n,oe),No(e,!0)),LE(e.props)?Pt(y,i):y()}else{e.el=t.el,e.targetStart=t.targetStart;const ne=e.anchor=t.anchor,oe=e.target=t.target,b=e.targetAnchor=t.targetAnchor,y=li(t.props),v=y?n:oe,I=y?ne:b;if(o==="svg"||fd(oe)?o="svg":(o==="mathml"||pd(oe))&&(o="mathml"),F?(m(t.dynamicChildren,F,v,s,i,o,c),ou(t,e,!0)):l||p(t,e,v,I,s,i,o,c,!1),M)y?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Io(e,n,ne,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const A=e.target=rl(e.props,R);A&&Io(e,A,null,u,0)}else y&&Io(e,oe,b,u,1);No(e,M)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:c,anchor:l,targetStart:u,targetAnchor:d,target:p,props:m}=t;if(p&&(s(u),s(d)),i&&s(l),o&16){const _=i||!li(m);for(let R=0;R<c.length;R++){const S=c[R];r(S,e,n,_,!!S.dynamicChildren)}}},move:Io,hydrate:FE};function Io(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:c,shapeFlag:l,children:u,props:d}=t,p=i===2;if(p&&r(o,e,n),(!p||li(d))&&l&16)for(let m=0;m<u.length;m++)s(u[m],e,n,2);p&&r(c,e,n)}function FE(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:c,querySelector:l,insert:u,createText:d}},p){const m=e.target=rl(e.props,l);if(m){const _=li(e.props),R=m._lpa||m.firstChild;if(e.shapeFlag&16)if(_)e.anchor=p(o(t),e,c(t),n,r,s,i),e.targetStart=R,e.targetAnchor=R&&o(R);else{e.anchor=o(t);let S=R;for(;S;){if(S&&S.nodeType===8){if(S.data==="teleport start anchor")e.targetStart=S;else if(S.data==="teleport anchor"){e.targetAnchor=S,m._lpa=e.targetAnchor&&o(e.targetAnchor);break}}S=o(S)}e.targetAnchor||wm(m,e,d,u),p(R&&o(R),e,m,n,r,s,i)}No(e,_)}return e.anchor&&o(e.anchor)}const MO=UE;function No(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function wm(t,e,n,r){const s=e.targetStart=n(""),i=e.targetAnchor=n("");return s[Em]=i,t&&(r(s,t),r(i,t)),i}function ru(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ru(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Wr(t,e){return pe(t)?Ze({name:t.name},e,{setup:t}):t}function LO(){const t=Lw();return t?(t.appContext.config.idPrefix||"v")+"-"+t.ids[0]+t.ids[1]++:""}function Tm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function sl(t,e,n,r,s=!1){if(ce(t)){t.forEach((R,S)=>sl(R,e&&(ce(e)?e[S]:e),n,r,s));return}if(ui(r)&&!s)return;const i=r.shapeFlag&4?xa(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,d=c.refs===ke?c.refs={}:c.refs,p=c.setupState,m=Te(p),_=p===ke?()=>!1:R=>Ae(m,R);if(u!=null&&u!==l&&(Ke(u)?(d[u]=null,_(u)&&(p[u]=null)):We(u)&&(u.value=null)),pe(l))Hi(l,c,12,[o,d]);else{const R=Ke(l),S=We(l);if(R||S){const O=()=>{if(t.f){const M=R?_(l)?p[l]:d[l]:l.value;s?ce(M)&&Hl(M,i):ce(M)?M.includes(i)||M.push(i):R?(d[l]=[i],_(l)&&(p[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else R?(d[l]=o,_(l)&&(p[l]=o)):S&&(l.value=o,t.k&&(d[t.k]=o))};o?(O.id=-1,Pt(O,n)):O()}}}Aa().requestIdleCallback;Aa().cancelIdleCallback;const ui=t=>!!t.type.__asyncLoader,Im=t=>t.type.__isKeepAlive;function BE(t,e){bm(t,"a",e)}function jE(t,e){bm(t,"da",e)}function bm(t,e,n=Xe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Oa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Im(s.parent.vnode)&&$E(r,e,n,s),s=s.parent}}function $E(t,e,n,r){const s=Oa(e,t,r,!0);Rm(()=>{Hl(r[e],s)},n)}function Oa(t,e,n=Xe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{dr();const c=Wi(n),l=yn(e,n,t,o);return c(),fr(),l});return r?s.unshift(i):s.push(i),i}}const Ln=t=>(e,n=Xe)=>{(!Pi||t==="sp")&&Oa(t,(...r)=>e(...r),n)},qE=Ln("bm"),Am=Ln("m"),HE=Ln("bu"),WE=Ln("u"),KE=Ln("bum"),Rm=Ln("um"),zE=Ln("sp"),GE=Ln("rtg"),QE=Ln("rtc");function YE(t,e=Xe){Oa("ec",t,e)}const JE="components";function Sm(t,e){return ZE(JE,t,!0,e)||t}const XE=Symbol.for("v-ndc");function ZE(t,e,n=!0,r=!1){const s=bt||Xe;if(s){const i=s.type;{const c=$w(i,!1);if(c&&(c===e||c===Wt(e)||c===ba(Wt(e))))return i}const o=md(s[t]||i[t],e)||md(s.appContext[t],e);return!o&&r?i:o}}function md(t,e){return t&&(t[e]||t[Wt(e)]||t[ba(Wt(e))])}function UO(t,e,n,r){let s;const i=n,o=ce(t);if(o||Ke(t)){const c=o&&rr(t);let l=!1;c&&(l=!Ht(t),t=Pa(t)),s=new Array(t.length);for(let u=0,d=t.length;u<d;u++)s[u]=e(l?pt(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Ne(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const d=c[l];s[l]=e(t[d],d,l,i)}}else s=[];return s}const il=t=>t?Wm(t)?xa(t):il(t.parent):null,hi=Ze(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>il(t.parent),$root:t=>il(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>su(t),$forceUpdate:t=>t.f||(t.f=()=>{tu(t.update)}),$nextTick:t=>t.n||(t.n=ka.bind(t.proxy)),$watch:t=>ww.bind(t)}),Pc=(t,e)=>t!==ke&&!t.__isScriptSetup&&Ae(t,e),ew={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Pc(r,e))return o[e]=1,r[e];if(s!==ke&&Ae(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Ae(u,e))return o[e]=3,i[e];if(n!==ke&&Ae(n,e))return o[e]=4,n[e];ol&&(o[e]=0)}}const d=hi[e];let p,m;if(d)return e==="$attrs"&&ft(t.attrs,"get",""),d(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==ke&&Ae(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,Ae(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Pc(s,e)?(s[e]=n,!0):r!==ke&&Ae(r,e)?(r[e]=n,!0):Ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==ke&&Ae(t,o)||Pc(e,o)||(c=i[0])&&Ae(c,o)||Ae(r,o)||Ae(hi,o)||Ae(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ae(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function gd(t){return ce(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ol=!0;function tw(t){const e=su(t),n=t.proxy,r=t.ctx;ol=!1,e.beforeCreate&&_d(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:d,beforeMount:p,mounted:m,beforeUpdate:_,updated:R,activated:S,deactivated:O,beforeDestroy:M,beforeUnmount:L,destroyed:j,unmounted:F,render:ne,renderTracked:oe,renderTriggered:b,errorCaptured:y,serverPrefetch:v,expose:I,inheritAttrs:A,components:P,directives:T,filters:et}=e;if(u&&nw(u,r,null),o)for(const ue in o){const me=o[ue];pe(me)&&(r[ue]=me.bind(n))}if(s){const ue=s.call(n,n);Ne(ue)&&(t.data=qi(ue))}if(ol=!0,i)for(const ue in i){const me=i[ue],xt=pe(me)?me.bind(n,n):pe(me.get)?me.get.bind(n,n):dn,Gt=!pe(me)&&pe(me.set)?me.set.bind(n):dn,jt=gt({get:xt,set:Gt});Object.defineProperty(r,ue,{enumerable:!0,configurable:!0,get:()=>jt.value,set:Le=>jt.value=Le})}if(c)for(const ue in c)Pm(c[ue],r,n,ue);if(l){const ue=pe(l)?l.call(n):l;Reflect.ownKeys(ue).forEach(me=>{xo(me,ue[me])})}d&&_d(d,t,"c");function Oe(ue,me){ce(me)?me.forEach(xt=>ue(xt.bind(n))):me&&ue(me.bind(n))}if(Oe(qE,p),Oe(Am,m),Oe(HE,_),Oe(WE,R),Oe(BE,S),Oe(jE,O),Oe(YE,y),Oe(QE,oe),Oe(GE,b),Oe(KE,L),Oe(Rm,F),Oe(zE,v),ce(I))if(I.length){const ue=t.exposed||(t.exposed={});I.forEach(me=>{Object.defineProperty(ue,me,{get:()=>n[me],set:xt=>n[me]=xt})})}else t.exposed||(t.exposed={});ne&&t.render===dn&&(t.render=ne),A!=null&&(t.inheritAttrs=A),P&&(t.components=P),T&&(t.directives=T),v&&Tm(t)}function nw(t,e,n=dn){ce(t)&&(t=al(t));for(const r in t){const s=t[r];let i;Ne(s)?"default"in s?i=Jt(s.from||r,s.default,!0):i=Jt(s.from||r):i=Jt(s),We(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function _d(t,e,n){yn(ce(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Pm(t,e,n,r){let s=r.includes(".")?Bm(n,r):()=>n[r];if(Ke(t)){const i=e[t];pe(i)&&di(s,i)}else if(pe(t))di(s,t.bind(n));else if(Ne(t))if(ce(t))t.forEach(i=>Pm(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&di(s,i,t)}}function su(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>Zo(l,u,o,!0)),Zo(l,e,o)),Ne(e)&&i.set(e,l),l}function Zo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Zo(t,i,n,!0),s&&s.forEach(o=>Zo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=rw[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const rw={data:yd,props:vd,emits:vd,methods:Zs,computed:Zs,beforeCreate:wt,created:wt,beforeMount:wt,mounted:wt,beforeUpdate:wt,updated:wt,beforeDestroy:wt,beforeUnmount:wt,destroyed:wt,unmounted:wt,activated:wt,deactivated:wt,errorCaptured:wt,serverPrefetch:wt,components:Zs,directives:Zs,watch:iw,provide:yd,inject:sw};function yd(t,e){return e?t?function(){return Ze(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function sw(t,e){return Zs(al(t),al(e))}function al(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function wt(t,e){return t?[...new Set([].concat(t,e))]:e}function Zs(t,e){return t?Ze(Object.create(null),t,e):e}function vd(t,e){return t?ce(t)&&ce(e)?[...new Set([...t,...e])]:Ze(Object.create(null),gd(t),gd(e??{})):e}function iw(t,e){if(!t)return e;if(!e)return t;const n=Ze(Object.create(null),t);for(const r in e)n[r]=wt(t[r],e[r]);return n}function Cm(){return{app:null,config:{isNativeTag:Hv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ow=0;function aw(t,e){return function(r,s=null){pe(r)||(r=Ze({},r)),s!=null&&!Ne(s)&&(s=null);const i=Cm(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:ow++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Hw,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&pe(d.install)?(o.add(d),d.install(u,...p)):pe(d)&&(o.add(d),d(u,...p))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,p){return p?(i.components[d]=p,u):i.components[d]},directive(d,p){return p?(i.directives[d]=p,u):i.directives[d]},mount(d,p,m){if(!l){const _=u._ceVNode||He(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),p&&e?e(_,d):t(_,d,m),l=!0,u._container=d,d.__vue_app__=u,xa(_.component)}},onUnmount(d){c.push(d)},unmount(){l&&(yn(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,p){return i.provides[d]=p,u},runWithContext(d){const p=Or;Or=u;try{return d()}finally{Or=p}}};return u}}let Or=null;function xo(t,e){if(Xe){let n=Xe.provides;const r=Xe.parent&&Xe.parent.provides;r===n&&(n=Xe.provides=Object.create(r)),n[t]=e}}function Jt(t,e,n=!1){const r=Xe||bt;if(r||Or){const s=Or?Or._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}function cw(){return!!(Xe||bt||Or)}const km={},Om=()=>Object.create(km),Dm=t=>Object.getPrototypeOf(t)===km;function lw(t,e,n,r=!1){const s={},i=Om();t.propsDefaults=Object.create(null),Nm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:hm(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function uw(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Te(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(Da(t.emitsOptions,m))continue;const _=e[m];if(l)if(Ae(i,m))_!==i[m]&&(i[m]=_,u=!0);else{const R=Wt(m);s[R]=cl(l,c,R,_,t,!1)}else _!==i[m]&&(i[m]=_,u=!0)}}}else{Nm(t,e,s,i)&&(u=!0);let d;for(const p in c)(!e||!Ae(e,p)&&((d=Hr(p))===p||!Ae(e,d)))&&(l?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=cl(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Ae(e,p))&&(delete i[p],u=!0)}u&&Rn(t.attrs,"set","")}function Nm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(oi(l))continue;const u=e[l];let d;s&&Ae(s,d=Wt(l))?!i||!i.includes(d)?n[d]=u:(c||(c={}))[d]=u:Da(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Te(n),u=c||ke;for(let d=0;d<i.length;d++){const p=i[d];n[p]=cl(s,l,p,u[p],t,!Ae(u,p))}}return o}function cl(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Ae(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&pe(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=Wi(s);r=u[n]=l.call(null,e),d()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Hr(n))&&(r=!0))}return r}const hw=new WeakMap;function xm(t,e,n=!1){const r=n?hw:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!pe(t)){const d=p=>{l=!0;const[m,_]=xm(p,e,!0);Ze(o,m),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return Ne(t)&&r.set(t,hs),hs;if(ce(i))for(let d=0;d<i.length;d++){const p=Wt(i[d]);Ed(p)&&(o[p]=ke)}else if(i)for(const d in i){const p=Wt(d);if(Ed(p)){const m=i[d],_=o[p]=ce(m)||pe(m)?{type:m}:Ze({},m),R=_.type;let S=!1,O=!0;if(ce(R))for(let M=0;M<R.length;++M){const L=R[M],j=pe(L)&&L.name;if(j==="Boolean"){S=!0;break}else j==="String"&&(O=!1)}else S=pe(R)&&R.name==="Boolean";_[0]=S,_[1]=O,(S||Ae(_,"default"))&&c.push(p)}}const u=[o,c];return Ne(t)&&r.set(t,u),u}function Ed(t){return t[0]!=="$"&&!oi(t)}const Vm=t=>t[0]==="_"||t==="$stable",iu=t=>ce(t)?t.map(cn):[cn(t)],dw=(t,e,n)=>{if(e._n)return e;const r=nu((...s)=>iu(e(...s)),n);return r._c=!1,r},Mm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Vm(s))continue;const i=t[s];if(pe(i))e[s]=dw(s,i,r);else if(i!=null){const o=iu(i);e[s]=()=>o}}},Lm=(t,e)=>{const n=iu(e);t.slots.default=()=>n},Um=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},fw=(t,e,n)=>{const r=t.slots=Om();if(t.vnode.shapeFlag&32){const s=e._;s?(Um(r,e,n),n&&Hp(r,"_",s,!0)):Mm(e,r)}else e&&Lm(t,e)},pw=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ke;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Um(s,e,n):(i=!e.$stable,Mm(e,s)),o=e}else e&&(Lm(t,e),o={default:1});if(i)for(const c in s)!Vm(c)&&o[c]==null&&delete s[c]},Pt=Pw;function mw(t){return gw(t)}function gw(t,e){const n=Aa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:d,parentNode:p,nextSibling:m,setScopeId:_=dn,insertStaticContent:R}=t,S=(E,w,k,U=null,N=null,$=null,G=void 0,K=null,W=!!w.dynamicChildren)=>{if(E===w)return;E&&!Qs(E,w)&&(U=x(E),Le(E,N,$,!0),E=null),w.patchFlag===-2&&(W=!1,w.dynamicChildren=null);const{type:q,ref:ie,shapeFlag:Y}=w;switch(q){case Na:O(E,w,k,U);break;case Vr:M(E,w,k,U);break;case Vo:E==null&&L(w,k,U,G);break;case an:P(E,w,k,U,N,$,G,K,W);break;default:Y&1?ne(E,w,k,U,N,$,G,K,W):Y&6?T(E,w,k,U,N,$,G,K,W):(Y&64||Y&128)&&q.process(E,w,k,U,N,$,G,K,W,Z)}ie!=null&&N&&sl(ie,E&&E.ref,$,w||E,!w)},O=(E,w,k,U)=>{if(E==null)r(w.el=c(w.children),k,U);else{const N=w.el=E.el;w.children!==E.children&&u(N,w.children)}},M=(E,w,k,U)=>{E==null?r(w.el=l(w.children||""),k,U):w.el=E.el},L=(E,w,k,U)=>{[E.el,E.anchor]=R(E.children,w,k,U,E.el,E.anchor)},j=({el:E,anchor:w},k,U)=>{let N;for(;E&&E!==w;)N=m(E),r(E,k,U),E=N;r(w,k,U)},F=({el:E,anchor:w})=>{let k;for(;E&&E!==w;)k=m(E),s(E),E=k;s(w)},ne=(E,w,k,U,N,$,G,K,W)=>{w.type==="svg"?G="svg":w.type==="math"&&(G="mathml"),E==null?oe(w,k,U,N,$,G,K,W):v(E,w,N,$,G,K,W)},oe=(E,w,k,U,N,$,G,K)=>{let W,q;const{props:ie,shapeFlag:Y,transition:re,dirs:ee}=E;if(W=E.el=o(E.type,$,ie&&ie.is,ie),Y&8?d(W,E.children):Y&16&&y(E.children,W,null,U,N,Cc(E,$),G,K),ee&&Tr(E,null,U,"created"),b(W,E,E.scopeId,G,U),ie){for(const be in ie)be!=="value"&&!oi(be)&&i(W,be,null,ie[be],$,U);"value"in ie&&i(W,"value",null,ie.value,$),(q=ie.onVnodeBeforeMount)&&sn(q,U,E)}ee&&Tr(E,null,U,"beforeMount");const ae=_w(N,re);ae&&re.beforeEnter(W),r(W,w,k),((q=ie&&ie.onVnodeMounted)||ae||ee)&&Pt(()=>{q&&sn(q,U,E),ae&&re.enter(W),ee&&Tr(E,null,U,"mounted")},N)},b=(E,w,k,U,N)=>{if(k&&_(E,k),U)for(let $=0;$<U.length;$++)_(E,U[$]);if(N){let $=N.subTree;if(w===$||$m($.type)&&($.ssContent===w||$.ssFallback===w)){const G=N.vnode;b(E,G,G.scopeId,G.slotScopeIds,N.parent)}}},y=(E,w,k,U,N,$,G,K,W=0)=>{for(let q=W;q<E.length;q++){const ie=E[q]=K?Gn(E[q]):cn(E[q]);S(null,ie,w,k,U,N,$,G,K)}},v=(E,w,k,U,N,$,G)=>{const K=w.el=E.el;let{patchFlag:W,dynamicChildren:q,dirs:ie}=w;W|=E.patchFlag&16;const Y=E.props||ke,re=w.props||ke;let ee;if(k&&Ir(k,!1),(ee=re.onVnodeBeforeUpdate)&&sn(ee,k,w,E),ie&&Tr(w,E,k,"beforeUpdate"),k&&Ir(k,!0),(Y.innerHTML&&re.innerHTML==null||Y.textContent&&re.textContent==null)&&d(K,""),q?I(E.dynamicChildren,q,K,k,U,Cc(w,N),$):G||me(E,w,K,null,k,U,Cc(w,N),$,!1),W>0){if(W&16)A(K,Y,re,k,N);else if(W&2&&Y.class!==re.class&&i(K,"class",null,re.class,N),W&4&&i(K,"style",Y.style,re.style,N),W&8){const ae=w.dynamicProps;for(let be=0;be<ae.length;be++){const Ee=ae[be],at=Y[Ee],Ye=re[Ee];(Ye!==at||Ee==="value")&&i(K,Ee,at,Ye,N,k)}}W&1&&E.children!==w.children&&d(K,w.children)}else!G&&q==null&&A(K,Y,re,k,N);((ee=re.onVnodeUpdated)||ie)&&Pt(()=>{ee&&sn(ee,k,w,E),ie&&Tr(w,E,k,"updated")},U)},I=(E,w,k,U,N,$,G)=>{for(let K=0;K<w.length;K++){const W=E[K],q=w[K],ie=W.el&&(W.type===an||!Qs(W,q)||W.shapeFlag&70)?p(W.el):k;S(W,q,ie,null,U,N,$,G,!0)}},A=(E,w,k,U,N)=>{if(w!==k){if(w!==ke)for(const $ in w)!oi($)&&!($ in k)&&i(E,$,w[$],null,N,U);for(const $ in k){if(oi($))continue;const G=k[$],K=w[$];G!==K&&$!=="value"&&i(E,$,K,G,N,U)}"value"in k&&i(E,"value",w.value,k.value,N)}},P=(E,w,k,U,N,$,G,K,W)=>{const q=w.el=E?E.el:c(""),ie=w.anchor=E?E.anchor:c("");let{patchFlag:Y,dynamicChildren:re,slotScopeIds:ee}=w;ee&&(K=K?K.concat(ee):ee),E==null?(r(q,k,U),r(ie,k,U),y(w.children||[],k,ie,N,$,G,K,W)):Y>0&&Y&64&&re&&E.dynamicChildren?(I(E.dynamicChildren,re,k,N,$,G,K),(w.key!=null||N&&w===N.subTree)&&ou(E,w,!0)):me(E,w,k,ie,N,$,G,K,W)},T=(E,w,k,U,N,$,G,K,W)=>{w.slotScopeIds=K,E==null?w.shapeFlag&512?N.ctx.activate(w,k,U,G,W):et(w,k,U,N,$,G,W):Rt(E,w,W)},et=(E,w,k,U,N,$,G)=>{const K=E.component=Mw(E,U,N);if(Im(E)&&(K.ctx.renderer=Z),Uw(K,!1,G),K.asyncDep){if(N&&N.registerDep(K,Oe,G),!E.el){const W=K.subTree=He(Vr);M(null,W,w,k)}}else Oe(K,E,w,k,N,$,G)},Rt=(E,w,k)=>{const U=w.component=E.component;if(Rw(E,w,k))if(U.asyncDep&&!U.asyncResolved){ue(U,w,k);return}else U.next=w,U.update();else w.el=E.el,U.vnode=w},Oe=(E,w,k,U,N,$,G)=>{const K=()=>{if(E.isMounted){let{next:Y,bu:re,u:ee,parent:ae,vnode:be}=E;{const ct=Fm(E);if(ct){Y&&(Y.el=be.el,ue(E,Y,G)),ct.asyncDep.then(()=>{E.isUnmounted||K()});return}}let Ee=Y,at;Ir(E,!1),Y?(Y.el=be.el,ue(E,Y,G)):Y=be,re&&Do(re),(at=Y.props&&Y.props.onVnodeBeforeUpdate)&&sn(at,ae,Y,be),Ir(E,!0);const Ye=kc(E),tt=E.subTree;E.subTree=Ye,S(tt,Ye,p(tt.el),x(tt),E,N,$),Y.el=Ye.el,Ee===null&&Sw(E,Ye.el),ee&&Pt(ee,N),(at=Y.props&&Y.props.onVnodeUpdated)&&Pt(()=>sn(at,ae,Y,be),N)}else{let Y;const{el:re,props:ee}=w,{bm:ae,m:be,parent:Ee,root:at,type:Ye}=E,tt=ui(w);if(Ir(E,!1),ae&&Do(ae),!tt&&(Y=ee&&ee.onVnodeBeforeMount)&&sn(Y,Ee,w),Ir(E,!0),re&&Pe){const ct=()=>{E.subTree=kc(E),Pe(re,E.subTree,E,N,null)};tt&&Ye.__asyncHydrate?Ye.__asyncHydrate(re,E,ct):ct()}else{at.ce&&at.ce._injectChildStyle(Ye);const ct=E.subTree=kc(E);S(null,ct,k,U,E,N,$),w.el=ct.el}if(be&&Pt(be,N),!tt&&(Y=ee&&ee.onVnodeMounted)){const ct=w;Pt(()=>sn(Y,Ee,ct),N)}(w.shapeFlag&256||Ee&&ui(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&E.a&&Pt(E.a,N),E.isMounted=!0,w=k=U=null}};E.scope.on();const W=E.effect=new Jp(K);E.scope.off();const q=E.update=W.run.bind(W),ie=E.job=W.runIfDirty.bind(W);ie.i=E,ie.id=E.uid,W.scheduler=()=>tu(ie),Ir(E,!0),q()},ue=(E,w,k)=>{w.component=E;const U=E.vnode.props;E.vnode=w,E.next=null,uw(E,w.props,U,k),pw(E,w.children,k),dr(),dd(E),fr()},me=(E,w,k,U,N,$,G,K,W=!1)=>{const q=E&&E.children,ie=E?E.shapeFlag:0,Y=w.children,{patchFlag:re,shapeFlag:ee}=w;if(re>0){if(re&128){Gt(q,Y,k,U,N,$,G,K,W);return}else if(re&256){xt(q,Y,k,U,N,$,G,K,W);return}}ee&8?(ie&16&&St(q,N,$),Y!==q&&d(k,Y)):ie&16?ee&16?Gt(q,Y,k,U,N,$,G,K,W):St(q,N,$,!0):(ie&8&&d(k,""),ee&16&&y(Y,k,U,N,$,G,K,W))},xt=(E,w,k,U,N,$,G,K,W)=>{E=E||hs,w=w||hs;const q=E.length,ie=w.length,Y=Math.min(q,ie);let re;for(re=0;re<Y;re++){const ee=w[re]=W?Gn(w[re]):cn(w[re]);S(E[re],ee,k,null,N,$,G,K,W)}q>ie?St(E,N,$,!0,!1,Y):y(w,k,U,N,$,G,K,W,Y)},Gt=(E,w,k,U,N,$,G,K,W)=>{let q=0;const ie=w.length;let Y=E.length-1,re=ie-1;for(;q<=Y&&q<=re;){const ee=E[q],ae=w[q]=W?Gn(w[q]):cn(w[q]);if(Qs(ee,ae))S(ee,ae,k,null,N,$,G,K,W);else break;q++}for(;q<=Y&&q<=re;){const ee=E[Y],ae=w[re]=W?Gn(w[re]):cn(w[re]);if(Qs(ee,ae))S(ee,ae,k,null,N,$,G,K,W);else break;Y--,re--}if(q>Y){if(q<=re){const ee=re+1,ae=ee<ie?w[ee].el:U;for(;q<=re;)S(null,w[q]=W?Gn(w[q]):cn(w[q]),k,ae,N,$,G,K,W),q++}}else if(q>re)for(;q<=Y;)Le(E[q],N,$,!0),q++;else{const ee=q,ae=q,be=new Map;for(q=ae;q<=re;q++){const yt=w[q]=W?Gn(w[q]):cn(w[q]);yt.key!=null&&be.set(yt.key,q)}let Ee,at=0;const Ye=re-ae+1;let tt=!1,ct=0;const Bn=new Array(Ye);for(q=0;q<Ye;q++)Bn[q]=0;for(q=ee;q<=Y;q++){const yt=E[q];if(at>=Ye){Le(yt,N,$,!0);continue}let $t;if(yt.key!=null)$t=be.get(yt.key);else for(Ee=ae;Ee<=re;Ee++)if(Bn[Ee-ae]===0&&Qs(yt,w[Ee])){$t=Ee;break}$t===void 0?Le(yt,N,$,!0):(Bn[$t-ae]=q+1,$t>=ct?ct=$t:tt=!0,S(yt,w[$t],k,null,N,$,G,K,W),at++)}const Jr=tt?yw(Bn):hs;for(Ee=Jr.length-1,q=Ye-1;q>=0;q--){const yt=ae+q,$t=w[yt],Xr=yt+1<ie?w[yt+1].el:U;Bn[q]===0?S(null,$t,k,Xr,N,$,G,K,W):tt&&(Ee<0||q!==Jr[Ee]?jt($t,k,Xr,2):Ee--)}}},jt=(E,w,k,U,N=null)=>{const{el:$,type:G,transition:K,children:W,shapeFlag:q}=E;if(q&6){jt(E.component.subTree,w,k,U);return}if(q&128){E.suspense.move(w,k,U);return}if(q&64){G.move(E,w,k,Z);return}if(G===an){r($,w,k);for(let Y=0;Y<W.length;Y++)jt(W[Y],w,k,U);r(E.anchor,w,k);return}if(G===Vo){j(E,w,k);return}if(U!==2&&q&1&&K)if(U===0)K.beforeEnter($),r($,w,k),Pt(()=>K.enter($),N);else{const{leave:Y,delayLeave:re,afterLeave:ee}=K,ae=()=>r($,w,k),be=()=>{Y($,()=>{ae(),ee&&ee()})};re?re($,ae,be):be()}else r($,w,k)},Le=(E,w,k,U=!1,N=!1)=>{const{type:$,props:G,ref:K,children:W,dynamicChildren:q,shapeFlag:ie,patchFlag:Y,dirs:re,cacheIndex:ee}=E;if(Y===-2&&(N=!1),K!=null&&sl(K,null,k,E,!0),ee!=null&&(w.renderCache[ee]=void 0),ie&256){w.ctx.deactivate(E);return}const ae=ie&1&&re,be=!ui(E);let Ee;if(be&&(Ee=G&&G.onVnodeBeforeUnmount)&&sn(Ee,w,E),ie&6)rn(E.component,k,U);else{if(ie&128){E.suspense.unmount(k,U);return}ae&&Tr(E,null,w,"beforeUnmount"),ie&64?E.type.remove(E,w,k,Z,U):q&&!q.hasOnce&&($!==an||Y>0&&Y&64)?St(q,w,k,!1,!0):($===an&&Y&384||!N&&ie&16)&&St(W,w,k),U&&Ue(E)}(be&&(Ee=G&&G.onVnodeUnmounted)||ae)&&Pt(()=>{Ee&&sn(Ee,w,E),ae&&Tr(E,null,w,"unmounted")},k)},Ue=E=>{const{type:w,el:k,anchor:U,transition:N}=E;if(w===an){Fn(k,U);return}if(w===Vo){F(E);return}const $=()=>{s(k),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(E.shapeFlag&1&&N&&!N.persisted){const{leave:G,delayLeave:K}=N,W=()=>G(k,$);K?K(E.el,$,W):W()}else $()},Fn=(E,w)=>{let k;for(;E!==w;)k=m(E),s(E),E=k;s(w)},rn=(E,w,k)=>{const{bum:U,scope:N,job:$,subTree:G,um:K,m:W,a:q}=E;wd(W),wd(q),U&&Do(U),N.stop(),$&&($.flags|=8,Le(G,E,w,k)),K&&Pt(K,w),Pt(()=>{E.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},St=(E,w,k,U=!1,N=!1,$=0)=>{for(let G=$;G<E.length;G++)Le(E[G],w,k,U,N)},x=E=>{if(E.shapeFlag&6)return x(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const w=m(E.anchor||E.el),k=w&&w[Em];return k?m(k):w};let X=!1;const Q=(E,w,k)=>{E==null?w._vnode&&Le(w._vnode,null,null,!0):S(w._vnode||null,E,w,null,null,null,k),w._vnode=E,X||(X=!0,dd(),_m(),X=!1)},Z={p:S,um:Le,m:jt,r:Ue,mt:et,mc:y,pc:me,pbc:I,n:x,o:t};let ye,Pe;return{render:Q,hydrate:ye,createApp:aw(Q,ye)}}function Cc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ir({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function _w(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ou(t,e,n=!1){const r=t.children,s=e.children;if(ce(r)&&ce(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Gn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&ou(o,c)),c.type===Na&&(c.el=o.el)}}function yw(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Fm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Fm(e)}function wd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const vw=Symbol.for("v-scx"),Ew=()=>Jt(vw);function FO(t,e){return au(t,null,e)}function di(t,e,n){return au(t,e,n)}function au(t,e,n=ke){const{immediate:r,deep:s,flush:i,once:o}=n,c=Ze({},n),l=e&&r||!e&&i!=="post";let u;if(Pi){if(i==="sync"){const _=Ew();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=dn,_.resume=dn,_.pause=dn,_}}const d=Xe;c.call=(_,R,S)=>yn(_,d,R,S);let p=!1;i==="post"?c.scheduler=_=>{Pt(_,d&&d.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(_,R)=>{R?_():tu(_)}),c.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,d&&(_.id=d.uid,_.i=d))};const m=DE(t,e,c);return Pi&&(u?u.push(m):l&&m()),m}function ww(t,e,n){const r=this.proxy,s=Ke(t)?t.includes(".")?Bm(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const o=Wi(this),c=au(s,i.bind(r),n);return o(),c}function Bm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Tw=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Wt(e)}Modifiers`]||t[`${Hr(e)}Modifiers`];function Iw(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ke;let s=n;const i=e.startsWith("update:"),o=i&&Tw(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>Ke(d)?d.trim():d)),o.number&&(s=n.map(Go)));let c,l=r[c=Ic(e)]||r[c=Ic(Wt(e))];!l&&i&&(l=r[c=Ic(Hr(e))]),l&&yn(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,yn(u,t,6,s)}}function jm(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!pe(t)){const l=u=>{const d=jm(u,e,!0);d&&(c=!0,Ze(o,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Ne(t)&&r.set(t,null),null):(ce(i)?i.forEach(l=>o[l]=null):Ze(o,i),Ne(t)&&r.set(t,o),o)}function Da(t,e){return!t||!wa(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ae(t,e[0].toLowerCase()+e.slice(1))||Ae(t,Hr(e))||Ae(t,e))}function kc(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:d,props:p,data:m,setupState:_,ctx:R,inheritAttrs:S}=t,O=Xo(t);let M,L;try{if(n.shapeFlag&4){const F=s||r,ne=F;M=cn(u.call(ne,F,d,p,_,m,R)),L=c}else{const F=e;M=cn(F.length>1?F(p,{attrs:c,slots:o,emit:l}):F(p,null)),L=e.props?c:bw(c)}}catch(F){fi.length=0,Ca(F,t,1),M=He(Vr)}let j=M;if(L&&S!==!1){const F=Object.keys(L),{shapeFlag:ne}=j;F.length&&ne&7&&(i&&F.some(ql)&&(L=Aw(L,i)),j=vs(j,L,!1,!0))}return n.dirs&&(j=vs(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&ru(j,n.transition),M=j,Xo(O),M}const bw=t=>{let e;for(const n in t)(n==="class"||n==="style"||wa(n))&&((e||(e={}))[n]=t[n]);return e},Aw=(t,e)=>{const n={};for(const r in t)(!ql(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Rw(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Td(r,o,u):!!o;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(o[m]!==r[m]&&!Da(u,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Td(r,o,u):!0:!!o;return!1}function Td(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Da(n,i))return!0}return!1}function Sw({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const $m=t=>t.__isSuspense;function Pw(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):VE(t)}const an=Symbol.for("v-fgt"),Na=Symbol.for("v-txt"),Vr=Symbol.for("v-cmt"),Vo=Symbol.for("v-stc"),fi=[];let Lt=null;function kt(t=!1){fi.push(Lt=t?null:[])}function Cw(){fi.pop(),Lt=fi[fi.length-1]||null}let Si=1;function Id(t){Si+=t,t<0&&Lt&&(Lt.hasOnce=!0)}function qm(t){return t.dynamicChildren=Si>0?Lt||hs:null,Cw(),Si>0&&Lt&&Lt.push(t),t}function Mt(t,e,n,r,s,i){return qm(H(t,e,n,r,s,i,!0))}function kw(t,e,n,r,s){return qm(He(t,e,n,r,s,!0))}function ea(t){return t?t.__v_isVNode===!0:!1}function Qs(t,e){return t.type===e.type&&t.key===e.key}const Hm=({key:t})=>t??null,Mo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ke(t)||We(t)||pe(t)?{i:bt,r:t,k:e,f:!!n}:t:null);function H(t,e=null,n=null,r=0,s=null,i=t===an?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Hm(e),ref:e&&Mo(e),scopeId:vm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:bt};return c?(lu(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ke(n)?8:16),Si>0&&!o&&Lt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Lt.push(l),l}const He=Ow;function Ow(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===XE)&&(t=Vr),ea(t)){const c=vs(t,e,!0);return n&&lu(c,n),Si>0&&!i&&Lt&&(c.shapeFlag&6?Lt[Lt.indexOf(t)]=c:Lt.push(c)),c.patchFlag=-2,c}if(qw(t)&&(t=t.__vccOpts),e){e=Dw(e);let{class:c,style:l}=e;c&&!Ke(c)&&(e.class=Ra(c)),Ne(l)&&(Zl(l)&&!ce(l)&&(l=Ze({},l)),e.style=Kl(l))}const o=Ke(t)?1:$m(t)?128:ME(t)?64:Ne(t)?4:pe(t)?2:0;return H(t,e,n,r,s,o,i,!0)}function Dw(t){return t?Zl(t)||Dm(t)?Ze({},t):t:null}function vs(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?Nw(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Hm(u),ref:e&&e.ref?n&&i?ce(i)?i.concat(Mo(e)):[i,Mo(e)]:Mo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==an?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&vs(t.ssContent),ssFallback:t.ssFallback&&vs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&ru(d,l.clone(d)),d}function cu(t=" ",e=0){return He(Na,null,t,e)}function BO(t,e){const n=He(Vo,null,t);return n.staticCount=e,n}function Lo(t="",e=!1){return e?(kt(),kw(Vr,null,t)):He(Vr,null,t)}function cn(t){return t==null||typeof t=="boolean"?He(Vr):ce(t)?He(an,null,t.slice()):ea(t)?Gn(t):He(Na,null,String(t))}function Gn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:vs(t)}function lu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),lu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Dm(e)?e._ctx=bt:s===3&&bt&&(bt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:bt},n=32):(e=String(e),r&64?(n=16,e=[cu(e)]):n=8);t.children=e,t.shapeFlag|=n}function Nw(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ra([e.class,r.class]));else if(s==="style")e.style=Kl([e.style,r.style]);else if(wa(s)){const i=e[s],o=r[s];o&&i!==o&&!(ce(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function sn(t,e,n,r=null){yn(t,e,7,[n,r])}const xw=Cm();let Vw=0;function Mw(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||xw,i={uid:Vw++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Gp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xm(r,s),emitsOptions:jm(r,s),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:r.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Iw.bind(null,i),t.ce&&t.ce(i),i}let Xe=null;const Lw=()=>Xe||bt;let ta,ll;{const t=Aa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ta=e("__VUE_INSTANCE_SETTERS__",n=>Xe=n),ll=e("__VUE_SSR_SETTERS__",n=>Pi=n)}const Wi=t=>{const e=Xe;return ta(t),t.scope.on(),()=>{t.scope.off(),ta(e)}},bd=()=>{Xe&&Xe.scope.off(),ta(null)};function Wm(t){return t.vnode.shapeFlag&4}let Pi=!1;function Uw(t,e=!1,n=!1){e&&ll(e);const{props:r,children:s}=t.vnode,i=Wm(t);lw(t,r,i,e),fw(t,s,n);const o=i?Fw(t,e):void 0;return e&&ll(!1),o}function Fw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,ew);const{setup:r}=n;if(r){dr();const s=t.setupContext=r.length>1?jw(t):null,i=Wi(t),o=Hi(r,t,0,[t.props,s]),c=jp(o);if(fr(),i(),(c||t.sp)&&!ui(t)&&Tm(t),c){if(o.then(bd,bd),e)return o.then(l=>{Ad(t,l,e)}).catch(l=>{Ca(l,t,0)});t.asyncDep=o}else Ad(t,o,e)}else Km(t,e)}function Ad(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ne(e)&&(t.setupState=pm(e)),Km(t,n)}let Rd;function Km(t,e,n){const r=t.type;if(!t.render){if(!e&&Rd&&!r.render){const s=r.template||su(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:l}=r,u=Ze(Ze({isCustomElement:i,delimiters:c},o),l);r.render=Rd(s,u)}}t.render=r.render||dn}{const s=Wi(t);dr();try{tw(t)}finally{fr(),s()}}}const Bw={get(t,e){return ft(t,"get",""),t[e]}};function jw(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Bw),slots:t.slots,emit:t.emit,expose:e}}function xa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(pm(eu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in hi)return hi[n](t)},has(e,n){return n in e||n in hi}})):t.proxy}function $w(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function qw(t){return pe(t)&&"__vccOpts"in t}const gt=(t,e)=>kE(t,e,Pi);function zm(t,e,n){const r=arguments.length;return r===2?Ne(e)&&!ce(e)?ea(e)?He(t,null,[e]):He(t,e):He(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ea(n)&&(n=[n]),He(t,e,n))}const Hw="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ul;const Sd=typeof window<"u"&&window.trustedTypes;if(Sd)try{ul=Sd.createPolicy("vue",{createHTML:t=>t})}catch{}const Gm=ul?t=>ul.createHTML(t):t=>t,Ww="http://www.w3.org/2000/svg",Kw="http://www.w3.org/1998/Math/MathML",An=typeof document<"u"?document:null,Pd=An&&An.createElement("template"),zw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?An.createElementNS(Ww,t):e==="mathml"?An.createElementNS(Kw,t):n?An.createElement(t,{is:n}):An.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>An.createTextNode(t),createComment:t=>An.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>An.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Pd.innerHTML=Gm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Pd.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Gw=Symbol("_vtc");function Qw(t,e,n){const r=t[Gw];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Cd=Symbol("_vod"),Yw=Symbol("_vsh"),Jw=Symbol(""),Xw=/(^|;)\s*display\s*:/;function Zw(t,e,n){const r=t.style,s=Ke(n);let i=!1;if(n&&!s){if(e)if(Ke(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Uo(r,c,"")}else for(const o in e)n[o]==null&&Uo(r,o,"");for(const o in n)o==="display"&&(i=!0),Uo(r,o,n[o])}else if(s){if(e!==n){const o=r[Jw];o&&(n+=";"+o),r.cssText=n,i=Xw.test(n)}}else e&&t.removeAttribute("style");Cd in t&&(t[Cd]=i?r.display:"",t[Yw]&&(r.display="none"))}const kd=/\s*!important$/;function Uo(t,e,n){if(ce(n))n.forEach(r=>Uo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=eT(t,e);kd.test(n)?t.setProperty(Hr(r),n.replace(kd,""),"important"):t[r]=n}}const Od=["Webkit","Moz","ms"],Oc={};function eT(t,e){const n=Oc[e];if(n)return n;let r=Wt(e);if(r!=="filter"&&r in t)return Oc[e]=r;r=ba(r);for(let s=0;s<Od.length;s++){const i=Od[s]+r;if(i in t)return Oc[e]=i}return e}const Dd="http://www.w3.org/1999/xlink";function Nd(t,e,n,r,s,i=eE(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Dd,e.slice(6,e.length)):t.setAttributeNS(Dd,e,n):n==null||i&&!Wp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":_n(n)?String(n):n)}function xd(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Gm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Wp(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Rr(t,e,n,r){t.addEventListener(e,n,r)}function tT(t,e,n,r){t.removeEventListener(e,n,r)}const Vd=Symbol("_vei");function nT(t,e,n,r,s=null){const i=t[Vd]||(t[Vd]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=rT(e);if(r){const u=i[e]=oT(r,s);Rr(t,c,u,l)}else o&&(tT(t,c,o,l),i[e]=void 0)}}const Md=/(?:Once|Passive|Capture)$/;function rT(t){let e;if(Md.test(t)){e={};let r;for(;r=t.match(Md);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Hr(t.slice(2)),e]}let Dc=0;const sT=Promise.resolve(),iT=()=>Dc||(sT.then(()=>Dc=0),Dc=Date.now());function oT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;yn(aT(r,n.value),e,5,[r])};return n.value=t,n.attached=iT(),n}function aT(t,e){if(ce(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ld=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,cT=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Qw(t,r,o):e==="style"?Zw(t,n,r):wa(e)?ql(e)||nT(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):lT(t,e,r,o))?(xd(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Nd(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ke(r))?xd(t,Wt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Nd(t,e,r,o))};function lT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ld(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ld(e)&&Ke(n)?!1:e in t}const na=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ce(e)?n=>Do(e,n):e};function uT(t){t.target.composing=!0}function Ud(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ps=Symbol("_assign"),qt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[ps]=na(s);const i=r||s.props&&s.props.type==="number";Rr(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=Go(c)),t[ps](c)}),n&&Rr(t,"change",()=>{t.value=t.value.trim()}),e||(Rr(t,"compositionstart",uT),Rr(t,"compositionend",Ud),Rr(t,"change",Ud))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[ps]=na(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Go(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},Qm={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Ta(e);Rr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Go(ra(o)):ra(o));t[ps](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,ka(()=>{t._assigning=!1})}),t[ps]=na(r)},mounted(t,{value:e}){Fd(t,e)},beforeUpdate(t,e,n){t[ps]=na(n)},updated(t,{value:e}){t._assigning||Fd(t,e)}};function Fd(t,e){const n=t.multiple,r=ce(e);if(!(n&&!r&&!Ta(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],c=ra(o);if(n)if(r){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(c)):o.selected=nE(e,c)>-1}else o.selected=e.has(c);else if(Sa(ra(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ra(t){return"_value"in t?t._value:t.value}const hT=["ctrl","shift","alt","meta"],dT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>hT.some(n=>t[`${n}Key`]&&!e.includes(n))},uu=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=dT[e[o]];if(c&&c(s,e))return}return t(s,...i)})},fT=Ze({patchProp:cT},zw);let Bd;function pT(){return Bd||(Bd=mw(fT))}const jO=(...t)=>{const e=pT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=gT(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,mT(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function mT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function gT(t){return Ke(t)?document.querySelector(t):t}var _T=!1;/*!
 * pinia v2.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let Ym;const Va=t=>Ym=t,Jm=Symbol();function hl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var pi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(pi||(pi={}));function $O(){const t=Qp(!0),e=t.run(()=>ln({}));let n=[],r=[];const s=eu({install(i){Va(s),s._a=i,i.provide(Jm,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!_T?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Xm=()=>{};function jd(t,e,n,r=Xm){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Yp()&&rE(s),s}function ss(t,...e){t.slice().forEach(n=>{n(...e)})}const yT=t=>t(),$d=Symbol(),Nc=Symbol();function dl(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];hl(s)&&hl(r)&&t.hasOwnProperty(n)&&!We(r)&&!rr(r)?t[n]=dl(s,r):t[n]=r}return t}const vT=Symbol();function ET(t){return!hl(t)||!t.hasOwnProperty(vT)}const{assign:Kn}=Object;function wT(t){return!!(We(t)&&t.effect)}function TT(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let l;function u(){c||(n.state.value[t]=s?s():{});const d=RE(n.state.value[t]);return Kn(d,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=eu(gt(()=>{Va(n);const _=n._s.get(t);return o[m].call(_,_)})),p),{}))}return l=Zm(t,u,e,n,r,!0),l}function Zm(t,e,n={},r,s,i){let o;const c=Kn({actions:{}},n),l={deep:!0};let u,d,p=[],m=[],_;const R=r.state.value[t];!i&&!R&&(r.state.value[t]={}),ln({});let S;function O(y){let v;u=d=!1,typeof y=="function"?(y(r.state.value[t]),v={type:pi.patchFunction,storeId:t,events:_}):(dl(r.state.value[t],y),v={type:pi.patchObject,payload:y,storeId:t,events:_});const I=S=Symbol();ka().then(()=>{S===I&&(u=!0)}),d=!0,ss(p,v,r.state.value[t])}const M=i?function(){const{state:v}=n,I=v?v():{};this.$patch(A=>{Kn(A,I)})}:Xm;function L(){o.stop(),p=[],m=[],r._s.delete(t)}const j=(y,v="")=>{if($d in y)return y[Nc]=v,y;const I=function(){Va(r);const A=Array.from(arguments),P=[],T=[];function et(ue){P.push(ue)}function Rt(ue){T.push(ue)}ss(m,{args:A,name:I[Nc],store:ne,after:et,onError:Rt});let Oe;try{Oe=y.apply(this&&this.$id===t?this:ne,A)}catch(ue){throw ss(T,ue),ue}return Oe instanceof Promise?Oe.then(ue=>(ss(P,ue),ue)).catch(ue=>(ss(T,ue),Promise.reject(ue))):(ss(P,Oe),Oe)};return I[$d]=!0,I[Nc]=v,I},F={_p:r,$id:t,$onAction:jd.bind(null,m),$patch:O,$reset:M,$subscribe(y,v={}){const I=jd(p,y,v.detached,()=>A()),A=o.run(()=>di(()=>r.state.value[t],P=>{(v.flush==="sync"?d:u)&&y({storeId:t,type:pi.direct,events:_},P)},Kn({},l,v)));return I},$dispose:L},ne=qi(F);r._s.set(t,ne);const b=(r._a&&r._a.runWithContext||yT)(()=>r._e.run(()=>(o=Qp()).run(()=>e({action:j}))));for(const y in b){const v=b[y];if(We(v)&&!wT(v)||rr(v))i||(R&&ET(v)&&(We(v)?v.value=R[y]:dl(v,R[y])),r.state.value[t][y]=v);else if(typeof v=="function"){const I=j(v,y);b[y]=I,c.actions[y]=v}}return Kn(ne,b),Kn(Te(ne),b),Object.defineProperty(ne,"$state",{get:()=>r.state.value[t],set:y=>{O(v=>{Kn(v,y)})}}),r._p.forEach(y=>{Kn(ne,o.run(()=>y({store:ne,app:r._a,pinia:r,options:c})))}),R&&i&&n.hydrate&&n.hydrate(ne.$state,R),u=!0,d=!0,ne}/*! #__NO_SIDE_EFFECTS__ */function IT(t,e,n){let r,s;const i=typeof e=="function";r=t,s=i?n:e;function o(c,l){const u=cw();return c=c||(u?Jt(Jm,null):null),c&&Va(c),c=Ym,c._s.has(r)||(i?Zm(r,e,s,c):TT(r,s,c)),c._s.get(r)}return o.$id=r,o}/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const os=typeof document<"u";function eg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function bT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&eg(t.default)}const Re=Object.assign;function xc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Zt(s)?s.map(t):t(s)}return n}const mi=()=>{},Zt=Array.isArray,tg=/#/g,AT=/&/g,RT=/\//g,ST=/=/g,PT=/\?/g,ng=/\+/g,CT=/%5B/g,kT=/%5D/g,rg=/%5E/g,OT=/%60/g,sg=/%7B/g,DT=/%7C/g,ig=/%7D/g,NT=/%20/g;function hu(t){return encodeURI(""+t).replace(DT,"|").replace(CT,"[").replace(kT,"]")}function xT(t){return hu(t).replace(sg,"{").replace(ig,"}").replace(rg,"^")}function fl(t){return hu(t).replace(ng,"%2B").replace(NT,"+").replace(tg,"%23").replace(AT,"%26").replace(OT,"`").replace(sg,"{").replace(ig,"}").replace(rg,"^")}function VT(t){return fl(t).replace(ST,"%3D")}function MT(t){return hu(t).replace(tg,"%23").replace(PT,"%3F")}function LT(t){return t==null?"":MT(t).replace(RT,"%2F")}function Ci(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const UT=/\/$/,FT=t=>t.replace(UT,"");function Vc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=qT(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Ci(o)}}function BT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function qd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function jT(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Es(e.matched[r],n.matched[s])&&og(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Es(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function og(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!$T(t[n],e[n]))return!1;return!0}function $T(t,e){return Zt(t)?Hd(t,e):Zt(e)?Hd(e,t):t===e}function Hd(t,e){return Zt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function qT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Hn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ki;(function(t){t.pop="pop",t.push="push"})(ki||(ki={}));var gi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(gi||(gi={}));function HT(t){if(!t)if(os){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),FT(t)}const WT=/^[^#]+#/;function KT(t,e){return t.replace(WT,"#")+e}function zT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ma=()=>({left:window.scrollX,top:window.scrollY});function GT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=zT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Wd(t,e){return(history.state?history.state.position-e:-1)+t}const pl=new Map;function QT(t,e){pl.set(t,e)}function YT(t){const e=pl.get(t);return pl.delete(t),e}let JT=()=>location.protocol+"//"+location.host;function ag(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),qd(l,"")}return qd(n,t)+r+s}function XT(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const _=ag(t,location),R=n.value,S=e.value;let O=0;if(m){if(n.value=_,e.value=m,o&&o===R){o=null;return}O=S?m.position-S.position:0}else r(_);s.forEach(M=>{M(n.value,R,{delta:O,type:ki.pop,direction:O?O>0?gi.forward:gi.back:gi.unknown})})};function l(){o=n.value}function u(m){s.push(m);const _=()=>{const R=s.indexOf(m);R>-1&&s.splice(R,1)};return i.push(_),_}function d(){const{history:m}=window;m.state&&m.replaceState(Re({},m.state,{scroll:Ma()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:u,destroy:p}}function Kd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ma():null}}function ZT(t){const{history:e,location:n}=window,r={value:ag(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:JT()+t+l;try{e[d?"replaceState":"pushState"](u,"",m),s.value=u}catch(_){console.error(_),n[d?"replace":"assign"](m)}}function o(l,u){const d=Re({},e.state,Kd(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,d,!0),r.value=l}function c(l,u){const d=Re({},s.value,e.state,{forward:l,scroll:Ma()});i(d.current,d,!0);const p=Re({},Kd(r.value,l,null),{position:d.position+1},u);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function qO(t){t=HT(t);const e=ZT(t),n=XT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Re({location:"",base:t,go:r,createHref:KT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function eI(t){return typeof t=="string"||t&&typeof t=="object"}function cg(t){return typeof t=="string"||typeof t=="symbol"}const lg=Symbol("");var zd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(zd||(zd={}));function ws(t,e){return Re(new Error,{type:t,[lg]:!0},e)}function bn(t,e){return t instanceof Error&&lg in t&&(e==null||!!(t.type&e))}const Gd="[^/]+?",tI={sensitive:!1,strict:!1,start:!0,end:!0},nI=/[.+*?^${}()[\]/\\]/g;function rI(t,e){const n=Re({},tI,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let _=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(nI,"\\$&"),_+=40;else if(m.type===1){const{value:R,repeatable:S,optional:O,regexp:M}=m;i.push({name:R,repeatable:S,optional:O});const L=M||Gd;if(L!==Gd){_+=10;try{new RegExp(`(${L})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${R}" (${L}): `+F.message)}}let j=S?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;p||(j=O&&u.length<2?`(?:/${j})`:"/"+j),O&&(j+="?"),s+=j,_+=20,O&&(_+=-8),S&&(_+=-20),L===".*"&&(_+=-50)}d.push(_)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const d=u.match(o),p={};if(!d)return null;for(let m=1;m<d.length;m++){const _=d[m]||"",R=i[m-1];p[R.name]=_&&R.repeatable?_.split("/"):_}return p}function l(u){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const _ of m)if(_.type===0)d+=_.value;else if(_.type===1){const{value:R,repeatable:S,optional:O}=_,M=R in u?u[R]:"";if(Zt(M)&&!S)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const L=Zt(M)?M.join("/"):M;if(!L)if(O)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${R}"`);d+=L}}return d||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function sI(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function ug(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=sI(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Qd(r))return 1;if(Qd(s))return-1}return s.length-r.length}function Qd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const iI={type:0,value:""},oI=/[a-zA-Z0-9_]/;function aI(t){if(!t)return[[]];if(t==="/")return[[iI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",d="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&p(),o()):l===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:oI.test(l)?m():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=3:d+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function cI(t,e,n){const r=rI(aI(t.path),n),s=Re(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function lI(t,e){const n=[],r=new Map;e=Zd({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,_){const R=!_,S=Jd(p);S.aliasOf=_&&_.record;const O=Zd(e,p),M=[S];if("alias"in p){const F=typeof p.alias=="string"?[p.alias]:p.alias;for(const ne of F)M.push(Jd(Re({},S,{components:_?_.record.components:S.components,path:ne,aliasOf:_?_.record:S})))}let L,j;for(const F of M){const{path:ne}=F;if(m&&ne[0]!=="/"){const oe=m.record.path,b=oe[oe.length-1]==="/"?"":"/";F.path=m.record.path+(ne&&b+ne)}if(L=cI(F,m,O),_?_.alias.push(L):(j=j||L,j!==L&&j.alias.push(L),R&&p.name&&!Xd(L)&&o(p.name)),hg(L)&&l(L),S.children){const oe=S.children;for(let b=0;b<oe.length;b++)i(oe[b],L,_&&_.children[b])}_=_||L}return j?()=>{o(j)}:mi}function o(p){if(cg(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const m=dI(p,n);n.splice(m,0,p),p.record.name&&!Xd(p)&&r.set(p.record.name,p)}function u(p,m){let _,R={},S,O;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw ws(1,{location:p});O=_.record.name,R=Re(Yd(m.params,_.keys.filter(j=>!j.optional).concat(_.parent?_.parent.keys.filter(j=>j.optional):[]).map(j=>j.name)),p.params&&Yd(p.params,_.keys.map(j=>j.name))),S=_.stringify(R)}else if(p.path!=null)S=p.path,_=n.find(j=>j.re.test(S)),_&&(R=_.parse(S),O=_.record.name);else{if(_=m.name?r.get(m.name):n.find(j=>j.re.test(m.path)),!_)throw ws(1,{location:p,currentLocation:m});O=_.record.name,R=Re({},m.params,p.params),S=_.stringify(R)}const M=[];let L=_;for(;L;)M.unshift(L.record),L=L.parent;return{name:O,path:S,params:R,matched:M,meta:hI(M)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:c,getRecordMatcher:s}}function Yd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Jd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:uI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function uI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Xd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function hI(t){return t.reduce((e,n)=>Re(e,n.meta),{})}function Zd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function dI(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;ug(t,e[i])<0?r=i:n=i+1}const s=fI(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function fI(t){let e=t;for(;e=e.parent;)if(hg(e)&&ug(t,e)===0)return e}function hg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function pI(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(ng," "),o=i.indexOf("="),c=Ci(o<0?i:i.slice(0,o)),l=o<0?null:Ci(i.slice(o+1));if(c in e){let u=e[c];Zt(u)||(u=e[c]=[u]),u.push(l)}else e[c]=l}return e}function ef(t){let e="";for(let n in t){const r=t[n];if(n=VT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Zt(r)?r.map(i=>i&&fl(i)):[r&&fl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function mI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Zt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const gI=Symbol(""),tf=Symbol(""),La=Symbol(""),dg=Symbol(""),ml=Symbol("");function Ys(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Qn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=m=>{m===!1?l(ws(4,{from:n,to:e})):m instanceof Error?l(m):eI(m)?l(ws(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},d=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(d);t.length<3&&(p=p.then(u)),p.catch(m=>l(m))})}function Mc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(eg(l)){const d=(l.__vccOpts||l)[e];d&&i.push(Qn(d,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=bT(d)?d.default:d;o.mods[c]=d,o.components[c]=p;const _=(p.__vccOpts||p)[e];return _&&Qn(_,n,r,o,c,s)()}))}}return i}function nf(t){const e=Jt(La),n=Jt(dg),r=gt(()=>{const l=sr(t.to);return e.resolve(l)}),s=gt(()=>{const{matched:l}=r.value,{length:u}=l,d=l[u-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(Es.bind(null,d));if(m>-1)return m;const _=rf(l[u-2]);return u>1&&rf(d)===_&&p[p.length-1].path!==_?p.findIndex(Es.bind(null,l[u-2])):m}),i=gt(()=>s.value>-1&&EI(n.params,r.value.params)),o=gt(()=>s.value>-1&&s.value===n.matched.length-1&&og(n.params,r.value.params));function c(l={}){return vI(l)?e[sr(t.replace)?"replace":"push"](sr(t.to)).catch(mi):Promise.resolve()}return{route:r,href:gt(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const _I=Wr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:nf,setup(t,{slots:e}){const n=qi(nf(t)),{options:r}=Jt(La),s=gt(()=>({[sf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[sf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:zm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),yI=_I;function vI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function EI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Zt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function rf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const sf=(t,e,n)=>t??e??n,wI=Wr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Jt(ml),s=gt(()=>t.route||r.value),i=Jt(tf,0),o=gt(()=>{let u=sr(i);const{matched:d}=s.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),c=gt(()=>s.value.matched[o.value]);xo(tf,gt(()=>o.value+1)),xo(gI,c),xo(ml,s);const l=ln();return di(()=>[l.value,c.value,t.name],([u,d,p],[m,_,R])=>{d&&(d.instances[p]=u,_&&_!==d&&u&&u===m&&(d.leaveGuards.size||(d.leaveGuards=_.leaveGuards),d.updateGuards.size||(d.updateGuards=_.updateGuards))),u&&d&&(!_||!Es(d,_)||!m)&&(d.enterCallbacks[p]||[]).forEach(S=>S(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,p=c.value,m=p&&p.components[d];if(!m)return of(n.default,{Component:m,route:u});const _=p.props[d],R=_?_===!0?u.params:typeof _=="function"?_(u):_:null,O=zm(m,Re({},R,e,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(p.instances[d]=null)},ref:l}));return of(n.default,{Component:O,route:u})||O}}});function of(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const TI=wI;function HO(t){const e=lI(t.routes,t),n=t.parseQuery||pI,r=t.stringifyQuery||ef,s=t.history,i=Ys(),o=Ys(),c=Ys(),l=IE(Hn);let u=Hn;os&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=xc.bind(null,x=>""+x),p=xc.bind(null,LT),m=xc.bind(null,Ci);function _(x,X){let Q,Z;return cg(x)?(Q=e.getRecordMatcher(x),Z=X):Z=x,e.addRoute(Z,Q)}function R(x){const X=e.getRecordMatcher(x);X&&e.removeRoute(X)}function S(){return e.getRoutes().map(x=>x.record)}function O(x){return!!e.getRecordMatcher(x)}function M(x,X){if(X=Re({},X||l.value),typeof x=="string"){const w=Vc(n,x,X.path),k=e.resolve({path:w.path},X),U=s.createHref(w.fullPath);return Re(w,k,{params:m(k.params),hash:Ci(w.hash),redirectedFrom:void 0,href:U})}let Q;if(x.path!=null)Q=Re({},x,{path:Vc(n,x.path,X.path).path});else{const w=Re({},x.params);for(const k in w)w[k]==null&&delete w[k];Q=Re({},x,{params:p(w)}),X.params=p(X.params)}const Z=e.resolve(Q,X),ye=x.hash||"";Z.params=d(m(Z.params));const Pe=BT(r,Re({},x,{hash:xT(ye),path:Z.path})),E=s.createHref(Pe);return Re({fullPath:Pe,hash:ye,query:r===ef?mI(x.query):x.query||{}},Z,{redirectedFrom:void 0,href:E})}function L(x){return typeof x=="string"?Vc(n,x,l.value.path):Re({},x)}function j(x,X){if(u!==x)return ws(8,{from:X,to:x})}function F(x){return b(x)}function ne(x){return F(Re(L(x),{replace:!0}))}function oe(x){const X=x.matched[x.matched.length-1];if(X&&X.redirect){const{redirect:Q}=X;let Z=typeof Q=="function"?Q(x):Q;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=L(Z):{path:Z},Z.params={}),Re({query:x.query,hash:x.hash,params:Z.path!=null?{}:x.params},Z)}}function b(x,X){const Q=u=M(x),Z=l.value,ye=x.state,Pe=x.force,E=x.replace===!0,w=oe(Q);if(w)return b(Re(L(w),{state:typeof w=="object"?Re({},ye,w.state):ye,force:Pe,replace:E}),X||Q);const k=Q;k.redirectedFrom=X;let U;return!Pe&&jT(r,Z,Q)&&(U=ws(16,{to:k,from:Z}),jt(Z,Z,!0,!1)),(U?Promise.resolve(U):I(k,Z)).catch(N=>bn(N)?bn(N,2)?N:Gt(N):me(N,k,Z)).then(N=>{if(N){if(bn(N,2))return b(Re({replace:E},L(N.to),{state:typeof N.to=="object"?Re({},ye,N.to.state):ye,force:Pe}),X||k)}else N=P(k,Z,!0,E,ye);return A(k,Z,N),N})}function y(x,X){const Q=j(x,X);return Q?Promise.reject(Q):Promise.resolve()}function v(x){const X=Fn.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(x):x()}function I(x,X){let Q;const[Z,ye,Pe]=II(x,X);Q=Mc(Z.reverse(),"beforeRouteLeave",x,X);for(const w of Z)w.leaveGuards.forEach(k=>{Q.push(Qn(k,x,X))});const E=y.bind(null,x,X);return Q.push(E),St(Q).then(()=>{Q=[];for(const w of i.list())Q.push(Qn(w,x,X));return Q.push(E),St(Q)}).then(()=>{Q=Mc(ye,"beforeRouteUpdate",x,X);for(const w of ye)w.updateGuards.forEach(k=>{Q.push(Qn(k,x,X))});return Q.push(E),St(Q)}).then(()=>{Q=[];for(const w of Pe)if(w.beforeEnter)if(Zt(w.beforeEnter))for(const k of w.beforeEnter)Q.push(Qn(k,x,X));else Q.push(Qn(w.beforeEnter,x,X));return Q.push(E),St(Q)}).then(()=>(x.matched.forEach(w=>w.enterCallbacks={}),Q=Mc(Pe,"beforeRouteEnter",x,X,v),Q.push(E),St(Q))).then(()=>{Q=[];for(const w of o.list())Q.push(Qn(w,x,X));return Q.push(E),St(Q)}).catch(w=>bn(w,8)?w:Promise.reject(w))}function A(x,X,Q){c.list().forEach(Z=>v(()=>Z(x,X,Q)))}function P(x,X,Q,Z,ye){const Pe=j(x,X);if(Pe)return Pe;const E=X===Hn,w=os?history.state:{};Q&&(Z||E?s.replace(x.fullPath,Re({scroll:E&&w&&w.scroll},ye)):s.push(x.fullPath,ye)),l.value=x,jt(x,X,Q,E),Gt()}let T;function et(){T||(T=s.listen((x,X,Q)=>{if(!rn.listening)return;const Z=M(x),ye=oe(Z);if(ye){b(Re(ye,{replace:!0}),Z).catch(mi);return}u=Z;const Pe=l.value;os&&QT(Wd(Pe.fullPath,Q.delta),Ma()),I(Z,Pe).catch(E=>bn(E,12)?E:bn(E,2)?(b(E.to,Z).then(w=>{bn(w,20)&&!Q.delta&&Q.type===ki.pop&&s.go(-1,!1)}).catch(mi),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),me(E,Z,Pe))).then(E=>{E=E||P(Z,Pe,!1),E&&(Q.delta&&!bn(E,8)?s.go(-Q.delta,!1):Q.type===ki.pop&&bn(E,20)&&s.go(-1,!1)),A(Z,Pe,E)}).catch(mi)}))}let Rt=Ys(),Oe=Ys(),ue;function me(x,X,Q){Gt(x);const Z=Oe.list();return Z.length?Z.forEach(ye=>ye(x,X,Q)):console.error(x),Promise.reject(x)}function xt(){return ue&&l.value!==Hn?Promise.resolve():new Promise((x,X)=>{Rt.add([x,X])})}function Gt(x){return ue||(ue=!x,et(),Rt.list().forEach(([X,Q])=>x?Q(x):X()),Rt.reset()),x}function jt(x,X,Q,Z){const{scrollBehavior:ye}=t;if(!os||!ye)return Promise.resolve();const Pe=!Q&&YT(Wd(x.fullPath,0))||(Z||!Q)&&history.state&&history.state.scroll||null;return ka().then(()=>ye(x,X,Pe)).then(E=>E&&GT(E)).catch(E=>me(E,x,X))}const Le=x=>s.go(x);let Ue;const Fn=new Set,rn={currentRoute:l,listening:!0,addRoute:_,removeRoute:R,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:S,resolve:M,options:t,push:F,replace:ne,go:Le,back:()=>Le(-1),forward:()=>Le(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Oe.add,isReady:xt,install(x){const X=this;x.component("RouterLink",yI),x.component("RouterView",TI),x.config.globalProperties.$router=X,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>sr(l)}),os&&!Ue&&l.value===Hn&&(Ue=!0,F(s.location).catch(ye=>{}));const Q={};for(const ye in Hn)Object.defineProperty(Q,ye,{get:()=>l.value[ye],enumerable:!0});x.provide(La,X),x.provide(dg,hm(Q)),x.provide(ml,l);const Z=x.unmount;Fn.add(x),x.unmount=function(){Fn.delete(x),Fn.size<1&&(u=Hn,T&&T(),T=null,l.value=Hn,Ue=!1,ue=!1),Z()}}};function St(x){return x.reduce((X,Q)=>X.then(()=>v(Q)),Promise.resolve())}return rn}function II(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>Es(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>Es(u,l))||s.push(l))}return[n,r,s]}function bI(){return Jt(La)}var af={};/**
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
 */const fg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},AI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},pg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|u>>6,_=u&63;l||(_=64,o||(m=64)),r.push(n[d],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(fg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):AI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new RI;const m=i<<2|c>>4;if(r.push(m),u!==64){const _=c<<4&240|u>>2;if(r.push(_),p!==64){const R=u<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class RI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const SI=function(t){const e=fg(t);return pg.encodeByteArray(e,!0)},sa=function(t){return SI(t).replace(/\./g,"")},mg=function(t){try{return pg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function PI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const CI=()=>PI().__FIREBASE_DEFAULTS__,kI=()=>{if(typeof process>"u"||typeof af>"u")return;const t=af.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},OI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&mg(t[1]);return e&&JSON.parse(e)},Ua=()=>{try{return CI()||kI()||OI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},gg=t=>{var e,n;return(n=(e=Ua())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_g=t=>{const e=gg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},yg=()=>{var t;return(t=Ua())===null||t===void 0?void 0:t.config},vg=t=>{var e;return(e=Ua())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class DI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Eg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[sa(JSON.stringify(n)),sa(JSON.stringify(o)),""].join(".")}/**
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
 */function _t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function NI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function xI(){var t;const e=(t=Ua())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function VI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function wg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function MI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function LI(){const t=_t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function UI(){return!xI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Tg(){try{return typeof indexedDB=="object"}catch{return!1}}function Ig(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function FI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const BI="FirebaseError";class zt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=BI,Object.setPrototypeOf(this,zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Kr.prototype.create)}}class Kr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?jI(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new zt(s,c,r)}}function jI(t,e){return t.replace($I,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const $I=/\{\$([^}]+)}/g;function qI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Oi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(cf(i)&&cf(o)){if(!Oi(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function cf(t){return t!==null&&typeof t=="object"}/**
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
 */function Ki(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ei(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ti(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function HI(t,e){const n=new WI(t,e);return n.subscribe.bind(n)}class WI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");KI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Lc),s.error===void 0&&(s.error=Lc),s.complete===void 0&&(s.complete=Lc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function KI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Lc(){}/**
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
 */const zI=1e3,GI=2,QI=4*60*60*1e3,YI=.5;function lf(t,e=zI,n=GI){const r=e*Math.pow(n,t),s=Math.round(YI*r*(Math.random()-.5)*2);return Math.min(QI,r+s)}/**
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
 */function Me(t){return t&&t._delegate?t._delegate:t}class Kt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ar="[DEFAULT]";/**
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
 */class JI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new DI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ZI(e))try{this.getOrInitializeService({instanceIdentifier:Ar})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ar){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ar){return this.instances.has(e)}getOptions(e=Ar){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:XI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ar){return this.component?this.component.multipleInstances?e:Ar:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function XI(t){return t===Ar?void 0:t}function ZI(t){return t.instantiationMode==="EAGER"}/**
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
 */class e0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new JI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const t0={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},n0=_e.INFO,r0={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},s0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=r0[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fa{constructor(e){this.name=e,this._logLevel=n0,this._logHandler=s0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?t0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const i0=(t,e)=>e.some(n=>t instanceof n);let uf,hf;function o0(){return uf||(uf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function a0(){return hf||(hf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bg=new WeakMap,gl=new WeakMap,Ag=new WeakMap,Uc=new WeakMap,du=new WeakMap;function c0(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ir(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&bg.set(n,t)}).catch(()=>{}),du.set(e,t),e}function l0(t){if(gl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});gl.set(t,e)}let _l={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ag.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ir(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function u0(t){_l=t(_l)}function h0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Fc(this),e,...n);return Ag.set(r,e.sort?e.sort():[e]),ir(r)}:a0().includes(t)?function(...e){return t.apply(Fc(this),e),ir(bg.get(this))}:function(...e){return ir(t.apply(Fc(this),e))}}function d0(t){return typeof t=="function"?h0(t):(t instanceof IDBTransaction&&l0(t),i0(t,o0())?new Proxy(t,_l):t)}function ir(t){if(t instanceof IDBRequest)return c0(t);if(Uc.has(t))return Uc.get(t);const e=d0(t);return e!==t&&(Uc.set(t,e),du.set(e,t)),e}const Fc=t=>du.get(t);function Rg(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=ir(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ir(o.result),l.oldVersion,l.newVersion,ir(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const f0=["get","getKey","getAll","getAllKeys","count"],p0=["put","add","delete","clear"],Bc=new Map;function df(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Bc.get(e))return Bc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=p0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||f0.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return Bc.set(e,i),i}u0(t=>({...t,get:(e,n,r)=>df(e,n)||t.get(e,n,r),has:(e,n)=>!!df(e,n)||t.has(e,n)}));/**
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
 */class m0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(g0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function g0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yl="@firebase/app",ff="0.10.13";/**
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
 */const Nn=new Fa("@firebase/app"),_0="@firebase/app-compat",y0="@firebase/analytics-compat",v0="@firebase/analytics",E0="@firebase/app-check-compat",w0="@firebase/app-check",T0="@firebase/auth",I0="@firebase/auth-compat",b0="@firebase/database",A0="@firebase/data-connect",R0="@firebase/database-compat",S0="@firebase/functions",P0="@firebase/functions-compat",C0="@firebase/installations",k0="@firebase/installations-compat",O0="@firebase/messaging",D0="@firebase/messaging-compat",N0="@firebase/performance",x0="@firebase/performance-compat",V0="@firebase/remote-config",M0="@firebase/remote-config-compat",L0="@firebase/storage",U0="@firebase/storage-compat",F0="@firebase/firestore",B0="@firebase/vertexai-preview",j0="@firebase/firestore-compat",$0="firebase",q0="10.14.1";/**
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
 */const vl="[DEFAULT]",H0={[yl]:"fire-core",[_0]:"fire-core-compat",[v0]:"fire-analytics",[y0]:"fire-analytics-compat",[w0]:"fire-app-check",[E0]:"fire-app-check-compat",[T0]:"fire-auth",[I0]:"fire-auth-compat",[b0]:"fire-rtdb",[A0]:"fire-data-connect",[R0]:"fire-rtdb-compat",[S0]:"fire-fn",[P0]:"fire-fn-compat",[C0]:"fire-iid",[k0]:"fire-iid-compat",[O0]:"fire-fcm",[D0]:"fire-fcm-compat",[N0]:"fire-perf",[x0]:"fire-perf-compat",[V0]:"fire-rc",[M0]:"fire-rc-compat",[L0]:"fire-gcs",[U0]:"fire-gcs-compat",[F0]:"fire-fst",[j0]:"fire-fst-compat",[B0]:"fire-vertex","fire-js":"fire-js",[$0]:"fire-js-all"};/**
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
 */const Di=new Map,W0=new Map,El=new Map;function pf(t,e){try{t.container.addComponent(e)}catch(n){Nn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function en(t){const e=t.name;if(El.has(e))return Nn.debug(`There were multiple attempts to register component ${e}.`),!1;El.set(e,t);for(const n of Di.values())pf(n,t);for(const n of W0.values())pf(n,t);return!0}function pr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function un(t){return t.settings!==void 0}/**
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
 */const K0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},or=new Kr("app","Firebase",K0);/**
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
 */class z0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Kt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw or.create("app-deleted",{appName:this._name})}}/**
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
 */const zr=q0;function Sg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:vl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw or.create("bad-app-name",{appName:String(s)});if(n||(n=yg()),!n)throw or.create("no-options");const i=Di.get(s);if(i){if(Oi(n,i.options)&&Oi(r,i.config))return i;throw or.create("duplicate-app",{appName:s})}const o=new e0(s);for(const l of El.values())o.addComponent(l);const c=new z0(n,r,o);return Di.set(s,c),c}function Ba(t=vl){const e=Di.get(t);if(!e&&t===vl&&yg())return Sg();if(!e)throw or.create("no-app",{appName:t});return e}function mf(){return Array.from(Di.values())}function Dt(t,e,n){var r;let s=(r=H0[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nn.warn(c.join(" "));return}en(new Kt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const G0="firebase-heartbeat-database",Q0=1,Ni="firebase-heartbeat-store";let jc=null;function Pg(){return jc||(jc=Rg(G0,Q0,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ni)}catch(n){console.warn(n)}}}}).catch(t=>{throw or.create("idb-open",{originalErrorMessage:t.message})})),jc}async function Y0(t){try{const n=(await Pg()).transaction(Ni),r=await n.objectStore(Ni).get(Cg(t));return await n.done,r}catch(e){if(e instanceof zt)Nn.warn(e.message);else{const n=or.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Nn.warn(n.message)}}}async function gf(t,e){try{const r=(await Pg()).transaction(Ni,"readwrite");await r.objectStore(Ni).put(e,Cg(t)),await r.done}catch(n){if(n instanceof zt)Nn.warn(n.message);else{const r=or.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Nn.warn(r.message)}}}function Cg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const J0=1024,X0=30*24*60*60*1e3;class Z0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=_f();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=X0}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Nn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=_f(),{heartbeatsToSend:r,unsentEntries:s}=eb(this._heartbeatsCache.heartbeats),i=sa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Nn.warn(n),""}}}function _f(){return new Date().toISOString().substring(0,10)}function eb(t,e=J0){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),yf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),yf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class tb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Tg()?Ig().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Y0(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return gf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return gf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function yf(t){return sa(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function nb(t){en(new Kt("platform-logger",e=>new m0(e),"PRIVATE")),en(new Kt("heartbeat",e=>new Z0(e),"PRIVATE")),Dt(yl,ff,t),Dt(yl,ff,"esm2017"),Dt("fire-js","")}nb("");function fu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function kg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rb=kg,Og=new Kr("auth","Firebase",kg());/**
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
 */const ia=new Fa("@firebase/auth");function sb(t,...e){ia.logLevel<=_e.WARN&&ia.warn(`Auth (${zr}): ${t}`,...e)}function Fo(t,...e){ia.logLevel<=_e.ERROR&&ia.error(`Auth (${zr}): ${t}`,...e)}/**
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
 */function tn(t,...e){throw pu(t,...e)}function fn(t,...e){return pu(t,...e)}function Dg(t,e,n){const r=Object.assign(Object.assign({},rb()),{[e]:n});return new Kr("auth","Firebase",r).create(e,{appName:t.name})}function On(t){return Dg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function pu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Og.create(t,...e)}function le(t,e,...n){if(!t)throw pu(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Fo(e),new Error(e)}function xn(t,e){t||Pn(e)}/**
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
 */function wl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ib(){return vf()==="http:"||vf()==="https:"}function vf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function ob(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ib()||wg()||"connection"in navigator)?navigator.onLine:!0}function ab(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class zi{constructor(e,n){this.shortDelay=e,this.longDelay=n,xn(n>e,"Short delay should be less than long delay!"),this.isMobile=NI()||MI()}get(){return ob()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function mu(t,e){xn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ng{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const cb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const lb=new zi(3e4,6e4);function mr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Un(t,e,n,r,s={}){return xg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Ki(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},i);return VI()||(u.referrerPolicy="no-referrer"),Ng.fetch()(Vg(t,t.config.apiHost,n,c),u)})}async function xg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},cb),e);try{const s=new hb(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw bo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw bo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw bo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw bo(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Dg(t,d,u);tn(t,d)}}catch(s){if(s instanceof zt)throw s;tn(t,"network-request-failed",{message:String(s)})}}async function Gi(t,e,n,r,s={}){const i=await Un(t,e,n,r,s);return"mfaPendingCredential"in i&&tn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Vg(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?mu(t.config,s):`${t.config.apiScheme}://${s}`}function ub(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class hb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(fn(this.auth,"network-request-failed")),lb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function bo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=fn(t,e,r);return s.customData._tokenResponse=n,s}function Ef(t){return t!==void 0&&t.enterprise!==void 0}class db{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ub(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function fb(t,e){return Un(t,"GET","/v2/recaptchaConfig",mr(t,e))}/**
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
 */async function pb(t,e){return Un(t,"POST","/v1/accounts:delete",e)}async function Mg(t,e){return Un(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function _i(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mb(t,e=!1){const n=Me(t),r=await n.getIdToken(e),s=gu(r);le(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:_i($c(s.auth_time)),issuedAtTime:_i($c(s.iat)),expirationTime:_i($c(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function $c(t){return Number(t)*1e3}function gu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Fo("JWT malformed, contained fewer than 3 sections"),null;try{const s=mg(n);return s?JSON.parse(s):(Fo("Failed to decode base64 JWT payload"),null)}catch(s){return Fo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function wf(t){const e=gu(t);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ts(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof zt&&gb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function gb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class _b{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Tl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_i(this.lastLoginAt),this.creationTime=_i(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function oa(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ts(t,Mg(n,{idToken:r}));le(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Lg(i.providerUserInfo):[],c=vb(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Tl(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function yb(t){const e=Me(t);await oa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Lg(t){return t.map(e=>{var{providerId:n}=e,r=fu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Eb(t,e){const n=await xg(t,{},async()=>{const r=Ki({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Vg(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Ng.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function wb(t,e){return Un(t,"POST","/v2/accounts:revokeToken",mr(t,e))}/**
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
 */class ms{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){le(e.length!==0,"internal-error");const n=wf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Eb(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ms;return r&&(le(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(le(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(le(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ms,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
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
 */function Wn(t,e){le(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Cn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=fu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _b(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Tl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ts(this,this.stsTokenManager.getToken(this.auth,e));return le(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return mb(this,e)}reload(){return yb(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Cn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await oa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(un(this.auth.app))return Promise.reject(On(this.auth));const e=await this.getIdToken();return await Ts(this,pb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(c=n.tenantId)!==null&&c!==void 0?c:void 0,O=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,M=(u=n.createdAt)!==null&&u!==void 0?u:void 0,L=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:j,emailVerified:F,isAnonymous:ne,providerData:oe,stsTokenManager:b}=n;le(j&&b,e,"internal-error");const y=ms.fromJSON(this.name,b);le(typeof j=="string",e,"internal-error"),Wn(p,e.name),Wn(m,e.name),le(typeof F=="boolean",e,"internal-error"),le(typeof ne=="boolean",e,"internal-error"),Wn(_,e.name),Wn(R,e.name),Wn(S,e.name),Wn(O,e.name),Wn(M,e.name),Wn(L,e.name);const v=new Cn({uid:j,auth:e,email:m,emailVerified:F,displayName:p,isAnonymous:ne,photoURL:R,phoneNumber:_,tenantId:S,stsTokenManager:y,createdAt:M,lastLoginAt:L});return oe&&Array.isArray(oe)&&(v.providerData=oe.map(I=>Object.assign({},I))),O&&(v._redirectEventId=O),v}static async _fromIdTokenResponse(e,n,r=!1){const s=new ms;s.updateFromServerResponse(n);const i=new Cn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await oa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];le(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Lg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new ms;c.updateFromIdToken(r);const l=new Cn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Tl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
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
 */const Tf=new Map;function kn(t){xn(t instanceof Function,"Expected a class definition");let e=Tf.get(t);return e?(xn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Tf.set(t,e),e)}/**
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
 */class Ug{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ug.type="NONE";const If=Ug;/**
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
 */function Bo(t,e,n){return`firebase:${t}:${e}:${n}`}class gs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Bo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Bo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new gs(kn(If),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||kn(If);const o=Bo(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const d=await u._get(o);if(d){const p=Cn._fromJSON(e,d);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new gs(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new gs(i,e,r))}}/**
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
 */function bf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($g(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hg(e))return"Blackberry";if(Wg(e))return"Webos";if(Bg(e))return"Safari";if((e.includes("chrome/")||jg(e))&&!e.includes("edge/"))return"Chrome";if(qg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Fg(t=_t()){return/firefox\//i.test(t)}function Bg(t=_t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jg(t=_t()){return/crios\//i.test(t)}function $g(t=_t()){return/iemobile/i.test(t)}function qg(t=_t()){return/android/i.test(t)}function Hg(t=_t()){return/blackberry/i.test(t)}function Wg(t=_t()){return/webos/i.test(t)}function _u(t=_t()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Tb(t=_t()){var e;return _u(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ib(){return LI()&&document.documentMode===10}function Kg(t=_t()){return _u(t)||qg(t)||Wg(t)||Hg(t)||/windows phone/i.test(t)||$g(t)}/**
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
 */function zg(t,e=[]){let n;switch(t){case"Browser":n=bf(_t());break;case"Worker":n=`${bf(_t())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${zr}/${r}`}/**
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
 */class bb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function Ab(t,e={}){return Un(t,"GET","/v2/passwordPolicy",mr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const Rb=6;class Sb{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Rb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Pb{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Af(this),this.idTokenSubscription=new Af(this),this.beforeStateQueue=new bb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Og,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await gs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Mg(this,{idToken:e}),r=await Cn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(un(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await oa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ab()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(un(this.app))return Promise.reject(On(this));const n=e?Me(e):null;return n&&le(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return un(this.app)?Promise.reject(On(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return un(this.app)?Promise.reject(On(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ab(this),n=new Sb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Kr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await wb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kn(e)||this._popupRedirectResolver;le(n,this,"argument-error"),this.redirectPersistenceManager=await gs.create(this,[kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&sb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Gr(t){return Me(t)}class Af{constructor(e){this.auth=e,this.observer=null,this.addObserver=HI(n=>this.observer=n)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ja={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Cb(t){ja=t}function Gg(t){return ja.loadJS(t)}function kb(){return ja.recaptchaEnterpriseScript}function Ob(){return ja.gapiScript}function Db(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Nb="recaptcha-enterprise",xb="NO_RECAPTCHA";class Vb{constructor(e){this.type=Nb,this.auth=Gr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{fb(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new db(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Ef(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(xb)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Ef(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=kb();l.length!==0&&(l+=c),Gg(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function Rf(t,e,n,r=!1){const s=new Vb(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Il(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Rf(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Rf(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function Mb(t,e){const n=pr(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Oi(i,e??{}))return s;tn(s,"already-initialized")}return n.initialize({options:e})}function Lb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ub(t,e,n){const r=Gr(t);le(r._canInitEmulator,r,"emulator-config-failed"),le(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Qg(e),{host:o,port:c}=Fb(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Bb()}function Qg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Fb(t){const e=Qg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Sf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Sf(o)}}}function Sf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Bb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class yu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}async function jb(t,e){return Un(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function $b(t,e){return Gi(t,"POST","/v1/accounts:signInWithPassword",mr(t,e))}/**
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
 */async function qb(t,e){return Gi(t,"POST","/v1/accounts:signInWithEmailLink",mr(t,e))}async function Hb(t,e){return Gi(t,"POST","/v1/accounts:signInWithEmailLink",mr(t,e))}/**
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
 */class xi extends yu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new xi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new xi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Il(e,n,"signInWithPassword",$b);case"emailLink":return qb(e,{email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Il(e,r,"signUpPassword",jb);case"emailLink":return Hb(e,{idToken:n,email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function _s(t,e){return Gi(t,"POST","/v1/accounts:signInWithIdp",mr(t,e))}/**
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
 */const Wb="http://localhost";class Mr extends yu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Mr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=fu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Mr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _s(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,_s(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_s(e,n)}buildRequest(){const e={requestUri:Wb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ki(n)}return e}}/**
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
 */function Kb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function zb(t){const e=ei(ti(t)).link,n=e?ei(ti(e)).deep_link_id:null,r=ei(ti(t)).deep_link_id;return(r?ei(ti(r)).link:null)||r||n||e||t}class vu{constructor(e){var n,r,s,i,o,c;const l=ei(ti(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,p=Kb((s=l.mode)!==null&&s!==void 0?s:null);le(u&&d&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=d,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=zb(e);try{return new vu(n)}catch{return null}}}/**
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
 */class ks{constructor(){this.providerId=ks.PROVIDER_ID}static credential(e,n){return xi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=vu.parseLink(n);return le(r,"argument-error"),xi._fromEmailAndCode(e,r.code,r.tenantId)}}ks.PROVIDER_ID="password";ks.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ks.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Yg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Qi extends Yg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Yn extends Qi{constructor(){super("facebook.com")}static credential(e){return Mr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yn.PROVIDER_ID="facebook.com";/**
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
 */class Jn extends Qi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Mr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.GOOGLE_SIGN_IN_METHOD="google.com";Jn.PROVIDER_ID="google.com";/**
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
 */class Xn extends Qi{constructor(){super("github.com")}static credential(e){return Mr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.GITHUB_SIGN_IN_METHOD="github.com";Xn.PROVIDER_ID="github.com";/**
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
 */class Zn extends Qi{constructor(){super("twitter.com")}static credential(e,n){return Mr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.TWITTER_SIGN_IN_METHOD="twitter.com";Zn.PROVIDER_ID="twitter.com";/**
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
 */async function Gb(t,e){return Gi(t,"POST","/v1/accounts:signUp",mr(t,e))}/**
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
 */class Lr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Cn._fromIdTokenResponse(e,r,s),o=Pf(r);return new Lr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Pf(r);return new Lr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Pf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class aa extends zt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,aa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new aa(e,n,r,s)}}function Jg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?aa._fromErrorAndOperation(t,i,e,r):i})}async function Qb(t,e,n=!1){const r=await Ts(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Lr._forOperation(t,"link",r)}/**
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
 */async function Yb(t,e,n=!1){const{auth:r}=t;if(un(r.app))return Promise.reject(On(r));const s="reauthenticate";try{const i=await Ts(t,Jg(r,s,e,t),n);le(i.idToken,r,"internal-error");const o=gu(i.idToken);le(o,r,"internal-error");const{sub:c}=o;return le(t.uid===c,r,"user-mismatch"),Lr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&tn(r,"user-mismatch"),i}}/**
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
 */async function Xg(t,e,n=!1){if(un(t.app))return Promise.reject(On(t));const r="signIn",s=await Jg(t,r,e),i=await Lr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Jb(t,e){return Xg(Gr(t),e)}/**
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
 */async function Zg(t){const e=Gr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function e_(t,e,n){if(un(t.app))return Promise.reject(On(t));const r=Gr(t),o=await Il(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Gb).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Zg(t),l}),c=await Lr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function t_(t,e,n){return un(t.app)?Promise.reject(On(t)):Jb(Me(t),ks.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Zg(t),r})}/**
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
 */async function Xb(t,e){return Un(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Eu(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Me(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ts(r,Xb(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const c=r.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Zb(t,e,n,r){return Me(t).onIdTokenChanged(e,n,r)}function eA(t,e,n){return Me(t).beforeAuthStateChanged(e,n)}function tA(t,e,n,r){return Me(t).onAuthStateChanged(e,n,r)}function nA(t){return Me(t).signOut()}const ca="__sak";/**
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
 */class n_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ca,"1"),this.storage.removeItem(ca),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const rA=1e3,sA=10;class r_ extends n_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Kg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Ib()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,sA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},rA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}r_.type="LOCAL";const iA=r_;/**
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
 */class s_ extends n_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}s_.type="SESSION";const i_=s_;/**
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
 */function oA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class $a{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new $a(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await oA(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$a.receivers=[];/**
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
 */function wu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class aA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=wu("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function pn(){return window}function cA(t){pn().location.href=t}/**
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
 */function o_(){return typeof pn().WorkerGlobalScope<"u"&&typeof pn().importScripts=="function"}async function lA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function uA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function hA(){return o_()?self:null}/**
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
 */const a_="firebaseLocalStorageDb",dA=1,la="firebaseLocalStorage",c_="fbase_key";class Yi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function qa(t,e){return t.transaction([la],e?"readwrite":"readonly").objectStore(la)}function fA(){const t=indexedDB.deleteDatabase(a_);return new Yi(t).toPromise()}function bl(){const t=indexedDB.open(a_,dA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(la,{keyPath:c_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(la)?e(r):(r.close(),await fA(),e(await bl()))})})}async function Cf(t,e,n){const r=qa(t,!0).put({[c_]:e,value:n});return new Yi(r).toPromise()}async function pA(t,e){const n=qa(t,!1).get(e),r=await new Yi(n).toPromise();return r===void 0?null:r.value}function kf(t,e){const n=qa(t,!0).delete(e);return new Yi(n).toPromise()}const mA=800,gA=3;class l_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>gA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return o_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$a._getInstance(hA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await lA(),!this.activeServiceWorker)return;this.sender=new aA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||uA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bl();return await Cf(e,ca,"1"),await kf(e,ca),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Cf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>pA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>kf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=qa(s,!1).getAll();return new Yi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}l_.type="LOCAL";const _A=l_;new zi(3e4,6e4);/**
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
 */function yA(t,e){return e?kn(e):(le(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Tu extends yu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _s(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _s(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _s(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function vA(t){return Xg(t.auth,new Tu(t),t.bypassAuthState)}function EA(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),Yb(n,new Tu(t),t.bypassAuthState)}async function wA(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),Qb(n,new Tu(t),t.bypassAuthState)}/**
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
 */class u_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vA;case"linkViaPopup":case"linkViaRedirect":return wA;case"reauthViaPopup":case"reauthViaRedirect":return EA;default:tn(this.auth,"internal-error")}}resolve(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const TA=new zi(2e3,1e4);class us extends u_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,us.currentPopupAction&&us.currentPopupAction.cancel(),us.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){xn(this.filter.length===1,"Popup operations only handle one event");const e=wu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,us.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,TA.get())};e()}}us.currentPopupAction=null;/**
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
 */const IA="pendingRedirect",jo=new Map;class bA extends u_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=jo.get(this.auth._key());if(!e){try{const r=await AA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}jo.set(this.auth._key(),e)}return this.bypassAuthState||jo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function AA(t,e){const n=PA(e),r=SA(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function RA(t,e){jo.set(t._key(),e)}function SA(t){return kn(t._redirectPersistence)}function PA(t){return Bo(IA,t.config.apiKey,t.name)}async function CA(t,e,n=!1){if(un(t.app))return Promise.reject(On(t));const r=Gr(t),s=yA(r,e),o=await new bA(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const kA=10*60*1e3;class OA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!DA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!h_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(fn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Of(e))}saveEventToCache(e){this.cachedEventUids.add(Of(e)),this.lastProcessedEventTime=Date.now()}}function Of(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function h_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function DA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return h_(t);default:return!1}}/**
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
 */async function NA(t,e={}){return Un(t,"GET","/v1/projects",e)}/**
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
 */const xA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,VA=/^https?/;async function MA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await NA(t);for(const n of e)try{if(LA(n))return}catch{}tn(t,"unauthorized-domain")}function LA(t){const e=wl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!VA.test(n))return!1;if(xA.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const UA=new zi(3e4,6e4);function Df(){const t=pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function FA(t){return new Promise((e,n)=>{var r,s,i;function o(){Df(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Df(),n(fn(t,"network-request-failed"))},timeout:UA.get()})}if(!((s=(r=pn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=pn().gapi)===null||i===void 0)&&i.load)o();else{const c=Db("iframefcb");return pn()[c]=()=>{gapi.load?o():n(fn(t,"network-request-failed"))},Gg(`${Ob()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw $o=null,e})}let $o=null;function BA(t){return $o=$o||FA(t),$o}/**
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
 */const jA=new zi(5e3,15e3),$A="__/auth/iframe",qA="emulator/auth/iframe",HA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function KA(t){const e=t.config;le(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?mu(e,qA):`https://${t.config.authDomain}/${$A}`,r={apiKey:e.apiKey,appName:t.name,v:zr},s=WA.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ki(r).slice(1)}`}async function zA(t){const e=await BA(t),n=pn().gapi;return le(n,t,"internal-error"),e.open({where:document.body,url:KA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=fn(t,"network-request-failed"),c=pn().setTimeout(()=>{i(o)},jA.get());function l(){pn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const GA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},QA=500,YA=600,JA="_blank",XA="http://localhost";class Nf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ZA(t,e,n,r=QA,s=YA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},GA),{width:r.toString(),height:s.toString(),top:i,left:o}),u=_t().toLowerCase();n&&(c=jg(u)?JA:n),Fg(u)&&(e=e||XA,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[_,R])=>`${m}${_}=${R},`,"");if(Tb(u)&&c!=="_self")return eR(e||"",c),new Nf(null);const p=window.open(e||"",c,d);le(p,t,"popup-blocked");try{p.focus()}catch{}return new Nf(p)}function eR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const tR="__/auth/handler",nR="emulator/auth/handler",rR=encodeURIComponent("fac");async function xf(t,e,n,r,s,i){le(t.config.authDomain,t,"auth-domain-config-required"),le(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:zr,eventId:s};if(e instanceof Yg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",qI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Qi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await t._getAppCheckToken(),u=l?`#${rR}=${encodeURIComponent(l)}`:"";return`${sR(t)}?${Ki(c).slice(1)}${u}`}function sR({config:t}){return t.emulator?mu(t,nR):`https://${t.authDomain}/${tR}`}/**
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
 */const qc="webStorageSupport";class iR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=i_,this._completeRedirectFn=CA,this._overrideRedirectResult=RA}async _openPopup(e,n,r,s){var i;xn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await xf(e,n,r,wl(),s);return ZA(e,o,wu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await xf(e,n,r,wl(),s);return cA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(xn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await zA(e),r=new OA(e);return n.register("authEvent",s=>(le(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qc,{type:qc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[qc];o!==void 0&&n(!!o),tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=MA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Kg()||Bg()||_u()}}const oR=iR;var Vf="@firebase/auth",Mf="1.7.9";/**
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
 */class aR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function cR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function lR(t){en(new Kt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;le(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zg(t)},u=new Pb(r,s,i,l);return Lb(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),en(new Kt("auth-internal",e=>{const n=Gr(e.getProvider("auth").getImmediate());return(r=>new aR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dt(Vf,Mf,cR(t)),Dt(Vf,Mf,"esm2017")}/**
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
 */const uR=5*60,hR=vg("authIdTokenMaxAge")||uR;let Lf=null;const dR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>hR)return;const s=n==null?void 0:n.token;Lf!==s&&(Lf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function fR(t=Ba()){const e=pr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Mb(t,{popupRedirectResolver:oR,persistence:[_A,iA,i_]}),r=vg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=dR(i.toString());eA(n,o,()=>o(n.currentUser)),Zb(n,c=>o(c))}}const s=gg("auth");return s&&Ub(n,`http://${s}`),n}function pR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Cb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=fn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",pR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});lR("Browser");var Uf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dr,d_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,y){function v(){}v.prototype=y.prototype,b.D=y.prototype,b.prototype=new v,b.prototype.constructor=b,b.C=function(I,A,P){for(var T=Array(arguments.length-2),et=2;et<arguments.length;et++)T[et-2]=arguments[et];return y.prototype[A].apply(I,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,y,v){v||(v=0);var I=Array(16);if(typeof y=="string")for(var A=0;16>A;++A)I[A]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(A=0;16>A;++A)I[A]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=b.g[0],v=b.g[1],A=b.g[2];var P=b.g[3],T=y+(P^v&(A^P))+I[0]+3614090360&4294967295;y=v+(T<<7&4294967295|T>>>25),T=P+(A^y&(v^A))+I[1]+3905402710&4294967295,P=y+(T<<12&4294967295|T>>>20),T=A+(v^P&(y^v))+I[2]+606105819&4294967295,A=P+(T<<17&4294967295|T>>>15),T=v+(y^A&(P^y))+I[3]+3250441966&4294967295,v=A+(T<<22&4294967295|T>>>10),T=y+(P^v&(A^P))+I[4]+4118548399&4294967295,y=v+(T<<7&4294967295|T>>>25),T=P+(A^y&(v^A))+I[5]+1200080426&4294967295,P=y+(T<<12&4294967295|T>>>20),T=A+(v^P&(y^v))+I[6]+2821735955&4294967295,A=P+(T<<17&4294967295|T>>>15),T=v+(y^A&(P^y))+I[7]+4249261313&4294967295,v=A+(T<<22&4294967295|T>>>10),T=y+(P^v&(A^P))+I[8]+1770035416&4294967295,y=v+(T<<7&4294967295|T>>>25),T=P+(A^y&(v^A))+I[9]+2336552879&4294967295,P=y+(T<<12&4294967295|T>>>20),T=A+(v^P&(y^v))+I[10]+4294925233&4294967295,A=P+(T<<17&4294967295|T>>>15),T=v+(y^A&(P^y))+I[11]+2304563134&4294967295,v=A+(T<<22&4294967295|T>>>10),T=y+(P^v&(A^P))+I[12]+1804603682&4294967295,y=v+(T<<7&4294967295|T>>>25),T=P+(A^y&(v^A))+I[13]+4254626195&4294967295,P=y+(T<<12&4294967295|T>>>20),T=A+(v^P&(y^v))+I[14]+2792965006&4294967295,A=P+(T<<17&4294967295|T>>>15),T=v+(y^A&(P^y))+I[15]+1236535329&4294967295,v=A+(T<<22&4294967295|T>>>10),T=y+(A^P&(v^A))+I[1]+4129170786&4294967295,y=v+(T<<5&4294967295|T>>>27),T=P+(v^A&(y^v))+I[6]+3225465664&4294967295,P=y+(T<<9&4294967295|T>>>23),T=A+(y^v&(P^y))+I[11]+643717713&4294967295,A=P+(T<<14&4294967295|T>>>18),T=v+(P^y&(A^P))+I[0]+3921069994&4294967295,v=A+(T<<20&4294967295|T>>>12),T=y+(A^P&(v^A))+I[5]+3593408605&4294967295,y=v+(T<<5&4294967295|T>>>27),T=P+(v^A&(y^v))+I[10]+38016083&4294967295,P=y+(T<<9&4294967295|T>>>23),T=A+(y^v&(P^y))+I[15]+3634488961&4294967295,A=P+(T<<14&4294967295|T>>>18),T=v+(P^y&(A^P))+I[4]+3889429448&4294967295,v=A+(T<<20&4294967295|T>>>12),T=y+(A^P&(v^A))+I[9]+568446438&4294967295,y=v+(T<<5&4294967295|T>>>27),T=P+(v^A&(y^v))+I[14]+3275163606&4294967295,P=y+(T<<9&4294967295|T>>>23),T=A+(y^v&(P^y))+I[3]+4107603335&4294967295,A=P+(T<<14&4294967295|T>>>18),T=v+(P^y&(A^P))+I[8]+1163531501&4294967295,v=A+(T<<20&4294967295|T>>>12),T=y+(A^P&(v^A))+I[13]+2850285829&4294967295,y=v+(T<<5&4294967295|T>>>27),T=P+(v^A&(y^v))+I[2]+4243563512&4294967295,P=y+(T<<9&4294967295|T>>>23),T=A+(y^v&(P^y))+I[7]+1735328473&4294967295,A=P+(T<<14&4294967295|T>>>18),T=v+(P^y&(A^P))+I[12]+2368359562&4294967295,v=A+(T<<20&4294967295|T>>>12),T=y+(v^A^P)+I[5]+4294588738&4294967295,y=v+(T<<4&4294967295|T>>>28),T=P+(y^v^A)+I[8]+2272392833&4294967295,P=y+(T<<11&4294967295|T>>>21),T=A+(P^y^v)+I[11]+1839030562&4294967295,A=P+(T<<16&4294967295|T>>>16),T=v+(A^P^y)+I[14]+4259657740&4294967295,v=A+(T<<23&4294967295|T>>>9),T=y+(v^A^P)+I[1]+2763975236&4294967295,y=v+(T<<4&4294967295|T>>>28),T=P+(y^v^A)+I[4]+1272893353&4294967295,P=y+(T<<11&4294967295|T>>>21),T=A+(P^y^v)+I[7]+4139469664&4294967295,A=P+(T<<16&4294967295|T>>>16),T=v+(A^P^y)+I[10]+3200236656&4294967295,v=A+(T<<23&4294967295|T>>>9),T=y+(v^A^P)+I[13]+681279174&4294967295,y=v+(T<<4&4294967295|T>>>28),T=P+(y^v^A)+I[0]+3936430074&4294967295,P=y+(T<<11&4294967295|T>>>21),T=A+(P^y^v)+I[3]+3572445317&4294967295,A=P+(T<<16&4294967295|T>>>16),T=v+(A^P^y)+I[6]+76029189&4294967295,v=A+(T<<23&4294967295|T>>>9),T=y+(v^A^P)+I[9]+3654602809&4294967295,y=v+(T<<4&4294967295|T>>>28),T=P+(y^v^A)+I[12]+3873151461&4294967295,P=y+(T<<11&4294967295|T>>>21),T=A+(P^y^v)+I[15]+530742520&4294967295,A=P+(T<<16&4294967295|T>>>16),T=v+(A^P^y)+I[2]+3299628645&4294967295,v=A+(T<<23&4294967295|T>>>9),T=y+(A^(v|~P))+I[0]+4096336452&4294967295,y=v+(T<<6&4294967295|T>>>26),T=P+(v^(y|~A))+I[7]+1126891415&4294967295,P=y+(T<<10&4294967295|T>>>22),T=A+(y^(P|~v))+I[14]+2878612391&4294967295,A=P+(T<<15&4294967295|T>>>17),T=v+(P^(A|~y))+I[5]+4237533241&4294967295,v=A+(T<<21&4294967295|T>>>11),T=y+(A^(v|~P))+I[12]+1700485571&4294967295,y=v+(T<<6&4294967295|T>>>26),T=P+(v^(y|~A))+I[3]+2399980690&4294967295,P=y+(T<<10&4294967295|T>>>22),T=A+(y^(P|~v))+I[10]+4293915773&4294967295,A=P+(T<<15&4294967295|T>>>17),T=v+(P^(A|~y))+I[1]+2240044497&4294967295,v=A+(T<<21&4294967295|T>>>11),T=y+(A^(v|~P))+I[8]+1873313359&4294967295,y=v+(T<<6&4294967295|T>>>26),T=P+(v^(y|~A))+I[15]+4264355552&4294967295,P=y+(T<<10&4294967295|T>>>22),T=A+(y^(P|~v))+I[6]+2734768916&4294967295,A=P+(T<<15&4294967295|T>>>17),T=v+(P^(A|~y))+I[13]+1309151649&4294967295,v=A+(T<<21&4294967295|T>>>11),T=y+(A^(v|~P))+I[4]+4149444226&4294967295,y=v+(T<<6&4294967295|T>>>26),T=P+(v^(y|~A))+I[11]+3174756917&4294967295,P=y+(T<<10&4294967295|T>>>22),T=A+(y^(P|~v))+I[2]+718787259&4294967295,A=P+(T<<15&4294967295|T>>>17),T=v+(P^(A|~y))+I[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(A+(T<<21&4294967295|T>>>11))&4294967295,b.g[2]=b.g[2]+A&4294967295,b.g[3]=b.g[3]+P&4294967295}r.prototype.u=function(b,y){y===void 0&&(y=b.length);for(var v=y-this.blockSize,I=this.B,A=this.h,P=0;P<y;){if(A==0)for(;P<=v;)s(this,b,P),P+=this.blockSize;if(typeof b=="string"){for(;P<y;)if(I[A++]=b.charCodeAt(P++),A==this.blockSize){s(this,I),A=0;break}}else for(;P<y;)if(I[A++]=b[P++],A==this.blockSize){s(this,I),A=0;break}}this.h=A,this.o+=y},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;var v=8*this.o;for(y=b.length-8;y<b.length;++y)b[y]=v&255,v/=256;for(this.u(b),b=Array(16),y=v=0;4>y;++y)for(var I=0;32>I;I+=8)b[v++]=this.g[y]>>>I&255;return b};function i(b,y){var v=c;return Object.prototype.hasOwnProperty.call(v,b)?v[b]:v[b]=y(b)}function o(b,y){this.h=y;for(var v=[],I=!0,A=b.length-1;0<=A;A--){var P=b[A]|0;I&&P==y||(v[A]=P,I=!1)}this.g=v}var c={};function l(b){return-128<=b&&128>b?i(b,function(y){return new o([y|0],0>y?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return p;if(0>b)return O(u(-b));for(var y=[],v=1,I=0;b>=v;I++)y[I]=b/v|0,v*=4294967296;return new o(y,0)}function d(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return O(d(b.substring(1),y));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(y,8)),I=p,A=0;A<b.length;A+=8){var P=Math.min(8,b.length-A),T=parseInt(b.substring(A,A+P),y);8>P?(P=u(Math.pow(y,P)),I=I.j(P).add(u(T))):(I=I.j(v),I=I.add(u(T)))}return I}var p=l(0),m=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(S(this))return-O(this).m();for(var b=0,y=1,v=0;v<this.g.length;v++){var I=this.i(v);b+=(0<=I?I:4294967296+I)*y,y*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(R(this))return"0";if(S(this))return"-"+O(this).toString(b);for(var y=u(Math.pow(b,6)),v=this,I="";;){var A=F(v,y).g;v=M(v,A.j(y));var P=((0<v.g.length?v.g[0]:v.h)>>>0).toString(b);if(v=A,R(v))return P+I;for(;6>P.length;)P="0"+P;I=P+I}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function R(b){if(b.h!=0)return!1;for(var y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function S(b){return b.h==-1}t.l=function(b){return b=M(this,b),S(b)?-1:R(b)?0:1};function O(b){for(var y=b.g.length,v=[],I=0;I<y;I++)v[I]=~b.g[I];return new o(v,~b.h).add(m)}t.abs=function(){return S(this)?O(this):this},t.add=function(b){for(var y=Math.max(this.g.length,b.g.length),v=[],I=0,A=0;A<=y;A++){var P=I+(this.i(A)&65535)+(b.i(A)&65535),T=(P>>>16)+(this.i(A)>>>16)+(b.i(A)>>>16);I=T>>>16,P&=65535,T&=65535,v[A]=T<<16|P}return new o(v,v[v.length-1]&-2147483648?-1:0)};function M(b,y){return b.add(O(y))}t.j=function(b){if(R(this)||R(b))return p;if(S(this))return S(b)?O(this).j(O(b)):O(O(this).j(b));if(S(b))return O(this.j(O(b)));if(0>this.l(_)&&0>b.l(_))return u(this.m()*b.m());for(var y=this.g.length+b.g.length,v=[],I=0;I<2*y;I++)v[I]=0;for(I=0;I<this.g.length;I++)for(var A=0;A<b.g.length;A++){var P=this.i(I)>>>16,T=this.i(I)&65535,et=b.i(A)>>>16,Rt=b.i(A)&65535;v[2*I+2*A]+=T*Rt,L(v,2*I+2*A),v[2*I+2*A+1]+=P*Rt,L(v,2*I+2*A+1),v[2*I+2*A+1]+=T*et,L(v,2*I+2*A+1),v[2*I+2*A+2]+=P*et,L(v,2*I+2*A+2)}for(I=0;I<y;I++)v[I]=v[2*I+1]<<16|v[2*I];for(I=y;I<2*y;I++)v[I]=0;return new o(v,0)};function L(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function j(b,y){this.g=b,this.h=y}function F(b,y){if(R(y))throw Error("division by zero");if(R(b))return new j(p,p);if(S(b))return y=F(O(b),y),new j(O(y.g),O(y.h));if(S(y))return y=F(b,O(y)),new j(O(y.g),y.h);if(30<b.g.length){if(S(b)||S(y))throw Error("slowDivide_ only works with positive integers.");for(var v=m,I=y;0>=I.l(b);)v=ne(v),I=ne(I);var A=oe(v,1),P=oe(I,1);for(I=oe(I,2),v=oe(v,2);!R(I);){var T=P.add(I);0>=T.l(b)&&(A=A.add(v),P=T),I=oe(I,1),v=oe(v,1)}return y=M(b,A.j(y)),new j(A,y)}for(A=p;0<=b.l(y);){for(v=Math.max(1,Math.floor(b.m()/y.m())),I=Math.ceil(Math.log(v)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),P=u(v),T=P.j(y);S(T)||0<T.l(b);)v-=I,P=u(v),T=P.j(y);R(P)&&(P=m),A=A.add(P),b=M(b,T)}return new j(A,b)}t.A=function(b){return F(this,b).h},t.and=function(b){for(var y=Math.max(this.g.length,b.g.length),v=[],I=0;I<y;I++)v[I]=this.i(I)&b.i(I);return new o(v,this.h&b.h)},t.or=function(b){for(var y=Math.max(this.g.length,b.g.length),v=[],I=0;I<y;I++)v[I]=this.i(I)|b.i(I);return new o(v,this.h|b.h)},t.xor=function(b){for(var y=Math.max(this.g.length,b.g.length),v=[],I=0;I<y;I++)v[I]=this.i(I)^b.i(I);return new o(v,this.h^b.h)};function ne(b){for(var y=b.g.length+1,v=[],I=0;I<y;I++)v[I]=b.i(I)<<1|b.i(I-1)>>>31;return new o(v,b.h)}function oe(b,y){var v=y>>5;y%=32;for(var I=b.g.length-v,A=[],P=0;P<I;P++)A[P]=0<y?b.i(P+v)>>>y|b.i(P+v+1)<<32-y:b.i(P+v);return new o(A,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,d_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Dr=o}).apply(typeof Uf<"u"?Uf:typeof self<"u"?self:typeof window<"u"?window:{});var Ao=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var f_,ni,p_,qo,Al,m_,g_,__;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ao=="object"&&Ao];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var C=a[g];if(!(C in f))break e;f=f[C]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,g=!1,C={next:function(){if(!g&&f<a.length){var D=f++;return{value:h(D,a[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,g),a.apply(h,C)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function _(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function R(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,C,D){for(var z=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)z[Ce-2]=arguments[Ce];return h.prototype[C].apply(g,z)}}function S(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function O(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(l(g)){const C=a.length||0,D=g.length||0;a.length=C+D;for(let z=0;z<D;z++)a[C+z]=g[z]}else a.push(g)}}class M{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function L(a){return/^[\s\xa0]*$/.test(a)}function j(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function F(a){return F[" "](a),a}F[" "]=function(){};var ne=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function oe(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function b(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function y(a){const h={};for(const f in a)h[f]=a[f];return h}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let f,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(f in g)a[f]=g[f];for(let D=0;D<v.length;D++)f=v[D],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function A(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function P(a){c.setTimeout(()=>{throw a},0)}function T(){var a=xt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class et{constructor(){this.h=this.g=null}add(h,f){const g=Rt.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Rt=new M(()=>new Oe,a=>a.reset());class Oe{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ue,me=!1,xt=new et,Gt=()=>{const a=c.Promise.resolve(void 0);ue=()=>{a.then(jt)}};var jt=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(f){P(f)}var h=Rt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}me=!1};function Le(){this.s=this.s,this.C=this.C}Le.prototype.s=!1,Le.prototype.ma=function(){this.s||(this.s=!0,this.N())},Le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ue(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ue.prototype.h=function(){this.defaultPrevented=!0};var Fn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};c.addEventListener("test",f,h),c.removeEventListener("test",f,h)}catch{}return a}();function rn(a,h){if(Ue.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(ne){e:{try{F(h.nodeName);var C=!0;break e}catch{}C=!1}C||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:St[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&rn.aa.h.call(this)}}R(rn,Ue);var St={2:"touch",3:"pen",4:"mouse"};rn.prototype.h=function(){rn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var x="closure_listenable_"+(1e6*Math.random()|0),X=0;function Q(a,h,f,g,C){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=C,this.key=++X,this.da=this.fa=!1}function Z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ye(a){this.src=a,this.g={},this.h=0}ye.prototype.add=function(a,h,f,g,C){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var z=E(a,h,g,C);return-1<z?(h=a[z],f||(h.fa=!1)):(h=new Q(h,this.src,D,!!g,C),h.fa=f,a.push(h)),h};function Pe(a,h){var f=h.type;if(f in a.g){var g=a.g[f],C=Array.prototype.indexOf.call(g,h,void 0),D;(D=0<=C)&&Array.prototype.splice.call(g,C,1),D&&(Z(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function E(a,h,f,g){for(var C=0;C<a.length;++C){var D=a[C];if(!D.da&&D.listener==h&&D.capture==!!f&&D.ha==g)return C}return-1}var w="closure_lm_"+(1e6*Math.random()|0),k={};function U(a,h,f,g,C){if(Array.isArray(h)){for(var D=0;D<h.length;D++)U(a,h[D],f,g,C);return null}return f=re(f),a&&a[x]?a.K(h,f,u(g)?!!g.capture:!!g,C):N(a,h,f,!1,g,C)}function N(a,h,f,g,C,D){if(!h)throw Error("Invalid event type");var z=u(C)?!!C.capture:!!C,Ce=ie(a);if(Ce||(a[w]=Ce=new ye(a)),f=Ce.add(h,f,g,z,D),f.proxy)return f;if(g=$(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)Fn||(C=z),C===void 0&&(C=!1),a.addEventListener(h.toString(),g,C);else if(a.attachEvent)a.attachEvent(W(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function $(){function a(f){return h.call(a.src,a.listener,f)}const h=q;return a}function G(a,h,f,g,C){if(Array.isArray(h))for(var D=0;D<h.length;D++)G(a,h[D],f,g,C);else g=u(g)?!!g.capture:!!g,f=re(f),a&&a[x]?(a=a.i,h=String(h).toString(),h in a.g&&(D=a.g[h],f=E(D,f,g,C),-1<f&&(Z(D[f]),Array.prototype.splice.call(D,f,1),D.length==0&&(delete a.g[h],a.h--)))):a&&(a=ie(a))&&(h=a.g[h.toString()],a=-1,h&&(a=E(h,f,g,C)),(f=-1<a?h[a]:null)&&K(f))}function K(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[x])Pe(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(W(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=ie(h))?(Pe(f,a),f.h==0&&(f.src=null,h[w]=null)):Z(a)}}}function W(a){return a in k?k[a]:k[a]="on"+a}function q(a,h){if(a.da)a=!0;else{h=new rn(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&K(a),a=f.call(g,h)}return a}function ie(a){return a=a[w],a instanceof ye?a:null}var Y="__closure_events_fn_"+(1e9*Math.random()>>>0);function re(a){return typeof a=="function"?a:(a[Y]||(a[Y]=function(h){return a.handleEvent(h)}),a[Y])}function ee(){Le.call(this),this.i=new ye(this),this.M=this,this.F=null}R(ee,Le),ee.prototype[x]=!0,ee.prototype.removeEventListener=function(a,h,f,g){G(this,a,h,f,g)};function ae(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Ue(h,a);else if(h instanceof Ue)h.target=h.target||a;else{var C=h;h=new Ue(g,a),I(h,C)}if(C=!0,f)for(var D=f.length-1;0<=D;D--){var z=h.g=f[D];C=be(z,g,!0,h)&&C}if(z=h.g=a,C=be(z,g,!0,h)&&C,C=be(z,g,!1,h)&&C,f)for(D=0;D<f.length;D++)z=h.g=f[D],C=be(z,g,!1,h)&&C}ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)Z(f[g]);delete a.g[h],a.h--}}this.F=null},ee.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},ee.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function be(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var C=!0,D=0;D<h.length;++D){var z=h[D];if(z&&!z.da&&z.capture==f){var Ce=z.listener,nt=z.ha||z.src;z.fa&&Pe(a.i,z),C=Ce.call(nt,g)!==!1&&C}}return C&&!g.defaultPrevented}function Ee(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(a,h||0)}function at(a){a.g=Ee(()=>{a.g=null,a.i&&(a.i=!1,at(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Ye extends Le{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:at(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tt(a){Le.call(this),this.h=a,this.g={}}R(tt,Le);var ct=[];function Bn(a){oe(a.g,function(h,f){this.g.hasOwnProperty(f)&&K(h)},a),a.g={}}tt.prototype.N=function(){tt.aa.N.call(this),Bn(this)},tt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Jr=c.JSON.stringify,yt=c.JSON.parse,$t=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Xr(){}Xr.prototype.h=null;function _h(a){return a.h||(a.h=a.i())}function yh(){}var Ms={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function lc(){Ue.call(this,"d")}R(lc,Ue);function uc(){Ue.call(this,"c")}R(uc,Ue);var yr={},vh=null;function so(){return vh=vh||new ee}yr.La="serverreachability";function Eh(a){Ue.call(this,yr.La,a)}R(Eh,Ue);function Ls(a){const h=so();ae(h,new Eh(h))}yr.STAT_EVENT="statevent";function wh(a,h){Ue.call(this,yr.STAT_EVENT,a),this.stat=h}R(wh,Ue);function vt(a){const h=so();ae(h,new wh(h,a))}yr.Ma="timingevent";function Th(a,h){Ue.call(this,yr.Ma,a),this.size=h}R(Th,Ue);function Us(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},h)}function Fs(){this.g=!0}Fs.prototype.xa=function(){this.g=!1};function wv(a,h,f,g,C,D){a.info(function(){if(a.g)if(D)for(var z="",Ce=D.split("&"),nt=0;nt<Ce.length;nt++){var we=Ce[nt].split("=");if(1<we.length){var lt=we[0];we=we[1];var ut=lt.split("_");z=2<=ut.length&&ut[1]=="type"?z+(lt+"="+we+"&"):z+(lt+"=redacted&")}}else z=null;else z=D;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+h+`
`+f+`
`+z})}function Tv(a,h,f,g,C,D,z){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+h+`
`+f+`
`+D+" "+z})}function Zr(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+bv(a,f)+(g?" "+g:"")})}function Iv(a,h){a.info(function(){return"TIMEOUT: "+h})}Fs.prototype.info=function(){};function bv(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var C=g[1];if(Array.isArray(C)&&!(1>C.length)){var D=C[0];if(D!="noop"&&D!="stop"&&D!="close")for(var z=1;z<C.length;z++)C[z]=""}}}}return Jr(f)}catch{return h}}var io={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ih={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},hc;function oo(){}R(oo,Xr),oo.prototype.g=function(){return new XMLHttpRequest},oo.prototype.i=function(){return{}},hc=new oo;function jn(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new tt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new bh}function bh(){this.i=null,this.g="",this.h=!1}var Ah={},dc={};function fc(a,h,f){a.L=1,a.v=uo(wn(h)),a.m=f,a.P=!0,Rh(a,null)}function Rh(a,h){a.F=Date.now(),ao(a),a.A=wn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Bh(f.i,"t",g),a.C=0,f=a.j.J,a.h=new bh,a.g=sd(a.j,f?h:null,!a.m),0<a.O&&(a.M=new Ye(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(ct[0]=C.toString()),C=ct);for(var D=0;D<C.length;D++){var z=U(f,C[D],g||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Ls(),wv(a.i,a.u,a.A,a.l,a.R,a.m)}jn.prototype.ca=function(a){a=a.target;const h=this.M;h&&Tn(a)==3?h.j():this.Y(a)},jn.prototype.Y=function(a){try{if(a==this.g)e:{const ut=Tn(this.g);var h=this.g.Ba();const ns=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||zh(this.g)))){this.J||ut!=4||h==7||(h==8||0>=ns?Ls(3):Ls(2)),pc(this);var f=this.g.Z();this.X=f;t:if(Sh(this)){var g=zh(this.g);a="";var C=g.length,D=Tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){vr(this),Bs(this);var z="";break t}this.h.i=new c.TextDecoder}for(h=0;h<C;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(D&&h==C-1)});g.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=f==200,Tv(this.i,this.u,this.A,this.l,this.R,ut,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Ce,nt=this.g;if((Ce=nt.g?nt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(Ce)){var we=Ce;break t}}we=null}if(f=we)Zr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,mc(this,f);else{this.o=!1,this.s=3,vt(12),vr(this),Bs(this);break e}}if(this.P){f=!0;let Qt;for(;!this.J&&this.C<z.length;)if(Qt=Av(this,z),Qt==dc){ut==4&&(this.s=4,vt(14),f=!1),Zr(this.i,this.l,null,"[Incomplete Response]");break}else if(Qt==Ah){this.s=4,vt(15),Zr(this.i,this.l,z,"[Invalid Chunk]"),f=!1;break}else Zr(this.i,this.l,Qt,null),mc(this,Qt);if(Sh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||z.length!=0||this.h.h||(this.s=1,vt(16),f=!1),this.o=this.o&&f,!f)Zr(this.i,this.l,z,"[Invalid Chunked Response]"),vr(this),Bs(this);else if(0<z.length&&!this.W){this.W=!0;var lt=this.j;lt.g==this&&lt.ba&&!lt.M&&(lt.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),wc(lt),lt.M=!0,vt(11))}}else Zr(this.i,this.l,z,null),mc(this,z);ut==4&&vr(this),this.o&&!this.J&&(ut==4?ed(this.j,this):(this.o=!1,ao(this)))}else $v(this.g),f==400&&0<z.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),vr(this),Bs(this)}}}catch{}finally{}};function Sh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Av(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?dc:(f=Number(h.substring(f,g)),isNaN(f)?Ah:(g+=1,g+f>h.length?dc:(h=h.slice(g,g+f),a.C=g+f,h)))}jn.prototype.cancel=function(){this.J=!0,vr(this)};function ao(a){a.S=Date.now()+a.I,Ph(a,a.I)}function Ph(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Us(m(a.ba,a),h)}function pc(a){a.B&&(c.clearTimeout(a.B),a.B=null)}jn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Iv(this.i,this.A),this.L!=2&&(Ls(),vt(17)),vr(this),this.s=2,Bs(this)):Ph(this,this.S-a)};function Bs(a){a.j.G==0||a.J||ed(a.j,a)}function vr(a){pc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Bn(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function mc(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||gc(f.h,a))){if(!a.K&&gc(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)_o(f),mo(f);else break e;Ec(f),vt(18)}}else f.za=C[1],0<f.za-f.T&&37500>C[2]&&f.F&&f.v==0&&!f.C&&(f.C=Us(m(f.Za,f),6e3));if(1>=Oh(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else wr(f,11)}else if((a.K||f.g==a)&&_o(f),!L(h))for(C=f.Da.g.parse(h),h=0;h<C.length;h++){let we=C[h];if(f.T=we[0],we=we[1],f.G==2)if(we[0]=="c"){f.K=we[1],f.ia=we[2];const lt=we[3];lt!=null&&(f.la=lt,f.j.info("VER="+f.la));const ut=we[4];ut!=null&&(f.Aa=ut,f.j.info("SVER="+f.Aa));const ns=we[5];ns!=null&&typeof ns=="number"&&0<ns&&(g=1.5*ns,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Qt=a.g;if(Qt){const vo=Qt.g?Qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vo){var D=g.h;D.g||vo.indexOf("spdy")==-1&&vo.indexOf("quic")==-1&&vo.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(_c(D,D.h),D.h=null))}if(g.D){const Tc=Qt.g?Qt.g.getResponseHeader("X-HTTP-Session-Id"):null;Tc&&(g.ya=Tc,xe(g.I,g.D,Tc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var z=a;if(g.qa=rd(g,g.J?g.ia:null,g.W),z.K){Dh(g.h,z);var Ce=z,nt=g.L;nt&&(Ce.I=nt),Ce.B&&(pc(Ce),ao(Ce)),g.g=z}else Xh(g);0<f.i.length&&go(f)}else we[0]!="stop"&&we[0]!="close"||wr(f,7);else f.G==3&&(we[0]=="stop"||we[0]=="close"?we[0]=="stop"?wr(f,7):vc(f):we[0]!="noop"&&f.l&&f.l.ta(we),f.v=0)}}Ls(4)}catch{}}var Rv=class{constructor(a,h){this.g=a,this.map=h}};function Ch(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function kh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Oh(a){return a.h?1:a.g?a.g.size:0}function gc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function _c(a,h){a.g?a.g.add(h):a.h=h}function Dh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Ch.prototype.cancel=function(){if(this.i=Nh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Nh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return S(a.i)}function Sv(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function Pv(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function xh(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=Pv(a),g=Sv(a),C=g.length,D=0;D<C;D++)h.call(void 0,g[D],f&&f[D],a)}var Vh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Cv(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),C=null;if(0<=g){var D=a[f].substring(0,g);C=a[f].substring(g+1)}else D=a[f];h(D,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Er(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Er){this.h=a.h,co(this,a.j),this.o=a.o,this.g=a.g,lo(this,a.s),this.l=a.l;var h=a.i,f=new qs;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Mh(this,f),this.m=a.m}else a&&(h=String(a).match(Vh))?(this.h=!1,co(this,h[1]||"",!0),this.o=js(h[2]||""),this.g=js(h[3]||"",!0),lo(this,h[4]),this.l=js(h[5]||"",!0),Mh(this,h[6]||"",!0),this.m=js(h[7]||"")):(this.h=!1,this.i=new qs(null,this.h))}Er.prototype.toString=function(){var a=[],h=this.j;h&&a.push($s(h,Lh,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push($s(h,Lh,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push($s(f,f.charAt(0)=="/"?Dv:Ov,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",$s(f,xv)),a.join("")};function wn(a){return new Er(a)}function co(a,h,f){a.j=f?js(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function lo(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Mh(a,h,f){h instanceof qs?(a.i=h,Vv(a.i,a.h)):(f||(h=$s(h,Nv)),a.i=new qs(h,a.h))}function xe(a,h,f){a.i.set(h,f)}function uo(a){return xe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function js(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function $s(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,kv),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function kv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Lh=/[#\/\?@]/g,Ov=/[#\?:]/g,Dv=/[#\?]/g,Nv=/[#\?@]/g,xv=/#/g;function qs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function $n(a){a.g||(a.g=new Map,a.h=0,a.i&&Cv(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=qs.prototype,t.add=function(a,h){$n(this),this.i=null,a=es(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Uh(a,h){$n(a),h=es(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Fh(a,h){return $n(a),h=es(a,h),a.g.has(h)}t.forEach=function(a,h){$n(this),this.g.forEach(function(f,g){f.forEach(function(C){a.call(h,C,g,this)},this)},this)},t.na=function(){$n(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const C=a[g];for(let D=0;D<C.length;D++)f.push(h[g])}return f},t.V=function(a){$n(this);let h=[];if(typeof a=="string")Fh(this,a)&&(h=h.concat(this.g.get(es(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return $n(this),this.i=null,a=es(this,a),Fh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Bh(a,h,f){Uh(a,h),0<f.length&&(a.i=null,a.g.set(es(a,h),S(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const D=encodeURIComponent(String(g)),z=this.V(g);for(g=0;g<z.length;g++){var C=D;z[g]!==""&&(C+="="+encodeURIComponent(String(z[g]))),a.push(C)}}return this.i=a.join("&")};function es(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Vv(a,h){h&&!a.j&&($n(a),a.i=null,a.g.forEach(function(f,g){var C=g.toLowerCase();g!=C&&(Uh(this,g),Bh(this,C,f))},a)),a.j=h}function Mv(a,h){const f=new Fs;if(c.Image){const g=new Image;g.onload=_(qn,f,"TestLoadImage: loaded",!0,h,g),g.onerror=_(qn,f,"TestLoadImage: error",!1,h,g),g.onabort=_(qn,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=_(qn,f,"TestLoadImage: timeout",!1,h,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function Lv(a,h){const f=new Fs,g=new AbortController,C=setTimeout(()=>{g.abort(),qn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(C),D.ok?qn(f,"TestPingServer: ok",!0,h):qn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(C),qn(f,"TestPingServer: error",!1,h)})}function qn(a,h,f,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(f)}catch{}}function Uv(){this.g=new $t}function Fv(a,h,f){const g=f||"";try{xh(a,function(C,D){let z=C;u(C)&&(z=Jr(C)),h.push(g+D+"="+encodeURIComponent(z))})}catch(C){throw h.push(g+"type="+encodeURIComponent("_badmap")),C}}function ho(a){this.l=a.Ub||null,this.j=a.eb||!1}R(ho,Xr),ho.prototype.g=function(){return new fo(this.l,this.j)},ho.prototype.i=function(a){return function(){return a}}({});function fo(a,h){ee.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(fo,ee),t=fo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Ws(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ws(this)),this.g&&(this.readyState=3,Ws(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;jh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function jh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Hs(this):Ws(this),this.readyState==3&&jh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Hs(this))},t.Qa=function(a){this.g&&(this.response=a,Hs(this))},t.ga=function(){this.g&&Hs(this)};function Hs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ws(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Ws(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(fo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function $h(a){let h="";return oe(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function yc(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=$h(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):xe(a,h,f))}function Be(a){ee.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Be,ee);var Bv=/^https?$/i,jv=["POST","PUT"];t=Be.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():hc.g(),this.v=this.o?_h(this.o):_h(hc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){qh(this,D);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)f.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())f.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),C=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(jv,h,void 0))||g||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,z]of f)this.g.setRequestHeader(D,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Kh(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){qh(this,D)}};function qh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Hh(a),po(a)}function Hh(a){a.A||(a.A=!0,ae(a,"complete"),ae(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ae(this,"complete"),ae(this,"abort"),po(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),po(this,!0)),Be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Wh(this):this.bb())},t.bb=function(){Wh(this)};function Wh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Tn(a)!=4||a.Z()!=2)){if(a.u&&Tn(a)==4)Ee(a.Ea,0,a);else if(ae(a,"readystatechange"),Tn(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=z===0){var C=String(a.D).match(Vh)[1]||null;!C&&c.self&&c.self.location&&(C=c.self.location.protocol.slice(0,-1)),g=!Bv.test(C?C.toLowerCase():"")}f=g}if(f)ae(a,"complete"),ae(a,"success");else{a.m=6;try{var D=2<Tn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",Hh(a)}}finally{po(a)}}}}function po(a,h){if(a.g){Kh(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||ae(a,"ready");try{f.onreadystatechange=g}catch{}}}function Kh(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Tn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Tn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),yt(h)}};function zh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function $v(a){const h={};a=(a.g&&2<=Tn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(L(a[g]))continue;var f=A(a[g]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const D=h[C]||[];h[C]=D,D.push(f)}b(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ks(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Gh(a){this.Aa=0,this.i=[],this.j=new Fs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ks("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ks("baseRetryDelayMs",5e3,a),this.cb=Ks("retryDelaySeedMs",1e4,a),this.Wa=Ks("forwardChannelMaxRetries",2,a),this.wa=Ks("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Ch(a&&a.concurrentRequestLimit),this.Da=new Uv,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Gh.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,g){vt(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=rd(this,null,this.W),go(this)};function vc(a){if(Qh(a),a.G==3){var h=a.U++,f=wn(a.I);if(xe(f,"SID",a.K),xe(f,"RID",h),xe(f,"TYPE","terminate"),zs(a,f),h=new jn(a,a.j,h),h.L=2,h.v=uo(wn(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=h.v,f=!0),f||(h.g=sd(h.j,null),h.g.ea(h.v)),h.F=Date.now(),ao(h)}nd(a)}function mo(a){a.g&&(wc(a),a.g.cancel(),a.g=null)}function Qh(a){mo(a),a.u&&(c.clearTimeout(a.u),a.u=null),_o(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function go(a){if(!kh(a.h)&&!a.s){a.s=!0;var h=a.Ga;ue||Gt(),me||(ue(),me=!0),xt.add(h,a),a.B=0}}function qv(a,h){return Oh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Us(m(a.Ga,a,h),td(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new jn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=y(D),I(D,this.S)):D=this.S),this.m!==null||this.O||(C.H=D,D=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Jh(this,C,h),f=wn(this.I),xe(f,"RID",a),xe(f,"CVER",22),this.D&&xe(f,"X-HTTP-Session-Id",this.D),zs(this,f),D&&(this.O?h="headers="+encodeURIComponent(String($h(D)))+"&"+h:this.m&&yc(f,this.m,D)),_c(this.h,C),this.Ua&&xe(f,"TYPE","init"),this.P?(xe(f,"$req",h),xe(f,"SID","null"),C.T=!0,fc(C,f,null)):fc(C,f,h),this.G=2}}else this.G==3&&(a?Yh(this,a):this.i.length==0||kh(this.h)||Yh(this))};function Yh(a,h){var f;h?f=h.l:f=a.U++;const g=wn(a.I);xe(g,"SID",a.K),xe(g,"RID",f),xe(g,"AID",a.T),zs(a,g),a.m&&a.o&&yc(g,a.m,a.o),f=new jn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Jh(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),_c(a.h,f),fc(f,g,h)}function zs(a,h){a.H&&oe(a.H,function(f,g){xe(h,g,f)}),a.l&&xh({},function(f,g){xe(h,g,f)})}function Jh(a,h,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var C=a.i;let D=-1;for(;;){const z=["count="+f];D==-1?0<f?(D=C[0].g,z.push("ofs="+D)):D=0:z.push("ofs="+D);let Ce=!0;for(let nt=0;nt<f;nt++){let we=C[nt].g;const lt=C[nt].map;if(we-=D,0>we)D=Math.max(0,C[nt].g-100),Ce=!1;else try{Fv(lt,z,"req"+we+"_")}catch{g&&g(lt)}}if(Ce){g=z.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function Xh(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;ue||Gt(),me||(ue(),me=!0),xt.add(h,a),a.v=0}}function Ec(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Us(m(a.Fa,a),td(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Zh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Us(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),mo(this),Zh(this))};function wc(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Zh(a){a.g=new jn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=wn(a.qa);xe(h,"RID","rpc"),xe(h,"SID",a.K),xe(h,"AID",a.T),xe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&xe(h,"TO",a.ja),xe(h,"TYPE","xmlhttp"),zs(a,h),a.m&&a.o&&yc(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=uo(wn(h)),f.m=null,f.P=!0,Rh(f,a)}t.Za=function(){this.C!=null&&(this.C=null,mo(this),Ec(this),vt(19))};function _o(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function ed(a,h){var f=null;if(a.g==h){_o(a),wc(a),a.g=null;var g=2}else if(gc(a.h,h))f=h.D,Dh(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var C=a.B;g=so(),ae(g,new Th(g,f)),go(a)}else Xh(a);else if(C=h.s,C==3||C==0&&0<h.X||!(g==1&&qv(a,h)||g==2&&Ec(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),C){case 1:wr(a,5);break;case 4:wr(a,10);break;case 3:wr(a,6);break;default:wr(a,2)}}}function td(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function wr(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),g=a.Xa;const C=!g;g=new Er(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||co(g,"https"),uo(g),C?Mv(g.toString(),f):Lv(g.toString(),f)}else vt(2);a.G=0,a.l&&a.l.sa(h),nd(a),Qh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function nd(a){if(a.G=0,a.ka=[],a.l){const h=Nh(a.h);(h.length!=0||a.i.length!=0)&&(O(a.ka,h),O(a.ka,a.i),a.h.i.length=0,S(a.i),a.i.length=0),a.l.ra()}}function rd(a,h,f){var g=f instanceof Er?wn(f):new Er(f);if(g.g!="")h&&(g.g=h+"."+g.g),lo(g,g.s);else{var C=c.location;g=C.protocol,h=h?h+"."+C.hostname:C.hostname,C=+C.port;var D=new Er(null);g&&co(D,g),h&&(D.g=h),C&&lo(D,C),f&&(D.l=f),g=D}return f=a.D,h=a.ya,f&&h&&xe(g,f,h),xe(g,"VER",a.la),zs(a,g),g}function sd(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Be(new ho({eb:f})):new Be(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function id(){}t=id.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function yo(){}yo.prototype.g=function(a,h){return new Vt(a,h)};function Vt(a,h){ee.call(this),this.g=new Gh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!L(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!L(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ts(this)}R(Vt,ee),Vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Vt.prototype.close=function(){vc(this.g)},Vt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Jr(a),a=f);h.i.push(new Rv(h.Ya++,a)),h.G==3&&go(h)},Vt.prototype.N=function(){this.g.l=null,delete this.j,vc(this.g),delete this.g,Vt.aa.N.call(this)};function od(a){lc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}R(od,lc);function ad(){uc.call(this),this.status=1}R(ad,uc);function ts(a){this.g=a}R(ts,id),ts.prototype.ua=function(){ae(this.g,"a")},ts.prototype.ta=function(a){ae(this.g,new od(a))},ts.prototype.sa=function(a){ae(this.g,new ad)},ts.prototype.ra=function(){ae(this.g,"b")},yo.prototype.createWebChannel=yo.prototype.g,Vt.prototype.send=Vt.prototype.o,Vt.prototype.open=Vt.prototype.m,Vt.prototype.close=Vt.prototype.close,__=function(){return new yo},g_=function(){return so()},m_=yr,Al={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},io.NO_ERROR=0,io.TIMEOUT=8,io.HTTP_ERROR=6,qo=io,Ih.COMPLETE="complete",p_=Ih,yh.EventType=Ms,Ms.OPEN="a",Ms.CLOSE="b",Ms.ERROR="c",Ms.MESSAGE="d",ee.prototype.listen=ee.prototype.K,ni=yh,Be.prototype.listenOnce=Be.prototype.L,Be.prototype.getLastError=Be.prototype.Ka,Be.prototype.getLastErrorCode=Be.prototype.Ba,Be.prototype.getStatus=Be.prototype.Z,Be.prototype.getResponseJson=Be.prototype.Oa,Be.prototype.getResponseText=Be.prototype.oa,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Ha,f_=Be}).apply(typeof Ao<"u"?Ao:typeof self<"u"?self:typeof window<"u"?window:{});const Ff="@firebase/firestore";/**
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
 */class dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
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
 */let Os="10.14.0";/**
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
 */const Ur=new Fa("@firebase/firestore");function Js(){return Ur.logLevel}function te(t,...e){if(Ur.logLevel<=_e.DEBUG){const n=e.map(Iu);Ur.debug(`Firestore (${Os}): ${t}`,...n)}}function Vn(t,...e){if(Ur.logLevel<=_e.ERROR){const n=e.map(Iu);Ur.error(`Firestore (${Os}): ${t}`,...n)}}function Is(t,...e){if(Ur.logLevel<=_e.WARN){const n=e.map(Iu);Ur.warn(`Firestore (${Os}): ${t}`,...n)}}function Iu(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function he(t="Unexpected state"){const e=`FIRESTORE (${Os}) INTERNAL ASSERTION FAILED: `+t;throw Vn(e),new Error(e)}function Se(t,e){t||he()}function fe(t,e){return t}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends zt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Dn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class y_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(dt.UNAUTHENTICATED))}shutdown(){}}class gR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class _R{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Se(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Dn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Dn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Dn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string"),new y_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string"),new dt(e)}}class yR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class vR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new yR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ER{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Se(this.o===void 0);const r=i=>{i.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string"),this.R=n.token,new ER(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function TR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class v_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=TR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ie(t,e){return t<e?-1:t>e?1:0}function bs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new J(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new J(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new J(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ie(this.nanoseconds,e.nanoseconds):Ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class de{constructor(e){this.timestamp=e}static fromTimestamp(e){return new de(e)}static min(){return new de(new Qe(0,0))}static max(){return new de(new Qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Vi{constructor(e,n,r){n===void 0?n=0:n>e.length&&he(),r===void 0?r=e.length-n:r>e.length-n&&he(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Vi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Vi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ve extends Vi{construct(e,n,r){return new Ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new J(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ve(n)}static emptyPath(){return new Ve([])}}const IR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends Vi{construct(e,n,r){return new st(e,n,r)}static isValidIdentifier(e){return IR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new st(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new J(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new J(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new J(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new J(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(n)}static emptyPath(){return new st([])}}/**
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
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(Ve.fromString(e))}static fromName(e){return new se(Ve.fromString(e).popFirst(5))}static empty(){return new se(Ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new Ve(e.slice()))}}function bR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=de.fromTimestamp(r===1e9?new Qe(n+1,0):new Qe(n,r));return new cr(s,se.empty(),e)}function AR(t){return new cr(t.readTime,t.key,-1)}class cr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new cr(de.min(),se.empty(),-1)}static max(){return new cr(de.max(),se.empty(),-1)}}function RR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:Ie(t.largestBatchId,e.largestBatchId))}/**
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
 */const SR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class PR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ji(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==SR)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&he(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(s=>s?B.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new B((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(d=>{o[u]=d,++c,c===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new B((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function CR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Xi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class bu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}bu.oe=-1;function Ha(t){return t==null}function ua(t){return t===0&&1/t==-1/0}function kR(t){return typeof t=="number"&&Number.isInteger(t)&&!ua(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Bf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Qr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function E_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Fe{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new Fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ro(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ro(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ro(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ro(this.root,e,this.comparator,!0)}}class Ro{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??rt.RED,this.left=s??rt.EMPTY,this.right=i??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new rt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return rt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw he();const e=this.left.check();if(e!==this.right.check())throw he();return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw he()}get value(){throw he()}get color(){throw he()}get left(){throw he()}get right(){throw he()}copy(e,n,r,s,i){return this}insert(e,n,r){return new rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class it{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new jf(this.data.getIterator())}getIteratorFrom(e){return new jf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof it)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new it(this.comparator);return n.data=e,n}}class jf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ut{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new Ut([])}unionWith(e){let n=new it(st.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ut(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return bs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class w_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new w_("Invalid base64 string: "+i):i}}(e);return new ot(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const OR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function lr(t){if(Se(!!t),typeof t=="string"){let e=0;const n=OR.exec(t);if(Se(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fr(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
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
 */function Au(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ru(t){const e=t.mapValue.fields.__previous_value__;return Au(e)?Ru(e):e}function Mi(t){const e=lr(t.mapValue.fields.__local_write_time__.timestampValue);return new Qe(e.seconds,e.nanos)}/**
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
 */class DR{constructor(e,n,r,s,i,o,c,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u}}class Li{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Li("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Li&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const So={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Br(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Au(t)?4:xR(t)?9007199254740991:NR(t)?10:11:he()}function vn(t,e){if(t===e)return!0;const n=Br(t);if(n!==Br(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Mi(t).isEqual(Mi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=lr(s.timestampValue),c=lr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Fr(s.bytesValue).isEqual(Fr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return qe(s.geoPointValue.latitude)===qe(i.geoPointValue.latitude)&&qe(s.geoPointValue.longitude)===qe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return qe(s.integerValue)===qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=qe(s.doubleValue),c=qe(i.doubleValue);return o===c?ua(o)===ua(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return bs(t.arrayValue.values||[],e.arrayValue.values||[],vn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Bf(o)!==Bf(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!vn(o[l],c[l])))return!1;return!0}(t,e);default:return he()}}function Ui(t,e){return(t.values||[]).find(n=>vn(n,e))!==void 0}function As(t,e){if(t===e)return 0;const n=Br(t),r=Br(e);if(n!==r)return Ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ie(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=qe(i.integerValue||i.doubleValue),l=qe(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return $f(t.timestampValue,e.timestampValue);case 4:return $f(Mi(t),Mi(e));case 5:return Ie(t.stringValue,e.stringValue);case 6:return function(i,o){const c=Fr(i),l=Fr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const d=Ie(c[u],l[u]);if(d!==0)return d}return Ie(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Ie(qe(i.latitude),qe(o.latitude));return c!==0?c:Ie(qe(i.longitude),qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return qf(t.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,u,d;const p=i.fields||{},m=o.fields||{},_=(c=p.value)===null||c===void 0?void 0:c.arrayValue,R=(l=m.value)===null||l===void 0?void 0:l.arrayValue,S=Ie(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((d=R==null?void 0:R.values)===null||d===void 0?void 0:d.length)||0);return S!==0?S:qf(_,R)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===So.mapValue&&o===So.mapValue)return 0;if(i===So.mapValue)return 1;if(o===So.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},d=Object.keys(u);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const m=Ie(l[p],d[p]);if(m!==0)return m;const _=As(c[l[p]],u[d[p]]);if(_!==0)return _}return Ie(l.length,d.length)}(t.mapValue,e.mapValue);default:throw he()}}function $f(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ie(t,e);const n=lr(t),r=lr(e),s=Ie(n.seconds,r.seconds);return s!==0?s:Ie(n.nanos,r.nanos)}function qf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=As(n[s],r[s]);if(i)return i}return Ie(n.length,r.length)}function Rs(t){return Rl(t)}function Rl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=lr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Fr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return se.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Rl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Rl(n.fields[o])}`;return s+"}"}(t.mapValue):he()}function Hf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Sl(t){return!!t&&"integerValue"in t}function Su(t){return!!t&&"arrayValue"in t}function Wf(t){return!!t&&"nullValue"in t}function Kf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ho(t){return!!t&&"mapValue"in t}function NR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function yi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Qr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=yi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=yi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function xR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ot{constructor(e){this.value=e}static empty(){return new Ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ho(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=yi(n)}setAll(e){let n=st.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=yi(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ho(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ho(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Qr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ot(yi(this.value))}}function T_(t){const e=[];return Qr(t.fields,(n,r)=>{const s=new st([n]);if(Ho(r)){const i=T_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ut(e)}/**
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
 */class mt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new mt(e,0,de.min(),de.min(),de.min(),Ot.empty(),0)}static newFoundDocument(e,n,r,s){return new mt(e,1,n,de.min(),r,s,0)}static newNoDocument(e,n){return new mt(e,2,n,de.min(),de.min(),Ot.empty(),0)}static newUnknownDocument(e,n){return new mt(e,3,n,de.min(),de.min(),Ot.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ha{constructor(e,n){this.position=e,this.inclusive=n}}function zf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=se.comparator(se.fromName(o.referenceValue),n.key):r=As(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Gf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!vn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Fi{constructor(e,n="asc"){this.field=e,this.dir=n}}function VR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class I_{}class Ge extends I_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new LR(e,n,r):n==="array-contains"?new BR(e,r):n==="in"?new jR(e,r):n==="not-in"?new $R(e,r):n==="array-contains-any"?new qR(e,r):new Ge(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new UR(e,r):new FR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(As(n,this.value)):n!==null&&Br(this.value)===Br(n)&&this.matchesComparison(As(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class nn extends I_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new nn(e,n)}matches(e){return b_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function b_(t){return t.op==="and"}function A_(t){return MR(t)&&b_(t)}function MR(t){for(const e of t.filters)if(e instanceof nn)return!1;return!0}function Pl(t){if(t instanceof Ge)return t.field.canonicalString()+t.op.toString()+Rs(t.value);if(A_(t))return t.filters.map(e=>Pl(e)).join(",");{const e=t.filters.map(n=>Pl(n)).join(",");return`${t.op}(${e})`}}function R_(t,e){return t instanceof Ge?function(r,s){return s instanceof Ge&&r.op===s.op&&r.field.isEqual(s.field)&&vn(r.value,s.value)}(t,e):t instanceof nn?function(r,s){return s instanceof nn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&R_(o,s.filters[c]),!0):!1}(t,e):void he()}function S_(t){return t instanceof Ge?function(n){return`${n.field.canonicalString()} ${n.op} ${Rs(n.value)}`}(t):t instanceof nn?function(n){return n.op.toString()+" {"+n.getFilters().map(S_).join(" ,")+"}"}(t):"Filter"}class LR extends Ge{constructor(e,n,r){super(e,n,r),this.key=se.fromName(r.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class UR extends Ge{constructor(e,n){super(e,"in",n),this.keys=P_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class FR extends Ge{constructor(e,n){super(e,"not-in",n),this.keys=P_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function P_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>se.fromName(r.referenceValue))}class BR extends Ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Su(n)&&Ui(n.arrayValue,this.value)}}class jR extends Ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ui(this.value.arrayValue,n)}}class $R extends Ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ui(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ui(this.value.arrayValue,n)}}class qR extends Ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Su(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ui(this.value.arrayValue,r))}}/**
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
 */class HR{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function Qf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new HR(t,e,n,r,s,i,o)}function Pu(t){const e=fe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Pl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ha(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Rs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Rs(r)).join(",")),e.ue=n}return e.ue}function Cu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!VR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!R_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Gf(t.startAt,e.startAt)&&Gf(t.endAt,e.endAt)}function Cl(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ds{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function WR(t,e,n,r,s,i,o,c){return new Ds(t,e,n,r,s,i,o,c)}function ku(t){return new Ds(t)}function Yf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function C_(t){return t.collectionGroup!==null}function vi(t){const e=fe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new it(st.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Fi(i,r))}),n.has(st.keyField().canonicalString())||e.ce.push(new Fi(st.keyField(),r))}return e.ce}function mn(t){const e=fe(t);return e.le||(e.le=KR(e,vi(t))),e.le}function KR(t,e){if(t.limitType==="F")return Qf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Fi(s.field,i)});const n=t.endAt?new ha(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ha(t.startAt.position,t.startAt.inclusive):null;return Qf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function kl(t,e){const n=t.filters.concat([e]);return new Ds(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function da(t,e,n){return new Ds(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Wa(t,e){return Cu(mn(t),mn(e))&&t.limitType===e.limitType}function k_(t){return`${Pu(mn(t))}|lt:${t.limitType}`}function as(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>S_(s)).join(", ")}]`),Ha(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Rs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Rs(s)).join(",")),`Target(${r})`}(mn(t))}; limitType=${t.limitType})`}function Ka(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):se.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of vi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=zf(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,vi(r),s)||r.endAt&&!function(o,c,l){const u=zf(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,vi(r),s))}(t,e)}function zR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function O_(t){return(e,n)=>{let r=!1;for(const s of vi(t)){const i=GR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function GR(t,e,n){const r=t.field.isKeyField()?se.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?As(l,u):he()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return he()}}/**
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
 */class Ns{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Qr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return E_(this.inner)}size(){return this.innerSize}}/**
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
 */const QR=new Fe(se.comparator);function Mn(){return QR}const D_=new Fe(se.comparator);function ri(...t){let e=D_;for(const n of t)e=e.insert(n.key,n);return e}function N_(t){let e=D_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Sr(){return Ei()}function x_(){return Ei()}function Ei(){return new Ns(t=>t.toString(),(t,e)=>t.isEqual(e))}const YR=new Fe(se.comparator),JR=new it(se.comparator);function ge(...t){let e=JR;for(const n of t)e=e.add(n);return e}const XR=new it(Ie);function ZR(){return XR}/**
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
 */function Ou(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ua(e)?"-0":e}}function V_(t){return{integerValue:""+t}}function eS(t,e){return kR(e)?V_(e):Ou(t,e)}/**
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
 */class za{constructor(){this._=void 0}}function tS(t,e,n){return t instanceof fa?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Au(i)&&(i=Ru(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Bi?L_(t,e):t instanceof ji?U_(t,e):function(s,i){const o=M_(s,i),c=Jf(o)+Jf(s.Pe);return Sl(o)&&Sl(s.Pe)?V_(c):Ou(s.serializer,c)}(t,e)}function nS(t,e,n){return t instanceof Bi?L_(t,e):t instanceof ji?U_(t,e):n}function M_(t,e){return t instanceof pa?function(r){return Sl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class fa extends za{}class Bi extends za{constructor(e){super(),this.elements=e}}function L_(t,e){const n=F_(e);for(const r of t.elements)n.some(s=>vn(s,r))||n.push(r);return{arrayValue:{values:n}}}class ji extends za{constructor(e){super(),this.elements=e}}function U_(t,e){let n=F_(e);for(const r of t.elements)n=n.filter(s=>!vn(s,r));return{arrayValue:{values:n}}}class pa extends za{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Jf(t){return qe(t.integerValue||t.doubleValue)}function F_(t){return Su(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function rS(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Bi&&s instanceof Bi||r instanceof ji&&s instanceof ji?bs(r.elements,s.elements,vn):r instanceof pa&&s instanceof pa?vn(r.Pe,s.Pe):r instanceof fa&&s instanceof fa}(t.transform,e.transform)}class sS{constructor(e,n){this.version=e,this.transformResults=n}}class Xt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Xt}static exists(e){return new Xt(void 0,e)}static updateTime(e){return new Xt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ga{}function B_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new $_(t.key,Xt.none()):new Zi(t.key,t.data,Xt.none());{const n=t.data,r=Ot.empty();let s=new it(st.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new gr(t.key,r,new Ut(s.toArray()),Xt.none())}}function iS(t,e,n){t instanceof Zi?function(s,i,o){const c=s.value.clone(),l=Zf(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof gr?function(s,i,o){if(!Wo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Zf(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(j_(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function wi(t,e,n,r){return t instanceof Zi?function(i,o,c,l){if(!Wo(i.precondition,o))return c;const u=i.value.clone(),d=ep(i.fieldTransforms,l,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof gr?function(i,o,c,l){if(!Wo(i.precondition,o))return c;const u=ep(i.fieldTransforms,l,o),d=o.data;return d.setAll(j_(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return Wo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function oS(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=M_(r.transform,s||null);i!=null&&(n===null&&(n=Ot.empty()),n.set(r.field,i))}return n||null}function Xf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&bs(r,s,(i,o)=>rS(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Zi extends Ga{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class gr extends Ga{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function j_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Zf(t,e,n){const r=new Map;Se(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,nS(o,c,n[s]))}return r}function ep(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,tS(i,o,e))}return r}class $_ extends Ga{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class aS extends Ga{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class cS{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&iS(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=wi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=wi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=x_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=B_(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(de.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ge())}isEqual(e){return this.batchId===e.batchId&&bs(this.mutations,e.mutations,(n,r)=>Xf(n,r))&&bs(this.baseMutations,e.baseMutations,(n,r)=>Xf(n,r))}}class Du{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Se(e.mutations.length===r.length);let s=function(){return YR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Du(e,n,r,s)}}/**
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
 */class lS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class uS{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ze,ve;function hS(t){switch(t){default:return he();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function q_(t){if(t===void 0)return Vn("GRPC error has no .code"),V.UNKNOWN;switch(t){case ze.OK:return V.OK;case ze.CANCELLED:return V.CANCELLED;case ze.UNKNOWN:return V.UNKNOWN;case ze.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case ze.INTERNAL:return V.INTERNAL;case ze.UNAVAILABLE:return V.UNAVAILABLE;case ze.UNAUTHENTICATED:return V.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case ze.NOT_FOUND:return V.NOT_FOUND;case ze.ALREADY_EXISTS:return V.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return V.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case ze.ABORTED:return V.ABORTED;case ze.OUT_OF_RANGE:return V.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return V.UNIMPLEMENTED;case ze.DATA_LOSS:return V.DATA_LOSS;default:return he()}}(ve=ze||(ze={}))[ve.OK=0]="OK",ve[ve.CANCELLED=1]="CANCELLED",ve[ve.UNKNOWN=2]="UNKNOWN",ve[ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ve[ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ve[ve.NOT_FOUND=5]="NOT_FOUND",ve[ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",ve[ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",ve[ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",ve[ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ve[ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ve[ve.ABORTED=10]="ABORTED",ve[ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",ve[ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",ve[ve.INTERNAL=13]="INTERNAL",ve[ve.UNAVAILABLE=14]="UNAVAILABLE",ve[ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function dS(){return new TextEncoder}/**
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
 */const fS=new Dr([4294967295,4294967295],0);function tp(t){const e=dS().encode(t),n=new d_;return n.update(e),new Uint8Array(n.digest())}function np(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Dr([n,r],0),new Dr([s,i],0)]}class Nu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new si(`Invalid padding: ${n}`);if(r<0)throw new si(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new si(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new si(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Dr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Dr.fromNumber(r)));return s.compare(fS)===1&&(s=new Dr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=tp(e),[r,s]=np(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Nu(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const n=tp(e),[r,s]=np(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class si extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Qa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,eo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Qa(de.min(),s,new Fe(Ie),Mn(),ge())}}class eo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new eo(r,n,ge(),ge(),ge())}}/**
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
 */class Ko{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class H_{constructor(e,n){this.targetId=e,this.me=n}}class W_{constructor(e,n,r=ot.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class rp{constructor(){this.fe=0,this.ge=ip(),this.pe=ot.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ge(),n=ge(),r=ge();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:he()}}),new eo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=ip()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Se(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class pS{constructor(e){this.Le=e,this.Be=new Map,this.ke=Mn(),this.qe=sp(),this.Qe=new Fe(Ie)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:he()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Cl(i))if(r===0){const o=new se(i.path);this.Ue(n,o,mt.newNoDocument(o,de.min()))}else Se(r===1);else{const o=this.Ye(n);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=Fr(r).toUint8Array()}catch(l){if(l instanceof w_)return Is("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Nu(o,s,i)}catch(l){return Is(l instanceof si?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&Cl(c.target)){const l=new se(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,mt.newNoDocument(l,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=ge();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Qa(e,n,this.Qe,this.ke,r);return this.ke=Mn(),this.qe=sp(),this.Qe=new Fe(Ie),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new rp,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new it(Ie),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new rp),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function sp(){return new Fe(se.comparator)}function ip(){return new Fe(se.comparator)}const mS={asc:"ASCENDING",desc:"DESCENDING"},gS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_S={and:"AND",or:"OR"};class yS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ol(t,e){return t.useProto3Json||Ha(e)?e:{value:e}}function ma(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function K_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function vS(t,e){return ma(t,e.toTimestamp())}function gn(t){return Se(!!t),de.fromTimestamp(function(n){const r=lr(n);return new Qe(r.seconds,r.nanos)}(t))}function xu(t,e){return Dl(t,e).canonicalString()}function Dl(t,e){const n=function(s){return new Ve(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function z_(t){const e=Ve.fromString(t);return Se(X_(e)),e}function Nl(t,e){return xu(t.databaseId,e.path)}function Hc(t,e){const n=z_(e);if(n.get(1)!==t.databaseId.projectId)throw new J(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new J(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(Q_(n))}function G_(t,e){return xu(t.databaseId,e)}function ES(t){const e=z_(t);return e.length===4?Ve.emptyPath():Q_(e)}function xl(t){return new Ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Q_(t){return Se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function op(t,e,n){return{name:Nl(t,e),fields:n.value.mapValue.fields}}function wS(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:he()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(Se(d===void 0||typeof d=="string"),ot.fromBase64String(d||"")):(Se(d===void 0||d instanceof Buffer||d instanceof Uint8Array),ot.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const d=u.code===void 0?V.UNKNOWN:q_(u.code);return new J(d,u.message||"")}(o);n=new W_(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Hc(t,r.document.name),i=gn(r.document.updateTime),o=r.document.createTime?gn(r.document.createTime):de.min(),c=new Ot({mapValue:{fields:r.document.fields}}),l=mt.newFoundDocument(s,i,o,c),u=r.targetIds||[],d=r.removedTargetIds||[];n=new Ko(u,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Hc(t,r.document),i=r.readTime?gn(r.readTime):de.min(),o=mt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Ko([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Hc(t,r.document),i=r.removedTargetIds||[];n=new Ko([],i,s,null)}else{if(!("filter"in e))return he();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new uS(s,i),c=r.targetId;n=new H_(c,o)}}return n}function TS(t,e){let n;if(e instanceof Zi)n={update:op(t,e.key,e.value)};else if(e instanceof $_)n={delete:Nl(t,e.key)};else if(e instanceof gr)n={update:op(t,e.key,e.data),updateMask:OS(e.fieldMask)};else{if(!(e instanceof aS))return he();n={verify:Nl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof fa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Bi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ji)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof pa)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw he()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:vS(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:he()}(t,e.precondition)),n}function IS(t,e){return t&&t.length>0?(Se(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?gn(s.updateTime):gn(i);return o.isEqual(de.min())&&(o=gn(i)),new sS(o,s.transformResults||[])}(n,e))):[]}function bS(t,e){return{documents:[G_(t,e.path)]}}function AS(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=G_(t,s);const i=function(u){if(u.length!==0)return J_(nn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(m){return{field:cs(m.field),direction:PS(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Ol(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:s}}function RS(t){let e=ES(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Se(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=Y_(p);return m instanceof nn&&A_(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(R){return new Fi(ls(R.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(n.orderBy));let c=null;n.limit&&(c=function(p){let m;return m=typeof p=="object"?p.value:p,Ha(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(p){const m=!!p.before,_=p.values||[];return new ha(_,m)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const m=!p.before,_=p.values||[];return new ha(_,m)}(n.endAt)),WR(e,s,o,i,c,"F",l,u)}function SS(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Y_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ls(n.unaryFilter.field);return Ge.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ls(n.unaryFilter.field);return Ge.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ls(n.unaryFilter.field);return Ge.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ls(n.unaryFilter.field);return Ge.create(o,"!=",{nullValue:"NULL_VALUE"});default:return he()}}(t):t.fieldFilter!==void 0?function(n){return Ge.create(ls(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return he()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return nn.create(n.compositeFilter.filters.map(r=>Y_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return he()}}(n.compositeFilter.op))}(t):he()}function PS(t){return mS[t]}function CS(t){return gS[t]}function kS(t){return _S[t]}function cs(t){return{fieldPath:t.canonicalString()}}function ls(t){return st.fromServerFormat(t.fieldPath)}function J_(t){return t instanceof Ge?function(n){if(n.op==="=="){if(Kf(n.value))return{unaryFilter:{field:cs(n.field),op:"IS_NAN"}};if(Wf(n.value))return{unaryFilter:{field:cs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Kf(n.value))return{unaryFilter:{field:cs(n.field),op:"IS_NOT_NAN"}};if(Wf(n.value))return{unaryFilter:{field:cs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:cs(n.field),op:CS(n.op),value:n.value}}}(t):t instanceof nn?function(n){const r=n.getFilters().map(s=>J_(s));return r.length===1?r[0]:{compositeFilter:{op:kS(n.op),filters:r}}}(t):he()}function OS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function X_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class tr{constructor(e,n,r,s,i=de.min(),o=de.min(),c=ot.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new tr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class DS{constructor(e){this.ct=e}}function NS(t){const e=RS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?da(e,e.limit,"L"):e}/**
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
 */class xS{constructor(){this.un=new VS}addToCollectionParentIndex(e,n){return this.un.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(cr.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(cr.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class VS{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new it(Ve.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new it(Ve.comparator)).toArray()}}/**
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
 */class Ss{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ss(0)}static kn(){return new Ss(-1)}}/**
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
 */class MS{constructor(){this.changes=new Ns(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,mt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class LS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class US{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&wi(r.mutation,s,Ut.empty(),Qe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ge()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ge()){const s=Sr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ri();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Sr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ge()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=Mn();const o=Ei(),c=function(){return Ei()}();return n.forEach((l,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof gr)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),wi(d.mutation,u,d.mutation.getFieldMask(),Qe.now())):o.set(u.key,Ut.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var p;return c.set(u,new LS(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=Ei();let s=new Fe((o,c)=>o-c),i=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let d=r.get(l)||Ut.empty();d=c.applyToLocalView(u,d),r.set(l,d);const p=(s.get(c.batchId)||ge()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,d=l.value,p=x_();d.forEach(m=>{if(!i.has(m)){const _=B_(n.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return se.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):C_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):B.resolve(Sr());let c=-1,l=i;return o.next(u=>B.forEach(u,(d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?B.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{l=l.insert(d,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,ge())).next(d=>({batchId:c,changes:N_(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next(r=>{let s=ri();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ri();return this.indexManager.getCollectionParents(e,i).next(c=>B.forEach(c,l=>{const u=function(p,m){return new Ds(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,mt.newInvalidDocument(d)))});let c=ri();return o.forEach((l,u)=>{const d=i.get(l);d!==void 0&&wi(d.mutation,u,Ut.empty(),Qe.now()),Ka(n,u)&&(c=c.insert(l,u))}),c})}}/**
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
 */class FS{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return B.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:gn(s.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:NS(s.bundledQuery),readTime:gn(s.readTime)}}(n)),B.resolve()}}/**
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
 */class BS{constructor(){this.overlays=new Fe(se.comparator),this.Ir=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Sr();return B.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const s=Sr(),i=n.length+1,o=new se(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return B.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Fe((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=Sr(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const c=Sr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,d)=>c.set(u,d)),!(c.size()>=s)););return B.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new lS(n,r));let i=this.Ir.get(n);i===void 0&&(i=ge(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class jS{constructor(){this.sessionToken=ot.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
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
 */class Vu{constructor(){this.Tr=new it(Je.Er),this.dr=new it(Je.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Je(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Je(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new se(new Ve([])),r=new Je(n,e),s=new Je(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new se(new Ve([])),r=new Je(n,e),s=new Je(n,e+1);let i=ge();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Je(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Je{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return se.comparator(e.key,n.key)||Ie(e.wr,n.wr)}static Ar(e,n){return Ie(e.wr,n.wr)||se.comparator(e.key,n.key)}}/**
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
 */class $S{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new it(Je.Er)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new cS(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.br=this.br.add(new Je(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return B.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Je(n,0),s=new Je(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const c=this.Dr(o.wr);i.push(c)}),B.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new it(Ie);return n.forEach(s=>{const i=new Je(s,0),o=new Je(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],c=>{r=r.add(c.wr)})}),B.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;se.isDocumentKey(i)||(i=i.child(""));const o=new Je(new se(i),0);let c=new it(Ie);return this.br.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.wr)),!0)},o),B.resolve(this.Cr(c))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Se(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return B.forEach(n.mutations,s=>{const i=new Je(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Je(n,0),s=this.br.firstAfterOrEqual(r);return B.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class qS{constructor(e){this.Mr=e,this.docs=function(){return new Fe(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():mt.newInvalidDocument(n))}getEntries(e,n){let r=Mn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():mt.newInvalidDocument(s))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Mn();const o=n.path,c=new se(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:d}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||RR(AR(d),r)<=0||(s.has(d.key)||Ka(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return B.resolve(i)}getAllFromCollectionGroup(e,n,r,s){he()}Or(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new HS(this)}getSize(e){return B.resolve(this.size)}}class HS extends MS{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class WS{constructor(e){this.persistence=e,this.Nr=new Ns(n=>Pu(n),Cu),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Vu,this.targetCount=0,this.kr=Ss.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),B.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ss(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.Kn(n),B.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),B.waitFor(i).next(()=>s)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),B.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.Br.containsKey(n))}}/**
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
 */class KS{constructor(e,n){this.qr={},this.overlays={},this.Qr=new bu(0),this.Kr=!1,this.Kr=!0,this.$r=new jS,this.referenceDelegate=e(this),this.Ur=new WS(this),this.indexManager=new xS,this.remoteDocumentCache=function(s){return new qS(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new DS(n),this.Gr=new FS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new BS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new $S(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){te("MemoryPersistence","Starting transaction:",e);const s=new zS(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return B.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class zS extends PR{constructor(e){super(),this.currentSequenceNumber=e}}class Mu{constructor(e){this.persistence=e,this.Jr=new Vu,this.Yr=null}static Zr(e){return new Mu(e)}get Xr(){if(this.Yr)return this.Yr;throw he()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),B.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.Xr,r=>{const s=se.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,de.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return B.or([()=>B.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class Lu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ge(),s=ge();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Lu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class GS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class QS{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return UI()?8:CR(_t())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new GS;return this.Xi(e,n,o).next(c=>{if(i.result=c,this.zi)return this.es(e,n,o,c.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Js()<=_e.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",as(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),B.resolve()):(Js()<=_e.DEBUG&&te("QueryEngine","Query:",as(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Js()<=_e.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",as(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mn(n))):B.resolve())}Yi(e,n){if(Yf(n))return B.resolve(null);let r=mn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=da(n,null,"F"),r=mn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ge(...i);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ts(n,c);return this.ns(n,u,o,l.readTime)?this.Yi(e,da(n,null,"F")):this.rs(e,u,n,l)}))})))}Zi(e,n,r,s){return Yf(n)||s.isEqual(de.min())?B.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?B.resolve(null):(Js()<=_e.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),as(n)),this.rs(e,o,n,bR(s,-1)).next(c=>c))})}ts(e,n){let r=new it(O_(e));return n.forEach((s,i)=>{Ka(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Js()<=_e.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",as(n)),this.Ji.getDocumentsMatchingQuery(e,n,cr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class YS{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Fe(Ie),this._s=new Ns(i=>Pu(i),Cu),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new US(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function JS(t,e,n,r){return new YS(t,e,n,r)}async function Z_(t,e){const n=fe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=ge();for(const u of s){o.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of i){c.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:c}))})})}function XS(t,e){const n=fe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,u,d){const p=u.batch,m=p.keys();let _=B.resolve();return m.forEach(R=>{_=_.next(()=>d.getEntry(l,R)).next(S=>{const O=u.docVersions.get(R);Se(O!==null),S.version.compareTo(O)<0&&(p.applyToRemoteDocument(S,u),S.isValidDocument()&&(S.setReadTime(u.commitVersion),d.addEntry(S)))})}),_.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=ge();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function ey(t){const e=fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function ZS(t,e){const n=fe(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const c=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;c.push(n.Ur.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,d.addedDocuments,p)));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(ot.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),s=s.insert(p,_),function(S,O,M){return S.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(m,_,d)&&c.push(n.Ur.updateTargetData(i,_))});let l=Mn(),u=ge();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push(eP(i,o,e.documentUpdates).next(d=>{l=d.Ps,u=d.Is})),!r.isEqual(de.min())){const d=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(d)}return B.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.os=s,i))}function eP(t,e,n){let r=ge(),s=ge();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Mn();return n.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(de.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):te("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function tP(t,e){const n=fe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function nP(t,e){const n=fe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,B.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new tr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Vl(t,e,n){const r=fe(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Xi(o))throw o;te("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function ap(t,e,n){const r=fe(t);let s=de.min(),i=ge();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,d){const p=fe(l),m=p._s.get(d);return m!==void 0?B.resolve(p.os.get(m)):p.Ur.getTargetData(u,d)}(r,o,mn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:de.min(),n?i:ge())).next(c=>(rP(r,zR(e),c),{documents:c,Ts:i})))}function rP(t,e,n){let r=t.us.get(e)||de.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class cp{constructor(){this.activeTargetIds=ZR()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sP{constructor(){this.so=new cp,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new cp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class iP{_o(e){}shutdown(){}}/**
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
 */class lp{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Po=null;function Wc(){return Po===null?Po=function(){return 268435456+Math.round(2147483648*Math.random())}():Po++,"0x"+Po.toString(16)}/**
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
 */const oP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class aP{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const ht="WebChannelConnection";class cP extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const c=Wc(),l=this.xo(n,r.toUriEncodedString());te("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,i,o),this.No(n,l,u,s).then(d=>(te("RestConnection",`Received RPC '${n}' ${c}: `,d),d),d=>{throw Is("RestConnection",`RPC '${n}' ${c} failed with error: `,d,"url: ",l,"request:",s),d})}Lo(n,r,s,i,o,c){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Os}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=oP[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Wc();return new Promise((o,c)=>{const l=new f_;l.setWithCredentials(!0),l.listenOnce(p_.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case qo.NO_ERROR:const d=l.getResponseJson();te(ht,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case qo.TIMEOUT:te(ht,`RPC '${e}' ${i} timed out`),c(new J(V.DEADLINE_EXCEEDED,"Request time out"));break;case qo.HTTP_ERROR:const p=l.getStatus();if(te(ht,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const R=function(O){const M=O.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(M)>=0?M:V.UNKNOWN}(_.status);c(new J(R,_.message))}else c(new J(V.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new J(V.UNAVAILABLE,"Connection failed."));break;default:he()}}finally{te(ht,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);te(ht,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}Bo(e,n,r){const s=Wc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=__(),c=g_(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=i.join("");te(ht,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=o.createWebChannel(d,l);let m=!1,_=!1;const R=new aP({Io:O=>{_?te(ht,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(m||(te(ht,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),te(ht,`RPC '${e}' stream ${s} sending:`,O),p.send(O))},To:()=>p.close()}),S=(O,M,L)=>{O.listen(M,j=>{try{L(j)}catch(F){setTimeout(()=>{throw F},0)}})};return S(p,ni.EventType.OPEN,()=>{_||(te(ht,`RPC '${e}' stream ${s} transport opened.`),R.yo())}),S(p,ni.EventType.CLOSE,()=>{_||(_=!0,te(ht,`RPC '${e}' stream ${s} transport closed`),R.So())}),S(p,ni.EventType.ERROR,O=>{_||(_=!0,Is(ht,`RPC '${e}' stream ${s} transport errored:`,O),R.So(new J(V.UNAVAILABLE,"The operation could not be completed")))}),S(p,ni.EventType.MESSAGE,O=>{var M;if(!_){const L=O.data[0];Se(!!L);const j=L,F=j.error||((M=j[0])===null||M===void 0?void 0:M.error);if(F){te(ht,`RPC '${e}' stream ${s} received error:`,F);const ne=F.status;let oe=function(v){const I=ze[v];if(I!==void 0)return q_(I)}(ne),b=F.message;oe===void 0&&(oe=V.INTERNAL,b="Unknown error status: "+ne+" with message "+F.message),_=!0,R.So(new J(oe,b)),p.close()}else te(ht,`RPC '${e}' stream ${s} received:`,L),R.bo(L)}}),S(c,m_.STAT_EVENT,O=>{O.stat===Al.PROXY?te(ht,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===Al.NOPROXY&&te(ht,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}function Kc(){return typeof document<"u"?document:null}/**
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
 */function Ya(t){return new yS(t,!0)}/**
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
 */class ty{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&te("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class ny{constructor(e,n,r,s,i,o,c,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new ty(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Vn(n.toString()),Vn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new J(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class lP extends ny{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=wS(this.serializer,e),r=function(i){if(!("targetChange"in i))return de.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?de.min():o.readTime?gn(o.readTime):de.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=xl(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=Cl(l)?{documents:bS(i,l)}:{query:AS(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=K_(i,o.resumeToken);const u=Ol(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(de.min())>0){c.readTime=ma(i,o.snapshotVersion.toTimestamp());const u=Ol(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=SS(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=xl(this.serializer),n.removeTarget=e,this.a_(n)}}class uP extends ny{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Se(!!e.streamToken),this.lastStreamToken=e.streamToken,Se(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=IS(e.writeResults,e.commitTime),r=gn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=xl(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>TS(this.serializer,r))};this.a_(n)}}/**
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
 */class hP extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new J(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Dl(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new J(V.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,Dl(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new J(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class dP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Vn(n),this.D_=!1):te("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class fP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Yr(this)&&(te("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=fe(l);u.L_.add(4),await to(u),u.q_.set("Unknown"),u.L_.delete(4),await Ja(u)}(this))})}),this.q_=new dP(r,s)}}async function Ja(t){if(Yr(t))for(const e of t.B_)await e(!0)}async function to(t){for(const e of t.B_)await e(!1)}function ry(t,e){const n=fe(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),ju(n)?Bu(n):xs(n).r_()&&Fu(n,e))}function Uu(t,e){const n=fe(t),r=xs(n);n.N_.delete(e),r.r_()&&sy(n,e),n.N_.size===0&&(r.r_()?r.o_():Yr(n)&&n.q_.set("Unknown"))}function Fu(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}xs(t).A_(e)}function sy(t,e){t.Q_.xe(e),xs(t).R_(e)}function Bu(t){t.Q_=new pS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),xs(t).start(),t.q_.v_()}function ju(t){return Yr(t)&&!xs(t).n_()&&t.N_.size>0}function Yr(t){return fe(t).L_.size===0}function iy(t){t.Q_=void 0}async function pP(t){t.q_.set("Online")}async function mP(t){t.N_.forEach((e,n)=>{Fu(t,e)})}async function gP(t,e){iy(t),ju(t)?(t.q_.M_(e),Bu(t)):t.q_.set("Unknown")}async function _P(t,e,n){if(t.q_.set("Online"),e instanceof W_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.N_.delete(c),s.Q_.removeTarget(c))}(t,e)}catch(r){te("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ga(t,r)}else if(e instanceof Ko?t.Q_.Ke(e):e instanceof H_?t.Q_.He(e):t.Q_.We(e),!n.isEqual(de.min()))try{const r=await ey(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Q_.rt(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.N_.get(u);d&&i.N_.set(u,d.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const d=i.N_.get(l);if(!d)return;i.N_.set(l,d.withResumeToken(ot.EMPTY_BYTE_STRING,d.snapshotVersion)),sy(i,l);const p=new tr(d.target,l,u,d.sequenceNumber);Fu(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){te("RemoteStore","Failed to raise snapshot:",r),await ga(t,r)}}async function ga(t,e,n){if(!Xi(e))throw e;t.L_.add(1),await to(t),t.q_.set("Offline"),n||(n=()=>ey(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Ja(t)})}function oy(t,e){return e().catch(n=>ga(t,n,e))}async function Xa(t){const e=fe(t),n=ur(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;yP(e);)try{const s=await tP(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,vP(e,s)}catch(s){await ga(e,s)}ay(e)&&cy(e)}function yP(t){return Yr(t)&&t.O_.length<10}function vP(t,e){t.O_.push(e);const n=ur(t);n.r_()&&n.V_&&n.m_(e.mutations)}function ay(t){return Yr(t)&&!ur(t).n_()&&t.O_.length>0}function cy(t){ur(t).start()}async function EP(t){ur(t).p_()}async function wP(t){const e=ur(t);for(const n of t.O_)e.m_(n.mutations)}async function TP(t,e,n){const r=t.O_.shift(),s=Du.from(r,e,n);await oy(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Xa(t)}async function IP(t,e){e&&ur(t).V_&&await async function(r,s){if(function(o){return hS(o)&&o!==V.ABORTED}(s.code)){const i=r.O_.shift();ur(r).s_(),await oy(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Xa(r)}}(t,e),ay(t)&&cy(t)}async function up(t,e){const n=fe(t);n.asyncQueue.verifyOperationInProgress(),te("RemoteStore","RemoteStore received new credentials");const r=Yr(n);n.L_.add(3),await to(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Ja(n)}async function bP(t,e){const n=fe(t);e?(n.L_.delete(2),await Ja(n)):e||(n.L_.add(2),await to(n),n.q_.set("Unknown"))}function xs(t){return t.K_||(t.K_=function(n,r,s){const i=fe(n);return i.w_(),new lP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:pP.bind(null,t),Ro:mP.bind(null,t),mo:gP.bind(null,t),d_:_P.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),ju(t)?Bu(t):t.q_.set("Unknown")):(await t.K_.stop(),iy(t))})),t.K_}function ur(t){return t.U_||(t.U_=function(n,r,s){const i=fe(n);return i.w_(),new uP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:EP.bind(null,t),mo:IP.bind(null,t),f_:wP.bind(null,t),g_:TP.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Xa(t)):(await t.U_.stop(),t.O_.length>0&&(te("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class $u{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Dn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new $u(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qu(t,e){if(Vn("AsyncQueue",`${e}: ${t}`),Xi(t))return new J(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ys{constructor(e){this.comparator=e?(n,r)=>e(n,r)||se.comparator(n.key,r.key):(n,r)=>se.comparator(n.key,r.key),this.keyedMap=ri(),this.sortedSet=new Fe(this.comparator)}static emptySet(e){return new ys(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ys)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ys;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class hp{constructor(){this.W_=new Fe(se.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):he():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ps{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new Ps(e,n,ys.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class AP{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class RP{constructor(){this.queries=dp(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=fe(n),i=s.queries;s.queries=dp(),i.forEach((o,c)=>{for(const l of c.j_)l.onError(r)})})(this,new J(V.ABORTED,"Firestore shutting down"))}}function dp(){return new Ns(t=>k_(t),Wa)}async function ly(t,e){const n=fe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new AP,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=qu(o,`Initialization of query '${as(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Hu(n)}async function uy(t,e){const n=fe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function SP(t,e){const n=fe(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.j_)c.X_(s)&&(r=!0);o.z_=s}}r&&Hu(n)}function PP(t,e,n){const r=fe(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Hu(t){t.Y_.forEach(e=>{e.next()})}var Ml,fp;(fp=Ml||(Ml={})).ea="default",fp.Cache="cache";class hy{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ps(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Ps.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Ml.Cache}}/**
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
 */class dy{constructor(e){this.key=e}}class fy{constructor(e){this.key=e}}class CP{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ge(),this.mutatedKeys=ge(),this.Aa=O_(e),this.Ra=new ys(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new hp,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),_=Ka(this.query,p)?p:null,R=!!m&&this.mutatedKeys.has(m.key),S=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let O=!1;m&&_?m.data.isEqual(_.data)?R!==S&&(r.track({type:3,doc:_}),O=!0):this.ga(m,_)||(r.track({type:2,doc:_}),O=!0,(l&&this.Aa(_,l)>0||u&&this.Aa(_,u)<0)&&(c=!0)):!m&&_?(r.track({type:0,doc:_}),O=!0):m&&!_&&(r.track({type:1,doc:m}),O=!0,(l||u)&&(c=!0)),O&&(_?(o=o.add(_),i=S?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:c,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(_,R){const S=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he()}};return S(_)-S(R)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),s=s!=null&&s;const c=n&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,u=l!==this.Ea;return this.Ea=l,o.length!==0||u?{snapshot:new Ps(this.query,e.Ra,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new hp,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ge(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new fy(r))}),this.da.forEach(r=>{e.has(r)||n.push(new dy(r))}),n}ba(e){this.Ta=e.Ts,this.da=ge();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Ps.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class kP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class OP{constructor(e){this.key=e,this.va=!1}}class DP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ns(c=>k_(c),Wa),this.Ma=new Map,this.xa=new Set,this.Oa=new Fe(se.comparator),this.Na=new Map,this.La=new Vu,this.Ba={},this.ka=new Map,this.qa=Ss.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function NP(t,e,n=!0){const r=vy(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await py(r,e,n,!0),s}async function xP(t,e){const n=vy(t);await py(n,e,!0,!1)}async function py(t,e,n,r){const s=await nP(t.localStore,mn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await VP(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&ry(t.remoteStore,s),c}async function VP(t,e,n,r,s){t.Ka=(p,m,_)=>async function(S,O,M,L){let j=O.view.ma(M);j.ns&&(j=await ap(S.localStore,O.query,!1).then(({documents:b})=>O.view.ma(b,j)));const F=L&&L.targetChanges.get(O.targetId),ne=L&&L.targetMismatches.get(O.targetId)!=null,oe=O.view.applyChanges(j,S.isPrimaryClient,F,ne);return mp(S,O.targetId,oe.wa),oe.snapshot}(t,p,m,_);const i=await ap(t.localStore,e,!0),o=new CP(e,i.Ts),c=o.ma(i.documents),l=eo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);mp(t,n,u.wa);const d=new kP(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function MP(t,e,n){const r=fe(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Wa(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Vl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Uu(r.remoteStore,s.targetId),Ll(r,s.targetId)}).catch(Ji)):(Ll(r,s.targetId),await Vl(r.localStore,s.targetId,!0))}async function LP(t,e){const n=fe(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Uu(n.remoteStore,r.targetId))}async function UP(t,e,n){const r=WP(t);try{const s=await function(o,c){const l=fe(o),u=Qe.now(),d=c.reduce((_,R)=>_.add(R.key),ge());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let R=Mn(),S=ge();return l.cs.getEntries(_,d).next(O=>{R=O,R.forEach((M,L)=>{L.isValidDocument()||(S=S.add(M))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,R)).next(O=>{p=O;const M=[];for(const L of c){const j=oS(L,p.get(L.key).overlayedDocument);j!=null&&M.push(new gr(L.key,j,T_(j.value.mapValue),Xt.exists(!0)))}return l.mutationQueue.addMutationBatch(_,u,M,c)}).next(O=>{m=O;const M=O.applyToLocalDocumentSet(p,S);return l.documentOverlayCache.saveOverlays(_,O.batchId,M)})}).then(()=>({batchId:m.batchId,changes:N_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.Ba[o.currentUser.toKey()];u||(u=new Fe(Ie)),u=u.insert(c,l),o.Ba[o.currentUser.toKey()]=u}(r,s.batchId,n),await no(r,s.changes),await Xa(r.remoteStore)}catch(s){const i=qu(s,"Failed to persist write");n.reject(i)}}async function my(t,e){const n=fe(t);try{const r=await ZS(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(Se(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?Se(o.va):s.removedDocuments.size>0&&(Se(o.va),o.va=!1))}),await no(n,r,e)}catch(r){await Ji(r)}}function pp(t,e,n){const r=fe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const c=o.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=fe(o);l.onlineState=c;let u=!1;l.queries.forEach((d,p)=>{for(const m of p.j_)m.Z_(c)&&(u=!0)}),u&&Hu(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function FP(t,e,n){const r=fe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Fe(se.comparator);o=o.insert(i,mt.newNoDocument(i,de.min()));const c=ge().add(i),l=new Qa(de.min(),new Map,new Fe(Ie),o,c);await my(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),Wu(r)}else await Vl(r.localStore,e,!1).then(()=>Ll(r,e,n)).catch(Ji)}async function BP(t,e){const n=fe(t),r=e.batch.batchId;try{const s=await XS(n.localStore,e);_y(n,r,null),gy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await no(n,s)}catch(s){await Ji(s)}}async function jP(t,e,n){const r=fe(t);try{const s=await function(o,c){const l=fe(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return l.mutationQueue.lookupMutationBatch(u,c).next(p=>(Se(p!==null),d=p.keys(),l.mutationQueue.removeMutationBatch(u,p))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,d,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>l.localDocuments.getDocuments(u,d))})}(r.localStore,e);_y(r,e,n),gy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await no(r,s)}catch(s){await Ji(s)}}function gy(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function _y(t,e,n){const r=fe(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Ll(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||yy(t,r)})}function yy(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Uu(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Wu(t))}function mp(t,e,n){for(const r of n)r instanceof dy?(t.La.addReference(r.key,e),$P(t,r)):r instanceof fy?(te("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||yy(t,r.key)):he()}function $P(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(te("SyncEngine","New document in limbo: "+n),t.xa.add(r),Wu(t))}function Wu(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new se(Ve.fromString(e)),r=t.qa.next();t.Na.set(r,new OP(n)),t.Oa=t.Oa.insert(n,r),ry(t.remoteStore,new tr(mn(ku(n.path)),r,"TargetPurposeLimboResolution",bu.oe))}}async function no(t,e,n){const r=fe(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{o.push(r.Ka(l,e,n).then(u=>{var d;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Lu.Wi(l.targetId,u);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(l,u){const d=fe(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>B.forEach(u,m=>B.forEach(m.$i,_=>d.persistence.referenceDelegate.addReference(p,m.targetId,_)).next(()=>B.forEach(m.Ui,_=>d.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))}catch(p){if(!Xi(p))throw p;te("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const _=d.os.get(m),R=_.snapshotVersion,S=_.withLastLimboFreeSnapshotVersion(R);d.os=d.os.insert(m,S)}}}(r.localStore,i))}async function qP(t,e){const n=fe(t);if(!n.currentUser.isEqual(e)){te("SyncEngine","User change. New user:",e.toKey());const r=await Z_(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new J(V.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await no(n,r.hs)}}function HP(t,e){const n=fe(t),r=n.Na.get(e);if(r&&r.va)return ge().add(r.key);{let s=ge();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const c=n.Fa.get(o);s=s.unionWith(c.view.Va)}return s}}function vy(t){const e=fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=my.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=HP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=FP.bind(null,e),e.Ca.d_=SP.bind(null,e.eventManager),e.Ca.$a=PP.bind(null,e.eventManager),e}function WP(t){const e=fe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=BP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=jP.bind(null,e),e}class _a{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ya(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return JS(this.persistence,new QS,e.initialUser,this.serializer)}Ga(e){return new KS(Mu.Zr,this.serializer)}Wa(e){return new sP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_a.provider={build:()=>new _a};class Ul{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>pp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=qP.bind(null,this.syncEngine),await bP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new RP}()}createDatastore(e){const n=Ya(e.databaseInfo.databaseId),r=function(i){return new cP(i)}(e.databaseInfo);return function(i,o,c,l){return new hP(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new fP(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>pp(this.syncEngine,n,0),function(){return lp.D()?new lp:new iP}())}createSyncEngine(e,n){return function(s,i,o,c,l,u,d){const p=new DP(s,i,o,c,l,u);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=fe(s);te("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await to(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Ul.provider={build:()=>new Ul};/**
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
 */class Ey{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Vn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class KP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=dt.UNAUTHENTICATED,this.clientId=v_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{te("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(te("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Dn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=qu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function zc(t,e){t.asyncQueue.verifyOperationInProgress(),te("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Z_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function gp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zP(t);te("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>up(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>up(e.remoteStore,s)),t._onlineComponents=e}async function zP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te("FirestoreClient","Using user provided OfflineComponentProvider");try{await zc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Is("Error using user provided cache. Falling back to memory cache: "+n),await zc(t,new _a)}}else te("FirestoreClient","Using default OfflineComponentProvider"),await zc(t,new _a);return t._offlineComponents}async function wy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te("FirestoreClient","Using user provided OnlineComponentProvider"),await gp(t,t._uninitializedComponentsProvider._online)):(te("FirestoreClient","Using default OnlineComponentProvider"),await gp(t,new Ul))),t._onlineComponents}function GP(t){return wy(t).then(e=>e.syncEngine)}async function Ty(t){const e=await wy(t),n=e.eventManager;return n.onListen=NP.bind(null,e.syncEngine),n.onUnlisten=MP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=xP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=LP.bind(null,e.syncEngine),n}function QP(t,e,n={}){const r=new Dn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const d=new Ey({next:m=>{d.Za(),o.enqueueAndForget(()=>uy(i,p));const _=m.docs.has(c);!_&&m.fromCache?u.reject(new J(V.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&l&&l.source==="server"?u.reject(new J(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new hy(ku(c.path),d,{includeMetadataChanges:!0,_a:!0});return ly(i,p)}(await Ty(t),t.asyncQueue,e,n,r)),r.promise}function YP(t,e,n={}){const r=new Dn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const d=new Ey({next:m=>{d.Za(),o.enqueueAndForget(()=>uy(i,p)),m.fromCache&&l.source==="server"?u.reject(new J(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new hy(c,d,{includeMetadataChanges:!0,_a:!0});return ly(i,p)}(await Ty(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Iy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const _p=new Map;/**
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
 */function by(t,e,n){if(!n)throw new J(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function JP(t,e,n,r){if(e===!0&&r===!0)throw new J(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function yp(t){if(!se.isDocumentKey(t))throw new J(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function vp(t){if(se.isDocumentKey(t))throw new J(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Za(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":he()}function En(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new J(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Za(t);throw new J(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function XP(t,e){if(e<=0)throw new J(V.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class Ep{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new J(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new J(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}JP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Iy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new J(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new J(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new J(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ec{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ep({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new J(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ep(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new mR;switch(r.type){case"firstParty":return new vR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=_p.get(n);r&&(te("ComponentProvider","Removing Datastore"),_p.delete(n),r.terminate())}(this),Promise.resolve()}}function ZP(t,e,n,r={}){var s;const i=(t=En(t,ec))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Is("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=dt.MOCK_USER;else{c=Eg(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new J(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new dt(u)}t._authCredentials=new gR(new y_(c,l))}}/**
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
 */class _r{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new _r(this.firestore,e,this._query)}}class At{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ar(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new At(this.firestore,e,this._key)}}class ar extends _r{constructor(e,n,r){super(e,n,ku(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new At(this.firestore,null,new se(e))}withConverter(e){return new ar(this.firestore,e,this._path)}}function GO(t,e,...n){if(t=Me(t),by("collection","path",e),t instanceof ec){const r=Ve.fromString(e,...n);return vp(r),new ar(t,null,r)}{if(!(t instanceof At||t instanceof ar))throw new J(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return vp(r),new ar(t.firestore,null,r)}}function tc(t,e,...n){if(t=Me(t),arguments.length===1&&(e=v_.newId()),by("doc","path",e),t instanceof ec){const r=Ve.fromString(e,...n);return yp(r),new At(t,null,new se(r))}{if(!(t instanceof At||t instanceof ar))throw new J(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return yp(r),new At(t.firestore,t instanceof ar?t.converter:null,new se(r))}}/**
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
 */class wp{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new ty(this,"async_queue_retry"),this.Vu=()=>{const r=Kc();r&&te("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Kc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Kc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Dn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Xi(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw Vn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=$u.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&he()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Vs extends ec{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new wp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new wp(e),this._firestoreClient=void 0,await e}}}function eC(t,e){const n=typeof t=="object"?t:Ba(),r=typeof t=="string"?t:"(default)",s=pr(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=_g("firestore");i&&ZP(s,...i)}return s}function Ku(t){if(t._terminated)throw new J(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||tC(t),t._firestoreClient}function tC(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,u,d){return new DR(c,l,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Iy(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new KP(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
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
 */class Cs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Cs(ot.fromBase64String(e))}catch(n){throw new J(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Cs(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class nc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new J(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class zu{constructor(e){this._methodName=e}}/**
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
 */class Gu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new J(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new J(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Qu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const nC=/^__.*__$/;class rC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new gr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Zi(e,this.data,n,this.fieldTransforms)}}class Ay{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new gr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Ry(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he()}}class Yu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Yu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ya(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Ry(this.Cu)&&nC.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class sC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ya(e)}Qu(e,n,r,s=!1){return new Yu({Cu:e,methodName:n,qu:r,path:st.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rc(t){const e=t._freezeSettings(),n=Ya(t._databaseId);return new sC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Sy(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);Ju("Data must be an object, but it was:",o,r);const c=Py(r,o);let l,u;if(i.merge)l=new Ut(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=Fl(e,p,n);if(!o.contains(m))throw new J(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);ky(d,m)||d.push(m)}l=new Ut(d),u=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,u=o.fieldTransforms;return new rC(new Ot(c),l,u)}class sc extends zu{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof sc}}function iC(t,e,n,r){const s=t.Qu(1,e,n);Ju("Data must be an object, but it was:",s,r);const i=[],o=Ot.empty();Qr(r,(l,u)=>{const d=Xu(e,l,n);u=Me(u);const p=s.Nu(d);if(u instanceof sc)i.push(d);else{const m=ro(u,p);m!=null&&(i.push(d),o.set(d,m))}});const c=new Ut(i);return new Ay(o,c,s.fieldTransforms)}function oC(t,e,n,r,s,i){const o=t.Qu(1,e,n),c=[Fl(e,r,n)],l=[s];if(i.length%2!=0)throw new J(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(Fl(e,i[m])),l.push(i[m+1]);const u=[],d=Ot.empty();for(let m=c.length-1;m>=0;--m)if(!ky(u,c[m])){const _=c[m];let R=l[m];R=Me(R);const S=o.Nu(_);if(R instanceof sc)u.push(_);else{const O=ro(R,S);O!=null&&(u.push(_),d.set(_,O))}}const p=new Ut(u);return new Ay(d,p,o.fieldTransforms)}function aC(t,e,n,r=!1){return ro(n,t.Qu(r?4:3,e))}function ro(t,e){if(Cy(t=Me(t)))return Ju("Unsupported field value:",e,t),Py(t,e);if(t instanceof zu)return function(r,s){if(!Ry(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=ro(c,s.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Me(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return eS(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Qe.fromDate(r);return{timestampValue:ma(s.serializer,i)}}if(r instanceof Qe){const i=new Qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ma(s.serializer,i)}}if(r instanceof Gu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Cs)return{bytesValue:K_(s.serializer,r._byteString)};if(r instanceof At){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:xu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Qu)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return Ou(c.serializer,l)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Za(r)}`)}(t,e)}function Py(t,e){const n={};return E_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qr(t,(r,s)=>{const i=ro(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Cy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Qe||t instanceof Gu||t instanceof Cs||t instanceof At||t instanceof zu||t instanceof Qu)}function Ju(t,e,n){if(!Cy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Za(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Fl(t,e,n){if((e=Me(e))instanceof nc)return e._internalPath;if(typeof e=="string")return Xu(t,e);throw ya("Field path arguments must be of type string or ",t,!1,void 0,n)}const cC=new RegExp("[~\\*/\\[\\]]");function Xu(t,e,n){if(e.search(cC)>=0)throw ya(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new nc(...e.split("."))._internalPath}catch{throw ya(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ya(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new J(V.INVALID_ARGUMENT,c+t+l)}function ky(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Oy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new lC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ic("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class lC extends Oy{data(){return super.data()}}function ic(t,e){return typeof e=="string"?Xu(t,e):e instanceof nc?e._internalPath:e._delegate._internalPath}/**
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
 */function uC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new J(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Zu{}class eh extends Zu{}function QO(t,e,...n){let r=[];e instanceof Zu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof th).length,c=i.filter(l=>l instanceof oc).length;if(o>1||o>0&&c>0)throw new J(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class oc extends eh{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new oc(e,n,r)}_apply(e){const n=this._parse(e);return Dy(e._query,n),new _r(e.firestore,e.converter,kl(e._query,n))}_parse(e){const n=rc(e.firestore);return function(i,o,c,l,u,d,p){let m;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new J(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Ip(p,d);const _=[];for(const R of p)_.push(Tp(l,i,R));m={arrayValue:{values:_}}}else m=Tp(l,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Ip(p,d),m=aC(c,o,p,d==="in"||d==="not-in");return Ge.create(u,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function YO(t,e,n){const r=e,s=ic("where",t);return oc._create(s,r,n)}class th extends Zu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new th(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:nn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)Dy(o,l),o=kl(o,l)}(e._query,n),new _r(e.firestore,e.converter,kl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class nh extends eh{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new nh(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new J(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new J(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Fi(i,o)}(e._query,this._field,this._direction);return new _r(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Ds(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function JO(t,e="asc"){const n=e,r=ic("orderBy",t);return nh._create(r,n)}class rh extends eh{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new rh(e,n,r)}_apply(e){return new _r(e.firestore,e.converter,da(e._query,this._limit,this._limitType))}}function XO(t){return XP("limit",t),rh._create("limit",t,"F")}function Tp(t,e,n){if(typeof(n=Me(n))=="string"){if(n==="")throw new J(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!C_(e)&&n.indexOf("/")!==-1)throw new J(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ve.fromString(n));if(!se.isDocumentKey(r))throw new J(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Hf(t,new se(r))}if(n instanceof At)return Hf(t,n._key);throw new J(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Za(n)}.`)}function Ip(t,e){if(!Array.isArray(t)||t.length===0)throw new J(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Dy(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new J(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new J(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class hC{convertValue(e,n="none"){switch(Br(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Fr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw he()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Qr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>qe(o.doubleValue));return new Qu(i)}convertGeoPoint(e){return new Gu(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ru(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Mi(e));default:return null}}convertTimestamp(e){const n=lr(e);return new Qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ve.fromString(e);Se(X_(r));const s=new Li(r.get(1),r.get(3)),i=new se(r.popFirst(5));return s.isEqual(n)||Vn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Ny(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class ii{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xy extends Oy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new zo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ic("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class zo extends xy{data(e={}){return super.data(e)}}class dC{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ii(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new zo(this._firestore,this._userDataWriter,r.key,r,new ii(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new J(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new zo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ii(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new zo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ii(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),d=o.indexOf(c.doc.key)),{type:fC(c.type),doc:l,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function fC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he()}}/**
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
 */function pC(t){t=En(t,At);const e=En(t.firestore,Vs);return QP(Ku(e),t._key).then(n=>_C(e,t,n))}class Vy extends hC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Cs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new At(this.firestore,null,n)}}function ZO(t){t=En(t,_r);const e=En(t.firestore,Vs),n=Ku(e),r=new Vy(e);return uC(t._query),YP(n,t._query).then(s=>new dC(e,r,t,s))}function mC(t,e,n){t=En(t,At);const r=En(t.firestore,Vs),s=Ny(t.converter,e);return sh(r,[Sy(rc(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Xt.none())])}function gC(t,e,n,...r){t=En(t,At);const s=En(t.firestore,Vs),i=rc(s);let o;return o=typeof(e=Me(e))=="string"||e instanceof nc?oC(i,"updateDoc",t._key,e,n,r):iC(i,"updateDoc",t._key,e),sh(s,[o.toMutation(t._key,Xt.exists(!0))])}function eD(t,e){const n=En(t.firestore,Vs),r=tc(t),s=Ny(t.converter,e);return sh(n,[Sy(rc(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Xt.exists(!1))]).then(()=>r)}function sh(t,e){return function(r,s){const i=new Dn;return r.asyncQueue.enqueueAndForget(async()=>UP(await GP(r),s,i)),i.promise}(Ku(t),e)}function _C(t,e,n){const r=n.docs.get(e._key),s=new Vy(t);return new xy(t,s,e._key,r,new ii(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Os=s})(zr),en(new Kt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Vs(new _R(r.getProvider("auth-internal")),new wR(r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new J(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Li(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Dt(Ff,"4.7.3",e),Dt(Ff,"4.7.3","esm2017")})();var yC="firebase",vC="10.14.1";/**
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
 */Dt(yC,vC,"app");const My="@firebase/installations",ih="0.6.9";/**
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
 */const Ly=1e4,Uy=`w:${ih}`,Fy="FIS_v2",EC="https://firebaseinstallations.googleapis.com/v1",wC=60*60*1e3,TC="installations",IC="Installations";/**
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
 */const bC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},jr=new Kr(TC,IC,bC);function By(t){return t instanceof zt&&t.code.includes("request-failed")}/**
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
 */function jy({projectId:t}){return`${EC}/projects/${t}/installations`}function $y(t){return{token:t.token,requestStatus:2,expiresIn:RC(t.expiresIn),creationTime:Date.now()}}async function qy(t,e){const r=(await e.json()).error;return jr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Hy({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function AC(t,{refreshToken:e}){const n=Hy(t);return n.append("Authorization",SC(e)),n}async function Wy(t){const e=await t();return e.status>=500&&e.status<600?t():e}function RC(t){return Number(t.replace("s","000"))}function SC(t){return`${Fy} ${t}`}/**
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
 */async function PC({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=jy(t),s=Hy(t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:n,authVersion:Fy,appId:t.appId,sdkVersion:Uy},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await Wy(()=>fetch(r,c));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:$y(u.authToken)}}else throw await qy("Create Installation",l)}/**
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
 */function Ky(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function CC(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const kC=/^[cdef][\w-]{21}$/,Bl="";function OC(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=DC(t);return kC.test(n)?n:Bl}catch{return Bl}}function DC(t){return CC(t).substr(0,22)}/**
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
 */function ac(t){return`${t.appName}!${t.appId}`}/**
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
 */const zy=new Map;function Gy(t,e){const n=ac(t);Qy(n,e),NC(n,e)}function Qy(t,e){const n=zy.get(t);if(n)for(const r of n)r(e)}function NC(t,e){const n=xC();n&&n.postMessage({key:t,fid:e}),VC()}let Pr=null;function xC(){return!Pr&&"BroadcastChannel"in self&&(Pr=new BroadcastChannel("[Firebase] FID Change"),Pr.onmessage=t=>{Qy(t.data.key,t.data.fid)}),Pr}function VC(){zy.size===0&&Pr&&(Pr.close(),Pr=null)}/**
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
 */const MC="firebase-installations-database",LC=1,$r="firebase-installations-store";let Gc=null;function oh(){return Gc||(Gc=Rg(MC,LC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore($r)}}})),Gc}async function va(t,e){const n=ac(t),s=(await oh()).transaction($r,"readwrite"),i=s.objectStore($r),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&Gy(t,e.fid),e}async function Yy(t){const e=ac(t),r=(await oh()).transaction($r,"readwrite");await r.objectStore($r).delete(e),await r.done}async function cc(t,e){const n=ac(t),s=(await oh()).transaction($r,"readwrite"),i=s.objectStore($r),o=await i.get(n),c=e(o);return c===void 0?await i.delete(n):await i.put(c,n),await s.done,c&&(!o||o.fid!==c.fid)&&Gy(t,c.fid),c}/**
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
 */async function ah(t){let e;const n=await cc(t.appConfig,r=>{const s=UC(r),i=FC(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Bl?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function UC(t){const e=t||{fid:OC(),registrationStatus:0};return Jy(e)}function FC(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(jr.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=BC(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:jC(t)}:{installationEntry:e}}async function BC(t,e){try{const n=await PC(t,e);return va(t.appConfig,n)}catch(n){throw By(n)&&n.customData.serverCode===409?await Yy(t.appConfig):await va(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function jC(t){let e=await bp(t.appConfig);for(;e.registrationStatus===1;)await Ky(100),e=await bp(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ah(t);return r||n}return e}function bp(t){return cc(t,e=>{if(!e)throw jr.create("installation-not-found");return Jy(e)})}function Jy(t){return $C(t)?{fid:t.fid,registrationStatus:0}:t}function $C(t){return t.registrationStatus===1&&t.registrationTime+Ly<Date.now()}/**
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
 */async function qC({appConfig:t,heartbeatServiceProvider:e},n){const r=HC(t,n),s=AC(t,n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:Uy,appId:t.appId}},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await Wy(()=>fetch(r,c));if(l.ok){const u=await l.json();return $y(u)}else throw await qy("Generate Auth Token",l)}function HC(t,{fid:e}){return`${jy(t)}/${e}/authTokens:generate`}/**
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
 */async function ch(t,e=!1){let n;const r=await cc(t.appConfig,i=>{if(!Xy(i))throw jr.create("not-registered");const o=i.authToken;if(!e&&zC(o))return i;if(o.requestStatus===1)return n=WC(t,e),i;{if(!navigator.onLine)throw jr.create("app-offline");const c=QC(i);return n=KC(t,c),c}});return n?await n:r.authToken}async function WC(t,e){let n=await Ap(t.appConfig);for(;n.authToken.requestStatus===1;)await Ky(100),n=await Ap(t.appConfig);const r=n.authToken;return r.requestStatus===0?ch(t,e):r}function Ap(t){return cc(t,e=>{if(!Xy(e))throw jr.create("not-registered");const n=e.authToken;return YC(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function KC(t,e){try{const n=await qC(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await va(t.appConfig,r),n}catch(n){if(By(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Yy(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await va(t.appConfig,r)}throw n}}function Xy(t){return t!==void 0&&t.registrationStatus===2}function zC(t){return t.requestStatus===2&&!GC(t)}function GC(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+wC}function QC(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function YC(t){return t.requestStatus===1&&t.requestTime+Ly<Date.now()}/**
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
 */async function JC(t){const e=t,{installationEntry:n,registrationPromise:r}=await ah(e);return r?r.catch(console.error):ch(e).catch(console.error),n.fid}/**
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
 */async function XC(t,e=!1){const n=t;return await ZC(n),(await ch(n,e)).token}async function ZC(t){const{registrationPromise:e}=await ah(t);e&&await e}/**
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
 */function ek(t){if(!t||!t.options)throw Qc("App Configuration");if(!t.name)throw Qc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Qc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Qc(t){return jr.create("missing-app-config-values",{valueName:t})}/**
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
 */const Zy="installations",tk="installations-internal",nk=t=>{const e=t.getProvider("app").getImmediate(),n=ek(e),r=pr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},rk=t=>{const e=t.getProvider("app").getImmediate(),n=pr(e,Zy).getImmediate();return{getId:()=>JC(n),getToken:s=>XC(n,s)}};function sk(){en(new Kt(Zy,nk,"PUBLIC")),en(new Kt(tk,rk,"PRIVATE"))}sk();Dt(My,ih);Dt(My,ih,"esm2017");/**
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
 */const Ea="analytics",ik="firebase_id",ok="origin",ak=60*1e3,ck="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",lh="https://www.googletagmanager.com/gtag/js";/**
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
 */const Nt=new Fa("@firebase/analytics");/**
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
 */const lk={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Bt=new Kr("analytics","Analytics",lk);/**
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
 */function uk(t){if(!t.startsWith(lh)){const e=Bt.create("invalid-gtag-resource",{gtagURL:t});return Nt.warn(e.message),""}return t}function ev(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function hk(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function dk(t,e){const n=hk("firebase-js-sdk-policy",{createScriptURL:uk}),r=document.createElement("script"),s=`${lh}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function fk(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function pk(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const l=(await ev(n)).find(u=>u.measurementId===s);l&&await e[l.appId]}}catch(c){Nt.error(c)}t("config",s,i)}async function mk(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const c=await ev(n);for(const l of o){const u=c.find(p=>p.measurementId===l),d=u&&e[u.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Nt.error(i)}}function gk(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[c,l]=o;await mk(t,e,n,c,l)}else if(i==="config"){const[c,l]=o;await pk(t,e,n,r,c,l)}else if(i==="consent"){const[c,l]=o;t("consent",c,l)}else if(i==="get"){const[c,l,u]=o;t("get",c,l,u)}else if(i==="set"){const[c]=o;t("set",c)}else t(i,...o)}catch(c){Nt.error(c)}}return s}function _k(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=gk(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function yk(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(lh)&&n.src.includes(t))return n;return null}/**
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
 */const vk=30,Ek=1e3;class wk{constructor(e={},n=Ek){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const tv=new wk;function Tk(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Ik(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:Tk(r)},i=ck.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let c="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(c=l.error.message)}catch{}throw Bt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:c})}return o.json()}async function bk(t,e=tv,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Bt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Bt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new Sk;return setTimeout(async()=>{c.abort()},ak),nv({appId:r,apiKey:s,measurementId:i},o,c,e)}async function nv(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=tv){var i;const{appId:o,measurementId:c}=t;try{await Ak(r,e)}catch(l){if(c)return Nt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:c};throw l}try{const l=await Ik(t);return s.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!Rk(u)){if(s.deleteThrottleMetadata(o),c)return Nt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:c};throw l}const d=Number((i=u==null?void 0:u.customData)===null||i===void 0?void 0:i.httpStatus)===503?lf(n,s.intervalMillis,vk):lf(n,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(o,p),Nt.debug(`Calling attemptFetch again in ${d} millis`),nv(t,p,r,s)}}function Ak(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Bt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Rk(t){if(!(t instanceof zt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Sk{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Pk(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
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
 */async function Ck(){if(Tg())try{await Ig()}catch(t){return Nt.warn(Bt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Nt.warn(Bt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function kk(t,e,n,r,s,i,o){var c;const l=bk(t);l.then(_=>{n[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&Nt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>Nt.error(_)),e.push(l);const u=Ck().then(_=>{if(_)return r.getId()}),[d,p]=await Promise.all([l,u]);yk(i)||dk(i,d.measurementId),s("js",new Date);const m=(c=o==null?void 0:o.config)!==null&&c!==void 0?c:{};return m[ok]="firebase",m.update=!0,p!=null&&(m[ik]=p),s("config",d.measurementId,m),d.measurementId}/**
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
 */class Ok{constructor(e){this.app=e}_delete(){return delete Ti[this.app.options.appId],Promise.resolve()}}let Ti={},Rp=[];const Sp={};let Yc="dataLayer",Dk="gtag",Pp,rv,Cp=!1;function Nk(){const t=[];if(wg()&&t.push("This is a browser extension environment."),FI()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Bt.create("invalid-analytics-context",{errorInfo:e});Nt.warn(n.message)}}function xk(t,e,n){Nk();const r=t.options.appId;if(!r)throw Bt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Nt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Bt.create("no-api-key");if(Ti[r]!=null)throw Bt.create("already-exists",{id:r});if(!Cp){fk(Yc);const{wrappedGtag:i,gtagCore:o}=_k(Ti,Rp,Sp,Yc,Dk);rv=i,Pp=o,Cp=!0}return Ti[r]=kk(t,Rp,Sp,e,Pp,Yc,n),new Ok(t)}function Vk(t=Ba()){t=Me(t);const e=pr(t,Ea);return e.isInitialized()?e.getImmediate():Mk(t)}function Mk(t,e={}){const n=pr(t,Ea);if(n.isInitialized()){const s=n.getImmediate();if(Oi(e,n.getOptions()))return s;throw Bt.create("already-initialized")}return n.initialize({options:e})}function Lk(t,e,n,r){t=Me(t),Pk(rv,Ti[t.app.options.appId],e,n,r).catch(s=>Nt.error(s))}const kp="@firebase/analytics",Op="0.10.8";function Uk(){en(new Kt(Ea,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return xk(r,s,n)},"PUBLIC")),en(new Kt("analytics-internal",t,"PRIVATE")),Dt(kp,Op),Dt(kp,Op,"esm2017");function t(e){try{const n=e.getProvider(Ea).getImmediate();return{logEvent:(r,s,i)=>Lk(n,r,s,i)}}catch(n){throw Bt.create("interop-component-reg-failed",{reason:n})}}}Uk();const Fk={apiKey:"AIzaSyDrRaDCRBCdjKDO8PzFDDpWqXSmBvj8zBA",authDomain:"dailyroutenc.firebaseapp.com",databaseURL:"https://dailyroutenc-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"dailyroutenc",storageBucket:"dailyroutenc.firebasestorage.app",messagingSenderId:"1013779718441",appId:"1:1013779718441:android:dfcb25a4b8b00c7036d738"},uh=mf().length?mf()[0]:Sg(Fk),hr=fR(uh),hh=eC(uh);Vk(uh);async function Bk(t,e,n,r){try{const{user:s}=await e_(hr,t,e);await Eu(s,{displayName:n});const i={id:s.uid,email:t,name:n,role:r,phoneNumber:"",profilePicture:"",isVerified:!1,documents:{status:"pending"},tokensBalance:0,totalTrips:0,totalDistance:0,averageRating:0};return await mC(tc(hh,"users",s.uid),i),i}catch(s){throw new Error(s.message)}}async function jk(t,e){try{const{user:n}=await t_(hr,t,e),r=await pC(tc(hh,"users",n.uid));if(!r.exists())throw new Error("Utilisateur non trouvé dans la base de données");return r.data()}catch(n){throw new Error(n.message)}}async function $k(){try{await nA(hr)}catch(t){throw new Error(t.message)}}async function qk(t,e){try{const n=tc(hh,"users",t);await gC(n,e),hr.currentUser&&e.name&&await Eu(hr.currentUser,{displayName:e.name})}catch(n){throw new Error(n.message)}}const Hk=IT("user",{state:()=>({user:null,loading:!1,error:null}),getters:{isAuthenticated:t=>!!t.user,isDriver:t=>{var e;return((e=t.user)==null?void 0:e.role)==="driver"}},actions:{initAuthListener(){tA(hr,async t=>{if(t){const e={id:t.uid,email:t.email||"",name:t.displayName||"",role:"driver",isVerified:!1,documents:{identityCard:void 0,driverLicense:void 0,vehicleRegistration:void 0,insurance:void 0,status:"pending",rejectionReason:void 0}};this.setUser(e)}else this.setUser(null)})},async loginUser(t,e){this.loading=!0,this.error=null;try{const n=await jk(t,e);this.user=n}catch(n){throw n instanceof Error?this.error=n.message:this.error=String(n),n}finally{this.loading=!1}},async registerUser(t,e,n,r){this.loading=!0,this.error=null;try{const s=await Bk(t,e,n,r);this.user=s}catch(s){throw s instanceof Error?this.error=s.message:this.error=String(s),s}finally{this.loading=!1}},async updateProfile(t){if(this.user){this.loading=!0,this.error=null;try{await qk(this.user.id,t),this.user={...this.user,...t}}catch(e){throw e instanceof Error?this.error=e.message:this.error=String(e),e}finally{this.loading=!1}}},async logout(){try{await $k(),this.user=null}catch(t){throw t instanceof Error?this.error=t.message:this.error=String(t),t}},setUser(t){this.user=t}}}),Wk={class:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"},Kk={class:"max-w-md w-full space-y-8"},zk={class:"rounded-md shadow-sm -space-y-px"},Gk={class:"text-center"},tD=Wr({__name:"Login",setup(t){const e=ln(""),n=ln(""),r=bI(),s=async()=>{try{const o=(await t_(hr,e.value,n.value)).user;console.log("Utilisateur connecté :",o),r.push("/dashboard")}catch(i){i instanceof Error?(console.error("Erreur lors de la connexion :",i.message),alert("Erreur : "+i.message)):(console.error("Erreur inconnue lors de la connexion :",i),alert("Une erreur inconnue s'est produite."))}};return(i,o)=>{const c=Sm("router-link");return kt(),Mt("div",Wk,[H("div",Kk,[o[6]||(o[6]=H("div",null,[H("h2",{class:"mt-6 text-center text-3xl font-extrabold text-gray-900"}," Connexion à votre compte ")],-1)),H("form",{class:"mt-8 space-y-6",onSubmit:uu(s,["prevent"])},[H("div",zk,[H("div",null,[o[2]||(o[2]=H("label",{for:"email",class:"sr-only"},"Email",-1)),Ct(H("input",{id:"email",name:"email",type:"email","onUpdate:modelValue":o[0]||(o[0]=l=>e.value=l),required:"",class:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm",placeholder:"Adresse email"},null,512),[[qt,e.value]])]),H("div",null,[o[3]||(o[3]=H("label",{for:"password",class:"sr-only"},"Mot de passe",-1)),Ct(H("input",{id:"password",name:"password",type:"password","onUpdate:modelValue":o[1]||(o[1]=l=>n.value=l),required:"",class:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm",placeholder:"Mot de passe"},null,512),[[qt,n.value]])])]),o[4]||(o[4]=H("div",null,[H("button",{type:"submit",class:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"}," Se connecter ")],-1))],32),H("div",Gk,[He(c,{to:"/register",class:"text-blue-600 hover:text-blue-500"},{default:nu(()=>o[5]||(o[5]=[cu(" Pas encore de compte ? S'inscrire ")])),_:1})])])])}}}),Qk={class:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"},Yk={class:"max-w-md w-full space-y-8"},Jk={class:"rounded-md shadow-sm space-y-3"},Xk={class:"text-center"},nD=Wr({__name:"Register",setup(t){const e=ln(""),n=ln(""),r=ln(""),s=ln(""),i=async()=>{try{const c=(await e_(hr,n.value,r.value)).user;await Eu(c,{displayName:e.value}),console.log("Utilisateur inscrit avec succès :",c),alert("Inscription réussie !")}catch(o){o instanceof Error?(console.error("Erreur lors de l'inscription :",o.message),alert("Une erreur est survenue : "+o.message)):(console.error("Erreur inconnue lors de l'inscription :",o),alert("Une erreur inconnue s'est produite."))}};return(o,c)=>{const l=Sm("router-link");return kt(),Mt("div",Qk,[H("div",Yk,[c[11]||(c[11]=H("div",null,[H("h2",{class:"mt-6 text-center text-3xl font-extrabold text-gray-900"}," Créer un compte ")],-1)),H("form",{class:"mt-8 space-y-6",onSubmit:uu(i,["prevent"])},[H("div",Jk,[H("div",null,[c[4]||(c[4]=H("label",{for:"name",class:"sr-only"},"Nom complet",-1)),Ct(H("input",{id:"name",name:"name",type:"text","onUpdate:modelValue":c[0]||(c[0]=u=>e.value=u),required:"",class:"appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm",placeholder:"Nom complet"},null,512),[[qt,e.value]])]),H("div",null,[c[5]||(c[5]=H("label",{for:"email",class:"sr-only"},"Email",-1)),Ct(H("input",{id:"email",name:"email",type:"email","onUpdate:modelValue":c[1]||(c[1]=u=>n.value=u),required:"",class:"appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm",placeholder:"Adresse email"},null,512),[[qt,n.value]])]),H("div",null,[c[6]||(c[6]=H("label",{for:"password",class:"sr-only"},"Mot de passe",-1)),Ct(H("input",{id:"password",name:"password",type:"password","onUpdate:modelValue":c[2]||(c[2]=u=>r.value=u),required:"",class:"appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm",placeholder:"Mot de passe"},null,512),[[qt,r.value]])]),H("div",null,[c[8]||(c[8]=H("label",{for:"role",class:"sr-only"},"Rôle",-1)),Ct(H("select",{id:"role",name:"role","onUpdate:modelValue":c[3]||(c[3]=u=>s.value=u),required:"",class:"appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"},c[7]||(c[7]=[H("option",{value:""},"Sélectionnez votre rôle",-1),H("option",{value:"driver"},"Conducteur",-1),H("option",{value:"walker"},"Marcheur",-1)]),512),[[Qm,s.value]])])]),c[9]||(c[9]=H("div",null,[H("button",{type:"submit",class:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"}," S'inscrire ")],-1))],32),H("div",Xk,[He(l,{to:"/login",class:"text-blue-600 hover:text-blue-500"},{default:nu(()=>c[10]||(c[10]=[cu(" Déjà un compte ? Se connecter ")])),_:1})])])])}}}),Zk=Wr({__name:"DocumentStatus",props:{status:{}},setup(t){const e=t,n=gt(()=>{switch(e.status){case"verified":return"bg-green-100 text-green-800";case"rejected":return"bg-red-100 text-red-800";default:return"bg-yellow-100 text-yellow-800"}}),r=gt(()=>{switch(e.status){case"verified":return"Vérifié";case"rejected":return"Rejeté";default:return"En attente"}});return(s,i)=>(kt(),Mt("span",{class:Ra(["inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",n.value])},Cr(r.value),3))}}),e1={class:"space-y-4"},t1={class:"flex items-center justify-between"},n1={class:"text-lg font-medium text-gray-900"},r1={class:"border-2 border-dashed border-gray-300 rounded-lg p-6"},s1={key:0,class:"space-y-4"},i1=["src","alt"],o1={class:"flex justify-between items-center"},a1={class:"text-sm text-gray-500"},c1={key:1,class:"text-center"},l1={key:0,class:"text-sm text-red-600"},Co=Wr({__name:"DocumentUpload",props:{title:{},document:{}},emits:["upload"],setup(t,{emit:e}){const n=e,r=i=>new Date(i).toLocaleDateString("fr-FR"),s=async()=>{try{const i=document.createElement("input");i.type="file",i.accept="image/jpeg,image/png",i.onchange=o=>{var l;const c=(l=o.target.files)==null?void 0:l[0];if(c){if(c.size>5*1024*1024){alert("Le fichier est trop volumineux. Maximum 5MB.");return}n("upload",c)}},i.click()}catch(i){console.error("Erreur lors du téléchargement:",i)}};return(i,o)=>{var c,l,u;return kt(),Mt("div",e1,[H("div",t1,[H("h3",n1,Cr(i.title),1),He(Zk,{status:(c=i.document)==null?void 0:c.verificationStatus},null,8,["status"])]),H("div",r1,[(l=i.document)!=null&&l.url?(kt(),Mt("div",s1,[H("img",{src:i.document.url,alt:i.title,class:"max-w-full h-auto rounded-lg"},null,8,i1),H("div",o1,[H("span",a1," Téléchargé le "+Cr(r(i.document.uploadDate)),1),H("button",{onClick:s,class:"text-blue-600 hover:text-blue-700 text-sm"}," Remplacer ")])])):(kt(),Mt("div",c1,[H("div",{class:"space-y-2"},[o[0]||(o[0]=H("div",{class:"text-gray-500"},[H("i",{class:"text-3xl"},"📄")],-1)),o[1]||(o[1]=H("div",{class:"text-sm text-gray-500"}," Format JPG ou PNG, max 5MB ",-1)),H("button",{onClick:s,class:"mt-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"}," Télécharger le document ")])]))]),(u=i.document)!=null&&u.rejectionReason?(kt(),Mt("p",l1," Motif du rejet : "+Cr(i.document.rejectionReason),1)):Lo("",!0)])}}});/**
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
 */const sv="firebasestorage.googleapis.com",iv="storageBucket",u1=2*60*1e3,h1=10*60*1e3;/**
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
 */class $e extends zt{constructor(e,n,r=0){super(Jc(e),`Firebase Storage: ${n} (${Jc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,$e.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Jc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var je;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(je||(je={}));function Jc(t){return"storage/"+t}function dh(){const t="An unknown error occurred, please check the error payload for server response.";return new $e(je.UNKNOWN,t)}function d1(t){return new $e(je.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function f1(t){return new $e(je.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function p1(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new $e(je.UNAUTHENTICATED,t)}function m1(){return new $e(je.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function g1(t){return new $e(je.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function _1(){return new $e(je.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function y1(){return new $e(je.CANCELED,"User canceled the upload/download.")}function v1(t){return new $e(je.INVALID_URL,"Invalid URL '"+t+"'.")}function E1(t){return new $e(je.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function w1(){return new $e(je.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+iv+"' property when initializing the app?")}function T1(){return new $e(je.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function I1(){return new $e(je.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function b1(t){return new $e(je.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function jl(t){return new $e(je.INVALID_ARGUMENT,t)}function ov(){return new $e(je.APP_DELETED,"The Firebase app was deleted.")}function A1(t){return new $e(je.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ii(t,e){return new $e(je.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Xs(t){throw new $e(je.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Ft{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ft.makeFromUrl(e,n)}catch{return new Ft(e,"")}if(r.path==="")return r;throw E1(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(F){F.path.charAt(F.path.length-1)==="/"&&(F.path_=F.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(F){F.path_=decodeURIComponent(F.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",_=new RegExp(`^https?://${p}/${d}/b/${s}/o${m}`,"i"),R={bucket:1,path:3},S=n===sv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",M=new RegExp(`^https?://${S}/${s}/${O}`,"i"),j=[{regex:c,indices:l,postModify:i},{regex:_,indices:R,postModify:u},{regex:M,indices:{bucket:1,path:2},postModify:u}];for(let F=0;F<j.length;F++){const ne=j[F],oe=ne.regex.exec(e);if(oe){const b=oe[ne.indices.bucket];let y=oe[ne.indices.path];y||(y=""),r=new Ft(b,y),ne.postModify(r);break}}if(r==null)throw v1(e);return r}}class R1{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function S1(t,e,n){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let u=!1;function d(...O){u||(u=!0,e.apply(null,O))}function p(O){s=setTimeout(()=>{s=null,t(_,l())},O)}function m(){i&&clearTimeout(i)}function _(O,...M){if(u){m();return}if(O){m(),d.call(null,O,...M);return}if(l()||o){m(),d.call(null,O,...M);return}r<64&&(r*=2);let j;c===1?(c=2,j=0):j=(r+Math.random())*1e3,p(j)}let R=!1;function S(O){R||(R=!0,m(),!u&&(s!==null?(O||(c=2),clearTimeout(s),p(0)):O||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,S(!0)},n),S}function P1(t){t(!1)}/**
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
 */function C1(t){return t!==void 0}function k1(t){return typeof t=="object"&&!Array.isArray(t)}function fh(t){return typeof t=="string"||t instanceof String}function Dp(t){return ph()&&t instanceof Blob}function ph(){return typeof Blob<"u"}function Np(t,e,n,r){if(r<e)throw jl(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw jl(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function mh(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function av(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Nr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Nr||(Nr={}));/**
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
 */function O1(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class D1{constructor(e,n,r,s,i,o,c,l,u,d,p,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,R)=>{this.resolve_=_,this.reject_=R,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new ko(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,u=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===Nr.NO_ERROR,l=i.getStatus();if(!c||O1(l,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===Nr.ABORT;r(!1,new ko(!1,null,d));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new ko(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());C1(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=dh();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?ov():y1();o(l)}else{const l=_1();o(l)}};this.canceled_?n(!1,new ko(!1,null,!0)):this.backoffId_=S1(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&P1(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ko{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function N1(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function x1(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function V1(t,e){e&&(t["X-Firebase-GMPID"]=e)}function M1(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function L1(t,e,n,r,s,i,o=!0){const c=av(t.urlParams),l=t.url+c,u=Object.assign({},t.headers);return V1(u,e),N1(u,n),x1(u,i),M1(u,r),new D1(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function U1(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function F1(...t){const e=U1();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(ph())return new Blob(t);throw new $e(je.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function B1(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function j1(t){if(typeof atob>"u")throw b1("base-64");return atob(t)}/**
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
 */const hn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Xc{constructor(e,n){this.data=e,this.contentType=n||null}}function $1(t,e){switch(t){case hn.RAW:return new Xc(cv(e));case hn.BASE64:case hn.BASE64URL:return new Xc(lv(t,e));case hn.DATA_URL:return new Xc(H1(e),W1(e))}throw dh()}function cv(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function q1(t){let e;try{e=decodeURIComponent(t)}catch{throw Ii(hn.DATA_URL,"Malformed data URL.")}return cv(e)}function lv(t,e){switch(t){case hn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Ii(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case hn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Ii(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=j1(e)}catch(s){throw s.message.includes("polyfill")?s:Ii(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class uv{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ii(hn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=K1(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function H1(t){const e=new uv(t);return e.base64?lv(hn.BASE64,e.rest):q1(e.rest)}function W1(t){return new uv(t).contentType}function K1(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class er{constructor(e,n){let r=0,s="";Dp(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Dp(this.data_)){const r=this.data_,s=B1(r,e,n);return s===null?null:new er(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new er(r,!0)}}static getBlob(...e){if(ph()){const n=e.map(r=>r instanceof er?r.data_:r);return new er(F1.apply(null,n))}else{const n=e.map(o=>fh(o)?$1(hn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let c=0;c<o.length;c++)s[i++]=o[c]}),new er(s,!0)}}uploadData(){return this.data_}}/**
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
 */function hv(t){let e;try{e=JSON.parse(t)}catch{return null}return k1(e)?e:null}/**
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
 */function z1(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function G1(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function dv(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function Q1(t,e){return e}class Et{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||Q1}}let Oo=null;function Y1(t){return!fh(t)||t.length<2?t:dv(t)}function fv(){if(Oo)return Oo;const t=[];t.push(new Et("bucket")),t.push(new Et("generation")),t.push(new Et("metageneration")),t.push(new Et("name","fullPath",!0));function e(i,o){return Y1(o)}const n=new Et("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Et("size");return s.xform=r,t.push(s),t.push(new Et("timeCreated")),t.push(new Et("updated")),t.push(new Et("md5Hash",null,!0)),t.push(new Et("cacheControl",null,!0)),t.push(new Et("contentDisposition",null,!0)),t.push(new Et("contentEncoding",null,!0)),t.push(new Et("contentLanguage",null,!0)),t.push(new Et("contentType",null,!0)),t.push(new Et("metadata","customMetadata",!0)),Oo=t,Oo}function J1(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Ft(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function X1(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return J1(r,t),r}function pv(t,e,n){const r=hv(e);return r===null?null:X1(t,r,n)}function Z1(t,e,n,r){const s=hv(e);if(s===null||!fh(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const d=t.bucket,p=t.fullPath,m="/b/"+o(d)+"/o/"+o(p),_=mh(m,n,r),R=av({alt:"media",token:u});return _+R})[0]}function eO(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class mv{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function gv(t){if(!t)throw dh()}function tO(t,e){function n(r,s){const i=pv(t,s,e);return gv(i!==null),i}return n}function nO(t,e){function n(r,s){const i=pv(t,s,e);return gv(i!==null),Z1(i,s,t.host,t._protocol)}return n}function _v(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=m1():s=p1():n.getStatus()===402?s=f1(t.bucket):n.getStatus()===403?s=g1(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function rO(t){const e=_v(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=d1(t.path)),i.serverResponse=s.serverResponse,i}return n}function sO(t,e,n){const r=e.fullServerUrl(),s=mh(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,c=new mv(s,i,nO(t,n),o);return c.errorHandler=rO(e),c}function iO(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function oO(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=iO(null,e)),r}function aO(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let j="";for(let F=0;F<2;F++)j=j+Math.random().toString().slice(2);return j}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const u=oO(e,r,s),d=eO(u,n),p="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,m=`\r
--`+l+"--",_=er.getBlob(p,r,m);if(_===null)throw T1();const R={name:u.fullPath},S=mh(i,t.host,t._protocol),O="POST",M=t.maxUploadRetryTime,L=new mv(S,O,tO(t,n),M);return L.urlParams=R,L.headers=o,L.body=_.uploadData(),L.errorHandler=_v(e),L}class cO{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Nr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Nr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Nr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Xs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Xs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Xs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Xs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Xs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class lO extends cO{initXhr(){this.xhr_.responseType="text"}}function yv(){return new lO}/**
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
 */class qr{constructor(e,n){this._service=e,n instanceof Ft?this._location=n:this._location=Ft.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new qr(e,n)}get root(){const e=new Ft(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return dv(this._location.path)}get storage(){return this._service}get parent(){const e=z1(this._location.path);if(e===null)return null;const n=new Ft(this._location.bucket,e);return new qr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw A1(e)}}function uO(t,e,n){t._throwIfRoot("uploadBytes");const r=aO(t.storage,t._location,fv(),new er(e,!0),n);return t.storage.makeRequestWithTokens(r,yv).then(s=>({metadata:s,ref:t}))}function hO(t){t._throwIfRoot("getDownloadURL");const e=sO(t.storage,t._location,fv());return t.storage.makeRequestWithTokens(e,yv).then(n=>{if(n===null)throw I1();return n})}function dO(t,e){const n=G1(t._location.path,e),r=new Ft(t._location.bucket,n);return new qr(t.storage,r)}/**
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
 */function fO(t){return/^[A-Za-z]+:\/\//.test(t)}function pO(t,e){return new qr(t,e)}function vv(t,e){if(t instanceof gh){const n=t;if(n._bucket==null)throw w1();const r=new qr(n,n._bucket);return e!=null?vv(r,e):r}else return e!==void 0?dO(t,e):t}function mO(t,e){if(e&&fO(e)){if(t instanceof gh)return pO(t,e);throw jl("To use ref(service, url), the first argument must be a Storage instance.")}else return vv(t,e)}function xp(t,e){const n=e==null?void 0:e[iv];return n==null?null:Ft.makeFromBucketSpec(n,t)}function gO(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Eg(s,t.app.options.projectId))}class gh{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=sv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=u1,this._maxUploadRetryTime=h1,this._requests=new Set,s!=null?this._bucket=Ft.makeFromBucketSpec(s,this._host):this._bucket=xp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ft.makeFromBucketSpec(this._url,e):this._bucket=xp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Np("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Np("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new qr(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new R1(ov());{const o=L1(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Vp="@firebase/storage",Mp="0.13.2";/**
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
 */const Ev="storage";function Lp(t,e,n){return t=Me(t),uO(t,e,n)}function Up(t){return t=Me(t),hO(t)}function Fp(t,e){return t=Me(t),mO(t,e)}function Bp(t=Ba(),e){t=Me(t);const r=pr(t,Ev).getImmediate({identifier:e}),s=_g("storage");return s&&_O(r,...s),r}function _O(t,e,n,r={}){gO(t,e,n,r)}function yO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new gh(n,r,s,e,zr)}function vO(){en(new Kt(Ev,yO,"PUBLIC").setMultipleInstances(!0)),Dt(Vp,Mp,""),Dt(Vp,Mp,"esm2017")}vO();const EO={class:"min-h-screen bg-gray-100 py-12"},wO={class:"max-w-3xl mx-auto sm:px-6 lg:px-8"},TO={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},IO={class:"p-6"},bO={class:"flex items-center space-x-6"},AO={class:"w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden"},RO=["src"],SO={key:1,class:"text-3xl text-gray-400"},PO={class:"grid grid-cols-1 gap-6"},CO=["disabled"],kO={key:0,class:"mt-1 text-sm text-gray-500"},OO={class:"border-t pt-6"},DO={class:"grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"},NO={key:0,class:"text-red-600 text-sm"},xO={class:"flex justify-end space-x-3"},VO=["disabled"],rD=Wr({__name:"Profile",setup(t){const e=Hk(),n=gt(()=>e.loading),r=gt(()=>e.error),s={model:"",color:"",seats:1,licensePlate:""},i={status:"pending"},o=ln({name:"",email:"",phoneNumber:"",profilePicture:"",role:"walker",documents:i,vehicle:{...s}});Am(()=>{if(e.user){const p=e.user;o.value={name:p.name,email:p.email,phoneNumber:p.phoneNumber||"",profilePicture:p.profilePicture||"",role:p.role,documents:p.documents||i,vehicle:p.role==="driver"&&p.vehicle?{...p.vehicle}:{...s}}}});const c=async(p,m)=>{var _;try{const R=Bp(),S=(_=e.user)==null?void 0:_.id;if(!S)throw new Error("Utilisateur non connecté");const O=Fp(R,`users/${S}/documents/${p}_${Date.now()}`);await Lp(O,m);const M=await Up(O);o.value.documents||(o.value.documents=i),o.value.documents[p]={url:M,uploadDate:new Date().toISOString(),verificationStatus:"pending"}}catch(R){console.error("Erreur lors du téléchargement du document:",R),alert("Erreur lors du téléchargement du document")}},l=async()=>{try{const p=document.createElement("input");p.type="file",p.accept="image/jpeg,image/png",p.onchange=async m=>{var R,S;const _=(R=m.target.files)==null?void 0:R[0];if(_){const O=Bp(),M=(S=e.user)==null?void 0:S.id;if(!M)throw new Error("Utilisateur non connecté");const L=Fp(O,`users/${M}/profile_${Date.now()}`);await Lp(L,_),o.value.profilePicture=await Up(L)}},p.click()}catch(p){console.error("Erreur lors du téléchargement de la photo de profil:",p),alert("Erreur lors du téléchargement de la photo de profil")}},u=async()=>{try{const p={name:o.value.name,phoneNumber:o.value.phoneNumber,profilePicture:o.value.profilePicture,role:o.value.role,documents:o.value.documents};o.value.role==="driver"&&(p.vehicle=o.value.vehicle),await e.updateProfile(p)}catch(p){console.error("Erreur lors de la mise à jour du profil:",p)}},d=()=>{if(e.user){const p=e.user;o.value={name:p.name,email:p.email,phoneNumber:p.phoneNumber||"",profilePicture:p.profilePicture||"",role:p.role,documents:p.documents||i,vehicle:p.role==="driver"&&p.vehicle?{...p.vehicle}:{...s}}}};return(p,m)=>{var _,R;return kt(),Mt("div",EO,[H("div",wO,[H("div",TO,[H("div",IO,[m[22]||(m[22]=H("h1",{class:"text-2xl font-semibold text-gray-900 mb-6"},"Mon Profil",-1)),H("form",{onSubmit:uu(u,["prevent"]),class:"space-y-6"},[H("div",bO,[H("div",AO,[o.value.profilePicture?(kt(),Mt("img",{key:0,src:o.value.profilePicture,alt:"Photo de profil",class:"w-full h-full object-cover"},null,8,RO)):(kt(),Mt("span",SO,"👤"))]),H("button",{type:"button",onClick:l,class:"px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"}," Changer la photo ")]),H("div",PO,[H("div",null,[m[12]||(m[12]=H("label",{class:"block text-sm font-medium text-gray-700"},"Nom complet",-1)),Ct(H("input",{type:"text","onUpdate:modelValue":m[0]||(m[0]=S=>o.value.name=S),required:"",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"},null,512),[[qt,o.value.name]])]),H("div",null,[m[13]||(m[13]=H("label",{class:"block text-sm font-medium text-gray-700"},"Email",-1)),Ct(H("input",{type:"email","onUpdate:modelValue":m[1]||(m[1]=S=>o.value.email=S),required:"",disabled:"",class:"mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm"},null,512),[[qt,o.value.email]])]),H("div",null,[m[14]||(m[14]=H("label",{class:"block text-sm font-medium text-gray-700"},"Numéro de téléphone",-1)),Ct(H("input",{type:"tel","onUpdate:modelValue":m[2]||(m[2]=S=>o.value.phoneNumber=S),class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"},null,512),[[qt,o.value.phoneNumber]])]),H("div",null,[m[16]||(m[16]=H("label",{class:"block text-sm font-medium text-gray-700"},"Type de compte",-1)),Ct(H("select",{"onUpdate:modelValue":m[3]||(m[3]=S=>o.value.role=S),class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",disabled:((_=sr(e).user)==null?void 0:_.documents.status)==="verified"},m[15]||(m[15]=[H("option",{value:"walker"},"Marcheur",-1),H("option",{value:"driver"},"Conducteur",-1)]),8,CO),[[Qm,o.value.role]]),((R=sr(e).user)==null?void 0:R.documents.status)==="verified"?(kt(),Mt("p",kO," Le type de compte ne peut plus être modifié une fois vérifié ")):Lo("",!0)])]),H("div",OO,[m[21]||(m[21]=H("h2",{class:"text-lg font-medium text-gray-900 mb-4"},"Documents requis",-1)),He(Co,{title:"Pièce d'identité",document:o.value.documents.identityCard,onUpload:m[4]||(m[4]=S=>c("identityCard",S)),class:"mb-6"},null,8,["document"]),o.value.role==="driver"?(kt(),Mt(an,{key:0},[He(Co,{title:"Permis de conduire",document:o.value.documents.driverLicense,onUpload:m[5]||(m[5]=S=>c("driverLicense",S)),class:"mb-6"},null,8,["document"]),He(Co,{title:"Carte grise",document:o.value.documents.vehicleRegistration,onUpload:m[6]||(m[6]=S=>c("vehicleRegistration",S)),class:"mb-6"},null,8,["document"]),He(Co,{title:"Attestation d'assurance",document:o.value.documents.insurance,onUpload:m[7]||(m[7]=S=>c("insurance",S)),class:"mb-6"},null,8,["document"]),H("div",DO,[H("div",null,[m[17]||(m[17]=H("label",{class:"block text-sm font-medium text-gray-700"},"Modèle du véhicule",-1)),Ct(H("input",{type:"text","onUpdate:modelValue":m[8]||(m[8]=S=>o.value.vehicle.model=S),required:"",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"},null,512),[[qt,o.value.vehicle.model]])]),H("div",null,[m[18]||(m[18]=H("label",{class:"block text-sm font-medium text-gray-700"},"Couleur",-1)),Ct(H("input",{type:"text","onUpdate:modelValue":m[9]||(m[9]=S=>o.value.vehicle.color=S),required:"",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"},null,512),[[qt,o.value.vehicle.color]])]),H("div",null,[m[19]||(m[19]=H("label",{class:"block text-sm font-medium text-gray-700"},"Nombre de places",-1)),Ct(H("input",{type:"number","onUpdate:modelValue":m[10]||(m[10]=S=>o.value.vehicle.seats=S),required:"",min:"1",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"},null,512),[[qt,o.value.vehicle.seats]])]),H("div",null,[m[20]||(m[20]=H("label",{class:"block text-sm font-medium text-gray-700"},"Immatriculation",-1)),Ct(H("input",{type:"text","onUpdate:modelValue":m[11]||(m[11]=S=>o.value.vehicle.licensePlate=S),required:"",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"},null,512),[[qt,o.value.vehicle.licensePlate]])])])],64)):Lo("",!0)]),r.value?(kt(),Mt("div",NO,Cr(r.value),1)):Lo("",!0),H("div",xO,[H("button",{type:"button",onClick:d,class:"px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"}," Annuler "),H("button",{type:"submit",disabled:n.value,class:"px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"},Cr(n.value?"Enregistrement...":"Enregistrer"),9,VO)])],32)])])])])}}});export{tD as $,ZO as A,Hk as B,ln as C,Am as D,kw as E,an as F,Rm as G,qi as H,di as I,Ct as J,Qm as K,LO as L,Jt as M,FO as N,vs as O,zm as P,xo as Q,IE as R,Lw as S,MO as T,ka as U,uu as V,qt as W,eD as X,BO as Y,HO as Z,qO as _,Mt as a,nD as a0,rD as a1,bI as a2,jO as a3,$O as a4,H as b,gt as c,Wr as d,He as e,cu as f,UO as g,Lo as h,mf as i,Sg as j,fR as k,eC as l,Vk as m,Ra as n,kt as o,pC as p,tc as q,Sm as r,QO as s,Cr as t,sr as u,GO as v,nu as w,YO as x,JO as y,XO as z};
