import { defineComponent, ref, mergeProps, unref, useModel, watch, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, createCommentVNode, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { a as _export_sfc, _ as _sfc_main$o, af as Scrollbar } from './server.mjs';
import Highlight from '@tiptap/extension-highlight';
import Link$1 from '@tiptap/extension-link';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import TextAlign from '@tiptap/extension-text-align';
import Underline$1 from '@tiptap/extension-underline';
import StarterKit from '@tiptap/starter-kit';
import { useEditor, EditorContent } from '@tiptap/vue-3';
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
import 'vooks';
import '@vueuse/core';
import 'lodash/set.js';
import 'seemly';
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

const Bold = "fluent:text-bold-16-regular";
const Italic = "fluent:text-italic-16-filled";
const Strikethrough = "fluent:text-strikethrough-16-filled";
const Underline = "fluent:text-underline-16-filled";
const CodeView = "tabler:code";
const MarkPen = "fluent:highlight-24-regular";
const H1 = "fluent:text-header-1-24-filled";
const H2 = "fluent:text-header-2-24-filled";
const Paragraph = "carbon:paragraph";
const ListUnordered = "fluent:apps-list-24-regular";
const ListOrdered = "fluent:text-number-list-ltr-24-regular";
const ListCheck = "fluent:task-list-ltr-24-regular";
const CodeBox = "tabler:file-code";
const DoubleQuotes = "fluent:text-quote-24-regular";
const Separator = "tabler:separator";
const TextWrap = "fluent:text-wrap-24-regular";
const FormatClear = "tabler:clear-formatting";
const ArrowBack = "fluent:arrow-hook-up-left-24-regular";
const ArrowForward = "fluent:arrow-hook-up-right-24-regular";
const TextLeft = "fluent:text-align-left-24-regular";
const TextCenter = "fluent:text-align-center-24-regular";
const TextRight = "fluent:text-align-right-24-regular";
const TextJustify = "fluent:text-align-justify-24-regular";
const Link = "fluent:link-24-regular";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "MenuItem",
  __ssrInlineRender: true,
  props: {
    type: {},
    icon: {},
    title: {},
    action: { type: Function },
    isActive: { type: Function }
  },
  setup(__props) {
    const icons = {
      bold: Bold,
      italic: Italic,
      strikethrough: Strikethrough,
      underline: Underline,
      "code-view": CodeView,
      "mark-pen-line": MarkPen,
      "h-1": H1,
      "h-2": H2,
      paragraph: Paragraph,
      "list-unordered": ListUnordered,
      "list-ordered": ListOrdered,
      "list-check": ListCheck,
      "code-box-line": CodeBox,
      "double-quotes": DoubleQuotes,
      separator: Separator,
      "text-wrap": TextWrap,
      "format-clear": FormatClear,
      "arrow-go-back-line": ArrowBack,
      "arrow-go-forward-line": ArrowForward,
      "text-align-left": TextLeft,
      "text-align-center": TextCenter,
      "text-align-right": TextRight,
      "text-align-justify": TextJustify,
      link: Link
    };
    const iconComponent = computed(() => icons[__props.icon]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: ["menu-item", { "is-active": _ctx.isActive ? _ctx.isActive() : null }],
        title: _ctx.title
      }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$o, {
        size: 22,
        name: iconComponent.value
      }, null, _parent));
      _push(`</button>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/editors/Tiptap/MenuItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "MenuBar",
  __ssrInlineRender: true,
  props: {
    editor: {}
  },
  setup(__props) {
    const items = [
      {
        icon: "bold",
        title: "Bold",
        action: () => __props.editor.chain().focus().toggleBold().run(),
        isActive: () => __props.editor.isActive("bold")
      },
      {
        icon: "italic",
        title: "Italic",
        action: () => __props.editor.chain().focus().toggleItalic().run(),
        isActive: () => __props.editor.isActive("italic")
      },
      {
        icon: "underline",
        title: "Underline",
        action: () => __props.editor.chain().focus().toggleUnderline().run(),
        isActive: () => __props.editor.isActive("underline")
      },
      {
        icon: "strikethrough",
        title: "Strike",
        action: () => __props.editor.chain().focus().toggleStrike().run(),
        isActive: () => __props.editor.isActive("strike")
      },
      {
        icon: "code-view",
        title: "Code",
        action: () => __props.editor.chain().focus().toggleCode().run(),
        isActive: () => __props.editor.isActive("code")
      },
      {
        icon: "mark-pen-line",
        title: "Highlight",
        action: () => __props.editor.chain().focus().toggleHighlight().run(),
        isActive: () => __props.editor.isActive("highlight")
      },
      {
        type: "divider",
        icon: ""
      },
      {
        icon: "h-1",
        title: "Heading 1",
        action: () => __props.editor.chain().focus().toggleHeading({ level: 1 }).run(),
        isActive: () => __props.editor.isActive("heading", { level: 1 })
      },
      {
        icon: "h-2",
        title: "Heading 2",
        action: () => __props.editor.chain().focus().toggleHeading({ level: 2 }).run(),
        isActive: () => __props.editor.isActive("heading", { level: 2 })
      },
      {
        icon: "paragraph",
        title: "Paragraph",
        action: () => __props.editor.chain().focus().setParagraph().run(),
        isActive: () => __props.editor.isActive("paragraph")
      },
      {
        icon: "list-unordered",
        title: "Bullet List",
        action: () => __props.editor.chain().focus().toggleBulletList().run(),
        isActive: () => __props.editor.isActive("bulletList")
      },
      {
        icon: "list-ordered",
        title: "Ordered List",
        action: () => __props.editor.chain().focus().toggleOrderedList().run(),
        isActive: () => __props.editor.isActive("orderedList")
      },
      {
        icon: "list-check",
        title: "Task List",
        action: () => __props.editor.chain().focus().toggleTaskList().run(),
        isActive: () => __props.editor.isActive("taskList")
      },
      {
        icon: "code-box-line",
        title: "Code Block",
        action: () => __props.editor.chain().focus().toggleCodeBlock().run(),
        isActive: () => __props.editor.isActive("codeBlock")
      },
      {
        type: "divider",
        icon: ""
      },
      {
        icon: "text-align-left",
        title: "Text align left",
        action: () => __props.editor.chain().focus().setTextAlign("left").run(),
        isActive: () => __props.editor.isActive({ textAlign: "left" })
      },
      {
        icon: "text-align-center",
        title: "Text align center",
        action: () => __props.editor.chain().focus().setTextAlign("center").run(),
        isActive: () => __props.editor.isActive({ textAlign: "center" })
      },
      {
        icon: "text-align-right",
        title: "Text align right",
        action: () => __props.editor.chain().focus().setTextAlign("right").run(),
        isActive: () => __props.editor.isActive({ textAlign: "right" })
      },
      {
        icon: "text-align-justify",
        title: "Text align justify",
        action: () => __props.editor.chain().focus().setTextAlign("justify").run(),
        isActive: () => __props.editor.isActive({ textAlign: "justify" })
      },
      {
        type: "divider",
        icon: ""
      },
      {
        icon: "link",
        title: "Link",
        action: setLink,
        isActive: () => __props.editor.isActive("link")
      },
      {
        icon: "double-quotes",
        title: "Blockquote",
        action: () => __props.editor.chain().focus().toggleBlockquote().run(),
        isActive: () => __props.editor.isActive("blockquote")
      },
      {
        icon: "separator",
        title: "Horizontal Rule",
        action: () => __props.editor.chain().focus().setHorizontalRule().run()
      },
      {
        type: "divider",
        icon: ""
      },
      {
        icon: "text-wrap",
        title: "Hard Break",
        action: () => __props.editor.chain().focus().setHardBreak().run()
      },
      {
        icon: "format-clear",
        title: "Clear Format",
        action: () => __props.editor.chain().focus().clearNodes().unsetAllMarks().run()
      },
      {
        type: "divider",
        icon: ""
      },
      {
        icon: "arrow-go-back-line",
        title: "Undo",
        action: () => __props.editor.chain().focus().undo().run()
      },
      {
        icon: "arrow-go-forward-line",
        title: "Redo",
        action: () => __props.editor.chain().focus().redo().run()
      }
    ];
    function setLink() {
      if (__props.editor.isActive("link")) {
        __props.editor.chain().focus().extendMarkRange("link").unsetLink().run();
        return;
      }
      const previousUrl = __props.editor.getAttributes("link").href;
      const url = (void 0).prompt("URL", previousUrl);
      if (url === null) {
        return;
      }
      if (url === "") {
        __props.editor.chain().focus().extendMarkRange("link").unsetLink().run();
        return;
      }
      __props.editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "menu-bar" }, _attrs))} data-v-426d6b65>`);
      _push(ssrRenderComponent(unref(Scrollbar), { "x-scrollable": "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="menu-bar-scroll" data-v-426d6b65${_scopeId}><!--[-->`);
            ssrRenderList(items, (item, index) => {
              _push2(`<!--[-->`);
              if (item.type === "divider") {
                _push2(`<div class="divider" data-v-426d6b65${_scopeId}></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (!item.type) {
                _push2(ssrRenderComponent(_sfc_main$3, mergeProps({ key: index }, { ref_for: true }, item), null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "menu-bar-scroll" }, [
                (openBlock(), createBlock(Fragment, null, renderList(items, (item, index) => {
                  return openBlock(), createBlock(Fragment, null, [
                    item.type === "divider" ? (openBlock(), createBlock("div", {
                      key: `divider${index}`,
                      class: "divider"
                    })) : createCommentVNode("", true),
                    !item.type ? (openBlock(), createBlock(_sfc_main$3, mergeProps({ key: index }, { ref_for: true }, item), null, 16)) : createCommentVNode("", true)
                  ], 64);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/editors/Tiptap/MenuBar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const MenuBar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-426d6b65"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Tiptap",
  __ssrInlineRender: true,
  props: {
    "modelValue": { default: "" },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const text = useModel(__props, "modelValue");
    const editor = useEditor({
      content: text.value,
      extensions: [
        StarterKit.configure({}),
        Highlight,
        TaskList,
        TaskItem,
        Underline$1,
        Link$1.configure({ openOnClick: false }),
        TextAlign.configure({
          types: ["heading", "paragraph"]
        })
      ],
      onUpdate: () => {
        var _a;
        text.value = ((_a = editor.value) == null ? void 0 : _a.getHTML()) || "";
      },
      onBlur() {
        (void 0).scrollTo(0, 0);
      }
    });
    watch(text, (val) => {
      var _a, _b;
      const isSame = ((_a = editor.value) == null ? void 0 : _a.getHTML()) === val;
      if (isSame) {
        return;
      }
      (_b = editor.value) == null ? void 0 : _b.commands.setContent(val, false);
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(editor)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "editor" }, _attrs))} data-v-be77866a>`);
        _push(ssrRenderComponent(MenuBar, {
          class: "editor__header",
          editor: unref(editor)
        }, null, _parent));
        _push(ssrRenderComponent(unref(Scrollbar), { trigger: "none" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(EditorContent), {
                class: "editor__content",
                editor: unref(editor)
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(EditorContent), {
                  class: "editor__content",
                  editor: unref(editor)
                }, null, 8, ["editor"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/editors/Tiptap/Tiptap.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Tiptap$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-be77866a"]]);
const ExternalIcon = "tabler:external-link";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Tiptap",
  __ssrInlineRender: true,
  setup(__props) {
    const text = ref("<p>I\u2019m running Tiptap with Vue.js. \u{1F389}</p>");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page page-wrapped flex flex-col" }, _attrs))} data-v-edcd0b2b><div class="page-header" data-v-edcd0b2b><div class="title" data-v-edcd0b2b>Tiptap</div><div class="links" data-v-edcd0b2b><a href="https://tiptap.dev/installation/vue3" target="_blank" alt="docs" rel="nofollow noopener noreferrer" data-v-edcd0b2b>`);
      _push(ssrRenderComponent(_sfc_main$o, {
        name: ExternalIcon,
        size: 16
      }, null, _parent));
      _push(` docs </a></div></div><div class="editor-wrap grow overflow-hidden" data-v-edcd0b2b>`);
      _push(ssrRenderComponent(unref(Tiptap$1), {
        modelValue: text.value,
        "onUpdate:modelValue": ($event) => text.value = $event,
        class: "h-full"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Editors/Tiptap.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Tiptap = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-edcd0b2b"]]);

export { Tiptap as default };
//# sourceMappingURL=Tiptap-mREO505w.mjs.map
