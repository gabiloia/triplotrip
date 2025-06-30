import{_ as s}from"./BvYks_Wu.js";import{d as p,ah as m,ab as c,B as u,f as g,i as d,g as f,o as y,w as o,e as h,b as _,t as n}from"./D0txxWEs.js";import{N as k}from"./3evy3VWO.js";import"./zjvAu2Mm.js";import"./DbSfpayJ.js";import"./CXxbfayT.js";import"./T3Ti8ynF.js";import"./Swo0ieyx.js";import"./Bk_rJcZu.js";import"./CwNsTckj.js";import"./BHvqB0dj.js";import"./4jv6zhFW.js";import"./BvwMXZOy.js";import"./DnOfCa9s.js";import"./C-BpaNsv.js";import"./JV6T9Wxh.js";import"./BlD5f8oG.js";import"./BMwUx3Op.js";import"./OlxS-OmC.js";import"./DUxQRr6l.js";import"./CMIYHUwV.js";import"./BpNeyZMv.js";import"./CPf-hSIC.js";import"./BxRBaEBr.js";import"./DXMyYcYz.js";import"./BjyUHhTu.js";import"./C2161hUv.js";function C({play:t}){return[{title:"No",key:"no"},{title:"Title",key:"title"},{title:"Length",key:"length"},{title:"Action",key:"actions",render(e){return c(u,{strong:!0,tertiary:!0,size:"small",onClick:()=>t(e)},{default:()=>"Play"})}}]}const b=[{no:3,title:"Wonderwall",length:"4:18"},{no:4,title:"Don't Look Back in Anger",length:"4:48"},{no:12,title:"Champagne Supernova",length:"7:27"}],w=p({components:{NDataTable:k},setup(){const t=m();return{data:b,columns:C({play(e){t.info(`Play ${e.title}`)}}),pagination:!1}}});function B(t,e,N,S,D,T){const a=d("n-data-table"),r=s;return y(),f(r,{title:"Basic"},{code:o(({html:i,js:l})=>[_(n(i(`
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
