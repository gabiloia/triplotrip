import{_ as j}from"./CecrDnS1.js";import{d as H,q as y,p as h,c as w,o as x,a as f,e as a,b as l,_ as Q,w as t,u as n,g as J,O as W,t as r,F as k,r as T,z as I}from"./CghEsQSB.js";import{N as u}from"./C6aVr1IY.js";import{N as S}from"./B-kWjqJT.js";import{N as C}from"./Df6PouTN.js";import{N as g,b as s}from"./BOCtfPgb.js";import"./DBs0U9JY.js";import"./9xxGHCVY.js";import"./Bk_rJcZu.js";import"./BON73T5l.js";import"./BgrNEoJq.js";import"./aE_L93ST.js";const V={class:"page"},A={class:"page-header"},P={class:"links"},M={href:"https://www.naiveui.com/en-US/light/components/tabs",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},U={class:"components-list"},z="tabler:external-link",ae=H({__name:"Tabs",setup(E){const d=y("top"),v=y("line"),m=y(1),b=y([1,2,3,4,5]),B=h(()=>({disabled:b.value.length>=10})),R=h(()=>b.value.length>1);function N(){const p=Math.max(...b.value)+1;b.value.push(p),m.value=p}function O(p){const{value:e}=b,i=e.findIndex(o=>o===p);~i&&(e.splice(i,1),p===m.value&&(m.value=e[Math.min(i,e.length-1)]))}return(p,e)=>{const i=j;return x(),w("div",V,[f("div",A,[e[4]||(e[4]=f("div",{class:"title"},"Tabs",-1)),f("div",P,[f("a",M,[a(Q,{name:z,size:16}),e[3]||(e[3]=l(" docs "))])])]),f("div",U,[a(i,{title:"Basic"},{code:t(({html:o,js:_})=>[l(r(o(`
					<n-space vertical>
						<n-radio-group v-model:value="placement">
							<n-radio label="top" value="top" />
							<n-radio label="bottom" value="bottom" />
							<n-radio label="left" value="left" />
							<n-radio label="right" value="right" />
						</n-radio-group>
						<n-radio-group v-model:value="type">
							<n-radio label="card" value="card" />
							<n-radio label="bar" value="bar" />
							<n-radio label="line" value="line" />
						</n-radio-group>
						<n-tabs
							:key="type + placement"
							:type="type"
							animated
							:placement="placement"
							:style="placement === 'left' || placement === 'right' ? { height: '240px' } : undefined"
						>
							<n-tab-pane name="oasis" tab="Oasis"> Wonderwall </n-tab-pane>
							<n-tab-pane name="the beatles" tab="the Beatles"> Hey Jude </n-tab-pane>
							<n-tab-pane name="jay chou" tab="Jay Chou"> Qilixiang </n-tab-pane>
							<n-tab-pane name="oasis1" tab="Oasis1"> Wonderwall </n-tab-pane>
							<n-tab-pane name="the beatles1" tab="the Beatles1"> Hey Jude </n-tab-pane>
							<n-tab-pane name="jay chou1" tab="Jay Chou1"> Qilixiang </n-tab-pane>
							<n-tab-pane name="oasis2" tab="Oasis2"> Wonderwall </n-tab-pane>
							<n-tab-pane name="the beatles2" tab="the Beatles2"> Hey Jude </n-tab-pane>
							<n-tab-pane name="jay chou2" tab="Jay Chou2"> Qilixiang </n-tab-pane>
							<n-tab-pane name="oasis3" tab="Oasis3"> Wonderwall </n-tab-pane>
							<n-tab-pane name="the beatles3" tab="the Beatles3"> Hey Jude </n-tab-pane>
							<n-tab-pane name="jay chou3" tab="Jay Chou3"> Qilixiang </n-tab-pane>
							<n-tab-pane name="oasis4" tab="Oasis4"> Wonderwall </n-tab-pane>
							<n-tab-pane name="the beatles4" tab="the Beatles4"> Hey Jude </n-tab-pane>
							<n-tab-pane name="jay chou4" tab="Jay Chou4"> Qilixiang </n-tab-pane>
							<n-tab-pane name="oasis5" tab="Oasis5"> Wonderwall </n-tab-pane>
							<n-tab-pane name="the beatles5" tab="the Beatles5"> Hey Jude </n-tab-pane>
							<n-tab-pane name="jay chou5" tab="Jay Chou5"> Qilixiang </n-tab-pane>
						</n-tabs>
					</n-space>
					`))+" "+r(_(`
						import { ref } from "vue"
						import type { TabsProps } from "naive-ui"

						const placement = ref<NonNullable<TabsProps["placement"]>>("top")
						const type = ref<TabsProps["type"]>("line")
						`)),1)]),default:t(()=>[a(n(S),{vertical:""},{default:t(()=>[a(n(C),{value:d.value,"onUpdate:value":e[0]||(e[0]=o=>d.value=o)},{default:t(()=>[a(n(u),{label:"top",value:"top"}),a(n(u),{label:"bottom",value:"bottom"}),a(n(u),{label:"left",value:"left"}),a(n(u),{label:"right",value:"right"})]),_:1},8,["value"]),a(n(C),{value:v.value,"onUpdate:value":e[1]||(e[1]=o=>v.value=o)},{default:t(()=>[a(n(u),{label:"card",value:"card"}),a(n(u),{label:"bar",value:"bar"}),a(n(u),{label:"line",value:"line"})]),_:1},8,["value"]),(x(),J(n(g),{key:v.value+d.value,type:v.value,animated:"",placement:d.value,style:W(d.value==="left"||d.value==="right"?{height:"240px"}:void 0)},{default:t(()=>[a(n(s),{name:"oasis",tab:"Oasis"},{default:t(()=>e[5]||(e[5]=[l(" Wonderwall ")])),_:1,__:[5]}),a(n(s),{name:"the beatles",tab:"the Beatles"},{default:t(()=>e[6]||(e[6]=[l(" Hey Jude ")])),_:1,__:[6]}),a(n(s),{name:"jay chou",tab:"Jay Chou"},{default:t(()=>e[7]||(e[7]=[l(" Qilixiang ")])),_:1,__:[7]}),a(n(s),{name:"oasis1",tab:"Oasis1"},{default:t(()=>e[8]||(e[8]=[l(" Wonderwall ")])),_:1,__:[8]}),a(n(s),{name:"the beatles1",tab:"the Beatles1"},{default:t(()=>e[9]||(e[9]=[l(" Hey Jude ")])),_:1,__:[9]}),a(n(s),{name:"jay chou1",tab:"Jay Chou1"},{default:t(()=>e[10]||(e[10]=[l(" Qilixiang ")])),_:1,__:[10]}),a(n(s),{name:"oasis2",tab:"Oasis2"},{default:t(()=>e[11]||(e[11]=[l(" Wonderwall ")])),_:1,__:[11]}),a(n(s),{name:"the beatles2",tab:"the Beatles2"},{default:t(()=>e[12]||(e[12]=[l(" Hey Jude ")])),_:1,__:[12]}),a(n(s),{name:"jay chou2",tab:"Jay Chou2"},{default:t(()=>e[13]||(e[13]=[l(" Qilixiang ")])),_:1,__:[13]}),a(n(s),{name:"oasis3",tab:"Oasis3"},{default:t(()=>e[14]||(e[14]=[l(" Wonderwall ")])),_:1,__:[14]}),a(n(s),{name:"the beatles3",tab:"the Beatles3"},{default:t(()=>e[15]||(e[15]=[l(" Hey Jude ")])),_:1,__:[15]}),a(n(s),{name:"jay chou3",tab:"Jay Chou3"},{default:t(()=>e[16]||(e[16]=[l(" Qilixiang ")])),_:1,__:[16]}),a(n(s),{name:"oasis4",tab:"Oasis4"},{default:t(()=>e[17]||(e[17]=[l(" Wonderwall ")])),_:1,__:[17]}),a(n(s),{name:"the beatles4",tab:"the Beatles4"},{default:t(()=>e[18]||(e[18]=[l(" Hey Jude ")])),_:1,__:[18]}),a(n(s),{name:"jay chou4",tab:"Jay Chou4"},{default:t(()=>e[19]||(e[19]=[l(" Qilixiang ")])),_:1,__:[19]}),a(n(s),{name:"oasis5",tab:"Oasis5"},{default:t(()=>e[20]||(e[20]=[l(" Wonderwall ")])),_:1,__:[20]}),a(n(s),{name:"the beatles5",tab:"the Beatles5"},{default:t(()=>e[21]||(e[21]=[l(" Hey Jude ")])),_:1,__:[21]}),a(n(s),{name:"jay chou5",tab:"Jay Chou5"},{default:t(()=>e[22]||(e[22]=[l(" Qilixiang ")])),_:1,__:[22]})]),_:1},8,["type","placement","style"]))]),_:1})]),_:1}),a(i,{title:"Segment"},{code:t(({html:o})=>[l(r(o(`
					<n-tabs type="segment" animated>
						<n-tab-pane name="oasis" tab="Oasis"> Wonderwall </n-tab-pane>
						<n-tab-pane name="the beatles" tab="the Beatles"> Hey Jude </n-tab-pane>
						<n-tab-pane name="jay chou" tab="Jay Chou"> Qilixiang </n-tab-pane>
					</n-tabs>
					`)),1)]),default:t(()=>[a(n(g),{type:"segment",animated:""},{default:t(()=>[a(n(s),{name:"oasis",tab:"Oasis"},{default:t(()=>e[23]||(e[23]=[l(" Wonderwall ")])),_:1,__:[23]}),a(n(s),{name:"the beatles",tab:"the Beatles"},{default:t(()=>e[24]||(e[24]=[l(" Hey Jude ")])),_:1,__:[24]}),a(n(s),{name:"jay chou",tab:"Jay Chou"},{default:t(()=>e[25]||(e[25]=[l(" Qilixiang ")])),_:1,__:[25]})]),_:1})]),_:1}),a(i,{title:"Addable"},{description:t(()=>[e[27]||(e[27]=l(" Add some tabs. Only work with ")),a(n(I),{code:""},{default:t(()=>e[26]||(e[26]=[l("'card'")])),_:1,__:[26]}),e[28]||(e[28]=l(" type. "))]),code:t(({html:o,js:_})=>[l(r(o(`
					<n-tabs
						v-model:value="value"
						type="card"
						:addable="addable"
						:closable="closable"
						tab-style="min-width: 80px;"
						@close="handleClose"
						@add="handleAdd"
					>
						<n-tab-pane v-for="panel in panels" :key="panel" :name="panel"> {{ panel }} </n-tab-pane>
						<template #prefix> Prefix </template>
						<template #suffix> Suffix </template>
					</n-tabs>
					`))+" "+r(_(`
						const valueRef = ref(1)
						const panelsRef = ref([1, 2, 3, 4, 5])
						const addableRef = computed(() => {
							return {
								disabled: panelsRef.value.length >= 10
							}
						})
						const closableRef = computed(() => {
							return panelsRef.value.length > 1
						})

						function handleAdd() {
							const newValue = Math.max(...panelsRef.value) + 1
							panelsRef.value.push(newValue)
							valueRef.value = newValue
						}
						function handleClose(name: number) {
							const { value: panels } = panelsRef
							const nameIndex = panels.findIndex(panelName => panelName === name)
							if (!~nameIndex) return
							panels.splice(nameIndex, 1)
							if (name === valueRef.value) {
								valueRef.value = panels[Math.min(nameIndex, panels.length - 1)]
							}
						}
						`)),1)]),default:t(()=>[a(n(g),{value:m.value,"onUpdate:value":e[2]||(e[2]=o=>m.value=o),type:"card",addable:B.value,closable:R.value,"tab-style":"min-width: 80px;",onClose:O,onAdd:N},{prefix:t(()=>e[29]||(e[29]=[l(" Prefix ")])),suffix:t(()=>e[30]||(e[30]=[l(" Suffix ")])),default:t(()=>[(x(!0),w(k,null,T(b.value,o=>(x(),J(n(s),{key:o,name:o},{default:t(()=>[l(r(o),1)]),_:2},1032,["name"]))),128))]),_:1},8,["value","addable","closable"])]),_:1})])])}}});export{ae as default};
