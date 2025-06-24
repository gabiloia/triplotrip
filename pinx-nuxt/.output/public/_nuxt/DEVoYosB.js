import{_ as d}from"./BZZgnyk_.js";import{d as p,c as _,o as f,a as n,e,b as r,_ as t,w as i,t as s}from"./BySaBgEi.js";import"./D25RmOv_.js";import"./m78dC5vD.js";const k={class:"page"},u={class:"page-header"},g={class:"links"},C={href:"https://www.naiveui.com/en-US/light/components/icon",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},h={class:"components-list"},z="tabler:external-link",b="ion:game-controller-outline",m="ion:game-controller",w="fluent:checkmark-16-filled",E=p({__name:"Icon",setup(v){return(x,o)=>{const c=d;return f(),_("div",k,[n("div",u,[o[1]||(o[1]=n("div",{class:"title"},"Icon",-1)),n("div",g,[n("a",C,[e(t,{name:z,size:16}),o[0]||(o[0]=r(" docs "))])])]),n("div",h,[e(c,{title:"Basic"},{code:i(({html:a,js:l})=>[r(s(a(`
					<n-icon size="40">
						<game-controller-outline />
					</n-icon>
					<n-icon size="40" color="#0e7a0d">
						<game-controller />
					</n-icon>
					<n-icon size="40" :component="GameController" />
					`))+" "+s(l(`
						import { GameControllerOutline, GameController } from '@vicons/ionicons5'
						`)),1)]),default:i(()=>[e(t,{name:b,size:40}),e(t,{name:m,size:40,color:"#0e7a0d"}),e(t,{name:m,size:40})]),_:1}),e(c,{title:"Icon with background"},{description:i(()=>o[2]||(o[2]=[r("Sometime it looks better with a background.")])),code:i(({html:a,js:l})=>[r(s(a(`
					<n-icon-wrapper :size="24" :border-radius="10">
						<n-icon :size="18" :component="Checkmark16Filled" />
					</n-icon-wrapper>
					`))+" "+s(l("import Checkmark16Filled from '@vicons/fluent/Checkmark16Filled'")),1)]),default:i(()=>[e(t,{name:w,"bg-size":24,size:18,"border-radius":10,"bg-color":"#0e7a0d",color:"#fff"})]),_:1})])])}}});export{E as default};
