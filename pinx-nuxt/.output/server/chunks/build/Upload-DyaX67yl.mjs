import { createId } from 'seemly';
import { useMergedState, useMemo } from 'vooks';
import { defineComponent, h, Fragment, Teleport, ref, toRef, computed, provide, inject, watchEffect, nextTick } from 'vue';
import { t as throwError, v as useConfig, x as useTheme, M as uploadLight, m as c$1, L as useFormItem, z as useThemeClass, h as createInjectionKey, K as resolveSlot, i as NBaseIcon, k as cB, l as cM, E as fadeInHeightExpandTransition, n as cE, F as iconSwitchTransition, G as NFadeInExpandTransition, C as call, D as replaceable, B as Button, I as NIconSwitchTransition, J as warn, H as error } from './server.mjs';
import { N as NProgress } from './Progress-jZ7DMXne.mjs';
import { N as NImageGroup, a as NImage, D as DownloadIcon } from './Image-BM4Ny04G.mjs';
import { E as EyeIcon } from './Eye-DafrR3c8.mjs';
import { d as download } from './download-aNT-DO08.mjs';
import { A as AddIcon } from './Add-niv5NbQA.mjs';

const AttachIcon = replaceable("attach", () => h("svg", {
  viewBox: "0 0 16 16",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, h("g", {
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
}, h("g", {
  fill: "currentColor",
  "fill-rule": "nonzero"
}, h("path", {
  d: "M3.25735931,8.70710678 L7.85355339,4.1109127 C8.82986412,3.13460197 10.4127766,3.13460197 11.3890873,4.1109127 C12.365398,5.08722343 12.365398,6.67013588 11.3890873,7.64644661 L6.08578644,12.9497475 C5.69526215,13.3402718 5.06209717,13.3402718 4.67157288,12.9497475 C4.28104858,12.5592232 4.28104858,11.9260582 4.67157288,11.5355339 L9.97487373,6.23223305 C10.1701359,6.0369709 10.1701359,5.72038841 9.97487373,5.52512627 C9.77961159,5.32986412 9.4630291,5.32986412 9.26776695,5.52512627 L3.96446609,10.8284271 C3.18341751,11.6094757 3.18341751,12.8758057 3.96446609,13.6568542 C4.74551468,14.4379028 6.01184464,14.4379028 6.79289322,13.6568542 L12.0961941,8.35355339 C13.4630291,6.98671837 13.4630291,4.77064094 12.0961941,3.40380592 C10.7293591,2.0369709 8.51328163,2.0369709 7.14644661,3.40380592 L2.55025253,8 C2.35499039,8.19526215 2.35499039,8.51184464 2.55025253,8.70710678 C2.74551468,8.90236893 3.06209717,8.90236893 3.25735931,8.70710678 Z"
})))));
const CancelIcon = replaceable("cancel", () => h("svg", {
  viewBox: "0 0 16 16",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, h("g", {
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
}, h("g", {
  fill: "currentColor",
  "fill-rule": "nonzero"
}, h("path", {
  d: "M2.58859116,2.7156945 L2.64644661,2.64644661 C2.82001296,2.47288026 3.08943736,2.45359511 3.2843055,2.58859116 L3.35355339,2.64644661 L8,7.293 L12.6464466,2.64644661 C12.8417088,2.45118446 13.1582912,2.45118446 13.3535534,2.64644661 C13.5488155,2.84170876 13.5488155,3.15829124 13.3535534,3.35355339 L8.707,8 L13.3535534,12.6464466 C13.5271197,12.820013 13.5464049,13.0894374 13.4114088,13.2843055 L13.3535534,13.3535534 C13.179987,13.5271197 12.9105626,13.5464049 12.7156945,13.4114088 L12.6464466,13.3535534 L8,8.707 L3.35355339,13.3535534 C3.15829124,13.5488155 2.84170876,13.5488155 2.64644661,13.3535534 C2.45118446,13.1582912 2.45118446,12.8417088 2.64644661,12.6464466 L7.293,8 L2.64644661,3.35355339 C2.47288026,3.17998704 2.45359511,2.91056264 2.58859116,2.7156945 L2.64644661,2.64644661 L2.58859116,2.7156945 Z"
})))));
const RetryIcon = replaceable("retry", () => h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, h("path", {
  d: "M320,146s24.36-12-64-12A160,160,0,1,0,416,294",
  style: "fill: none; stroke: currentcolor; stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 32px;"
}), h("polyline", {
  points: "256 58 336 138 256 218",
  style: "fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"
})));
const TrashIcon = replaceable("trash", () => h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, h("path", {
  d: "M432,144,403.33,419.74A32,32,0,0,1,371.55,448H140.46a32,32,0,0,1-31.78-28.26L80,144",
  style: "fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"
}), h("rect", {
  x: "32",
  y: "64",
  width: "448",
  height: "80",
  rx: "16",
  ry: "16",
  style: "fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"
}), h("line", {
  x1: "312",
  y1: "240",
  x2: "200",
  y2: "352",
  style: "fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"
}), h("line", {
  x1: "312",
  y1: "352",
  x2: "200",
  y2: "240",
  style: "fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"
})));
const uploadInjectionKey = createInjectionKey("n-upload");
const style = c$1([cB("upload", "width: 100%;", [cM("dragger-inside", [cB("upload-trigger", `
 display: block;
 `)]), cM("drag-over", [cB("upload-dragger", `
 border: var(--n-dragger-border-hover);
 `)])]), cB("upload-dragger", `
 cursor: pointer;
 box-sizing: border-box;
 width: 100%;
 text-align: center;
 border-radius: var(--n-border-radius);
 padding: 24px;
 opacity: 1;
 transition:
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-dragger-color);
 border: var(--n-dragger-border);
 `, [c$1("&:hover", `
 border: var(--n-dragger-border-hover);
 `), cM("disabled", `
 cursor: not-allowed;
 `)]), cB("upload-trigger", `
 display: inline-block;
 box-sizing: border-box;
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 `, [c$1("+", [cB("upload-file-list", "margin-top: 8px;")]), cM("disabled", `
 opacity: var(--n-item-disabled-opacity);
 cursor: not-allowed;
 `), cM("image-card", `
 width: 96px;
 height: 96px;
 `, [cB("base-icon", `
 font-size: 24px;
 `), cB("upload-dragger", `
 padding: 0;
 height: 100%;
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `)])]), cB("upload-file-list", `
 line-height: var(--n-line-height);
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 `, [c$1("a, img", "outline: none;"), cM("disabled", `
 opacity: var(--n-item-disabled-opacity);
 cursor: not-allowed;
 `, [cB("upload-file", "cursor: not-allowed;")]), cM("grid", `
 display: grid;
 grid-template-columns: repeat(auto-fill, 96px);
 grid-gap: 8px;
 margin-top: 0;
 `), cB("upload-file", `
 display: block;
 box-sizing: border-box;
 cursor: default;
 padding: 0px 12px 0 6px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `, [fadeInHeightExpandTransition(), cB("progress", [fadeInHeightExpandTransition({
  foldPadding: true
})]), c$1("&:hover", `
 background-color: var(--n-item-color-hover);
 `, [cB("upload-file-info", [cE("action", `
 opacity: 1;
 `)])]), cM("image-type", `
 border-radius: var(--n-border-radius);
 text-decoration: underline;
 text-decoration-color: #0000;
 `, [cB("upload-file-info", `
 padding-top: 0px;
 padding-bottom: 0px;
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 6px 0;
 `, [cB("progress", `
 padding: 2px 0;
 margin-bottom: 0;
 `), cE("name", `
 padding: 0 8px;
 `), cE("thumbnail", `
 width: 32px;
 height: 32px;
 font-size: 28px;
 display: flex;
 justify-content: center;
 align-items: center;
 `, [c$1("img", `
 width: 100%;
 `)])])]), cM("text-type", [cB("progress", `
 box-sizing: border-box;
 padding-bottom: 6px;
 margin-bottom: 6px;
 `)]), cM("image-card-type", `
 position: relative;
 width: 96px;
 height: 96px;
 border: var(--n-item-border-image-card);
 border-radius: var(--n-border-radius);
 padding: 0;
 display: flex;
 align-items: center;
 justify-content: center;
 transition: border-color .3s var(--n-bezier), background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 overflow: hidden;
 `, [cB("progress", `
 position: absolute;
 left: 8px;
 bottom: 8px;
 right: 8px;
 width: unset;
 `), cB("upload-file-info", `
 padding: 0;
 width: 100%;
 height: 100%;
 `, [cE("thumbnail", `
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 font-size: 36px;
 `, [c$1("img", `
 width: 100%;
 `)])]), c$1("&::before", `
 position: absolute;
 z-index: 1;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 opacity: 0;
 transition: opacity .2s var(--n-bezier);
 content: "";
 `), c$1("&:hover", [c$1("&::before", "opacity: 1;"), cB("upload-file-info", [cE("thumbnail", "opacity: .12;")])])]), cM("error-status", [c$1("&:hover", `
 background-color: var(--n-item-color-hover-error);
 `), cB("upload-file-info", [cE("name", "color: var(--n-item-text-color-error);"), cE("thumbnail", "color: var(--n-item-text-color-error);")]), cM("image-card-type", `
 border: var(--n-item-border-image-card-error);
 `)]), cM("with-url", `
 cursor: pointer;
 `, [cB("upload-file-info", [cE("name", `
 color: var(--n-item-text-color-success);
 text-decoration-color: var(--n-item-text-color-success);
 `, [c$1("a", `
 text-decoration: underline;
 `)])])]), cB("upload-file-info", `
 position: relative;
 padding-top: 6px;
 padding-bottom: 6px;
 display: flex;
 flex-wrap: nowrap;
 `, [cE("thumbnail", `
 font-size: 18px;
 opacity: 1;
 transition: opacity .2s var(--n-bezier);
 color: var(--n-item-icon-color);
 `, [cB("base-icon", `
 margin-right: 2px;
 vertical-align: middle;
 transition: color .3s var(--n-bezier);
 `)]), cE("action", `
 padding-top: inherit;
 padding-bottom: inherit;
 position: absolute;
 right: 0;
 top: 0;
 bottom: 0;
 width: 80px;
 display: flex;
 align-items: center;
 transition: opacity .2s var(--n-bezier);
 justify-content: flex-end;
 opacity: 0;
 `, [cB("button", [c$1("&:not(:last-child)", {
  marginRight: "4px"
}), cB("base-icon", [c$1("svg", [iconSwitchTransition()])])]), cM("image-type", `
 position: relative;
 max-width: 80px;
 width: auto;
 `), cM("image-card-type", `
 z-index: 2;
 position: absolute;
 width: 100%;
 height: 100%;
 left: 0;
 right: 0;
 bottom: 0;
 top: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 `)]), cE("name", `
 color: var(--n-item-text-color);
 flex: 1;
 display: flex;
 justify-content: center;
 text-overflow: ellipsis;
 overflow: hidden;
 flex-direction: column;
 text-decoration-color: #0000;
 font-size: var(--n-font-size);
 transition:
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier); 
 `, [c$1("a", `
 color: inherit;
 text-decoration: underline;
 `)])])])]), cB("upload-file-input", `
 display: none;
 width: 0;
 height: 0;
 opacity: 0;
 `)]);
