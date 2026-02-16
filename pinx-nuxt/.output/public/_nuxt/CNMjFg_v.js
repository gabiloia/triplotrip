import{_ as oe}from"./BLzEf9tb.js";import{d as x,ac as l,as as se,at as H,az as I,aB as X,aC as ue,aA as de,B as O,b5 as Y,bi as Z,aH as ce,s as E,aJ as pe,aI as ae,bn as me,aL as ve,bm as fe,av as _,q as F,b8 as he,aV as q,ah as J,ag as L,bh as ye,ez as ge,aR as be,aU as j,a2 as Ve,o as ke,c as we,a as V,e as y,_ as Ce,b as k,w,u as P,t as B,z as ee}from"./BboPWEKj.js";import{N as M}from"./DawznoV1.js";import{A as te}from"./Cf99Tf4m.js";import{N as Pe}from"./CncItRYq.js";import{R as Ie,N as Se}from"./_o5zs47O.js";import{A as Re}from"./VUHNlTpz.js";import{N as Ae}from"./DnnAk1_e.js";import{N as Be}from"./B5ctO347.js";import"./BmSAZQUJ.js";import"./BoIEE7Tp.js";import"./CBN863Oo.js";import"./DqYVDO9Y.js";import"./DxB_AnUS.js";import"./C6MRmTaG.js";import"./DqhOMRwD.js";import"./ChA4gcHA.js";import"./DgobSdsA.js";import"./BY5EArDQ.js";import"./BuIxUXC0.js";const Ue=x({name:"ArrowUp",render(){return l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},l("g",{fill:"none"},l("path",{d:"M3.13 9.163a.5.5 0 1 0 .74.674L9.5 3.67V17.5a.5.5 0 0 0 1 0V3.672l5.63 6.165a.5.5 0 0 0 .738-.674l-6.315-6.916a.746.746 0 0 0-.632-.24a.746.746 0 0 0-.476.24L3.131 9.163z",fill:"currentColor"})))}}),W=se("n-dynamic-input"),Ne=x({name:"DynamicInputInputPreset",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:""},disabled:Boolean,parentPath:String,path:String,onUpdateValue:{type:Function,required:!0}},setup(){const{mergedThemeRef:n,placeholderRef:p}=H(W);return{mergedTheme:n,placeholder:p}},render(){const{mergedTheme:n,placeholder:p,value:c,clsPrefix:o,onUpdateValue:s,disabled:h}=this;return l("div",{class:`${o}-dynamic-input-preset-input`},l(M,{theme:n.peers.Input,"theme-overrides":n.peerOverrides.Input,value:c,placeholder:p,onUpdateValue:s,disabled:h}))}}),De=x({name:"DynamicInputPairPreset",props:{clsPrefix:{type:String,required:!0},value:{type:Object,default:()=>({key:"",value:""})},disabled:Boolean,parentPath:String,path:String,onUpdateValue:{type:Function,required:!0}},setup(n){const{mergedThemeRef:p,keyPlaceholderRef:c,valuePlaceholderRef:o}=H(W);return{mergedTheme:p,keyPlaceholder:c,valuePlaceholder:o,handleKeyInput(s){n.onUpdateValue({key:s,value:n.value.value})},handleValueInput(s){n.onUpdateValue({key:n.value.key,value:s})}}},render(){const{mergedTheme:n,keyPlaceholder:p,valuePlaceholder:c,value:o,clsPrefix:s,disabled:h}=this;return l("div",{class:`${s}-dynamic-input-preset-pair`},l(M,{theme:n.peers.Input,"theme-overrides":n.peerOverrides.Input,value:o.key,class:`${s}-dynamic-input-pair-input`,placeholder:p,onUpdateValue:this.handleKeyInput,disabled:h}),l(M,{theme:n.peers.Input,"theme-overrides":n.peerOverrides.Input,value:o.value,class:`${s}-dynamic-input-pair-input`,placeholder:c,onUpdateValue:this.handleValueInput,disabled:h}))}}),Oe=I("dynamic-input",{width:"100%"},[I("dynamic-input-item",`
 margin-bottom: 10px;
 display: flex;
 flex-wrap: nowrap;
 `,[I("dynamic-input-preset-input",{flex:1,alignItems:"center"}),I("dynamic-input-preset-pair",`
 flex: 1;
 display: flex;
 align-items: center;
 `,[I("dynamic-input-pair-input",[X("&:first-child",{"margin-right":"12px"})])]),ue("action",`
 align-self: flex-start;
 display: flex;
 justify-content: flex-end;
 flex-shrink: 0;
 flex-grow: 0;
 margin: var(--action-margin);
 `,[de("icon",{cursor:"pointer"})]),X("&:last-child",{marginBottom:0})]),I("form-item",`
 padding-top: 0 !important;
 margin-right: 0 !important;
 `,[I("form-item-blank",{paddingTop:"0 !important"})])]),K=new WeakMap,_e=Object.assign(Object.assign({},ae.props),{max:Number,min:{type:Number,default:0},value:Array,defaultValue:{type:Array,default:()=>[]},preset:{type:String,default:"input"},keyField:String,itemClass:String,itemStyle:[String,Object],keyPlaceholder:{type:String,default:""},valuePlaceholder:{type:String,default:""},placeholder:{type:String,default:""},disabled:Boolean,showSortButton:Boolean,createButtonProps:Object,onCreate:Function,onRemove:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClear:Function,onInput:[Function,Array]}),ne=x({name:"DynamicInput",props:_e,setup(n,{slots:p}){const{mergedComponentPropsRef:c,mergedClsPrefixRef:o,mergedRtlRef:s,inlineThemeDisabled:h}=ce(),f=H(ye,null),a=E(n.defaultValue),S=j(n,"value"),i=pe(S,a),m=ae("DynamicInput","-dynamic-input",Oe,ge,n,o),v=F(()=>{const{value:e}=i;if(Array.isArray(e)){const{max:t}=n;return t!==void 0&&e.length>=t}return!1}),T=F(()=>{const{value:e}=i;return Array.isArray(e)?e.length<=n.min:!0}),$=F(()=>{var e,t;return(t=(e=c?.value)===null||e===void 0?void 0:e.DynamicInput)===null||t===void 0?void 0:t.buttonSize});function g(e){const{onInput:t,"onUpdate:value":u,onUpdateValue:r}=n;t&&q(t,e),u&&q(u,e),r&&q(r,e),a.value=e}function z(e,t){if(e==null||typeof e!="object")return t;const u=J(e)?L(e):e;let r=K.get(u);return r===void 0&&K.set(u,r=he()),r}function U(e,t){const{value:u}=i,r=Array.from(u??[]),C=r[e];if(r[e]=t,C&&t&&typeof C=="object"&&typeof t=="object"){const re=J(C)?L(C):C,ie=J(t)?L(t):t,Q=K.get(re);Q!==void 0&&K.set(ie,Q)}g(r)}function N(){b(-1)}function b(e){const{value:t}=i,{onCreate:u}=n,r=Array.from(t??[]);if(u)r.splice(e+1,0,u(e+1)),g(r);else if(p.default)r.splice(e+1,0,null),g(r);else switch(n.preset){case"input":r.splice(e+1,0,""),g(r);break;case"pair":r.splice(e+1,0,{key:"",value:""}),g(r);break}}function R(e){const{value:t}=i;if(!Array.isArray(t))return;const{min:u}=n;if(t.length<=u)return;const{onRemove:r}=n;r&&r(e);const C=Array.from(t);C.splice(e,1),g(C)}function d(e,t,u){if(t<0||u<0||t>=e.length||u>=e.length||t===u)return;const r=e[t];e[t]=e[u],e[u]=r}function D(e,t){const{value:u}=i;if(!Array.isArray(u))return;const r=Array.from(u);e==="up"&&d(r,t,t-1),e==="down"&&d(r,t,t+1),g(r)}be(W,{mergedThemeRef:m,keyPlaceholderRef:j(n,"keyPlaceholder"),valuePlaceholderRef:j(n,"valuePlaceholder"),placeholderRef:j(n,"placeholder")});const le=me("DynamicInput",s,o),G=F(()=>{const{self:{actionMargin:e,actionMarginRtl:t}}=m.value;return{"--action-margin":e,"--action-margin-rtl":t}}),A=h?ve("dynamic-input",void 0,G,n):void 0;return{locale:fe("DynamicInput").localeRef,rtlEnabled:le,buttonSize:$,mergedClsPrefix:o,NFormItem:f,uncontrolledValue:a,mergedValue:i,insertionDisabled:v,removeDisabled:T,handleCreateClick:N,ensureKey:z,handleValueChange:U,remove:R,move:D,createItem:b,mergedTheme:m,cssVars:h?void 0:G,themeClass:A?.themeClass,onRender:A?.onRender}},render(){const{$slots:n,itemClass:p,buttonSize:c,mergedClsPrefix:o,mergedValue:s,locale:h,mergedTheme:f,keyField:a,itemStyle:S,preset:i,showSortButton:m,NFormItem:v,ensureKey:T,handleValueChange:$,remove:g,createItem:z,move:U,onRender:N,disabled:b}=this;return N?.(),l("div",{class:[`${o}-dynamic-input`,this.rtlEnabled&&`${o}-dynamic-input--rtl`,this.themeClass],style:this.cssVars},!Array.isArray(s)||s.length===0?l(O,Object.assign({block:!0,ghost:!0,dashed:!0,size:c},this.createButtonProps,{disabled:this.insertionDisabled||b,theme:f.peers.Button,themeOverrides:f.peerOverrides.Button,onClick:this.handleCreateClick}),{default:()=>Y(n["create-button-default"],()=>[h.create]),icon:()=>Y(n["create-button-icon"],()=>[l(_,{clsPrefix:o},{default:()=>l(te,null)})])}):s.map((R,d)=>l("div",{key:a?R[a]:T(R,d),"data-key":a?R[a]:T(R,d),class:[`${o}-dynamic-input-item`,p],style:S},Z(n.default,{value:s[d],index:d},()=>[i==="input"?l(Ne,{disabled:b,clsPrefix:o,value:s[d],parentPath:v?v.path.value:void 0,path:v?.path.value?`${v.path.value}[${d}]`:void 0,onUpdateValue:D=>{$(d,D)}}):i==="pair"?l(De,{disabled:b,clsPrefix:o,value:s[d],parentPath:v?v.path.value:void 0,path:v?.path.value?`${v.path.value}[${d}]`:void 0,onUpdateValue:D=>{$(d,D)}}):null]),Z(n.action,{value:s[d],index:d,create:z,remove:g,move:U},()=>[l("div",{class:`${o}-dynamic-input-item__action`},l(Pe,{size:c},{default:()=>[l(O,{disabled:this.removeDisabled||b,theme:f.peers.Button,themeOverrides:f.peerOverrides.Button,circle:!0,onClick:()=>{g(d)}},{icon:()=>l(_,{clsPrefix:o},{default:()=>l(Ie,null)})}),l(O,{disabled:this.insertionDisabled||b,circle:!0,theme:f.peers.Button,themeOverrides:f.peerOverrides.Button,onClick:()=>{z(d)}},{icon:()=>l(_,{clsPrefix:o},{default:()=>l(te,null)})}),m?l(O,{disabled:d===0||b,circle:!0,theme:f.peers.Button,themeOverrides:f.peerOverrides.Button,onClick:()=>{U("up",d)}},{icon:()=>l(_,{clsPrefix:o},{default:()=>l(Ue,null)})}):null,m?l(O,{disabled:d===s.length-1||b,circle:!0,theme:f.peers.Button,themeOverrides:f.peerOverrides.Button,onClick:()=>{U("down",d)}},{icon:()=>l(_,{clsPrefix:o},{default:()=>l(Re,null)})}):null]}))]))))}}),xe={class:"page"},Te={class:"page-header"},$e={class:"links"},ze={href:"https://www.naiveui.com/en-US/light/components/dynamic-input",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},Fe={class:"components-list"},je={class:"mb-3"},Ke={style:{direction:"ltr"}},Ee={style:{display:"flex","align-items":"center",gap:"12px",width:"100%"}},Me={style:{direction:"ltr"}},qe="tabler:external-link",ct=x({__name:"DynamicInput",setup(n){const p=E(["","",""]),c=E("input"),o=[{label:"input",value:"input"},{label:"pair",value:"pair"}],s=E([{isCheck:!0,num:1,string:"A String"}]);function h(){return{isCheck:!1,num:1,string:"A String"}}return Ve(c,()=>{p.value=[]}),(f,a)=>{const S=oe;return ke(),we("div",xe,[V("div",Te,[a[4]||(a[4]=V("div",{class:"title"},"Dynamic Input",-1)),V("div",$e,[V("a",ze,[y(Ce,{name:qe,size:16}),a[3]||(a[3]=k(" docs ",-1))])])]),V("div",Fe,[y(S,{title:"Use input preset"},{description:w(()=>[a[7]||(a[7]=k(" By default, the preset element of ",-1)),y(P(ee),{code:""},{default:w(()=>[...a[5]||(a[5]=[k("n-dynamic-input",-1)])]),_:1}),a[8]||(a[8]=k(" is ",-1)),y(P(ee),{code:""},{default:w(()=>[...a[6]||(a[6]=[k("input",-1)])]),_:1}),a[9]||(a[9]=k(" . ",-1))]),code:w(({html:i,js:m})=>[k(B(i(`
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
						`)),1)]),default:w(()=>[V("div",je,[a[10]||(a[10]=V("label",null,"preset:",-1)),y(P(Ae),{value:c.value,"onUpdate:value":a[0]||(a[0]=i=>c.value=i),options:o},null,8,["value"])]),y(P(ne),{value:p.value,"onUpdate:value":a[1]||(a[1]=i=>p.value=i),placeholder:"Please type here",min:3,max:10,preset:c.value},null,8,["value","preset"]),V("pre",Ke,B(JSON.stringify(p.value,null,2)),1)]),_:1}),y(S,{title:"Customizing input content"},{code:w(({html:i,js:m})=>[k(B(i(`
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
						`)),1)]),default:w(()=>[y(P(ne),{value:s.value,"onUpdate:value":a[2]||(a[2]=i=>s.value=i),"on-create":h,"show-sort-button":""},{"create-button-default":w(()=>[...a[11]||(a[11]=[k("Add whatever you want",-1)])]),default:w(({value:i})=>[V("div",Ee,[y(P(Be),{checked:i.isCheck,"onUpdate:checked":m=>i.isCheck=m},null,8,["checked","onUpdate:checked"]),y(P(Se),{value:i.num,"onUpdate:value":m=>i.num=m,style:{width:"160px"}},null,8,["value","onUpdate:value"]),y(P(M),{value:i.string,"onUpdate:value":m=>i.string=m,type:"text"},null,8,["value","onUpdate:value"])])]),_:1},8,["value"]),V("pre",Me,B(JSON.stringify(s.value,null,2)),1)]),_:1})])])}}});export{ct as default};
