import{_ as P}from"./CecrDnS1.js";import{d as x,a9 as E,au as M,aw as N,p as A,az as I,e3 as R,q as C,c as B,o as T,a as y,e as t,b as a,_ as V,w as r,u as n,B as w,t as f,z as p}from"./CghEsQSB.js";import{k as S}from"./Cw-TSHwX.js";import{N as v}from"./B-kWjqJT.js";import{N as l}from"./Cg1KF0f9.js";import"./DBs0U9JY.js";import"./9xxGHCVY.js";import"./Caey5ouJ.js";import"./Bk_rJcZu.js";const $=Object.assign(Object.assign({},N.props),{tag:{type:String,default:"div"}}),j=x({name:"Element",alias:["El"],props:$,setup(c){const{mergedClsPrefixRef:i,inlineThemeDisabled:u}=M(c),m=N("Element","-element",void 0,R,c,i),s=A(()=>{const{common:g}=m.value;return Object.keys(g).reduce((b,e)=>(b[`--${S(e)}`]=g[e],b),{})}),o=u?I("element",void 0,s,c):void 0;return{mergedClsPrefix:i,cssVars:u?void 0:s,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var c;const{tag:i,mergedClsPrefix:u,cssVars:m,themeClass:s,onRender:o,$slots:g}=this;return o==null||o(),E(i,{role:"none",class:[`${u}-element`,s],style:m},(c=g.default)===null||c===void 0?void 0:c.call(g))}}),z={class:"page"},O={class:"page-header"},D={class:"links"},H={href:"https://www.naiveui.com/en-US/light/components/progress",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},L={class:"components-list"},U="tabler:external-link",Z=x({__name:"Progress",setup(c){const i=C(0);function u(){i.value+=10,i.value>100&&(i.value=0)}function m(){i.value-=10,i.value<0&&(i.value=100)}const s=C(0);function o(){s.value+=10,s.value>100&&(s.value=0)}function g(){s.value-=10,s.value<0&&(s.value=100)}return(b,e)=>{const k=P;return T(),B("div",z,[y("div",O,[e[1]||(e[1]=y("div",{class:"title"},"Progress",-1)),y("div",D,[y("a",H,[t(V,{name:U,size:16}),e[0]||(e[0]=a(" docs "))])])]),y("div",L,[t(k,{title:"Circle"},{description:r(()=>[e[7]||(e[7]=a(" Progress can be a circle. It can be ")),t(n(p),{code:""},{default:r(()=>e[2]||(e[2]=[a("default")])),_:1,__:[2]}),e[8]||(e[8]=a(" , ")),t(n(p),{code:""},{default:r(()=>e[3]||(e[3]=[a("info")])),_:1,__:[3]}),e[9]||(e[9]=a(" , ")),t(n(p),{code:""},{default:r(()=>e[4]||(e[4]=[a("success")])),_:1,__:[4]}),e[10]||(e[10]=a(" , ")),t(n(p),{code:""},{default:r(()=>e[5]||(e[5]=[a("warning")])),_:1,__:[5]}),e[11]||(e[11]=a(" or ")),t(n(p),{code:""},{default:r(()=>e[6]||(e[6]=[a("error")])),_:1,__:[6]}),e[12]||(e[12]=a(" status. "))]),code:r(({html:d,js:_})=>[a(f(d(`
					<n-space vertical>
						<n-space>
							<n-progress type="circle" :percentage="percentage" />
							<n-progress type="circle" status="info" :percentage="percentage" />
							<n-progress type="circle" status="success" :percentage="percentage" />
							<n-progress type="circle" status="warning" :percentage="percentage" />
							<n-progress type="circle" status="error" :percentage="percentage" />
						</n-space>
						<n-space>
							<n-button @click="minus">Minus 10%</n-button>
							<n-button @click="add">Add 10%</n-button>
						</n-space>
					</n-space>
					`))+" "+f(_(`
						const percentage = ref(0)

						const add = () => {
							percentage.value += 10
							if (percentage.value > 100) {
								percentage.value = 0
							}
						}

						const minus = () => {
							percentage.value -= 10
							if (percentage.value < 0) {
								percentage.value = 100
							}
						}
						`)),1)]),default:r(()=>[t(n(v),{vertical:""},{default:r(()=>[t(n(v),null,{default:r(()=>[t(n(l),{type:"circle",percentage:i.value},null,8,["percentage"]),t(n(l),{type:"circle",status:"info",percentage:i.value},null,8,["percentage"]),t(n(l),{type:"circle",status:"success",percentage:i.value},null,8,["percentage"]),t(n(l),{type:"circle",status:"warning",percentage:i.value},null,8,["percentage"]),t(n(l),{type:"circle",status:"error",percentage:i.value},null,8,["percentage"])]),_:1}),t(n(v),null,{default:r(()=>[t(n(w),{onClick:m},{default:r(()=>e[13]||(e[13]=[a("Minus 10%")])),_:1,__:[13]}),t(n(w),{onClick:u},{default:r(()=>e[14]||(e[14]=[a("Add 10%")])),_:1,__:[14]})]),_:1})]),_:1})]),_:1}),t(k,{title:"Line"},{description:r(()=>[e[20]||(e[20]=a(" In fact, progress of line type don't need four different styles. However, since UI has designed it, I finally implemented them all. It also support ")),t(n(p),{code:""},{default:r(()=>e[15]||(e[15]=[a("default")])),_:1,__:[15]}),e[21]||(e[21]=a(" , ")),t(n(p),{code:""},{default:r(()=>e[16]||(e[16]=[a("info")])),_:1,__:[16]}),e[22]||(e[22]=a(" , ")),t(n(p),{code:""},{default:r(()=>e[17]||(e[17]=[a("success")])),_:1,__:[17]}),e[23]||(e[23]=a(" , ")),t(n(p),{code:""},{default:r(()=>e[18]||(e[18]=[a("warning")])),_:1,__:[18]}),e[24]||(e[24]=a(" or ")),t(n(p),{code:""},{default:r(()=>e[19]||(e[19]=[a("error")])),_:1,__:[19]}),e[25]||(e[25]=a(" status. "))]),code:r(({html:d,js:_})=>[a(f(d(`
					<n-space vertical>
						<n-progress type="line" :percentage="percentage" :show-indicator="false" />
						<n-progress type="line" :percentage="percentage" />
						<n-progress type="line" :percentage="percentage" :indicator-placement="'inside'" />
						<n-progress type="line" status="info" :percentage="percentage" :show-indicator="false" />
						<n-progress type="line" status="info" :percentage="percentage" />
						<n-progress
							type="line"
							status="info"
							:percentage="percentage"
							:indicator-placement="'inside'"
						/>
						<n-progress type="line" status="success" :percentage="percentage" :show-indicator="false" />
						<n-progress type="line" status="success" :percentage="percentage" />
						<n-progress
							type="line"
							status="success"
							:percentage="percentage"
							:indicator-placement="'inside'"
						/>
						<n-progress type="line" status="warning" :percentage="percentage" :show-indicator="false" />
						<n-progress type="line" status="warning" :percentage="percentage" />
						<n-progress
							type="line"
							status="warning"
							:percentage="percentage"
							:indicator-placement="'inside'"
						/>
						<n-progress type="line" status="error" :percentage="percentage" :show-indicator="false" />
						<n-progress type="line" status="error" :percentage="percentage" />
						<n-progress
							type="line"
							status="error"
							:percentage="percentage"
							:indicator-placement="'inside'"
						/>
						<n-space>
							<n-button @click="minus">Minus 10%</n-button>
							<n-button @click="add">Add 10%</n-button>
						</n-space>
					</n-space>
					`))+" "+f(_(`
						const percentage = ref(0)

						const add = () => {
							percentage.value += 10
							if (percentage.value > 100) {
								percentage.value = 0
							}
						}

						const minus = () => {
							percentage.value -= 10
							if (percentage.value < 0) {
								percentage.value = 100
							}
						}
						`)),1)]),default:r(()=>[t(n(v),{vertical:""},{default:r(()=>[t(n(l),{type:"line",percentage:s.value,"show-indicator":!1},null,8,["percentage"]),t(n(l),{type:"line",percentage:s.value},null,8,["percentage"]),t(n(l),{type:"line",percentage:s.value,"indicator-placement":"inside"},null,8,["percentage"]),t(n(l),{type:"line",status:"info",percentage:s.value,"show-indicator":!1},null,8,["percentage"]),t(n(l),{type:"line",status:"info",percentage:s.value},null,8,["percentage"]),t(n(l),{type:"line",status:"info",percentage:s.value,"indicator-placement":"inside"},null,8,["percentage"]),t(n(l),{type:"line",status:"success",percentage:s.value,"show-indicator":!1},null,8,["percentage"]),t(n(l),{type:"line",status:"success",percentage:s.value},null,8,["percentage"]),t(n(l),{type:"line",status:"success",percentage:s.value,"indicator-placement":"inside"},null,8,["percentage"]),t(n(l),{type:"line",status:"warning",percentage:s.value,"show-indicator":!1},null,8,["percentage"]),t(n(l),{type:"line",status:"warning",percentage:s.value},null,8,["percentage"]),t(n(l),{type:"line",status:"warning",percentage:s.value,"indicator-placement":"inside"},null,8,["percentage"]),t(n(l),{type:"line",status:"error",percentage:s.value,"show-indicator":!1},null,8,["percentage"]),t(n(l),{type:"line",status:"error",percentage:s.value},null,8,["percentage"]),t(n(l),{type:"line",status:"error",percentage:s.value,"indicator-placement":"inside"},null,8,["percentage"]),t(n(v),null,{default:r(()=>[t(n(w),{onClick:g},{default:r(()=>e[26]||(e[26]=[a("Minus 10%")])),_:1,__:[26]}),t(n(w),{onClick:o},{default:r(()=>e[27]||(e[27]=[a("Add 10%")])),_:1,__:[27]})]),_:1})]),_:1})]),_:1}),t(k,{title:"Multiple circle"},{code:r(({html:d,js:_})=>[a(f(d(`
					<n-space vertical>
						<n-el>
							<n-progress
								type="multiple-circle"
								:stroke-width="6"
								:circle-gap="0.5"
								:percentage="[
									percentage,
									(percentage + 10) % 100,
									(percentage + 20) % 100,
									(percentage + 30) % 100
								]"
								:color="[
									'var(--info-color)',
									'var(--success-color)',
									'var(--warning-color)',
									'var(--error-color)'
								]"
								:rail-style="[
									{ stroke: 'var(--info-color)', opacity: 0.3 },
									{ stroke: 'var(--success-color)', opacity: 0.3 },
									{ stroke: 'var(--warning-color)', opacity: 0.3 },
									{ stroke: 'var(--error-color)', opacity: 0.3 }
								]"
							>
								<div style="text-align: center">Circle racing!</div>
							</n-progress>
						</n-el>
						<n-space>
							<n-button @click="minus">Minus 10%</n-button>
							<n-button @click="add">Add 10%</n-button>
						</n-space>
					</n-space>
					`))+" "+f(_(`
						const percentage = ref(0)

						const add = () => {
							percentage.value += 10
							if (percentage.value > 100) {
								percentage.value = 0
							}
						}

						const minus = () => {
							percentage.value -= 10
							if (percentage.value < 0) {
								percentage.value = 100
							}
						}
						`)),1)]),default:r(()=>[t(n(v),{vertical:""},{default:r(()=>[t(n(j),null,{default:r(()=>[t(n(l),{type:"multiple-circle","stroke-width":6,"circle-gap":.5,percentage:[i.value,(i.value+10)%100,(i.value+20)%100,(i.value+30)%100],color:["var(--info-color)","var(--success-color)","var(--warning-color)","var(--error-color)"],"rail-style":[{stroke:"var(--info-color)",opacity:.3},{stroke:"var(--success-color)",opacity:.3},{stroke:"var(--warning-color)",opacity:.3},{stroke:"var(--error-color)",opacity:.3}]},{default:r(()=>e[28]||(e[28]=[y("div",{style:{"text-align":"center"}},"Circle racing!",-1)])),_:1,__:[28]},8,["percentage"])]),_:1}),t(n(v),null,{default:r(()=>[t(n(w),{onClick:m},{default:r(()=>e[29]||(e[29]=[a("Minus 10%")])),_:1,__:[29]}),t(n(w),{onClick:u},{default:r(()=>e[30]||(e[30]=[a("Add 10%")])),_:1,__:[30]})]),_:1})]),_:1})]),_:1}),t(k,{title:"Processing"},{code:r(({html:d})=>[a(f(d(`
					<n-progress type="line" :percentage="60" :indicator-placement="'inside'" processing />
					`)),1)]),default:r(()=>[t(n(l),{type:"line",percentage:60,"indicator-placement":"inside",processing:""})]),_:1})])])}}});export{Z as default};
