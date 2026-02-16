import{_ as f}from"./BLzEf9tb.js";import{d as u,ai as _,o as g,c as v,a as t,e as s,_ as h,b as n,w as o,u as a,B as k,t as l}from"./BboPWEKj.js";import{N}from"./BLgN2be6.js";import"./BmSAZQUJ.js";import"./BoIEE7Tp.js";const C={class:"page"},w={class:"page-header"},b={class:"links"},x={href:"https://www.naiveui.com/en-US/light/components/popconfirm",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},y={class:"components-list"},P="tabler:external-link",Y=u({__name:"Popconfirm",setup(B){const i=_();function c(){i.info("Yes")}function r(){i.info("No")}return(T,e)=>{const m=f;return g(),v("div",C,[t("div",w,[e[1]||(e[1]=t("div",{class:"title"},"Popconfirm",-1)),t("div",b,[t("a",x,[s(h,{name:P,size:16}),e[0]||(e[0]=n(" docs ",-1))])])]),t("div",y,[s(m,{title:"Basic",class:"max-w-lg"},{code:o(({html:p,js:d})=>[n(l(p(`
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
						`)),1)]),default:o(()=>[s(a(N),{onPositiveClick:c,onNegativeClick:r},{trigger:o(()=>[s(a(k),null,{default:o(()=>[...e[2]||(e[2]=[n("Quote",-1)])]),_:1})]),default:o(()=>[e[3]||(e[3]=n(" Things pass us by. Nobody can catch them. That's the way we live our lives. ",-1))]),_:1})]),_:1})])])}}});export{Y as default};
