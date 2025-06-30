import{_ as I}from"./BucR0pva.js";import{ay as c,d as p,ab as k,aG as _,aH as f,p as J,aP as T,bq as H,aA as b,az as w,c as W,o as M,a as x,e as i,b as o,_ as q,w as a,u as r,t as N}from"./Cc935Wq4.js";import{a as V,N as $,b as O,c as L,d as j,e as D}from"./BlUgGKq2.js";import{N as g}from"./DIGihfbu.js";import"./BajPnLyu.js";import"./Cnxb9HjD.js";const F=c("a",`
 cursor: pointer;
 transition:
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 text-decoration-color: var(--n-text-color);
 color: var(--n-text-color);
`),U=Object.assign({},f.props),Q=p({name:"A",props:U,setup(n){const{mergedClsPrefixRef:l,inlineThemeDisabled:e}=_(n),u=f("Typography","-a",F,H,n,l),s=J(()=>{const{common:{cubicBezierEaseInOut:h},self:{aTextColor:m}}=u.value;return{"--n-text-color":m,"--n-bezier":h}}),t=e?T("a",void 0,s,n):void 0;return{mergedClsPrefix:l,cssVars:e?void 0:s,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var n;return(n=this.onRender)===null||n===void 0||n.call(this),k("a",{class:[`${this.mergedClsPrefix}-a`,this.themeClass],style:this.cssVars},this.$slots)}}),X=c("blockquote",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 margin: 0;
 margin-top: 12px;
 margin-bottom: 12px;
 box-sizing: border-box;
 padding-left: 12px;
 border-left: 4px solid var(--n-prefix-color);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[b("&:first-child",{marginTop:0}),b("&:last-child",{marginBottom:0}),w("align-text",{marginLeft:"-16px"})]),Y=Object.assign(Object.assign({},f.props),{alignText:Boolean}),G=p({name:"Blockquote",props:Y,setup(n){const{mergedClsPrefixRef:l,inlineThemeDisabled:e}=_(n),u=f("Typography","-blockquote",X,H,n,l),s=J(()=>{const{common:{cubicBezierEaseInOut:h},self:{blockquoteTextColor:m,blockquotePrefixColor:y,blockquoteLineHeight:v,blockquoteFontSize:z}}=u.value;return{"--n-bezier":h,"--n-font-size":z,"--n-line-height":v,"--n-prefix-color":y,"--n-text-color":m}}),t=e?T("blockquote",void 0,s,n):void 0;return{mergedClsPrefix:l,cssVars:e?void 0:s,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var n;const{mergedClsPrefix:l}=this;return(n=this.onRender)===null||n===void 0||n.call(this),k("blockquote",{class:[`${l}-blockquote`,this.themeClass,this.alignText&&`${l}-blockquote--align-text`],style:this.cssVars},this.$slots)}}),Z=c("hr",`
 margin: 12px 0;
 transition: border-color .3s var(--n-bezier);
 border-left: none;
 border-right: none;
 border-bottom: none;
 border-top: 1px solid var(--n-color);
`),B=p({name:"Hr",props:Object.assign({},f.props),setup(n){const{mergedClsPrefixRef:l,inlineThemeDisabled:e}=_(n),u=f("Typography","-hr",Z,H,n,l),s=J(()=>{const{common:{cubicBezierEaseInOut:h},self:{hrColor:m}}=u.value;return{"--n-bezier":h,"--n-color":m}}),t=e?T("hr",void 0,s,n):void 0;return{mergedClsPrefix:l,cssVars:e?void 0:s,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var n;return(n=this.onRender)===null||n===void 0||n.call(this),k("hr",{class:[`${this.mergedClsPrefix}-hr`,this.themeClass],style:this.cssVars})}}),d=p({name:"Li",render(){return k("li",null,this.$slots)}}),K=b("li",{transition:"color .3s var(--n-bezier)",lineHeight:"var(--n-line-height)",margin:"var(--n-li-margin)",marginBottom:0,color:"var(--n-text-color)"}),R=[b("&:first-child",`
 margin-top: 0;
 `),b("&:last-child",`
 margin-bottom: 0;
 `)],E=b([c("ol",{fontSize:"var(--n-font-size)",padding:"var(--n-ol-padding)"},[w("align-text",{paddingLeft:0}),K,R]),c("ul",{fontSize:"var(--n-font-size)",padding:"var(--n-ul-padding)"},[w("align-text",{paddingLeft:0}),K,R])]),ee=Object.assign(Object.assign({},f.props),{alignText:Boolean}),S=p({name:"Ol",props:ee,setup(n){const{mergedClsPrefixRef:l,inlineThemeDisabled:e}=_(n),u=f("Typography","-xl",E,H,n,l),s=J(()=>{const{common:{cubicBezierEaseInOut:h},self:{olPadding:m,ulPadding:y,liMargin:v,liTextColor:z,liLineHeight:A,liFontSize:C}}=u.value;return{"--n-bezier":h,"--n-font-size":C,"--n-line-height":A,"--n-text-color":z,"--n-li-margin":v,"--n-ol-padding":m,"--n-ul-padding":y}}),t=e?T("ol",void 0,s,n):void 0;return{mergedClsPrefix:l,cssVars:e?void 0:s,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var n;const{mergedClsPrefix:l}=this;return(n=this.onRender)===null||n===void 0||n.call(this),k("ol",{class:[`${l}-ol`,this.themeClass,this.alignText&&`${l}-ol--align-text`],style:this.cssVars},this.$slots)}}),ne=Object.assign(Object.assign({},f.props),{alignText:Boolean}),P=p({name:"Ul",props:ne,setup(n){const{mergedClsPrefixRef:l,inlineThemeDisabled:e}=_(n),u=f("Typography","-xl",E,H,n,l),s=J(()=>{const{common:{cubicBezierEaseInOut:h},self:{olPadding:m,ulPadding:y,liMargin:v,liTextColor:z,liLineHeight:A,liFontSize:C}}=u.value;return{"--n-bezier":h,"--n-font-size":C,"--n-line-height":A,"--n-text-color":z,"--n-li-margin":v,"--n-ol-padding":m,"--n-ul-padding":y}}),t=e?T("ul",void 0,s,n):void 0;return{mergedClsPrefix:l,cssVars:e?void 0:s,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var n;const{mergedClsPrefix:l}=this;return(n=this.onRender)===null||n===void 0||n.call(this),k("ul",{class:[`${l}-ul`,this.themeClass,this.alignText&&`${l}-ul--align-text`],style:this.cssVars},this.$slots)}}),ie={class:"page"},te={class:"page-header"},ae={class:"links"},re={href:"https://www.naiveui.com/en-US/light/components/typography",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},oe={class:"components-list"},le="tabler:external-link",pe=p({__name:"Typography",setup(n){return(l,e)=>{const u=I;return M(),W("div",ie,[x("div",te,[e[1]||(e[1]=x("div",{class:"title"},"Typography",-1)),x("div",ae,[x("a",re,[i(q,{name:le,size:16}),e[0]||(e[0]=o(" docs "))])])]),x("div",oe,[i(u,{title:"Tags"},{description:a(()=>e[2]||(e[2]=[o("Other naive-ui built-in tags.")])),code:a(({html:s})=>[o(N(s(`
					<n-a href="https://en.wikipedia.org/wiki/Hear_the_Wind_Sing" target="_blank">
						Hear the Wind Sing
					</n-a>
					<n-h1>h1 tag</n-h1>
					<n-p>
						Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer
						Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential
						literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese
						director Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by
						Alfred Birnbaum appeared in 1987.
					</n-p>
					<n-h2>h2 tag</n-h2>
					<n-p>
						Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer
						Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential
						literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese
						director Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by
						Alfred Birnbaum appeared in 1987.
					</n-p>
					<n-h3>h3 tag</n-h3>
					<n-p>
						Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer
						Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential
						literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese
						director Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by
						Alfred Birnbaum appeared in 1987.
					</n-p>
					<n-h4>h4 tag</n-h4>
					<n-p>
						Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer
						Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential
						literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese
						director Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by
						Alfred Birnbaum appeared in 1987.
					</n-p>
					<n-h5>h5 tag</n-h5>
					<n-p>
						Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer
						Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential
						literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese
						director Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by
						Alfred Birnbaum appeared in 1987.
					</n-p>
					<n-h6>h6 tag</n-h6>
					<n-p>
						Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer
						Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential
						literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese
						director Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by
						Alfred Birnbaum appeared in 1987.
					</n-p>
					<n-ul>
						<n-li>li tag</n-li>
						<n-li>li tag</n-li>
						<n-li>li tag</n-li>
					</n-ul>
					<n-hr />
					<n-ol>
						<n-li>li tag</n-li>
						<n-li>li tag</n-li>
						<n-li>li tag</n-li>
					</n-ol>
					<n-ul align-text>
						<n-li>li tag</n-li>
						<n-li>li tag</n-li>
						<n-li>li tag</n-li>
					</n-ul>
					<n-hr />
					<n-ol align-text>
						<n-li>li tag</n-li>
						<n-li>li tag</n-li>
						<n-li>li tag</n-li>
					</n-ol>
					<n-blockquote>
						Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer
						Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential
						literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese
						director Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by
						Alfred Birnbaum appeared in 1987.
					</n-blockquote>
					<n-blockquote align-text>
						Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer
						Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential
						literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese
						director Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by
						Alfred Birnbaum appeared in 1987.
					</n-blockquote>
					`)),1)]),default:a(()=>[i(r(Q),{href:"https://en.wikipedia.org/wiki/Hear_the_Wind_Sing",target:"_blank"},{default:a(()=>e[3]||(e[3]=[o("Hear the Wind Sing")])),_:1,__:[3]}),i(r(V),null,{default:a(()=>e[4]||(e[4]=[o("h1 tag")])),_:1,__:[4]}),i(r(g),null,{default:a(()=>e[5]||(e[5]=[o(" Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. ")])),_:1,__:[5]}),i(r($),null,{default:a(()=>e[6]||(e[6]=[o("h2 tag")])),_:1,__:[6]}),i(r(g),null,{default:a(()=>e[7]||(e[7]=[o(" Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. ")])),_:1,__:[7]}),i(r(O),null,{default:a(()=>e[8]||(e[8]=[o("h3 tag")])),_:1,__:[8]}),i(r(g),null,{default:a(()=>e[9]||(e[9]=[o(" Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. ")])),_:1,__:[9]}),i(r(L),null,{default:a(()=>e[10]||(e[10]=[o("h4 tag")])),_:1,__:[10]}),i(r(g),null,{default:a(()=>e[11]||(e[11]=[o(" Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. ")])),_:1,__:[11]}),i(r(j),null,{default:a(()=>e[12]||(e[12]=[o("h5 tag")])),_:1,__:[12]}),i(r(g),null,{default:a(()=>e[13]||(e[13]=[o(" Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. ")])),_:1,__:[13]}),i(r(D),null,{default:a(()=>e[14]||(e[14]=[o("h6 tag")])),_:1,__:[14]}),i(r(g),null,{default:a(()=>e[15]||(e[15]=[o(" Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. ")])),_:1,__:[15]}),i(r(P),null,{default:a(()=>[i(r(d),null,{default:a(()=>e[16]||(e[16]=[o("li tag")])),_:1,__:[16]}),i(r(d),null,{default:a(()=>e[17]||(e[17]=[o("li tag")])),_:1,__:[17]}),i(r(d),null,{default:a(()=>e[18]||(e[18]=[o("li tag")])),_:1,__:[18]})]),_:1}),i(r(B)),i(r(S),null,{default:a(()=>[i(r(d),null,{default:a(()=>e[19]||(e[19]=[o("li tag")])),_:1,__:[19]}),i(r(d),null,{default:a(()=>e[20]||(e[20]=[o("li tag")])),_:1,__:[20]}),i(r(d),null,{default:a(()=>e[21]||(e[21]=[o("li tag")])),_:1,__:[21]})]),_:1}),i(r(P),{"align-text":""},{default:a(()=>[i(r(d),null,{default:a(()=>e[22]||(e[22]=[o("li tag")])),_:1,__:[22]}),i(r(d),null,{default:a(()=>e[23]||(e[23]=[o("li tag")])),_:1,__:[23]}),i(r(d),null,{default:a(()=>e[24]||(e[24]=[o("li tag")])),_:1,__:[24]})]),_:1}),i(r(B)),i(r(S),{"align-text":""},{default:a(()=>[i(r(d),null,{default:a(()=>e[25]||(e[25]=[o("li tag")])),_:1,__:[25]}),i(r(d),null,{default:a(()=>e[26]||(e[26]=[o("li tag")])),_:1,__:[26]}),i(r(d),null,{default:a(()=>e[27]||(e[27]=[o("li tag")])),_:1,__:[27]})]),_:1}),i(r(G),null,{default:a(()=>e[28]||(e[28]=[o(" Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. ")])),_:1,__:[28]}),i(r(G),{"align-text":""},{default:a(()=>e[29]||(e[29]=[o(" Hear the Wind Sing (風の歌を聴け Kaze no uta o kike) is the first novel by Japanese writer Haruki Murakami. It first appeared in the June 1979 issue of Gunzo (one of the most influential literary magazines in Japan), and in book form the next month. The novel was adapted by Japanese director Kazuki Ōmori in a 1981 film distributed by Art Theatre Guild. An English translation by Alfred Birnbaum appeared in 1987. ")])),_:1,__:[29]})]),_:1})])])}}});export{pe as default};
