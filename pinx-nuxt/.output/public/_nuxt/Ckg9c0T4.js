import{_ as c}from"./D8_dUoA9.js";import{f as g,d as b,z as N,B as h,q as d,i as s,g as S,o as y,w as o,e as n,b as a,t as m}from"./BU9QL1D6.js";import{N as _}from"./DCFpS1Vo.js";import{N as C}from"./m_PA2YQz.js";import"./7x_42VVO.js";import"./p-klaAzO.js";import"./B6xT0WiB.js";import"./BgK0dDBA.js";import"./B2LE1CED.js";import"./Bk_rJcZu.js";import"./843y_Blv.js";import"./BBoEHHPP.js";import"./B5OcnyQM.js";import"./S3o5sLJW.js";import"./g4JnNPSW.js";import"./DMhAea-3.js";import"./E5uWthef.js";import"./CMpJIggn.js";import"./BMwUx3Op.js";import"./B_SWOu0Z.js";import"./BS5Zc86t.js";import"./CaWT2Dt2.js";import"./DE7aRutV.js";import"./CI-PxJAh.js";import"./OYoc_3rP.js";import"./CikxO8wv.js";import"./BjyUHhTu.js";import"./C2161hUv.js";const L=[{title:"Name",key:"name"},{title:"Age",key:"age",sorter:(t,e)=>t.age-e.age},{title:"Chinese Score",key:"chinese",defaultSortOrder:!1,sorter:{compare:(t,e)=>t.chinese-e.chinese,multiple:3}},{title:"Math Score",defaultSortOrder:!1,key:"math",sorter:{compare:(t,e)=>t.math-e.math,multiple:2}},{title:"English Score",defaultSortOrder:!1,key:"english",sorter:{compare:(t,e)=>t.english-e.english,multiple:1}},{title:"Address",key:"address",filterOptions:[{label:"London",value:"London"},{label:"New York",value:"New York"}],filter(t,e){return~e.address.indexOf(t)}}],v=[{key:0,name:"John Brown",age:32,address:"New York No. 1 Lake Park",chinese:98,math:60,english:70},{key:1,name:"Jim Green",age:42,address:"London No. 1 Lake Park",chinese:98,math:66,english:89},{key:2,name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",chinese:98,math:66,english:89},{key:3,name:"Jim Red",age:32,address:"London No. 2 Lake Park",chinese:88,math:99,english:89}],w=b({components:{NSpace:C,NButton:h,NDataTable:_,NText:N},setup(){const t=d(null);return{data:v,columns:L,dataTableInst:t,pagination:d({pageSize:5}),filterAddress(){t.value.filter({address:["London"]})},sortName(){t.value.sort("name","ascend")},clearFilters(){t.value.filter(null)},clearSorter(){t.value.sort(null)}}}});function T(t,e,A,B,I,O){const r=s("n-text"),l=s("n-button"),i=s("n-space"),p=s("n-data-table"),u=c;return y(),S(u,{title:"Multiple column sorting"},{description:o(()=>[e[4]||(e[4]=a(" Set ")),n(r,{code:""},{default:o(()=>e[0]||(e[0]=[a("multiple")])),_:1,__:[0]}),e[5]||(e[5]=a(" and ")),n(r,{code:""},{default:o(()=>e[1]||(e[1]=[a("compare")])),_:1,__:[1]}),e[6]||(e[6]=a(" on ")),n(r,{code:""},{default:o(()=>e[2]||(e[2]=[a("sorter")])),_:1,__:[2]}),e[7]||(e[7]=a(" to enable multiple column sorting. ")),n(r,{code:""},{default:o(()=>e[3]||(e[3]=[a("multiple")])),_:1,__:[3]}),e[8]||(e[8]=a(" is the priority of sorting (larger value means higher priority). "))]),code:o(({html:f,js:k})=>[a(m(f(`
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
				`)),1)]),default:o(()=>[n(i,{vertical:"",size:12},{default:o(()=>[n(i,null,{default:o(()=>[n(l,{onClick:t.sortName},{default:o(()=>e[9]||(e[9]=[a("Sort By Name (Ascend)")])),_:1,__:[9]},8,["onClick"]),n(l,{onClick:t.filterAddress},{default:o(()=>e[10]||(e[10]=[a("Filter Address (London)")])),_:1,__:[10]},8,["onClick"]),n(l,{onClick:t.clearFilters},{default:o(()=>e[11]||(e[11]=[a("Clear Filters")])),_:1,__:[11]},8,["onClick"]),n(l,{onClick:t.clearSorter},{default:o(()=>e[12]||(e[12]=[a("Clear Sorter")])),_:1,__:[12]},8,["onClick"])]),_:1}),n(p,{ref:"dataTableInst",columns:t.columns,data:t.data,pagination:t.pagination},null,8,["columns","data","pagination"])]),_:1})]),_:1})}const le=g(w,[["render",T]]);export{le as default};
