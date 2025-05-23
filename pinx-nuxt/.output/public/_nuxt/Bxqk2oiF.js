import{_ as m}from"./0RhdNeLw.js";import{d as p,ad as u,a7 as d,B as g,f as c,i as f,g as y,o as h,w as o,e as b,b as n,t as a}from"./CKyhG2UO.js";import{N as C}from"./BCpJyAL9.js";import"./BMJuwibk.js";import"./BLIjkjma.js";import"./B9eh-Yu0.js";import"./C9sCQoqx.js";import"./DVVoy6ju.js";import"./Bk_rJcZu.js";import"./hs-oYkFo.js";import"./DFuvownO.js";import"./F4ZwHvzw.js";import"./9w3FIepI.js";import"./ec6Iqfcs.js";import"./W-bRjs--.js";import"./C-0JdC7n.js";import"./DTn_UIPU.js";import"./DM6t9WNN.js";import"./BjyUHhTu.js";import"./C2161hUv.js";function k({play:t}){return[{title:"No",key:"no",width:50},{title:"Title",key:"title",resizable:!0},{title:"Length",key:"length",resizable:!0,minWidth:50,maxWidth:100},{title:"Action",key:"actions",render(e){return d(g,{strong:!0,tertiary:!0,size:"small",onClick:()=>t(e)},{default:()=>"Play"})}}]}const _=[{no:3,title:"Wonderwall",length:"4:18"},{no:4,title:"Don't Look Back in Anger",length:"4:48"},{no:12,title:"Champagne Supernova",length:"7:27"}],w=p({components:{NDataTable:C},setup(){const t=u();return{data:_,columns:k({play(e){t.info(`Play ${e.title}`)}}),pagination:!1}}});function N(t,e,D,B,S,T){const r=f("n-data-table"),i=m;return h(),y(i,{title:"Column draggable"},{description:o(()=>e[0]||(e[0]=[n("Only support leaf nodews")])),code:o(({html:l,js:s})=>[n(a(l(`
			<n-data-table :columns :data :pagination :bordered="false" />
			`))+" "+a(s(`
				import { h, defineComponent } from "vue"
				import { NButton, useMessage, NDataTable } from "naive-ui"
				import type { DataTableColumns } from "naive-ui"

				type Song = {
					no: number
					title: string
					length: string
				}

				const createColumns = ({ play }: { play: (row: Song) => void }): DataTableColumns<Song> => {
					return [
						{
							title: "No",
							key: "no",
							width: 50
						},
						{
							title: "Title",
							key: "title",
							resizable: true
						},
						{
							title: "Length",
							key: "length",
							resizable: true,
							minWidth: 50,
							maxWidth: 100
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
				`)),1)]),default:o(()=>[b(r,{columns:t.columns,data:t.data,pagination:t.pagination,bordered:!1},null,8,["columns","data","pagination"])]),_:1})}const Q=c(w,[["render",N]]);export{Q as default};
