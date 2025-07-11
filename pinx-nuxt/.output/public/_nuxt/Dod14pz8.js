import{_ as at}from"./CXka4_Or.js";import{aA as F,ay as n,bU as ot,bV as nt,az as b,aB as X,bu as pe,df as rt,d as Re,ab as f,c2 as lt,c3 as it,b4 as st,c4 as dt,bZ as re,bf as ct,aG as ut,aH as ze,q as z,b6 as ht,p as R,aL as vt,aJ as ft,a1 as we,aj as mt,aP as xe,by as bt,dZ as gt,aU as Y,bo as J,bp as W,J as ne,c as pt,o as wt,a as H,e as g,b as B,_ as xt,w as T,u as V,t as A,z as kt}from"./CxJvYK31.js";import{N as yt}from"./Cx9GD3Vn.js";import"./BRY1QPg9.js";import"./DMiUpVhH.js";import"./Bk_rJcZu.js";const Rt=F([n("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[b("reverse",[n("slider-handles",[n("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),n("slider-dots",[n("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),b("vertical",[n("slider-handles",[n("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),n("slider-marks",[n("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),n("slider-dots",[n("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),b("vertical",`
 box-sizing: content-box;
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[n("slider-handles",`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[n("slider-handle-wrapper",`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),n("slider-rail",`
 height: 100%;
 `,[X("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),b("with-mark",`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),n("slider-marks",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[n("slider-mark",`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),n("slider-dots",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[n("slider-dot",`
 transform: translateX(-50%) translateY(50%);
 `)])]),b("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[n("slider-handle",`
 cursor: not-allowed;
 `)]),b("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),F("&:hover",[n("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[X("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),n("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),b("active",[n("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[X("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),n("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),n("slider-marks",`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[n("slider-mark",`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),n("slider-rail",`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[X("fill",`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),n("slider-handles",`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[n("slider-handle-wrapper",`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[n("slider-handle",`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[F("&:hover",`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),F("&:focus",[n("slider-handle",`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[F("&:hover",`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),n("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[b("transition-disabled",[n("slider-dot","transition: none;")]),n("slider-dot",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `,[b("active","border: var(--n-dot-border-active);")])])]),n("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[pe()]),n("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[b("top",`
 margin-bottom: 12px;
 `),b("right",`
 margin-left: 12px;
 `),b("bottom",`
 margin-top: 12px;
 `),b("left",`
 margin-right: 12px;
 `),pe()]),ot(n("slider",[n("slider-dot","background-color: var(--n-dot-color-modal);")])),nt(n("slider",[n("slider-dot","background-color: var(--n-dot-color-popover);")]))]);function ke(o){return window.TouchEvent&&o instanceof window.TouchEvent}function ye(){const o=new Map,l=k=>p=>{o.set(k,p)};return rt(()=>{o.clear()}),[o,l]}const zt=0,St=Object.assign(Object.assign({},ze.props),{to:re.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onDragstart:[Function],onDragend:[Function]}),E=Re({name:"Slider",props:St,slots:Object,setup(o){const{mergedClsPrefixRef:l,namespaceRef:k,inlineThemeDisabled:p}=ut(o),d=ze("Slider","-slider",Rt,gt,o,l),u=z(null),[s,S]=ye(),[m,D]=ye(),Se=z(new Set),le=ht(o),{mergedDisabledRef:N}=le,ie=R(()=>{const{step:e}=o;if(Number(e)<=0||e==="mark")return 0;const t=e.toString();let a=0;return t.includes(".")&&(a=t.length-t.indexOf(".")-1),a}),Z=z(o.defaultValue),Te=vt(o,"value"),q=ft(Te,Z),w=R(()=>{const{value:e}=q;return(o.range?e:[e]).map(fe)}),se=R(()=>w.value.length>2),Ce=R(()=>o.placement===void 0?o.vertical?"right":"top":o.placement),de=R(()=>{const{marks:e}=o;return e?Object.keys(e).map(Number.parseFloat):null}),x=z(-1),ce=z(-1),M=z(-1),_=z(!1),U=z(!1),Q=R(()=>{const{vertical:e,reverse:t}=o;return e?t?"top":"bottom":t?"right":"left"}),Ve=R(()=>{if(se.value)return;const e=w.value,t=j(o.range?Math.min(...e):o.min),a=j(o.range?Math.max(...e):e[0]),{value:r}=Q;return o.vertical?{[r]:`${t}%`,height:`${a-t}%`}:{[r]:`${t}%`,width:`${a-t}%`}}),De=R(()=>{const e=[],{marks:t}=o;if(t){const a=w.value.slice();a.sort((v,h)=>v-h);const{value:r}=Q,{value:i}=se,{range:c}=o,y=i?()=>!1:v=>c?v>=a[0]&&v<=a[a.length-1]:v<=a[0];for(const v of Object.keys(t)){const h=Number(v);e.push({active:y(h),key:h,label:t[v],style:{[r]:`${j(h)}%`}})}}return e});function Me(e,t){const a=j(e),{value:r}=Q;return{[r]:`${a}%`,zIndex:t===x.value?1:0}}function ue(e){return o.showTooltip||M.value===e||x.value===e&&_.value}function _e(e){return _.value?!(x.value===e&&ce.value===e):!0}function Be(e){var t;~e&&(x.value=e,(t=s.get(e))===null||t===void 0||t.focus())}function $e(){m.forEach((e,t)=>{ue(t)&&e.syncPosition()})}function he(e){const{"onUpdate:value":t,onUpdateValue:a}=o,{nTriggerFormInput:r,nTriggerFormChange:i}=le;a&&Y(a,e),t&&Y(t,e),Z.value=e,r(),i()}function ve(e){const{range:t}=o;if(t){if(Array.isArray(e)){const{value:a}=w;e.join()!==a.join()&&he(e)}}else Array.isArray(e)||w.value[0]!==e&&he(e)}function ee(e,t){if(o.range){const a=w.value.slice();a.splice(t,1,e),ve(a)}else ve(e)}function te(e,t,a){const r=a!==void 0;a||(a=e-t>0?1:-1);const i=de.value||[],{step:c}=o;if(c==="mark"){const h=P(e,i.concat(t),r?a:void 0);return h?h.value:t}if(c<=0)return t;const{value:y}=ie;let v;if(r){const h=Number((t/c).toFixed(y)),C=Math.floor(h),ae=h>C?C:C-1,oe=h<C?C:C+1;v=P(t,[Number((ae*c).toFixed(y)),Number((oe*c).toFixed(y)),...i],a)}else{const h=Ae(e);v=P(e,[...i,h])}return v?fe(v.value):t}function fe(e){return Math.min(o.max,Math.max(o.min,e))}function j(e){const{max:t,min:a}=o;return(e-a)/(t-a)*100}function Ie(e){const{max:t,min:a}=o;return a+(t-a)*e}function Ae(e){const{step:t,min:a}=o;if(Number(t)<=0||t==="mark")return e;const r=Math.round((e-a)/t)*t+a;return Number(r.toFixed(ie.value))}function P(e,t=de.value,a){if(!(t!=null&&t.length))return null;let r=null,i=-1;for(;++i<t.length;){const c=t[i]-e,y=Math.abs(c);(a===void 0||c*a>0)&&(r===null||y<r.distance)&&(r={index:i,distance:y,value:t[i]})}return r}function me(e){const t=u.value;if(!t)return;const a=ke(e)?e.touches[0]:e,r=t.getBoundingClientRect();let i;return o.vertical?i=(r.bottom-a.clientY)/r.height:i=(a.clientX-r.left)/r.width,o.reverse&&(i=1-i),Ie(i)}function Ee(e){if(N.value||!o.keyboard)return;const{vertical:t,reverse:a}=o;switch(e.key){case"ArrowUp":e.preventDefault(),O(t&&a?-1:1);break;case"ArrowRight":e.preventDefault(),O(!t&&a?-1:1);break;case"ArrowDown":e.preventDefault(),O(t&&a?1:-1);break;case"ArrowLeft":e.preventDefault(),O(!t&&a?1:-1);break}}function O(e){const t=x.value;if(t===-1)return;const{step:a}=o,r=w.value[t],i=Number(a)<=0||a==="mark"?r:r+a*e;ee(te(i,r,e>0?1:-1),t)}function Fe(e){var t,a;if(N.value||!ke(e)&&e.button!==zt)return;const r=me(e);if(r===void 0)return;const i=w.value.slice(),c=o.range?(a=(t=P(r,i))===null||t===void 0?void 0:t.index)!==null&&a!==void 0?a:-1:0;c!==-1&&(e.preventDefault(),Be(c),He(),ee(te(r,w.value[c]),c))}function He(){_.value||(_.value=!0,o.onDragstart&&Y(o.onDragstart),J("touchend",document,K),J("mouseup",document,K),J("touchmove",document,G),J("mousemove",document,G))}function L(){_.value&&(_.value=!1,o.onDragend&&Y(o.onDragend),W("touchend",document,K),W("mouseup",document,K),W("touchmove",document,G),W("mousemove",document,G))}function G(e){const{value:t}=x;if(!_.value||t===-1){L();return}const a=me(e);a!==void 0&&ee(te(a,w.value[t]),t)}function K(){L()}function Ne(e){x.value=e,N.value||(M.value=e)}function Ue(e){x.value===e&&(x.value=-1,L()),M.value===e&&(M.value=-1)}function je(e){M.value=e}function Pe(e){M.value===e&&(M.value=-1)}we(x,(e,t)=>void ne(()=>ce.value=t)),we(q,()=>{if(o.marks){if(U.value)return;U.value=!0,ne(()=>{U.value=!1})}ne($e)}),mt(()=>{L()});const be=R(()=>{const{self:{markFontSize:e,railColor:t,railColorHover:a,fillColor:r,fillColorHover:i,handleColor:c,opacityDisabled:y,dotColor:v,dotColorModal:h,handleBoxShadow:C,handleBoxShadowHover:ae,handleBoxShadowActive:oe,handleBoxShadowFocus:Oe,dotBorder:Le,dotBoxShadow:Ge,railHeight:Ke,railWidthVertical:Xe,handleSize:Ye,dotHeight:Je,dotWidth:We,dotBorderRadius:Ze,fontSize:qe,dotBorderActive:Qe,dotColorPopover:et},common:{cubicBezierEaseInOut:tt}}=d.value;return{"--n-bezier":tt,"--n-dot-border":Le,"--n-dot-border-active":Qe,"--n-dot-border-radius":Ze,"--n-dot-box-shadow":Ge,"--n-dot-color":v,"--n-dot-color-modal":h,"--n-dot-color-popover":et,"--n-dot-height":Je,"--n-dot-width":We,"--n-fill-color":r,"--n-fill-color-hover":i,"--n-font-size":qe,"--n-handle-box-shadow":C,"--n-handle-box-shadow-active":oe,"--n-handle-box-shadow-focus":Oe,"--n-handle-box-shadow-hover":ae,"--n-handle-color":c,"--n-handle-size":Ye,"--n-opacity-disabled":y,"--n-rail-color":t,"--n-rail-color-hover":a,"--n-rail-height":Ke,"--n-rail-width-vertical":Xe,"--n-mark-font-size":e}}),$=p?xe("slider",void 0,be,o):void 0,ge=R(()=>{const{self:{fontSize:e,indicatorColor:t,indicatorBoxShadow:a,indicatorTextColor:r,indicatorBorderRadius:i}}=d.value;return{"--n-font-size":e,"--n-indicator-border-radius":i,"--n-indicator-box-shadow":a,"--n-indicator-color":t,"--n-indicator-text-color":r}}),I=p?xe("slider-indicator",void 0,ge,o):void 0;return{mergedClsPrefix:l,namespace:k,uncontrolledValue:Z,mergedValue:q,mergedDisabled:N,mergedPlacement:Ce,isMounted:bt(),adjustedTo:re(o),dotTransitionDisabled:U,markInfos:De,isShowTooltip:ue,shouldKeepTooltipTransition:_e,handleRailRef:u,setHandleRefs:S,setFollowerRefs:D,fillStyle:Ve,getHandleStyle:Me,activeIndex:x,arrifiedValues:w,followerEnabledIndexSet:Se,handleRailMouseDown:Fe,handleHandleFocus:Ne,handleHandleBlur:Ue,handleHandleMouseEnter:je,handleHandleMouseLeave:Pe,handleRailKeyDown:Ee,indicatorCssVars:p?void 0:ge,indicatorThemeClass:I==null?void 0:I.themeClass,indicatorOnRender:I==null?void 0:I.onRender,cssVars:p?void 0:be,themeClass:$==null?void 0:$.themeClass,onRender:$==null?void 0:$.onRender}},render(){var o;const{mergedClsPrefix:l,themeClass:k,formatTooltip:p}=this;return(o=this.onRender)===null||o===void 0||o.call(this),f("div",{class:[`${l}-slider`,k,{[`${l}-slider--disabled`]:this.mergedDisabled,[`${l}-slider--active`]:this.activeIndex!==-1,[`${l}-slider--with-mark`]:this.marks,[`${l}-slider--vertical`]:this.vertical,[`${l}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},f("div",{class:`${l}-slider-rail`},f("div",{class:`${l}-slider-rail__fill`,style:this.fillStyle}),this.marks?f("div",{class:[`${l}-slider-dots`,this.dotTransitionDisabled&&`${l}-slider-dots--transition-disabled`]},this.markInfos.map(d=>f("div",{key:d.key,class:[`${l}-slider-dot`,{[`${l}-slider-dot--active`]:d.active}],style:d.style}))):null,f("div",{ref:"handleRailRef",class:`${l}-slider-handles`},this.arrifiedValues.map((d,u)=>{const s=this.isShowTooltip(u);return f(lt,null,{default:()=>[f(it,null,{default:()=>f("div",{ref:this.setHandleRefs(u),class:`${l}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,role:"slider","aria-valuenow":d,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-orientation":this.vertical?"vertical":"horizontal","aria-disabled":this.disabled,style:this.getHandleStyle(d,u),onFocus:()=>{this.handleHandleFocus(u)},onBlur:()=>{this.handleHandleBlur(u)},onMouseenter:()=>{this.handleHandleMouseEnter(u)},onMouseleave:()=>{this.handleHandleMouseLeave(u)}},st(this.$slots.thumb,()=>[f("div",{class:`${l}-slider-handle`})]))}),this.tooltip&&f(dt,{ref:this.setFollowerRefs(u),show:s,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(u),teleportDisabled:this.adjustedTo===re.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>f(ct,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(u),onEnter:()=>{this.followerEnabledIndexSet.add(u)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(u)}},{default:()=>{var S;return s?((S=this.indicatorOnRender)===null||S===void 0||S.call(this),f("div",{class:[`${l}-slider-handle-indicator`,this.indicatorThemeClass,`${l}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof p=="function"?p(d):d)):null}})})]})})),this.marks?f("div",{class:`${l}-slider-marks`},this.markInfos.map(d=>f("div",{key:d.key,class:`${l}-slider-mark`,style:d.style},typeof d.label=="function"?d.label():d.label))):null))}}),Tt={class:"page"},Ct={class:"page-header"},Vt={class:"links"},Dt={href:"https://www.naiveui.com/en-US/light/components/slider",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},Mt={class:"components-list"},_t="tabler:external-link",Ht=Re({__name:"Slider",setup(o){const l=z(50),k=z([50,70]),p={34:"Amazing",75:"Good"},d={20:"Amazing",80:"Good"};return(u,s)=>{const S=at;return wt(),pt("div",Tt,[H("div",Ct,[s[4]||(s[4]=H("div",{class:"title"},"Slider",-1)),H("div",Vt,[H("a",Dt,[g(xt,{name:_t,size:16}),s[3]||(s[3]=B(" docs "))])])]),H("div",Mt,[g(S,{title:"Basic"},{code:T(({html:m,js:D})=>[B(A(m(`
					<n-slider v-model:value="value" :step="10" />
					`))+" "+A(D("const value = ref(50)")),1)]),default:T(()=>[g(V(E),{value:l.value,"onUpdate:value":s[0]||(s[0]=m=>l.value=m),step:10},null,8,["value"])]),_:1}),g(S,{title:"Range"},{code:T(({html:m,js:D})=>[B(A(m(`
					<n-slider v-model:value="value1" range :marks="marks" :step="10" />
					`))+" "+A(D(`
						const value1 = ref([50, 70])
						const marks = {
							34: "Amazing",
							75: "Good"
						}
						`)),1)]),default:T(()=>[g(V(E),{value:k.value,"onUpdate:value":s[1]||(s[1]=m=>k.value=m),range:"",marks:p,step:10},null,8,["value"])]),_:1}),g(S,{title:"Vertical"},{description:T(()=>[s[6]||(s[6]=B(" Set vertical to enable the ")),g(V(kt),{code:""},{default:T(()=>s[5]||(s[5]=[B("vertical")])),_:1,__:[5]}),s[7]||(s[7]=B(" mode. Its height depends on the height of the container by default, and you can also customize the height. "))]),code:T(({html:m,js:D})=>[B(A(m(`
					<n-space style="height: 200px; justify-content: center">
						<n-slider :default-value="77" vertical />
						<n-slider :default-value="20" vertical reverse />
						<n-slider :default-value="30" vertical disabled />
						<n-slider v-model:value="value1" :marks="marks1" vertical range />
					</n-space>
					`))+" "+A(D(`
						const value1 = ref([50, 70])
						const marks1 = {
							20: "Amazing",
							80: "Good"
						}
						`)),1)]),default:T(()=>[g(V(yt),{style:{height:"200px","justify-content":"center"}},{default:T(()=>[g(V(E),{"default-value":77,vertical:""}),g(V(E),{"default-value":20,vertical:"",reverse:""}),g(V(E),{"default-value":30,vertical:"",disabled:""}),g(V(E),{value:k.value,"onUpdate:value":s[2]||(s[2]=m=>k.value=m),marks:d,vertical:"",range:""},null,8,["value"])]),_:1})]),_:1})])])}}});export{Ht as default};
