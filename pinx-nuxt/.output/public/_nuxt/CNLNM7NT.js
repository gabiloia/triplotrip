import{_ as m}from"./CkQPPryU.js";import{d as p,af as u,a9 as d,B as g,f as c,i as f,g as y,o as h,w as o,e as b,b as n,t as a}from"./8g3bmYip.js";import{N as C}from"./DmPmK3Bt.js";import"./CiSJ_ReP.js";import"./pFoo6Snw.js";import"./Cb05W4aT.js";import"./BLxctZBF.js";import"./DrYmPJu4.js";import"./Bk_rJcZu.js";import"./CkJQOTL6.js";import"./C9113nv9.js";import"./DoZ0jqC9.js";import"./x57_pNFw.js";import"./BBdENZkM.js";import"./Ct9BlYQP.js";import"./DwGgo8Cx.js";import"./BvnU1Wed.js";import"./BMwUx3Op.js";import"./COrOQbGk.js";import"./Ur1fK62G.js";import"./C221Cupi.js";import"./B4mxUpMu.js";import"./D8q6-a0u.js";import"./LM6yoH9-.js";import"./CbNbN4iE.js";import"./BjyUHhTu.js";import"./C2161hUv.js";function k({play:t}){return[{title:"No",key:"no",width:50},{title:"Title",key:"title",resizable:!0},{title:"Length",key:"length",resizable:!0,minWidth:50,maxWidth:100},{title:"Action",key:"actions",render(e){return d(g,{strong:!0,tertiary:!0,size:"small",onClick:()=>t(e)},{default:()=>"Play"})}}]}const _=[{no:3,title:"Wonderwall",length:"4:18"},{no:4,title:"Don't Look Back in Anger",length:"4:48"},{no:12,title:"Champagne Supernova",length:"7:27"}],w=p({components:{NDataTable:C},setup(){const t=u();return{data:_,columns:k({play(e){t.info(`Play ${e.title}`)}}),pagination:!1}}});function N(t,e,D,B,S,T){const r=f("n-data-table"),i=m;return h(),y(i,{title:"Column draggable"},{description:o(()=>e[0]||(e[0]=[n("Only support leaf nodes")])),code:o(({html:l,js:s})=>[n(a(l(`
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
