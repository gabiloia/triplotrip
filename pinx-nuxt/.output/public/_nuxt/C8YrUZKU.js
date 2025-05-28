import{aw as i,ax as p,aA as u,ay as o,d as h,a7 as v,x as g,aE as x,aF as m,bj as O,p as c,di as y,aI as b,dj as A}from"./CKyhG2UO.js";const R=i("avatar-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[p("expand-on-hover",[i("avatar",[o("&:not(:first-child)",`
 transition: margin .3s var(--n-bezier);
 `)]),o("&:hover",[u("vertical",[i("avatar",[o("&:not(:first-child)",`
 margin-left: 0 !important;
 `)])]),p("vertical",[i("avatar",[o("&:not(:first-child)",`
 margin-top: 0 !important;
 `)])])])]),u("vertical",`
 flex-direction: row;
 `,[i("avatar",[o("&:not(:first-child)",`
 margin-left: var(--n-gap);
 `)])]),p("vertical",`
 flex-direction: column;
 `,[i("avatar",[o("&:not(:first-child)",`
 margin-top: var(--n-gap);
 `)])])]),j=Object.assign(Object.assign({},m.props),{max:Number,maxStyle:[Object,String],options:{type:Array,default:()=>[]},vertical:Boolean,expandOnHover:Boolean,size:[String,Number]}),N=h({name:"AvatarGroup",props:j,slots:Object,setup(e){const{mergedClsPrefixRef:l,mergedRtlRef:t}=x(e),s=m("AvatarGroup","-avatar-group",R,y,e,l);b(A,e);const n=O("AvatarGroup",t,l),d=c(()=>{const{max:a}=e;if(a===void 0)return;const{options:r}=e;return r.length>a?r.slice(a-1,r.length):[]}),f=c(()=>{const{options:a,max:r}=e;return r===void 0?a:a.length>r?a.slice(0,r-1):a.length===r?a.slice(0,r):a});return{mergedTheme:s,rtlEnabled:n,mergedClsPrefix:l,restOptions:d,displayedOptions:f,cssVars:c(()=>({"--n-gap":s.value.self.gap}))}},render(){const{mergedClsPrefix:e,displayedOptions:l,restOptions:t,mergedTheme:s,$slots:n}=this;return v("div",{class:[`${e}-avatar-group`,this.rtlEnabled&&`${e}-avatar-group--rtl`,this.vertical&&`${e}-avatar-group--vertical`,this.expandOnHover&&`${e}-avatar-group--expand-on-hover`],style:this.cssVars,role:"group"},l.map(d=>n.avatar?n.avatar({option:d}):v(g,{src:d.src,theme:s.peers.Avatar,themeOverrides:s.peerOverrides.Avatar})),t!==void 0&&t.length>0&&(n.rest?n.rest({options:t,rest:t.length}):v(g,{style:this.maxStyle,theme:s.peers.Avatar,themeOverrides:s.peerOverrides.Avatar},{default:()=>`+${t.length}`})))}});export{N};
