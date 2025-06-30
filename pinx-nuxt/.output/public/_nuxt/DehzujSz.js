import{_ as E}from"./D5u1-tCJ.js";import{d as x,q as m,c as G,o as D,a as s,e as o,b as n,_ as W,w as t,u as a,B as r,dW as w,dX as y,t as f,z as v}from"./BF1SYJr_.js";import{N as k}from"./C0aJ_9Oz.js";import"./BXLbaQXh.js";import"./BV4ia66y.js";const A={class:"page"},C={class:"page-header"},L={class:"links"},_={href:"https://www.naiveui.com/en-US/light/components/drawer",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},H={class:"components-list"},I="tabler:external-link",$=x({__name:"Drawer",setup(T){const p=m(!1),c=m(!1),g=m(!1),l=m("right");function h(u){p.value=!0,l.value=u}function d(u){c.value=!0,l.value=u}return(u,e)=>{const S=E;return D(),G("div",A,[s("div",C,[e[13]||(e[13]=s("div",{class:"title"},"Drawer",-1)),s("div",L,[s("a",_,[o(W,{name:I,size:16}),e[12]||(e[12]=n(" docs "))])])]),s("div",H,[o(S,{title:"Basic"},{code:t(({html:i,js:b})=>[n(f(i(`
					<n-button-group>
						<n-button @click="activate('top')">Top</n-button>
						<n-button @click="activate('right')">Right</n-button>
						<n-button @click="activate('bottom')">Bottom</n-button>
						<n-button @click="activate('left')">Left</n-button>
					</n-button-group>
					<n-drawer v-model:show="active" :placement="placement" resizable :default-width="502">
						<n-drawer-content title="Stoner" closable :native-scrollbar="false">
							William Stoner is born on a small farm in 1891. One day his father suggests he should attend
							the University of Missouri to study agriculture. Stoner agrees but, while studying a
							compulsory literature course, he quickly falls in love with literary studies. Without
							telling his parents, Stoner quits the agriculture program and studies only the humanities.
							He completes his MA in English and begins teaching. In graduate school, he is friendly with
							fellow students Gordon Finch and Dave Masters. World War I begins, and Gordon and Dave
							enlist. Despite pressure from Gordon, Stoner decides to remain in school during the war.
							Masters is killed in France, while Finch sees action and becomes an officer. At a faculty
							party, Stoner meets and becomes infatuated with a young woman named Edith, who is staying
							with an aunt for a few weeks. Stoner woos Edith, and she agrees to marry him. Stoner’s
							marriage to Edith is bad from the start. It gradually becomes clear that Edith has profound
							emotional problems. Significantly, she is bitter about having cancelled a trip to Europe
							with her aunt to marry Stoner. After three years of marriage, Edith suddenly informs Stoner
							that she wants a baby. She suddenly becomes passionate sexually, but this period is brief.
							When their daughter Grace is born, Edith remains bedridden for nearly a year, and Stoner
							largely cares for their child alone. He grows close with his young daughter, who spends most
							of her time with him in his study. Stoner gradually realizes that Edith is waging a campaign
							to separate him from his daughter emotionally. For the most part, Stoner accepts Edith's
							mistreatment. He begins to teach with more enthusiasm, but still, year in and year out, his
							marriage with Edith remains perpetually unsatisfactory and fraught. Grace becomes an
							unhappy, secretive child who smiles and laughs often but is emotionally hollow. At the
							University, Finch becomes the acting dean of the faculty. Stoner feels compelled by his
							conscience to fail a student named Charles Walker. He is a close protégé of a colleague,
							Professor Hollis Lomax, and like him is physically disabled. The student is clearly
							dishonest and cannot fulfil the requirements of Stoner's course but, despite this, the
							decision to expel or retain Walker is put on hold. After his promotion to head of the
							department, Lomax takes every opportunity to exact revenge upon Stoner throughout the rest
							of his career. A collaboration between Stoner and a younger instructor in the department,
							Katherine Driscoll, develops into a romantic love affair. Ironically, after the affair
							begins, Stoner’s relationships with Edith and Grace also improve. At some point, Edith finds
							out about the affair, but does not seem to mind it. When Lomax learns about it, however, he
							begins to put pressure on Katherine, who also teaches in the English department. Stoner and
							Driscoll agree it best to end the affair so as not to derail the academic work they both
							feel called to follow. Katherine quietly slips out of town, never to be seen by him again.
							Eventually, Stoner, older now and hard of hearing, is beginning to become a legendary figure
							in the English department despite Lomax's opposition. He begins to spend more time at home,
							ignoring Edith's signs of displeasure at his presence. Entering adulthood, Grace enrolls at
							the University of Missouri. The following year, Grace announces she is pregnant and marries
							the father of her child. Grace’s husband enlists in the army and dies before the baby is
							born. Grace goes to St. Louis with the baby to live with her husband's parents. She visits
							Stoner and Edith occasionally, and Stoner realizes that Grace has developed a drinking
							problem. As Stoner’s life is coming to an end, his daughter Grace comes to visit him. Deeply
							unhappy and addicted to alcohol, Grace halfheartedly tries to reconcile with Stoner, and he
							sees that his daughter, like her mother, will never be happy. When Grace leaves, Stoner
							feels as though the young child that he loved died long ago. Stoner thinks back over his
							life. He thinks about where he failed, and wonders if he could have been more loving to
							Edith, if he could have been stronger, or if he could have helped her more. Later, he
							believes that he is wrong to think of himself as a failure. During an afternoon when he is
							alone, he sees various young students passing by on their way to class outside his window,
							and he dies, dropping his copy of the one book that he published years earlier as a young
							professor.
							<template #footer>
								<n-button @click="showInner = true">Show inner!</n-button>
							</template>
						</n-drawer-content>
						<n-drawer v-model:show="showInner" :width="251" :placement="placement">
							<n-drawer-content title="Stoner">
								Stoner is a 1965 novel by the American writer John Williams.
							</n-drawer-content>
						</n-drawer>
					</n-drawer>
					`))+" "+f(b(`
						const active = ref(false)
						const showInner = ref(false)
						const placement = ref<DrawerPlacement>("right")
						const activate = (place: DrawerPlacement) => {
							active.value = true
							placement.value = place
						}

						`)),1)]),default:t(()=>[o(a(k),null,{default:t(()=>[o(a(r),{onClick:e[0]||(e[0]=i=>h("top"))},{default:t(()=>e[14]||(e[14]=[n("Top")])),_:1,__:[14]}),o(a(r),{onClick:e[1]||(e[1]=i=>h("right"))},{default:t(()=>e[15]||(e[15]=[n("Right")])),_:1,__:[15]}),o(a(r),{onClick:e[2]||(e[2]=i=>h("bottom"))},{default:t(()=>e[16]||(e[16]=[n("Bottom")])),_:1,__:[16]}),o(a(r),{onClick:e[3]||(e[3]=i=>h("left"))},{default:t(()=>e[17]||(e[17]=[n("Left")])),_:1,__:[17]})]),_:1}),o(a(w),{show:p.value,"onUpdate:show":e[6]||(e[6]=i=>p.value=i),placement:l.value,resizable:"","default-width":502},{default:t(()=>[o(a(y),{title:"Stoner",closable:"","native-scrollbar":!1},{footer:t(()=>[o(a(r),{onClick:e[4]||(e[4]=i=>g.value=!0)},{default:t(()=>e[18]||(e[18]=[n("Show inner!")])),_:1,__:[18]})]),default:t(()=>[e[19]||(e[19]=n(" William Stoner is born on a small farm in 1891. One day his father suggests he should attend the University of Missouri to study agriculture. Stoner agrees but, while studying a compulsory literature course, he quickly falls in love with literary studies. Without telling his parents, Stoner quits the agriculture program and studies only the humanities. He completes his MA in English and begins teaching. In graduate school, he is friendly with fellow students Gordon Finch and Dave Masters. World War I begins, and Gordon and Dave enlist. Despite pressure from Gordon, Stoner decides to remain in school during the war. Masters is killed in France, while Finch sees action and becomes an officer. At a faculty party, Stoner meets and becomes infatuated with a young woman named Edith, who is staying with an aunt for a few weeks. Stoner woos Edith, and she agrees to marry him. Stoner’s marriage to Edith is bad from the start. It gradually becomes clear that Edith has profound emotional problems. Significantly, she is bitter about having cancelled a trip to Europe with her aunt to marry Stoner. After three years of marriage, Edith suddenly informs Stoner that she wants a baby. She suddenly becomes passionate sexually, but this period is brief. When their daughter Grace is born, Edith remains bedridden for nearly a year, and Stoner largely cares for their child alone. He grows close with his young daughter, who spends most of her time with him in his study. Stoner gradually realizes that Edith is waging a campaign to separate him from his daughter emotionally. For the most part, Stoner accepts Edith's mistreatment. He begins to teach with more enthusiasm, but still, year in and year out, his marriage with Edith remains perpetually unsatisfactory and fraught. Grace becomes an unhappy, secretive child who smiles and laughs often but is emotionally hollow. At the University, Finch becomes the acting dean of the faculty. Stoner feels compelled by his conscience to fail a student named Charles Walker. He is a close protégé of a colleague, Professor Hollis Lomax, and like him is physically disabled. The student is clearly dishonest and cannot fulfil the requirements of Stoner's course but, despite this, the decision to expel or retain Walker is put on hold. After his promotion to head of the department, Lomax takes every opportunity to exact revenge upon Stoner throughout the rest of his career. A collaboration between Stoner and a younger instructor in the department, Katherine Driscoll, develops into a romantic love affair. Ironically, after the affair begins, Stoner’s relationships with Edith and Grace also improve. At some point, Edith finds out about the affair, but does not seem to mind it. When Lomax learns about it, however, he begins to put pressure on Katherine, who also teaches in the English department. Stoner and Driscoll agree it best to end the affair so as not to derail the academic work they both feel called to follow. Katherine quietly slips out of town, never to be seen by him again. Eventually, Stoner, older now and hard of hearing, is beginning to become a legendary figure in the English department despite Lomax's opposition. He begins to spend more time at home, ignoring Edith's signs of displeasure at his presence. Entering adulthood, Grace enrolls at the University of Missouri. The following year, Grace announces she is pregnant and marries the father of her child. Grace’s husband enlists in the army and dies before the baby is born. Grace goes to St. Louis with the baby to live with her husband's parents. She visits Stoner and Edith occasionally, and Stoner realizes that Grace has developed a drinking problem. As Stoner’s life is coming to an end, his daughter Grace comes to visit him. Deeply unhappy and addicted to alcohol, Grace halfheartedly tries to reconcile with Stoner, and he sees that his daughter, like her mother, will never be happy. When Grace leaves, Stoner feels as though the young child that he loved died long ago. Stoner thinks back over his life. He thinks about where he failed, and wonders if he could have been more loving to Edith, if he could have been stronger, or if he could have helped her more. Later, he believes that he is wrong to think of himself as a failure. During an afternoon when he is alone, he sees various young students passing by on their way to class outside his window, and he dies, dropping his copy of the one book that he published years earlier as a young professor. "))]),_:1,__:[19]}),o(a(w),{show:g.value,"onUpdate:show":e[5]||(e[5]=i=>g.value=i),width:251,placement:l.value},{default:t(()=>[o(a(y),{title:"Stoner"},{default:t(()=>e[20]||(e[20]=[n(" Stoner is a 1965 novel by the American writer John Williams. ")])),_:1,__:[20]})]),_:1},8,["show","placement"])]),_:1},8,["show","placement"])]),_:1}),o(S,{title:"Customize display area"},{description:t(()=>[e[24]||(e[24]=n(" You can customize display area by ")),o(a(v),{code:""},{default:t(()=>e[21]||(e[21]=[n("to")])),_:1,__:[21]}),e[25]||(e[25]=n(" prop. Remember to set ")),o(a(v),{code:""},{default:t(()=>e[22]||(e[22]=[n(':trap-focus="false"')])),_:1,__:[22]}),e[26]||(e[26]=n(" and ")),o(a(v),{code:""},{default:t(()=>e[23]||(e[23]=[n(':block-scroll="false"')])),_:1,__:[23]}),e[27]||(e[27]=n(" , otherwise content outside drawer won't be focusable and body won't be scrollable. "))]),code:t(({html:i,js:b})=>[n(f(i(`
					<n-button-group>
						<n-button @click="activate1('top')">Top</n-button>
						<n-button @click="activate1('right')">Right</n-button>
						<n-button @click="activate1('bottom')">Bottom</n-button>
						<n-button @click="activate1('left')">Left</n-button>
					</n-button-group>
					<div
						id="drawer-target"
						style="
							position: relative;
							width: 100%;
							height: 300px;
							border: 1px solid rgba(128, 128, 128, 0.2);
							margin-top: 10px;
							display: flex;
							align-items: center;
							justify-content: center;
							overflow: hidden;
						"
					>
						Target Area
					</div>
					<n-drawer
						v-model:show="active1"
						:width="200"
						:height="200"
						:placement="placement"
						:trap-focus="false"
						to="#drawer-target"
					>
						<n-drawer-content title="Stoner">
							Stoner is a 1965 novel by the American writer John Williams.
						</n-drawer-content>
					</n-drawer>
					`))+" "+f(b(`
						const active1 = ref(false)
						const showInner = ref(false)
						const placement = ref<DrawerPlacement>("right")
						const activate1 = (place: DrawerPlacement) => {
							active1.value = true
							placement.value = place
						}

						`)),1)]),default:t(()=>[o(a(k),null,{default:t(()=>[o(a(r),{onClick:e[7]||(e[7]=i=>d("top"))},{default:t(()=>e[28]||(e[28]=[n("Top")])),_:1,__:[28]}),o(a(r),{onClick:e[8]||(e[8]=i=>d("right"))},{default:t(()=>e[29]||(e[29]=[n("Right")])),_:1,__:[29]}),o(a(r),{onClick:e[9]||(e[9]=i=>d("bottom"))},{default:t(()=>e[30]||(e[30]=[n("Bottom")])),_:1,__:[30]}),o(a(r),{onClick:e[10]||(e[10]=i=>d("left"))},{default:t(()=>e[31]||(e[31]=[n("Left")])),_:1,__:[31]})]),_:1}),e[33]||(e[33]=s("div",{id:"drawer-target",style:{position:"relative",width:"100%",height:"300px",border:"1px solid rgba(128, 128, 128, 0.2)","margin-top":"10px",display:"flex","align-items":"center","justify-content":"center",overflow:"hidden"}}," Target Area ",-1)),o(a(w),{show:c.value,"onUpdate:show":e[11]||(e[11]=i=>c.value=i),width:200,height:200,placement:l.value,"trap-focus":!1,to:"#drawer-target"},{default:t(()=>[o(a(y),{title:"Stoner"},{default:t(()=>e[32]||(e[32]=[n(" Stoner is a 1965 novel by the American writer John Williams. ")])),_:1,__:[32]})]),_:1},8,["show","placement"])]),_:1,__:[33]})])])}}});export{$ as default};
