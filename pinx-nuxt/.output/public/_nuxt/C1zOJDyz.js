import{_ as s}from"./DApDG8lU.js";import{d as p,ah as m,ab as c,B as u,f as g,i as d,g as f,o as y,w as o,e as h,b as _,t as n}from"./B3WipU5-.js";import{N as k}from"./BAbhuu4N.js";import"./BCb3CANw.js";import"./FhkMmAF6.js";import"./CtaUHcsp.js";import"./Ckf2v9pv.js";import"./CdBDTrxY.js";import"./Bk_rJcZu.js";import"./-6BsrgsT.js";import"./Pvj3Yerf.js";import"./CWoEXOdx.js";import"./VNMdSRhL.js";import"./B35Z3Z-b.js";import"./B3QGDZVw.js";import"./DAT_1hEH.js";import"./KH11n4yK.js";import"./BMwUx3Op.js";import"./Cv26ddP-.js";import"./s1jay7L8.js";import"./DyF1HHQf.js";import"./BY6grofP.js";import"./C5b90ZHr.js";import"./BdTxcRUs.js";import"./C9NvP1ym.js";import"./BjyUHhTu.js";import"./C2161hUv.js";function C({play:t}){return[{title:"No",key:"no"},{title:"Title",key:"title"},{title:"Length",key:"length"},{title:"Action",key:"actions",render(e){return c(u,{strong:!0,tertiary:!0,size:"small",onClick:()=>t(e)},{default:()=>"Play"})}}]}const b=[{no:3,title:"Wonderwall",length:"4:18"},{no:4,title:"Don't Look Back in Anger",length:"4:48"},{no:12,title:"Champagne Supernova",length:"7:27"}],w=p({components:{NDataTable:k},setup(){const t=m();return{data:b,columns:C({play(e){t.info(`Play ${e.title}`)}}),pagination:!1}}});function B(t,e,N,S,D,T){const a=d("n-data-table"),r=s;return y(),f(r,{title:"Basic"},{code:o(({html:i,js:l})=>[_(n(i(`
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
