import{_ as f}from"./vPp7vp59.js";import{d as _,af as u,c as g,o as v,a as t,e as s,b as n,_ as h,w as o,u as a,B as k,t as l}from"./BfwEk-Nq.js";import{N}from"./Dz2oyHvq.js";import"./CPRgsAKX.js";import"./D-rSACz3.js";const C={class:"page"},w={class:"page-header"},b={class:"links"},x={href:"https://www.naiveui.com/en-US/light/components/popconfirm",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},y={class:"components-list"},P="tabler:external-link",Y=_({__name:"Popconfirm",setup(B){const i=u();function c(){i.info("Yes")}function r(){i.info("No")}return(T,e)=>{const m=f;return v(),g("div",C,[t("div",w,[e[1]||(e[1]=t("div",{class:"title"},"Popconfirm",-1)),t("div",b,[t("a",x,[s(h,{name:P,size:16}),e[0]||(e[0]=n(" docs "))])])]),t("div",y,[s(m,{title:"Basic",class:"max-w-lg"},{code:o(({html:p,js:d})=>[n(l(p(`
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
						`)),1)]),default:o(()=>[s(a(N),{onPositiveClick:c,onNegativeClick:r},{trigger:o(()=>[s(a(k),null,{default:o(()=>e[2]||(e[2]=[n("Quote")])),_:1,__:[2]})]),default:o(()=>[e[3]||(e[3]=n(" Things pass us by. Nobody can catch them. That's the way we live our lives. "))]),_:1,__:[3]})]),_:1})])])}}});export{Y as default};
