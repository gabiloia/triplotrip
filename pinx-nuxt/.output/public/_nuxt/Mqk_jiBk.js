import{ay as d,aB as t,az as v,aY as H,aA as j,d as F,ab as r,a_ as M,m as N,aw as O,b4 as V,aE as W,aG as D,aH as C,bm as q,p,aO as G,aN as i,aP as K,q as Y,av as J,bE as Q,bD as U,bC as X,bF as Z,ds as ee}from"./CxJvYK31.js";const oe=d("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[t("border",`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),v("closable",[d("alert-body",[t("title",`
 padding-right: 24px;
 `)])]),t("icon",{color:"var(--n-icon-color)"}),d("alert-body",{padding:"var(--n-padding)"},[t("title",{color:"var(--n-title-text-color)"}),t("content",{color:"var(--n-content-text-color)"})]),H({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),t("icon",`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),t("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),v("show-icon",[d("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),v("right-adjust",[d("alert-body",{paddingRight:"calc(var(--n-close-size) + var(--n-padding) + 2px)"})]),d("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[t("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[j("& +",[t("content",{marginTop:"9px"})])]),t("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),t("icon",{transition:"color .3s var(--n-bezier)"})]),re=Object.assign(Object.assign({},C.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),ie=F({name:"Alert",inheritAttrs:!1,props:re,slots:Object,setup(n){const{mergedClsPrefixRef:e,mergedBorderedRef:l,inlineThemeDisabled:b,mergedRtlRef:g}=D(n),h=C("Alert","-alert",oe,ee,n,e),z=q("Alert",g,e),u=p(()=>{const{common:{cubicBezierEaseInOut:a},self:o}=h.value,{fontSize:x,borderRadius:R,titleFontWeight:I,lineHeight:A,iconSize:w,iconMargin:m,iconMarginRtl:$,closeIconSize:P,closeBorderRadius:_,closeSize:B,closeMargin:T,closeMarginRtl:E,padding:S}=o,{type:s}=n,{left:k,right:L}=G(m);return{"--n-bezier":a,"--n-color":o[i("color",s)],"--n-close-icon-size":P,"--n-close-border-radius":_,"--n-close-color-hover":o[i("closeColorHover",s)],"--n-close-color-pressed":o[i("closeColorPressed",s)],"--n-close-icon-color":o[i("closeIconColor",s)],"--n-close-icon-color-hover":o[i("closeIconColorHover",s)],"--n-close-icon-color-pressed":o[i("closeIconColorPressed",s)],"--n-icon-color":o[i("iconColor",s)],"--n-border":o[i("border",s)],"--n-title-text-color":o[i("titleTextColor",s)],"--n-content-text-color":o[i("contentTextColor",s)],"--n-line-height":A,"--n-border-radius":R,"--n-font-size":x,"--n-title-font-weight":I,"--n-icon-size":w,"--n-icon-margin":m,"--n-icon-margin-rtl":$,"--n-close-size":B,"--n-close-margin":T,"--n-close-margin-rtl":E,"--n-padding":S,"--n-icon-margin-left":k,"--n-icon-margin-right":L}}),c=b?K("alert",p(()=>n.type[0]),u,n):void 0,f=Y(!0),y=()=>{const{onAfterLeave:a,onAfterHide:o}=n;a&&a(),o&&o()};return{rtlEnabled:z,mergedClsPrefix:e,mergedBordered:l,visible:f,handleCloseClick:()=>{var a;Promise.resolve((a=n.onClose)===null||a===void 0?void 0:a.call(n)).then(o=>{o!==!1&&(f.value=!1)})},handleAfterLeave:()=>{y()},mergedTheme:h,cssVars:b?void 0:u,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){var n;return(n=this.onRender)===null||n===void 0||n.call(this),r(M,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:e,$slots:l}=this,b={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,!this.title&&this.closable&&`${e}-alert--right-adjust`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?r("div",Object.assign({},N(this.$attrs,b)),this.closable&&r(O,{clsPrefix:e,class:`${e}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&r("div",{class:`${e}-alert__border`}),this.showIcon&&r("div",{class:`${e}-alert__icon`,"aria-hidden":"true"},V(l.icon,()=>[r(J,{clsPrefix:e},{default:()=>{switch(this.type){case"success":return r(Z,null);case"info":return r(X,null);case"warning":return r(U,null);case"error":return r(Q,null);default:return null}}})])),r("div",{class:[`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`]},W(l.header,g=>{const h=g||this.title;return h?r("div",{class:`${e}-alert-body__title`},h):null}),l.default&&r("div",{class:`${e}-alert-body__content`},l))):null}})}});export{ie as N};
