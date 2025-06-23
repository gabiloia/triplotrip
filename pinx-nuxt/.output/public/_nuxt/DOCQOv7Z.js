import{_ as oe}from"./-8skxH3i.js";import{d as x,ab as l,aB as se,aC as W,ap as I,at as ue,ao as Y,as as de,B as D,b8 as X,bk as Z,au as ce,q as E,ay as z,aQ as pe,aw as ae,p as j,ax as me,av as ve,az as fe,bo as he,aI as O,ey as ye,ag as q,af as J,bc as ge,aY as L,bj as be,a1 as ke,c as Ve,o as we,a as k,e as y,b as V,_ as Ce,w,u as P,t as B,z as ee}from"./jbHnS89g.js";import{N as M}from"./C87DIHhO.js";import{A as te}from"./uwUEFDAv.js";import{N as Pe}from"./CjYmeRH6.js";import{R as Ie,N as Se}from"./DTWw5ahv.js";import{A as Re}from"./B42eQW5D.js";import{N as Ae}from"./BzFbAY3r.js";import{N as Be}from"./DamakL2g.js";import"./CcTAenLk.js";import"./C1kpI9sS.js";import"./q6whKkek.js";import"./B5OgzstC.js";import"./BMwUx3Op.js";import"./BJ135ld3.js";import"./B6jyqG9C.js";import"./B4buEZAn.js";import"./DHa6g3zM.js";import"./CJBU6IPR.js";import"./D2pdN0Kf.js";const Ue=x({name:"ArrowUp",render(){return l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},l("g",{fill:"none"},l("path",{d:"M3.13 9.163a.5.5 0 1 0 .74.674L9.5 3.67V17.5a.5.5 0 0 0 1 0V3.672l5.63 6.165a.5.5 0 0 0 .738-.674l-6.315-6.916a.746.746 0 0 0-.632-.24a.746.746 0 0 0-.476.24L3.131 9.163z",fill:"currentColor"})))}}),G=se("n-dynamic-input"),Ne=x({name:"DynamicInputInputPreset",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:""},disabled:Boolean,parentPath:String,path:String,onUpdateValue:{type:Function,required:!0}},setup(){const{mergedThemeRef:n,placeholderRef:p}=W(G);return{mergedTheme:n,placeholder:p}},render(){const{mergedTheme:n,placeholder:p,value:c,clsPrefix:o,onUpdateValue:s,disabled:h}=this;return l("div",{class:`${o}-dynamic-input-preset-input`},l(M,{theme:n.peers.Input,"theme-overrides":n.peerOverrides.Input,value:c,placeholder:p,onUpdateValue:s,disabled:h}))}}),_e=x({name:"DynamicInputPairPreset",props:{clsPrefix:{type:String,required:!0},value:{type:Object,default:()=>({key:"",value:""})},disabled:Boolean,parentPath:String,path:String,onUpdateValue:{type:Function,required:!0}},setup(n){const{mergedThemeRef:p,keyPlaceholderRef:c,valuePlaceholderRef:o}=W(G);return{mergedTheme:p,keyPlaceholder:c,valuePlaceholder:o,handleKeyInput(s){n.onUpdateValue({key:s,value:n.value.value})},handleValueInput(s){n.onUpdateValue({key:n.value.key,value:s})}}},render(){const{mergedTheme:n,keyPlaceholder:p,valuePlaceholder:c,value:o,clsPrefix:s,disabled:h}=this;return l("div",{class:`${s}-dynamic-input-preset-pair`},l(M,{theme:n.peers.Input,"theme-overrides":n.peerOverrides.Input,value:o.key,class:`${s}-dynamic-input-pair-input`,placeholder:p,onUpdateValue:this.handleKeyInput,disabled:h}),l(M,{theme:n.peers.Input,"theme-overrides":n.peerOverrides.Input,value:o.value,class:`${s}-dynamic-input-pair-input`,placeholder:c,onUpdateValue:this.handleValueInput,disabled:h}))}}),De=I("dynamic-input",{width:"100%"},[I("dynamic-input-item",`
 margin-bottom: 10px;
 display: flex;
 flex-wrap: nowrap;
 `,[I("dynamic-input-preset-input",{flex:1,alignItems:"center"}),I("dynamic-input-preset-pair",`
 flex: 1;
 display: flex;
 align-items: center;
 `,[I("dynamic-input-pair-input",[Y("&:first-child",{"margin-right":"12px"})])]),ue("action",`
 align-self: flex-start;
 display: flex;
 justify-content: flex-end;
 flex-shrink: 0;
 flex-grow: 0;
 margin: var(--action-margin);
 `,[de("icon",{cursor:"pointer"})]),Y("&:last-child",{marginBottom:0})]),I("form-item",`
 padding-top: 0 !important;
 margin-right: 0 !important;
 `,[I("form-item-blank",{paddingTop:"0 !important"})])]),K=new WeakMap,Oe=Object.assign(Object.assign({},ae.props),{max:Number,min:{type:Number,default:0},value:Array,defaultValue:{type:Array,default:()=>[]},preset:{type:String,default:"input"},keyField:String,itemClass:String,itemStyle:[String,Object],keyPlaceholder:{type:String,default:""},valuePlaceholder:{type:String,default:""},placeholder:{type:String,default:""},disabled:Boolean,showSortButton:Boolean,createButtonProps:Object,onCreate:Function,onRemove:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClear:Function,onInput:[Function,Array]}),ne=x({name:"DynamicInput",props:Oe,setup(n,{slots:p}){const{mergedComponentPropsRef:c,mergedClsPrefixRef:o,mergedRtlRef:s,inlineThemeDisabled:h}=ce(),f=W(be,null),a=E(n.defaultValue),S=z(n,"value"),i=pe(S,a),m=ae("DynamicInput","-dynamic-input",De,ye,n,o),v=j(()=>{const{value:e}=i;if(Array.isArray(e)){const{max:t}=n;return t!==void 0&&e.length>=t}return!1}),T=j(()=>{const{value:e}=i;return Array.isArray(e)?e.length<=n.min:!0}),$=j(()=>{var e,t;return(t=(e=c==null?void 0:c.value)===null||e===void 0?void 0:e.DynamicInput)===null||t===void 0?void 0:t.buttonSize});function g(e){const{onInput:t,"onUpdate:value":u,onUpdateValue:r}=n;t&&L(t,e),u&&L(u,e),r&&L(r,e),a.value=e}function F(e,t){if(e==null||typeof e!="object")return t;const u=q(e)?J(e):e;let r=K.get(u);return r===void 0&&K.set(u,r=ge()),r}function U(e,t){const{value:u}=i,r=Array.from(u??[]),C=r[e];if(r[e]=t,C&&t&&typeof C=="object"&&typeof t=="object"){const re=q(C)?J(C):C,ie=q(t)?J(t):t,Q=K.get(re);Q!==void 0&&K.set(ie,Q)}g(r)}function N(){b(-1)}function b(e){const{value:t}=i,{onCreate:u}=n,r=Array.from(t??[]);if(u)r.splice(e+1,0,u(e+1)),g(r);else if(p.default)r.splice(e+1,0,null),g(r);else switch(n.preset){case"input":r.splice(e+1,0,""),g(r);break;case"pair":r.splice(e+1,0,{key:"",value:""}),g(r);break}}function R(e){const{value:t}=i;if(!Array.isArray(t))return;const{min:u}=n;if(t.length<=u)return;const{onRemove:r}=n;r&&r(e);const C=Array.from(t);C.splice(e,1),g(C)}function d(e,t,u){if(t<0||u<0||t>=e.length||u>=e.length||t===u)return;const r=e[t];e[t]=e[u],e[u]=r}function _(e,t){const{value:u}=i;if(!Array.isArray(u))return;const r=Array.from(u);e==="up"&&d(r,t,t-1),e==="down"&&d(r,t,t+1),g(r)}me(G,{mergedThemeRef:m,keyPlaceholderRef:z(n,"keyPlaceholder"),valuePlaceholderRef:z(n,"valuePlaceholder"),placeholderRef:z(n,"placeholder")});const le=ve("DynamicInput",s,o),H=j(()=>{const{self:{actionMargin:e,actionMarginRtl:t}}=m.value;return{"--action-margin":e,"--action-margin-rtl":t}}),A=h?fe("dynamic-input",void 0,H,n):void 0;return{locale:he("DynamicInput").localeRef,rtlEnabled:le,buttonSize:$,mergedClsPrefix:o,NFormItem:f,uncontrolledValue:a,mergedValue:i,insertionDisabled:v,removeDisabled:T,handleCreateClick:N,ensureKey:F,handleValueChange:U,remove:R,move:_,createItem:b,mergedTheme:m,cssVars:h?void 0:H,themeClass:A==null?void 0:A.themeClass,onRender:A==null?void 0:A.onRender}},render(){const{$slots:n,itemClass:p,buttonSize:c,mergedClsPrefix:o,mergedValue:s,locale:h,mergedTheme:f,keyField:a,itemStyle:S,preset:i,showSortButton:m,NFormItem:v,ensureKey:T,handleValueChange:$,remove:g,createItem:F,move:U,onRender:N,disabled:b}=this;return N==null||N(),l("div",{class:[`${o}-dynamic-input`,this.rtlEnabled&&`${o}-dynamic-input--rtl`,this.themeClass],style:this.cssVars},!Array.isArray(s)||s.length===0?l(D,Object.assign({block:!0,ghost:!0,dashed:!0,size:c},this.createButtonProps,{disabled:this.insertionDisabled||b,theme:f.peers.Button,themeOverrides:f.peerOverrides.Button,onClick:this.handleCreateClick}),{default:()=>X(n["create-button-default"],()=>[h.create]),icon:()=>X(n["create-button-icon"],()=>[l(O,{clsPrefix:o},{default:()=>l(te,null)})])}):s.map((R,d)=>l("div",{key:a?R[a]:T(R,d),"data-key":a?R[a]:T(R,d),class:[`${o}-dynamic-input-item`,p],style:S},Z(n.default,{value:s[d],index:d},()=>[i==="input"?l(Ne,{disabled:b,clsPrefix:o,value:s[d],parentPath:v?v.path.value:void 0,path:v!=null&&v.path.value?`${v.path.value}[${d}]`:void 0,onUpdateValue:_=>{$(d,_)}}):i==="pair"?l(_e,{disabled:b,clsPrefix:o,value:s[d],parentPath:v?v.path.value:void 0,path:v!=null&&v.path.value?`${v.path.value}[${d}]`:void 0,onUpdateValue:_=>{$(d,_)}}):null]),Z(n.action,{value:s[d],index:d,create:F,remove:g,move:U},()=>[l("div",{class:`${o}-dynamic-input-item__action`},l(Pe,{size:c},{default:()=>[l(D,{disabled:this.removeDisabled||b,theme:f.peers.Button,themeOverrides:f.peerOverrides.Button,circle:!0,onClick:()=>{g(d)}},{icon:()=>l(O,{clsPrefix:o},{default:()=>l(Ie,null)})}),l(D,{disabled:this.insertionDisabled||b,circle:!0,theme:f.peers.Button,themeOverrides:f.peerOverrides.Button,onClick:()=>{F(d)}},{icon:()=>l(O,{clsPrefix:o},{default:()=>l(te,null)})}),m?l(D,{disabled:d===0||b,circle:!0,theme:f.peers.Button,themeOverrides:f.peerOverrides.Button,onClick:()=>{U("up",d)}},{icon:()=>l(O,{clsPrefix:o},{default:()=>l(Ue,null)})}):null,m?l(D,{disabled:d===s.length-1||b,circle:!0,theme:f.peers.Button,themeOverrides:f.peerOverrides.Button,onClick:()=>{U("down",d)}},{icon:()=>l(O,{clsPrefix:o},{default:()=>l(Re,null)})}):null]}))]))))}}),xe={class:"page"},Te={class:"page-header"},$e={class:"links"},Fe={href:"https://www.naiveui.com/en-US/light/components/dynamic-input",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},ze={class:"components-list"},je={class:"mb-3"},Ke={style:{direction:"ltr"}},Ee={style:{display:"flex","align-items":"center",gap:"12px",width:"100%"}},Me={style:{direction:"ltr"}},qe="tabler:external-link",ct=x({__name:"DynamicInput",setup(n){const p=E(["","",""]),c=E("input"),o=[{label:"input",value:"input"},{label:"pair",value:"pair"}],s=E([{isCheck:!0,num:1,string:"A String"}]);function h(){return{isCheck:!1,num:1,string:"A String"}}return ke(c,()=>{p.value=[]}),(f,a)=>{const S=oe;return we(),Ve("div",xe,[k("div",Te,[a[4]||(a[4]=k("div",{class:"title"},"Dynamic Input",-1)),k("div",$e,[k("a",Fe,[y(Ce,{name:qe,size:16}),a[3]||(a[3]=V(" docs "))])])]),k("div",ze,[y(S,{title:"Use input preset"},{description:w(()=>[a[7]||(a[7]=V(" By default, the preset element of ")),y(P(ee),{code:""},{default:w(()=>a[5]||(a[5]=[V("n-dynamic-input")])),_:1,__:[5]}),a[8]||(a[8]=V(" is ")),y(P(ee),{code:""},{default:w(()=>a[6]||(a[6]=[V("input")])),_:1,__:[6]}),a[9]||(a[9]=V(" . "))]),code:w(({html:i,js:m})=>[V(B(i(`
					<div class="mb-3">
						<label>preset:</label>
						<n-select v-model:value="preset" :options="presetOptions" />
					</div>
					<n-dynamic-input
						v-model:value="value"
						placeholder="Please type here"
						:min="3"
						:max="10"
						:preset="preset"
					/>
					<pre>{{ JSON.stringify(value, null, 2) }}</pre>
					`))+" "+B(m(`
						const value = ref(["", "", ""])
						const preset = ref<"input" | "pair" | undefined>("input")
						const presetOptions = [
							{
								label: "input",
								value: "input"
							},
							{
								label: "pair",
								value: "pair"
							}
						]

						watch(preset, () => {
							value.value = []
						})
						`)),1)]),default:w(()=>[k("div",je,[a[10]||(a[10]=k("label",null,"preset:",-1)),y(P(Ae),{value:c.value,"onUpdate:value":a[0]||(a[0]=i=>c.value=i),options:o},null,8,["value"])]),y(P(ne),{value:p.value,"onUpdate:value":a[1]||(a[1]=i=>p.value=i),placeholder:"Please type here",min:3,max:10,preset:c.value},null,8,["value","preset"]),k("pre",Ke,B(JSON.stringify(p.value,null,2)),1)]),_:1}),y(S,{title:"Customizing input content"},{code:w(({html:i,js:m})=>[V(B(i(`
					<n-dynamic-input v-model:value="customValue" :on-create="onCreate" show-sort-button>
						<template #create-button-default>Add whatever you want</template>
						<template #default="{ value }">
							<div style="display: flex; align-items: center; gap: 12px; width: 100%">
								<n-checkbox v-model:checked="value.isCheck" />
								<n-input-number v-model:value="value.num" style="width: 160px" />
								<n-input v-model:value="value.string" type="text" />
							</div>
						</template>
					</n-dynamic-input>
					<pre>{{ JSON.stringify(customValue, null, 2) }}</pre>
					`))+" "+B(m(`
						const customValue = ref([
							{
								isCheck: true,
								num: 1,
								string: "A String"
							}
						])
						function onCreate() {
							return {
								isCheck: false,
								num: 1,
								string: "A String"
							}
						}
						`)),1)]),default:w(()=>[y(P(ne),{value:s.value,"onUpdate:value":a[2]||(a[2]=i=>s.value=i),"on-create":h,"show-sort-button":""},{"create-button-default":w(()=>a[11]||(a[11]=[V("Add whatever you want")])),default:w(({value:i})=>[k("div",Ee,[y(P(Be),{checked:i.isCheck,"onUpdate:checked":m=>i.isCheck=m},null,8,["checked","onUpdate:checked"]),y(P(Se),{value:i.num,"onUpdate:value":m=>i.num=m,style:{width:"160px"}},null,8,["value","onUpdate:value"]),y(P(M),{value:i.string,"onUpdate:value":m=>i.string=m,type:"text"},null,8,["value","onUpdate:value"])])]),_:1},8,["value"]),k("pre",Me,B(JSON.stringify(s.value,null,2)),1)]),_:1})])])}}});export{ct as default};
