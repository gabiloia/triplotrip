import { defineComponent, computed, ref, watch, watchEffect, resolveComponent, unref, mergeProps, withCtx, createVNode, createBlock, createCommentVNode, openBlock, createTextVNode, toDisplayString, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, ab as useThemeStore, N as NCard, ac as NSpin, al as Scrollbar, a as _sfc_main$s, aN as NTag } from './server.mjs';
import { faker } from '@faker-js/faker';
import { useWindowSize, useResizeObserver } from '@vueuse/core';
import _capitalize from 'lodash/capitalize.js';
import { N as NTimeline, a as NTimelineItem } from './TimelineItem-DmCg_9nG.mjs';
import dayjs from 'dayjs';

const DotIcon = "carbon:circle-solid";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CardExtra5",
  __ssrInlineRender: true,
  props: {
    long: { type: Boolean },
    lazy: { type: Boolean },
    hideImage: { type: Boolean },
    title: {}
  },
  setup(__props) {
    const types = ["default", "success", "error", "info", "warning"];
    const loaded = ref(false);
    const wrapperEl = ref();
    const wrapperHeight = ref(null);
    const lazyTimer = ref(0);
    const headerTitle = __props.title || faker.lorem.sentence({ min: 2, max: 5 }).replace(/\./, "");
    const text1 = faker.lorem.sentence({ min: 2, max: 5 }).replace(/\./, "");
    const text2 = faker.lorem.sentence({ min: 2, max: 5 }).replace(/\./, "");
    const text3 = faker.lorem.sentence({ min: 2, max: 5 }).replace(/\./, "");
    const text4 = faker.lorem.sentence({ min: 2, max: 5 }).replace(/\./, "");
    const text5 = faker.lorem.sentence({ min: 2, max: 5 }).replace(/\./, "");
    const text6 = faker.lorem.sentence({ min: 2, max: 5 }).replace(/\./, "");
    const date1 = dayjs().format("DD-MM-YYYY HH:mm");
    const date2 = dayjs(date1, "DD-MM-YYYY HH:mm").add(18, "hour").format("DD-MM-YYYY HH:mm");
    const date3 = dayjs(date2, "DD-MM-YYYY HH:mm").add(8, "hour").format("DD-MM-YYYY HH:mm");
    const date4 = dayjs(date3, "DD-MM-YYYY HH:mm").add(18, "hour").format("DD-MM-YYYY HH:mm");
    const longItems = ref([]);
    if (__props.long) {
      let lastDate = date3;
      for (let i = 0; i < 10; i++) {
        lastDate = dayjs(lastDate, "DD-MM-YYYY HH:mm").add(3, "m").format("DD-MM-YYYY HH:mm");
        const type = types[faker.number.int({ min: 0, max: 4 })];
        longItems.value.push({
          type,
          title: faker.datatype.boolean() ? "" : _capitalize(type).replace(/\./, ""),
          text: faker.lorem.sentence({ min: 2, max: 5 }).replace(/\./, ""),
          date: lastDate
        });
      }
    }
    function lazyRefresh() {
      wrapperHeight.value = null;
      loaded.value = false;
      if (lazyTimer.value) {
        clearTimeout(lazyTimer.value);
      }
      lazyTimer.value = setTimeout(() => {
        var _a;
        const height = (_a = wrapperEl == null ? void 0 : wrapperEl.value) == null ? void 0 : _a.offsetHeight;
        if (height) {
          wrapperHeight.value = height;
          loaded.value = true;
        }
      }, 1e3);
    }
    if (__props.lazy) {
      lazyRefresh();
      useResizeObserver(wrapperEl, () => {
        lazyRefresh();
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NCard), mergeProps({
        title: unref(headerTitle),
        "content-class": "!pr-2 !pl-3"
      }, _attrs), {
        cover: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!_ctx.hideImage) {
              _push2(`<img alt="cover" src="https://picsum.photos/seed/IqZMU/900/130" width="900" height="130" data-v-1e963bdb${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !_ctx.hideImage ? (openBlock(), createBlock("img", {
                key: 0,
                alt: "cover",
                src: "https://picsum.photos/seed/IqZMU/900/130",
                width: "900",
                height: "130"
              })) : createCommentVNode("", true)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([{ "whole-height": _ctx.lazy }, "list-wrap"])}" data-v-1e963bdb${_scopeId}>`);
            _push2(ssrRenderComponent(unref(NSpin), {
              show: !loaded.value && _ctx.lazy
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="scrollbar-wrapper" style="${ssrRenderStyle(_ctx.lazy ? { height: `${wrapperHeight.value}px` } : {})}" data-v-1e963bdb${_scopeId2}>`);
                  if (loaded.value || !_ctx.lazy) {
                    _push3(ssrRenderComponent(unref(Scrollbar), { class: "max-h-full pr-4" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(NTimeline), null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(NTimelineItem), {
                                  content: unref(text1),
                                  "line-type": "dashed"
                                }, {
                                  icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_sfc_main$s, {
                                        size: 8,
                                        name: DotIcon
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_sfc_main$s, {
                                          size: 8,
                                          name: DotIcon
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(NTimelineItem), {
                                  type: "success",
                                  content: unref(text2),
                                  time: unref(date1)
                                }, {
                                  header: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(NTag), {
                                        type: "success",
                                        size: "small"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`Success`);
                                          } else {
                                            return [
                                              createTextVNode("Success")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(unref(NTag), {
                                          type: "success",
                                          size: "small"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Success")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_sfc_main$s, {
                                        size: 8,
                                        name: DotIcon
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_sfc_main$s, {
                                          size: 8,
                                          name: DotIcon
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(NTimelineItem), {
                                  type: "error",
                                  content: unref(text3),
                                  time: unref(date2)
                                }, {
                                  icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_sfc_main$s, {
                                        size: 8,
                                        name: DotIcon
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_sfc_main$s, {
                                          size: 8,
                                          name: DotIcon
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(NTimelineItem), {
                                  type: "warning",
                                  content: unref(text4),
                                  time: unref(date3)
                                }, {
                                  header: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(NTag), {
                                        type: "warning",
                                        size: "small"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`Warning`);
                                          } else {
                                            return [
                                              createTextVNode("Warning")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(unref(NTag), {
                                          type: "warning",
                                          size: "small"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Warning")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_sfc_main$s, {
                                        size: 8,
                                        name: DotIcon
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_sfc_main$s, {
                                          size: 8,
                                          name: DotIcon
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`<!--[-->`);
                                ssrRenderList(longItems.value, (item) => {
                                  _push5(ssrRenderComponent(unref(NTimelineItem), {
                                    key: item.date,
                                    type: item.type,
                                    content: item.text,
                                    time: item.date
                                  }, {
                                    header: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        if (item.title) {
                                          _push6(ssrRenderComponent(unref(NTag), {
                                            type: item.type,
                                            size: "small"
                                          }, {
                                            default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(`${ssrInterpolate(item.title)}`);
                                              } else {
                                                return [
                                                  createTextVNode(toDisplayString(item.title), 1)
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
                                        } else {
                                          _push6(`<!---->`);
                                        }
                                      } else {
                                        return [
                                          item.title ? (openBlock(), createBlock(unref(NTag), {
                                            key: 0,
                                            type: item.type,
                                            size: "small"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.title), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["type"])) : createCommentVNode("", true)
                                        ];
                                      }
                                    }),
                                    icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_sfc_main$s, {
                                          size: 8,
                                          name: DotIcon
                                        }, null, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_sfc_main$s, {
                                            size: 8,
                                            name: DotIcon
                                          })
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                                _push5(ssrRenderComponent(unref(NTimelineItem), {
                                  type: "info",
                                  title: "Info",
                                  content: unref(text5),
                                  time: unref(date4),
                                  "line-type": "dashed"
                                }, {
                                  header: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(NTag), {
                                        type: "info",
                                        size: "small"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`Info`);
                                          } else {
                                            return [
                                              createTextVNode("Info")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(unref(NTag), {
                                          type: "info",
                                          size: "small"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Info")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_sfc_main$s, {
                                        size: 8,
                                        name: DotIcon
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_sfc_main$s, {
                                          size: 8,
                                          name: DotIcon
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(unref(NTimelineItem), { content: unref(text6) }, {
                                  icon: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_sfc_main$s, {
                                        size: 8,
                                        name: DotIcon
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_sfc_main$s, {
                                          size: 8,
                                          name: DotIcon
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(NTimelineItem), {
                                    content: unref(text1),
                                    "line-type": "dashed"
                                  }, {
                                    icon: withCtx(() => [
                                      createVNode(_sfc_main$s, {
                                        size: 8,
                                        name: DotIcon
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["content"]),
                                  createVNode(unref(NTimelineItem), {
                                    type: "success",
                                    content: unref(text2),
                                    time: unref(date1)
                                  }, {
                                    header: withCtx(() => [
                                      createVNode(unref(NTag), {
                                        type: "success",
                                        size: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Success")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    icon: withCtx(() => [
                                      createVNode(_sfc_main$s, {
                                        size: 8,
                                        name: DotIcon
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["content", "time"]),
                                  createVNode(unref(NTimelineItem), {
                                    type: "error",
                                    content: unref(text3),
                                    time: unref(date2)
                                  }, {
                                    icon: withCtx(() => [
                                      createVNode(_sfc_main$s, {
                                        size: 8,
                                        name: DotIcon
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["content", "time"]),
                                  createVNode(unref(NTimelineItem), {
                                    type: "warning",
                                    content: unref(text4),
                                    time: unref(date3)
                                  }, {
                                    header: withCtx(() => [
                                      createVNode(unref(NTag), {
                                        type: "warning",
                                        size: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Warning")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    icon: withCtx(() => [
                                      createVNode(_sfc_main$s, {
                                        size: 8,
                                        name: DotIcon
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["content", "time"]),
                                  (openBlock(true), createBlock(Fragment, null, renderList(longItems.value, (item) => {
                                    return openBlock(), createBlock(unref(NTimelineItem), {
                                      key: item.date,
                                      type: item.type,
                                      content: item.text,
                                      time: item.date
                                    }, {
                                      header: withCtx(() => [
                                        item.title ? (openBlock(), createBlock(unref(NTag), {
                                          key: 0,
                                          type: item.type,
                                          size: "small"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.title), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["type"])) : createCommentVNode("", true)
                                      ]),
                                      icon: withCtx(() => [
                                        createVNode(_sfc_main$s, {
                                          size: 8,
                                          name: DotIcon
                                        })
                                      ]),
                                      _: 2
                                    }, 1032, ["type", "content", "time"]);
                                  }), 128)),
                                  createVNode(unref(NTimelineItem), {
                                    type: "info",
                                    title: "Info",
                                    content: unref(text5),
                                    time: unref(date4),
                                    "line-type": "dashed"
                                  }, {
                                    header: withCtx(() => [
                                      createVNode(unref(NTag), {
                                        type: "info",
                                        size: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Info")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    icon: withCtx(() => [
                                      createVNode(_sfc_main$s, {
                                        size: 8,
                                        name: DotIcon
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["content", "time"]),
                                  createVNode(unref(NTimelineItem), { content: unref(text6) }, {
                                    icon: withCtx(() => [
                                      createVNode(_sfc_main$s, {
                                        size: 8,
                                        name: DotIcon
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["content"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(NTimeline), null, {
                              default: withCtx(() => [
                                createVNode(unref(NTimelineItem), {
                                  content: unref(text1),
                                  "line-type": "dashed"
                                }, {
                                  icon: withCtx(() => [
                                    createVNode(_sfc_main$s, {
                                      size: 8,
                                      name: DotIcon
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["content"]),
                                createVNode(unref(NTimelineItem), {
                                  type: "success",
                                  content: unref(text2),
                                  time: unref(date1)
                                }, {
                                  header: withCtx(() => [
                                    createVNode(unref(NTag), {
                                      type: "success",
                                      size: "small"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Success")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  icon: withCtx(() => [
                                    createVNode(_sfc_main$s, {
                                      size: 8,
                                      name: DotIcon
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["content", "time"]),
                                createVNode(unref(NTimelineItem), {
                                  type: "error",
                                  content: unref(text3),
                                  time: unref(date2)
                                }, {
                                  icon: withCtx(() => [
                                    createVNode(_sfc_main$s, {
                                      size: 8,
                                      name: DotIcon
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["content", "time"]),
                                createVNode(unref(NTimelineItem), {
                                  type: "warning",
                                  content: unref(text4),
                                  time: unref(date3)
                                }, {
                                  header: withCtx(() => [
                                    createVNode(unref(NTag), {
                                      type: "warning",
                                      size: "small"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Warning")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  icon: withCtx(() => [
                                    createVNode(_sfc_main$s, {
                                      size: 8,
                                      name: DotIcon
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["content", "time"]),
                                (openBlock(true), createBlock(Fragment, null, renderList(longItems.value, (item) => {
                                  return openBlock(), createBlock(unref(NTimelineItem), {
                                    key: item.date,
                                    type: item.type,
                                    content: item.text,
                                    time: item.date
                                  }, {
                                    header: withCtx(() => [
                                      item.title ? (openBlock(), createBlock(unref(NTag), {
                                        key: 0,
                                        type: item.type,
                                        size: "small"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.title), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["type"])) : createCommentVNode("", true)
                                    ]),
                                    icon: withCtx(() => [
                                      createVNode(_sfc_main$s, {
                                        size: 8,
                                        name: DotIcon
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["type", "content", "time"]);
                                }), 128)),
                                createVNode(unref(NTimelineItem), {
                                  type: "info",
                                  title: "Info",
                                  content: unref(text5),
                                  time: unref(date4),
                                  "line-type": "dashed"
                                }, {
                                  header: withCtx(() => [
                                    createVNode(unref(NTag), {
                                      type: "info",
                                      size: "small"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Info")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  icon: withCtx(() => [
                                    createVNode(_sfc_main$s, {
                                      size: 8,
                                      name: DotIcon
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["content", "time"]),
                                createVNode(unref(NTimelineItem), { content: unref(text6) }, {
                                  icon: withCtx(() => [
                                    createVNode(_sfc_main$s, {
                                      size: 8,
                                      name: DotIcon
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["content"])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "scrollbar-wrapper",
                      style: _ctx.lazy ? { height: `${wrapperHeight.value}px` } : {}
                    }, [
                      loaded.value || !_ctx.lazy ? (openBlock(), createBlock(unref(Scrollbar), {
                        key: 0,
                        class: "max-h-full pr-4"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(NTimeline), null, {
                            default: withCtx(() => [
                              createVNode(unref(NTimelineItem), {
                                content: unref(text1),
                                "line-type": "dashed"
                              }, {
                                icon: withCtx(() => [
                                  createVNode(_sfc_main$s, {
                                    size: 8,
                                    name: DotIcon
                                  })
                                ]),
                                _: 1
                              }, 8, ["content"]),
                              createVNode(unref(NTimelineItem), {
                                type: "success",
                                content: unref(text2),
                                time: unref(date1)
                              }, {
                                header: withCtx(() => [
                                  createVNode(unref(NTag), {
                                    type: "success",
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Success")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                icon: withCtx(() => [
                                  createVNode(_sfc_main$s, {
                                    size: 8,
                                    name: DotIcon
                                  })
                                ]),
                                _: 1
                              }, 8, ["content", "time"]),
                              createVNode(unref(NTimelineItem), {
                                type: "error",
                                content: unref(text3),
                                time: unref(date2)
                              }, {
                                icon: withCtx(() => [
                                  createVNode(_sfc_main$s, {
                                    size: 8,
                                    name: DotIcon
                                  })
                                ]),
                                _: 1
                              }, 8, ["content", "time"]),
                              createVNode(unref(NTimelineItem), {
                                type: "warning",
                                content: unref(text4),
                                time: unref(date3)
                              }, {
                                header: withCtx(() => [
                                  createVNode(unref(NTag), {
                                    type: "warning",
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Warning")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                icon: withCtx(() => [
                                  createVNode(_sfc_main$s, {
                                    size: 8,
                                    name: DotIcon
                                  })
                                ]),
                                _: 1
                              }, 8, ["content", "time"]),
                              (openBlock(true), createBlock(Fragment, null, renderList(longItems.value, (item) => {
                                return openBlock(), createBlock(unref(NTimelineItem), {
                                  key: item.date,
                                  type: item.type,
                                  content: item.text,
                                  time: item.date
                                }, {
                                  header: withCtx(() => [
                                    item.title ? (openBlock(), createBlock(unref(NTag), {
                                      key: 0,
                                      type: item.type,
                                      size: "small"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.title), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["type"])) : createCommentVNode("", true)
                                  ]),
                                  icon: withCtx(() => [
                                    createVNode(_sfc_main$s, {
                                      size: 8,
                                      name: DotIcon
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["type", "content", "time"]);
                              }), 128)),
                              createVNode(unref(NTimelineItem), {
                                type: "info",
                                title: "Info",
                                content: unref(text5),
                                time: unref(date4),
                                "line-type": "dashed"
                              }, {
                                header: withCtx(() => [
                                  createVNode(unref(NTag), {
                                    type: "info",
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Info")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                icon: withCtx(() => [
                                  createVNode(_sfc_main$s, {
                                    size: 8,
                                    name: DotIcon
                                  })
                                ]),
                                _: 1
                              }, 8, ["content", "time"]),
                              createVNode(unref(NTimelineItem), { content: unref(text6) }, {
                                icon: withCtx(() => [
                                  createVNode(_sfc_main$s, {
                                    size: 8,
                                    name: DotIcon
                                  })
                                ]),
                                _: 1
                              }, 8, ["content"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ], 4)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                ref_key: "wrapperEl",
                ref: wrapperEl,
                class: ["list-wrap", { "whole-height": _ctx.lazy }]
              }, [
                createVNode(unref(NSpin), {
                  show: !loaded.value && _ctx.lazy
                }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: "scrollbar-wrapper",
                      style: _ctx.lazy ? { height: `${wrapperHeight.value}px` } : {}
                    }, [
                      loaded.value || !_ctx.lazy ? (openBlock(), createBlock(unref(Scrollbar), {
                        key: 0,
                        class: "max-h-full pr-4"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(NTimeline), null, {
                            default: withCtx(() => [
                              createVNode(unref(NTimelineItem), {
                                content: unref(text1),
                                "line-type": "dashed"
                              }, {
                                icon: withCtx(() => [
                                  createVNode(_sfc_main$s, {
                                    size: 8,
                                    name: DotIcon
                                  })
                                ]),
                                _: 1
                              }, 8, ["content"]),
                              createVNode(unref(NTimelineItem), {
                                type: "success",
                                content: unref(text2),
                                time: unref(date1)
                              }, {
                                header: withCtx(() => [
                                  createVNode(unref(NTag), {
                                    type: "success",
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Success")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                icon: withCtx(() => [
                                  createVNode(_sfc_main$s, {
                                    size: 8,
                                    name: DotIcon
                                  })
                                ]),
                                _: 1
                              }, 8, ["content", "time"]),
                              createVNode(unref(NTimelineItem), {
                                type: "error",
                                content: unref(text3),
                                time: unref(date2)
                              }, {
                                icon: withCtx(() => [
                                  createVNode(_sfc_main$s, {
                                    size: 8,
                                    name: DotIcon
                                  })
                                ]),
                                _: 1
                              }, 8, ["content", "time"]),
                              createVNode(unref(NTimelineItem), {
                                type: "warning",
                                content: unref(text4),
                                time: unref(date3)
                              }, {
                                header: withCtx(() => [
                                  createVNode(unref(NTag), {
                                    type: "warning",
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Warning")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                icon: withCtx(() => [
                                  createVNode(_sfc_main$s, {
                                    size: 8,
                                    name: DotIcon
                                  })
                                ]),
                                _: 1
                              }, 8, ["content", "time"]),
                              (openBlock(true), createBlock(Fragment, null, renderList(longItems.value, (item) => {
                                return openBlock(), createBlock(unref(NTimelineItem), {
                                  key: item.date,
                                  type: item.type,
                                  content: item.text,
                                  time: item.date
                                }, {
                                  header: withCtx(() => [
                                    item.title ? (openBlock(), createBlock(unref(NTag), {
                                      key: 0,
                                      type: item.type,
                                      size: "small"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.title), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["type"])) : createCommentVNode("", true)
                                  ]),
                                  icon: withCtx(() => [
                                    createVNode(_sfc_main$s, {
                                      size: 8,
                                      name: DotIcon
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["type", "content", "time"]);
                              }), 128)),
                              createVNode(unref(NTimelineItem), {
                                type: "info",
                                title: "Info",
                                content: unref(text5),
                                time: unref(date4),
                                "line-type": "dashed"
                              }, {
                                header: withCtx(() => [
                                  createVNode(unref(NTag), {
                                    type: "info",
                                    size: "small"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Info")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                icon: withCtx(() => [
                                  createVNode(_sfc_main$s, {
                                    size: 8,
                                    name: DotIcon
                                  })
                                ]),
                                _: 1
                              }, 8, ["content", "time"]),
                              createVNode(unref(NTimelineItem), { content: unref(text6) }, {
                                icon: withCtx(() => [
                                  createVNode(_sfc_main$s, {
                                    size: 8,
                                    name: DotIcon
                                  })
                                ]),
                                _: 1
                              }, 8, ["content"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ], 4)
                  ]),
                  _: 1
                }, 8, ["show"])
              ], 2)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/extra/CardExtra5.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-1e963bdb"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CardExtra7",
  __ssrInlineRender: true,
  setup(__props) {
    const themeStore = useThemeStore();
    const style = computed(() => themeStore.style);
    function getOption() {
      return {
        map: "world_merc",
        showTooltip: true,
        bindTouchEvents: false,
        zoomButtons: false,
        zoomOnScroll: false,
        regionStyle: { initial: { fill: style.value["bg-body-color"] } },
        markers: [
          { name: "Japan", coords: [36.48491549755618, 138.57517718545] },
          { name: "Canada", coords: [56.1304, -106.3468] },
          {
            name: "Brazil",
            coords: [-14.235, -51.9253],
            style: { initial: { fill: style.value["extra3-color"] } }
          },
          {
            name: "Norway",
            coords: [60.472024, 8.468946],
            style: { initial: { fill: style.value["extra3-color"] } }
          }
        ],
        lines: [
          { from: "Japan", to: "Canada" },
          { from: "Brazil", to: "Norway" },
          { from: "Brazil", to: "Japan" }
        ],
        markerStyle: {
          initial: { fill: style.value["primary-color"] },
          selected: { fill: style.value["extra1-color"] }
        },
        markerLabelStyle: {
          initial: {
            fontFamily: style.value["font-family"],
            fontSize: 13,
            fill: style.value["fg-default-color"]
          }
        },
        lineStyle: {
          strokeDasharray: "6 3 6",
          animation: true
        },
        labels: {
          markers: {
            render(marker) {
              return marker.name;
            }
          }
        }
      };
    }
    const options = ref(getOption());
    const loading = ref(true);
    const card = ref(null);
    const loadingTimer = ref(null);
    const { width } = useWindowSize();
    function loaded(map) {
      useResizeObserver(card, () => {
        map.updateSize();
      });
    }
    function refresh() {
      loading.value = true;
      if (loadingTimer.value) {
        clearTimeout(loadingTimer.value);
      }
      loadingTimer.value = setTimeout(() => {
        loading.value = false;
      }, 1500);
      options.value = getOption();
    }
    function regionTooltipShow(_, tooltip) {
      tooltip.css({ backgroundColor: style.value["primary-color"] });
    }
    watch(width, () => {
      refresh();
    });
    watchEffect(() => {
      refresh();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_vuevectormap = resolveComponent("vuevectormap");
      _push(ssrRenderComponent(unref(NCard), mergeProps({
        ref_key: "card",
        ref: card,
        "content-class": "flex flex-col justify-center"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NSpin), { show: loading.value }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="mx-auto my-0 h-64 w-full overflow-hidden"${_scopeId2}>`);
                  if (!loading.value) {
                    _push3(ssrRenderComponent(_component_vuevectormap, {
                      map: "world",
                      width: "100%",
                      height: "100%",
                      options: options.value,
                      onLoaded: loaded,
                      onRegionTooltipShow: regionTooltipShow
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "mx-auto my-0 h-64 w-full overflow-hidden" }, [
                      !loading.value ? (openBlock(), createBlock(_component_vuevectormap, {
                        key: 0,
                        map: "world",
                        width: "100%",
                        height: "100%",
                        options: options.value,
                        onLoaded: loaded,
                        onRegionTooltipShow: regionTooltipShow
                      }, null, 8, ["options"])) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NSpin), { show: loading.value }, {
                default: withCtx(() => [
                  createVNode("div", { class: "mx-auto my-0 h-64 w-full overflow-hidden" }, [
                    !loading.value ? (openBlock(), createBlock(_component_vuevectormap, {
                      key: 0,
                      map: "world",
                      width: "100%",
                      height: "100%",
                      options: options.value,
                      onLoaded: loaded,
                      onRegionTooltipShow: regionTooltipShow
                    }, null, 8, ["options"])) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              }, 8, ["show"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/extra/CardExtra7.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { __nuxt_component_8 as _, _sfc_main as a };
//# sourceMappingURL=CardExtra7-j-4JqRh0.mjs.map
