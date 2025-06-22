import{_ as m}from"./BuuMzocr.js";import{d as p,af as u,a9 as d,B as g,f as c,i as f,g as y,o as h,w as o,e as b,b as n,t as a}from"./BLt7BUd4.js";import{N as C}from"./B0R9n42Z.js";import"./7rpDJmMB.js";import"./nTUZlSvr.js";import"./D3fekM85.js";import"./D7rMp-LX.js";import"./B-zvwBlI.js";import"./Bk_rJcZu.js";import"./B8ADRnjX.js";import"./CvYn7FTR.js";import"./Cqm5KxDu.js";import"./B3JUq9Jk.js";import"./ClT1h7UD.js";import"./CB4SBHti.js";import"./BqVSWgeV.js";import"./DiFGkX80.js";import"./BMwUx3Op.js";import"./BSBNusuN.js";import"./DrAAV5Kq.js";import"./BKt-a8eD.js";import"./MqbEeWZ9.js";import"./DIYpf7G8.js";import"./4HXsLNGD.js";import"./TucL9Hj4.js";import"./BjyUHhTu.js";import"./C2161hUv.js";function k({play:t}){return[{title:"No",key:"no",width:50},{title:"Title",key:"title",resizable:!0},{title:"Length",key:"length",resizable:!0,minWidth:50,maxWidth:100},{title:"Action",key:"actions",render(e){return d(g,{strong:!0,tertiary:!0,size:"small",onClick:()=>t(e)},{default:()=>"Play"})}}]}const _=[{no:3,title:"Wonderwall",length:"4:18"},{no:4,title:"Don't Look Back in Anger",length:"4:48"},{no:12,title:"Champagne Supernova",length:"7:27"}],w=p({components:{NDataTable:C},setup(){const t=u();return{data:_,columns:k({play(e){t.info(`Play ${e.title}`)}}),pagination:!1}}});function N(t,e,D,B,S,T){const r=f("n-data-table"),i=m;return h(),y(i,{title:"Column draggable"},{description:o(()=>e[0]||(e[0]=[n("Only support leaf nodes")])),code:o(({html:l,js:s})=>[n(a(l(`
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
				`)),1)]),default:o(()=>[b(r,{columns:t.columns,data:t.data,pagination:t.pagination,bordered:!1},null,8,["columns","data","pagination"])]),_:1})}const et=c(w,[["render",N]]);export{et as default};
