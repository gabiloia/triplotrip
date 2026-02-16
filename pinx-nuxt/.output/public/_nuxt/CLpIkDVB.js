import{_ as v}from"./BLzEf9tb.js";import{d as x,o as h,c as w,a as l,e as n,_,b as r,w as t,u as c,t as i,s as g,q as b}from"./BboPWEKj.js";import{N as d}from"./B50eWVwL.js";import"./BmSAZQUJ.js";import"./BoIEE7Tp.js";import"./DxB_AnUS.js";import"./DawznoV1.js";import"./CBN863Oo.js";import"./DqYVDO9Y.js";import"./ChA4gcHA.js";import"./DgobSdsA.js";import"./BY5EArDQ.js";import"./BuIxUXC0.js";import"./DqhOMRwD.js";const q={class:"page"},C={class:"page-header"},k={class:"links"},S={href:"https://www.naiveui.com/en-US/light/components/auto-complete",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},E={class:"components-list"},N="tabler:external-link",H=x({__name:"AutoComplete",setup(B){const s=g(""),p=b(()=>["@gmail.com","@163.com","@qq.com"].map(a=>{const e=s.value.split("@")[0];return{label:e+a,value:e+a}}));function f(a){return a==="a"}return(a,e)=>{const m=v;return h(),w("div",q,[l("div",C,[e[3]||(e[3]=l("div",{class:"title"},"AutoComplete",-1)),l("div",k,[l("a",S,[n(_,{name:N,size:16}),e[2]||(e[2]=r(" docs ",-1))])])]),l("div",E,[n(m,{title:"Basic"},{description:t(()=>[...e[4]||(e[4]=[r("Start typing to see how this works.",-1)])]),code:t(({html:o,js:u})=>[r(i(o(`
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
						`)),1)]),default:t(()=>[n(c(d),{value:s.value,"onUpdate:value":e[0]||(e[0]=o=>s.value=o),"input-props":{autocomplete:"disabled"},options:p.value,placeholder:"Email"},null,8,["value","options"])]),_:1}),n(m,{title:"Whether to show menu"},{description:t(()=>[...e[5]||(e[5]=[r(" Your can determine is whether to show menu based on value when it is focused. ",-1)])]),code:t(({html:o,js:u})=>[r(i(o(`
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
						`)),1)]),default:t(()=>[n(c(d),{value:s.value,"onUpdate:value":e[1]||(e[1]=o=>s.value=o),options:p.value,placeholder:"Input 'a' to show menu","get-show":f},null,8,["value","options"])]),_:1})])])}}});export{H as default};
