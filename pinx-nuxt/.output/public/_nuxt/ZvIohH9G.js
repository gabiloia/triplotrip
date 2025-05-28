import{_ as c}from"./0RhdNeLw.js";import{d as w,q as v,c as _,o as k,a as i,e as t,b as o,_ as x,w as s,u as n,G as l,t as p,O as d,B as N}from"./CKyhG2UO.js";import{N as u}from"./Dh2Me1dS.js";import{N as g}from"./BhWdQO9B.js";import"./BMJuwibk.js";import"./BLIjkjma.js";import"./Bk_rJcZu.js";const L={class:"page"},S={class:"page-header"},y={class:"links"},z={href:"https://www.naiveui.com/en-US/light/components/spin",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},C={class:"components-list"},B="tabler:external-link",G=w({__name:"Spin",setup(b){const r=v(!1);return(E,e)=>{const m=c;return k(),_("div",L,[i("div",S,[e[2]||(e[2]=i("div",{class:"title"},"Spin",-1)),i("div",y,[i("a",z,[t(x,{name:B,size:16}),e[1]||(e[1]=o(" docs "))])])]),i("div",C,[t(m,{title:"Basic"},{description:s(()=>[e[6]||(e[6]=o(" Here are ")),t(n(d),{code:""},{default:s(()=>e[3]||(e[3]=[o("small")])),_:1}),e[7]||(e[7]=o(" , ")),t(n(d),{code:""},{default:s(()=>e[4]||(e[4]=[o("medium")])),_:1}),e[8]||(e[8]=o(" and ")),t(n(d),{code:""},{default:s(()=>e[5]||(e[5]=[o("large")])),_:1}),e[9]||(e[9]=o(" spins. "))]),code:s(({html:a})=>[o(p(a(`
					<n-space>
						<n-spin size="small" />
						<n-spin size="medium" />
						<n-spin size="large" />
					</n-space>
					`)),1)]),default:s(()=>[t(n(u),null,{default:s(()=>[t(n(l),{size:"small"}),t(n(l),{size:"medium"}),t(n(l),{size:"large"})]),_:1})]),_:1}),t(m,{title:"Wrap"},{description:s(()=>e[10]||(e[10]=[o("You can wrap a component inside spin.")])),code:s(({html:a,js:f})=>[o(p(a(`
					<n-space vertical>
						<n-spin :show="show">
							<n-alert title="La La La" type="success">
								Leave it till tomorrow to unpack my case. Honey disconnect the phone.
							</n-alert>
						</n-spin>
						<n-button @click="show = !show">Click to Spin</n-button>
					</n-space>
					`))+" "+p(f("const show = ref(false)")),1)]),default:s(()=>[t(n(u),{vertical:""},{default:s(()=>[t(n(l),{show:r.value},{default:s(()=>[t(n(g),{title:"La La La",type:"success"},{default:s(()=>e[11]||(e[11]=[o(" Leave it till tomorrow to unpack my case. Honey disconnect the phone. ")])),_:1})]),_:1},8,["show"]),t(n(N),{onClick:e[0]||(e[0]=a=>r.value=!r.value)},{default:s(()=>e[12]||(e[12]=[o("Click to Spin")])),_:1})]),_:1})]),_:1})])])}}});export{G as default};
