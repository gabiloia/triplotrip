import{aw as t,ax as c,ay as m,az as n,d as x,aE as b,aF as y,a7 as l,dt as F,aI as E,ap as O,aC as v,b2 as z,aq as H,ar as K,s as u,aL as d,ba as L,aN as M}from"./CFnCIwgc.js";import{u as V}from"./FC36dodC.js";const f=1.25,W=t("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${f};
`,[c("horizontal",`
 flex-direction: row;
 `,[m(">",[t("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[c("dashed-line-type",[m(">",[t("timeline-item-timeline",[n("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),m(">",[t("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[m(">",[n("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),t("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[n("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),c("right-placement",[t("timeline-item",[t("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),t("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),c("left-placement",[t("timeline-item",[t("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),t("timeline-item-timeline",`
 left: 0;
 `)])]),t("timeline-item",`
 position: relative;
 `,[m("&:last-child",[t("timeline-item-timeline",[n("line",`
 display: none;
 `)]),t("timeline-item-content",[n("meta",`
 margin-bottom: 0;
 `)])]),t("timeline-item-content",[n("title",`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),n("content",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),n("meta",`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),c("dashed-line-type",[t("timeline-item-timeline",[n("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),t("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${f} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[n("circle",`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),n("icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),n("line",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]),q=Object.assign(Object.assign({},y.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),$=O("n-timeline"),J=x({name:"Timeline",props:q,setup(e,{slots:o}){const{mergedClsPrefixRef:r}=b(e),a=y("Timeline","-timeline",W,F,e,r);return E($,{props:e,mergedThemeRef:a,mergedClsPrefixRef:r}),()=>{const{value:i}=r;return l("div",{class:[`${i}-timeline`,e.horizontal&&`${i}-timeline--horizontal`,`${i}-timeline--${e.size}-size`,!e.horizontal&&`${i}-timeline--${e.itemPlacement}-placement`]},o)}}}),D={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},Q=x({name:"TimelineItem",props:D,slots:Object,setup(e){const o=H($);o||K("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),V();const{inlineThemeDisabled:r}=b(),a=u(()=>{const{props:{size:s,iconSize:g},mergedThemeRef:p}=o,{type:h}=e,{self:{titleTextColor:C,contentTextColor:S,metaTextColor:T,lineColor:w,titleFontWeight:_,contentFontSize:P,[d("iconSize",s)]:k,[d("titleMargin",s)]:R,[d("titleFontSize",s)]:j,[d("circleBorder",h)]:I,[d("iconColor",h)]:N},common:{cubicBezierEaseInOut:B}}=p.value;return{"--n-bezier":B,"--n-circle-border":I,"--n-icon-color":N,"--n-content-font-size":P,"--n-content-text-color":S,"--n-line-color":w,"--n-meta-text-color":T,"--n-title-font-size":j,"--n-title-font-weight":_,"--n-title-margin":R,"--n-title-text-color":C,"--n-icon-size":L(g)||k}}),i=r?M("timeline-item",u(()=>{const{props:{size:s,iconSize:g}}=o,{type:p}=e;return`${s[0]}${g||"a"}${p[0]}`}),a,o.props):void 0;return{mergedClsPrefix:o.mergedClsPrefixRef,cssVars:r?void 0:a,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){const{mergedClsPrefix:e,color:o,onRender:r,$slots:a}=this;return r==null||r(),l("div",{class:[`${e}-timeline-item`,this.themeClass,`${e}-timeline-item--${this.type}-type`,`${e}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},l("div",{class:`${e}-timeline-item-timeline`},l("div",{class:`${e}-timeline-item-timeline__line`}),v(a.icon,i=>i?l("div",{class:`${e}-timeline-item-timeline__icon`,style:{color:o}},i):l("div",{class:`${e}-timeline-item-timeline__circle`,style:{borderColor:o}}))),l("div",{class:`${e}-timeline-item-content`},v(a.header,i=>i||this.title?l("div",{class:`${e}-timeline-item-content__title`},i||this.title):null),l("div",{class:`${e}-timeline-item-content__content`},z(a.default,()=>[this.content])),l("div",{class:`${e}-timeline-item-content__meta`},z(a.footer,()=>[this.time]))))}});export{J as N,Q as a};
