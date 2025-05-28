import{_ as v}from"./B3gcOJmJ.js";import{d as k,r as g,c as _,a,b as u,g as t,f as s,h as x,w as o,u as e,t as p,i as r,B as f}from"./G6QKWTEq.js";import{N as i}from"./BuBNX3BJ.js";import{N as c}from"./DpKJxeKj.js";import{N as w}from"./oNiUkAPQ.js";import"./B3cGRaQN.js";import"./-7JWf2sr.js";import"./DjCoZ2C3.js";import"./Bk_rJcZu.js";const y={class:"page"},b={class:"page-header"},N={class:"links"},z={href:"https://www.naiveui.com/en-US/light/components/skeleton",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},B={class:"components-list"},S="tabler:external-link",q=k({__name:"Skeleton",setup(C){const d=g(!0);return(E,n)=>{const m=v;return a(),_("div",y,[u("div",b,[n[2]||(n[2]=u("div",{class:"title"},"Skeleton",-1)),u("div",N,[u("a",z,[t(x,{name:S,size:16}),n[1]||(n[1]=s(" docs "))])])]),u("div",B,[t(m,{title:"Basic"},{code:o(({html:l})=>[s(p(l(`
					<n-skeleton text :repeat="2" />
					<n-skeleton text style="width: 60%" />
					`)),1)]),default:o(()=>[t(e(i),{text:"",repeat:2}),t(e(i),{text:"",style:{width:"60%"}})]),_:1}),t(m,{title:"Box"},{code:o(({html:l})=>[s(p(l(`
					<n-space vertical>
						<n-skeleton height="40px" width="33%" />
						<n-skeleton height="40px" width="66%" :sharp="false" />
						<n-skeleton height="40px" round />
						<n-skeleton height="40px" circle />
					</n-space>
					`)),1)]),default:o(()=>[t(e(c),{vertical:""},{default:o(()=>[t(e(i),{height:"40px",width:"33%"}),t(e(i),{height:"40px",width:"66%",sharp:!1}),t(e(i),{height:"40px",round:""}),t(e(i),{height:"40px",circle:""})]),_:1})]),_:1}),t(m,{title:"Size"},{code:o(({html:l,js:h})=>[s(p(l(`
					<n-space vertical>
						<n-space>
							<n-switch v-model:value="loading" />
							Loading
						</n-space>
						<n-space>
							<n-skeleton v-if="loading" :width="146" :sharp="false" size="medium" />
							<n-button v-else>Won't you fly high</n-button>
							<n-skeleton v-if="loading" :width="132" round size="medium" />
							<n-button v-else round>free bird, yeah</n-button>
							<n-skeleton v-if="loading" circle size="medium" />
							<n-button v-else circle>?</n-button>
						</n-space>
					</n-space>
					`))+" "+p(h("const loading = ref(true)")),1)]),default:o(()=>[t(e(c),{vertical:""},{default:o(()=>[t(e(c),null,{default:o(()=>[t(e(w),{value:d.value,"onUpdate:value":n[0]||(n[0]=l=>d.value=l)},null,8,["value"]),n[3]||(n[3]=s(" Loading "))]),_:1}),t(e(c),null,{default:o(()=>[d.value?(a(),r(e(i),{key:0,width:146,sharp:!1,size:"medium"})):(a(),r(e(f),{key:1},{default:o(()=>n[4]||(n[4]=[s("Won't you fly high")])),_:1})),d.value?(a(),r(e(i),{key:2,width:132,round:"",size:"medium"})):(a(),r(e(f),{key:3,round:""},{default:o(()=>n[5]||(n[5]=[s("free bird, yeah")])),_:1})),d.value?(a(),r(e(i),{key:4,circle:"",size:"medium"})):(a(),r(e(f),{key:5,circle:""},{default:o(()=>n[6]||(n[6]=[s("?")])),_:1}))]),_:1})]),_:1})]),_:1})])])}}});export{q as default};
