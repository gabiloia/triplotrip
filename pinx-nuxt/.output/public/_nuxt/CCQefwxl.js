import{_ as z}from"./BfzzecIy.js";import{d as C,r as l,c as E,a as U,b as c,g as n,f as a,h as i,w as t,u as o,d2 as _,d5 as $,y as B,B as u,t as g}from"./CFnCIwgc.js";import{N as m,a as s}from"./BVAFnFnF.js";import{N as d}from"./h8M4d1TU.js";import{N as D}from"./BDcXb4G9.js";import{N as A}from"./CTeCxYcV.js";import"./uLUuACJr.js";import"./Bg-0ZsXF.js";import"./Bk_rJcZu.js";const I={class:"page"},F={class:"page-header"},H={class:"links"},M={href:"https://www.naiveui.com/en-US/light/components/thing",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},S={class:"components-list"},T="tabler:external-link",p="ion:cash-outline",W=C({__name:"Thing",setup(V){const f=l(!0),v=l(!0),k=l(!0),h=l(!0),x=l(!0),b=l(!0),y=l(!0);return(O,e)=>{const w=z;return U(),E("div",I,[c("div",F,[e[8]||(e[8]=c("div",{class:"title"},"Thing",-1)),c("div",H,[c("a",M,[n(i,{name:T,size:16}),e[7]||(e[7]=a(" docs "))])])]),c("div",S,[n(w,{title:"Basic",class:"max-w-lg"},{code:t(({html:r,js:N})=>[a(g(r(`
					<n-row>
						<n-col :span="12">
							<n-checkbox v-model:checked="indented">Indented</n-checkbox>
						</n-col>
					</n-row>
					<n-row>
						<n-col :span="12">
							<n-checkbox v-model:checked="avatar">Avatar</n-checkbox>
						</n-col>
						<n-col :span="12">
							<n-checkbox v-model:checked="action">Action</n-checkbox>
						</n-col>
					</n-row>
					<n-row>
						<n-col :span="12">
							<n-checkbox v-model:checked="header">Header</n-checkbox>
						</n-col>
						<n-col :span="12">
							<n-checkbox v-model:checked="headerExtra">Header Extra</n-checkbox>
						</n-col>
					</n-row>
					<n-row>
						<n-col :span="12">
							<n-checkbox v-model:checked="description">Description</n-checkbox>
						</n-col>
						<n-col :span="12">
							<n-checkbox v-model:checked="footer">Footer</n-checkbox>
						</n-col>
					</n-row>
					<n-divider />
					<n-thing :content-indented="indented">
						<template v-if="avatar" #avatar>
							<n-avatar :img-props="{ alt: 'avatar' }">
								<n-icon>
									<cash-icon />
								</n-icon>
							</n-avatar>
						</template>
						<template v-if="header" #header>Money</template>
						<template v-if="headerExtra" #header-extra>
							<n-button circle size="small">
								<template #icon>
									<cash-icon />
								</template>
							</n-button>
						</template>
						<template v-if="description" #description>Description</template>
						Money is any item or verifiable record that is generally accepted as payment for goods and
						services and repayment of debts, such as taxes, in a particular country or socio-economic
						context.
						<template v-if="footer" #footer>Footer</template>
						<template v-if="action" #action>
							<n-space>
								<n-button size="small">
									<template #icon>
										<n-icon>
											<cash-icon />
										</n-icon>
									</template>
									1$
								</n-button>
								<n-button size="small">
									<template #icon>
										<n-icon>
											<cash-icon />
										</n-icon>
									</template>
									10$
								</n-button>
								<n-button size="small">
									<template #icon>
										<n-icon>
											<cash-icon />
										</n-icon>
									</template>
									100$
								</n-button>
							</n-space>
						</template>
					</n-thing>
					`))+" "+g(N(`
						import { CashOutline as CashIcon } from "@vicons/ionicons5"
						const avatar = ref(true)
						const header = ref(true)
						const headerExtra = ref(true)
						const description = ref(true)
						const footer = ref(true)
						const action = ref(true)
						const indented = ref(true)
						`)),1)]),default:t(()=>[n(o(m),null,{default:t(()=>[n(o(s),{span:12},{default:t(()=>[n(o(d),{checked:y.value,"onUpdate:checked":e[0]||(e[0]=r=>y.value=r)},{default:t(()=>e[9]||(e[9]=[a("Indented")])),_:1},8,["checked"])]),_:1})]),_:1}),n(o(m),null,{default:t(()=>[n(o(s),{span:12},{default:t(()=>[n(o(d),{checked:f.value,"onUpdate:checked":e[1]||(e[1]=r=>f.value=r)},{default:t(()=>e[10]||(e[10]=[a("Avatar")])),_:1},8,["checked"])]),_:1}),n(o(s),{span:12},{default:t(()=>[n(o(d),{checked:b.value,"onUpdate:checked":e[2]||(e[2]=r=>b.value=r)},{default:t(()=>e[11]||(e[11]=[a("Action")])),_:1},8,["checked"])]),_:1})]),_:1}),n(o(m),null,{default:t(()=>[n(o(s),{span:12},{default:t(()=>[n(o(d),{checked:v.value,"onUpdate:checked":e[3]||(e[3]=r=>v.value=r)},{default:t(()=>e[12]||(e[12]=[a("Header")])),_:1},8,["checked"])]),_:1}),n(o(s),{span:12},{default:t(()=>[n(o(d),{checked:k.value,"onUpdate:checked":e[4]||(e[4]=r=>k.value=r)},{default:t(()=>e[13]||(e[13]=[a("Header Extra")])),_:1},8,["checked"])]),_:1})]),_:1}),n(o(m),null,{default:t(()=>[n(o(s),{span:12},{default:t(()=>[n(o(d),{checked:h.value,"onUpdate:checked":e[5]||(e[5]=r=>h.value=r)},{default:t(()=>e[14]||(e[14]=[a("Description")])),_:1},8,["checked"])]),_:1}),n(o(s),{span:12},{default:t(()=>[n(o(d),{checked:x.value,"onUpdate:checked":e[6]||(e[6]=r=>x.value=r)},{default:t(()=>e[15]||(e[15]=[a("Footer")])),_:1},8,["checked"])]),_:1})]),_:1}),n(o(_)),n(o(D),{"content-indented":y.value},$({default:t(()=>[e[22]||(e[22]=a(" Money is any item or verifiable record that is generally accepted as payment for goods and services and repayment of debts, such as taxes, in a particular country or socio-economic context. "))]),_:2},[f.value?{name:"avatar",fn:t(()=>[n(o(B),{"img-props":{alt:"avatar"}},{default:t(()=>[n(i,{name:p})]),_:1})]),key:"0"}:void 0,v.value?{name:"header",fn:t(()=>[e[16]||(e[16]=a("Money"))]),key:"1"}:void 0,k.value?{name:"header-extra",fn:t(()=>[n(o(u),{circle:"",size:"small"},{icon:t(()=>[n(i,{name:p})]),_:1})]),key:"2"}:void 0,h.value?{name:"description",fn:t(()=>[e[17]||(e[17]=a("Description"))]),key:"3"}:void 0,x.value?{name:"footer",fn:t(()=>[e[18]||(e[18]=a("Footer"))]),key:"4"}:void 0,b.value?{name:"action",fn:t(()=>[n(o(A),null,{default:t(()=>[n(o(u),{size:"small"},{icon:t(()=>[n(i,{name:p})]),default:t(()=>[e[19]||(e[19]=a(" 1$ "))]),_:1}),n(o(u),{size:"small"},{icon:t(()=>[n(i,{name:p})]),default:t(()=>[e[20]||(e[20]=a(" 10$ "))]),_:1}),n(o(u),{size:"small"},{icon:t(()=>[n(i,{name:p})]),default:t(()=>[e[21]||(e[21]=a(" 100$ "))]),_:1})]),_:1})]),key:"5"}:void 0]),1032,["content-indented"])]),_:1})])])}}});export{W as default};
