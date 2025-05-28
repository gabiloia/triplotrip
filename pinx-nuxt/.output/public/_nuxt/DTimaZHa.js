import{_ as x}from"./0RhdNeLw.js";import{d as f,q as r,c as g,o as C,a as u,e as n,b as o,_ as z,w as a,u as t,B as b,t as c}from"./CKyhG2UO.js";import{N as p}from"./Dh2Me1dS.js";import{N as d,a as y}from"./B9eh-Yu0.js";import"./BMJuwibk.js";import"./BLIjkjma.js";import"./Bk_rJcZu.js";const S={class:"page"},B={class:"page-header"},N={class:"links"},U={href:"https://www.naiveui.com/en-US/light/components/checkbox",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},w={class:"components-list"},_="tabler:external-link",A=f({__name:"Checkbox",setup(G){const i=r(!1),k=r(!0),h=r(null),s=r(!1);return(j,e)=>{const v=x;return C(),g("div",S,[u("div",B,[e[11]||(e[11]=u("div",{class:"title"},"Checkbox",-1)),u("div",N,[u("a",U,[n(z,{name:_,size:16}),e[10]||(e[10]=o(" docs "))])])]),u("div",w,[n(v,{title:"Basic"},{code:a(({html:l,js:m})=>[o(c(l(`
					<n-space item-style="display: flex;" align="center">
						<n-checkbox v-model:checked="value">Checkbox</n-checkbox>
						<n-checkbox v-model:checked="value" />
						<n-checkbox v-model:checked="value" :disabled="disabled">Checkbox</n-checkbox>
						<n-button size="small" @click="disabled = !disabled">Disabled</n-button>
					</n-space>
					`))+" "+c(m(`
						const value = ref(false)
						const disabled = ref(true)
						`)),1)]),default:a(()=>[n(t(p),{"item-style":"display: flex;",align:"center"},{default:a(()=>[n(t(d),{checked:i.value,"onUpdate:checked":e[0]||(e[0]=l=>i.value=l)},{default:a(()=>e[12]||(e[12]=[o("Checkbox")])),_:1},8,["checked"]),n(t(d),{checked:i.value,"onUpdate:checked":e[1]||(e[1]=l=>i.value=l)},null,8,["checked"]),n(t(d),{checked:i.value,"onUpdate:checked":e[2]||(e[2]=l=>i.value=l),disabled:k.value},{default:a(()=>e[13]||(e[13]=[o("Checkbox")])),_:1},8,["checked","disabled"]),n(t(b),{size:"small",onClick:e[3]||(e[3]=l=>k.value=!k.value)},{default:a(()=>e[14]||(e[14]=[o("Disabled")])),_:1})]),_:1})]),_:1}),n(v,{title:"Checkbox group"},{code:a(({html:l,js:m})=>[o(c(l(`
					<n-checkbox-group v-model:value="cities">
						<n-space item-style="display: flex;">
							<n-checkbox value="Beijing" label="Beijing" />
							<n-checkbox value="Shanghai" label="Shanghai" />
							<n-checkbox value="Guangzhou" label="Guangzhou" />
							<n-checkbox value="Shenzen" label="Shenzhen" />
						</n-space>
					</n-checkbox-group>
					`))+" "+c(m(`
						const cities = ref(null)
						`)),1)]),default:a(()=>[n(t(y),{value:h.value,"onUpdate:value":e[4]||(e[4]=l=>h.value=l)},{default:a(()=>[n(t(p),{"item-style":"display: flex;"},{default:a(()=>[n(t(d),{value:"Beijing",label:"Beijing"}),n(t(d),{value:"Shanghai",label:"Shanghai"}),n(t(d),{value:"Guangzhou",label:"Guangzhou"}),n(t(d),{value:"Shenzen",label:"Shenzhen"})]),_:1})]),_:1},8,["value"])]),_:1}),n(v,{title:"Indeterminate"},{code:a(({html:l})=>[o(c(l(`
					<n-space item-style="display: flex;" align="center">
						<n-checkbox v-model:checked="value" :indeterminate="indeterminate">checkbox</n-checkbox>
						<n-checkbox v-model:checked="value" :indeterminate="indeterminate" />
						<n-checkbox v-model:checked="value" :indeterminate="indeterminate" disabled />
						<n-button size="small" @click="value = !value">Check</n-button>
						<n-button size="small" @click="indeterminate = !indeterminate">Indeterminate</n-button>
					</n-space>
					`)),1)]),default:a(()=>[n(t(p),{"item-style":"display: flex;",align:"center"},{default:a(()=>[n(t(d),{checked:i.value,"onUpdate:checked":e[5]||(e[5]=l=>i.value=l),indeterminate:s.value},{default:a(()=>e[15]||(e[15]=[o("checkbox")])),_:1},8,["checked","indeterminate"]),n(t(d),{checked:i.value,"onUpdate:checked":e[6]||(e[6]=l=>i.value=l),indeterminate:s.value},null,8,["checked","indeterminate"]),n(t(d),{checked:i.value,"onUpdate:checked":e[7]||(e[7]=l=>i.value=l),indeterminate:s.value,disabled:""},null,8,["checked","indeterminate"]),n(t(b),{size:"small",onClick:e[8]||(e[8]=l=>i.value=!i.value)},{default:a(()=>e[16]||(e[16]=[o("Check")])),_:1}),n(t(b),{size:"small",onClick:e[9]||(e[9]=l=>s.value=!s.value)},{default:a(()=>e[17]||(e[17]=[o("Indeterminate")])),_:1})]),_:1})]),_:1})])])}}});export{A as default};
