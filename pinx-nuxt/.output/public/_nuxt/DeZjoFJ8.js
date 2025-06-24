import{_ as D}from"./BqhzCvpt.js";import{d as _,q as v,a1 as w,c as k,o as h,a as r,e as a,b as s,_ as x,w as l,u as i,t as n}from"./f757L6Hq.js";import{N as M}from"./LUM2XMWu.js";import{N as m}from"./CHlAhcXa.js";import"./8M1xGM-H.js";import"./CS6L70Cp.js";import"./BMwUx3Op.js";import"./BqNuZ-VH.js";import"./BtqG3pLU.js";import"./CvuMW-C-.js";import"./B9vXJY62.js";import"./CykOC2Rd.js";import"./C-W5Ari3.js";import"./CfjWZ2yJ.js";import"./BDObx-j8.js";import"./BHY1EsHv.js";import"./D3U94IDi.js";import"./BaoXt2_c.js";import"./BQTFAmKS.js";import"./DPVYhXky.js";import"./JlBCrveB.js";const N={class:"page"},Y={class:"page-header"},H={class:"links"},T={href:"https://www.naiveui.com/en-US/light/components/date-picker",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},U={class:"components-list"},q={class:"mb-3"},V="tabler:external-link",B="yyyy/MM/dd - HH:mm",ae=_({__name:"DatePicker",setup(C){const u=v(new Date().getTime()),p=v("date"),y=[{label:"Date",value:"date"},{label:"Date time",value:"datetime"},{label:"Date range",value:"daterange"},{label:"Date time range",value:"datetimerange"},{label:"Month",value:"month"},{label:"Month range",value:"monthrange"},{label:"Year",value:"year"},{label:"Year range",value:"yearrange"},{label:"Quarter",value:"quarter"},{label:"Quarter range",value:"quarterrange"}];function f(b){return new Date(b).getDate()<15}w(p,()=>{u.value=null});const c=v(null),g={"Honey birthday":16312032e5,Yesterday:()=>new Date().getTime()-24*60*60*1e3};return(b,e)=>{const d=D;return h(),k("div",N,[r("div",Y,[e[5]||(e[5]=r("div",{class:"title"},"Date Picker",-1)),r("div",H,[r("a",T,[a(x,{name:V,size:16}),e[4]||(e[4]=s(" docs "))])])]),r("div",U,[a(d,{title:"Basic"},{code:l(({html:t,js:o})=>[s(n(t(`
					<div class="mb-3">
						<label>type:</label>
						<n-select v-model:value="type" :options="typeOptions" />
					</div>
					<n-date-picker v-model:value="timestamp" :type="type" clearable />
					`))+" "+n(o(`
						type Value = number | [number, number] | null

						const timestamp = ref<Value>(new Date().getTime())
						const type = ref<DatePickerType>("date")
						const typeOptions = [
							{
								label: "Date",
								value: "date"
							},
							{
								label: "Date time",
								value: "datetime"
							},
							{
								label: "Date range",
								value: "daterange"
							},
							{
								label: "Date time range",
								value: "datetimerange"
							},
							{
								label: "Month",
								value: "month"
							},
							{
								label: "Month range",
								value: "monthrange"
							},
							{
								label: "Year",
								value: "year"
							},
							{
								label: "Year range",
								value: "yearrange"
							},
							{
								label: "Quarter",
								value: "quarter"
							},
							{
								label: "Quarter range",
								value: "quarterrange"
							}
						]

						watch(type, () => {
							timestamp.value = null
						})
						`)),1)]),default:l(()=>[r("div",q,[e[6]||(e[6]=r("label",null,"type:",-1)),a(i(M),{value:p.value,"onUpdate:value":e[0]||(e[0]=t=>p.value=t),options:y},null,8,["value"])]),a(i(m),{value:u.value,"onUpdate:value":e[1]||(e[1]=t=>u.value=t),type:p.value,clearable:""},null,8,["value","type"])]),_:1}),a(d,{title:"Disabled specific time"},{code:l(({html:t,js:o})=>[s(n(t(`
					<div>
						<n-date-picker type="date" :default-value="Date.now()" :is-date-disabled="dateDisabled" />
					</div>
					`))+" "+n(o(`
						function dateDisabled(ts: number) {
							const date = new Date(ts).getDate()
							return date < 15
						}
						`)),1)]),default:l(()=>[a(i(m),{type:"date","default-value":Date.now(),"is-date-disabled":f},null,8,["default-value"])]),_:1}),a(d,{title:"Shortcuts"},{description:l(()=>e[7]||(e[7]=[s("You can customize some shorcut buttons.")])),code:l(({html:t,js:o})=>[s(n(t(`
					<div>
						<n-date-picker v-model:value="ts1" type="date" :shortcuts="shortcuts" />
					</div>
					`))+" "+n(o(`
						const ts1 = ref(null)
						const shortcuts = {
							"Honey birthday": 1631203200000,
							Yesterday: () => new Date().getTime() - 24 * 60 * 60 * 1000
						}
						`)),1)]),default:l(()=>[a(i(m),{value:c.value,"onUpdate:value":e[2]||(e[2]=t=>c.value=t),type:"date",shortcuts:g},null,8,["value"])]),_:1}),a(d,{title:"Format"},{code:l(({html:t,js:o})=>[s(n(t(`
					<div>
						<n-date-picker v-model:value="timestamp" type="datetime" clearable :format="format" />
					</div>
					`))+" "+n(o(`
						const format = "yyyy/MM/dd - HH:mm"
						`)),1)]),default:l(()=>[a(i(m),{value:u.value,"onUpdate:value":e[3]||(e[3]=t=>u.value=t),type:"datetime",clearable:"",format:B},null,8,["value"])]),_:1}),a(d,{title:"Use panel only"},{code:l(({html:t})=>[s(n(t(`
					<div>
						<n-date-picker panel type="date" />
					</div>
					`)),1)]),default:l(()=>[a(i(m),{panel:"",type:"date",class:"mx-auto!"})]),_:1})])])}}});export{ae as default};