const uploadDraggerKey = "__UPLOAD_DRAGGER__";
const NUploadDragger = defineComponent({
  name: "UploadDragger",
  [uploadDraggerKey]: true,
  setup(_, {
    slots
  }) {
    const NUpload2 = inject(uploadInjectionKey, null);
    if (!NUpload2) {
      throwError("upload-dragger", "`n-upload-dragger` must be placed inside `n-upload`.");
    }
    return () => {
      const {
        mergedClsPrefixRef: {
          value: mergedClsPrefix
        },
        mergedDisabledRef: {
          value: mergedDisabled
        },
        maxReachedRef: {
          value: maxReached
        }
      } = NUpload2;
      return h("div", {
        class: [`${mergedClsPrefix}-upload-dragger`, (mergedDisabled || maxReached) && `${mergedClsPrefix}-upload-dragger--disabled`]
      }, slots);
    };
  }
});
const renderImageIcon = h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 28 28"
}, h("g", {
  fill: "none"
}, h("path", {
  d: "M21.75 3A3.25 3.25 0 0 1 25 6.25v15.5A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75V6.25A3.25 3.25 0 0 1 6.25 3h15.5zm.583 20.4l-7.807-7.68a.75.75 0 0 0-.968-.07l-.084.07l-7.808 7.68c.183.065.38.1.584.1h15.5c.204 0 .4-.035.583-.1l-7.807-7.68l7.807 7.68zM21.75 4.5H6.25A1.75 1.75 0 0 0 4.5 6.25v15.5c0 .208.036.408.103.593l7.82-7.692a2.25 2.25 0 0 1 3.026-.117l.129.117l7.82 7.692c.066-.185.102-.385.102-.593V6.25a1.75 1.75 0 0 0-1.75-1.75zm-3.25 3a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5zm0 1.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2z",
  fill: "currentColor"
})));
const renderDocumentIcon = h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 28 28"
}, h("g", {
  fill: "none"
}, h("path", {
  d: "M6.4 2A2.4 2.4 0 0 0 4 4.4v19.2A2.4 2.4 0 0 0 6.4 26h15.2a2.4 2.4 0 0 0 2.4-2.4V11.578c0-.729-.29-1.428-.805-1.944l-6.931-6.931A2.4 2.4 0 0 0 14.567 2H6.4zm-.9 2.4a.9.9 0 0 1 .9-.9H14V10a2 2 0 0 0 2 2h6.5v11.6a.9.9 0 0 1-.9.9H6.4a.9.9 0 0 1-.9-.9V4.4zm16.44 6.1H16a.5.5 0 0 1-.5-.5V4.06l6.44 6.44z",
  fill: "currentColor"
})));
const NUploadProgress = defineComponent({
  name: "UploadProgress",
  props: {
    show: Boolean,
    percentage: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      required: true
    }
  },
  setup() {
    const NUpload2 = inject(uploadInjectionKey);
    return {
      mergedTheme: NUpload2.mergedThemeRef
    };
  },
  render() {
    return h(NFadeInExpandTransition, null, {
      default: () => this.show ? h(NProgress, {
        type: "line",
        showIndicator: false,
        percentage: this.percentage,
        status: this.status,
        height: 2,
        theme: this.mergedTheme.peers.Progress,
        themeOverrides: this.mergedTheme.peerOverrides.Progress
      }) : null
    });
  }
});
var __awaiter$2 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
function isImageFileType(type) {
  return type.includes("image/");
}
function getExtname(url = "") {
  const temp = url.split("/");
  const filename = temp[temp.length - 1];
  const filenameWithoutSuffix = filename.split(/#|\?/)[0];
  return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [""])[0];
}
const imageExtensionRegex = /(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico)$/i;
const isImageFile = (file) => {
  if (file.type) {
    return isImageFileType(file.type);
  }
  const fileNameExtension = getExtname(file.name || "");
  if (imageExtensionRegex.test(fileNameExtension)) {
    return true;
  }
  const url = file.thumbnailUrl || file.url || "";
  const urlExtension = getExtname(url);
  if (/^data:image\//.test(url) || imageExtensionRegex.test(urlExtension)) {
    return true;
  }
  return false;
};
function createImageDataUrl(file) {
  return __awaiter$2(this, void 0, void 0, function* () {
    return yield new Promise((resolve) => {
      if (!file.type || !isImageFileType(file.type)) {
        resolve("");
        return;
      }
      resolve((void 0).URL.createObjectURL(file));
    });
  });
}
function isFileSystemDirectoryEntry(item) {
  return item.isDirectory;
}
function isFileSystemFileEntry(item) {
  return item.isFile;
}
function getFilesFromEntries(entries, directory) {
  return __awaiter$2(this, void 0, void 0, function* () {
    const fileAndEntries = [];
    function _getFilesFromEntries(entries2) {
      return __awaiter$2(this, void 0, void 0, function* () {
        for (const entry of entries2) {
          if (!entry) continue;
          if (directory && isFileSystemDirectoryEntry(entry)) {
            const directoryReader = entry.createReader();
            let allEntries = [];
            let readEntries;
            try {
              do {
                readEntries = yield new Promise((resolve, reject) => {
                  directoryReader.readEntries(resolve, reject);
                });
                allEntries = allEntries.concat(readEntries);
              } while (readEntries.length > 0);
            } catch (e) {
              error("upload", "error happens when handling directory upload", e);
            }
            yield _getFilesFromEntries(allEntries);
          } else if (isFileSystemFileEntry(entry)) {
            try {
              const file = yield new Promise((resolve, reject) => {
                entry.file(resolve, reject);
              });
              fileAndEntries.push({
                file,
                entry,
                source: "dnd"
              });
            } catch (e) {
              error("upload", "error happens when handling file upload", e);
            }
          }
        }
      });
    }
    yield _getFilesFromEntries(entries);
    return fileAndEntries;
  });
}
function createSettledFileInfo(fileInfo) {
  const {
    id,
    name,
    percentage,
    status,
    url,
    file,
    thumbnailUrl,
    type,
    fullPath,
    batchId
  } = fileInfo;
  return {
    id,
    name,
    percentage: percentage !== null && percentage !== void 0 ? percentage : null,
    status,
    url: url !== null && url !== void 0 ? url : null,
    file: file !== null && file !== void 0 ? file : null,
    thumbnailUrl: thumbnailUrl !== null && thumbnailUrl !== void 0 ? thumbnailUrl : null,
    type: type !== null && type !== void 0 ? type : null,
    fullPath: fullPath !== null && fullPath !== void 0 ? fullPath : null,
    batchId: batchId !== null && batchId !== void 0 ? batchId : null
  };
}
function matchType(name, mimeType, accept) {
  name = name.toLowerCase();
  mimeType = mimeType.toLocaleLowerCase();
  accept = accept.toLocaleLowerCase();
  const acceptAtoms = accept.split(",").map((acceptAtom) => acceptAtom.trim()).filter(Boolean);
  return acceptAtoms.some((acceptAtom) => {
    if (acceptAtom.startsWith(".")) {
      if (name.endsWith(acceptAtom)) return true;
    } else if (acceptAtom.includes("/")) {
      const [type, subtype] = mimeType.split("/");
      const [acceptType, acceptSubtype] = acceptAtom.split("/");
      if (acceptType === "*" || type && acceptType && acceptType === type) {
        if (acceptSubtype === "*" || subtype && acceptSubtype && acceptSubtype === subtype) {
          return true;
        }
      }
    } else {
      return true;
    }
    return false;
  });
}
var __awaiter$1 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
};
const buttonThemeOverrides = {
  paddingMedium: "0 3px",
  heightMedium: "24px",
  iconSizeMedium: "18px"
};
const NUploadFile = defineComponent({
  name: "UploadFile",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    file: {
      type: Object,
      required: true
    },
    listType: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const NUpload2 = inject(uploadInjectionKey);
    const imageRef = ref(null);
    const thumbnailUrlRef = ref("");
    const progressStatusRef = computed(() => {
      const {
        file
      } = props;
      if (file.status === "finished") return "success";
      if (file.status === "error") return "error";
      return "info";
    });
    const buttonTypeRef = computed(() => {
      const {
        file
      } = props;
      if (file.status === "error") return "error";
      return void 0;
    });
    const showProgressRef = computed(() => {
      const {
        file
      } = props;
      return file.status === "uploading";
    });
    const showCancelButtonRef = computed(() => {
      if (!NUpload2.showCancelButtonRef.value) return false;
      const {
        file
      } = props;
      return ["uploading", "pending", "error"].includes(file.status);
    });
    const showRemoveButtonRef = computed(() => {
      if (!NUpload2.showRemoveButtonRef.value) return false;
      const {
        file
      } = props;
      return ["finished"].includes(file.status);
    });
    const showDownloadButtonRef = computed(() => {
      if (!NUpload2.showDownloadButtonRef.value) return false;
      const {
        file
      } = props;
      return ["finished"].includes(file.status);
    });
    const showRetryButtonRef = computed(() => {
      if (!NUpload2.showRetryButtonRef.value) return false;
      const {
        file
      } = props;
      return ["error"].includes(file.status);
    });
    const mergedThumbnailUrlRef = useMemo(() => {
      return thumbnailUrlRef.value || props.file.thumbnailUrl || props.file.url;
    });
    const showPreviewButtonRef = computed(() => {
      if (!NUpload2.showPreviewButtonRef.value) return false;
      const {
        file: {
          status
        },
        listType
      } = props;
      return ["finished"].includes(status) && mergedThumbnailUrlRef.value && listType === "image-card";
    });
    function handleRetryClick() {
      return __awaiter$1(this, void 0, void 0, function* () {
        const onRetry = NUpload2.onRetryRef.value;
        if (onRetry) {
          const onRetryReturn = yield onRetry({
            file: props.file
          });
          if (onRetryReturn === false) {
            return;
          }
        }
        NUpload2.submit(props.file.id);
      });
    }
    function handleRemoveOrCancelClick(e) {
      e.preventDefault();
      const {
        file
      } = props;
      if (["finished", "pending", "error"].includes(file.status)) {
        handleRemove(file);
      } else if (["uploading"].includes(file.status)) {
        handleAbort(file);
      } else {
        warn("upload", "The button clicked type is unknown.");
      }
    }
    function handleDownloadClick(e) {
      e.preventDefault();
      handleDownload(props.file);
    }
    function handleRemove(file) {
      const {
        xhrMap,
        doChange,
        onRemoveRef: {
          value: onRemove
        },
        mergedFileListRef: {
          value: mergedFileList
        }
      } = NUpload2;
      void Promise.resolve(onRemove ? onRemove({
        file: Object.assign({}, file),
        fileList: mergedFileList,
        index: props.index
      }) : true).then((result) => {
        if (result === false) return;
        const fileAfterChange = Object.assign({}, file, {
          status: "removed"
        });
        xhrMap.delete(file.id);
        doChange(fileAfterChange, void 0, {
          remove: true
        });
      });
    }
    function handleDownload(file) {
      const {
        onDownloadRef: {
          value: onDownload
        }
      } = NUpload2;
      void Promise.resolve(onDownload ? onDownload(Object.assign({}, file)) : true).then((res) => {
        if (res !== false) {
          download(file.url, file.name);
        }
      });
    }
    function handleAbort(file) {
      const {
        xhrMap
      } = NUpload2;
      const xhr = xhrMap.get(file.id);
      xhr === null || xhr === void 0 ? void 0 : xhr.abort();
      handleRemove(Object.assign({}, file));
    }
    function handlePreviewClick(e) {
      const {
        onPreviewRef: {
          value: onPreview
        }
      } = NUpload2;
      if (onPreview) {
        onPreview(props.file, {
          event: e
        });
      } else if (props.listType === "image-card") {
        const {
          value
        } = imageRef;
        if (!value) return;
        value.click();
      }
    }
    const deriveFileThumbnailUrl = () => __awaiter$1(this, void 0, void 0, function* () {
      const {
        listType
      } = props;
      if (listType !== "image" && listType !== "image-card") {
        return;
      }
      if (NUpload2.shouldUseThumbnailUrlRef.value(props.file)) {
        thumbnailUrlRef.value = yield NUpload2.getFileThumbnailUrlResolver(props.file);
      }
    });
    watchEffect(() => {
      void deriveFileThumbnailUrl();
    });
    return {
      mergedTheme: NUpload2.mergedThemeRef,
      progressStatus: progressStatusRef,
      buttonType: buttonTypeRef,
      showProgress: showProgressRef,
      disabled: NUpload2.mergedDisabledRef,
      showCancelButton: showCancelButtonRef,
      showRemoveButton: showRemoveButtonRef,
      showDownloadButton: showDownloadButtonRef,
      showRetryButton: showRetryButtonRef,
      showPreviewButton: showPreviewButtonRef,
      mergedThumbnailUrl: mergedThumbnailUrlRef,
      shouldUseThumbnailUrl: NUpload2.shouldUseThumbnailUrlRef,
      renderIcon: NUpload2.renderIconRef,
      imageRef,
      handleRemoveOrCancelClick,
      handleDownloadClick,
      handleRetryClick,
      handlePreviewClick
    };
  },
  render() {
    const {
      clsPrefix,
      mergedTheme,
      listType,
      file,
      renderIcon
    } = this;
    let icon;
    const isImageType = listType === "image";
    const isImageCardType = listType === "image-card";
    if (isImageType || isImageCardType) {
      icon = !this.shouldUseThumbnailUrl(file) || !this.mergedThumbnailUrl ? h("span", {
        class: `${clsPrefix}-upload-file-info__thumbnail`
      }, renderIcon ? renderIcon(file) : isImageFile(file) ? h(NBaseIcon, {
        clsPrefix
      }, {
        default: renderImageIcon
      }) : h(NBaseIcon, {
        clsPrefix
      }, {
        default: renderDocumentIcon
      })) : h("a", {
        rel: "noopener noreferer",
        target: "_blank",
        href: file.url || void 0,
        class: `${clsPrefix}-upload-file-info__thumbnail`,
        onClick: this.handlePreviewClick
      }, listType === "image-card" ? h(NImage, {
        src: this.mergedThumbnailUrl || void 0,
        previewSrc: file.url || void 0,
        alt: file.name,
        ref: "imageRef"
      }) : h("img", {
        src: this.mergedThumbnailUrl || void 0,
        alt: file.name
      }));
    } else {
      icon = h("span", {
        class: `${clsPrefix}-upload-file-info__thumbnail`
      }, renderIcon ? renderIcon(file) : h(NBaseIcon, {
        clsPrefix
      }, {
        default: () => h(AttachIcon, null)
      }));
    }
    const progress = h(NUploadProgress, {
      show: this.showProgress,
      percentage: file.percentage || 0,
      status: this.progressStatus
    });
    const showName = listType === "text" || listType === "image";
    return h("div", {
      class: [`${clsPrefix}-upload-file`, `${clsPrefix}-upload-file--${this.progressStatus}-status`, file.url && file.status !== "error" && listType !== "image-card" && `${clsPrefix}-upload-file--with-url`, `${clsPrefix}-upload-file--${listType}-type`]
    }, h("div", {
      class: `${clsPrefix}-upload-file-info`
    }, icon, h("div", {
      class: `${clsPrefix}-upload-file-info__name`
    }, showName && (file.url && file.status !== "error" ? h("a", {
      rel: "noopener noreferer",
      target: "_blank",
      href: file.url || void 0,
      onClick: this.handlePreviewClick
    }, file.name) : h("span", {
      onClick: this.handlePreviewClick
    }, file.name)), isImageType && progress), h("div", {
      class: [`${clsPrefix}-upload-file-info__action`, `${clsPrefix}-upload-file-info__action--${listType}-type`]
    }, this.showPreviewButton ? h(Button, {
      key: "preview",
      quaternary: true,
      type: this.buttonType,
      onClick: this.handlePreviewClick,
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      builtinThemeOverrides: buttonThemeOverrides
    }, {
      icon: () => h(NBaseIcon, {
        clsPrefix
      }, {
        default: () => h(EyeIcon, null)
      })
    }) : null, (this.showRemoveButton || this.showCancelButton) && !this.disabled && h(Button, {
      key: "cancelOrTrash",
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      quaternary: true,
      builtinThemeOverrides: buttonThemeOverrides,
      type: this.buttonType,
      onClick: this.handleRemoveOrCancelClick
    }, {
      icon: () => h(NIconSwitchTransition, null, {
        default: () => this.showRemoveButton ? h(NBaseIcon, {
          clsPrefix,
          key: "trash"
        }, {
          default: () => h(TrashIcon, null)
        }) : h(NBaseIcon, {
          clsPrefix,
          key: "cancel"
        }, {
          default: () => h(CancelIcon, null)
        })
      })
    }), this.showRetryButton && !this.disabled && h(Button, {
      key: "retry",
      quaternary: true,
      type: this.buttonType,
      onClick: this.handleRetryClick,
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      builtinThemeOverrides: buttonThemeOverrides
    }, {
      icon: () => h(NBaseIcon, {
        clsPrefix
      }, {
        default: () => h(RetryIcon, null)
      })
    }), this.showDownloadButton ? h(Button, {
      key: "download",
      quaternary: true,
      type: this.buttonType,
      onClick: this.handleDownloadClick,
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      builtinThemeOverrides: buttonThemeOverrides
    }, {
      icon: () => h(NBaseIcon, {
        clsPrefix
      }, {
        default: () => h(DownloadIcon, null)
      })
    }) : null)), !isImageType && progress);
  }
});
const NUploadTrigger = defineComponent({
  name: "UploadTrigger",
  props: {
    abstract: Boolean
  },
  slots: Object,
  setup(props, {
    slots
  }) {
    const NUpload2 = inject(uploadInjectionKey, null);
    if (!NUpload2) {
      throwError("upload-trigger", "`n-upload-trigger` must be placed inside `n-upload`.");
    }
    const {
      mergedClsPrefixRef,
      mergedDisabledRef,
      maxReachedRef,
      listTypeRef,
      dragOverRef,
      openOpenFileDialog,
      draggerInsideRef,
      handleFileAddition,
      mergedDirectoryDndRef,
      triggerClassRef,
      triggerStyleRef
    } = NUpload2;
    const isImageCardTypeRef = computed(() => listTypeRef.value === "image-card");
    function handleTriggerClick() {
      if (mergedDisabledRef.value || maxReachedRef.value) return;
      openOpenFileDialog();
    }
    function handleTriggerDragOver(e) {
      e.preventDefault();
      dragOverRef.value = true;
    }
    function handleTriggerDragEnter(e) {
      e.preventDefault();
      dragOverRef.value = true;
    }
    function handleTriggerDragLeave(e) {
      e.preventDefault();
      dragOverRef.value = false;
    }
    function handleTriggerDrop(e) {
      var _a;
      e.preventDefault();
      if (!draggerInsideRef.value || mergedDisabledRef.value || maxReachedRef.value) {
        dragOverRef.value = false;
        return;
      }
      const dataTransferItems = (_a = e.dataTransfer) === null || _a === void 0 ? void 0 : _a.items;
      if (dataTransferItems === null || dataTransferItems === void 0 ? void 0 : dataTransferItems.length) {
        void getFilesFromEntries(Array.from(dataTransferItems).map((item) => item.webkitGetAsEntry()), mergedDirectoryDndRef.value).then((files) => {
          handleFileAddition(files);
        }).finally(() => {
          dragOverRef.value = false;
        });
      } else {
        dragOverRef.value = false;
      }
    }
    return () => {
      var _a;
      const {
        value: mergedClsPrefix
      } = mergedClsPrefixRef;
      return props.abstract ? (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots, {
        handleClick: handleTriggerClick,
        handleDrop: handleTriggerDrop,
        handleDragOver: handleTriggerDragOver,
        handleDragEnter: handleTriggerDragEnter,
        handleDragLeave: handleTriggerDragLeave
      }) : h("div", {
        class: [`${mergedClsPrefix}-upload-trigger`, (mergedDisabledRef.value || maxReachedRef.value) && `${mergedClsPrefix}-upload-trigger--disabled`, isImageCardTypeRef.value && `${mergedClsPrefix}-upload-trigger--image-card`, triggerClassRef.value],
        style: triggerStyleRef.value,
        onClick: handleTriggerClick,
        onDrop: handleTriggerDrop,
        onDragover: handleTriggerDragOver,
        onDragenter: handleTriggerDragEnter,
        onDragleave: handleTriggerDragLeave
      }, isImageCardTypeRef.value ? h(NUploadDragger, null, {
        default: () => resolveSlot(slots.default, () => [h(NBaseIcon, {
          clsPrefix: mergedClsPrefix
        }, {
          default: () => h(AddIcon, null)
        })])
      }) : slots);
    };
  }
});
const NUploadFileList = defineComponent({
  name: "UploadFileList",
  setup(_, {
    slots
  }) {
    const NUpload2 = inject(uploadInjectionKey, null);
    if (!NUpload2) {
      throwError("upload-file-list", "`n-upload-file-list` must be placed inside `n-upload`.");
    }
    const {
      abstractRef,
      mergedClsPrefixRef,
      listTypeRef,
      mergedFileListRef,
      fileListClassRef,
      fileListStyleRef,
      cssVarsRef,
      themeClassRef,
      maxReachedRef,
      showTriggerRef,
      imageGroupPropsRef
    } = NUpload2;
    const isImageCardTypeRef = computed(() => listTypeRef.value === "image-card");
    const renderFileList = () => mergedFileListRef.value.map((file, index) => h(NUploadFile, {
      clsPrefix: mergedClsPrefixRef.value,
      key: file.id,
      file,
      index,
      listType: listTypeRef.value
    }));
    const renderUploadFileList = () => isImageCardTypeRef.value ? h(NImageGroup, Object.assign({}, imageGroupPropsRef.value), {
      default: renderFileList
    }) : h(NFadeInExpandTransition, {
      group: true
    }, {
      default: renderFileList
    });
    return () => {
      const {
        value: mergedClsPrefix
      } = mergedClsPrefixRef;
      const {
        value: abstract
      } = abstractRef;
      return h("div", {
        class: [`${mergedClsPrefix}-upload-file-list`, isImageCardTypeRef.value && `${mergedClsPrefix}-upload-file-list--grid`, abstract ? themeClassRef === null || themeClassRef === void 0 ? void 0 : themeClassRef.value : void 0, fileListClassRef.value],
        style: [abstract && cssVarsRef ? cssVarsRef.value : "", fileListStyleRef.value]
      }, renderUploadFileList(), showTriggerRef.value && !maxReachedRef.value && isImageCardTypeRef.value && h(NUploadTrigger, null, slots));
    };
  }
});
var __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
function createXhrHandlers(inst, file, xhr) {
  const {
    doChange,
    xhrMap
  } = inst;
  let percentage = 0;
  function handleXHRError(e) {
    var _a;
    let fileAfterChange = Object.assign({}, file, {
      status: "error",
      percentage
    });
    xhrMap.delete(file.id);
    fileAfterChange = createSettledFileInfo(((_a = inst.onError) === null || _a === void 0 ? void 0 : _a.call(inst, {
      file: fileAfterChange,
      event: e
    })) || fileAfterChange);
    doChange(fileAfterChange, e);
  }
  function handleXHRLoad(e) {
    var _a;
    if (inst.isErrorState) {
      if (inst.isErrorState(xhr)) {
        handleXHRError(e);
        return;
      }
    } else {
      if (xhr.status < 200 || xhr.status >= 300) {
        handleXHRError(e);
        return;
      }
    }
    let fileAfterChange = Object.assign({}, file, {
      status: "finished",
      percentage
    });
    xhrMap.delete(file.id);
    fileAfterChange = createSettledFileInfo(((_a = inst.onFinish) === null || _a === void 0 ? void 0 : _a.call(inst, {
      file: fileAfterChange,
      event: e
    })) || fileAfterChange);
    doChange(fileAfterChange, e);
  }
  return {
    handleXHRLoad,
    handleXHRError,
    handleXHRAbort(e) {
      const fileAfterChange = Object.assign({}, file, {
        status: "removed",
        file: null,
        percentage
      });
      xhrMap.delete(file.id);
      doChange(fileAfterChange, e);
    },
    handleXHRProgress(e) {
      const fileAfterChange = Object.assign({}, file, {
        status: "uploading"
      });
      if (e.lengthComputable) {
        const progress = Math.ceil(e.loaded / e.total * 100);
        fileAfterChange.percentage = progress;
        percentage = progress;
      }
      doChange(fileAfterChange, e);
    }
  };
}
function customSubmitImpl(options) {
  const {
    inst,
    file,
    data,
    headers,
    withCredentials,
    action,
    customRequest
  } = options;
  const {
    doChange
  } = options.inst;
  let percentage = 0;
  customRequest({
    file,
    data,
    headers,
    withCredentials,
    action,
    onProgress(event) {
      const fileAfterChange = Object.assign({}, file, {
        status: "uploading"
      });
      const progress = event.percent;
      fileAfterChange.percentage = progress;
      percentage = progress;
      doChange(fileAfterChange);
    },
    onFinish() {
      var _a;
      let fileAfterChange = Object.assign({}, file, {
        status: "finished",
        percentage
      });
      fileAfterChange = createSettledFileInfo(((_a = inst.onFinish) === null || _a === void 0 ? void 0 : _a.call(inst, {
        file: fileAfterChange
      })) || fileAfterChange);
      doChange(fileAfterChange);
    },
    onError() {
      var _a;
      let fileAfterChange = Object.assign({}, file, {
        status: "error",
        percentage
      });
      fileAfterChange = createSettledFileInfo(((_a = inst.onError) === null || _a === void 0 ? void 0 : _a.call(inst, {
        file: fileAfterChange
      })) || fileAfterChange);
      doChange(fileAfterChange);
    }
  });
}
function registerHandler(inst, file, request) {
  const handlers = createXhrHandlers(inst, file, request);
  request.onabort = handlers.handleXHRAbort;
  request.onerror = handlers.handleXHRError;
  request.onload = handlers.handleXHRLoad;
  if (request.upload) {
    request.upload.onprogress = handlers.handleXHRProgress;
  }
}
function unwrapFunctionValue(data, file) {
  if (typeof data === "function") {
    return data({
      file
    });
  }
  if (data) return data;
  return {};
}
function setHeaders(request, headers, file) {
  const headersObject = unwrapFunctionValue(headers, file);
  if (!headersObject) return;
  Object.keys(headersObject).forEach((key) => {
    request.setRequestHeader(key, headersObject[key]);
  });
}
function appendData(formData, data, file) {
  const dataObject = unwrapFunctionValue(data, file);
  if (!dataObject) return;
  Object.keys(dataObject).forEach((key) => {
    formData.append(key, dataObject[key]);
  });
}
function submitImpl(inst, fieldName, file, {
  method,
  action,
  withCredentials,
  responseType,
  headers,
  data
}) {
  const request = new (void 0)();
  request.responseType = responseType;
  inst.xhrMap.set(file.id, request);
  request.withCredentials = withCredentials;
  const formData = new FormData();
  appendData(formData, data, file);
  if (file.file !== null) {
    formData.append(fieldName, file.file);
  }
  registerHandler(inst, file, request);
  if (action !== void 0) {
    request.open(method.toUpperCase(), action);
    setHeaders(request, headers, file);
    request.send(formData);
    const fileAfterChange = Object.assign({}, file, {
      status: "uploading"
    });
    inst.doChange(fileAfterChange);
  }
}
const uploadProps = Object.assign(Object.assign({}, useTheme.props), {
  name: {
    type: String,
    default: "file"
  },
  accept: String,
  action: String,
  customRequest: Function,
  directory: Boolean,
  directoryDnd: {
    type: Boolean,
    default: void 0
  },
  method: {
    type: String,
    default: "POST"
  },
  multiple: Boolean,
  showFileList: {
    type: Boolean,
    default: true
  },
  data: [Object, Function],
  headers: [Object, Function],
  withCredentials: Boolean,
  responseType: {
    type: String,
    default: ""
  },
  disabled: {
    type: Boolean,
    default: void 0
  },
  onChange: Function,
  onRemove: Function,
  onFinish: Function,
  onError: Function,
  onRetry: Function,
  onBeforeUpload: Function,
  isErrorState: Function,
  /** currently not used */
  onDownload: Function,
  defaultUpload: {
    type: Boolean,
    default: true
  },
  fileList: Array,
  "onUpdate:fileList": [Function, Array],
  onUpdateFileList: [Function, Array],
  fileListClass: String,
  fileListStyle: [String, Object],
  defaultFileList: {
    type: Array,
    default: () => []
  },
  showCancelButton: {
    type: Boolean,
    default: true
  },
  showRemoveButton: {
    type: Boolean,
    default: true
  },
  showDownloadButton: Boolean,
  showRetryButton: {
    type: Boolean,
    default: true
  },
  showPreviewButton: {
    type: Boolean,
    default: true
  },
  listType: {
    type: String,
    default: "text"
  },
  onPreview: Function,
  shouldUseThumbnailUrl: {
    type: Function,
    default: (file) => {
      return false;
    }
  },
  createThumbnailUrl: Function,
  abstract: Boolean,
  max: Number,
  showTrigger: {
    type: Boolean,
    default: true
  },
  imageGroupProps: Object,
  inputProps: Object,
  triggerClass: String,
  triggerStyle: [String, Object],
  renderIcon: Function
});
const NUpload = defineComponent({
  name: "Upload",
  props: uploadProps,
  setup(props) {
    if (props.abstract && props.listType === "image-card") {
      throwError("upload", "when the list-type is image-card, abstract is not supported.");
    }
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Upload", "-upload", style, uploadLight, props, mergedClsPrefixRef);
    const formItem = useFormItem(props);
    const uncontrolledFileListRef = ref(props.defaultFileList);
    const controlledFileListRef = toRef(props, "fileList");
    const inputElRef = ref(null);
    const draggerInsideRef = {
      value: false
    };
    const dragOverRef = ref(false);
    const xhrMap = /* @__PURE__ */ new Map();
    const _mergedFileListRef = useMergedState(controlledFileListRef, uncontrolledFileListRef);
    const mergedFileListRef = computed(() => _mergedFileListRef.value.map(createSettledFileInfo));
    const maxReachedRef = computed(() => {
      const {
        max
      } = props;
      if (max !== void 0) {
        return mergedFileListRef.value.length >= max;
      }
      return false;
    });
    function openOpenFileDialog() {
      var _a;
      (_a = inputElRef.value) === null || _a === void 0 ? void 0 : _a.click();
    }
    function handleFileInputChange(e) {
      const target = e.target;
      handleFileAddition(target.files ? Array.from(target.files).map((file) => ({
        file,
        entry: null,
        source: "input"
      })) : null, e);
      target.value = "";
    }
    function doUpdateFileList(files) {
      const {
        "onUpdate:fileList": _onUpdateFileList,
        onUpdateFileList
      } = props;
      if (_onUpdateFileList) call(_onUpdateFileList, files);
      if (onUpdateFileList) call(onUpdateFileList, files);
      uncontrolledFileListRef.value = files;
    }
    const mergedMultipleRef = computed(() => props.multiple || props.directory);
    const doChange = (fileAfterChange, event, options = {
      append: false,
      remove: false
    }) => {
      const {
        append,
        remove
      } = options;
      const fileListAfterChange = Array.from(mergedFileListRef.value);
      const fileIndex = fileListAfterChange.findIndex((file) => file.id === fileAfterChange.id);
      if (append || remove || ~fileIndex) {
        if (append) {
          fileListAfterChange.push(fileAfterChange);
        } else if (remove) {
          fileListAfterChange.splice(fileIndex, 1);
        } else {
          fileListAfterChange.splice(fileIndex, 1, fileAfterChange);
        }
        const {
          onChange
        } = props;
        if (onChange) {
          onChange({
            file: fileAfterChange,
            fileList: fileListAfterChange,
            event
          });
        }
        doUpdateFileList(fileListAfterChange);
      }
    };
    function handleFileAddition(fileAndEntries, e) {
      if (!fileAndEntries || fileAndEntries.length === 0) return;
      const {
        onBeforeUpload
      } = props;
      fileAndEntries = mergedMultipleRef.value ? fileAndEntries : [fileAndEntries[0]];
      const {
        max,
        accept
      } = props;
      fileAndEntries = fileAndEntries.filter(({
        file,
        source
      }) => {
        if (source === "dnd" && (accept === null || accept === void 0 ? void 0 : accept.trim())) {
          return matchType(file.name, file.type, accept);
        } else {
          return true;
        }
      });
      if (max) {
        fileAndEntries = fileAndEntries.slice(0, max - mergedFileListRef.value.length);
      }
      const batchId = createId();
      void Promise.all(fileAndEntries.map((_a) => __awaiter(this, [_a], void 0, function* ({
        file,
        entry
      }) {
        var _b;
        const fileInfo = {
          id: createId(),
          batchId,
          name: file.name,
          status: "pending",
          percentage: 0,
          file,
          url: null,
          type: file.type,
          thumbnailUrl: null,
          fullPath: (_b = entry === null || entry === void 0 ? void 0 : entry.fullPath) !== null && _b !== void 0 ? _b : `/${file.webkitRelativePath || file.name}`
        };
        if (!onBeforeUpload || (yield onBeforeUpload({
          file: fileInfo,
          fileList: mergedFileListRef.value
        })) !== false) {
          return fileInfo;
        }
        return null;
      }))).then((fileInfos) => __awaiter(this, void 0, void 0, function* () {
        let nextTickChain = Promise.resolve();
        fileInfos.forEach((fileInfo) => {
          nextTickChain = nextTickChain.then(nextTick).then(() => {
            if (fileInfo) {
              doChange(fileInfo, e, {
                append: true
              });
            }
          });
        });
        yield nextTickChain;
      })).then(() => {
        if (props.defaultUpload) {
          submit();
        }
      });
    }
    function submit(fileId) {
      const {
        method,
        action,
        withCredentials,
        headers,
        data,
        name: fieldName
      } = props;
      const filesToUpload = fileId !== void 0 ? mergedFileListRef.value.filter((file) => file.id === fileId) : mergedFileListRef.value;
      const shouldReupload = fileId !== void 0;
      filesToUpload.forEach((file) => {
        const {
          status
        } = file;
        if (status === "pending" || status === "error" && shouldReupload) {
          if (props.customRequest) {
            customSubmitImpl({
              inst: {
                doChange,
                xhrMap,
                onFinish: props.onFinish,
                onError: props.onError
              },
              file,
              action,
              withCredentials,
              headers,
              data,
              customRequest: props.customRequest
            });
          } else {
            submitImpl({
              doChange,
              xhrMap,
              onFinish: props.onFinish,
              onError: props.onError,
              isErrorState: props.isErrorState
            }, fieldName, file, {
              method,
              action,
              withCredentials,
              responseType: props.responseType,
              headers,
              data
            });
          }
        }
      });
    }
    function getFileThumbnailUrlResolver(file) {
      var _a;
      if (file.thumbnailUrl) return file.thumbnailUrl;
      const {
        createThumbnailUrl
      } = props;
      if (createThumbnailUrl) {
        return (_a = createThumbnailUrl(file.file, file)) !== null && _a !== void 0 ? _a : file.url || "";
      }
      if (file.url) {
        return file.url;
      } else if (file.file) {
        return createImageDataUrl(file.file);
      }
      return "";
    }
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          draggerColor,
          draggerBorder,
          draggerBorderHover,
          itemColorHover,
          itemColorHoverError,
          itemTextColorError,
          itemTextColorSuccess,
          itemTextColor,
          itemIconColor,
          itemDisabledOpacity,
          lineHeight,
          borderRadius,
          fontSize,
          itemBorderImageCardError,
          itemBorderImageCard
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-border-radius": borderRadius,
        "--n-dragger-border": draggerBorder,
        "--n-dragger-border-hover": draggerBorderHover,
        "--n-dragger-color": draggerColor,
        "--n-font-size": fontSize,
        "--n-item-color-hover": itemColorHover,
        "--n-item-color-hover-error": itemColorHoverError,
        "--n-item-disabled-opacity": itemDisabledOpacity,
        "--n-item-icon-color": itemIconColor,
        "--n-item-text-color": itemTextColor,
        "--n-item-text-color-error": itemTextColorError,
        "--n-item-text-color-success": itemTextColorSuccess,
        "--n-line-height": lineHeight,
        "--n-item-border-image-card-error": itemBorderImageCardError,
        "--n-item-border-image-card": itemBorderImageCard
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("upload", void 0, cssVarsRef, props) : void 0;
    provide(uploadInjectionKey, {
      mergedClsPrefixRef,
      mergedThemeRef: themeRef,
      showCancelButtonRef: toRef(props, "showCancelButton"),
      showDownloadButtonRef: toRef(props, "showDownloadButton"),
      showRemoveButtonRef: toRef(props, "showRemoveButton"),
      showRetryButtonRef: toRef(props, "showRetryButton"),
      onRemoveRef: toRef(props, "onRemove"),
      onDownloadRef: toRef(props, "onDownload"),
      mergedFileListRef,
      triggerClassRef: toRef(props, "triggerClass"),
      triggerStyleRef: toRef(props, "triggerStyle"),
      shouldUseThumbnailUrlRef: toRef(props, "shouldUseThumbnailUrl"),
      renderIconRef: toRef(props, "renderIcon"),
      xhrMap,
      submit,
      doChange,
      showPreviewButtonRef: toRef(props, "showPreviewButton"),
      onPreviewRef: toRef(props, "onPreview"),
      getFileThumbnailUrlResolver,
      listTypeRef: toRef(props, "listType"),
      dragOverRef,
      openOpenFileDialog,
      draggerInsideRef,
      handleFileAddition,
      mergedDisabledRef: formItem.mergedDisabledRef,
      maxReachedRef,
      fileListClassRef: toRef(props, "fileListClass"),
      fileListStyleRef: toRef(props, "fileListStyle"),
      abstractRef: toRef(props, "abstract"),
      acceptRef: toRef(props, "accept"),
      cssVarsRef: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClassRef: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender,
      showTriggerRef: toRef(props, "showTrigger"),
      imageGroupPropsRef: toRef(props, "imageGroupProps"),
      mergedDirectoryDndRef: computed(() => {
        var _a;
        return (_a = props.directoryDnd) !== null && _a !== void 0 ? _a : props.directory;
      }),
      onRetryRef: toRef(props, "onRetry")
    });
    const exposedMethods = {
      clear: () => {
        uncontrolledFileListRef.value = [];
      },
      submit,
      openOpenFileDialog
    };
    return Object.assign({
      mergedClsPrefix: mergedClsPrefixRef,
      draggerInsideRef,
      inputElRef,
      mergedTheme: themeRef,
      dragOver: dragOverRef,
      mergedMultiple: mergedMultipleRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender,
      handleFileInputChange
    }, exposedMethods);
  },
  render() {
    var _a, _b;
    const {
      draggerInsideRef,
      mergedClsPrefix,
      $slots,
      directory,
      onRender
    } = this;
    if ($slots.default && !this.abstract) {
      const firstChild = $slots.default()[0];
      if ((_a = firstChild === null || firstChild === void 0 ? void 0 : firstChild.type) === null || _a === void 0 ? void 0 : _a[uploadDraggerKey]) {
        draggerInsideRef.value = true;
      }
    }
    const inputNode = h("input", Object.assign({}, this.inputProps, {
      ref: "inputElRef",
      type: "file",
      class: `${mergedClsPrefix}-upload-file-input`,
      accept: this.accept,
      multiple: this.mergedMultiple,
      onChange: this.handleFileInputChange,
      // @ts-expect-error // seems vue-tsc will add the prop, so we can't use expect-error
      webkitdirectory: directory || void 0,
      directory: directory || void 0
    }));
    if (this.abstract) {
      return h(Fragment, null, (_b = $slots.default) === null || _b === void 0 ? void 0 : _b.call($slots), h(Teleport, {
        to: "body"
      }, inputNode));
    }
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("div", {
      class: [`${mergedClsPrefix}-upload`, draggerInsideRef.value && `${mergedClsPrefix}-upload--dragger-inside`, this.dragOver && `${mergedClsPrefix}-upload--drag-over`, this.themeClass],
      style: this.cssVars
    }, inputNode, this.showTrigger && this.listType !== "image-card" && h(NUploadTrigger, null, $slots), this.showFileList && h(NUploadFileList, null, $slots));
  }
});

export { NUpload as N, NUploadDragger as a };
//# sourceMappingURL=Upload-DyaX67yl.mjs.map
