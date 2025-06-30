import{_ as u}from"./BvYks_Wu.js";import{d as p,c,o as b,a as t,e as n,b as e,_ as f,w as l,u as s,t as r,z as m}from"./D0txxWEs.js";import{N as d}from"./CwNsTckj.js";import"./zjvAu2Mm.js";import"./DbSfpayJ.js";const g={class:"page"},x={class:"page-header"},_={class:"links"},v={href:"https://www.naiveui.com/en-US/light/components/ellipsis",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},w={class:"components-list"},k="tabler:external-link",y=p({__name:"Ellipsis",setup(q){return(E,i)=>{const a=u;return b(),c("div",g,[t("div",x,[i[1]||(i[1]=t("div",{class:"title"},"Ellipsis",-1)),t("div",_,[t("a",v,[n(f,{name:k,size:16}),i[0]||(i[0]=e(" docs "))])])]),t("div",w,[n(a,{title:"Basic"},{description:l(()=>i[2]||(i[2]=[e("Basic single line ellipsis with tooltip.")])),code:l(({html:o})=>[e(r(o(`
					<n-ellipsis style="max-width: 240px">
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
						laudantium, totam rem aperiam
					</n-ellipsis>
					`)),1)]),default:l(()=>[n(s(d),{style:{"max-width":"240px"}},{default:l(()=>i[3]||(i[3]=[e(" Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam ")])),_:1,__:[3]})]),_:1}),n(a,{title:"Line clamp"},{description:l(()=>i[4]||(i[4]=[e(" See "),t("a",{href:"https://caniuse.com/?search=line-clamp",target:"_blank",rel:"nofollow noreferrer noopener"}," caniuse ",-1),e(" for compatibility. ")])),code:l(({html:o})=>[e(r(o(`
					<n-ellipsis :line-clamp="2">
						Lorem ipsum dolor sit amet,
						<br />
						consectetur adipiscing elit,
						<br />
						sed do eiusmod tempor incididunt
						<br />
						ut labore et dolore magna aliqua.
						<br />
						Ut enim ad minim veniam,
						<br />
						quis nostrud exercitation ullamco
					</n-ellipsis>
					`)),1)]),default:l(()=>[n(s(d),{"line-clamp":2},{default:l(()=>i[5]||(i[5]=[e(" Lorem ipsum dolor sit amet, "),t("br",null,null,-1),e(" consectetur adipiscing elit, "),t("br",null,null,-1),e(" sed do eiusmod tempor incididunt "),t("br",null,null,-1),e(" ut labore et dolore magna aliqua. "),t("br",null,null,-1),e(" Ut enim ad minim veniam, "),t("br",null,null,-1),e(" quis nostrud exercitation ullamco ")])),_:1,__:[5]})]),_:1}),n(a,{title:"Expand trigger"},{description:l(()=>[i[8]||(i[8]=e(" Use ")),n(s(m),{code:""},{default:l(()=>i[6]||(i[6]=[e('expand-trigger="click"')])),_:1,__:[6]}),i[9]||(i[9]=e(" with the ")),n(s(m),{code:""},{default:l(()=>i[7]||(i[7]=[e("line-clamp")])),_:1,__:[7]}),i[10]||(i[10]=e(" parameter to achieve the function of clicking the abbreviated text to expand the complete text. "))]),code:l(({html:o})=>[e(r(o(`
					<n-ellipsis expand-trigger="click" line-clamp="2" :tooltip="false">
						Lorem ipsum dolor sit amet,
						<br />
						consectetur adipiscing elit,
						<br />
						sed do eiusmod tempor incididunt
						<br />
						ut labore et dolore magna aliqua.
						<br />
						Ut enim ad minim veniam,
						<br />
						quis nostrud exercitation ullamco
					</n-ellipsis>
					`)),1)]),default:l(()=>[n(s(d),{"expand-trigger":"click","line-clamp":"2",tooltip:!1},{default:l(()=>i[11]||(i[11]=[e(" Lorem ipsum dolor sit amet, "),t("br",null,null,-1),e(" consectetur adipiscing elit, "),t("br",null,null,-1),e(" sed do eiusmod tempor incididunt "),t("br",null,null,-1),e(" ut labore et dolore magna aliqua. "),t("br",null,null,-1),e(" Ut enim ad minim veniam, "),t("br",null,null,-1),e(" quis nostrud exercitation ullamco ")])),_:1,__:[11]})]),_:1})])])}}});export{y as default};
