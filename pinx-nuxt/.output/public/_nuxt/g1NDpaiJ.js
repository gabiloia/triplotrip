import{_ as S}from"./B3gcOJmJ.js";import{ay as v,aw as s,c3 as V,c4 as M,ax as p,az as n,d as f,a7 as d,aE as O,bj as H,aF as C,aI as K,aJ as q,s as F,aN as J,dI as U,ap as A,aq as G,ar as Q,c as W,a as X,b as a,g as i,f as l,h as Y,w as t,u as m,B as g,t as Z}from"./G6QKWTEq.js";import{N as x}from"./Pyr6RsRK.js";import"./B3cGRaQN.js";import"./-7JWf2sr.js";const ee=v([s("list",`
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
 `,[p("show-divider",[s("list-item",[v("&:not(:last-child)",[n("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),p("clickable",[s("list-item",`
 cursor: pointer;
 `)]),p("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),p("hoverable",[s("list-item",`
 border-radius: var(--n-border-radius);
 `,[v("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[n("divider",`
 background-color: transparent;
 `)])])]),p("bordered, hoverable",[s("list-item",`
 padding: 12px 20px;
 `),n("header, footer",`
 padding: 12px 20px;
 `)]),n("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[v("&:not(:last-child)",`
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
 `)])]),V(s("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),M(s("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),oe=Object.assign(Object.assign({},C.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),w=A("n-list"),re=f({name:"List",props:oe,slots:Object,setup(o){const{mergedClsPrefixRef:r,inlineThemeDisabled:e,mergedRtlRef:c}=O(o),b=H("List",c,r),z=C("List","-list",ee,U,o,r);K(w,{showDividerRef:q(o,"showDivider"),mergedClsPrefixRef:r});const h=F(()=>{const{common:{cubicBezierEaseInOut:B},self:{fontSize:k,textColor:$,color:R,colorModal:P,colorPopover:y,borderColor:E,borderColorModal:j,borderColorPopover:D,borderRadius:I,colorHover:L,colorHoverModal:T,colorHoverPopover:N}}=z.value;return{"--n-font-size":k,"--n-bezier":B,"--n-text-color":$,"--n-color":R,"--n-border-radius":I,"--n-border-color":E,"--n-border-color-modal":j,"--n-border-color-popover":D,"--n-color-modal":P,"--n-color-popover":y,"--n-color-hover":L,"--n-color-hover-modal":T,"--n-color-hover-popover":N}}),u=e?J("list",void 0,h,o):void 0;return{mergedClsPrefix:r,rtlEnabled:b,cssVars:e?void 0:h,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender}},render(){var o;const{$slots:r,mergedClsPrefix:e,onRender:c}=this;return c==null||c(),d("ul",{class:[`${e}-list`,this.rtlEnabled&&`${e}-list--rtl`,this.bordered&&`${e}-list--bordered`,this.showDivider&&`${e}-list--show-divider`,this.hoverable&&`${e}-list--hoverable`,this.clickable&&`${e}-list--clickable`,this.themeClass],style:this.cssVars},r.header?d("div",{class:`${e}-list__header`},r.header()):null,(o=r.default)===null||o===void 0?void 0:o.call(r),r.footer?d("div",{class:`${e}-list__footer`},r.footer()):null)}}),_=f({name:"ListItem",slots:Object,setup(){const o=G(w,null);return o||Q("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:o.showDividerRef,mergedClsPrefix:o.mergedClsPrefixRef}},render(){const{$slots:o,mergedClsPrefix:r}=this;return d("li",{class:`${r}-list-item`},o.prefix?d("div",{class:`${r}-list-item__prefix`},o.prefix()):null,o.default?d("div",{class:`${r}-list-item__main`},o):null,o.suffix?d("div",{class:`${r}-list-item__suffix`},o.suffix()):null,this.showDivider&&d("div",{class:`${r}-list-item__divider`}))}}),te={class:"page"},ie={class:"page-header"},le={class:"links"},se={href:"https://www.naiveui.com/en-US/light/components/list",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},ne={class:"components-list"},ae="tabler:external-link",ve=f({__name:"List",setup(o){return(r,e)=>{const c=S;return X(),W("div",te,[a("div",ie,[e[1]||(e[1]=a("div",{class:"title"},"List",-1)),a("div",le,[a("a",se,[i(Y,{name:ae,size:16}),e[0]||(e[0]=l(" docs "))])])]),a("div",ne,[i(c,{title:"Basic"},{code:t(({html:b})=>[l(Z(b(`
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
					`)),1)]),default:t(()=>[i(m(re),null,{header:t(()=>e[2]||(e[2]=[l("header")])),footer:t(()=>e[3]||(e[3]=[l("footer")])),default:t(()=>[i(m(_),null,{prefix:t(()=>[i(m(g),null,{default:t(()=>e[4]||(e[4]=[l("Prefix")])),_:1})]),suffix:t(()=>[i(m(g),null,{default:t(()=>e[5]||(e[5]=[l("Suffix")])),_:1})]),default:t(()=>[i(m(x),{title:"Thing","title-extra":"extra",description:"description"},{default:t(()=>e[6]||(e[6]=[l(" Biu "),a("br",null,null,-1),l(" Biu "),a("br",null,null,-1),l(" Biu "),a("br",null,null,-1)])),_:1})]),_:1}),i(m(_),null,{default:t(()=>[i(m(x),{title:"Thing","title-extra":"extra",description:"description"})]),_:1})]),_:1})]),_:1})])])}}});export{ve as default};
