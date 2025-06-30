import{_ as h}from"./D5u1-tCJ.js";import{ay as k,d as v,ab as B,aG as R,p as u,bd as E,aH as z,aN as y,aP as $,ez as N,c as O,o as G,a as i,e as s,b as o,_ as I,w as r,u as m,t as _}from"./BF1SYJr_.js";import{u as V}from"./DUSEJScG.js";import"./BXLbaQXh.js";import"./BV4ia66y.js";const H=k("gradient-text",`
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
`),P=Object.assign(Object.assign({},z.props),{size:[String,Number],fontSize:[String,Number],type:{type:String,default:"primary"},color:[Object,String],gradient:[Object,String]}),f=v({name:"GradientText",props:P,setup(n){V();const{mergedClsPrefixRef:a,inlineThemeDisabled:e}=R(n),d=u(()=>{const{type:t}=n;return t==="danger"?"error":t}),g=u(()=>{let t=n.size||n.fontSize;return t&&(t=E(t)),t||void 0}),S=u(()=>{const t=n.color||n.gradient;if(typeof t=="string")return t;if(t){const c=t.deg||0,p=t.from,b=t.to;return`linear-gradient(${c}deg, ${p} 0%, ${b} 100%)`}}),C=z("GradientText","-gradient-text",H,N,n,a),x=u(()=>{const{value:t}=d,{common:{cubicBezierEaseInOut:c},self:{rotate:p,[y("colorStart",t)]:b,[y("colorEnd",t)]:T,fontWeight:w}}=C.value;return{"--n-bezier":c,"--n-rotate":p,"--n-color-start":b,"--n-color-end":T,"--n-font-weight":w}}),l=e?$("gradient-text",u(()=>d.value[0]),x,n):void 0;return{mergedClsPrefix:a,compatibleType:d,styleFontSize:g,styleBgImage:S,cssVars:e?void 0:x,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){const{mergedClsPrefix:n,onRender:a}=this;return a==null||a(),B("span",{class:[`${n}-gradient-text`,`${n}-gradient-text--${this.compatibleType}-type`,this.themeClass],style:[{fontSize:this.styleFontSize,backgroundImage:this.styleBgImage},this.cssVars]},this.$slots)}}),j={class:"page"},A={class:"page-header"},D={class:"links"},F={href:"https://www.naiveui.com/en-US/light/components/gradient-text",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},L={class:"components-list"},K="tabler:external-link",Q=v({__name:"GradientText",setup(n){return(a,e)=>{const d=h;return G(),O("div",j,[i("div",A,[e[1]||(e[1]=i("div",{class:"title"},"Gradient Text",-1)),i("div",D,[i("a",F,[s(I,{name:K,size:16}),e[0]||(e[0]=o(" docs "))])])]),i("div",L,[s(d,{title:"Type"},{description:r(()=>e[2]||(e[2]=[o("A gradient text component can have different types.")])),code:r(({html:g})=>[o(_(g(`
					<n-gradient-text type="error">Boom!</n-gradient-text>
					<br />
					<n-gradient-text type="info">Emmm</n-gradient-text>
					<br />
					<n-gradient-text type="warning">Oops!</n-gradient-text>
					<br />
					<n-gradient-text type="success">Haha!</n-gradient-text>
					`)),1)]),default:r(()=>[s(m(f),{type:"error"},{default:r(()=>e[3]||(e[3]=[o("Boom!")])),_:1,__:[3]}),e[7]||(e[7]=i("br",null,null,-1)),s(m(f),{type:"info"},{default:r(()=>e[4]||(e[4]=[o("Emmm")])),_:1,__:[4]}),e[8]||(e[8]=i("br",null,null,-1)),s(m(f),{type:"warning"},{default:r(()=>e[5]||(e[5]=[o("Oops!")])),_:1,__:[5]}),e[9]||(e[9]=i("br",null,null,-1)),s(m(f),{type:"success"},{default:r(()=>e[6]||(e[6]=[o("Haha!")])),_:1,__:[6]})]),_:1,__:[7,8,9]}),s(d,{title:"Customizing gradient"},{description:r(()=>e[10]||(e[10]=[o("Design it yourself.")])),code:r(({html:g})=>[o(_(g(`
					<n-gradient-text :size="20" gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)">
						A Scribbled Color
					</n-gradient-text>
					`)),1)]),default:r(()=>[s(m(f),{size:20,gradient:"linear-gradient(90deg, red 0%, green 50%, blue 100%)"},{default:r(()=>e[11]||(e[11]=[o(" A Scribbled Color ")])),_:1,__:[11]})]),_:1})])])}}});export{Q as default};
