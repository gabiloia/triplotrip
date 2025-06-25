import{_}from"./DApDG8lU.js";import{d as v,q as h,c as k,o as N,a as l,e as t,b as u,_ as D,w as i,u as o,t as a}from"./B3WipU5-.js";import{N as x}from"./Bb7eHSPs.js";import{N as d}from"./DBuz5LmO.js";import"./BCb3CANw.js";import"./FhkMmAF6.js";import"./Bk_rJcZu.js";import"./BaOnp060.js";import"./suvsWXXo.js";import"./BY6grofP.js";import"./B3QGDZVw.js";import"./CWoEXOdx.js";import"./DAT_1hEH.js";import"./CrACCobh.js";const H={class:"page"},S={class:"page-header"},w={class:"links"},g={href:"https://www.naiveui.com/en-US/light/components/time-picker",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},M={class:"components-list"},B="tabler:external-link",J=v({__name:"TimePicker",setup(C){const m=h(null);function c(n){return n%2===0}function f(n,e){return e===null?!1:Number(e)<12?n<30:!1}function p(n,e,r){return r===null||e===null?!1:Number(r)>20&&Number(e)<30?n<40:!1}return(n,e)=>{const r=_;return N(),k("div",H,[l("div",S,[e[2]||(e[2]=l("div",{class:"title"},"Time Picker",-1)),l("div",w,[l("a",g,[t(D,{name:B,size:16}),e[1]||(e[1]=u(" docs "))])])]),l("div",M,[t(r,{title:"Basic"},{code:i(({html:s})=>[u(a(s(`
					<n-space>
						<n-time-picker default-formatted-value="00:12:13" />
						<n-time-picker use-12-hours :default-value="1183135260000" />
					</n-space>
					`)),1)]),default:i(()=>[t(o(x),null,{default:i(()=>[t(o(d),{"default-formatted-value":"00:12:13"}),t(o(d),{"use-12-hours":"","default-value":118313526e4})]),_:1})]),_:1}),t(r,{title:"Disable time"},{code:i(({html:s,js:b})=>[u(a(s(`
					<n-time-picker
						v-model:value="time0"
						:is-hour-disabled="isHourDisabled"
						:is-minute-disabled="isMinuteDisabled"
						:is-second-disabled="isSecondDisabled"
					/>
					`))+" "+a(b(`
						const time0 = ref(null)
						function isHourDisabled(hour: number) {
							return hour % 2 === 0
						}
						function isMinuteDisabled(minute: number, selectedHour: number | null) {
							if (selectedHour === null) return false
							if (Number(selectedHour) < 12) {
								return minute < 30
							} else {
								return false
							}
						}
						function isSecondDisabled(second: number, selectedMinute: number | null, selectedHour: number | null) {
							if (selectedHour === null || selectedMinute === null) return false
							if (Number(selectedHour) > 20 && Number(selectedMinute) < 30) {
								return second < 40
							} else {
								return false
							}
						}
`)),1)]),default:i(()=>[t(o(d),{value:m.value,"onUpdate:value":e[0]||(e[0]=s=>m.value=s),"is-hour-disabled":c,"is-minute-disabled":f,"is-second-disabled":p},null,8,["value"])]),_:1}),t(r,{title:"Step time"},{code:i(({html:s})=>[u(a(s(`
					<n-time-picker :hours="[8, 18]" :minutes="8" :seconds="[0]" />
					`)),1)]),default:i(()=>[t(o(d),{hours:[8,18],minutes:8,seconds:[0]})]),_:1})])])}}});export{J as default};
