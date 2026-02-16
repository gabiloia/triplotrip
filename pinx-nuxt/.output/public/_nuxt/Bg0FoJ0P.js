import{de as mt,bI as xt,at as bt,au as wt,as as yt,aR as St,d as le,ac as b,aH as ue,df as Ct,dg as Pt,s as _,y as Ke,ak as Ue,q as h,az as Rt,aC as c,aB as T,aA as d,aP as We,aE as zt,aG as Ae,bi as Me,k as It,v as kt,bg as Dt,aJ as Nt,a3 as Tt,dh as Vt,a2 as re,aI as Ze,aL as _t,bp as q,J as je,cb as Be,aU as $t,di as Et,O as At,c7 as Mt,bo as J}from"./BboPWEKj.js";import{c as jt}from"./uD1lXFsz.js";function Bt(e){return mt(xt(e).toLowerCase())}var Oe=jt(function(e,o,a){return o=o.toLowerCase(),e+(a?Bt(o):o)});const He=yt("n-carousel-methods");function Ot(e){St(He,e)}function Re(e="unknown",o="component"){const a=bt(He);return a||wt(e,`\`${o}\` must be placed inside \`n-carousel\`.`),a}function Lt(){return b("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},b("g",{fill:"none"},b("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"})))}function Xt(){return b("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},b("g",{fill:"none"},b("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"})))}const Yt=le({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:o}=ue(e),{isVertical:a,isPrevDisabled:l,isNextDisabled:v,prev:w,next:z}=Re();return{mergedClsPrefix:o,isVertical:a,isPrevDisabled:l,isNextDisabled:v,prev:w,next:z}},render(){const{mergedClsPrefix:e}=this;return b("div",{class:`${e}-carousel__arrow-group`},b("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},Lt()),b("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},Xt()))}}),Ft={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},Kt=le({name:"CarouselDots",props:Ft,setup(e){const{mergedClsPrefixRef:o}=ue(e),a=_([]),l=Re();function v(g,f){switch(g.key){case"Enter":case" ":g.preventDefault(),l.to(f);return}e.keyboard&&y(g)}function w(g){e.trigger==="hover"&&l.to(g)}function z(g){e.trigger==="click"&&l.to(g)}function y(g){var f;if(g.shiftKey||g.altKey||g.ctrlKey||g.metaKey)return;const x=(f=document.activeElement)===null||f===void 0?void 0:f.nodeName.toLowerCase();if(x==="input"||x==="textarea")return;const{code:P}=g,M=P==="PageUp"||P==="ArrowUp",j=P==="PageDown"||P==="ArrowDown",C=P==="PageUp"||P==="ArrowRight",R=P==="PageDown"||P==="ArrowLeft",$=l.isVertical(),B=$?M:C,E=$?j:R;!B&&!E||(g.preventDefault(),B&&!l.isNextDisabled()?(l.next(),S(l.currentIndexRef.value)):E&&!l.isPrevDisabled()&&(l.prev(),S(l.currentIndexRef.value)))}function S(g){var f;(f=a.value[g])===null||f===void 0||f.focus()}return Pt(()=>a.value.length=0),{mergedClsPrefix:o,dotEls:a,handleKeydown:v,handleMouseenter:w,handleClick:z}},render(){const{mergedClsPrefix:e,dotEls:o}=this;return b("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},Ct(this.total,a=>{const l=a===this.currentIndex;return b("div",{"aria-selected":l,ref:v=>o.push(v),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,l&&`${e}-carousel__dot--active`],key:a,onClick:()=>{this.handleClick(a)},onMouseenter:()=>{this.handleMouseenter(a)},onKeydown:v=>{this.handleKeydown(v,a)}})}))}}),se="CarouselItem";function Ut(e){var o;return((o=e.type)===null||o===void 0?void 0:o.name)===se}const Wt=le({name:se,setup(e){const{mergedClsPrefixRef:o}=ue(e),a=Re(Oe(se),`n-${Oe(se)}`),l=_(),v=h(()=>{const{value:f}=l;return f?a.getSlideIndex(f):-1}),w=h(()=>a.isPrev(v.value)),z=h(()=>a.isNext(v.value)),y=h(()=>a.isActive(v.value)),S=h(()=>a.getSlideStyle(v.value));Ke(()=>{a.addSlide(l.value)}),Ue(()=>{a.removeSlide(l.value)});function g(f){const{value:x}=v;x!==void 0&&a?.onCarouselItemClick(x,f)}return{mergedClsPrefix:o,selfElRef:l,isPrev:w,isNext:z,isActive:y,index:v,style:S,handleClick:g}},render(){var e;const{$slots:o,mergedClsPrefix:a,isPrev:l,isNext:v,isActive:w,index:z,style:y}=this,S=[`${a}-carousel__slide`,{[`${a}-carousel__slide--current`]:w,[`${a}-carousel__slide--prev`]:l,[`${a}-carousel__slide--next`]:v}];return b("div",{ref:"selfElRef",class:S,role:"option",tabindex:"-1","data-index":z,"aria-hidden":!w,style:y,onClickCapture:this.handleClick},(e=o.default)===null||e===void 0?void 0:e.call(o,{isPrev:l,isNext:v,isActive:w,index:z}))}}),Zt=Rt("carousel",`
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
 `)])])]);function Ht(e){const{length:o}=e;return o>1&&(e.push(Le(e[0],0,"append")),e.unshift(Le(e[o-1],o-1,"prepend"))),e}function Le(e,o,a){return We(e,{key:`carousel-item-duplicate-${o}-${a}`})}function Xe(e,o,a){return o===1?0:a?e===0?o-3:e===o-1?0:e-1:e}function Ce(e,o){return o?e+1:e}function qt(e,o,a){return e<0?null:e===0?a?o-1:null:e-1}function Jt(e,o,a){return e>o-1?null:e===o-1?a?0:null:e+1}function Gt(e,o){return o&&e>3?e-2:e}function Ye(e){return window.TouchEvent&&e instanceof window.TouchEvent}function Fe(e,o){let{offsetWidth:a,offsetHeight:l}=e;if(o){const v=getComputedStyle(e);a=a-Number.parseFloat(v.getPropertyValue("padding-left"))-Number.parseFloat(v.getPropertyValue("padding-right")),l=l-Number.parseFloat(v.getPropertyValue("padding-top"))-Number.parseFloat(v.getPropertyValue("padding-bottom"))}return{width:a,height:l}}function ie(e,o,a){return e<o?o:e>a?a:e}function Qt(e){if(e===void 0)return 0;if(typeof e=="number")return e;const o=/^((\d+)?\.?\d+?)(ms|s)?$/,a=e.match(o);if(a){const[,l,,v="ms"]=a;return Number(l)*(v==="ms"?1:1e3)}return 0}const en=["transitionDuration","transitionTimingFunction"],tn=Object.assign(Object.assign({},Ze.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let Pe=!1;const rn=le({name:"Carousel",props:tn,slots:Object,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:a}=ue(e),l=_(null),v=_(null),w=_([]),z={value:[]},y=h(()=>e.direction==="vertical"),S=h(()=>y.value?"height":"width"),g=h(()=>y.value?"bottom":"right"),f=h(()=>e.effect==="slide"),x=h(()=>e.loop&&e.slidesPerView===1&&f.value),P=h(()=>e.effect==="custom"),M=h(()=>!f.value||e.centeredSlides?1:e.slidesPerView),j=h(()=>P.value?1:e.slidesPerView),C=h(()=>M.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),R=_({width:0,height:0}),$=_(0),B=h(()=>{const{value:t}=w;if(!t.length)return[];$.value;const{value:n}=C;if(n)return t.map(m=>Fe(m));const{value:r}=j,{value:s}=R,{value:u}=S;let i=s[u];if(r!=="auto"){const{spaceBetween:m}=e,I=i-(r-1)*m,ae=1/Math.max(1,r);i=I*ae}const p=Object.assign(Object.assign({},s),{[u]:i});return t.map(()=>p)}),E=h(()=>{const{value:t}=B;if(!t.length)return[];const{centeredSlides:n,spaceBetween:r}=e,{value:s}=S,{[s]:u}=R.value;let i=0;return t.map(({[s]:p})=>{let m=i;return n&&(m+=(p-u)/2),i+=p+r,m})}),ze=_(!1),ce=h(()=>{const{transitionStyle:t}=e;return t?Be(t,en):{}}),de=h(()=>P.value?0:Qt(ce.value.transitionDuration)),Ie=h(()=>{const{value:t}=w;if(!t.length)return[];const n=!(C.value||j.value===1),r=p=>{if(n){const{value:m}=S;return{[m]:`${B.value[p][m]}px`}}};if(P.value)return t.map((p,m)=>r(m));const{effect:s,spaceBetween:u}=e,{value:i}=g;return t.reduce((p,m,I)=>{const ae=Object.assign(Object.assign({},r(I)),{[`margin-${i}`]:`${u}px`});return p.push(ae),ze.value&&(s==="fade"||s==="card")&&Object.assign(ae,ce.value),p},[])}),k=h(()=>{const{value:t}=M,{length:n}=w.value;if(t!=="auto")return Math.max(n-t,0)+1;{const{value:r}=B,{length:s}=r;if(!s)return n;const{value:u}=E,{value:i}=S,p=R.value[i];let m=r[r.length-1][i],I=s;for(;I>1&&m<p;)I--,m+=u[I]-u[I-1];return ie(I+1,1,s)}}),fe=h(()=>Gt(k.value,x.value)),qe=Ce(e.defaultIndex,x.value),ve=_(Xe(qe,k.value,x.value)),V=Nt($t(e,"currentIndex"),ve),D=h(()=>Ce(V.value,x.value));function U(t){var n,r;t=ie(t,0,k.value-1);const s=Xe(t,k.value,x.value),{value:u}=V;s!==V.value&&(ve.value=s,(n=e["onUpdate:currentIndex"])===null||n===void 0||n.call(e,s,u),(r=e.onUpdateCurrentIndex)===null||r===void 0||r.call(e,s,u))}function he(t=D.value){return qt(t,k.value,e.loop)}function pe(t=D.value){return Jt(t,k.value,e.loop)}function Je(t){const n=X(t);return n!==null&&he()===n}function Ge(t){const n=X(t);return n!==null&&pe()===n}function ke(t){return D.value===X(t)}function Qe(t){return V.value===t}function De(){return he()===null}function Ne(){return pe()===null}let L=0;function ge(t){const n=ie(Ce(t,x.value),0,k.value);(t!==V.value||n!==D.value)&&U(n)}function G(){const t=he();t!==null&&(L=-1,U(t))}function W(){const t=pe();t!==null&&(L=1,U(t))}let N=!1;function et(){(!N||!x.value)&&G()}function tt(){(!N||!x.value)&&W()}let O=0;const me=_({});function Q(t,n=0){me.value=Object.assign({},ce.value,{transform:y.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${n}ms`})}function Z(t=0){f.value?xe(D.value,t):O!==0&&(!N&&t>0&&(N=!0),Q(O=0,t))}function xe(t,n){const r=Te(t);r!==O&&n>0&&(N=!0),O=Te(D.value),Q(r,n)}function Te(t){let n;return t>=k.value-1?n=Ve():n=E.value[t]||0,n}function Ve(){if(M.value==="auto"){const{value:t}=S,{[t]:n}=R.value,{value:r}=E,s=r[r.length-1];let u;if(s===void 0)u=n;else{const{value:i}=B;u=s+i[i.length-1][t]}return u-n}else{const{value:t}=E;return t[k.value-1]||0}}const H={currentIndexRef:V,to:ge,prev:et,next:tt,isVertical:()=>y.value,isHorizontal:()=>!y.value,isPrev:Je,isNext:Ge,isActive:ke,isPrevDisabled:De,isNextDisabled:Ne,getSlideIndex:X,getSlideStyle:at,addSlide:nt,removeSlide:ot,onCarouselItemClick:rt};Ot(H);function nt(t){t&&w.value.push(t)}function ot(t){if(!t)return;const n=X(t);n!==-1&&w.value.splice(n,1)}function X(t){return typeof t=="number"?t:t?w.value.indexOf(t):-1}function at(t){const n=X(t);if(n!==-1){const r=[Ie.value[n]],s=H.isPrev(n),u=H.isNext(n);return s&&r.push(e.prevSlideStyle||""),u&&r.push(e.nextSlideStyle||""),At(r)}}let be=0,we=0,A=0,ye=0,ee=!1,Se=!1;function rt(t,n){let r=!N&&!ee&&!Se;e.effect==="card"&&r&&!ke(t)&&(ge(t),r=!1),r||(n.preventDefault(),n.stopPropagation())}let te=null;function ne(){te&&(clearInterval(te),te=null)}function Y(){ne(),!e.autoplay||fe.value<2||(te=window.setInterval(W,e.interval))}function _e(t){var n;if(Pe||!(!((n=v.value)===null||n===void 0)&&n.contains(Mt(t))))return;Pe=!0,ee=!0,Se=!1,ye=Date.now(),ne(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const r=Ye(t)?t.touches[0]:t;y.value?we=r.clientY:be=r.clientX,e.touchable&&(J("touchmove",document,oe),J("touchend",document,F),J("touchcancel",document,F)),e.draggable&&(J("mousemove",document,oe),J("mouseup",document,F))}function oe(t){const{value:n}=y,{value:r}=S,s=Ye(t)?t.touches[0]:t,u=n?s.clientY-we:s.clientX-be,i=R.value[r];A=ie(u,-i,i),t.cancelable&&t.preventDefault(),f.value&&Q(O-A,0)}function F(){const{value:t}=D;let n=t;if(!N&&A!==0&&f.value){const r=O-A,s=[...E.value.slice(0,k.value-1),Ve()];let u=null;for(let i=0;i<s.length;i++){const p=Math.abs(s[i]-r);if(u!==null&&u<p)break;u=p,n=i}}if(n===t){const r=Date.now()-ye,{value:s}=S,u=R.value[s];A>u/2||A/r>.4?G():(A<-u/2||A/r<-.4)&&W()}n!==null&&n!==t?(Se=!0,U(n),je(()=>{(!x.value||ve.value!==V.value)&&Z(de.value)})):Z(de.value),$e(),Y()}function $e(){ee&&(Pe=!1),ee=!1,be=0,we=0,A=0,ye=0,q("touchmove",document,oe),q("touchend",document,F),q("touchcancel",document,F),q("mousemove",document,oe),q("mouseup",document,F)}function it(){if(f.value&&N){const{value:t}=D;xe(t,0)}else Y();f.value&&(me.value.transitionDuration="0ms"),N=!1}function st(t){if(t.preventDefault(),N)return;let{deltaX:n,deltaY:r}=t;t.shiftKey&&!n&&(n=r);const s=-1,u=1,i=(n||r)>0?u:s;let p=0,m=0;y.value?m=i:p=i;const I=10;(m*r>=I||p*n>=I)&&(i===u&&!Ne()?W():i===s&&!De()&&G())}function lt(){R.value=Fe(l.value,!0),Y()}function ut(){C.value&&$.value++}function ct(){e.autoplay&&ne()}function dt(){e.autoplay&&Y()}Ke(()=>{Tt(Y),requestAnimationFrame(()=>ze.value=!0)}),Ue(()=>{$e(),ne()}),Vt(()=>{const{value:t}=w,{value:n}=z,r=new Map,s=i=>r.has(i)?r.get(i):-1;let u=!1;for(let i=0;i<t.length;i++){const p=n.findIndex(m=>m.el===t[i]);p!==i&&(u=!0),r.set(t[i],p)}u&&t.sort((i,p)=>s(i)-s(p))}),re(D,(t,n)=>{if(t===n){L=0;return}if(Y(),f.value){if(x.value){const{value:r}=k;L===-1&&n===1&&t===r-2?t=0:L===1&&n===r-2&&t===1&&(t=r-1)}xe(t,de.value)}else Z();L=0},{immediate:!0}),re([x,M],()=>{je(()=>{U(D.value)})}),re(E,()=>{f.value&&Z()},{deep:!0}),re(f,t=>{t?Z():(N=!1,Q(O=0))});const ft=h(()=>({onTouchstartPassive:e.touchable?_e:void 0,onMousedown:e.draggable?_e:void 0,onWheel:e.mousewheel?st:void 0})),vt=h(()=>Object.assign(Object.assign({},Be(H,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:fe.value,currentIndex:V.value})),ht=h(()=>({total:fe.value,currentIndex:V.value,to:H.to})),pt={getCurrentIndex:()=>V.value,to:ge,prev:G,next:W},gt=Ze("Carousel","-carousel",Zt,Et,e,o),Ee=h(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:n,dotColor:r,dotColorActive:s,dotColorFocus:u,dotLineWidth:i,dotLineWidthActive:p,arrowColor:m}}=gt.value;return{"--n-bezier":t,"--n-dot-color":r,"--n-dot-color-focus":u,"--n-dot-color-active":s,"--n-dot-size":n,"--n-dot-line-width":i,"--n-dot-line-width-active":p,"--n-arrow-color":m}}),K=a?_t("carousel",void 0,Ee,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:o,selfElRef:l,slidesElRef:v,slideVNodes:z,duplicatedable:x,userWantsControl:P,autoSlideSize:C,realIndex:D,slideStyles:Ie,translateStyle:me,slidesControlListeners:ft,handleTransitionEnd:it,handleResize:lt,handleSlideResize:ut,handleMouseenter:ct,handleMouseleave:dt,isActive:Qe,arrowSlotProps:vt,dotSlotProps:ht},pt),{cssVars:a?void 0:Ee,themeClass:K?.themeClass,onRender:K?.onRender})},render(){var e;const{mergedClsPrefix:o,showArrow:a,userWantsControl:l,slideStyles:v,dotType:w,dotPlacement:z,slidesControlListeners:y,transitionProps:S={},arrowSlotProps:g,dotSlotProps:f,$slots:{default:x,dots:P,arrow:M}}=this,j=x&&zt(x())||[];let C=nn(j);return C.length||(C=j.map(R=>b(Wt,null,{default:()=>We(R)}))),this.duplicatedable&&(C=Ht(C)),this.slideVNodes.value=C,this.autoSlideSize&&(C=C.map(R=>b(Ae,{onResize:this.handleSlideResize},{default:()=>R}))),(e=this.onRender)===null||e===void 0||e.call(this),b("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${o}-carousel`,this.direction==="vertical"&&`${o}-carousel--vertical`,this.showArrow&&`${o}-carousel--show-arrow`,`${o}-carousel--${z}`,`${o}-carousel--${this.direction}`,`${o}-carousel--${this.effect}`,l&&`${o}-carousel--usercontrol`],style:this.cssVars},y,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),b(Ae,{onResize:this.handleResize},{default:()=>b("div",{ref:"slidesElRef",class:`${o}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},l?C.map((R,$)=>b("div",{style:v[$],key:$},It(b(Dt,Object.assign({},S),{default:()=>R}),[[kt,this.isActive($)]]))):C)}),this.showDots&&f.total>1&&Me(P,f,()=>[b(Kt,{key:w+z,total:f.total,currentIndex:f.currentIndex,dotType:w,trigger:this.trigger,keyboard:this.keyboard})]),a&&Me(M,g,()=>[b(Yt,null)]))}});function nn(e){return e.reduce((o,a)=>(Ut(a)&&o.push(a),o),[])}export{rn as N};
