import{_ as V}from"./BLzEf9tb.js";import{bI as w,aW as B,d as I,bm as C,s as F,y as E,a3 as T,q as g,o as P,c as U,a as c,e as u,_ as q,b as h,w as d,u as v,B as L,t as y}from"./BboPWEKj.js";import{t as k}from"./-gMaghxr.js";import{N as O}from"./BM2MUOcV.js";import"./BmSAZQUJ.js";import"./BoIEE7Tp.js";var A=1/0,j=17976931348623157e292;function z(t){if(!t)return t===0?t:0;if(t=k(t),t===A||t===-A){var e=t<0?-1:1;return e*j}return t===t?t:0}function D(t){var e=z(t),n=e%1;return e===e?n?e-n:e:0}var G=B.isFinite,W=Math.min;function X(t){var e=Math[t];return function(n,a){if(n=k(n),a=a==null?0:W(D(a),292),a&&G(n)){var o=(w(n)+"e").split("e"),r=e(o[0]+"e"+(+o[1]+a));return o=(w(r)+"e").split("e"),+(o[0]+"e"+(+o[1]-a))}return e(n)}}var Y=X("round");const $=t=>1-Math.pow(1-t,5);function H(t){const{from:e,to:n,duration:a,onUpdate:o,onFinish:r}=t,l=performance.now(),s=()=>{const m=performance.now(),f=Math.min(m-l,a),_=e+(n-e)*$(f/a);if(f===a){r();return}o(_),requestAnimationFrame(s)};s()}const J={to:{type:Number,default:0},precision:{type:Number,default:0},showSeparator:Boolean,locale:String,from:{type:Number,default:0},active:{type:Boolean,default:!0},duration:{type:Number,default:2e3},onFinish:Function},K=I({name:"NumberAnimation",props:J,setup(t){const{localeRef:e}=C("name"),{duration:n}=t,a=F(t.from),o=g(()=>{const{locale:i}=t;return i!==void 0?i:e.value});let r=!1;const l=i=>{a.value=i},s=()=>{var i;a.value=t.to,r=!1,(i=t.onFinish)===null||i===void 0||i.call(t)},m=(i=t.from,b=t.to)=>{r=!0,a.value=t.from,i!==b&&H({from:i,to:b,duration:n,onUpdate:l,onFinish:s})},f=g(()=>{var i;const p=Y(a.value,t.precision).toFixed(t.precision).split("."),N=new Intl.NumberFormat(o.value),x=(i=N.formatToParts(.5).find(S=>S.type==="decimal"))===null||i===void 0?void 0:i.value,R=t.showSeparator?N.format(Number(p[0])):p[0],M=p[1];return{integer:R,decimal:M,decimalSeparator:x}});function _(){r||m()}return E(()=>{T(()=>{t.active&&m()})}),Object.assign({formattedValue:f},{play:_})},render(){const{formattedValue:{integer:t,decimal:e,decimalSeparator:n}}=this;return[t,e?n:null,e]}}),Q={class:"page"},Z={class:"page-header"},tt={class:"links"},et={href:"https://www.naiveui.com/en-US/light/components/number-animation",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},nt={class:"components-list"},at="tabler:external-link",mt=I({__name:"NumberAnimation",setup(t){const e=F(null);function n(){e.value?.play()}return(a,o)=>{const r=V;return P(),U("div",Q,[c("div",Z,[o[1]||(o[1]=c("div",{class:"title"},"Number Animation",-1)),c("div",tt,[c("a",et,[u(q,{name:at,size:16}),o[0]||(o[0]=h(" docs ",-1))])])]),c("div",nt,[u(r,{title:"Basic",class:"max-w-lg"},{code:d(({html:l,js:s})=>[h(y(l(`
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
						`)),1)]),default:d(()=>[u(v(O),{label:"A little goal","tabular-nums":""},{default:d(()=>[u(v(K),{ref_key:"numberAnimationInstRef",ref:e,"show-separator":"",from:0,to:1e8,active:!1,precision:2},null,512)]),_:1}),u(v(L),{onClick:n},{default:d(()=>[...o[2]||(o[2]=[h("Play",-1)])]),_:1})]),_:1})])])}}});export{mt as default};
