import { defineComponent, mergeModels, useModel, ref, computed, unref, mergeProps, withCtx, createVNode, createTextVNode, createBlock, createCommentVNode, openBlock, useSSRContext, toValue, reactive, watch, getCurrentInstance, onServerPrefetch, shallowRef, toRef } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { ai as NDrawer, aj as NDrawerContent, B as Button, ag as fetchDefaults, ad as useNuxtApp, ae as asyncDataDefaults, ah as useRequestFetch, af as createError } from './server.mjs';
import { faker } from '@faker-js/faker';
import { C as hash } from '../_/nitro.mjs';
import { isPlainObject } from '@vue/shared';
import dayjs from 'dayjs';
import { defineStore } from 'pinia';
import { N as NDatePicker } from './DatePicker-DEHA8H7M.mjs';
import { N as NSwitch } from './Switch-Ds1OeKkl.mjs';
import { N as NSelect } from './Select-CJatCJlw.mjs';
import { N as NPopconfirm } from './Popconfirm-CE1_Xk-K.mjs';
import { N as NForm, a as NFormItem } from './FormItem-DAK_fF_C.mjs';
import { N as NInput } from './Input-DOxGe8j0.mjs';

const DEBOUNCE_DEFAULTS = {
  trailing: true
};
function debounce(fn, wait = 25, options = {}) {
  options = { ...DEBOUNCE_DEFAULTS, ...options };
  if (!Number.isFinite(wait)) {
    throw new TypeError("Expected `wait` to be a finite number");
  }
  let leadingValue;
  let timeout;
  let resolveList = [];
  let currentPromise;
  let trailingArgs;
  const applyFn = (_this, args) => {
    currentPromise = _applyPromised(fn, _this, args);
    currentPromise.finally(() => {
      currentPromise = null;
      if (options.trailing && trailingArgs && !timeout) {
        const promise = applyFn(_this, trailingArgs);
        trailingArgs = null;
        return promise;
      }
    });
    return currentPromise;
  };
  return function(...args) {
    if (currentPromise) {
      if (options.trailing) {
        trailingArgs = args;
      }
      return currentPromise;
    }
    return new Promise((resolve) => {
      const shouldCallNow = !timeout && options.leading;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        timeout = null;
        const promise = options.leading ? leadingValue : applyFn(this, args);
        for (const _resolve of resolveList) {
          _resolve(promise);
        }
        resolveList = [];
      }, wait);
      if (shouldCallNow) {
        leadingValue = applyFn(this, args);
        resolve(leadingValue);
      } else {
        resolveList.push(resolve);
      }
    });
  };
}
async function _applyPromised(fn, _this, args) {
  return await fn.apply(_this, args);
}

