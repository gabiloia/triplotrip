import{_ as f}from"./B3gcOJmJ.js";import{d as u,ad as g,c as _,a as h,b as t,g as s,f as n,h as v,w as o,u as a,B as k,t as l}from"./G6QKWTEq.js";import{N}from"./CEeUl1P3.js";import"./B3cGRaQN.js";import"./-7JWf2sr.js";const C={class:"page"},w={class:"page-header"},b={class:"links"},x={href:"https://www.naiveui.com/en-US/light/components/popconfirm",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},y={class:"components-list"},P="tabler:external-link",Y=u({__name:"Popconfirm",setup(B){const i=g();function c(){i.info("Yes")}function r(){i.info("No")}return(T,e)=>{const m=f;return h(),_("div",C,[t("div",w,[e[1]||(e[1]=t("div",{class:"title"},"Popconfirm",-1)),t("div",b,[t("a",x,[s(v,{name:P,size:16}),e[0]||(e[0]=n(" docs "))])])]),t("div",y,[s(m,{title:"Basic",class:"max-w-lg"},{code:o(({html:p,js:d})=>[n(l(p(`
					<n-popconfirm @positive-click="handlePositiveClick" @negative-click="handleNegativeClick">
						<template #trigger>
							<n-button>Quote</n-button>
						</template>
						Things pass us by. Nobody can catch them. That's the way we live our lives.
					</n-popconfirm>
					`))+" "+l(d(`
						const message = useMessage()
						function handlePositiveClick() {
							message.info("Yes")
						}
						function handleNegativeClick() {
							message.info("No")
						}
						`)),1)]),default:o(()=>[s(a(N),{onPositiveClick:c,onNegativeClick:r},{trigger:o(()=>[s(a(k),null,{default:o(()=>e[2]||(e[2]=[n("Quote")])),_:1})]),default:o(()=>[e[3]||(e[3]=n(" Things pass us by. Nobody can catch them. That's the way we live our lives. "))]),_:1})]),_:1})])])}}});export{Y as default};
