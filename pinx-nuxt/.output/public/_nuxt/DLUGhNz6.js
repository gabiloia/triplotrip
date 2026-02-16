import{_ as v}from"./BLzEf9tb.js";import{d as g,o as w,c as y,a as s,e,_ as l,b as n,w as t,u as r,ea as p,eb as a,t as d,z as c,L as f}from"./BboPWEKj.js";import"./BmSAZQUJ.js";import"./BoIEE7Tp.js";const C={class:"page"},x={class:"page-header"},B={class:"links"},I={href:"https://www.naiveui.com/en-US/light/components/breadcrumb",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},N={class:"components-list"},D="tabler:external-link",u="ion:cash",S=g({__name:"Breadcrumb",setup(T){const k=[{label:"David Tao",key:1},{label:"黑色柳丁",key:2}],_=[{label:"小镇姑娘",key:1},{label:"普通朋友",key:2}];return(z,o)=>{const b=v;return w(),y("div",C,[s("div",x,[o[1]||(o[1]=s("div",{class:"title"},"Breadcrumb",-1)),s("div",B,[s("a",I,[e(l,{name:D,size:16}),o[0]||(o[0]=n(" docs ",-1))])])]),s("div",N,[e(b,{title:"Basic"},{code:t(({html:i,js:m})=>[n(d(i(`
					<n-breadcrumb>
						<n-breadcrumb-item>
							<n-icon :component="Cash" />
							Home
						</n-breadcrumb-item>
						<n-breadcrumb-item>
							<n-icon :component="Cash" />
							Account
						</n-breadcrumb-item>
						<n-breadcrumb-item>
							<n-icon :component="Cash" />
							Category
						</n-breadcrumb-item>
					</n-breadcrumb>
					`))+" "+d(m(`
						import { Cash } from "@vicons/ionicons5"
						`)),1)]),default:t(()=>[e(r(p),null,{default:t(()=>[e(r(a),null,{default:t(()=>[e(l,{name:u}),o[2]||(o[2]=n(" Home ",-1))]),_:1}),e(r(a),null,{default:t(()=>[e(l,{name:u}),o[3]||(o[3]=n(" Account ",-1))]),_:1}),e(r(a),null,{default:t(()=>[e(l,{name:u}),o[4]||(o[4]=n(" Category ",-1))]),_:1})]),_:1})]),_:1}),e(b,{title:"Dropdown"},{code:t(({html:i,js:m})=>[n(d(i(`
					<n-breadcrumb>
						<n-breadcrumb-item>
							<n-dropdown :options="options1">
								<div class="trigger">I'm ok</div>
							</n-dropdown>
						</n-breadcrumb-item>
						<n-breadcrumb-item>
							<n-dropdown :options="options2">
								<div class="trigger">I'm ok</div>
							</n-dropdown>
						</n-breadcrumb-item>
					</n-breadcrumb>
					`))+" "+d(m(`
						const options1 = [
							{
								label: "David Tao",
								key: 1
							},
							{
								label: "黑色柳丁",
								key: 2
							}
						]
						const options2 = [
							{
								label: "小镇姑娘",
								key: 1
							},
							{
								label: "普通朋友",
								key: 2
							}
						]
						`)),1)]),default:t(()=>[s("div",null,[o[7]||(o[7]=n(" It is possible to pass a custom template when you want to customize the item link to be, for example a ",-1)),e(r(c),{code:""},{default:t(()=>[...o[5]||(o[5]=[n("dropdown",-1)])]),_:1}),o[8]||(o[8]=n(" or a ",-1)),e(r(c),{code:""},{default:t(()=>[...o[6]||(o[6]=[n("router-link",-1)])]),_:1}),o[9]||(o[9]=n(" . ",-1))]),e(r(p),null,{default:t(()=>[e(r(a),null,{default:t(()=>[e(r(f),{options:k},{default:t(()=>[...o[10]||(o[10]=[s("div",{class:"trigger"},"I'm ok",-1)])]),_:1})]),_:1}),e(r(a),null,{default:t(()=>[e(r(f),{options:_},{default:t(()=>[...o[11]||(o[11]=[s("div",{class:"trigger"},"I'm ok",-1)])]),_:1})]),_:1})]),_:1})]),_:1})])])}}});export{S as default};
