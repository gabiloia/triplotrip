import{_ as v}from"./B3gcOJmJ.js";import{d as h,r as x,s as w,c as _,a as g,b as l,g as n,f as r,h as b,w as t,u as c,t as i}from"./G6QKWTEq.js";import{N as d}from"./DMbEUh5n.js";import"./B3cGRaQN.js";import"./-7JWf2sr.js";import"./GviZQag8.js";import"./DajhfOah.js";import"./BRZug4yH.js";const C={class:"page"},k={class:"page-header"},q={class:"links"},S={href:"https://www.naiveui.com/en-US/light/components/auto-complete",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},E={class:"components-list"},N="tabler:external-link",W=h({__name:"AutoComplete",setup(B){const s=x(""),p=w(()=>["@gmail.com","@163.com","@qq.com"].map(a=>{const e=s.value.split("@")[0];return{label:e+a,value:e+a}}));function f(a){return a==="a"}return(a,e)=>{const m=v;return g(),_("div",C,[l("div",k,[e[3]||(e[3]=l("div",{class:"title"},"AutoComplete",-1)),l("div",q,[l("a",S,[n(b,{name:N,size:16}),e[2]||(e[2]=r(" docs "))])])]),l("div",E,[n(m,{title:"Basic"},{description:t(()=>e[4]||(e[4]=[r("Start typing to see how this works.")])),code:t(({html:o,js:u})=>[r(i(o(`
					<n-auto-complete
						v-model:value="value"
						:input-props="{
							autocomplete: 'disabled'
						}"
						:options
						placeholder="Email"
					/>
					`))+" "+i(u(`
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
						`)),1)]),default:t(()=>[n(c(d),{value:s.value,"onUpdate:value":e[0]||(e[0]=o=>s.value=o),"input-props":{autocomplete:"disabled"},options:p.value,placeholder:"Email"},null,8,["value","options"])]),_:1}),n(m,{title:"Whether to show menu"},{description:t(()=>e[5]||(e[5]=[r(" Your can determine is whether to show menu based on value when it is focused. ")])),code:t(({html:o,js:u})=>[r(i(o(`
					<n-auto-complete
						v-model:value="value"
						:options
						placeholder="Input 'a' to show menu"
						:get-show="getShow"
					/>
					`))+" "+i(u(`
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
						`)),1)]),default:t(()=>[n(c(d),{value:s.value,"onUpdate:value":e[1]||(e[1]=o=>s.value=o),options:p.value,placeholder:"Input 'a' to show menu","get-show":f},null,8,["value","options"])]),_:1})])])}}});export{W as default};
