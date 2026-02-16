import{_ as k}from"./BLzEf9tb.js";import{d as y,ai as _,o as I,c as b,a as r,e as t,_ as p,b as n,w as o,u as s,aj as l,t as c}from"./BboPWEKj.js";import{N as u}from"./CV6rs4kW.js";import"./BmSAZQUJ.js";import"./BoIEE7Tp.js";import"./Bk_rJcZu.js";const w={class:"page"},Y={class:"page-header"},v={class:"links"},h={href:"https://www.naiveui.com/en-US/light/components/tag",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},T={class:"components-list"},x="tabler:external-link",f="ion:checkmark-circle",M=y({__name:"Tag",setup(L){const m=_();function a(){m.info("tag close")}function C(){m.info("tag click")}return(N,e)=>{const d=k;return I(),b("div",w,[r("div",Y,[e[1]||(e[1]=r("div",{class:"title"},"Tag",-1)),r("div",v,[r("a",h,[t(p,{name:x,size:16}),e[0]||(e[0]=n(" docs ",-1))])])]),r("div",T,[t(d,{title:"Type"},{code:o(({html:i})=>[n(c(i(`
					<n-space>
						<n-tag>Real Love</n-tag>
						<n-tag type="success">Yes It Is</n-tag>
						<n-tag type="warning">I'm Down</n-tag>
						<n-tag type="error">Yesterday</n-tag>
						<n-tag type="info">I'm Looking Through You</n-tag>
					</n-space>
					`)),1)]),default:o(()=>[t(s(u),null,{default:o(()=>[t(s(l),null,{default:o(()=>[...e[2]||(e[2]=[n("Real Love",-1)])]),_:1}),t(s(l),{type:"success"},{default:o(()=>[...e[3]||(e[3]=[n("Yes It Is",-1)])]),_:1}),t(s(l),{type:"warning"},{default:o(()=>[...e[4]||(e[4]=[n("I'm Down",-1)])]),_:1}),t(s(l),{type:"error"},{default:o(()=>[...e[5]||(e[5]=[n("Yesterday",-1)])]),_:1}),t(s(l),{type:"info"},{default:o(()=>[...e[6]||(e[6]=[n("I'm Looking Through You",-1)])]),_:1})]),_:1})]),_:1}),t(d,{title:"Closable"},{code:o(({html:i,js:g})=>[n(c(i(`
					<n-space>
						<n-tag closable @close="handleClose">Real Love</n-tag>
						<n-tag type="success" closable @close="handleClose">Yes It Is</n-tag>
						<n-tag type="warning" closable @close="handleClose">I'm Down</n-tag>
						<n-tag type="error" closable @close="handleClose">Yesterday</n-tag>
						<n-tag
							type="info"
							closable
							:trigger-click-on-close="false"
							@click="handleClick"
							@close="handleClose"
						>
							I'm Looking Through You
						</n-tag>
					</n-space>
					`))+" "+c(g(`
						const message = useMessage()
						function handleClose() {
							message.info("tag close")
						}
						function handleClick() {
							message.info("tag click")
						}
						`)),1)]),default:o(()=>[t(s(u),null,{default:o(()=>[t(s(l),{closable:"",onClose:a},{default:o(()=>[...e[7]||(e[7]=[n("Real Love",-1)])]),_:1}),t(s(l),{type:"success",closable:"",onClose:a},{default:o(()=>[...e[8]||(e[8]=[n("Yes It Is",-1)])]),_:1}),t(s(l),{type:"warning",closable:"",onClose:a},{default:o(()=>[...e[9]||(e[9]=[n("I'm Down",-1)])]),_:1}),t(s(l),{type:"error",closable:"",onClose:a},{default:o(()=>[...e[10]||(e[10]=[n("Yesterday",-1)])]),_:1}),t(s(l),{type:"info",closable:"","trigger-click-on-close":!1,onClick:C,onClose:a},{default:o(()=>[...e[11]||(e[11]=[n(" I'm Looking Through You ",-1)])]),_:1})]),_:1})]),_:1}),t(d,{title:"Icon"},{code:o(({html:i,js:g})=>[n(c(i(`
					<n-space>
						<n-tag type="success">
							Checked
							<template #icon>
								<n-icon :component="CheckmarkCircle" />
							</template>
						</n-tag>
						<n-tag round :bordered="false" type="success">
							Checked
							<template #icon>
								<n-icon :component="CheckmarkCircle" />
							</template>
						</n-tag>
					</n-space>
					`))+" "+c(g(`
						import { CheckmarkCircle } from '@vicons/ionicons5'
						`)),1)]),default:o(()=>[t(s(u),null,{default:o(()=>[t(s(l),{type:"success"},{icon:o(()=>[t(p,{name:f})]),default:o(()=>[e[12]||(e[12]=n(" Checked ",-1))]),_:1}),t(s(l),{round:"",bordered:!1,type:"success"},{icon:o(()=>[t(p,{name:f})]),default:o(()=>[e[13]||(e[13]=n(" Checked ",-1))]),_:1})]),_:1})]),_:1})])])}}});export{M as default};
