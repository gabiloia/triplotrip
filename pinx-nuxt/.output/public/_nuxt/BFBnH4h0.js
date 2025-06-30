import{_ as C}from"./BucR0pva.js";import{d as S,q as g,ah as _,c as L,o as O,a as c,e as t,b as o,_ as D,w as n,u as l,L as b,B as k,t as s,z as m,J as E,M as p}from"./Cc935Wq4.js";import{N as H}from"./CUFKXDcS.js";import"./BajPnLyu.js";import"./Cnxb9HjD.js";import"./Bk_rJcZu.js";const T={class:"page"},A={class:"page-header"},M={class:"links"},R={href:"https://www.naiveui.com/en-US/light/components/dropdown",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},N={class:"components-list"},v="tabler:external-link",U="ion:person-circle-outline",P="ion:pencil",G="ion:log-out-outline",J="ion:arrow-redo-outline",W=S({__name:"Dropdown",setup(j){const y=g(0),w=g(0),h=g(!1),I=_(),d=g([{label:"Marina Bay Sands",key:"marina bay sands",disabled:!0,icon:p(U)},{label:"Brown's Hotel, London",key:"brown's hotel, london",icon:p(P)},{label:"Cascade",key:"cascade",icon:p(J),children:[{label:"Jordan Baker",key:"jordan baker"},{label:"Tom Buchanan",key:"tom buchanan",disabled:!0},{label:"Others",key:"others2",children:[{label:"Chicken",key:"chicken"},{label:"Beef",key:"beef"}]}]},{label:"Atlantis Bahamas, Nassau",key:"atlantis nahamas, nassau",icon:p(G)},{label:"The Beverly Hills Hotel, Los Angeles",key:"the beverly hills hotel, los angeles",icon:p(v)}]);function u(i){I.info(String(i))}function B(i){i.preventDefault(),h.value=!1,E().then(()=>{h.value=!0,y.value=i.clientX,w.value=i.clientY})}function x(){I.info("clickoutside"),h.value=!1}return(i,e)=>{const f=C;return O(),L("div",T,[c("div",A,[e[1]||(e[1]=c("div",{class:"title"},"Dropdown",-1)),c("div",M,[c("a",R,[t(D,{name:v,size:16}),e[0]||(e[0]=o(" docs "))])])]),c("div",N,[t(f,{title:"Basic"},{description:n(()=>e[2]||(e[2]=[o("A basic dropdown.")])),code:n(({html:a,js:r})=>[o(s(a(`
					<n-dropdown trigger="hover" :options @select="handleSelect" :scrollable="true">
						<n-button>Go For a Trip</n-button>
					</n-dropdown>
					`))+" "+s(r(`
						import { PersonCircleOutline as UserIcon, Pencil as EditIcon, LogOutOutline as LogoutIcon } from "@vicons/ionicons5"

						const renderIcon = (icon: Component) => {
							return () => {
								return h(  null, {
									default: () => h(icon)
								})
							}
						}

						const message = useMessage()
						const options = ref([
							{
								label: "Marina Bay Sands",
								key: "marina bay sands",
								disabled: true,
								icon: renderIcon(UserIcon)
							},
							{
								label: "Brown's Hotel, London",
								key: "brown's hotel, london",
								icon: renderIcon(EditIcon)
							},
							{
								label: "Atlantis Bahamas, Nassau",
								key: "atlantis nahamas, nassau",
								icon: renderIcon(LogoutIcon)
							},
							{
								label: "The Beverly Hills Hotel, Los Angeles",
								key: "the beverly hills hotel, los angeles",
								icon: renderIcon(ExternalIcon)
							}
						])
						function handleSelect(key: string | number) {
							message.info(String(key))
						}
						`)),1)]),default:n(()=>[t(l(b),{trigger:"hover",options:d.value,scrollable:!0,onSelect:u},{default:n(()=>[t(l(k),null,{default:n(()=>e[3]||(e[3]=[o("Go For a Trip")])),_:1,__:[3]})]),_:1},8,["options"])]),_:1}),t(f,{title:"Trigger"},{description:n(()=>[e[6]||(e[6]=o(" Different ways to ")),t(l(m),{code:""},{default:n(()=>e[4]||(e[4]=[o("trigger")])),_:1,__:[4]}),e[7]||(e[7]=o(" / ")),t(l(m),{code:""},{default:n(()=>e[5]||(e[5]=[o("show")])),_:1,__:[5]}),e[8]||(e[8]=o(" a dropdown. "))]),code:n(({html:a,js:r})=>[o(s(a(`
					<n-space>
						<n-dropdown trigger="hover" :options @select="handleSelect" :scrollable="true">
							<n-button>Hover!</n-button>
						</n-dropdown>
						<n-dropdown trigger="click" :options @select="handleSelect" :scrollable="true">
							<n-button>Click!</n-button>
						</n-dropdown>
					</n-space>
					`))+" "+s(r(`
						import { PersonCircleOutline as UserIcon, Pencil as EditIcon, LogOutOutline as LogoutIcon } from "@vicons/ionicons5"

						const renderIcon = (icon: Component) => {
							return () => {
								return h(  null, {
									default: () => h(icon)
								})
							}
						}

						const showDropdown = ref(false)
						const message = useMessage()
						const options = ref([
							{
								label: "Marina Bay Sands",
								key: "marina bay sands",
								disabled: true,
								icon: renderIcon(UserIcon)
							},
							{
								label: "Brown's Hotel, London",
								key: "brown's hotel, london",
								icon: renderIcon(EditIcon)
							},
							{
								label: "Atlantis Bahamas, Nassau",
								key: "atlantis nahamas, nassau",
								icon: renderIcon(LogoutIcon)
							},
							{
								label: "The Beverly Hills Hotel, Los Angeles",
								key: "the beverly hills hotel, los angeles",
								icon: renderIcon(ExternalIcon)
							}
						])
						function handleSelect(key: string | number) {
							message.info(String(key))
						}
						`)),1)]),default:n(()=>[t(l(H),null,{default:n(()=>[t(l(b),{trigger:"hover",options:d.value,scrollable:!0,onSelect:u},{default:n(()=>[t(l(k),null,{default:n(()=>e[9]||(e[9]=[o("Hover!")])),_:1,__:[9]})]),_:1},8,["options"]),t(l(b),{trigger:"click",options:d.value,scrollable:!0,onSelect:u},{default:n(()=>[t(l(k),null,{default:n(()=>e[10]||(e[10]=[o("Click!")])),_:1,__:[10]})]),_:1},8,["options"])]),_:1})]),_:1}),t(f,{title:"Cascade"},{description:n(()=>e[11]||(e[11]=[o("Dropdown options can be cascaded.")])),code:n(({html:a,js:r})=>[o(s(a(`
					<n-dropdown
						:options
						placement="bottom-start"
						trigger="click"
						@select="handleSelect"
						:scrollable="true"
					>
						<n-button>The Great Gatsby characters</n-button>
					</n-dropdown>
					`))+" "+s(r(`
						import {
							PersonCircleOutline as UserIcon,
							Pencil as EditIcon,
							LogOutOutline as LogoutIcon,
							ArrowRedoOutline
						} from "@vicons/ionicons5"

						const renderIcon = (icon: Component) => {
							return () => {
								return h(  null, {
									default: () => h(icon)
								})
							}
						}

						const showDropdown = ref(false)
						const message = useMessage()
						const options = ref([
							{
								label: "Marina Bay Sands",
								key: "marina bay sands",
								disabled: true,
								icon: renderIcon(UserIcon)
							},
							{
								label: "Brown's Hotel, London",
								key: "brown's hotel, london",
								icon: renderIcon(EditIcon)
							},
							{
								label: "Cascade",
								key: "cascade",
								icon: renderIcon(ArrowRedoOutline),
								children: [
									{
										label: "Jordan Baker",
										key: "jordan baker"
									},
									{
										label: "Tom Buchanan",
										key: "tom buchanan"
									},
									{
										label: "Others",
										key: "others2",
										disabled: true,
										children: [
											{
												label: "Chicken",
												key: "chicken"
											},
											{
												label: "Beef",
												key: "beef"
											}
										]
									}
								]
							},
							{
								label: "Atlantis Bahamas, Nassau",
								key: "atlantis nahamas, nassau",
								icon: renderIcon(LogoutIcon)
							},
							{
								label: "The Beverly Hills Hotel, Los Angeles",
								key: "the beverly hills hotel, los angeles",
								icon: renderIcon(ExternalIcon)
							}
						])
						function handleSelect(key: string | number) {
							message.info(String(key))
						}
						function handleClick() {
							showDropdown.value = !showDropdown.value
						}
						`)),1)]),default:n(()=>[t(l(b),{options:d.value,placement:"bottom-start",trigger:"click",scrollable:!0,onSelect:u},{default:n(()=>[t(l(k),null,{default:n(()=>e[12]||(e[12]=[o("The Great Gatsby characters")])),_:1,__:[12]})]),_:1},8,["options"])]),_:1}),t(f,{title:"Manually positioned"},{description:n(()=>[e[15]||(e[15]=o(" Warning: when manually positioned, the ")),t(l(m),{code:""},{default:n(()=>e[13]||(e[13]=[o("trigger")])),_:1,__:[13]}),e[16]||(e[16]=o(" prop must be set to ")),t(l(m),{code:""},{default:n(()=>e[14]||(e[14]=[o("'manual'")])),_:1,__:[14]}),e[17]||(e[17]=o(" . "))]),code:n(({html:a,js:r})=>[o(s(a(`
					<div
						style="width: 200px; height: 200px; background-color: rgba(0, 128, 0, 0.5)"
						@contextmenu="handleContextMenu"
					>
						Right Click
					</div>
					<n-dropdown
						placement="bottom-start"
						trigger="manual"
						:scrollable="true"
						:x="xRef"
						:y="yRef"
						:options
						:show="showDropdown"
						:on-clickoutside="onClickoutside"
						@select="handleSelect"
					/>
					`))+" "+s(r(`
						import {
							PersonCircleOutline as UserIcon,
							Pencil as EditIcon,
							LogOutOutline as LogoutIcon,
							ArrowRedoOutline
						} from "@vicons/ionicons5"

						const renderIcon = (icon: Component) => {
							return () => {
								return h(  null, {
									default: () => h(icon)
								})
							}
						}

						const xRef = ref(0)
						const yRef = ref(0)
						const showDropdown = ref(false)
						const message = useMessage()
						const options = ref([
							{
								label: "Marina Bay Sands",
								key: "marina bay sands",
								disabled: true,
								icon: renderIcon(UserIcon)
							},
							{
								label: "Brown's Hotel, London",
								key: "brown's hotel, london",
								icon: renderIcon(EditIcon)
							},
							{
								label: "Cascade",
								key: "cascade",
								icon: renderIcon(ArrowRedoOutline),
								children: [
									{
										label: "Jordan Baker",
										key: "jordan baker"
									},
									{
										label: "Tom Buchanan",
										key: "tom buchanan",
										disabled: true
									},
									{
										label: "Others",
										key: "others2",
										children: [
											{
												label: "Chicken",
												key: "chicken"
											},
											{
												label: "Beef",
												key: "beef"
											}
										]
									}
								]
							},
							{
								label: "Atlantis Bahamas, Nassau",
								key: "atlantis nahamas, nassau",
								icon: renderIcon(LogoutIcon)
							},
							{
								label: "The Beverly Hills Hotel, Los Angeles",
								key: "the beverly hills hotel, los angeles",
								icon: renderIcon(ExternalIcon)
							}
						])
						function handleSelect(key: string | number) {
							message.info(String(key))
						}
						function handleContextMenu(e: MouseEvent) {
							e.preventDefault()
							showDropdown.value = false
							nextTick().then(() => {
								showDropdown.value = true
								xRef.value = e.clientX
								yRef.value = e.clientY
							})
						}
						function onClickoutside() {
							message.info("clickoutside")
							showDropdown.value = false
						}
						`)),1)]),default:n(()=>[c("div",{style:{width:"200px",height:"200px","background-color":"rgba(0, 128, 0, 0.5)"},onContextmenu:B}," Right Click ",32),t(l(b),{placement:"bottom-start",trigger:"manual",scrollable:!0,x:y.value,y:w.value,options:d.value,show:h.value,"on-clickoutside":x,onSelect:u},null,8,["x","y","options","show"])]),_:1})])])}}});export{W as default};
