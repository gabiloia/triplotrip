import{_ as b}from"./BfzzecIy.js";import{d as k,r as m,c as y,a as x,b as o,g as l,f as a,h as w,w as t,u as r,ct as i,B as p,t as g,d2 as z,_ as O}from"./CFnCIwgc.js";import{N as c}from"./CTeCxYcV.js";import{N as C}from"./C6bIxnTV.js";import"./uLUuACJr.js";import"./Bg-0ZsXF.js";import"./Bk_rJcZu.js";const E={class:"page"},B={class:"page-header"},I={class:"links"},S={href:"https://www.naiveui.com/en-US/light/components/popover",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},P={class:"components-list"},N={class:"popover-grid"},T="tabler:external-link",L=k({__name:"Popover",setup(R){const v=m(!1),s=m(!1);return(H,e)=>{const u=b;return x(),y("div",E,[o("div",B,[e[3]||(e[3]=o("div",{class:"title"},"Popover",-1)),o("div",I,[o("a",S,[l(w,{name:T,size:16}),e[2]||(e[2]=a(" docs "))])])]),o("div",P,[l(u,{title:"Basic"},{code:t(({html:n,js:d})=>[a(g(n(`
					<n-space>
						<n-popover trigger="hover">
							<template #trigger>
								<n-button>Hover</n-button>
							</template>
							<span>I wish they all could be California girls</span>
						</n-popover>
						<n-popover trigger="hover" :keep-alive-on-hover="false">
							<template #trigger>
								<n-button>Hover (ignore popup)</n-button>
							</template>
							<span>I wish they all could be California girls</span>
						</n-popover>
						<n-popover trigger="click">
							<template #trigger>
								<n-button>Click</n-button>
							</template>
							<span>I wish they all could be California girls</span>
						</n-popover>
						<n-popover trigger="focus">
							<template #trigger>
								<n-button>Focus</n-button>
							</template>
							<span>I wish they all could be California girls</span>
						</n-popover>
						<n-popover trigger="manual" :show="showPopover">
							<template #trigger>
								<n-button @click="showPopover = !showPopover">Manual</n-button>
							</template>
							<span>I wish they all could be California girls</span>
						</n-popover>
					</n-space>
					`))+" "+g(d(`
						const showPopover = ref(false)
						`)),1)]),default:t(()=>[l(r(c),null,{default:t(()=>[l(r(i),{trigger:"hover"},{trigger:t(()=>[l(r(p),null,{default:t(()=>e[4]||(e[4]=[a("Hover")])),_:1})]),default:t(()=>[e[5]||(e[5]=o("span",null,"I wish they all could be California girls",-1))]),_:1}),l(r(i),{trigger:"hover","keep-alive-on-hover":!1},{trigger:t(()=>[l(r(p),null,{default:t(()=>e[6]||(e[6]=[a("Hover (ignore popup)")])),_:1})]),default:t(()=>[e[7]||(e[7]=o("span",null,"I wish they all could be California girls",-1))]),_:1}),l(r(i),{trigger:"click"},{trigger:t(()=>[l(r(p),null,{default:t(()=>e[8]||(e[8]=[a("Click")])),_:1})]),default:t(()=>[e[9]||(e[9]=o("span",null,"I wish they all could be California girls",-1))]),_:1}),l(r(i),{trigger:"focus"},{trigger:t(()=>[l(r(p),null,{default:t(()=>e[10]||(e[10]=[a("Focus")])),_:1})]),default:t(()=>[e[11]||(e[11]=o("span",null,"I wish they all could be California girls",-1))]),_:1}),l(r(i),{trigger:"manual",show:v.value},{trigger:t(()=>[l(r(p),{onClick:e[0]||(e[0]=n=>v.value=!v.value)},{default:t(()=>e[12]||(e[12]=[a("Manual")])),_:1})]),default:t(()=>[e[13]||(e[13]=o("span",null,"I wish they all could be California girls",-1))]),_:1},8,["show"])]),_:1})]),_:1}),l(u,{title:"Placement"},{code:t(({html:n,js:d,css:f})=>[a(g(n(`
					<n-switch v-model:value="overlap" />
					Overlap Trigger Element
					<n-divider />
					<div class="popover-grid">
						<n-popover :overlap="overlap" placement="top-start" trigger="click">
							<template #trigger>
								<n-button size="small" style="grid-area: 1 / 1 / 2 / 2">Top Start</n-button>
							</template>
							<div class="large-text">Oops!</div>
						</n-popover>
						<n-popover :overlap="overlap" placement="top" trigger="click">
							<template #trigger>
								<n-button size="small" style="grid-area: 1 / 2 / 2 / 3">Top</n-button>
							</template>
							<div class="large-text">Oops!</div>
						</n-popover>
						<n-popover :overlap="overlap" placement="top-end" trigger="click">
							<template #trigger>
								<n-button size="small" style="grid-area: 1 / 3 / 2 / 4">Top End</n-button>
							</template>
							<div class="large-text">Oops!</div>
						</n-popover>
						<n-popover :overlap="overlap" placement="left-start" trigger="click">
							<template #trigger>
								<n-button size="small" style="grid-area: 2 / 1 / 3 / 2">Left Start</n-button>
							</template>
							<div class="large-text">Oops!</div>
						</n-popover>
						<n-popover :overlap="overlap" placement="left" trigger="click">
							<template #trigger>
								<n-button size="small" style="grid-area: 3 / 1 / 4 / 2">Left</n-button>
							</template>
							<div class="large-text">Oops!</div>
						</n-popover>
						<n-popover :overlap="overlap" placement="left-end" trigger="click">
							<template #trigger>
								<n-button size="small" style="grid-area: 4 / 1 / 5 / 2">Left End</n-button>
							</template>
							<div class="large-text">Oops!</div>
						</n-popover>
						<n-popover :overlap="overlap" placement="right-start" trigger="click">
							<template #trigger>
								<n-button size="small" style="grid-area: 2 / 3 / 3 / 4">Right Start</n-button>
							</template>
							<div class="large-text">Oops!</div>
						</n-popover>
						<n-popover :overlap="overlap" placement="right" trigger="click">
							<template #trigger>
								<n-button size="small" style="grid-area: 3 / 3 / 4 / 4">Right</n-button>
							</template>
							<div class="large-text">Oops!</div>
						</n-popover>
						<n-popover :overlap="overlap" placement="right-end" trigger="click">
							<template #trigger>
								<n-button size="small" style="grid-area: 4 / 3 / 5 / 4">Right End</n-button>
							</template>
							<div class="large-text">Oops!</div>
						</n-popover>
						<n-popover :overlap="overlap" placement="bottom-start" trigger="click">
							<template #trigger>
								<n-button size="small" style="grid-area: 5 / 1 / 6 / 2">Bottom Start</n-button>
							</template>
							<div class="large-text">Oops!</div>
						</n-popover>
						<n-popover :overlap="overlap" placement="bottom" trigger="click">
							<template #trigger>
								<n-button size="small" style="grid-area: 5 / 2 / 6 / 3">Bottom</n-button>
							</template>
							<div class="large-text">Oops!</div>
						</n-popover>
						<n-popover :overlap="overlap" placement="bottom-end" trigger="click">
							<template #trigger>
								<n-button size="small" style="grid-area: 5 / 3 / 6 / 4">Bottom End</n-button>
							</template>
							<div class="large-text">Oops</div>
						</n-popover>
					</div>
					`))+" "+g(d(`
						const overlap = ref(false)
						`))+" "+g(f(`
						.popover-grid {
							display: grid;
							grid-template-columns: auto auto auto auto auto;
							grid-gap: 12px;
							justify-content: center;
							align-items: center;
						}
						.large-text {
							font-size: 48px;
						}
						`)),1)]),default:t(()=>[l(r(C),{value:s.value,"onUpdate:value":e[1]||(e[1]=n=>s.value=n)},null,8,["value"]),e[38]||(e[38]=a(" Overlap Trigger Element ")),l(r(z)),o("div",N,[l(r(i),{overlap:s.value,placement:"top-start",trigger:"click"},{trigger:t(()=>[l(r(p),{size:"small",style:{"grid-area":"1 / 1 / 2 / 2"}},{default:t(()=>e[14]||(e[14]=[a("Top Start")])),_:1})]),default:t(()=>[e[15]||(e[15]=o("div",{class:"large-text"},"Oops!",-1))]),_:1},8,["overlap"]),l(r(i),{overlap:s.value,placement:"top",trigger:"click"},{trigger:t(()=>[l(r(p),{size:"small",style:{"grid-area":"1 / 2 / 2 / 3"}},{default:t(()=>e[16]||(e[16]=[a("Top")])),_:1})]),default:t(()=>[e[17]||(e[17]=o("div",{class:"large-text"},"Oops!",-1))]),_:1},8,["overlap"]),l(r(i),{overlap:s.value,placement:"top-end",trigger:"click"},{trigger:t(()=>[l(r(p),{size:"small",style:{"grid-area":"1 / 3 / 2 / 4"}},{default:t(()=>e[18]||(e[18]=[a("Top End")])),_:1})]),default:t(()=>[e[19]||(e[19]=o("div",{class:"large-text"},"Oops!",-1))]),_:1},8,["overlap"]),l(r(i),{overlap:s.value,placement:"left-start",trigger:"click"},{trigger:t(()=>[l(r(p),{size:"small",style:{"grid-area":"2 / 1 / 3 / 2"}},{default:t(()=>e[20]||(e[20]=[a("Left Start")])),_:1})]),default:t(()=>[e[21]||(e[21]=o("div",{class:"large-text"},"Oops!",-1))]),_:1},8,["overlap"]),l(r(i),{overlap:s.value,placement:"left",trigger:"click"},{trigger:t(()=>[l(r(p),{size:"small",style:{"grid-area":"3 / 1 / 4 / 2"}},{default:t(()=>e[22]||(e[22]=[a("Left")])),_:1})]),default:t(()=>[e[23]||(e[23]=o("div",{class:"large-text"},"Oops!",-1))]),_:1},8,["overlap"]),l(r(i),{overlap:s.value,placement:"left-end",trigger:"click"},{trigger:t(()=>[l(r(p),{size:"small",style:{"grid-area":"4 / 1 / 5 / 2"}},{default:t(()=>e[24]||(e[24]=[a("Left End")])),_:1})]),default:t(()=>[e[25]||(e[25]=o("div",{class:"large-text"},"Oops!",-1))]),_:1},8,["overlap"]),l(r(i),{overlap:s.value,placement:"right-start",trigger:"click"},{trigger:t(()=>[l(r(p),{size:"small",style:{"grid-area":"2 / 3 / 3 / 4"}},{default:t(()=>e[26]||(e[26]=[a("Right Start")])),_:1})]),default:t(()=>[e[27]||(e[27]=o("div",{class:"large-text"},"Oops!",-1))]),_:1},8,["overlap"]),l(r(i),{overlap:s.value,placement:"right",trigger:"click"},{trigger:t(()=>[l(r(p),{size:"small",style:{"grid-area":"3 / 3 / 4 / 4"}},{default:t(()=>e[28]||(e[28]=[a("Right")])),_:1})]),default:t(()=>[e[29]||(e[29]=o("div",{class:"large-text"},"Oops!",-1))]),_:1},8,["overlap"]),l(r(i),{overlap:s.value,placement:"right-end",trigger:"click"},{trigger:t(()=>[l(r(p),{size:"small",style:{"grid-area":"4 / 3 / 5 / 4"}},{default:t(()=>e[30]||(e[30]=[a("Right End")])),_:1})]),default:t(()=>[e[31]||(e[31]=o("div",{class:"large-text"},"Oops!",-1))]),_:1},8,["overlap"]),l(r(i),{overlap:s.value,placement:"bottom-start",trigger:"click"},{trigger:t(()=>[l(r(p),{size:"small",style:{"grid-area":"5 / 1 / 6 / 2"}},{default:t(()=>e[32]||(e[32]=[a("Bottom Start")])),_:1})]),default:t(()=>[e[33]||(e[33]=o("div",{class:"large-text"},"Oops!",-1))]),_:1},8,["overlap"]),l(r(i),{overlap:s.value,placement:"bottom",trigger:"click"},{trigger:t(()=>[l(r(p),{size:"small",style:{"grid-area":"5 / 2 / 6 / 3"}},{default:t(()=>e[34]||(e[34]=[a("Bottom")])),_:1})]),default:t(()=>[e[35]||(e[35]=o("div",{class:"large-text"},"Oops!",-1))]),_:1},8,["overlap"]),l(r(i),{overlap:s.value,placement:"bottom-end",trigger:"click"},{trigger:t(()=>[l(r(p),{size:"small",style:{"grid-area":"5 / 3 / 6 / 4"}},{default:t(()=>e[36]||(e[36]=[a("Bottom End")])),_:1})]),default:t(()=>[e[37]||(e[37]=o("div",{class:"large-text"},"Oops",-1))]),_:1},8,["overlap"])])]),_:1})])])}}}),q=O(L,[["__scopeId","data-v-db23ad9e"]]);export{q as default};
