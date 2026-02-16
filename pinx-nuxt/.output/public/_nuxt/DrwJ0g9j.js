import{_ as C}from"./BLzEf9tb.js";import{d as z,o as E,c as _,a as c,e as n,_ as d,b as a,w as t,u as o,cY as U,bJ as $,C as B,B as u,t as g,s}from"./BboPWEKj.js";import{N as m,a as l}from"./BlGSVJTM.js";import{N as i}from"./B5ctO347.js";import{N as D}from"./C76ChfjU.js";import{N as A}from"./CV6rs4kW.js";import"./BmSAZQUJ.js";import"./BoIEE7Tp.js";import"./Bk_rJcZu.js";const I={class:"page"},F={class:"page-header"},H={class:"links"},M={href:"https://www.naiveui.com/en-US/light/components/thing",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},S={class:"components-list"},T="tabler:external-link",p="ion:cash-outline",Q=z({__name:"Thing",setup(V){const f=s(!0),v=s(!0),k=s(!0),h=s(!0),x=s(!0),b=s(!0),y=s(!0);return(J,e)=>{const w=C;return E(),_("div",I,[c("div",F,[e[8]||(e[8]=c("div",{class:"title"},"Thing",-1)),c("div",H,[c("a",M,[n(d,{name:T,size:16}),e[7]||(e[7]=a(" docs ",-1))])])]),c("div",S,[n(w,{title:"Basic",class:"max-w-lg"},{code:t(({html:r,js:N})=>[a(g(r(`
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
						`)),1)]),default:t(()=>[n(o(m),null,{default:t(()=>[n(o(l),{span:12},{default:t(()=>[n(o(i),{checked:y.value,"onUpdate:checked":e[0]||(e[0]=r=>y.value=r)},{default:t(()=>[...e[9]||(e[9]=[a("Indented",-1)])]),_:1},8,["checked"])]),_:1})]),_:1}),n(o(m),null,{default:t(()=>[n(o(l),{span:12},{default:t(()=>[n(o(i),{checked:f.value,"onUpdate:checked":e[1]||(e[1]=r=>f.value=r)},{default:t(()=>[...e[10]||(e[10]=[a("Avatar",-1)])]),_:1},8,["checked"])]),_:1}),n(o(l),{span:12},{default:t(()=>[n(o(i),{checked:b.value,"onUpdate:checked":e[2]||(e[2]=r=>b.value=r)},{default:t(()=>[...e[11]||(e[11]=[a("Action",-1)])]),_:1},8,["checked"])]),_:1})]),_:1}),n(o(m),null,{default:t(()=>[n(o(l),{span:12},{default:t(()=>[n(o(i),{checked:v.value,"onUpdate:checked":e[3]||(e[3]=r=>v.value=r)},{default:t(()=>[...e[12]||(e[12]=[a("Header",-1)])]),_:1},8,["checked"])]),_:1}),n(o(l),{span:12},{default:t(()=>[n(o(i),{checked:k.value,"onUpdate:checked":e[4]||(e[4]=r=>k.value=r)},{default:t(()=>[...e[13]||(e[13]=[a("Header Extra",-1)])]),_:1},8,["checked"])]),_:1})]),_:1}),n(o(m),null,{default:t(()=>[n(o(l),{span:12},{default:t(()=>[n(o(i),{checked:h.value,"onUpdate:checked":e[5]||(e[5]=r=>h.value=r)},{default:t(()=>[...e[14]||(e[14]=[a("Description",-1)])]),_:1},8,["checked"])]),_:1}),n(o(l),{span:12},{default:t(()=>[n(o(i),{checked:x.value,"onUpdate:checked":e[6]||(e[6]=r=>x.value=r)},{default:t(()=>[...e[15]||(e[15]=[a("Footer",-1)])]),_:1},8,["checked"])]),_:1})]),_:1}),n(o(U)),n(o(D),{"content-indented":y.value},$({default:t(()=>[e[22]||(e[22]=a(" Money is any item or verifiable record that is generally accepted as payment for goods and services and repayment of debts, such as taxes, in a particular country or socio-economic context. ",-1))]),_:2},[f.value?{name:"avatar",fn:t(()=>[n(o(B),{"img-props":{alt:"avatar"}},{default:t(()=>[n(d,{name:p})]),_:1})]),key:"0"}:void 0,v.value?{name:"header",fn:t(()=>[e[16]||(e[16]=a("Money",-1))]),key:"1"}:void 0,k.value?{name:"header-extra",fn:t(()=>[n(o(u),{circle:"",size:"small"},{icon:t(()=>[n(d,{name:p})]),_:1})]),key:"2"}:void 0,h.value?{name:"description",fn:t(()=>[e[17]||(e[17]=a("Description",-1))]),key:"3"}:void 0,x.value?{name:"footer",fn:t(()=>[e[18]||(e[18]=a("Footer",-1))]),key:"4"}:void 0,b.value?{name:"action",fn:t(()=>[n(o(A),null,{default:t(()=>[n(o(u),{size:"small"},{icon:t(()=>[n(d,{name:p})]),default:t(()=>[e[19]||(e[19]=a(" 1$ ",-1))]),_:1}),n(o(u),{size:"small"},{icon:t(()=>[n(d,{name:p})]),default:t(()=>[e[20]||(e[20]=a(" 10$ ",-1))]),_:1}),n(o(u),{size:"small"},{icon:t(()=>[n(d,{name:p})]),default:t(()=>[e[21]||(e[21]=a(" 100$ ",-1))]),_:1})]),_:1})]),key:"5"}:void 0]),1032,["content-indented"])]),_:1})])])}}});export{Q as default};
