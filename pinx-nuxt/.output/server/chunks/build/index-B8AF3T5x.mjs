var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
const icon = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2020%2020'%3e%3cg%20fill='none'%3e%3cpath%20d='M5.019%208.628A1%201%200%200%201%205.797%207h8.407a1%201%200%200%201%20.778%201.628l-3.815%204.723a1.5%201.5%200%200%201-2.334%200L5.02%208.628zM14.204%208H5.797l3.814%204.723a.5.5%200%200%200%20.778%200L14.204%208z'%20fill='grey'%3e%3c/path%3e%3c/g%3e%3c/svg%3e";
function ColumnRenderer(h, { model, prop }) {
  const val = model[prop];
  return h(
    "span",
    {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    },
    [
      val,
      h("img", {
        width: 18,
        src: icon
      })
    ]
  );
}
class SelectEditor {
  constructor(column, saveCallback) {
    __publicField(this, "element", null);
    __publicField(this, "editCell");
    this.column = column;
    this.saveCallback = saveCallback;
  }
  // optional, called after editor rendered
  componentDidRender() {
  }
  // optional, called after editor destroyed
  disconnectedCallback() {
  }
  render(createComponent) {
    var _a, _b, _c;
    let val = "";
    if (this == null ? void 0 : this.editCell) {
      const model = (this == null ? void 0 : this.editCell.model) || {};
      val = model[(_a = this == null ? void 0 : this.editCell) == null ? void 0 : _a.prop] || "";
    }
    const options = [];
    if ((_c = (_b = this.column) == null ? void 0 : _b.source) == null ? void 0 : _c.length) {
      for (const source of this.column.source) {
        options.push(
          createComponent(
            "option",
            {
              value: source,
              selected: source === val
            },
            source
          )
        );
      }
    }
    return createComponent(
      "select",
      {
        value: val,
        style: {
          margin: "0 15px",
          width: " calc(100% - 30px)",
          height: "100%"
        },
        onChange: (event) => {
          const inputElement = event.target;
          this.saveCallback(inputElement == null ? void 0 : inputElement.value);
        }
      },
      options
    );
  }
}
class ColumnType {
  constructor() {
    __publicField(this, "editor", SelectEditor);
    __publicField(this, "cellTemplate", ColumnRenderer);
  }
}

export { ColumnType as default };
//# sourceMappingURL=index-B8AF3T5x.mjs.map
