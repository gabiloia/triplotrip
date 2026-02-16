import{_ as m}from"./BLzEf9tb.js";import{d as g,o as f,c as W,a as u,e as a,_ as M,b as r,w as l,u as i,B as b,t,s as h}from"./BboPWEKj.js";import{N as c}from"./CGgGx79d.js";import"./BmSAZQUJ.js";import"./BoIEE7Tp.js";import"./DxB_AnUS.js";import"./ChA4gcHA.js";import"./DgobSdsA.js";import"./BY5EArDQ.js";import"./BuIxUXC0.js";import"./DqhOMRwD.js";const _={class:"page"},y={class:"page-header"},N={class:"links"},w={href:"https://www.naiveui.com/en-US/light/components/popselect",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},k={class:"components-list"},I="tabler:external-link",U=g({__name:"Popselect",setup(T){const s=h("Drive My Car"),n=h(null),d=[{label:"Drive My Car",value:"Drive My Car"},{label:"Norwegian Wood",value:"Norwegian Wood"},{label:"You Won't See",value:"You Won't See",disabled:!0},{label:"Nowhere Man",value:"Nowhere Man"},{label:"Think For Yourself",value:"Think For Yourself"},{label:"The Word",value:"The Word"},{label:"Michelle",value:"Michelle",disabled:!0},{label:"What goes on",value:"What goes on"},{label:"Girl",value:"Girl"},{label:"I'm looking through you",value:"I'm looking through you"},{label:"In My Life",value:"In My Life"},{label:"Wait",value:"Wait"}];return(C,e)=>{const p=m;return f(),W("div",_,[u("div",y,[e[3]||(e[3]=u("div",{class:"title"},"Popselect",-1)),u("div",N,[u("a",w,[a(M,{name:I,size:16}),e[2]||(e[2]=r(" docs ",-1))])])]),u("div",k,[a(p,{title:"Basic"},{code:l(({html:o,js:v})=>[r(t(o(`
					<n-popselect v-model:value="value" :options>
						<n-button>{{ value || "Popselect" }}</n-button>
					</n-popselect>
					`))+" "+t(v(`
						const value = ref("Drive My Car")
						const options = [
							{
								label: "Drive My Car",
								value: "Drive My Car"
							},
							{
								label: "Norwegian Wood",
								value: "Norwegian Wood"
							},
							{
								label: "You Won't See",
								value: "You Won't See",
								disabled: true
							},
							{
								label: "Nowhere Man",
								value: "Nowhere Man"
							},
							{
								label: "Think For Yourself",
								value: "Think For Yourself"
							},
							{
								label: "The Word",
								value: "The Word"
							},
							{
								label: "Michelle",
								value: "Michelle",
								disabled: true
							},
							{
								label: "What goes on",
								value: "What goes on"
							},
							{
								label: "Girl",
								value: "Girl"
							},
							{
								label: "I'm looking through you",
								value: "I'm looking through you"
							},
							{
								label: "In My Life",
								value: "In My Life"
							},
							{
								label: "Wait",
								value: "Wait"
							}
						]
						`)),1)]),default:l(()=>[a(i(c),{value:s.value,"onUpdate:value":e[0]||(e[0]=o=>s.value=o),options:d},{default:l(()=>[a(i(b),null,{default:l(()=>[r(t(s.value||"Popselect"),1)]),_:1})]),_:1},8,["value"])]),_:1}),a(p,{title:"Multiple"},{code:l(({html:o,js:v})=>[r(t(o(`
					<n-popselect v-model:value="value1" :options multiple scrollable>
						<n-button>{{ Array.isArray(value1) && value1.length ? value1 : "Nothing" }}</n-button>
					</n-popselect>
					`))+" "+t(v(`
							const value1 = ref<string[] | null>(null)
							const options = [
								{
									label: "Drive My Car",
									value: "Drive My Car"
								},
								{
									label: "Norwegian Wood",
									value: "Norwegian Wood"
								},
								{
									label: "You Won't See",
									value: "You Won't See",
									disabled: true
								},
								{
									label: "Nowhere Man",
									value: "Nowhere Man"
								},
								{
									label: "Think For Yourself",
									value: "Think For Yourself"
								},
								{
									label: "The Word",
									value: "The Word"
								},
								{
									label: "Michelle",
									value: "Michelle",
									disabled: true
								},
								{
									label: "What goes on",
									value: "What goes on"
								},
								{
									label: "Girl",
									value: "Girl"
								},
								{
									label: "I'm looking through you",
									value: "I'm looking through you"
								},
								{
									label: "In My Life",
									value: "In My Life"
								},
								{
									label: "Wait",
									value: "Wait"
								}
							]
						`)),1)]),default:l(()=>[a(i(c),{value:n.value,"onUpdate:value":e[1]||(e[1]=o=>n.value=o),options:d,multiple:"",scrollable:""},{default:l(()=>[a(i(b),null,{default:l(()=>[r(t(Array.isArray(n.value)&&n.value.length?n.value:"Nothing"),1)]),_:1})]),_:1},8,["value"])]),_:1})])])}}});export{U as default};
