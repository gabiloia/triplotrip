import{_ as c}from"./BLzEf9tb.js";import{d as w,o as v,c as _,a as i,e as t,_ as k,b as o,w as s,u as n,a4 as l,t as p,z as d,B as x,s as N}from"./BboPWEKj.js";import{N as u}from"./CV6rs4kW.js";import{N as g}from"./YBnofTK0.js";import"./BmSAZQUJ.js";import"./BoIEE7Tp.js";import"./Bk_rJcZu.js";const z={class:"page"},L={class:"page-header"},S={class:"links"},y={href:"https://www.naiveui.com/en-US/light/components/spin",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},C={class:"components-list"},B="tabler:external-link",U=w({__name:"Spin",setup(b){const r=N(!1);return(E,e)=>{const m=c;return v(),_("div",z,[i("div",L,[e[2]||(e[2]=i("div",{class:"title"},"Spin",-1)),i("div",S,[i("a",y,[t(k,{name:B,size:16}),e[1]||(e[1]=o(" docs ",-1))])])]),i("div",C,[t(m,{title:"Basic"},{description:s(()=>[e[6]||(e[6]=o(" Here are ",-1)),t(n(d),{code:""},{default:s(()=>[...e[3]||(e[3]=[o("small",-1)])]),_:1}),e[7]||(e[7]=o(" , ",-1)),t(n(d),{code:""},{default:s(()=>[...e[4]||(e[4]=[o("medium",-1)])]),_:1}),e[8]||(e[8]=o(" and ",-1)),t(n(d),{code:""},{default:s(()=>[...e[5]||(e[5]=[o("large",-1)])]),_:1}),e[9]||(e[9]=o(" spins. ",-1))]),code:s(({html:a})=>[o(p(a(`
					<n-space>
						<n-spin size="small" />
						<n-spin size="medium" />
						<n-spin size="large" />
					</n-space>
					`)),1)]),default:s(()=>[t(n(u),null,{default:s(()=>[t(n(l),{size:"small"}),t(n(l),{size:"medium"}),t(n(l),{size:"large"})]),_:1})]),_:1}),t(m,{title:"Wrap"},{description:s(()=>[...e[10]||(e[10]=[o("You can wrap a component inside spin.",-1)])]),code:s(({html:a,js:f})=>[o(p(a(`
					<n-space vertical>
						<n-spin :show="show">
							<n-alert title="La La La" type="success">
								Leave it till tomorrow to unpack my case. Honey disconnect the phone.
							</n-alert>
						</n-spin>
						<n-button @click="show = !show">Click to Spin</n-button>
					</n-space>
					`))+" "+p(f("const show = ref(false)")),1)]),default:s(()=>[t(n(u),{vertical:""},{default:s(()=>[t(n(l),{show:r.value},{default:s(()=>[t(n(g),{title:"La La La",type:"success"},{default:s(()=>[...e[11]||(e[11]=[o(" Leave it till tomorrow to unpack my case. Honey disconnect the phone. ",-1)])]),_:1})]),_:1},8,["show"]),t(n(x),{onClick:e[0]||(e[0]=a=>r.value=!r.value)},{default:s(()=>[...e[12]||(e[12]=[o("Click to Spin",-1)])]),_:1})]),_:1})]),_:1})])])}}});export{U as default};
