import{_ as g}from"./BLzEf9tb.js";import{d as f,o as c,c as w,a as l,e,_ as v,b as s,w as o,u as n,D as i,B as r,t as u,s as _}from"./BboPWEKj.js";import{N as b}from"./CV6rs4kW.js";import"./BmSAZQUJ.js";import"./BoIEE7Tp.js";import"./Bk_rJcZu.js";const h={class:"page"},C={class:"page-header"},k={class:"links"},x={href:"https://www.naiveui.com/en-US/light/components/tooltip",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},y={class:"components-list"},I="tabler:external-link",H=f({__name:"Tooltip",setup(B){const a=_(!1);return(N,t)=>{const d=g;return c(),w("div",h,[l("div",C,[t[2]||(t[2]=l("div",{class:"title"},"Tooltip",-1)),l("div",k,[l("a",x,[e(v,{name:I,size:16}),t[1]||(t[1]=s(" docs ",-1))])])]),l("div",y,[e(d,{title:"Basic",class:"max-w-lg"},{code:o(({html:p,js:m})=>[s(u(p(`
					<n-space>
						<n-tooltip placement="top-start" trigger="hover">
							<template #trigger>
								<n-button>Hover</n-button>
							</template>
							<span>I wish they all could be California girls</span>
						</n-tooltip>
						<n-tooltip placement="bottom" trigger="click">
							<template #trigger>
								<n-button>Click</n-button>
							</template>
							<span>I wish they all could be California girls</span>
						</n-tooltip>
						<n-tooltip :show="showPopover" placement="top-end">
							<template #trigger>
								<n-button @click="showPopover = !showPopover">Manual</n-button>
							</template>
							<span>I wish they all could be California girls</span>
						</n-tooltip>
					</n-space>
					`))+" "+u(m("const showPopover = ref(false)")),1)]),default:o(()=>[e(n(b),null,{default:o(()=>[e(n(i),{placement:"top-start",trigger:"hover"},{trigger:o(()=>[e(n(r),null,{default:o(()=>[...t[3]||(t[3]=[s("Hover",-1)])]),_:1})]),default:o(()=>[t[4]||(t[4]=l("span",null,"I wish they all could be California girls",-1))]),_:1}),e(n(i),{placement:"bottom",trigger:"click"},{trigger:o(()=>[e(n(r),null,{default:o(()=>[...t[5]||(t[5]=[s("Click",-1)])]),_:1})]),default:o(()=>[t[6]||(t[6]=l("span",null,"I wish they all could be California girls",-1))]),_:1}),e(n(i),{show:a.value,placement:"top-end"},{trigger:o(()=>[e(n(r),{onClick:t[0]||(t[0]=p=>a.value=!a.value)},{default:o(()=>[...t[7]||(t[7]=[s("Manual",-1)])]),_:1})]),default:o(()=>[t[8]||(t[8]=l("span",null,"I wish they all could be California girls",-1))]),_:1},8,["show"])]),_:1})]),_:1})])])}}});export{H as default};
