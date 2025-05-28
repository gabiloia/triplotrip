import{_}from"./0RhdNeLw.js";import{d as C,q as g,c as z,o as m,a as i,e as a,b as n,_ as f,w as o,u as t,dS as r,g as k,l as x,x as l,B as w,t as c,O as p}from"./CKyhG2UO.js";import{N as y}from"./Dh2Me1dS.js";import{N as M}from"./C4_bR07G.js";import{N}from"./B9eh-Yu0.js";import"./BMJuwibk.js";import"./BLIjkjma.js";import"./Bk_rJcZu.js";const R={class:"page"},S={class:"page-header"},V={class:"links"},A={href:"https://www.naiveui.com/en-US/light/components/badge",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},E={class:"components-list"},T="tabler:external-link",U="ion:add",$="ion:remove",K=C({__name:"Badge",setup(P){const d=g(5),u=g(!1),v=g(!1);return(q,e)=>{const b=_;return m(),z("div",R,[i("div",S,[e[5]||(e[5]=i("div",{class:"title"},"Badge",-1)),i("div",V,[i("a",A,[a(f,{name:T,size:16}),e[4]||(e[4]=n(" docs "))])])]),i("div",E,[a(b,{title:"Basic"},{code:o(({html:s,js:B})=>[n(c(s(`
					<n-space :size="24" align="center">
						<n-badge :value="value" :max="15" :processing="processing">
							<n-avatar :img-props="{ alt: 'avatar' }" v-if="!raw" />
						</n-badge>
						<n-badge :value="value" dot :processing="processing">
							<n-avatar :img-props="{ alt: 'avatar' }" v-if="!raw" />
						</n-badge>
						<n-button-group>
							<n-button @click="value = Math.min(16, value + 1)">
								<template #icon>
									<n-icon><add /></n-icon>
								</template>
							</n-button>
							<n-button @click="value = Math.max(0, value - 1)">
								<template #icon>
									<n-icon><remove /></n-icon>
								</template>
							</n-button>
						</n-button-group>
						<n-checkbox v-model:checked="raw">Raw</n-checkbox>
						<n-checkbox v-model:checked="processing">Processing</n-checkbox>
					</n-space>
					`))+" "+c(B(`
						import { Add, Remove } from "@vicons/ionicons5"
						const value = ref(5)
						const raw = ref(false)
						const processing = ref(false)
						`)),1)]),default:o(()=>[a(t(y),{size:24,align:"center"},{default:o(()=>[a(t(r),{value:d.value,max:15,processing:v.value},{default:o(()=>[u.value?x("",!0):(m(),k(t(l),{key:0,"img-props":{alt:"avatar"}}))]),_:1},8,["value","processing"]),a(t(r),{value:d.value,dot:"",processing:v.value},{default:o(()=>[u.value?x("",!0):(m(),k(t(l),{key:0,"img-props":{alt:"avatar"}}))]),_:1},8,["value","processing"]),a(t(M),null,{default:o(()=>[a(t(w),{onClick:e[0]||(e[0]=s=>d.value=Math.min(16,d.value+1))},{icon:o(()=>[a(f,{name:U})]),_:1}),a(t(w),{onClick:e[1]||(e[1]=s=>d.value=Math.max(0,d.value-1))},{icon:o(()=>[a(f,{name:$})]),_:1})]),_:1}),a(t(N),{checked:u.value,"onUpdate:checked":e[2]||(e[2]=s=>u.value=s)},{default:o(()=>e[6]||(e[6]=[n("Raw")])),_:1},8,["checked"]),a(t(N),{checked:v.value,"onUpdate:checked":e[3]||(e[3]=s=>v.value=s)},{default:o(()=>e[7]||(e[7]=[n("Processing")])),_:1},8,["checked"])]),_:1})]),_:1}),a(b,{title:"Type"},{description:o(()=>[e[13]||(e[13]=n(" Badge has ")),a(t(p),{code:""},{default:o(()=>e[8]||(e[8]=[n("default")])),_:1}),e[14]||(e[14]=n(" , ")),a(t(p),{code:""},{default:o(()=>e[9]||(e[9]=[n("error")])),_:1}),e[15]||(e[15]=n(" , ")),a(t(p),{code:""},{default:o(()=>e[10]||(e[10]=[n("info")])),_:1}),e[16]||(e[16]=n(" , ")),a(t(p),{code:""},{default:o(()=>e[11]||(e[11]=[n("success")])),_:1}),e[17]||(e[17]=n(" , ")),a(t(p),{code:""},{default:o(()=>e[12]||(e[12]=[n("warning")])),_:1}),e[18]||(e[18]=n(" types. "))]),code:o(({html:s})=>[n(c(s(`
					<n-space :size="24" align="center">
						<n-badge dot>
							<n-avatar :img-props="{ alt: 'avatar' }" />
						</n-badge>
						<n-badge dot type="error">
							<n-avatar :img-props="{ alt: 'avatar' }" />
						</n-badge>
						<n-badge dot type="info">
							<n-avatar :img-props="{ alt: 'avatar' }" />
						</n-badge>
						<n-badge dot type="success">
							<n-avatar :img-props="{ alt: 'avatar' }" />
						</n-badge>
						<n-badge dot type="warning">
							<n-avatar :img-props="{ alt: 'avatar' }" />
						</n-badge>
					</n-space>
					`)),1)]),default:o(()=>[a(t(y),{size:24,align:"center"},{default:o(()=>[a(t(r),{dot:""},{default:o(()=>[a(t(l),{"img-props":{alt:"avatar"}})]),_:1}),a(t(r),{dot:"",type:"error"},{default:o(()=>[a(t(l),{"img-props":{alt:"avatar"}})]),_:1}),a(t(r),{dot:"",type:"info"},{default:o(()=>[a(t(l),{"img-props":{alt:"avatar"}})]),_:1}),a(t(r),{dot:"",type:"success"},{default:o(()=>[a(t(l),{"img-props":{alt:"avatar"}})]),_:1}),a(t(r),{dot:"",type:"warning"},{default:o(()=>[a(t(l),{"img-props":{alt:"avatar"}})]),_:1})]),_:1})]),_:1})])])}}});export{K as default};
