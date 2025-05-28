import{_ as g}from"./BfzzecIy.js";import{d as f,r as h,c as W,a as m,b as u,g as o,f as r,h as M,w as l,u as i,dl as c,B as p,t}from"./CFnCIwgc.js";import"./uLUuACJr.js";import"./Bg-0ZsXF.js";const _={class:"page"},y={class:"page-header"},w={class:"links"},N={href:"https://www.naiveui.com/en-US/light/components/popselect",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},k={class:"components-list"},I="tabler:external-link",B=f({__name:"Popselect",setup(T){const s=h("Drive My Car"),n=h(null),d=[{label:"Drive My Car",value:"Drive My Car"},{label:"Norwegian Wood",value:"Norwegian Wood"},{label:"You Won't See",value:"You Won't See",disabled:!0},{label:"Nowhere Man",value:"Nowhere Man"},{label:"Think For Yourself",value:"Think For Yourself"},{label:"The Word",value:"The Word"},{label:"Michelle",value:"Michelle",disabled:!0},{label:"What goes on",value:"What goes on"},{label:"Girl",value:"Girl"},{label:"I'm looking through you",value:"I'm looking through you"},{label:"In My Life",value:"In My Life"},{label:"Wait",value:"Wait"}];return(C,e)=>{const b=g;return m(),W("div",_,[u("div",y,[e[3]||(e[3]=u("div",{class:"title"},"Popselect",-1)),u("div",w,[u("a",N,[o(M,{name:I,size:16}),e[2]||(e[2]=r(" docs "))])])]),u("div",k,[o(b,{title:"Basic"},{code:l(({html:a,js:v})=>[r(t(a(`
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
						`)),1)]),default:l(()=>[o(i(c),{value:s.value,"onUpdate:value":e[0]||(e[0]=a=>s.value=a),options:d},{default:l(()=>[o(i(p),null,{default:l(()=>[r(t(s.value||"Popselect"),1)]),_:1})]),_:1},8,["value"])]),_:1}),o(b,{title:"Multiple"},{code:l(({html:a,js:v})=>[r(t(a(`
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
						`)),1)]),default:l(()=>[o(i(c),{value:n.value,"onUpdate:value":e[1]||(e[1]=a=>n.value=a),options:d,multiple:"",scrollable:""},{default:l(()=>[o(i(p),null,{default:l(()=>[r(t(Array.isArray(n.value)&&n.value.length?n.value:"Nothing"),1)]),_:1})]),_:1},8,["value"])]),_:1})])])}}});export{B as default};
