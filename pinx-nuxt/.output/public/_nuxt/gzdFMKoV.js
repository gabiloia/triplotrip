import{_}from"./BLzEf9tb.js";import{d as C,o as g,c as z,a as i,e as a,_ as m,b as n,w as o,u as t,dI as r,g as k,C as l,n as x,B as w,t as f,z as p,s as c}from"./BboPWEKj.js";import{N as y}from"./CV6rs4kW.js";import{N as M}from"./CncItRYq.js";import{N}from"./B5ctO347.js";import"./BmSAZQUJ.js";import"./BoIEE7Tp.js";import"./Bk_rJcZu.js";const R={class:"page"},V={class:"page-header"},A={class:"links"},E={href:"https://www.naiveui.com/en-US/light/components/badge",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},S={class:"components-list"},T="tabler:external-link",U="ion:add",$="ion:remove",L=C({__name:"Badge",setup(I){const d=c(5),u=c(!1),v=c(!1);return(P,e)=>{const b=_;return g(),z("div",R,[i("div",V,[e[5]||(e[5]=i("div",{class:"title"},"Badge",-1)),i("div",A,[i("a",E,[a(m,{name:T,size:16}),e[4]||(e[4]=n(" docs ",-1))])])]),i("div",S,[a(b,{title:"Basic"},{code:o(({html:s,js:B})=>[n(f(s(`
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
					`))+" "+f(B(`
						import { Add, Remove } from "@vicons/ionicons5"
						const value = ref(5)
						const raw = ref(false)
						const processing = ref(false)
						`)),1)]),default:o(()=>[a(t(y),{size:24,align:"center"},{default:o(()=>[a(t(r),{value:d.value,max:15,processing:v.value},{default:o(()=>[u.value?x("",!0):(g(),k(t(l),{key:0,"img-props":{alt:"avatar"}}))]),_:1},8,["value","processing"]),a(t(r),{value:d.value,dot:"",processing:v.value},{default:o(()=>[u.value?x("",!0):(g(),k(t(l),{key:0,"img-props":{alt:"avatar"}}))]),_:1},8,["value","processing"]),a(t(M),null,{default:o(()=>[a(t(w),{onClick:e[0]||(e[0]=s=>d.value=Math.min(16,d.value+1))},{icon:o(()=>[a(m,{name:U})]),_:1}),a(t(w),{onClick:e[1]||(e[1]=s=>d.value=Math.max(0,d.value-1))},{icon:o(()=>[a(m,{name:$})]),_:1})]),_:1}),a(t(N),{checked:u.value,"onUpdate:checked":e[2]||(e[2]=s=>u.value=s)},{default:o(()=>[...e[6]||(e[6]=[n("Raw",-1)])]),_:1},8,["checked"]),a(t(N),{checked:v.value,"onUpdate:checked":e[3]||(e[3]=s=>v.value=s)},{default:o(()=>[...e[7]||(e[7]=[n("Processing",-1)])]),_:1},8,["checked"])]),_:1})]),_:1}),a(b,{title:"Type"},{description:o(()=>[e[13]||(e[13]=n(" Badge has ",-1)),a(t(p),{code:""},{default:o(()=>[...e[8]||(e[8]=[n("default",-1)])]),_:1}),e[14]||(e[14]=n(" , ",-1)),a(t(p),{code:""},{default:o(()=>[...e[9]||(e[9]=[n("error",-1)])]),_:1}),e[15]||(e[15]=n(" , ",-1)),a(t(p),{code:""},{default:o(()=>[...e[10]||(e[10]=[n("info",-1)])]),_:1}),e[16]||(e[16]=n(" , ",-1)),a(t(p),{code:""},{default:o(()=>[...e[11]||(e[11]=[n("success",-1)])]),_:1}),e[17]||(e[17]=n(" , ",-1)),a(t(p),{code:""},{default:o(()=>[...e[12]||(e[12]=[n("warning",-1)])]),_:1}),e[18]||(e[18]=n(" types. ",-1))]),code:o(({html:s})=>[n(f(s(`
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
					`)),1)]),default:o(()=>[a(t(y),{size:24,align:"center"},{default:o(()=>[a(t(r),{dot:""},{default:o(()=>[a(t(l),{"img-props":{alt:"avatar"}})]),_:1}),a(t(r),{dot:"",type:"error"},{default:o(()=>[a(t(l),{"img-props":{alt:"avatar"}})]),_:1}),a(t(r),{dot:"",type:"info"},{default:o(()=>[a(t(l),{"img-props":{alt:"avatar"}})]),_:1}),a(t(r),{dot:"",type:"success"},{default:o(()=>[a(t(l),{"img-props":{alt:"avatar"}})]),_:1}),a(t(r),{dot:"",type:"warning"},{default:o(()=>[a(t(l),{"img-props":{alt:"avatar"}})]),_:1})]),_:1})]),_:1})])])}}});export{L as default};
