import { defineComponent, ref, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, h, watch, withKeys, renderSlot, createBlock, createCommentVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot, ssrRenderAttr, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { a as _export_sfc, ab as useThemeStore, B as Button, _ as _sfc_main$o, aE as Logo, G as NFadeInExpandTransition, v as useConfig, x as useTheme, aB as collapseTransitionLight, k as cB, Y as useRtl, z as useThemeClass, aC as useMessage, aA as useAuthStore, aD as NDivider, E as fadeInHeightExpandTransition } from './server.mjs';
import { useRouter } from 'vue-router';
import { N as NForm, a as NFormItem } from './FormItem-BD_bmr5c.mjs';
import { N as NInput } from './Input-VW15MloS.mjs';
import { N as NCheckbox } from './Checkbox-bxBkrq-p.mjs';

function assertString(input) {
  if (input === undefined || input === null) throw new TypeError("Expected a string but received a ".concat(input));
  if (input.constructor.name !== 'String') throw new TypeError("Expected a string but received a ".concat(input.constructor.name));
}

function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
}
function checkHost(host, matches) {
  for (var i = 0; i < matches.length; i++) {
    var match = matches[i];
    if (host === match || isRegExp(match) && match.test(host)) {
      return true;
    }
  }
  return false;
}

function _typeof$1(o) { "@babel/helpers - typeof"; return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$1(o); }

/* eslint-disable prefer-rest-params */
function isByteLength(str, options) {
  assertString(str);
  var min;
  var max;
  if (_typeof$1(options) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isByteLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }
  var len = encodeURI(str).split(/%..|./).length - 1;
  return len >= min && (typeof max === 'undefined' || len <= max);
}

function merge() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaults = arguments.length > 1 ? arguments[1] : undefined;
  for (var key in defaults) {
    if (typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
    }
  }
  return obj;
}

var default_fqdn_options = {
  require_tld: true,
  allow_underscores: false,
  allow_trailing_dot: false,
  allow_numeric_tld: false,
  allow_wildcard: false,
  ignore_max_length: false
};
function isFQDN(str, options) {
  assertString(str);
  options = merge(options, default_fqdn_options);

  /* Remove the optional trailing dot before checking validity */
  if (options.allow_trailing_dot && str[str.length - 1] === '.') {
    str = str.substring(0, str.length - 1);
  }

  /* Remove the optional wildcard before checking validity */
  if (options.allow_wildcard === true && str.indexOf('*.') === 0) {
    str = str.substring(2);
  }
  var parts = str.split('.');
  var tld = parts[parts.length - 1];
  if (options.require_tld) {
    // disallow fqdns without tld
    if (parts.length < 2) {
      return false;
    }
    if (!options.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
      return false;
    }

    // disallow spaces
    if (/\s/.test(tld)) {
      return false;
    }
  }

  // reject numeric TLDs
  if (!options.allow_numeric_tld && /^\d+$/.test(tld)) {
    return false;
  }
  return parts.every(function (part) {
    if (part.length > 63 && !options.ignore_max_length) {
      return false;
    }
    if (!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(part)) {
      return false;
    }

    // disallow full-width chars
    if (/[\uff01-\uff5e]/.test(part)) {
      return false;
    }

    // disallow parts starting or ending with hyphen
    if (/^-|-$/.test(part)) {
      return false;
    }
    if (!options.allow_underscores && /_/.test(part)) {
      return false;
    }
    return true;
  });
}

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
11.3.  Examples

   The following addresses

             fe80::1234 (on the 1st link of the node)
             ff02::5678 (on the 5th link of the node)
             ff08::9abc (on the 10th organization of the node)

   would be represented as follows:

             fe80::1234%1
             ff02::5678%5
             ff08::9abc%10

   (Here we assume a natural translation from a zone index to the
   <zone_id> part, where the Nth zone of any scope is translated into
   "N".)

   If we use interface names as <zone_id>, those addresses could also be
   represented as follows:

            fe80::1234%ne0
            ff02::5678%pvc1.3
            ff08::9abc%interface10

   where the interface "ne0" belongs to the 1st link, "pvc1.3" belongs
   to the 5th link, and "interface10" belongs to the 10th organization.
 * * */
