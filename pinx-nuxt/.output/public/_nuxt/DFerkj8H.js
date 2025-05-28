import{aw as w,ay as c,ax as h,d as $,a7 as z,aE as H,aF as l,s as f,aL as s,aN as N,c$ as T}from"./CFnCIwgc.js";const R=w("h",`
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
 `),c("&::before",{backgroundColor:"var(--n-bar-color)"})])]),B=Object.assign(Object.assign({},l.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),n=a=>$({name:`H${a}`,props:B,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:i}=H(e),r=l("Typography","-h",R,T,e,o),d=f(()=>{const{type:g}=e,{common:{cubicBezierEaseInOut:b},self:{headerFontWeight:m,headerTextColor:p,[s("headerPrefixWidth",a)]:u,[s("headerFontSize",a)]:x,[s("headerMargin",a)]:C,[s("headerBarWidth",a)]:v,[s("headerBarColor",g)]:y}}=r.value;return{"--n-bezier":b,"--n-font-size":x,"--n-margin":C,"--n-bar-color":y,"--n-bar-width":v,"--n-font-weight":m,"--n-text-color":p,"--n-prefix-width":u}}),t=i?N(`h${a}`,f(()=>e.type[0]),d,e):void 0;return{mergedClsPrefix:o,cssVars:i?void 0:d,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e;const{prefix:o,alignText:i,mergedClsPrefix:r,cssVars:d,$slots:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),z(`h${a}`,{class:[`${r}-h`,`${r}-h${a}`,this.themeClass,{[`${r}-h--prefix-bar`]:o,[`${r}-h--align-text`]:i}],style:d},t)}}),W=n("1"),L=n("2"),S=n("3"),F=n("4"),O=n("5"),V=n("6");export{L as N,W as a,S as b,F as c,O as d,V as e};
