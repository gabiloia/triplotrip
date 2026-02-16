import{_ as v}from"./BLzEf9tb.js";import{d as k,o as a,c as _,a as u,e as t,_ as g,b as i,w as o,u as e,t as p,g as r,B as f,s as x}from"./BboPWEKj.js";import{N as s}from"./DAJ8AmZg.js";import{N as c}from"./CV6rs4kW.js";import{N as w}from"./BcvnNqmw.js";import"./BmSAZQUJ.js";import"./BoIEE7Tp.js";import"./BxuM7kig.js";import"./Bk_rJcZu.js";const y={class:"page"},b={class:"page-header"},N={class:"links"},z={href:"https://www.naiveui.com/en-US/light/components/skeleton",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},B={class:"components-list"},S="tabler:external-link",q=k({__name:"Skeleton",setup(C){const d=x(!0);return(E,n)=>{const m=v;return a(),_("div",y,[u("div",b,[n[2]||(n[2]=u("div",{class:"title"},"Skeleton",-1)),u("div",N,[u("a",z,[t(g,{name:S,size:16}),n[1]||(n[1]=i(" docs ",-1))])])]),u("div",B,[t(m,{title:"Basic"},{code:o(({html:l})=>[i(p(l(`
					<n-skeleton text :repeat="2" />
					<n-skeleton text style="width: 60%" />
					`)),1)]),default:o(()=>[t(e(s),{text:"",repeat:2}),t(e(s),{text:"",style:{width:"60%"}})]),_:1}),t(m,{title:"Box"},{code:o(({html:l})=>[i(p(l(`
					<n-space vertical>
						<n-skeleton height="40px" width="33%" />
						<n-skeleton height="40px" width="66%" :sharp="false" />
						<n-skeleton height="40px" round />
						<n-skeleton height="40px" circle />
					</n-space>
					`)),1)]),default:o(()=>[t(e(c),{vertical:""},{default:o(()=>[t(e(s),{height:"40px",width:"33%"}),t(e(s),{height:"40px",width:"66%",sharp:!1}),t(e(s),{height:"40px",round:""}),t(e(s),{height:"40px",circle:""})]),_:1})]),_:1}),t(m,{title:"Size"},{code:o(({html:l,js:h})=>[i(p(l(`
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
					`))+" "+p(h("const loading = ref(true)")),1)]),default:o(()=>[t(e(c),{vertical:""},{default:o(()=>[t(e(c),null,{default:o(()=>[t(e(w),{value:d.value,"onUpdate:value":n[0]||(n[0]=l=>d.value=l)},null,8,["value"]),n[3]||(n[3]=i(" Loading ",-1))]),_:1}),t(e(c),null,{default:o(()=>[d.value?(a(),r(e(s),{key:0,width:146,sharp:!1,size:"medium"})):(a(),r(e(f),{key:1},{default:o(()=>[...n[4]||(n[4]=[i("Won't you fly high",-1)])]),_:1})),d.value?(a(),r(e(s),{key:2,width:132,round:"",size:"medium"})):(a(),r(e(f),{key:3,round:""},{default:o(()=>[...n[5]||(n[5]=[i("free bird, yeah",-1)])]),_:1})),d.value?(a(),r(e(s),{key:4,circle:"",size:"medium"})):(a(),r(e(f),{key:5,circle:""},{default:o(()=>[...n[6]||(n[6]=[i("?",-1)])]),_:1}))]),_:1})]),_:1})]),_:1})])])}}});export{q as default};
