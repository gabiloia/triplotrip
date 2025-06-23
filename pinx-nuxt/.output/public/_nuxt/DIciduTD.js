import{ap as i,as as v,aL as u,ao as o,d as h,a9 as d,C as g,au as x,aw as m,av as O,p as c,cS as y,ax as b,cT as A}from"./BfwEk-Nq.js";const R=i("avatar-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[v("expand-on-hover",[i("avatar",[o("&:not(:first-child)",`
 transition: margin .3s var(--n-bezier);
 `)]),o("&:hover",[u("vertical",[i("avatar",[o("&:not(:first-child)",`
 margin-left: 0 !important;
 `)])]),v("vertical",[i("avatar",[o("&:not(:first-child)",`
 margin-top: 0 !important;
 `)])])])]),u("vertical",`
 flex-direction: row;
 `,[i("avatar",[o("&:not(:first-child)",`
 margin-left: var(--n-gap);
 `)])]),v("vertical",`
 flex-direction: column;
 `,[i("avatar",[o("&:not(:first-child)",`
 margin-top: var(--n-gap);
 `)])])]),G=Object.assign(Object.assign({},m.props),{max:Number,maxStyle:[Object,String],options:{type:Array,default:()=>[]},vertical:Boolean,expandOnHover:Boolean,size:[String,Number]}),N=h({name:"AvatarGroup",props:G,slots:Object,setup(e){const{mergedClsPrefixRef:l,mergedRtlRef:t}=x(e),s=m("AvatarGroup","-avatar-group",R,y,e,l);b(A,e);const n=O("AvatarGroup",t,l),p=c(()=>{const{max:a}=e;if(a===void 0)return;const{options:r}=e;return r.length>a?r.slice(a-1,r.length):[]}),f=c(()=>{const{options:a,max:r}=e;return r===void 0?a:a.length>r?a.slice(0,r-1):a.length===r?a.slice(0,r):a});return{mergedTheme:s,rtlEnabled:n,mergedClsPrefix:l,restOptions:p,displayedOptions:f,cssVars:c(()=>({"--n-gap":s.value.self.gap}))}},render(){const{mergedClsPrefix:e,displayedOptions:l,restOptions:t,mergedTheme:s,$slots:n}=this;return d("div",{class:[`${e}-avatar-group`,this.rtlEnabled&&`${e}-avatar-group--rtl`,this.vertical&&`${e}-avatar-group--vertical`,this.expandOnHover&&`${e}-avatar-group--expand-on-hover`],style:this.cssVars,role:"group"},l.map(p=>n.avatar?n.avatar({option:p}):d(g,{src:p.src,theme:s.peers.Avatar,themeOverrides:s.peerOverrides.Avatar})),t!==void 0&&t.length>0&&(n.rest?n.rest({options:t,rest:t.length}):d(g,{style:this.maxStyle,theme:s.peers.Avatar,themeOverrides:s.peerOverrides.Avatar},{default:()=>`+${t.length}`})))}});export{N};
