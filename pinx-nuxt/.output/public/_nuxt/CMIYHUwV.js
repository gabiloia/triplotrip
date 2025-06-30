import{d as j,au as Y,ab as r,as as Z,cl as D,b2 as E,bf as Ce,av as we,ay as x,aB as F,az as z,aA as O,aC as Oe,bu as Te,aE as G,br as Be,bi as Le,b4 as _e,aG as $e,bm as Ee,aH as q,aL as b,cm as Ie,q as B,p as R,cn as Ke,a1 as U,aj as je,aR as De,aN as T,aO as I,aK as W,y as He,aP as Ve,$ as Ae,bQ as J,J as Ge,co as qe}from"./D0txxWEs.js";import{F as Ue}from"./BpNeyZMv.js";import{F as We}from"./CPf-hSIC.js";import{V as Je}from"./BvwMXZOy.js";import{u as Qe}from"./DUxQRr6l.js";function K(e){const i=e.filter(t=>t!==void 0);if(i.length!==0)return i.length===1?i[0]:t=>{e.forEach(s=>{s&&s(t)})}}const Q=j({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:i,labelFieldRef:t,nodePropsRef:s}=Z(D);return{labelField:t,nodeProps:s,renderLabel:e,renderOption:i}},render(){const{clsPrefix:e,renderLabel:i,renderOption:t,nodeProps:s,tmNode:{rawNode:c}}=this,d=s==null?void 0:s(c),l=i?i(c,!1):Y(c[this.labelField],c,!1),p=r("div",Object.assign({},d,{class:[`${e}-base-select-group-header`,d==null?void 0:d.class]}),l);return c.render?c.render({node:p,option:c}):t?t({node:p,option:c,selected:!1}):p}});function Xe(e,i){return r(Ce,{name:"fade-in-scale-up-transition"},{default:()=>e?r(we,{clsPrefix:i,class:`${i}-base-select-option__check`},{default:()=>r(We)}):null})}const X=j({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:i,pendingTmNodeRef:t,multipleRef:s,valueSetRef:c,renderLabelRef:d,renderOptionRef:l,labelFieldRef:p,valueFieldRef:m,showCheckmarkRef:P,nodePropsRef:h,handleOptionClick:M,handleOptionMouseEnter:y}=Z(D),g=E(()=>{const{value:f}=t;return f?e.tmNode.key===f.key:!1});function a(f){const{tmNode:v}=e;v.disabled||M(f,v)}function k(f){const{tmNode:v}=e;v.disabled||y(f,v)}function L(f){const{tmNode:v}=e,{value:S}=g;v.disabled||S||y(f,v)}return{multiple:s,isGrouped:E(()=>{const{tmNode:f}=e,{parent:v}=f;return v&&v.rawNode.type==="group"}),showCheckmark:P,nodeProps:h,isPending:g,isSelected:E(()=>{const{value:f}=i,{value:v}=s;if(f===null)return!1;const S=e.tmNode.rawNode[m.value];if(v){const{value:_}=c;return _.has(S)}else return f===S}),labelField:p,renderLabel:d,renderOption:l,handleMouseMove:L,handleMouseEnter:k,handleClick:a}},render(){const{clsPrefix:e,tmNode:{rawNode:i},isSelected:t,isPending:s,isGrouped:c,showCheckmark:d,nodeProps:l,renderOption:p,renderLabel:m,handleClick:P,handleMouseEnter:h,handleMouseMove:M}=this,y=Xe(t,e),g=m?[m(i,t),d&&y]:[Y(i[this.labelField],i,t),d&&y],a=l==null?void 0:l(i),k=r("div",Object.assign({},a,{class:[`${e}-base-select-option`,i.class,a==null?void 0:a.class,{[`${e}-base-select-option--disabled`]:i.disabled,[`${e}-base-select-option--selected`]:t,[`${e}-base-select-option--grouped`]:c,[`${e}-base-select-option--pending`]:s,[`${e}-base-select-option--show-checkmark`]:d}],style:[(a==null?void 0:a.style)||"",i.style||""],onClick:K([P,a==null?void 0:a.onClick]),onMouseenter:K([h,a==null?void 0:a.onMouseenter]),onMousemove:K([M,a==null?void 0:a.onMousemove])}),r("div",{class:`${e}-base-select-option__content`},g));return i.render?i.render({node:k,option:i,selected:t}):p?p({node:k,option:i,selected:t}):k}}),Ye=x("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[x("scrollbar",`
 max-height: var(--n-height);
 `),x("virtual-list",`
 max-height: var(--n-height);
 `),x("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[F("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),x("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),x("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),F("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),F("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),F("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),F("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),x("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),x("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[z("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),O("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),O("&:active",`
 color: var(--n-option-text-color-pressed);
 `),z("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),z("pending",[O("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),z("selected",`
 color: var(--n-option-text-color-active);
 `,[O("&::before",`
 background-color: var(--n-option-color-active);
 `),z("pending",[O("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),z("disabled",`
 cursor: not-allowed;
 `,[Oe("selected",`
 color: var(--n-option-text-color-disabled);
 `),z("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),F("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Te({enterScale:"0.5"})])])]),ln=j({name:"InternalSelectMenu",props:Object.assign(Object.assign({},q.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:i,mergedRtlRef:t}=$e(e),s=Ee("InternalSelectMenu",t,i),c=q("InternalSelectMenu","-internal-select-menu",Ye,Ie,e,b(e,"clsPrefix")),d=B(null),l=B(null),p=B(null),m=R(()=>e.treeMate.getFlattenedNodes()),P=R(()=>Ke(m.value)),h=B(null);function M(){const{treeMate:n}=e;let o=null;const{value:u}=e;u===null?o=n.getFirstAvailableNode():(e.multiple?o=n.getNode((u||[])[(u||[]).length-1]):o=n.getNode(u),(!o||o.disabled)&&(o=n.getFirstAvailableNode())),C(o||null)}function y(){const{value:n}=h;n&&!e.treeMate.getNode(n.key)&&(h.value=null)}let g;U(()=>e.show,n=>{n?g=U(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?M():y(),Ge(H)):y()},{immediate:!0}):g==null||g()},{immediate:!0}),je(()=>{g==null||g()});const a=R(()=>De(c.value.self[T("optionHeight",e.size)])),k=R(()=>I(c.value.self[T("padding",e.size)])),L=R(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),f=R(()=>{const n=m.value;return n&&n.length===0});function v(n){const{onToggle:o}=e;o&&o(n)}function S(n){const{onScroll:o}=e;o&&o(n)}function _(n){var o;(o=p.value)===null||o===void 0||o.sync(),S(n)}function ee(){var n;(n=p.value)===null||n===void 0||n.sync()}function ne(){const{value:n}=h;return n||null}function oe(n,o){o.disabled||C(o,!1)}function te(n,o){o.disabled||v(o)}function ie(n){var o;J(n,"action")||(o=e.onKeyup)===null||o===void 0||o.call(e,n)}function le(n){var o;J(n,"action")||(o=e.onKeydown)===null||o===void 0||o.call(e,n)}function ae(n){var o;(o=e.onMousedown)===null||o===void 0||o.call(e,n),!e.focusable&&n.preventDefault()}function re(){const{value:n}=h;n&&C(n.getNext({loop:!0}),!0)}function se(){const{value:n}=h;n&&C(n.getPrev({loop:!0}),!0)}function C(n,o=!1){h.value=n,o&&H()}function H(){var n,o;const u=h.value;if(!u)return;const w=P.value(u.key);w!==null&&(e.virtualScroll?(n=l.value)===null||n===void 0||n.scrollTo({index:w}):(o=p.value)===null||o===void 0||o.scrollTo({index:w,elSize:a.value}))}function de(n){var o,u;!((o=d.value)===null||o===void 0)&&o.contains(n.target)&&((u=e.onFocus)===null||u===void 0||u.call(e,n))}function ce(n){var o,u;!((o=d.value)===null||o===void 0)&&o.contains(n.relatedTarget)||(u=e.onBlur)===null||u===void 0||u.call(e,n)}W(D,{handleOptionMouseEnter:oe,handleOptionClick:te,valueSetRef:L,pendingTmNodeRef:h,nodePropsRef:b(e,"nodeProps"),showCheckmarkRef:b(e,"showCheckmark"),multipleRef:b(e,"multiple"),valueRef:b(e,"value"),renderLabelRef:b(e,"renderLabel"),renderOptionRef:b(e,"renderOption"),labelFieldRef:b(e,"labelField"),valueFieldRef:b(e,"valueField")}),W(qe,d),He(()=>{const{value:n}=p;n&&n.sync()});const V=R(()=>{const{size:n}=e,{common:{cubicBezierEaseInOut:o},self:{height:u,borderRadius:w,color:fe,groupHeaderTextColor:ve,actionDividerColor:pe,optionTextColorPressed:he,optionTextColor:ge,optionTextColorDisabled:be,optionTextColorActive:me,optionOpacityDisabled:ye,optionCheckColor:xe,actionTextColor:Re,optionColorPending:ke,optionColorActive:Se,loadingColor:ze,loadingSize:Ne,optionColorActivePending:Fe,[T("optionFontSize",n)]:Pe,[T("optionHeight",n)]:Me,[T("optionPadding",n)]:$}}=c.value;return{"--n-height":u,"--n-action-divider-color":pe,"--n-action-text-color":Re,"--n-bezier":o,"--n-border-radius":w,"--n-color":fe,"--n-option-font-size":Pe,"--n-group-header-text-color":ve,"--n-option-check-color":xe,"--n-option-color-pending":ke,"--n-option-color-active":Se,"--n-option-color-active-pending":Fe,"--n-option-height":Me,"--n-option-opacity-disabled":ye,"--n-option-text-color":ge,"--n-option-text-color-active":me,"--n-option-text-color-disabled":be,"--n-option-text-color-pressed":he,"--n-option-padding":$,"--n-option-padding-left":I($,"left"),"--n-option-padding-right":I($,"right"),"--n-loading-color":ze,"--n-loading-size":Ne}}),{inlineThemeDisabled:A}=e,N=A?Ve("internal-select-menu",R(()=>e.size[0]),V,e):void 0,ue={selfRef:d,next:re,prev:se,getPendingTmNode:ne};return Qe(d,e.onResize),Object.assign({mergedTheme:c,mergedClsPrefix:i,rtlEnabled:s,virtualListRef:l,scrollbarRef:p,itemSize:a,padding:k,flattenedNodes:m,empty:f,virtualListContainer(){const{value:n}=l;return n==null?void 0:n.listElRef},virtualListContent(){const{value:n}=l;return n==null?void 0:n.itemsElRef},doScroll:S,handleFocusin:de,handleFocusout:ce,handleKeyUp:ie,handleKeyDown:le,handleMouseDown:ae,handleVirtualListResize:ee,handleVirtualListScroll:_,cssVars:A?void 0:V,themeClass:N==null?void 0:N.themeClass,onRender:N==null?void 0:N.onRender},ue)},render(){const{$slots:e,virtualScroll:i,clsPrefix:t,mergedTheme:s,themeClass:c,onRender:d}=this;return d==null||d(),r("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${t}-base-select-menu`,this.rtlEnabled&&`${t}-base-select-menu--rtl`,c,this.multiple&&`${t}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},G(e.header,l=>l&&r("div",{class:`${t}-base-select-menu__header`,"data-header":!0,key:"header"},l)),this.loading?r("div",{class:`${t}-base-select-menu__loading`},r(Be,{clsPrefix:t,strokeWidth:20})):this.empty?r("div",{class:`${t}-base-select-menu__empty`,"data-empty":!0},_e(e.empty,()=>[r(Ae,{theme:s.peers.Empty,themeOverrides:s.peerOverrides.Empty,size:this.size})])):r(Le,{ref:"scrollbarRef",theme:s.peers.Scrollbar,themeOverrides:s.peerOverrides.Scrollbar,scrollable:this.scrollable,container:i?this.virtualListContainer:void 0,content:i?this.virtualListContent:void 0,onScroll:i?void 0:this.doScroll},{default:()=>i?r(Je,{ref:"virtualListRef",class:`${t}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:l})=>l.isGroup?r(Q,{key:l.key,clsPrefix:t,tmNode:l}):l.ignored?null:r(X,{clsPrefix:t,key:l.key,tmNode:l})}):r("div",{class:`${t}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(l=>l.isGroup?r(Q,{key:l.key,clsPrefix:t,tmNode:l}):r(X,{clsPrefix:t,key:l.key,tmNode:l})))}),G(e.action,l=>l&&[r("div",{class:`${t}-base-select-menu__action`,"data-action":!0,key:"action"},l),r(Ue,{onFocus:this.onTabOut,key:"focus-detector"})]))}});export{ln as N,K as m};
