import{_ as w}from"./BLzEf9tb.js";import{f as k,d as f,z as y,ai as N,i as d,o as S,g as x,w as n,e as r,b as t,t as l,ac as m,aj as D,B as C}from"./BboPWEKj.js";import{N as b}from"./DuzCq68b.js";import"./BmSAZQUJ.js";import"./BoIEE7Tp.js";import"./B5ctO347.js";import"./CZYn2eUS.js";import"./BT9BDkx6.js";import"./Bk_rJcZu.js";import"./CgiM6lMv.js";import"./VUHNlTpz.js";import"./CBN863Oo.js";import"./BuIxUXC0.js";import"./jzGJE7Cf.js";import"./DawznoV1.js";import"./DqYVDO9Y.js";import"./DnnAk1_e.js";import"./DxB_AnUS.js";import"./C6MRmTaG.js";import"./DqhOMRwD.js";import"./ChA4gcHA.js";import"./DgobSdsA.js";import"./BY5EArDQ.js";import"./CYlOExxq.js";import"./CGgGx79d.js";import"./BjyUHhTu.js";import"./C2161hUv.js";function B({sendMail:o}){return[{title:"Name",key:"name",rowSpan:(e,a)=>a===0?2:1,colSpan:(e,a)=>a===0?2:1},{title:"Age",key:"age"},{title:"Address",key:"address",colSpan:(e,a)=>a===2?2:1},{title:"Tags",key:"tags",render(e){return e.tags.map(i=>m(D,{style:{marginRight:"6px"},type:"info",bordered:!1},{default:()=>i}))}},{title:"Action",key:"actions",rowSpan:(e,a)=>a===0?2:1,render(e){return m(C,{size:"small",onClick:()=>o(e)},{default:()=>"Send Email"})}}]}function T(){return[{key:0,name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:1,name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["wow"]},{key:2,name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]}]}const _=f({components:{NDataTable:b,NText:y},setup(){const o=N();return{data:T(),columns:B({sendMail(e){o.info(`send mail to ${e.name}`)}}),pagination:{pageSize:10}}}});function I(o,e,a,i,L,M){const s=d("n-text"),p=d("n-data-table"),g=w;return S(),x(g,{title:"Merge Cell"},{description:n(()=>[e[3]||(e[3]=t(" Set colspan and rowspan by setting ",-1)),r(s,{code:""},{default:n(()=>[...e[0]||(e[0]=[t("colSpan",-1)])]),_:1}),e[4]||(e[4]=t(" and ",-1)),r(s,{code:""},{default:n(()=>[...e[1]||(e[1]=[t("rowSpan",-1)])]),_:1}),e[5]||(e[5]=t(" of column object. Set colspan in header by setting ",-1)),r(s,{code:""},{default:n(()=>[...e[2]||(e[2]=[t("titleColSpan",-1)])]),_:1}),e[6]||(e[6]=t(" of column object ",-1))]),code:n(({html:u,js:c})=>[t(l(u(`
			<n-data-table :columns :data :pagination :single-line="false" />
			`))+" "+l(c(`
				const createColumns = ({ sendMail }) => {
					return [
						{
							title: "Name",
							key: "name",
							rowSpan: (rowData, rowIndex) => (rowIndex === 0 ? 2 : 1),
							colSpan: (rowData, rowIndex) => (rowIndex === 0 ? 2 : 1)
						},
						{
							title: "Age",
							key: "age"
						},
						{
							title: "Address",
							key: "address",
							colSpan: (rowData, rowIndex) => (rowIndex === 2 ? 2 : 1)
						},
						{
							title: "Tags",
							key: "tags",
							render(row) {
								const tags = row.tags.map(tagKey => {
									return h(
										NTag,
										{
											style: {
												marginRight: "6px"
											},
											type: "info",
											bordered: false
										},
										{
											default: () => tagKey
										}
									)
								})
								return tags
							}
						},
						{
							title: "Action",
							key: "actions",
							rowSpan: (rowData, rowIndex) => (rowIndex === 0 ? 2 : 1),
							render(row) {
								return h(
									NButton,
									{
										size: "small",
										onClick: () => sendMail(row)
									},
									{ default: () => "Send Email" }
								)
							}
						}
					]
				}

				const createData = () => [
					{
						key: 0,
						name: "John Brown",
						age: 32,
						address: "New York No. 1 Lake Park",
						tags: ["nice", "developer"]
					},
					{
						key: 1,
						name: "Jim Green",
						age: 42,
						address: "London No. 1 Lake Park",
						tags: ["wow"]
					},
					{
						key: 2,
						name: "Joe Black",
						age: 32,
						address: "Sidney No. 1 Lake Park",
						tags: ["cool", "teacher"]
					}
				]

				export default defineComponent({
					setup() {
						const message = useMessage()
						return {
							data: createData(),
							columns: createColumns({
								sendMail(rowData) {
									message.info("send mail to " + rowData.name)
								}
							}),
							pagination: {
								pageSize: 10
							}
						}
					},
					components: { NDataTable, NText }
				})
				`)),1)]),default:n(()=>[r(p,{columns:o.columns,data:o.data,pagination:o.pagination,"single-line":!1},null,8,["columns","data","pagination"])]),_:1})}const ne=k(_,[["render",I]]);export{ne as default};
