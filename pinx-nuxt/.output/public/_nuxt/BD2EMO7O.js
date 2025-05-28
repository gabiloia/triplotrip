import{_ as w}from"./BfzzecIy.js";import{d as y,O as u,r as k,bQ as h,_ as f,k as r,i as R,a as K,w as o,g as s,f as n,t as i}from"./CFnCIwgc.js";import{N as _}from"./CJeSsTVR.js";import{N as b}from"./Cy_M2gH5.js";import"./uLUuACJr.js";import"./Bg-0ZsXF.js";import"./h8M4d1TU.js";import"./DVb5MHx0.js";import"./CnmZ9Fj3.js";import"./Bk_rJcZu.js";import"./BHGtD8m0.js";import"./BN3f6npU.js";import"./blwfaMt5.js";import"./k4m_2-DQ.js";import"./ukkJLpdT.js";import"./D2atxefA.js";import"./DsYjw_ut.js";import"./Dk5V_T8v.js";import"./XRINADUL.js";import"./BjyUHhTu.js";import"./C2161hUv.js";function C(){return[{type:"selection",fixed:"left",disabled(e){return e.name==="Edward King 3"}},{title:"Name",key:"name",fixed:"left"},{title:"Age",key:"age"},{title:"Address",key:"address"}]}const S=Array.from({length:46}).map((e,a)=>({key:a,name:`Edward King ${a}`,age:32,address:`London, Park Lane no. ${a}`})),x=y({components:{NP:b,NDataTable:_,NText:u},setup(){const e=k([]),a=h({page:2,pageSize:5,showSizePicker:!0,pageSizes:[3,5,7],onChange:t=>{a.page=t},onUpdatePageSize:t=>{a.pageSize=t,a.page=1}});return{data:S,columns:C(),checkedRowKeys:e,pagination:a,rowKey:t=>t.address,handleCheck(t){e.value=t}}}});function v(e,a,t,z,N,D){const d=r("n-text"),p=r("n-p"),c=r("n-data-table"),l=w;return K(),R(l,{title:"Selection"},{description:o(()=>[a[1]||(a[1]=n(" Rows can be selectable by making first column's type as ")),s(d,{code:""},{default:o(()=>a[0]||(a[0]=[n("selection")])),_:1})]),code:o(({html:m,js:g})=>[n(i(m(`
			<n-p>
				You have selected {{ checkedRowKeys.length }} row{{ checkedRowKeys.length < 2 ? "" : "s" }}.
			</n-p>

			<n-data-table
				:columns
				:data
				:pagination
				:row-key="rowKey"
				:max-height="200"
				:scroll-x="1800"
				@update:checked-row-keys="handleCheck"
			/>
			`))+" "+i(g(`
				type RowData = {
					key: number
					name: string
					age: string
					address: string
				}

				const createColumns = (): DataTableColumns<RowData> => [
					{
						type: "selection",
						fixed: "left",
						disabled(row: RowData) {
							return row.name === "Edward King 3"
						}
					},
					{
						title: "Name",
						key: "name",
						fixed: "left"
					},
					{
						title: "Age",
						key: "age"
					},
					{
						title: "Address",
						key: "address"
					}
				]

				const data = Array.from({ length: 46 }).map((_, index) => ({
					key: index,
					name: \`Edward King \${index}\`,
					age: 32,
					address: \`London, Park Lane no. \${index}\`
				}))

				export default defineComponent({
					setup() {
						const checkedRowKeysRef = ref<DataTableRowKey[]>([])
						const paginationReactive = reactive({
							page: 2,
							pageSize: 5,
							showSizePicker: true,
							pageSizes: [3, 5, 7],
							onChange: (page: number) => {
								paginationReactive.page = page
							},
							onUpdatePageSize: (pageSize: number) => {
								paginationReactive.pageSize = pageSize
								paginationReactive.page = 1
							}
						})

						return {
							data,
							columns: createColumns(),
							checkedRowKeys: checkedRowKeysRef,
							pagination: paginationReactive,
							rowKey: (row: RowData) => row.address,
							handleCheck(rowKeys: DataTableRowKey[]) {
								checkedRowKeysRef.value = rowKeys
							}
						}
					},
					components: { NP, NDataTable }
				})
				`)),1)]),default:o(()=>[s(p,null,{default:o(()=>[n("You have selected "+i(e.checkedRowKeys.length)+" row"+i(e.checkedRowKeys.length<2?"":"s"),1)]),_:1}),s(c,{columns:e.columns,data:e.data,pagination:e.pagination,"row-key":e.rowKey,"max-height":200,"scroll-x":1800,"onUpdate:checkedRowKeys":e.handleCheck},null,8,["columns","data","pagination","row-key","onUpdate:checkedRowKeys"])]),_:1})}const X=f(x,[["render",v]]);export{X as default};
