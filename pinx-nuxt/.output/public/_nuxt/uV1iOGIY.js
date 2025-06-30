import{_ as ie}from"./BvYks_Wu.js";import{ay as u,az as N,aA as z,aB as R,aZ as A,aC as se,d as M,ab as a,aD as ae,aG as O,bm as le,aH as D,dT as ce,aK as ue,ar as de,aE as P,b4 as T,b1 as pe,as as fe,at as me,p as I,aN as m,aP as ve,aU as F,av as E,dU as he,q as H,c as be,o as ge,a as y,e as t,b as f,_ as C,w as o,u as r,B as k,t as B,f as xe}from"./D0txxWEs.js";import{g as we}from"./Bk_rJcZu.js";import{F as Se}from"./CPf-hSIC.js";import{N as $}from"./rUfs8Wzf.js";import{N as W}from"./DOAD6IcM.js";import{N as U}from"./Swo0ieyx.js";import{N as g}from"./ClihV0PT.js";import"./zjvAu2Mm.js";import"./DbSfpayJ.js";const _e=u("steps",`
 width: 100%;
 display: flex;
`,[u("step",`
 position: relative;
 display: flex;
 flex: 1;
 `,[N("disabled","cursor: not-allowed"),N("clickable",`
 cursor: pointer;
 `),z("&:last-child",[u("step-splitor","display: none;")])]),u("step-splitor",`
 background-color: var(--n-splitor-color);
 margin-top: calc(var(--n-step-header-font-size) / 2);
 height: 1px;
 flex: 1;
 align-self: flex-start;
 margin-left: 12px;
 margin-right: 12px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),u("step-content","flex: 1;",[u("step-content-header",`
 color: var(--n-header-text-color);
 margin-top: calc(var(--n-indicator-size) / 2 - var(--n-step-header-font-size) / 2);
 line-height: var(--n-step-header-font-size);
 font-size: var(--n-step-header-font-size);
 position: relative;
 display: flex;
 font-weight: var(--n-step-header-font-weight);
 margin-left: 9px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[R("title",`
 white-space: nowrap;
 flex: 0;
 `)]),R("description",`
 color: var(--n-description-text-color);
 margin-top: 12px;
 margin-left: 9px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),u("step-indicator",`
 background-color: var(--n-indicator-color);
 box-shadow: 0 0 0 1px var(--n-indicator-border-color);
 height: var(--n-indicator-size);
 width: var(--n-indicator-size);
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `,[u("step-indicator-slot",`
 position: relative;
 width: var(--n-indicator-icon-size);
 height: var(--n-indicator-icon-size);
 font-size: var(--n-indicator-icon-size);
 line-height: var(--n-indicator-icon-size);
 `,[R("index",`
 display: inline-block;
 text-align: center;
 position: absolute;
 left: 0;
 top: 0;
 white-space: nowrap;
 font-size: var(--n-indicator-index-font-size);
 width: var(--n-indicator-icon-size);
 height: var(--n-indicator-icon-size);
 line-height: var(--n-indicator-icon-size);
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[A()]),u("icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[A()]),u("base-icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[A()])])]),N("vertical","flex-direction: column;",[se("show-description",[z(">",[u("step","padding-bottom: 8px;")])]),z(">",[u("step","margin-bottom: 16px;",[z("&:last-child","margin-bottom: 0;"),z(">",[u("step-indicator",[z(">",[u("step-splitor",`
 position: absolute;
 bottom: -8px;
 width: 1px;
 margin: 0 !important;
 left: calc(var(--n-indicator-size) / 2);
 height: calc(100% - var(--n-indicator-size));
 `)])]),u("step-content",[R("description","margin-top: 8px;")])])])])])]);function ze(e,i){return typeof e!="object"||e===null||Array.isArray(e)?null:(e.props||(e.props={}),e.props.internalIndex=i+1,e)}function Ie(e){return e.map((i,s)=>ze(i,s))}const ye=Object.assign(Object.assign({},D.props),{current:Number,status:{type:String,default:"process"},size:{type:String,default:"medium"},vertical:Boolean,"onUpdate:current":[Function,Array],onUpdateCurrent:[Function,Array]}),K=de("n-steps"),j=M({name:"Steps",props:ye,slots:Object,setup(e,{slots:i}){const{mergedClsPrefixRef:s,mergedRtlRef:l}=O(e),v=le("Steps",l,s),b=D("Steps","-steps",_e,ce,e,s);return ue(K,{props:e,mergedThemeRef:b,mergedClsPrefixRef:s,stepsSlots:i}),{mergedClsPrefix:s,rtlEnabled:v}},render(){const{mergedClsPrefix:e}=this;return a("div",{class:[`${e}-steps`,this.rtlEnabled&&`${e}-steps--rtl`,this.vertical&&`${e}-steps--vertical`]},Ie(ae(we(this))))}}),Ce={status:String,title:String,description:String,disabled:Boolean,internalIndex:{type:Number,default:0}},h=M({name:"Step",props:Ce,slots:Object,setup(e){const i=fe(K,null);i||me("step","`n-step` must be placed inside `n-steps`.");const{inlineThemeDisabled:s}=O(),{props:l,mergedThemeRef:v,mergedClsPrefixRef:b,stepsSlots:n}=i,x=I(()=>l.vertical),p=I(()=>{const{status:c}=e;if(c)return c;{const{internalIndex:d}=e,{current:_}=l;if(_===void 0)return"process";if(d<_)return"finish";if(d===_)return l.status||"process";if(d>_)return"wait"}return"process"}),w=I(()=>{const{value:c}=p,{size:d}=l,{common:{cubicBezierEaseInOut:_},self:{stepHeaderFontWeight:q,[m("stepHeaderFontSize",d)]:Z,[m("indicatorIndexFontSize",d)]:J,[m("indicatorSize",d)]:Q,[m("indicatorIconSize",d)]:X,[m("indicatorTextColor",c)]:Y,[m("indicatorBorderColor",c)]:ee,[m("headerTextColor",c)]:te,[m("splitorColor",c)]:ne,[m("indicatorColor",c)]:re,[m("descriptionTextColor",c)]:oe}}=v.value;return{"--n-bezier":_,"--n-description-text-color":oe,"--n-header-text-color":te,"--n-indicator-border-color":ee,"--n-indicator-color":re,"--n-indicator-icon-size":X,"--n-indicator-index-font-size":J,"--n-indicator-size":Q,"--n-indicator-text-color":Y,"--n-splitor-color":ne,"--n-step-header-font-size":Z,"--n-step-header-font-weight":q}}),S=s?ve("step",I(()=>{const{value:c}=p,{size:d}=l;return`${c[0]}${d[0]}`}),w,l):void 0,G=I(()=>{if(e.disabled)return;const{onUpdateCurrent:c,"onUpdate:current":d}=l;return c||d?()=>{c&&F(c,e.internalIndex),d&&F(d,e.internalIndex)}:void 0});return{stepsSlots:n,mergedClsPrefix:b,vertical:x,mergedStatus:p,handleStepClick:G,cssVars:s?void 0:w,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender}},render(){const{mergedClsPrefix:e,onRender:i,handleStepClick:s,disabled:l}=this,v=P(this.$slots.default,b=>{const n=b||this.description;return n?a("div",{class:`${e}-step-content__description`},n):null});return i==null||i(),a("div",{class:[`${e}-step`,l&&`${e}-step--disabled`,!l&&s&&`${e}-step--clickable`,this.themeClass,v&&`${e}-step--show-description`,`${e}-step--${this.mergedStatus}-status`],style:this.cssVars,onClick:s},a("div",{class:`${e}-step-indicator`},a("div",{class:`${e}-step-indicator-slot`},a(pe,null,{default:()=>P(this.$slots.icon,b=>{const{mergedStatus:n,stepsSlots:x}=this;return n==="finish"||n==="error"?n==="finish"?a(E,{clsPrefix:e,key:"finish"},{default:()=>T(x["finish-icon"],()=>[a(Se,null)])}):n==="error"?a(E,{clsPrefix:e,key:"error"},{default:()=>T(x["error-icon"],()=>[a(he,null)])}):null:b||a("div",{key:this.internalIndex,class:`${e}-step-indicator-slot__index`},this.internalIndex)})})),this.vertical?a("div",{class:`${e}-step-splitor`}):null),a("div",{class:`${e}-step-content`},a("div",{class:`${e}-step-content-header`},a("div",{class:`${e}-step-content-header__title`},T(this.$slots.title,()=>[this.title])),this.vertical?null:a("div",{class:`${e}-step-splitor`})),v))}}),Re={class:"page"},ke={class:"page-header"},Be={class:"links"},$e={href:"https://www.naiveui.com/en-US/light/components/steps",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},Ne={class:"components-list"},Ae="tabler:external-link",V="ion:arrow-back",L="ion:arrow-forward",Te=M({__name:"Steps",setup(e){const i=H(1),s=H("process");function l(){i.value===null?i.value=1:i.value>=4?i.value=null:i.value++}function v(){i.value===0?i.value=null:i.value===null?i.value=4:i.value--}return(b,n)=>{const x=ie;return ge(),be("div",Re,[y("div",ke,[n[3]||(n[3]=y("div",{class:"title"},"Steps",-1)),y("div",Be,[y("a",$e,[t(C,{name:Ae,size:16}),n[2]||(n[2]=f(" docs "))])])]),y("div",Ne,[t(x,{title:"Basic"},{code:o(({html:p,js:w})=>[f(B(p(`
					<n-space vertical>
						<n-space class="mb-4">
							<n-button-group>
								<n-button @click="prev">
									<template #icon>
										<n-icon>
											<arrow-back />
										</n-icon>
									</template>
								</n-button>
								<n-button @click="next">
									<template #icon>
										<n-icon>
											<arrow-forward />
										</n-icon>
									</template>
								</n-button>
							</n-button-group>
							<n-radio-group v-model:value="currentStatus" size="medium" name="basic">
								<n-radio-button value="error">Error</n-radio-button>
								<n-radio-button value="process">Process</n-radio-button>
								<n-radio-button value="wait">Wait</n-radio-button>
								<n-radio-button value="finish">Finish</n-radio-button>
							</n-radio-group>
						</n-space>

						<n-steps :current="currentRef as number" :status="currentStatus">
							<n-step
								title="I Me Mine"
								description="All through the day, I me mine I me mine, I me mine"
							/>
							<n-step
								title="Let It Be"
								description="When I find myself in times of trouble Mother Mary comes to me"
							/>
							<n-step
								title="Come Together"
								description="Here come old flat top He come grooving up slowly"
							/>
							<n-step
								title="Something"
								description="Something in the way she moves Attracts me like no other lover"
							/>
						</n-steps>
					</n-space>
					`))+" "+B(w(`
						import { ArrowBack, ArrowForward } from "@vicons/ionicons5"
						import { ref } from "vue"

						const currentRef = ref<
umber | null>(1)
						const currentStatus = ref<StepsProps["status"]>("process")
						function next() {
							if (currentRef.value === null) currentRef.value = 1
							else if (currentRef.value >= 4) currentRef.value = null
							else currentRef.value++
						}
						function prev() {
							if (currentRef.value === 0) currentRef.value = null
							else if (currentRef.value === null) currentRef.value = 4
							else currentRef.value--
						}
						`)),1)]),default:o(()=>[t(r($),{vertical:""},{default:o(()=>[t(r($),{class:"mb-4"},{default:o(()=>[t(r(W),null,{default:o(()=>[t(r(k),{onClick:v},{icon:o(()=>[t(C,{name:V})]),_:1}),t(r(k),{onClick:l},{icon:o(()=>[t(C,{name:L})]),_:1})]),_:1}),t(r(U),{value:s.value,"onUpdate:value":n[0]||(n[0]=p=>s.value=p),size:"medium",name:"basic"},{default:o(()=>[t(r(g),{value:"error"},{default:o(()=>n[4]||(n[4]=[f("Error")])),_:1,__:[4]}),t(r(g),{value:"process"},{default:o(()=>n[5]||(n[5]=[f("Process")])),_:1,__:[5]}),t(r(g),{value:"wait"},{default:o(()=>n[6]||(n[6]=[f("Wait")])),_:1,__:[6]}),t(r(g),{value:"finish"},{default:o(()=>n[7]||(n[7]=[f("Finish")])),_:1,__:[7]})]),_:1},8,["value"])]),_:1}),t(r(j),{current:i.value,status:s.value},{default:o(()=>[t(r(h),{title:"I Me Mine",description:"All through the day, I me mine I me mine, I me mine"}),t(r(h),{title:"Let It Be",description:"When I find myself in times of trouble Mother Mary comes to me"}),t(r(h),{title:"Come Together",description:"Here come old flat top He come grooving up slowly"}),t(r(h),{title:"Something",description:"Something in the way she moves Attracts me like no other lover"})]),_:1},8,["current","status"])]),_:1})]),_:1}),t(x,{title:"Vertical"},{code:o(({html:p,js:w})=>[f(B(p(`
					<n-space vertical>
						<n-steps vertical :current="current as number" :status="currentStatus">
							<n-step
								title="I Me Mine"
								description="All through the day, I me mine I me mine, I me mine"
							/>
							<n-step
								title="Let It Be"
								description="When I find myself in times of trouble Mother Mary comes to me"
							/>
							<n-step title="Break" />
							<n-step
								title="Come Together"
								description="Here come old flat top He come grooving up slowly"
							/>
							<n-step
								title="Something"
								description="Something in the way she moves Attracts me like no other lover"
							/>
						</n-steps>
						<n-space>
							<n-button-group>
								<n-button @click="prev">
									<template #icon>
										<n-icon>
											<arrow-back />
										</n-icon>
									</template>
								</n-button>
								<n-button @click="next">
									<template #icon>
										<n-icon>
											<arrow-forward />
										</n-icon>
									</template>
								</n-button>
							</n-button-group>
							<n-radio-group v-model:value="currentStatus" size="medium" name="vertical">
								<n-radio-button value="error">Error</n-radio-button>
								<n-radio-button value="process">Process</n-radio-button>
								<n-radio-button value="wait">Wait</n-radio-button>
								<n-radio-button value="finish">Finish</n-radio-button>
							</n-radio-group>
						</n-space>
					</n-space>
					`))+" "+B(w(`
						import { ArrowBack, ArrowForward } from "@vicons/ionicons5"
						import { ref } from "vue"

						const currentRef = ref<
umber | null>(1)
						const currentStatus = ref<StepsProps["status"]>("process")
						function next() {
							if (currentRef.value === null) currentRef.value = 1
							else if (currentRef.value >= 4) currentRef.value = null
							else currentRef.value++
						}
						function prev() {
							if (currentRef.value === 0) currentRef.value = null
							else if (currentRef.value === null) currentRef.value = 4
							else currentRef.value--
						}
						`)),1)]),default:o(()=>[t(r($),{vertical:""},{default:o(()=>[t(r(j),{vertical:"",current:i.value,status:s.value},{default:o(()=>[t(r(h),{title:"I Me Mine",description:"All through the day, I me mine I me mine, I me mine"}),t(r(h),{title:"Let It Be",description:"When I find myself in times of trouble Mother Mary comes to me"}),t(r(h),{title:"Break"}),t(r(h),{title:"Come Together",description:"Here come old flat top He come grooving up slowly"}),t(r(h),{title:"Something",description:"Something in the way she moves Attracts me like no other lover"})]),_:1},8,["current","status"]),t(r($),null,{default:o(()=>[t(r(W),null,{default:o(()=>[t(r(k),{onClick:v},{icon:o(()=>[t(C,{name:V})]),_:1}),t(r(k),{onClick:l},{icon:o(()=>[t(C,{name:L})]),_:1})]),_:1}),t(r(U),{value:s.value,"onUpdate:value":n[1]||(n[1]=p=>s.value=p),size:"medium",name:"vertical"},{default:o(()=>[t(r(g),{value:"error"},{default:o(()=>n[8]||(n[8]=[f("Error")])),_:1,__:[8]}),t(r(g),{value:"process"},{default:o(()=>n[9]||(n[9]=[f("Process")])),_:1,__:[9]}),t(r(g),{value:"wait"},{default:o(()=>n[10]||(n[10]=[f("Wait")])),_:1,__:[10]}),t(r(g),{value:"finish"},{default:o(()=>n[11]||(n[11]=[f("Finish")])),_:1,__:[11]})]),_:1},8,["value"])]),_:1})]),_:1})]),_:1})])])}}}),Oe=xe(Te,[["__scopeId","data-v-3f0a7ec6"]]);export{Oe as default};
