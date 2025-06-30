import{ay as b,aA as r,d as v,ab as C,aG as x,aH as l,p as a,aP as y,bq as z}from"./Cc935Wq4.js";const P=b("p",`
 box-sizing: border-box;
 transition: color .3s var(--n-bezier);
 margin: var(--n-margin);
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 color: var(--n-text-color);
`,[r("&:first-child","margin-top: 0;"),r("&:last-child","margin-bottom: 0;")]),T=Object.assign(Object.assign({},l.props),{depth:[String,Number]}),$=v({name:"P",props:T,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=x(e),h=l("Typography","-p",P,z,e,n),i=a(()=>{const{depth:o}=e,d=o||"1",{common:{cubicBezierEaseInOut:c},self:{pFontSize:p,pLineHeight:m,pMargin:g,pTextColor:f,[`pTextColor${d}Depth`]:u}}=h.value;return{"--n-bezier":c,"--n-font-size":p,"--n-line-height":m,"--n-margin":g,"--n-text-color":o===void 0?f:u}}),s=t?y("p",a(()=>`${e.depth||""}`),i,e):void 0;return{mergedClsPrefix:n,cssVars:t?void 0:i,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),C("p",{class:[`${this.mergedClsPrefix}-p`,this.themeClass],style:this.cssVars},this.$slots)}});export{$ as N};
