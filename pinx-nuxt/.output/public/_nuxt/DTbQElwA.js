import{_ as V}from"./BLzEf9tb.js";import{aB as b,az as s,aA as v,aC as n,bV as S,bW as H,d as f,ac as d,aH as M,bn as O,aI as C,aL as K,q as U,dx as q,aR as A,as as W,aU as F,at as G,au as J,o as Q,c as X,a,e as i,_ as Y,b as l,w as t,u,B as x,t as Z}from"./BboPWEKj.js";import{N as g}from"./C76ChfjU.js";import"./BmSAZQUJ.js";import"./BoIEE7Tp.js";const ee=b([s("list",`
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color);
 --n-merged-color-hover: var(--n-color-hover);
 margin: 0;
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `,[v("show-divider",[s("list-item",[b("&:not(:last-child)",[n("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),v("clickable",[s("list-item",`
 cursor: pointer;
 `)]),v("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),v("hoverable",[s("list-item",`
 border-radius: var(--n-border-radius);
 `,[b("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[n("divider",`
 background-color: transparent;
 `)])])]),v("bordered, hoverable",[s("list-item",`
 padding: 12px 20px;
 `),n("header, footer",`
 padding: 12px 20px;
 `)]),n("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[b("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),s("list-item",`
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[n("prefix",`
 margin-right: 20px;
 flex: 0;
 `),n("suffix",`
 margin-left: 20px;
 flex: 0;
 `),n("main",`
 flex: 1;
 `),n("divider",`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),S(s("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),H(s("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),oe=Object.assign(Object.assign({},C.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),B=W("n-list"),re=f({name:"List",props:oe,slots:Object,setup(o){const{mergedClsPrefixRef:r,inlineThemeDisabled:e,mergedRtlRef:c}=M(o),p=O("List",c,r),w=C("List","-list",ee,q,o,r);A(B,{showDividerRef:F(o,"showDivider"),mergedClsPrefixRef:r});const h=U(()=>{const{common:{cubicBezierEaseInOut:z},self:{fontSize:k,textColor:R,color:$,colorModal:P,colorPopover:y,borderColor:L,borderColorModal:D,borderColorPopover:E,borderRadius:T,colorHover:j,colorHoverModal:I,colorHoverPopover:N}}=w.value;return{"--n-font-size":k,"--n-bezier":z,"--n-text-color":R,"--n-color":$,"--n-border-radius":T,"--n-border-color":L,"--n-border-color-modal":D,"--n-border-color-popover":E,"--n-color-modal":P,"--n-color-popover":y,"--n-color-hover":j,"--n-color-hover-modal":I,"--n-color-hover-popover":N}}),m=e?K("list",void 0,h,o):void 0;return{mergedClsPrefix:r,rtlEnabled:p,cssVars:e?void 0:h,themeClass:m?.themeClass,onRender:m?.onRender}},render(){var o;const{$slots:r,mergedClsPrefix:e,onRender:c}=this;return c?.(),d("ul",{class:[`${e}-list`,this.rtlEnabled&&`${e}-list--rtl`,this.bordered&&`${e}-list--bordered`,this.showDivider&&`${e}-list--show-divider`,this.hoverable&&`${e}-list--hoverable`,this.clickable&&`${e}-list--clickable`,this.themeClass],style:this.cssVars},r.header?d("div",{class:`${e}-list__header`},r.header()):null,(o=r.default)===null||o===void 0?void 0:o.call(r),r.footer?d("div",{class:`${e}-list__footer`},r.footer()):null)}}),_=f({name:"ListItem",slots:Object,setup(){const o=G(B,null);return o||J("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:o.showDividerRef,mergedClsPrefix:o.mergedClsPrefixRef}},render(){const{$slots:o,mergedClsPrefix:r}=this;return d("li",{class:`${r}-list-item`},o.prefix?d("div",{class:`${r}-list-item__prefix`},o.prefix()):null,o.default?d("div",{class:`${r}-list-item__main`},o):null,o.suffix?d("div",{class:`${r}-list-item__suffix`},o.suffix()):null,this.showDivider&&d("div",{class:`${r}-list-item__divider`}))}}),te={class:"page"},ie={class:"page-header"},le={class:"links"},se={href:"https://www.naiveui.com/en-US/light/components/list",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},ne={class:"components-list"},ae="tabler:external-link",be=f({__name:"List",setup(o){return(r,e)=>{const c=V;return Q(),X("div",te,[a("div",ie,[e[1]||(e[1]=a("div",{class:"title"},"List",-1)),a("div",le,[a("a",se,[i(Y,{name:ae,size:16}),e[0]||(e[0]=l(" docs ",-1))])])]),a("div",ne,[i(c,{title:"Basic"},{code:t(({html:p})=>[l(Z(p(`
					<n-list>
						<template #header>header</template>
						<template #footer>footer</template>
						<n-list-item>
							<template #prefix>
								<n-button>Prefix</n-button>
							</template>
							<template #suffix>
								<n-button>Suffix</n-button>
							</template>
							<n-thing title="Thing" title-extra="extra" description="description">
								Biu
								<br />
								Biu
								<br />
								Biu
								<br />
							</n-thing>
						</n-list-item>
						<n-list-item>
							<n-thing title="Thing" title-extra="extra" description="description" />
						</n-list-item>
					</n-list>
					`)),1)]),default:t(()=>[i(u(re),null,{header:t(()=>[...e[2]||(e[2]=[l("header",-1)])]),footer:t(()=>[...e[3]||(e[3]=[l("footer",-1)])]),default:t(()=>[i(u(_),null,{prefix:t(()=>[i(u(x),null,{default:t(()=>[...e[4]||(e[4]=[l("Prefix",-1)])]),_:1})]),suffix:t(()=>[i(u(x),null,{default:t(()=>[...e[5]||(e[5]=[l("Suffix",-1)])]),_:1})]),default:t(()=>[i(u(g),{title:"Thing","title-extra":"extra",description:"description"},{default:t(()=>[...e[6]||(e[6]=[l(" Biu ",-1),a("br",null,null,-1),l(" Biu ",-1),a("br",null,null,-1),l(" Biu ",-1),a("br",null,null,-1)])]),_:1})]),_:1}),i(u(_),null,{default:t(()=>[i(u(g),{title:"Thing","title-extra":"extra",description:"description"})]),_:1})]),_:1})]),_:1})])])}}});export{be as default};
