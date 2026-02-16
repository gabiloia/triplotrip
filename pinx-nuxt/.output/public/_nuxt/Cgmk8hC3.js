import{_ as m}from"./BLzEf9tb.js";import{d as u,o as f,c as w,a,e as s,_,b as t,w as o,u as r,B as x,p as g,N as c,t as d,s as v}from"./BboPWEKj.js";import"./BmSAZQUJ.js";import"./BoIEE7Tp.js";const M={class:"page"},h={class:"page-header"},C={class:"links"},b={href:"https://www.naiveui.com/en-US/light/components/modal",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},k={class:"components-list"},B="tabler:external-link",F=u({__name:"Modal",setup(N){const n=v(!1);return(y,e)=>{const i=m;return f(),w("div",M,[a("div",h,[e[3]||(e[3]=a("div",{class:"title"},"Modal",-1)),a("div",C,[a("a",b,[s(_,{name:B,size:16}),e[2]||(e[2]=t(" docs ",-1))])])]),a("div",k,[s(i,{title:"Basic",class:"max-w-lg"},{description:o(()=>[...e[4]||(e[4]=[t(" Basic usage of modal. You can put anything in modal, a card for example. ",-1)])]),code:o(({html:l,js:p})=>[t(d(l(`
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
						`)),1)]),default:o(()=>[s(r(x),{onClick:e[0]||(e[0]=l=>n.value=!0)},{default:o(()=>[...e[5]||(e[5]=[t("Start Me up",-1)])]),_:1}),s(r(g),{show:n.value,"onUpdate:show":e[1]||(e[1]=l=>n.value=l)},{default:o(()=>[s(r(c),{style:{width:"600px"},title:"Modal",bordered:!1,size:"huge",role:"dialog","aria-modal":"true"},{"header-extra":o(()=>[...e[6]||(e[6]=[t("Oops!",-1)])]),footer:o(()=>[...e[7]||(e[7]=[t("Footer",-1)])]),default:o(()=>[e[8]||(e[8]=t(" Content ",-1))]),_:1})]),_:1},8,["show"])]),_:1})])])}}});export{F as default};
