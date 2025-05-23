import{_ as c}from"./0RhdNeLw.js";import{f as g,d as b,O as N,B as h,q as d,i as s,g as S,o as y,w as n,e as o,b as a,t as m}from"./CKyhG2UO.js";import{N as C}from"./BCpJyAL9.js";import{N as L}from"./Dh2Me1dS.js";import"./BMJuwibk.js";import"./BLIjkjma.js";import"./B9eh-Yu0.js";import"./C9sCQoqx.js";import"./DVVoy6ju.js";import"./Bk_rJcZu.js";import"./hs-oYkFo.js";import"./DFuvownO.js";import"./F4ZwHvzw.js";import"./9w3FIepI.js";import"./ec6Iqfcs.js";import"./W-bRjs--.js";import"./C-0JdC7n.js";import"./DTn_UIPU.js";import"./DM6t9WNN.js";import"./BjyUHhTu.js";import"./C2161hUv.js";const v=[{title:"Name",key:"name"},{title:"Age",key:"age",sorter:(t,e)=>t.age-e.age},{title:"Chinese Score",key:"chinese",defaultSortOrder:!1,sorter:{compare:(t,e)=>t.chinese-e.chinese,multiple:3}},{title:"Math Score",defaultSortOrder:!1,key:"math",sorter:{compare:(t,e)=>t.math-e.math,multiple:2}},{title:"English Score",defaultSortOrder:!1,key:"english",sorter:{compare:(t,e)=>t.english-e.english,multiple:1}},{title:"Address",key:"address",filterOptions:[{label:"London",value:"London"},{label:"New York",value:"New York"}],filter(t,e){return~e.address.indexOf(t)}}],w=[{key:0,name:"John Brown",age:32,address:"New York No. 1 Lake Park",chinese:98,math:60,english:70},{key:1,name:"Jim Green",age:42,address:"London No. 1 Lake Park",chinese:98,math:66,english:89},{key:2,name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",chinese:98,math:66,english:89},{key:3,name:"Jim Red",age:32,address:"London No. 2 Lake Park",chinese:88,math:99,english:89}],T=b({components:{NSpace:L,NButton:h,NDataTable:C,NText:N},setup(){const t=d(null);return{data:w,columns:v,dataTableInst:t,pagination:d({pageSize:5}),filterAddress(){t.value.filter({address:["London"]})},sortName(){t.value.sort("name","ascend")},clearFilters(){t.value.filter(null)},clearSorter(){t.value.sort(null)}}}});function A(t,e,B,I,O,R){const r=s("n-text"),l=s("n-button"),i=s("n-space"),u=s("n-data-table"),p=c;return y(),S(p,{title:"Multiple column sorting"},{description:n(()=>[e[4]||(e[4]=a(" Set ")),o(r,{code:""},{default:n(()=>e[0]||(e[0]=[a("multiple")])),_:1}),e[5]||(e[5]=a(" and ")),o(r,{code:""},{default:n(()=>e[1]||(e[1]=[a("compare")])),_:1}),e[6]||(e[6]=a(" on ")),o(r,{code:""},{default:n(()=>e[2]||(e[2]=[a("sorter")])),_:1}),e[7]||(e[7]=a(" to enable multiple column sorting. ")),o(r,{code:""},{default:n(()=>e[3]||(e[3]=[a("multiple")])),_:1}),e[8]||(e[8]=a(" is the priority of sorting (larger value means higher priority). "))]),code:n(({html:f,js:k})=>[a(m(f(`
			<n-space vertical :size="12">
				<n-space>
					<n-button @click="sortName">Sort By Name (Ascend)</n-button>
					<n-button @click="filterAddress">Filter Address (London)</n-button>
					<n-button @click="clearFilters">Clear Filters</n-button>
					<n-button @click="clearSorter">Clear Sorter</n-button>
				</n-space>
				<n-data-table ref="dataTableInst" :columns :data :pagination />
			</n-space>
			`))+" "+m(k(`
				const columns = [
					{
						title: "Name",
						key: "name"
					},
					{
						title: "Age",
						key: "age",
						sorter: (row1, row2) => row1.age - row2.age
					},
					{
						title: "Chinese Score",
						key: "chinese",
						defaultSortOrder: false,
						sorter: {
							compare: (a, b) => a.chinese - b.chinese,
							multiple: 3
						}
					},
					{
						title: "Math Score",
						defaultSortOrder: false,
						key: "math",
						sorter: {
							compare: (a, b) => a.math - b.math,
							multiple: 2
						}
					},
					{
						title: "English Score",
						defaultSortOrder: false,
						key: "english",
						sorter: {
							compare: (a, b) => a.english - b.english,
							multiple: 1
						}
					},
					{
						title: "Address",
						key: "address",
						filterOptions: [
							{
								label: "London",
								value: "London"
							},
							{
								label: "New York",
								value: "New York"
							}
						],
						filter(value, row) {
							return ~row.address.indexOf(value)
						}
					}
				]

				const data = [
					{
						key: 0,
						name: "John Brown",
						age: 32,
						address: "New York No. 1 Lake Park",
						chinese: 98,
						math: 60,
						english: 70
					},
					{
						key: 1,
						name: "Jim Green",
						age: 42,
						address: "London No. 1 Lake Park",
						chinese: 98,
						math: 66,
						english: 89
					},
					{
						key: 2,
						name: "Joe Black",
						age: 32,
						address: "Sidney No. 1 Lake Park",
						chinese: 98,
						math: 66,
						english: 89
					},
					{
						key: 3,
						name: "Jim Red",
						age: 32,
						address: "London No. 2 Lake Park",
						chinese: 88,
						math: 99,
						english: 89
					}
				]

				export default defineComponent({
					setup() {
						const dataTableInstRef = ref(null)
						return {
							data,
							columns,
							dataTableInst: dataTableInstRef,
							pagination: ref({ pageSize: 5 }),
							filterAddress() {
								dataTableInstRef.value.filter({
									address: ["London"]
								})
							},
							sortName() {
								dataTableInstRef.value.sort("name", "ascend")
							},
							clearFilters() {
								dataTableInstRef.value.filter(null)
							},
							clearSorter() {
								dataTableInstRef.value.sort(null)
							}
						}
					},
					components: { NSpace, NButton, NDataTable, NText }
				})
				`)),1)]),default:n(()=>[o(i,{vertical:"",size:12},{default:n(()=>[o(i,null,{default:n(()=>[o(l,{onClick:t.sortName},{default:n(()=>e[9]||(e[9]=[a("Sort By Name (Ascend)")])),_:1},8,["onClick"]),o(l,{onClick:t.filterAddress},{default:n(()=>e[10]||(e[10]=[a("Filter Address (London)")])),_:1},8,["onClick"]),o(l,{onClick:t.clearFilters},{default:n(()=>e[11]||(e[11]=[a("Clear Filters")])),_:1},8,["onClick"]),o(l,{onClick:t.clearSorter},{default:n(()=>e[12]||(e[12]=[a("Clear Sorter")])),_:1},8,["onClick"])]),_:1}),o(u,{ref:"dataTableInst",columns:t.columns,data:t.data,pagination:t.pagination},null,8,["columns","data","pagination"])]),_:1})]),_:1})}const Z=g(T,[["render",A]]);export{Z as default};
