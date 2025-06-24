import { _ as __nuxt_component_0 } from './CardCodeExample-CeKaPIo-.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _sfc_main$o, B as Button, by as NDrawer, bz as NDrawerContent, c as NText } from './server.mjs';
import { N as NButtonGroup } from './ButtonGroup-DmH6L5Fi.mjs';
import './LtrContext-CUHPU62m.mjs';
import 'highlight.js/lib/core';
import 'highlight.js/lib/languages/css';
import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/scss';
import 'highlight.js/lib/languages/typescript';
import 'highlight.js/lib/languages/xml';
import './CollapseItem-BML65SQa.mjs';
import 'seemly';
import 'vooks';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'pinia';
import 'vue-router';
import 'lodash/castArray.js';
import 'qs';
import '@css-render/vue3-ssr';
import 'deep-pick-omit';
import 'colord';
import 'lodash/get.js';
import '@vueuse/core';
import 'lodash/set.js';
import 'lodash-es';
import '@css-render/plugin-bem';
import 'css-render';
import 'evtd';
import 'dayjs';
import 'dayjs/plugin/customParseFormat.js';
import 'dayjs/plugin/timezone.js';
import 'vdirs';
import 'lodash/uniq.js';
import '@iconify/vue';
import 'treemate';
import 'lodash/uniqBy.js';
import 'lodash/take.js';
import 'vue-highlight-words';

