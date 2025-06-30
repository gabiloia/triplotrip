import{_ as v}from"./D5u1-tCJ.js";import{d as c,c as f,o as g,a as i,e,b as a,_ as z,w as t,u as o,C as r,t as n,z as m,dH as h}from"./BF1SYJr_.js";import{N}from"./6dVct52d.js";import"./BXLbaQXh.js";import"./BV4ia66y.js";const F={class:"page"},_={class:"page-header"},X={class:"links"},w={href:"https://www.naiveui.com/en-US/light/components/avatar",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},x={class:"components-list"},A={class:"flex gap-4"},b={class:"flex gap-4"},C="tabler:external-link",H=c({__name:"Avatar",setup(k){const l=[{name:"Leonardo DiCaprio",src:"https://picsum.photos/seed/6UEM8dcF/460/460"},{name:"Jennifer Lawrence",src:"https://picsum.photos/seed/FsNXmz/460/460"},{name:"Audrey Hepburn",src:"https://picsum.photos/seed/6UEM8dcF/460/460"},{name:"Anne Hathaway",src:"https://picsum.photos/seed/FsNXmz/460/460"},{name:"Taylor Swift",src:"https://picsum.photos/seed/6UEM8dcF/460/460"}];return(y,s)=>{const d=v;return g(),f("div",F,[i("div",_,[s[1]||(s[1]=i("div",{class:"title"},"Avatar",-1)),i("div",X,[i("a",w,[e(z,{name:C,size:16}),s[0]||(s[0]=a(" docs "))])])]),i("div",x,[e(d,{title:"Size"},{description:t(()=>[s[5]||(s[5]=a(" Avatar has ")),e(o(m),{code:""},{default:t(()=>s[2]||(s[2]=[a("small")])),_:1,__:[2]}),s[6]||(s[6]=a(" , ")),e(o(m),{code:""},{default:t(()=>s[3]||(s[3]=[a("medium")])),_:1,__:[3]}),s[7]||(s[7]=a(" and ")),e(o(m),{code:""},{default:t(()=>s[4]||(s[4]=[a("large")])),_:1,__:[4]}),s[8]||(s[8]=a(" sizes. You could also use a custom px number for size. "))]),code:t(({html:p})=>[a(n(p(`
					<n-avatar
						:img-props="{ alt: 'avatar' }"
						size="small"
						src="https://picsum.photos/seed/FsNXmz/460/460"
					/>
					<n-avatar
						:img-props="{ alt: 'avatar' }"
						size="medium"
						src="https://picsum.photos/seed/FsNXmz/460/460"
					/>
					<n-avatar
						:img-props="{ alt: 'avatar' }"
						size="large"
						src="https://picsum.photos/seed/FsNXmz/460/460"
					/>
					<n-avatar
						:img-props="{ alt: 'avatar' }"
						:size="48"
						src="https://picsum.photos/seed/FsNXmz/460/460"
					/>
					`)),1)]),default:t(()=>[i("div",A,[e(o(r),{"img-props":{alt:"avatar"},size:"small",src:"https://picsum.photos/seed/FsNXmz/460/460"}),e(o(r),{"img-props":{alt:"avatar"},size:"medium",src:"https://picsum.photos/seed/FsNXmz/460/460"}),e(o(r),{"img-props":{alt:"avatar"},size:"large",src:"https://picsum.photos/seed/FsNXmz/460/460"}),e(o(r),{"img-props":{alt:"avatar"},size:48,src:"https://picsum.photos/seed/FsNXmz/460/460"})])]),_:1}),e(d,{title:"Shape"},{description:t(()=>[s[10]||(s[10]=a(" Avatar can be ")),e(o(m),{code:""},{default:t(()=>s[9]||(s[9]=[a("round")])),_:1,__:[9]})]),code:t(({html:p})=>[a(n(p(`
					<n-avatar :img-props="{ alt: 'avatar' }" src="https://picsum.photos/seed/FsNXmz/460/460" />
					<n-avatar :img-props="{ alt: 'avatar' }" round src="https://picsum.photos/seed/FsNXmz/460/460" />
					`)),1)]),default:t(()=>[i("div",b,[e(o(r),{"img-props":{alt:"avatar"},src:"https://picsum.photos/seed/FsNXmz/460/460"}),e(o(r),{"img-props":{alt:"avatar"},round:"",src:"https://picsum.photos/seed/FsNXmz/460/460"})])]),_:1}),e(d,{title:"Badge"},{description:t(()=>[s[12]||(s[12]=a(" Using it with ")),e(o(m),{code:""},{default:t(()=>s[11]||(s[11]=[a("badge")])),_:1,__:[11]}),s[13]||(s[13]=a(" would be nice (if you like tons of notifications). "))]),code:t(({html:p})=>[a(n(p(`
					<n-badge value="999+">
						<n-avatar :img-props="{ alt: 'avatar' }">App</n-avatar>
					</n-badge>
					`)),1)]),default:t(()=>[e(o(h),{value:"999+"},{default:t(()=>[e(o(r),{"img-props":{alt:"avatar"}},{default:t(()=>s[14]||(s[14]=[a("App")])),_:1,__:[14]})]),_:1})]),_:1}),e(d,{title:"Fallback"},{description:t(()=>s[15]||(s[15]=[a("Show 07akioni if loading fails.")])),code:t(({html:p})=>[a(n(p(`
					<n-avatar
						:img-props="{ alt: 'avatar' }"
						round
						size="small"
						src="empty.png"
						fallback-src="https://picsum.photos/seed/FsNXmz/460/460"
					/>
					`)),1)]),default:t(()=>[e(o(r),{"img-props":{alt:"avatar"},round:"",size:"small",src:"empty.png","fallback-src":"https://picsum.photos/seed/FsNXmz/460/460"})]),_:1}),e(d,{title:"Content size"},{description:t(()=>s[16]||(s[16]=[a("Text is resized to fit the avatar.")])),code:t(({html:p})=>[a(n(p(`
					<n-avatar :img-props="{ alt: 'avatar' }" round>ABC</n-avatar>
					`)),1)]),default:t(()=>[e(o(r),{"img-props":{alt:"avatar"},round:""},{default:t(()=>s[17]||(s[17]=[a("ABC")])),_:1,__:[17]})]),_:1}),e(d,{title:"Avatar Group"},{description:t(()=>s[18]||(s[18]=[a("Crowded people")])),code:t(({html:p,js:u})=>[a(n(p(`
					<n-avatar-group :options :size="40" :max="3" />
					`))+" "+n(u(`
								const options = [
									{
										name: "Leonardo DiCaprio",
										src: "https://picsum.photos/seed/6UEM8dcF/460/460"
									},
									{
										name: "Jennifer Lawrence",
										src: "https://picsum.photos/seed/FsNXmz/460/460"
									},
									{
										name: "Audrey Hepburn",
										src: "https://picsum.photos/seed/6UEM8dcF/460/460"
									},
									{
										name: "Anne Hathaway",
										src: "https://picsum.photos/seed/FsNXmz/460/460"
									},
									{
										name: "Taylor Swift",
										src: "https://picsum.photos/seed/6UEM8dcF/460/460"
									}
								]
							`)),1)]),default:t(()=>[e(o(N),{options:l,size:40,max:3})]),_:1})])])}}});export{H as default};
