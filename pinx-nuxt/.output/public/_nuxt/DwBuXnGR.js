import{_ as z}from"./B3gcOJmJ.js";import{aw as B,ax as b,d as x,a7 as R,aE as P,aF as p,s as v,aN as C,dK as H,dM as w,c as $,a as L,b as f,g as e,f as r,h as N,w as n,u as t,t as c}from"./G6QKWTEq.js";import{N as a}from"./ByF7dLSS.js";import{N as y,a as k}from"./_cJDtgTo.js";import"./B3cGRaQN.js";import"./-7JWf2sr.js";const I=B("layout-footer",`
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
 `)]),V=Object.assign(Object.assign({},p.props),{inverted:Boolean,position:w,bordered:Boolean}),E=x({name:"LayoutFooter",props:V,setup(d){const{mergedClsPrefixRef:l,inlineThemeDisabled:o}=P(d),g=p("Layout","-layout-footer",I,H,d,l),h=v(()=>{const{common:{cubicBezierEaseInOut:m},self:u}=g.value,s={"--n-bezier":m};return d.inverted?(s["--n-color"]=u.footerColorInverted,s["--n-text-color"]=u.textColorInverted,s["--n-border-color"]=u.footerBorderColorInverted):(s["--n-color"]=u.footerColor,s["--n-text-color"]=u.textColor,s["--n-border-color"]=u.footerBorderColor),s}),i=o?C("layout-footer",v(()=>d.inverted?"a":"b"),h,d):void 0;return{mergedClsPrefix:l,cssVars:o?void 0:h,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var d;const{mergedClsPrefix:l}=this;return(d=this.onRender)===null||d===void 0||d.call(this),R("div",{class:[`${l}-layout-footer`,this.themeClass,this.position&&`${l}-layout-footer--${this.position}-positioned`,this.bordered&&`${l}-layout-footer--bordered`],style:this.cssVars},this.$slots)}}),F=B("layout-header",`
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
 `)]),O={position:w,inverted:Boolean,bordered:{type:Boolean,default:!1}},T=x({name:"LayoutHeader",props:Object.assign(Object.assign({},p.props),O),setup(d){const{mergedClsPrefixRef:l,inlineThemeDisabled:o}=P(d),g=p("Layout","-layout-header",F,H,d,l),h=v(()=>{const{common:{cubicBezierEaseInOut:m},self:u}=g.value,s={"--n-bezier":m};return d.inverted?(s["--n-color"]=u.headerColorInverted,s["--n-text-color"]=u.textColorInverted,s["--n-border-color"]=u.headerBorderColorInverted):(s["--n-color"]=u.headerColor,s["--n-text-color"]=u.textColor,s["--n-border-color"]=u.headerBorderColor),s}),i=o?C("layout-header",v(()=>d.inverted?"a":"b"),h,d):void 0;return{mergedClsPrefix:l,cssVars:o?void 0:h,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var d;const{mergedClsPrefix:l}=this;return(d=this.onRender)===null||d===void 0||d.call(this),R("div",{class:[`${l}-layout-header`,this.themeClass,this.position&&`${l}-layout-header--${this.position}-positioned`,this.bordered&&`${l}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),_={class:"page"},j={class:"page-header"},D={class:"links"},S={href:"https://www.naiveui.com/en-US/light/components/layout",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},M={class:"components-list"},K="tabler:external-link",W=x({__name:"Layout",setup(d){return(l,o)=>{const g=z;return L(),$("div",_,[f("div",j,[o[1]||(o[1]=f("div",{class:"title"},"Layout",-1)),f("div",D,[f("a",S,[e(N,{name:K,size:16}),o[0]||(o[0]=r(" docs "))])])]),f("div",M,[e(g,{title:"Basic"},{code:n(({html:h})=>[r(c(h(`
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
					`)),1)]),default:n(()=>[e(t(y),{style:{height:"360px"}},{default:n(()=>[e(t(T),{style:{height:"64px",padding:"24px"},bordered:""},{default:n(()=>o[2]||(o[2]=[r("Header")])),_:1}),e(t(y),{position:"absolute",style:{top:"64px",bottom:"64px"},"has-sider":""},{default:n(()=>[e(t(k),{"content-style":"padding: 24px;","native-scrollbar":!1,bordered:"","collapse-mode":"width","collapsed-width":120,width:240,"show-trigger":"bar"},{default:n(()=>[e(t(a),null,{default:n(()=>o[3]||(o[3]=[r("Handian Bridge")])),_:1}),e(t(a),null,{default:n(()=>o[4]||(o[4]=[r("Handian Bridge")])),_:1}),e(t(a),null,{default:n(()=>o[5]||(o[5]=[r("Handian Bridge")])),_:1}),e(t(a),null,{default:n(()=>o[6]||(o[6]=[r("Handian Bridge")])),_:1}),e(t(a),null,{default:n(()=>o[7]||(o[7]=[r("Handian Bridge")])),_:1}),e(t(a),null,{default:n(()=>o[8]||(o[8]=[r("Handian Bridge")])),_:1}),e(t(a),null,{default:n(()=>o[9]||(o[9]=[r("Handian Bridge")])),_:1}),e(t(a),null,{default:n(()=>o[10]||(o[10]=[r("Handian Bridge")])),_:1}),e(t(a),null,{default:n(()=>o[11]||(o[11]=[r("Handian Bridge")])),_:1}),e(t(a),null,{default:n(()=>o[12]||(o[12]=[r("Handian Bridge")])),_:1}),e(t(a),null,{default:n(()=>o[13]||(o[13]=[r("Handian Bridge")])),_:1}),e(t(a),null,{default:n(()=>o[14]||(o[14]=[r("Handian Bridge")])),_:1})]),_:1}),e(t(y),{"content-style":"padding: 24px;","native-scrollbar":!1},{default:n(()=>[e(t(a),null,{default:n(()=>o[15]||(o[15]=[r("Pingshan Road")])),_:1}),e(t(a),null,{default:n(()=>o[16]||(o[16]=[r("Pingshan Road")])),_:1}),e(t(a),null,{default:n(()=>o[17]||(o[17]=[r("Pingshan Road")])),_:1}),e(t(a),null,{default:n(()=>o[18]||(o[18]=[r("Pingshan Road")])),_:1}),e(t(a),null,{default:n(()=>o[19]||(o[19]=[r("Pingshan Road")])),_:1}),e(t(a),null,{default:n(()=>o[20]||(o[20]=[r("Pingshan Road")])),_:1}),e(t(a),null,{default:n(()=>o[21]||(o[21]=[r("Pingshan Road")])),_:1}),e(t(a),null,{default:n(()=>o[22]||(o[22]=[r("Pingshan Road")])),_:1}),e(t(a),null,{default:n(()=>o[23]||(o[23]=[r("Pingshan Road")])),_:1}),e(t(a),null,{default:n(()=>o[24]||(o[24]=[r("Pingshan Road")])),_:1}),e(t(a),null,{default:n(()=>o[25]||(o[25]=[r("Pingshan Road")])),_:1}),e(t(a),null,{default:n(()=>o[26]||(o[26]=[r("Pingshan Road")])),_:1})]),_:1})]),_:1}),e(t(E),{position:"absolute",style:{height:"64px",padding:"24px"},bordered:""},{default:n(()=>o[27]||(o[27]=[r(" Footer ")])),_:1})]),_:1})]),_:1})])])}}});export{W as default};
