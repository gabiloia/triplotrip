import{_ as k}from"./BfzzecIy.js";import{aw as _,d as S,a7 as B,aE as E,s as u,ba as R,aF as z,aL as y,aN as $,eL as N,c as O,a as I,b as i,g as s,f as o,h as V,w as r,u as m,t as v}from"./CFnCIwgc.js";import{u as G}from"./FC36dodC.js";import"./uLUuACJr.js";import"./Bg-0ZsXF.js";const j=_("gradient-text",`
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
`),F=Object.assign(Object.assign({},z.props),{size:[String,Number],fontSize:[String,Number],type:{type:String,default:"primary"},color:[Object,String],gradient:[Object,String]}),f=S({name:"GradientText",props:F,setup(n){G();const{mergedClsPrefixRef:a,inlineThemeDisabled:e}=E(n),d=u(()=>{const{type:t}=n;return t==="danger"?"error":t}),g=u(()=>{let t=n.size||n.fontSize;return t&&(t=R(t)),t||void 0}),C=u(()=>{const t=n.color||n.gradient;if(typeof t=="string")return t;if(t){const c=t.deg||0,p=t.from,x=t.to;return`linear-gradient(${c}deg, ${p} 0%, ${x} 100%)`}}),w=z("GradientText","-gradient-text",j,N,n,a),b=u(()=>{const{value:t}=d,{common:{cubicBezierEaseInOut:c},self:{rotate:p,[y("colorStart",t)]:x,[y("colorEnd",t)]:T,fontWeight:h}}=w.value;return{"--n-bezier":c,"--n-rotate":p,"--n-color-start":x,"--n-color-end":T,"--n-font-weight":h}}),l=e?$("gradient-text",u(()=>d.value[0]),b,n):void 0;return{mergedClsPrefix:a,compatibleType:d,styleFontSize:g,styleBgImage:C,cssVars:e?void 0:b,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){const{mergedClsPrefix:n,onRender:a}=this;return a==null||a(),B("span",{class:[`${n}-gradient-text`,`${n}-gradient-text--${this.compatibleType}-type`,this.themeClass],style:[{fontSize:this.styleFontSize,backgroundImage:this.styleBgImage},this.cssVars]},this.$slots)}}),H={class:"page"},L={class:"page-header"},P={class:"links"},A={href:"https://www.naiveui.com/en-US/light/components/gradient-text",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},D={class:"components-list"},K="tabler:external-link",Q=S({__name:"GradientText",setup(n){return(a,e)=>{const d=k;return I(),O("div",H,[i("div",L,[e[1]||(e[1]=i("div",{class:"title"},"Gradient Text",-1)),i("div",P,[i("a",A,[s(V,{name:K,size:16}),e[0]||(e[0]=o(" docs "))])])]),i("div",D,[s(d,{title:"Type"},{description:r(()=>e[2]||(e[2]=[o("A gradient text component can have different types.")])),code:r(({html:g})=>[o(v(g(`
					<n-gradient-text type="error">Boom!</n-gradient-text>
					<br />
					<n-gradient-text type="info">Emmm</n-gradient-text>
					<br />
					<n-gradient-text type="warning">Oops!</n-gradient-text>
					<br />
					<n-gradient-text type="success">Haha!</n-gradient-text>
					`)),1)]),default:r(()=>[s(m(f),{type:"error"},{default:r(()=>e[3]||(e[3]=[o("Boom!")])),_:1}),e[7]||(e[7]=i("br",null,null,-1)),s(m(f),{type:"info"},{default:r(()=>e[4]||(e[4]=[o("Emmm")])),_:1}),e[8]||(e[8]=i("br",null,null,-1)),s(m(f),{type:"warning"},{default:r(()=>e[5]||(e[5]=[o("Oops!")])),_:1}),e[9]||(e[9]=i("br",null,null,-1)),s(m(f),{type:"success"},{default:r(()=>e[6]||(e[6]=[o("Haha!")])),_:1})]),_:1}),s(d,{title:"Customizing gradient"},{description:r(()=>e[10]||(e[10]=[o("Design it yourself.")])),code:r(({html:g})=>[o(v(g(`
					<n-gradient-text :size="20" gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)">
						A Scribbled Color
					</n-gradient-text>
					`)),1)]),default:r(()=>[s(m(f),{size:20,gradient:"linear-gradient(90deg, red 0%, green 50%, blue 100%)"},{default:r(()=>e[11]||(e[11]=[o(" A Scribbled Color ")])),_:1})]),_:1})])])}}});export{Q as default};
