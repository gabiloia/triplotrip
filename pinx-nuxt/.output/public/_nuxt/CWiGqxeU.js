import{_ as Z}from"./BqhzCvpt.js";import{ao as ee,ap as T,aL as te,as as x,d as L,au as ae,aw as U,q as R,b3 as ne,aR as le,a2 as oe,e7 as re,ab as E,e8 as ie,c as se,o as F,e as m,w as c,a as t,b as S,_ as de,u as y,t as N,g as fe,l as ce,T as ue}from"./f757L6Hq.js";import{N as he}from"./BCa9XH_q.js";import{N as me}from"./Czk_QP_J.js";import"./8M1xGM-H.js";import"./CS6L70Cp.js";const ge=ee([T("watermark-container",`
 position: relative;
 `,[te("selectable",`
 user-select: none;
 -webkit-user-select: none;
 `),x("global-rotate",`
 overflow: hidden;
 `),x("fullscreen",`
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 pointer-events: none;
 position: fixed;
 `)]),T("watermark",`
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 pointer-events: none;
 background-repeat: repeat;
 `,[x("fullscreen",`
 position: fixed;
 `),x("global-rotate",`
 position: absolute;
 height: max(284vh, 284vw);
 width: max(284vh, 284vw);
 `)])]);function we(e){if(!e)return 1;const f=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/f}const be=Object.assign(Object.assign({},U.props),{debug:Boolean,cross:Boolean,fullscreen:Boolean,width:{type:Number,default:32},height:{type:Number,default:32},zIndex:{type:Number,default:10},xGap:{type:Number,default:0},yGap:{type:Number,default:0},yOffset:{type:Number,default:0},xOffset:{type:Number,default:0},rotate:{type:Number,default:0},textAlign:{type:String,default:"left"},image:String,imageOpacity:{type:Number,default:1},imageHeight:Number,imageWidth:Number,content:String,selectable:{type:Boolean,default:!0},fontSize:{type:Number,default:14},fontFamily:String,fontStyle:{type:String,default:"normal"},fontVariant:{type:String,default:""},fontWeight:{type:Number,default:400},fontColor:{type:String,default:"rgba(128, 128, 128, .3)"},fontStretch:{type:String,default:""},lineHeight:{type:Number,default:14},globalRotate:{type:Number,default:0}}),G=L({name:"Watermark",props:be,setup(e,{slots:f}){const{mergedClsPrefixRef:$}=ae(e),r=U("Watermark","-watermark",ge,ie,e,$),s=R(""),n=ne?document.createElement("canvas"):null,a=n?n.getContext("2d"):null,B=R(!1);return le(()=>B.value=!0),oe(()=>{if(!n)return;B.value;const o=we(a),{xGap:d,yGap:g,width:w,height:i,yOffset:v,xOffset:u,rotate:p,image:W,content:_,fontColor:V,fontStyle:A,fontVariant:D,fontStretch:M,fontWeight:j,fontFamily:Y,fontSize:q,lineHeight:O,debug:z}=e,X=(d+w)*o,J=(g+i)*o,P=u*o,C=v*o;if(n.width=X,n.height=J,a){a.translate(0,0);const I=w*o,H=i*o;if(z&&(a.strokeStyle="grey",a.strokeRect(0,0,I,H)),a.rotate(p*(Math.PI/180)),W){const l=new Image;l.crossOrigin="anonymous",l.referrerPolicy="no-referrer",l.src=W,l.onload=()=>{a.globalAlpha=e.imageOpacity;const{imageWidth:b,imageHeight:h}=e;a.drawImage(l,P,C,(e.imageWidth||(h?l.width*h/l.height:l.width))*o,(e.imageHeight||(b?l.height*b/l.width:l.height))*o),s.value=n.toDataURL()}}else if(_){z&&(a.strokeStyle="green",a.strokeRect(0,0,I,H)),a.font=`${A} ${D} ${j} ${M} ${q*o}px/${O*o}px ${Y||r.value.self.fontFamily}`,a.fillStyle=V;let l=0;const{textAlign:b}=e;_.split(`
`).map(h=>{const k=a.measureText(h).width;return l=Math.max(l,k),{width:k,line:h}}).forEach(({line:h,width:k},K)=>{const Q=b==="left"?0:b==="center"?(l-k)/2:l-k;a.fillText(h,P+Q,C+O*o*(K+1))}),s.value=n.toDataURL()}else _||(a.clearRect(0,0,n.width,n.height),s.value=n.toDataURL())}else re("watermark","Canvas is not supported in the browser.")}),()=>{var o;const{globalRotate:d,fullscreen:g,zIndex:w}=e,i=$.value,v=d!==0&&g,u="max(142vh, 142vw)",p=E("div",{class:[`${i}-watermark`,d!==0&&`${i}-watermark--global-rotate`,g&&`${i}-watermark--fullscreen`],style:{transform:d?`translateX(-50%) translateY(-50%) rotate(${d}deg)`:void 0,zIndex:v?void 0:w,backgroundSize:`${e.xGap+e.width}px`,backgroundPosition:d===0?e.cross?`${e.width/2}px ${e.height/2}px, 0 0`:"":e.cross?`calc(${u} + ${e.width/2}px) calc(${u} + ${e.height/2}px), ${u} ${u}`:u,backgroundImage:e.cross?`url(${s.value}), url(${s.value})`:`url(${s.value})`}});return e.fullscreen&&!d?p:E("div",{class:[`${i}-watermark-container`,d!==0&&`${i}-watermark-container--global-rotate`,g&&`${i}-watermark-container--fullscreen`,e.selectable&&`${i}-watermark-container--selectable`],style:{zIndex:v?w:void 0}},(o=f.default)===null||o===void 0?void 0:o.call(f),p)}}}),ke={class:"page page-wrapped"},ye={class:"page-header"},ve={class:"links"},pe={href:"https://www.naiveui.com/en-US/light/components/watermark",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},xe={class:"components-list"},Se="tabler:external-link",Oe=L({__name:"Watermark",setup(e){const f=R(!1);return($,r)=>{const s=Z;return F(),se("div",ke,[m(y(ue),{style:{"max-height":"100%"}},{default:c(()=>[t("div",ye,[r[2]||(r[2]=t("div",{class:"title"},"Watermark",-1)),t("div",ve,[t("a",pe,[m(de,{name:Se,size:16}),r[1]||(r[1]=S(" docs "))])])]),t("div",xe,[m(s,{title:"Basic"},{code:c(({html:n})=>[S(N(n(`
						<n-watermark
							content="Watermark"
							cross
							selectable
							:font-size="16"
							:line-height="16"
							:width="192"
							:height="128"
							:x-offset="12"
							:y-offset="28"
							:rotate="-15"
						>
							<n-table :bordered="false" :single-line="false">
								<thead>
									<tr>
										<th>...</th>
										<th>...</th>
										<th>...</th>
										<th>...</th>
										<th>...</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>...</td>
										<td>...</td>
										<td>...</td>
										<td>...</td>
										<td>...</td>
									</tr>
									<tr>
										<td>...</td>
										<td>...</td>
										<td>...</td>
										<td>...</td>
										<td>...</td>
									</tr>
								</tbody>
							</n-table>
						</n-watermark>
						`)),1)]),default:c(()=>[m(y(G),{content:"Watermark",cross:"",selectable:"","font-size":16,"line-height":16,width:192,height:128,"x-offset":12,"y-offset":28,rotate:-15},{default:c(()=>[m(y(he),{bordered:!1,"single-line":!1},{default:c(()=>r[3]||(r[3]=[t("thead",null,[t("tr",null,[t("th",null,"..."),t("th",null,"..."),t("th",null,"..."),t("th",null,"..."),t("th",null,"...")])],-1),t("tbody",null,[t("tr",null,[t("td",null,"..."),t("td",null,"..."),t("td",null,"..."),t("td",null,"..."),t("td",null,"...")]),t("tr",null,[t("td",null,"..."),t("td",null,"..."),t("td",null,"..."),t("td",null,"..."),t("td",null,"...")])],-1)])),_:1,__:[3]})]),_:1})]),_:1}),m(s,{title:"Fullscreen"},{description:c(()=>r[4]||(r[4]=[S("You can make it displayed in fullscreen mode.")])),code:c(({html:n,js:a})=>[S(N(n(`
						<n-watermark
							v-if="show"
							content="All the roads we have to walk are winding"
							cross
							fullscreen
							:font-size="16"
							:line-height="16"
							:width="384"
							:height="384"
							:x-offset="12"
							:y-offset="80"
							:rotate="-15"
						/>
						<n-switch v-model:value="show" />
						`))+" "+N(a(`
						const show = ref(false)
						`)),1)]),default:c(()=>[f.value?(F(),fe(y(G),{key:0,content:"All the roads we have to walk are winding",cross:"",fullscreen:"","font-size":16,"line-height":16,width:384,height:384,"x-offset":12,"y-offset":80,rotate:-15})):ce("",!0),m(y(me),{value:f.value,"onUpdate:value":r[0]||(r[0]=n=>f.value=n)},null,8,["value"])]),_:1})])]),_:1})])}}});export{Oe as default};
