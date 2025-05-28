import{_ as v}from"./BfzzecIy.js";import{d as u,c as f,a as x,b as n,g as l,f as i,h as p,w as t,u as o,t as r,O as c}from"./CFnCIwgc.js";import{N as m,a}from"./Bg-0ZsXF.js";import"./uLUuACJr.js";const w={class:"page"},y={class:"page-header"},C={class:"links"},h={href:"https://www.naiveui.com/en-US/light/components/collapse",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},N={class:"components-list"},g="ion:cash-outline",_="tabler:external-link",I=u({__name:"Collapse",setup(B){return(k,e)=>{const s=v;return x(),f("div",w,[n("div",y,[e[1]||(e[1]=n("div",{class:"title"},"Collapse",-1)),n("div",C,[n("a",h,[l(p,{name:_,size:16}),e[0]||(e[0]=i(" docs "))])])]),n("div",N,[l(s,{title:"Basic"},{code:t(({html:d})=>[i(r(d(`
					<n-collapse>
						<n-collapse-item title="right" name="1">
							<div>good</div>
						</n-collapse-item>
						<n-collapse-item title="right" name="2">
							<div>nice</div>
						</n-collapse-item>
						<n-collapse-item title="right" name="3">
							<div>very good</div>
						</n-collapse-item>
					</n-collapse>
					`)),1)]),default:t(()=>[l(o(m),null,{default:t(()=>[l(o(a),{title:"right",name:"1"},{default:t(()=>e[2]||(e[2]=[n("div",null,"good",-1)])),_:1}),l(o(a),{title:"right",name:"2"},{default:t(()=>e[3]||(e[3]=[n("div",null,"nice",-1)])),_:1}),l(o(a),{title:"right",name:"3"},{default:t(()=>e[4]||(e[4]=[n("div",null,"very good",-1)])),_:1})]),_:1})]),_:1}),l(s,{title:"Arrow placement"},{description:t(()=>[e[6]||(e[6]=i(" Use ")),l(o(c),{code:""},{default:t(()=>e[5]||(e[5]=[i("arrow-placement")])),_:1}),e[7]||(e[7]=i(" to set the placement of arrow. "))]),code:t(({html:d})=>[i(r(d(`
					<n-collapse arrow-placement="right">
						<n-collapse-item title="right" name="1">
							<div>good</div>
						</n-collapse-item>
						<n-collapse-item title="right" name="2">
							<div>nice</div>
						</n-collapse-item>
						<n-collapse-item title="right" name="3">
							<div>very good</div>
						</n-collapse-item>
					</n-collapse>
					`)),1)]),default:t(()=>[l(o(m),{"arrow-placement":"right"},{default:t(()=>[l(o(a),{title:"right",name:"1"},{default:t(()=>e[8]||(e[8]=[n("div",null,"good",-1)])),_:1}),l(o(a),{title:"right",name:"2"},{default:t(()=>e[9]||(e[9]=[n("div",null,"nice",-1)])),_:1}),l(o(a),{title:"right",name:"3"},{default:t(()=>e[10]||(e[10]=[n("div",null,"very good",-1)])),_:1})]),_:1})]),_:1}),l(s,{title:"Customize icon"},{code:t(({html:d})=>[i(r(d(`
					<n-collapse>
						<template #header-extra>
							<n-icon><cash-icon /></n-icon>
						</template>
						<template #arrow>
							<n-icon>
								<cash-icon />
							</n-icon>
						</template>
						<n-collapse-item title="Bronze" name="1">
							<div>good</div>
						</n-collapse-item>
						<n-collapse-item title="Silver" name="2">
							<div>nice</div>
						</n-collapse-item>
						<n-collapse-item title="Gold" name="3">
							<div>very good</div>
						</n-collapse-item>
					</n-collapse>
					`)),1)]),default:t(()=>[l(o(m),null,{"header-extra":t(()=>[l(p,{name:g})]),arrow:t(()=>[l(p,{name:g})]),default:t(()=>[l(o(a),{title:"Bronze",name:"1"},{default:t(()=>e[11]||(e[11]=[n("div",null,"good",-1)])),_:1}),l(o(a),{title:"Silver",name:"2"},{default:t(()=>e[12]||(e[12]=[n("div",null,"nice",-1)])),_:1}),l(o(a),{title:"Gold",name:"3"},{default:t(()=>e[13]||(e[13]=[n("div",null,"very good",-1)])),_:1})]),_:1})]),_:1}),l(s,{title:"Extra info in header"},{description:t(()=>e[14]||(e[14]=[i("Put some info on the right side of the item.")])),code:t(({html:d})=>[i(r(d(`
					<n-collapse>
						<n-collapse-item title="right" name="1">
							good
							<template #header-extra>good</template>
						</n-collapse-item>
						<n-collapse-item title="right" name="2">
							nice
							<template #header-extra>nice</template>
						</n-collapse-item>
						<n-collapse-item title="right" name="3">
							very good
							<template #header-extra>very good</template>
						</n-collapse-item>
					</n-collapse>
					`)),1)]),default:t(()=>[l(o(m),null,{default:t(()=>[l(o(a),{title:"right",name:"1"},{"header-extra":t(()=>e[15]||(e[15]=[i("good")])),default:t(()=>[e[16]||(e[16]=i(" good "))]),_:1}),l(o(a),{title:"right",name:"2"},{"header-extra":t(()=>e[17]||(e[17]=[i("nice")])),default:t(()=>[e[18]||(e[18]=i(" nice "))]),_:1}),l(o(a),{title:"right",name:"3"},{"header-extra":t(()=>e[19]||(e[19]=[i("very good")])),default:t(()=>[e[20]||(e[20]=i(" very good "))]),_:1})]),_:1})]),_:1})])])}}});export{I as default};