const isDefer = (dedupe) => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  var _a2, _b, _c, _d, _e, _f, _g;
  var _a;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string" && typeof args[0] !== "object" && !(typeof args[0] === "function" && typeof args[1] === "function")) {
    args.unshift(autoKey);
  }
  let [_key, _handler, options = {}] = args;
  const key = computed(() => toValue(_key));
  if (typeof key.value !== "string") {
    throw new TypeError("[nuxt] [useAsyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  const getDefault = () => asyncDataDefaults.value;
  const getDefaultCachedData = (key2, nuxtApp2, ctx) => {
    if (nuxtApp2.isHydrating) {
      return nuxtApp2.payload.data[key2];
    }
    if (ctx.cause !== "refresh:manual" && ctx.cause !== "refresh:hook") {
      return nuxtApp2.static.data[key2];
    }
  };
  (_a2 = options.server) != null ? _a2 : options.server = true;
  (_b = options.default) != null ? _b : options.default = getDefault;
  (_c = options.getCachedData) != null ? _c : options.getCachedData = getDefaultCachedData;
  (_d = options.lazy) != null ? _d : options.lazy = false;
  (_e = options.immediate) != null ? _e : options.immediate = true;
  (_f = options.deep) != null ? _f : options.deep = asyncDataDefaults.deep;
  (_g = options.dedupe) != null ? _g : options.dedupe = "cancel";
  options._functionName || "useAsyncData";
  nuxtApp._asyncData[key.value];
  const initialCachedData = options.getCachedData(key.value, nuxtApp, { cause: "initial" });
  if (!((_a = nuxtApp._asyncData[key.value]) == null ? void 0 : _a._init)) {
    nuxtApp._asyncData[key.value] = createAsyncData(nuxtApp, key.value, _handler, options, initialCachedData);
  }
  const asyncData = nuxtApp._asyncData[key.value];
  asyncData._deps++;
  const initialFetch = () => nuxtApp._asyncData[key.value].execute({ cause: "initial", dedupe: options.dedupe });
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncReturn = {
    data: writableComputedRef(() => {
      var _a22;
      return (_a22 = nuxtApp._asyncData[key.value]) == null ? void 0 : _a22.data;
    }),
    pending: writableComputedRef(() => {
      var _a22;
      return (_a22 = nuxtApp._asyncData[key.value]) == null ? void 0 : _a22.pending;
    }),
    status: writableComputedRef(() => {
      var _a22;
      return (_a22 = nuxtApp._asyncData[key.value]) == null ? void 0 : _a22.status;
    }),
    error: writableComputedRef(() => {
      var _a22;
      return (_a22 = nuxtApp._asyncData[key.value]) == null ? void 0 : _a22.error;
    }),
    refresh: (...args2) => nuxtApp._asyncData[key.value].execute(...args2),
    execute: (...args2) => nuxtApp._asyncData[key.value].execute(...args2),
    clear: () => clearNuxtDataByKey(nuxtApp, key.value)
  };
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key.value]).then(() => asyncReturn);
  Object.assign(asyncDataPromise, asyncReturn);
  return asyncDataPromise;
}
function writableComputedRef(getter) {
  return computed({
    get() {
      var _a;
      return (_a = getter()) == null ? void 0 : _a.value;
    },
    set(value) {
      const ref2 = getter();
      if (ref2) {
        ref2.value = value;
      }
    }
  });
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = asyncDataDefaults.errorValue;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = void 0;
    nuxtApp._asyncData[key].error.value = asyncDataDefaults.errorValue;
    {
      nuxtApp._asyncData[key].pending.value = false;
    }
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    if (nuxtApp._asyncDataPromises[key]) {
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function createAsyncData(nuxtApp, key, _handler, options, initialCachedData) {
  var _a2;
  var _a;
  (_a2 = (_a = nuxtApp.payload._errors)[key]) != null ? _a2 : _a[key] = asyncDataDefaults.errorValue;
  const handler = _handler ;
  const _ref = options.deep ? ref : shallowRef;
  const hasCachedData = initialCachedData != null;
  const asyncData = {
    data: _ref(hasCachedData ? initialCachedData : options.default()),
    pending: shallowRef(!hasCachedData),
    error: toRef(nuxtApp.payload._errors, key),
    status: shallowRef("idle"),
    execute: (opts = {}) => {
      var _a3, _b2;
      if (nuxtApp._asyncDataPromises[key]) {
        if (isDefer((_a3 = opts.dedupe) != null ? _a3 : options.dedupe)) {
          return nuxtApp._asyncDataPromises[key];
        }
        nuxtApp._asyncDataPromises[key].cancelled = true;
      }
      if (opts.cause === "initial" || nuxtApp.isHydrating) {
        const cachedData = opts.cause === "initial" ? initialCachedData : options.getCachedData(key, nuxtApp, { cause: (_b2 = opts.cause) != null ? _b2 : "refresh:manual" });
        if (cachedData != null) {
          nuxtApp.payload.data[key] = asyncData.data.value = cachedData;
          asyncData.error.value = asyncDataDefaults.errorValue;
          asyncData.status.value = "success";
          return Promise.resolve(cachedData);
        }
      }
      {
        asyncData.pending.value = true;
      }
      asyncData.status.value = "pending";
      const promise = new Promise(
        (resolve, reject) => {
          try {
            resolve(handler(nuxtApp));
          } catch (err) {
            reject(err);
          }
        }
      ).then(async (_result) => {
        if (promise.cancelled) {
          return nuxtApp._asyncDataPromises[key];
        }
        let result = _result;
        if (options.transform) {
          result = await options.transform(_result);
        }
        if (options.pick) {
          result = pick(result, options.pick);
        }
        nuxtApp.payload.data[key] = result;
        asyncData.data.value = result;
        asyncData.error.value = asyncDataDefaults.errorValue;
        asyncData.status.value = "success";
      }).catch((error) => {
        if (promise.cancelled) {
          return nuxtApp._asyncDataPromises[key];
        }
        asyncData.error.value = createError(error);
        asyncData.data.value = unref(options.default());
        asyncData.status.value = "error";
      }).finally(() => {
        if (promise.cancelled) {
          return;
        }
        {
          asyncData.pending.value = false;
        }
        delete nuxtApp._asyncDataPromises[key];
      });
      nuxtApp._asyncDataPromises[key] = promise;
      return nuxtApp._asyncDataPromises[key];
    },
    _execute: debounce((...args) => asyncData.execute(...args), 0, { leading: true }),
    _default: options.default,
    _deps: 0,
    _init: true,
    _hash: void 0,
    _off: nuxtApp.hook("app:data:refresh", async (keys) => {
      if (!keys || keys.includes(key)) {
        await asyncData.execute({ cause: "refresh:hook" });
      }
    })
  };
  return asyncData;
}
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = [{}, arg1];
  const _request = computed(() => toValue(request));
  const key = computed(() => toValue(opts.key) || "$f" + hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]));
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    watch: watchSources,
    immediate,
    getCachedData,
    deep,
    dedupe,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    immediate,
    getCachedData,
    deep,
    dedupe,
    watch: watchSources === false ? [] : [...watchSources || [], _fetchOptions]
  };
  if (!immediate) {
    let setImmediate = function() {
      _asyncDataOptions.immediate = true;
    };
    watch(key, setImmediate, { flush: "sync", once: true });
    if (watchSources) {
      watch([...watchSources, _fetchOptions], setImmediate, { flush: "sync", once: true });
    }
  }
  let controller;
  const asyncData = useAsyncData(key, () => {
    var _a;
    (_a = controller == null ? void 0 : controller.abort) == null ? void 0 : _a.call(controller, new DOMException("Request aborted as another request to the same endpoint was initiated.", "AbortError"));
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const timeoutLength = toValue(opts.timeout);
    let timeoutId;
    if (timeoutLength) {
      timeoutId = setTimeout(() => controller.abort(new DOMException("Request aborted due to timeout.", "AbortError")), timeoutLength);
      controller.signal.onabort = () => clearTimeout(timeoutId);
    }
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions }).finally(() => {
      clearTimeout(timeoutId);
    });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  var _a;
  const segments = [
    ((_a = toValue(opts.method)) == null ? void 0 : _a.toUpperCase()) || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.params || opts.query]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  if (opts.body) {
    const value = toValue(opts.body);
    if (!value) {
      segments.push(hash(value));
    } else if (value instanceof ArrayBuffer) {
      segments.push(hash(Object.fromEntries([...new Uint8Array(value).entries()].map(([k, v]) => [k, v.toString()]))));
    } else if (value instanceof FormData) {
      segments.push(hash(Object.fromEntries(value.entries())));
    } else if (isPlainObject(value)) {
      segments.push(hash(reactive(value)));
    } else {
      try {
        segments.push(hash(value));
      } catch {
        console.warn("[useFetch] Failed to hash body", value);
      }
    }
  }
  return segments;
}
async function fetchEvents() {
  const { data } = await useFetch("http://localhost:1337/api/events", "$cH7ekJtkna");
  return data;
}
console.warn("fetchEvents", fetchEvents);
const availableCalendars = [
  {
    label: "Personal"
  },
  {
    label: "Business"
  },
  {
    label: "Family"
  },
  {
    label: "Holiday"
  },
  {
    label: "Other"
  }
];
function getEvents() {
  const events2 = [];
  for (let i = 0; i < 6; i++) {
    const allDay = faker.datatype.boolean();
    const start = faker.date.between({
      from: dayjs().subtract(1, "month").toDate(),
      to: dayjs().add(1, "month").toDate()
    });
    const end = faker.date.between({ from: start, to: dayjs(start).add(2, "d").toDate() });
    events2.push({
      id: faker.string.nanoid(),
      title: faker.lorem.sentence(faker.number.int({ min: 1, max: 3 })).slice(0, -1),
      start,
      end,
      allDay,
      extendedProps: {
        calendar: faker.helpers.arrayElements(availableCalendars, 1)[0].label,
        location: faker.datatype.boolean() ? faker.location.streetAddress(true) : "",
        description: faker.datatype.boolean() ? faker.lorem.sentence(faker.number.int({ min: 7, max: 20 })) : ""
      }
    });
  }
  return events2;
}
const events = getEvents();
const useFullCalendarStore = defineStore("calendar", {
  state: () => ({
    events,
    availableCalendars,
    selectedCalendars: ["Personal", "Business", "Family", "Holiday", "Other"]
  }),
  actions: {
    fetchEvents() {
      const calendars = this.selectedCalendars;
      return this.events.filter((event) => {
        var _a;
        return calendars.includes(((_a = event.extendedProps) == null ? void 0 : _a.calendar) || "");
      });
    },
    addEvent(event) {
      event.id = faker.string.nanoid();
      this.events.push(event);
    },
    updateEvent(event) {
      const eventBKP = this.events.find((e) => e.id === event.id);
      if (eventBKP) {
        Object.assign(eventBKP, event);
      }
      return event;
    },
    removeEvent(eventId) {
      const eventIndex = this.events.findIndex((e) => e.id === eventId);
      this.events.splice(eventIndex, 1);
      return true;
    }
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "EventEditor",
  __ssrInlineRender: true,
  props: {
    "event": { default: null },
    "eventModifiers": {},
    "show": { type: Boolean, ...{ default: false } },
    "showModifiers": {}
  },
  emits: /* @__PURE__ */ mergeModels(["submitEvent", "deleteEvent"], ["update:event", "update:show"]),
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const event = useModel(__props, "event");
    const modalShow = useModel(__props, "show");
    const refForm = ref();
    const fullCalendarStore = useFullCalendarStore();
    const selectCalendar = computed(
      () => fullCalendarStore.availableCalendars.map((o) => ({
        label: o.label,
        value: o.label
      }))
    );
    const formRules = {
      title: {
        required: true,
        message: "Please input event title",
        trigger: "blur"
      }
    };
    function submitEvent() {
      var _a;
      (_a = refForm.value) == null ? void 0 : _a.validate((errors) => {
        if (!errors && event.value) {
          emit("submitEvent");
        }
      });
    }
    function deleteEvent() {
      emit("deleteEvent");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NDrawer), mergeProps({
        show: modalShow.value,
        "onUpdate:show": ($event) => modalShow.value = $event,
        width: 500,
        class: "fullcalendar-drawer"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(ssrRenderComponent(unref(NDrawerContent), {
              title: ((_a = event.value) == null ? void 0 : _a.id) ? "Edit event" : "Add event",
              closable: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (event.value) {
                    _push3(ssrRenderComponent(unref(NForm), {
                      ref_key: "refForm",
                      ref: refForm,
                      "label-width": 80,
                      model: event.value,
                      rules: formRules
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a2, _b2;
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(NFormItem), {
                            label: "Title",
                            path: "title"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(NInput), {
                                  value: event.value.title,
                                  "onUpdate:value": ($event) => event.value.title = $event,
                                  placeholder: "Event Title"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(NInput), {
                                    value: event.value.title,
                                    "onUpdate:value": ($event) => event.value.title = $event,
                                    placeholder: "Event Title"
                                  }, null, 8, ["value", "onUpdate:value"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<div class="flex flex-col justify-between sm:flex-row"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(NFormItem), {
                            label: "Start",
                            path: "start"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(NDatePicker), {
                                  value: event.value.start,
                                  "onUpdate:value": ($event) => event.value.start = $event,
                                  class: "w-full",
                                  type: event.value.allDay ? "date" : "datetime"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(NDatePicker), {
                                    value: event.value.start,
                                    "onUpdate:value": ($event) => event.value.start = $event,
                                    class: "w-full",
                                    type: event.value.allDay ? "date" : "datetime"
                                  }, null, 8, ["value", "onUpdate:value", "type"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(NFormItem), {
                            label: "End",
                            path: "end"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(NDatePicker), {
                                  value: event.value.end,
                                  "onUpdate:value": ($event) => event.value.end = $event,
                                  class: "w-full",
                                  type: event.value.allDay ? "date" : "datetime"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(NDatePicker), {
                                    value: event.value.end,
                                    "onUpdate:value": ($event) => event.value.end = $event,
                                    class: "w-full",
                                    type: event.value.allDay ? "date" : "datetime"
                                  }, null, 8, ["value", "onUpdate:value", "type"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div><div class="flex justify-between gap-6"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(NFormItem), {
                            label: "All Day",
                            path: "allDay"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(NSwitch), {
                                  value: event.value.allDay,
                                  "onUpdate:value": ($event) => event.value.allDay = $event
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(NSwitch), {
                                    value: event.value.allDay,
                                    "onUpdate:value": ($event) => event.value.allDay = $event
                                  }, null, 8, ["value", "onUpdate:value"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(NFormItem), {
                            label: "Calendar",
                            path: "extendedProps.calendar",
                            class: "grow"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(NSelect), {
                                  value: event.value.extendedProps.calendar,
                                  "onUpdate:value": ($event) => event.value.extendedProps.calendar = $event,
                                  options: selectCalendar.value
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(NSelect), {
                                    value: event.value.extendedProps.calendar,
                                    "onUpdate:value": ($event) => event.value.extendedProps.calendar = $event,
                                    options: selectCalendar.value
                                  }, null, 8, ["value", "onUpdate:value", "options"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                          _push4(ssrRenderComponent(unref(NFormItem), {
                            label: "Location",
                            path: "extendedProps.location"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(NInput), {
                                  value: event.value.extendedProps.location,
                                  "onUpdate:value": ($event) => event.value.extendedProps.location = $event,
                                  type: "textarea",
                                  placeholder: "Event Location"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(NInput), {
                                    value: event.value.extendedProps.location,
                                    "onUpdate:value": ($event) => event.value.extendedProps.location = $event,
                                    type: "textarea",
                                    placeholder: "Event Location"
                                  }, null, 8, ["value", "onUpdate:value"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(NFormItem), {
                            label: "Description",
                            path: "extendedProps.description"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(NInput), {
                                  value: event.value.extendedProps.description,
                                  "onUpdate:value": ($event) => event.value.extendedProps.description = $event,
                                  type: "textarea",
                                  placeholder: "Event Description"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(NInput), {
                                    value: event.value.extendedProps.description,
                                    "onUpdate:value": ($event) => event.value.extendedProps.description = $event,
                                    type: "textarea",
                                    placeholder: "Event Description"
                                  }, null, 8, ["value", "onUpdate:value"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<div class="flex items-center justify-end gap-3"${_scopeId3}>`);
                          if ((_a2 = event.value) == null ? void 0 : _a2.id) {
                            _push4(ssrRenderComponent(unref(NFormItem), null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(unref(NPopconfirm), { onPositiveClick: deleteEvent }, {
                                    trigger: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(unref(Button), null, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`Delete Event`);
                                            } else {
                                              return [
                                                createTextVNode("Delete Event")
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(unref(Button), null, {
                                            default: withCtx(() => [
                                              createTextVNode("Delete Event")
                                            ]),
                                            _: 1
                                          })
                                        ];
                                      }
                                    }),
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(` Are you sure you want <br${_scopeId5}> to delete the event? `);
                                      } else {
                                        return [
                                          createTextVNode(" Are you sure you want "),
                                          createVNode("br"),
                                          createTextVNode(" to delete the event? ")
                                        ];
                                      }
                                    }),
                                    _: 1
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(unref(NPopconfirm), { onPositiveClick: deleteEvent }, {
                                      trigger: withCtx(() => [
                                        createVNode(unref(Button), null, {
                                          default: withCtx(() => [
                                            createTextVNode("Delete Event")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      default: withCtx(() => [
                                        createTextVNode(" Are you sure you want "),
                                        createVNode("br"),
                                        createTextVNode(" to delete the event? ")
                                      ]),
                                      _: 1
                                    })
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(ssrRenderComponent(unref(NFormItem), null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(Button), {
                                  type: "primary",
                                  onClick: submitEvent
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`Submit`);
                                    } else {
                                      return [
                                        createTextVNode("Submit")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(Button), {
                                    type: "primary",
                                    onClick: submitEvent
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Submit")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode(unref(NFormItem), {
                              label: "Title",
                              path: "title"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(NInput), {
                                  value: event.value.title,
                                  "onUpdate:value": ($event) => event.value.title = $event,
                                  placeholder: "Event Title"
                                }, null, 8, ["value", "onUpdate:value"])
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "flex flex-col justify-between sm:flex-row" }, [
                              createVNode(unref(NFormItem), {
                                label: "Start",
                                path: "start"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(NDatePicker), {
                                    value: event.value.start,
                                    "onUpdate:value": ($event) => event.value.start = $event,
                                    class: "w-full",
                                    type: event.value.allDay ? "date" : "datetime"
                                  }, null, 8, ["value", "onUpdate:value", "type"])
                                ]),
                                _: 1
                              }),
                              createVNode(unref(NFormItem), {
                                label: "End",
                                path: "end"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(NDatePicker), {
                                    value: event.value.end,
                                    "onUpdate:value": ($event) => event.value.end = $event,
                                    class: "w-full",
                                    type: event.value.allDay ? "date" : "datetime"
                                  }, null, 8, ["value", "onUpdate:value", "type"])
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "flex justify-between gap-6" }, [
                              createVNode(unref(NFormItem), {
                                label: "All Day",
                                path: "allDay"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(NSwitch), {
                                    value: event.value.allDay,
                                    "onUpdate:value": ($event) => event.value.allDay = $event
                                  }, null, 8, ["value", "onUpdate:value"])
                                ]),
                                _: 1
                              }),
                              createVNode(unref(NFormItem), {
                                label: "Calendar",
                                path: "extendedProps.calendar",
                                class: "grow"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(NSelect), {
                                    value: event.value.extendedProps.calendar,
                                    "onUpdate:value": ($event) => event.value.extendedProps.calendar = $event,
                                    options: selectCalendar.value
                                  }, null, 8, ["value", "onUpdate:value", "options"])
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode(unref(NFormItem), {
                              label: "Location",
                              path: "extendedProps.location"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(NInput), {
                                  value: event.value.extendedProps.location,
                                  "onUpdate:value": ($event) => event.value.extendedProps.location = $event,
                                  type: "textarea",
                                  placeholder: "Event Location"
                                }, null, 8, ["value", "onUpdate:value"])
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NFormItem), {
                              label: "Description",
                              path: "extendedProps.description"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(NInput), {
                                  value: event.value.extendedProps.description,
                                  "onUpdate:value": ($event) => event.value.extendedProps.description = $event,
                                  type: "textarea",
                                  placeholder: "Event Description"
                                }, null, 8, ["value", "onUpdate:value"])
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "flex items-center justify-end gap-3" }, [
                              ((_b2 = event.value) == null ? void 0 : _b2.id) ? (openBlock(), createBlock(unref(NFormItem), { key: 0 }, {
                                default: withCtx(() => [
                                  createVNode(unref(NPopconfirm), { onPositiveClick: deleteEvent }, {
                                    trigger: withCtx(() => [
                                      createVNode(unref(Button), null, {
                                        default: withCtx(() => [
                                          createTextVNode("Delete Event")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    default: withCtx(() => [
                                      createTextVNode(" Are you sure you want "),
                                      createVNode("br"),
                                      createTextVNode(" to delete the event? ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })) : createCommentVNode("", true),
                              createVNode(unref(NFormItem), null, {
                                default: withCtx(() => [
                                  createVNode(unref(Button), {
                                    type: "primary",
                                    onClick: submitEvent
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Submit")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    event.value ? (openBlock(), createBlock(unref(NForm), {
                      key: 0,
                      ref_key: "refForm",
                      ref: refForm,
                      "label-width": 80,
                      model: event.value,
                      rules: formRules
                    }, {
                      default: withCtx(() => {
                        var _a2;
                        return [
                          createVNode(unref(NFormItem), {
                            label: "Title",
                            path: "title"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(NInput), {
                                value: event.value.title,
                                "onUpdate:value": ($event) => event.value.title = $event,
                                placeholder: "Event Title"
                              }, null, 8, ["value", "onUpdate:value"])
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "flex flex-col justify-between sm:flex-row" }, [
                            createVNode(unref(NFormItem), {
                              label: "Start",
                              path: "start"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(NDatePicker), {
                                  value: event.value.start,
                                  "onUpdate:value": ($event) => event.value.start = $event,
                                  class: "w-full",
                                  type: event.value.allDay ? "date" : "datetime"
                                }, null, 8, ["value", "onUpdate:value", "type"])
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NFormItem), {
                              label: "End",
                              path: "end"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(NDatePicker), {
                                  value: event.value.end,
                                  "onUpdate:value": ($event) => event.value.end = $event,
                                  class: "w-full",
                                  type: event.value.allDay ? "date" : "datetime"
                                }, null, 8, ["value", "onUpdate:value", "type"])
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "flex justify-between gap-6" }, [
                            createVNode(unref(NFormItem), {
                              label: "All Day",
                              path: "allDay"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(NSwitch), {
                                  value: event.value.allDay,
                                  "onUpdate:value": ($event) => event.value.allDay = $event
                                }, null, 8, ["value", "onUpdate:value"])
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NFormItem), {
                              label: "Calendar",
                              path: "extendedProps.calendar",
                              class: "grow"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(NSelect), {
                                  value: event.value.extendedProps.calendar,
                                  "onUpdate:value": ($event) => event.value.extendedProps.calendar = $event,
                                  options: selectCalendar.value
                                }, null, 8, ["value", "onUpdate:value", "options"])
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode(unref(NFormItem), {
                            label: "Location",
                            path: "extendedProps.location"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(NInput), {
                                value: event.value.extendedProps.location,
                                "onUpdate:value": ($event) => event.value.extendedProps.location = $event,
                                type: "textarea",
                                placeholder: "Event Location"
                              }, null, 8, ["value", "onUpdate:value"])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NFormItem), {
                            label: "Description",
                            path: "extendedProps.description"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(NInput), {
                                value: event.value.extendedProps.description,
                                "onUpdate:value": ($event) => event.value.extendedProps.description = $event,
                                type: "textarea",
                                placeholder: "Event Description"
                              }, null, 8, ["value", "onUpdate:value"])
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "flex items-center justify-end gap-3" }, [
                            ((_a2 = event.value) == null ? void 0 : _a2.id) ? (openBlock(), createBlock(unref(NFormItem), { key: 0 }, {
                              default: withCtx(() => [
                                createVNode(unref(NPopconfirm), { onPositiveClick: deleteEvent }, {
                                  trigger: withCtx(() => [
                                    createVNode(unref(Button), null, {
                                      default: withCtx(() => [
                                        createTextVNode("Delete Event")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  default: withCtx(() => [
                                    createTextVNode(" Are you sure you want "),
                                    createVNode("br"),
                                    createTextVNode(" to delete the event? ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            createVNode(unref(NFormItem), null, {
                              default: withCtx(() => [
                                createVNode(unref(Button), {
                                  type: "primary",
                                  onClick: submitEvent
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Submit")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }),
                      _: 1
                    }, 8, ["model"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(NDrawerContent), {
                title: ((_b = event.value) == null ? void 0 : _b.id) ? "Edit event" : "Add event",
                closable: ""
              }, {
                default: withCtx(() => [
                  event.value ? (openBlock(), createBlock(unref(NForm), {
                    key: 0,
                    ref_key: "refForm",
                    ref: refForm,
                    "label-width": 80,
                    model: event.value,
                    rules: formRules
                  }, {
                    default: withCtx(() => {
                      var _a2;
                      return [
                        createVNode(unref(NFormItem), {
                          label: "Title",
                          path: "title"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(NInput), {
                              value: event.value.title,
                              "onUpdate:value": ($event) => event.value.title = $event,
                              placeholder: "Event Title"
                            }, null, 8, ["value", "onUpdate:value"])
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "flex flex-col justify-between sm:flex-row" }, [
                          createVNode(unref(NFormItem), {
                            label: "Start",
                            path: "start"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(NDatePicker), {
                                value: event.value.start,
                                "onUpdate:value": ($event) => event.value.start = $event,
                                class: "w-full",
                                type: event.value.allDay ? "date" : "datetime"
                              }, null, 8, ["value", "onUpdate:value", "type"])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NFormItem), {
                            label: "End",
                            path: "end"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(NDatePicker), {
                                value: event.value.end,
                                "onUpdate:value": ($event) => event.value.end = $event,
                                class: "w-full",
                                type: event.value.allDay ? "date" : "datetime"
                              }, null, 8, ["value", "onUpdate:value", "type"])
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "flex justify-between gap-6" }, [
                          createVNode(unref(NFormItem), {
                            label: "All Day",
                            path: "allDay"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(NSwitch), {
                                value: event.value.allDay,
                                "onUpdate:value": ($event) => event.value.allDay = $event
                              }, null, 8, ["value", "onUpdate:value"])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NFormItem), {
                            label: "Calendar",
                            path: "extendedProps.calendar",
                            class: "grow"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(NSelect), {
                                value: event.value.extendedProps.calendar,
                                "onUpdate:value": ($event) => event.value.extendedProps.calendar = $event,
                                options: selectCalendar.value
                              }, null, 8, ["value", "onUpdate:value", "options"])
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode(unref(NFormItem), {
                          label: "Location",
                          path: "extendedProps.location"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(NInput), {
                              value: event.value.extendedProps.location,
                              "onUpdate:value": ($event) => event.value.extendedProps.location = $event,
                              type: "textarea",
                              placeholder: "Event Location"
                            }, null, 8, ["value", "onUpdate:value"])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(NFormItem), {
                          label: "Description",
                          path: "extendedProps.description"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(NInput), {
                              value: event.value.extendedProps.description,
                              "onUpdate:value": ($event) => event.value.extendedProps.description = $event,
                              type: "textarea",
                              placeholder: "Event Description"
                            }, null, 8, ["value", "onUpdate:value"])
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "flex items-center justify-end gap-3" }, [
                          ((_a2 = event.value) == null ? void 0 : _a2.id) ? (openBlock(), createBlock(unref(NFormItem), { key: 0 }, {
                            default: withCtx(() => [
                              createVNode(unref(NPopconfirm), { onPositiveClick: deleteEvent }, {
                                trigger: withCtx(() => [
                                  createVNode(unref(Button), null, {
                                    default: withCtx(() => [
                                      createTextVNode("Delete Event")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                default: withCtx(() => [
                                  createTextVNode(" Are you sure you want "),
                                  createVNode("br"),
                                  createTextVNode(" to delete the event? ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(unref(NFormItem), null, {
                            default: withCtx(() => [
                              createVNode(unref(Button), {
                                type: "primary",
                                onClick: submitEvent
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Submit")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ];
                    }),
                    _: 1
                  }, 8, ["model"])) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["title"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/apps/FullCalendar/EventEditor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, useFullCalendarStore as u };
//# sourceMappingURL=EventEditor-CibS5aP9.mjs.map
