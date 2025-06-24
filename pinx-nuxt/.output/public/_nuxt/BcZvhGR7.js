import{_}from"./D8_dUoA9.js";import{d as C,ah as k,c as v,o as S,a as s,e as t,b as n,_ as h,w as o,u as r,B as c,t as l}from"./BU9QL1D6.js";import{u as x}from"./OgmspAKD.js";import{N as w}from"./m_PA2YQz.js";import"./7x_42VVO.js";import"./p-klaAzO.js";import"./Bk_rJcZu.js";const N={class:"page"},E={class:"page-header"},b={class:"links"},T={href:"https://www.naiveui.com/en-US/light/components/dialog",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},A={class:"components-list"},B="tabler:external-link",U=C({__name:"Dialog",setup(P){const i=k(),a=x();function u(){a.warning({title:"Confirm",content:"Are you sure?",positiveText:"Sure",negativeText:"Not Sure",onPositiveClick:()=>{i.success("Sure")},onNegativeClick:()=>{i.error("Not Sure")}})}function d(){a.success({title:"Success",content:"Cool",positiveText:"Wow!",onPositiveClick:()=>{i.success("Great!")}})}function m(){a.error({title:"Error",content:"A mistake.",positiveText:"Ahhh!",onPositiveClick:()=>{i.success("I knew it...")}})}return(D,e)=>{const p=_;return S(),v("div",N,[s("div",E,[e[1]||(e[1]=s("div",{class:"title"},"Dialog",-1)),s("div",b,[s("a",T,[t(h,{name:B,size:16}),e[0]||(e[0]=n(" docs "))])])]),s("div",A,[t(p,{title:"Basic",class:"max-w-lg"},{code:o(({html:f,js:g})=>[n(l(f(`
					<n-space>
						<n-button @click="handleConfirm">Confirm</n-button>
						<n-button @click="handleSuccess">Success</n-button>
						<n-button @click="handleError">Error</n-button>
					</n-space>
					`))+" "+l(g(`
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
						`)),1)]),default:o(()=>[t(r(w),null,{default:o(()=>[t(r(c),{onClick:u},{default:o(()=>e[2]||(e[2]=[n("Confirm")])),_:1,__:[2]}),t(r(c),{onClick:d},{default:o(()=>e[3]||(e[3]=[n("Success")])),_:1,__:[3]}),t(r(c),{onClick:m},{default:o(()=>e[4]||(e[4]=[n("Error")])),_:1,__:[4]})]),_:1})]),_:1})])])}}});export{U as default};
