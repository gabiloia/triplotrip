import{_ as s}from"./BucR0pva.js";import{d as p,ah as m,ab as c,B as u,f as g,i as d,g as f,o as y,w as o,e as h,b as _,t as n}from"./Cc935Wq4.js";import{N as k}from"./PGHrf513.js";import"./BajPnLyu.js";import"./Cnxb9HjD.js";import"./Dzqx-Ywl.js";import"./C8DCinfO.js";import"./DfSheECC.js";import"./Bk_rJcZu.js";import"./Bti5YBNv.js";import"./Mvao7LEF.js";import"./n7hhwT1A.js";import"./UhrGLELP.js";import"./vQtLSMRe.js";import"./78yQ6ZAJ.js";import"./B0PnIP4q.js";import"./C7dGQyxh.js";import"./BMwUx3Op.js";import"./DDbVYoB4.js";import"./D-bUch-t.js";import"./rwdfFiZR.js";import"./BizIvb2-.js";import"./J4gAubs9.js";import"./DHRfxyc_.js";import"./DpxkZLe9.js";import"./BjyUHhTu.js";import"./C2161hUv.js";function C({play:t}){return[{title:"No",key:"no"},{title:"Title",key:"title"},{title:"Length",key:"length"},{title:"Action",key:"actions",render(e){return c(u,{strong:!0,tertiary:!0,size:"small",onClick:()=>t(e)},{default:()=>"Play"})}}]}const b=[{no:3,title:"Wonderwall",length:"4:18"},{no:4,title:"Don't Look Back in Anger",length:"4:48"},{no:12,title:"Champagne Supernova",length:"7:27"}],w=p({components:{NDataTable:k},setup(){const t=m();return{data:b,columns:C({play(e){t.info(`Play ${e.title}`)}}),pagination:!1}}});function B(t,e,N,S,D,T){const a=d("n-data-table"),r=s;return y(),f(r,{title:"Basic"},{code:o(({html:i,js:l})=>[_(n(i(`
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
