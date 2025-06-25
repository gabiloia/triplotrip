import { defineComponent, computed, h, Fragment } from 'vue';
import { v as useConfig, x as useTheme, bg as thingLight, k as cB, Y as useRtl, z as useThemeClass, n as cE, m as c$1 } from './server.mjs';

const style = cB("thing", `
 display: flex;
 transition: color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 color: var(--n-text-color);
`, [cB("thing-avatar", `
 margin-right: 12px;
 margin-top: 2px;
 `), cB("thing-avatar-header-wrapper", `
 display: flex;
 flex-wrap: nowrap;
 `, [cB("thing-header-wrapper", `
 flex: 1;
 `)]), cB("thing-main", `
 flex-grow: 1;
 `, [cB("thing-header", `
 display: flex;
 margin-bottom: 4px;
 justify-content: space-between;
 align-items: center;
 `, [cE("title", `
 font-size: 16px;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-title-text-color);
 `)]), cE("description", [c$1("&:not(:last-child)", `
 margin-bottom: 4px;
 `)]), cE("content", [c$1("&:not(:first-child)", `
 margin-top: 12px;
 `)]), cE("footer", [c$1("&:not(:first-child)", `
 margin-top: 12px;
 `)]), cE("action", [c$1("&:not(:first-child)", `
 margin-top: 12px;
 `)])])]);
const thingProps = Object.assign(Object.assign({}, useTheme.props), {
  title: String,
  titleExtra: String,
  description: String,
  descriptionClass: String,
  descriptionStyle: [String, Object],
  content: String,
  contentClass: String,
  contentStyle: [String, Object],
  contentIndented: Boolean
});
const NThing = defineComponent({
  name: "Thing",
  props: thingProps,
  slots: Object,
  setup(props, {
    slots
  }) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled,
      mergedRtlRef
    } = useConfig(props);
    const themeRef = useTheme("Thing", "-thing", style, thingLight, props, mergedClsPrefixRef);
    const rtlEnabledRef = useRtl("Thing", mergedRtlRef, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        self: {
          titleTextColor,
          textColor,
          titleFontWeight,
          fontSize
        },
        common: {
          cubicBezierEaseInOut
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-font-size": fontSize,
        "--n-text-color": textColor,
        "--n-title-font-weight": titleFontWeight,
        "--n-title-text-color": titleTextColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("thing", void 0, cssVarsRef, props) : void 0;
    return () => {
      var _a;
      const {
        value: mergedClsPrefix
      } = mergedClsPrefixRef;
      const rtlEnabled = rtlEnabledRef ? rtlEnabledRef.value : false;
      (_a = themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender) === null || _a === void 0 ? void 0 : _a.call(themeClassHandle);
      return h("div", {
        class: [`${mergedClsPrefix}-thing`, themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass, rtlEnabled && `${mergedClsPrefix}-thing--rtl`],
        style: inlineThemeDisabled ? void 0 : cssVarsRef.value
      }, slots.avatar && props.contentIndented ? h("div", {
        class: `${mergedClsPrefix}-thing-avatar`
      }, slots.avatar()) : null, h("div", {
        class: `${mergedClsPrefix}-thing-main`
      }, !props.contentIndented && (slots.header || props.title || slots["header-extra"] || props.titleExtra || slots.avatar) ? h("div", {
        class: `${mergedClsPrefix}-thing-avatar-header-wrapper`
      }, slots.avatar ? h("div", {
        class: `${mergedClsPrefix}-thing-avatar`
      }, slots.avatar()) : null, slots.header || props.title || slots["header-extra"] || props.titleExtra ? h("div", {
        class: `${mergedClsPrefix}-thing-header-wrapper`
      }, h("div", {
        class: `${mergedClsPrefix}-thing-header`
      }, slots.header || props.title ? h("div", {
        class: `${mergedClsPrefix}-thing-header__title`
      }, slots.header ? slots.header() : props.title) : null, slots["header-extra"] || props.titleExtra ? h("div", {
        class: `${mergedClsPrefix}-thing-header__extra`
      }, slots["header-extra"] ? slots["header-extra"]() : props.titleExtra) : null), slots.description || props.description ? h("div", {
        class: [`${mergedClsPrefix}-thing-main__description`, props.descriptionClass],
        style: props.descriptionStyle
      }, slots.description ? slots.description() : props.description) : null) : null) : h(Fragment, null, slots.header || props.title || slots["header-extra"] || props.titleExtra ? h("div", {
        class: `${mergedClsPrefix}-thing-header`
      }, slots.header || props.title ? h("div", {
        class: `${mergedClsPrefix}-thing-header__title`
      }, slots.header ? slots.header() : props.title) : null, slots["header-extra"] || props.titleExtra ? h("div", {
        class: `${mergedClsPrefix}-thing-header__extra`
      }, slots["header-extra"] ? slots["header-extra"]() : props.titleExtra) : null) : null, slots.description || props.description ? h("div", {
        class: [`${mergedClsPrefix}-thing-main__description`, props.descriptionClass],
        style: props.descriptionStyle
      }, slots.description ? slots.description() : props.description) : null), slots.default || props.content ? h("div", {
        class: [`${mergedClsPrefix}-thing-main__content`, props.contentClass],
        style: props.contentStyle
      }, slots.default ? slots.default() : props.content) : null, slots.footer ? h("div", {
        class: `${mergedClsPrefix}-thing-main__footer`
      }, slots.footer()) : null, slots.action ? h("div", {
        class: `${mergedClsPrefix}-thing-main__action`
      }, slots.action()) : null));
    };
  }
});

export { NThing as N };
//# sourceMappingURL=Thing-BCT0vZnI.mjs.map
