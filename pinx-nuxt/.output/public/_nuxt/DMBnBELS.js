import{_ as Q}from"./0RhdNeLw.js";import{d as N,q as w,aq as X,aJ as U,b0 as Y,E as q,a7 as k,cz as Z,ap as ee,bf as te,p as W,aI as oe,A as ne,aK as re,af as ie,b8 as ae,C as le,aw as b,aA as K,ax as z,ay as _,az as M,cu as V,aE as se,aF as J,aN as ce,e7 as ue,c as fe,o as de,a as T,e as v,b as H,_ as he,w as E,u as p,t as F}from"./CKyhG2UO.js";import{N as ve,a as pe,b as ge}from"./Cdjsbk8d.js";import{a as me,b as be}from"./DFYlfGDB.js";import{t as ke}from"./BNtfyCEd.js";import{u as xe}from"./CJbG4D_o.js";import{N as we}from"./Dh2Me1dS.js";import{N as G}from"./BcBJlPXn.js";import"./BMJuwibk.js";import"./BLIjkjma.js";import"./BoKekM_7.js";import"./Bk_rJcZu.js";const I=ee("n-anchor"),ye={title:String,href:String},R=N({name:"AnchorLink",props:ye,setup(t,{slots:n}){const o=w(null),a=X(I),e=U(t,"href"),f=Y(()=>e.value&&e.value===a.activeHref.value);me(I,"collectedLinkHrefs",e),be(I,"titleEls",()=>o.value),q(f,s=>{s&&o.value&&a.updateBarPosition(o.value)});function h(){t.href!==void 0&&a.setActiveHref(t.href)}return()=>{var s;const{value:g}=a.mergedClsPrefix;return k("div",{class:[`${g}-anchor-link`,f.value&&`${g}-anchor-link--active`]},k("a",{ref:o,class:[`${g}-anchor-link__title`],href:t.href,title:Z(t.title),onClick:h},t.title),(s=n.default)===null||s===void 0?void 0:s.call(n))}}});function Ce(t,n){const{top:o,height:a}=t.getBoundingClientRect(),e=n instanceof HTMLElement?n.getBoundingClientRect().top:0;return{top:o-e,height:a}}const D={type:{type:String,default:"rail"},showRail:{type:Boolean,default:!0},showBackground:{type:Boolean,default:!0},bound:{type:Number,default:12},internalScrollable:Boolean,ignoreGap:Boolean,offsetTarget:[String,Object,Function]},Re=ae(D),Be=N({name:"BaseAnchor",props:Object.assign(Object.assign({},D),{mergedClsPrefix:{type:String,required:!0}}),setup(t){const n=[],o=[],a=w(null),e=w(null),f=w(null),h=w(null),s=W(()=>t.type==="block"),g=W(()=>!s.value&&t.showRail);function x(){const{value:d}=f,{value:c}=e;d&&(d.style.transition="none"),c&&(c.style.transition="none"),o&&o.forEach(i=>{i.style.transition="none"}),le(()=>{const{value:i}=f,{value:r}=e;i&&(i.offsetWidth,i.style.transition=""),r&&(r.offsetWidth,r.style.transition=""),o&&o.forEach(m=>{m.offsetWidth,m.style.transition=""})})}function j(d,c=!0){const{value:i}=f,{value:r}=e,{value:m}=h;if(!m||!i)return;c||(i.style.transition="none",r&&(r.style.transition="none"));const{offsetHeight:C,offsetWidth:O}=d,{top:S,left:u}=d.getBoundingClientRect(),{top:l,left:P}=m.getBoundingClientRect(),$=S-l,L=u-P;i.style.top=`${$}px`,i.style.height=`${C}px`,r&&(r.style.top=`${$}px`,r.style.height=`${C}px`,r.style.maxWidth=`${O+L}px`),i.offsetHeight,r&&r.offsetHeight,c||(i.style.transition="",r&&(r.style.transition=""))}const B=ke(()=>{A(!0)},128);function y(d,c=!0){const i=/^#([^#]+)$/.exec(d);if(!i)return;const r=document.getElementById(i[1]);r&&(a.value=d,r.scrollIntoView(),c||x(),B())}function A(d=!0){var c;const i=[],r=xe((c=t.offsetTarget)!==null&&c!==void 0?c:document);n.forEach(u=>{const l=/#([^#]+)$/.exec(u);if(!l)return;const P=document.getElementById(l[1]);if(P&&r){const{top:$,height:L}=Ce(P,r);i.push({top:$,height:L,href:u})}}),i.sort((u,l)=>u.top>l.top?1:(u.top===l.top&&u.height<l.height,-1));const m=a.value,{bound:C,ignoreGap:O}=t,S=i.reduce((u,l)=>l.top+l.height<0?O?l:u:l.top<=C?u===null?l:l.top===u.top?l.href===m?l:u:l.top>u.top?l:u:u,null);d||x(),S?a.value=S.href:a.value=null}return oe(I,{activeHref:a,mergedClsPrefix:U(t,"mergedClsPrefix"),updateBarPosition:j,setActiveHref:y,collectedLinkHrefs:n,titleEls:o}),ne(()=>{document.addEventListener("scroll",B,!0),y(window.location.hash),A(!1)}),re(()=>{y(window.location.hash),A(!1)}),ie(()=>{document.removeEventListener("scroll",B,!0)}),q(a,d=>{if(d===null){const{value:c}=e;c&&!s.value&&(c.style.maxWidth="0")}}),{selfRef:h,barRef:f,slotRef:e,setActiveHref:y,activeHref:a,isBlockType:s,mergedShowRail:g}},render(){var t;const{mergedClsPrefix:n,mergedShowRail:o,isBlockType:a,$slots:e}=this,f=k("div",{class:[`${n}-anchor`,a&&`${n}-anchor--block`,o&&`${n}-anchor--show-rail`],ref:"selfRef"},o&&this.showBackground?k("div",{ref:"slotRef",class:`${n}-anchor-link-background`}):null,o?k("div",{class:`${n}-anchor-rail`},k("div",{ref:"barRef",class:[`${n}-anchor-rail__bar`,this.activeHref!==null&&`${n}-anchor-rail__bar--active`]})):null,(t=e.default)===null||t===void 0?void 0:t.call(e));return this.internalScrollable?k(te,null,{default:()=>f}):f}}),Ae=b("anchor",`
 position: relative;
`,[K("block",`
 padding-left: var(--n-rail-width);
 `,[b("anchor-link",[_("+, >",[b("anchor-link",`
 margin-top: .5em;
 `)])]),b("anchor-link-background",`
 max-width: 0;
 border-top-right-radius: 10.5px;
 border-bottom-right-radius: 10.5px;
 `),K("show-rail",[_(">",[b("anchor-link","padding-left: 0;")])])]),z("block",[b("anchor-link",`
 margin-bottom: 4px;
 padding: 2px 8px;
 transition: background-color .3s var(--n-bezier);
 background-color: transparent;
 border-radius: var(--n-link-border-radius);
 `,[z("active",`
 background-color: var(--n-link-color);
 `)])]),b("anchor-link-background",`
 position: absolute;
 left: calc(var(--n-rail-width) / 2);
 width: 100%;
 background-color: var(--n-link-color);
 transition:
 top .15s var(--n-bezier),
 max-width .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),b("anchor-rail",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 width: var(--n-rail-width);
 border-radius: calc(var(--n-rail-width) / 2);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[M("bar",`
 position: absolute;
 left: 0;
 width: var(--n-rail-width);
 height: 21px;
 background-color: #0000;
 transition: 
 top .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[z("active",{backgroundColor:"var(--n-rail-color-active)"})])]),b("anchor-link",`
 padding: var(--n-link-padding);
 position: relative;
 line-height: 1.5;
 font-size: var(--n-link-font-size);
 min-height: 1.5em;
 display: flex;
 flex-direction: column;
 `,[z("active",[_(">",[M("title",`
 color: var(--n-link-text-color-active);
 `)])]),M("title",`
 outline: none;
 max-width: 100%;
 text-decoration: none;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 cursor: pointer;
 display: inline-block;
 padding-right: 16px;
 transition: color .3s var(--n-bezier);
 color: var(--n-link-text-color);
 `,[_("&:hover, &:focus",`
 color: var(--n-link-text-color-hover);
 `),_("&:active",`
 color: var(--n-link-text-color-pressed);
 `)])])]),_e=Object.assign(Object.assign(Object.assign(Object.assign({},J.props),{affix:Boolean}),ge),D),Te=N({name:"Anchor",props:_e,setup(t,{slots:n}){const{mergedClsPrefixRef:o,inlineThemeDisabled:a}=se(t),e=J("Anchor","-anchor",Ae,ue,t,o),f=w(null),h=W(()=>{const{self:{railColor:g,linkColor:x,railColorActive:j,linkTextColor:B,linkTextColorHover:y,linkTextColorPressed:A,linkTextColorActive:d,linkFontSize:c,railWidth:i,linkPadding:r,borderRadius:m},common:{cubicBezierEaseInOut:C}}=e.value;return{"--n-link-border-radius":m,"--n-link-color":x,"--n-link-font-size":c,"--n-link-text-color":B,"--n-link-text-color-hover":y,"--n-link-text-color-active":d,"--n-link-text-color-pressed":A,"--n-link-padding":r,"--n-bezier":C,"--n-rail-color":g,"--n-rail-color-active":j,"--n-rail-width":i}}),s=a?ce("anchor",void 0,h,t):void 0;return{scrollTo(g){var x;(x=f.value)===null||x===void 0||x.setActiveHref(g)},renderAnchor:()=>(s==null||s.onRender(),k(Be,Object.assign({ref:f,style:a?void 0:h.value,class:s==null?void 0:s.themeClass.value},V(t,Re),{mergedClsPrefix:o.value}),n))}},render(){return this.affix?k(ve,Object.assign({},V(this,pe)),{default:this.renderAnchor}):this.renderAnchor()}}),Ee={class:"page"},Se={class:"page-header"},Pe={class:"links"},$e={href:"https://www.naiveui.com/en-US/light/components/anchor",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},ze={class:"components-list"},He="tabler:external-link",Ue=N({__name:"Anchor",setup(t){const n=w(!0),o=w(!0);return(a,e)=>{const f=Q;return de(),fe("div",Ee,[T("div",Se,[e[3]||(e[3]=T("div",{class:"title"},"Anchor",-1)),T("div",Pe,[T("a",$e,[v(he,{name:He,size:16}),e[2]||(e[2]=H(" docs "))])])]),T("div",ze,[v(f,{title:"Basic",class:"max-w-lg"},{code:E(({html:h,js:s})=>[H(F(h(`
					<n-space style="margin-bottom: 12px">
						<n-switch v-model:value="showRail" />
						Show Rail
						<n-switch v-model:value="showBackground" />
						Show Background
					</n-space>
					<n-anchor :show-rail="showRail" :show-background="showBackground">
						<n-anchor-link title="Demos" href="#Demos">
							<n-anchor-link title="Basic" href="#basic.vue" />
							<n-anchor-link title="Ignore-Gap" href="#ignore-gap.vue" />
							<n-anchor-link title="Affix" href="#affix.vue" />
							<n-anchor-link title="Scroll To" href="#scrollto.vue" />
						</n-anchor-link>
						<n-anchor-link title="API" href="#API" />
					</n-anchor>
					`))+" "+F(s(`
						const showRail = ref(true)
						const showBackground = ref(true)
					`)),1)]),default:E(()=>[v(p(we),{style:{"margin-bottom":"12px"}},{default:E(()=>[v(p(G),{value:n.value,"onUpdate:value":e[0]||(e[0]=h=>n.value=h)},null,8,["value"]),e[4]||(e[4]=H(" Show Rail ")),v(p(G),{value:o.value,"onUpdate:value":e[1]||(e[1]=h=>o.value=h)},null,8,["value"]),e[5]||(e[5]=H(" Show Background "))]),_:1}),v(p(Te),{"show-rail":n.value,"show-background":o.value},{default:E(()=>[v(p(R),{title:"Demos",href:"#Demos"},{default:E(()=>[v(p(R),{title:"Basic",href:"#basic.vue"}),v(p(R),{title:"Ignore-Gap",href:"#ignore-gap.vue"}),v(p(R),{title:"Affix",href:"#affix.vue"}),v(p(R),{title:"Scroll To",href:"#scrollto.vue"})]),_:1}),v(p(R),{title:"API",href:"#API"})]),_:1},8,["show-rail","show-background"])]),_:1})])])}}});export{Ue as default};
