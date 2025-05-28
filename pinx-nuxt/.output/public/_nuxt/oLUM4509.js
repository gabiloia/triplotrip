import{_ as f}from"./0RhdNeLw.js";import{d as I,q as v,c as w,o as _,a as r,e,b as s,_ as g,w as o,u as a,a4 as b,L as l,t as c,f as B}from"./CKyhG2UO.js";import{N as k,a as D}from"./CSKCP8vb.js";import{N as y}from"./Dh2Me1dS.js";import{N as S}from"./BcBJlPXn.js";import"./BMJuwibk.js";import"./BLIjkjma.js";import"./Bk_rJcZu.js";const W={class:"page"},P={class:"page-header"},N={class:"links"},O={href:"https://www.naiveui.com/en-US/light/components/menu",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},C={class:"components-list"},x="tabler:external-link",d="ion:book-outline",m="ion:person-outline",M="ion:wine-outline",T=I({__name:"Menu",setup(z){const u=[{label:"Hear the Wind Sing",key:"hear-the-wind-sing",icon:l(d)},{label:"Pinball 1973",key:"pinball-1973",icon:l(d),disabled:!0,children:[{label:"Rat",key:"rat"}]},{label:"A Wild Sheep Chase",key:"a-wild-sheep-chase",disabled:!0,icon:l(d)},{label:"Dance Dance Dance",key:"Dance Dance Dance",icon:l(d),children:[{type:"group",label:"People",key:"people",children:[{label:"Narrator",key:"narrator",icon:l(m)},{label:"Sheep Man",key:"sheep-man",icon:l(m)}]},{label:"Beverage",key:"beverage",icon:l(M),children:[{label:"Whisky",key:"whisky"}]},{label:"Food",key:"food",children:[{label:"Sandwich",key:"sandwich"}]},{label:"The past increases. The future recedes.",key:"the-past-increases-the-future-recedes"}]}],t=v(!1);return(H,n)=>{const h=f;return _(),w("div",W,[r("div",P,[n[2]||(n[2]=r("div",{class:"title"},"Menu",-1)),r("div",N,[r("a",O,[e(g,{name:x,size:16}),n[1]||(n[1]=s(" docs "))])])]),r("div",C,[e(h,{title:"Basic"},{code:o(({html:i,js:p})=>[s(c(i(`
					<n-space vertical>
						<n-layout has-sider>
							<n-layout-sider
								bordered
								collapse-mode="width"
								:collapsed-width="64"
								:width="240"
								show-trigger
								:inverted="inverted"
							>
								<n-menu
									:dropdown-props="{ scrollable: true }"
									:inverted="inverted"
									:collapsed-width="64"
									:collapsed-icon-size="22"
									:options="menuOptions"
								/>
							</n-layout-sider>
							<n-layout>
								<span>Content</span>
								<n-space>
									<n-switch v-model:value="inverted" />
									inverted
								</n-space>
							</n-layout>
						</n-layout>
					</n-space>
					`))+" "+c(p(`
						import { BookOutline as BookIcon, PersonOutline as Perso  WineOutline as WineIcon } from "@vicons/ionicons5"

						function renderIcon(icon: Component) {
							return () => h(  null, { default: () => h(icon) })
						}

						const menuOptions: MenuOption[] = [
							{
								label: "Hear the Wind Sing",
								key: "hear-the-wind-sing",
								icon: renderIcon(BookIcon)
							},
							{
								label: "Pinball 1973",
								key: "pinball-1973",
								icon: renderIcon(BookIcon),
								disabled: true,
								children: [
									{
										label: "Rat",
										key: "rat"
									}
								]
							},
							{
								label: "A Wild Sheep Chase",
								key: "a-wild-sheep-chase",
								disabled: true,
								icon: renderIcon(BookIcon)
							},
							{
								label: "Dance Dance Dance",
								key: "Dance Dance Dance",
								icon: renderIcon(BookIcon),
								children: [
									{
										type: "group",
										label: "People",
										key: "people",
										children: [
											{
												label: "Narrator",
												key: "narrator",
												icon: renderIcon(PersonIcon)
											},
											{
												label: "Sheep Man",
												key: "sheep-man",
												icon: renderIcon(PersonIcon)
											}
										]
									},
									{
										label: "Beverage",
										key: "beverage",
										icon: renderIcon(WineIcon),
										children: [
											{
												label: "Whisky",
												key: "whisky"
											}
										]
									},
									{
										label: "Food",
										key: "food",
										children: [
											{
												label: "Sandwich",
												key: "sandwich"
											}
										]
									},
									{
										label: "The past increases. The future recedes.",
										key: "the-past-increases-the-future-recedes"
									}
								]
							}
						]

						const inverted = ref(false)
						`)),1)]),default:o(()=>[e(a(y),{vertical:""},{default:o(()=>[e(a(k),{"has-sider":""},{default:o(()=>[e(a(D),{bordered:"","collapse-mode":"width","collapsed-width":64,width:240,"show-trigger":"",inverted:t.value},{default:o(()=>[e(a(b),{"dropdown-props":{scrollable:!0},inverted:t.value,"collapsed-width":64,"collapsed-icon-size":22,options:u},null,8,["inverted"])]),_:1},8,["inverted"]),e(a(k),null,{default:o(()=>[n[4]||(n[4]=r("span",null,"Content",-1)),e(a(y),null,{default:o(()=>[e(a(S),{value:t.value,"onUpdate:value":n[0]||(n[0]=i=>t.value=i)},null,8,["value"]),n[3]||(n[3]=s(" inverted "))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(h,{title:"Horizontal"},{code:o(({html:i,js:p})=>[s(c(i(`
					<n-menu mode="horizontal" :options="menuOptions" :dropdown-props="{ scrollable: true }" />
					`))+" "+c(p(`
						import { BookOutline as BookIcon, PersonOutline as Perso  WineOutline as WineIcon } from "@vicons/ionicons5"

						function renderIcon(icon: Component) {
							return () => h(  null, { default: () => h(icon) })
						}

						const menuOptions: MenuOption[] = [
							{
								label: "Hear the Wind Sing",
								key: "hear-the-wind-sing",
								icon: renderIcon(BookIcon)
							},
							{
								label: "Pinball 1973",
								key: "pinball-1973",
								icon: renderIcon(BookIcon),
								disabled: true,
								children: [
									{
										label: "Rat",
										key: "rat"
									}
								]
							},
							{
								label: "A Wild Sheep Chase",
								key: "a-wild-sheep-chase",
								disabled: true,
								icon: renderIcon(BookIcon)
							},
							{
								label: "Dance Dance Dance",
								key: "Dance Dance Dance",
								icon: renderIcon(BookIcon),
								children: [
									{
										type: "group",
										label: "People",
										key: "people",
										children: [
											{
												label: "Narrator",
												key: "narrator",
												icon: renderIcon(PersonIcon)
											},
											{
												label: "Sheep Man",
												key: "sheep-man",
												icon: renderIcon(PersonIcon)
											}
										]
									},
									{
										label: "Beverage",
										key: "beverage",
										icon: renderIcon(WineIcon),
										children: [
											{
												label: "Whisky",
												key: "whisky"
											}
										]
									},
									{
										label: "Food",
										key: "food",
										children: [
											{
												label: "Sandwich",
												key: "sandwich"
											}
										]
									},
									{
										label: "The past increases. The future recedes.",
										key: "the-past-increases-the-future-recedes"
									}
								]
							}
						]
						`)),1)]),default:o(()=>[e(a(b),{mode:"horizontal",options:u,"dropdown-props":{scrollable:!0}})]),_:1})])])}}}),$=B(T,[["__scopeId","data-v-b3231d27"]]);export{$ as default};
