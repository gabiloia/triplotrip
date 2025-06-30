import{_ as de}from"./BvYks_Wu.js";import{aA as C,ay as t,bU as se,bV as ce,aB as v,az as N,d as Z,ab as r,bh as ie,F as ue,B as L,av as G,bN as ve,aG as he,aH as ee,bl as me,q,aJ as be,aL as fe,p as J,aP as pe,e1 as ge,aU as K,ah as Ce,c as xe,o as ye,a as O,e as H,b as S,_ as _e,w as A,u as $e,t as P}from"./D0txxWEs.js";import{e as _,c as $,j as Y,d as ze,a as Q}from"./Mf_T5Lot.js";import{e as X,f as W}from"./DIt6SmjI.js";import{N as ke}from"./DOAD6IcM.js";import{C as Me}from"./DbSfpayJ.js";import"./zjvAu2Mm.js";const Ve=C([t("calendar",`
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
 `)])]))]),Te=Object.assign(Object.assign({},ee.props),{isDateDisabled:Function,value:Number,defaultValue:{type:Number,default:null},onPanelChange:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),we=Z({name:"Calendar",props:Te,slots:Object,setup(l){var e;const{mergedClsPrefixRef:h,inlineThemeDisabled:x}=he(l),d=ee("Calendar","-calendar",Ve,ge,l,h),{localeRef:n,dateLocaleRef:c}=me("DatePicker"),i=Date.now(),s=q(Y((e=l.defaultValue)!==null&&e!==void 0?e:i).valueOf()),z=q(l.defaultValue||null),B=be(fe(l,"value"),z);function E(o,a){const{onUpdateValue:m,"onUpdate:value":b}=l;m&&K(m,o,a),b&&K(b,o,a),z.value=o}function F(){var o;const a=Q(s.value,-1).valueOf();s.value=a,(o=l.onPanelChange)===null||o===void 0||o.call(l,{year:_(a),month:$(a)+1})}function k(){var o;const a=Q(s.value,1).valueOf();s.value=a,(o=l.onPanelChange)===null||o===void 0||o.call(l,{year:_(a),month:$(a)+1})}function I(){var o;const{value:a}=s,m=_(a),b=$(a),f=Y(i).valueOf();s.value=f;const p=_(f),g=$(f);(m!==p||b!==g)&&((o=l.onPanelChange)===null||o===void 0||o.call(l,{year:p,month:g+1}))}const y=J(()=>{const{common:{cubicBezierEaseInOut:o},self:{borderColor:a,borderColorModal:m,borderColorPopover:b,borderRadius:f,titleFontSize:p,textColor:g,titleFontWeight:R,titleTextColor:M,dayTextColor:U,fontSize:D,lineHeight:V,dateColorCurrent:j,dateTextColorCurrent:T,cellColorHover:w,cellColor:oe,cellColorModal:ae,barColor:re,cellColorPopover:le,cellColorHoverModal:te,cellColorHoverPopover:ne}}=d.value;return{"--n-bezier":o,"--n-border-color":a,"--n-border-color-modal":m,"--n-border-color-popover":b,"--n-border-radius":f,"--n-text-color":g,"--n-title-font-weight":R,"--n-title-font-size":p,"--n-title-text-color":M,"--n-day-text-color":U,"--n-font-size":D,"--n-line-height":V,"--n-date-color-current":j,"--n-date-text-color-current":T,"--n-cell-color":oe,"--n-cell-color-modal":ae,"--n-cell-color-popover":le,"--n-cell-color-hover":w,"--n-cell-color-hover-modal":te,"--n-cell-color-hover-popover":ne,"--n-bar-color":re}}),u=x?pe("calendar",void 0,y,l):void 0;return{mergedClsPrefix:h,locale:n,dateLocale:c,now:i,mergedValue:B,monthTs:s,dateItems:J(()=>ze(s.value,B.value,i,n.value.firstDayOfWeek,!0)),doUpdateValue:E,handleTodayClick:I,handlePrevClick:F,handleNextClick:k,mergedTheme:d,cssVars:x?void 0:y,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender}},render(){const{isDateDisabled:l,mergedClsPrefix:e,monthTs:h,cssVars:x,mergedValue:d,mergedTheme:n,$slots:c,locale:{monthBeforeYear:i,today:s},dateLocale:{locale:z},handleTodayClick:B,handlePrevClick:E,handleNextClick:F,onRender:k}=this;k==null||k();const I=d&&X(d).valueOf(),y=_(h),u=$(h)+1;return r("div",{class:[`${e}-calendar`,this.themeClass],style:x},r("div",{class:`${e}-calendar-header`},r("div",{class:`${e}-calendar-header__title`},ie(c.header,{year:y,month:u},()=>{const o=W(h,"MMMM",{locale:z});return[i?`${o} ${y}`:`${y} ${o}`]})),r("div",{class:`${e}-calendar-header__extra`},r(ke,null,{default:()=>r(ue,null,r(L,{size:"small",onClick:E,theme:n.peers.Button,themeOverrides:n.peerOverrides.Button},{icon:()=>r(G,{clsPrefix:e,class:`${e}-calendar-prev-btn`},{default:()=>r(Me,null)})}),r(L,{size:"small",onClick:B,theme:n.peers.Button,themeOverrides:n.peerOverrides.Button},{default:()=>s}),r(L,{size:"small",onClick:F,theme:n.peers.Button,themeOverrides:n.peerOverrides.Button},{icon:()=>r(G,{clsPrefix:e,class:`${e}-calendar-next-btn`},{default:()=>r(ve,null)})}))}))),r("div",{class:`${e}-calendar-dates`},this.dateItems.map(({dateObject:o,ts:a,inCurrentMonth:m,isCurrentDate:b},f)=>{var p;const{year:g,month:R,date:M}=o,U=W(a,"yyyy-MM-dd"),D=!m,V=(l==null?void 0:l(a))===!0,j=I===X(a).valueOf();return r("div",{key:`${u}-${f}`,class:[`${e}-calendar-cell`,V&&`${e}-calendar-cell--disabled`,D&&`${e}-calendar-cell--other-month`,V&&`${e}-calendar-cell--not-allowed`,b&&`${e}-calendar-cell--current`,j&&`${e}-calendar-cell--selected`],onClick:()=>{var T;if(V)return;const w=Y(a).valueOf();this.monthTs=w,D&&((T=this.onPanelChange)===null||T===void 0||T.call(this,{year:_(w),month:$(w)+1})),this.doUpdateValue(a,{year:g,month:R+1,date:M})}},r("div",{class:`${e}-calendar-date`},r("div",{class:`${e}-calendar-date__date`,title:U},M),f<7&&r("div",{class:`${e}-calendar-date__day`,title:U},W(a,"EEE",{locale:z}))),(p=c.default)===null||p===void 0?void 0:p.call(c,{year:g,month:R+1,date:M}),r("div",{class:`${e}-calendar-cell__bar`}))})))}}),Oe={class:"page"},Pe={class:"page-header"},Be={class:"links"},Re={href:"https://www.naiveui.com/en-US/light/components/calendar",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},Ue={class:"components-list"},De="tabler:external-link",Se=Z({__name:"Calendar",setup(l){const e=Ce();function h(x,{year:d,month:n,date:c}){e.success(`${d}-${n}-${c}`)}return(x,d)=>{const n=de;return ye(),xe("div",Oe,[O("div",Pe,[d[1]||(d[1]=O("div",{class:"title"},"Calendario",-1)),O("div",Be,[O("a",Re,[H(_e,{name:De,size:16}),d[0]||(d[0]=S(" docs "))])])]),O("div",Ue,[H(n,{title:"Basic"},{code:A(({html:c,js:i})=>[S(P(c(`
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
						`)),1)]),default:A(()=>[H($e(we),{"onUpdate:value":h},{default:A(({year:c,month:i,date:s})=>[S(P(c)+"-"+P(i)+"-"+P(s),1)]),_:1})]),_:1})])])}}});export{Se as default};
