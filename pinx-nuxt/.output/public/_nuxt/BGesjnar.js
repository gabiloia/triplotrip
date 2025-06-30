import{_}from"./BucR0pva.js";import{d as k,ah as y,c as b,o as v,a as i,e,b as t,_ as h,w as n,u as s,B as l,t as r}from"./Cc935Wq4.js";import{N as I}from"./CUFKXDcS.js";import"./BajPnLyu.js";import"./Cnxb9HjD.js";import"./Bk_rJcZu.js";const C={class:"page"},x={class:"page-header"},B={class:"links"},H={href:"https://www.naiveui.com/en-US/light/components/message",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},E={class:"components-list"},N="tabler:external-link",D=k({__name:"Message",setup(S){const a=y();function u(){a.info("I don't know why nobody told you how to unfold your love",{keepAliveOnHover:!0,closable:!0})}function c(){a.error("Once upon a time you dressed so fine",{closable:!0})}function d(){a.warning("How many roads must a man walk down",{closable:!0})}function m(){a.success("'Cause you walked hand in hand With another man in my place")}function f(){a.loading("If I were you, I will realize that I love you more than any other guy")}return(M,o)=>{const g=_;return v(),b("div",C,[i("div",x,[o[1]||(o[1]=i("div",{class:"title"},"Message",-1)),i("div",B,[i("a",H,[e(h,{name:N,size:16}),o[0]||(o[0]=t(" docs "))])])]),i("div",E,[e(g,{title:"Basic",class:"max-w-2xl"},{code:n(({html:p,js:w})=>[t(r(p(`
					<n-space>
						<n-button @click="info">Info(Hover will keep alive)</n-button>
						<n-button @click="error">Error</n-button>
						<n-button @click="warning">Warning</n-button>
						<n-button @click="success">Success</n-button>
						<n-button @click="loading">Loading</n-button>
					</n-space>
					`))+" "+r(w(`
						const message = useMessage()

						function info() {
							message.info("I don't know why nobody told you how to unfold your love", {
								keepAliveOnHover: true,
								closable: true
							})
						}
						function error() {
							message.error("Once upon a time you dressed so fine", { closable: true })
						}
						function warning() {
							message.warning("How many roads must a man walk down", { closable: true })
						}
						function success() {
							message.success("'Cause you walked hand in hand With another man in my place")
						}
						function loading() {
							message.loading("If I were you, I will realize that I love you more than any other guy")
						}
						`)),1)]),default:n(()=>[e(s(I),null,{default:n(()=>[e(s(l),{onClick:u},{default:n(()=>o[2]||(o[2]=[t("Info(Hover will keep alive)")])),_:1,__:[2]}),e(s(l),{onClick:c},{default:n(()=>o[3]||(o[3]=[t("Error")])),_:1,__:[3]}),e(s(l),{onClick:d},{default:n(()=>o[4]||(o[4]=[t("Warning")])),_:1,__:[4]}),e(s(l),{onClick:m},{default:n(()=>o[5]||(o[5]=[t("Success")])),_:1,__:[5]}),e(s(l),{onClick:f},{default:n(()=>o[6]||(o[6]=[t("Loading")])),_:1,__:[6]})]),_:1})]),_:1})])])}}});export{D as default};
