(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Jr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const W={},kt=[],Ne=()=>{},ps=()=>!1,Yn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Gr=e=>e.startsWith("onUpdate:"),ae=Object.assign,Zr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},hs=Object.prototype.hasOwnProperty,$=(e,t)=>hs.call(e,t),F=Array.isArray,At=e=>Kn(e)==="[object Map]",Hi=e=>Kn(e)==="[object Set]",j=e=>typeof e=="function",Q=e=>typeof e=="string",Nt=e=>typeof e=="symbol",V=e=>e!==null&&typeof e=="object",Yi=e=>(V(e)||j(e))&&j(e.then)&&j(e.catch),Ki=Object.prototype.toString,Kn=e=>Ki.call(e),gs=e=>Kn(e).slice(8,-1),Wi=e=>Kn(e)==="[object Object]",Qr=e=>Q(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Cn=Jr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},vs=/-(\w)/g,Me=Wn(e=>e.replace(vs,(t,n)=>n?n.toUpperCase():"")),bs=/\B([A-Z])/g,Mt=Wn(e=>e.replace(bs,"-$1").toLowerCase()),Xn=Wn(e=>e.charAt(0).toUpperCase()+e.slice(1)),cr=Wn(e=>e?`on${Xn(e)}`:""),mt=(e,t)=>!Object.is(e,t),Pn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Fn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},kr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ra;const Ar=()=>Ra||(Ra=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ea(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=Q(r)?_s(r):ea(r);if(a)for(const i in a)t[i]=a[i]}return t}else if(Q(e)||V(e))return e}const ys=/;(?![^(]*\))/g,xs=/:([^]+)/,ws=/\/\*[^]*?\*\//g;function _s(e){const t={};return e.replace(ws,"").split(ys).forEach(n=>{if(n){const r=n.split(xs);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function qn(e){let t="";if(Q(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const r=qn(e[n]);r&&(t+=r+" ")}else if(V(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ks="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",As=Jr(ks);function Xi(e){return!!e||e===""}const Fa=e=>Q(e)?e:e==null?"":F(e)||V(e)&&(e.toString===Ki||!j(e.toString))?JSON.stringify(e,qi,2):String(e),qi=(e,t)=>t&&t.__v_isRef?qi(e,t.value):At(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a],i)=>(n[ur(r,i)+" =>"]=a,n),{})}:Hi(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>ur(n))}:Nt(t)?ur(t):V(t)&&!F(t)&&!Wi(t)?String(t):t,ur=(e,t="")=>{var n;return Nt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let we;class Os{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=we,!t&&we&&(this.index=(we.scopes||(we.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=we;try{return we=this,t()}finally{we=n}}}on(){we=this}off(){we=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Es(e,t=we){t&&t.active&&t.effects.push(e)}function Cs(){return we}const ta=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Vi=e=>(e.w&Ze)>0,Ji=e=>(e.n&Ze)>0,Ps=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ze},Ss=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Vi(a)&&!Ji(a)?a.delete(e):t[n++]=a,a.w&=~Ze,a.n&=~Ze}t.length=n}},Or=new WeakMap;let $t=0,Ze=1;const Er=30;let _e;const ut=Symbol(""),Cr=Symbol("");class na{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Es(this,r)}run(){if(!this.active)return this.fn();let t=_e,n=Ve;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=_e,_e=this,Ve=!0,Ze=1<<++$t,$t<=Er?Ps(this):La(this),this.fn()}finally{$t<=Er&&Ss(this),Ze=1<<--$t,_e=this.parent,Ve=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){_e===this?this.deferStop=!0:this.active&&(La(this),this.onStop&&this.onStop(),this.active=!1)}}function La(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ve=!0;const Gi=[];function Rt(){Gi.push(Ve),Ve=!1}function Ft(){const e=Gi.pop();Ve=e===void 0?!0:e}function ue(e,t,n){if(Ve&&_e){let r=Or.get(e);r||Or.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=ta()),Zi(a)}}function Zi(e,t){let n=!1;$t<=Er?Ji(e)||(e.n|=Ze,n=!Vi(e)):n=!e.has(_e),n&&(e.add(_e),_e.deps.push(e))}function ze(e,t,n,r,a,i){const o=Or.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&F(e)){const l=Number(r);o.forEach((c,d)=>{(d==="length"||!Nt(d)&&d>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":F(e)?Qr(n)&&s.push(o.get("length")):(s.push(o.get(ut)),At(e)&&s.push(o.get(Cr)));break;case"delete":F(e)||(s.push(o.get(ut)),At(e)&&s.push(o.get(Cr)));break;case"set":At(e)&&s.push(o.get(ut));break}if(s.length===1)s[0]&&Pr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Pr(ta(l))}}function Pr(e,t){const n=F(e)?e:[...e];for(const r of n)r.computed&&ja(r);for(const r of n)r.computed||ja(r)}function ja(e,t){(e!==_e||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Is=Jr("__proto__,__v_isRef,__isVue"),Qi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Nt)),Da=Ts();function Ts(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=U(this);for(let i=0,o=this.length;i<o;i++)ue(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Rt();const r=U(this)[t].apply(this,n);return Ft(),r}}),e}function Ns(e){const t=U(this);return ue(t,"has",e),t.hasOwnProperty(e)}class eo{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const a=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(a?i?Ks:ao:i?ro:no).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=F(t);if(!a){if(o&&$(Da,n))return Reflect.get(Da,n,r);if(n==="hasOwnProperty")return Ns}const s=Reflect.get(t,n,r);return(Nt(n)?Qi.has(n):Is(n))||(a||ue(t,"get",n),i)?s:de(s)?o&&Qr(n)?s:s.value:V(s)?a?io(s):ia(s):s}}class to extends eo{constructor(t=!1){super(!1,t)}set(t,n,r,a){let i=t[n];if(!this._shallow){const l=Pt(i);if(!Ln(r)&&!Pt(r)&&(i=U(i),r=U(r)),!F(t)&&de(i)&&!de(r))return l?!1:(i.value=r,!0)}const o=F(t)&&Qr(n)?Number(n)<t.length:$(t,n),s=Reflect.set(t,n,r,a);return t===U(a)&&(o?mt(r,i)&&ze(t,"set",n,r):ze(t,"add",n,r)),s}deleteProperty(t,n){const r=$(t,n);t[n];const a=Reflect.deleteProperty(t,n);return a&&r&&ze(t,"delete",n,void 0),a}has(t,n){const r=Reflect.has(t,n);return(!Nt(n)||!Qi.has(n))&&ue(t,"has",n),r}ownKeys(t){return ue(t,"iterate",F(t)?"length":ut),Reflect.ownKeys(t)}}class Ms extends eo{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Rs=new to,Fs=new Ms,Ls=new to(!0),ra=e=>e,Vn=e=>Reflect.getPrototypeOf(e);function un(e,t,n=!1,r=!1){e=e.__v_raw;const a=U(e),i=U(t);n||(mt(t,i)&&ue(a,"get",t),ue(a,"get",i));const{has:o}=Vn(a),s=r?ra:n?sa:Xt;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function dn(e,t=!1){const n=this.__v_raw,r=U(n),a=U(e);return t||(mt(e,a)&&ue(r,"has",e),ue(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function mn(e,t=!1){return e=e.__v_raw,!t&&ue(U(e),"iterate",ut),Reflect.get(e,"size",e)}function za(e){e=U(e);const t=U(this);return Vn(t).has.call(t,e)||(t.add(e),ze(t,"add",e,e)),this}function $a(e,t){t=U(t);const n=U(this),{has:r,get:a}=Vn(n);let i=r.call(n,e);i||(e=U(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?mt(t,o)&&ze(n,"set",e,t):ze(n,"add",e,t),this}function Ua(e){const t=U(this),{has:n,get:r}=Vn(t);let a=n.call(t,e);a||(e=U(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&ze(t,"delete",e,void 0),i}function Ba(){const e=U(this),t=e.size!==0,n=e.clear();return t&&ze(e,"clear",void 0,void 0),n}function pn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=U(o),l=t?ra:e?sa:Xt;return!e&&ue(s,"iterate",ut),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function hn(e,t,n){return function(...r){const a=this.__v_raw,i=U(a),o=At(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?ra:t?sa:Xt;return!t&&ue(i,"iterate",l?Cr:ut),{next(){const{value:m,done:g}=c.next();return g?{value:m,done:g}:{value:s?[d(m[0]),d(m[1])]:d(m),done:g}},[Symbol.iterator](){return this}}}}function Ke(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function js(){const e={get(i){return un(this,i)},get size(){return mn(this)},has:dn,add:za,set:$a,delete:Ua,clear:Ba,forEach:pn(!1,!1)},t={get(i){return un(this,i,!1,!0)},get size(){return mn(this)},has:dn,add:za,set:$a,delete:Ua,clear:Ba,forEach:pn(!1,!0)},n={get(i){return un(this,i,!0)},get size(){return mn(this,!0)},has(i){return dn.call(this,i,!0)},add:Ke("add"),set:Ke("set"),delete:Ke("delete"),clear:Ke("clear"),forEach:pn(!0,!1)},r={get(i){return un(this,i,!0,!0)},get size(){return mn(this,!0)},has(i){return dn.call(this,i,!0)},add:Ke("add"),set:Ke("set"),delete:Ke("delete"),clear:Ke("clear"),forEach:pn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=hn(i,!1,!1),n[i]=hn(i,!0,!1),t[i]=hn(i,!1,!0),r[i]=hn(i,!0,!0)}),[e,n,t,r]}const[Ds,zs,$s,Us]=js();function aa(e,t){const n=t?e?Us:$s:e?zs:Ds;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get($(n,a)&&a in r?n:r,a,i)}const Bs={get:aa(!1,!1)},Hs={get:aa(!1,!0)},Ys={get:aa(!0,!1)},no=new WeakMap,ro=new WeakMap,ao=new WeakMap,Ks=new WeakMap;function Ws(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xs(e){return e.__v_skip||!Object.isExtensible(e)?0:Ws(gs(e))}function ia(e){return Pt(e)?e:oa(e,!1,Rs,Bs,no)}function qs(e){return oa(e,!1,Ls,Hs,ro)}function io(e){return oa(e,!0,Fs,Ys,ao)}function oa(e,t,n,r,a){if(!V(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Xs(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Ot(e){return Pt(e)?Ot(e.__v_raw):!!(e&&e.__v_isReactive)}function Pt(e){return!!(e&&e.__v_isReadonly)}function Ln(e){return!!(e&&e.__v_isShallow)}function oo(e){return Ot(e)||Pt(e)}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function so(e){return Fn(e,"__v_skip",!0),e}const Xt=e=>V(e)?ia(e):e,sa=e=>V(e)?io(e):e;function lo(e){Ve&&_e&&(e=U(e),Zi(e.dep||(e.dep=ta())))}function fo(e,t){e=U(e);const n=e.dep;n&&Pr(n)}function de(e){return!!(e&&e.__v_isRef===!0)}function gn(e){return Vs(e,!1)}function Vs(e,t){return de(e)?e:new Js(e,t)}class Js{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:U(t),this._value=n?t:Xt(t)}get value(){return lo(this),this._value}set value(t){const n=this.__v_isShallow||Ln(t)||Pt(t);t=n?t:U(t),mt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Xt(t),fo(this))}}function Gs(e){return de(e)?e.value:e}const Zs={get:(e,t,n)=>Gs(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return de(a)&&!de(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function co(e){return Ot(e)?e:new Proxy(e,Zs)}class Qs{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new na(t,()=>{this._dirty||(this._dirty=!0,fo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=U(this);return lo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function el(e,t,n=!1){let r,a;const i=j(e);return i?(r=e,a=Ne):(r=e.get,a=e.set),new Qs(r,a,i||!a,n)}function Je(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Jn(i,t,n)}return a}function Oe(e,t,n,r){if(j(e)){const i=Je(e,t,n,r);return i&&Yi(i)&&i.catch(o=>{Jn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Oe(e[i],t,n,r));return a}function Jn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Je(l,null,10,[e,o,s]);return}}tl(e,n,a,r)}function tl(e,t,n,r=!0){console.error(e)}let qt=!1,Sr=!1;const ie=[];let Ie=0;const Et=[];let je=null,ot=0;const uo=Promise.resolve();let la=null;function nl(e){const t=la||uo;return e?t.then(this?e.bind(this):e):t}function rl(e){let t=Ie+1,n=ie.length;for(;t<n;){const r=t+n>>>1,a=ie[r],i=Vt(a);i<e||i===e&&a.pre?t=r+1:n=r}return t}function fa(e){(!ie.length||!ie.includes(e,qt&&e.allowRecurse?Ie+1:Ie))&&(e.id==null?ie.push(e):ie.splice(rl(e.id),0,e),mo())}function mo(){!qt&&!Sr&&(Sr=!0,la=uo.then(ho))}function al(e){const t=ie.indexOf(e);t>Ie&&ie.splice(t,1)}function il(e){F(e)?Et.push(...e):(!je||!je.includes(e,e.allowRecurse?ot+1:ot))&&Et.push(e),mo()}function Ha(e,t,n=qt?Ie+1:0){for(;n<ie.length;n++){const r=ie[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;ie.splice(n,1),n--,r()}}}function po(e){if(Et.length){const t=[...new Set(Et)];if(Et.length=0,je){je.push(...t);return}for(je=t,je.sort((n,r)=>Vt(n)-Vt(r)),ot=0;ot<je.length;ot++)je[ot]();je=null,ot=0}}const Vt=e=>e.id==null?1/0:e.id,ol=(e,t)=>{const n=Vt(e)-Vt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function ho(e){Sr=!1,qt=!0,ie.sort(ol);try{for(Ie=0;Ie<ie.length;Ie++){const t=ie[Ie];t&&t.active!==!1&&Je(t,null,14)}}finally{Ie=0,ie.length=0,po(),qt=!1,la=null,(ie.length||Et.length)&&ho()}}function sl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||W;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:g}=r[d]||W;g&&(a=n.map(_=>Q(_)?_.trim():_)),m&&(a=n.map(kr))}let s,l=r[s=cr(t)]||r[s=cr(Me(t))];!l&&i&&(l=r[s=cr(Mt(t))]),l&&Oe(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Oe(c,e,6,a)}}function go(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!j(e)){const l=c=>{const d=go(c,t,!0);d&&(s=!0,ae(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(V(e)&&r.set(e,null),null):(F(i)?i.forEach(l=>o[l]=null):ae(o,i),V(e)&&r.set(e,o),o)}function Gn(e,t){return!e||!Yn(t)?!1:(t=t.slice(2).replace(/Once$/,""),$(e,t[0].toLowerCase()+t.slice(1))||$(e,Mt(t))||$(e,t))}let ye=null,Zn=null;function jn(e){const t=ye;return ye=e,Zn=e&&e.type.__scopeId||null,t}function ll(e){Zn=e}function fl(){Zn=null}function cl(e,t=ye,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&ti(-1);const i=jn(t);let o;try{o=e(...a)}finally{jn(i),r._d&&ti(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function dr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:g,setupState:_,ctx:P,inheritAttrs:E}=e;let D,w;const k=jn(e);try{if(n.shapeFlag&4){const S=a||r,B=S;D=Se(d.call(B,S,m,i,_,g,P)),w=l}else{const S=t;D=Se(S.length>1?S(i,{attrs:l,slots:s,emit:c}):S(i,null)),w=t.props?l:ul(l)}}catch(S){Yt.length=0,Jn(S,e,1),D=ce(pt)}let N=D;if(w&&E!==!1){const S=Object.keys(w),{shapeFlag:B}=N;S.length&&B&7&&(o&&S.some(Gr)&&(w=dl(w,o)),N=St(N,w))}return n.dirs&&(N=St(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),D=N,jn(k),D}const ul=e=>{let t;for(const n in e)(n==="class"||n==="style"||Yn(n))&&((t||(t={}))[n]=e[n]);return t},dl=(e,t)=>{const n={};for(const r in e)(!Gr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ml(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ya(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const g=d[m];if(o[g]!==r[g]&&!Gn(c,g))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ya(r,o,c):!0:!!o;return!1}function Ya(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Gn(n,i))return!0}return!1}function pl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const vo="components";function hl(e,t){return vl(vo,e,!0,t)||e}const gl=Symbol.for("v-ndc");function vl(e,t,n=!0,r=!1){const a=ye||re;if(a){const i=a.type;if(e===vo){const s=df(i,!1);if(s&&(s===t||s===Me(t)||s===Xn(Me(t))))return i}const o=Ka(a[e]||i[e],t)||Ka(a.appContext[e],t);return!o&&r?i:o}}function Ka(e,t){return e&&(e[t]||e[Me(t)]||e[Xn(Me(t))])}const bl=e=>e.__isSuspense;function yl(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):il(e)}const vn={};function Sn(e,t,n){return bo(e,t,n)}function bo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=W){var s;const l=Cs()===((s=re)==null?void 0:s.scope)?re:null;let c,d=!1,m=!1;if(de(e)?(c=()=>e.value,d=Ln(e)):Ot(e)?(c=()=>e,r=!0):F(e)?(m=!0,d=e.some(S=>Ot(S)||Ln(S)),c=()=>e.map(S=>{if(de(S))return S.value;if(Ot(S))return lt(S);if(j(S))return Je(S,l,2)})):j(e)?t?c=()=>Je(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return g&&g(),Oe(e,l,3,[_])}:c=Ne,t&&r){const S=c;c=()=>lt(S())}let g,_=S=>{g=k.onStop=()=>{Je(S,l,4),g=k.onStop=void 0}},P;if(Gt)if(_=Ne,t?n&&Oe(t,l,3,[c(),m?[]:void 0,_]):c(),a==="sync"){const S=gf();P=S.__watcherHandles||(S.__watcherHandles=[])}else return Ne;let E=m?new Array(e.length).fill(vn):vn;const D=()=>{if(k.active)if(t){const S=k.run();(r||d||(m?S.some((B,te)=>mt(B,E[te])):mt(S,E)))&&(g&&g(),Oe(t,l,3,[S,E===vn?void 0:m&&E[0]===vn?[]:E,_]),E=S)}else k.run()};D.allowRecurse=!!t;let w;a==="sync"?w=D:a==="post"?w=()=>fe(D,l&&l.suspense):(D.pre=!0,l&&(D.id=l.uid),w=()=>fa(D));const k=new na(c,w);t?n?D():E=k.run():a==="post"?fe(k.run.bind(k),l&&l.suspense):k.run();const N=()=>{k.stop(),l&&l.scope&&Zr(l.scope.effects,k)};return P&&P.push(N),N}function xl(e,t,n){const r=this.proxy,a=Q(e)?e.includes(".")?yo(r,e):()=>r[e]:e.bind(r,r);let i;j(t)?i=t:(i=t.handler,n=t);const o=re;It(this);const s=bo(a,i.bind(r),n);return o?It(o):dt(),s}function yo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function lt(e,t){if(!V(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),de(e))lt(e.value,t);else if(F(e))for(let n=0;n<e.length;n++)lt(e[n],t);else if(Hi(e)||At(e))e.forEach(n=>{lt(n,t)});else if(Wi(e))for(const n in e)lt(e[n],t);return e}function wl(e,t){const n=ye;if(n===null)return e;const r=nr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,c=W]=t[i];o&&(j(o)&&(o={mounted:o,updated:o}),o.deep&&lt(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c}))}return e}function at(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Rt(),Oe(l,n,8,[e.el,s,e,t]),Ft())}}/*! #__NO_SIDE_EFFECTS__ */function ca(e,t){return j(e)?ae({name:e.name},t,{setup:e}):e}const In=e=>!!e.type.__asyncLoader,xo=e=>e.type.__isKeepAlive;function _l(e,t){wo(e,"a",t)}function kl(e,t){wo(e,"da",t)}function wo(e,t,n=re){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Qn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)xo(a.parent.vnode)&&Al(r,t,n,a),a=a.parent}}function Al(e,t,n,r){const a=Qn(t,e,r,!0);_o(()=>{Zr(r[t],a)},n)}function Qn(e,t,n=re,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Rt(),It(n);const s=Oe(t,n,e,o);return dt(),Ft(),s});return r?a.unshift(i):a.push(i),i}}const He=e=>(t,n=re)=>(!Gt||e==="sp")&&Qn(e,(...r)=>t(...r),n),Ol=He("bm"),El=He("m"),Cl=He("bu"),Pl=He("u"),Sl=He("bum"),_o=He("um"),Il=He("sp"),Tl=He("rtg"),Nl=He("rtc");function Ml(e,t=re){Qn("ec",e,t)}function Wa(e,t,n,r){let a;const i=n&&n[r];if(F(e)||Q(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(V(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Ir=e=>e?Mo(e)?nr(e)||e.proxy:Ir(e.parent):null,Ht=ae(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ir(e.parent),$root:e=>Ir(e.root),$emit:e=>e.emit,$options:e=>ua(e),$forceUpdate:e=>e.f||(e.f=()=>fa(e.update)),$nextTick:e=>e.n||(e.n=nl.bind(e.proxy)),$watch:e=>xl.bind(e)}),mr=(e,t)=>e!==W&&!e.__isScriptSetup&&$(e,t),Rl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const _=o[t];if(_!==void 0)switch(_){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(mr(r,t))return o[t]=1,r[t];if(a!==W&&$(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&$(c,t))return o[t]=3,i[t];if(n!==W&&$(n,t))return o[t]=4,n[t];Tr&&(o[t]=0)}}const d=Ht[t];let m,g;if(d)return t==="$attrs"&&ue(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==W&&$(n,t))return o[t]=4,n[t];if(g=l.config.globalProperties,$(g,t))return g[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return mr(a,t)?(a[t]=n,!0):r!==W&&$(r,t)?(r[t]=n,!0):$(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==W&&$(e,o)||mr(t,o)||(s=i[0])&&$(s,o)||$(r,o)||$(Ht,o)||$(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:$(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Xa(e){return F(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Tr=!0;function Fl(e){const t=ua(e),n=e.proxy,r=e.ctx;Tr=!1,t.beforeCreate&&qa(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:g,beforeUpdate:_,updated:P,activated:E,deactivated:D,beforeDestroy:w,beforeUnmount:k,destroyed:N,unmounted:S,render:B,renderTracked:te,renderTriggered:ne,errorCaptured:he,serverPrefetch:ge,expose:Re,inheritAttrs:jt,components:sn,directives:ln,filters:sr}=t;if(c&&Ll(c,r,null),o)for(const J in o){const Y=o[J];j(Y)&&(r[J]=Y.bind(n))}if(a){const J=a.call(n,n);V(J)&&(e.data=ia(J))}if(Tr=!0,i)for(const J in i){const Y=i[J],nt=j(Y)?Y.bind(n,n):j(Y.get)?Y.get.bind(n,n):Ne,fn=!j(Y)&&j(Y.set)?Y.set.bind(n):Ne,rt=qe({get:nt,set:fn});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>rt.value,set:Ee=>rt.value=Ee})}if(s)for(const J in s)ko(s[J],r,n,J);if(l){const J=j(l)?l.call(n):l;Reflect.ownKeys(J).forEach(Y=>{Bl(Y,J[Y])})}d&&qa(d,e,"c");function oe(J,Y){F(Y)?Y.forEach(nt=>J(nt.bind(n))):Y&&J(Y.bind(n))}if(oe(Ol,m),oe(El,g),oe(Cl,_),oe(Pl,P),oe(_l,E),oe(kl,D),oe(Ml,he),oe(Nl,te),oe(Tl,ne),oe(Sl,k),oe(_o,S),oe(Il,ge),F(Re))if(Re.length){const J=e.exposed||(e.exposed={});Re.forEach(Y=>{Object.defineProperty(J,Y,{get:()=>n[Y],set:nt=>n[Y]=nt})})}else e.exposed||(e.exposed={});B&&e.render===Ne&&(e.render=B),jt!=null&&(e.inheritAttrs=jt),sn&&(e.components=sn),ln&&(e.directives=ln)}function Ll(e,t,n=Ne){F(e)&&(e=Nr(e));for(const r in e){const a=e[r];let i;V(a)?"default"in a?i=Tn(a.from||r,a.default,!0):i=Tn(a.from||r):i=Tn(a),de(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function qa(e,t,n){Oe(F(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ko(e,t,n,r){const a=r.includes(".")?yo(n,r):()=>n[r];if(Q(e)){const i=t[e];j(i)&&Sn(a,i)}else if(j(e))Sn(a,e.bind(n));else if(V(e))if(F(e))e.forEach(i=>ko(i,t,n,r));else{const i=j(e.handler)?e.handler.bind(n):t[e.handler];j(i)&&Sn(a,i,e)}}function ua(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Dn(l,c,o,!0)),Dn(l,t,o)),V(t)&&i.set(t,l),l}function Dn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Dn(e,i,n,!0),a&&a.forEach(o=>Dn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=jl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const jl={data:Va,props:Ja,emits:Ja,methods:Ut,computed:Ut,beforeCreate:se,created:se,beforeMount:se,mounted:se,beforeUpdate:se,updated:se,beforeDestroy:se,beforeUnmount:se,destroyed:se,unmounted:se,activated:se,deactivated:se,errorCaptured:se,serverPrefetch:se,components:Ut,directives:Ut,watch:zl,provide:Va,inject:Dl};function Va(e,t){return t?e?function(){return ae(j(e)?e.call(this,this):e,j(t)?t.call(this,this):t)}:t:e}function Dl(e,t){return Ut(Nr(e),Nr(t))}function Nr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function se(e,t){return e?[...new Set([].concat(e,t))]:t}function Ut(e,t){return e?ae(Object.create(null),e,t):t}function Ja(e,t){return e?F(e)&&F(t)?[...new Set([...e,...t])]:ae(Object.create(null),Xa(e),Xa(t??{})):t}function zl(e,t){if(!e)return t;if(!t)return e;const n=ae(Object.create(null),e);for(const r in t)n[r]=se(e[r],t[r]);return n}function Ao(){return{app:null,config:{isNativeTag:ps,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $l=0;function Ul(e,t){return function(r,a=null){j(r)||(r=ae({},r)),a!=null&&!V(a)&&(a=null);const i=Ao(),o=new WeakSet;let s=!1;const l=i.app={_uid:$l++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:vf,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&j(c.install)?(o.add(c),c.install(l,...d)):j(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const g=ce(r,a);return g.appContext=i,d&&t?t(g,c):e(g,c,m),s=!0,l._container=c,c.__vue_app__=l,nr(g.component)||g.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l},runWithContext(c){zn=l;try{return c()}finally{zn=null}}};return l}}let zn=null;function Bl(e,t){if(re){let n=re.provides;const r=re.parent&&re.parent.provides;r===n&&(n=re.provides=Object.create(r)),n[e]=t}}function Tn(e,t,n=!1){const r=re||ye;if(r||zn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:zn._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&j(t)?t.call(r&&r.proxy):t}}function Hl(e,t,n,r=!1){const a={},i={};Fn(i,tr,1),e.propsDefaults=Object.create(null),Oo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:qs(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Yl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=U(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let g=d[m];if(Gn(e.emitsOptions,g))continue;const _=t[g];if(l)if($(i,g))_!==i[g]&&(i[g]=_,c=!0);else{const P=Me(g);a[P]=Mr(l,s,P,_,e,!1)}else _!==i[g]&&(i[g]=_,c=!0)}}}else{Oo(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!$(t,m)&&((d=Mt(m))===m||!$(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Mr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!$(t,m))&&(delete i[m],c=!0)}c&&ze(e,"set","$attrs")}function Oo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Cn(l))continue;const c=t[l];let d;a&&$(a,d=Me(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:Gn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=U(n),c=s||W;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Mr(a,l,m,c[m],e,!$(c,m))}}return o}function Mr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=$(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&j(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(It(a),r=c[n]=l.call(null,t),dt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Mt(n))&&(r=!0))}return r}function Eo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!j(e)){const d=m=>{l=!0;const[g,_]=Eo(m,t,!0);ae(o,g),_&&s.push(..._)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return V(e)&&r.set(e,kt),kt;if(F(i))for(let d=0;d<i.length;d++){const m=Me(i[d]);Ga(m)&&(o[m]=W)}else if(i)for(const d in i){const m=Me(d);if(Ga(m)){const g=i[d],_=o[m]=F(g)||j(g)?{type:g}:ae({},g);if(_){const P=ei(Boolean,_.type),E=ei(String,_.type);_[0]=P>-1,_[1]=E<0||P<E,(P>-1||$(_,"default"))&&s.push(m)}}}const c=[o,s];return V(e)&&r.set(e,c),c}function Ga(e){return e[0]!=="$"}function Za(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Qa(e,t){return Za(e)===Za(t)}function ei(e,t){return F(t)?t.findIndex(n=>Qa(n,e)):j(t)&&Qa(t,e)?0:-1}const Co=e=>e[0]==="_"||e==="$stable",da=e=>F(e)?e.map(Se):[Se(e)],Kl=(e,t,n)=>{if(t._n)return t;const r=cl((...a)=>da(t(...a)),n);return r._c=!1,r},Po=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Co(a))continue;const i=e[a];if(j(i))t[a]=Kl(a,i,r);else if(i!=null){const o=da(i);t[a]=()=>o}}},So=(e,t)=>{const n=da(t);e.slots.default=()=>n},Wl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=U(t),Fn(t,"_",n)):Po(t,e.slots={})}else e.slots={},t&&So(e,t);Fn(e.slots,tr,1)},Xl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=W;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ae(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Po(t,a)),o=t}else t&&(So(e,t),o={default:1});if(i)for(const s in a)!Co(s)&&o[s]==null&&delete a[s]};function Rr(e,t,n,r,a=!1){if(F(e)){e.forEach((g,_)=>Rr(g,t&&(F(t)?t[_]:t),n,r,a));return}if(In(r)&&!a)return;const i=r.shapeFlag&4?nr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===W?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(Q(c)?(d[c]=null,$(m,c)&&(m[c]=null)):de(c)&&(c.value=null)),j(l))Je(l,s,12,[o,d]);else{const g=Q(l),_=de(l);if(g||_){const P=()=>{if(e.f){const E=g?$(m,l)?m[l]:d[l]:l.value;a?F(E)&&Zr(E,i):F(E)?E.includes(i)||E.push(i):g?(d[l]=[i],$(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else g?(d[l]=o,$(m,l)&&(m[l]=o)):_&&(l.value=o,e.k&&(d[e.k]=o))};o?(P.id=-1,fe(P,n)):P()}}}const fe=yl;function ql(e){return Vl(e)}function Vl(e,t){const n=Ar();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:g,setScopeId:_=Ne,insertStaticContent:P}=e,E=(f,u,p,h=null,v=null,x=null,O=!1,y=null,A=!!u.dynamicChildren)=>{if(f===u)return;f&&!zt(f,u)&&(h=cn(f),Ee(f,v,x,!0),f=null),u.patchFlag===-2&&(A=!1,u.dynamicChildren=null);const{type:b,ref:M,shapeFlag:I}=u;switch(b){case er:D(f,u,p,h);break;case pt:w(f,u,p,h);break;case pr:f==null&&k(u,p,h,O);break;case be:sn(f,u,p,h,v,x,O,y,A);break;default:I&1?B(f,u,p,h,v,x,O,y,A):I&6?ln(f,u,p,h,v,x,O,y,A):(I&64||I&128)&&b.process(f,u,p,h,v,x,O,y,A,vt)}M!=null&&v&&Rr(M,f&&f.ref,x,u||f,!u)},D=(f,u,p,h)=>{if(f==null)r(u.el=s(u.children),p,h);else{const v=u.el=f.el;u.children!==f.children&&c(v,u.children)}},w=(f,u,p,h)=>{f==null?r(u.el=l(u.children||""),p,h):u.el=f.el},k=(f,u,p,h)=>{[f.el,f.anchor]=P(f.children,u,p,h,f.el,f.anchor)},N=({el:f,anchor:u},p,h)=>{let v;for(;f&&f!==u;)v=g(f),r(f,p,h),f=v;r(u,p,h)},S=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=g(f),a(f),f=p;a(u)},B=(f,u,p,h,v,x,O,y,A)=>{O=O||u.type==="svg",f==null?te(u,p,h,v,x,O,y,A):ge(f,u,v,x,O,y,A)},te=(f,u,p,h,v,x,O,y)=>{let A,b;const{type:M,props:I,shapeFlag:R,transition:L,dirs:z}=f;if(A=f.el=o(f.type,x,I&&I.is,I),R&8?d(A,f.children):R&16&&he(f.children,A,null,h,v,x&&M!=="foreignObject",O,y),z&&at(f,null,h,"created"),ne(A,f,f.scopeId,O,h),I){for(const H in I)H!=="value"&&!Cn(H)&&i(A,H,null,I[H],x,f.children,h,v,Fe);"value"in I&&i(A,"value",null,I.value),(b=I.onVnodeBeforeMount)&&Pe(b,h,f)}z&&at(f,null,h,"beforeMount");const K=Jl(v,L);K&&L.beforeEnter(A),r(A,u,p),((b=I&&I.onVnodeMounted)||K||z)&&fe(()=>{b&&Pe(b,h,f),K&&L.enter(A),z&&at(f,null,h,"mounted")},v)},ne=(f,u,p,h,v)=>{if(p&&_(f,p),h)for(let x=0;x<h.length;x++)_(f,h[x]);if(v){let x=v.subTree;if(u===x){const O=v.vnode;ne(f,O,O.scopeId,O.slotScopeIds,v.parent)}}},he=(f,u,p,h,v,x,O,y,A=0)=>{for(let b=A;b<f.length;b++){const M=f[b]=y?Xe(f[b]):Se(f[b]);E(null,M,u,p,h,v,x,O,y)}},ge=(f,u,p,h,v,x,O)=>{const y=u.el=f.el;let{patchFlag:A,dynamicChildren:b,dirs:M}=u;A|=f.patchFlag&16;const I=f.props||W,R=u.props||W;let L;p&&it(p,!1),(L=R.onVnodeBeforeUpdate)&&Pe(L,p,u,f),M&&at(u,f,p,"beforeUpdate"),p&&it(p,!0);const z=v&&u.type!=="foreignObject";if(b?Re(f.dynamicChildren,b,y,p,h,z,x):O||Y(f,u,y,null,p,h,z,x,!1),A>0){if(A&16)jt(y,u,I,R,p,h,v);else if(A&2&&I.class!==R.class&&i(y,"class",null,R.class,v),A&4&&i(y,"style",I.style,R.style,v),A&8){const K=u.dynamicProps;for(let H=0;H<K.length;H++){const Z=K[H],xe=I[Z],bt=R[Z];(bt!==xe||Z==="value")&&i(y,Z,xe,bt,v,f.children,p,h,Fe)}}A&1&&f.children!==u.children&&d(y,u.children)}else!O&&b==null&&jt(y,u,I,R,p,h,v);((L=R.onVnodeUpdated)||M)&&fe(()=>{L&&Pe(L,p,u,f),M&&at(u,f,p,"updated")},h)},Re=(f,u,p,h,v,x,O)=>{for(let y=0;y<u.length;y++){const A=f[y],b=u[y],M=A.el&&(A.type===be||!zt(A,b)||A.shapeFlag&70)?m(A.el):p;E(A,b,M,null,h,v,x,O,!0)}},jt=(f,u,p,h,v,x,O)=>{if(p!==h){if(p!==W)for(const y in p)!Cn(y)&&!(y in h)&&i(f,y,p[y],null,O,u.children,v,x,Fe);for(const y in h){if(Cn(y))continue;const A=h[y],b=p[y];A!==b&&y!=="value"&&i(f,y,b,A,O,u.children,v,x,Fe)}"value"in h&&i(f,"value",p.value,h.value)}},sn=(f,u,p,h,v,x,O,y,A)=>{const b=u.el=f?f.el:s(""),M=u.anchor=f?f.anchor:s("");let{patchFlag:I,dynamicChildren:R,slotScopeIds:L}=u;L&&(y=y?y.concat(L):L),f==null?(r(b,p,h),r(M,p,h),he(u.children,p,M,v,x,O,y,A)):I>0&&I&64&&R&&f.dynamicChildren?(Re(f.dynamicChildren,R,p,v,x,O,y),(u.key!=null||v&&u===v.subTree)&&Io(f,u,!0)):Y(f,u,p,M,v,x,O,y,A)},ln=(f,u,p,h,v,x,O,y,A)=>{u.slotScopeIds=y,f==null?u.shapeFlag&512?v.ctx.activate(u,p,h,O,A):sr(u,p,h,v,x,O,A):Pa(f,u,A)},sr=(f,u,p,h,v,x,O)=>{const y=f.component=sf(f,h,v);if(xo(f)&&(y.ctx.renderer=vt),lf(y),y.asyncDep){if(v&&v.registerDep(y,oe),!f.el){const A=y.subTree=ce(pt);w(null,A,u,p)}return}oe(y,f,u,p,v,x,O)},Pa=(f,u,p)=>{const h=u.component=f.component;if(ml(f,u,p))if(h.asyncDep&&!h.asyncResolved){J(h,u,p);return}else h.next=u,al(h.update),h.update();else u.el=f.el,h.vnode=u},oe=(f,u,p,h,v,x,O)=>{const y=()=>{if(f.isMounted){let{next:M,bu:I,u:R,parent:L,vnode:z}=f,K=M,H;it(f,!1),M?(M.el=z.el,J(f,M,O)):M=z,I&&Pn(I),(H=M.props&&M.props.onVnodeBeforeUpdate)&&Pe(H,L,M,z),it(f,!0);const Z=dr(f),xe=f.subTree;f.subTree=Z,E(xe,Z,m(xe.el),cn(xe),f,v,x),M.el=Z.el,K===null&&pl(f,Z.el),R&&fe(R,v),(H=M.props&&M.props.onVnodeUpdated)&&fe(()=>Pe(H,L,M,z),v)}else{let M;const{el:I,props:R}=u,{bm:L,m:z,parent:K}=f,H=In(u);if(it(f,!1),L&&Pn(L),!H&&(M=R&&R.onVnodeBeforeMount)&&Pe(M,K,u),it(f,!0),I&&fr){const Z=()=>{f.subTree=dr(f),fr(I,f.subTree,f,v,null)};H?u.type.__asyncLoader().then(()=>!f.isUnmounted&&Z()):Z()}else{const Z=f.subTree=dr(f);E(null,Z,p,h,f,v,x),u.el=Z.el}if(z&&fe(z,v),!H&&(M=R&&R.onVnodeMounted)){const Z=u;fe(()=>Pe(M,K,Z),v)}(u.shapeFlag&256||K&&In(K.vnode)&&K.vnode.shapeFlag&256)&&f.a&&fe(f.a,v),f.isMounted=!0,u=p=h=null}},A=f.effect=new na(y,()=>fa(b),f.scope),b=f.update=()=>A.run();b.id=f.uid,it(f,!0),b()},J=(f,u,p)=>{u.component=f;const h=f.vnode.props;f.vnode=u,f.next=null,Yl(f,u.props,h,p),Xl(f,u.children,p),Rt(),Ha(f),Ft()},Y=(f,u,p,h,v,x,O,y,A=!1)=>{const b=f&&f.children,M=f?f.shapeFlag:0,I=u.children,{patchFlag:R,shapeFlag:L}=u;if(R>0){if(R&128){fn(b,I,p,h,v,x,O,y,A);return}else if(R&256){nt(b,I,p,h,v,x,O,y,A);return}}L&8?(M&16&&Fe(b,v,x),I!==b&&d(p,I)):M&16?L&16?fn(b,I,p,h,v,x,O,y,A):Fe(b,v,x,!0):(M&8&&d(p,""),L&16&&he(I,p,h,v,x,O,y,A))},nt=(f,u,p,h,v,x,O,y,A)=>{f=f||kt,u=u||kt;const b=f.length,M=u.length,I=Math.min(b,M);let R;for(R=0;R<I;R++){const L=u[R]=A?Xe(u[R]):Se(u[R]);E(f[R],L,p,null,v,x,O,y,A)}b>M?Fe(f,v,x,!0,!1,I):he(u,p,h,v,x,O,y,A,I)},fn=(f,u,p,h,v,x,O,y,A)=>{let b=0;const M=u.length;let I=f.length-1,R=M-1;for(;b<=I&&b<=R;){const L=f[b],z=u[b]=A?Xe(u[b]):Se(u[b]);if(zt(L,z))E(L,z,p,null,v,x,O,y,A);else break;b++}for(;b<=I&&b<=R;){const L=f[I],z=u[R]=A?Xe(u[R]):Se(u[R]);if(zt(L,z))E(L,z,p,null,v,x,O,y,A);else break;I--,R--}if(b>I){if(b<=R){const L=R+1,z=L<M?u[L].el:h;for(;b<=R;)E(null,u[b]=A?Xe(u[b]):Se(u[b]),p,z,v,x,O,y,A),b++}}else if(b>R)for(;b<=I;)Ee(f[b],v,x,!0),b++;else{const L=b,z=b,K=new Map;for(b=z;b<=R;b++){const me=u[b]=A?Xe(u[b]):Se(u[b]);me.key!=null&&K.set(me.key,b)}let H,Z=0;const xe=R-z+1;let bt=!1,Ta=0;const Dt=new Array(xe);for(b=0;b<xe;b++)Dt[b]=0;for(b=L;b<=I;b++){const me=f[b];if(Z>=xe){Ee(me,v,x,!0);continue}let Ce;if(me.key!=null)Ce=K.get(me.key);else for(H=z;H<=R;H++)if(Dt[H-z]===0&&zt(me,u[H])){Ce=H;break}Ce===void 0?Ee(me,v,x,!0):(Dt[Ce-z]=b+1,Ce>=Ta?Ta=Ce:bt=!0,E(me,u[Ce],p,null,v,x,O,y,A),Z++)}const Na=bt?Gl(Dt):kt;for(H=Na.length-1,b=xe-1;b>=0;b--){const me=z+b,Ce=u[me],Ma=me+1<M?u[me+1].el:h;Dt[b]===0?E(null,Ce,p,Ma,v,x,O,y,A):bt&&(H<0||b!==Na[H]?rt(Ce,p,Ma,2):H--)}}},rt=(f,u,p,h,v=null)=>{const{el:x,type:O,transition:y,children:A,shapeFlag:b}=f;if(b&6){rt(f.component.subTree,u,p,h);return}if(b&128){f.suspense.move(u,p,h);return}if(b&64){O.move(f,u,p,vt);return}if(O===be){r(x,u,p);for(let I=0;I<A.length;I++)rt(A[I],u,p,h);r(f.anchor,u,p);return}if(O===pr){N(f,u,p);return}if(h!==2&&b&1&&y)if(h===0)y.beforeEnter(x),r(x,u,p),fe(()=>y.enter(x),v);else{const{leave:I,delayLeave:R,afterLeave:L}=y,z=()=>r(x,u,p),K=()=>{I(x,()=>{z(),L&&L()})};R?R(x,z,K):K()}else r(x,u,p)},Ee=(f,u,p,h=!1,v=!1)=>{const{type:x,props:O,ref:y,children:A,dynamicChildren:b,shapeFlag:M,patchFlag:I,dirs:R}=f;if(y!=null&&Rr(y,null,p,f,!0),M&256){u.ctx.deactivate(f);return}const L=M&1&&R,z=!In(f);let K;if(z&&(K=O&&O.onVnodeBeforeUnmount)&&Pe(K,u,f),M&6)ms(f.component,p,h);else{if(M&128){f.suspense.unmount(p,h);return}L&&at(f,null,u,"beforeUnmount"),M&64?f.type.remove(f,u,p,v,vt,h):b&&(x!==be||I>0&&I&64)?Fe(b,u,p,!1,!0):(x===be&&I&384||!v&&M&16)&&Fe(A,u,p),h&&Sa(f)}(z&&(K=O&&O.onVnodeUnmounted)||L)&&fe(()=>{K&&Pe(K,u,f),L&&at(f,null,u,"unmounted")},p)},Sa=f=>{const{type:u,el:p,anchor:h,transition:v}=f;if(u===be){ds(p,h);return}if(u===pr){S(f);return}const x=()=>{a(p),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:O,delayLeave:y}=v,A=()=>O(p,x);y?y(f.el,x,A):A()}else x()},ds=(f,u)=>{let p;for(;f!==u;)p=g(f),a(f),f=p;a(u)},ms=(f,u,p)=>{const{bum:h,scope:v,update:x,subTree:O,um:y}=f;h&&Pn(h),v.stop(),x&&(x.active=!1,Ee(O,f,u,p)),y&&fe(y,u),fe(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Fe=(f,u,p,h=!1,v=!1,x=0)=>{for(let O=x;O<f.length;O++)Ee(f[O],u,p,h,v)},cn=f=>f.shapeFlag&6?cn(f.component.subTree):f.shapeFlag&128?f.suspense.next():g(f.anchor||f.el),Ia=(f,u,p)=>{f==null?u._vnode&&Ee(u._vnode,null,null,!0):E(u._vnode||null,f,u,null,null,null,p),Ha(),po(),u._vnode=f},vt={p:E,um:Ee,m:rt,r:Sa,mt:sr,mc:he,pc:Y,pbc:Re,n:cn,o:e};let lr,fr;return t&&([lr,fr]=t(vt)),{render:Ia,hydrate:lr,createApp:Ul(Ia,lr)}}function it({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Jl(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Io(e,t,n=!1){const r=e.children,a=t.children;if(F(r)&&F(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Xe(a[i]),s.el=o.el),n||Io(o,s)),s.type===er&&(s.el=o.el)}}function Gl(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Zl=e=>e.__isTeleport,be=Symbol.for("v-fgt"),er=Symbol.for("v-txt"),pt=Symbol.for("v-cmt"),pr=Symbol.for("v-stc"),Yt=[];let ke=null;function ve(e=!1){Yt.push(ke=e?null:[])}function Ql(){Yt.pop(),ke=Yt[Yt.length-1]||null}let Jt=1;function ti(e){Jt+=e}function To(e){return e.dynamicChildren=Jt>0?ke||kt:null,Ql(),Jt>0&&ke&&ke.push(e),e}function Le(e,t,n,r,a,i){return To(Ge(e,t,n,r,a,i,!0))}function Fr(e,t,n,r,a){return To(ce(e,t,n,r,a,!0))}function Lr(e){return e?e.__v_isVNode===!0:!1}function zt(e,t){return e.type===t.type&&e.key===t.key}const tr="__vInternal",No=({key:e})=>e??null,Nn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Q(e)||de(e)||j(e)?{i:ye,r:e,k:t,f:!!n}:e:null);function Ge(e,t=null,n=null,r=0,a=null,i=e===be?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&No(t),ref:t&&Nn(t),scopeId:Zn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:ye};return s?(ma(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=Q(n)?8:16),Jt>0&&!o&&ke&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&ke.push(l),l}const ce=ef;function ef(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===gl)&&(e=pt),Lr(e)){const s=St(e,t,!0);return n&&ma(s,n),Jt>0&&!i&&ke&&(s.shapeFlag&6?ke[ke.indexOf(e)]=s:ke.push(s)),s.patchFlag|=-2,s}if(mf(e)&&(e=e.__vccOpts),t){t=tf(t);let{class:s,style:l}=t;s&&!Q(s)&&(t.class=qn(s)),V(l)&&(oo(l)&&!F(l)&&(l=ae({},l)),t.style=ea(l))}const o=Q(e)?1:bl(e)?128:Zl(e)?64:V(e)?4:j(e)?2:0;return Ge(e,t,n,r,a,o,i,!0)}function tf(e){return e?oo(e)||tr in e?ae({},e):e:null}function St(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?rf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&No(s),ref:t&&t.ref?n&&a?F(a)?a.concat(Nn(t)):[a,Nn(t)]:Nn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==be?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&St(e.ssContent),ssFallback:e.ssFallback&&St(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function nf(e=" ",t=0){return ce(er,null,e,t)}function ni(e="",t=!1){return t?(ve(),Fr(pt,null,e)):ce(pt,null,e)}function Se(e){return e==null||typeof e=="boolean"?ce(pt):F(e)?ce(be,null,e.slice()):typeof e=="object"?Xe(e):ce(er,null,String(e))}function Xe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:St(e)}function ma(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),ma(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(tr in t)?t._ctx=ye:a===3&&ye&&(ye.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else j(t)?(t={default:t,_ctx:ye},n=32):(t=String(t),r&64?(n=16,t=[nf(t)]):n=8);e.children=t,e.shapeFlag|=n}function rf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=qn([t.class,r.class]));else if(a==="style")t.style=ea([t.style,r.style]);else if(Yn(a)){const i=t[a],o=r[a];o&&i!==o&&!(F(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Pe(e,t,n,r=null){Oe(e,t,7,[n,r])}const af=Ao();let of=0;function sf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||af,i={uid:of++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Os(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Eo(r,a),emitsOptions:go(r,a),emit:null,emitted:null,propsDefaults:W,inheritAttrs:r.inheritAttrs,ctx:W,data:W,props:W,attrs:W,slots:W,refs:W,setupState:W,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=sl.bind(null,i),e.ce&&e.ce(i),i}let re=null,pa,yt,ri="__VUE_INSTANCE_SETTERS__";(yt=Ar()[ri])||(yt=Ar()[ri]=[]),yt.push(e=>re=e),pa=e=>{yt.length>1?yt.forEach(t=>t(e)):yt[0](e)};const It=e=>{pa(e),e.scope.on()},dt=()=>{re&&re.scope.off(),pa(null)};function Mo(e){return e.vnode.shapeFlag&4}let Gt=!1;function lf(e,t=!1){Gt=t;const{props:n,children:r}=e.vnode,a=Mo(e);Hl(e,n,a,t),Wl(e,r);const i=a?ff(e,t):void 0;return Gt=!1,i}function ff(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=so(new Proxy(e.ctx,Rl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?uf(e):null;It(e),Rt();const i=Je(r,e,0,[e.props,a]);if(Ft(),dt(),Yi(i)){if(i.then(dt,dt),t)return i.then(o=>{ai(e,o,t)}).catch(o=>{Jn(o,e,0)});e.asyncDep=i}else ai(e,i,t)}else Ro(e,t)}function ai(e,t,n){j(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:V(t)&&(e.setupState=co(t)),Ro(e,n)}let ii;function Ro(e,t,n){const r=e.type;if(!e.render){if(!t&&ii&&!r.render){const a=r.template||ua(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=ae(ae({isCustomElement:i,delimiters:s},o),l);r.render=ii(a,c)}}e.render=r.render||Ne}{It(e),Rt();try{Fl(e)}finally{Ft(),dt()}}}function cf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return ue(e,"get","$attrs"),t[n]}}))}function uf(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return cf(e)},slots:e.slots,emit:e.emit,expose:t}}function nr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(co(so(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ht)return Ht[n](e)},has(t,n){return n in t||n in Ht}}))}function df(e,t=!0){return j(e)?e.displayName||e.name:e.name||t&&e.__name}function mf(e){return j(e)&&"__vccOpts"in e}const qe=(e,t)=>el(e,t,Gt);function pf(e,t,n){const r=arguments.length;return r===2?V(t)&&!F(t)?Lr(t)?ce(e,null,[t]):ce(e,t):ce(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Lr(n)&&(n=[n]),ce(e,t,n))}const hf=Symbol.for("v-scx"),gf=()=>Tn(hf),vf="3.3.13",bf="http://www.w3.org/2000/svg",st=typeof document<"u"?document:null,oi=st&&st.createElement("template"),yf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?st.createElementNS(bf,e):st.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>st.createTextNode(e),createComment:e=>st.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>st.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{oi.innerHTML=r?`<svg>${e}</svg>`:e;const s=oi.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},xf=Symbol("_vtc");function wf(e,t,n){const r=e[xf];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const _f=Symbol("_vod"),kf=Symbol("");function Af(e,t,n){const r=e.style,a=Q(n);if(n&&!a){if(t&&!Q(t))for(const i in t)n[i]==null&&jr(r,i,"");for(const i in n)jr(r,i,n[i])}else{const i=r.display;if(a){if(t!==n){const o=r[kf];o&&(n+=";"+o),r.cssText=n}}else t&&e.removeAttribute("style");_f in e&&(r.display=i)}}const si=/\s*!important$/;function jr(e,t,n){if(F(n))n.forEach(r=>jr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Of(e,t);si.test(n)?e.setProperty(Mt(r),n.replace(si,""),"important"):e[r]=n}}const li=["Webkit","Moz","ms"],hr={};function Of(e,t){const n=hr[t];if(n)return n;let r=Me(t);if(r!=="filter"&&r in e)return hr[t]=r;r=Xn(r);for(let a=0;a<li.length;a++){const i=li[a]+r;if(i in e)return hr[t]=i}return t}const fi="http://www.w3.org/1999/xlink";function Ef(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(fi,t.slice(6,t.length)):e.setAttributeNS(fi,t,n);else{const i=As(t);n==null||i&&!Xi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Cf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const c=s==="OPTION"?e.getAttribute("value"):e.value,d=n??"";c!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Xi(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function xt(e,t,n,r){e.addEventListener(t,n,r)}function Pf(e,t,n,r){e.removeEventListener(t,n,r)}const ci=Symbol("_vei");function Sf(e,t,n,r,a=null){const i=e[ci]||(e[ci]={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=If(t);if(r){const c=i[t]=Mf(r,a);xt(e,s,c,l)}else o&&(Pf(e,s,o,l),i[t]=void 0)}}const ui=/(?:Once|Passive|Capture)$/;function If(e){let t;if(ui.test(e)){t={};let r;for(;r=e.match(ui);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Mt(e.slice(2)),t]}let gr=0;const Tf=Promise.resolve(),Nf=()=>gr||(Tf.then(()=>gr=0),gr=Date.now());function Mf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Oe(Rf(r,n.value),t,5,[r])};return n.value=e,n.attached=Nf(),n}function Rf(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const di=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Ff=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?wf(e,r,a):t==="style"?Af(e,n,r):Yn(t)?Gr(t)||Sf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Lf(e,t,r,a))?Cf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Ef(e,t,r,a))};function Lf(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&di(t)&&j(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const a=e.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return di(t)&&Q(n)?!1:t in e}const mi=e=>{const t=e.props["onUpdate:modelValue"]||!1;return F(t)?n=>Pn(t,n):t};function jf(e){e.target.composing=!0}function pi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const vr=Symbol("_assign"),Df={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e[vr]=mi(a);const i=r||a.props&&a.props.type==="number";xt(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=kr(s)),e[vr](s)}),n&&xt(e,"change",()=>{e.value=e.value.trim()}),t||(xt(e,"compositionstart",jf),xt(e,"compositionend",pi),xt(e,"change",pi))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e[vr]=mi(i),e.composing)return;const o=a||e.type==="number"?kr(e.value):e.value,s=t??"";o!==s&&(document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===s)||(e.value=s))}},zf=["ctrl","shift","alt","meta"],$f={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>zf.some(n=>e[`${n}Key`]&&!t.includes(n))},Uf=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(a,...i)=>{for(let o=0;o<t.length;o++){const s=$f[t[o]];if(s&&s(a,t))return}return e(a,...i)})},Bf=ae({patchProp:Ff},yf);let hi;function Hf(){return hi||(hi=ql(Bf))}const Yf=(...e)=>{const t=Hf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Kf(r);if(!a)return;const i=t._component;!j(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Kf(e){return Q(e)?document.querySelector(e):e}function gi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gi(Object(n),!0).forEach(function(r){ee(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function $n(e){"@babel/helpers - typeof";return $n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$n(e)}function Wf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function vi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Xf(e,t,n){return t&&vi(e.prototype,t),n&&vi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ha(e,t){return Vf(e)||Gf(e,t)||Fo(e,t)||Qf()}function rn(e){return qf(e)||Jf(e)||Fo(e)||Zf()}function qf(e){if(Array.isArray(e))return Dr(e)}function Vf(e){if(Array.isArray(e))return e}function Jf(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Gf(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Fo(e,t){if(e){if(typeof e=="string")return Dr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Dr(e,t)}}function Dr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Zf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var bi=function(){},ga={},Lo={},jo=null,Do={mark:bi,measure:bi};try{typeof window<"u"&&(ga=window),typeof document<"u"&&(Lo=document),typeof MutationObserver<"u"&&(jo=MutationObserver),typeof performance<"u"&&(Do=performance)}catch{}var ec=ga.navigator||{},yi=ec.userAgent,xi=yi===void 0?"":yi,Qe=ga,q=Lo,wi=jo,bn=Do;Qe.document;var Ye=!!q.documentElement&&!!q.head&&typeof q.addEventListener=="function"&&typeof q.createElement=="function",zo=~xi.indexOf("MSIE")||~xi.indexOf("Trident/"),yn,xn,wn,_n,kn,$e="___FONT_AWESOME___",zr=16,$o="fa",Uo="svg-inline--fa",ht="data-fa-i2svg",$r="data-fa-pseudo-element",tc="data-fa-pseudo-element-pending",va="data-prefix",ba="data-icon",_i="fontawesome-i2svg",nc="async",rc=["HTML","HEAD","STYLE","SCRIPT"],Bo=function(){try{return!0}catch{return!1}}(),X="classic",G="sharp",ya=[X,G];function an(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[X]}})}var Zt=an((yn={},ee(yn,X,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),ee(yn,G,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),yn)),Qt=an((xn={},ee(xn,X,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ee(xn,G,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),xn)),en=an((wn={},ee(wn,X,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ee(wn,G,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),wn)),ac=an((_n={},ee(_n,X,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ee(_n,G,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),_n)),ic=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Ho="fa-layers-text",oc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,sc=an((kn={},ee(kn,X,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ee(kn,G,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),kn)),Yo=[1,2,3,4,5,6,7,8,9,10],lc=Yo.concat([11,12,13,14,15,16,17,18,19,20]),fc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ft={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},tn=new Set;Object.keys(Qt[X]).map(tn.add.bind(tn));Object.keys(Qt[G]).map(tn.add.bind(tn));var cc=[].concat(ya,rn(tn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ft.GROUP,ft.SWAP_OPACITY,ft.PRIMARY,ft.SECONDARY]).concat(Yo.map(function(e){return"".concat(e,"x")})).concat(lc.map(function(e){return"w-".concat(e)})),Kt=Qe.FontAwesomeConfig||{};function uc(e){var t=q.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function dc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(q&&typeof q.querySelector=="function"){var mc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];mc.forEach(function(e){var t=ha(e,2),n=t[0],r=t[1],a=dc(uc(n));a!=null&&(Kt[r]=a)})}var Ko={styleDefault:"solid",familyDefault:"classic",cssPrefix:$o,replacementClass:Uo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Kt.familyPrefix&&(Kt.cssPrefix=Kt.familyPrefix);var Tt=C(C({},Ko),Kt);Tt.autoReplaceSvg||(Tt.observeMutations=!1);var T={};Object.keys(Ko).forEach(function(e){Object.defineProperty(T,e,{enumerable:!0,set:function(n){Tt[e]=n,Wt.forEach(function(r){return r(T)})},get:function(){return Tt[e]}})});Object.defineProperty(T,"familyPrefix",{enumerable:!0,set:function(t){Tt.cssPrefix=t,Wt.forEach(function(n){return n(T)})},get:function(){return Tt.cssPrefix}});Qe.FontAwesomeConfig=T;var Wt=[];function pc(e){return Wt.push(e),function(){Wt.splice(Wt.indexOf(e),1)}}var We=zr,Te={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function hc(e){if(!(!e||!Ye)){var t=q.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=q.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return q.head.insertBefore(t,r),e}}var gc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function nn(){for(var e=12,t="";e-- >0;)t+=gc[Math.random()*62|0];return t}function Lt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function xa(e){return e.classList?Lt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Wo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function vc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Wo(e[n]),'" ')},"").trim()}function rr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function wa(e){return e.size!==Te.size||e.x!==Te.x||e.y!==Te.y||e.rotate!==Te.rotate||e.flipX||e.flipY}function bc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function yc(e){var t=e.transform,n=e.width,r=n===void 0?zr:n,a=e.height,i=a===void 0?zr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&zo?l+="translate(".concat(t.x/We-r/2,"em, ").concat(t.y/We-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/We,"em), calc(-50% + ").concat(t.y/We,"em)) "):l+="translate(".concat(t.x/We,"em, ").concat(t.y/We,"em) "),l+="scale(".concat(t.size/We*(t.flipX?-1:1),", ").concat(t.size/We*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var xc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Xo(){var e=$o,t=Uo,n=T.cssPrefix,r=T.replacementClass,a=xc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var ki=!1;function br(){T.autoAddCss&&!ki&&(hc(Xo()),ki=!0)}var wc={mixout:function(){return{dom:{css:Xo,insertCss:br}}},hooks:function(){return{beforeDOMElementCreation:function(){br()},beforeI2svg:function(){br()}}}},Ue=Qe||{};Ue[$e]||(Ue[$e]={});Ue[$e].styles||(Ue[$e].styles={});Ue[$e].hooks||(Ue[$e].hooks={});Ue[$e].shims||(Ue[$e].shims=[]);var Ae=Ue[$e],qo=[],_c=function e(){q.removeEventListener("DOMContentLoaded",e),Un=1,qo.map(function(t){return t()})},Un=!1;Ye&&(Un=(q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(q.readyState),Un||q.addEventListener("DOMContentLoaded",_c));function kc(e){Ye&&(Un?setTimeout(e,0):qo.push(e))}function on(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Wo(e):"<".concat(t," ").concat(vc(r),">").concat(i.map(on).join(""),"</").concat(t,">")}function Ai(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Ac=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},yr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Ac(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function Oc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Ur(e){var t=Oc(e);return t.length===1?t[0].toString(16):null}function Ec(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Oi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Br(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Oi(t);typeof Ae.hooks.addPack=="function"&&!a?Ae.hooks.addPack(e,Oi(t)):Ae.styles[e]=C(C({},Ae.styles[e]||{}),i),e==="fas"&&Br("fa",t)}var An,On,En,wt=Ae.styles,Cc=Ae.shims,Pc=(An={},ee(An,X,Object.values(en[X])),ee(An,G,Object.values(en[G])),An),_a=null,Vo={},Jo={},Go={},Zo={},Qo={},Sc=(On={},ee(On,X,Object.keys(Zt[X])),ee(On,G,Object.keys(Zt[G])),On);function Ic(e){return~cc.indexOf(e)}function Tc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Ic(a)?a:null}var es=function(){var t=function(i){return yr(wt,function(o,s,l){return o[l]=yr(s,i,{}),o},{})};Vo=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Jo=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Qo=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in wt||T.autoFetchSvg,r=yr(Cc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Go=r.names,Zo=r.unicodes,_a=ar(T.styleDefault,{family:T.familyDefault})};pc(function(e){_a=ar(e.styleDefault,{family:T.familyDefault})});es();function ka(e,t){return(Vo[e]||{})[t]}function Nc(e,t){return(Jo[e]||{})[t]}function ct(e,t){return(Qo[e]||{})[t]}function ts(e){return Go[e]||{prefix:null,iconName:null}}function Mc(e){var t=Zo[e],n=ka("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function et(){return _a}var Aa=function(){return{prefix:null,iconName:null,rest:[]}};function ar(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?X:n,a=Zt[r][e],i=Qt[r][e]||Qt[r][a],o=e in Ae.styles?e:null;return i||o||null}var Ei=(En={},ee(En,X,Object.keys(en[X])),ee(En,G,Object.keys(en[G])),En);function ir(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ee(t,X,"".concat(T.cssPrefix,"-").concat(X)),ee(t,G,"".concat(T.cssPrefix,"-").concat(G)),t),o=null,s=X;(e.includes(i[X])||e.some(function(c){return Ei[X].includes(c)}))&&(s=X),(e.includes(i[G])||e.some(function(c){return Ei[G].includes(c)}))&&(s=G);var l=e.reduce(function(c,d){var m=Tc(T.cssPrefix,d);if(wt[d]?(d=Pc[s].includes(d)?ac[s][d]:d,o=d,c.prefix=d):Sc[s].indexOf(d)>-1?(o=d,c.prefix=ar(d,{family:s})):m?c.iconName=m:d!==T.replacementClass&&d!==i[X]&&d!==i[G]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var g=o==="fa"?ts(c.iconName):{},_=ct(c.prefix,c.iconName);g.prefix&&(o=null),c.iconName=g.iconName||_||c.iconName,c.prefix=g.prefix||c.prefix,c.prefix==="far"&&!wt.far&&wt.fas&&!T.autoFetchSvg&&(c.prefix="fas")}return c},Aa());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===G&&(wt.fass||T.autoFetchSvg)&&(l.prefix="fass",l.iconName=ct(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=et()||"fas"),l}var Rc=function(){function e(){Wf(this,e),this.definitions={}}return Xf(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=C(C({},n.definitions[s]||{}),o[s]),Br(s,o[s]);var l=en[X][s];l&&Br(l,o[s]),es()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),Ci=[],_t={},Ct={},Fc=Object.keys(Ct);function Lc(e,t){var n=t.mixoutsTo;return Ci=e,_t={},Object.keys(Ct).forEach(function(r){Fc.indexOf(r)===-1&&delete Ct[r]}),Ci.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),$n(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){_t[o]||(_t[o]=[]),_t[o].push(i[o])})}r.provides&&r.provides(Ct)}),n}function Hr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=_t[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function gt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=_t[e]||[];a.forEach(function(i){i.apply(null,n)})}function Be(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ct[e]?Ct[e].apply(null,t):void 0}function Yr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||et();if(t)return t=ct(n,t)||t,Ai(ns.definitions,n,t)||Ai(Ae.styles,n,t)}var ns=new Rc,jc=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,gt("noAuto")},Dc={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ye?(gt("beforeI2svg",t),Be("pseudoElements2svg",t),Be("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,kc(function(){$c({autoReplaceSvgRoot:n}),gt("watch",t)})}},zc={icon:function(t){if(t===null)return null;if($n(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ct(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=ar(t[0]);return{prefix:r,iconName:ct(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(T.cssPrefix,"-"))>-1||t.match(ic))){var a=ir(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||et(),iconName:ct(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=et();return{prefix:i,iconName:ct(i,t)||t}}}},pe={noAuto:jc,config:T,dom:Dc,parse:zc,library:ns,findIconDefinition:Yr,toHtml:on},$c=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?q:n;(Object.keys(Ae.styles).length>0||T.autoFetchSvg)&&Ye&&T.autoReplaceSvg&&pe.dom.i2svg({node:r})};function or(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return on(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Ye){var r=q.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Uc(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(wa(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=rr(C(C({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Bc(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(T.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:C(C({},a),{},{id:o}),children:r}]}]}function Oa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,g=e.watchable,_=g===void 0?!1:g,P=r.found?r:n,E=P.width,D=P.height,w=a==="fak",k=[T.replacementClass,i?"".concat(T.cssPrefix,"-").concat(i):""].filter(function(ge){return m.classes.indexOf(ge)===-1}).filter(function(ge){return ge!==""||!!ge}).concat(m.classes).join(" "),N={children:[],attributes:C(C({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:k,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(D)})},S=w&&!~m.classes.indexOf("fa-fw")?{width:"".concat(E/D*16*.0625,"em")}:{};_&&(N.attributes[ht]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(d||nn())},children:[l]}),delete N.attributes.title);var B=C(C({},N),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:C(C({},S),m.styles)}),te=r.found&&n.found?Be("generateAbstractMask",B)||{children:[],attributes:{}}:Be("generateAbstractIcon",B)||{children:[],attributes:{}},ne=te.children,he=te.attributes;return B.children=ne,B.attributes=he,s?Bc(B):Uc(B)}function Pi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=C(C(C({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[ht]="");var d=C({},o.styles);wa(a)&&(d.transform=yc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=rr(d);m.length>0&&(c.style=m);var g=[];return g.push({tag:"span",attributes:c,children:[t]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function Hc(e){var t=e.content,n=e.title,r=e.extra,a=C(C(C({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=rr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var xr=Ae.styles;function Kr(e){var t=e[0],n=e[1],r=e.slice(4),a=ha(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(T.cssPrefix,"-").concat(ft.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(ft.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(ft.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Yc={found:!1,width:512,height:512};function Kc(e,t){!Bo&&!T.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Wr(e,t){var n=t;return t==="fa"&&T.styleDefault!==null&&(t=et()),new Promise(function(r,a){if(Be("missingIconAbstract"),n==="fa"){var i=ts(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&xr[t]&&xr[t][e]){var o=xr[t][e];return r(Kr(o))}Kc(e,t),r(C(C({},Yc),{},{icon:T.showMissingIcons&&e?Be("missingIconAbstract")||{}:{}}))})}var Si=function(){},Xr=T.measurePerformance&&bn&&bn.mark&&bn.measure?bn:{mark:Si,measure:Si},Bt='FA "6.5.1"',Wc=function(t){return Xr.mark("".concat(Bt," ").concat(t," begins")),function(){return rs(t)}},rs=function(t){Xr.mark("".concat(Bt," ").concat(t," ends")),Xr.measure("".concat(Bt," ").concat(t),"".concat(Bt," ").concat(t," begins"),"".concat(Bt," ").concat(t," ends"))},Ea={begin:Wc,end:rs},Mn=function(){};function Ii(e){var t=e.getAttribute?e.getAttribute(ht):null;return typeof t=="string"}function Xc(e){var t=e.getAttribute?e.getAttribute(va):null,n=e.getAttribute?e.getAttribute(ba):null;return t&&n}function qc(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(T.replacementClass)}function Vc(){if(T.autoReplaceSvg===!0)return Rn.replace;var e=Rn[T.autoReplaceSvg];return e||Rn.replace}function Jc(e){return q.createElementNS("http://www.w3.org/2000/svg",e)}function Gc(e){return q.createElement(e)}function as(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Jc:Gc:n;if(typeof e=="string")return q.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(as(o,{ceFn:r}))}),a}function Zc(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Rn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(as(a),n)}),n.getAttribute(ht)===null&&T.keepOriginalSource){var r=q.createComment(Zc(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~xa(n).indexOf(T.replacementClass))return Rn.replace(t);var a=new RegExp("".concat(T.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===T.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return on(s)}).join(`
`);n.setAttribute(ht,""),n.innerHTML=o}};function Ti(e){e()}function is(e,t){var n=typeof t=="function"?t:Mn;if(e.length===0)n();else{var r=Ti;T.mutateApproach===nc&&(r=Qe.requestAnimationFrame||Ti),r(function(){var a=Vc(),i=Ea.begin("mutate");e.map(a),i(),n()})}}var Ca=!1;function os(){Ca=!0}function qr(){Ca=!1}var Bn=null;function Ni(e){if(wi&&T.observeMutations){var t=e.treeCallback,n=t===void 0?Mn:t,r=e.nodeCallback,a=r===void 0?Mn:r,i=e.pseudoElementsCallback,o=i===void 0?Mn:i,s=e.observeMutationsRoot,l=s===void 0?q:s;Bn=new wi(function(c){if(!Ca){var d=et();Lt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Ii(m.addedNodes[0])&&(T.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&T.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Ii(m.target)&&~fc.indexOf(m.attributeName))if(m.attributeName==="class"&&Xc(m.target)){var g=ir(xa(m.target)),_=g.prefix,P=g.iconName;m.target.setAttribute(va,_||d),P&&m.target.setAttribute(ba,P)}else qc(m.target)&&a(m.target)})}}),Ye&&Bn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Qc(){Bn&&Bn.disconnect()}function eu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function tu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=ir(xa(e));return a.prefix||(a.prefix=et()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Nc(a.prefix,e.innerText)||ka(a.prefix,Ur(e.innerText))),!a.iconName&&T.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function nu(e){var t=Lt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return T.autoA11y&&(n?t["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||nn()):(t["aria-hidden"]="true",t.focusable="false")),t}function ru(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Te,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Mi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=tu(e),r=n.iconName,a=n.prefix,i=n.rest,o=nu(e),s=Hr("parseNodeAttributes",{},e),l=t.styleParser?eu(e):[];return C({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Te,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var au=Ae.styles;function ss(e){var t=T.autoReplaceSvg==="nest"?Mi(e,{styleParser:!1}):Mi(e);return~t.extra.classes.indexOf(Ho)?Be("generateLayersText",e,t):Be("generateSvgReplacementMutation",e,t)}var tt=new Set;ya.map(function(e){tt.add("fa-".concat(e))});Object.keys(Zt[X]).map(tt.add.bind(tt));Object.keys(Zt[G]).map(tt.add.bind(tt));tt=rn(tt);function Ri(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ye)return Promise.resolve();var n=q.documentElement.classList,r=function(m){return n.add("".concat(_i,"-").concat(m))},a=function(m){return n.remove("".concat(_i,"-").concat(m))},i=T.autoFetchSvg?tt:ya.map(function(d){return"fa-".concat(d)}).concat(Object.keys(au));i.includes("fa")||i.push("fa");var o=[".".concat(Ho,":not([").concat(ht,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(ht,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Lt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ea.begin("onTree"),c=s.reduce(function(d,m){try{var g=ss(m);g&&d.push(g)}catch(_){Bo||_.name==="MissingIcon"&&console.error(_)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(g){is(g,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(g){l(),m(g)})})}function iu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ss(e).then(function(n){n&&is([n],t)})}function ou(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Yr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Yr(a||{})),e(r,C(C({},n),{},{mask:a}))}}var su=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Te:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,g=m===void 0?null:m,_=n.titleId,P=_===void 0?null:_,E=n.classes,D=E===void 0?[]:E,w=n.attributes,k=w===void 0?{}:w,N=n.styles,S=N===void 0?{}:N;if(t){var B=t.prefix,te=t.iconName,ne=t.icon;return or(C({type:"icon"},t),function(){return gt("beforeDOMElementCreation",{iconDefinition:t,params:n}),T.autoA11y&&(g?k["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(P||nn()):(k["aria-hidden"]="true",k.focusable="false")),Oa({icons:{main:Kr(ne),mask:l?Kr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:B,iconName:te,transform:C(C({},Te),a),symbol:o,title:g,maskId:d,titleId:P,extra:{attributes:k,styles:S,classes:D}})})}},lu={mixout:function(){return{icon:ou(su)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ri,n.nodeCallback=iu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?q:r,i=n.callback,o=i===void 0?function(){}:i;return Ri(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,g=r.extra;return new Promise(function(_,P){Promise.all([Wr(a,s),d.iconName?Wr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var D=ha(E,2),w=D[0],k=D[1];_([n,Oa({icons:{main:w,mask:k},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:g,watchable:!0})])}).catch(P)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=rr(s);l.length>0&&(a.style=l);var c;return wa(o)&&(c=Be("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},fu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return or({type:"layer"},function(){gt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(T.cssPrefix,"-layers")].concat(rn(i)).join(" ")},children:o}]})}}}},cu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return or({type:"counter",content:n},function(){return gt("beforeDOMElementCreation",{content:n,params:r}),Hc({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(T.cssPrefix,"-layers-counter")].concat(rn(s))}})})}}}},uu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Te:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,g=r.styles,_=g===void 0?{}:g;return or({type:"text",content:n},function(){return gt("beforeDOMElementCreation",{content:n,params:r}),Pi({content:n,transform:C(C({},Te),i),title:s,extra:{attributes:m,styles:_,classes:["".concat(T.cssPrefix,"-layers-text")].concat(rn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(zo){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return T.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Pi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},du=new RegExp('"',"ug"),Fi=[1105920,1112319];function mu(e){var t=e.replace(du,""),n=Ec(t,0),r=n>=Fi[0]&&n<=Fi[1],a=t.length===2?t[0]===t[1]:!1;return{value:Ur(a?t[0]:t),isSecondary:r||a}}function Li(e,t){var n="".concat(tc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Lt(e.children),o=i.filter(function(ne){return ne.getAttribute($r)===t})[0],s=Qe.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(oc),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),g=~["Sharp"].indexOf(l[2])?G:X,_=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Qt[g][l[2].toLowerCase()]:sc[g][c],P=mu(m),E=P.value,D=P.isSecondary,w=l[0].startsWith("FontAwesome"),k=ka(_,E),N=k;if(w){var S=Mc(E);S.iconName&&S.prefix&&(k=S.iconName,_=S.prefix)}if(k&&!D&&(!o||o.getAttribute(va)!==_||o.getAttribute(ba)!==N)){e.setAttribute(n,N),o&&e.removeChild(o);var B=ru(),te=B.extra;te.attributes[$r]=t,Wr(k,_).then(function(ne){var he=Oa(C(C({},B),{},{icons:{main:ne,mask:Aa()},prefix:_,iconName:N,extra:te,watchable:!0})),ge=q.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ge,e.firstChild):e.appendChild(ge),ge.outerHTML=he.map(function(Re){return on(Re)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function pu(e){return Promise.all([Li(e,"::before"),Li(e,"::after")])}function hu(e){return e.parentNode!==document.head&&!~rc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute($r)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ji(e){if(Ye)return new Promise(function(t,n){var r=Lt(e.querySelectorAll("*")).filter(hu).map(pu),a=Ea.begin("searchPseudoElements");os(),Promise.all(r).then(function(){a(),qr(),t()}).catch(function(){a(),qr(),n()})})}var gu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ji,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?q:r;T.searchPseudoElements&&ji(a)}}},Di=!1,vu={mixout:function(){return{dom:{unwatch:function(){os(),Di=!0}}}},hooks:function(){return{bootstrap:function(){Ni(Hr("mutationObserverCallbacks",{}))},noAuto:function(){Qc()},watch:function(n){var r=n.observeMutationsRoot;Di?qr():Ni(Hr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},zi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},bu={mixout:function(){return{parse:{transform:function(n){return zi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=zi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},g={transform:"translate(".concat(o/2*-1," -256)")},_={outer:s,inner:m,path:g};return{tag:"g",attributes:C({},_.outer),children:[{tag:"g",attributes:C({},_.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:C(C({},r.icon.attributes),_.path)}]}]}}}},wr={x:0,y:0,width:"100%",height:"100%"};function $i(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function yu(e){return e.tag==="g"?e.children:[e]}var xu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?ir(a.split(" ").map(function(o){return o.trim()})):Aa();return i.prefix||(i.prefix=et()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,g=o.icon,_=bc({transform:l,containerWidth:m,iconWidth:c}),P={tag:"rect",attributes:C(C({},wr),{},{fill:"white"})},E=d.children?{children:d.children.map($i)}:{},D={tag:"g",attributes:C({},_.inner),children:[$i(C({tag:d.tag,attributes:C(C({},d.attributes),_.path)},E))]},w={tag:"g",attributes:C({},_.outer),children:[D]},k="mask-".concat(s||nn()),N="clip-".concat(s||nn()),S={tag:"mask",attributes:C(C({},wr),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[P,w]},B={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:yu(g)},S]};return r.push(B,{tag:"rect",attributes:C({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(k,")")},wr)}),{children:r,attributes:a}}}},wu={provides:function(t){var n=!1;Qe.matchMedia&&(n=Qe.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:C(C({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=C(C({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:C(C({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:C(C({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:C(C({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:C(C({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:C(C({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:C(C({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:C(C({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},_u={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},ku=[wc,lu,fu,cu,uu,gu,vu,bu,xu,wu,_u];Lc(ku,{mixoutsTo:pe});pe.noAuto;pe.config;var Au=pe.library;pe.dom;var Vr=pe.parse;pe.findIconDefinition;pe.toHtml;var Ou=pe.icon;pe.layer;pe.text;pe.counter;var Eu={prefix:"fas",iconName:"chevron-up",icon:[512,512,[],"f077","M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]},Cu={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]};function Ui(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function De(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ui(Object(n),!0).forEach(function(r){le(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ui(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Hn(e){"@babel/helpers - typeof";return Hn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Hn(e)}function le(e,t,n){return t=Tu(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Pu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Su(e,t){if(e==null)return{};var n=Pu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Iu(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Tu(e){var t=Iu(e,"string");return typeof t=="symbol"?t:String(t)}var Nu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ls={exports:{}};(function(e){(function(t){var n=function(w,k,N){if(!c(k)||m(k)||g(k)||_(k)||l(k))return k;var S,B=0,te=0;if(d(k))for(S=[],te=k.length;B<te;B++)S.push(n(w,k[B],N));else{S={};for(var ne in k)Object.prototype.hasOwnProperty.call(k,ne)&&(S[w(ne,N)]=n(w,k[ne],N))}return S},r=function(w,k){k=k||{};var N=k.separator||"_",S=k.split||/(?=[A-Z])/;return w.split(S).join(N)},a=function(w){return P(w)?w:(w=w.replace(/[\-_\s]+(.)?/g,function(k,N){return N?N.toUpperCase():""}),w.substr(0,1).toLowerCase()+w.substr(1))},i=function(w){var k=a(w);return k.substr(0,1).toUpperCase()+k.substr(1)},o=function(w,k){return r(w,k).toLowerCase()},s=Object.prototype.toString,l=function(w){return typeof w=="function"},c=function(w){return w===Object(w)},d=function(w){return s.call(w)=="[object Array]"},m=function(w){return s.call(w)=="[object Date]"},g=function(w){return s.call(w)=="[object RegExp]"},_=function(w){return s.call(w)=="[object Boolean]"},P=function(w){return w=w-0,w===w},E=function(w,k){var N=k&&"process"in k?k.process:k;return typeof N!="function"?w:function(S,B){return N(S,w,B)}},D={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(w,k){return n(E(a,k),w)},decamelizeKeys:function(w,k){return n(E(o,k),w,k)},pascalizeKeys:function(w,k){return n(E(i,k),w)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=D:t.humps=D})(Nu)})(ls);var Mu=ls.exports,Ru=["class","style"];function Fu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Mu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Lu(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function fs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return fs(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=Lu(d);break;case"style":l.style=Fu(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Su(n,Ru);return pf(e.tag,De(De(De({},t),{},{class:a.class,style:De(De({},a.style),o)},a.attrs),s),r)}var cs=!1;try{cs=!0}catch{}function ju(){if(!cs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function _r(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?le({},e,t):{}}function Du(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},le(t,"fa-".concat(e.size),e.size!==null),le(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),le(t,"fa-pull-".concat(e.pull),e.pull!==null),le(t,"fa-swap-opacity",e.swapOpacity),le(t,"fa-bounce",e.bounce),le(t,"fa-shake",e.shake),le(t,"fa-beat",e.beat),le(t,"fa-fade",e.fade),le(t,"fa-beat-fade",e.beatFade),le(t,"fa-flash",e.flash),le(t,"fa-spin-pulse",e.spinPulse),le(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Bi(e){if(e&&Hn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Vr.icon)return Vr.icon(e);if(e===null)return null;if(Hn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var zu=ca({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=qe(function(){return Bi(t.icon)}),i=qe(function(){return _r("classes",Du(t))}),o=qe(function(){return _r("transform",typeof t.transform=="string"?Vr.transform(t.transform):t.transform)}),s=qe(function(){return _r("mask",Bi(t.mask))}),l=qe(function(){return Ou(a.value,De(De(De(De({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});Sn(l,function(d){if(!d)return ju("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=qe(function(){return l.value?fs(l.value.abstract[0],{},r):null});return function(){return c.value}}});const $u={id:"app",class:"input__container"},Uu={class:"input__field"},Bu=["onClick"],Hu={key:0},Yu={key:1,class:"input__highlight"},Ku=ca({__name:"AutoComplete",props:{suggestions:{}},setup(e){const t=e,n=gn(""),r=gn(-1),a=gn(!1),i=qe(()=>{const P=n.value.toLowerCase();return t.suggestions.filter(E=>E.toLowerCase().includes(P))}),o=P=>{const E=new RegExp(n.value,"ig"),D=[];let w=0;return P.replace(E,function(k,N){return D.push(P.substring(w,N)),D.push({highlight:!0,text:k}),w=N+k.length,k}),D.push(P.substring(w)),D};function s(P){P instanceof InputEvent&&(n.value=P.target.value,a.value=!0)}function l(P){n.value=P,a.value=!1}function c(P){const E=i.value.length-1;switch(P.key.toUpperCase()){case"ARROWUP":P.preventDefault(),r.value>0?r.value--:r.value=E,_();break;case"ARROWDOWN":P.preventDefault(),r.value<E?r.value++:r.value=0,_();break;case"ENTER":P.preventDefault(),l(i.value[r.value]),a.value=!1;break;case"TAB":P.shiftKey?(P.preventDefault(),r.value>0?(r.value--,_()):(r.value=E,_())):(P.preventDefault(),r.value<E?(r.value++,_()):(r.value=0,_()));break}}function d(){a.value=!0}function m(){setTimeout(()=>{a.value=!1})}const g=gn(null);function _(){var E;const P=(E=g.value)==null?void 0:E.querySelector(".is-active");P&&P.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})}return(P,E)=>{const D=hl("font-awesome-icon");return ve(),Le("div",$u,[Ge("div",Uu,[wl(Ge("input",{"onUpdate:modelValue":E[0]||(E[0]=w=>n.value=w),placeholder:"Please type here",class:"input",type:"text",onInput:s,onFocus:d,onBlur:m,onKeydown:c},null,544),[[Df,n.value]]),a.value?(ve(),Fr(D,{key:0,icon:"fa-solid fa-chevron-up",class:"chevron-icon"})):(ve(),Fr(D,{key:1,icon:"fa-solid fa-chevron-down",class:"chevron-icon"}))]),a.value?(ve(),Le("div",{key:0,ref_key:"suggestionsContainerRef",ref:g,class:"input__options"},[Ge("ul",null,[(ve(!0),Le(be,null,Wa(i.value,(w,k)=>(ve(),Le("li",{key:k,tabindex:"-1",class:qn({"is-active":k===r.value}),onClick:N=>l(w),onMousedown:E[1]||(E[1]=Uf(()=>{},["prevent"]))},[(ve(!0),Le(be,null,Wa(o(w),(N,S)=>(ve(),Le("span",{key:S},[typeof N=="string"?(ve(),Le("span",Hu,Fa(N),1)):N.highlight?(ve(),Le("span",Yu,Fa(N.text),1)):ni("",!0)]))),128))],42,Bu))),128))])],512)):ni("",!0)])}}}),us=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Wu=us(Ku,[["__scopeId","data-v-2afdb941"]]),Xu=e=>(ll("data-v-b0791650"),e=e(),fl(),e),qu=Xu(()=>Ge("header",null,[Ge("div",{class:"wrapper"})],-1)),Vu=ca({__name:"App",setup(e){const t=["Melinda Wilder","Amir Craft","Brett West","Buffy Schwartz","Edan Dillon","Ruth Jackson","Debra Allen","Gerald Harris","Raymond Carter","Jacqueline Torres","Joseph Nelson","Carlos Sanchez","Ralph Clark","Jean Alexander","Stephen Roberts"];return(n,r)=>(ve(),Le(be,null,[qu,Ge("main",null,[ce(Wu,{suggestions:t})])],64))}}),Ju=us(Vu,[["__scopeId","data-v-b0791650"]]);Au.add(Eu,Cu);Yf(Ju).component("font-awesome-icon",zu).mount("#app");
