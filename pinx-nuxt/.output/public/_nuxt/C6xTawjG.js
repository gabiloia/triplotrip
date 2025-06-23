import{_ as U}from"./vPp7vp59.js";import{d as y,q as i,c as M,o as N,a as c,e as l,b as o,_ as F,w as n,u as a,t as _}from"./BfwEk-Nq.js";import{N as r}from"./BS7aab3v.js";import{N as u}from"./Dy7vW8Ky.js";import{N as O}from"./DDc06pyp.js";import"./CPRgsAKX.js";import"./D-rSACz3.js";import"./Bk_rJcZu.js";import"./D0rHYC0N.js";import"./LD-bUlAq.js";import"./BWlUT-3i.js";import"./D50GrDTw.js";import"./yeVnKLIX.js";import"./BMwUx3Op.js";import"./9_UOUTNc.js";import"./Bab63ECv.js";import"./DR6Y6fA0.js";const A={class:"page"},P={class:"page-header"},V={class:"links"},I={href:"https://www.naiveui.com/en-US/light/components/cascader",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},B={class:"components-list"},E="tabler:external-link",ae=y({__name:"Cascader",setup(H){const f=i(!0),g=i(!0),m=i(!0),h=i(!0),b=i(!1),S=i(null),$=i(!1),C=i(!0),w=i(!0),k=x();function x(v=3,e=1,p=""){const d=[];for(let s=1;s<=12;++s)e===1?d.push({value:`v-${s}`,label:`l-${s}`,disabled:s%5===0,children:x(v,e+1,`${String(s)}`)}):e===v?d.push({value:`v-${p}-${s}`,label:`l-${p}-${s}`,disabled:s%5===0}):d.push({value:`v-${p}-${s}`,label:`l-${p}-${s}`,disabled:s%5===0,children:x(v,e+1,`${p}-${s}`)});return d}function T(v,e){console.log(v,e)}return(v,e)=>{const p=U;return N(),M("div",A,[c("div",P,[e[10]||(e[10]=c("div",{class:"title"},"Cascader",-1)),c("div",V,[c("a",I,[l(F,{name:E,size:16}),e[9]||(e[9]=o(" docs "))])])]),c("div",B,[l(p,{title:"Basic"},{code:n(({html:t,js:d})=>[o(_(t(`
					<n-space vertical>
						<n-space>
							<n-space>
								<n-switch v-model:value="multiple" />
								Multiple
							</n-space>
							<n-space>
								<n-switch v-model:value="checkStrategyIsChild" />
								Child Check Strategy
							</n-space>
							<n-space>
								<n-switch v-model:value="cascade" />
								Cascade
							</n-space>
							<n-space>
								<n-switch v-model:value="showPath" />
								Show Path
							</n-space>
							<n-space>
								<n-switch v-model:value="hoverTrigger" />
								Hover Trigger
							</n-space>
							<n-space>
								<n-switch v-model:value="filterable" />
								Filterable
							</n-space>
							<n-space>
								<n-switch v-model:value="responsiveMaxTagCount" />
								Responsive MaxTagCount
							</n-space>
							<n-space>
								<n-switch v-model:value="clearFilterAfterSelect" />
								clearFilterAfterSelect
							</n-space>
						</n-space>
						<n-cascader
							v-model:value="value"
							:multiple="multiple"
							placeholder="Meaningless values"
							clearable
							:max-tag-count="responsiveMaxTagCount ? 'responsive' : undefined"
							:expand-trigger="hoverTrigger ? 'hover' : 'click'"
							:options
							:cascade="cascade"
							:check-strategy="checkStrategyIsChild ? 'child' : 'all'"
							:show-path="showPath"
							:filterable="filterable"
							:clear-filter-after-select="clearFilterAfterSelect"
							@update:value="handleUpdateValue"
						/>
					</n-space>
					`))+" "+_(d(`
						function getOptions(depth = 3, iterator = 1, prefix = "") {
							const length = 12
							const options: CascaderOption[] = []
							for (let i = 1; i <= length; ++i) {
								if (iterator === 1) {
									options.push({
										value: \`v-\${i}\`,
										label: \`l-\${i}\`,
										disabled: i % 5 === 0,
										children: getOptions(depth, iterator + 1, "" + String(i))
									})
								} else if (iterator === depth) {
									options.push({
										value: \`v-\${prefix}-\${i}\`,
										label: \`l-\${prefix}-\${i}\`,
										disabled: i % 5 === 0
									})
								} else {
									options.push({
										value: \`v-\${prefix}-\${i}\`,
										label: \`l-\${prefix}-\${i}\`,
										disabled: i % 5 === 0,
										children: getOptions(depth, iterator + 1, \`\${prefix}-\${i}\`)
									})
								}
							}
							return options
						}

						const checkStrategyIsChild = ref(true)
						const cascade = ref(true)
						const multiple = ref(true)
						const showPath = ref(true)
						const hoverTrigger = ref(false)
						const value = ref(null)
						const filterable = ref(false)
						const responsiveMaxTagCount = ref(true)
						const clearFilterAfterSelect = ref(true)
						const options = getOptions()
						function handleUpdateValue(value: string[], options: CascaderOption[]) {
							console.log(value, options)
						}
						`)),1)]),default:n(()=>[l(a(r),{vertical:""},{default:n(()=>[l(a(r),null,{default:n(()=>[l(a(r),null,{default:n(()=>[l(a(u),{value:m.value,"onUpdate:value":e[0]||(e[0]=t=>m.value=t)},null,8,["value"]),e[11]||(e[11]=o(" Multiple "))]),_:1,__:[11]}),l(a(r),null,{default:n(()=>[l(a(u),{value:f.value,"onUpdate:value":e[1]||(e[1]=t=>f.value=t)},null,8,["value"]),e[12]||(e[12]=o(" Child Check Strategy "))]),_:1,__:[12]}),l(a(r),null,{default:n(()=>[l(a(u),{value:g.value,"onUpdate:value":e[2]||(e[2]=t=>g.value=t)},null,8,["value"]),e[13]||(e[13]=o(" Cascade "))]),_:1,__:[13]}),l(a(r),null,{default:n(()=>[l(a(u),{value:h.value,"onUpdate:value":e[3]||(e[3]=t=>h.value=t)},null,8,["value"]),e[14]||(e[14]=o(" Show Path "))]),_:1,__:[14]}),l(a(r),null,{default:n(()=>[l(a(u),{value:b.value,"onUpdate:value":e[4]||(e[4]=t=>b.value=t)},null,8,["value"]),e[15]||(e[15]=o(" Hover Trigger "))]),_:1,__:[15]}),l(a(r),null,{default:n(()=>[l(a(u),{value:$.value,"onUpdate:value":e[5]||(e[5]=t=>$.value=t)},null,8,["value"]),e[16]||(e[16]=o(" Filterable "))]),_:1,__:[16]}),l(a(r),null,{default:n(()=>[l(a(u),{value:C.value,"onUpdate:value":e[6]||(e[6]=t=>C.value=t)},null,8,["value"]),e[17]||(e[17]=o(" Responsive MaxTagCount "))]),_:1,__:[17]}),l(a(r),null,{default:n(()=>[l(a(u),{value:w.value,"onUpdate:value":e[7]||(e[7]=t=>w.value=t)},null,8,["value"]),e[18]||(e[18]=o(" clearFilterAfterSelect "))]),_:1,__:[18]})]),_:1}),l(a(O),{value:S.value,"onUpdate:value":[e[8]||(e[8]=t=>S.value=t),T],multiple:m.value,placeholder:"Meaningless values",clearable:"","max-tag-count":C.value?"responsive":void 0,"expand-trigger":b.value?"hover":"click",options:a(k),cascade:g.value,"check-strategy":f.value?"child":"all","show-path":h.value,filterable:$.value,"clear-filter-after-select":w.value},null,8,["value","multiple","max-tag-count","expand-trigger","options","cascade","check-strategy","show-path","filterable","clear-filter-after-select"])]),_:1})]),_:1})])])}}});export{ae as default};
