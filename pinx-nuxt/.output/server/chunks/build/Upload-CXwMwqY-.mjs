import { _ as __nuxt_component_0 } from './CardCodeExample-BlIQrtYL.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _sfc_main$o, B as Button, c as NText } from './server.mjs';
import { N as NUpload, a as NUploadDragger } from './Upload-BtnKw5D8.mjs';
import { N as NP } from './p-CRyTtbND.mjs';
import './LtrContext-CRGZuMof.mjs';
import 'highlight.js/lib/core';
import 'highlight.js/lib/languages/css';
import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/scss';
import 'highlight.js/lib/languages/typescript';
import 'highlight.js/lib/languages/xml';
import './CollapseItem-BP2F26pm.mjs';
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
import './Progress-CTmj2S_J.mjs';
import './Image-CiL9m40l.mjs';
import './download-aNT-DO08.mjs';
import './Eye-DafrR3c8.mjs';
import './Add-niv5NbQA.mjs';

const ExternalIcon = "tabler:external-link";
const ArchiveIcon = "ion:archive-outline";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Upload",
  __ssrInlineRender: true,
  setup(__props) {
    const fileList = ref([
      {
        id: "a",
        name: "\u6211\u662F\u4E0A\u4F20\u51FA\u9519\u7684\u666E\u901A\u6587\u4EF6.png",
        status: "error"
      },
      {
        id: "b",
        name: "\u6211\u662F\u666E\u901A\u6587\u672C.doc",
        status: "finished",
        type: "text/plain"
      },
      {
        id: "c",
        name: "\u6211\u662F\u81EA\u5E26url\u7684\u56FE\u7247.png",
        status: "finished",
        url: "https://picsum.photos/seed/FsNXmz/460/460"
      },
      {
        id: "d",
        name: "\u6211\u662F\u4E0A\u4F20\u8FDB\u5EA699%\u7684\u6587\u672C.doc",
        status: "uploading",
        percentage: 99
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardCodeExample = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}><div class="page-header"><div class="title">Upload</div><div class="links"><a href="https://www.naiveui.com/en-US/light/components/upload" target="_blank" alt="docs" rel="nofollow noopener noreferrer">`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="components-list">`);
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Basic" }, {
        code: withCtx(({ html }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-upload
						action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
						:headers="{
							'naive-info': 'hello!'
						}"
						:data="{
							'naive-data': 'cool! naive!'
						}"
					>
						<n-button>Upload File</n-button>
					</n-upload>
					`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-upload
						action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
						:headers="{
							'naive-info': 'hello!'
						}"
						:data="{
							'naive-data': 'cool! naive!'
						}"
					>
						<n-button>Upload File</n-button>
					</n-upload>
					`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NUpload), {
              action: "https://www.mocky.io/v2/5e4bafc63100007100d8b70f",
              headers: {
                "naive-info": "hello!"
              },
              data: {
                "naive-data": "cool! naive!"
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Button), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Upload File`);
                      } else {
                        return [
                          createTextVNode("Upload File")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Button), null, {
                      default: withCtx(() => [
                        createTextVNode("Upload File")
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
              createVNode(unref(NUpload), {
                action: "https://www.mocky.io/v2/5e4bafc63100007100d8b70f",
                headers: {
                  "naive-info": "hello!"
                },
                data: {
                  "naive-data": "cool! naive!"
                }
              }, {
                default: withCtx(() => [
                  createVNode(unref(Button), null, {
                    default: withCtx(() => [
                      createTextVNode("Upload File")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Drag to upload" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` You can set `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`directory-dnd`);
                } else {
                  return [
                    createTextVNode("directory-dnd")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` to `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`true`);
                } else {
                  return [
                    createTextVNode("true")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` to make directory drag and drop available. `);
          } else {
            return [
              createTextVNode(" You can set "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("directory-dnd")
                ]),
                _: 1
              }),
              createTextVNode(" to "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("true")
                ]),
                _: 1
              }),
              createTextVNode(" to make directory drag and drop available. ")
            ];
          }
        }),
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-upload multiple directory-dnd action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f" :max="5">
						<n-upload-dragger>
							<div style="margin-bottom: 12px">
								<n-icon size="48" :depth="3">
									<archive-icon />
								</n-icon>
							</div>
							<n-text style="font-size: 16px">Click or drag a file to this area to upload</n-text>
							<n-p depth="3" style="margin: 8px 0 0 0">
								Strictly prohibit from uploading sensitive information. For example, your bank card PIN
								or your credit card expiry date.
							</n-p>
						</n-upload-dragger>
					</n-upload>
					`))} ${ssrInterpolate(js(`
						import { ArchiveOutline as ArchiveIcon } from '@vicons/ionicons5'
						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-upload multiple directory-dnd action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f" :max="5">
						<n-upload-dragger>
							<div style="margin-bottom: 12px">
								<n-icon size="48" :depth="3">
									<archive-icon />
								</n-icon>
							</div>
							<n-text style="font-size: 16px">Click or drag a file to this area to upload</n-text>
							<n-p depth="3" style="margin: 8px 0 0 0">
								Strictly prohibit from uploading sensitive information. For example, your bank card PIN
								or your credit card expiry date.
							</n-p>
						</n-upload-dragger>
					</n-upload>
					`)) + " " + toDisplayString(js(`
						import { ArchiveOutline as ArchiveIcon } from '@vicons/ionicons5'
						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NUpload), {
              multiple: "",
              "directory-dnd": "",
              action: "https://www.mocky.io/v2/5e4bafc63100007100d8b70f",
              max: 5
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NUploadDragger), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div style="${ssrRenderStyle({ "margin-bottom": "12px" })}"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_sfc_main$o, {
                          name: ArchiveIcon,
                          size: 48,
                          depth: 3
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(unref(NText), { style: { "font-size": "16px" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Click or drag a file to this area to upload`);
                            } else {
                              return [
                                createTextVNode("Click or drag a file to this area to upload")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(NP), {
                          depth: "3",
                          style: { "margin": "8px 0 0 0" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Strictly prohibit from uploading sensitive information. For example, your bank card PIN or your credit card expiry date. `);
                            } else {
                              return [
                                createTextVNode(" Strictly prohibit from uploading sensitive information. For example, your bank card PIN or your credit card expiry date. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { style: { "margin-bottom": "12px" } }, [
                            createVNode(_sfc_main$o, {
                              name: ArchiveIcon,
                              size: 48,
                              depth: 3
                            })
                          ]),
                          createVNode(unref(NText), { style: { "font-size": "16px" } }, {
                            default: withCtx(() => [
                              createTextVNode("Click or drag a file to this area to upload")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NP), {
                            depth: "3",
                            style: { "margin": "8px 0 0 0" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Strictly prohibit from uploading sensitive information. For example, your bank card PIN or your credit card expiry date. ")
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
                    createVNode(unref(NUploadDragger), null, {
                      default: withCtx(() => [
                        createVNode("div", { style: { "margin-bottom": "12px" } }, [
                          createVNode(_sfc_main$o, {
                            name: ArchiveIcon,
                            size: 48,
                            depth: 3
                          })
                        ]),
                        createVNode(unref(NText), { style: { "font-size": "16px" } }, {
                          default: withCtx(() => [
                            createTextVNode("Click or drag a file to this area to upload")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NP), {
                          depth: "3",
                          style: { "margin": "8px 0 0 0" }
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Strictly prohibit from uploading sensitive information. For example, your bank card PIN or your credit card expiry date. ")
                          ]),
                          _: 1
                        })
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
              createVNode(unref(NUpload), {
                multiple: "",
                "directory-dnd": "",
                action: "https://www.mocky.io/v2/5e4bafc63100007100d8b70f",
                max: 5
              }, {
                default: withCtx(() => [
                  createVNode(unref(NUploadDragger), null, {
                    default: withCtx(() => [
                      createVNode("div", { style: { "margin-bottom": "12px" } }, [
                        createVNode(_sfc_main$o, {
                          name: ArchiveIcon,
                          size: 48,
                          depth: 3
                        })
                      ]),
                      createVNode(unref(NText), { style: { "font-size": "16px" } }, {
                        default: withCtx(() => [
                          createTextVNode("Click or drag a file to this area to upload")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NP), {
                        depth: "3",
                        style: { "margin": "8px 0 0 0" }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Strictly prohibit from uploading sensitive information. For example, your bank card PIN or your credit card expiry date. ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CardCodeExample, { title: "Pictures wall" }, {
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` By default, this will use Naive UI&#39;s internal preview component. You can also use `);
            _push2(ssrRenderComponent(unref(NText), { code: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`on-preview`);
                } else {
                  return [
                    createTextVNode("on-preview")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` to customize what to do when previewing a file. `);
          } else {
            return [
              createTextVNode(" By default, this will use Naive UI's internal preview component. You can also use "),
              createVNode(unref(NText), { code: "" }, {
                default: withCtx(() => [
                  createTextVNode("on-preview")
                ]),
                _: 1
              }),
              createTextVNode(" to customize what to do when previewing a file. ")
            ];
          }
        }),
        code: withCtx(({ html, js }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(html(`
					<n-upload
						action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
						:default-file-list="fileList"
						list-type="image-card"
					>
						Click to Upload
					</n-upload>

					`))} ${ssrInterpolate(js(`
						const fileList = ref<UploadFileInfo[]>([
							{
								id: "a",
								name: "\u6211\u662F\u4E0A\u4F20\u51FA\u9519\u7684\u666E\u901A\u6587\u4EF6.png",
								status: "error"
							},
							{
								id: "b",
								name: "\u6211\u662F\u666E\u901A\u6587\u672C.doc",
								status: "finished",
								type: "text/plain"
							},
							{
								id: "c",
								name: "\u6211\u662F\u81EA\u5E26url\u7684\u56FE\u7247.png",
								status: "finished",
								url: "https://picsum.photos/seed/FsNXmz/460/460"
							},
							{
								id: "d",
								name: "\u6211\u662F\u4E0A\u4F20\u8FDB\u5EA699%\u7684\u6587\u672C.doc",
								status: "uploading",
								percentage: 99
							}
						])

						`))}`);
          } else {
            return [
              createTextVNode(toDisplayString(html(`
					<n-upload
						action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
						:default-file-list="fileList"
						list-type="image-card"
					>
						Click to Upload
					</n-upload>

					`)) + " " + toDisplayString(js(`
						const fileList = ref<UploadFileInfo[]>([
							{
								id: "a",
								name: "\u6211\u662F\u4E0A\u4F20\u51FA\u9519\u7684\u666E\u901A\u6587\u4EF6.png",
								status: "error"
							},
							{
								id: "b",
								name: "\u6211\u662F\u666E\u901A\u6587\u672C.doc",
								status: "finished",
								type: "text/plain"
							},
							{
								id: "c",
								name: "\u6211\u662F\u81EA\u5E26url\u7684\u56FE\u7247.png",
								status: "finished",
								url: "https://picsum.photos/seed/FsNXmz/460/460"
							},
							{
								id: "d",
								name: "\u6211\u662F\u4E0A\u4F20\u8FDB\u5EA699%\u7684\u6587\u672C.doc",
								status: "uploading",
								percentage: 99
							}
						])

						`)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NUpload), {
              action: "https://www.mocky.io/v2/5e4bafc63100007100d8b70f",
              "default-file-list": fileList.value,
              "list-type": "image-card"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Click to Upload `);
                } else {
                  return [
                    createTextVNode(" Click to Upload ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NUpload), {
                action: "https://www.mocky.io/v2/5e4bafc63100007100d8b70f",
                "default-file-list": fileList.value,
                "list-type": "image-card"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Click to Upload ")
                ]),
                _: 1
              }, 8, ["default-file-list"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Components/Upload.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Upload-CXwMwqY-.mjs.map
