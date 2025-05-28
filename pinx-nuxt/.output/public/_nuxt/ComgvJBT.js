import{_ as we}from"./BfzzecIy.js";import{d as y,a7 as t,ap as _e,aw as g,ax as B,az as b,ay as J,aA as Oe,at as Ae,aq as E,bi as Ve,B as W,cz as Pe,au as $e,b0 as Be,$ as Le,bf as j,cm as Ie,r as O,aH as Ue,aJ as N,s as v,aE as Ne,aF as le,b4 as Ee,aL as _,aP as De,aI as Me,bu as qe,eg as He,aS as q,c as je,a as Ke,b as L,g as H,f as X,h as Je,w as Y,u as G,t as Q}from"./CFnCIwgc.js";import{N as We}from"./ukkJLpdT.js";import{N as Xe}from"./h8M4d1TU.js";import"./uLUuACJr.js";import"./Bg-0ZsXF.js";import"./blwfaMt5.js";import"./D2atxefA.js";const Ye=y({name:"Search",render(){return t("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",style:"enable-background: new 0 0 512 512"},t("path",{d:`M443.5,420.2L336.7,312.4c20.9-26.2,33.5-59.4,33.5-95.5c0-84.5-68.5-153-153.1-153S64,132.5,64,217s68.5,153,153.1,153
  c36.6,0,70.1-12.8,96.5-34.2l106.1,107.1c3.2,3.4,7.6,5.1,11.9,5.1c4.1,0,8.2-1.5,11.3-4.5C449.5,437.2,449.7,426.8,443.5,420.2z
   M217.1,337.1c-32.1,0-62.3-12.5-85-35.2c-22.7-22.7-35.2-52.9-35.2-84.9c0-32.1,12.5-62.3,35.2-84.9c22.7-22.7,52.9-35.2,85-35.2
  c32.1,0,62.3,12.5,85,35.2c22.7,22.7,35.2,52.9,35.2,84.9c0,32.1-12.5,62.3-35.2,84.9C279.4,324.6,249.2,337.1,217.1,337.1z`}))}}),I=_e("n-transfer"),Ge=g("transfer",`
 width: 100%;
 font-size: var(--n-font-size);
 height: 300px;
 display: flex;
 flex-wrap: nowrap;
 word-break: break-word;
`,[B("disabled",[g("transfer-list",[g("transfer-list-header",[b("title",`
 color: var(--n-header-text-color-disabled);
 `),b("extra",`
 color: var(--n-header-extra-text-color-disabled);
 `)])])]),g("transfer-list",`
 flex: 1;
 min-width: 0;
 height: inherit;
 display: flex;
 flex-direction: column;
 background-clip: padding-box;
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-list-color);
 `,[B("source",`
 border-top-left-radius: var(--n-border-radius);
 border-bottom-left-radius: var(--n-border-radius);
 `,[b("border","border-right: 1px solid var(--n-divider-color);")]),B("target",`
 border-top-right-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,[b("border","border-left: none;")]),b("border",`
 padding: 0 12px;
 border: 1px solid var(--n-border-color);
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),g("transfer-list-header",`
 min-height: var(--n-header-height);
 box-sizing: border-box;
 display: flex;
 padding: 12px 12px 10px 12px;
 align-items: center;
 background-clip: padding-box;
 border-radius: inherit;
 border-bottom-left-radius: 0;
 border-bottom-right-radius: 0;
 line-height: 1.5;
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[J("> *:not(:first-child)",`
 margin-left: 8px;
 `),b("title",`
 flex: 1;
 min-width: 0;
 line-height: 1.5;
 font-size: var(--n-header-font-size);
 font-weight: var(--n-header-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-header-text-color);
 `),b("button",`
 position: relative;
 `),b("extra",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-extra-font-size);
 margin-right: 0;
 white-space: nowrap;
 color: var(--n-header-extra-text-color);
 `)]),g("transfer-list-body",`
 flex-basis: 0;
 flex-grow: 1;
 box-sizing: border-box;
 position: relative;
 display: flex;
 flex-direction: column;
 border-radius: inherit;
 border-top-left-radius: 0;
 border-top-right-radius: 0;
 `,[g("transfer-filter",`
 padding: 4px 12px 8px 12px;
 box-sizing: border-box;
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),g("transfer-list-flex-container",`
 flex: 1;
 position: relative;
 `,[g("scrollbar",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 height: unset;
 `),g("empty",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 `),g("transfer-list-content",`
 padding: 0;
 margin: 0;
 position: relative;
 `,[g("transfer-list-item",`
 padding: 0 12px;
 min-height: var(--n-item-height);
 display: flex;
 align-items: center;
 color: var(--n-item-text-color);
 position: relative;
 transition: color .3s var(--n-bezier);
 `,[b("background",`
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),b("checkbox",`
 position: relative;
 margin-right: 8px;
 `),b("close",`
 opacity: 0;
 pointer-events: none;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),b("label",`
 position: relative;
 min-width: 0;
 flex-grow: 1;
 `),B("source","cursor: pointer;"),B("disabled",`
 cursor: not-allowed;
 color: var(--n-item-text-color-disabled);
 `),Oe("disabled",[J("&:hover",[b("background","background-color: var(--n-item-color-pending);"),b("close",`
 opacity: 1;
 pointer-events: all;
 `)])])])])])])])]),Z=y({name:"TransferFilter",props:{value:String,placeholder:String,disabled:Boolean,onUpdateValue:{type:Function,required:!0}},setup(){const{mergedThemeRef:e,mergedClsPrefixRef:o}=E(I);return{mergedClsPrefix:o,mergedTheme:e}},render(){const{mergedTheme:e,mergedClsPrefix:o}=this;return t("div",{class:`${o}-transfer-filter`},t(We,{value:this.value,onUpdateValue:this.onUpdateValue,disabled:this.disabled,placeholder:this.placeholder,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,clearable:!0,size:"small"},{"clear-icon-placeholder":()=>t(Ae,{clsPrefix:o},{default:()=>t(Ye,null)})}))}}),ee=y({name:"TransferHeader",props:{size:{type:String,required:!0},selectAllText:String,clearText:String,source:Boolean,onCheckedAll:Function,onClearAll:Function,title:[String,Function]},setup(e){const{targetOptionsRef:o,canNotSelectAnythingRef:a,canBeClearedRef:s,allCheckedRef:d,mergedThemeRef:c,disabledRef:n,mergedClsPrefixRef:l,srcOptionsLengthRef:u}=E(I),{localeRef:f}=Ve("Transfer");return()=>{const{source:m,onClearAll:p,onCheckedAll:A,selectAllText:V,clearText:P}=e,{value:R}=c,{value:x}=l,{value:S}=f,k=e.size==="large"?"small":"tiny",{title:z}=e;return t("div",{class:`${x}-transfer-list-header`},z&&t("div",{class:`${x}-transfer-list-header__title`},typeof z=="function"?z():z),m&&t(W,{class:`${x}-transfer-list-header__button`,theme:R.peers.Button,themeOverrides:R.peerOverrides.Button,size:k,tertiary:!0,onClick:d.value?p:A,disabled:a.value||n.value},{default:()=>d.value?P||S.unselectAll:V||S.selectAll}),!m&&s.value&&t(W,{class:`${x}-transfer-list-header__button`,theme:R.peers.Button,themeOverrides:R.peerOverrides.Button,size:k,tertiary:!0,onClick:p,disabled:n.value},{default:()=>S.clearAll}),t("div",{class:`${x}-transfer-list-header__extra`},m?S.total(u.value):S.selected(o.value.length)))}}}),te=y({name:"NTransferListItem",props:{source:Boolean,label:{type:String,required:!0},value:{type:[String,Number],required:!0},disabled:Boolean,option:{type:Object,required:!0}},setup(e){const{targetValueSetRef:o,mergedClsPrefixRef:a,mergedThemeRef:s,handleItemCheck:d,renderSourceLabelRef:c,renderTargetLabelRef:n,showSelectedRef:l}=E(I),u=Be(()=>o.value.has(e.value));function f(){e.disabled||d(!u.value,e.value)}return{mergedClsPrefix:a,mergedTheme:s,checked:u,showSelected:l,renderSourceLabel:c,renderTargetLabel:n,handleClick:f}},render(){const{disabled:e,mergedTheme:o,mergedClsPrefix:a,label:s,checked:d,source:c,renderSourceLabel:n,renderTargetLabel:l}=this;return t("div",{class:[`${a}-transfer-list-item`,e&&`${a}-transfer-list-item--disabled`,c?`${a}-transfer-list-item--source`:`${a}-transfer-list-item--target`],onClick:c?this.handleClick:void 0},t("div",{class:`${a}-transfer-list-item__background`}),c&&this.showSelected&&t("div",{class:`${a}-transfer-list-item__checkbox`},t(Xe,{theme:o.peers.Checkbox,themeOverrides:o.peerOverrides.Checkbox,disabled:e,checked:d})),t("div",{class:`${a}-transfer-list-item__label`,title:Pe(s)},c?n?n({option:this.option}):s:l?l({option:this.option}):s),!c&&!e&&t($e,{focusable:!1,class:`${a}-transfer-list-item__close`,clsPrefix:a,onClick:this.handleClick}))}}),re=y({name:"TransferList",props:{virtualScroll:{type:Boolean,required:!0},itemSize:{type:Number,required:!0},options:{type:Array,required:!0},disabled:{type:Boolean,required:!0},source:Boolean},setup(){const{mergedThemeRef:e,mergedClsPrefixRef:o}=E(I),a=O(null),s=O(null);function d(){var l;(l=a.value)===null||l===void 0||l.sync()}function c(){const{value:l}=s;if(!l)return null;const{listElRef:u}=l;return u}function n(){const{value:l}=s;if(!l)return null;const{itemsElRef:u}=l;return u}return{mergedTheme:e,mergedClsPrefix:o,scrollerInstRef:a,vlInstRef:s,syncVLScroller:d,scrollContainer:c,scrollContent:n}},render(){const{mergedTheme:e,options:o}=this;if(o.length===0)return t(Le,{theme:e.peers.Empty,themeOverrides:e.peerOverrides.Empty});const{mergedClsPrefix:a,virtualScroll:s,source:d,disabled:c,syncVLScroller:n}=this;return t(j,{ref:"scrollerInstRef",theme:e.peers.Scrollbar,themeOverrides:e.peerOverrides.Scrollbar,container:s?this.scrollContainer:void 0,content:s?this.scrollContent:void 0},{default:()=>s?t(Ie,{ref:"vlInstRef",style:{height:"100%"},class:`${a}-transfer-list-content`,items:this.options,itemSize:this.itemSize,showScrollbar:!1,onResize:n,onScroll:n,keyField:"value"},{default:({item:l})=>{const{source:u,disabled:f}=this;return t(te,{source:u,key:l.value,value:l.value,disabled:l.disabled||f,label:l.label,option:l})}}):t("div",{class:`${a}-transfer-list-content`},o.map(l=>t(te,{source:d,key:l.value,value:l.value,disabled:l.disabled||c,label:l.label,option:l})))})}});function Qe(e){const o=O(e.defaultValue),a=Ue(N(e,"value"),o),s=v(()=>{const r=new Map;return(e.options||[]).forEach(i=>r.set(i.value,i)),r}),d=v(()=>new Set(a.value||[])),c=v(()=>{const r=s.value,i=[];return(a.value||[]).forEach($=>{const C=r.get($);C&&i.push(C)}),i}),n=O(""),l=O(""),u=v(()=>e.sourceFilterable||!!e.filterable),f=v(()=>{const{showSelected:r,options:i,filter:$}=e;return u.value?i.filter(C=>$(n.value,C,"source")&&(r||!d.value.has(C.value))):r?i:i.filter(C=>!d.value.has(C.value))}),m=v(()=>{if(!e.targetFilterable)return c.value;const{filter:r}=e;return c.value.filter(i=>r(l.value,i,"target"))}),p=v(()=>{const{value:r}=a;return r===null?new Set:new Set(r)}),A=v(()=>{const r=new Set(p.value);return f.value.forEach(i=>{!i.disabled&&!r.has(i.value)&&r.add(i.value)}),r}),V=v(()=>{const r=new Set(p.value);return f.value.forEach(i=>{!i.disabled&&r.has(i.value)&&r.delete(i.value)}),r}),P=v(()=>{const r=new Set(p.value);return m.value.forEach(i=>{i.disabled||r.delete(i.value)}),r}),R=v(()=>f.value.every(r=>r.disabled)),x=v(()=>{if(!f.value.length)return!1;const r=p.value;return f.value.every(i=>i.disabled||r.has(i.value))}),S=v(()=>m.value.some(r=>!r.disabled));function k(r){n.value=r??""}function z(r){l.value=r??""}return{uncontrolledValueRef:o,mergedValueRef:a,targetValueSetRef:d,valueSetForCheckAllRef:A,valueSetForUncheckAllRef:V,valueSetForClearRef:P,filteredTgtOptionsRef:m,filteredSrcOptionsRef:f,targetOptionsRef:c,canNotSelectAnythingRef:R,canBeClearedRef:S,allCheckedRef:x,srcPatternRef:n,tgtPatternRef:l,mergedSrcFilterableRef:u,handleSrcFilterUpdateValue:k,handleTgtFilterUpdateValue:z}}const Ze=Object.assign(Object.assign({},le.props),{value:Array,defaultValue:{type:Array,default:null},options:{type:Array,default:()=>[]},disabled:{type:Boolean,default:void 0},virtualScroll:Boolean,sourceTitle:[String,Function],selectAllText:String,clearText:String,targetTitle:[String,Function],filterable:{type:Boolean,default:void 0},sourceFilterable:Boolean,targetFilterable:Boolean,showSelected:{type:Boolean,default:!0},sourceFilterPlaceholder:String,targetFilterPlaceholder:String,filter:{type:Function,default:(e,o)=>e?~`${o.label}`.toLowerCase().indexOf(`${e}`.toLowerCase()):!0},size:String,renderSourceLabel:Function,renderTargetLabel:Function,renderSourceList:Function,renderTargetList:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]}),et=y({name:"Transfer",props:Ze,setup(e){const{mergedClsPrefixRef:o}=Ne(e),a=le("Transfer","-transfer",Ge,He,e,o),s=Ee(e),{mergedSizeRef:d,mergedDisabledRef:c}=s,n=v(()=>{const{value:h}=d,{self:{[_("itemHeight",h)]:T}}=a.value;return De(T)}),{uncontrolledValueRef:l,mergedValueRef:u,targetValueSetRef:f,valueSetForCheckAllRef:m,valueSetForUncheckAllRef:p,valueSetForClearRef:A,filteredTgtOptionsRef:V,filteredSrcOptionsRef:P,targetOptionsRef:R,canNotSelectAnythingRef:x,canBeClearedRef:S,allCheckedRef:k,srcPatternRef:z,tgtPatternRef:r,mergedSrcFilterableRef:i,handleSrcFilterUpdateValue:$,handleTgtFilterUpdateValue:C}=Qe(e);function F(h){const{onUpdateValue:T,"onUpdate:value":w,onChange:U}=e,{nTriggerFormInput:D,nTriggerFormChange:M}=s;T&&q(T,h),w&&q(w,h),U&&q(U,h),l.value=h,D(),M()}function ae(){F([...m.value])}function ne(){F([...p.value])}function oe(){F([...A.value])}function K(h,T){F(h?(u.value||[]).concat(T):(u.value||[]).filter(w=>w!==T))}function se(h){F(h)}return Me(I,{targetValueSetRef:f,mergedClsPrefixRef:o,disabledRef:c,mergedThemeRef:a,targetOptionsRef:R,canNotSelectAnythingRef:x,canBeClearedRef:S,allCheckedRef:k,srcOptionsLengthRef:v(()=>e.options.length),handleItemCheck:K,renderSourceLabelRef:N(e,"renderSourceLabel"),renderTargetLabelRef:N(e,"renderTargetLabel"),showSelectedRef:N(e,"showSelected")}),{mergedClsPrefix:o,mergedDisabled:c,itemSize:n,isMounted:qe(),mergedTheme:a,filteredSrcOpts:P,filteredTgtOpts:V,srcPattern:z,tgtPattern:r,mergedSize:d,mergedSrcFilterable:i,handleSrcFilterUpdateValue:$,handleTgtFilterUpdateValue:C,handleSourceCheckAll:ae,handleSourceUncheckAll:ne,handleTargetClearAll:oe,handleItemCheck:K,handleChecked:se,cssVars:v(()=>{const{value:h}=d,{common:{cubicBezierEaseInOut:T},self:{borderRadius:w,borderColor:U,listColor:D,titleTextColor:M,titleTextColorDisabled:ie,extraTextColor:ce,itemTextColor:de,itemColorPending:ue,itemTextColorDisabled:fe,titleFontWeight:he,closeColorHover:ve,closeColorPressed:be,closeIconColor:ge,closeIconColorHover:me,closeIconColorPressed:pe,closeIconSize:xe,closeSize:Se,dividerColor:Ce,extraTextColorDisabled:Te,[_("extraFontSize",h)]:Re,[_("fontSize",h)]:ze,[_("titleFontSize",h)]:ye,[_("itemHeight",h)]:ke,[_("headerHeight",h)]:Fe}}=a.value;return{"--n-bezier":T,"--n-border-color":U,"--n-border-radius":w,"--n-extra-font-size":Re,"--n-font-size":ze,"--n-header-font-size":ye,"--n-header-extra-text-color":ce,"--n-header-extra-text-color-disabled":Te,"--n-header-font-weight":he,"--n-header-text-color":M,"--n-header-text-color-disabled":ie,"--n-item-color-pending":ue,"--n-item-height":ke,"--n-item-text-color":de,"--n-item-text-color-disabled":fe,"--n-list-color":D,"--n-header-height":Fe,"--n-close-size":Se,"--n-close-icon-size":xe,"--n-close-color-hover":ve,"--n-close-color-pressed":be,"--n-close-icon-color":ge,"--n-close-icon-color-hover":me,"--n-close-icon-color-pressed":pe,"--n-divider-color":Ce}})}},render(){const{mergedClsPrefix:e,renderSourceList:o,renderTargetList:a,mergedTheme:s,mergedSrcFilterable:d,targetFilterable:c}=this;return t("div",{class:[`${e}-transfer`,this.mergedDisabled&&`${e}-transfer--disabled`],style:this.cssVars},t("div",{class:`${e}-transfer-list ${e}-transfer-list--source`},t(ee,{source:!0,selectAllText:this.selectAllText,clearText:this.clearText,title:this.sourceTitle,onCheckedAll:this.handleSourceCheckAll,onClearAll:this.handleSourceUncheckAll,size:this.mergedSize}),t("div",{class:`${e}-transfer-list-body`},d?t(Z,{onUpdateValue:this.handleSrcFilterUpdateValue,value:this.srcPattern,disabled:this.mergedDisabled,placeholder:this.sourceFilterPlaceholder}):null,t("div",{class:`${e}-transfer-list-flex-container`},o?t(j,{theme:s.peers.Scrollbar,themeOverrides:s.peerOverrides.Scrollbar},{default:()=>o({onCheck:this.handleChecked,checkedOptions:this.filteredTgtOpts,pattern:this.srcPattern})}):t(re,{source:!0,options:this.filteredSrcOpts,disabled:this.mergedDisabled,virtualScroll:this.virtualScroll,itemSize:this.itemSize}))),t("div",{class:`${e}-transfer-list__border`})),t("div",{class:`${e}-transfer-list ${e}-transfer-list--target`},t(ee,{onClearAll:this.handleTargetClearAll,size:this.mergedSize,title:this.targetTitle}),t("div",{class:`${e}-transfer-list-body`},c?t(Z,{onUpdateValue:this.handleTgtFilterUpdateValue,value:this.tgtPattern,disabled:this.mergedDisabled,placeholder:this.sourceFilterPlaceholder}):null,t("div",{class:`${e}-transfer-list-flex-container`},a?t(j,{theme:s.peers.Scrollbar,themeOverrides:s.peerOverrides.Scrollbar},{default:()=>a({onCheck:this.handleChecked,checkedOptions:this.filteredTgtOpts,pattern:this.tgtPattern})}):t(re,{options:this.filteredTgtOpts,disabled:this.mergedDisabled,virtualScroll:this.virtualScroll,itemSize:this.itemSize}))),t("div",{class:`${e}-transfer-list__border`})))}}),tt={class:"page"},rt={class:"page-header"},lt={class:"links"},at={href:"https://www.naiveui.com/en-US/light/components/transfer",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},nt={class:"components-list"},ot="tabler:external-link",bt=y({__name:"Transfer",setup(e){function o(){return Array.from({length:100}).map((c,n)=>({label:`Option ${n}`,value:n,disabled:n%5===0}))}function a(){return Array.from({length:50}).map((c,n)=>n)}const s=o(),d=O(a());return(c,n)=>{const l=we;return Ke(),je("div",tt,[L("div",rt,[n[2]||(n[2]=L("div",{class:"title"},"Transfer",-1)),L("div",lt,[L("a",at,[H(Je,{name:ot,size:16}),n[1]||(n[1]=X(" docs "))])])]),L("div",nt,[H(l,{title:"Basic"},{code:Y(({html:u,js:f})=>[X(Q(u(`
					<n-transfer
						ref="transfer"
						v-model:value="value1"
						virtual-scroll
						:options="options1"
						source-filterable
						target-filterable
					/>
					`))+" "+Q(f(`
						function createOptions() {
							return Array.from({ length: 100 }).map((v, i) => ({
								label: "Option " + i,
								value: i,
								disabled: i % 5 === 0
							}))
						}

						function createValues() {
							return Array.from({ length: 50 }).map((v, i) => i)
						}

						const options1 = createOptions()
						const value1 = ref(createValues())

						`)),1)]),default:Y(()=>[H(G(et),{value:d.value,"onUpdate:value":n[0]||(n[0]=u=>d.value=u),"virtual-scroll":"",options:G(s),"source-filterable":"","target-filterable":""},null,8,["value","options"])]),_:1})])])}}});export{bt as default};
