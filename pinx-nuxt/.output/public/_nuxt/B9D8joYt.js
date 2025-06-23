import{_ as S}from"./CkQPPryU.js";import{aZ as V,bJ as w,d as A,bo as B,q as I,p as g,y as C,ai as E,c as T,o as P,a as c,e as u,b as h,_ as U,w as d,u as v,B as q,t as y}from"./8g3bmYip.js";import{t as F}from"./cT_-Jls5.js";import{N as L}from"./DCOynB2s.js";import"./CiSJ_ReP.js";import"./pFoo6Snw.js";var O=1/0,j=17976931348623157e292;function z(t){if(!t)return t===0?t:0;if(t=F(t),t===O||t===-1/0){var e=t<0?-1:1;return e*j}return t===t?t:0}function D(t){var e=z(t),a=e%1;return e===e?a?e-a:e:0}var G=V.isFinite,J=Math.min;function X(t){var e=Math[t];return function(a,n){if(a=F(a),n=n==null?0:J(D(n),292),n&&G(a)){var o=(w(a)+"e").split("e"),r=e(o[0]+"e"+(+o[1]+n));return o=(w(r)+"e").split("e"),+(o[0]+"e"+(+o[1]-n))}return e(a)}}var Y=X("round");const Z=t=>1-Math.pow(1-t,5);function $(t){const{from:e,to:a,duration:n,onUpdate:o,onFinish:r}=t,l=performance.now(),s=()=>{const m=performance.now(),f=Math.min(m-l,n),_=e+(a-e)*Z(f/n);if(f===n){r();return}o(_),requestAnimationFrame(s)};s()}const H={to:{type:Number,default:0},precision:{type:Number,default:0},showSeparator:Boolean,locale:String,from:{type:Number,default:0},active:{type:Boolean,default:!0},duration:{type:Number,default:2e3},onFinish:Function},K=A({name:"NumberAnimation",props:H,setup(t){const{localeRef:e}=B("name"),{duration:a}=t,n=I(t.from),o=g(()=>{const{locale:i}=t;return i!==void 0?i:e.value});let r=!1;const l=i=>{n.value=i},s=()=>{var i;n.value=t.to,r=!1,(i=t.onFinish)===null||i===void 0||i.call(t)},m=(i=t.from,b=t.to)=>{r=!0,n.value=t.from,i!==b&&$({from:i,to:b,duration:a,onUpdate:l,onFinish:s})},f=g(()=>{var i;const p=Y(n.value,t.precision).toFixed(t.precision).split("."),N=new Intl.NumberFormat(o.value),k=(i=N.formatToParts(.5).find(M=>M.type==="decimal"))===null||i===void 0?void 0:i.value,x=t.showSeparator?N.format(Number(p[0])):p[0],R=p[1];return{integer:x,decimal:R,decimalSeparator:k}});function _(){r||m()}return C(()=>{E(()=>{t.active&&m()})}),Object.assign({formattedValue:f},{play:_})},render(){const{formattedValue:{integer:t,decimal:e,decimalSeparator:a}}=this;return[t,e?a:null,e]}}),Q={class:"page"},W={class:"page-header"},tt={class:"links"},et={href:"https://www.naiveui.com/en-US/light/components/number-animation",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},nt={class:"components-list"},at="tabler:external-link",mt=A({__name:"NumberAnimation",setup(t){const e=I(null);function a(){var n;(n=e.value)==null||n.play()}return(n,o)=>{const r=S;return P(),T("div",Q,[c("div",W,[o[1]||(o[1]=c("div",{class:"title"},"Number Animation",-1)),c("div",tt,[c("a",et,[u(U,{name:at,size:16}),o[0]||(o[0]=h(" docs "))])])]),c("div",nt,[u(r,{title:"Basic",class:"max-w-lg"},{code:d(({html:l,js:s})=>[h(y(l(`
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
						`)),1)]),default:d(()=>[u(v(L),{label:"A little goal","tabular-nums":""},{default:d(()=>[u(v(K),{ref_key:"numberAnimationInstRef",ref:e,"show-separator":"",from:0,to:1e8,active:!1,precision:2},null,512)]),_:1}),u(v(q),{onClick:a},{default:d(()=>o[2]||(o[2]=[h("Play")])),_:1,__:[2]})]),_:1})])])}}});export{mt as default};
