import{_ as c}from"./BLzEf9tb.js";import{d as m,o as f,c as h,a as o,e as a,_ as y,b as v,w as t,u as s,t as u,s as p}from"./BboPWEKj.js";import{N as M}from"./CV6rs4kW.js";import{N as d}from"./DnnAk1_e.js";import"./BmSAZQUJ.js";import"./BoIEE7Tp.js";import"./Bk_rJcZu.js";import"./DxB_AnUS.js";import"./C6MRmTaG.js";import"./CBN863Oo.js";import"./DqhOMRwD.js";import"./ChA4gcHA.js";import"./DgobSdsA.js";import"./BY5EArDQ.js";import"./BuIxUXC0.js";const _={class:"page"},S={class:"page-header"},W={class:"links"},k={href:"https://www.naiveui.com/en-US/light/components/select",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},N={class:"components-list"},w="tabler:external-link",q=m({__name:"Select",setup(x){const n=p(null),g=p(null),i=[{label:"Everybody's Got Something to Hide Except Me and My Monkey",value:"song0",disabled:!0},{label:"Drive My Car",value:"song1"},{label:"Norwegian Wood",value:"song2"},{label:"You Won't See",value:"song3",disabled:!0},{label:"Nowhere Man",value:"song4"},{label:"Think For Yourself",value:"song5"},{label:"The Word",value:"song6"},{label:"Michelle",value:"song7",disabled:!0},{label:"What goes on",value:"song8"},{label:"Girl",value:"song9"},{label:"I'm looking through you",value:"song10"},{label:"In My Life",value:"song11"},{label:"Wait",value:"song12"}];return(E,e)=>{const b=c;return f(),h("div",_,[o("div",S,[e[4]||(e[4]=o("div",{class:"title"},"Select",-1)),o("div",W,[o("a",k,[a(y,{name:w,size:16}),e[3]||(e[3]=v(" docs ",-1))])])]),o("div",N,[a(b,{title:"Basic"},{code:t(({html:l,js:r})=>[v(u(l(`
					<n-space vertical>
						<n-select v-model:value="value" :options />
						<n-select v-model:value="value" disabled :options />
					</n-space>
					`))+" "+u(r(`
						const value = ref(null)
						const options = [
							{
								label: "Everybody's Got Something to Hide Except Me and My Monkey",
								value: "song0",
								disabled: true
							},
							{
								label: "Drive My Car",
								value: "song1"
							},
							{
								label: "Norwegian Wood",
								value: "song2"
							},
							{
								label: "You Won't See",
								value: "song3",
								disabled: true
							},
							{
								label: "Nowhere Man",
								value: "song4"
							},
							{
								label: "Think For Yourself",
								value: "song5"
							},
							{
								label: "The Word",
								value: "song6"
							},
							{
								label: "Michelle",
								value: "song7",
								disabled: true
							},
							{
								label: "What goes on",
								value: "song8"
							},
							{
								label: "Girl",
								value: "song9"
							},
							{
								label: "I'm looking through you",
								value: "song10"
							},
							{
								label: "In My Life",
								value: "song11"
							},
							{
								label: "Wait",
								value: "song12"
							}
						]
						`)),1)]),default:t(()=>[a(s(M),{vertical:""},{default:t(()=>[a(s(d),{value:n.value,"onUpdate:value":e[0]||(e[0]=l=>n.value=l),options:i},null,8,["value"]),a(s(d),{value:n.value,"onUpdate:value":e[1]||(e[1]=l=>n.value=l),disabled:"",options:i},null,8,["value"])]),_:1})]),_:1}),a(b,{title:"Multiple & Create"},{code:t(({html:l,js:r})=>[v(u(l(`
					<n-select v-model:value="multipleSelectValue" filterable multiple tag :options clearable />
					`))+" "+u(r(`
						const multipleSelectValue = ref(null)
						const options = [
							{
								label: "Everybody's Got Something to Hide Except Me and My Monkey",
								value: "song0",
								disabled: true
							},
							{
								label: "Drive My Car",
								value: "song1"
							},
							{
								label: "Norwegian Wood",
								value: "song2"
							},
							{
								label: "You Won't See",
								value: "song3",
								disabled: true
							},
							{
								label: "Nowhere Man",
								value: "song4"
							},
							{
								label: "Think For Yourself",
								value: "song5"
							},
							{
								label: "The Word",
								value: "song6"
							},
							{
								label: "Michelle",
								value: "song7",
								disabled: true
							},
							{
								label: "What goes on",
								value: "song8"
							},
							{
								label: "Girl",
								value: "song9"
							},
							{
								label: "I'm looking through you",
								value: "song10"
							},
							{
								label: "In My Life",
								value: "song11"
							},
							{
								label: "Wait",
								value: "song12"
							}
						]
						`)),1)]),default:t(()=>[a(s(d),{value:g.value,"onUpdate:value":e[2]||(e[2]=l=>g.value=l),filterable:"",multiple:"",tag:"",options:i,clearable:""},null,8,["value"])]),_:1})])])}}});export{q as default};