var IPv4SegmentFormat = '(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])';
var IPv4AddressFormat = "(".concat(IPv4SegmentFormat, "[.]){3}").concat(IPv4SegmentFormat);
var IPv4AddressRegExp = new RegExp("^".concat(IPv4AddressFormat, "$"));
var IPv6SegmentFormat = '(?:[0-9a-fA-F]{1,4})';
var IPv6AddressRegExp = new RegExp('^(' + "(?:".concat(IPv6SegmentFormat, ":){7}(?:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){6}(?:").concat(IPv4AddressFormat, "|:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){5}(?::").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,2}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){4}(?:(:").concat(IPv6SegmentFormat, "){0,1}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,3}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){3}(?:(:").concat(IPv6SegmentFormat, "){0,2}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,4}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){2}(?:(:").concat(IPv6SegmentFormat, "){0,3}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,5}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){1}(?:(:").concat(IPv6SegmentFormat, "){0,4}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,6}|:)|") + "(?::((?::".concat(IPv6SegmentFormat, "){0,5}:").concat(IPv4AddressFormat, "|(?::").concat(IPv6SegmentFormat, "){1,7}|:))") + ')(%[0-9a-zA-Z.]{1,})?$');
function isIP(ipAddress) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  assertString(ipAddress);

  // accessing 'arguments' for backwards compatibility: isIP(ipAddress [, version])
  // eslint-disable-next-line prefer-rest-params
  var version = (_typeof(options) === 'object' ? options.version : arguments[1]) || '';
  if (!version) {
    return isIP(ipAddress, {
      version: 4
    }) || isIP(ipAddress, {
      version: 6
    });
  }
  if (version.toString() === '4') {
    return IPv4AddressRegExp.test(ipAddress);
  }
  if (version.toString() === '6') {
    return IPv6AddressRegExp.test(ipAddress);
  }
  return false;
}

var default_email_options = {
  allow_display_name: false,
  allow_underscores: false,
  require_display_name: false,
  allow_utf8_local_part: true,
  require_tld: true,
  blacklisted_chars: '',
  ignore_max_length: false,
  host_blacklist: [],
  host_whitelist: []
};

/* eslint-disable max-len */
/* eslint-disable no-control-regex */
var splitNameAddress = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i;
var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
var gmailUserPart = /^[a-z\d]+$/;
var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A1-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
var defaultMaxEmailLength = 254;
/* eslint-enable max-len */
/* eslint-enable no-control-regex */

/**
 * Validate display name according to the RFC2822: https://tools.ietf.org/html/rfc2822#appendix-A.1.2
 * @param {String} display_name
 */
