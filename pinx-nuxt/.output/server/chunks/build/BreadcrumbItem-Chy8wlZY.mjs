import { defineComponent, h, provide, toRef, computed, inject, ref } from 'vue';
import { v as useConfig, x as useTheme, bL as breadcrumbLight, k as cB, h as createInjectionKey, z as useThemeClass, K as resolveSlot, m as c$1, n as cE, l as cM } from './server.mjs';

const style = cB("breadcrumb", `
 white-space: nowrap;
 cursor: default;
 line-height: var(--n-item-line-height);
`, [c$1("ul", `
 list-style: none;
 padding: 0;
 margin: 0;
 `), c$1("a", `
 color: inherit;
 text-decoration: inherit;
 `), cB("breadcrumb-item", `
 font-size: var(--n-font-size);
 transition: color .3s var(--n-bezier);
 display: inline-flex;
 align-items: center;
 `, [cB("icon", `
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `), c$1("&:not(:last-child)", [cM("clickable", [cE("link", `
 cursor: pointer;
 `, [c$1("&:hover", `
 background-color: var(--n-item-color-hover);
 `), c$1("&:active", `
 background-color: var(--n-item-color-pressed); 
 `)])])]), cE("link", `
 padding: 4px;
 border-radius: var(--n-item-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 position: relative;
 `, [c$1("&:hover", `
 color: var(--n-item-text-color-hover);
 `, [cB("icon", `
 color: var(--n-item-text-color-hover);
 `)]), c$1("&:active", `
 color: var(--n-item-text-color-pressed);
 `, [cB("icon", `
 color: var(--n-item-text-color-pressed);
 `)])]), cE("separator", `
 margin: 0 8px;
 color: var(--n-separator-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 `), c$1("&:last-child", [cE("link", `
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `, [cB("icon", `
 color: var(--n-item-text-color-active);
 `)]), cE("separator", `
 display: none;
 `)])])]);
const breadcrumbInjectionKey = createInjectionKey("n-breadcrumb");
const breadcrumbProps = Object.assign(Object.assign({}, useTheme.props), {
  separator: {
    type: String,
    default: "/"
  }
});
const NBreadcrumb = defineComponent({
  name: "Breadcrumb",
  props: breadcrumbProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Breadcrumb", "-breadcrumb", style, breadcrumbLight, props, mergedClsPrefixRef);
    provide(breadcrumbInjectionKey, {
      separatorRef: toRef(props, "separator"),
      mergedClsPrefixRef
    });
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          separatorColor,
          itemTextColor,
          itemTextColorHover,
          itemTextColorPressed,
          itemTextColorActive,
          fontSize,
          fontWeightActive,
          itemBorderRadius,
          itemColorHover,
          itemColorPressed,
          itemLineHeight
        }
      } = themeRef.value;
      return {
        "--n-font-size": fontSize,
        "--n-bezier": cubicBezierEaseInOut,
        "--n-item-text-color": itemTextColor,
        "--n-item-text-color-hover": itemTextColorHover,
        "--n-item-text-color-pressed": itemTextColorPressed,
        "--n-item-text-color-active": itemTextColorActive,
        "--n-separator-color": separatorColor,
        "--n-item-color-hover": itemColorHover,
        "--n-item-color-pressed": itemColorPressed,
        "--n-item-border-radius": itemBorderRadius,
        "--n-font-weight-active": fontWeightActive,
        "--n-item-line-height": itemLineHeight
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("breadcrumb", void 0, cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h("nav", {
      class: [`${this.mergedClsPrefix}-breadcrumb`, this.themeClass],
      style: this.cssVars,
      "aria-label": "Breadcrumb"
    }, h("ul", null, this.$slots));
  }
});
function useBrowserLocation(customWindow = null) {
  const getWindowLocation = () => {
    const {
      hash,
      host,
      hostname,
      href,
      origin,
      pathname,
      port,
      protocol,
      search
    } = (customWindow === null || customWindow === void 0 ? void 0 : customWindow.location) || {};
    return {
      hash,
      host,
      hostname,
      href,
      origin,
      pathname,
      port,
      protocol,
      search
    };
  };
  const locationState = ref(getWindowLocation());
  return locationState;
}
const breadcrumbItemProps = {
  separator: String,
  href: String,
  clickable: {
    type: Boolean,
    default: true
  },
  onClick: Function
};
const NBreadcrumbItem = defineComponent({
  name: "BreadcrumbItem",
  props: breadcrumbItemProps,
  slots: Object,
  setup(props, {
    slots
  }) {
    const NBreadcrumb2 = inject(breadcrumbInjectionKey, null);
    if (!NBreadcrumb2) {
      return () => null;
    }
    const {
      separatorRef,
      mergedClsPrefixRef
    } = NBreadcrumb2;
    const browserLocationRef = useBrowserLocation();
    const htmlTagRef = computed(() => props.href ? "a" : "span");
    const ariaCurrentRef = computed(() => browserLocationRef.value.href === props.href ? "location" : null);
    return () => {
      const {
        value: mergedClsPrefix
      } = mergedClsPrefixRef;
      return h("li", {
        class: [`${mergedClsPrefix}-breadcrumb-item`, props.clickable && `${mergedClsPrefix}-breadcrumb-item--clickable`]
      }, h(htmlTagRef.value, {
        class: `${mergedClsPrefix}-breadcrumb-item__link`,
        "aria-current": ariaCurrentRef.value,
        href: props.href,
        onClick: props.onClick
      }, slots), h("span", {
        class: `${mergedClsPrefix}-breadcrumb-item__separator`,
        "aria-hidden": "true"
      }, resolveSlot(slots.separator, () => {
        var _a;
        return [(_a = props.separator) !== null && _a !== void 0 ? _a : separatorRef.value];
      })));
    };
  }
});

export { NBreadcrumb as N, NBreadcrumbItem as a };
//# sourceMappingURL=BreadcrumbItem-Chy8wlZY.mjs.map
