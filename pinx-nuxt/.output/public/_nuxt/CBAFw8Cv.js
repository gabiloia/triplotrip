import{_ as k}from"./BfzzecIy.js";import{aq as v,ar as _,e8 as h,d as S,ad as x,c as w,a as N,b as s,g as o,f as n,h as E,w as t,u as r,B as l,t as u}from"./CFnCIwgc.js";import{N as b}from"./CTeCxYcV.js";import"./uLUuACJr.js";import"./Bg-0ZsXF.js";import"./Bk_rJcZu.js";function T(){const a=v(h,null);return a===null&&_("use-dialog","No outer <n-dialog-provider /> founded."),a}const A={class:"page"},B={class:"page-header"},P={class:"links"},D={href:"https://www.naiveui.com/en-US/light/components/dialog",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},y={class:"components-list"},I="tabler:external-link",K=S({__name:"Dialog",setup(a){const i=x(),c=T();function d(){c.warning({title:"Confirm",content:"Are you sure?",positiveText:"Sure",negativeText:"Not Sure",onPositiveClick:()=>{i.success("Sure")},onNegativeClick:()=>{i.error("Not Sure")}})}function m(){c.success({title:"Success",content:"Cool",positiveText:"Wow!",onPositiveClick:()=>{i.success("Great!")}})}function g(){c.error({title:"Error",content:"A mistake.",positiveText:"Ahhh!",onPositiveClick:()=>{i.success("I knew it...")}})}return(V,e)=>{const f=k;return N(),w("div",A,[s("div",B,[e[1]||(e[1]=s("div",{class:"title"},"Dialog",-1)),s("div",P,[s("a",D,[o(E,{name:I,size:16}),e[0]||(e[0]=n(" docs "))])])]),s("div",y,[o(f,{title:"Basic",class:"max-w-lg"},{code:t(({html:p,js:C})=>[n(u(p(`
					<n-space>
						<n-button @click="handleConfirm">Confirm</n-button>
						<n-button @click="handleSuccess">Success</n-button>
						<n-button @click="handleError">Error</n-button>
					</n-space>
					`))+" "+u(C(`
						const message = useMessage()
						const dialog = useDialog()

						function handleConfirm() {
							dialog.warning({
								title: "Confirm",
								content: "Are you sure?",
								positiveText: "Sure",
								negativeText: "Not Sure",
								onPositiveClick: () => {
									message.success("Sure")
								},
								onNegativeClick: () => {
									message.error("Not Sure")
								}
							})
						}
						function handleSuccess() {
							dialog.success({
								title: "Success",
								content: "Cool",
								positiveText: "Wow!",
								onPositiveClick: () => {
									message.success("Great!")
								}
							})
						}
						function handleError() {
							dialog.error({
								title: "Error",
								content: "A mistake.",
								positiveText: "Ahhh!",
								onPositiveClick: () => {
									message.success("I knew it...")
								}
							})
						}
						`)),1)]),default:t(()=>[o(r(b),null,{default:t(()=>[o(r(l),{onClick:d},{default:t(()=>e[2]||(e[2]=[n("Confirm")])),_:1}),o(r(l),{onClick:m},{default:t(()=>e[3]||(e[3]=[n("Success")])),_:1}),o(r(l),{onClick:g},{default:t(()=>e[4]||(e[4]=[n("Error")])),_:1})]),_:1})]),_:1})])])}}});export{K as default};
