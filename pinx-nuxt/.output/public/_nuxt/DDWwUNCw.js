import{_ as X}from"./vPp7vp59.js";import{d as N,q as w,aC as Q,ay as F,b6 as Y,a5 as q,a9 as k,co as Z,aB as ee,bl as te,p as W,ax as oe,y as ne,aR as re,ah as ie,be as ae,J as le,ap as b,aL as V,as as H,ao as A,at as M,cX as G,au as se,aw as J,az as ce,dV as ue,c as fe,o as de,a as T,e as v,b as z,_ as he,w as E,u as p,t as K}from"./BfwEk-Nq.js";import{N as ve,a as pe,b as ge}from"./Cpw8qc6C.js";import{a as me,b as be}from"./hdXbscZm.js";import{t as ke}from"./Baf19Nee.js";import{u as xe}from"./CJbG4D_o.js";import{N as we}from"./BS7aab3v.js";import{N as U}from"./Dy7vW8Ky.js";import"./CPRgsAKX.js";import"./D-rSACz3.js";import"./I0uDU2Ta.js";import"./Bk_rJcZu.js";const I=ee("n-anchor"),ye={title:String,href:String},B=N({name:"AnchorLink",props:ye,setup(t,{slots:n}){const o=w(null),a=Q(I),e=F(t,"href"),f=Y(()=>e.value&&e.value===a.activeHref.value);me(I,"collectedLinkHrefs",e),be(I,"titleEls",()=>o.value),q(f,s=>{s&&o.value&&a.updateBarPosition(o.value)});function h(){t.href!==void 0&&a.setActiveHref(t.href)}return()=>{var s;const{value:g}=a.mergedClsPrefix;return k("div",{class:[`${g}-anchor-link`,f.value&&`${g}-anchor-link--active`]},k("a",{ref:o,class:[`${g}-anchor-link__title`],href:t.href,title:Z(t.title),onClick:h},t.title),(s=n.default)===null||s===void 0?void 0:s.call(n))}}});function Re(t,n){const{top:o,height:a}=t.getBoundingClientRect(),e=n instanceof HTMLElement?n.getBoundingClientRect().top:0;return{top:o-e,height:a}}const D={type:{type:String,default:"rail"},showRail:{type:Boolean,default:!0},showBackground:{type:Boolean,default:!0},bound:{type:Number,default:12},internalScrollable:Boolean,ignoreGap:Boolean,offsetTarget:[String,Object,Function]},Be=ae(D),Ce=N({name:"BaseAnchor",props:Object.assign(Object.assign({},D),{mergedClsPrefix:{type:String,required:!0}}),setup(t){const n=[],o=[],a=w(null),e=w(null),f=w(null),h=w(null),s=W(()=>t.type==="block"),g=W(()=>!s.value&&t.showRail);function x(){const{value:d}=f,{value:c}=e;d&&(d.style.transition="none"),c&&(c.style.transition="none"),o&&o.forEach(i=>{i.style.transition="none"}),le(()=>{const{value:i}=f,{value:r}=e;i&&(i.offsetWidth,i.style.transition=""),r&&(r.offsetWidth,r.style.transition=""),o&&o.forEach(m=>{m.offsetWidth,m.style.transition=""})})}function j(d,c=!0){const{value:i}=f,{value:r}=e,{value:m}=h;if(!m||!i)return;c||(i.style.transition="none",r&&(r.style.transition="none"));const{offsetHeight:R,offsetWidth:O}=d,{top:S,left:u}=d.getBoundingClientRect(),{top:l,left:P}=m.getBoundingClientRect(),$=S-l,L=u-P;i.style.top=`${$}px`,i.style.height=`${R}px`,r&&(r.style.top=`${$}px`,r.style.height=`${R}px`,r.style.maxWidth=`${O+L}px`),i.offsetHeight,r&&r.offsetHeight,c||(i.style.transition="",r&&(r.style.transition=""))}const C=ke(()=>{_(!0)},128);function y(d,c=!0){const i=/^#([^#]+)$/.exec(d);if(!i)return;const r=document.getElementById(i[1]);r&&(a.value=d,r.scrollIntoView(),c||x(),C())}function _(d=!0){var c;const i=[],r=xe((c=t.offsetTarget)!==null&&c!==void 0?c:document);n.forEach(u=>{const l=/#([^#]+)$/.exec(u);if(!l)return;const P=document.getElementById(l[1]);if(P&&r){const{top:$,height:L}=Re(P,r);i.push({top:$,height:L,href:u})}}),i.sort((u,l)=>u.top>l.top?1:(u.top===l.top&&u.height<l.height,-1));const m=a.value,{bound:R,ignoreGap:O}=t,S=i.reduce((u,l)=>l.top+l.height<0?O?l:u:l.top<=R?u===null?l:l.top===u.top?l.href===m?l:u:l.top>u.top?l:u:u,null);d||x(),S?a.value=S.href:a.value=null}return oe(I,{activeHref:a,mergedClsPrefix:F(t,"mergedClsPrefix"),updateBarPosition:j,setActiveHref:y,collectedLinkHrefs:n,titleEls:o}),ne(()=>{document.addEventListener("scroll",C,!0),y(window.location.hash),_(!1)}),re(()=>{y(window.location.hash),_(!1)}),ie(()=>{document.removeEventListener("scroll",C,!0)}),q(a,d=>{if(d===null){const{value:c}=e;c&&!s.value&&(c.style.maxWidth="0")}}),{selfRef:h,barRef:f,slotRef:e,setActiveHref:y,activeHref:a,isBlockType:s,mergedShowRail:g}},render(){var t;const{mergedClsPrefix:n,mergedShowRail:o,isBlockType:a,$slots:e}=this,f=k("div",{class:[`${n}-anchor`,a&&`${n}-anchor--block`,o&&`${n}-anchor--show-rail`],ref:"selfRef"},o&&this.showBackground?k("div",{ref:"slotRef",class:`${n}-anchor-link-background`}):null,o?k("div",{class:`${n}-anchor-rail`},k("div",{ref:"barRef",class:[`${n}-anchor-rail__bar`,this.activeHref!==null&&`${n}-anchor-rail__bar--active`]})):null,(t=e.default)===null||t===void 0?void 0:t.call(e));return this.internalScrollable?k(te,null,{default:()=>f}):f}}),_e=b("anchor",`
 position: relative;
`,[V("block",`
 padding-left: var(--n-rail-width);
 `,[b("anchor-link",[A("+, >",[b("anchor-link",`
 margin-top: .5em;
 `)])]),b("anchor-link-background",`
 max-width: 0;
 border-top-right-radius: 10.5px;
 border-bottom-right-radius: 10.5px;
 `),V("show-rail",[A(">",[b("anchor-link","padding-left: 0;")])])]),H("block",[b("anchor-link",`
 margin-bottom: 4px;
 padding: 2px 8px;
 transition: background-color .3s var(--n-bezier);
 background-color: transparent;
 border-radius: var(--n-link-border-radius);
 `,[H("active",`
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
 `,[H("active",{backgroundColor:"var(--n-rail-color-active)"})])]),b("anchor-link",`
 padding: var(--n-link-padding);
 position: relative;
 line-height: 1.5;
 font-size: var(--n-link-font-size);
 min-height: 1.5em;
 display: flex;
 flex-direction: column;
 `,[H("active",[A(">",[M("title",`
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
 `,[A("&:hover, &:focus",`
 color: var(--n-link-text-color-hover);
 `),A("&:active",`
 color: var(--n-link-text-color-pressed);
 `)])])]),Ae=Object.assign(Object.assign(Object.assign(Object.assign({},J.props),{affix:Boolean}),ge),D),Te=N({name:"Anchor",props:Ae,setup(t,{slots:n}){const{mergedClsPrefixRef:o,inlineThemeDisabled:a}=se(t),e=J("Anchor","-anchor",_e,ue,t,o),f=w(null),h=W(()=>{const{self:{railColor:g,linkColor:x,railColorActive:j,linkTextColor:C,linkTextColorHover:y,linkTextColorPressed:_,linkTextColorActive:d,linkFontSize:c,railWidth:i,linkPadding:r,borderRadius:m},common:{cubicBezierEaseInOut:R}}=e.value;return{"--n-link-border-radius":m,"--n-link-color":x,"--n-link-font-size":c,"--n-link-text-color":C,"--n-link-text-color-hover":y,"--n-link-text-color-active":d,"--n-link-text-color-pressed":_,"--n-link-padding":r,"--n-bezier":R,"--n-rail-color":g,"--n-rail-color-active":j,"--n-rail-width":i}}),s=a?ce("anchor",void 0,h,t):void 0;return{scrollTo(g){var x;(x=f.value)===null||x===void 0||x.setActiveHref(g)},renderAnchor:()=>(s==null||s.onRender(),k(Ce,Object.assign({ref:f,style:a?void 0:h.value,class:s==null?void 0:s.themeClass.value},G(t,Be),{mergedClsPrefix:o.value}),n))}},render(){return this.affix?k(ve,Object.assign({},G(this,pe)),{default:this.renderAnchor}):this.renderAnchor()}}),Ee={class:"page"},Se={class:"page-header"},Pe={class:"links"},$e={href:"https://www.naiveui.com/en-US/light/components/anchor",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},He={class:"components-list"},ze="tabler:external-link",Fe=N({__name:"Anchor",setup(t){const n=w(!0),o=w(!0);return(a,e)=>{const f=X;return de(),fe("div",Ee,[T("div",Se,[e[3]||(e[3]=T("div",{class:"title"},"Anchor",-1)),T("div",Pe,[T("a",$e,[v(he,{name:ze,size:16}),e[2]||(e[2]=z(" docs "))])])]),T("div",He,[v(f,{title:"Basic",class:"max-w-lg"},{code:E(({html:h,js:s})=>[z(K(h(`
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
					`))+" "+K(s(`
						const showRail = ref(true)
						const showBackground = ref(true)
					`)),1)]),default:E(()=>[v(p(we),{style:{"margin-bottom":"12px"}},{default:E(()=>[v(p(U),{value:n.value,"onUpdate:value":e[0]||(e[0]=h=>n.value=h)},null,8,["value"]),e[4]||(e[4]=z(" Show Rail ")),v(p(U),{value:o.value,"onUpdate:value":e[1]||(e[1]=h=>o.value=h)},null,8,["value"]),e[5]||(e[5]=z(" Show Background "))]),_:1,__:[4,5]}),v(p(Te),{"show-rail":n.value,"show-background":o.value},{default:E(()=>[v(p(B),{title:"Demos",href:"#Demos"},{default:E(()=>[v(p(B),{title:"Basic",href:"#basic.vue"}),v(p(B),{title:"Ignore-Gap",href:"#ignore-gap.vue"}),v(p(B),{title:"Affix",href:"#affix.vue"}),v(p(B),{title:"Scroll To",href:"#scrollto.vue"})]),_:1}),v(p(B),{title:"API",href:"#API"})]),_:1},8,["show-rail","show-background"])]),_:1})])])}}});export{Fe as default};
