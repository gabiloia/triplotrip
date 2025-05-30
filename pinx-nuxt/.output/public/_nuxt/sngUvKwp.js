import{ay as b,aw as w,d as C,a7 as p,n as N,dg as R,F as E,aE as F,aF as k,s as H,aL as O,cr as f,dh as _}from"./CFnCIwgc.js";import{u as j}from"./FC36dodC.js";const A=b([w("skeleton",`
 height: 1em;
 width: 100%;
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 animation: 2s skeleton-loading infinite cubic-bezier(0.36, 0, 0.64, 1);
 background-color: var(--n-color-start);
 `),b("@keyframes skeleton-loading",`
 0% {
 background: var(--n-color-start);
 }
 40% {
 background: var(--n-color-end);
 }
 80% {
 background: var(--n-color-start);
 }
 100% {
 background: var(--n-color-start);
 }
 `)]),L=Object.assign(Object.assign({},k.props),{text:Boolean,round:Boolean,circle:Boolean,height:[String,Number],width:[String,Number],size:String,repeat:{type:Number,default:1},animated:{type:Boolean,default:!0},sharp:{type:Boolean,default:!0}}),I=C({name:"Skeleton",inheritAttrs:!1,props:L,setup(t){j();const{mergedClsPrefixRef:o}=F(t),a=k("Skeleton","-skeleton",A,_,t,o);return{mergedClsPrefix:o,style:H(()=>{var r,n;const s=a.value,{common:{cubicBezierEaseInOut:v}}=s,m=s.self,{color:y,colorEnd:z,borderRadius:x}=m;let i;const{circle:l,sharp:B,round:P,width:e,height:c,size:g,text:h,animated:S}=t;g!==void 0&&(i=m[O("height",g)]);const d=l?(r=e??c)!==null&&r!==void 0?r:i:e,u=(n=l?e??c:c)!==null&&n!==void 0?n:i;return{display:h?"inline-block":"",verticalAlign:h?"-0.125em":"",borderRadius:l?"50%":P?"4096px":B?"":x,width:typeof d=="number"?f(d):d,height:typeof u=="number"?f(u):u,animation:S?"":"none","--n-bezier":v,"--n-color-start":y,"--n-color-end":z}})}},render(){const{repeat:t,style:o,mergedClsPrefix:a,$attrs:r}=this,n=p("div",N({class:`${a}-skeleton`,style:o},r));return t>1?p(E,null,R(t,null).map(s=>[n,`
`])):n}});export{I as N};
