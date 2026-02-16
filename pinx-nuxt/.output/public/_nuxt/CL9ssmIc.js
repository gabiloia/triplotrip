import{_ as de}from"./BLzEf9tb.js";import{aB as C,az as t,aC as v,aA as N,bV as se,bW as ce,d as Z,ac as r,bi as ie,F as ue,B as j,av as q,bO as ve,aH as he,aI as ee,bm as me,s as G,aJ as be,aL as fe,q as J,aV as K,e2 as pe,aU as ge,ai as Ce,o as xe,c as _e,a as w,e as H,_ as ye,b as S,w as A,u as $e,t as P}from"./BboPWEKj.js";import{d as y,c as $,i as W,a as Q,k as ke}from"./8TBxUxIg.js";import{e as X,f as Y}from"./DxKG17RJ.js";import{N as ze}from"./CncItRYq.js";import{C as Ve}from"./BoIEE7Tp.js";import"./BmSAZQUJ.js";const Me=C([t("calendar",`
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
 `,[C("&:nth-child(7)",`
 border-top-right-radius: var(--n-border-radius);
 `),C("&:nth-last-child(7)",`
 border-bottom-left-radius: var(--n-border-radius);
 `),C("&:last-child",`
 border-bottom-right-radius: var(--n-border-radius);
 `),C("&:hover",`
 background-color: var(--n-cell-color-hover);
 `),v("bar",`
 position: absolute;
 left: 0;
 right: 0;
 bottom: -1px;
 height: 3px;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `),N("selected",[v("bar",`
 background-color: var(--n-bar-color);
 `)]),t("calendar-date",`
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 color: var(--n-text-color);
 `,[v("date",`
 color: var(--n-text-color);
 `)]),N("disabled, other-month",`
 color: var(--n-day-text-color);
 `,[t("calendar-date",[v("date",`
 color: var(--n-day-text-color);
 `)])]),N("disabled",`
 cursor: not-allowed;
 `),N("current",[t("calendar-date",[v("date",`
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
 `,[C("&:hover",`
 background-color: var(--n-cell-color-hover-modal);
 `)])])),ce(t("calendar",[t("calendar-dates",`
 border-color: var(--n-border-color-popover);
 `),t("calendar-cell",`
 border-color: var(--n-border-color-popover);
 `,[C("&:hover",`
 background-color: var(--n-cell-color-hover-popover);
 `)])]))]),Oe=Object.assign(Object.assign({},ee.props),{isDateDisabled:Function,value:Number,defaultValue:{type:Number,default:null},onPanelChange:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Te=Z({name:"Calendar",props:Oe,slots:Object,setup(l){var e;const{mergedClsPrefixRef:h,inlineThemeDisabled:x}=he(l),d=ee("Calendar","-calendar",Me,pe,l,h),{localeRef:n,dateLocaleRef:c}=me("DatePicker"),i=Date.now(),s=G(W((e=l.defaultValue)!==null&&e!==void 0?e:i).valueOf()),k=G(l.defaultValue||null),B=be(ge(l,"value"),k);function I(o,a){const{onUpdateValue:m,"onUpdate:value":b}=l;m&&K(m,o,a),b&&K(b,o,a),k.value=o}function E(){var o;const a=Q(s.value,-1).valueOf();s.value=a,(o=l.onPanelChange)===null||o===void 0||o.call(l,{year:y(a),month:$(a)+1})}function z(){var o;const a=Q(s.value,1).valueOf();s.value=a,(o=l.onPanelChange)===null||o===void 0||o.call(l,{year:y(a),month:$(a)+1})}function F(){var o;const{value:a}=s,m=y(a),b=$(a),f=W(i).valueOf();s.value=f;const p=y(f),g=$(f);(m!==p||b!==g)&&((o=l.onPanelChange)===null||o===void 0||o.call(l,{year:p,month:g+1}))}const _=J(()=>{const{common:{cubicBezierEaseInOut:o},self:{borderColor:a,borderColorModal:m,borderColorPopover:b,borderRadius:f,titleFontSize:p,textColor:g,titleFontWeight:R,titleTextColor:V,dayTextColor:D,fontSize:U,lineHeight:M,dateColorCurrent:L,dateTextColorCurrent:O,cellColorHover:T,cellColor:oe,cellColorModal:ae,barColor:re,cellColorPopover:le,cellColorHoverModal:te,cellColorHoverPopover:ne}}=d.value;return{"--n-bezier":o,"--n-border-color":a,"--n-border-color-modal":m,"--n-border-color-popover":b,"--n-border-radius":f,"--n-text-color":g,"--n-title-font-weight":R,"--n-title-font-size":p,"--n-title-text-color":V,"--n-day-text-color":D,"--n-font-size":U,"--n-line-height":M,"--n-date-color-current":L,"--n-date-text-color-current":O,"--n-cell-color":oe,"--n-cell-color-modal":ae,"--n-cell-color-popover":le,"--n-cell-color-hover":T,"--n-cell-color-hover-modal":te,"--n-cell-color-hover-popover":ne,"--n-bar-color":re}}),u=x?fe("calendar",void 0,_,l):void 0;return{mergedClsPrefix:h,locale:n,dateLocale:c,now:i,mergedValue:B,monthTs:s,dateItems:J(()=>ke(s.value,B.value,i,n.value.firstDayOfWeek,!0)),doUpdateValue:I,handleTodayClick:F,handlePrevClick:E,handleNextClick:z,mergedTheme:d,cssVars:x?void 0:_,themeClass:u?.themeClass,onRender:u?.onRender}},render(){const{isDateDisabled:l,mergedClsPrefix:e,monthTs:h,cssVars:x,mergedValue:d,mergedTheme:n,$slots:c,locale:{monthBeforeYear:i,today:s},dateLocale:{locale:k},handleTodayClick:B,handlePrevClick:I,handleNextClick:E,onRender:z}=this;z?.();const F=d&&X(d).valueOf(),_=y(h),u=$(h)+1;return r("div",{class:[`${e}-calendar`,this.themeClass],style:x},r("div",{class:`${e}-calendar-header`},r("div",{class:`${e}-calendar-header__title`},ie(c.header,{year:_,month:u},()=>{const o=Y(h,"MMMM",{locale:k});return[i?`${o} ${_}`:`${_} ${o}`]})),r("div",{class:`${e}-calendar-header__extra`},r(ze,null,{default:()=>r(ue,null,r(j,{size:"small",onClick:I,theme:n.peers.Button,themeOverrides:n.peerOverrides.Button},{icon:()=>r(q,{clsPrefix:e,class:`${e}-calendar-prev-btn`},{default:()=>r(Ve,null)})}),r(j,{size:"small",onClick:B,theme:n.peers.Button,themeOverrides:n.peerOverrides.Button},{default:()=>s}),r(j,{size:"small",onClick:E,theme:n.peers.Button,themeOverrides:n.peerOverrides.Button},{icon:()=>r(q,{clsPrefix:e,class:`${e}-calendar-next-btn`},{default:()=>r(ve,null)})}))}))),r("div",{class:`${e}-calendar-dates`},this.dateItems.map(({dateObject:o,ts:a,inCurrentMonth:m,isCurrentDate:b},f)=>{var p;const{year:g,month:R,date:V}=o,D=Y(a,"yyyy-MM-dd"),U=!m,M=l?.(a)===!0,L=F===X(a).valueOf();return r("div",{key:`${u}-${f}`,class:[`${e}-calendar-cell`,M&&`${e}-calendar-cell--disabled`,U&&`${e}-calendar-cell--other-month`,M&&`${e}-calendar-cell--not-allowed`,b&&`${e}-calendar-cell--current`,L&&`${e}-calendar-cell--selected`],onClick:()=>{var O;if(M)return;const T=W(a).valueOf();this.monthTs=T,U&&((O=this.onPanelChange)===null||O===void 0||O.call(this,{year:y(T),month:$(T)+1})),this.doUpdateValue(a,{year:g,month:R+1,date:V})}},r("div",{class:`${e}-calendar-date`},r("div",{class:`${e}-calendar-date__date`,title:D},V),f<7&&r("div",{class:`${e}-calendar-date__day`,title:D},Y(a,"EEE",{locale:k}))),(p=c.default)===null||p===void 0?void 0:p.call(c,{year:g,month:R+1,date:V}),r("div",{class:`${e}-calendar-cell__bar`}))})))}}),we={class:"page"},Pe={class:"page-header"},Be={class:"links"},Re={href:"https://www.naiveui.com/en-US/light/components/calendar",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},De={class:"components-list"},Ue="tabler:external-link",Se=Z({__name:"Calendar",setup(l){const e=Ce();function h(x,{year:d,month:n,date:c}){e.success(`${d}-${n}-${c}`)}return(x,d)=>{const n=de;return xe(),_e("div",we,[w("div",Pe,[d[1]||(d[1]=w("div",{class:"title"},"Calendario",-1)),w("div",Be,[w("a",Re,[H(ye,{name:Ue,size:16}),d[0]||(d[0]=S(" docs ",-1))])])]),w("div",De,[H(n,{title:"Basic"},{code:A(({html:c,js:i})=>[S(P(c(`
					<n-calendar
						v-model:value="value"
						#="{ year, month, date }"
						:is-date-disabled="isDateDisabled"
						@update:value="handleUpdateValue"
					>
						{{ year }}-{{ month }}-{{ date }}
					</n-calendar>
					`))+" "+P(i(`
						const message = useMessage()

						function handleUpdateValue(_: number, { year, month, date }: { year: number; month: number; date: number }) {
							message.success(\`\${year}-\${month}-\${date}\`)
						}
						`)),1)]),default:A(()=>[H($e(Te),{"onUpdate:value":h},{default:A(({year:c,month:i,date:s})=>[S(P(c)+"-"+P(i)+"-"+P(s),1)]),_:1})]),_:1})])])}}});export{Se as default};
