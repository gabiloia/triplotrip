import{_ as s}from"./CecrDnS1.js";import{d as p,af as m,a9 as c,B as u,f as g,i as d,g as f,o as y,w as o,e as h,b as _,t as n}from"./CghEsQSB.js";import{N as k}from"./0YCGETtw.js";import"./DBs0U9JY.js";import"./9xxGHCVY.js";import"./mbwTnluE.js";import"./C6aVr1IY.js";import"./Df6PouTN.js";import"./Bk_rJcZu.js";import"./BLbfLfPA.js";import"./Bk9zZY9O.js";import"./Q0tXJf8o.js";import"./veF_NSp8.js";import"./DrRP3fBi.js";import"./0TCeaYoV.js";import"./Civqqbwb.js";import"./DP7HyKJs.js";import"./BMwUx3Op.js";import"./BM6BEBls.js";import"./D18vG-Rc.js";import"./C0u4gweV.js";import"./D5bvd9vl.js";import"./WsVwp_Qa.js";import"./sLCiDvc_.js";import"./DHlWhT40.js";import"./BjyUHhTu.js";import"./C2161hUv.js";function C({play:t}){return[{title:"No",key:"no"},{title:"Title",key:"title"},{title:"Length",key:"length"},{title:"Action",key:"actions",render(e){return c(u,{strong:!0,tertiary:!0,size:"small",onClick:()=>t(e)},{default:()=>"Play"})}}]}const b=[{no:3,title:"Wonderwall",length:"4:18"},{no:4,title:"Don't Look Back in Anger",length:"4:48"},{no:12,title:"Champagne Supernova",length:"7:27"}],w=p({components:{NDataTable:k},setup(){const t=m();return{data:b,columns:C({play(e){t.info(`Play ${e.title}`)}}),pagination:!1}}});function B(t,e,N,S,D,T){const a=d("n-data-table"),r=s;return y(),f(r,{title:"Basic"},{code:o(({html:i,js:l})=>[_(n(i(`
			<n-data-table :columns :data :pagination :bordered="false" />
			`))+" "+n(l(`
				type Song = {
					no: number
					title: string
					length: string
				}

				const createColumns = ({ play }: { play: (row: Song) => void }): DataTableColumns<Song> => {
					return [
						{
							title: "No",
							key: "no"
						},
						{
							title: "Title",
							key: "title"
						},
						{
							title: "Length",
							key: "length"
						},
						{
							title: "Action",
							key: "actions",
							render(row) {
								return h(
									NButton,
									{
										strong: true,
										tertiary: true,
										size: "small",
										onClick: () => play(row)
									},
									{ default: () => "Play" }
								)
							}
						}
					]
				}

				const data: Song[] = [
					{ no: 3, title: "Wonderwall", length: "4:18" },
					{ no: 4, title: "Don't Look Back in Anger", length: "4:48" },
					{ no: 12, title: "Champagne Supernova", length: "7:27" }
				]

				export default defineComponent({
					setup() {
						const message = useMessage()
						return {
							data,
							columns: createColumns({
								play(row: Song) {
									message.info(\`Play \${row.title}\`)
								}
							}),
							pagination: false as const
						}
					},
					components: { NDataTable }
				})
				`)),1)]),default:o(()=>[h(a,{columns:t.columns,data:t.data,pagination:t.pagination,bordered:!1},null,8,["columns","data","pagination"])]),_:1})}const et=g(w,[["render",B]]);export{et as default};
