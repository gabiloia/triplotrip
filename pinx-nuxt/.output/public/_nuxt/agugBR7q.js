import{_ as y}from"./BLzEf9tb.js";import{d as M,o as N,c as F,a as c,e as l,_ as O,b as o,w as n,u as a,t as k,s as i}from"./BboPWEKj.js";import{N as r}from"./CV6rs4kW.js";import{N as u}from"./BcvnNqmw.js";import{N as A}from"./DW5df16z.js";import"./BmSAZQUJ.js";import"./BoIEE7Tp.js";import"./Bk_rJcZu.js";import"./DgobSdsA.js";import"./B5ctO347.js";import"./BY5EArDQ.js";import"./BuIxUXC0.js";import"./DqhOMRwD.js";import"./DxB_AnUS.js";import"./ChA4gcHA.js";import"./C6MRmTaG.js";import"./CBN863Oo.js";const P={class:"page"},V={class:"page-header"},I={class:"links"},B={href:"https://www.naiveui.com/en-US/light/components/cascader",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},E={class:"components-list"},H="tabler:external-link",ae=M({__name:"Cascader",setup(R){const f=i(!0),g=i(!0),m=i(!0),h=i(!0),b=i(!1),S=i(null),$=i(!1),C=i(!0),w=i(!0),T=x();function x(v=3,e=1,p=""){const d=[];for(let s=1;s<=12;++s)e===1?d.push({value:`v-${s}`,label:`l-${s}`,disabled:s%5===0,children:x(v,e+1,`${String(s)}`)}):e===v?d.push({value:`v-${p}-${s}`,label:`l-${p}-${s}`,disabled:s%5===0}):d.push({value:`v-${p}-${s}`,label:`l-${p}-${s}`,disabled:s%5===0,children:x(v,e+1,`${p}-${s}`)});return d}function U(v,e){console.log(v,e)}return(v,e)=>{const p=y;return N(),F("div",P,[c("div",V,[e[10]||(e[10]=c("div",{class:"title"},"Cascader",-1)),c("div",I,[c("a",B,[l(O,{name:H,size:16}),e[9]||(e[9]=o(" docs ",-1))])])]),c("div",E,[l(p,{title:"Basic"},{code:n(({html:t,js:d})=>[o(k(t(`
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
					`))+" "+k(d(`
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
						`)),1)]),default:n(()=>[l(a(r),{vertical:""},{default:n(()=>[l(a(r),null,{default:n(()=>[l(a(r),null,{default:n(()=>[l(a(u),{value:m.value,"onUpdate:value":e[0]||(e[0]=t=>m.value=t)},null,8,["value"]),e[11]||(e[11]=o(" Multiple ",-1))]),_:1}),l(a(r),null,{default:n(()=>[l(a(u),{value:f.value,"onUpdate:value":e[1]||(e[1]=t=>f.value=t)},null,8,["value"]),e[12]||(e[12]=o(" Child Check Strategy ",-1))]),_:1}),l(a(r),null,{default:n(()=>[l(a(u),{value:g.value,"onUpdate:value":e[2]||(e[2]=t=>g.value=t)},null,8,["value"]),e[13]||(e[13]=o(" Cascade ",-1))]),_:1}),l(a(r),null,{default:n(()=>[l(a(u),{value:h.value,"onUpdate:value":e[3]||(e[3]=t=>h.value=t)},null,8,["value"]),e[14]||(e[14]=o(" Show Path ",-1))]),_:1}),l(a(r),null,{default:n(()=>[l(a(u),{value:b.value,"onUpdate:value":e[4]||(e[4]=t=>b.value=t)},null,8,["value"]),e[15]||(e[15]=o(" Hover Trigger ",-1))]),_:1}),l(a(r),null,{default:n(()=>[l(a(u),{value:$.value,"onUpdate:value":e[5]||(e[5]=t=>$.value=t)},null,8,["value"]),e[16]||(e[16]=o(" Filterable ",-1))]),_:1}),l(a(r),null,{default:n(()=>[l(a(u),{value:C.value,"onUpdate:value":e[6]||(e[6]=t=>C.value=t)},null,8,["value"]),e[17]||(e[17]=o(" Responsive MaxTagCount ",-1))]),_:1}),l(a(r),null,{default:n(()=>[l(a(u),{value:w.value,"onUpdate:value":e[7]||(e[7]=t=>w.value=t)},null,8,["value"]),e[18]||(e[18]=o(" clearFilterAfterSelect ",-1))]),_:1})]),_:1}),l(a(A),{value:S.value,"onUpdate:value":[e[8]||(e[8]=t=>S.value=t),U],multiple:m.value,placeholder:"Meaningless values",clearable:"","max-tag-count":C.value?"responsive":void 0,"expand-trigger":b.value?"hover":"click",options:a(T),cascade:g.value,"check-strategy":f.value?"child":"all","show-path":h.value,filterable:$.value,"clear-filter-after-select":w.value},null,8,["value","multiple","max-tag-count","expand-trigger","options","cascade","check-strategy","show-path","filterable","clear-filter-after-select"])]),_:1})]),_:1})])])}}});export{ae as default};
