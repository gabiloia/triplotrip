import{_ as w}from"./BucR0pva.js";import{ay as x,az as b,d as m,ab as B,aG as R,aH as p,p as _,aP as P,dy as C,dA as H,c as z,o as $,a as f,e,b as r,_ as L,w as n,u as t,t as c}from"./Cc935Wq4.js";import{N as a}from"./BlUgGKq2.js";import{N as v,a as N}from"./BUEl5lLu.js";import"./BajPnLyu.js";import"./Cnxb9HjD.js";const k=x("layout-footer",`
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
 `)]),I=Object.assign(Object.assign({},p.props),{inverted:Boolean,position:H,bordered:Boolean}),V=m({name:"LayoutFooter",props:I,setup(d){const{mergedClsPrefixRef:l,inlineThemeDisabled:o}=R(d),g=p("Layout","-layout-footer",k,C,d,l),h=_(()=>{const{common:{cubicBezierEaseInOut:y},self:u}=g.value,s={"--n-bezier":y};return d.inverted?(s["--n-color"]=u.footerColorInverted,s["--n-text-color"]=u.textColorInverted,s["--n-border-color"]=u.footerBorderColorInverted):(s["--n-color"]=u.footerColor,s["--n-text-color"]=u.textColor,s["--n-border-color"]=u.footerBorderColor),s}),i=o?P("layout-footer",_(()=>d.inverted?"a":"b"),h,d):void 0;return{mergedClsPrefix:l,cssVars:o?void 0:h,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var d;const{mergedClsPrefix:l}=this;return(d=this.onRender)===null||d===void 0||d.call(this),B("div",{class:[`${l}-layout-footer`,this.themeClass,this.position&&`${l}-layout-footer--${this.position}-positioned`,this.bordered&&`${l}-layout-footer--bordered`],style:this.cssVars},this.$slots)}}),O=x("layout-header",`
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
 `)]),E={position:H,inverted:Boolean,bordered:{type:Boolean,default:!1}},F=m({name:"LayoutHeader",props:Object.assign(Object.assign({},p.props),E),setup(d){const{mergedClsPrefixRef:l,inlineThemeDisabled:o}=R(d),g=p("Layout","-layout-header",O,C,d,l),h=_(()=>{const{common:{cubicBezierEaseInOut:y},self:u}=g.value,s={"--n-bezier":y};return d.inverted?(s["--n-color"]=u.headerColorInverted,s["--n-text-color"]=u.textColorInverted,s["--n-border-color"]=u.headerBorderColorInverted):(s["--n-color"]=u.headerColor,s["--n-text-color"]=u.textColor,s["--n-border-color"]=u.headerBorderColor),s}),i=o?P("layout-header",_(()=>d.inverted?"a":"b"),h,d):void 0;return{mergedClsPrefix:l,cssVars:o?void 0:h,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var d;const{mergedClsPrefix:l}=this;return(d=this.onRender)===null||d===void 0||d.call(this),B("div",{class:[`${l}-layout-header`,this.themeClass,this.position&&`${l}-layout-header--${this.position}-positioned`,this.bordered&&`${l}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),T={class:"page"},j={class:"page-header"},D={class:"links"},S={href:"https://www.naiveui.com/en-US/light/components/layout",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},A={class:"components-list"},G="tabler:external-link",W=m({__name:"Layout",setup(d){return(l,o)=>{const g=w;return $(),z("div",T,[f("div",j,[o[1]||(o[1]=f("div",{class:"title"},"Layout",-1)),f("div",D,[f("a",S,[e(L,{name:G,size:16}),o[0]||(o[0]=r(" docs "))])])]),f("div",A,[e(g,{title:"Basic"},{code:n(({html:h})=>[r(c(h(`
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
					`)),1)]),default:n(()=>[e(t(v),{style:{height:"360px"}},{default:n(()=>[e(t(F),{style:{height:"64px",padding:"24px"},bordered:""},{default:n(()=>o[2]||(o[2]=[r("Header")])),_:1,__:[2]}),e(t(v),{position:"absolute",style:{top:"64px",bottom:"64px"},"has-sider":""},{default:n(()=>[e(t(N),{"content-style":"padding: 24px;","native-scrollbar":!1,bordered:"","collapse-mode":"width","collapsed-width":120,width:240,"show-trigger":"bar"},{default:n(()=>[e(t(a),null,{default:n(()=>o[3]||(o[3]=[r("Handian Bridge")])),_:1,__:[3]}),e(t(a),null,{default:n(()=>o[4]||(o[4]=[r("Handian Bridge")])),_:1,__:[4]}),e(t(a),null,{default:n(()=>o[5]||(o[5]=[r("Handian Bridge")])),_:1,__:[5]}),e(t(a),null,{default:n(()=>o[6]||(o[6]=[r("Handian Bridge")])),_:1,__:[6]}),e(t(a),null,{default:n(()=>o[7]||(o[7]=[r("Handian Bridge")])),_:1,__:[7]}),e(t(a),null,{default:n(()=>o[8]||(o[8]=[r("Handian Bridge")])),_:1,__:[8]}),e(t(a),null,{default:n(()=>o[9]||(o[9]=[r("Handian Bridge")])),_:1,__:[9]}),e(t(a),null,{default:n(()=>o[10]||(o[10]=[r("Handian Bridge")])),_:1,__:[10]}),e(t(a),null,{default:n(()=>o[11]||(o[11]=[r("Handian Bridge")])),_:1,__:[11]}),e(t(a),null,{default:n(()=>o[12]||(o[12]=[r("Handian Bridge")])),_:1,__:[12]}),e(t(a),null,{default:n(()=>o[13]||(o[13]=[r("Handian Bridge")])),_:1,__:[13]}),e(t(a),null,{default:n(()=>o[14]||(o[14]=[r("Handian Bridge")])),_:1,__:[14]})]),_:1}),e(t(v),{"content-style":"padding: 24px;","native-scrollbar":!1},{default:n(()=>[e(t(a),null,{default:n(()=>o[15]||(o[15]=[r("Pingshan Road")])),_:1,__:[15]}),e(t(a),null,{default:n(()=>o[16]||(o[16]=[r("Pingshan Road")])),_:1,__:[16]}),e(t(a),null,{default:n(()=>o[17]||(o[17]=[r("Pingshan Road")])),_:1,__:[17]}),e(t(a),null,{default:n(()=>o[18]||(o[18]=[r("Pingshan Road")])),_:1,__:[18]}),e(t(a),null,{default:n(()=>o[19]||(o[19]=[r("Pingshan Road")])),_:1,__:[19]}),e(t(a),null,{default:n(()=>o[20]||(o[20]=[r("Pingshan Road")])),_:1,__:[20]}),e(t(a),null,{default:n(()=>o[21]||(o[21]=[r("Pingshan Road")])),_:1,__:[21]}),e(t(a),null,{default:n(()=>o[22]||(o[22]=[r("Pingshan Road")])),_:1,__:[22]}),e(t(a),null,{default:n(()=>o[23]||(o[23]=[r("Pingshan Road")])),_:1,__:[23]}),e(t(a),null,{default:n(()=>o[24]||(o[24]=[r("Pingshan Road")])),_:1,__:[24]}),e(t(a),null,{default:n(()=>o[25]||(o[25]=[r("Pingshan Road")])),_:1,__:[25]}),e(t(a),null,{default:n(()=>o[26]||(o[26]=[r("Pingshan Road")])),_:1,__:[26]})]),_:1})]),_:1}),e(t(V),{position:"absolute",style:{height:"64px",padding:"24px"},bordered:""},{default:n(()=>o[27]||(o[27]=[r(" Footer ")])),_:1,__:[27]})]),_:1})]),_:1})])])}}});export{W as default};
