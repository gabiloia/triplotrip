import{_ as de}from"./0RhdNeLw.js";import{ay as x,aw as t,c3 as se,c4 as ce,az as v,ax as U,d as Z,a7 as r,be as ie,F as ue,B as S,at as q,df as ve,aE as he,aF as ee,bi as me,q as G,aH as be,aJ as fe,p as J,aN as pe,ee as ge,aS as K,ad as xe,c as Ce,o as ye,a as O,e as H,b as L,_ as _e,w as Y,u as $e,t as P}from"./CKyhG2UO.js";import{e as _,c as $,j as A,d as ze,a as Q}from"./BpgezKfx.js";import{e as X,f as W}from"./CfCkVGYS.js";import{N as ke}from"./C4_bR07G.js";import{C as Me}from"./BLIjkjma.js";import"./BMJuwibk.js";const Ve=x([t("calendar",`
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 height: 720px;
 display: flex;
 flex-direction: column;
 `,[t("calendar-prev-btn",`
 cursor: pointer;
 `),t("calendar-next-btn",`
 cursor: pointer;
 `),t("calendar-header",`
 display: flex;
 align-items: center;
 line-height: 1;
 font-size: var(--n-title-font-size);
 padding: 0 0 18px 0;
 justify-content: space-between;
 `,[v("title",`
 color: var(--n-title-text-color);
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 `),v("extra",`
 display: flex;
 align-items: center;
 `)]),t("calendar-dates",`
 display: grid;
 grid-template-columns: repeat(7, minmax(0, 1fr));
 grid-auto-rows: 1fr;
 border-radius: var(--n-border-radius);
 flex: 1;
 border-top: 1px solid;
 border-left: 1px solid;
 border-color: var(--n-border-color);
 transition: border-color .3s var(--n-bezier);
 `),t("calendar-cell",`
 box-sizing: border-box;
 padding: 10px;
 border-right: 1px solid;
 border-bottom: 1px solid;
 border-color: var(--n-border-color);
 cursor: pointer;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[x("&:nth-child(7)",`
 border-top-right-radius: var(--n-border-radius);
 `),x("&:nth-last-child(7)",`
 border-bottom-left-radius: var(--n-border-radius);
 `),x("&:last-child",`
 border-bottom-right-radius: var(--n-border-radius);
 `),x("&:hover",`
 background-color: var(--n-cell-color-hover);
 `),v("bar",`
 position: absolute;
 left: 0;
 right: 0;
 bottom: -1px;
 height: 3px;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `),U("selected",[v("bar",`
 background-color: var(--n-bar-color);
 `)]),t("calendar-date",`
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 color: var(--n-text-color);
 `,[v("date",`
 color: var(--n-text-color);
 `)]),U("disabled, other-month",`
 color: var(--n-day-text-color);
 `,[t("calendar-date",[v("date",`
 color: var(--n-day-text-color);
 `)])]),U("disabled",`
 cursor: not-allowed;
 `),U("current",[t("calendar-date",[v("date",`
 color: var(--n-date-text-color-current);
 background-color: var(--n-date-color-current);
 `)])]),t("calendar-date",`
 position: relative;
 line-height: 1;
 display: flex;
 align-items: center;
 height: 1em;
 justify-content: space-between;
 padding-bottom: .75em;
 `,[v("date",`
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 margin-left: -0.4em;
 width: 1.8em;
 height: 1.8em;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),v("day",`
 color: var(--n-day-text-color);
 transition: color .3s var(--n-bezier);
 `)])])]),se(t("calendar",[t("calendar-dates",`
 border-color: var(--n-border-color-modal);
 `),t("calendar-cell",`
 border-color: var(--n-border-color-modal);
 `,[x("&:hover",`
 background-color: var(--n-cell-color-hover-modal);
 `)])])),ce(t("calendar",[t("calendar-dates",`
 border-color: var(--n-border-color-popover);
 `),t("calendar-cell",`
 border-color: var(--n-border-color-popover);
 `,[x("&:hover",`
 background-color: var(--n-cell-color-hover-popover);
 `)])]))]),we=Object.assign(Object.assign({},ee.props),{isDateDisabled:Function,value:Number,defaultValue:{type:Number,default:null},onPanelChange:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Te=Z({name:"Calendar",props:we,slots:Object,setup(l){var e;const{mergedClsPrefixRef:h,inlineThemeDisabled:C}=he(l),d=ee("Calendar","-calendar",Ve,ge,l,h),{localeRef:n,dateLocaleRef:c}=me("DatePicker"),i=Date.now(),s=G(A((e=l.defaultValue)!==null&&e!==void 0?e:i).valueOf()),z=G(l.defaultValue||null),B=be(fe(l,"value"),z);function E(o,a){const{onUpdateValue:m,"onUpdate:value":b}=l;m&&K(m,o,a),b&&K(b,o,a),z.value=o}function F(){var o;const a=Q(s.value,-1).valueOf();s.value=a,(o=l.onPanelChange)===null||o===void 0||o.call(l,{year:_(a),month:$(a)+1})}function k(){var o;const a=Q(s.value,1).valueOf();s.value=a,(o=l.onPanelChange)===null||o===void 0||o.call(l,{year:_(a),month:$(a)+1})}function I(){var o;const{value:a}=s,m=_(a),b=$(a),f=A(i).valueOf();s.value=f;const p=_(f),g=$(f);(m!==p||b!==g)&&((o=l.onPanelChange)===null||o===void 0||o.call(l,{year:p,month:g+1}))}const y=J(()=>{const{common:{cubicBezierEaseInOut:o},self:{borderColor:a,borderColorModal:m,borderColorPopover:b,borderRadius:f,titleFontSize:p,textColor:g,titleFontWeight:R,titleTextColor:M,dayTextColor:D,fontSize:N,lineHeight:V,dateColorCurrent:j,dateTextColorCurrent:w,cellColorHover:T,cellColor:oe,cellColorModal:ae,barColor:re,cellColorPopover:le,cellColorHoverModal:te,cellColorHoverPopover:ne}}=d.value;return{"--n-bezier":o,"--n-border-color":a,"--n-border-color-modal":m,"--n-border-color-popover":b,"--n-border-radius":f,"--n-text-color":g,"--n-title-font-weight":R,"--n-title-font-size":p,"--n-title-text-color":M,"--n-day-text-color":D,"--n-font-size":N,"--n-line-height":V,"--n-date-color-current":j,"--n-date-text-color-current":w,"--n-cell-color":oe,"--n-cell-color-modal":ae,"--n-cell-color-popover":le,"--n-cell-color-hover":T,"--n-cell-color-hover-modal":te,"--n-cell-color-hover-popover":ne,"--n-bar-color":re}}),u=C?pe("calendar",void 0,y,l):void 0;return{mergedClsPrefix:h,locale:n,dateLocale:c,now:i,mergedValue:B,monthTs:s,dateItems:J(()=>ze(s.value,B.value,i,n.value.firstDayOfWeek,!0)),doUpdateValue:E,handleTodayClick:I,handlePrevClick:F,handleNextClick:k,mergedTheme:d,cssVars:C?void 0:y,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender}},render(){const{isDateDisabled:l,mergedClsPrefix:e,monthTs:h,cssVars:C,mergedValue:d,mergedTheme:n,$slots:c,locale:{monthBeforeYear:i,today:s},dateLocale:{locale:z},handleTodayClick:B,handlePrevClick:E,handleNextClick:F,onRender:k}=this;k==null||k();const I=d&&X(d).valueOf(),y=_(h),u=$(h)+1;return r("div",{class:[`${e}-calendar`,this.themeClass],style:C},r("div",{class:`${e}-calendar-header`},r("div",{class:`${e}-calendar-header__title`},ie(c.header,{year:y,month:u},()=>{const o=W(h,"MMMM",{locale:z});return[i?`${o} ${y}`:`${y} ${o}`]})),r("div",{class:`${e}-calendar-header__extra`},r(ke,null,{default:()=>r(ue,null,r(S,{size:"small",onClick:E,theme:n.peers.Button,themeOverrides:n.peerOverrides.Button},{icon:()=>r(q,{clsPrefix:e,class:`${e}-calendar-prev-btn`},{default:()=>r(Me,null)})}),r(S,{size:"small",onClick:B,theme:n.peers.Button,themeOverrides:n.peerOverrides.Button},{default:()=>s}),r(S,{size:"small",onClick:F,theme:n.peers.Button,themeOverrides:n.peerOverrides.Button},{icon:()=>r(q,{clsPrefix:e,class:`${e}-calendar-next-btn`},{default:()=>r(ve,null)})}))}))),r("div",{class:`${e}-calendar-dates`},this.dateItems.map(({dateObject:o,ts:a,inCurrentMonth:m,isCurrentDate:b},f)=>{var p;const{year:g,month:R,date:M}=o,D=W(a,"yyyy-MM-dd"),N=!m,V=(l==null?void 0:l(a))===!0,j=I===X(a).valueOf();return r("div",{key:`${u}-${f}`,class:[`${e}-calendar-cell`,V&&`${e}-calendar-cell--disabled`,N&&`${e}-calendar-cell--other-month`,V&&`${e}-calendar-cell--not-allowed`,b&&`${e}-calendar-cell--current`,j&&`${e}-calendar-cell--selected`],onClick:()=>{var w;if(V)return;const T=A(a).valueOf();this.monthTs=T,N&&((w=this.onPanelChange)===null||w===void 0||w.call(this,{year:_(T),month:$(T)+1})),this.doUpdateValue(a,{year:g,month:R+1,date:M})}},r("div",{class:`${e}-calendar-date`},r("div",{class:`${e}-calendar-date__date`,title:D},M),f<7&&r("div",{class:`${e}-calendar-date__day`,title:D},W(a,"EEE",{locale:z}))),(p=c.default)===null||p===void 0?void 0:p.call(c,{year:g,month:R+1,date:M}),r("div",{class:`${e}-calendar-cell__bar`}))})))}}),Oe={class:"page"},Pe={class:"page-header"},Be={class:"links"},Re={href:"https://www.naiveui.com/en-US/light/components/calendar",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},De={class:"components-list"},Ne="tabler:external-link",Le=Z({__name:"Calendar",setup(l){const e=xe();function h(C,{month:d,date:n,year:c}){e.success(`${d}-${n}-${c}`)}return(C,d)=>{const n=de;return ye(),Ce("div",Oe,[O("div",Pe,[d[1]||(d[1]=O("div",{class:"title"},"Calendar",-1)),O("div",Be,[O("a",Re,[H(_e,{name:Ne,size:16}),d[0]||(d[0]=L(" docs "))])])]),O("div",De,[H(n,{title:"Basic"},{code:Y(({html:c,js:i})=>[L(P(c(`
					<n-calendar
						v-model:value="value"
						#="{ month, date, year }"
						:is-date-disabled="isDateDisabled"
						@update:value="handleUpdateValue"
					>
						{{ month }}-{{ date }}-{{ year }}
					</n-calendar>
					`))+" "+P(i(`
						const message = useMessage()

						function handleUpdateValue(_: number, {  month, date, year }: { month: number; date: number; year: number }) {
							message.success(\`\${month}-\${date}-\${year}\`)
						}
						`)),1)]),default:Y(()=>[H($e(Te),{"onUpdate:value":h},{default:Y(({month:c,date:i,year:s})=>[L(P(c)+"-"+P(i)+"-"+P(s),1)]),_:1})]),_:1})])])}}});export{Le as default};
