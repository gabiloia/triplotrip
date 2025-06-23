import{aB as ee,aC as oe,ba as D,q as k,ay as V,aQ as P,b6 as T,au as $,aY as B,ap as F,at as m,as as C,ao as I,aL as _,d as te,aM as re,a9 as A,aw as G,ax as ne,av as ae,p as U,aS as E,az as ie,dp as de}from"./8g3bmYip.js";import{g as se}from"./Bk_rJcZu.js";const fe={name:String,value:{type:[String,Number,Boolean],default:"on"},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},N=ee("n-radio-group");function he(e){const o=oe(N,null),r=D(e,{mergedSize(t){const{size:a}=e;if(a!==void 0)return a;if(o){const{mergedSizeRef:{value:d}}=o;if(d!==void 0)return d}return t?t.mergedSize.value:"medium"},mergedDisabled(t){return!!(e.disabled||o!=null&&o.disabledRef.value||t!=null&&t.disabled.value)}}),{mergedSizeRef:b,mergedDisabledRef:n}=r,s=k(null),l=k(null),u=k(e.defaultChecked),v=V(e,"checked"),g=P(v,u),h=T(()=>o?o.valueRef.value===e.value:g.value),R=T(()=>{const{name:t}=e;if(t!==void 0)return t;if(o)return o.nameRef.value}),f=k(!1);function x(){if(o){const{doUpdateValue:t}=o,{value:a}=e;B(t,a)}else{const{onUpdateChecked:t,"onUpdate:checked":a}=e,{nTriggerFormInput:d,nTriggerFormChange:i}=r;t&&B(t,!0),a&&B(a,!0),d(),i(),u.value=!0}}function p(){n.value||h.value||x()}function y(){p(),s.value&&(s.value.checked=h.value)}function z(){f.value=!1}function S(){f.value=!0}return{mergedClsPrefix:o?o.mergedClsPrefixRef:$(e).mergedClsPrefixRef,inputRef:s,labelRef:l,mergedName:R,mergedDisabled:n,renderSafeChecked:h,focus:f,mergedSize:b,handleRadioInputChange:y,handleRadioInputBlur:z,handleRadioInputFocus:S}}const le=F("radio-group",`
 display: inline-block;
 font-size: var(--n-font-size);
`,[m("splitor",`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[C("checked",{backgroundColor:"var(--n-button-border-color-active)"}),C("disabled",{opacity:"var(--n-opacity-disabled)"})]),C("button-group",`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[F("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),m("splitor",{height:"var(--n-height)"})]),F("radio-button",`
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background: var(--n-button-color);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `,[F("radio-input",`
 pointer-events: none;
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `),m("state-border",`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),I("&:first-child",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[m("state-border",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),I("&:last-child",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[m("state-border",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),_("disabled",`
 cursor: pointer;
 `,[I("&:hover",[m("state-border",`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),_("checked",{color:"var(--n-button-text-color-hover)"})]),C("focus",[I("&:not(:active)",[m("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),C("checked",`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),C("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function ue(e,o,r){var b;const n=[];let s=!1;for(let l=0;l<e.length;++l){const u=e[l],v=(b=u.type)===null||b===void 0?void 0:b.name;v==="RadioButton"&&(s=!0);const g=u.props;if(v!=="RadioButton"){n.push(u);continue}if(l===0)n.push(u);else{const h=n[n.length-1].props,R=o===h.value,f=h.disabled,x=o===g.value,p=g.disabled,y=(R?2:0)+(f?0:1),z=(x?2:0)+(p?0:1),S={[`${r}-radio-group__splitor--disabled`]:f,[`${r}-radio-group__splitor--checked`]:R},t={[`${r}-radio-group__splitor--disabled`]:p,[`${r}-radio-group__splitor--checked`]:x},a=y<z?t:S;n.push(A("div",{class:[`${r}-radio-group__splitor`,a]}),u)}}return{children:n,isButtonGroup:s}}const ce=Object.assign(Object.assign({},G.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),ge=te({name:"RadioGroup",props:ce,setup(e){const o=k(null),{mergedSizeRef:r,mergedDisabledRef:b,nTriggerFormChange:n,nTriggerFormInput:s,nTriggerFormBlur:l,nTriggerFormFocus:u}=D(e),{mergedClsPrefixRef:v,inlineThemeDisabled:g,mergedRtlRef:h}=$(e),R=G("Radio","-radio-group",le,de,e,v),f=k(e.defaultValue),x=V(e,"value"),p=P(x,f);function y(i){const{onUpdateValue:c,"onUpdate:value":w}=e;c&&B(c,i),w&&B(w,i),f.value=i,n(),s()}function z(i){const{value:c}=o;c&&(c.contains(i.relatedTarget)||u())}function S(i){const{value:c}=o;c&&(c.contains(i.relatedTarget)||l())}ne(N,{mergedClsPrefixRef:v,nameRef:V(e,"name"),valueRef:p,disabledRef:b,mergedSizeRef:r,doUpdateValue:y});const t=ae("Radio",h,v),a=U(()=>{const{value:i}=r,{common:{cubicBezierEaseInOut:c},self:{buttonBorderColor:w,buttonBorderColorActive:j,buttonBorderRadius:H,buttonBoxShadow:M,buttonBoxShadowFocus:K,buttonBoxShadowHover:O,buttonColor:L,buttonColorActive:q,buttonTextColor:Q,buttonTextColorActive:Y,buttonTextColorHover:J,opacityDisabled:W,[E("buttonHeight",i)]:X,[E("fontSize",i)]:Z}}=R.value;return{"--n-font-size":Z,"--n-bezier":c,"--n-button-border-color":w,"--n-button-border-color-active":j,"--n-button-border-radius":H,"--n-button-box-shadow":M,"--n-button-box-shadow-focus":K,"--n-button-box-shadow-hover":O,"--n-button-color":L,"--n-button-color-active":q,"--n-button-text-color":Q,"--n-button-text-color-hover":J,"--n-button-text-color-active":Y,"--n-height":X,"--n-opacity-disabled":W}}),d=g?ie("radio-group",U(()=>r.value[0]),a,e):void 0;return{selfElRef:o,rtlEnabled:t,mergedClsPrefix:v,mergedValue:p,handleFocusout:S,handleFocusin:z,cssVars:g?void 0:a,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){var e;const{mergedValue:o,mergedClsPrefix:r,handleFocusin:b,handleFocusout:n}=this,{children:s,isButtonGroup:l}=ue(re(se(this)),o,r);return(e=this.onRender)===null||e===void 0||e.call(this),A("div",{onFocusin:b,onFocusout:n,ref:"selfElRef",class:[`${r}-radio-group`,this.rtlEnabled&&`${r}-radio-group--rtl`,this.themeClass,l&&`${r}-radio-group--button-group`],style:this.cssVars},s)}});export{ge as N,fe as r,he as s};
