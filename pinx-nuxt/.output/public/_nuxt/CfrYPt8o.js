import{_ as v}from"./CkQPPryU.js";import{d as x,q as h,p as w,c as _,o as g,a as l,e as n,b as r,_ as b,w as t,u as c,t as i}from"./8g3bmYip.js";import{N as d}from"./D3LuIUi0.js";import"./CiSJ_ReP.js";import"./pFoo6Snw.js";import"./BMwUx3Op.js";import"./Ct9BlYQP.js";import"./DoZ0jqC9.js";import"./DwGgo8Cx.js";import"./C221Cupi.js";import"./B4mxUpMu.js";import"./D8q6-a0u.js";import"./x57_pNFw.js";import"./Ur1fK62G.js";const q={class:"page"},C={class:"page-header"},k={class:"links"},S={href:"https://www.naiveui.com/en-US/light/components/auto-complete",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},E={class:"components-list"},N="tabler:external-link",H=x({__name:"AutoComplete",setup(B){const s=h(""),u=w(()=>["@gmail.com","@163.com","@qq.com"].map(a=>{const e=s.value.split("@")[0];return{label:e+a,value:e+a}}));function f(a){return a==="a"}return(a,e)=>{const m=v;return g(),_("div",q,[l("div",C,[e[3]||(e[3]=l("div",{class:"title"},"AutoComplete",-1)),l("div",k,[l("a",S,[n(b,{name:N,size:16}),e[2]||(e[2]=r(" docs "))])])]),l("div",E,[n(m,{title:"Basic"},{description:t(()=>e[4]||(e[4]=[r("Start typing to see how this works.")])),code:t(({html:o,js:p})=>[r(i(o(`
					<n-auto-complete
						v-model:value="value"
						:input-props="{
							autocomplete: 'disabled'
						}"
						:options
						placeholder="Email"
					/>
					`))+" "+i(p(`
						const value = ref("")
						const options = computed(() => {
							return ["@gmail.com", "@163.com", "@qq.com"].map(suffix => {
								const prefix = value.value.split("@")[0]
								return {
									label: prefix + suffix,
									value: prefix + suffix
								}
							})
						})
						`)),1)]),default:t(()=>[n(c(d),{value:s.value,"onUpdate:value":e[0]||(e[0]=o=>s.value=o),"input-props":{autocomplete:"disabled"},options:u.value,placeholder:"Email"},null,8,["value","options"])]),_:1}),n(m,{title:"Whether to show menu"},{description:t(()=>e[5]||(e[5]=[r(" Your can determine is whether to show menu based on value when it is focused. ")])),code:t(({html:o,js:p})=>[r(i(o(`
					<n-auto-complete
						v-model:value="value"
						:options
						placeholder="Input 'a' to show menu"
						:get-show="getShow"
					/>
					`))+" "+i(p(`
						const value = ref("")
						const options = computed(() => {
							return ["@gmail.com", "@163.com", "@qq.com"].map(suffix => {
								const prefix = value.value.split("@")[0]
								return {
									label: prefix + suffix,
									value: prefix + suffix
								}
							})
						})
						const getShow = (value: string) => {
							if (value === "a") {
								return true
							}
							return false
						}
						`)),1)]),default:t(()=>[n(c(d),{value:s.value,"onUpdate:value":e[1]||(e[1]=o=>s.value=o),options:u.value,placeholder:"Input 'a' to show menu","get-show":f},null,8,["value","options"])]),_:1})])])}}});export{H as default};
