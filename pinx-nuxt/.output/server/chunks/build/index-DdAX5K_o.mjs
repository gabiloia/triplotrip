import dayjs from 'dayjs';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
const icon = "data:image/svg+xml,%3csvg%20aria-hidden='true'%20height='24'%20viewBox='0%200%2021%2021'%20width='24'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20fill='none'%20fill-rule='evenodd'%20transform='translate(2%202)'%3e%3cpath%20d='m2.5.5h12c1.1045695%200%202%20.8954305%202%202v12c0%201.1045695-.8954305%202-2%202h-12c-1.1045695%200-2-.8954305-2-2v-12c0-1.1045695.8954305-2%202-2z'%20stroke='grey'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/path%3e%3cpath%20d='m.5%204.5h16'%20stroke='grey'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/path%3e%3cg%20fill='grey'%3e%3ccircle%20cx='8.5'%20cy='8.5'%20r='1'%3e%3c/circle%3e%3ccircle%20cx='4.5'%20cy='8.5'%20r='1'%3e%3c/circle%3e%3ccircle%20cx='12.5'%20cy='8.5'%20r='1'%3e%3c/circle%3e%3ccircle%20cx='8.5'%20cy='12.5'%20r='1'%3e%3c/circle%3e%3ccircle%20cx='4.5'%20cy='12.5'%20r='1'%3e%3c/circle%3e%3ccircle%20cx='12.5'%20cy='12.5'%20r='1'%3e%3c/circle%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
function ColumnRenderer(h, { model, prop }) {
  const val = model[prop];
  const isValid = dayjs(val).isValid();
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
      isValid ? dayjs(val).format("DD/MM/YYYY") : val,
      h("img", {
        width: 14,
        src: icon
      })
    ]
  );
}
class DateEditor {
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
    var _a;
    let val = "";
    if (this == null ? void 0 : this.editCell) {
      const model = (this == null ? void 0 : this.editCell.model) || {};
      val = model[(_a = this == null ? void 0 : this.editCell) == null ? void 0 : _a.prop] || "";
    }
    return createComponent("input", {
      type: "date",
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
    });
  }
}
class ColumnType {
  constructor() {
    __publicField(this, "editor", DateEditor);
    __publicField(this, "cellTemplate", ColumnRenderer);
  }
}

export { ColumnType as default };
//# sourceMappingURL=index-DdAX5K_o.mjs.map
