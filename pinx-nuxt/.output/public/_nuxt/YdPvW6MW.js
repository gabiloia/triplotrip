import{_}from"./CkQPPryU.js";import{d as c,q as w,c as v,o as k,a as i,e as t,b as o,_ as x,w as s,u as n,a2 as l,t as p,z as d,B as N}from"./8g3bmYip.js";import{N as u}from"./BDy3Za_D.js";import{N as g}from"./1cQiQdBO.js";import"./CiSJ_ReP.js";import"./pFoo6Snw.js";import"./Bk_rJcZu.js";const z={class:"page"},L={class:"page-header"},S={class:"links"},y={href:"https://www.naiveui.com/en-US/light/components/spin",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},C={class:"components-list"},B="tabler:external-link",I=c({__name:"Spin",setup(b){const r=w(!1);return(E,e)=>{const m=_;return k(),v("div",z,[i("div",L,[e[2]||(e[2]=i("div",{class:"title"},"Spin",-1)),i("div",S,[i("a",y,[t(x,{name:B,size:16}),e[1]||(e[1]=o(" docs "))])])]),i("div",C,[t(m,{title:"Basic"},{description:s(()=>[e[6]||(e[6]=o(" Here are ")),t(n(d),{code:""},{default:s(()=>e[3]||(e[3]=[o("small")])),_:1,__:[3]}),e[7]||(e[7]=o(" , ")),t(n(d),{code:""},{default:s(()=>e[4]||(e[4]=[o("medium")])),_:1,__:[4]}),e[8]||(e[8]=o(" and ")),t(n(d),{code:""},{default:s(()=>e[5]||(e[5]=[o("large")])),_:1,__:[5]}),e[9]||(e[9]=o(" spins. "))]),code:s(({html:a})=>[o(p(a(`
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
					`))+" "+p(f("const show = ref(false)")),1)]),default:s(()=>[t(n(u),{vertical:""},{default:s(()=>[t(n(l),{show:r.value},{default:s(()=>[t(n(g),{title:"La La La",type:"success"},{default:s(()=>e[11]||(e[11]=[o(" Leave it till tomorrow to unpack my case. Honey disconnect the phone. ")])),_:1,__:[11]})]),_:1},8,["show"]),t(n(N),{onClick:e[0]||(e[0]=a=>r.value=!r.value)},{default:s(()=>e[12]||(e[12]=[o("Click to Spin")])),_:1,__:[12]})]),_:1})]),_:1})])])}}});export{I as default};
