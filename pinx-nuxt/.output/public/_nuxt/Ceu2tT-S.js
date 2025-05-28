import{_ as w}from"./B3gcOJmJ.js";import{_ as k,d as f,O as y,ad as N,k as d,i as S,a as x,w as n,g as r,f as t,t as l,a7 as m,ae as D,B as C}from"./G6QKWTEq.js";import{N as b}from"./iEaXCnWF.js";import"./B3cGRaQN.js";import"./-7JWf2sr.js";import"./C7tXVBgH.js";import"./UKS7-mSV.js";import"./DHRyr6R7.js";import"./Bk_rJcZu.js";import"./xgbFktwe.js";import"./c4XEpTvr.js";import"./DajhfOah.js";import"./BmtwMLhl.js";import"./GviZQag8.js";import"./BRZug4yH.js";import"./B7Wlydvg.js";import"./JmvYD4Wf.js";import"./BvRjQS4e.js";import"./BjyUHhTu.js";import"./C2161hUv.js";function _({sendMail:o}){return[{title:"Name",key:"name",rowSpan:(e,a)=>a===0?2:1,colSpan:(e,a)=>a===0?2:1},{title:"Age",key:"age"},{title:"Address",key:"address",colSpan:(e,a)=>a===2?2:1},{title:"Tags",key:"tags",render(e){return e.tags.map(i=>m(D,{style:{marginRight:"6px"},type:"info",bordered:!1},{default:()=>i}))}},{title:"Action",key:"actions",rowSpan:(e,a)=>a===0?2:1,render(e){return m(C,{size:"small",onClick:()=>o(e)},{default:()=>"Send Email"})}}]}function B(){return[{key:0,name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:1,name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["wow"]},{key:2,name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]}]}const T=f({components:{NDataTable:b,NText:y},setup(){const o=N();return{data:B(),columns:_({sendMail(e){o.info(`send mail to ${e.name}`)}}),pagination:{pageSize:10}}}});function I(o,e,a,i,L,M){const s=d("n-text"),p=d("n-data-table"),g=w;return x(),S(g,{title:"Merge Cell"},{description:n(()=>[e[3]||(e[3]=t(" Set colspan and rowspan by setting ")),r(s,{code:""},{default:n(()=>e[0]||(e[0]=[t("colSpan")])),_:1}),e[4]||(e[4]=t(" and ")),r(s,{code:""},{default:n(()=>e[1]||(e[1]=[t("rowSpan")])),_:1}),e[5]||(e[5]=t(" of column object. Set colspan in header by setting ")),r(s,{code:""},{default:n(()=>e[2]||(e[2]=[t("titleColSpan")])),_:1}),e[6]||(e[6]=t(" of column object "))]),code:n(({html:u,js:c})=>[t(l(u(`
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
				`)),1)]),default:n(()=>[r(p,{columns:o.columns,data:o.data,pagination:o.pagination,"single-line":!1},null,8,["columns","data","pagination"])]),_:1})}const X=k(T,[["render",I]]);export{X as default};
