import{ab as u,ay as w,aA as C,aB as y,aC as U,az as S,d as x,r as A,av as F,aG as H,aH as N,aL as P,q as _,b6 as T,aJ as k,p as M,aN as E,aP as O,dt as j,du as D,aU as I}from"./CxJvYK31.js";const W=()=>u("svg",{viewBox:"0 0 512 512"},u("path",{d:"M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"})),q=w("rate",{display:"inline-flex",flexWrap:"nowrap"},[C("&:hover",[y("item",`
 transition:
 transform .1s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),y("item",`
 position: relative;
 display: flex;
 transition:
 transform .1s var(--n-bezier),
 color .3s var(--n-bezier);
 transform: scale(1);
 font-size: var(--n-item-size);
 color: var(--n-item-color);
 `,[C("&:not(:first-child)",`
 margin-left: 6px;
 `),S("active",`
 color: var(--n-item-color-active);
 `)]),U("readonly",`
 cursor: pointer;
 `,[y("item",[C("&:hover",`
 transform: scale(1.05);
 `),C("&:active",`
 transform: scale(0.96);
 `)])]),y("half",`
 display: flex;
 transition: inherit;
 position: absolute;
 top: 0;
 left: 0;
 bottom: 0;
 width: 50%;
 overflow: hidden;
 color: rgba(255, 255, 255, 0);
 `,[S("active",`
 color: var(--n-item-color-active);
 `)])]),G=Object.assign(Object.assign({},N.props),{allowHalf:Boolean,count:{type:Number,default:5},value:Number,defaultValue:{type:Number,default:null},readonly:Boolean,size:{type:[String,Number],default:"medium"},clearable:Boolean,color:String,onClear:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),K=x({name:"Rate",props:G,setup(a){const{mergedClsPrefixRef:r,inlineThemeDisabled:d}=H(a),o=N("Rate","-rate",q,D,a,r),f=P(a,"value"),m=_(a.defaultValue),v=_(null),l=T(a),h=k(f,m);function g(e){const{"onUpdate:value":t,onUpdateValue:n}=a,{nTriggerFormChange:b,nTriggerFormInput:c}=l;t&&I(t,e),n&&I(n,e),m.value=e,b(),c()}function s(e,t){return a.allowHalf?t.offsetX>=Math.floor(t.currentTarget.offsetWidth/2)?e+1:e+.5:e+1}let z=!1;function p(e,t){z||(v.value=s(e,t))}function B(){v.value=null}function L(e,t){var n;const{clearable:b}=a,c=s(e,t);b&&c===h.value?(z=!0,(n=a.onClear)===null||n===void 0||n.call(a),v.value=null,g(null)):g(c)}function $(){z=!1}const V=M(()=>{const{size:e}=a,{self:t}=o.value;return typeof e=="number"?`${e}px`:t[E("size",e)]}),R=M(()=>{const{common:{cubicBezierEaseInOut:e},self:t}=o.value,{itemColor:n,itemColorActive:b}=t,{color:c}=a;return{"--n-bezier":e,"--n-item-color":n,"--n-item-color-active":c||b,"--n-item-size":V.value}}),i=d?O("rate",M(()=>{const e=V.value,{color:t}=a;let n="";return e&&(n+=e[0]),t&&(n+=j(t)),n}),R,a):void 0;return{mergedClsPrefix:r,mergedValue:h,hoverIndex:v,handleMouseMove:p,handleClick:L,handleMouseLeave:B,handleMouseEnterSomeStar:$,cssVars:d?void 0:R,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){const{readonly:a,hoverIndex:r,mergedValue:d,mergedClsPrefix:o,onRender:f,$slots:{default:m}}=this;return f==null||f(),u("div",{class:[`${o}-rate`,{[`${o}-rate--readonly`]:a},this.themeClass],style:this.cssVars,onMouseleave:this.handleMouseLeave},A(this.count,(v,l)=>{const h=m?m({index:l}):u(F,{clsPrefix:o},{default:W}),g=r!==null?l+1<=r:l+1<=(d||0);return u("div",{key:l,class:[`${o}-rate__item`,g&&`${o}-rate__item--active`],onClick:a?void 0:s=>{this.handleClick(l,s)},onMouseenter:this.handleMouseEnterSomeStar,onMousemove:a?void 0:s=>{this.handleMouseMove(l,s)}},h,this.allowHalf?u("div",{class:[`${o}-rate__half`,{[`${o}-rate__half--active`]:!g&&r!==null?l+.5<=r:l+.5<=(d||0)}]},h):null)}))}});export{K as N};
