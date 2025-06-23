import{_ as w}from"./vPp7vp59.js";import{f as k,d as f,z as y,af as N,i as d,g as S,o as x,w as n,e as r,b as t,t as l,a9 as m,ag as D,B as _}from"./BfwEk-Nq.js";import{N as C}from"./D3U8wy43.js";import"./CPRgsAKX.js";import"./D-rSACz3.js";import"./LD-bUlAq.js";import"./Bxhbam1_.js";import"./2TxcWYyK.js";import"./Bk_rJcZu.js";import"./DueDXvSG.js";import"./D010afKc.js";import"./DR6Y6fA0.js";import"./D50GrDTw.js";import"./DVmUBXKh.js";import"./BLzCgqgT.js";import"./GbpQ378L.js";import"./BvaWTIZL.js";import"./BMwUx3Op.js";import"./Bab63ECv.js";import"./yeVnKLIX.js";import"./9_UOUTNc.js";import"./D0rHYC0N.js";import"./BWlUT-3i.js";import"./Dqbn8mmn.js";import"./DV6i1jEm.js";import"./BjyUHhTu.js";import"./C2161hUv.js";function b({sendMail:o}){return[{title:"Name",key:"name",rowSpan:(e,a)=>a===0?2:1,colSpan:(e,a)=>a===0?2:1},{title:"Age",key:"age"},{title:"Address",key:"address",colSpan:(e,a)=>a===2?2:1},{title:"Tags",key:"tags",render(e){return e.tags.map(i=>m(D,{style:{marginRight:"6px"},type:"info",bordered:!1},{default:()=>i}))}},{title:"Action",key:"actions",rowSpan:(e,a)=>a===0?2:1,render(e){return m(_,{size:"small",onClick:()=>o(e)},{default:()=>"Send Email"})}}]}function B(){return[{key:0,name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:1,name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["wow"]},{key:2,name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]}]}const T=f({components:{NDataTable:C,NText:y},setup(){const o=N();return{data:B(),columns:b({sendMail(e){o.info(`send mail to ${e.name}`)}}),pagination:{pageSize:10}}}});function I(o,e,a,i,L,M){const s=d("n-text"),p=d("n-data-table"),g=w;return x(),S(g,{title:"Merge Cell"},{description:n(()=>[e[3]||(e[3]=t(" Set colspan and rowspan by setting ")),r(s,{code:""},{default:n(()=>e[0]||(e[0]=[t("colSpan")])),_:1,__:[0]}),e[4]||(e[4]=t(" and ")),r(s,{code:""},{default:n(()=>e[1]||(e[1]=[t("rowSpan")])),_:1,__:[1]}),e[5]||(e[5]=t(" of column object. Set colspan in header by setting ")),r(s,{code:""},{default:n(()=>e[2]||(e[2]=[t("titleColSpan")])),_:1,__:[2]}),e[6]||(e[6]=t(" of column object "))]),code:n(({html:u,js:c})=>[t(l(u(`
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
				`)),1)]),default:n(()=>[r(p,{columns:o.columns,data:o.data,pagination:o.pagination,"single-line":!1},null,8,["columns","data","pagination"])]),_:1})}const ne=k(T,[["render",I]]);export{ne as default};
