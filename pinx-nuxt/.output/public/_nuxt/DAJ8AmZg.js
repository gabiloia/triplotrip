import{aB as b,az as C,d as N,ac as p,m as w,bT as H,F as R,aH as O,aI as k,q as T,d3 as _,aS as j,bQ as f}from"./BboPWEKj.js";import{u as A}from"./BxuM7kig.js";const E=b([C("skeleton",`
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
 `)]),F=Object.assign(Object.assign({},k.props),{text:Boolean,round:Boolean,circle:Boolean,height:[String,Number],width:[String,Number],size:String,repeat:{type:Number,default:1},animated:{type:Boolean,default:!0},sharp:{type:Boolean,default:!0}}),q=N({name:"Skeleton",inheritAttrs:!1,props:F,setup(t){A();const{mergedClsPrefixRef:o}=O(t),a=k("Skeleton","-skeleton",E,_,t,o);return{mergedClsPrefix:o,style:T(()=>{var r,n;const s=a.value,{common:{cubicBezierEaseInOut:v}}=s,m=s.self,{color:y,colorEnd:z,borderRadius:x}=m;let i;const{circle:l,sharp:B,round:S,width:e,height:c,size:g,text:h,animated:P}=t;g!==void 0&&(i=m[j("height",g)]);const d=l?(r=e??c)!==null&&r!==void 0?r:i:e,u=(n=l?e??c:c)!==null&&n!==void 0?n:i;return{display:h?"inline-block":"",verticalAlign:h?"-0.125em":"",borderRadius:l?"50%":S?"4096px":B?"":x,width:typeof d=="number"?f(d):d,height:typeof u=="number"?f(u):u,animation:P?"":"none","--n-bezier":v,"--n-color-start":y,"--n-color-end":z}})}},render(){const{repeat:t,style:o,mergedClsPrefix:a,$attrs:r}=this,n=p("div",w({class:`${a}-skeleton`,style:o},r));return t>1?p(R,null,H(t,null).map(s=>[n,`
`])):n}});export{q as N};
