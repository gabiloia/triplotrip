import{_ as S}from"./BfzzecIy.js";import{aT as V,bH as g,d as A,bi as B,r as I,s as w,o as C,ag as T,c as E,a as P,b as c,g as u,f as h,h as U,w as d,u as v,B as L,t as y}from"./CFnCIwgc.js";import{t as F}from"./RGYyJwfv.js";import{N as O}from"./GWRGVXA1.js";import"./uLUuACJr.js";import"./Bg-0ZsXF.js";var j=1/0,q=17976931348623157e292;function z(t){if(!t)return t===0?t:0;if(t=F(t),t===j||t===-1/0){var e=t<0?-1:1;return e*q}return t===t?t:0}function D(t){var e=z(t),a=e%1;return e===e?a?e-a:e:0}var G=V.isFinite,H=Math.min;function X(t){var e=Math[t];return function(a,n){if(a=F(a),n=n==null?0:H(D(n),292),n&&G(a)){var o=(g(a)+"e").split("e"),r=e(o[0]+"e"+(+o[1]+n));return o=(g(r)+"e").split("e"),+(o[0]+"e"+(+o[1]-n))}return e(a)}}var Y=X("round");const $=t=>1-Math.pow(1-t,5);function J(t){const{from:e,to:a,duration:n,onUpdate:o,onFinish:r}=t,l=performance.now(),s=()=>{const m=performance.now(),f=Math.min(m-l,n),b=e+(a-e)*$(f/n);if(f===n){r();return}o(b),requestAnimationFrame(s)};s()}const K={to:{type:Number,default:0},precision:{type:Number,default:0},showSeparator:Boolean,locale:String,from:{type:Number,default:0},active:{type:Boolean,default:!0},duration:{type:Number,default:2e3},onFinish:Function},Q=A({name:"NumberAnimation",props:K,setup(t){const{localeRef:e}=B("name"),{duration:a}=t,n=I(t.from),o=w(()=>{const{locale:i}=t;return i!==void 0?i:e.value});let r=!1;const l=i=>{n.value=i},s=()=>{var i;n.value=t.to,r=!1,(i=t.onFinish)===null||i===void 0||i.call(t)},m=(i=t.from,_=t.to)=>{r=!0,n.value=t.from,i!==_&&J({from:i,to:_,duration:a,onUpdate:l,onFinish:s})},f=w(()=>{var i;const p=Y(n.value,t.precision).toFixed(t.precision).split("."),N=new Intl.NumberFormat(o.value),k=(i=N.formatToParts(.5).find(M=>M.type==="decimal"))===null||i===void 0?void 0:i.value,x=t.showSeparator?N.format(Number(p[0])):p[0],R=p[1];return{integer:x,decimal:R,decimalSeparator:k}});function b(){r||m()}return C(()=>{T(()=>{t.active&&m()})}),Object.assign({formattedValue:f},{play:b})},render(){const{formattedValue:{integer:t,decimal:e,decimalSeparator:a}}=this;return[t,e?a:null,e]}}),W={class:"page"},Z={class:"page-header"},tt={class:"links"},et={href:"https://www.naiveui.com/en-US/light/components/number-animation",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},nt={class:"components-list"},at="tabler:external-link",mt=A({__name:"NumberAnimation",setup(t){const e=I(null);function a(){var n;(n=e.value)==null||n.play()}return(n,o)=>{const r=S;return P(),E("div",W,[c("div",Z,[o[1]||(o[1]=c("div",{class:"title"},"Number Animation",-1)),c("div",tt,[c("a",et,[u(U,{name:at,size:16}),o[0]||(o[0]=h(" docs "))])])]),c("div",nt,[u(r,{title:"Basic",class:"max-w-lg"},{code:d(({html:l,js:s})=>[h(y(l(`
					<n-statistic label="A little goal" tabular-nums>
						<n-number-animation
							ref="numberAnimationInstRef"
							show-separator
							:from="0"
							:to="100000000"
							:active="false"
							:precision="2"
						/>
					</n-statistic>
					<n-button @click="handleClick">Play</n-button>
					`))+" "+y(s(`
						const numberAnimationInstRef = ref<NumberAnimationInst | null>(null)

						function handleClick() {
							numberAnimationInstRef.value?.play()
						}
						`)),1)]),default:d(()=>[u(v(O),{label:"A little goal","tabular-nums":""},{default:d(()=>[u(v(Q),{ref_key:"numberAnimationInstRef",ref:e,"show-separator":"",from:0,to:1e8,active:!1,precision:2},null,512)]),_:1}),u(v(L),{onClick:a},{default:d(()=>o[2]||(o[2]=[h("Play")])),_:1})]),_:1})])])}}});export{mt as default};
