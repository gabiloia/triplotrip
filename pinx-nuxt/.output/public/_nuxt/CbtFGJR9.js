import{_}from"./BLzEf9tb.js";import{az as k,d as S,ac as B,aH as R,aI as z,aL as E,q as u,bf as $,eA as I,aS as y,o as O,c as N,a as i,e as s,_ as V,b as o,w as r,u as m,t as v}from"./BboPWEKj.js";import{u as G}from"./BxuM7kig.js";import"./BmSAZQUJ.js";import"./BoIEE7Tp.js";const H=k("gradient-text",`
 display: inline-block;
 font-weight: var(--n-font-weight);
 -webkit-background-clip: text;
 background-clip: text;
 color: #0000;
 white-space: nowrap;
 background-image: linear-gradient(var(--n-rotate), var(--n-color-start) 0%, var(--n-color-end) 100%);
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier);
`),j=Object.assign(Object.assign({},z.props),{size:[String,Number],fontSize:[String,Number],type:{type:String,default:"primary"},color:[Object,String],gradient:[Object,String]}),f=S({name:"GradientText",props:j,setup(n){G();const{mergedClsPrefixRef:a,inlineThemeDisabled:e}=R(n),d=u(()=>{const{type:t}=n;return t==="danger"?"error":t}),g=u(()=>{let t=n.size||n.fontSize;return t&&(t=$(t)),t||void 0}),C=u(()=>{const t=n.color||n.gradient;if(typeof t=="string")return t;if(t){const c=t.deg||0,p=t.from,x=t.to;return`linear-gradient(${c}deg, ${p} 0%, ${x} 100%)`}}),T=z("GradientText","-gradient-text",H,I,n,a),b=u(()=>{const{value:t}=d,{common:{cubicBezierEaseInOut:c},self:{rotate:p,[y("colorStart",t)]:x,[y("colorEnd",t)]:w,fontWeight:h}}=T.value;return{"--n-bezier":c,"--n-rotate":p,"--n-color-start":x,"--n-color-end":w,"--n-font-weight":h}}),l=e?E("gradient-text",u(()=>d.value[0]),b,n):void 0;return{mergedClsPrefix:a,compatibleType:d,styleFontSize:g,styleBgImage:C,cssVars:e?void 0:b,themeClass:l?.themeClass,onRender:l?.onRender}},render(){const{mergedClsPrefix:n,onRender:a}=this;return a?.(),B("span",{class:[`${n}-gradient-text`,`${n}-gradient-text--${this.compatibleType}-type`,this.themeClass],style:[{fontSize:this.styleFontSize,backgroundImage:this.styleBgImage},this.cssVars]},this.$slots)}}),A={class:"page"},P={class:"page-header"},D={class:"links"},F={href:"https://www.naiveui.com/en-US/light/components/gradient-text",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},L={class:"components-list"},q="tabler:external-link",Q=S({__name:"GradientText",setup(n){return(a,e)=>{const d=_;return O(),N("div",A,[i("div",P,[e[1]||(e[1]=i("div",{class:"title"},"Gradient Text",-1)),i("div",D,[i("a",F,[s(V,{name:q,size:16}),e[0]||(e[0]=o(" docs ",-1))])])]),i("div",L,[s(d,{title:"Type"},{description:r(()=>[...e[2]||(e[2]=[o("A gradient text component can have different types.",-1)])]),code:r(({html:g})=>[o(v(g(`
					<n-gradient-text type="error">Boom!</n-gradient-text>
					<br />
					<n-gradient-text type="info">Emmm</n-gradient-text>
					<br />
					<n-gradient-text type="warning">Oops!</n-gradient-text>
					<br />
					<n-gradient-text type="success">Haha!</n-gradient-text>
					`)),1)]),default:r(()=>[s(m(f),{type:"error"},{default:r(()=>[...e[3]||(e[3]=[o("Boom!",-1)])]),_:1}),e[7]||(e[7]=i("br",null,null,-1)),s(m(f),{type:"info"},{default:r(()=>[...e[4]||(e[4]=[o("Emmm",-1)])]),_:1}),e[8]||(e[8]=i("br",null,null,-1)),s(m(f),{type:"warning"},{default:r(()=>[...e[5]||(e[5]=[o("Oops!",-1)])]),_:1}),e[9]||(e[9]=i("br",null,null,-1)),s(m(f),{type:"success"},{default:r(()=>[...e[6]||(e[6]=[o("Haha!",-1)])]),_:1})]),_:1}),s(d,{title:"Customizing gradient"},{description:r(()=>[...e[10]||(e[10]=[o("Design it yourself.",-1)])]),code:r(({html:g})=>[o(v(g(`
					<n-gradient-text :size="20" gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)">
						A Scribbled Color
					</n-gradient-text>
					`)),1)]),default:r(()=>[s(m(f),{size:20,gradient:"linear-gradient(90deg, red 0%, green 50%, blue 100%)"},{default:r(()=>[...e[11]||(e[11]=[o(" A Scribbled Color ",-1)])]),_:1})]),_:1})])])}}});export{Q as default};
