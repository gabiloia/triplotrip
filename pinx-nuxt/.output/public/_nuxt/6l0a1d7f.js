import{_ as z}from"./BLzEf9tb.js";import{az as B,aA as b,d as x,ac as R,aH as P,aI as p,aL as C,q as v,dA as H,dB as w,o as L,c as $,a as f,e,_ as c,b as r,w as n,u as t,t as I}from"./BboPWEKj.js";import{N as a}from"./a8_cofad.js";import{N as y,a as N}from"./DK8b-sEJ.js";import"./BmSAZQUJ.js";import"./BoIEE7Tp.js";const k=B("layout-footer",`
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
`,[b("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 bottom: 0;
 `),b("bordered",`
 border-top: solid 1px var(--n-border-color);
 `)]),V=Object.assign(Object.assign({},p.props),{inverted:Boolean,position:H,bordered:Boolean}),O=x({name:"LayoutFooter",props:V,setup(d){const{mergedClsPrefixRef:l,inlineThemeDisabled:o}=P(d),g=p("Layout","-layout-footer",k,w,d,l),h=v(()=>{const{common:{cubicBezierEaseInOut:m},self:u}=g.value,s={"--n-bezier":m};return d.inverted?(s["--n-color"]=u.footerColorInverted,s["--n-text-color"]=u.textColorInverted,s["--n-border-color"]=u.footerBorderColorInverted):(s["--n-color"]=u.footerColor,s["--n-text-color"]=u.textColor,s["--n-border-color"]=u.footerBorderColor),s}),i=o?C("layout-footer",v(()=>d.inverted?"a":"b"),h,d):void 0;return{mergedClsPrefix:l,cssVars:o?void 0:h,themeClass:i?.themeClass,onRender:i?.onRender}},render(){var d;const{mergedClsPrefix:l}=this;return(d=this.onRender)===null||d===void 0||d.call(this),R("div",{class:[`${l}-layout-footer`,this.themeClass,this.position&&`${l}-layout-footer--${this.position}-positioned`,this.bordered&&`${l}-layout-footer--bordered`],style:this.cssVars},this.$slots)}}),_=B("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[b("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),b("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),E={position:H,inverted:Boolean,bordered:{type:Boolean,default:!1}},F=x({name:"LayoutHeader",props:Object.assign(Object.assign({},p.props),E),setup(d){const{mergedClsPrefixRef:l,inlineThemeDisabled:o}=P(d),g=p("Layout","-layout-header",_,w,d,l),h=v(()=>{const{common:{cubicBezierEaseInOut:m},self:u}=g.value,s={"--n-bezier":m};return d.inverted?(s["--n-color"]=u.headerColorInverted,s["--n-text-color"]=u.textColorInverted,s["--n-border-color"]=u.headerBorderColorInverted):(s["--n-color"]=u.headerColor,s["--n-text-color"]=u.textColor,s["--n-border-color"]=u.headerBorderColor),s}),i=o?C("layout-header",v(()=>d.inverted?"a":"b"),h,d):void 0;return{mergedClsPrefix:l,cssVars:o?void 0:h,themeClass:i?.themeClass,onRender:i?.onRender}},render(){var d;const{mergedClsPrefix:l}=this;return(d=this.onRender)===null||d===void 0||d.call(this),R("div",{class:[`${l}-layout-header`,this.themeClass,this.position&&`${l}-layout-header--${this.position}-positioned`,this.bordered&&`${l}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),T={class:"page"},j={class:"page-header"},D={class:"links"},S={href:"https://www.naiveui.com/en-US/light/components/layout",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},A={class:"components-list"},q="tabler:external-link",W=x({__name:"Layout",setup(d){return(l,o)=>{const g=z;return L(),$("div",T,[f("div",j,[o[1]||(o[1]=f("div",{class:"title"},"Layout",-1)),f("div",D,[f("a",S,[e(c,{name:q,size:16}),o[0]||(o[0]=r(" docs ",-1))])])]),f("div",A,[e(g,{title:"Basic"},{code:n(({html:h})=>[r(I(h(`
					<n-layout style="height: 360px">
						<n-layout-header style="height: 64px; padding: 24px" bordered>Header</n-layout-header>
						<n-layout position="absolute" style="top: 64px; bottom: 64px" has-sider>
							<n-layout-sider
								content-style="padding: 24px;"
								:native-scrollbar="false"
								bordered
								collapse-mode="width"
								:collapsed-width="120"
								:width="240"
								show-trigger="bar"
							>
								<n-h2>Handian Bridge</n-h2>
								<n-h2>Handian Bridge</n-h2>
								<n-h2>Handian Bridge</n-h2>
								<n-h2>Handian Bridge</n-h2>
								<n-h2>Handian Bridge</n-h2>
								<n-h2>Handian Bridge</n-h2>
								<n-h2>Handian Bridge</n-h2>
								<n-h2>Handian Bridge</n-h2>
								<n-h2>Handian Bridge</n-h2>
								<n-h2>Handian Bridge</n-h2>
								<n-h2>Handian Bridge</n-h2>
								<n-h2>Handian Bridge</n-h2>
							</n-layout-sider>
							<n-layout content-style="padding: 24px;" :native-scrollbar="false">
								<n-h2>Pingshan Road</n-h2>
								<n-h2>Pingshan Road</n-h2>
								<n-h2>Pingshan Road</n-h2>
								<n-h2>Pingshan Road</n-h2>
								<n-h2>Pingshan Road</n-h2>
								<n-h2>Pingshan Road</n-h2>
								<n-h2>Pingshan Road</n-h2>
								<n-h2>Pingshan Road</n-h2>
								<n-h2>Pingshan Road</n-h2>
								<n-h2>Pingshan Road</n-h2>
								<n-h2>Pingshan Road</n-h2>
								<n-h2>Pingshan Road</n-h2>
							</n-layout>
						</n-layout>
						<n-layout-footer position="absolute" style="height: 64px; padding: 24px" bordered>
							Footer
						</n-layout-footer>
					</n-layout>
					`)),1)]),default:n(()=>[e(t(y),{style:{height:"360px"}},{default:n(()=>[e(t(F),{style:{height:"64px",padding:"24px"},bordered:""},{default:n(()=>[...o[2]||(o[2]=[r("Header",-1)])]),_:1}),e(t(y),{position:"absolute",style:{top:"64px",bottom:"64px"},"has-sider":""},{default:n(()=>[e(t(N),{"content-style":"padding: 24px;","native-scrollbar":!1,bordered:"","collapse-mode":"width","collapsed-width":120,width:240,"show-trigger":"bar"},{default:n(()=>[e(t(a),null,{default:n(()=>[...o[3]||(o[3]=[r("Handian Bridge",-1)])]),_:1}),e(t(a),null,{default:n(()=>[...o[4]||(o[4]=[r("Handian Bridge",-1)])]),_:1}),e(t(a),null,{default:n(()=>[...o[5]||(o[5]=[r("Handian Bridge",-1)])]),_:1}),e(t(a),null,{default:n(()=>[...o[6]||(o[6]=[r("Handian Bridge",-1)])]),_:1}),e(t(a),null,{default:n(()=>[...o[7]||(o[7]=[r("Handian Bridge",-1)])]),_:1}),e(t(a),null,{default:n(()=>[...o[8]||(o[8]=[r("Handian Bridge",-1)])]),_:1}),e(t(a),null,{default:n(()=>[...o[9]||(o[9]=[r("Handian Bridge",-1)])]),_:1}),e(t(a),null,{default:n(()=>[...o[10]||(o[10]=[r("Handian Bridge",-1)])]),_:1}),e(t(a),null,{default:n(()=>[...o[11]||(o[11]=[r("Handian Bridge",-1)])]),_:1}),e(t(a),null,{default:n(()=>[...o[12]||(o[12]=[r("Handian Bridge",-1)])]),_:1}),e(t(a),null,{default:n(()=>[...o[13]||(o[13]=[r("Handian Bridge",-1)])]),_:1}),e(t(a),null,{default:n(()=>[...o[14]||(o[14]=[r("Handian Bridge",-1)])]),_:1})]),_:1}),e(t(y),{"content-style":"padding: 24px;","native-scrollbar":!1},{default:n(()=>[e(t(a),null,{default:n(()=>[...o[15]||(o[15]=[r("Pingshan Road",-1)])]),_:1}),e(t(a),null,{default:n(()=>[...o[16]||(o[16]=[r("Pingshan Road",-1)])]),_:1}),e(t(a),null,{default:n(()=>[...o[17]||(o[17]=[r("Pingshan Road",-1)])]),_:1}),e(t(a),null,{default:n(()=>[...o[18]||(o[18]=[r("Pingshan Road",-1)])]),_:1}),e(t(a),null,{default:n(()=>[...o[19]||(o[19]=[r("Pingshan Road",-1)])]),_:1}),e(t(a),null,{default:n(()=>[...o[20]||(o[20]=[r("Pingshan Road",-1)])]),_:1}),e(t(a),null,{default:n(()=>[...o[21]||(o[21]=[r("Pingshan Road",-1)])]),_:1}),e(t(a),null,{default:n(()=>[...o[22]||(o[22]=[r("Pingshan Road",-1)])]),_:1}),e(t(a),null,{default:n(()=>[...o[23]||(o[23]=[r("Pingshan Road",-1)])]),_:1}),e(t(a),null,{default:n(()=>[...o[24]||(o[24]=[r("Pingshan Road",-1)])]),_:1}),e(t(a),null,{default:n(()=>[...o[25]||(o[25]=[r("Pingshan Road",-1)])]),_:1}),e(t(a),null,{default:n(()=>[...o[26]||(o[26]=[r("Pingshan Road",-1)])]),_:1})]),_:1})]),_:1}),e(t(O),{position:"absolute",style:{height:"64px",padding:"24px"},bordered:""},{default:n(()=>[...o[27]||(o[27]=[r(" Footer ",-1)])]),_:1})]),_:1})]),_:1})])])}}});export{W as default};
