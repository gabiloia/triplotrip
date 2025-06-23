import{ap as y,ao as c,as as h,d as z,a9 as H,au as $,aw as l,p as f,aS as s,az as T,bs as N}from"./CghEsQSB.js";const R=y("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[c("&:first-child",{marginTop:0}),h("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[h("align-text",{paddingLeft:0},[c("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),c("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),c("&::before",{backgroundColor:"var(--n-bar-color)"})])]),B=Object.assign(Object.assign({},l.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),n=a=>z({name:`H${a}`,props:B,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:i}=$(e),r=l("Typography","-h",R,N,e,o),d=f(()=>{const{type:g}=e,{common:{cubicBezierEaseInOut:b},self:{headerFontWeight:p,headerTextColor:m,[s("headerPrefixWidth",a)]:u,[s("headerFontSize",a)]:x,[s("headerMargin",a)]:C,[s("headerBarWidth",a)]:v,[s("headerBarColor",g)]:w}}=r.value;return{"--n-bezier":b,"--n-font-size":x,"--n-margin":C,"--n-bar-color":w,"--n-bar-width":v,"--n-font-weight":p,"--n-text-color":m,"--n-prefix-width":u}}),t=i?T(`h${a}`,f(()=>e.type[0]),d,e):void 0;return{mergedClsPrefix:o,cssVars:i?void 0:d,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e;const{prefix:o,alignText:i,mergedClsPrefix:r,cssVars:d,$slots:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),H(`h${a}`,{class:[`${r}-h`,`${r}-h${a}`,this.themeClass,{[`${r}-h--prefix-bar`]:o,[`${r}-h--align-text`]:i}],style:d},t)}}),S=n("1"),W=n("2"),L=n("3"),O=n("4"),V=n("5"),j=n("6");export{W as N,S as a,L as b,O as c,V as d,j as e};
