import{ap as v,ao as r,d as C,a9 as b,au as x,aw as l,p as a,az as z,bs as y}from"./CghEsQSB.js";const T=v("p",`
 box-sizing: border-box;
 transition: color .3s var(--n-bezier);
 margin: var(--n-margin);
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 color: var(--n-text-color);
`,[r("&:first-child","margin-top: 0;"),r("&:last-child","margin-bottom: 0;")]),P=Object.assign(Object.assign({},l.props),{depth:[String,Number]}),$=C({name:"P",props:P,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=x(e),h=l("Typography","-p",T,y,e,n),i=a(()=>{const{depth:o}=e,d=o||"1",{common:{cubicBezierEaseInOut:c},self:{pFontSize:p,pLineHeight:m,pMargin:g,pTextColor:u,[`pTextColor${d}Depth`]:f}}=h.value;return{"--n-bezier":c,"--n-font-size":p,"--n-line-height":m,"--n-margin":g,"--n-text-color":o===void 0?u:f}}),s=t?z("p",a(()=>`${e.depth||""}`),i,e):void 0;return{mergedClsPrefix:n,cssVars:t?void 0:i,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),b("p",{class:[`${this.mergedClsPrefix}-p`,this.themeClass],style:this.cssVars},this.$slots)}});export{$ as N};
