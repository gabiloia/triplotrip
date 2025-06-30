import{ay as M,aB as t,aA as W,az as o,aC as E,aZ as I,d as se,dC as K,ab as n,aE as f,aG as ce,aH as O,b6 as de,q as U,aL as ue,aJ as he,p as V,aN as v,bP as j,aR as r,aP as be,b1 as fe,br as ve,dD as ge,aU as H}from"./BF1SYJr_.js";const we=M("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[t("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),t("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),t("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),M("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[I({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),t("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),t("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),t("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),W("&:focus",[t("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),o("round",[t("rail","border-radius: calc(var(--n-rail-height) / 2);",[t("button","border-radius: calc(var(--n-button-height) / 2);")])]),E("disabled",[E("icon",[o("rubber-band",[o("pressed",[t("rail",[t("button","max-width: var(--n-button-width-pressed);")])]),t("rail",[W("&:active",[t("button","max-width: var(--n-button-width-pressed);")])]),o("active",[o("pressed",[t("rail",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),t("rail",[W("&:active",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),o("active",[t("rail",[t("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),t("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[t("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[I()]),t("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),o("active",[t("rail","background-color: var(--n-rail-color-active);")]),o("loading",[t("rail",`
 cursor: wait;
 `)]),o("disabled",[t("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),me=Object.assign(Object.assign({},O.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let x;const ye=se({name:"Switch",props:me,slots:Object,setup(e){x===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?x=CSS.supports("width","max(1px)"):x=!1:x=!0);const{mergedClsPrefixRef:S,inlineThemeDisabled:m}=ce(e),z=O("Switch","-switch",we,ge,e,S),l=de(e),{mergedSizeRef:$,mergedDisabledRef:h}=l,p=U(e.defaultValue),C=ue(e,"value"),b=he(C,p),y=V(()=>b.value===e.checkedValue),g=U(!1),i=U(!1),s=V(()=>{const{railStyle:a}=e;if(a)return a({focused:i.value,checked:y.value})});function c(a){const{"onUpdate:value":B,onChange:R,onUpdateValue:_}=e,{nTriggerFormInput:F,nTriggerFormChange:N}=l;B&&H(B,a),_&&H(_,a),R&&H(R,a),p.value=a,F(),N()}function L(){const{nTriggerFormFocus:a}=l;a()}function X(){const{nTriggerFormBlur:a}=l;a()}function Y(){e.loading||h.value||(b.value!==e.checkedValue?c(e.checkedValue):c(e.uncheckedValue))}function q(){i.value=!0,L()}function G(){i.value=!1,X(),g.value=!1}function J(a){e.loading||h.value||a.key===" "&&(b.value!==e.checkedValue?c(e.checkedValue):c(e.uncheckedValue),g.value=!1)}function Z(a){e.loading||h.value||a.key===" "&&(a.preventDefault(),g.value=!0)}const A=V(()=>{const{value:a}=$,{self:{opacityDisabled:B,railColor:R,railColorActive:_,buttonBoxShadow:F,buttonColor:N,boxShadowFocus:Q,loadingColor:ee,textColor:te,iconColor:ae,[v("buttonHeight",a)]:d,[v("buttonWidth",a)]:ie,[v("buttonWidthPressed",a)]:ne,[v("railHeight",a)]:u,[v("railWidth",a)]:k,[v("railBorderRadius",a)]:oe,[v("buttonBorderRadius",a)]:re},common:{cubicBezierEaseInOut:le}}=z.value;let T,P,D;return x?(T=`calc((${u} - ${d}) / 2)`,P=`max(${u}, ${d})`,D=`max(${k}, calc(${k} + ${d} - ${u}))`):(T=j((r(u)-r(d))/2),P=j(Math.max(r(u),r(d))),D=r(u)>r(d)?k:j(r(k)+r(d)-r(u))),{"--n-bezier":le,"--n-button-border-radius":re,"--n-button-box-shadow":F,"--n-button-color":N,"--n-button-width":ie,"--n-button-width-pressed":ne,"--n-button-height":d,"--n-height":P,"--n-offset":T,"--n-opacity-disabled":B,"--n-rail-border-radius":oe,"--n-rail-color":R,"--n-rail-color-active":_,"--n-rail-height":u,"--n-rail-width":k,"--n-width":D,"--n-box-shadow-focus":Q,"--n-loading-color":ee,"--n-text-color":te,"--n-icon-color":ae}}),w=m?be("switch",V(()=>$.value[0]),A,e):void 0;return{handleClick:Y,handleBlur:G,handleFocus:q,handleKeyup:J,handleKeydown:Z,mergedRailStyle:s,pressed:g,mergedClsPrefix:S,mergedValue:b,checked:y,mergedDisabled:h,cssVars:m?void 0:A,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:S,checked:m,mergedRailStyle:z,onRender:l,$slots:$}=this;l==null||l();const{checked:h,unchecked:p,icon:C,"checked-icon":b,"unchecked-icon":y}=$,g=!(K(C)&&K(b)&&K(y));return n("div",{role:"switch","aria-checked":m,class:[`${e}-switch`,this.themeClass,g&&`${e}-switch--icon`,m&&`${e}-switch--active`,S&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},n("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:z},f(h,i=>f(p,s=>i||s?n("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},n("div",{class:`${e}-switch__rail-placeholder`},n("div",{class:`${e}-switch__button-placeholder`}),i),n("div",{class:`${e}-switch__rail-placeholder`},n("div",{class:`${e}-switch__button-placeholder`}),s)):null)),n("div",{class:`${e}-switch__button`},f(C,i=>f(b,s=>f(y,c=>n(fe,null,{default:()=>this.loading?n(ve,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(s||i)?n("div",{class:`${e}-switch__button-icon`,key:s?"checked-icon":"icon"},s||i):!this.checked&&(c||i)?n("div",{class:`${e}-switch__button-icon`,key:c?"unchecked-icon":"icon"},c||i):null})))),f(h,i=>i&&n("div",{key:"checked",class:`${e}-switch__checked`},i)),f(p,i=>i&&n("div",{key:"unchecked",class:`${e}-switch__unchecked`},i)))))}});export{ye as N};
