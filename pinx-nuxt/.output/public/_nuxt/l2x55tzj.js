import{_ as m}from"./BLzEf9tb.js";import{d as v,o as r,c as d,a as e,e as s,_,b as o,w as i,u as n,aj as f,n as b,t as p,z as l,s as k,f as w}from"./BboPWEKj.js";import{N as c}from"./DSdeVDRj.js";import"./BmSAZQUJ.js";import"./BoIEE7Tp.js";import"./CJbG4D_o.js";const y={class:"page"},h={class:"page-header"},A={class:"links"},T={href:"https://www.naiveui.com/en-US/light/components/affix",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},N={class:"components-list"},B={class:"absolute-anchor-container"},C={class:"content"},R={key:0,style:{display:"inline-block",width:"50%"}},V={style:{display:"inline-block",width:"50%"}},E="tabler:external-link",z=v({__name:"Affix",setup(I){const a=k(void 0);return(S,t)=>{const u=m;return r(),d("div",y,[e("div",h,[t[1]||(t[1]=e("div",{class:"title"},"Affix",-1)),e("div",A,[e("a",T,[s(_,{name:E,size:16}),t[0]||(t[0]=o(" docs ",-1))])])]),e("div",N,[s(u,{title:"Basic"},{dscription:i(()=>[t[5]||(t[5]=o(" Affix can be ",-1)),s(n(l),{code:""},{default:i(()=>[...t[2]||(t[2]=[o("absolute",-1)])]),_:1}),t[6]||(t[6]=o(" or ",-1)),s(n(l),{code:""},{default:i(()=>[...t[3]||(t[3]=[o("fixed",-1)])]),_:1}),t[7]||(t[7]=o(" positioned. You may need some css tricks to make it works as following. By default position is set to fixed, because in most cases scrolled element is ",-1)),s(n(l),{code:""},{default:i(()=>[...t[4]||(t[4]=[o("document",-1)])]),_:1}),t[8]||(t[8]=o(" . ",-1))]),code:i(({html:g,css:x})=>[o(p(g(`
					<div class="absolute-anchor-container">
						<div ref="containerRef" class="container">
							<div class="padding" />
							<div class="content">
								<div style="display: inline-block; width: 50%">
									<n-affix :trigger-top="50" position="absolute" :listen-to="containerRef">
										<n-tag>Affix Trigger Top 50px</n-tag>
									</n-affix>
								</div>
								<div style="display: inline-block; width: 50%">
									<n-affix :trigger-bottom="60" position="absolute" :listen-to="containerRef">
										<n-tag>Affix Trigger Bottom 60px</n-tag>
									</n-affix>
								</div>
							</div>
						</div>
					</div>
					`))+" "+p(x(`
						.absolute-anchor-container {
							width: 100%;
							height: 200px;
							position: relative;
						}

						.anchor-container {
							height: 200px;
							background-color: rgba(128, 128, 128, 0.3);
							border-radius: 3px;
							overflow: auto;
						}

						.padding {
							height: 150px;
							width: 100%;
							background-color: rgba(128, 128, 128, 0.15);
						}

						.content {
							height: 600px;
						}
						`)),1)]),default:i(()=>[e("div",B,[e("div",{ref_key:"containerRef",ref:a,class:"anchor-container"},[t[11]||(t[11]=e("div",{class:"padding"},null,-1)),e("div",C,[a.value?(r(),d("div",R,[s(n(c),{"trigger-top":50,position:"absolute","listen-to":a.value},{default:i(()=>[s(n(f),null,{default:i(()=>[...t[9]||(t[9]=[o("Affix Trigger Top 50px",-1)])]),_:1})]),_:1},8,["listen-to"])])):b("",!0),e("div",V,[s(n(c),{"trigger-bottom":60,position:"absolute","listen-to":a.value},{default:i(()=>[s(n(f),null,{default:i(()=>[...t[10]||(t[10]=[o("Affix Trigger Bottom 60px",-1)])]),_:1})]),_:1},8,["listen-to"])])])],512)])]),_:1})])])}}}),F=w(z,[["__scopeId","data-v-483d7121"]]);export{F as default};
