import{_ as w}from"./CecrDnS1.js";import{d as y,af as b,x as v,c as I,o as _,a as l,e,b as o,_ as C,w as n,u as a,B as i,t as f,a9 as m,C as N}from"./CghEsQSB.js";import{N as W}from"./B-kWjqJT.js";import"./DBs0U9JY.js";import"./9xxGHCVY.js";import"./Bk_rJcZu.js";const A={class:"page"},x={class:"page-header"},B={class:"links"},S={href:"https://www.naiveui.com/en-US/light/components/notification",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},R={class:"components-list"},z="tabler:external-link",L=y({__name:"Notification",setup(E){const u=b(),d=v();function h(){d.create({title:"Wouldn't it be Nice",description:"From the Beach Boys",content:`Wouldn't it be nice if we were older
Then we wouldn't have to wait so long
And wouldn't it be nice to live together
In the kind of world where we belong
You know its gonna make it that much better
When we can say goodnight and stay together
Wouldn't it be nice if we could wake up
In the morning when the day is new
And after having spent the day together
Hold each other close the whole night through`,meta:"2019-5-27 15:11",avatar:()=>m(N,{size:"small",round:!0,src:"https://picsum.photos/seed/FsNXmz/460/460"}),onAfterLeave:()=>{u.success("Wouldn't it be Nice")}})}function g(){let s=!1;const t=d.create({title:"Satisfaction",content:`I cant get no satisfaction
I cant get no satisfaction
Cause I try and I try and I try and I try
I cant get no, I cant get no`,meta:"2019-5-27 15:11",action:()=>m(i,{text:!0,type:"primary",onClick:()=>{s=!0,t.destroy()}},{default:()=>"Mark as Read"}),onClose:()=>{if(!s)return u.warning("Please mark as read"),!1}})}function c(s){d[s]({content:"What to say?",meta:"I don't know",duration:2500,keepAliveOnHover:!0})}return(s,t)=>{const p=w;return _(),I("div",A,[l("div",x,[t[5]||(t[5]=l("div",{class:"title"},"Notification",-1)),l("div",B,[l("a",S,[e(C,{name:z,size:16}),t[4]||(t[4]=o(" docs "))])])]),l("div",R,[e(p,{title:"Basic",class:"max-w-2xl"},{code:n(({html:r,js:k})=>[o(f(r(`
					<n-space>
						<n-button @click="handleClick1">Wouldn't it be Nice</n-button>
						<n-button @click="handleClick2">Satisfaction</n-button>
						<n-button @click="notify('info')">Info</n-button>
						<n-button @click="notify('success')">Success</n-button>
						<n-button @click="notify('warning')">Warning</n-button>
						<n-button @click="notify('error')">Error</n-button>
					</n-space>
					`))+" "+f(k(`
						const message = useMessage()
						const notification = useNotification()

						function handleClick1() {
							notification.create({
								title: "Wouldn't it be Nice",
								description: "From the Beach Boys",
								content: \`Wouldn't it be nice if we were older
						Then we wouldn't have to wait so long
						And wouldn't it be nice to live together
						In the kind of world where we belong
						You know its gonna make it that much better
						When we can say goodnight and stay together
						Wouldn't it be nice if we could wake up
						In the morning when the day is new
						And after having spent the day together
						Hold each other close the whole night through\`,
								meta: "2019-5-27 15:11",
								avatar: () =>
									h(NAvatar, {
										size: "small",
										round: true,
										src: "https://picsum.photos/seed/FsNXmz/460/460"
									}),
								onAfterLeave: () => {
									message.success("Wouldn't it be Nice")
								}
							})
						}
						function handleClick2() {
							let markAsRead = false
							const n = notification.create({
								title: "Satisfaction",
								content: \`I cant get no satisfaction
						I cant get no satisfaction
						Cause I try and I try and I try and I try
						I cant get no, I cant get no\`,
								meta: "2019-5-27 15:11",
								action: () =>
									h(
										NButton,
										{
											text: true,
											type: "primary",
											onClick: () => {
												markAsRead = true
												n.destroy()
											}
										},
										{
											default: () => "Mark as Read"
										}
									),
								onClose: () => {
									if (!markAsRead) {
										message.warning("Please mark as read")
										return false
									}
								}
							})
						}
						function notify(type: NotificationType) {
							notification[type]({
								content: "What to say?",
								meta: "I don't know",
								duration: 2500,
								keepAliveOnHover: true
							})
						}

						`)),1)]),default:n(()=>[e(a(W),null,{default:n(()=>[e(a(i),{onClick:h},{default:n(()=>t[6]||(t[6]=[o("Wouldn't it be Nice")])),_:1,__:[6]}),e(a(i),{onClick:g},{default:n(()=>t[7]||(t[7]=[o("Satisfaction")])),_:1,__:[7]}),e(a(i),{onClick:t[0]||(t[0]=r=>c("info"))},{default:n(()=>t[8]||(t[8]=[o("Info")])),_:1,__:[8]}),e(a(i),{onClick:t[1]||(t[1]=r=>c("success"))},{default:n(()=>t[9]||(t[9]=[o("Success")])),_:1,__:[9]}),e(a(i),{onClick:t[2]||(t[2]=r=>c("warning"))},{default:n(()=>t[10]||(t[10]=[o("Warning")])),_:1,__:[10]}),e(a(i),{onClick:t[3]||(t[3]=r=>c("error"))},{default:n(()=>t[11]||(t[11]=[o("Error")])),_:1,__:[11]})]),_:1})]),_:1})])])}}});export{L as default};
