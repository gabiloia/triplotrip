import{ao as W,ap as l,at as a,aL as ee,as as z,d as mo,a9 as r,cl as xo,ag as q,cm as oe,F as Co,cn as yo,co as te,aH as L,au as $o,av as Io,q as d,aw as ne,ay as J,cp as Po,p as F,a5 as Y,y as Ro,ai as To,aS as re,aT as le,az as zo,J as Fo}from"./CghEsQSB.js";import{a as Oo}from"./Q0tXJf8o.js";import{u as Eo}from"./D18vG-Rc.js";const _o=W([l("base-selection",`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[l("base-loading",`
 color: var(--n-loading-color);
 `),l("base-selection-tags","min-height: var(--n-height);"),a("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),a("state-border",`
 z-index: 1;
 border-color: #0000;
 `),l("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[a("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),l("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[a("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),l("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[a("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),l("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),l("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[l("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[a("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),a("render-label",`
 color: var(--n-text-color);
 `)]),ee("disabled",[W("&:hover",[a("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),z("focus",[a("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),z("active",[a("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),l("base-selection-label","background-color: var(--n-color-active);"),l("base-selection-tags","background-color: var(--n-color-active);")])]),z("disabled","cursor: not-allowed;",[a("arrow",`
 color: var(--n-arrow-color-disabled);
 `),l("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[l("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),a("render-label",`
 color: var(--n-text-color-disabled);
 `)]),l("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),l("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),l("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[a("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),a("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(o=>z(`${o}-status`,[a("state-border",`border: var(--n-border-${o});`),ee("disabled",[W("&:hover",[a("state-border",`
 box-shadow: var(--n-box-shadow-hover-${o});
 border: var(--n-border-hover-${o});
 `)]),z("active",[a("state-border",`
 box-shadow: var(--n-box-shadow-active-${o});
 border: var(--n-border-active-${o});
 `),l("base-selection-label",`background-color: var(--n-color-active-${o});`),l("base-selection-tags",`background-color: var(--n-color-active-${o});`)]),z("focus",[a("state-border",`
 box-shadow: var(--n-box-shadow-focus-${o});
 border: var(--n-border-focus-${o});
 `)])])]))]),l("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),l("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[W("&:last-child","padding-right: 0;"),l("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[a("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Bo=mo({name:"InternalSelection",props:Object.assign(Object.assign({},ne.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(o){const{mergedClsPrefixRef:S,mergedRtlRef:O}=$o(o),b=Io("InternalSelection",O,S),w=d(null),c=d(null),I=d(null),n=d(null),E=d(null),m=d(null),v=d(null),f=d(null),x=d(null),C=d(null),y=d(!1),u=d(!1),$=d(!1),p=ne("InternalSelection","-internal-selection",_o,Po,o,J(o,"clsPrefix")),h=F(()=>o.clearable&&!o.disabled&&($.value||o.active)),g=F(()=>o.selectedOption?o.renderTag?o.renderTag({option:o.selectedOption,handleClose:()=>{}}):o.renderLabel?o.renderLabel(o.selectedOption,!0):L(o.selectedOption[o.labelField],o.selectedOption,!0):o.placeholder),M=F(()=>{const e=o.selectedOption;if(e)return e[o.labelField]}),P=F(()=>o.multiple?!!(Array.isArray(o.selectedOptions)&&o.selectedOptions.length):o.selectedOption!==null);function R(){var e;const{value:t}=w;if(t){const{value:i}=c;i&&(i.style.width=`${t.offsetWidth}px`,o.maxTagCount!=="responsive"&&((e=x.value)===null||e===void 0||e.sync({showAllItemsBeforeCalculate:!1})))}}function k(){const{value:e}=C;e&&(e.style.display="none")}function j(){const{value:e}=C;e&&(e.style.display="inline-block")}Y(J(o,"active"),e=>{e||k()}),Y(J(o,"pattern"),()=>{o.multiple&&Fo(R)});function H(e){const{onFocus:t}=o;t&&t(e)}function G(e){const{onBlur:t}=o;t&&t(e)}function N(e){const{onDeleteOption:t}=o;t&&t(e)}function B(e){const{onClear:t}=o;t&&t(e)}function s(e){const{onPatternInput:t}=o;t&&t(e)}function ae(e){var t;(!e.relatedTarget||!(!((t=I.value)===null||t===void 0)&&t.contains(e.relatedTarget)))&&H(e)}function ie(e){var t;!((t=I.value)===null||t===void 0)&&t.contains(e.relatedTarget)||G(e)}function se(e){B(e)}function de(){$.value=!0}function ce(){$.value=!1}function ue(e){!o.active||!o.filterable||e.target!==c.value&&e.preventDefault()}function Q(e){N(e)}const _=d(!1);function he(e){if(e.key==="Backspace"&&!_.value&&!o.pattern.length){const{selectedOptions:t}=o;t!=null&&t.length&&Q(t[t.length-1])}}let K=null;function be(e){const{value:t}=w;if(t){const i=e.target.value;t.textContent=i,R()}o.ignoreComposition&&_.value?K=e:s(e)}function ve(){_.value=!0}function fe(){_.value=!1,o.ignoreComposition&&s(K),K=null}function pe(e){var t;u.value=!0,(t=o.onPatternFocus)===null||t===void 0||t.call(o,e)}function ge(e){var t;u.value=!1,(t=o.onPatternBlur)===null||t===void 0||t.call(o,e)}function we(){var e,t;if(o.filterable)u.value=!1,(e=m.value)===null||e===void 0||e.blur(),(t=c.value)===null||t===void 0||t.blur();else if(o.multiple){const{value:i}=n;i==null||i.blur()}else{const{value:i}=E;i==null||i.blur()}}function me(){var e,t,i;o.filterable?(u.value=!1,(e=m.value)===null||e===void 0||e.focus()):o.multiple?(t=n.value)===null||t===void 0||t.focus():(i=E.value)===null||i===void 0||i.focus()}function xe(){const{value:e}=c;e&&(j(),e.focus())}function Ce(){const{value:e}=c;e&&e.blur()}function ye(e){const{value:t}=v;t&&t.setTextContent(`+${e}`)}function $e(){const{value:e}=f;return e}function Ie(){return c.value}let V=null;function U(){V!==null&&window.clearTimeout(V)}function Pe(){o.active||(U(),V=window.setTimeout(()=>{P.value&&(y.value=!0)},100))}function Re(){U()}function Te(e){e||(U(),y.value=!1)}Y(P,e=>{e||(y.value=!1)}),Ro(()=>{To(()=>{const e=m.value;e&&(o.disabled?e.removeAttribute("tabindex"):e.tabIndex=u.value?-1:0)})}),Eo(I,o.onResize);const{inlineThemeDisabled:X}=o,Z=F(()=>{const{size:e}=o,{common:{cubicBezierEaseInOut:t},self:{fontWeight:i,borderRadius:ze,color:Fe,placeholderColor:Oe,textColor:Ee,paddingSingle:_e,paddingMultiple:Se,caretColor:Me,colorDisabled:ke,textColorDisabled:Be,placeholderColorDisabled:De,colorActive:Ae,boxShadowFocus:We,boxShadowActive:Le,boxShadowHover:je,border:He,borderFocus:Ne,borderHover:Ke,borderActive:Ve,arrowColor:Ue,arrowColorDisabled:qe,loadingColor:Je,colorActiveWarning:Ye,boxShadowFocusWarning:Ge,boxShadowActiveWarning:Qe,boxShadowHoverWarning:Xe,borderWarning:Ze,borderFocusWarning:eo,borderHoverWarning:oo,borderActiveWarning:to,colorActiveError:no,boxShadowFocusError:ro,boxShadowActiveError:lo,boxShadowHoverError:ao,borderError:io,borderFocusError:so,borderHoverError:co,borderActiveError:uo,clearColor:ho,clearColorHover:bo,clearColorPressed:vo,clearSize:fo,arrowSize:po,[re("height",e)]:go,[re("fontSize",e)]:wo}}=p.value,D=le(_e),A=le(Se);return{"--n-bezier":t,"--n-border":He,"--n-border-active":Ve,"--n-border-focus":Ne,"--n-border-hover":Ke,"--n-border-radius":ze,"--n-box-shadow-active":Le,"--n-box-shadow-focus":We,"--n-box-shadow-hover":je,"--n-caret-color":Me,"--n-color":Fe,"--n-color-active":Ae,"--n-color-disabled":ke,"--n-font-size":wo,"--n-height":go,"--n-padding-single-top":D.top,"--n-padding-multiple-top":A.top,"--n-padding-single-right":D.right,"--n-padding-multiple-right":A.right,"--n-padding-single-left":D.left,"--n-padding-multiple-left":A.left,"--n-padding-single-bottom":D.bottom,"--n-padding-multiple-bottom":A.bottom,"--n-placeholder-color":Oe,"--n-placeholder-color-disabled":De,"--n-text-color":Ee,"--n-text-color-disabled":Be,"--n-arrow-color":Ue,"--n-arrow-color-disabled":qe,"--n-loading-color":Je,"--n-color-active-warning":Ye,"--n-box-shadow-focus-warning":Ge,"--n-box-shadow-active-warning":Qe,"--n-box-shadow-hover-warning":Xe,"--n-border-warning":Ze,"--n-border-focus-warning":eo,"--n-border-hover-warning":oo,"--n-border-active-warning":to,"--n-color-active-error":no,"--n-box-shadow-focus-error":ro,"--n-box-shadow-active-error":lo,"--n-box-shadow-hover-error":ao,"--n-border-error":io,"--n-border-focus-error":so,"--n-border-hover-error":co,"--n-border-active-error":uo,"--n-clear-size":fo,"--n-clear-color":ho,"--n-clear-color-hover":bo,"--n-clear-color-pressed":vo,"--n-arrow-size":po,"--n-font-weight":i}}),T=X?zo("internal-selection",F(()=>o.size[0]),Z,o):void 0;return{mergedTheme:p,mergedClearable:h,mergedClsPrefix:S,rtlEnabled:b,patternInputFocused:u,filterablePlaceholder:g,label:M,selected:P,showTagsPanel:y,isComposing:_,counterRef:v,counterWrapperRef:f,patternInputMirrorRef:w,patternInputRef:c,selfRef:I,multipleElRef:n,singleElRef:E,patternInputWrapperRef:m,overflowRef:x,inputTagElRef:C,handleMouseDown:ue,handleFocusin:ae,handleClear:se,handleMouseEnter:de,handleMouseLeave:ce,handleDeleteOption:Q,handlePatternKeyDown:he,handlePatternInputInput:be,handlePatternInputBlur:ge,handlePatternInputFocus:pe,handleMouseEnterCounter:Pe,handleMouseLeaveCounter:Re,handleFocusout:ie,handleCompositionEnd:fe,handleCompositionStart:ve,onPopoverUpdateShow:Te,focus:me,focusInput:xe,blur:we,blurInput:Ce,updateCounter:ye,getCounter:$e,getTail:Ie,renderLabel:o.renderLabel,cssVars:X?void 0:Z,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const{status:o,multiple:S,size:O,disabled:b,filterable:w,maxTagCount:c,bordered:I,clsPrefix:n,ellipsisTagPopoverProps:E,onRender:m,renderTag:v,renderLabel:f}=this;m==null||m();const x=c==="responsive",C=typeof c=="number",y=x||C,u=r(xo,null,{default:()=>r(Oo,{clsPrefix:n,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var p,h;return(h=(p=this.$slots).arrow)===null||h===void 0?void 0:h.call(p)}})});let $;if(S){const{labelField:p}=this,h=s=>r("div",{class:`${n}-base-selection-tag-wrapper`,key:s.value},v?v({option:s,handleClose:()=>{this.handleDeleteOption(s)}}):r(q,{size:O,closable:!s.disabled,disabled:b,onClose:()=>{this.handleDeleteOption(s)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>f?f(s,!0):L(s[p],s,!0)})),g=()=>(C?this.selectedOptions.slice(0,c):this.selectedOptions).map(h),M=w?r("div",{class:`${n}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},r("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:b,value:this.pattern,autofocus:this.autofocus,class:`${n}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),r("span",{ref:"patternInputMirrorRef",class:`${n}-base-selection-input-tag__mirror`},this.pattern)):null,P=x?()=>r("div",{class:`${n}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},r(q,{size:O,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:b})):void 0;let R;if(C){const s=this.selectedOptions.length-c;s>0&&(R=r("div",{class:`${n}-base-selection-tag-wrapper`,key:"__counter__"},r(q,{size:O,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:b},{default:()=>`+${s}`})))}const k=x?w?r(oe,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:g,counter:P,tail:()=>M}):r(oe,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:g,counter:P}):C&&R?g().concat(R):g(),j=y?()=>r("div",{class:`${n}-base-selection-popover`},x?g():this.selectedOptions.map(h)):void 0,H=y?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},E):null,N=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?r("div",{class:`${n}-base-selection-placeholder ${n}-base-selection-overlay`},r("div",{class:`${n}-base-selection-placeholder__inner`},this.placeholder)):null,B=w?r("div",{ref:"patternInputWrapperRef",class:`${n}-base-selection-tags`},k,x?null:M,u):r("div",{ref:"multipleElRef",class:`${n}-base-selection-tags`,tabindex:b?void 0:0},k,u);$=r(Co,null,y?r(yo,Object.assign({},H,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>B,default:j}):B,N)}else if(w){const p=this.pattern||this.isComposing,h=this.active?!p:!this.selected,g=this.active?!1:this.selected;$=r("div",{ref:"patternInputWrapperRef",class:`${n}-base-selection-label`,title:this.patternInputFocused?void 0:te(this.label)},r("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${n}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:b,disabled:b,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),g?r("div",{class:`${n}-base-selection-label__render-label ${n}-base-selection-overlay`,key:"input"},r("div",{class:`${n}-base-selection-overlay__wrapper`},v?v({option:this.selectedOption,handleClose:()=>{}}):f?f(this.selectedOption,!0):L(this.label,this.selectedOption,!0))):null,h?r("div",{class:`${n}-base-selection-placeholder ${n}-base-selection-overlay`,key:"placeholder"},r("div",{class:`${n}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,u)}else $=r("div",{ref:"singleElRef",class:`${n}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?r("div",{class:`${n}-base-selection-input`,title:te(this.label),key:"input"},r("div",{class:`${n}-base-selection-input__content`},v?v({option:this.selectedOption,handleClose:()=>{}}):f?f(this.selectedOption,!0):L(this.label,this.selectedOption,!0))):r("div",{class:`${n}-base-selection-placeholder ${n}-base-selection-overlay`,key:"placeholder"},r("div",{class:`${n}-base-selection-placeholder__inner`},this.placeholder)),u);return r("div",{ref:"selfRef",class:[`${n}-base-selection`,this.rtlEnabled&&`${n}-base-selection--rtl`,this.themeClass,o&&`${n}-base-selection--${o}-status`,{[`${n}-base-selection--active`]:this.active,[`${n}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${n}-base-selection--disabled`]:this.disabled,[`${n}-base-selection--multiple`]:this.multiple,[`${n}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},$,I?r("div",{class:`${n}-base-selection__border`}):null,I?r("div",{class:`${n}-base-selection__state-border`}):null)}});export{Bo as N};
