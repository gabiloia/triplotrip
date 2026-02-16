import{_ as v}from"./BLzEf9tb.js";import{d as c,o as f,c as g,a as i,e,_ as z,b as a,w as t,u as o,C as r,t as n,z as m,dI as h}from"./BboPWEKj.js";import{N}from"./BUphNmyV.js";import"./BmSAZQUJ.js";import"./BoIEE7Tp.js";const F={class:"page"},X={class:"page-header"},w={class:"links"},x={href:"https://www.naiveui.com/en-US/light/components/avatar",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},A={class:"components-list"},b={class:"flex gap-4"},C={class:"flex gap-4"},k="tabler:external-link",T=c({__name:"Avatar",setup(y){const l=[{name:"Leonardo DiCaprio",src:"https://picsum.photos/seed/6UEM8dcF/460/460"},{name:"Jennifer Lawrence",src:"https://picsum.photos/seed/FsNXmz/460/460"},{name:"Audrey Hepburn",src:"https://picsum.photos/seed/6UEM8dcF/460/460"},{name:"Anne Hathaway",src:"https://picsum.photos/seed/FsNXmz/460/460"},{name:"Taylor Swift",src:"https://picsum.photos/seed/6UEM8dcF/460/460"}];return(E,s)=>{const d=v;return f(),g("div",F,[i("div",X,[s[1]||(s[1]=i("div",{class:"title"},"Avatar",-1)),i("div",w,[i("a",x,[e(z,{name:k,size:16}),s[0]||(s[0]=a(" docs ",-1))])])]),i("div",A,[e(d,{title:"Size"},{description:t(()=>[s[5]||(s[5]=a(" Avatar has ",-1)),e(o(m),{code:""},{default:t(()=>[...s[2]||(s[2]=[a("small",-1)])]),_:1}),s[6]||(s[6]=a(" , ",-1)),e(o(m),{code:""},{default:t(()=>[...s[3]||(s[3]=[a("medium",-1)])]),_:1}),s[7]||(s[7]=a(" and ",-1)),e(o(m),{code:""},{default:t(()=>[...s[4]||(s[4]=[a("large",-1)])]),_:1}),s[8]||(s[8]=a(" sizes. You could also use a custom px number for size. ",-1))]),code:t(({html:p})=>[a(n(p(`
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
					`)),1)]),default:t(()=>[i("div",b,[e(o(r),{"img-props":{alt:"avatar"},size:"small",src:"https://picsum.photos/seed/FsNXmz/460/460"}),e(o(r),{"img-props":{alt:"avatar"},size:"medium",src:"https://picsum.photos/seed/FsNXmz/460/460"}),e(o(r),{"img-props":{alt:"avatar"},size:"large",src:"https://picsum.photos/seed/FsNXmz/460/460"}),e(o(r),{"img-props":{alt:"avatar"},size:48,src:"https://picsum.photos/seed/FsNXmz/460/460"})])]),_:1}),e(d,{title:"Shape"},{description:t(()=>[s[10]||(s[10]=a(" Avatar can be ",-1)),e(o(m),{code:""},{default:t(()=>[...s[9]||(s[9]=[a("round",-1)])]),_:1})]),code:t(({html:p})=>[a(n(p(`
					<n-avatar :img-props="{ alt: 'avatar' }" src="https://picsum.photos/seed/FsNXmz/460/460" />
					<n-avatar :img-props="{ alt: 'avatar' }" round src="https://picsum.photos/seed/FsNXmz/460/460" />
					`)),1)]),default:t(()=>[i("div",C,[e(o(r),{"img-props":{alt:"avatar"},src:"https://picsum.photos/seed/FsNXmz/460/460"}),e(o(r),{"img-props":{alt:"avatar"},round:"",src:"https://picsum.photos/seed/FsNXmz/460/460"})])]),_:1}),e(d,{title:"Badge"},{description:t(()=>[s[12]||(s[12]=a(" Using it with ",-1)),e(o(m),{code:""},{default:t(()=>[...s[11]||(s[11]=[a("badge",-1)])]),_:1}),s[13]||(s[13]=a(" would be nice (if you like tons of notifications). ",-1))]),code:t(({html:p})=>[a(n(p(`
					<n-badge value="999+">
						<n-avatar :img-props="{ alt: 'avatar' }">App</n-avatar>
					</n-badge>
					`)),1)]),default:t(()=>[e(o(h),{value:"999+"},{default:t(()=>[e(o(r),{"img-props":{alt:"avatar"}},{default:t(()=>[...s[14]||(s[14]=[a("App",-1)])]),_:1})]),_:1})]),_:1}),e(d,{title:"Fallback"},{description:t(()=>[...s[15]||(s[15]=[a("Show 07akioni if loading fails.",-1)])]),code:t(({html:p})=>[a(n(p(`
					<n-avatar
						:img-props="{ alt: 'avatar' }"
						round
						size="small"
						src="empty.png"
						fallback-src="https://picsum.photos/seed/FsNXmz/460/460"
					/>
					`)),1)]),default:t(()=>[e(o(r),{"img-props":{alt:"avatar"},round:"",size:"small",src:"empty.png","fallback-src":"https://picsum.photos/seed/FsNXmz/460/460"})]),_:1}),e(d,{title:"Content size"},{description:t(()=>[...s[16]||(s[16]=[a("Text is resized to fit the avatar.",-1)])]),code:t(({html:p})=>[a(n(p(`
					<n-avatar :img-props="{ alt: 'avatar' }" round>ABC</n-avatar>
					`)),1)]),default:t(()=>[e(o(r),{"img-props":{alt:"avatar"},round:""},{default:t(()=>[...s[17]||(s[17]=[a("ABC",-1)])]),_:1})]),_:1}),e(d,{title:"Avatar Group"},{description:t(()=>[...s[18]||(s[18]=[a("Crowded people",-1)])]),code:t(({html:p,js:u})=>[a(n(p(`
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
							`)),1)]),default:t(()=>[e(o(N),{options:l,size:40,max:3})]),_:1})])])}}});export{T as default};
