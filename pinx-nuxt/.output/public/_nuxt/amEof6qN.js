import{_ as T}from"./BLzEf9tb.js";import{d as H,ac as o,aB as g,az as P,aC as v,av as V,aH as I,aI as M,bn as L,aL as O,q as D,ec as j,ai as G,o as F,c as U,a as m,e as t,_ as q,b as n,w as a,u as s,B as A,L as W,C as J,ea as K,eb as N,t as E}from"./BboPWEKj.js";import{N as Q,a as h}from"./GXG9YiGb.js";import{N as k}from"./BM2MUOcV.js";import{N as X}from"./CV6rs4kW.js";import"./BmSAZQUJ.js";import"./BoIEE7Tp.js";import"./Bk_rJcZu.js";const Y=H({name:"ArrowBack",render(){return o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},o("path",{d:"M0 0h24v24H0V0z",fill:"none"}),o("path",{d:"M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"}))}}),Z=g([P("page-header-header",`
 margin-bottom: 20px;
 `),P("page-header",`
 display: flex;
 align-items: center;
 justify-content: space-between;
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[v("main",`
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 `),v("back",`
 display: flex;
 margin-right: 16px;
 font-size: var(--n-back-size);
 cursor: pointer;
 color: var(--n-back-color);
 transition: color .3s var(--n-bezier);
 `,[g("&:hover","color: var(--n-back-color-hover);"),g("&:active","color: var(--n-back-color-pressed);")]),v("avatar",`
 display: flex;
 margin-right: 12px
 `),v("title",`
 margin-right: 16px;
 transition: color .3s var(--n-bezier);
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),v("subtitle",`
 font-size: 14px;
 transition: color .3s var(--n-bezier);
 color: var(--n-subtitle-text-color);
 `)]),P("page-header-content",`
 font-size: var(--n-font-size);
 `,[g("&:not(:first-child)","margin-top: 20px;")]),P("page-header-footer",`
 font-size: var(--n-font-size);
 `,[g("&:not(:first-child)","margin-top: 20px;")])]),ee=Object.assign(Object.assign({},M.props),{title:String,subtitle:String,extra:String,onBack:Function}),te=H({name:"PageHeader",props:ee,slots:Object,setup(r){const{mergedClsPrefixRef:i,mergedRtlRef:c,inlineThemeDisabled:d}=I(r),b=M("PageHeader","-page-header",Z,j,r,i),e=L("PageHeader",c,i),p=D(()=>{const{self:{titleTextColor:u,subtitleTextColor:x,backColor:_,fontSize:w,titleFontSize:z,backSize:f,titleFontWeight:B,backColorHover:y,backColorPressed:C},common:{cubicBezierEaseInOut:S}}=b.value;return{"--n-title-text-color":u,"--n-title-font-size":z,"--n-title-font-weight":B,"--n-font-size":w,"--n-back-size":f,"--n-subtitle-text-color":x,"--n-back-color":_,"--n-back-color-hover":y,"--n-back-color-pressed":C,"--n-bezier":S}}),l=d?O("page-header",void 0,p,r):void 0;return{rtlEnabled:e,mergedClsPrefix:i,cssVars:d?void 0:p,themeClass:l?.themeClass,onRender:l?.onRender}},render(){var r;const{onBack:i,title:c,subtitle:d,extra:b,mergedClsPrefix:e,cssVars:p,$slots:l}=this;(r=this.onRender)===null||r===void 0||r.call(this);const{title:u,subtitle:x,extra:_,default:w,header:z,avatar:f,footer:B,back:y}=l,C=i,S=c||u,R=d||x,$=b||_;return o("div",{style:p,class:[`${e}-page-header-wrapper`,this.themeClass,this.rtlEnabled&&`${e}-page-header-wrapper--rtl`]},z?o("div",{class:`${e}-page-header-header`,key:"breadcrumb"},z()):null,(C||f||S||R||$)&&o("div",{class:`${e}-page-header`,key:"header"},o("div",{class:`${e}-page-header__main`,key:"back"},C?o("div",{class:`${e}-page-header__back`,onClick:i},y?y():o(V,{clsPrefix:e},{default:()=>o(Y,null)})):null,f?o("div",{class:`${e}-page-header__avatar`},f()):null,S?o("div",{class:`${e}-page-header__title`,key:"title"},c||u()):null,R?o("div",{class:`${e}-page-header__subtitle`,key:"subtitle"},d||x()):null),$?o("div",{class:`${e}-page-header__extra`},b||_()):null),w?o("div",{class:`${e}-page-header-content`,key:"content"},w()):null,B?o("div",{class:`${e}-page-header-footer`,key:"footer"},B()):null)}}),ae={class:"page"},se={class:"page-header"},oe={class:"links"},le={href:"https://www.naiveui.com/en-US/light/components/page-header",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},ne={class:"components-list"},re="tabler:external-link",ge=H({__name:"PageHeader",setup(r){const i=G();function c(){i.info("[onBack]")}const d=[{label:"More episodes",key:"1"},{label:"More episodes",key:"2"},{label:"More episodes",key:"3"}];return(b,e)=>{const p=T;return F(),U("div",ae,[m("div",se,[e[1]||(e[1]=m("div",{class:"title"},"Page Header",-1)),m("div",oe,[m("a",le,[t(q,{name:re,size:16}),e[0]||(e[0]=n(" docs ",-1))])])]),m("div",ne,[t(p,{title:"Basic"},{code:a(({html:l,js:u})=>[n(E(l(`
					<n-page-header subtitle="A podcast to improve designs" @back="handleBack">
						<n-grid :cols="5">
							<n-gi>
								<n-statistic label="Episodes" value="125" />
							</n-gi>
							<n-gi>
								<n-statistic label="Guests" value="22" />
							</n-gi>
							<n-gi>
								<n-statistic label="Apologies" value="36" />
							</n-gi>
							<n-gi>
								<n-statistic label="Topics" value="83" />
							</n-gi>
							<n-gi>
								<n-statistic label="Reference Links" value="2,346" />
							</n-gi>
						</n-grid>
						<template #title>
							<a href="#" style="text-decoration: none; color: inherit">Super Podcast</a>
						</template>
						<template #header>
							<n-breadcrumb>
								<n-breadcrumb-item>Podcast</n-breadcrumb-item>
								<n-breadcrumb-item>Best Collection</n-breadcrumb-item>
								<n-breadcrumb-item>Ultimate Best Collection</n-breadcrumb-item>
								<n-breadcrumb-item>Super Podcast</n-breadcrumb-item>
							</n-breadcrumb>
						</template>
						<template #avatar>
							<n-avatar :img-props="{ alt: 'avatar' }" src="https://picsum.photos/seed/6Dz4vOn/160/160" />
						</template>
						<template #extra>
							<n-space>
								<n-button>Refresh</n-button>
								<n-dropdown :options placement="bottom-start">
									<n-button :bordered="false" style="padding: 0 4px">···</n-button>
								</n-dropdown>
							</n-space>
						</template>
						<template #footer>As of April 3, 2021</template>
					</n-page-header>
					`))+" "+E(u(`
						const message = useMessage()
						function handleBack() {
							message.info("[onBack]")
						}
						const options = [
							{
								label: "More episodes",
								key: "1"
							},
							{
								label: "More episodes",
								key: "2"
							},
							{
								label: "More episodes",
								key: "3"
							}
						]
						`)),1)]),default:a(()=>[t(s(te),{subtitle:"A podcast to improve designs",onBack:c},{title:a(()=>[...e[2]||(e[2]=[m("a",{href:"#",style:{"text-decoration":"none",color:"inherit"}},"Super Podcast",-1)])]),header:a(()=>[t(s(K),null,{default:a(()=>[t(s(N),null,{default:a(()=>[...e[3]||(e[3]=[n("Podcast",-1)])]),_:1}),t(s(N),null,{default:a(()=>[...e[4]||(e[4]=[n("Best Collection",-1)])]),_:1}),t(s(N),null,{default:a(()=>[...e[5]||(e[5]=[n("Ultimate Best Collection",-1)])]),_:1}),t(s(N),null,{default:a(()=>[...e[6]||(e[6]=[n("Super Podcast",-1)])]),_:1})]),_:1})]),avatar:a(()=>[t(s(J),{"img-props":{alt:"avatar"},src:"https://picsum.photos/seed/6Dz4vOn/160/160"})]),extra:a(()=>[t(s(X),null,{default:a(()=>[t(s(A),null,{default:a(()=>[...e[7]||(e[7]=[n("Refresh",-1)])]),_:1}),t(s(W),{options:d,placement:"bottom-start"},{default:a(()=>[t(s(A),{bordered:!1,style:{padding:"0 4px"}},{default:a(()=>[...e[8]||(e[8]=[n("···",-1)])]),_:1})]),_:1})]),_:1})]),footer:a(()=>[...e[9]||(e[9]=[n("As of April 3, 2021",-1)])]),default:a(()=>[t(s(Q),{cols:5},{default:a(()=>[t(s(h),null,{default:a(()=>[t(s(k),{label:"Episodes",value:"125"})]),_:1}),t(s(h),null,{default:a(()=>[t(s(k),{label:"Guests",value:"22"})]),_:1}),t(s(h),null,{default:a(()=>[t(s(k),{label:"Apologies",value:"36"})]),_:1}),t(s(h),null,{default:a(()=>[t(s(k),{label:"Topics",value:"83"})]),_:1}),t(s(h),null,{default:a(()=>[t(s(k),{label:"Reference Links",value:"2,346"})]),_:1})]),_:1})]),_:1})]),_:1})])])}}});export{ge as default};