const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Drawer",
  __ssrInlineRender: true,
  setup(__props) {
    const active = ref(false);
    const active1 = ref(false);
    const showInner = ref(false);
    const placement = ref("right");
    function activate(place) {
      active.value = true;
      placement.value = place;
    }
    function activate1(place) {
      active1.value = true;
      placement.value = place;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Drawer</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/drawer" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
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
							with an aunt for a few weeks. Stoner woos Edith, and she agrees to marry him. Stoner\u2019s
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
							conscience to fail a student named Charles Walker. He is a close prot\xE9g\xE9 of a colleague,
							Professor Hollis Lomax, and like him is physically disabled. The student is clearly
							dishonest and cannot fulfil the requirements of Stoner's course but, despite this, the
							decision to expel or retain Walker is put on hold. After his promotion to head of the
							department, Lomax takes every opportunity to exact revenge upon Stoner throughout the rest
							of his career. A collaboration between Stoner and a younger instructor in the department,
							Katherine Driscoll, develops into a romantic love affair. Ironically, after the affair
							begins, Stoner\u2019s relationships with Edith and Grace also improve. At some point, Edith finds
							out about the affair, but does not seem to mind it. When Lomax learns about it, however, he
							begins to put pressure on Katherine, who also teaches in the English department. Stoner and
							Driscoll agree it best to end the affair so as not to derail the academic work they both
							feel called to follow. Katherine quietly slips out of town, never to be seen by him again.
							Eventually, Stoner, older now and hard of hearing, is beginning to become a legendary figure
							in the English department despite Lomax's opposition. He begins to spend more time at home,
							ignoring Edith's signs of displeasure at his presence. Entering adulthood, Grace enrolls at
							the University of Missouri. The following year, Grace announces she is pregnant and marries
							the father of her child. Grace\u2019s husband enlists in the army and dies before the baby is
							born. Grace goes to St. Louis with the baby to live with her husband's parents. She visits
							Stoner and Edith occasionally, and Stoner realizes that Grace has developed a drinking
							problem. As Stoner\u2019s life is coming to an end, his daughter Grace comes to visit him. Deeply
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
					`))} ${ssrInterpolate(js(`
						const active = ref(false)
						const showInner = ref(false)
						const placement = ref<DrawerPlacement>("right")
						const activate = (place: DrawerPlacement) => {
							active.value = true
							placement.value = place
						}

						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
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
							with an aunt for a few weeks. Stoner woos Edith, and she agrees to marry him. Stoner\u2019s
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
							conscience to fail a student named Charles Walker. He is a close prot\xE9g\xE9 of a colleague,
							Professor Hollis Lomax, and like him is physically disabled. The student is clearly
							dishonest and cannot fulfil the requirements of Stoner's course but, despite this, the
							decision to expel or retain Walker is put on hold. After his promotion to head of the
							department, Lomax takes every opportunity to exact revenge upon Stoner throughout the rest
							of his career. A collaboration between Stoner and a younger instructor in the department,
							Katherine Driscoll, develops into a romantic love affair. Ironically, after the affair
							begins, Stoner\u2019s relationships with Edith and Grace also improve. At some point, Edith finds
							out about the affair, but does not seem to mind it. When Lomax learns about it, however, he
							begins to put pressure on Katherine, who also teaches in the English department. Stoner and
							Driscoll agree it best to end the affair so as not to derail the academic work they both
							feel called to follow. Katherine quietly slips out of town, never to be seen by him again.
							Eventually, Stoner, older now and hard of hearing, is beginning to become a legendary figure
							in the English department despite Lomax's opposition. He begins to spend more time at home,
							ignoring Edith's signs of displeasure at his presence. Entering adulthood, Grace enrolls at
							the University of Missouri. The following year, Grace announces she is pregnant and marries
							the father of her child. Grace\u2019s husband enlists in the army and dies before the baby is
							born. Grace goes to St. Louis with the baby to live with her husband's parents. She visits
							Stoner and Edith occasionally, and Stoner realizes that Grace has developed a drinking
							problem. As Stoner\u2019s life is coming to an end, his daughter Grace comes to visit him. Deeply
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
					`)) + " " + toDisplayString(js(`
						const active = ref(false)
						const showInner = ref(false)
						const placement = ref<DrawerPlacement>("right")
						const activate = (place: DrawerPlacement) => {
							active.value = true
							placement.value = place
						}

						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NButtonGroup), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Button), {
                    onClick: ($event) => activate("top")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Top`);
                      } else {
                        return [
                          createTextVNode("Top")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), {
                    onClick: ($event) => activate("right")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Right`);
                      } else {
                        return [
                          createTextVNode("Right")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), {
                    onClick: ($event) => activate("bottom")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Bottom`);
                      } else {
                        return [
                          createTextVNode("Bottom")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), {
                    onClick: ($event) => activate("left")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Left`);
                      } else {
                        return [
                          createTextVNode("Left")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Button), {
                      onClick: ($event) => activate("top")
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Top")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(unref(Button), {
                      onClick: ($event) => activate("right")
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Right")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(unref(Button), {
                      onClick: ($event) => activate("bottom")
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Bottom")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(unref(Button), {
                      onClick: ($event) => activate("left")
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Left")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NDrawer), {
              show: active.value,
              "onUpdate:show": ($event) => active.value = $event,
              placement: placement.value,
              resizable: "",
              "default-width": 502
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NDrawerContent), {
                    title: "Stoner",
                    closable: "",
                    "native-scrollbar": false
                  }, {
                    footer: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Button), {
                          onClick: ($event) => showInner.value = true
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Show inner!`);
                            } else {
                              return [
                                createTextVNode("Show inner!")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Button), {
                            onClick: ($event) => showInner.value = true
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Show inner!")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` William Stoner is born on a small farm in 1891. One day his father suggests he should attend the University of Missouri to study agriculture. Stoner agrees but, while studying a compulsory literature course, he quickly falls in love with literary studies. Without telling his parents, Stoner quits the agriculture program and studies only the humanities. He completes his MA in English and begins teaching. In graduate school, he is friendly with fellow students Gordon Finch and Dave Masters. World War I begins, and Gordon and Dave enlist. Despite pressure from Gordon, Stoner decides to remain in school during the war. Masters is killed in France, while Finch sees action and becomes an officer. At a faculty party, Stoner meets and becomes infatuated with a young woman named Edith, who is staying with an aunt for a few weeks. Stoner woos Edith, and she agrees to marry him. Stoner\u2019s marriage to Edith is bad from the start. It gradually becomes clear that Edith has profound emotional problems. Significantly, she is bitter about having cancelled a trip to Europe with her aunt to marry Stoner. After three years of marriage, Edith suddenly informs Stoner that she wants a baby. She suddenly becomes passionate sexually, but this period is brief. When their daughter Grace is born, Edith remains bedridden for nearly a year, and Stoner largely cares for their child alone. He grows close with his young daughter, who spends most of her time with him in his study. Stoner gradually realizes that Edith is waging a campaign to separate him from his daughter emotionally. For the most part, Stoner accepts Edith&#39;s mistreatment. He begins to teach with more enthusiasm, but still, year in and year out, his marriage with Edith remains perpetually unsatisfactory and fraught. Grace becomes an unhappy, secretive child who smiles and laughs often but is emotionally hollow. At the University, Finch becomes the acting dean of the faculty. Stoner feels compelled by his conscience to fail a student named Charles Walker. He is a close prot\xE9g\xE9 of a colleague, Professor Hollis Lomax, and like him is physically disabled. The student is clearly dishonest and cannot fulfil the requirements of Stoner&#39;s course but, despite this, the decision to expel or retain Walker is put on hold. After his promotion to head of the department, Lomax takes every opportunity to exact revenge upon Stoner throughout the rest of his career. A collaboration between Stoner and a younger instructor in the department, Katherine Driscoll, develops into a romantic love affair. Ironically, after the affair begins, Stoner\u2019s relationships with Edith and Grace also improve. At some point, Edith finds out about the affair, but does not seem to mind it. When Lomax learns about it, however, he begins to put pressure on Katherine, who also teaches in the English department. Stoner and Driscoll agree it best to end the affair so as not to derail the academic work they both feel called to follow. Katherine quietly slips out of town, never to be seen by him again. Eventually, Stoner, older now and hard of hearing, is beginning to become a legendary figure in the English department despite Lomax&#39;s opposition. He begins to spend more time at home, ignoring Edith&#39;s signs of displeasure at his presence. Entering adulthood, Grace enrolls at the University of Missouri. The following year, Grace announces she is pregnant and marries the father of her child. Grace\u2019s husband enlists in the army and dies before the baby is born. Grace goes to St. Louis with the baby to live with her husband&#39;s parents. She visits Stoner and Edith occasionally, and Stoner realizes that Grace has developed a drinking problem. As Stoner\u2019s life is coming to an end, his daughter Grace comes to visit him. Deeply unhappy and addicted to alcohol, Grace halfheartedly tries to reconcile with Stoner, and he sees that his daughter, like her mother, will never be happy. When Grace leaves, Stoner feels as though the young child that he loved died long ago. Stoner thinks back over his life. He thinks about where he failed, and wonders if he could have been more loving to Edith, if he could have been stronger, or if he could have helped her more. Later, he believes that he is wrong to think of himself as a failure. During an afternoon when he is alone, he sees various young students passing by on their way to class outside his window, and he dies, dropping his copy of the one book that he published years earlier as a young professor. `);
                      } else {
                        return [
                          createTextVNode(" William Stoner is born on a small farm in 1891. One day his father suggests he should attend the University of Missouri to study agriculture. Stoner agrees but, while studying a compulsory literature course, he quickly falls in love with literary studies. Without telling his parents, Stoner quits the agriculture program and studies only the humanities. He completes his MA in English and begins teaching. In graduate school, he is friendly with fellow students Gordon Finch and Dave Masters. World War I begins, and Gordon and Dave enlist. Despite pressure from Gordon, Stoner decides to remain in school during the war. Masters is killed in France, while Finch sees action and becomes an officer. At a faculty party, Stoner meets and becomes infatuated with a young woman named Edith, who is staying with an aunt for a few weeks. Stoner woos Edith, and she agrees to marry him. Stoner\u2019s marriage to Edith is bad from the start. It gradually becomes clear that Edith has profound emotional problems. Significantly, she is bitter about having cancelled a trip to Europe with her aunt to marry Stoner. After three years of marriage, Edith suddenly informs Stoner that she wants a baby. She suddenly becomes passionate sexually, but this period is brief. When their daughter Grace is born, Edith remains bedridden for nearly a year, and Stoner largely cares for their child alone. He grows close with his young daughter, who spends most of her time with him in his study. Stoner gradually realizes that Edith is waging a campaign to separate him from his daughter emotionally. For the most part, Stoner accepts Edith's mistreatment. He begins to teach with more enthusiasm, but still, year in and year out, his marriage with Edith remains perpetually unsatisfactory and fraught. Grace becomes an unhappy, secretive child who smiles and laughs often but is emotionally hollow. At the University, Finch becomes the acting dean of the faculty. Stoner feels compelled by his conscience to fail a student named Charles Walker. He is a close prot\xE9g\xE9 of a colleague, Professor Hollis Lomax, and like him is physically disabled. The student is clearly dishonest and cannot fulfil the requirements of Stoner's course but, despite this, the decision to expel or retain Walker is put on hold. After his promotion to head of the department, Lomax takes every opportunity to exact revenge upon Stoner throughout the rest of his career. A collaboration between Stoner and a younger instructor in the department, Katherine Driscoll, develops into a romantic love affair. Ironically, after the affair begins, Stoner\u2019s relationships with Edith and Grace also improve. At some point, Edith finds out about the affair, but does not seem to mind it. When Lomax learns about it, however, he begins to put pressure on Katherine, who also teaches in the English department. Stoner and Driscoll agree it best to end the affair so as not to derail the academic work they both feel called to follow. Katherine quietly slips out of town, never to be seen by him again. Eventually, Stoner, older now and hard of hearing, is beginning to become a legendary figure in the English department despite Lomax's opposition. He begins to spend more time at home, ignoring Edith's signs of displeasure at his presence. Entering adulthood, Grace enrolls at the University of Missouri. The following year, Grace announces she is pregnant and marries the father of her child. Grace\u2019s husband enlists in the army and dies before the baby is born. Grace goes to St. Louis with the baby to live with her husband's parents. She visits Stoner and Edith occasionally, and Stoner realizes that Grace has developed a drinking problem. As Stoner\u2019s life is coming to an end, his daughter Grace comes to visit him. Deeply unhappy and addicted to alcohol, Grace halfheartedly tries to reconcile with Stoner, and he sees that his daughter, like her mother, will never be happy. When Grace leaves, Stoner feels as though the young child that he loved died long ago. Stoner thinks back over his life. He thinks about where he failed, and wonders if he could have been more loving to Edith, if he could have been stronger, or if he could have helped her more. Later, he believes that he is wrong to think of himself as a failure. During an afternoon when he is alone, he sees various young students passing by on their way to class outside his window, and he dies, dropping his copy of the one book that he published years earlier as a young professor. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(NDrawer), {
                    show: showInner.value,
                    "onUpdate:show": ($event) => showInner.value = $event,
                    width: 251,
                    placement: placement.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(NDrawerContent), { title: "Stoner" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Stoner is a 1965 novel by the American writer John Williams. `);
                            } else {
                              return [
                                createTextVNode(" Stoner is a 1965 novel by the American writer John Williams. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(NDrawerContent), { title: "Stoner" }, {
                            default: withCtx(() => [
                              createTextVNode(" Stoner is a 1965 novel by the American writer John Williams. ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NDrawerContent), {
                      title: "Stoner",
                      closable: "",
                      "native-scrollbar": false
                    }, {
                      footer: withCtx(() => [
                        createVNode(unref(Button), {
                          onClick: ($event) => showInner.value = true
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Show inner!")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      default: withCtx(() => [
                        createTextVNode(" William Stoner is born on a small farm in 1891. One day his father suggests he should attend the University of Missouri to study agriculture. Stoner agrees but, while studying a compulsory literature course, he quickly falls in love with literary studies. Without telling his parents, Stoner quits the agriculture program and studies only the humanities. He completes his MA in English and begins teaching. In graduate school, he is friendly with fellow students Gordon Finch and Dave Masters. World War I begins, and Gordon and Dave enlist. Despite pressure from Gordon, Stoner decides to remain in school during the war. Masters is killed in France, while Finch sees action and becomes an officer. At a faculty party, Stoner meets and becomes infatuated with a young woman named Edith, who is staying with an aunt for a few weeks. Stoner woos Edith, and she agrees to marry him. Stoner\u2019s marriage to Edith is bad from the start. It gradually becomes clear that Edith has profound emotional problems. Significantly, she is bitter about having cancelled a trip to Europe with her aunt to marry Stoner. After three years of marriage, Edith suddenly informs Stoner that she wants a baby. She suddenly becomes passionate sexually, but this period is brief. When their daughter Grace is born, Edith remains bedridden for nearly a year, and Stoner largely cares for their child alone. He grows close with his young daughter, who spends most of her time with him in his study. Stoner gradually realizes that Edith is waging a campaign to separate him from his daughter emotionally. For the most part, Stoner accepts Edith's mistreatment. He begins to teach with more enthusiasm, but still, year in and year out, his marriage with Edith remains perpetually unsatisfactory and fraught. Grace becomes an unhappy, secretive child who smiles and laughs often but is emotionally hollow. At the University, Finch becomes the acting dean of the faculty. Stoner feels compelled by his conscience to fail a student named Charles Walker. He is a close prot\xE9g\xE9 of a colleague, Professor Hollis Lomax, and like him is physically disabled. The student is clearly dishonest and cannot fulfil the requirements of Stoner's course but, despite this, the decision to expel or retain Walker is put on hold. After his promotion to head of the department, Lomax takes every opportunity to exact revenge upon Stoner throughout the rest of his career. A collaboration between Stoner and a younger instructor in the department, Katherine Driscoll, develops into a romantic love affair. Ironically, after the affair begins, Stoner\u2019s relationships with Edith and Grace also improve. At some point, Edith finds out about the affair, but does not seem to mind it. When Lomax learns about it, however, he begins to put pressure on Katherine, who also teaches in the English department. Stoner and Driscoll agree it best to end the affair so as not to derail the academic work they both feel called to follow. Katherine quietly slips out of town, never to be seen by him again. Eventually, Stoner, older now and hard of hearing, is beginning to become a legendary figure in the English department despite Lomax's opposition. He begins to spend more time at home, ignoring Edith's signs of displeasure at his presence. Entering adulthood, Grace enrolls at the University of Missouri. The following year, Grace announces she is pregnant and marries the father of her child. Grace\u2019s husband enlists in the army and dies before the baby is born. Grace goes to St. Louis with the baby to live with her husband's parents. She visits Stoner and Edith occasionally, and Stoner realizes that Grace has developed a drinking problem. As Stoner\u2019s life is coming to an end, his daughter Grace comes to visit him. Deeply unhappy and addicted to alcohol, Grace halfheartedly tries to reconcile with Stoner, and he sees that his daughter, like her mother, will never be happy. When Grace leaves, Stoner feels as though the young child that he loved died long ago. Stoner thinks back over his life. He thinks about where he failed, and wonders if he could have been more loving to Edith, if he could have been stronger, or if he could have helped her more. Later, he believes that he is wrong to think of himself as a failure. During an afternoon when he is alone, he sees various young students passing by on their way to class outside his window, and he dies, dropping his copy of the one book that he published years earlier as a young professor. ")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(NDrawer), {
                      show: showInner.value,
                      "onUpdate:show": ($event) => showInner.value = $event,
                      width: 251,
                      placement: placement.value
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NDrawerContent), { title: "Stoner" }, {
                          default: withCtx(() => [
                            createTextVNode(" Stoner is a 1965 novel by the American writer John Williams. ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["show", "onUpdate:show", "placement"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NButtonGroup), null, {
                default: withCtx(() => [
                  createVNode(unref(Button), {
                    onClick: ($event) => activate("top")
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Top")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(unref(Button), {
                    onClick: ($event) => activate("right")
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Right")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(unref(Button), {
                    onClick: ($event) => activate("bottom")
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Bottom")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(unref(Button), {
                    onClick: ($event) => activate("left")
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Left")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              }),
              createVNode(unref(NDrawer), {
                show: active.value,
                "onUpdate:show": ($event) => active.value = $event,
                placement: placement.value,
                resizable: "",
                "default-width": 502
              }, {
                default: withCtx(() => [
                  createVNode(unref(NDrawerContent), {
                    title: "Stoner",
                    closable: "",
                    "native-scrollbar": false
                  }, {
                    footer: withCtx(() => [
                      createVNode(unref(Button), {
                        onClick: ($event) => showInner.value = true
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Show inner!")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    default: withCtx(() => [
                      createTextVNode(" William Stoner is born on a small farm in 1891. One day his father suggests he should attend the University of Missouri to study agriculture. Stoner agrees but, while studying a compulsory literature course, he quickly falls in love with literary studies. Without telling his parents, Stoner quits the agriculture program and studies only the humanities. He completes his MA in English and begins teaching. In graduate school, he is friendly with fellow students Gordon Finch and Dave Masters. World War I begins, and Gordon and Dave enlist. Despite pressure from Gordon, Stoner decides to remain in school during the war. Masters is killed in France, while Finch sees action and becomes an officer. At a faculty party, Stoner meets and becomes infatuated with a young woman named Edith, who is staying with an aunt for a few weeks. Stoner woos Edith, and she agrees to marry him. Stoner\u2019s marriage to Edith is bad from the start. It gradually becomes clear that Edith has profound emotional problems. Significantly, she is bitter about having cancelled a trip to Europe with her aunt to marry Stoner. After three years of marriage, Edith suddenly informs Stoner that she wants a baby. She suddenly becomes passionate sexually, but this period is brief. When their daughter Grace is born, Edith remains bedridden for nearly a year, and Stoner largely cares for their child alone. He grows close with his young daughter, who spends most of her time with him in his study. Stoner gradually realizes that Edith is waging a campaign to separate him from his daughter emotionally. For the most part, Stoner accepts Edith's mistreatment. He begins to teach with more enthusiasm, but still, year in and year out, his marriage with Edith remains perpetually unsatisfactory and fraught. Grace becomes an unhappy, secretive child who smiles and laughs often but is emotionally hollow. At the University, Finch becomes the acting dean of the faculty. Stoner feels compelled by his conscience to fail a student named Charles Walker. He is a close prot\xE9g\xE9 of a colleague, Professor Hollis Lomax, and like him is physically disabled. The student is clearly dishonest and cannot fulfil the requirements of Stoner's course but, despite this, the decision to expel or retain Walker is put on hold. After his promotion to head of the department, Lomax takes every opportunity to exact revenge upon Stoner throughout the rest of his career. A collaboration between Stoner and a younger instructor in the department, Katherine Driscoll, develops into a romantic love affair. Ironically, after the affair begins, Stoner\u2019s relationships with Edith and Grace also improve. At some point, Edith finds out about the affair, but does not seem to mind it. When Lomax learns about it, however, he begins to put pressure on Katherine, who also teaches in the English department. Stoner and Driscoll agree it best to end the affair so as not to derail the academic work they both feel called to follow. Katherine quietly slips out of town, never to be seen by him again. Eventually, Stoner, older now and hard of hearing, is beginning to become a legendary figure in the English department despite Lomax's opposition. He begins to spend more time at home, ignoring Edith's signs of displeasure at his presence. Entering adulthood, Grace enrolls at the University of Missouri. The following year, Grace announces she is pregnant and marries the father of her child. Grace\u2019s husband enlists in the army and dies before the baby is born. Grace goes to St. Louis with the baby to live with her husband's parents. She visits Stoner and Edith occasionally, and Stoner realizes that Grace has developed a drinking problem. As Stoner\u2019s life is coming to an end, his daughter Grace comes to visit him. Deeply unhappy and addicted to alcohol, Grace halfheartedly tries to reconcile with Stoner, and he sees that his daughter, like her mother, will never be happy. When Grace leaves, Stoner feels as though the young child that he loved died long ago. Stoner thinks back over his life. He thinks about where he failed, and wonders if he could have been more loving to Edith, if he could have been stronger, or if he could have helped her more. Later, he believes that he is wrong to think of himself as a failure. During an afternoon when he is alone, he sees various young students passing by on their way to class outside his window, and he dies, dropping his copy of the one book that he published years earlier as a young professor. ")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(NDrawer), {
                    show: showInner.value,
                    "onUpdate:show": ($event) => showInner.value = $event,
                    width: 251,
                    placement: placement.value
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(NDrawerContent), { title: "Stoner" }, {
                        default: withCtx(() => [
                          createTextVNode(" Stoner is a 1965 novel by the American writer John Williams. ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["show", "onUpdate:show", "placement"])
                ]),
                _: 1
              }, 8, ["show", "onUpdate:show", "placement"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Customize display area" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` You can customize display area by `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`to`);
                } else {
                  return [
                    createTextVNode("to")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` prop. Remember to set `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`:trap-focus=&quot;false&quot;`);
                } else {
                  return [
                    createTextVNode(':trap-focus="false"')
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` and `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`:block-scroll=&quot;false&quot;`);
                } else {
                  return [
                    createTextVNode(':block-scroll="false"')
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` , otherwise content outside drawer won&#39;t be focusable and body won&#39;t be scrollable. `);
          } else {
            return [
              createTextVNode(" You can customize display area by "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("to")
                ]),
                _: 1
              }),
              createTextVNode(" prop. Remember to set "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode(':trap-focus="false"')
                ]),
                _: 1
              }),
              createTextVNode(" and "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode(':block-scroll="false"')
                ]),
                _: 1
              }),
              createTextVNode(" , otherwise content outside drawer won't be focusable and body won't be scrollable. ")
            ];
          }
        }),
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
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
					`))} ${ssrInterpolate(js(`
						const active1 = ref(false)
						const showInner = ref(false)
						const placement = ref<DrawerPlacement>("right")
						const activate1 = (place: DrawerPlacement) => {
							active1.value = true
							placement.value = place
						}

						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
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
					`)) + " " + toDisplayString(js(`
						const active1 = ref(false)
						const showInner = ref(false)
						const placement = ref<DrawerPlacement>("right")
						const activate1 = (place: DrawerPlacement) => {
							active1.value = true
							placement.value = place
						}

						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NButtonGroup), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Button), {
                    onClick: ($event) => activate1("top")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Top`);
                      } else {
                        return [
                          createTextVNode("Top")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), {
                    onClick: ($event) => activate1("right")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Right`);
                      } else {
                        return [
                          createTextVNode("Right")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), {
                    onClick: ($event) => activate1("bottom")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Bottom`);
                      } else {
                        return [
                          createTextVNode("Bottom")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), {
                    onClick: ($event) => activate1("left")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Left`);
                      } else {
                        return [
                          createTextVNode("Left")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Button), {
                      onClick: ($event) => activate1("top")
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Top")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(unref(Button), {
                      onClick: ($event) => activate1("right")
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Right")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(unref(Button), {
                      onClick: ($event) => activate1("bottom")
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Bottom")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(unref(Button), {
                      onClick: ($event) => activate1("left")
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Left")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div id="drawer-target" style="${ssrRenderStyle({ "position": "relative", "width": "100%", "height": "300px", "border": "1px solid rgba(128, 128, 128, 0.2)", "margin-top": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "overflow": "hidden" })}"${_scopeId}> Target Area </div>`);
            _push2(ssrRenderComponent(unref(NDrawer), {
              show: active1.value,
              "onUpdate:show": ($event) => active1.value = $event,
              width: 200,
              height: 200,
              placement: placement.value,
              "trap-focus": false,
              to: "#drawer-target"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NDrawerContent), { title: "Stoner" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Stoner is a 1965 novel by the American writer John Williams. `);
                      } else {
                        return [
                          createTextVNode(" Stoner is a 1965 novel by the American writer John Williams. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NDrawerContent), { title: "Stoner" }, {
                      default: withCtx(() => [
                        createTextVNode(" Stoner is a 1965 novel by the American writer John Williams. ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NButtonGroup), null, {
                default: withCtx(() => [
                  createVNode(unref(Button), {
                    onClick: ($event) => activate1("top")
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Top")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(unref(Button), {
                    onClick: ($event) => activate1("right")
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Right")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(unref(Button), {
                    onClick: ($event) => activate1("bottom")
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Bottom")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(unref(Button), {
                    onClick: ($event) => activate1("left")
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Left")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              }),
              createVNode("div", {
                id: "drawer-target",
                style: { "position": "relative", "width": "100%", "height": "300px", "border": "1px solid rgba(128, 128, 128, 0.2)", "margin-top": "10px", "display": "flex", "align-items": "center", "justify-content": "center", "overflow": "hidden" }
              }, " Target Area "),
              createVNode(unref(NDrawer), {
                show: active1.value,
                "onUpdate:show": ($event) => active1.value = $event,
                width: 200,
                height: 200,
                placement: placement.value,
                "trap-focus": false,
                to: "#drawer-target"
              }, {
                default: withCtx(() => [
                  createVNode(unref(NDrawerContent), { title: "Stoner" }, {
                    default: withCtx(() => [
                      createTextVNode(" Stoner is a 1965 novel by the American writer John Williams. ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["show", "onUpdate:show", "placement"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Drawer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Drawer-aCDZi_hH.mjs.map
