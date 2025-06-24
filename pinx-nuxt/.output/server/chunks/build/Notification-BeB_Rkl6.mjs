import { _ as __nuxt_component_0 } from './CardCodeExample-CeKaPIo-.mjs';
import { defineComponent, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, h, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { aC as useMessage, u as useNotification, _ as _sfc_main$o, B as Button, d as NAvatar } from './server.mjs';
import { N as NSpace } from './Space-DjOc_slc.mjs';
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
import './get-slot-BIpdyb5h.mjs';

const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Notification",
  __ssrInlineRender: true,
  setup(__props) {
    const message = useMessage();
    const notification = useNotification();
    function handleClick1() {
      notification.create({
        title: "Wouldn't it be Nice",
        description: "From the Beach Boys",
        content: `Wouldn't it be nice if we were older
Then we wouldn't have to wait so long
And wouldn't it be nice to live together
In the kind of world where we belong
You know its gonna make it that much better
When we can say goodnight and stay together
Wouldn't it be nice if we could wake up
In the morning when the day is new
And after having spent the day together
Hold each other close the whole night through`,
        meta: "2019-5-27 15:11",
        avatar: () => h(NAvatar, {
          size: "small",
          round: true,
          src: "https://picsum.photos/seed/FsNXmz/460/460"
        }),
        onAfterLeave: () => {
          message.success("Wouldn't it be Nice");
        }
      });
    }
    function handleClick2() {
      let markAsRead = false;
      const n = notification.create({
        title: "Satisfaction",
        content: `I cant get no satisfaction
I cant get no satisfaction
Cause I try and I try and I try and I try
I cant get no, I cant get no`,
        meta: "2019-5-27 15:11",
        action: () => h(
          Button,
          {
            text: true,
            type: "primary",
            onClick: () => {
              markAsRead = true;
              n.destroy();
            }
          },
          {
            default: () => "Mark as Read"
          }
        ),
        onClose: () => {
          if (!markAsRead) {
            message.warning("Please mark as read");
            return false;
          }
        }
      });
    }
    function notify(type) {
      notification[type]({
        content: "What to say?",
        meta: "I don't know",
        duration: 2500,
        keepAliveOnHover: true
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Notification</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/notification" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, {
        title: "Basic",
        class: "max-w-2xl"
      }, {
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-space>
						<n-button @click="handleClick1">Wouldn't it be Nice</n-button>
						<n-button @click="handleClick2">Satisfaction</n-button>
						<n-button @click="notify('info')">Info</n-button>
						<n-button @click="notify('success')">Success</n-button>
						<n-button @click="notify('warning')">Warning</n-button>
						<n-button @click="notify('error')">Error</n-button>
					</n-space>
					`))} ${ssrInterpolate(js(`
						const message = useMessage()
						const notification = useNotification()

						function handleClick1() {
							notification.create({
								title: "Wouldn't it be Nice",
								description: "From the Beach Boys",
								content: \`Wouldn't it be nice if we were older
						Then we wouldn't have to wait so long
						And wouldn't it be nice to live together
						In the kind of world where we belong
						You know its gonna make it that much better
						When we can say goodnight and stay together
						Wouldn't it be nice if we could wake up
						In the morning when the day is new
						And after having spent the day together
						Hold each other close the whole night through\`,
								meta: "2019-5-27 15:11",
								avatar: () =>
									h(NAvatar, {
										size: "small",
										round: true,
										src: "https://picsum.photos/seed/FsNXmz/460/460"
									}),
								onAfterLeave: () => {
									message.success("Wouldn't it be Nice")
								}
							})
						}
						function handleClick2() {
							let markAsRead = false
							const n = notification.create({
								title: "Satisfaction",
								content: \`I cant get no satisfaction
						I cant get no satisfaction
						Cause I try and I try and I try and I try
						I cant get no, I cant get no\`,
								meta: "2019-5-27 15:11",
								action: () =>
									h(
										NButton,
										{
											text: true,
											type: "primary",
											onClick: () => {
												markAsRead = true
												n.destroy()
											}
										},
										{
											default: () => "Mark as Read"
										}
									),
								onClose: () => {
									if (!markAsRead) {
										message.warning("Please mark as read")
										return false
									}
								}
							})
						}
						function notify(type: NotificationType) {
							notification[type]({
								content: "What to say?",
								meta: "I don't know",
								duration: 2500,
								keepAliveOnHover: true
							})
						}

						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-space>
						<n-button @click="handleClick1">Wouldn't it be Nice</n-button>
						<n-button @click="handleClick2">Satisfaction</n-button>
						<n-button @click="notify('info')">Info</n-button>
						<n-button @click="notify('success')">Success</n-button>
						<n-button @click="notify('warning')">Warning</n-button>
						<n-button @click="notify('error')">Error</n-button>
					</n-space>
					`)) + " " + toDisplayString(js(`
						const message = useMessage()
						const notification = useNotification()

						function handleClick1() {
							notification.create({
								title: "Wouldn't it be Nice",
								description: "From the Beach Boys",
								content: \`Wouldn't it be nice if we were older
						Then we wouldn't have to wait so long
						And wouldn't it be nice to live together
						In the kind of world where we belong
						You know its gonna make it that much better
						When we can say goodnight and stay together
						Wouldn't it be nice if we could wake up
						In the morning when the day is new
						And after having spent the day together
						Hold each other close the whole night through\`,
								meta: "2019-5-27 15:11",
								avatar: () =>
									h(NAvatar, {
										size: "small",
										round: true,
										src: "https://picsum.photos/seed/FsNXmz/460/460"
									}),
								onAfterLeave: () => {
									message.success("Wouldn't it be Nice")
								}
							})
						}
						function handleClick2() {
							let markAsRead = false
							const n = notification.create({
								title: "Satisfaction",
								content: \`I cant get no satisfaction
						I cant get no satisfaction
						Cause I try and I try and I try and I try
						I cant get no, I cant get no\`,
								meta: "2019-5-27 15:11",
								action: () =>
									h(
										NButton,
										{
											text: true,
											type: "primary",
											onClick: () => {
												markAsRead = true
												n.destroy()
											}
										},
										{
											default: () => "Mark as Read"
										}
									),
								onClose: () => {
									if (!markAsRead) {
										message.warning("Please mark as read")
										return false
									}
								}
							})
						}
						function notify(type: NotificationType) {
							notification[type]({
								content: "What to say?",
								meta: "I don't know",
								duration: 2500,
								keepAliveOnHover: true
							})
						}

						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpace), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Button), { onClick: handleClick1 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Wouldn&#39;t it be Nice`);
                      } else {
                        return [
                          createTextVNode("Wouldn't it be Nice")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), { onClick: handleClick2 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Satisfaction`);
                      } else {
                        return [
                          createTextVNode("Satisfaction")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), {
                    onClick: ($event) => notify("info")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Info`);
                      } else {
                        return [
                          createTextVNode("Info")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), {
                    onClick: ($event) => notify("success")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Success`);
                      } else {
                        return [
                          createTextVNode("Success")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), {
                    onClick: ($event) => notify("warning")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Warning`);
                      } else {
                        return [
                          createTextVNode("Warning")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Button), {
                    onClick: ($event) => notify("error")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Error`);
                      } else {
                        return [
                          createTextVNode("Error")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Button), { onClick: handleClick1 }, {
                      default: withCtx(() => [
                        createTextVNode("Wouldn't it be Nice")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Button), { onClick: handleClick2 }, {
                      default: withCtx(() => [
                        createTextVNode("Satisfaction")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Button), {
                      onClick: ($event) => notify("info")
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Info")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(unref(Button), {
                      onClick: ($event) => notify("success")
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Success")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(unref(Button), {
                      onClick: ($event) => notify("warning")
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Warning")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(unref(Button), {
                      onClick: ($event) => notify("error")
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Error")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NSpace), null, {
                default: withCtx(() => [
                  createVNode(unref(Button), { onClick: handleClick1 }, {
                    default: withCtx(() => [
                      createTextVNode("Wouldn't it be Nice")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), { onClick: handleClick2 }, {
                    default: withCtx(() => [
                      createTextVNode("Satisfaction")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Button), {
                    onClick: ($event) => notify("info")
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Info")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(unref(Button), {
                    onClick: ($event) => notify("success")
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Success")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(unref(Button), {
                    onClick: ($event) => notify("warning")
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Warning")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(unref(Button), {
                    onClick: ($event) => notify("error")
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Error")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Notification.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Notification-BeB_Rkl6.mjs.map
