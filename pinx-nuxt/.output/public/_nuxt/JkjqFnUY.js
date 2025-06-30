import{_ as $}from"./BucR0pva.js";import{d as y,q as C,c as S,o as U,a as s,e as n,b as e,_ as w,w as u,u as r,t as i,z as m}from"./Cc935Wq4.js";import{N as p}from"./DYmbBiui.js";import{N as v}from"./CUFKXDcS.js";import"./BajPnLyu.js";import"./Cnxb9HjD.js";import"./78yQ6ZAJ.js";import"./n7hhwT1A.js";import"./B0PnIP4q.js";import"./Cv2TuTEG.js";import"./Bk_rJcZu.js";const B={class:"page"},k={class:"page-header"},I={class:"links"},L={href:"https://www.naiveui.com/en-US/light/components/input-number",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},_={class:"components-list"},E="tabler:external-link",K=y({__name:"InputNumber",setup(V){const a=C(0);function b(o){const t=o.replace(/,/g,"").trim();return/^\d+(?:\.\d*)?$/.test(t)?Number(t):t===""?null:Number.NaN}function N(o){return o===null?"":o.toLocaleString("en-US")}function g(o){const t=o.replace(/([,$\s])/g,"").trim();return/^\d+(?:\.\d*)?$/.test(t)?Number(t):t===""?null:Number.NaN}function x(o){return o===null?"":`${o.toLocaleString("en-US")} $`}return(o,t)=>{const f=$;return U(),S("div",B,[s("div",k,[t[5]||(t[5]=s("div",{class:"title"},"InputNumber",-1)),s("div",I,[s("a",L,[n(w,{name:E,size:16}),t[4]||(t[4]=e(" docs "))])])]),s("div",_,[n(f,{title:"Basic"},{code:u(({html:l,js:d})=>[e(i(l(`
					<n-input-number v-model:value="value" clearable />
					`))+" "+i(d(`
						const value = ref(0)
						`)),1)]),default:u(()=>[n(r(p),{value:a.value,"onUpdate:value":t[0]||(t[0]=l=>a.value=l),clearable:""},null,8,["value"])]),_:1}),n(f,{title:"Custom parsing"},{description:u(()=>[t[12]||(t[12]=e(" You can use ")),n(r(m),{code:""},{default:u(()=>t[6]||(t[6]=[e("parse")])),_:1,__:[6]}),t[13]||(t[13]=e(" and ")),n(r(m),{code:""},{default:u(()=>t[7]||(t[7]=[e("format")])),_:1,__:[7]}),t[14]||(t[14]=e(" to custom parsing & display. For example add thousand separator. Usually they should be set together, especially you have a custom ")),n(r(m),{code:""},{default:u(()=>t[8]||(t[8]=[e("validator")])),_:1,__:[8]}),t[15]||(t[15]=e(" set. ")),t[16]||(t[16]=s("br",null,null,-1)),t[17]||(t[17]=s("br",null,null,-1)),t[18]||(t[18]=e(" Use ")),n(r(m),{code:""},{default:u(()=>t[9]||(t[9]=[e("parse")])),_:1,__:[9]}),t[19]||(t[19]=e(" and ")),n(r(m),{code:""},{default:u(()=>t[10]||(t[10]=[e("format")])),_:1,__:[10]}),t[20]||(t[20]=e(" will disable ")),n(r(m),{code:""},{default:u(()=>t[11]||(t[11]=[e("update-value-on-input")])),_:1,__:[11]}),t[21]||(t[21]=e(" . "))]),code:u(({html:l,js:d})=>[e(i(l(`
					<n-space vertical>
						<n-input-number :default-value="1075" :parse="parse" :format="format" />
						<n-input-number :default-value="1075" :parse="parseCurrency" :format="formatCurrency" />
					</n-space>
					`))+" "+i(d(`
						function parse(input: string) {
							const nums = input.replace(/,/g, "").trim()
							if (/^d+(.(d+)?)?$/.test(nums)) return Number(nums)
							return nums === "" ? null : Number.NaN
						}
						function format(value: number | null) {
							if (value === null) return ""
							return value.toLocaleString("en-US")
						}
						function parseCurrency(input: string) {
							const nums = input.replace(/(,|$|s)/g, "").trim()
							if (/^d+(.(d+)?)?$/.test(nums)) return Number(nums)
							return nums === "" ? null : Number.NaN
						}
						function formatCurrency(value: number | null) {
							if (value === null) return ""
							return \`\${value.toLocaleString("en-US")} $\`
						}
						`)),1)]),default:u(()=>[n(r(v),{vertical:""},{default:u(()=>[n(r(p),{"default-value":1075,parse:b,format:N}),n(r(p),{"default-value":1075,parse:g,format:x})]),_:1})]),_:1}),n(f,{title:"Button placement"},{description:u(()=>t[22]||(t[22]=[e("Button can be placed at both ends.")])),code:u(({html:l,js:d})=>[e(i(l(`
					<n-space vertical>
						<n-input-number v-model:value="value" button-placement="both" />
						<n-input-number v-model:value="value" button-placement="both">
							<template #prefix>$</template>
						</n-input-number>
						<n-input-number v-model:value="value" button-placement="both">
							<template #suffix>฿</template>
						</n-input-number>
					</n-space>
					`))+" "+i(d(`
						const value = ref(0)
						`)),1)]),default:u(()=>[n(r(v),{vertical:""},{default:u(()=>[n(r(p),{value:a.value,"onUpdate:value":t[1]||(t[1]=l=>a.value=l),"button-placement":"both"},null,8,["value"]),n(r(p),{value:a.value,"onUpdate:value":t[2]||(t[2]=l=>a.value=l),"button-placement":"both"},{prefix:u(()=>t[23]||(t[23]=[e("$")])),_:1},8,["value"]),n(r(p),{value:a.value,"onUpdate:value":t[3]||(t[3]=l=>a.value=l),"button-placement":"both"},{suffix:u(()=>t[24]||(t[24]=[e("฿")])),_:1},8,["value"])]),_:1})]),_:1})])])}}});export{K as default};
