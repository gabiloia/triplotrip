import{_}from"./-8skxH3i.js";import{d as y,q as k,c as f,o as c,a as s,e as o,b as r,_ as N,w as a,u as n,t as u,F as S,r as w,g as B}from"./jbHnS89g.js";import{N as b}from"./Cc8sHlRT.js";import{N as g}from"./BFKuVoXh.js";import{N as R}from"./DqokPxXq.js";import{N as C}from"./D3qZW8zU.js";import"./CcTAenLk.js";import"./C1kpI9sS.js";import"./Bk_rJcZu.js";const x={class:"page"},L={class:"page-header"},V={class:"links"},D={href:"https://www.naiveui.com/en-US/light/components/radio",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},H={class:"components-list"},M="tabler:external-link",A=y({__name:"Radio",setup(F){const i=k(null);function v(t){i.value=t.target.value}const m=k(null),h=[{value:"Rock'n'Roll Star",label:"Rock'n'Roll Star"},{value:"Shakermaker",label:"Shakermaker"},{value:"Live Forever",label:"Live Forever"},{value:"Up in the Sky",label:"Up in the Sky"},{value:"...",label:"..."}].map(t=>(t.value=t.value.toLowerCase(),t));return(t,e)=>{const p=_;return c(),f("div",x,[s("div",L,[e[2]||(e[2]=s("div",{class:"title"},"Radio",-1)),s("div",V,[s("a",D,[o(N,{name:M,size:16}),e[1]||(e[1]=r(" docs "))])])]),s("div",H,[o(p,{title:"Basic"},{code:a(({html:l,js:d})=>[r(u(l(`
					<n-space>
						<n-radio
							:checked="checkedValue === 'Definitely Maybe'"
							value="Definitely Maybe"
							name="basic-demo"
							@change="handleChange"
						>
							Definitely Maybe
						</n-radio>
						<n-radio
							:checked="checkedValue === 'Be Here Now'"
							value="Be Here Now"
							name="basic-demo"
							@change="handleChange"
						>
							Be Here Now
						</n-radio>
					</n-space>
					`))+" "+u(d(`
						const checkedValue = ref<string | null>(null)

						function handleChange(e: Event) {
							checkedValue.value = (e.target as HTMLInputElement).value
						}
						`)),1)]),default:a(()=>[o(n(b),null,{default:a(()=>[o(n(g),{checked:i.value==="Definitely Maybe",value:"Definitely Maybe",name:"basic-demo",onChange:v},{default:a(()=>e[3]||(e[3]=[r(" Definitely Maybe ")])),_:1,__:[3]},8,["checked"]),o(n(g),{checked:i.value==="Be Here Now",value:"Be Here Now",name:"basic-demo",onChange:v},{default:a(()=>e[4]||(e[4]=[r(" Be Here Now ")])),_:1,__:[4]},8,["checked"])]),_:1})]),_:1}),o(p,{title:"Button group"},{description:a(()=>e[5]||(e[5]=[r("Sometimes a radio button group can look more elegant.")])),code:a(({html:l,js:d})=>[r(u(l(`
					<n-space vertical>
						<n-radio-group v-model:value="value" name="radiobuttongroup">
							<n-radio-button
								v-for="song in songs"
								:key="song.value"
								:value="song.value"
								:label="song.label"
							/>
						</n-radio-group>
					</n-space>
					`))+" "+u(d(`
						const value = ref(null)

						const songs = [
							{
								value: "Rock'n'Roll Star",
								label: "Rock'n'Roll Star"
							},
							{
								value: "Shakermaker",
								label: "Shakermaker"
							},
							{
								value: "Live Forever",
								label: "Live Forever"
							},
							{
								value: "Up in the Sky",
								label: "Up in the Sky"
							},
							{
								value: "...",
								label: "..."
							}
						].map(s => {
							s.value = s.value.toLowerCase()
							return s
						})
						`)),1)]),default:a(()=>[o(n(b),{vertical:""},{default:a(()=>[o(n(R),{value:m.value,"onUpdate:value":e[0]||(e[0]=l=>m.value=l),name:"radiobuttongroup"},{default:a(()=>[(c(!0),f(S,null,w(n(h),l=>(c(),B(n(C),{key:l.value,value:l.value,label:l.label},null,8,["value","label"]))),128))]),_:1},8,["value"])]),_:1})]),_:1})])])}}});export{A as default};
