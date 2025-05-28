import{_ as L}from"./B3gcOJmJ.js";import{aw as A,az as E,d as B,a7 as y,aE as V,aF as k,s as x,aL as z,aN as $,bk as W,r as g,c as Y,a as D,b as f,g as e,f as s,h as b,w as l,u as t,t as r,O as U,B as _}from"./G6QKWTEq.js";import{N as H}from"./DIK8sDlK.js";import{N as M}from"./MJU1y0VJ.js";import{N as K}from"./CAni52Wj.js";import{N as h}from"./DpKJxeKj.js";import{N as a}from"./GviZQag8.js";import{N as v}from"./JgsrzyMB.js";import{N as I}from"./B7Wlydvg.js";import{N as j}from"./BMHtTokc.js";import"./B3cGRaQN.js";import"./-7JWf2sr.js";import"./Djnmnaff.js";import"./C7tXVBgH.js";import"./JmvYD4Wf.js";import"./DajhfOah.js";import"./BKi0bRfP.js";import"./Cn9YwB_a.js";import"./De1U64kx.js";import"./Bk_rJcZu.js";import"./BRZug4yH.js";import"./BvRjQS4e.js";const q=A("input-group-label",`
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 box-sizing: border-box;
 padding: 0 12px;
 display: inline-block;
 border-radius: var(--n-border-radius);
 background-color: var(--n-group-label-color);
 color: var(--n-group-label-text-color);
 font-size: var(--n-font-size);
 line-height: var(--n-height);
 height: var(--n-height);
 flex-shrink: 0;
 white-space: nowrap;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[E("border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-group-label-border);
 transition: border-color .3s var(--n-bezier);
 `)]),J=Object.assign(Object.assign({},k.props),{size:{type:String,default:"medium"},bordered:{type:Boolean,default:void 0}}),N=B({name:"InputGroupLabel",props:J,setup(p){const{mergedBorderedRef:u,mergedClsPrefixRef:d,inlineThemeDisabled:m}=V(p),w=k("Input","-input-group-label",q,W,p,d),o=x(()=>{const{size:n}=p,{common:{cubicBezierEaseInOut:c},self:{groupLabelColor:O,borderRadius:T,groupLabelTextColor:R,lineHeight:S,groupLabelBorder:P,[z("fontSize",n)]:F,[z("height",n)]:G}}=w.value;return{"--n-bezier":c,"--n-group-label-color":O,"--n-group-label-border":P,"--n-border-radius":T,"--n-group-label-text-color":R,"--n-font-size":F,"--n-line-height":S,"--n-height":G}}),i=m?$("input-group-label",x(()=>p.size[0]),o,p):void 0;return{mergedClsPrefix:d,mergedBordered:u,cssVars:m?void 0:o,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var p,u,d;const{mergedClsPrefix:m}=this;return(p=this.onRender)===null||p===void 0||p.call(this),y("div",{class:[`${m}-input-group-label`,this.themeClass],style:this.cssVars},(d=(u=this.$slots).default)===null||d===void 0?void 0:d.call(u),this.mergedBordered?y("div",{class:`${m}-input-group-label__border`}):null)}}),Q={class:"page"},X={class:"page-header"},Z={class:"links"},ee={href:"https://www.naiveui.com/en-US/light/components/input",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},te={class:"components-list"},le="tabler:external-link",C="ion:flash-outline",ne="ion:glasses-outline",oe="ion:glasses",Be=B({__name:"Input",setup(p){const u=g(null),d=g([{label:"option",value:"option"}]),m=g([{label:"option-1",value:"option-1",children:[{label:"option-1-1",value:"option-1-1"}]}]);return(w,o)=>{const i=L;return D(),Y("div",Q,[f("div",X,[o[3]||(o[3]=f("div",{class:"title"},"Input",-1)),f("div",Z,[f("a",ee,[e(b,{name:le,size:16}),o[2]||(o[2]=s(" docs "))])])]),f("div",te,[e(i,{title:"Basic"},{description:l(()=>[o[5]||(o[5]=s(" Basic use of ")),e(t(U),{code:""},{default:l(()=>o[4]||(o[4]=[s("n-input")])),_:1}),o[6]||(o[6]=s(" . "))]),code:l(({html:n,js:c})=>[s(r(n(`
					<n-space vertical>
						<n-input v-model:value="value" type="text" placeholder="Basic Input" />
						<n-input v-model:value="value" type="textarea" placeholder="Basic Textarea" />
					</n-space>
					`))+" "+r(c(`
						const value = ref(null)
						`)),1)]),default:l(()=>[e(t(h),{vertical:""},{default:l(()=>[e(t(a),{value:u.value,"onUpdate:value":o[0]||(o[0]=n=>u.value=n),type:"text",placeholder:"Basic Input"},null,8,["value"]),e(t(a),{value:u.value,"onUpdate:value":o[1]||(o[1]=n=>u.value=n),type:"textarea",placeholder:"Basic Textarea"},null,8,["value"])]),_:1})]),_:1}),e(i,{title:"Size"},{code:l(({html:n})=>[s(r(n(`
					<n-space vertical>
						<n-input type="text" size="tiny" placeholder="Tiny Input" />
						<n-input type="text" size="small" placeholder="Small Input" />
						<n-input type="text" placeholder="Medium Input" />
						<n-input type="text" size="large" placeholder="Large Input" />
					</n-space>
					`)),1)]),default:l(()=>[e(t(h),{vertical:""},{default:l(()=>[e(t(a),{type:"text",size:"tiny",placeholder:"Tiny Input"}),e(t(a),{type:"text",size:"small",placeholder:"Small Input"}),e(t(a),{type:"text",placeholder:"Medium Input"}),e(t(a),{type:"text",size:"large",placeholder:"Large Input"})]),_:1})]),_:1}),e(i,{title:"Prefix & suffix"},{code:l(({html:n,js:c})=>[s(r(n(`
					<n-space vertical>
						<n-input placeholder="Flash">
							<template #prefix>
								<n-icon :component="FlashOutline" />
							</template>
						</n-input>
						<n-input round placeholder="1,400,000">
							<template #suffix>$</template>
						</n-input>
						<n-input round placeholder="Flash">
							<template #suffix>
								<n-icon :component="FlashOutline" />
							</template>
						</n-input>
						<n-input type="text" placeholder="Basic Input" loading />
					</n-space>
					`))+" "+r(c(`
						import { FlashOutline } from '@vicons/ionicons5'
						`)),1)]),default:l(()=>[e(t(h),{vertical:""},{default:l(()=>[e(t(a),{placeholder:"Flash"},{prefix:l(()=>[e(b,{name:C})]),_:1}),e(t(a),{round:"",placeholder:"1,400,000"},{suffix:l(()=>o[7]||(o[7]=[s("$")])),_:1}),e(t(a),{round:"",placeholder:"Flash"},{suffix:l(()=>[e(b,{name:C})]),_:1}),e(t(a),{type:"text",placeholder:"Basic Input",loading:""})]),_:1})]),_:1}),e(i,{title:"Password & Clearable"},{code:l(({html:n,js:c})=>[s(r(n(`
					<n-space vertical>
						<n-input type="password" show-password-on="mousedown" placeholder="Password" :maxlength="8" />
						<n-input
							type="password"
							show-password-on="click"
							placeholder="Custom Password Toggle Icon"
							:maxlength="8"
						>
							<template #password-visible-icon>
								<n-icon :size="16" :component="GlassesOutline" />
							</template>
							<template #password-invisible-icon>
								<n-icon :size="16" :component="Glasses" />
							</template>
						</n-input>
						<n-input type="text" placeholder="Content is clearable" clearable />
					</n-space>
					`))+" "+r(c(`
						import { GlassesOutline, Glasses } from '@vicons/ionicons5'
						`)),1)]),default:l(()=>[e(t(h),{vertical:""},{default:l(()=>[e(t(a),{type:"password","show-password-on":"mousedown",placeholder:"Password",maxlength:8}),e(t(a),{type:"password","show-password-on":"click",placeholder:"Custom Password Toggle Icon",maxlength:8},{"password-visible-icon":l(()=>[e(b,{size:16,name:ne})]),"password-invisible-icon":l(()=>[e(b,{size:16,name:oe})]),_:1}),e(t(a),{type:"text",placeholder:"Content is clearable",clearable:""})]),_:1})]),_:1}),e(i,{title:"Autosize"},{code:l(({html:n})=>[s(r(n(`
					<n-space vertical>
						<n-input placeholder="Autosizable" autosize style="min-width: 50%" />
						<n-input
							placeholder="Autosizable"
							type="textarea"
							size="small"
							:autosize="{
								minRows: 3,
								maxRows: 5
							}"
						/>
						<n-input
							type="textarea"
							placeholder="Autosizable"
							:autosize="{
								minRows: 3
							}"
						/>
					</n-space>
					`)),1)]),default:l(()=>[e(t(h),{vertical:""},{default:l(()=>[e(t(a),{placeholder:"Autosizable",autosize:"",style:{"min-width":"50%"}}),e(t(a),{placeholder:"Autosizable",type:"textarea",size:"small",autosize:{minRows:3,maxRows:5}}),e(t(a),{type:"textarea",placeholder:"Autosizable",autosize:{minRows:3}})]),_:1})]),_:1}),e(i,{title:"Input group"},{code:l(({html:n,js:c})=>[s(r(n(`
					<n-space vertical>
						<n-input-group>
							<n-input :style="{ width: '33%' }" />
							<n-input-number :style="{ width: '33%' }" />
							<n-input :style="{ width: '33%' }" />
						</n-input-group>
						<n-input-group>
							<n-input-group-label>https://www.</n-input-group-label>
							<n-input :style="{ width: '33%' }" />
							<n-input-group-label>.com</n-input-group-label>
						</n-input-group>
						<n-input-group>
							<n-select :style="{ width: '33%' }" :options="selectOptions" />
							<n-cascader :style="{ width: '33%' }" :options="cascaderOptions" />
							<n-select :style="{ width: '33%' }" multiple :options="selectOptions" />
						</n-input-group>
						<n-input-group>
							<n-button type="primary">Search</n-button>
							<n-input :style="{ width: '50%' }" />
							<n-button type="primary" ghost>Search</n-button>
						</n-input-group>
						<n-input-group>
							<n-date-picker />
							<n-time-picker />
						</n-input-group>
					</n-space>
					`))+" "+r(c(`
						const selectOptions = ref([
							{
								label: "option",
								value: "option"
							}
						])
						const cascaderOptions = ref([
							{
								label: "option-1",
								value: "option-1",
								children: [
									{
										label: "option-1-1",
										value: "option-1-1"
									}
								]
							}
						])`)),1)]),default:l(()=>[e(t(h),{vertical:""},{default:l(()=>[e(t(v),null,{default:l(()=>[e(t(a),{style:{width:"33%"}}),e(t(H),{style:{width:"33%"}}),e(t(a),{style:{width:"33%"}})]),_:1}),e(t(v),null,{default:l(()=>[e(t(N),null,{default:l(()=>o[8]||(o[8]=[s("https://www.")])),_:1}),e(t(a),{style:{width:"33%"}}),e(t(N),null,{default:l(()=>o[9]||(o[9]=[s(".com")])),_:1})]),_:1}),e(t(v),null,{default:l(()=>[e(t(I),{style:{width:"33%"},options:d.value},null,8,["options"]),e(t(M),{style:{width:"33%"},options:m.value},null,8,["options"]),e(t(I),{style:{width:"33%"},multiple:"",options:d.value},null,8,["options"])]),_:1}),e(t(v),null,{default:l(()=>[e(t(_),{type:"primary"},{default:l(()=>o[10]||(o[10]=[s("Search")])),_:1}),e(t(a),{style:{width:"50%"}}),e(t(_),{type:"primary",ghost:""},{default:l(()=>o[11]||(o[11]=[s("Search")])),_:1})]),_:1}),e(t(v),null,{default:l(()=>[e(t(j)),e(t(K))]),_:1})]),_:1})]),_:1}),e(i,{title:"Pairwise value"},{code:l(({html:n})=>[s(r(n(`
					<n-input pair separator="-" :placeholder="['From', 'To']" clearable />
					`)),1)]),default:l(()=>[e(t(a),{pair:"",separator:"-",placeholder:["From","To"],clearable:""})]),_:1}),e(i,{title:"Word limit"},{code:l(({html:n})=>[s(r(n(`
					<n-space vertical>
						<n-input maxlength="30" show-count clearable />
						<n-input default-value="Yes" show-count clearable>
							<template #count="{ value }">
								{{ value.includes("Yes") ? "99+" : value.length }}
							</template>
						</n-input>
						<n-input type="textarea" maxlength="30" show-count />
						<n-input type="textarea" default-value="What?" show-count>
							<template #count="{ value }">
								{{ value.includes("What?") ? "99+" : value.length }}
							</template>
						</n-input>
					</n-space>
					`)),1)]),default:l(()=>[e(t(h),{vertical:""},{default:l(()=>[e(t(a),{maxlength:"30","show-count":"",clearable:""}),e(t(a),{"default-value":"Yes","show-count":"",clearable:""},{count:l(({value:n})=>[s(r(n.includes("Yes")?"99+":n.length),1)]),_:1}),e(t(a),{type:"textarea",maxlength:"30","show-count":""}),e(t(a),{type:"textarea","default-value":"What?","show-count":""},{count:l(({value:n})=>[s(r(n.includes("What?")?"99+":n.length),1)]),_:1})]),_:1})]),_:1})])])}}});export{Be as default};
