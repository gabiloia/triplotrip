import{_ as u}from"./BLzEf9tb.js";import{d as p,o as c,c as b,a as t,e as n,_ as f,b as e,w as l,u as s,t as r,z as m}from"./BboPWEKj.js";import{N as d}from"./CgiM6lMv.js";import"./BmSAZQUJ.js";import"./BoIEE7Tp.js";const g={class:"page"},x={class:"page-header"},v={class:"links"},_={href:"https://www.naiveui.com/en-US/light/components/ellipsis",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},w={class:"components-list"},k="tabler:external-link",y=p({__name:"Ellipsis",setup(q){return(E,i)=>{const a=u;return c(),b("div",g,[t("div",x,[i[1]||(i[1]=t("div",{class:"title"},"Ellipsis",-1)),t("div",v,[t("a",_,[n(f,{name:k,size:16}),i[0]||(i[0]=e(" docs ",-1))])])]),t("div",w,[n(a,{title:"Basic"},{description:l(()=>[...i[2]||(i[2]=[e("Basic single line ellipsis with tooltip.",-1)])]),code:l(({html:o})=>[e(r(o(`
					<n-ellipsis style="max-width: 240px">
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
						laudantium, totam rem aperiam
					</n-ellipsis>
					`)),1)]),default:l(()=>[n(s(d),{style:{"max-width":"240px"}},{default:l(()=>[...i[3]||(i[3]=[e(" Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam ",-1)])]),_:1})]),_:1}),n(a,{title:"Line clamp"},{description:l(()=>[...i[4]||(i[4]=[e(" See ",-1),t("a",{href:"https://caniuse.com/?search=line-clamp",target:"_blank",rel:"nofollow noreferrer noopener"}," caniuse ",-1),e(" for compatibility. ",-1)])]),code:l(({html:o})=>[e(r(o(`
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
					`)),1)]),default:l(()=>[n(s(d),{"line-clamp":2},{default:l(()=>[...i[5]||(i[5]=[e(" Lorem ipsum dolor sit amet, ",-1),t("br",null,null,-1),e(" consectetur adipiscing elit, ",-1),t("br",null,null,-1),e(" sed do eiusmod tempor incididunt ",-1),t("br",null,null,-1),e(" ut labore et dolore magna aliqua. ",-1),t("br",null,null,-1),e(" Ut enim ad minim veniam, ",-1),t("br",null,null,-1),e(" quis nostrud exercitation ullamco ",-1)])]),_:1})]),_:1}),n(a,{title:"Expand trigger"},{description:l(()=>[i[8]||(i[8]=e(" Use ",-1)),n(s(m),{code:""},{default:l(()=>[...i[6]||(i[6]=[e('expand-trigger="click"',-1)])]),_:1}),i[9]||(i[9]=e(" with the ",-1)),n(s(m),{code:""},{default:l(()=>[...i[7]||(i[7]=[e("line-clamp",-1)])]),_:1}),i[10]||(i[10]=e(" parameter to achieve the function of clicking the abbreviated text to expand the complete text. ",-1))]),code:l(({html:o})=>[e(r(o(`
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
					`)),1)]),default:l(()=>[n(s(d),{"expand-trigger":"click","line-clamp":"2",tooltip:!1},{default:l(()=>[...i[11]||(i[11]=[e(" Lorem ipsum dolor sit amet, ",-1),t("br",null,null,-1),e(" consectetur adipiscing elit, ",-1),t("br",null,null,-1),e(" sed do eiusmod tempor incididunt ",-1),t("br",null,null,-1),e(" ut labore et dolore magna aliqua. ",-1),t("br",null,null,-1),e(" Ut enim ad minim veniam, ",-1),t("br",null,null,-1),e(" quis nostrud exercitation ullamco ",-1)])]),_:1})]),_:1})])])}}});export{y as default};
