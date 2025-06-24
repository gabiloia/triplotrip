import{_ as Xe}from"./BqhzCvpt.js";import{ao as Ze,ap as G,at as j,bx as et,d as ge,ab as u,cc as tt,cd as nt,ce as lt,cf as H,bj as at,k as ot,cg as rt,aN as de,b8 as it,q as v,au as dt,bp as st,ba as ct,ay as z,aQ as Y,p as h,ch as ut,aw as ye,az as ht,bB as ft,$ as gt,aY as k,cj as yt,cl as vt,ck as se,ed as bt,ax as mt,c as kt,o as pt,a as O,e as B,b as $,_ as St,w as U,u as ce,t as L}from"./f757L6Hq.js";import{N as Mt,c as wt,u as Tt,t as xt,a as It}from"./DQ5CX_1U.js";import{N as Ft}from"./BqNuZ-VH.js";import{F as Ct}from"./CykOC2Rd.js";import{u as At}from"./CvuMW-C-.js";import"./8M1xGM-H.js";import"./CS6L70Cp.js";import"./BgrQwusA.js";import"./CfjWZ2yJ.js";import"./BtqG3pLU.js";const Rt=Ze([G("tree-select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),G("tree-select-menu",`
 position: relative;
 overflow: hidden;
 margin: 4px 0;
 transition: box-shadow .3s var(--n-bezier), background-color .3s var(--n-bezier);
 border-radius: var(--n-menu-border-radius);
 box-shadow: var(--n-menu-box-shadow);
 background-color: var(--n-menu-color);
 outline: none;
 `,[G("tree","max-height: var(--n-menu-height);"),j("empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),j("header",`
 padding: var(--n-header-padding);
 transition: 
 color .3s var(--n-bezier);
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-header-divider-color);
 color: var(--n-header-text-color);
 `),j("action",`
 padding: var(--n-action-padding);
 transition: 
 color .3s var(--n-bezier);
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),et()])]);function ue(t,f){const{rawNode:i}=t;return Object.assign(Object.assign({},i),{label:i[f],value:t.key})}function he(t,f,i,s){const{rawNode:r}=t;return Object.assign(Object.assign({},r),{value:t.key,label:f.map(b=>b.rawNode[s]).join(i)})}const Ot=Object.assign(Object.assign(Object.assign(Object.assign({},ye.props),{bordered:{type:Boolean,default:!0},cascade:Boolean,checkable:Boolean,clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},consistentMenuWidth:{type:Boolean,default:!0},defaultShow:Boolean,defaultValue:{type:[String,Number,Array],default:null},disabled:{type:Boolean,default:void 0},filterable:Boolean,checkStrategy:{type:String,default:"all"},loading:Boolean,maxTagCount:[String,Number],multiple:Boolean,showPath:Boolean,separator:{type:String,default:" / "},options:{type:Array,default:()=>[]},placeholder:String,placement:{type:String,default:"bottom-start"},show:{type:Boolean,default:void 0},size:String,value:[String,Number,Array],to:H.propTo,menuProps:Object,virtualScroll:{type:Boolean,default:!0},status:String,renderTag:Function,ellipsisTagPopoverProps:Object}),xt),{renderLabel:Function,renderPrefix:Function,renderSuffix:Function,nodeProps:Function,watchProps:Array,getChildren:Function,onBlur:Function,onFocus:Function,onLoad:Function,onUpdateShow:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],"onUpdate:show":[Function,Array],leafOnly:Boolean}),fe=ge({name:"TreeSelect",props:Ot,slots:Object,setup(t){const f=v(null),i=v(null),s=v(null),r=v(null),{mergedClsPrefixRef:b,namespaceRef:p,inlineThemeDisabled:c}=dt(t),{localeRef:E}=st("Select"),{mergedSizeRef:S,mergedDisabledRef:W,mergedStatusRef:ve,nTriggerFormBlur:be,nTriggerFormChange:me,nTriggerFormFocus:ke,nTriggerFormInput:pe}=ct(t),q=v(t.defaultValue),Se=z(t,"value"),M=Y(Se,q),Q=v(t.defaultShow),Me=z(t,"show"),w=Y(Me,Q),C=v(""),we=h(()=>{const{filter:e}=t;if(e)return e;const{labelField:n}=t;return(a,l)=>a.length?l[n].toLowerCase().includes(a.toLowerCase()):!0}),T=h(()=>ut(t.options,wt(t.keyField,t.childrenField,t.disabledField,void 0))),{value:K}=M,J=v(t.checkable?null:Array.isArray(K)&&K.length?K[K.length-1]:null),_=h(()=>t.multiple&&t.cascade&&t.checkable),X=v(t.defaultExpandAll?void 0:t.defaultExpandedKeys||t.expandedKeys),Te=z(t,"expandedKeys"),xe=Y(Te,X),A=v(!1),Ie=h(()=>{const{placeholder:e}=t;return e!==void 0?e:E.value.placeholder}),Z=h(()=>{const{value:e}=M;return t.multiple?Array.isArray(e)?e:[]:e===null||Array.isArray(e)?[]:[e]}),Fe=h(()=>t.checkable?[]:Z.value),Ce=h(()=>{const{multiple:e,showPath:n,separator:a,labelField:l}=t;if(e)return null;const{value:o}=M;if(!Array.isArray(o)&&o!==null){const{value:d}=T,y=d.getNode(o);if(y!==null)return n?he(y,d.getPath(o).treeNodePath,a,l):ue(y,l)}return null}),Ae=h(()=>{const{multiple:e,showPath:n,separator:a}=t;if(!e)return null;const{value:l}=M;if(Array.isArray(l)){const o=[],{value:d}=T,{checkedKeys:y}=d.getCheckedKeys(l,{checkStrategy:t.checkStrategy,cascade:_.value,allowNotLoaded:t.allowCheckingNotLoaded}),{labelField:g}=t;return y.forEach(N=>{const R=d.getNode(N);R!==null&&o.push(n?he(R,d.getPath(N).treeNodePath,a,g):ue(R,g))}),o}return[]});function P(){var e;(e=i.value)===null||e===void 0||e.focus()}function ee(){var e;(e=i.value)===null||e===void 0||e.focusInput()}function te(e){const{onUpdateShow:n,"onUpdate:show":a}=t;n&&k(n,e),a&&k(a,e),Q.value=e}function x(e,n,a){const{onUpdateValue:l,"onUpdate:value":o}=t;l&&k(l,e,n,a),o&&k(o,e,n,a),q.value=e,pe(),me()}function Re(e,n){const{onUpdateIndeterminateKeys:a,"onUpdate:indeterminateKeys":l}=t;a&&k(a,e,n),l&&k(l,e,n)}function Oe(e,n,a){const{onUpdateExpandedKeys:l,"onUpdate:expandedKeys":o}=t;l&&k(l,e,n,a),o&&k(o,e,n,a),X.value=e}function ne(e){const{onFocus:n}=t;n&&n(e),ke()}function le(e){m();const{onBlur:n}=t;n&&n(e),be()}function m(){te(!1)}function D(){W.value||(C.value="",te(!0),t.filterable&&ee())}function Be(){C.value=""}function Ke(e){var n;w.value&&(!((n=i.value)===null||n===void 0)&&n.$el.contains(yt(e))||m())}function _e(){W.value||(w.value?t.filterable||m():D())}function I(e){const{value:{getNode:n}}=T;return e.map(a=>{var l;return((l=n(a))===null||l===void 0?void 0:l.rawNode)||null})}function Pe(e,n,a){const l=I(e),o=a.action==="check"?"select":"unselect",d=a.node;t.multiple?(x(e,l,{node:d,action:o}),t.filterable&&(ee(),t.clearFilterAfterSelect&&(C.value=""))):(e.length?x(e[0],l[0]||null,{node:d,action:o}):x(null,null,{node:d,action:o}),m(),P())}function Ne(e){t.checkable&&Re(e,I(e))}function Ue(e){var n;!((n=r.value)===null||n===void 0)&&n.contains(e.relatedTarget)||(A.value=!0,ne(e))}function Le(e){var n;!((n=r.value)===null||n===void 0)&&n.contains(e.relatedTarget)||(A.value=!1,le(e))}function Ee(e){var n,a,l;!((n=r.value)===null||n===void 0)&&n.contains(e.relatedTarget)||!((l=(a=i.value)===null||a===void 0?void 0:a.$el)===null||l===void 0)&&l.contains(e.relatedTarget)||(A.value=!0,ne(e))}function We(e){var n,a,l;!((n=r.value)===null||n===void 0)&&n.contains(e.relatedTarget)||!((l=(a=i.value)===null||a===void 0?void 0:a.$el)===null||l===void 0)&&l.contains(e.relatedTarget)||(A.value=!1,le(e))}function De(e){e.stopPropagation();const{multiple:n}=t;!n&&t.filterable&&m(),n?x([],[],{node:null,action:"clear"}):x(null,null,{node:null,action:"clear"})}function Ve(e){const{value:n}=M;if(Array.isArray(n)){const{value:a}=T,{checkedKeys:l}=a.getCheckedKeys(n,{cascade:_.value,allowNotLoaded:t.allowCheckingNotLoaded}),o=l.findIndex(d=>d===e.value);if(~o){const d=l[o],y=I([d])[0];if(t.checkable){const{checkedKeys:g}=a.uncheck(e.value,l,{checkStrategy:t.checkStrategy,cascade:_.value,allowNotLoaded:t.allowCheckingNotLoaded});x(g,I(g),{node:y,action:"delete"})}else{const g=Array.from(l);g.splice(o,1),x(g,I(g),{node:y,action:"delete"})}}}}function Ge(e){const{value:n}=e.target;C.value=n}function ae(e){const{value:n}=s;return n?n.handleKeydown(e):{enterBehavior:null}}function je(e){if(e.key==="Enter"){if(w.value){const{enterBehavior:n}=ae(e);if(!t.multiple)switch(n){case"default":case"toggleSelect":m(),P();break}}else D();e.preventDefault()}else e.key==="Escape"?w.value&&(vt(e),m(),P()):w.value?ae(e):e.key==="ArrowDown"&&D()}function ze(){m(),P()}function Ye(e){!se(e,"action")&&!se(e,"header")&&e.preventDefault()}const $e=h(()=>{const{renderTag:e}=t;if(e)return function({option:a,handleClose:l}){const{value:o}=a;if(o!==void 0){const d=T.value.getNode(o);if(d)return e({option:d.rawNode,handleClose:l})}return o}});mt(It,{pendingNodeKeyRef:J,dataTreeMate:T});function oe(){var e;w.value&&((e=f.value)===null||e===void 0||e.syncPosition())}At(r,oe);const He=Tt(t),re=h(()=>{if(t.checkable){const e=M.value;return t.multiple&&Array.isArray(e)?T.value.getCheckedKeys(e,{cascade:t.cascade,checkStrategy:He.value,allowNotLoaded:t.allowCheckingNotLoaded}):{checkedKeys:Array.isArray(e)||e===null?[]:[e],indeterminateKeys:[]}}return{checkedKeys:[],indeterminateKeys:[]}}),qe={getCheckedData:()=>{const{checkedKeys:e}=re.value;return{keys:e,options:I(e)}},getIndeterminateData:()=>{const{indeterminateKeys:e}=re.value;return{keys:e,options:I(e)}},focus:()=>{var e;return(e=i.value)===null||e===void 0?void 0:e.focus()},focusInput:()=>{var e;return(e=i.value)===null||e===void 0?void 0:e.focusInput()},blur:()=>{var e;return(e=i.value)===null||e===void 0?void 0:e.blur()},blurInput:()=>{var e;return(e=i.value)===null||e===void 0?void 0:e.blurInput()}},V=ye("TreeSelect","-tree-select",Rt,bt,t,b),ie=h(()=>{const{common:{cubicBezierEaseInOut:e},self:{menuBoxShadow:n,menuBorderRadius:a,menuColor:l,menuHeight:o,actionPadding:d,actionDividerColor:y,actionTextColor:g,headerDividerColor:N,headerPadding:R,headerTextColor:Je}}=V.value;return{"--n-menu-box-shadow":n,"--n-menu-border-radius":a,"--n-menu-color":l,"--n-menu-height":o,"--n-bezier":e,"--n-action-padding":d,"--n-action-text-color":g,"--n-action-divider-color":y,"--n-header-padding":R,"--n-header-text-color":Je,"--n-header-divider-color":N}}),F=c?ht("tree-select",void 0,ie,t):void 0,Qe=h(()=>{const{self:{menuPadding:e}}=V.value;return e});return Object.assign(Object.assign({},qe),{menuElRef:r,mergedStatus:ve,triggerInstRef:i,followerInstRef:f,treeInstRef:s,mergedClsPrefix:b,mergedValue:M,mergedShow:w,namespace:p,adjustedTo:H(t),isMounted:ft(),focused:A,menuPadding:Qe,mergedPlaceholder:Ie,mergedExpandedKeys:xe,treeSelectedKeys:Fe,treeCheckedKeys:Z,mergedSize:S,mergedDisabled:W,selectedOption:Ce,selectedOptions:Ae,pattern:C,pendingNodeKey:J,mergedCascade:_,mergedFilter:we,selectionRenderTag:$e,handleTriggerOrMenuResize:oe,doUpdateExpandedKeys:Oe,handleMenuLeave:Be,handleTriggerClick:_e,handleMenuClickoutside:Ke,handleUpdateCheckedKeys:Pe,handleUpdateIndeterminateKeys:Ne,handleTriggerFocus:Ue,handleTriggerBlur:Le,handleMenuFocusin:Ee,handleMenuFocusout:We,handleClear:De,handleDeleteOption:Ve,handlePatternInput:Ge,handleKeydown:je,handleTabOut:ze,handleMenuMousedown:Ye,mergedTheme:V,cssVars:c?void 0:ie,themeClass:F==null?void 0:F.themeClass,onRender:F==null?void 0:F.onRender})},render(){const{mergedTheme:t,mergedClsPrefix:f,$slots:i}=this;return u("div",{class:`${f}-tree-select`},u(tt,null,{default:()=>[u(nt,null,{default:()=>u(Ft,{ref:"triggerInstRef",onResize:this.handleTriggerOrMenuResize,status:this.mergedStatus,focused:this.focused,clsPrefix:f,theme:t.peers.InternalSelection,themeOverrides:t.peerOverrides.InternalSelection,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,renderTag:this.selectionRenderTag,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,size:this.mergedSize,bordered:this.bordered,placeholder:this.mergedPlaceholder,disabled:this.mergedDisabled,active:this.mergedShow,loading:this.loading,multiple:this.multiple,maxTagCount:this.maxTagCount,showArrow:!0,filterable:this.filterable,clearable:this.clearable,pattern:this.pattern,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onClick:this.handleTriggerClick,onFocus:this.handleTriggerFocus,onBlur:this.handleTriggerBlur,onDeleteOption:this.handleDeleteOption,onKeydown:this.handleKeydown},{arrow:()=>{var s,r;return[(r=(s=this.$slots).arrow)===null||r===void 0?void 0:r.call(s)]}})}),u(lt,{ref:"followerInstRef",show:this.mergedShow,placement:this.placement,to:this.adjustedTo,teleportDisabled:this.adjustedTo===H.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target"},{default:()=>u(at,{name:"fade-in-scale-up-transition",appear:this.isMounted,onLeave:this.handleMenuLeave},{default:()=>{var s;if(!this.mergedShow)return null;const{mergedClsPrefix:r,checkable:b,multiple:p,menuProps:c,options:E}=this;return(s=this.onRender)===null||s===void 0||s.call(this),ot(u("div",Object.assign({},c,{class:[`${r}-tree-select-menu`,c==null?void 0:c.class,this.themeClass],ref:"menuElRef",style:[(c==null?void 0:c.style)||"",this.cssVars],tabindex:0,onMousedown:this.handleMenuMousedown,onKeydown:this.handleKeydown,onFocusin:this.handleMenuFocusin,onFocusout:this.handleMenuFocusout}),de(i.header,S=>S?u("div",{class:`${r}-tree-select-menu__header`,"data-header":!0},S):null),u(Mt,{ref:"treeInstRef",blockLine:!0,allowCheckingNotLoaded:this.allowCheckingNotLoaded,showIrrelevantNodes:!1,animated:!1,pattern:this.pattern,getChildren:this.getChildren,filter:this.mergedFilter,data:E,cancelable:p,labelField:this.labelField,keyField:this.keyField,disabledField:this.disabledField,childrenField:this.childrenField,theme:t.peers.Tree,themeOverrides:t.peerOverrides.Tree,defaultExpandAll:this.defaultExpandAll,defaultExpandedKeys:this.defaultExpandedKeys,expandedKeys:this.mergedExpandedKeys,checkedKeys:this.treeCheckedKeys,selectedKeys:this.treeSelectedKeys,checkable:b,checkStrategy:this.checkStrategy,cascade:this.mergedCascade,leafOnly:this.leafOnly,multiple:this.multiple,renderLabel:this.renderLabel,renderPrefix:this.renderPrefix,renderSuffix:this.renderSuffix,renderSwitcherIcon:this.renderSwitcherIcon,nodeProps:this.nodeProps,watchProps:this.watchProps,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,overrideDefaultNodeClickBehavior:this.overrideDefaultNodeClickBehavior,internalTreeSelect:!0,internalUnifySelectCheck:!0,internalScrollable:!0,internalScrollablePadding:this.menuPadding,internalFocusable:!1,internalCheckboxFocusable:!1,internalRenderEmpty:()=>u("div",{class:`${r}-tree-select-menu__empty`},it(i.empty,()=>[u(gt,{theme:t.peers.Empty,themeOverrides:t.peerOverrides.Empty})])),onLoad:this.onLoad,onUpdateCheckedKeys:this.handleUpdateCheckedKeys,onUpdateIndeterminateKeys:this.handleUpdateIndeterminateKeys,onUpdateExpandedKeys:this.doUpdateExpandedKeys}),de(i.action,S=>S?u("div",{class:`${r}-tree-select-menu__action`,"data-action":!0},S):null),u(Ct,{onFocus:this.handleTabOut})),[[rt,this.handleMenuClickoutside,void 0,{capture:!0}]])}})})]}))}}),Bt={class:"page"},Kt={class:"page-header"},_t={class:"links"},Pt={href:"https://www.naiveui.com/en-US/light/components/tree-select",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},Nt={class:"components-list"},Ut="tabler:external-link",qt=ge({__name:"TreeSelect",setup(t){function f(s,r){console.log(s,r)}const i=[{label:"Rubber Soul",key:"Rubber Soul",children:[{label:"Everybody's Got Something to Hide Except Me and My Monkey",key:"Everybody's Got Something to Hide Except Me and My Monkey"},{label:"Drive My Car",key:"Drive My Car",disabled:!0},{label:"Norwegian Wood",key:"Norwegian Wood"},{label:"You Won't See",key:"You Won't See",disabled:!0},{label:"Nowhere Man",key:"Nowhere Man"},{label:"Think For Yourself",key:"Think For Yourself"},{label:"The Word",key:"The Word"},{label:"Michelle",key:"Michelle",disabled:!0},{label:"What goes on",key:"What goes on"},{label:"Girl",key:"Girl"},{label:"I'm looking through you",key:"I'm looking through you"},{label:"In My Life",key:"In My Life"},{label:"Wait",key:"Wait"}]},{label:"Let It Be",key:"Let It Be Album",children:[{label:"Two Of Us",key:"Two Of Us"},{label:"Dig A Pony",key:"Dig A Pony"},{label:"Across The Universe",key:"Across The Universe"},{label:"I Me Mine",key:"I Me Mine"},{label:"Dig It",key:"Dig It"},{label:"Let It Be",key:"Let It Be"},{label:"Maggie Mae",key:"Maggie Mae"},{label:"I've Got A Feeling",key:"I've Got A Feeling"},{label:"One After 909",key:"One After 909"},{label:"The Long And Winding Road",key:"The Long And Winding Road"},{label:"For You Blue",key:"For You Blue"},{label:"Get Back",key:"Get Back"}]}];return(s,r)=>{const b=Xe;return pt(),kt("div",Bt,[O("div",Kt,[r[1]||(r[1]=O("div",{class:"title"},"TreeSelect",-1)),O("div",_t,[O("a",Pt,[B(St,{name:Ut,size:16}),r[0]||(r[0]=$(" docs "))])])]),O("div",Nt,[B(b,{title:"Basic"},{code:U(({html:p,js:c})=>[$(L(p(`
					<n-tree-select :options default-value="Drive My Car" @update:value="handleUpdateValue" />
					`))+" "+L(c(`
						function handleUpdateValue(
							value: string | number | Array<string | number> | null,
							option: TreeSelectOption | null | Array<TreeSelectOption | null>						) {
							console.log(value, option)
						}
						const options = [
							{
								label: "Rubber Soul",
								key: "Rubber Soul",
								children: [
									{
										label: "Everybody's Got Something to Hide Except Me and My Monkey",
										key: "Everybody's Got Something to Hide Except Me and My Monkey"
									},
									{
										label: "Drive My Car",
										key: "Drive My Car",
										disabled: true
									},
									{
										label: "Norwegian Wood",
										key: "Norwegian Wood"
									},
									{
										label: "You Won't See",
										key: "You Won't See",
										disabled: true
									},
									{
										label: "Nowhere Man",
										key: "Nowhere Man"
									},
									{
										label: "Think For Yourself",
										key: "Think For Yourself"
									},
									{
										label: "The Word",
										key: "The Word"
									},
									{
										label: "Michelle",
										key: "Michelle",
										disabled: true
									},
									{
										label: "What goes on",
										key: "What goes on"
									},
									{
										label: "Girl",
										key: "Girl"
									},
									{
										label: "I'm looking through you",
										key: "I'm looking through you"
									},
									{
										label: "In My Life",
										key: "In My Life"
									},
									{
										label: "Wait",
										key: "Wait"
									}
								]
							},
							{
								label: "Let It Be",
								key: "Let It Be Album",
								children: [
									{
										label: "Two Of Us",
										key: "Two Of Us"
									},
									{
										label: "Dig A Pony",
										key: "Dig A Pony"
									},
									{
										label: "Across The Universe",
										key: "Across The Universe"
									},
									{
										label: "I Me Mine",
										key: "I Me Mine"
									},
									{
										label: "Dig It",
										key: "Dig It"
									},
									{
										label: "Let It Be",
										key: "Let It Be"
									},
									{
										label: "Maggie Mae",
										key: "Maggie Mae"
									},
									{
										label: "I've Got A Feeling",
										key: "I've Got A Feeling"
									},
									{
										label: "One After 909",
										key: "One After 909"
									},
									{
										label: "The Long And Winding Road",
										key: "The Long And Winding Road"
									},
									{
										label: "For You Blue",
										key: "For You Blue"
									},
									{
										label: "Get Back",
										key: "Get Back"
									}
								]
							}
						]
						`)),1)]),default:U(()=>[B(ce(fe),{options:i,"default-value":"Drive My Car","onUpdate:value":f})]),_:1}),B(b,{title:"Use checkbox"},{code:U(({html:p,js:c})=>[$(L(p(`
					<n-tree-select
						multiple
						clearable
						cascade
						checkable
						filterable
						:options
						:default-value="['Norwegian Wood']"
					/>
					`))+" "+L(c(`
						function handleUpdateValue(
							value: string | number | Array<string | number> | null,
							option: TreeSelectOption | null | Array<TreeSelectOption | null>						) {
							console.log(value, option)
						}
						const options = [
							{
								label: "Rubber Soul",
								key: "Rubber Soul",
								children: [
									{
										label: "Everybody's Got Something to Hide Except Me and My Monkey",
										key: "Everybody's Got Something to Hide Except Me and My Monkey"
									},
									{
										label: "Drive My Car",
										key: "Drive My Car",
										disabled: true
									},
									{
										label: "Norwegian Wood",
										key: "Norwegian Wood"
									},
									{
										label: "You Won't See",
										key: "You Won't See",
										disabled: true
									},
									{
										label: "Nowhere Man",
										key: "Nowhere Man"
									},
									{
										label: "Think For Yourself",
										key: "Think For Yourself"
									},
									{
										label: "The Word",
										key: "The Word"
									},
									{
										label: "Michelle",
										key: "Michelle",
										disabled: true
									},
									{
										label: "What goes on",
										key: "What goes on"
									},
									{
										label: "Girl",
										key: "Girl"
									},
									{
										label: "I'm looking through you",
										key: "I'm looking through you"
									},
									{
										label: "In My Life",
										key: "In My Life"
									},
									{
										label: "Wait",
										key: "Wait"
									}
								]
							},
							{
								label: "Let It Be",
								key: "Let It Be Album",
								children: [
									{
										label: "Two Of Us",
										key: "Two Of Us"
									},
									{
										label: "Dig A Pony",
										key: "Dig A Pony"
									},
									{
										label: "Across The Universe",
										key: "Across The Universe"
									},
									{
										label: "I Me Mine",
										key: "I Me Mine"
									},
									{
										label: "Dig It",
										key: "Dig It"
									},
									{
										label: "Let It Be",
										key: "Let It Be"
									},
									{
										label: "Maggie Mae",
										key: "Maggie Mae"
									},
									{
										label: "I've Got A Feeling",
										key: "I've Got A Feeling"
									},
									{
										label: "One After 909",
										key: "One After 909"
									},
									{
										label: "The Long And Winding Road",
										key: "The Long And Winding Road"
									},
									{
										label: "For You Blue",
										key: "For You Blue"
									},
									{
										label: "Get Back",
										key: "Get Back"
									}
								]
							}
						]
						`)),1)]),default:U(()=>[B(ce(fe),{multiple:"",cascade:"",clearable:"",checkable:"",filterable:"",options:i,"default-value":["Norwegian Wood"]})]),_:1})])])}}});export{qt as default};
