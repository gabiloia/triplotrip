import{d as we,a9 as n,ap as x,ao as q,as as M,aL as ot,b8 as st,F as oe,aI as O,au as lt,aw as Fe,bo as dt,q as j,aQ as se,ay as le,p as C,ai as ie,av as ut,aS as m,az as ct,dT as ft,J as mt,aY as A,ce as vt}from"./BLt7BUd4.js";import{N as de}from"./CB4SBHti.js";import{N as pt}from"./DiFGkX80.js";import{a as ue,B as ce,b as fe,F as me}from"./4HXsLNGD.js";import{N as ht}from"./TucL9Hj4.js";import{s as ve}from"./BjyUHhTu.js";const pe=we({name:"More",render(){return n("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},n("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},n("g",{fill:"currentColor","fill-rule":"nonzero"},n("path",{d:"M4,7 C4.55228,7 5,7.44772 5,8 C5,8.55229 4.55228,9 4,9 C3.44772,9 3,8.55229 3,8 C3,7.44772 3.44772,7 4,7 Z M8,7 C8.55229,7 9,7.44772 9,8 C9,8.55229 8.55229,9 8,9 C7.44772,9 7,8.55229 7,8 C7,7.44772 7.44772,7 8,7 Z M12,7 C12.5523,7 13,7.44772 13,8 C13,8.55229 12.5523,9 12,9 C11.4477,9 11,8.55229 11,8 C11,7.44772 11.4477,7 12,7 Z"}))))}}),he=`
 background: var(--n-item-color-hover);
 color: var(--n-item-text-color-hover);
 border: var(--n-item-border-hover);
`,ge=[M("button",`
 background: var(--n-button-color-hover);
 border: var(--n-button-border-hover);
 color: var(--n-button-icon-color-hover);
 `)],gt=x("pagination",`
 display: flex;
 vertical-align: middle;
 font-size: var(--n-item-font-size);
 flex-wrap: nowrap;
`,[x("pagination-prefix",`
 display: flex;
 align-items: center;
 margin: var(--n-prefix-margin);
 `),x("pagination-suffix",`
 display: flex;
 align-items: center;
 margin: var(--n-suffix-margin);
 `),q("> *:not(:first-child)",`
 margin: var(--n-item-margin);
 `),x("select",`
 width: var(--n-select-width);
 `),q("&.transition-disabled",[x("pagination-item","transition: none!important;")]),x("pagination-quick-jumper",`
 white-space: nowrap;
 display: flex;
 color: var(--n-jumper-text-color);
 transition: color .3s var(--n-bezier);
 align-items: center;
 font-size: var(--n-jumper-font-size);
 `,[x("input",`
 margin: var(--n-input-margin);
 width: var(--n-input-width);
 `)]),x("pagination-item",`
 position: relative;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 display: flex;
 align-items: center;
 justify-content: center;
 box-sizing: border-box;
 min-width: var(--n-item-size);
 height: var(--n-item-size);
 padding: var(--n-item-padding);
 background-color: var(--n-item-color);
 color: var(--n-item-text-color);
 border-radius: var(--n-item-border-radius);
 border: var(--n-item-border);
 fill: var(--n-button-icon-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 fill .3s var(--n-bezier);
 `,[M("button",`
 background: var(--n-button-color);
 color: var(--n-button-icon-color);
 border: var(--n-button-border);
 padding: 0;
 `,[x("base-icon",`
 font-size: var(--n-button-icon-size);
 `)]),ot("disabled",[M("hover",he,ge),q("&:hover",he,ge),q("&:active",`
 background: var(--n-item-color-pressed);
 color: var(--n-item-text-color-pressed);
 border: var(--n-item-border-pressed);
 `,[M("button",`
 background: var(--n-button-color-pressed);
 border: var(--n-button-border-pressed);
 color: var(--n-button-icon-color-pressed);
 `)]),M("active",`
 background: var(--n-item-color-active);
 color: var(--n-item-text-color-active);
 border: var(--n-item-border-active);
 `,[q("&:hover",`
 background: var(--n-item-color-active-hover);
 `)])]),M("disabled",`
 cursor: not-allowed;
 color: var(--n-item-text-color-disabled);
 `,[M("active, button",`
 background-color: var(--n-item-color-disabled);
 border: var(--n-item-border-disabled);
 `)])]),M("disabled",`
 cursor: not-allowed;
 `,[x("pagination-quick-jumper",`
 color: var(--n-jumper-text-color-disabled);
 `)]),M("simple",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 `,[x("pagination-quick-jumper",[x("input",`
 margin: 0;
 `)])])]);function bt(t){var a;if(!t)return 10;const{defaultPageSize:o}=t;if(o!==void 0)return o;const u=(a=t.pageSizes)===null||a===void 0?void 0:a[0];return typeof u=="number"?u:(u==null?void 0:u.value)||10}function wt(t,a,o,u){let v=!1,p=!1,B=1,y=a;if(a===1)return{hasFastBackward:!1,hasFastForward:!1,fastForwardTo:y,fastBackwardTo:B,items:[{type:"page",label:1,active:t===1,mayBeFastBackward:!1,mayBeFastForward:!1}]};if(a===2)return{hasFastBackward:!1,hasFastForward:!1,fastForwardTo:y,fastBackwardTo:B,items:[{type:"page",label:1,active:t===1,mayBeFastBackward:!1,mayBeFastForward:!1},{type:"page",label:2,active:t===2,mayBeFastBackward:!0,mayBeFastForward:!1}]};const g=1,i=a;let s=t,d=t;const b=(o-5)/2;d+=Math.ceil(b),d=Math.min(Math.max(d,g+o-3),i-2),s-=Math.floor(b),s=Math.max(Math.min(s,i-o+3),g+2);let f=!1,z=!1;s>g+2&&(f=!0),d<i-2&&(z=!0);const l=[];l.push({type:"page",label:1,active:t===1,mayBeFastBackward:!1,mayBeFastForward:!1}),f?(v=!0,B=s-1,l.push({type:"fast-backward",active:!1,label:void 0,options:u?be(g+1,s-1):null})):i>=g+1&&l.push({type:"page",label:g+1,mayBeFastBackward:!0,mayBeFastForward:!1,active:t===g+1});for(let w=s;w<=d;++w)l.push({type:"page",label:w,mayBeFastBackward:!1,mayBeFastForward:!1,active:t===w});return z?(p=!0,y=d+1,l.push({type:"fast-forward",active:!1,label:void 0,options:u?be(d+1,i-1):null})):d===i-2&&l[l.length-1].label!==i-1&&l.push({type:"page",mayBeFastForward:!0,mayBeFastBackward:!1,label:i-1,active:t===i-1}),l[l.length-1].label!==i&&l.push({type:"page",mayBeFastForward:!1,mayBeFastBackward:!1,label:i,active:t===i}),{hasFastBackward:v,hasFastForward:p,fastBackwardTo:B,fastForwardTo:y,items:l}}function be(t,a){const o=[];for(let u=t;u<=a;++u)o.push({label:`${u}`,value:u});return o}const Ft=Object.assign(Object.assign({},Fe.props),{simple:Boolean,page:Number,defaultPage:{type:Number,default:1},itemCount:Number,pageCount:Number,defaultPageCount:{type:Number,default:1},showSizePicker:Boolean,pageSize:Number,defaultPageSize:Number,pageSizes:{type:Array,default(){return[10]}},showQuickJumper:Boolean,size:{type:String,default:"medium"},disabled:Boolean,pageSlot:{type:Number,default:9},selectProps:Object,prev:Function,next:Function,goto:Function,prefix:Function,suffix:Function,label:Function,displayOrder:{type:Array,default:["pages","size-picker","quick-jumper"]},to:vt.propTo,showQuickJumpDropdown:{type:Boolean,default:!0},"onUpdate:page":[Function,Array],onUpdatePage:[Function,Array],"onUpdate:pageSize":[Function,Array],onUpdatePageSize:[Function,Array],onPageSizeChange:[Function,Array],onChange:[Function,Array]}),St=we({name:"Pagination",props:Ft,slots:Object,setup(t){const{mergedComponentPropsRef:a,mergedClsPrefixRef:o,inlineThemeDisabled:u,mergedRtlRef:v}=lt(t),p=Fe("Pagination","-pagination",gt,ft,t,o),{localeRef:B}=dt("Pagination"),y=j(null),g=j(t.defaultPage),i=j(bt(t)),s=se(le(t,"page"),g),d=se(le(t,"pageSize"),i),b=C(()=>{const{itemCount:e}=t;if(e!==void 0)return Math.max(1,Math.ceil(e/d.value));const{pageCount:r}=t;return r!==void 0?Math.max(r,1):1}),f=j("");ie(()=>{t.simple,f.value=String(s.value)});const z=j(!1),l=j(!1),w=j(!1),H=j(!1),W=()=>{t.disabled||(z.value=!0,I())},Z=()=>{t.disabled||(z.value=!1,I())},K=()=>{l.value=!0,I()},Y=()=>{l.value=!1,I()},_=e=>{F(e)},P=C(()=>wt(s.value,b.value,t.pageSlot,t.showQuickJumpDropdown));ie(()=>{P.value.hasFastBackward?P.value.hasFastForward||(z.value=!1,w.value=!1):(l.value=!1,H.value=!1)});const G=C(()=>{const e=B.value.selectionSuffix;return t.pageSizes.map(r=>typeof r=="number"?{label:`${r} / ${e}`,value:r}:r)}),X=C(()=>{var e,r;return((r=(e=a==null?void 0:a.value)===null||e===void 0?void 0:e.Pagination)===null||r===void 0?void 0:r.inputSize)||ve(t.size)}),ee=C(()=>{var e,r;return((r=(e=a==null?void 0:a.value)===null||e===void 0?void 0:e.Pagination)===null||r===void 0?void 0:r.selectSize)||ve(t.size)}),te=C(()=>(s.value-1)*d.value),Q=C(()=>{const e=s.value*d.value-1,{itemCount:r}=t;return r!==void 0&&e>r-1?r-1:e}),U=C(()=>{const{itemCount:e}=t;return e!==void 0?e:(t.pageCount||1)*d.value}),L=ut("Pagination",v,o);function I(){mt(()=>{var e;const{value:r}=y;r&&(r.classList.add("transition-disabled"),(e=y.value)===null||e===void 0||e.offsetWidth,r.classList.remove("transition-disabled"))})}function F(e){if(e===s.value)return;const{"onUpdate:page":r,onUpdatePage:$,onChange:T,simple:re}=t;r&&A(r,e),$&&A($,e),T&&A(T,e),g.value=e,re&&(f.value=String(e))}function E(e){if(e===d.value)return;const{"onUpdate:pageSize":r,onUpdatePageSize:$,onPageSizeChange:T}=t;r&&A(r,e),$&&A($,e),T&&A(T,e),i.value=e,b.value<s.value&&F(b.value)}function R(){if(t.disabled)return;const e=Math.min(s.value+1,b.value);F(e)}function ae(){if(t.disabled)return;const e=Math.max(s.value-1,1);F(e)}function c(){if(t.disabled)return;const e=Math.min(P.value.fastForwardTo,b.value);F(e)}function ne(){if(t.disabled)return;const e=Math.max(P.value.fastBackwardTo,1);F(e)}function S(e){E(e)}function V(){const e=Number.parseInt(f.value);Number.isNaN(e)||(F(Math.max(1,Math.min(e,b.value))),t.simple||(f.value=""))}function D(){V()}function k(e){if(!t.disabled)switch(e.type){case"page":F(e.label);break;case"fast-backward":ne();break;case"fast-forward":c();break}}function J(e){f.value=e.replace(/\D+/g,"")}ie(()=>{s.value,d.value,I()});const N=C(()=>{const{size:e}=t,{self:{buttonBorder:r,buttonBorderHover:$,buttonBorderPressed:T,buttonIconColor:re,buttonIconColorHover:ke,buttonIconColorPressed:xe,itemTextColor:Ce,itemTextColorHover:ye,itemTextColorPressed:Be,itemTextColorActive:ze,itemTextColorDisabled:Se,itemColor:Me,itemColorHover:Pe,itemColorPressed:Ie,itemColorActive:Re,itemColorActiveHover:je,itemColorDisabled:Ne,itemBorder:$e,itemBorderHover:Te,itemBorderPressed:Oe,itemBorderActive:Ae,itemBorderDisabled:Ue,itemBorderRadius:Ee,jumperTextColor:Ve,jumperTextColorDisabled:De,buttonColor:Je,buttonColorHover:qe,buttonColorPressed:He,[m("itemPadding",e)]:_e,[m("itemMargin",e)]:Qe,[m("inputWidth",e)]:Le,[m("selectWidth",e)]:We,[m("inputMargin",e)]:Ze,[m("selectMargin",e)]:Ke,[m("jumperFontSize",e)]:Ye,[m("prefixMargin",e)]:Ge,[m("suffixMargin",e)]:Xe,[m("itemSize",e)]:et,[m("buttonIconSize",e)]:tt,[m("itemFontSize",e)]:at,[`${m("itemMargin",e)}Rtl`]:nt,[`${m("inputMargin",e)}Rtl`]:rt},common:{cubicBezierEaseInOut:it}}=p.value;return{"--n-prefix-margin":Ge,"--n-suffix-margin":Xe,"--n-item-font-size":at,"--n-select-width":We,"--n-select-margin":Ke,"--n-input-width":Le,"--n-input-margin":Ze,"--n-input-margin-rtl":rt,"--n-item-size":et,"--n-item-text-color":Ce,"--n-item-text-color-disabled":Se,"--n-item-text-color-hover":ye,"--n-item-text-color-active":ze,"--n-item-text-color-pressed":Be,"--n-item-color":Me,"--n-item-color-hover":Pe,"--n-item-color-disabled":Ne,"--n-item-color-active":Re,"--n-item-color-active-hover":je,"--n-item-color-pressed":Ie,"--n-item-border":$e,"--n-item-border-hover":Te,"--n-item-border-disabled":Ue,"--n-item-border-active":Ae,"--n-item-border-pressed":Oe,"--n-item-padding":_e,"--n-item-border-radius":Ee,"--n-bezier":it,"--n-jumper-font-size":Ye,"--n-jumper-text-color":Ve,"--n-jumper-text-color-disabled":De,"--n-item-margin":Qe,"--n-item-margin-rtl":nt,"--n-button-icon-size":tt,"--n-button-icon-color":re,"--n-button-icon-color-hover":ke,"--n-button-icon-color-pressed":xe,"--n-button-color-hover":qe,"--n-button-color":Je,"--n-button-color-pressed":He,"--n-button-border":r,"--n-button-border-hover":$,"--n-button-border-pressed":T}}),h=u?ct("pagination",C(()=>{let e="";const{size:r}=t;return e+=r[0],e}),N,t):void 0;return{rtlEnabled:L,mergedClsPrefix:o,locale:B,selfRef:y,mergedPage:s,pageItems:C(()=>P.value.items),mergedItemCount:U,jumperValue:f,pageSizeOptions:G,mergedPageSize:d,inputSize:X,selectSize:ee,mergedTheme:p,mergedPageCount:b,startIndex:te,endIndex:Q,showFastForwardMenu:w,showFastBackwardMenu:H,fastForwardActive:z,fastBackwardActive:l,handleMenuSelect:_,handleFastForwardMouseenter:W,handleFastForwardMouseleave:Z,handleFastBackwardMouseenter:K,handleFastBackwardMouseleave:Y,handleJumperInput:J,handleBackwardClick:ae,handleForwardClick:R,handlePageItemClick:k,handleSizePickerChange:S,handleQuickJumperChange:D,cssVars:u?void 0:N,themeClass:h==null?void 0:h.themeClass,onRender:h==null?void 0:h.onRender}},render(){const{$slots:t,mergedClsPrefix:a,disabled:o,cssVars:u,mergedPage:v,mergedPageCount:p,pageItems:B,showSizePicker:y,showQuickJumper:g,mergedTheme:i,locale:s,inputSize:d,selectSize:b,mergedPageSize:f,pageSizeOptions:z,jumperValue:l,simple:w,prev:H,next:W,prefix:Z,suffix:K,label:Y,goto:_,handleJumperInput:P,handleSizePickerChange:G,handleBackwardClick:X,handlePageItemClick:ee,handleForwardClick:te,handleQuickJumperChange:Q,onRender:U}=this;U==null||U();const L=Z||t.prefix,I=K||t.suffix,F=H||t.prev,E=W||t.next,R=Y||t.label;return n("div",{ref:"selfRef",class:[`${a}-pagination`,this.themeClass,this.rtlEnabled&&`${a}-pagination--rtl`,o&&`${a}-pagination--disabled`,w&&`${a}-pagination--simple`],style:u},L?n("div",{class:`${a}-pagination-prefix`},L({page:v,pageSize:f,pageCount:p,startIndex:this.startIndex,endIndex:this.endIndex,itemCount:this.mergedItemCount})):null,this.displayOrder.map(ae=>{switch(ae){case"pages":return n(oe,null,n("div",{class:[`${a}-pagination-item`,!F&&`${a}-pagination-item--button`,(v<=1||v>p||o)&&`${a}-pagination-item--disabled`],onClick:X},F?F({page:v,pageSize:f,pageCount:p,startIndex:this.startIndex,endIndex:this.endIndex,itemCount:this.mergedItemCount}):n(O,{clsPrefix:a},{default:()=>this.rtlEnabled?n(ue,null):n(ce,null)})),w?n(oe,null,n("div",{class:`${a}-pagination-quick-jumper`},n(de,{value:l,onUpdateValue:P,size:d,placeholder:"",disabled:o,theme:i.peers.Input,themeOverrides:i.peerOverrides.Input,onChange:Q}))," /"," ",p):B.map((c,ne)=>{let S,V,D;const{type:k}=c;switch(k){case"page":const N=c.label;R?S=R({type:"page",node:N,active:c.active}):S=N;break;case"fast-forward":const h=this.fastForwardActive?n(O,{clsPrefix:a},{default:()=>this.rtlEnabled?n(me,null):n(fe,null)}):n(O,{clsPrefix:a},{default:()=>n(pe,null)});R?S=R({type:"fast-forward",node:h,active:this.fastForwardActive||this.showFastForwardMenu}):S=h,V=this.handleFastForwardMouseenter,D=this.handleFastForwardMouseleave;break;case"fast-backward":const e=this.fastBackwardActive?n(O,{clsPrefix:a},{default:()=>this.rtlEnabled?n(fe,null):n(me,null)}):n(O,{clsPrefix:a},{default:()=>n(pe,null)});R?S=R({type:"fast-backward",node:e,active:this.fastBackwardActive||this.showFastBackwardMenu}):S=e,V=this.handleFastBackwardMouseenter,D=this.handleFastBackwardMouseleave;break}const J=n("div",{key:ne,class:[`${a}-pagination-item`,c.active&&`${a}-pagination-item--active`,k!=="page"&&(k==="fast-backward"&&this.showFastBackwardMenu||k==="fast-forward"&&this.showFastForwardMenu)&&`${a}-pagination-item--hover`,o&&`${a}-pagination-item--disabled`,k==="page"&&`${a}-pagination-item--clickable`],onClick:()=>{ee(c)},onMouseenter:V,onMouseleave:D},S);if(k==="page"&&!c.mayBeFastBackward&&!c.mayBeFastForward)return J;{const N=c.type==="page"?c.mayBeFastBackward?"fast-backward":"fast-forward":c.type;return c.type!=="page"&&!c.options?J:n(ht,{to:this.to,key:N,disabled:o,trigger:"hover",virtualScroll:!0,style:{width:"60px"},theme:i.peers.Popselect,themeOverrides:i.peerOverrides.Popselect,builtinThemeOverrides:{peers:{InternalSelectMenu:{height:"calc(var(--n-option-height) * 4.6)"}}},nodeProps:()=>({style:{justifyContent:"center"}}),show:k==="page"?!1:k==="fast-backward"?this.showFastBackwardMenu:this.showFastForwardMenu,onUpdateShow:h=>{k!=="page"&&(h?k==="fast-backward"?this.showFastBackwardMenu=h:this.showFastForwardMenu=h:(this.showFastBackwardMenu=!1,this.showFastForwardMenu=!1))},options:c.type!=="page"&&c.options?c.options:[],onUpdateValue:this.handleMenuSelect,scrollable:!0,showCheckmark:!1},{default:()=>J})}}),n("div",{class:[`${a}-pagination-item`,!E&&`${a}-pagination-item--button`,{[`${a}-pagination-item--disabled`]:v<1||v>=p||o}],onClick:te},E?E({page:v,pageSize:f,pageCount:p,itemCount:this.mergedItemCount,startIndex:this.startIndex,endIndex:this.endIndex}):n(O,{clsPrefix:a},{default:()=>this.rtlEnabled?n(ce,null):n(ue,null)})));case"size-picker":return!w&&y?n(pt,Object.assign({consistentMenuWidth:!1,placeholder:"",showCheckmark:!1,to:this.to},this.selectProps,{size:b,options:z,value:f,disabled:o,theme:i.peers.Select,themeOverrides:i.peerOverrides.Select,onUpdateValue:G})):null;case"quick-jumper":return!w&&g?n("div",{class:`${a}-pagination-quick-jumper`},_?_():st(this.$slots.goto,()=>[s.goto]),n(de,{value:l,onUpdateValue:P,size:d,placeholder:"",disabled:o,theme:i.peers.Input,themeOverrides:i.peerOverrides.Input,onChange:Q})):null;default:return null}}),I?n("div",{class:`${a}-pagination-suffix`},I({page:v,pageSize:f,pageCount:p,startIndex:this.startIndex,endIndex:this.endIndex,itemCount:this.mergedItemCount})):null)}});export{St as N,bt as g};
