import{_ as w}from"./CecrDnS1.js";import{d as y,z as u,q as k,c$ as h,f,i as r,g as R,o as K,w as o,e as s,b as n,t as i}from"./CghEsQSB.js";import{N as _}from"./0YCGETtw.js";import{N as b}from"./DPXmE9SX.js";import"./DBs0U9JY.js";import"./9xxGHCVY.js";import"./mbwTnluE.js";import"./C6aVr1IY.js";import"./Df6PouTN.js";import"./Bk_rJcZu.js";import"./BLbfLfPA.js";import"./Bk9zZY9O.js";import"./Q0tXJf8o.js";import"./veF_NSp8.js";import"./DrRP3fBi.js";import"./0TCeaYoV.js";import"./Civqqbwb.js";import"./DP7HyKJs.js";import"./BMwUx3Op.js";import"./BM6BEBls.js";import"./D18vG-Rc.js";import"./C0u4gweV.js";import"./D5bvd9vl.js";import"./WsVwp_Qa.js";import"./sLCiDvc_.js";import"./DHlWhT40.js";import"./BjyUHhTu.js";import"./C2161hUv.js";function C(){return[{type:"selection",fixed:"left",disabled(e){return e.name==="Edward King 3"}},{title:"Name",key:"name",fixed:"left"},{title:"Age",key:"age"},{title:"Address",key:"address"}]}const S=Array.from({length:46}).map((e,a)=>({key:a,name:`Edward King ${a}`,age:32,address:`London, Park Lane no. ${a}`})),x=y({components:{NP:b,NDataTable:_,NText:u},setup(){const e=k([]),a=h({page:2,pageSize:5,showSizePicker:!0,pageSizes:[3,5,7],onChange:t=>{a.page=t},onUpdatePageSize:t=>{a.pageSize=t,a.page=1}});return{data:S,columns:C(),checkedRowKeys:e,pagination:a,rowKey:t=>t.address,handleCheck(t){e.value=t}}}});function v(e,a,t,z,N,D){const p=r("n-text"),d=r("n-p"),c=r("n-data-table"),m=w;return K(),R(m,{title:"Selection"},{description:o(()=>[a[1]||(a[1]=n(" Rows can be selectable by making first column's type as ")),s(p,{code:""},{default:o(()=>a[0]||(a[0]=[n("selection")])),_:1,__:[0]})]),code:o(({html:l,js:g})=>[n(i(l(`
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
				`)),1)]),default:o(()=>[s(d,null,{default:o(()=>[n("You have selected "+i(e.checkedRowKeys.length)+" row"+i(e.checkedRowKeys.length<2?"":"s"),1)]),_:1}),s(c,{columns:e.columns,data:e.data,pagination:e.pagination,"row-key":e.rowKey,"max-height":200,"scroll-x":1800,"onUpdate:checkedRowKeys":e.handleCheck},null,8,["columns","data","pagination","row-key","onUpdate:checkedRowKeys"])]),_:1})}const ie=f(x,[["render",v]]);export{ie as default};
