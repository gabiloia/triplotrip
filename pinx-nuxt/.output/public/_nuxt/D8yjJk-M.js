import{_ as Q}from"./CecrDnS1.js";import{ao as p,ap as e,aq as U,ar as W,aL as J,as as A,at as F,d as L,aM as X,a9 as s,cQ as Y,au as Z,aw as q,p as G,aS as E,az as ee,aP as te,ey as oe,c as re,o as ne,a as y,e as m,b,_ as se,w as g,u as x,t as le}from"./CghEsQSB.js";import{g as ie}from"./Bk_rJcZu.js";import"./DBs0U9JY.js";import"./9xxGHCVY.js";function H(n,h="default",t=[]){const{children:i}=n;if(i!==null&&typeof i=="object"&&!Array.isArray(i)){const l=i[h];if(typeof l=="function")return l()}return t}const ae=p([e("descriptions",{fontSize:"var(--n-font-size)"},[e("descriptions-separator",`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),e("descriptions-table-wrapper",[e("descriptions-table",[e("descriptions-table-row",[e("descriptions-table-header",{padding:"var(--n-th-padding)"}),e("descriptions-table-content",{padding:"var(--n-td-padding)"})])])]),J("bordered",[e("descriptions-table-wrapper",[e("descriptions-table",[e("descriptions-table-row",[p("&:last-child",[e("descriptions-table-content",{paddingBottom:0})])])])])]),A("left-label-placement",[e("descriptions-table-content",[p("> *",{verticalAlign:"top"})])]),A("left-label-align",[p("th",{textAlign:"left"})]),A("center-label-align",[p("th",{textAlign:"center"})]),A("right-label-align",[p("th",{textAlign:"right"})]),A("bordered",[e("descriptions-table-wrapper",`
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `,[e("descriptions-table",[e("descriptions-table-row",[p("&:not(:last-child)",[e("descriptions-table-content",{borderBottom:"1px solid var(--n-merged-border-color)"}),e("descriptions-table-header",{borderBottom:"1px solid var(--n-merged-border-color)"})]),e("descriptions-table-header",`
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `,[p("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})]),e("descriptions-table-content",[p("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})])])])])]),e("descriptions-header",`
 font-weight: var(--n-th-font-weight);
 font-size: 18px;
 transition: color .3s var(--n-bezier);
 line-height: var(--n-line-height);
 margin-bottom: 16px;
 color: var(--n-title-text-color);
 `),e("descriptions-table-wrapper",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[e("descriptions-table",`
 width: 100%;
 border-collapse: separate;
 border-spacing: 0;
 box-sizing: border-box;
 `,[e("descriptions-table-row",`
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[e("descriptions-table-header",`
 font-weight: var(--n-th-font-weight);
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-th-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),e("descriptions-table-content",`
 vertical-align: top;
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-td-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[F("content",`
 transition: color .3s var(--n-bezier);
 display: inline-block;
 color: var(--n-td-text-color);
 `)]),F("label",`
 font-weight: var(--n-th-font-weight);
 transition: color .3s var(--n-bezier);
 display: inline-block;
 margin-right: 14px;
 color: var(--n-th-text-color);
 `)])])])]),e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 `),U(e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),W(e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),K="DESCRIPTION_ITEM_FLAG";function de(n){return typeof n=="object"&&n&&!Array.isArray(n)?n.type&&n.type[K]:!1}const ce=Object.assign(Object.assign({},q.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:"top"},labelAlign:{type:String,default:"left"},separator:{type:String,default:":"},size:{type:String,default:"medium"},bordered:Boolean,labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]}),pe=L({name:"Descriptions",props:ce,slots:Object,setup(n){const{mergedClsPrefixRef:h,inlineThemeDisabled:t}=Z(n),i=q("Descriptions","-descriptions",ae,oe,n,h),l=G(()=>{const{size:d,bordered:u}=n,{common:{cubicBezierEaseInOut:f},self:{titleTextColor:k,thColor:D,thColorModal:r,thColorPopover:B,thTextColor:S,thFontWeight:R,tdTextColor:I,tdColor:V,tdColorModal:T,tdColorPopover:o,borderColor:C,borderColorModal:M,borderColorPopover:c,borderRadius:v,lineHeight:_,[E("fontSize",d)]:z,[E(u?"thPaddingBordered":"thPadding",d)]:w,[E(u?"tdPaddingBordered":"tdPadding",d)]:$}}=i.value;return{"--n-title-text-color":k,"--n-th-padding":w,"--n-td-padding":$,"--n-font-size":z,"--n-bezier":f,"--n-th-font-weight":R,"--n-line-height":_,"--n-th-text-color":S,"--n-td-text-color":I,"--n-th-color":D,"--n-th-color-modal":r,"--n-th-color-popover":B,"--n-td-color":V,"--n-td-color-modal":T,"--n-td-color-popover":o,"--n-border-radius":v,"--n-border-color":C,"--n-border-color-modal":M,"--n-border-color-popover":c}}),a=t?ee("descriptions",G(()=>{let d="";const{size:u,bordered:f}=n;return f&&(d+="a"),d+=u[0],d}),l,n):void 0;return{mergedClsPrefix:h,cssVars:t?void 0:l,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender,compitableColumn:te(n,["columns","column"]),inlineThemeDisabled:t}},render(){const n=this.$slots.default,h=n?X(n()):[];h.length;const{contentClass:t,labelClass:i,compitableColumn:l,labelPlacement:a,labelAlign:d,size:u,bordered:f,title:k,cssVars:D,mergedClsPrefix:r,separator:B,onRender:S}=this;S==null||S();const R=h.filter(o=>de(o)),I={span:0,row:[],secondRow:[],rows:[]},T=R.reduce((o,C,M)=>{const c=C.props||{},v=R.length-1===M,_=["label"in c?c.label:H(C,"label")],z=[H(C)],w=c.span||1,$=o.span;o.span+=w;const O=c.labelStyle||c["label-style"]||this.labelStyle,j=c.contentStyle||c["content-style"]||this.contentStyle;if(a==="left")f?o.row.push(s("th",{class:[`${r}-descriptions-table-header`,i],colspan:1,style:O},_),s("td",{class:[`${r}-descriptions-table-content`,t],colspan:v?(l-$)*2+1:w*2-1,style:j},z)):o.row.push(s("td",{class:`${r}-descriptions-table-content`,colspan:v?(l-$)*2:w*2},s("span",{class:[`${r}-descriptions-table-content__label`,i],style:O},[..._,B&&s("span",{class:`${r}-descriptions-separator`},B)]),s("span",{class:[`${r}-descriptions-table-content__content`,t],style:j},z)));else{const N=v?(l-$)*2:w*2;o.row.push(s("th",{class:[`${r}-descriptions-table-header`,i],colspan:N,style:O},_)),o.secondRow.push(s("td",{class:[`${r}-descriptions-table-content`,t],colspan:N,style:j},z))}return(o.span>=l||v)&&(o.span=0,o.row.length&&(o.rows.push(o.row),o.row=[]),a!=="left"&&o.secondRow.length&&(o.rows.push(o.secondRow),o.secondRow=[])),o},I).rows.map(o=>s("tr",{class:`${r}-descriptions-table-row`},o));return s("div",{style:D,class:[`${r}-descriptions`,this.themeClass,`${r}-descriptions--${a}-label-placement`,`${r}-descriptions--${d}-label-align`,`${r}-descriptions--${u}-size`,f&&`${r}-descriptions--bordered`]},k||this.$slots.header?s("div",{class:`${r}-descriptions-header`},k||ie(this,"header")):null,s("div",{class:`${r}-descriptions-table-wrapper`},s("table",{class:`${r}-descriptions-table`},s("tbody",null,a==="top"&&s("tr",{class:`${r}-descriptions-table-row`,style:{visibility:"collapse"}},Y(l*2,s("td",null))),T))))}}),be={label:String,span:{type:Number,default:1},labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]},P=L({name:"DescriptionsItem",[K]:!0,props:be,slots:Object,render(){return null}}),ge={class:"page"},he={class:"page-header"},me={class:"links"},ue={href:"https://www.naiveui.com/en-US/light/components/descriptions",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},fe={class:"components-list"},ve="tabler:external-link",_e=L({__name:"Descriptions",setup(n){return(h,t)=>{const i=Q;return ne(),re("div",ge,[y("div",he,[t[1]||(t[1]=y("div",{class:"title"},"Descriptions",-1)),y("div",me,[y("a",ue,[m(se,{name:ve,size:16}),t[0]||(t[0]=b(" docs "))])])]),y("div",fe,[m(i,{title:"Basic"},{code:g(({html:l})=>[b(le(l(`
					<n-descriptions label-placement="top" title="Description">
						<n-descriptions-item>
							<template #label>Breakfast</template>
							Apple
						</n-descriptions-item>
						<n-descriptions-item label="Brunch">Apple</n-descriptions-item>
						<n-descriptions-item label="Lunch">Apple</n-descriptions-item>
						<n-descriptions-item label="Supper" :span="2">
							Two
							<br />
							Apples
						</n-descriptions-item>
						<n-descriptions-item label="Midnight Snack">Apple</n-descriptions-item>
					</n-descriptions>
					`)),1)]),default:g(()=>[m(x(pe),{"label-placement":"top",title:"Description"},{default:g(()=>[m(x(P),null,{label:g(()=>t[2]||(t[2]=[b("Breakfast")])),default:g(()=>[t[3]||(t[3]=b(" Apple "))]),_:1,__:[3]}),m(x(P),{label:"Brunch"},{default:g(()=>t[4]||(t[4]=[b("Apple")])),_:1,__:[4]}),m(x(P),{label:"Lunch"},{default:g(()=>t[5]||(t[5]=[b("Apple")])),_:1,__:[5]}),m(x(P),{label:"Supper",span:2},{default:g(()=>t[6]||(t[6]=[b(" Two "),y("br",null,null,-1),b(" Apples ")])),_:1,__:[6]}),m(x(P),{label:"Midnight Snack"},{default:g(()=>t[7]||(t[7]=[b("Apple")])),_:1,__:[7]})]),_:1})]),_:1})])])}}});export{_e as default};
