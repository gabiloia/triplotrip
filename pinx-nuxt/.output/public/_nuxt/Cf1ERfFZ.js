import{_ as C}from"./vPp7vp59.js";import{aC as k,aD as v,dW as S,d as h,af as x,c as w,o as N,a as s,e as o,b as n,_ as E,w as t,u as r,B as l,t as u}from"./BfwEk-Nq.js";import{N as b}from"./BS7aab3v.js";import"./CPRgsAKX.js";import"./D-rSACz3.js";import"./Bk_rJcZu.js";function T(){const a=k(S,null);return a===null&&v("use-dialog","No outer <n-dialog-provider /> founded."),a}const A={class:"page"},B={class:"page-header"},D={class:"links"},P={href:"https://www.naiveui.com/en-US/light/components/dialog",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},y={class:"components-list"},I="tabler:external-link",U=h({__name:"Dialog",setup(a){const i=x(),c=T();function d(){c.warning({title:"Confirm",content:"Are you sure?",positiveText:"Sure",negativeText:"Not Sure",onPositiveClick:()=>{i.success("Sure")},onNegativeClick:()=>{i.error("Not Sure")}})}function m(){c.success({title:"Success",content:"Cool",positiveText:"Wow!",onPositiveClick:()=>{i.success("Great!")}})}function g(){c.error({title:"Error",content:"A mistake.",positiveText:"Ahhh!",onPositiveClick:()=>{i.success("I knew it...")}})}return(V,e)=>{const f=C;return N(),w("div",A,[s("div",B,[e[1]||(e[1]=s("div",{class:"title"},"Dialog",-1)),s("div",D,[s("a",P,[o(E,{name:I,size:16}),e[0]||(e[0]=n(" docs "))])])]),s("div",y,[o(f,{title:"Basic",class:"max-w-lg"},{code:t(({html:p,js:_})=>[n(u(p(`
					<n-space>
						<n-button @click="handleConfirm">Confirm</n-button>
						<n-button @click="handleSuccess">Success</n-button>
						<n-button @click="handleError">Error</n-button>
					</n-space>
					`))+" "+u(_(`
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
						`)),1)]),default:t(()=>[o(r(b),null,{default:t(()=>[o(r(l),{onClick:d},{default:t(()=>e[2]||(e[2]=[n("Confirm")])),_:1,__:[2]}),o(r(l),{onClick:m},{default:t(()=>e[3]||(e[3]=[n("Success")])),_:1,__:[3]}),o(r(l),{onClick:g},{default:t(()=>e[4]||(e[4]=[n("Error")])),_:1,__:[4]})]),_:1})]),_:1})])])}}});export{U as default};
