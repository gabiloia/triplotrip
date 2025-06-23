import{_ as s}from"./CkQPPryU.js";import{d as p,af as m,a9 as c,B as u,f as g,i as d,g as f,o as y,w as o,e as h,b as _,t as n}from"./8g3bmYip.js";import{N as k}from"./DmPmK3Bt.js";import"./CiSJ_ReP.js";import"./pFoo6Snw.js";import"./Cb05W4aT.js";import"./BLxctZBF.js";import"./DrYmPJu4.js";import"./Bk_rJcZu.js";import"./CkJQOTL6.js";import"./C9113nv9.js";import"./DoZ0jqC9.js";import"./x57_pNFw.js";import"./BBdENZkM.js";import"./Ct9BlYQP.js";import"./DwGgo8Cx.js";import"./BvnU1Wed.js";import"./BMwUx3Op.js";import"./COrOQbGk.js";import"./Ur1fK62G.js";import"./C221Cupi.js";import"./B4mxUpMu.js";import"./D8q6-a0u.js";import"./LM6yoH9-.js";import"./CbNbN4iE.js";import"./BjyUHhTu.js";import"./C2161hUv.js";function C({play:t}){return[{title:"No",key:"no"},{title:"Title",key:"title"},{title:"Length",key:"length"},{title:"Action",key:"actions",render(e){return c(u,{strong:!0,tertiary:!0,size:"small",onClick:()=>t(e)},{default:()=>"Play"})}}]}const b=[{no:3,title:"Wonderwall",length:"4:18"},{no:4,title:"Don't Look Back in Anger",length:"4:48"},{no:12,title:"Champagne Supernova",length:"7:27"}],w=p({components:{NDataTable:k},setup(){const t=m();return{data:b,columns:C({play(e){t.info(`Play ${e.title}`)}}),pagination:!1}}});function B(t,e,N,S,D,T){const a=d("n-data-table"),r=s;return y(),f(r,{title:"Basic"},{code:o(({html:i,js:l})=>[_(n(i(`
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
