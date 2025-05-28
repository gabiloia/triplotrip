import{_ as m}from"./B3gcOJmJ.js";import{d as u,r as f,c as w,a as x,b as a,g as s,f as o,h as _,w as e,u as r,B as g,x as c,N as v,t as d}from"./G6QKWTEq.js";import"./B3cGRaQN.js";import"./-7JWf2sr.js";const M={class:"page"},h={class:"page-header"},C={class:"links"},b={href:"https://www.naiveui.com/en-US/light/components/modal",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},k={class:"components-list"},B="tabler:external-link",F=u({__name:"Modal",setup(N){const n=f(!1);return(y,t)=>{const i=m;return x(),w("div",M,[a("div",h,[t[3]||(t[3]=a("div",{class:"title"},"Modal",-1)),a("div",C,[a("a",b,[s(_,{name:B,size:16}),t[2]||(t[2]=o(" docs "))])])]),a("div",k,[s(i,{title:"Basic",class:"max-w-lg"},{description:e(()=>t[4]||(t[4]=[o(" Basic usage of modal. You can put anything in modal, a card for example. ")])),code:e(({html:l,js:p})=>[o(d(l(`
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
						`)),1)]),default:e(()=>[s(r(g),{onClick:t[0]||(t[0]=l=>n.value=!0)},{default:e(()=>t[5]||(t[5]=[o("Start Me up")])),_:1}),s(r(c),{show:n.value,"onUpdate:show":t[1]||(t[1]=l=>n.value=l)},{default:e(()=>[s(r(v),{style:{width:"600px"},title:"Modal",bordered:!1,size:"huge",role:"dialog","aria-modal":"true"},{"header-extra":e(()=>t[6]||(t[6]=[o("Oops!")])),footer:e(()=>t[7]||(t[7]=[o("Footer")])),default:e(()=>[t[8]||(t[8]=o(" Content "))]),_:1})]),_:1},8,["show"])]),_:1})])])}}});export{F as default};
