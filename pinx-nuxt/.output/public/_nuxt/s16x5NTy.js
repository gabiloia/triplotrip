import{d4 as mt,bK as xt,aC as bt,aD as wt,aB as yt,ax as St,d as le,ab as b,au as ue,d5 as Ct,q as _,d6 as Pt,p as h,y as Fe,aj as Ue,ap as Rt,at as c,as as d,ao as T,aX as We,aM as zt,aO as Me,bl as je,k as kt,v as Dt,bj as It,cX as Ae,aQ as Nt,ay as Tt,a2 as Vt,d7 as _t,a1 as re,aw as Ze,az as $t,cj as Et,br as q,J as Oe,bs as J,d8 as Mt,O as jt}from"./f757L6Hq.js";import{c as At}from"./BVZ4lE9f.js";function Ot(e){return mt(xt(e).toLowerCase())}var Be=At(function(e,o,a){return o=o.toLowerCase(),e+(a?Ot(o):o)});const He=yt("n-carousel-methods");function Bt(e){St(He,e)}function Re(e="unknown",o="component"){const a=bt(He);return a||wt(e,`\`${o}\` must be placed inside \`n-carousel\`.`),a}function Xt(){return b("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},b("g",{fill:"none"},b("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"})))}function Lt(){return b("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},b("g",{fill:"none"},b("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"})))}const Kt=le({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:o}=ue(e),{isVertical:a,isPrevDisabled:l,isNextDisabled:v,prev:w,next:z}=Re();return{mergedClsPrefix:o,isVertical:a,isPrevDisabled:l,isNextDisabled:v,prev:w,next:z}},render(){const{mergedClsPrefix:e}=this;return b("div",{class:`${e}-carousel__arrow-group`},b("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},Xt()),b("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},Lt()))}}),Yt={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},Ft=le({name:"CarouselDots",props:Yt,setup(e){const{mergedClsPrefixRef:o}=ue(e),a=_([]),l=Re();function v(g,f){switch(g.key){case"Enter":case" ":g.preventDefault(),l.to(f);return}e.keyboard&&y(g)}function w(g){e.trigger==="hover"&&l.to(g)}function z(g){e.trigger==="click"&&l.to(g)}function y(g){var f;if(g.shiftKey||g.altKey||g.ctrlKey||g.metaKey)return;const x=(f=document.activeElement)===null||f===void 0?void 0:f.nodeName.toLowerCase();if(x==="input"||x==="textarea")return;const{code:P}=g,j=P==="PageUp"||P==="ArrowUp",A=P==="PageDown"||P==="ArrowDown",C=P==="PageUp"||P==="ArrowRight",R=P==="PageDown"||P==="ArrowLeft",$=l.isVertical(),O=$?j:C,E=$?A:R;!O&&!E||(g.preventDefault(),O&&!l.isNextDisabled()?(l.next(),S(l.currentIndexRef.value)):E&&!l.isPrevDisabled()&&(l.prev(),S(l.currentIndexRef.value)))}function S(g){var f;(f=a.value[g])===null||f===void 0||f.focus()}return Pt(()=>a.value.length=0),{mergedClsPrefix:o,dotEls:a,handleKeydown:v,handleMouseenter:w,handleClick:z}},render(){const{mergedClsPrefix:e,dotEls:o}=this;return b("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},Ct(this.total,a=>{const l=a===this.currentIndex;return b("div",{"aria-selected":l,ref:v=>o.push(v),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,l&&`${e}-carousel__dot--active`],key:a,onClick:()=>{this.handleClick(a)},onMouseenter:()=>{this.handleMouseenter(a)},onKeydown:v=>{this.handleKeydown(v,a)}})}))}}),se="CarouselItem";function Ut(e){var o;return((o=e.type)===null||o===void 0?void 0:o.name)===se}const Wt=le({name:se,setup(e){const{mergedClsPrefixRef:o}=ue(e),a=Re(Be(se),`n-${Be(se)}`),l=_(),v=h(()=>{const{value:f}=l;return f?a.getSlideIndex(f):-1}),w=h(()=>a.isPrev(v.value)),z=h(()=>a.isNext(v.value)),y=h(()=>a.isActive(v.value)),S=h(()=>a.getSlideStyle(v.value));Fe(()=>{a.addSlide(l.value)}),Ue(()=>{a.removeSlide(l.value)});function g(f){const{value:x}=v;x!==void 0&&(a==null||a.onCarouselItemClick(x,f))}return{mergedClsPrefix:o,selfElRef:l,isPrev:w,isNext:z,isActive:y,index:v,style:S,handleClick:g}},render(){var e;const{$slots:o,mergedClsPrefix:a,isPrev:l,isNext:v,isActive:w,index:z,style:y}=this,S=[`${a}-carousel__slide`,{[`${a}-carousel__slide--current`]:w,[`${a}-carousel__slide--prev`]:l,[`${a}-carousel__slide--next`]:v}];return b("div",{ref:"selfElRef",class:S,role:"option",tabindex:"-1","data-index":z,"aria-hidden":!w,style:y,onClickCapture:this.handleClick},(e=o.default)===null||e===void 0?void 0:e.call(o,{isPrev:l,isNext:v,isActive:w,index:z}))}}),Zt=Rt("carousel",`
 position: relative;
 width: 100%;
 height: 100%;
 touch-action: pan-y;
 overflow: hidden;
`,[c("slides",`
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 `,[c("slide",`
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `,[T("> img",`
 display: block;
 `)])]),c("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[d("dot",[c("dot",`
 height: var(--n-dot-size);
 width: var(--n-dot-size);
 background-color: var(--n-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[T("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),d("active",`
 background-color: var(--n-dot-color-active);
 `)])]),d("line",[c("dot",`
 border-radius: 9999px;
 width: var(--n-dot-line-width);
 height: 4px;
 background-color: var(--n-dot-color);
 cursor: pointer;
 transition:
 width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[T("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),d("active",`
 width: var(--n-dot-line-width-active);
 background-color: var(--n-dot-color-active);
 `)])])]),c("arrow",`
 transition: background-color .3s var(--n-bezier);
 cursor: pointer;
 height: 28px;
 width: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: rgba(255, 255, 255, .2);
 color: var(--n-arrow-color);
 border-radius: 8px;
 user-select: none;
 -webkit-user-select: none;
 font-size: 18px;
 `,[T("svg",`
 height: 1em;
 width: 1em;
 `),T("&:hover",`
 background-color: rgba(255, 255, 255, .3);
 `)]),d("vertical",`
 touch-action: pan-x;
 `,[c("slides",`
 flex-direction: column;
 `),d("fade",[c("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),d("card",[c("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[d("current",`
 transform: translateY(-50%) translateZ(0);
 `),d("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),d("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),d("usercontrol",[c("slides",[T(">",[T("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 width: 100%;
 height: 100%;
 transform: translate(-50%, -50%);
 `)])])]),d("left",[c("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[d("line",[c("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[d("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),c("dot",`
 margin: 4px 0;
 `)]),c("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),d("vertical",[c("arrow",`
 transform: rotate(90deg);
 `)]),d("show-arrow",[d("bottom",[c("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),d("top",[c("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),d("left",[c("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),d("right",[c("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),d("left",[c("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[T("> *:first-child",`
 margin-bottom: 12px;
 `)])]),d("right",[c("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[d("line",[c("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[d("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),c("dot",`
 margin: 4px 0;
 `),c("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[T("> *:first-child",`
 margin-bottom: 12px;
 `)])]),d("top",[c("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[d("line",[c("dot",`
 margin: 0 4px;
 `)])]),c("dot",`
 margin: 0 4px;
 `),c("arrow-group",`
 top: 12px;
 right: 12px;
 `,[T("> *:first-child",`
 margin-right: 12px;
 `)])]),d("bottom",[c("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[d("line",[c("dot",`
 margin: 0 4px;
 `)])]),c("dot",`
 margin: 0 4px;
 `),c("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[T("> *:first-child",`
 margin-right: 12px;
 `)])]),d("fade",[c("slide",`
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 pointer-events: none;
 `,[d("current",`
 opacity: 1;
 pointer-events: auto;
 `)])]),d("card",[c("slides",`
 perspective: 1000px;
 `),c("slide",`
 position: absolute;
 left: 50%;
 opacity: 0;
 transform: translateX(-50%) translateZ(-400px);
 transition-property: opacity, transform;
 `,[d("current",`
 opacity: 1;
 transform: translateX(-50%) translateZ(0);
 z-index: 1;
 `),d("prev",`
 opacity: 0.4;
 transform: translateX(-100%) translateZ(-200px);
 `),d("next",`
 opacity: 0.4;
 transform: translateX(0%) translateZ(-200px);
 `)])])]);function Ht(e){const{length:o}=e;return o>1&&(e.push(Xe(e[0],0,"append")),e.unshift(Xe(e[o-1],o-1,"prepend"))),e}function Xe(e,o,a){return We(e,{key:`carousel-item-duplicate-${o}-${a}`})}function Le(e,o,a){return o===1?0:a?e===0?o-3:e===o-1?0:e-1:e}function Ce(e,o){return o?e+1:e}function qt(e,o,a){return e<0?null:e===0?a?o-1:null:e-1}function Jt(e,o,a){return e>o-1?null:e===o-1?a?0:null:e+1}function Qt(e,o){return o&&e>3?e-2:e}function Ke(e){return window.TouchEvent&&e instanceof window.TouchEvent}function Ye(e,o){let{offsetWidth:a,offsetHeight:l}=e;if(o){const v=getComputedStyle(e);a=a-Number.parseFloat(v.getPropertyValue("padding-left"))-Number.parseFloat(v.getPropertyValue("padding-right")),l=l-Number.parseFloat(v.getPropertyValue("padding-top"))-Number.parseFloat(v.getPropertyValue("padding-bottom"))}return{width:a,height:l}}function ie(e,o,a){return e<o?o:e>a?a:e}function Gt(e){if(e===void 0)return 0;if(typeof e=="number")return e;const o=/^((\d+)?\.?\d+?)(ms|s)?$/,a=e.match(o);if(a){const[,l,,v="ms"]=a;return Number(l)*(v==="ms"?1:1e3)}return 0}const en=["transitionDuration","transitionTimingFunction"],tn=Object.assign(Object.assign({},Ze.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let Pe=!1;const rn=le({name:"Carousel",props:tn,slots:Object,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:a}=ue(e),l=_(null),v=_(null),w=_([]),z={value:[]},y=h(()=>e.direction==="vertical"),S=h(()=>y.value?"height":"width"),g=h(()=>y.value?"bottom":"right"),f=h(()=>e.effect==="slide"),x=h(()=>e.loop&&e.slidesPerView===1&&f.value),P=h(()=>e.effect==="custom"),j=h(()=>!f.value||e.centeredSlides?1:e.slidesPerView),A=h(()=>P.value?1:e.slidesPerView),C=h(()=>j.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),R=_({width:0,height:0}),$=_(0),O=h(()=>{const{value:t}=w;if(!t.length)return[];$.value;const{value:n}=C;if(n)return t.map(m=>Ye(m));const{value:r}=A,{value:s}=R,{value:u}=S;let i=s[u];if(r!=="auto"){const{spaceBetween:m}=e,k=i-(r-1)*m,ae=1/Math.max(1,r);i=k*ae}const p=Object.assign(Object.assign({},s),{[u]:i});return t.map(()=>p)}),E=h(()=>{const{value:t}=O;if(!t.length)return[];const{centeredSlides:n,spaceBetween:r}=e,{value:s}=S,{[s]:u}=R.value;let i=0;return t.map(({[s]:p})=>{let m=i;return n&&(m+=(p-u)/2),i+=p+r,m})}),ze=_(!1),ce=h(()=>{const{transitionStyle:t}=e;return t?Ae(t,en):{}}),de=h(()=>P.value?0:Gt(ce.value.transitionDuration)),ke=h(()=>{const{value:t}=w;if(!t.length)return[];const n=!(C.value||A.value===1),r=p=>{if(n){const{value:m}=S;return{[m]:`${O.value[p][m]}px`}}};if(P.value)return t.map((p,m)=>r(m));const{effect:s,spaceBetween:u}=e,{value:i}=g;return t.reduce((p,m,k)=>{const ae=Object.assign(Object.assign({},r(k)),{[`margin-${i}`]:`${u}px`});return p.push(ae),ze.value&&(s==="fade"||s==="card")&&Object.assign(ae,ce.value),p},[])}),D=h(()=>{const{value:t}=j,{length:n}=w.value;if(t!=="auto")return Math.max(n-t,0)+1;{const{value:r}=O,{length:s}=r;if(!s)return n;const{value:u}=E,{value:i}=S,p=R.value[i];let m=r[r.length-1][i],k=s;for(;k>1&&m<p;)k--,m+=u[k]-u[k-1];return ie(k+1,1,s)}}),fe=h(()=>Qt(D.value,x.value)),qe=Ce(e.defaultIndex,x.value),ve=_(Le(qe,D.value,x.value)),V=Nt(Tt(e,"currentIndex"),ve),I=h(()=>Ce(V.value,x.value));function U(t){var n,r;t=ie(t,0,D.value-1);const s=Le(t,D.value,x.value),{value:u}=V;s!==V.value&&(ve.value=s,(n=e["onUpdate:currentIndex"])===null||n===void 0||n.call(e,s,u),(r=e.onUpdateCurrentIndex)===null||r===void 0||r.call(e,s,u))}function he(t=I.value){return qt(t,D.value,e.loop)}function pe(t=I.value){return Jt(t,D.value,e.loop)}function Je(t){const n=L(t);return n!==null&&he()===n}function Qe(t){const n=L(t);return n!==null&&pe()===n}function De(t){return I.value===L(t)}function Ge(t){return V.value===t}function Ie(){return he()===null}function Ne(){return pe()===null}let X=0;function ge(t){const n=ie(Ce(t,x.value),0,D.value);(t!==V.value||n!==I.value)&&U(n)}function Q(){const t=he();t!==null&&(X=-1,U(t))}function W(){const t=pe();t!==null&&(X=1,U(t))}let N=!1;function et(){(!N||!x.value)&&Q()}function tt(){(!N||!x.value)&&W()}let B=0;const me=_({});function G(t,n=0){me.value=Object.assign({},ce.value,{transform:y.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${n}ms`})}function Z(t=0){f.value?xe(I.value,t):B!==0&&(!N&&t>0&&(N=!0),G(B=0,t))}function xe(t,n){const r=Te(t);r!==B&&n>0&&(N=!0),B=Te(I.value),G(r,n)}function Te(t){let n;return t>=D.value-1?n=Ve():n=E.value[t]||0,n}function Ve(){if(j.value==="auto"){const{value:t}=S,{[t]:n}=R.value,{value:r}=E,s=r[r.length-1];let u;if(s===void 0)u=n;else{const{value:i}=O;u=s+i[i.length-1][t]}return u-n}else{const{value:t}=E;return t[D.value-1]||0}}const H={currentIndexRef:V,to:ge,prev:et,next:tt,isVertical:()=>y.value,isHorizontal:()=>!y.value,isPrev:Je,isNext:Qe,isActive:De,isPrevDisabled:Ie,isNextDisabled:Ne,getSlideIndex:L,getSlideStyle:at,addSlide:nt,removeSlide:ot,onCarouselItemClick:rt};Bt(H);function nt(t){t&&w.value.push(t)}function ot(t){if(!t)return;const n=L(t);n!==-1&&w.value.splice(n,1)}function L(t){return typeof t=="number"?t:t?w.value.indexOf(t):-1}function at(t){const n=L(t);if(n!==-1){const r=[ke.value[n]],s=H.isPrev(n),u=H.isNext(n);return s&&r.push(e.prevSlideStyle||""),u&&r.push(e.nextSlideStyle||""),jt(r)}}let be=0,we=0,M=0,ye=0,ee=!1,Se=!1;function rt(t,n){let r=!N&&!ee&&!Se;e.effect==="card"&&r&&!De(t)&&(ge(t),r=!1),r||(n.preventDefault(),n.stopPropagation())}let te=null;function ne(){te&&(clearInterval(te),te=null)}function K(){ne(),!e.autoplay||fe.value<2||(te=window.setInterval(W,e.interval))}function _e(t){var n;if(Pe||!(!((n=v.value)===null||n===void 0)&&n.contains(Et(t))))return;Pe=!0,ee=!0,Se=!1,ye=Date.now(),ne(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const r=Ke(t)?t.touches[0]:t;y.value?we=r.clientY:be=r.clientX,e.touchable&&(q("touchmove",document,oe),q("touchend",document,Y),q("touchcancel",document,Y)),e.draggable&&(q("mousemove",document,oe),q("mouseup",document,Y))}function oe(t){const{value:n}=y,{value:r}=S,s=Ke(t)?t.touches[0]:t,u=n?s.clientY-we:s.clientX-be,i=R.value[r];M=ie(u,-i,i),t.cancelable&&t.preventDefault(),f.value&&G(B-M,0)}function Y(){const{value:t}=I;let n=t;if(!N&&M!==0&&f.value){const r=B-M,s=[...E.value.slice(0,D.value-1),Ve()];let u=null;for(let i=0;i<s.length;i++){const p=Math.abs(s[i]-r);if(u!==null&&u<p)break;u=p,n=i}}if(n===t){const r=Date.now()-ye,{value:s}=S,u=R.value[s];M>u/2||M/r>.4?Q():(M<-u/2||M/r<-.4)&&W()}n!==null&&n!==t?(Se=!0,U(n),Oe(()=>{(!x.value||ve.value!==V.value)&&Z(de.value)})):Z(de.value),$e(),K()}function $e(){ee&&(Pe=!1),ee=!1,be=0,we=0,M=0,ye=0,J("touchmove",document,oe),J("touchend",document,Y),J("touchcancel",document,Y),J("mousemove",document,oe),J("mouseup",document,Y)}function it(){if(f.value&&N){const{value:t}=I;xe(t,0)}else K();f.value&&(me.value.transitionDuration="0ms"),N=!1}function st(t){if(t.preventDefault(),N)return;let{deltaX:n,deltaY:r}=t;t.shiftKey&&!n&&(n=r);const s=-1,u=1,i=(n||r)>0?u:s;let p=0,m=0;y.value?m=i:p=i;const k=10;(m*r>=k||p*n>=k)&&(i===u&&!Ne()?W():i===s&&!Ie()&&Q())}function lt(){R.value=Ye(l.value,!0),K()}function ut(){C.value&&$.value++}function ct(){e.autoplay&&ne()}function dt(){e.autoplay&&K()}Fe(()=>{Vt(K),requestAnimationFrame(()=>ze.value=!0)}),Ue(()=>{$e(),ne()}),_t(()=>{const{value:t}=w,{value:n}=z,r=new Map,s=i=>r.has(i)?r.get(i):-1;let u=!1;for(let i=0;i<t.length;i++){const p=n.findIndex(m=>m.el===t[i]);p!==i&&(u=!0),r.set(t[i],p)}u&&t.sort((i,p)=>s(i)-s(p))}),re(I,(t,n)=>{if(t===n){X=0;return}if(K(),f.value){if(x.value){const{value:r}=D;X===-1&&n===1&&t===r-2?t=0:X===1&&n===r-2&&t===1&&(t=r-1)}xe(t,de.value)}else Z();X=0},{immediate:!0}),re([x,j],()=>void Oe(()=>{U(I.value)})),re(E,()=>{f.value&&Z()},{deep:!0}),re(f,t=>{t?Z():(N=!1,G(B=0))});const ft=h(()=>({onTouchstartPassive:e.touchable?_e:void 0,onMousedown:e.draggable?_e:void 0,onWheel:e.mousewheel?st:void 0})),vt=h(()=>Object.assign(Object.assign({},Ae(H,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:fe.value,currentIndex:V.value})),ht=h(()=>({total:fe.value,currentIndex:V.value,to:H.to})),pt={getCurrentIndex:()=>V.value,to:ge,prev:Q,next:W},gt=Ze("Carousel","-carousel",Zt,Mt,e,o),Ee=h(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:n,dotColor:r,dotColorActive:s,dotColorFocus:u,dotLineWidth:i,dotLineWidthActive:p,arrowColor:m}}=gt.value;return{"--n-bezier":t,"--n-dot-color":r,"--n-dot-color-focus":u,"--n-dot-color-active":s,"--n-dot-size":n,"--n-dot-line-width":i,"--n-dot-line-width-active":p,"--n-arrow-color":m}}),F=a?$t("carousel",void 0,Ee,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:o,selfElRef:l,slidesElRef:v,slideVNodes:z,duplicatedable:x,userWantsControl:P,autoSlideSize:C,realIndex:I,slideStyles:ke,translateStyle:me,slidesControlListeners:ft,handleTransitionEnd:it,handleResize:lt,handleSlideResize:ut,handleMouseenter:ct,handleMouseleave:dt,isActive:Ge,arrowSlotProps:vt,dotSlotProps:ht},pt),{cssVars:a?void 0:Ee,themeClass:F==null?void 0:F.themeClass,onRender:F==null?void 0:F.onRender})},render(){var e;const{mergedClsPrefix:o,showArrow:a,userWantsControl:l,slideStyles:v,dotType:w,dotPlacement:z,slidesControlListeners:y,transitionProps:S={},arrowSlotProps:g,dotSlotProps:f,$slots:{default:x,dots:P,arrow:j}}=this,A=x&&zt(x())||[];let C=nn(A);return C.length||(C=A.map(R=>b(Wt,null,{default:()=>We(R)}))),this.duplicatedable&&(C=Ht(C)),this.slideVNodes.value=C,this.autoSlideSize&&(C=C.map(R=>b(Me,{onResize:this.handleSlideResize},{default:()=>R}))),(e=this.onRender)===null||e===void 0||e.call(this),b("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${o}-carousel`,this.direction==="vertical"&&`${o}-carousel--vertical`,this.showArrow&&`${o}-carousel--show-arrow`,`${o}-carousel--${z}`,`${o}-carousel--${this.direction}`,`${o}-carousel--${this.effect}`,l&&`${o}-carousel--usercontrol`],style:this.cssVars},y,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),b(Me,{onResize:this.handleResize},{default:()=>b("div",{ref:"slidesElRef",class:`${o}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},l?C.map((R,$)=>b("div",{style:v[$],key:$},kt(b(It,Object.assign({},S),{default:()=>R}),[[Dt,this.isActive($)]]))):C)}),this.showDots&&f.total>1&&je(P,f,()=>[b(Ft,{key:w+z,total:f.total,currentIndex:f.currentIndex,dotType:w,trigger:this.trigger,keyboard:this.keyboard})]),a&&je(j,g,()=>[b(Kt,null)]))}});function nn(e){return e.reduce((o,a)=>(Ut(a)&&o.push(a),o),[])}export{rn as N};
