import{ay as a,az as v,d as O,ab as c,bi as Y,q as S,aG as M,aH as j,dy as A,dz as F,p as y,aP as W,dA as V,aK as U,ar as X,aB as n,aA as C,av as q,bN as G,bd as E,as as J,aJ as Q,aL as N,dB as Z,aU as $}from"./D0txxWEs.js";const ee=a("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[a("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),v("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),oe={embedded:Boolean,position:V,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},H=X("n-layout");function te(e){return O({name:"Layout",props:Object.assign(Object.assign({},j.props),oe),setup(o){const r=S(null),b=S(null),{mergedClsPrefixRef:m,inlineThemeDisabled:g}=M(o),T=j("Layout","-layout",ee,A,o,m);function I(i,d){if(o.nativeScrollbar){const{value:u}=r;u&&(d===void 0?u.scrollTo(i):u.scrollTo(i,d))}else{const{value:u}=b;u&&u.scrollTo(i,d)}}U(H,o);let z=0,R=0;const _=i=>{var d;const u=i.target;z=u.scrollLeft,R=u.scrollTop,(d=o.onScroll)===null||d===void 0||d.call(o,i)};F(()=>{if(o.nativeScrollbar){const i=r.value;i&&(i.scrollTop=R,i.scrollLeft=z)}});const w={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},B={scrollTo:I},P=y(()=>{const{common:{cubicBezierEaseInOut:i},self:d}=T.value;return{"--n-bezier":i,"--n-color":o.embedded?d.colorEmbedded:d.color,"--n-text-color":d.textColor}}),f=g?W("layout",y(()=>o.embedded?"e":""),P,o):void 0;return Object.assign({mergedClsPrefix:m,scrollableElRef:r,scrollbarInstRef:b,hasSiderStyle:w,mergedTheme:T,handleNativeElScroll:_,cssVars:g?void 0:P,themeClass:f==null?void 0:f.themeClass,onRender:f==null?void 0:f.onRender},B)},render(){var o;const{mergedClsPrefix:r,hasSider:b}=this;(o=this.onRender)===null||o===void 0||o.call(this);const m=b?this.hasSiderStyle:void 0,g=[this.themeClass,e,`${r}-layout`,`${r}-layout--${this.position}-positioned`];return c("div",{class:g,style:this.cssVars},this.nativeScrollbar?c("div",{ref:"scrollableElRef",class:[`${r}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,m],onScroll:this.handleNativeElScroll},this.$slots):c(Y,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,m]}),this.$slots))}})}const ie=te(!1),re=a("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[v("bordered",[n("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),n("left-placement",[v("bordered",[n("border",`
 right: 0;
 `)])]),v("right-placement",`
 justify-content: flex-start;
 `,[v("bordered",[n("border",`
 left: 0;
 `)]),v("collapsed",[a("layout-toggle-button",[a("base-icon",`
 transform: rotate(180deg);
 `)]),a("layout-toggle-bar",[C("&:hover",[n("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),n("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),a("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[a("base-icon",`
 transform: rotate(0);
 `)]),a("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[C("&:hover",[n("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),n("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),v("collapsed",[a("layout-toggle-bar",[C("&:hover",[n("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),n("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),a("layout-toggle-button",[a("base-icon",`
 transform: rotate(0);
 `)])]),a("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[a("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),a("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[n("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),n("bottom",`
 position: absolute;
 top: 34px;
 `),C("&:hover",[n("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),n("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),n("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),C("&:hover",[n("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),n("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),a("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),v("show-content",[a("layout-sider-scroll-container",{opacity:1})]),v("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),le=O({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return c("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},c("div",{class:`${e}-layout-toggle-bar__top`}),c("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),se=O({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return c("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},c(q,{clsPrefix:e},{default:()=>c(G,null)}))}}),ne={position:V,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},ce=O({name:"LayoutSider",props:Object.assign(Object.assign({},j.props),ne),setup(e){const o=J(H),r=S(null),b=S(null),m=S(e.defaultCollapsed),g=Q(N(e,"collapsed"),m),T=y(()=>E(g.value?e.collapsedWidth:e.width)),I=y(()=>e.collapseMode!=="transform"?{}:{minWidth:E(e.width)}),z=y(()=>o?o.siderPlacement:"left");function R(s,t){if(e.nativeScrollbar){const{value:l}=r;l&&(t===void 0?l.scrollTo(s):l.scrollTo(s,t))}else{const{value:l}=b;l&&l.scrollTo(s,t)}}function _(){const{"onUpdate:collapsed":s,onUpdateCollapsed:t,onExpand:l,onCollapse:k}=e,{value:x}=g;t&&$(t,!x),s&&$(s,!x),m.value=!x,x?l&&$(l):k&&$(k)}let w=0,B=0;const P=s=>{var t;const l=s.target;w=l.scrollLeft,B=l.scrollTop,(t=e.onScroll)===null||t===void 0||t.call(e,s)};F(()=>{if(e.nativeScrollbar){const s=r.value;s&&(s.scrollTop=B,s.scrollLeft=w)}}),U(Z,{collapsedRef:g,collapseModeRef:N(e,"collapseMode")});const{mergedClsPrefixRef:f,inlineThemeDisabled:i}=M(e),d=j("Layout","-layout-sider",re,A,e,f);function u(s){var t,l;s.propertyName==="max-width"&&(g.value?(t=e.onAfterLeave)===null||t===void 0||t.call(e):(l=e.onAfterEnter)===null||l===void 0||l.call(e))}const D={scrollTo:R},L=y(()=>{const{common:{cubicBezierEaseInOut:s},self:t}=d.value,{siderToggleButtonColor:l,siderToggleButtonBorder:k,siderToggleBarColor:x,siderToggleBarColorHover:K}=t,h={"--n-bezier":s,"--n-toggle-button-color":l,"--n-toggle-button-border":k,"--n-toggle-bar-color":x,"--n-toggle-bar-color-hover":K};return e.inverted?(h["--n-color"]=t.siderColorInverted,h["--n-text-color"]=t.textColorInverted,h["--n-border-color"]=t.siderBorderColorInverted,h["--n-toggle-button-icon-color"]=t.siderToggleButtonIconColorInverted,h.__invertScrollbar=t.__invertScrollbar):(h["--n-color"]=t.siderColor,h["--n-text-color"]=t.textColor,h["--n-border-color"]=t.siderBorderColor,h["--n-toggle-button-icon-color"]=t.siderToggleButtonIconColor),h}),p=i?W("layout-sider",y(()=>e.inverted?"a":"b"),L,e):void 0;return Object.assign({scrollableElRef:r,scrollbarInstRef:b,mergedClsPrefix:f,mergedTheme:d,styleMaxWidth:T,mergedCollapsed:g,scrollContainerStyle:I,siderPlacement:z,handleNativeElScroll:P,handleTransitionend:u,handleTriggerClick:_,inlineThemeDisabled:i,cssVars:L,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender},D)},render(){var e;const{mergedClsPrefix:o,mergedCollapsed:r,showTrigger:b}=this;return(e=this.onRender)===null||e===void 0||e.call(this),c("aside",{class:[`${o}-layout-sider`,this.themeClass,`${o}-layout-sider--${this.position}-positioned`,`${o}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${o}-layout-sider--bordered`,r&&`${o}-layout-sider--collapsed`,(!r||this.showCollapsedContent)&&`${o}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:E(this.width)}]},this.nativeScrollbar?c("div",{class:[`${o}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):c(Y,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),b?b==="bar"?c(le,{clsPrefix:o,class:r?this.collapsedTriggerClass:this.triggerClass,style:r?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):c(se,{clsPrefix:o,class:r?this.collapsedTriggerClass:this.triggerClass,style:r?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?c("div",{class:`${o}-layout-sider__border`}):null)}});export{ie as N,ce as a};
