import{_ as m}from"./D8_dUoA9.js";import{d as u,q as f,c as _,o as w,a,e as s,b as t,_ as x,w as o,u as r,B as g,s as c,N as v,t as d}from"./BU9QL1D6.js";import"./7x_42VVO.js";import"./p-klaAzO.js";const M={class:"page"},h={class:"page-header"},C={class:"links"},b={href:"https://www.naiveui.com/en-US/light/components/modal",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},k={class:"components-list"},B="tabler:external-link",F=u({__name:"Modal",setup(N){const n=f(!1);return(y,e)=>{const i=m;return w(),_("div",M,[a("div",h,[e[3]||(e[3]=a("div",{class:"title"},"Modal",-1)),a("div",C,[a("a",b,[s(x,{name:B,size:16}),e[2]||(e[2]=t(" docs "))])])]),a("div",k,[s(i,{title:"Basic",class:"max-w-lg"},{description:o(()=>e[4]||(e[4]=[t(" Basic usage of modal. You can put anything in modal, a card for example. ")])),code:o(({html:l,js:p})=>[t(d(l(`
					<n-button @click="showModal = true">Start Me up</n-button>
					<n-modal v-model:show="showModal">
						<n-card
							style="width: 600px"
							title="Modal"
							:bordered="false"
							size="huge"
							role="dialog"
							aria-modal="true"
						>
							<template #header-extra>Oops!</template>
							Content
							<template #footer>Footer</template>
						</n-card>
					</n-modal>
					`))+" "+d(p(`
						const showModal = ref(false)
						`)),1)]),default:o(()=>[s(r(g),{onClick:e[0]||(e[0]=l=>n.value=!0)},{default:o(()=>e[5]||(e[5]=[t("Start Me up")])),_:1,__:[5]}),s(r(c),{show:n.value,"onUpdate:show":e[1]||(e[1]=l=>n.value=l)},{default:o(()=>[s(r(v),{style:{width:"600px"},title:"Modal",bordered:!1,size:"huge",role:"dialog","aria-modal":"true"},{"header-extra":o(()=>e[6]||(e[6]=[t("Oops!")])),footer:o(()=>e[7]||(e[7]=[t("Footer")])),default:o(()=>[e[8]||(e[8]=t(" Content "))]),_:1,__:[8]})]),_:1},8,["show"])]),_:1})])])}}});export{F as default};
