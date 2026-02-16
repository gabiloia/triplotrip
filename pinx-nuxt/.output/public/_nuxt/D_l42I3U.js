import{_ as m}from"./BLzEf9tb.js";import{d as p,ai as u,ac as d,B as g,f as c,i as f,o as y,g as h,w as o,e as b,b as n,t as a}from"./BboPWEKj.js";import{N as C}from"./DuzCq68b.js";import"./BmSAZQUJ.js";import"./BoIEE7Tp.js";import"./B5ctO347.js";import"./CZYn2eUS.js";import"./BT9BDkx6.js";import"./Bk_rJcZu.js";import"./CgiM6lMv.js";import"./VUHNlTpz.js";import"./CBN863Oo.js";import"./BuIxUXC0.js";import"./jzGJE7Cf.js";import"./DawznoV1.js";import"./DqYVDO9Y.js";import"./DnnAk1_e.js";import"./DxB_AnUS.js";import"./C6MRmTaG.js";import"./DqhOMRwD.js";import"./ChA4gcHA.js";import"./DgobSdsA.js";import"./BY5EArDQ.js";import"./CYlOExxq.js";import"./CGgGx79d.js";import"./BjyUHhTu.js";import"./C2161hUv.js";function k({play:t}){return[{title:"No",key:"no",width:50},{title:"Title",key:"title",resizable:!0},{title:"Length",key:"length",resizable:!0,minWidth:50,maxWidth:100},{title:"Action",key:"actions",render(e){return d(g,{strong:!0,tertiary:!0,size:"small",onClick:()=>t(e)},{default:()=>"Play"})}}]}const _=[{no:3,title:"Wonderwall",length:"4:18"},{no:4,title:"Don't Look Back in Anger",length:"4:48"},{no:12,title:"Champagne Supernova",length:"7:27"}],w=p({components:{NDataTable:C},setup(){const t=u();return{data:_,columns:k({play(e){t.info(`Play ${e.title}`)}}),pagination:!1}}});function N(t,e,D,B,S,T){const i=f("n-data-table"),r=m;return y(),h(r,{title:"Column draggable"},{description:o(()=>[...e[0]||(e[0]=[n("Only support leaf nodes",-1)])]),code:o(({html:l,js:s})=>[n(a(l(`
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
				`)),1)]),default:o(()=>[b(i,{columns:t.columns,data:t.data,pagination:t.pagination,bordered:!1},null,8,["columns","data","pagination"])]),_:1})}const et=c(w,[["render",N]]);export{et as default};