function validateDisplayName(display_name) {
  var display_name_without_quotes = display_name.replace(/^"(.+)"$/, '$1');
  // display name with only spaces is not valid
  if (!display_name_without_quotes.trim()) {
    return false;
  }

  // check whether display name contains illegal character
  var contains_illegal = /[\.";<>]/.test(display_name_without_quotes);
  if (contains_illegal) {
    // if contains illegal characters,
    // must to be enclosed in double-quotes, otherwise it's not a valid display name
    if (display_name_without_quotes === display_name) {
      return false;
    }

    // the quotes in display name must start with character symbol \
    var all_start_with_back_slash = display_name_without_quotes.split('"').length === display_name_without_quotes.split('\\"').length;
    if (!all_start_with_back_slash) {
      return false;
    }
  }
  return true;
}
function isEmail(str, options) {
  assertString(str);
  options = merge(options, default_email_options);
  if (options.require_display_name || options.allow_display_name) {
    var display_email = str.match(splitNameAddress);
    if (display_email) {
      var display_name = display_email[1];

      // Remove display name and angle brackets to get email address
      // Can be done in the regex but will introduce a ReDOS (See  #1597 for more info)
      str = str.replace(display_name, '').replace(/(^<|>$)/g, '');

      // sometimes need to trim the last space to get the display name
      // because there may be a space between display name and email address
      // eg. myname <address@gmail.com>
      // the display name is `myname` instead of `myname `, so need to trim the last space
      if (display_name.endsWith(' ')) {
        display_name = display_name.slice(0, -1);
      }
      if (!validateDisplayName(display_name)) {
        return false;
      }
    } else if (options.require_display_name) {
      return false;
    }
  }
  if (!options.ignore_max_length && str.length > defaultMaxEmailLength) {
    return false;
  }
  var parts = str.split('@');
  var domain = parts.pop();
  var lower_domain = domain.toLowerCase();
  if (options.host_blacklist.length > 0 && checkHost(lower_domain, options.host_blacklist)) {
    return false;
  }
  if (options.host_whitelist.length > 0 && !checkHost(lower_domain, options.host_whitelist)) {
    return false;
  }
  var user = parts.join('@');
  if (options.domain_specific_validation && (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com')) {
    /*
    Previously we removed dots for gmail addresses before validating.
    This was removed because it allows `multiple..dots@gmail.com`
    to be reported as valid, but it is not.
    Gmail only normalizes single dots, removing them from here is pointless,
    should be done in normalizeEmail
    */
    user = user.toLowerCase();

    // Removing sub-address from username before gmail validation
    var username = user.split('+')[0];

    // Dots are not included in gmail length restriction
    if (!isByteLength(username.replace(/\./g, ''), {
      min: 6,
      max: 30
    })) {
      return false;
    }
    var _user_parts = username.split('.');
    for (var i = 0; i < _user_parts.length; i++) {
      if (!gmailUserPart.test(_user_parts[i])) {
        return false;
      }
    }
  }
  if (options.ignore_max_length === false && (!isByteLength(user, {
    max: 64
  }) || !isByteLength(domain, {
    max: 254
  }))) {
    return false;
  }
  if (!isFQDN(domain, {
    require_tld: options.require_tld,
    ignore_max_length: options.ignore_max_length,
    allow_underscores: options.allow_underscores
  })) {
    if (!options.allow_ip_domain) {
      return false;
    }
    if (!isIP(domain)) {
      if (!domain.startsWith('[') || !domain.endsWith(']')) {
        return false;
      }
      var noBracketdomain = domain.slice(1, -1);
      if (noBracketdomain.length === 0 || !isIP(noBracketdomain)) {
        return false;
      }
    }
  }
  if (options.blacklisted_chars) {
    if (user.search(new RegExp("[".concat(options.blacklisted_chars, "]+"), 'g')) !== -1) return false;
  }
  if (user[0] === '"' && user[user.length - 1] === '"') {
    user = user.slice(1, user.length - 1);
    return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
  }
  var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;
  var user_parts = user.split('.');
  for (var _i = 0; _i < user_parts.length; _i++) {
    if (!pattern.test(user_parts[_i])) {
      return false;
    }
  }
  return true;
}

const style = cB("collapse-transition", {
  width: "100%"
}, [fadeInHeightExpandTransition()]);
const collapseTransitionProps = Object.assign(Object.assign({}, useTheme.props), {
  show: {
    type: Boolean,
    default: true
  },
  appear: Boolean,
  // The collapsed is implemented with mistake, collapsed=true would make it show
  // However there's no possibility to change so I just let it deprecated and use
  // `show` prop instead.
  /** @deprecated */
  collapsed: {
    type: Boolean,
    default: void 0
  }
});
const NCollapseTransition = defineComponent({
  name: "CollapseTransition",
  props: collapseTransitionProps,
  inheritAttrs: false,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled,
      mergedRtlRef
    } = useConfig(props);
    const mergedThemeRef = useTheme("CollapseTransition", "-collapse-transition", style, collapseTransitionLight, props, mergedClsPrefixRef);
    const rtlEnabledRef = useRtl("CollapseTransition", mergedRtlRef, mergedClsPrefixRef);
    const mergedShowRef = computed(() => {
      if (props.collapsed !== void 0) {
        return props.collapsed;
      }
      return props.show;
    });
    const cssVarsRef = computed(() => {
      const {
        self: {
          bezier
        }
      } = mergedThemeRef.value;
      return {
        "--n-bezier": bezier
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("collapse-transition", void 0, cssVarsRef, props) : void 0;
    return {
      rtlEnabled: rtlEnabledRef,
      mergedShow: mergedShowRef,
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    return h(NFadeInExpandTransition, {
      appear: this.appear
    }, {
      default: () => {
        var _a;
        if (!this.mergedShow) return;
        (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
        return h(
          "div",
          // Don't use jsx since it would cause useless spread in each rendering
          mergeProps({
            class: [`${this.mergedClsPrefix}-collapse-transition`, this.rtlEnabled && `${this.mergedClsPrefix}-collapse-transition--rtl`, this.themeClass],
            style: this.cssVars
          }, this.$attrs),
          this.$slots
        );
      }
    });
  }
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ForgotPassword",
  __ssrInlineRender: true,
  setup(__props) {
    const formRef = ref(null);
    const message = useMessage();
    const model = ref({
      email: null
    });
    const rules = {
      email: [
        {
          required: true,
          trigger: ["blur"],
          message: "The email is mandatory"
        },
        {
          validator: (rule, value) => {
            return isEmail(value);
          },
          message: "The email is not formatted correctly",
          trigger: ["blur"]
        }
      ]
    };
    const isValid = computed(() => {
      return isEmail(model.value.email || "");
    });
    function forgotPassword(e) {
      var _a;
      e.preventDefault();
      (_a = formRef.value) == null ? void 0 : _a.validate((errors) => {
        if (!errors) {
          message.success("Reset Link sent");
        }
      });
    }
    watch(isValid, (val) => {
      var _a;
      if (val) {
        (_a = formRef.value) == null ? void 0 : _a.validate();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(NForm), {
        ref_key: "formRef",
        ref: formRef,
        model: model.value,
        rules
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NFormItem), {
              path: "email",
              label: "Email",
              first: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NInput), {
                    value: model.value.email,
                    "onUpdate:value": ($event) => model.value.email = $event,
                    placeholder: "Input your email",
                    size: "large",
                    onKeydown: forgotPassword
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NInput), {
                      value: model.value.email,
                      "onUpdate:value": ($event) => model.value.email = $event,
                      placeholder: "Input your email",
                      size: "large",
                      onKeydown: withKeys(forgotPassword, ["enter"])
                    }, null, 8, ["value", "onUpdate:value"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex flex-col items-end gap-6"${_scopeId}><div class="w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Button), {
              type: "primary",
              class: "w-full!",
              size: "large",
              disabled: !isValid.value,
              onClick: forgotPassword
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Send Reset Link `);
                } else {
                  return [
                    createTextVNode(" Send Reset Link ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode(unref(NFormItem), {
                path: "email",
                label: "Email",
                first: ""
              }, {
                default: withCtx(() => [
                  createVNode(unref(NInput), {
                    value: model.value.email,
                    "onUpdate:value": ($event) => model.value.email = $event,
                    placeholder: "Input your email",
                    size: "large",
                    onKeydown: withKeys(forgotPassword, ["enter"])
                  }, null, 8, ["value", "onUpdate:value"])
                ]),
                _: 1
              }),
              createVNode("div", { class: "flex flex-col items-end gap-6" }, [
                createVNode("div", { class: "w-full" }, [
                  createVNode(unref(Button), {
                    type: "primary",
                    class: "w-full!",
                    size: "large",
                    disabled: !isValid.value,
                    onClick: forgotPassword
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Send Reset Link ")
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ])
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/auth/ForgotPassword.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _imports_0 = "data:image/svg+xml,%3csvg%20width='29'%20height='29'%20viewBox='0%200%2029%2029'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Google%20'%20clip-path='url(%23clip0_128_92)'%3e%3cpath%20id='Vector'%20d='M28.227%2014.7976C28.227%2013.8459%2028.1499%2012.8891%2027.9852%2011.9528H14.78V17.344H22.342C22.0282%2019.0827%2021.02%2020.6208%2019.5436%2021.5982V25.0963H24.055C26.7043%2022.6579%2028.227%2019.057%2028.227%2014.7976Z'%20fill='%234285F4'/%3e%3cpath%20id='Vector_2'%20d='M14.78%2028.4761C18.5558%2028.4761%2021.7401%2027.2363%2024.0602%2025.0963L19.5487%2021.5982C18.2935%2022.4522%2016.673%2022.9357%2014.7851%2022.9357C11.1327%2022.9357%208.0359%2020.4717%206.92475%2017.1588H2.26923V20.7649C4.64586%2025.4924%209.48657%2028.4761%2014.78%2028.4761V28.4761Z'%20fill='%2334A853'/%3e%3cpath%20id='Vector_3'%20d='M6.91963%2017.1588C6.33319%2015.42%206.33319%2013.5372%206.91963%2011.7985V8.19238H2.26925C0.283581%2012.1483%200.283581%2016.809%202.26925%2020.7649L6.91963%2017.1588V17.1588Z'%20fill='%23FBBC04'/%3e%3cpath%20id='Vector_4'%20d='M14.78%206.01637C16.7759%205.9855%2018.705%206.73656%2020.1505%208.11521L24.1476%204.11815C21.6166%201.74152%2018.2575%200.434887%2014.78%200.476041C9.48657%200.476041%204.64586%203.45969%202.26923%208.19238L6.9196%2011.7985C8.02561%208.48045%2011.1276%206.01637%2014.78%206.01637V6.01637Z'%20fill='%23EA4335'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_128_92'%3e%3crect%20width='28'%20height='28'%20fill='white'%20transform='translate(0.5%200.475098)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SignIn",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const formRef = ref(null);
    const message = useMessage();
    const authStore = useAuthStore();
    const model = ref({
      email: "",
      password: ""
    });
    const rules = {
      email: [
        { required: true, trigger: ["blur"], message: "Email es un campo requerido" },
        {
          validator: (rule, value) => isEmail(value || ""),
          message: "Invalid email format",
          trigger: ["blur"]
        }
      ],
      password: [{ required: true, trigger: ["blur"], message: "Password es un campo requerido" }]
    };
    const isValid = computed(() => {
      return !!model.value.password && isEmail(model.value.email || "");
    });
    async function signIn(e) {
      var _a;
      e.preventDefault();
      (_a = formRef.value) == null ? void 0 : _a.validate(async (errors) => {
        if (!errors) {
          try {
            const res = await $fetch("https://admin.triplotrip.com/api/auth/local", {
              method: "POST",
              body: {
                identifier: model.value.email,
                password: model.value.password
              }
            });
            if (res.jwt && res.user) {
              localStorage.setItem("auth_token", res.jwt);
              authStore.setLogged(res.user);
              message.success("Login exitoso");
              router.push({ path: "/dashboard/analytics" });
            }
          } catch (err) {
            console.error("Login error:", err);
            message.error("Credenciales inv\xE1lidas");
          }
        } else {
          message.error("Datos incompletos o inv\xE1lidos");
        }
      });
    }
    watch(isValid, (val) => {
      var _a;
      if (val) (_a = formRef.value) == null ? void 0 : _a.validate();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(NForm), {
        ref_key: "formRef",
        ref: formRef,
        model: model.value,
        rules
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NFormItem), {
              path: "email",
              label: "Email",
              first: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NInput), {
                    value: model.value.email,
                    "onUpdate:value": ($event) => model.value.email = $event,
                    placeholder: "Insert your email",
                    size: "large",
                    autocomplete: "on",
                    onKeydown: signIn
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NInput), {
                      value: model.value.email,
                      "onUpdate:value": ($event) => model.value.email = $event,
                      placeholder: "Insert your email",
                      size: "large",
                      autocomplete: "on",
                      onKeydown: withKeys(signIn, ["enter"])
                    }, null, 8, ["value", "onUpdate:value"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NFormItem), {
              path: "password",
              label: "Password"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NInput), {
                    value: model.value.password,
                    "onUpdate:value": ($event) => model.value.password = $event,
                    type: "password",
                    "show-password-on": "click",
                    placeholder: "Insert your password",
                    autocomplete: "on",
                    size: "large",
                    onKeydown: signIn
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NInput), {
                      value: model.value.password,
                      "onUpdate:value": ($event) => model.value.password = $event,
                      type: "password",
                      "show-password-on": "click",
                      placeholder: "Insert your password",
                      autocomplete: "on",
                      size: "large",
                      onKeydown: withKeys(signIn, ["enter"])
                    }, null, 8, ["value", "onUpdate:value"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex flex-col items-end gap-6"${_scopeId}><div class="flex w-full justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(NCheckbox), { size: "large" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Recordame`);
                } else {
                  return [
                    createTextVNode("Recordame")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            ssrRenderSlot(_ctx.$slots, "extra-actions", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div><div class="w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Button), {
              type: "primary",
              class: "w-full!",
              size: "large",
              disabled: !isValid.value,
              onClick: signIn
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Sign in `);
                } else {
                  return [
                    createTextVNode(" Sign in ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode(unref(NFormItem), {
                path: "email",
                label: "Email",
                first: ""
              }, {
                default: withCtx(() => [
                  createVNode(unref(NInput), {
                    value: model.value.email,
                    "onUpdate:value": ($event) => model.value.email = $event,
                    placeholder: "Insert your email",
                    size: "large",
                    autocomplete: "on",
                    onKeydown: withKeys(signIn, ["enter"])
                  }, null, 8, ["value", "onUpdate:value"])
                ]),
                _: 1
              }),
              createVNode(unref(NFormItem), {
                path: "password",
                label: "Password"
              }, {
                default: withCtx(() => [
                  createVNode(unref(NInput), {
                    value: model.value.password,
                    "onUpdate:value": ($event) => model.value.password = $event,
                    type: "password",
                    "show-password-on": "click",
                    placeholder: "Insert your password",
                    autocomplete: "on",
                    size: "large",
                    onKeydown: withKeys(signIn, ["enter"])
                  }, null, 8, ["value", "onUpdate:value"])
                ]),
                _: 1
              }),
              createVNode("div", { class: "flex flex-col items-end gap-6" }, [
                createVNode("div", { class: "flex w-full justify-between" }, [
                  createVNode(unref(NCheckbox), { size: "large" }, {
                    default: withCtx(() => [
                      createTextVNode("Recordame")
                    ]),
                    _: 1
                  }),
                  renderSlot(_ctx.$slots, "extra-actions")
                ]),
                createVNode("div", { class: "w-full" }, [
                  createVNode(unref(Button), {
                    type: "primary",
                    class: "w-full!",
                    size: "large",
                    disabled: !isValid.value,
                    onClick: signIn
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Sign in ")
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(NDivider), { "title-placement": "center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Or`);
          } else {
            return [
              createTextVNode("Or")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="social-btns mb-12 flex flex-col gap-4">`);
      _push(ssrRenderComponent(unref(Button), {
        strong: "",
        secondary: "",
        size: "large"
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img alt="google-icon" class="block h-5"${ssrRenderAttr("src", _imports_0)}${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                alt: "google-icon",
                class: "block h-5",
                src: _imports_0
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="px-2"${_scopeId}>Ingres\xE1 con Google</span>`);
          } else {
            return [
              createVNode("span", { class: "px-2" }, "Ingres\xE1 con Google")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      ssrRenderSlot(_ctx.$slots, "bottom-area", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/auth/SignIn.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PasswordStrengthMeter",
  __ssrInlineRender: true,
  props: {
    password: {},
    minLength: { default: 8 },
    lowercase: { type: Boolean, default: true },
    uppercase: { type: Boolean, default: true },
    number: { type: Boolean, default: true },
    special: { type: [String, Boolean], default: true },
    showMeter: { type: Boolean, default: true },
    showList: { type: Boolean, default: true }
  },
  emits: ["score", "strength"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const specialString = computed(() => typeof __props.special === "string" ? __props.special : "!@#$%^&*");
    const hasLength = computed(() => __props.password.length >= __props.minLength);
    const hasLower = computed(() => /[a-z]/.test(__props.password));
    const hasUpper = computed(() => /[A-Z]/.test(__props.password));
    const hasNumber = computed(() => /\d/.test(__props.password));
    const hasSpecial = computed(() => new RegExp(`[${specialString.value}]`).test(__props.password));
    const maxScore = computed(() => {
      let score2 = 0;
      if (__props.minLength) score2++;
      if (__props.lowercase) score2++;
      if (__props.uppercase) score2++;
      if (__props.number) score2++;
      if (__props.special) score2++;
      return score2;
    });
    const score = computed(() => {
      let score2 = 0;
      if (__props.minLength && hasLength.value) score2++;
      if (__props.lowercase && hasLower.value) score2++;
      if (__props.uppercase && hasUpper.value) score2++;
      if (__props.number && hasNumber.value) score2++;
      if (__props.special && hasSpecial.value) score2++;
      return score2;
    });
    const strength = computed(() => score.value / maxScore.value * 100);
    function getStatus(index) {
      const indexStrength = index / maxScore.value * 100;
      if (indexStrength <= strength.value) {
        if (strength.value === 100) return "bg-success";
        if (strength.value > 50) return "bg-warning";
        if (strength.value) return "bg-error";
      }
      return "bg-border";
    }
    watch(
      [score, strength],
      ([valScore, valStrength]) => {
        emit("score", valScore);
        emit("strength", valStrength);
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-4" }, _attrs))}>`);
      if (_ctx.showMeter) {
        _push(`<div class="flex h-2 w-full items-center gap-2"><!--[-->`);
        ssrRenderList(maxScore.value, (index) => {
          _push(`<div class="${ssrRenderClass([getStatus(index), "h-full grow rounded-sm"])}"></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.showList) {
        _push(`<div class="flex flex-col gap-3">`);
        if (_ctx.minLength) {
          _push(`<div class="flex items-center gap-2">`);
          _push(ssrRenderComponent(_sfc_main$o, {
            size: 18,
            name: hasLength.value ? "solar:check-square-bold-duotone" : "solar:close-square-bold-duotone",
            class: [hasLength.value ? "text-success/50" : "text-tertiary/50"]
          }, null, _parent));
          _push(`<span class="text-sm">At least 8 characters</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.lowercase) {
          _push(`<div class="flex items-center gap-2">`);
          _push(ssrRenderComponent(_sfc_main$o, {
            size: 18,
            name: hasLower.value ? "solar:check-square-bold-duotone" : "solar:close-square-bold-duotone",
            class: [hasLower.value ? "text-success/50" : "text-tertiary/50"]
          }, null, _parent));
          _push(`<span class="text-sm">At least 1 lowercase character</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.uppercase) {
          _push(`<div class="flex items-center gap-2">`);
          _push(ssrRenderComponent(_sfc_main$o, {
            size: 18,
            name: hasUpper.value ? "solar:check-square-bold-duotone" : "solar:close-square-bold-duotone",
            class: [hasUpper.value ? "text-success/50" : "text-tertiary/50"]
          }, null, _parent));
          _push(`<span class="text-sm">At least 1 Uppercase character</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.number) {
          _push(`<div class="flex items-center gap-2">`);
          _push(ssrRenderComponent(_sfc_main$o, {
            size: 18,
            name: hasNumber.value ? "solar:check-square-bold-duotone" : "solar:close-square-bold-duotone",
            class: [hasNumber.value ? "text-success/50" : "text-tertiary/50"]
          }, null, _parent));
          _push(`<span class="text-sm">At least 1 number</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.special) {
          _push(`<div class="flex items-center gap-2">`);
          _push(ssrRenderComponent(_sfc_main$o, {
            size: 18,
            name: hasSpecial.value ? "solar:check-square-bold-duotone" : "solar:close-square-bold-duotone",
            class: [hasSpecial.value ? "text-success/50" : "text-tertiary/50"]
          }, null, _parent));
          _push(`<span class="text-sm"> At least 1 special character <code>${ssrInterpolate(specialString.value)}</code></span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/PasswordStrengthMeter.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SignUp",
  __ssrInlineRender: true,
  setup(__props) {
    const formRef = ref(null);
    const passwordStrength = ref(0);
    const model = ref({
      email: null,
      password: null,
      confirmPassword: null
    });
    const rules = {
      email: [
        { required: true, trigger: ["blur"], message: "Email is required" },
        {
          validator: (rule, value) => isEmail(value || ""),
          message: "The email is not formatted correctly",
          trigger: ["blur"]
        }
      ],
      password: [
        { required: true, trigger: ["blur"], message: "Password is required" }
      ],
      confirmPassword: [
        { required: true, trigger: ["blur"], message: "confirmPassword is required" },
        {
          validator: (rule, value) => {
            return value === model.value.password;
          },
          message: "Passwords do not match",
          trigger: ["blur"]
        }
      ]
    };
    const isValid = computed(() => {
      return isEmail(model.value.email || "") && model.value.password && model.value.confirmPassword && model.value.password === model.value.confirmPassword && passwordStrength.value === 100;
    });
    const message = useMessage();
    const router = useRouter();
    async function register() {
      var _a;
      (_a = formRef.value) == null ? void 0 : _a.validate(async (errors) => {
        var _a2, _b;
        if (!errors) {
          try {
            const response = await $fetch("https://admin.triplotrip.com/api/auth/local/register", {
              method: "POST",
              body: {
                username: model.value.email,
                email: model.value.email,
                password: model.value.password
              }
            });
            if (response.jwt) {
              localStorage.setItem("auth_token", response.jwt);
              message.success("Cuenta creada con \xE9xito");
              router.push("/dashboard/analytics");
            }
          } catch (err) {
            console.error(err);
            message.error(((_b = (_a2 = err == null ? void 0 : err.data) == null ? void 0 : _a2.error) == null ? void 0 : _b.message) || "Error al registrar usuario");
          }
        } else {
          message.error("Por favor complet\xE1 los campos correctamente.");
        }
      });
    }
    watch(isValid, (val) => {
      var _a;
      if (val) {
        (_a = formRef.value) == null ? void 0 : _a.validate();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(NForm), {
        ref_key: "formRef",
        ref: formRef,
        model: model.value,
        rules
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NFormItem), {
              path: "email",
              label: "Email",
              first: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NInput), {
                    value: model.value.email,
                    "onUpdate:value": ($event) => model.value.email = $event,
                    size: "large",
                    placeholder: "Insert the email"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NInput), {
                      value: model.value.email,
                      "onUpdate:value": ($event) => model.value.email = $event,
                      size: "large",
                      placeholder: "Insert the email"
                    }, null, 8, ["value", "onUpdate:value"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NFormItem), {
              path: "password",
              label: "Password"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex w-full flex-col gap-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(NInput), {
                    value: model.value.password,
                    "onUpdate:value": ($event) => model.value.password = $event,
                    type: "password",
                    size: "large",
                    "show-password-on": "click",
                    placeholder: "Insert the password"
                  }, null, _parent3, _scopeId2));
                  if (model.value.password) {
                    _push3(ssrRenderComponent(_sfc_main$2, {
                      password: model.value.password,
                      onStrength: ($event) => passwordStrength.value = $event
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex w-full flex-col gap-3" }, [
                      createVNode(unref(NInput), {
                        value: model.value.password,
                        "onUpdate:value": ($event) => model.value.password = $event,
                        type: "password",
                        size: "large",
                        "show-password-on": "click",
                        placeholder: "Insert the password"
                      }, null, 8, ["value", "onUpdate:value"]),
                      model.value.password ? (openBlock(), createBlock(_sfc_main$2, {
                        key: 0,
                        password: model.value.password,
                        onStrength: ($event) => passwordStrength.value = $event
                      }, null, 8, ["password", "onStrength"])) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(NFormItem), {
              path: "confirmPassword",
              label: "Confirm Password",
              first: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(NInput), {
                    value: model.value.confirmPassword,
                    "onUpdate:value": ($event) => model.value.confirmPassword = $event,
                    type: "password",
                    disabled: !model.value.password,
                    size: "large",
                    "show-password-on": "click",
                    placeholder: "Confirm the password"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(NInput), {
                      value: model.value.confirmPassword,
                      "onUpdate:value": ($event) => model.value.confirmPassword = $event,
                      type: "password",
                      disabled: !model.value.password,
                      size: "large",
                      "show-password-on": "click",
                      placeholder: "Confirm the password"
                    }, null, 8, ["value", "onUpdate:value", "disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex flex-col items-end"${_scopeId}><div class="w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Button), {
              type: "primary",
              class: "w-full!",
              size: "large",
              disabled: !isValid.value,
              onClick: register
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Create an account `);
                } else {
                  return [
                    createTextVNode(" Create an account ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode(unref(NFormItem), {
                path: "email",
                label: "Email",
                first: ""
              }, {
                default: withCtx(() => [
                  createVNode(unref(NInput), {
                    value: model.value.email,
                    "onUpdate:value": ($event) => model.value.email = $event,
                    size: "large",
                    placeholder: "Insert the email"
                  }, null, 8, ["value", "onUpdate:value"])
                ]),
                _: 1
              }),
              createVNode(unref(NFormItem), {
                path: "password",
                label: "Password"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex w-full flex-col gap-3" }, [
                    createVNode(unref(NInput), {
                      value: model.value.password,
                      "onUpdate:value": ($event) => model.value.password = $event,
                      type: "password",
                      size: "large",
                      "show-password-on": "click",
                      placeholder: "Insert the password"
                    }, null, 8, ["value", "onUpdate:value"]),
                    model.value.password ? (openBlock(), createBlock(_sfc_main$2, {
                      key: 0,
                      password: model.value.password,
                      onStrength: ($event) => passwordStrength.value = $event
                    }, null, 8, ["password", "onStrength"])) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(NFormItem), {
                path: "confirmPassword",
                label: "Confirm Password",
                first: ""
              }, {
                default: withCtx(() => [
                  createVNode(unref(NInput), {
                    value: model.value.confirmPassword,
                    "onUpdate:value": ($event) => model.value.confirmPassword = $event,
                    type: "password",
                    disabled: !model.value.password,
                    size: "large",
                    "show-password-on": "click",
                    placeholder: "Confirm the password"
                  }, null, 8, ["value", "onUpdate:value", "disabled"])
                ]),
                _: 1
              }),
              createVNode("div", { class: "flex flex-col items-end" }, [
                createVNode("div", { class: "w-full" }, [
                  createVNode(unref(Button), {
                    type: "primary",
                    class: "w-full!",
                    size: "large",
                    disabled: !isValid.value,
                    onClick: register
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Create an account ")
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(NDivider), { "title-placement": "center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\xD3`);
          } else {
            return [
              createTextVNode("\xD3")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="social-btns mb-12 flex flex-col gap-4">`);
      _push(ssrRenderComponent(unref(Button), {
        strong: "",
        secondary: "",
        size: "large"
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img alt="google-icon" class="block h-5"${ssrRenderAttr("src", _imports_0)}${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                alt: "google-icon",
                class: "block h-5",
                src: _imports_0
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="px-2"${_scopeId}>Ingres\xE1 con Google</span>`);
          } else {
            return [
              createVNode("span", { class: "px-2" }, "Ingres\xE1 con Google")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      ssrRenderSlot(_ctx.$slots, "bottom-area", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/auth/SignUp.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AuthForm",
  __ssrInlineRender: true,
  props: {
    type: {},
    useOnlyRouter: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const type = ref("signin");
    const router = useRouter();
    const themeStore = useThemeStore();
    const isDark = computed(() => themeStore.isThemeDark);
    const title = computed(
      () => type.value === "signin" ? "Hola, nuevamente!" : type.value === "signup" ? "Hola" : "Olvidaste la contrase\xF1a?"
    );
    function gotoSignIn() {
      if (!props.useOnlyRouter) {
        type.value = "signin";
      } else {
        router.replace({ name: "Login" });
      }
    }
    function gotoSignUp() {
      if (!props.useOnlyRouter) {
        type.value = "signup";
      } else {
        router.replace({ name: "Register" });
      }
    }
    function gotoForgotPassword() {
      if (!props.useOnlyRouter) {
        type.value = "forgotpassword";
      } else {
        router.replace({ name: "ForgotPassword" });
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full max-w-96 min-w-64" }, _attrs))} data-v-026a392c>`);
      _push(ssrRenderComponent(unref(NCollapseTransition), {
        show: type.value === "forgotpassword"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Button), {
              text: "",
              onClick: gotoSignIn
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$o, {
                    name: "carbon:arrow-left",
                    size: 30
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$o, {
                      name: "carbon:arrow-left",
                      size: 30
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Button), {
                text: "",
                onClick: gotoSignIn
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$o, {
                    name: "carbon:arrow-left",
                    size: 30
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="my-10" data-v-026a392c>`);
      _push(ssrRenderComponent(Logo, {
        mini: "",
        dark: isDark.value,
        class: "mb-4",
        "max-height": "40px"
      }, null, _parent));
      _push(`<div class="font-display mb-4 text-4xl font-bold" data-v-026a392c>${ssrInterpolate(title.value)}</div><div class="text-secondary mb-12 text-lg" data-v-026a392c> Bienvenido a Triplotrip, gesti\xF3n de venta de excursiones y viajes </div></div><template>`);
      if (type.value === "signin") {
        _push(ssrRenderComponent(_sfc_main$3, { key: "signin" }, {
          "extra-actions": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Button), {
                text: "",
                type: "primary",
                onClick: ($event) => gotoForgotPassword()
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Olvidaste tu contrase\xF1a?`);
                  } else {
                    return [
                      createTextVNode("Olvidaste tu contrase\xF1a?")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(Button), {
                  text: "",
                  type: "primary",
                  onClick: ($event) => gotoForgotPassword()
                }, {
                  default: withCtx(() => [
                    createTextVNode("Olvidaste tu contrase\xF1a?")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ];
            }
          }),
          "bottom-area": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="text-center" data-v-026a392c${_scopeId}> No ten\xE9s cuenta? `);
              _push2(ssrRenderComponent(unref(Button), {
                text: "",
                type: "primary",
                size: "large",
                onClick: ($event) => gotoSignUp()
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Registrate`);
                  } else {
                    return [
                      createTextVNode("Registrate")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "text-center" }, [
                  createTextVNode(" No ten\xE9s cuenta? "),
                  createVNode(unref(Button), {
                    text: "",
                    type: "primary",
                    size: "large",
                    onClick: ($event) => gotoSignUp()
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Registrate")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else if (type.value === "signup") {
        _push(ssrRenderComponent(_sfc_main$1, { key: "signup" }, {
          "bottom-area": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="text-center" data-v-026a392c${_scopeId}> Ya ten\xE9s cuenta? `);
              _push2(ssrRenderComponent(unref(Button), {
                text: "",
                type: "primary",
                size: "large",
                onClick: ($event) => gotoSignIn()
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Ingres\xE1`);
                  } else {
                    return [
                      createTextVNode("Ingres\xE1")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "text-center" }, [
                  createTextVNode(" Ya ten\xE9s cuenta? "),
                  createVNode(unref(Button), {
                    text: "",
                    type: "primary",
                    size: "large",
                    onClick: ($event) => gotoSignIn()
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Ingres\xE1")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else if (type.value === "forgotpassword") {
        _push(ssrRenderComponent(_sfc_main$4, { key: "forgotpassword" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</template></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/auth/AuthForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AuthForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-026a392c"]]);

export { AuthForm as A };
//# sourceMappingURL=AuthForm-BYOg7r_S.mjs.map
