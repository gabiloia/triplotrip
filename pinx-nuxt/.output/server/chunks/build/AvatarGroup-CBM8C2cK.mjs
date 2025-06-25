import { defineComponent, h, provide, computed } from 'vue';
import { d as NAvatar, v as useConfig, x as useTheme, b1 as avatarGroupLight, k as cB, b0 as avatarGroupInjectionKey, Y as useRtl, l as cM, p as cNotM, m as c$1 } from './server.mjs';

const style = cB("avatar-group", `
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`, [cM("expand-on-hover", [cB("avatar", [c$1("&:not(:first-child)", `
 transition: margin .3s var(--n-bezier);
 `)]), c$1("&:hover", [cNotM("vertical", [cB("avatar", [c$1("&:not(:first-child)", `
 margin-left: 0 !important;
 `)])]), cM("vertical", [cB("avatar", [c$1("&:not(:first-child)", `
 margin-top: 0 !important;
 `)])])])]), cNotM("vertical", `
 flex-direction: row;
 `, [cB("avatar", [c$1("&:not(:first-child)", `
 margin-left: var(--n-gap);
 `)])]), cM("vertical", `
 flex-direction: column;
 `, [cB("avatar", [c$1("&:not(:first-child)", `
 margin-top: var(--n-gap);
 `)])])]);
const avatarGroupProps = Object.assign(Object.assign({}, useTheme.props), {
  max: Number,
  maxStyle: [Object, String],
  options: {
    type: Array,
    default: () => []
  },
  vertical: Boolean,
  expandOnHover: Boolean,
  size: [String, Number]
});
const NAvatarGroup = defineComponent({
  name: "AvatarGroup",
  props: avatarGroupProps,
  slots: Object,
  setup(props) {
    const {
      mergedClsPrefixRef,
      mergedRtlRef
    } = useConfig(props);
    const mergedThemeRef = useTheme("AvatarGroup", "-avatar-group", style, avatarGroupLight, props, mergedClsPrefixRef);
    provide(avatarGroupInjectionKey, props);
    const rtlEnabledRef = useRtl("AvatarGroup", mergedRtlRef, mergedClsPrefixRef);
    const restOptionsRef = computed(() => {
      const {
        max
      } = props;
      if (max === void 0) return void 0;
      const {
        options
      } = props;
      if (options.length > max) return options.slice(max - 1, options.length);
      return [];
    });
    const displayedOptionsRef = computed(() => {
      const {
        options,
        max
      } = props;
      if (max === void 0) return options;
      if (options.length > max) return options.slice(0, max - 1);
      if (options.length === max) return options.slice(0, max);
      return options;
    });
    return {
      mergedTheme: mergedThemeRef,
      rtlEnabled: rtlEnabledRef,
      mergedClsPrefix: mergedClsPrefixRef,
      restOptions: restOptionsRef,
      displayedOptions: displayedOptionsRef,
      cssVars: computed(() => {
        return {
          "--n-gap": mergedThemeRef.value.self.gap
        };
      })
    };
  },
  render() {
    const {
      mergedClsPrefix,
      displayedOptions,
      restOptions,
      mergedTheme,
      $slots
    } = this;
    return h("div", {
      class: [`${mergedClsPrefix}-avatar-group`, this.rtlEnabled && `${mergedClsPrefix}-avatar-group--rtl`, this.vertical && `${mergedClsPrefix}-avatar-group--vertical`, this.expandOnHover && `${mergedClsPrefix}-avatar-group--expand-on-hover`],
      style: this.cssVars,
      role: "group"
    }, displayedOptions.map((option) => {
      return $slots.avatar ? $slots.avatar({
        option
      }) : h(NAvatar, {
        src: option.src,
        theme: mergedTheme.peers.Avatar,
        themeOverrides: mergedTheme.peerOverrides.Avatar
      });
    }), restOptions !== void 0 && restOptions.length > 0 && ($slots.rest ? $slots.rest({
      options: restOptions,
      rest: restOptions.length
    }) : h(NAvatar, {
      style: this.maxStyle,
      theme: mergedTheme.peers.Avatar,
      themeOverrides: mergedTheme.peerOverrides.Avatar
    }, {
      default: () => `+${restOptions.length}`
    })));
  }
});

export { NAvatarGroup as N };
//# sourceMappingURL=AvatarGroup-CBM8C2cK.mjs.map
