import{az as w,aB as c,aA as h,d as z,ac as H,aH as $,aI as l,aL as T,q as f,br as N,aS as o}from"./BboPWEKj.js";const B=w("h",`
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
 `),c("&::before",{backgroundColor:"var(--n-bar-color)"})])]),R=Object.assign(Object.assign({},l.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),n=a=>z({name:`H${a}`,props:R,setup(e){const{mergedClsPrefixRef:s,inlineThemeDisabled:i}=$(e),r=l("Typography","-h",B,N,e,s),d=f(()=>{const{type:g}=e,{common:{cubicBezierEaseInOut:b},self:{headerFontWeight:m,headerTextColor:p,[o("headerPrefixWidth",a)]:u,[o("headerFontSize",a)]:x,[o("headerMargin",a)]:C,[o("headerBarWidth",a)]:v,[o("headerBarColor",g)]:y}}=r.value;return{"--n-bezier":b,"--n-font-size":x,"--n-margin":C,"--n-bar-color":y,"--n-bar-width":v,"--n-font-weight":m,"--n-text-color":p,"--n-prefix-width":u}}),t=i?T(`h${a}`,f(()=>e.type[0]),d,e):void 0;return{mergedClsPrefix:s,cssVars:i?void 0:d,themeClass:t?.themeClass,onRender:t?.onRender}},render(){var e;const{prefix:s,alignText:i,mergedClsPrefix:r,cssVars:d,$slots:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),H(`h${a}`,{class:[`${r}-h`,`${r}-h${a}`,this.themeClass,{[`${r}-h--prefix-bar`]:s,[`${r}-h--align-text`]:i}],style:d},t)}}),S=n("1"),W=n("2"),L=n("3"),O=n("4"),V=n("5"),j=n("6");export{W as N,S as a,L as b,O as c,V as d,j as e};
