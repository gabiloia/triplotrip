import{_}from"./BfzzecIy.js";import{d as x,r as u,c as O,a as K,b as i,g as l,f as s,h as N,w as n,u as o,t as c}from"./CFnCIwgc.js";import{N as p}from"./CQYt3DPv.js";import{N as C}from"./CTeCxYcV.js";import{N as g}from"./ukkJLpdT.js";import{N as S}from"./C6bIxnTV.js";import"./uLUuACJr.js";import"./Bg-0ZsXF.js";import"./h8M4d1TU.js";import"./Bk_rJcZu.js";import"./blwfaMt5.js";import"./D2atxefA.js";const D={class:"page"},E={class:"page-header"},I={class:"links"},L={href:"https://www.naiveui.com/en-US/light/components/tree",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},A={class:"components-list"},B="tabler:external-link",R=x({__name:"Tree",setup(U){function y(t=4,e=""){if(t)return[6-t,void 0].map((d,a)=>{const r=`${e}${t}${a}`;return{label:v(t),key:r,children:y(t-1,r)}})}function v(t){return t===4?"Out of Tao, One is born":t===3?"Out of One, Two":t===2?"Out of Two, Three":t===1?"Out of Three, the created universe":""}const h=y(),b=u(["40","4030","403020"]),m=u(["40302010"]);function w(t,e,d){console.log("updateCheckedKeys",t,e,d)}const T=[{label:"0",key:"0",children:[{label:"0-0",key:"0-0",children:[{label:"0-0-0",key:"0-0-0"},{label:"0-0-1",key:"0-0-1"}]},{label:"0-1",key:"0-1",children:[{label:"0-1-0",key:"0-1-0"},{label:"0-1-1",key:"0-1-1"}]}]},{label:"1",key:"1",children:[{label:"1-0",key:"1-0",children:[{label:"1-0-0",key:"1-0-0"},{label:"1-0-1",key:"1-0-1"}]},{label:"1-1",key:"1-1",children:[{label:"1-1-0",key:"1-1-0"},{label:"1-1-1",key:"1-1-1"}]}]}],f=u(""),k=u(!1);return(t,e)=>{const d=_;return K(),O("div",D,[i("div",E,[e[3]||(e[3]=i("div",{class:"title"},"Tree",-1)),i("div",I,[i("a",L,[l(N,{name:B,size:16}),e[2]||(e[2]=s(" docs "))])])]),i("div",A,[l(d,{title:"Basic"},{code:n(({html:a,js:r})=>[s(c(a(`
					<n-tree block-line :data :default-expanded-keys="defaultExpandedKeys" selectable />
					`))+" "+c(r(`
						function createData(level = 4, baseKey = ""): TreeOption[] | undefined {
							if (!level) return undefined
							return new Array(6 - level, undefined).map((_, index) => {
								const key = "" + baseKey + level + index
								return {
									label: createLabel(level),
									key,
									children: createData(level - 1, key)
								}
							})
						}

						function createLabel(level: number): string {
							if (level === 4) return "Out of Tao, One is born"
							if (level === 3) return "Out of One, Two"
							if (level === 2) return "Out of Two, Three"
							if (level === 1) return "Out of Three, the created universe"
							return ""
						}

						const data = createData()
						const defaultExpandedKeys = ref(["40", "41"])
						`)),1)]),default:n(()=>[l(o(p),{"block-line":"",data:o(h),"default-expanded-keys":b.value,selectable:""},null,8,["data","default-expanded-keys"])]),_:1}),l(d,{title:"Checking"},{code:n(({html:a,js:r})=>[s(c(a(`
					<n-tree
						block-line
						cascade
						checkable
						:data
						:default-expanded-keys="defaultExpandedKeys"
						:default-checked-keys="defaultCheckedKeys"
						@update:checked-keys="updateCheckedKeys"
					/>
					`))+" "+c(r(`
						function createData(level = 4, baseKey = ""): TreeOption[] | undefined {
							if (!level) return undefined
							return new Array(6 - level, undefined).map((_, index) => {
								const key = "" + baseKey + level + index
								return {
									label: createLabel(level),
									key,
									children: createData(level - 1, key)
								}
							})
						}

						function createLabel(level: number): string {
							if (level === 4) return "Out of Tao, One is born"
							if (level === 3) return "Out of One, Two"
							if (level === 2) return "Out of Two, Three"
							if (level === 1) return "Out of Three, the created universe"
							return ""
						}

						const data = createData()

						const defaultExpandedKeys = ref(["40", "4030", "403020"])
						const defaultCheckedKeys = ref(["40302010"])
						const updateCheckedKeys = (
							keys: Array<string | number>,
							options: Array<TreeOption | null>,
							meta: {
								node: TreeOption | null
								action: "check" | "uncheck"
							}
						) => {
							console.log("updateCheckedKeys", keys, options, meta)
						}
						`)),1)]),default:n(()=>[l(o(p),{"block-line":"",cascade:"",checkable:"",data:o(h),"default-expanded-keys":b.value,"default-checked-keys":m.value,"onUpdate:checkedKeys":w},null,8,["data","default-expanded-keys","default-checked-keys"])]),_:1}),l(d,{title:"Search"},{code:n(({html:a,js:r})=>[s(c(a(`
					<n-space vertical :size="12">
						<n-input v-model:value="pattern" placeholder="Search" clearable />
						<n-switch v-model:value="showIrrelevantNodes">
							<template #checked>Show irrelevant nodes</template>
							<template #unchecked>Hide irrelevant nodes</template>
						</n-switch>
						<n-tree
							:show-irrelevant-nodes="showIrrelevantNodes"
							:pattern="pattern"
							:data="data1"
							block-line
						/>
					</n-space>
					`))+" "+c(r(`
						const data1: TreeOption[] = [
							{
								label: "0",
								key: "0",
								children: [
									{
										label: "0-0",
										key: "0-0",
										children: [
											{ label: "0-0-0", key: "0-0-0" },
											{ label: "0-0-1", key: "0-0-1" }
										]
									},
									{
										label: "0-1",
										key: "0-1",
										children: [
											{ label: "0-1-0", key: "0-1-0" },
											{ label: "0-1-1", key: "0-1-1" }
										]
									}
								]
							},
							{
								label: "1",
								key: "1",
								children: [
									{
										label: "1-0",
										key: "1-0",
										children: [
											{ label: "1-0-0", key: "1-0-0" },
											{ label: "1-0-1", key: "1-0-1" }
										]
									},
									{
										label: "1-1",
										key: "1-1",
										children: [
											{ label: "1-1-0", key: "1-1-0" },
											{ label: "1-1-1", key: "1-1-1" }
										]
									}
								]
							}
						]
						const pattern = ref("")
						const showIrrelevantNodes = ref(false)
						`)),1)]),default:n(()=>[l(o(C),{vertical:"",size:12},{default:n(()=>[l(o(g),{value:f.value,"onUpdate:value":e[0]||(e[0]=a=>f.value=a),placeholder:"Search",clearable:""},null,8,["value"]),l(o(S),{value:k.value,"onUpdate:value":e[1]||(e[1]=a=>k.value=a)},{checked:n(()=>e[4]||(e[4]=[s("Show irrelevant nodes")])),unchecked:n(()=>e[5]||(e[5]=[s("Hide irrelevant nodes")])),_:1},8,["value"]),l(o(p),{"show-irrelevant-nodes":k.value,pattern:f.value,data:T,"block-line":""},null,8,["show-irrelevant-nodes","pattern"])]),_:1})]),_:1})])])}}});export{R as default};
