import{ao as p,ap as w,d as C,a9 as b,m as N,cQ as R,F as H,au as O,aw as k,p as _,aS as j,cx as f,cR as A}from"./CghEsQSB.js";import{u as E}from"./mULyD-H1.js";const F=p([w("skeleton",`
 height: 1em;
 width: 100%;
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 animation: 2s skeleton-loading infinite cubic-bezier(0.36, 0, 0.64, 1);
 background-color: var(--n-color-start);
 `),p("@keyframes skeleton-loading",`
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
 `)]),T=Object.assign(Object.assign({},k.props),{text:Boolean,round:Boolean,circle:Boolean,height:[String,Number],width:[String,Number],size:String,repeat:{type:Number,default:1},animated:{type:Boolean,default:!0},sharp:{type:Boolean,default:!0}}),K=C({name:"Skeleton",inheritAttrs:!1,props:T,setup(t){E();const{mergedClsPrefixRef:o}=O(t),a=k("Skeleton","-skeleton",F,A,t,o);return{mergedClsPrefix:o,style:_(()=>{var r,n;const s=a.value,{common:{cubicBezierEaseInOut:v}}=s,m=s.self,{color:y,colorEnd:x,borderRadius:z}=m;let i;const{circle:l,sharp:B,round:S,width:e,height:c,size:g,text:h,animated:P}=t;g!==void 0&&(i=m[j("height",g)]);const d=l?(r=e??c)!==null&&r!==void 0?r:i:e,u=(n=l?e??c:c)!==null&&n!==void 0?n:i;return{display:h?"inline-block":"",verticalAlign:h?"-0.125em":"",borderRadius:l?"50%":S?"4096px":B?"":z,width:typeof d=="number"?f(d):d,height:typeof u=="number"?f(u):u,animation:P?"":"none","--n-bezier":v,"--n-color-start":y,"--n-color-end":x}})}},render(){const{repeat:t,style:o,mergedClsPrefix:a,$attrs:r}=this,n=b("div",N({class:`${a}-skeleton`,style:o},r));return t>1?b(H,null,R(t,null).map(s=>[n,`
`])):n}});export{K as N};
