_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"1cT6":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/diary",function(){return r("QFlP")}])},QFlP:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return we}));var n=r("q1tI"),c=r.n(n),s=r("apO0"),u=r("vOnD"),i=e=>e instanceof HTMLElement;const a={BLUR:"blur",CHANGE:"change",INPUT:"input"},o={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",all:"all"},l="max",f="min",d="maxLength",b="minLength",O="pattern",g="required",h="validate";var m=e=>null==e,j=e=>Array.isArray(e);const v=e=>"object"===typeof e;var y=e=>!m(e)&&!j(e)&&v(e),p=e=>!j(e)&&(/^\w*$/.test(e)||!/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/.test(e)),w=e=>{const t=[];return e.replace(/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,(e,r,n,c)=>{t.push(n?c.replace(/\\(\\)?/g,"$1"):r||e)}),t};function R(e,t,r){let n=-1;const c=p(t)?[t]:w(t),s=c.length,u=s-1;for(;++n<s;){const t=c[n];let s=r;if(n!==u){const r=e[t];s=y(r)||j(r)?r:isNaN(+c[n+1])?{}:[]}e[t]=s,e=e[t]}return e}var k=e=>Object.entries(e).reduce((e,[t,r])=>p(t)?Object.assign(Object.assign({},e),{[t]:r}):(R(e,t,r),e),{}),C=e=>void 0===e,E=e=>e.filter(Boolean),S=(e,t,r)=>{const n=E(t.split(/[,[\].]+?/)).reduce((e,t)=>m(e)?e:e[t],e);return C(n)||n===e?C(e[t])?r:e[t]:n},V=(e,t)=>{for(const r in e)if(S(t,r)){const t=e[r];if(t){if(t.ref.focus){t.ref.focus();break}if(t.options){t.options[0].ref.focus();break}}}},N=(e,t)=>{i(e)&&e.removeEventListener&&(e.removeEventListener(a.INPUT,t),e.removeEventListener(a.CHANGE,t),e.removeEventListener(a.BLUR,t))};const F={isValid:!1,value:""};var A=e=>j(e)?e.reduce((e,t)=>t&&t.ref.checked?{isValid:!0,value:t.ref.value}:e,F):F,L=e=>[...e].filter(({selected:e})=>e).map(({value:e})=>e),B=e=>"radio"===e.type,D=e=>"file"===e.type,x=e=>"checkbox"===e.type,_=e=>"select-multiple"===e.type;const T={value:!1,isValid:!1},I={value:!0,isValid:!0};var P=e=>{if(j(e)){if(e.length>1){const t=e.filter(e=>e&&e.ref.checked).map(({ref:{value:e}})=>e);return{value:t,isValid:!!t.length}}const{checked:t,value:r,attributes:n}=e[0].ref;return t?n&&!C(n.value)?C(r)||""===r?I:{value:r,isValid:!0}:I:T}return T};function W(e,t,r){const n=e.current[t];if(n){const{ref:{value:e},ref:t}=n;return D(t)?t.files:B(t)?A(n.options).value:_(t)?L(t.options):x(t)?P(n.options).value:e}if(r)return r.current[t]}function U(e){return!e||e instanceof HTMLElement&&e.nodeType!==Node.DOCUMENT_NODE&&U(e.parentNode)}var $=e=>y(e)&&!Object.keys(e).length;function H(e,t){const r=p(t)?[t]:w(t),n=1==r.length?e:function(e,t){const r=t.slice(0,-1).length;let n=0;for(;n<r;)e=C(e)?n++:e[t[n++]];return e}(e,r),c=r[r.length-1];let s=void 0;n&&delete n[c];for(let u=0;u<r.slice(0,-1).length;u++){let t=-1,n=void 0;const c=r.slice(0,-(u+1)),i=c.length-1;for(u>0&&(s=e);++t<c.length;){const r=c[t];n=n?n[r]:e[r],i===t&&(y(n)&&$(n)||j(n)&&!n.filter(e=>y(e)&&!$(e)).length)&&(s?delete s[r]:delete e[r]),s=n}}return e}const M=(e,t)=>e&&e.ref===t;var z=e=>"string"===typeof e;var q=(e,t,r)=>{const n={};for(const c in e.current)(C(r)||(z(r)?c.startsWith(r):j(r)&&r.find(e=>c.startsWith(e))))&&(n[c]=W(e,c));return function e(t,r){if(!y(t)||!y(r))return r;for(const n in r){const c=t[n],s=r[n];y(c)&&y(s)?t[n]=e(c,s):t[n]=s}return t}(k((t||{}).current||{}),k(n))},G=(e,{type:t,types:r={},message:n})=>y(e)&&e.type===t&&e.message===n&&Object.keys(e.types||{}).length===Object.keys(r).length&&Object.entries(e.types||{}).every(([e,t])=>r[e]===t);var J=e=>e instanceof RegExp;var Q=e=>(e=>y(e)&&!J(e))(e)?e:{value:e,message:""},X=e=>"function"===typeof e,K=e=>"boolean"===typeof e,Y=e=>z(e)||y(e)&&Object(n.isValidElement)(e);function Z(e,t,r="validate"){if(Y(e)||K(e)&&!e)return{type:r,message:Y(e)?e:"",ref:t}}var ee=(e,t,r,n,c)=>{if(t){const t=r[e];return Object.assign(Object.assign({},t),{types:Object.assign(Object.assign({},t&&t.types?t.types:{}),{[n]:c||!0})})}return{}},te=async(e,t,{ref:r,ref:{type:n,value:c},options:s,required:u,maxLength:i,minLength:a,min:o,max:j,pattern:v,validate:p},w)=>{const R=e.current,k=r.name,C={},E=B(r),S=x(r),V=E||S,N=""===c,F=ee.bind(null,k,t,C),L=(e,t,n,c=d,s=b)=>{const u=e?t:n;C[k]=Object.assign({type:e?c:s,message:u,ref:r},F(e?c:s,u))};if(u&&(!E&&!S&&(N||m(c))||K(c)&&!c||S&&!P(s).isValid||E&&!A(s).isValid)){const{value:e,message:n}=Y(u)?{value:!!u,message:u}:Q(u);if(e&&(C[k]=Object.assign({type:g,message:n,ref:V?(R[k].options||[])[0].ref:r},F(g,n)),!t))return C}if(!m(o)||!m(j)){let e,s;const{value:u,message:i}=Q(j),{value:a,message:d}=Q(o);if("number"===n||!n&&!isNaN(c)){const t=r.valueAsNumber||parseFloat(c);m(u)||(e=t>u),m(a)||(s=t<a)}else{const t=r.valueAsDate||new Date(c);z(u)&&(e=t>new Date(u)),z(a)&&(s=t<new Date(a))}if((e||s)&&(L(!!e,i,d,l,f),!t))return C}if(z(c)&&!N&&(i||a)){const{value:e,message:r}=Q(i),{value:n,message:s}=Q(a),u=c.toString().length,o=!m(e)&&u>e,l=!m(n)&&u<n;if((o||l)&&(L(!!o,r,s),!t))return C}if(v&&!N){const{value:e,message:n}=Q(v);if(J(e)&&!e.test(c)&&(C[k]=Object.assign({type:O,message:n,ref:r},F(O,n)),!t))return C}if(p){const n=W(e,k,w),c=V&&s?s[0].ref:r;if(X(p)){const e=Z(await p(n),c);if(e&&(C[k]=Object.assign(Object.assign({},e),F(h,e.message)),!t))return C}else if(y(p)){let e={};for(const[r,s]of Object.entries(p)){if(!$(e)&&!t)break;const u=Z(await s(n),c,r);u&&(e=Object.assign(Object.assign({},u),F(r,u.message)),t&&(C[k]=e))}if(!$(e)&&(C[k]=Object.assign({ref:c},e),!t))return C}}return C},re=e=>m(e)||!v(e);const ne=(e,t)=>{return Object.entries(t).map(([r,n])=>((t,r,n)=>{const c=n?`${e}.${r}`:`${e}[${r}]`;return re(t)?c:ne(c,t)})(n,r,y(t))).flat(1/0)};var ce=(e,t,r,n,c)=>{let s;return r.add(t),$(e)?s=void 0:(s=S(e,t),(y(s)||j(s))&&ne(t,s).forEach(e=>r.add(e))),C(s)?c?n:S(n,t):s},se=({isOnBlur:e,isOnChange:t,isReValidateOnBlur:r,isReValidateOnChange:n,isBlurEvent:c,isSubmitted:s,isOnAll:u})=>!u&&((s?r:e)?!c:(s?!n:!t)||c),ue=e=>e.substring(0,e.indexOf("["));function ie(e,t){if(!j(e)||!j(t)||e.length!==t.length)return!0;for(let r=0;r<e.length;r++){const n=e[r],c=t[r];if(C(c)||Object.keys(n).length!==Object.keys(c).length)return!0;for(const e in n)if(n[e]!==c[e])return!0}return!1}const ae=(e,t)=>RegExp(`^${t}[\\d+]`.replace(/\[/g,"\\[").replace(/\]/g,"\\]")).test(e);var oe=(e,t)=>[...e].some(e=>ae(t,e)),le=e=>"select-one"===e.type;var fe=e=>({isOnSubmit:!e||e===o.onSubmit,isOnBlur:e===o.onBlur,isOnChange:e===o.onChange,isOnAll:e===o.all}),de=e=>B(e)||x(e);const be="undefined"===typeof window,Oe="undefined"!==typeof document&&!be&&!C(window.HTMLElement),ge=Oe?"Proxy"in window:"undefined"!==typeof Proxy;function he({mode:e=o.onSubmit,reValidateMode:t=o.onChange,resolver:r,context:c,defaultValues:s={},shouldFocusError:u=!0,shouldUnregister:l=!0,criteriaMode:f}={}){const d=Object(n.useRef)({}),b=Object(n.useRef)({}),O=Object(n.useRef)({}),g=Object(n.useRef)({}),h=Object(n.useRef)({}),v=Object(n.useRef)(new Set),p=Object(n.useRef)({}),w=Object(n.useRef)({}),F=Object(n.useRef)(new Set),A=Object(n.useRef)(new Set),L=Object(n.useRef)(!0),T=Object(n.useRef)(s),I=Object(n.useRef)({}),P=Object(n.useRef)(!1),J=Object(n.useRef)(!1),Q=Object(n.useRef)(!1),K=Object(n.useRef)(!1),Y=Object(n.useRef)(0),Z=Object(n.useRef)(!1),ee=Object(n.useRef)(),ae=Object(n.useRef)({}),he=Object(n.useRef)({}),me=Object(n.useRef)(c),je=Object(n.useRef)(r),ve=Object(n.useRef)(new Set),[,ye]=Object(n.useState)(),pe=Object(n.useRef)(fe(e)),{current:{isOnSubmit:we,isOnAll:Re}}=pe,ke=f===o.all,Ce=Object(n.useRef)({isDirty:!ge,dirtyFields:!ge,isSubmitted:we,submitCount:!ge,touched:!ge,isSubmitting:!ge,isValid:!ge}),{current:{isOnBlur:Ee,isOnChange:Se}}=Object(n.useRef)(fe(t));me.current=c,je.current=r;const Ve=Object(n.useCallback)(()=>!P.current&&ye({}),[]),Ne=Object(n.useCallback)((e,t,r=!1)=>{let n=r||function({errors:e,name:t,error:r,validFields:n,fieldsWithValidation:c}){const s=$(r),u=$(e),i=S(r,t),a=S(e,t);return(!s||!n.has(t))&&(!!(u!==s||!u&&!a||s&&c.has(t)&&!n.has(t))||i&&!G(a,i))}({errors:b.current,error:t,name:e,validFields:A.current,fieldsWithValidation:F.current});const c=S(b.current,e);if($(t)?((F.current.has(e)||je.current)&&(A.current.add(e),n=n||c),b.current=H(b.current,e)):(A.current.delete(e),n=n||!c||!G(c,t[e]),R(b.current,e,t[e])),n&&!m(r))return Ve(),!0},[]),Fe=Object(n.useCallback)(({ref:e,options:t},r)=>{const n=Oe&&i(e)&&m(r)?"":r;B(e)&&t?t.forEach(({ref:e})=>e.checked=e.value===n):D(e)&&!z(n)?e.files=n:_(e)?[...e.options].forEach(e=>e.selected=n.includes(e.value)):x(e)&&t?t.length>1?t.forEach(({ref:e})=>e.checked=n.includes(e.value)):t[0].ref.checked=!!n:e.value=n},[]),Ae=Object(n.useCallback)(e=>{const{isDirty:t,dirtyFields:r}=Ce.current;if(!d.current[e]||!t&&!r)return!1;const n=I.current[e]!==W(d,e,ae),c=S(h.current,e),s=oe(ve.current,e),u=K.current;return n?R(h.current,e,!0):H(h.current,e),K.current=s&&ie(S(Pe(),ue(e)),S(T.current,ue(e)))||!$(h.current),t&&u!==K.current||r&&c!==S(h.current,e)},[]),Le=Object(n.useCallback)(async(e,t)=>{if(d.current[e]){const r=await te(d,ke,d.current[e],ae);return Ne(e,r,!!t&&null),$(r)}return!1},[Ne,ke]),Be=Object(n.useCallback)(async e=>{const{errors:t}=await je.current(Pe(),me.current,ke),r=L.current;if(L.current=$(t),j(e)){const r=e.map(e=>{const r=S(t,e);return r?R(b.current,e,r):H(b.current,e),!r}).every(Boolean);return Ve(),r}{const n=S(t,e);return Ne(e,n?{[e]:n}:{},r!==L.current),!n}},[Ne,ke]),De=Object(n.useCallback)(async e=>{const t=e||Object.keys(d.current);if(je.current)return Be(t);if(j(t)){const e=await Promise.all(t.map(async e=>await Le(e,!0)));return Ve(),e.every(Boolean)}return await Le(t)},[Be,Le]),xe=Object(n.useCallback)((e,t,{shouldDirty:r,shouldValidate:n})=>{ne(e,t).forEach(c=>{const s={},u=d.current[c];u&&(R(s,e,t),Fe(u,S(s,c)),r&&Ae(c),n&&De(c))})},[De,Fe,Ae]),_e=Object(n.useCallback)((e,t,r)=>d.current[e]?(Fe(d.current[e],t),r.shouldDirty&&Ae(e)):(re(t)||xe(e,t,r),l||(ae.current[e]=t),!0),[Ae,Fe,xe]),Te=e=>J.current||v.current.has(e)||v.current.has((e.match(/\w+/)||[])[0]),Ie=(e,t=!0)=>{if(!$(p.current))for(const r in p.current)(""===e||p.current[r].has(e)||p.current[r].has(ue(e))||!p.current[r].size)&&(w.current[r](),t=!1);return t};function Pe(e){return z(e)?W(d,e,ae):j(e)?e.reduce((e,t)=>Object.assign(Object.assign({},e),{[t]:W(d,t,ae)}),{}):q(d,ae)}ee.current=ee.current?ee.current:async({type:e,target:t})=>{const n=t.name,c=d.current[n];let s;if(c){const t=e===a.BLUR,u=!Re&&se(Object.assign({isBlurEvent:t,isReValidateOnChange:Se,isReValidateOnBlur:Ee,isSubmitted:Q.current},pe.current));let i=Ae(n)||Te(n);if(t&&!S(O.current,n)&&Ce.current.touched&&(R(O.current,n,!0),i=!0),u)return Ie(n),i&&Ve();if(r){const{errors:e}=await r(Pe(),me.current,ke),t=L.current;L.current=$(e),s=S(e,n)?{[n]:S(e,n)}:{},t!==L.current&&(i=!0)}else s=await te(d,ke,c,ae);Ie(n),!Ne(n,s)&&i&&Ve()}};const We=Object(n.useCallback)(async(e={})=>{const{errors:t}=await je.current(Object.assign(Object.assign(Object.assign({},T.current),Pe()),e),me.current,ke),r=L.current;L.current=$(t),r!==L.current&&Ve()},[ke]),Ue=Object(n.useCallback)((e,t)=>(function(e,t,r,n,c,s){const{ref:u,ref:{name:i,type:a},mutationWatcher:o}=r,l=e.current[i];if(!c){const t=W(e,i,n);C(t)||(n.current[i]=t)}if(a)if((B(u)||x(u))&&l){const{options:r}=l;j(r)&&r.length?(E(r).forEach((e,n)=>{const{ref:c,mutationWatcher:u}=e;(c&&U(c)&&M(e,c)||s)&&(N(c,t),u&&u.disconnect(),H(r,`[${n}]`))}),r&&!E(r).length&&delete e.current[i]):delete e.current[i]}else(U(u)&&M(l,u)||s)&&(N(u,t),o&&o.disconnect(),delete e.current[i]);else delete e.current[i]})(d,ee.current,e,ae,l,t),[l]),$e=Object(n.useCallback)((e,t)=>{!e||oe(ve.current,e.ref.name)&&!t||(Ue(e,t),l&&([b,O,h,I].forEach(t=>H(t.current,e.ref.name)),[F,A].forEach(t=>t.current.delete(e.ref.name)),(Ce.current.isValid||Ce.current.touched||Ce.current.isDirty)&&(K.current=!$(h.current),Ve(),je.current&&We())))},[We,Ue]);const He=Object(n.useCallback)((e,t,r)=>{const n=r?p.current[r]:v.current,c=C(t)?T.current:t,s=q(d,ae,e);return z(e)?ce(s,e,n,C(t)?S(c,e):t,!0):j(e)?e.reduce((e,t)=>Object.assign(Object.assign({},e),{[t]:ce(s,t,n,c)}),{}):(C(r)&&(J.current=!0),k(!$(s)&&s||c))},[]);function Me(e,t={}){const{name:n,type:c,value:s}=e,u=Object.assign({ref:e},t),o=d.current,l=de(e);let f,b,O=o[n],g=!0;if(O&&(l?j(O.options)&&E(O.options).find(t=>s===t.ref.value&&t.ref===e):e===O.ref))return void(o[n]=Object.assign(Object.assign({},O),t));if(c){const r=function(e,t){const r=new MutationObserver(()=>{U(e)&&(r.disconnect(),t())});return r.observe(window.document,{childList:!0,subtree:!0}),r}(e,()=>$e(O));O=l?Object.assign({options:[...E(O&&O.options||[]),{ref:e,mutationWatcher:r}],ref:{type:c,name:n}},t):Object.assign(Object.assign({},u),{mutationWatcher:r})}else O=u;o[n]=O;const h=C(S(ae.current,n));if($(T.current)&&h||(b=S(h?T.current:ae.current,n),g=C(b),f=oe(ve.current,n),g||f||Fe(O,b)),r&&!f&&Ce.current.isValid?We():$(t)||(F.current.add(n),!we&&Ce.current.isValid&&te(d,ke,O,ae).then(e=>{const t=L.current;$(e)?A.current.add(n):L.current=!1,t!==L.current&&Ve()})),!I.current[n]&&(!f||!g)){const e=W(d,n,ae);I.current[n]=g?y(e)?Object.assign({},e):e:b}c&&function({ref:e},t,r){i(e)&&r&&(e.addEventListener(t?a.CHANGE:a.INPUT,r),e.addEventListener(a.BLUR,r))}(l&&O.options?O.options[O.options.length-1]:O,l||le(e),ee.current)}const ze=Object(n.useCallback)(e=>async t=>{t&&t.preventDefault&&(t.preventDefault(),t.persist());let r={},n=q(d,ae);Ce.current.isSubmitting&&(Z.current=!0,Ve());try{if(je.current){const{errors:e,values:t}=await je.current(n,me.current,ke);b.current=e,r=e,n=t}else for(const e of Object.values(d.current))if(e){const{ref:{name:t}}=e,n=await te(d,ke,e,ae);n[t]?(R(r,t,n[t]),A.current.delete(t)):F.current.has(t)&&(H(b.current,t),A.current.add(t))}$(r)&&Object.keys(b.current).every(e=>Object.keys(d.current).includes(e))?(b.current={},Ve(),await e(n,t)):(b.current=Object.assign(Object.assign({},b.current),r),u&&V(d.current,r))}finally{Q.current=!0,Z.current=!1,Y.current=Y.current+1,Ve()}},[u,ke]);Object(n.useEffect)(()=>(P.current=!1,()=>{P.current=!0,d.current&&Object.values(d.current).forEach(e=>$e(e,!0))}),[$e]),r||(L.current=A.current.size>=F.current.size&&$(b.current));const qe={dirtyFields:h.current,isSubmitted:Q.current,submitCount:Y.current,touched:O.current,isDirty:K.current,isSubmitting:Z.current,isValid:we?Q.current&&$(b.current):L.current},Ge={trigger:De,setValue:Object(n.useCallback)((function(e,t,r={}){const n=_e(e,t,r)||Te(e);Ie(e),n&&Ve(),r.shouldValidate&&De(e)}),[Ve,_e,De]),getValues:Object(n.useCallback)(Pe,[]),register:Object(n.useCallback)((function(e,t){if(!be)if(z(e))Me({name:e},t);else{if(!(y(e)&&"name"in e))return t=>t&&Me(t,e);Me(e,t)}}),[T.current]),unregister:Object(n.useCallback)((function(e){(j(e)?e:[e]).forEach(e=>$e(d.current[e],!0))}),[]),formState:ge?new Proxy(qe,{get:(e,t)=>{if(t in e)return Ce.current[t]=!0,e[t]}}):qe},Je=Object.assign(Object.assign({removeFieldEventListener:Ue,renderWatchedInputs:Ie,watchInternal:He,reRender:Ve,mode:pe.current,reValidateMode:{isReValidateOnBlur:Ee,isReValidateOnChange:Se},errorsRef:b,touchedFieldsRef:O,fieldsRef:d,isWatchAllRef:J,watchFieldsRef:v,resetFieldArrayFunctionRef:he,watchFieldsHookRef:p,watchFieldsHookRenderRef:w,fieldArrayDefaultValues:g,validFieldsRef:A,dirtyFieldsRef:h,fieldsWithValidationRef:F,fieldArrayNamesRef:ve,isDirtyRef:K,isSubmittedRef:Q,readFormStateRef:Ce,defaultValuesRef:T,unmountFieldsStateRef:ae},r?{validateSchemaIsValid:We}:{}),Ge);return Object.assign({watch:function(e,t){return He(e,t)},control:Je,handleSubmit:ze,reset:Object(n.useCallback)((e,t={})=>{if(Oe)for(const n of Object.values(d.current))if(n){const{ref:e,options:t}=n,c=de(e)&&j(t)?t[0].ref:e;if(i(c))try{c.closest("form").reset();break}catch(r){}}d.current={},T.current=e||Object.assign({},T.current),e&&Ie(""),ae.current=l?{}:e||{},Object.values(he.current).forEach(e=>X(e)&&e()),(({errors:e,isDirty:t,isSubmitted:r,touched:n,isValid:c,submitCount:s,dirtyFields:u})=>{e||(b.current={}),n||(O.current={}),c||(A.current=new Set,F.current=new Set,L.current=!0),t||(K.current=!1),u||(h.current={}),r||(Q.current=!1),s||(Y.current=0),I.current={},g.current={},v.current=new Set,J.current=!1})(t),Ve()},[]),clearErrors:Object(n.useCallback)((function(e){e?(j(e)?e:[e]).forEach(e=>H(b.current,e)):b.current={},Ve()}),[]),setError:Object(n.useCallback)((function(e,t){L.current=!1,R(b.current,e,Object.assign(Object.assign({},t),{ref:(d.current[e]||{}).ref})),Ve()}),[]),errors:b.current},Ge)}const me=Object(n.createContext)(null);me.displayName="RHFContext";var je=c.a.createElement;function ve(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return ye(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ye(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,c=function(){};return{s:c,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,u=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return u=e.done,e},e:function(e){i=!0,s=e},f:function(){try{u||null==r.return||r.return()}finally{if(i)throw s}}}}function ye(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var pe=u.a.section.withConfig({displayName:"diary__Section",componentId:"i0yiwz-0"})(["background-image:url('/diary-background.jpg');background-repeat:no-repeat;width:100%;height:100%;background-size:cover;"]);function we(){var e=he(),t=e.register,r=e.handleSubmit;return je(s.a,null,je(pe,null,je("form",{onSubmit:r((function(e){for(var t=e.diary.split(" "),r=0,n=["i","i'm","my","me","mine","mine.","me."];r<n.length;r++){var c=n[r];console.log("loop for word ".concat(c));var s,u=ve(t);try{for(u.s();!(s=u.n()).done;){var i=s.value;i.toLowerCase()===c&&alert("the word ".concat(i," is included!"))}}catch(a){u.e(a)}finally{u.f()}}return console.log(e)}))},je("textarea",{name:"diary",ref:t,rows:20,cols:40}," write your diary "),je("input",{type:"submit"}))))}}},[["1cT6",0,2,1,3]]]);