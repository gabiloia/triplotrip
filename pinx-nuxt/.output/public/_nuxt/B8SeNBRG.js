import{_ as c}from"./D5u1-tCJ.js";import{d as v,q as g,c as w,o as y,a as n,e as i,b as e,_ as m,w as o,u as a,B as _,t as s,z as l}from"./BF1SYJr_.js";import{N as u,a as b}from"./Di3RZNBd.js";import{N as x}from"./ovGkCtPu.js";import"./BXLbaQXh.js";import"./BV4ia66y.js";import"./D69mjoEJ.js";import"./BsZp5D1J.js";import"./-7Y1yBZB.js";import"./BQ2iTkc1.js";import"./C2161hUv.js";import"./D-9WsAYk.js";import"./5Gr4YjwJ.js";const h={class:"page"},k={class:"page-header"},N={class:"links"},U={href:"https://www.naiveui.com/en-US/light/components/upload",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},z={class:"components-list"},C={style:{"margin-bottom":"12px"}},B="tabler:external-link",F="ion:archive-outline",G=v({__name:"Upload",setup(I){const f=g([{id:"a",name:"我是上传出错的普通文件.png",status:"error"},{id:"b",name:"我是普通文本.doc",status:"finished",type:"text/plain"},{id:"c",name:"我是自带url的图片.png",status:"finished",url:"https://picsum.photos/seed/FsNXmz/460/460"},{id:"d",name:"我是上传进度99%的文本.doc",status:"uploading",percentage:99}]);return(P,t)=>{const r=c;return y(),w("div",h,[n("div",k,[t[1]||(t[1]=n("div",{class:"title"},"Upload",-1)),n("div",N,[n("a",U,[i(m,{name:B,size:16}),t[0]||(t[0]=e(" docs "))])])]),n("div",z,[i(r,{title:"Basic"},{code:o(({html:d})=>[e(s(d(`
					<n-upload
						action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
						:headers="{
							'naive-info': 'hello!'
						}"
						:data="{
							'naive-data': 'cool! naive!'
						}"
					>
						<n-button>Upload File</n-button>
					</n-upload>
					`)),1)]),default:o(()=>[i(a(u),{action:"https://www.mocky.io/v2/5e4bafc63100007100d8b70f",headers:{"naive-info":"hello!"},data:{"naive-data":"cool! naive!"}},{default:o(()=>[i(a(_),null,{default:o(()=>t[2]||(t[2]=[e("Upload File")])),_:1,__:[2]})]),_:1})]),_:1}),i(r,{title:"Drag to upload"},{description:o(()=>[t[5]||(t[5]=e(" You can set ")),i(a(l),{code:""},{default:o(()=>t[3]||(t[3]=[e("directory-dnd")])),_:1,__:[3]}),t[6]||(t[6]=e(" to ")),i(a(l),{code:""},{default:o(()=>t[4]||(t[4]=[e("true")])),_:1,__:[4]}),t[7]||(t[7]=e(" to make directory drag and drop available. "))]),code:o(({html:d,js:p})=>[e(s(d(`
					<n-upload multiple directory-dnd action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f" :max="5">
						<n-upload-dragger>
							<div style="margin-bottom: 12px">
								<n-icon size="48" :depth="3">
									<archive-icon />
								</n-icon>
							</div>
							<n-text style="font-size: 16px">Click or drag a file to this area to upload</n-text>
							<n-p depth="3" style="margin: 8px 0 0 0">
								Strictly prohibit from uploading sensitive information. For example, your bank card PIN
								or your credit card expiry date.
							</n-p>
						</n-upload-dragger>
					</n-upload>
					`))+" "+s(p(`
						import { ArchiveOutline as ArchiveIcon } from '@vicons/ionicons5'
						`)),1)]),default:o(()=>[i(a(u),{multiple:"","directory-dnd":"",action:"https://www.mocky.io/v2/5e4bafc63100007100d8b70f",max:5},{default:o(()=>[i(a(b),null,{default:o(()=>[n("div",C,[i(m,{name:F,size:48,depth:3})]),i(a(l),{style:{"font-size":"16px"}},{default:o(()=>t[8]||(t[8]=[e("Click or drag a file to this area to upload")])),_:1,__:[8]}),i(a(x),{depth:"3",style:{margin:"8px 0 0 0"}},{default:o(()=>t[9]||(t[9]=[e(" Strictly prohibit from uploading sensitive information. For example, your bank card PIN or your credit card expiry date. ")])),_:1,__:[9]})]),_:1})]),_:1})]),_:1}),i(r,{title:"Pictures wall"},{description:o(()=>[t[11]||(t[11]=e(" By default, this will use Naive UI's internal preview component. You can also use ")),i(a(l),{code:""},{default:o(()=>t[10]||(t[10]=[e("on-preview")])),_:1,__:[10]}),t[12]||(t[12]=e(" to customize what to do when previewing a file. "))]),code:o(({html:d,js:p})=>[e(s(d(`
					<n-upload
						action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
						:default-file-list="fileList"
						list-type="image-card"
					>
						Click to Upload
					</n-upload>

					`))+" "+s(p(`
						const fileList = ref<UploadFileInfo[]>([
							{
								id: "a",
								name: "我是上传出错的普通文件.png",
								status: "error"
							},
							{
								id: "b",
								name: "我是普通文本.doc",
								status: "finished",
								type: "text/plain"
							},
							{
								id: "c",
								name: "我是自带url的图片.png",
								status: "finished",
								url: "https://picsum.photos/seed/FsNXmz/460/460"
							},
							{
								id: "d",
								name: "我是上传进度99%的文本.doc",
								status: "uploading",
								percentage: 99
							}
						])

						`)),1)]),default:o(()=>[i(a(u),{action:"https://www.mocky.io/v2/5e4bafc63100007100d8b70f","default-file-list":f.value,"list-type":"image-card"},{default:o(()=>t[13]||(t[13]=[e(" Click to Upload ")])),_:1,__:[13]},8,["default-file-list"])]),_:1})])])}}});export{G as default};
