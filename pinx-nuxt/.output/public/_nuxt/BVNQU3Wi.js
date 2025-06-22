import{_ as L}from"./BuuMzocr.js";import{ap as A,at as V,d as B,a9 as y,au as $,aw as k,p as x,aS as _,az as E,bp as W,q as g,c as Y,o as D,a as f,e,b as i,_ as b,w as l,u as t,t as r,z as U,B as z}from"./BLt7BUd4.js";import{N as H}from"./B-PGhVoQ.js";import{N as M}from"./BiRoUWHK.js";import{N as q}from"./M5mtkWfA.js";import{N as K}from"./jV54TPS8.js";import{N as h}from"./EuFfZB9I.js";import{N as a}from"./CB4SBHti.js";import{N as v}from"./DNxiXBrH.js";import{N as I}from"./DiFGkX80.js";import"./7rpDJmMB.js";import"./nTUZlSvr.js";import"./D2B_LiMu.js";import"./MqbEeWZ9.js";import"./D3fekM85.js";import"./DIYpf7G8.js";import"./B3JUq9Jk.js";import"./DrAAV5Kq.js";import"./BMwUx3Op.js";import"./BKt-a8eD.js";import"./BSBNusuN.js";import"./Cqm5KxDu.js";import"./CQimj0c1.js";import"./Dhl8VyyF.js";import"./4HXsLNGD.js";import"./BJogMQFp.js";import"./Bk_rJcZu.js";import"./BqVSWgeV.js";const j=A("input-group-label",`
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
`,[V("border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-group-label-border);
 transition: border-color .3s var(--n-bezier);
 `)]),J=Object.assign(Object.assign({},k.props),{size:{type:String,default:"medium"},bordered:{type:Boolean,default:void 0}}),N=B({name:"InputGroupLabel",props:J,setup(p){const{mergedBorderedRef:u,mergedClsPrefixRef:d,inlineThemeDisabled:m}=$(p),w=k("Input","-input-group-label",j,W,p,d),n=x(()=>{const{size:o}=p,{common:{cubicBezierEaseInOut:c},self:{groupLabelColor:O,borderRadius:S,groupLabelTextColor:T,lineHeight:R,groupLabelBorder:P,[_("fontSize",o)]:F,[_("height",o)]:G}}=w.value;return{"--n-bezier":c,"--n-group-label-color":O,"--n-group-label-border":P,"--n-border-radius":S,"--n-group-label-text-color":T,"--n-font-size":F,"--n-line-height":R,"--n-height":G}}),s=m?E("input-group-label",x(()=>p.size[0]),n,p):void 0;return{mergedClsPrefix:d,mergedBordered:u,cssVars:m?void 0:n,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var p,u,d;const{mergedClsPrefix:m}=this;return(p=this.onRender)===null||p===void 0||p.call(this),y("div",{class:[`${m}-input-group-label`,this.themeClass],style:this.cssVars},(d=(u=this.$slots).default)===null||d===void 0?void 0:d.call(u),this.mergedBordered?y("div",{class:`${m}-input-group-label__border`}):null)}}),Q={class:"page"},X={class:"page-header"},Z={class:"links"},ee={href:"https://www.naiveui.com/en-US/light/components/input",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},te={class:"components-list"},le="tabler:external-link",C="ion:flash-outline",oe="ion:glasses-outline",ne="ion:glasses",Pe=B({__name:"Input",setup(p){const u=g(null),d=g([{label:"option",value:"option"}]),m=g([{label:"option-1",value:"option-1",children:[{label:"option-1-1",value:"option-1-1"}]}]);return(w,n)=>{const s=L;return D(),Y("div",Q,[f("div",X,[n[3]||(n[3]=f("div",{class:"title"},"Input",-1)),f("div",Z,[f("a",ee,[e(b,{name:le,size:16}),n[2]||(n[2]=i(" docs "))])])]),f("div",te,[e(s,{title:"Basic"},{description:l(()=>[n[5]||(n[5]=i(" Basic use of ")),e(t(U),{code:""},{default:l(()=>n[4]||(n[4]=[i("n-input")])),_:1,__:[4]}),n[6]||(n[6]=i(" . "))]),code:l(({html:o,js:c})=>[i(r(o(`
					<n-space vertical>
						<n-input v-model:value="value" type="text" placeholder="Basic Input" />
						<n-input v-model:value="value" type="textarea" placeholder="Basic Textarea" />
					</n-space>
					`))+" "+r(c(`
						const value = ref(null)
						`)),1)]),default:l(()=>[e(t(h),{vertical:""},{default:l(()=>[e(t(a),{value:u.value,"onUpdate:value":n[0]||(n[0]=o=>u.value=o),type:"text",placeholder:"Basic Input"},null,8,["value"]),e(t(a),{value:u.value,"onUpdate:value":n[1]||(n[1]=o=>u.value=o),type:"textarea",placeholder:"Basic Textarea"},null,8,["value"])]),_:1})]),_:1}),e(s,{title:"Size"},{code:l(({html:o})=>[i(r(o(`
					<n-space vertical>
						<n-input type="text" size="tiny" placeholder="Tiny Input" />
						<n-input type="text" size="small" placeholder="Small Input" />
						<n-input type="text" placeholder="Medium Input" />
						<n-input type="text" size="large" placeholder="Large Input" />
					</n-space>
					`)),1)]),default:l(()=>[e(t(h),{vertical:""},{default:l(()=>[e(t(a),{type:"text",size:"tiny",placeholder:"Tiny Input"}),e(t(a),{type:"text",size:"small",placeholder:"Small Input"}),e(t(a),{type:"text",placeholder:"Medium Input"}),e(t(a),{type:"text",size:"large",placeholder:"Large Input"})]),_:1})]),_:1}),e(s,{title:"Prefix & suffix"},{code:l(({html:o,js:c})=>[i(r(o(`
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
						`)),1)]),default:l(()=>[e(t(h),{vertical:""},{default:l(()=>[e(t(a),{placeholder:"Flash"},{prefix:l(()=>[e(b,{name:C})]),_:1}),e(t(a),{round:"",placeholder:"1,400,000"},{suffix:l(()=>n[7]||(n[7]=[i("$")])),_:1}),e(t(a),{round:"",placeholder:"Flash"},{suffix:l(()=>[e(b,{name:C})]),_:1}),e(t(a),{type:"text",placeholder:"Basic Input",loading:""})]),_:1})]),_:1}),e(s,{title:"Password & Clearable"},{code:l(({html:o,js:c})=>[i(r(o(`
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
						`)),1)]),default:l(()=>[e(t(h),{vertical:""},{default:l(()=>[e(t(a),{type:"password","show-password-on":"mousedown",placeholder:"Password",maxlength:8}),e(t(a),{type:"password","show-password-on":"click",placeholder:"Custom Password Toggle Icon",maxlength:8},{"password-visible-icon":l(()=>[e(b,{size:16,name:oe})]),"password-invisible-icon":l(()=>[e(b,{size:16,name:ne})]),_:1}),e(t(a),{type:"text",placeholder:"Content is clearable",clearable:""})]),_:1})]),_:1}),e(s,{title:"Autosize"},{code:l(({html:o})=>[i(r(o(`
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
					`)),1)]),default:l(()=>[e(t(h),{vertical:""},{default:l(()=>[e(t(a),{placeholder:"Autosizable",autosize:"",style:{"min-width":"50%"}}),e(t(a),{placeholder:"Autosizable",type:"textarea",size:"small",autosize:{minRows:3,maxRows:5}}),e(t(a),{type:"textarea",placeholder:"Autosizable",autosize:{minRows:3}})]),_:1})]),_:1}),e(s,{title:"Input group"},{code:l(({html:o,js:c})=>[i(r(o(`
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
						])`)),1)]),default:l(()=>[e(t(h),{vertical:""},{default:l(()=>[e(t(v),null,{default:l(()=>[e(t(a),{style:{width:"33%"}}),e(t(H),{style:{width:"33%"}}),e(t(a),{style:{width:"33%"}})]),_:1}),e(t(v),null,{default:l(()=>[e(t(N),null,{default:l(()=>n[8]||(n[8]=[i("https://www.")])),_:1,__:[8]}),e(t(a),{style:{width:"33%"}}),e(t(N),null,{default:l(()=>n[9]||(n[9]=[i(".com")])),_:1,__:[9]})]),_:1}),e(t(v),null,{default:l(()=>[e(t(I),{style:{width:"33%"},options:d.value},null,8,["options"]),e(t(M),{style:{width:"33%"},options:m.value},null,8,["options"]),e(t(I),{style:{width:"33%"},multiple:"",options:d.value},null,8,["options"])]),_:1}),e(t(v),null,{default:l(()=>[e(t(z),{type:"primary"},{default:l(()=>n[10]||(n[10]=[i("Search")])),_:1,__:[10]}),e(t(a),{style:{width:"50%"}}),e(t(z),{type:"primary",ghost:""},{default:l(()=>n[11]||(n[11]=[i("Search")])),_:1,__:[11]})]),_:1}),e(t(v),null,{default:l(()=>[e(t(q)),e(t(K))]),_:1})]),_:1})]),_:1}),e(s,{title:"Pairwise value"},{code:l(({html:o})=>[i(r(o(`
					<n-input pair separator="-" :placeholder="['From', 'To']" clearable />
					`)),1)]),default:l(()=>[e(t(a),{pair:"",separator:"-",placeholder:["From","To"],clearable:""})]),_:1}),e(s,{title:"Word limit"},{code:l(({html:o})=>[i(r(o(`
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
					`)),1)]),default:l(()=>[e(t(h),{vertical:""},{default:l(()=>[e(t(a),{maxlength:"30","show-count":"",clearable:""}),e(t(a),{"default-value":"Yes","show-count":"",clearable:""},{count:l(({value:o})=>[i(r(o.includes("Yes")?"99+":o.length),1)]),_:1}),e(t(a),{type:"textarea",maxlength:"30","show-count":""}),e(t(a),{type:"textarea","default-value":"What?","show-count":""},{count:l(({value:o})=>[i(r(o.includes("What?")?"99+":o.length),1)]),_:1})]),_:1})]),_:1})])])}}});export{Pe as default};
