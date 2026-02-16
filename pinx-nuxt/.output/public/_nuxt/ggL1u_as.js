import{_ as ie}from"./BLzEf9tb.js";import{az as u,aA as N,aB as I,aC as _,a_ as A,aD as se,d as T,ac as a,aE as ae,aH as O,bn as le,aI as D,dU as ce,aR as ue,as as de,aF as F,b5 as M,b2 as pe,at as fe,au as me,aL as ve,av as P,dV as he,q as y,aS as m,aV as E,o as be,c as ge,a as C,e as t,_ as R,b as f,w as o,u as r,B as k,t as B,s as H,f as xe}from"./BboPWEKj.js";import{g as Se}from"./Bk_rJcZu.js";import{F as we}from"./BY5EArDQ.js";import{N as $}from"./CV6rs4kW.js";import{N as W}from"./CncItRYq.js";import{N as j}from"./BT9BDkx6.js";import{N as g}from"./CN5f3C3W.js";import"./BmSAZQUJ.js";import"./BoIEE7Tp.js";const ze=u("steps",`
 width: 100%;
 display: flex;
`,[u("step",`
 position: relative;
 display: flex;
 flex: 1;
 `,[N("disabled","cursor: not-allowed"),N("clickable",`
 cursor: pointer;
 `),I("&:last-child",[u("step-splitor","display: none;")])]),u("step-splitor",`
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
 `,[_("title",`
 white-space: nowrap;
 flex: 0;
 `)]),_("description",`
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
 `,[_("index",`
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
 `,[A()])])]),N("vertical","flex-direction: column;",[se("show-description",[I(">",[u("step","padding-bottom: 8px;")])]),I(">",[u("step","margin-bottom: 16px;",[I("&:last-child","margin-bottom: 0;"),I(">",[u("step-indicator",[I(">",[u("step-splitor",`
 position: absolute;
 bottom: -8px;
 width: 1px;
 margin: 0 !important;
 left: calc(var(--n-indicator-size) / 2);
 height: calc(100% - var(--n-indicator-size));
 `)])]),u("step-content",[_("description","margin-top: 8px;")])])])])])]);function Ie(e,i){return typeof e!="object"||e===null||Array.isArray(e)?null:(e.props||(e.props={}),e.props.internalIndex=i+1,e)}function ye(e){return e.map((i,s)=>Ie(i,s))}const Ce=Object.assign(Object.assign({},D.props),{current:Number,status:{type:String,default:"process"},size:{type:String,default:"medium"},vertical:Boolean,"onUpdate:current":[Function,Array],onUpdateCurrent:[Function,Array]}),K=de("n-steps"),U=T({name:"Steps",props:Ce,slots:Object,setup(e,{slots:i}){const{mergedClsPrefixRef:s,mergedRtlRef:l}=O(e),v=le("Steps",l,s),b=D("Steps","-steps",ze,ce,e,s);return ue(K,{props:e,mergedThemeRef:b,mergedClsPrefixRef:s,stepsSlots:i}),{mergedClsPrefix:s,rtlEnabled:v}},render(){const{mergedClsPrefix:e}=this;return a("div",{class:[`${e}-steps`,this.rtlEnabled&&`${e}-steps--rtl`,this.vertical&&`${e}-steps--vertical`]},ye(ae(Se(this))))}}),Re={status:String,title:String,description:String,disabled:Boolean,internalIndex:{type:Number,default:0}},h=T({name:"Step",props:Re,slots:Object,setup(e){const i=fe(K,null);i||me("step","`n-step` must be placed inside `n-steps`.");const{inlineThemeDisabled:s}=O(),{props:l,mergedThemeRef:v,mergedClsPrefixRef:b,stepsSlots:n}=i,x=y(()=>l.vertical),p=y(()=>{const{status:c}=e;if(c)return c;{const{internalIndex:d}=e,{current:z}=l;if(z===void 0)return"process";if(d<z)return"finish";if(d===z)return l.status||"process";if(d>z)return"wait"}return"process"}),S=y(()=>{const{value:c}=p,{size:d}=l,{common:{cubicBezierEaseInOut:z},self:{stepHeaderFontWeight:q,[m("stepHeaderFontSize",d)]:J,[m("indicatorIndexFontSize",d)]:Q,[m("indicatorSize",d)]:X,[m("indicatorIconSize",d)]:Y,[m("indicatorTextColor",c)]:Z,[m("indicatorBorderColor",c)]:ee,[m("headerTextColor",c)]:te,[m("splitorColor",c)]:ne,[m("indicatorColor",c)]:re,[m("descriptionTextColor",c)]:oe}}=v.value;return{"--n-bezier":z,"--n-description-text-color":oe,"--n-header-text-color":te,"--n-indicator-border-color":ee,"--n-indicator-color":re,"--n-indicator-icon-size":Y,"--n-indicator-index-font-size":Q,"--n-indicator-size":X,"--n-indicator-text-color":Z,"--n-splitor-color":ne,"--n-step-header-font-size":J,"--n-step-header-font-weight":q}}),w=s?ve("step",y(()=>{const{value:c}=p,{size:d}=l;return`${c[0]}${d[0]}`}),S,l):void 0,G=y(()=>{if(e.disabled)return;const{onUpdateCurrent:c,"onUpdate:current":d}=l;return c||d?()=>{c&&E(c,e.internalIndex),d&&E(d,e.internalIndex)}:void 0});return{stepsSlots:n,mergedClsPrefix:b,vertical:x,mergedStatus:p,handleStepClick:G,cssVars:s?void 0:S,themeClass:w?.themeClass,onRender:w?.onRender}},render(){const{mergedClsPrefix:e,onRender:i,handleStepClick:s,disabled:l}=this,v=F(this.$slots.default,b=>{const n=b||this.description;return n?a("div",{class:`${e}-step-content__description`},n):null});return i?.(),a("div",{class:[`${e}-step`,l&&`${e}-step--disabled`,!l&&s&&`${e}-step--clickable`,this.themeClass,v&&`${e}-step--show-description`,`${e}-step--${this.mergedStatus}-status`],style:this.cssVars,onClick:s},a("div",{class:`${e}-step-indicator`},a("div",{class:`${e}-step-indicator-slot`},a(pe,null,{default:()=>F(this.$slots.icon,b=>{const{mergedStatus:n,stepsSlots:x}=this;return n==="finish"||n==="error"?n==="finish"?a(P,{clsPrefix:e,key:"finish"},{default:()=>M(x["finish-icon"],()=>[a(we,null)])}):n==="error"?a(P,{clsPrefix:e,key:"error"},{default:()=>M(x["error-icon"],()=>[a(he,null)])}):null:b||a("div",{key:this.internalIndex,class:`${e}-step-indicator-slot__index`},this.internalIndex)})})),this.vertical?a("div",{class:`${e}-step-splitor`}):null),a("div",{class:`${e}-step-content`},a("div",{class:`${e}-step-content-header`},a("div",{class:`${e}-step-content-header__title`},M(this.$slots.title,()=>[this.title])),this.vertical?null:a("div",{class:`${e}-step-splitor`})),v))}}),_e={class:"page"},ke={class:"page-header"},Be={class:"links"},$e={href:"https://www.naiveui.com/en-US/light/components/steps",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},Ne={class:"components-list"},Ae="tabler:external-link",V="ion:arrow-back",L="ion:arrow-forward",Me=T({__name:"Steps",setup(e){const i=H(1),s=H("process");function l(){i.value===null?i.value=1:i.value>=4?i.value=null:i.value++}function v(){i.value===0?i.value=null:i.value===null?i.value=4:i.value--}return(b,n)=>{const x=ie;return be(),ge("div",_e,[C("div",ke,[n[3]||(n[3]=C("div",{class:"title"},"Steps",-1)),C("div",Be,[C("a",$e,[t(R,{name:Ae,size:16}),n[2]||(n[2]=f(" docs ",-1))])])]),C("div",Ne,[t(x,{title:"Basic"},{code:o(({html:p,js:S})=>[f(B(p(`
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
					`))+" "+B(S(`
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
						`)),1)]),default:o(()=>[t(r($),{vertical:""},{default:o(()=>[t(r($),{class:"mb-4"},{default:o(()=>[t(r(W),null,{default:o(()=>[t(r(k),{onClick:v},{icon:o(()=>[t(R,{name:V})]),_:1}),t(r(k),{onClick:l},{icon:o(()=>[t(R,{name:L})]),_:1})]),_:1}),t(r(j),{value:s.value,"onUpdate:value":n[0]||(n[0]=p=>s.value=p),size:"medium",name:"basic"},{default:o(()=>[t(r(g),{value:"error"},{default:o(()=>[...n[4]||(n[4]=[f("Error",-1)])]),_:1}),t(r(g),{value:"process"},{default:o(()=>[...n[5]||(n[5]=[f("Process",-1)])]),_:1}),t(r(g),{value:"wait"},{default:o(()=>[...n[6]||(n[6]=[f("Wait",-1)])]),_:1}),t(r(g),{value:"finish"},{default:o(()=>[...n[7]||(n[7]=[f("Finish",-1)])]),_:1})]),_:1},8,["value"])]),_:1}),t(r(U),{current:i.value,status:s.value},{default:o(()=>[t(r(h),{title:"I Me Mine",description:"All through the day, I me mine I me mine, I me mine"}),t(r(h),{title:"Let It Be",description:"When I find myself in times of trouble Mother Mary comes to me"}),t(r(h),{title:"Come Together",description:"Here come old flat top He come grooving up slowly"}),t(r(h),{title:"Something",description:"Something in the way she moves Attracts me like no other lover"})]),_:1},8,["current","status"])]),_:1})]),_:1}),t(x,{title:"Vertical"},{code:o(({html:p,js:S})=>[f(B(p(`
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
					`))+" "+B(S(`
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
						`)),1)]),default:o(()=>[t(r($),{vertical:""},{default:o(()=>[t(r(U),{vertical:"",current:i.value,status:s.value},{default:o(()=>[t(r(h),{title:"I Me Mine",description:"All through the day, I me mine I me mine, I me mine"}),t(r(h),{title:"Let It Be",description:"When I find myself in times of trouble Mother Mary comes to me"}),t(r(h),{title:"Break"}),t(r(h),{title:"Come Together",description:"Here come old flat top He come grooving up slowly"}),t(r(h),{title:"Something",description:"Something in the way she moves Attracts me like no other lover"})]),_:1},8,["current","status"]),t(r($),null,{default:o(()=>[t(r(W),null,{default:o(()=>[t(r(k),{onClick:v},{icon:o(()=>[t(R,{name:V})]),_:1}),t(r(k),{onClick:l},{icon:o(()=>[t(R,{name:L})]),_:1})]),_:1}),t(r(j),{value:s.value,"onUpdate:value":n[1]||(n[1]=p=>s.value=p),size:"medium",name:"vertical"},{default:o(()=>[t(r(g),{value:"error"},{default:o(()=>[...n[8]||(n[8]=[f("Error",-1)])]),_:1}),t(r(g),{value:"process"},{default:o(()=>[...n[9]||(n[9]=[f("Process",-1)])]),_:1}),t(r(g),{value:"wait"},{default:o(()=>[...n[10]||(n[10]=[f("Wait",-1)])]),_:1}),t(r(g),{value:"finish"},{default:o(()=>[...n[11]||(n[11]=[f("Finish",-1)])]),_:1})]),_:1},8,["value"])]),_:1})]),_:1})]),_:1})])])}}}),Oe=xe(Me,[["__scopeId","data-v-3f0a7ec6"]]);export{Oe as default};
