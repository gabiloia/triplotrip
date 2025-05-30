import{_ as D}from"./BfzzecIy.js";import{d as _,r as v,E as w,c as h,a as k,b as o,g as a,f as s,h as x,w as l,u as i,t as n}from"./CFnCIwgc.js";import{N as M}from"./DsYjw_ut.js";import{N as m}from"./BLX0Pv3b.js";import"./uLUuACJr.js";import"./Bg-0ZsXF.js";import"./Dk5V_T8v.js";import"./blwfaMt5.js";import"./sBoWBl3M.js";import"./CchUTOnW.js";import"./BvWHmGvu.js";import"./ukkJLpdT.js";import"./D2atxefA.js";import"./Dmc1rBPW.js";import"./XRINADUL.js";const N={class:"page"},Y={class:"page-header"},H={class:"links"},T={href:"https://www.naiveui.com/en-US/light/components/date-picker",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},U={class:"components-list"},V={class:"mb-3"},q="tabler:external-link",B="yyyy/MM/dd - HH:mm",R=_({__name:"DatePicker",setup(C){const u=v(new Date().getTime()),p=v("date"),y=[{label:"Date",value:"date"},{label:"Date time",value:"datetime"},{label:"Date range",value:"daterange"},{label:"Date time range",value:"datetimerange"},{label:"Month",value:"month"},{label:"Month range",value:"monthrange"},{label:"Year",value:"year"},{label:"Year range",value:"yearrange"},{label:"Quarter",value:"quarter"},{label:"Quarter range",value:"quarterrange"}];function f(b){return new Date(b).getDate()<15}w(p,()=>{u.value=null});const c=v(null),g={"Honey birthday":16312032e5,Yesterday:()=>new Date().getTime()-24*60*60*1e3};return(b,e)=>{const d=D;return k(),h("div",N,[o("div",Y,[e[5]||(e[5]=o("div",{class:"title"},"Date Picker",-1)),o("div",H,[o("a",T,[a(x,{name:q,size:16}),e[4]||(e[4]=s(" docs "))])])]),o("div",U,[a(d,{title:"Basic"},{code:l(({html:t,js:r})=>[s(n(t(`
					<div class="mb-3">
						<label>type:</label>
						<n-select v-model:value="type" :options="typeOptions" />
					</div>
					<n-date-picker v-model:value="timestamp" :type="type" clearable />
					`))+" "+n(r(`
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
						`)),1)]),default:l(()=>[o("div",V,[e[6]||(e[6]=o("label",null,"type:",-1)),a(i(M),{value:p.value,"onUpdate:value":e[0]||(e[0]=t=>p.value=t),options:y},null,8,["value"])]),a(i(m),{value:u.value,"onUpdate:value":e[1]||(e[1]=t=>u.value=t),type:p.value,clearable:""},null,8,["value","type"])]),_:1}),a(d,{title:"Disabled specific time"},{code:l(({html:t,js:r})=>[s(n(t(`
					<div>
						<n-date-picker type="date" :default-value="Date.now()" :is-date-disabled="dateDisabled" />
					</div>
					`))+" "+n(r(`
						function dateDisabled(ts: number) {
							const date = new Date(ts).getDate()
							return date < 15
						}
						`)),1)]),default:l(()=>[a(i(m),{type:"date","default-value":Date.now(),"is-date-disabled":f},null,8,["default-value"])]),_:1}),a(d,{title:"Shortcuts"},{description:l(()=>e[7]||(e[7]=[s("You can customize some shorcut buttons.")])),code:l(({html:t,js:r})=>[s(n(t(`
					<div>
						<n-date-picker v-model:value="ts1" type="date" :shortcuts="shortcuts" />
					</div>
					`))+" "+n(r(`
						const ts1 = ref(null)
						const shortcuts = {
							"Honey birthday": 1631203200000,
							Yesterday: () => new Date().getTime() - 24 * 60 * 60 * 1000
						}
						`)),1)]),default:l(()=>[a(i(m),{value:c.value,"onUpdate:value":e[2]||(e[2]=t=>c.value=t),type:"date",shortcuts:g},null,8,["value"])]),_:1}),a(d,{title:"Format"},{code:l(({html:t,js:r})=>[s(n(t(`
					<div>
						<n-date-picker v-model:value="timestamp" type="datetime" clearable :format="format" />
					</div>
					`))+" "+n(r(`
						const format = "yyyy/MM/dd - HH:mm"
						`)),1)]),default:l(()=>[a(i(m),{value:u.value,"onUpdate:value":e[3]||(e[3]=t=>u.value=t),type:"datetime",clearable:"",format:B},null,8,["value"])]),_:1}),a(d,{title:"Use panel only"},{code:l(({html:t})=>[s(n(t(`
					<div>
						<n-date-picker panel type="date" />
					</div>
					`)),1)]),default:l(()=>[a(i(m),{panel:"",type:"date",class:"mx-auto!"})]),_:1})])])}}});export{R as default};
