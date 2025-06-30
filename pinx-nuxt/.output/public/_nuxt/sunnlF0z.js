import{_ as m}from"./D5u1-tCJ.js";import{d as p,ah as u,ab as d,B as g,f as c,i as f,g as h,o as y,w as o,e as b,b as n,t as a}from"./BF1SYJr_.js";import{N as C}from"./B8b53mD6.js";import"./BXLbaQXh.js";import"./BV4ia66y.js";import"./DWEhlUin.js";import"./9RqI8sIg.js";import"./poIEkNy_.js";import"./Bk_rJcZu.js";import"./CMuvddAK.js";import"./Bw81xt-0.js";import"./C3eAAxnx.js";import"./CpAJmn9N.js";import"./C6sXe9eg.js";import"./D45D5JR9.js";import"./D-9WsAYk.js";import"./shFnks3C.js";import"./BMwUx3Op.js";import"./NXSQEbzT.js";import"./AzxlIym7.js";import"./CpPhwJ1c.js";import"./CPNkPosG.js";import"./lxHE6LgP.js";import"./DB0-_t3e.js";import"./NOV2ZtwV.js";import"./BjyUHhTu.js";import"./C2161hUv.js";function k({play:t}){return[{title:"No",key:"no",width:50},{title:"Title",key:"title",resizable:!0},{title:"Length",key:"length",resizable:!0,minWidth:50,maxWidth:100},{title:"Action",key:"actions",render(e){return d(g,{strong:!0,tertiary:!0,size:"small",onClick:()=>t(e)},{default:()=>"Play"})}}]}const _=[{no:3,title:"Wonderwall",length:"4:18"},{no:4,title:"Don't Look Back in Anger",length:"4:48"},{no:12,title:"Champagne Supernova",length:"7:27"}],w=p({components:{NDataTable:C},setup(){const t=u();return{data:_,columns:k({play(e){t.info(`Play ${e.title}`)}}),pagination:!1}}});function N(t,e,D,B,S,T){const r=f("n-data-table"),i=m;return y(),h(i,{title:"Column draggable"},{description:o(()=>e[0]||(e[0]=[n("Only support leaf nodes")])),code:o(({html:l,js:s})=>[n(a(l(`
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
