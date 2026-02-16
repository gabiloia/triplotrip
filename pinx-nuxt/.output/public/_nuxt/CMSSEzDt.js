import{_ as it}from"./BLzEf9tb.js";import{ef as j,eg as B,eh as ve,ei as D,ej as M,ek as H,el as te,em as Z,en as Te,eo as Ce,dL as z,ep as Ue,eq as _e,d as $,ac as i,q as _,s as w,bo as re,bp as ne,as as st,at as qe,a3 as Ee,er as se,es as Ae,et as $e,eu as Re,b4 as ct,aB as W,az as b,bv as ut,aC as U,aA as Ie,c3 as dt,c4 as ht,c5 as pt,bZ as Ve,bg as ft,k as gt,c6 as vt,b7 as bt,bm as mt,aH as xt,aI as Oe,aJ as Fe,a2 as kt,aL as wt,c7 as yt,by as St,aV as he,B as pe,J as Ct,ev as Ut,aR as _t,aU as ye,aS as Me,o as At,c as $t,a as le,e as Se,_ as Rt,b as Be,w as He,u as Vt,t as zt}from"./BboPWEKj.js";import{N as Dt}from"./DawznoV1.js";import{N as Pt}from"./Bze1lIjy.js";import"./BmSAZQUJ.js";import"./BoIEE7Tp.js";import"./CBN863Oo.js";import"./DqYVDO9Y.js";function It(e,t){switch(e[0]){case"hex":return t?"#000000FF":"#000000";case"rgb":return t?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return t?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return t?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function ce(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function Ft(e){return e=Math.round(e),e>=360?359:e<0?0:e}function Mt(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const Bt={rgb:{hex(e){return H(z(e))},hsl(e){const[t,a,n,l]=z(e);return B([..._e(t,a,n),l])},hsv(e){const[t,a,n,l]=z(e);return Z([...Ue(t,a,n),l])}},hex:{rgb(e){return D(z(e))},hsl(e){const[t,a,n,l]=z(e);return B([..._e(t,a,n),l])},hsv(e){const[t,a,n,l]=z(e);return Z([...Ue(t,a,n),l])}},hsl:{hex(e){const[t,a,n,l]=te(e);return H([...Ce(t,a,n),l])},rgb(e){const[t,a,n,l]=te(e);return D([...Ce(t,a,n),l])},hsv(e){const[t,a,n,l]=te(e);return Z([...Te(t,a,n),l])}},hsv:{hex(e){const[t,a,n,l]=j(e);return H([...M(t,a,n),l])},rgb(e){const[t,a,n,l]=j(e);return D([...M(t,a,n),l])},hsl(e){const[t,a,n,l]=j(e);return B([...ve(t,a,n),l])}}};function Le(e,t,a){return a=a||ce(e),a?a===t?e:Bt[a][t](e):null}const ie="12px",Ht=12,O="6px",Nt=$({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const t=w(null);function a(o){!t.value||!e.rgba||(re("mousemove",document,n),re("mouseup",document,l),n(o))}function n(o){const{value:s}=t;if(!s)return;const{width:c,left:f}=s.getBoundingClientRect(),N=(o.clientX-f)/(c-Ht);e.onUpdateAlpha(Mt(N))}function l(){var o;ne("mousemove",document,n),ne("mouseup",document,l),(o=e.onComplete)===null||o===void 0||o.call(e)}return{railRef:t,railBackgroundImage:_(()=>{const{rgba:o}=e;return o?`linear-gradient(to right, rgba(${o[0]}, ${o[1]}, ${o[2]}, 0) 0%, rgba(${o[0]}, ${o[1]}, ${o[2]}, 1) 100%)`:""}),handleMouseDown:a}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:ie,borderRadius:O},onMousedown:this.handleMouseDown},i("div",{style:{borderRadius:O,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},i("div",{class:`${e}-color-picker-checkboard`}),i("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&i("div",{style:{position:"absolute",left:O,right:O,top:0,bottom:0}},i("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${O})`,borderRadius:O,width:ie,height:ie}},i("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:D(this.rgba),borderRadius:O,width:ie,height:ie}}))))}}),ze=st("n-color-picker");function Tt(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),255)):!1}function qt(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),360)):!1}function Et(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),100)):!1}function Ot(e){const t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function Lt(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e)/100,100)):!1}const jt={paddingSmall:"0 4px"},Ne=$({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const t=w(""),{themeRef:a}=qe(ze,null);Ee(()=>{t.value=n()});function n(){const{value:s}=e;if(s===null)return"";const{label:c}=e;return c==="HEX"?s:c==="A"?`${Math.floor(s*100)}%`:String(Math.floor(s))}function l(s){t.value=s}function o(s){let c,f;switch(e.label){case"HEX":f=Ot(s),f&&e.onUpdateValue(s),t.value=n();break;case"H":c=qt(s),c===!1?t.value=n():e.onUpdateValue(c);break;case"S":case"L":case"V":c=Et(s),c===!1?t.value=n():e.onUpdateValue(c);break;case"A":c=Lt(s),c===!1?t.value=n():e.onUpdateValue(c);break;case"R":case"G":case"B":c=Tt(s),c===!1?t.value=n():e.onUpdateValue(c);break}}return{mergedTheme:a,inputValue:t,handleInputChange:o,handleInputUpdateValue:l}},render(){const{mergedTheme:e}=this;return i(Dt,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:jt,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),Zt=$({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,a){const{showAlpha:n}=e;if(e.mode==="hex"){e.onUpdateValue((n?H:se)(a));return}let l;switch(e.valueArr===null?l=[0,0,0,0]:l=Array.from(e.valueArr),e.mode){case"hsv":l[t]=a,e.onUpdateValue((n?Z:Re)(l));break;case"rgb":l[t]=a,e.onUpdateValue((n?D:$e)(l));break;case"hsl":l[t]=a,e.onUpdateValue((n?B:Ae)(l));break}}}},render(){const{clsPrefix:e,modes:t}=this;return i("div",{class:`${e}-color-picker-input`},i("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),i(Pt,null,{default:()=>{const{mode:a,valueArr:n,showAlpha:l}=this;if(a==="hex"){let o=null;try{o=n===null?null:(l?H:se)(n)}catch{}return i(Ne,{label:"HEX",showAlpha:l,value:o,onUpdateValue:s=>{this.handleUnitUpdateValue(0,s)}})}return(a+(l?"a":"")).split("").map((o,s)=>i(Ne,{label:o.toUpperCase(),value:n===null?null:n[s],onUpdateValue:c=>{this.handleUnitUpdateValue(s,c)}}))}}))}});function Kt(e,t){if(t==="hsv"){const[a,n,l,o]=j(e);return D([...M(a,n,l),o])}return e}function Xt(e){const t=document.createElement("canvas").getContext("2d");return t?(t.fillStyle=e,t.fillStyle):"#000000"}const Gt=$({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const t=_(()=>e.swatches.map(o=>{const s=ce(o);return{value:o,mode:s,legalValue:Kt(o,s)}}));function a(o){const{mode:s}=e;let{value:c,mode:f}=o;return f||(f="hex",/^[a-zA-Z]+$/.test(c)?c=Xt(c):(ct("color-picker",`color ${c} in swatches is invalid.`),c="#000000")),f===s?c:Le(c,s,f)}function n(o){e.onUpdateColor(a(o))}function l(o,s){o.key==="Enter"&&n(s)}return{parsedSwatchesRef:t,handleSwatchSelect:n,handleSwatchKeyDown:l}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>i("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>{this.handleSwatchSelect(t)},onKeydown:a=>{this.handleSwatchKeyDown(a,t)}},i("div",{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}}),Jt=$({name:"ColorPickerTrigger",slots:Object,props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:t,renderLabelRef:a}=qe(ze,null);return()=>{const{hsla:n,value:l,clsPrefix:o,onClick:s,disabled:c}=e,f=t.label||a.value;return i("div",{class:[`${o}-color-picker-trigger`,c&&`${o}-color-picker-trigger--disabled`],onClick:c?void 0:s},i("div",{class:`${o}-color-picker-trigger__fill`},i("div",{class:`${o}-color-picker-checkboard`}),i("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:n?B(n):""}}),l&&n?i("div",{class:`${o}-color-picker-trigger__value`,style:{color:n[2]>50||n[3]<.5?"black":"white"}},f?f(l):l):null))}}}),Yt=$({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const t=ce(e);return!!(!e||t&&t!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(a){var n;const l=a.target.value;(n=e.onUpdateColor)===null||n===void 0||n.call(e,Le(l.toUpperCase(),e.mode,"hex")),a.stopPropagation()}return{handleChange:t}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-preview__preview`},i("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),i("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),ee="12px",Qt=12,L="6px",Wt=6,er="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)",tr=$({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const t=w(null);function a(o){t.value&&(re("mousemove",document,n),re("mouseup",document,l),n(o))}function n(o){const{value:s}=t;if(!s)return;const{width:c,left:f}=s.getBoundingClientRect(),N=Ft((o.clientX-f-Wt)/(c-Qt)*360);e.onUpdateHue(N)}function l(){var o;ne("mousemove",document,n),ne("mouseup",document,l),(o=e.onComplete)===null||o===void 0||o.call(e)}return{railRef:t,handleMouseDown:a}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-slider`,style:{height:ee,borderRadius:L}},i("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:er,height:ee,borderRadius:L,position:"relative"},onMousedown:this.handleMouseDown},i("div",{style:{position:"absolute",left:L,right:L,top:0,bottom:0}},i("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${L})`,borderRadius:L,width:ee,height:ee}},i("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:L,width:ee,height:ee}})))))}}),fe="12px",ge="6px",rr=$({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const t=w(null);function a(o){t.value&&(re("mousemove",document,n),re("mouseup",document,l),n(o))}function n(o){const{value:s}=t;if(!s)return;const{width:c,height:f,left:N,bottom:oe}=s.getBoundingClientRect(),T=(oe-o.clientY)/f,K=(o.clientX-N)/c,ue=100*(K>1?1:K<0?0:K),X=100*(T>1?1:T<0?0:T);e.onUpdateSV(ue,X)}function l(){var o;ne("mousemove",document,n),ne("mouseup",document,l),(o=e.onComplete)===null||o===void 0||o.call(e)}return{palleteRef:t,handleColor:_(()=>{const{rgba:o}=e;return o?`rgb(${o[0]}, ${o[1]}, ${o[2]})`:""}),handleMouseDown:a}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},i("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),i("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&i("div",{class:`${e}-color-picker-handle`,style:{width:fe,height:fe,borderRadius:ge,left:`calc(${this.displayedSv[0]}% - ${ge})`,bottom:`calc(${this.displayedSv[1]}% - ${ge})`}},i("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:ge,width:fe,height:fe}})))}}),nr=W([b("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `),b("color-picker-panel",`
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `,[ut(),b("input",`
 text-align: center;
 `)]),b("color-picker-checkboard",`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[W("&::after",`
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),b("color-picker-slider",`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[U("image",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),W("&::after",`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),b("color-picker-handle",`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[U("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),b("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[U("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[Ie("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),b("color-picker-preview",`
 display: flex;
 `,[U("sliders",`
 flex: 1 0 auto;
 `),U("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),U("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),U("input",`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),b("color-picker-input",`
 display: flex;
 align-items: center;
 `,[b("input",`
 flex-grow: 1;
 flex-basis: 0;
 `),U("mode",`
 width: 72px;
 text-align: center;
 `)]),b("color-picker-control",`
 padding: 12px;
 `),b("color-picker-action",`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[b("button","margin-left: 8px;")]),b("color-picker-trigger",`
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `,[U("value",`
 white-space: nowrap;
 position: relative;
 `),U("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),Ie("disabled","cursor: not-allowed"),b("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[W("&::after",`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),b("color-picker-swatches",`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[b("color-picker-swatch",`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[U("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),W("&:focus",`
 outline: none;
 `,[U("fill",[W("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]),or=Object.assign(Object.assign({},Oe.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:Ve.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,onClear:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),ar=$({name:"ColorPicker",props:or,slots:Object,setup(e,{slots:t}){const a=w(null);let n=null;const l=bt(e),{mergedSizeRef:o,mergedDisabledRef:s}=l,{localeRef:c}=mt("global"),{mergedClsPrefixRef:f,namespaceRef:N,inlineThemeDisabled:oe}=xt(e),T=Oe("ColorPicker","-color-picker",nr,Ut,e,f);_t(ze,{themeRef:T,renderLabelRef:ye(e,"renderLabel"),colorPickerSlots:t});const K=w(e.defaultShow),ue=Fe(ye(e,"show"),K);function X(r){const{onUpdateShow:u,"onUpdate:show":h}=e;u&&he(u,r),h&&he(h,r),K.value=r}const{defaultValue:De}=e,Pe=w(De===void 0?It(e.modes,e.showAlpha):De),x=Fe(ye(e,"value"),Pe),G=w([x.value]),R=w(0),be=_(()=>ce(x.value)),{modes:je}=e,A=w(ce(x.value)||je[0]||"rgb");function Ze(){const{modes:r}=e,{value:u}=A,h=r.findIndex(p=>p===u);~h?A.value=r[(h+1)%r.length]:A.value="rgb"}let y,S,J,Y,P,I,F,C;const ae=_(()=>{const{value:r}=x;if(!r)return null;switch(be.value){case"hsv":return j(r);case"hsl":return[y,S,J,C]=te(r),[...Te(y,S,J),C];case"rgb":case"hex":return[P,I,F,C]=z(r),[...Ue(P,I,F),C]}}),q=_(()=>{const{value:r}=x;if(!r)return null;switch(be.value){case"rgb":case"hex":return z(r);case"hsv":return[y,S,Y,C]=j(r),[...M(y,S,Y),C];case"hsl":return[y,S,J,C]=te(r),[...Ce(y,S,J),C]}}),me=_(()=>{const{value:r}=x;if(!r)return null;switch(be.value){case"hsl":return te(r);case"hsv":return[y,S,Y,C]=j(r),[...ve(y,S,Y),C];case"rgb":case"hex":return[P,I,F,C]=z(r),[..._e(P,I,F),C]}}),Ke=_(()=>{switch(A.value){case"rgb":case"hex":return q.value;case"hsv":return ae.value;case"hsl":return me.value}}),de=w(0),xe=w(1),ke=w([0,0]);function Xe(r,u){const{value:h}=ae,p=de.value,g=h?h[3]:1;ke.value=[r,u];const{showAlpha:d}=e;switch(A.value){case"hsv":v((d?Z:Re)([p,r,u,g]),"cursor");break;case"hsl":v((d?B:Ae)([...ve(p,r,u),g]),"cursor");break;case"rgb":v((d?D:$e)([...M(p,r,u),g]),"cursor");break;case"hex":v((d?H:se)([...M(p,r,u),g]),"cursor");break}}function Ge(r){de.value=r;const{value:u}=ae;if(!u)return;const[,h,p,g]=u,{showAlpha:d}=e;switch(A.value){case"hsv":v((d?Z:Re)([r,h,p,g]),"cursor");break;case"rgb":v((d?D:$e)([...M(r,h,p),g]),"cursor");break;case"hex":v((d?H:se)([...M(r,h,p),g]),"cursor");break;case"hsl":v((d?B:Ae)([...ve(r,h,p),g]),"cursor");break}}function Je(r){switch(A.value){case"hsv":[y,S,Y]=ae.value,v(Z([y,S,Y,r]),"cursor");break;case"rgb":[P,I,F]=q.value,v(D([P,I,F,r]),"cursor");break;case"hex":[P,I,F]=q.value,v(H([P,I,F,r]),"cursor");break;case"hsl":[y,S,J]=me.value,v(B([y,S,J,r]),"cursor");break}xe.value=r}function v(r,u){u==="cursor"?n=r:n=null;const{nTriggerFormChange:h,nTriggerFormInput:p}=l,{onUpdateValue:g,"onUpdate:value":d}=e;g&&he(g,r),d&&he(d,r),h(),p(),Pe.value=r}function Ye(r){v(r,"input"),Ct(Q)}function Q(r=!0){const{value:u}=x;if(u){const{nTriggerFormChange:h,nTriggerFormInput:p}=l,{onComplete:g}=e;g&&g(u);const{value:d}=G,{value:k}=R;r&&(d.splice(k+1,d.length,u),R.value=k+1),h(),p()}}function Qe(){const{value:r}=R;r-1<0||(v(G.value[r-1],"input"),Q(!1),R.value=r-1)}function We(){const{value:r}=R;r<0||r+1>=G.value.length||(v(G.value[r+1],"input"),Q(!1),R.value=r+1)}function et(){v(null,"input");const{onClear:r}=e;r&&r(),X(!1)}function tt(){const{value:r}=x,{onConfirm:u}=e;u&&u(r),X(!1)}const rt=_(()=>R.value>=1),nt=_(()=>{const{value:r}=G;return r.length>1&&R.value<r.length-1});kt(ue,r=>{r||(G.value=[x.value],R.value=0)}),Ee(()=>{if(!(n&&n===x.value)){const{value:r}=ae;r&&(de.value=r[0],xe.value=r[3],ke.value=[r[1],r[2]])}n=null});const we=_(()=>{const{value:r}=o,{common:{cubicBezierEaseInOut:u},self:{textColor:h,color:p,panelFontSize:g,boxShadow:d,border:k,borderRadius:m,dividerColor:E,[Me("height",r)]:at,[Me("fontSize",r)]:lt}}=T.value;return{"--n-bezier":u,"--n-text-color":h,"--n-color":p,"--n-panel-font-size":g,"--n-font-size":lt,"--n-box-shadow":d,"--n-border":k,"--n-border-radius":m,"--n-height":at,"--n-divider-color":E}}),V=oe?wt("color-picker",_(()=>o.value[0]),we,e):void 0;function ot(){var r;const{value:u}=q,{value:h}=de,{internalActions:p,modes:g,actions:d}=e,{value:k}=T,{value:m}=f;return i("div",{class:[`${m}-color-picker-panel`,V?.themeClass.value],onDragstart:E=>{E.preventDefault()},style:oe?void 0:we.value},i("div",{class:`${m}-color-picker-control`},i(rr,{clsPrefix:m,rgba:u,displayedHue:h,displayedSv:ke.value,onUpdateSV:Xe,onComplete:Q}),i("div",{class:`${m}-color-picker-preview`},i("div",{class:`${m}-color-picker-preview__sliders`},i(tr,{clsPrefix:m,hue:h,onUpdateHue:Ge,onComplete:Q}),e.showAlpha?i(Nt,{clsPrefix:m,rgba:u,alpha:xe.value,onUpdateAlpha:Je,onComplete:Q}):null),e.showPreview?i(Yt,{clsPrefix:m,mode:A.value,color:q.value&&se(q.value),onUpdateColor:E=>{v(E,"input")}}):null),i(Zt,{clsPrefix:m,showAlpha:e.showAlpha,mode:A.value,modes:g,onUpdateMode:Ze,value:x.value,valueArr:Ke.value,onUpdateValue:Ye}),((r=e.swatches)===null||r===void 0?void 0:r.length)&&i(Gt,{clsPrefix:m,mode:A.value,swatches:e.swatches,onUpdateColor:E=>{v(E,"input")}})),d?.length?i("div",{class:`${m}-color-picker-action`},d.includes("confirm")&&i(pe,{size:"small",onClick:tt,theme:k.peers.Button,themeOverrides:k.peerOverrides.Button},{default:()=>c.value.confirm}),d.includes("clear")&&i(pe,{size:"small",onClick:et,disabled:!x.value,theme:k.peers.Button,themeOverrides:k.peerOverrides.Button},{default:()=>c.value.clear})):null,t.action?i("div",{class:`${m}-color-picker-action`},{default:t.action}):p?i("div",{class:`${m}-color-picker-action`},p.includes("undo")&&i(pe,{size:"small",onClick:Qe,disabled:!rt.value,theme:k.peers.Button,themeOverrides:k.peerOverrides.Button},{default:()=>c.value.undo}),p.includes("redo")&&i(pe,{size:"small",onClick:We,disabled:!nt.value,theme:k.peers.Button,themeOverrides:k.peerOverrides.Button},{default:()=>c.value.redo})):null)}return{mergedClsPrefix:f,namespace:N,selfRef:a,hsla:me,rgba:q,mergedShow:ue,mergedDisabled:s,isMounted:St(),adjustedTo:Ve(e),mergedValue:x,handleTriggerClick(){X(!0)},handleClickOutside(r){var u;!((u=a.value)===null||u===void 0)&&u.contains(yt(r))||X(!1)},renderPanel:ot,cssVars:oe?void 0:we,themeClass:V?.themeClass,onRender:V?.onRender}},render(){const{mergedClsPrefix:e,onRender:t}=this;return t?.(),i("div",{class:[this.themeClass,`${e}-color-picker`],ref:"selfRef",style:this.cssVars},i(dt,null,{default:()=>[i(ht,null,{default:()=>i(Jt,{clsPrefix:e,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick})}),i(pt,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===Ve.tdkey,to:this.adjustedTo},{default:()=>i(ft,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?gt(this.renderPanel(),[[vt,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}}),lr={class:"page"},ir={class:"page-header"},sr={class:"links"},cr={href:"https://www.naiveui.com/en-US/light/components/color-picker",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},ur={class:"components-list"},dr="tabler:external-link",kr=$({__name:"ColorPicker",setup(e){return(t,a)=>{const n=it;return At(),$t("div",lr,[le("div",ir,[a[1]||(a[1]=le("div",{class:"title"},"Color Picker",-1)),le("div",sr,[le("a",cr,[Se(Rt,{name:dr,size:16}),a[0]||(a[0]=Be(" docs ",-1))])])]),le("div",ur,[Se(n,{title:"Basic",class:"max-w-lg"},{code:He(({html:l})=>[Be(zt(l(`
					<n-color-picker
						:swatches="['#FFFFFF', '#18A058', '#2080F0', '#F0A020', 'rgba(208, 48, 80, 1)']"
						:actions="['clear']"
					/>
					`)),1)]),default:He(()=>[Se(Vt(ar),{swatches:["#FFFFFF","#18A058","#2080F0","#F0A020","rgba(208, 48, 80, 1)"],actions:["clear"]})]),_:1})])])}}});export{kr as default};
