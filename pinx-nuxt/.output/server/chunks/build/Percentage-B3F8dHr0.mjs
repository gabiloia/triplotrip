import { _ as _export_sfc, ab as useThemeStore, b1 as __nuxt_component_0, a as _sfc_main$s } from './server.mjs';
import { defineComponent, ref, computed, watch, watchEffect, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';
import { random, colord } from 'colord';
import _max from 'lodash/max.js';
import { N as NProgress } from './Progress-iOzX4hFw.mjs';

function getYearsSeries({ yearsCount = 8, name = "Trend" }) {
  const years = [];
  for (let i = yearsCount - 1; i >= 0; i--) {
    years.push(dayjs().subtract(i, "y").format("YYYY"));
  }
  const categories = [...years];
  return {
    series: {
      name,
      data: years.map((v, i) => faker.number.int({ min: (i || 1) * 5, max: (i || 1) * 10 }))
    },
    categories
  };
}
function getMonthsSeries({ name = "Trend" }) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const categories = [...months];
  return {
    series: {
      name,
      data: months.map(() => faker.number.int({ min: 10, max: 93 }))
    },
    categories
  };
}
function getWeekSeries({ name = "Trend" }) {
  const week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const categories = [...week];
  return {
    series: {
      name,
      data: week.map(() => faker.number.int({ min: 10, max: 93 }))
    },
    categories
  };
}
function getAreaOpts({
  dark,
  colors,
  fontFamily,
  fontColor,
  categories,
  strokeWidth,
  customButtons,
  hideLegend,
  hideXaxisLabels
}) {
  const id = faker.string.nanoid();
  const overwriteCategories = categories ? [...categories] : [];
  if (categories) {
    overwriteCategories[0] = "";
    overwriteCategories[categories.length - 1] = "";
  }
  return {
    chart: {
      id,
      stacked: false,
      offsetX: 0,
      offsetY: 0,
      toolbar: {
        show: (customButtons == null ? void 0 : customButtons.length) !== 0,
        tools: {
          download: false,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
          customIcons: customButtons || []
        }
      },
      dropShadow: {
        enabled: false
      },
      selection: {
        enabled: false
      }
    },
    stroke: {
      curve: "smooth",
      width: strokeWidth != null ? strokeWidth : 4
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 100]
      }
    },
    grid: {
      show: false,
      yaxis: {
        lines: {
          show: false
        }
      },
      padding: {
        top: 0,
        right: -15,
        bottom: 18,
        left: 1
      }
    },
    dataLabels: {
      enabled: false,
      style: {
        fontFamily
      }
    },
    tooltip: {
      style: {
        fontFamily
      },
      theme: dark ? "dark" : "light"
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      show: !hideLegend
    },
    colors,
    xaxis: {
      categories,
      overwriteCategories,
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      },
      floating: true,
      position: "bottom",
      labels: {
        show: !hideXaxisLabels,
        offsetY: -2,
        style: {
          colors: fontColor,
          fontFamily,
          fontWeight: 500
        }
      },
      tickPlacement: "on",
      tooltip: {
        enabled: false
      }
    },
    yaxis: {
      show: false,
      title: {
        style: {
          fontFamily
        }
      },
      labels: {
        style: {
          fontFamily
        }
      }
    }
  };
}
function getBarOpts({
  dark,
  colors,
  fontFamily,
  fontColor,
  categories,
  customButtons,
  hideLegend,
  hideXaxisLabels
}) {
  const id = faker.string.nanoid();
  const funcColor = function({ dataPointIndex }) {
    if (colors) {
      if (colors[dataPointIndex]) {
        return colors[dataPointIndex];
      } else {
        return colors[0];
      }
    }
    return "grey";
  };
  return {
    chart: {
      id,
      stacked: false,
      toolbar: {
        show: (customButtons == null ? void 0 : customButtons.length) !== 0,
        tools: {
          download: false,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
          customIcons: customButtons || []
        }
      },
      dropShadow: {
        enabled: false
      },
      selection: {
        enabled: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "75%",
        borderRadius: 0,
        dataLabels: {
          position: "top"
          // top, center, bottom
        }
      }
    },
    grid: {
      show: false,
      yaxis: {
        lines: {
          show: false
        }
      },
      padding: {
        top: -10,
        right: 0,
        bottom: -16,
        left: 0
      }
    },
    dataLabels: {
      offsetY: -20,
      enabled: true,
      style: {
        colors: [funcColor],
        fontFamily
      }
    },
    tooltip: {
      theme: dark ? "dark" : "light",
      style: {
        fontFamily
      }
    },
    colors: [funcColor],
    legend: {
      position: "top",
      horizontalAlign: "right",
      show: !hideLegend,
      fontFamily
    },
    xaxis: {
      categories,
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      },
      floating: false,
      position: "bottom",
      labels: {
        show: !hideXaxisLabels,
        offsetY: -4,
        style: {
          colors: fontColor,
          fontFamily,
          fontWeight: 500
        }
      },
      tickPlacement: "top",
      tooltip: {
        enabled: false
      }
    },
    yaxis: {
      show: false,
      title: {
        style: {
          fontFamily
        }
      },
      labels: {
        style: {
          fontFamily
        }
      }
    }
  };
}
function getChartColors({ color, type, highlight }) {
  if (type === "random") {
    return Array.from({ length: 15 }, () => random().desaturate(0.55).lighten(0.15).toRgbString());
  }
  if (color && highlight && highlight.length) {
    return highlight.map((v) => v ? colord(color).toRgbString() : colord(color).alpha(0.3).toRgbString());
  }
  if (color) {
    return [colord(color).toRgbString()];
  }
  return ["grey"];
}
function getHighlightMap(series) {
  const max = _max(series);
  return series.map((v) => v === max);
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DemoApex",
  __ssrInlineRender: true,
  props: {
    type: {},
    dataType: { default: "years" },
    dark: { type: Boolean, default: () => void 0 },
    highlight: { type: Boolean, default: false },
    colorsRandom: { type: Boolean, default: false },
    usePalette: { type: Boolean, default: false },
    color: {},
    fontColor: {},
    strokeWidth: {},
    legendOffset: {},
    seriesList: { default: () => ["Trend"] },
    timeButtons: { type: Boolean, default: false },
    hideLegend: { type: Boolean, default: false },
    hideXaxisLabels: { type: Boolean, default: false }
  },
  emits: ["mounted"],
  setup(__props, { emit: __emit }) {
    var _a;
    ref(false);
    ref();
    const themeStore = useThemeStore();
    const isThemeDark = computed(() => themeStore.isThemeDark);
    const style = computed(() => themeStore.style);
    const customButtons = [
      {
        icon: "years",
        title: "years view",
        class: "custom-icon",
        click() {
          setData("years");
        }
      },
      {
        icon: "months",
        title: "months view",
        class: "custom-icon",
        click() {
          setData("months");
        }
      },
      {
        icon: "week",
        title: "week view",
        class: "custom-icon",
        click() {
          setData("week");
        }
      }
    ];
    const series = ref([]);
    const categories = ref([]);
    function setData(type) {
      series.value = [];
      categories.value = [];
      if (type === "years") {
        for (const name of __props.seriesList) {
          const data = getYearsSeries({ name });
          series.value.push(data.series);
          if (!categories.value.length) {
            categories.value = data.categories;
          }
        }
      }
      if (type.startsWith("years-")) {
        const years = type.split("-")[1];
        for (const name of __props.seriesList) {
          const data = getYearsSeries({ yearsCount: +years, name });
          series.value.push(data.series);
          if (!categories.value.length) {
            categories.value = data.categories;
          }
        }
      }
      if (type === "months") {
        for (const name of __props.seriesList) {
          const data = getMonthsSeries({ name });
          series.value.push(data.series);
          if (!categories.value.length) {
            categories.value = data.categories;
          }
        }
      }
      if (type === "week") {
        for (const name of __props.seriesList) {
          const data = getWeekSeries({ name });
          series.value.push(data.series);
          if (!categories.value.length) {
            categories.value = data.categories;
          }
        }
      }
    }
    setData(__props.dataType);
    const highlightMap = getHighlightMap((_a = series.value) == null ? void 0 : _a[0].data);
    const palette = computed(() => [
      themeStore.style["extra1-color"],
      themeStore.style["extra2-color"],
      themeStore.style["extra3-color"],
      themeStore.style["extra4-color"]
    ]);
    const optsFunction = __props.type === "area" ? getAreaOpts : getBarOpts;
    function getArgs() {
      var _a2;
      return {
        dark: __props.dark === void 0 ? isThemeDark.value : __props.dark,
        colors: __props.usePalette ? palette.value : getChartColors({
          type: __props.colorsRandom ? "random" : void 0,
          color: (_a2 = __props.color) != null ? _a2 : style.value["primary-color"],
          highlight: __props.highlight ? highlightMap : void 0
        }),
        fontColor: __props.fontColor || __props.colorsRandom || __props.color ? style.value["fg-secondary-color"] : style.value["primary-color"],
        fontFamily: style.value["font-family-mono"],
        categories: categories.value,
        strokeWidth: __props.strokeWidth,
        hideLegend: __props.hideLegend,
        hideXaxisLabels: __props.hideXaxisLabels,
        customButtons: __props.timeButtons ? customButtons : []
      };
    }
    const options = ref(optsFunction(getArgs()));
    watch(
      () => __props.dataType,
      (val) => {
        setData(val);
      }
    );
    watchEffect(async () => {
      options.value = optsFunction(getArgs());
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/charts/DemoApex.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const DemoChart = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e16f3b58"]]);
const ChevronUp = "tabler:chevron-up";
const ChevronDown = "tabler:chevron-down";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Percentage",
  __ssrInlineRender: true,
  props: {
    value: {},
    useColor: { type: Boolean, default: true },
    useOpacity: { type: Boolean, default: false },
    useBackground: { type: Boolean, default: false },
    progress: { type: [String, Boolean], default: false },
    icon: { type: [String, Boolean], default: "arrow" },
    direction: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["percentage flex items-center gap-2", [
          {
            color: _ctx.useColor,
            "with-background": _ctx.useBackground,
            "opacity-50": _ctx.useOpacity
          },
          _ctx.direction
        ]]
      }, _attrs))} data-v-88dd11f4>`);
      if (_ctx.progress && _ctx.progress === "line") {
        _push(`<span class="progress" data-v-88dd11f4>`);
        _push(ssrRenderComponent(unref(NProgress), {
          type: "line",
          status: _ctx.direction === "up" ? "success" : "error",
          percentage: _ctx.value,
          "show-indicator": false,
          "stroke-width": 18,
          class: "!w-12"
        }, null, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.icon && _ctx.icon === "arrow") {
        _push(`<span class="percentage-icon flex items-center" data-v-88dd11f4>`);
        if (_ctx.direction === "up") {
          _push(ssrRenderComponent(_sfc_main$s, { name: ChevronUp }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (_ctx.direction === "down") {
          _push(ssrRenderComponent(_sfc_main$s, { name: ChevronDown }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.icon && _ctx.icon === "operator") {
        _push(`<span class="percentage-icon" data-v-88dd11f4>${ssrInterpolate(_ctx.direction === "up" ? "+" : "-")}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span data-v-88dd11f4>${ssrInterpolate(_ctx.value)}%</span>`);
      if (_ctx.progress && _ctx.progress === "circle") {
        _push(`<span class="progress flex items-center" data-v-88dd11f4>`);
        _push(ssrRenderComponent(unref(NProgress), {
          type: "circle",
          status: _ctx.direction === "up" ? "success" : "error",
          percentage: _ctx.value,
          "show-indicator": false,
          "stroke-width": 18,
          class: "w-5!"
        }, null, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/Percentage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Percentage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-88dd11f4"]]);

export { DemoChart as D, Percentage as P };
//# sourceMappingURL=Percentage-B3F8dHr0.mjs.map
