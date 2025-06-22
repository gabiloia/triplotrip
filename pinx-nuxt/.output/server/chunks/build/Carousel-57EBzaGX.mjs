import { on, off } from 'evtd';
import { indexMap, getPreciseEventTarget } from 'seemly';
import { useMergedState } from 'vooks';
import { defineComponent, h, cloneVNode, withDirectives, Transition, vShow, ref, computed, toRef, watch, nextTick, provide, normalizeStyle, inject } from 'vue';
import { q as flatten, V as VResizeObserver, T as resolveSlotWithTypedProps, v as useConfig, aS as keep, x as useTheme, aV as carouselLight, k as cB, z as useThemeClass, h as createInjectionKey, n as cE, l as cM, m as c$1, t as throwError } from './server.mjs';
import { camelCase } from 'lodash-es';

const carouselMethodsInjectionKey = createInjectionKey("n-carousel-methods");
function provideCarouselContext(contextValue) {
  provide(carouselMethodsInjectionKey, contextValue);
}
function useCarouselContext(location = "unknown", component = "component") {
  const CarouselContext = inject(carouselMethodsInjectionKey);
  if (!CarouselContext) {
    throwError(location, `\`${component}\` must be placed inside \`n-carousel\`.`);
  }
  return CarouselContext;
}
function renderBackwardIcon() {
  return h("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16"
  }, h("g", {
    fill: "none"
  }, h("path", {
    d: "M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",
    fill: "currentColor"
  })));
}
function renderForwardIcon() {
  return h("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16"
  }, h("g", {
    fill: "none"
  }, h("path", {
    d: "M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",
    fill: "currentColor"
  })));
}
const NCarouselArrow = defineComponent({
  name: "CarouselArrow",
  setup(props) {
    const {
      mergedClsPrefixRef
    } = useConfig(props);
    const {
      isVertical,
      isPrevDisabled,
      isNextDisabled,
      prev,
      next
    } = useCarouselContext();
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      isVertical,
      isPrevDisabled,
      isNextDisabled,
      prev,
      next
    };
  },
  render() {
    const {
      mergedClsPrefix
    } = this;
    return h("div", {
      class: `${mergedClsPrefix}-carousel__arrow-group`
    }, h("div", {
      class: [`${mergedClsPrefix}-carousel__arrow`, this.isPrevDisabled() && `${mergedClsPrefix}-carousel__arrow--disabled`],
      role: "button",
      onClick: this.prev
    }, renderBackwardIcon()), h("div", {
      class: [`${mergedClsPrefix}-carousel__arrow`, this.isNextDisabled() && `${mergedClsPrefix}-carousel__arrow--disabled`],
      role: "button",
      onClick: this.next
    }, renderForwardIcon()));
  }
});
const carouselDotsProps = {
  total: {
    type: Number,
    default: 0
  },
  currentIndex: {
    type: Number,
    default: 0
  },
  dotType: {
    type: String,
    default: "dot"
  },
  trigger: {
    type: String,
    default: "click"
  },
  keyboard: Boolean
};
const NCarouselDots = defineComponent({
  name: "CarouselDots",
  props: carouselDotsProps,
  setup(props) {
    const {
      mergedClsPrefixRef
    } = useConfig(props);
    const dotElsRef = ref([]);
    const NCarousel2 = useCarouselContext();
    function handleKeydown(e, current) {
      switch (e.key) {
        case "Enter":
        case " ":
          e.preventDefault();
          NCarousel2.to(current);
          return;
      }
      if (props.keyboard) {
        handleKeyboard(e);
      }
    }
    function handleMouseenter(current) {
      if (props.trigger === "hover") {
        NCarousel2.to(current);
      }
    }
    function handleClick(current) {
      if (props.trigger === "click") {
        NCarousel2.to(current);
      }
    }
    function handleKeyboard(e) {
      var _a;
      if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
        return;
      }
      const nodeName = (_a = (void 0).activeElement) === null || _a === void 0 ? void 0 : _a.nodeName.toLowerCase();
      if (nodeName === "input" || nodeName === "textarea") {
        return;
      }
      const {
        code: keycode
      } = e;
      const isVerticalNext = keycode === "PageUp" || keycode === "ArrowUp";
      const isVerticalPrev = keycode === "PageDown" || keycode === "ArrowDown";
      const isHorizontalNext = keycode === "PageUp" || keycode === "ArrowRight";
      const isHorizontalPrev = keycode === "PageDown" || keycode === "ArrowLeft";
      const vertical = NCarousel2.isVertical();
      const wantToNext = vertical ? isVerticalNext : isHorizontalNext;
      const wantToPrev = vertical ? isVerticalPrev : isHorizontalPrev;
      if (!wantToNext && !wantToPrev) {
        return;
      }
      e.preventDefault();
      if (wantToNext && !NCarousel2.isNextDisabled()) {
        NCarousel2.next();
        focusDot(NCarousel2.currentIndexRef.value);
      } else if (wantToPrev && !NCarousel2.isPrevDisabled()) {
        NCarousel2.prev();
        focusDot(NCarousel2.currentIndexRef.value);
      }
    }
    function focusDot(index) {
      var _a;
      (_a = dotElsRef.value[index]) === null || _a === void 0 ? void 0 : _a.focus();
    }
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      dotEls: dotElsRef,
      handleKeydown,
      handleMouseenter,
      handleClick
    };
  },
  render() {
    const {
      mergedClsPrefix,
      dotEls
    } = this;
    return h("div", {
      class: [`${mergedClsPrefix}-carousel__dots`, `${mergedClsPrefix}-carousel__dots--${this.dotType}`],
      role: "tablist"
    }, indexMap(this.total, (i) => {
      const selected = i === this.currentIndex;
      return h("div", {
        "aria-selected": selected,
        ref: (el) => dotEls.push(el),
        role: "button",
        tabindex: "0",
        class: [`${mergedClsPrefix}-carousel__dot`, selected && `${mergedClsPrefix}-carousel__dot--active`],
        key: i,
        onClick: () => {
          this.handleClick(i);
        },
        onMouseenter: () => {
          this.handleMouseenter(i);
        },
        onKeydown: (e) => {
          this.handleKeydown(e, i);
        }
      });
    }));
  }
});
const CarouselItemName = "CarouselItem";
function isCarouselItem(child) {
  var _a;
  return ((_a = child.type) === null || _a === void 0 ? void 0 : _a.name) === CarouselItemName;
}
const NCarouselItem = defineComponent({
  name: CarouselItemName,
  setup(props) {
    const {
      mergedClsPrefixRef
    } = useConfig(props);
    const NCarousel2 = useCarouselContext(camelCase(CarouselItemName), `n-${camelCase(CarouselItemName)}`);
    const selfElRef = ref();
    const indexRef = computed(() => {
      const {
        value: selfEl
      } = selfElRef;
      return selfEl ? NCarousel2.getSlideIndex(selfEl) : -1;
    });
    const isPrevRef = computed(() => NCarousel2.isPrev(indexRef.value));
    const isNextRef = computed(() => NCarousel2.isNext(indexRef.value));
    const isActiveRef = computed(() => NCarousel2.isActive(indexRef.value));
    const styleRef = computed(() => NCarousel2.getSlideStyle(indexRef.value));
    function handleClick(event) {
      const {
        value: index
      } = indexRef;
      if (index !== void 0) {
        NCarousel2 === null || NCarousel2 === void 0 ? void 0 : NCarousel2.onCarouselItemClick(index, event);
      }
    }
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      selfElRef,
      isPrev: isPrevRef,
      isNext: isNextRef,
      isActive: isActiveRef,
      index: indexRef,
      style: styleRef,
      handleClick
    };
  },
  render() {
    var _a;
    const {
      $slots: slots,
      mergedClsPrefix,
      isPrev,
      isNext,
      isActive,
      index,
      style: style2
    } = this;
    const className = [`${mergedClsPrefix}-carousel__slide`, {
      [`${mergedClsPrefix}-carousel__slide--current`]: isActive,
      [`${mergedClsPrefix}-carousel__slide--prev`]: isPrev,
      [`${mergedClsPrefix}-carousel__slide--next`]: isNext
    }];
    return h("div", {
      ref: "selfElRef",
      class: className,
      role: "option",
      tabindex: "-1",
      "data-index": index,
      "aria-hidden": !isActive,
      style: style2,
      // We use ts-ignore for vue-tsc, since it seems to patch native event
      // for vue components
      // @ts-expect-error vue's tsx has type for capture events
      onClickCapture: this.handleClick
    }, (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots, {
      isPrev,
      isNext,
      isActive,
      index
    }));
  }
});
const style = cB("carousel", `
 position: relative;
 width: 100%;
 height: 100%;
 touch-action: pan-y;
 overflow: hidden;
`, [cE("slides", `
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 `, [cE("slide", `
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `, [c$1("> img", `
 display: block;
 `)])]), cE("dots", `
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `, [cM("dot", [cE("dot", `
 height: var(--n-dot-size);
 width: var(--n-dot-size);
 background-color: var(--n-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `, [c$1("&:focus", `
 background-color: var(--n-dot-color-focus);
 `), cM("active", `
 background-color: var(--n-dot-color-active);
 `)])]), cM("line", [cE("dot", `
 border-radius: 9999px;
 width: var(--n-dot-line-width);
 height: 4px;
 background-color: var(--n-dot-color);
 cursor: pointer;
 transition:
 width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `, [c$1("&:focus", `
 background-color: var(--n-dot-color-focus);
 `), cM("active", `
 width: var(--n-dot-line-width-active);
 background-color: var(--n-dot-color-active);
 `)])])]), cE("arrow", `
 transition: background-color .3s var(--n-bezier);
 cursor: pointer;
 height: 28px;
 width: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: rgba(255, 255, 255, .2);
 color: var(--n-arrow-color);
 border-radius: 8px;
 user-select: none;
 -webkit-user-select: none;
 font-size: 18px;
 `, [c$1("svg", `
 height: 1em;
 width: 1em;
 `), c$1("&:hover", `
 background-color: rgba(255, 255, 255, .3);
 `)]), cM("vertical", `
 touch-action: pan-x;
 `, [cE("slides", `
 flex-direction: column;
 `), cM("fade", [cE("slide", `
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]), cM("card", [cE("slide", `
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `, [cM("current", `
 transform: translateY(-50%) translateZ(0);
 `), cM("prev", `
 transform: translateY(-100%) translateZ(-200px);
 `), cM("next", `
 transform: translateY(0%) translateZ(-200px);
 `)])])]), cM("usercontrol", [cE("slides", [c$1(">", [c$1("div", `
 position: absolute;
 top: 50%;
 left: 50%;
 width: 100%;
 height: 100%;
 transform: translate(-50%, -50%);
 `)])])]), cM("left", [cE("dots", `
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `, [cM("line", [cE("dot", `
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `, [cM("active", `
 height: var(--n-dot-line-width-active);
 `)])])]), cE("dot", `
 margin: 4px 0;
 `)]), cE("arrow-group", `
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `), cM("vertical", [cE("arrow", `
 transform: rotate(90deg);
 `)]), cM("show-arrow", [cM("bottom", [cE("dots", `
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]), cM("top", [cE("dots", `
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]), cM("left", [cE("dots", `
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]), cM("right", [cE("dots", `
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]), cM("left", [cE("arrow-group", `
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `, [c$1("> *:first-child", `
 margin-bottom: 12px;
 `)])]), cM("right", [cE("dots", `
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `, [cM("line", [cE("dot", `
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `, [cM("active", `
 height: var(--n-dot-line-width-active);
 `)])])]), cE("dot", `
 margin: 4px 0;
 `), cE("arrow-group", `
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `, [c$1("> *:first-child", `
 margin-bottom: 12px;
 `)])]), cM("top", [cE("dots", `
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `, [cM("line", [cE("dot", `
 margin: 0 4px;
 `)])]), cE("dot", `
 margin: 0 4px;
 `), cE("arrow-group", `
 top: 12px;
 right: 12px;
 `, [c$1("> *:first-child", `
 margin-right: 12px;
 `)])]), cM("bottom", [cE("dots", `
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `, [cM("line", [cE("dot", `
 margin: 0 4px;
 `)])]), cE("dot", `
 margin: 0 4px;
 `), cE("arrow-group", `
 bottom: 12px;
 right: 12px;
 `, [c$1("> *:first-child", `
 margin-right: 12px;
 `)])]), cM("fade", [cE("slide", `
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 pointer-events: none;
 `, [cM("current", `
 opacity: 1;
 pointer-events: auto;
 `)])]), cM("card", [cE("slides", `
 perspective: 1000px;
 `), cE("slide", `
 position: absolute;
 left: 50%;
 opacity: 0;
 transform: translateX(-50%) translateZ(-400px);
 transition-property: opacity, transform;
 `, [cM("current", `
 opacity: 1;
 transform: translateX(-50%) translateZ(0);
 z-index: 1;
 `), cM("prev", `
 opacity: 0.4;
 transform: translateX(-100%) translateZ(-200px);
 `), cM("next", `
 opacity: 0.4;
 transform: translateX(0%) translateZ(-200px);
 `)])])]);
function addDuplicateSlides(slides) {
  const {
    length
  } = slides;
  if (length > 1) {
    slides.push(duplicateSlide(slides[0], 0, "append"));
    slides.unshift(duplicateSlide(slides[length - 1], length - 1, "prepend"));
    return slides;
  }
  return slides;
}
function duplicateSlide(child, index, position) {
  return cloneVNode(child, {
    // for patch
    key: `carousel-item-duplicate-${index}-${position}`
  });
}
function getDisplayIndex(current, length, duplicatedable) {
  if (length === 1) return 0;
  return !duplicatedable ? current : current === 0 ? length - 3 : current === length - 1 ? 0 : current - 1;
}
function getRealIndex(current, duplicatedable) {
  return !duplicatedable ? current : current + 1;
}
function getPrevIndex(current, length, duplicatedable) {
  if (current < 0) return null;
  return current === 0 ? duplicatedable ? length - 1 : null : current - 1;
}
function getNextIndex(current, length, duplicatedable) {
  if (current > length - 1) return null;
  return current === length - 1 ? duplicatedable ? 0 : null : current + 1;
}
function getDisplayTotalView(total, duplicatedable) {
  return duplicatedable && total > 3 ? total - 2 : total;
}
function isTouchEvent(e) {
  return (void 0).TouchEvent && e instanceof (void 0).TouchEvent;
}
function calculateSize(element, innerOnly) {
  let {
    offsetWidth: width,
    offsetHeight: height
  } = element;
  if (innerOnly) {
    const style2 = getComputedStyle(element);
    width = width - Number.parseFloat(style2.getPropertyValue("padding-left")) - Number.parseFloat(style2.getPropertyValue("padding-right"));
    height = height - Number.parseFloat(style2.getPropertyValue("padding-top")) - Number.parseFloat(style2.getPropertyValue("padding-bottom"));
  }
  return {
    width,
    height
  };
}
function clampValue(value, min, max) {
  return value < min ? min : value > max ? max : value;
}
function resolveSpeed(value) {
  if (value === void 0) return 0;
  if (typeof value === "number") return value;
  const timeRE = /^((\d+)?\.?\d+?)(ms|s)?$/;
  const match = value.match(timeRE);
  if (match) {
    const [, number, , unit = "ms"] = match;
    return Number(number) * (unit === "ms" ? 1 : 1e3);
  }
  return 0;
}
const transitionProperties = ["transitionDuration", "transitionTimingFunction"];
const carouselProps = Object.assign(Object.assign({}, useTheme.props), {
  defaultIndex: {
    type: Number,
    default: 0
  },
  currentIndex: Number,
  showArrow: Boolean,
  dotType: {
    type: String,
    default: "dot"
  },
  dotPlacement: {
    type: String,
    default: "bottom"
  },
  slidesPerView: {
    type: [Number, String],
    default: 1
  },
  spaceBetween: {
    type: Number,
    default: 0
  },
  centeredSlides: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  autoplay: Boolean,
  interval: {
    type: Number,
    default: 5e3
  },
  loop: {
    type: Boolean,
    default: true
  },
  effect: {
    type: String,
    default: "slide"
  },
  showDots: {
    type: Boolean,
    default: true
  },
  trigger: {
    type: String,
    default: "click"
  },
  transitionStyle: {
    type: Object,
    default: () => ({
      transitionDuration: "300ms"
    })
  },
  transitionProps: Object,
  draggable: Boolean,
  prevSlideStyle: [Object, String],
  nextSlideStyle: [Object, String],
  touchable: {
    type: Boolean,
    default: true
  },
  mousewheel: Boolean,
  keyboard: Boolean,
  "onUpdate:currentIndex": Function,
  onUpdateCurrentIndex: Function
});
let globalDragging = false;
const NCarousel = defineComponent({
  name: "Carousel",
  props: carouselProps,
  slots: Object,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const selfElRef = ref(null);
    const slidesElRef = ref(null);
    const slideElsRef = ref([]);
    const slideVNodesRef = {
      value: []
    };
    const verticalRef = computed(() => props.direction === "vertical");
    const sizeAxisRef = computed(() => verticalRef.value ? "height" : "width");
    const spaceAxisRef = computed(() => verticalRef.value ? "bottom" : "right");
    const sequenceLayoutRef = computed(() => props.effect === "slide");
    const duplicatedableRef = computed(
      // duplicate the copy operation in `slide` mode,
      // because only its DOM is sequence layout
      () => props.loop && props.slidesPerView === 1 && sequenceLayoutRef.value
    );
    const userWantsControlRef = computed(() => props.effect === "custom");
    const displaySlidesPerViewRef = computed(() => !sequenceLayoutRef.value || props.centeredSlides ? 1 : props.slidesPerView);
    const realSlidesPerViewRef = computed(() => userWantsControlRef.value ? 1 : props.slidesPerView);
    const autoSlideSizeRef = computed(() => displaySlidesPerViewRef.value === "auto" || props.slidesPerView === "auto" && props.centeredSlides);
    const perViewSizeRef = ref({
      width: 0,
      height: 0
    });
    const slideSizesTrigger = ref(0);
    const slideSizesRef = computed(() => {
      const {
        value: slidesEls
      } = slideElsRef;
      if (!slidesEls.length) return [];
      slideSizesTrigger.value;
      const {
        value: autoSlideSize
      } = autoSlideSizeRef;
      if (autoSlideSize) {
        return slidesEls.map((slide) => calculateSize(slide));
      }
      const {
        value: slidesPerView
      } = realSlidesPerViewRef;
      const {
        value: perViewSize
      } = perViewSizeRef;
      const {
        value: axis
      } = sizeAxisRef;
      let axisSize = perViewSize[axis];
      if (slidesPerView !== "auto") {
        const {
          spaceBetween
        } = props;
        const remaining = axisSize - (slidesPerView - 1) * spaceBetween;
        const percentage = 1 / Math.max(1, slidesPerView);
        axisSize = remaining * percentage;
      }
      const slideSize = Object.assign(Object.assign({}, perViewSize), {
        [axis]: axisSize
      });
      return slidesEls.map(() => slideSize);
    });
    const slideTranlatesRef = computed(() => {
      const {
        value: slideSizes
      } = slideSizesRef;
      if (!slideSizes.length) return [];
      const {
        centeredSlides,
        spaceBetween
      } = props;
      const {
        value: axis
      } = sizeAxisRef;
      const {
        [axis]: perViewSize
      } = perViewSizeRef.value;
      let previousTranslate2 = 0;
      return slideSizes.map(({
        [axis]: slideSize
      }) => {
        let translate = previousTranslate2;
        if (centeredSlides) {
          translate += (slideSize - perViewSize) / 2;
        }
        previousTranslate2 += slideSize + spaceBetween;
        return translate;
      });
    });
    const isMountedRef = ref(false);
    const transitionStyleRef = computed(() => {
      const {
        transitionStyle
      } = props;
      return transitionStyle ? keep(transitionStyle, transitionProperties) : {};
    });
    const speedRef = computed(() => userWantsControlRef.value ? 0 : resolveSpeed(transitionStyleRef.value.transitionDuration));
    const slideStylesRef = computed(() => {
      const {
        value: slidesEls
      } = slideElsRef;
      if (!slidesEls.length) return [];
      const useComputedSize = !(autoSlideSizeRef.value || realSlidesPerViewRef.value === 1);
      const getSlideSize = (index) => {
        if (useComputedSize) {
          const {
            value: axis
          } = sizeAxisRef;
          return {
            [axis]: `${slideSizesRef.value[index][axis]}px`
          };
        }
      };
      if (userWantsControlRef.value) {
        return slidesEls.map((_, i) => getSlideSize(i));
      }
      const {
        effect,
        spaceBetween
      } = props;
      const {
        value: spaceAxis
      } = spaceAxisRef;
      return slidesEls.reduce((styles, _, i) => {
        const style2 = Object.assign(Object.assign({}, getSlideSize(i)), {
          [`margin-${spaceAxis}`]: `${spaceBetween}px`
        });
        styles.push(style2);
        if (isMountedRef.value && (effect === "fade" || effect === "card")) {
          Object.assign(style2, transitionStyleRef.value);
        }
        return styles;
      }, []);
    });
    const totalViewRef = computed(() => {
      const {
        value: slidesPerView
      } = displaySlidesPerViewRef;
      const {
        length: totalSlides
      } = slideElsRef.value;
      if (slidesPerView !== "auto") {
        return Math.max(totalSlides - slidesPerView, 0) + 1;
      } else {
        const {
          value: slideSizes
        } = slideSizesRef;
        const {
          length
        } = slideSizes;
        if (!length) return totalSlides;
        const {
          value: translates
        } = slideTranlatesRef;
        const {
          value: axis
        } = sizeAxisRef;
        const perViewSize = perViewSizeRef.value[axis];
        let lastViewSize = slideSizes[slideSizes.length - 1][axis];
        let i = length;
        while (i > 1 && lastViewSize < perViewSize) {
          i--;
          lastViewSize += translates[i] - translates[i - 1];
        }
        return clampValue(i + 1, 1, length);
      }
    });
    const displayTotalViewRef = computed(() => getDisplayTotalView(totalViewRef.value, duplicatedableRef.value));
    const defaultRealIndex = getRealIndex(props.defaultIndex, duplicatedableRef.value);
    const uncontrolledDisplayIndexRef = ref(getDisplayIndex(defaultRealIndex, totalViewRef.value, duplicatedableRef.value));
    const mergedDisplayIndexRef = useMergedState(toRef(props, "currentIndex"), uncontrolledDisplayIndexRef);
    const realIndexRef = computed(() => getRealIndex(mergedDisplayIndexRef.value, duplicatedableRef.value));
    function toRealIndex(index) {
      var _a, _b;
      index = clampValue(index, 0, totalViewRef.value - 1);
      const displayIndex = getDisplayIndex(index, totalViewRef.value, duplicatedableRef.value);
      const {
        value: lastDisplayIndex
      } = mergedDisplayIndexRef;
      if (displayIndex !== mergedDisplayIndexRef.value) {
        uncontrolledDisplayIndexRef.value = displayIndex;
        (_a = props["onUpdate:currentIndex"]) === null || _a === void 0 ? void 0 : _a.call(props, displayIndex, lastDisplayIndex);
        (_b = props.onUpdateCurrentIndex) === null || _b === void 0 ? void 0 : _b.call(props, displayIndex, lastDisplayIndex);
      }
    }
    function getRealPrevIndex(index = realIndexRef.value) {
      return getPrevIndex(index, totalViewRef.value, props.loop);
    }
    function getRealNextIndex(index = realIndexRef.value) {
      return getNextIndex(index, totalViewRef.value, props.loop);
    }
    function isRealPrev(slideOrIndex) {
      const index = getSlideIndex(slideOrIndex);
      return index !== null && getRealPrevIndex() === index;
    }
    function isRealNext(slideOrIndex) {
      const index = getSlideIndex(slideOrIndex);
      return index !== null && getRealNextIndex() === index;
    }
    function isRealActive(slideOrIndex) {
      return realIndexRef.value === getSlideIndex(slideOrIndex);
    }
    function isDisplayActive(index) {
      return mergedDisplayIndexRef.value === index;
    }
    function isPrevDisabled() {
      return getRealPrevIndex() === null;
    }
    function isNextDisabled() {
      return getRealNextIndex() === null;
    }
    let expectedTransitionDirection = 0;
    function to(index) {
      const realIndex = clampValue(getRealIndex(index, duplicatedableRef.value), 0, totalViewRef.value);
      if (index !== mergedDisplayIndexRef.value || realIndex !== realIndexRef.value) {
        toRealIndex(realIndex);
      }
    }
    function prev() {
      const prevIndex = getRealPrevIndex();
      if (prevIndex !== null) {
        expectedTransitionDirection = -1;
        toRealIndex(prevIndex);
      }
    }
    function next() {
      const nextIndex = getRealNextIndex();
      if (nextIndex !== null) {
        expectedTransitionDirection = 1;
        toRealIndex(nextIndex);
      }
    }
    let inTransition = false;
    function prevIfSlideTransitionEnd() {
      if (!inTransition || !duplicatedableRef.value) prev();
    }
    function nextIfSlideTransitionEnd() {
      if (!inTransition || !duplicatedableRef.value) next();
    }
    let previousTranslate = 0;
    const translateStyleRef = ref({});
    function updateTranslate(translate, speed = 0) {
      translateStyleRef.value = Object.assign({}, transitionStyleRef.value, {
        transform: verticalRef.value ? `translateY(${-translate}px)` : `translateX(${-translate}px)`,
        transitionDuration: `${speed}ms`
      });
    }
    function fixTranslate(speed = 0) {
      if (sequenceLayoutRef.value) {
        translateTo(realIndexRef.value, speed);
      } else if (previousTranslate !== 0) {
        if (!inTransition && speed > 0) {
          inTransition = true;
        }
        updateTranslate(previousTranslate = 0, speed);
      }
    }
    function translateTo(index, speed) {
      const translate = getTranslate(index);
      if (translate !== previousTranslate && speed > 0) {
        inTransition = true;
      }
      previousTranslate = getTranslate(realIndexRef.value);
      updateTranslate(translate, speed);
    }
    function getTranslate(index) {
      let translate;
      if (index >= totalViewRef.value - 1) {
        translate = getLastViewTranslate();
      } else {
        translate = slideTranlatesRef.value[index] || 0;
      }
      return translate;
    }
    function getLastViewTranslate() {
      if (displaySlidesPerViewRef.value === "auto") {
        const {
          value: axis
        } = sizeAxisRef;
        const {
          [axis]: perViewSize
        } = perViewSizeRef.value;
        const {
          value: translates
        } = slideTranlatesRef;
        const lastTranslate = translates[translates.length - 1];
        let overallSize;
        if (lastTranslate === void 0) {
          overallSize = perViewSize;
        } else {
          const {
            value: slideSizes
          } = slideSizesRef;
          overallSize = lastTranslate + slideSizes[slideSizes.length - 1][axis];
        }
        return overallSize - perViewSize;
      } else {
        const {
          value: translates
        } = slideTranlatesRef;
        return translates[totalViewRef.value - 1] || 0;
      }
    }
    const carouselContext = {
      currentIndexRef: mergedDisplayIndexRef,
      to,
      prev: prevIfSlideTransitionEnd,
      next: nextIfSlideTransitionEnd,
      isVertical: () => verticalRef.value,
      isHorizontal: () => !verticalRef.value,
      isPrev: isRealPrev,
      isNext: isRealNext,
      isActive: isRealActive,
      isPrevDisabled,
      isNextDisabled,
      getSlideIndex,
      getSlideStyle,
      addSlide,
      removeSlide,
      onCarouselItemClick
    };
    provideCarouselContext(carouselContext);
    function addSlide(slide) {
      if (!slide) return;
      slideElsRef.value.push(slide);
    }
    function removeSlide(slide) {
      if (!slide) return;
      const index = getSlideIndex(slide);
      if (index !== -1) {
        slideElsRef.value.splice(index, 1);
      }
    }
    function getSlideIndex(slideOrIndex) {
      return typeof slideOrIndex === "number" ? slideOrIndex : slideOrIndex ? slideElsRef.value.indexOf(slideOrIndex) : -1;
    }
    function getSlideStyle(slide) {
      const index = getSlideIndex(slide);
      if (index !== -1) {
        const styles = [slideStylesRef.value[index]];
        const isPrev = carouselContext.isPrev(index);
        const isNext = carouselContext.isNext(index);
        if (isPrev) {
          styles.push(props.prevSlideStyle || "");
        }
        if (isNext) {
          styles.push(props.nextSlideStyle || "");
        }
        return normalizeStyle(styles);
      }
    }
    let dragStartX = 0;
    let dragStartY = 0;
    let dragOffset = 0;
    let dragStartTime = 0;
    let dragging = false;
    let isEffectiveDrag = false;
    function onCarouselItemClick(index, event) {
      let allowClick = !inTransition && !dragging && !isEffectiveDrag;
      if (props.effect === "card" && allowClick && !isRealActive(index)) {
        to(index);
        allowClick = false;
      }
      if (!allowClick) {
        event.preventDefault();
        event.stopPropagation();
      }
    }
    let autoplayTimer = null;
    function stopAutoplay() {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
    }
    function resetAutoplay() {
      stopAutoplay();
      const disabled = !props.autoplay || displayTotalViewRef.value < 2;
      if (!disabled) {
        autoplayTimer = (void 0).setInterval(next, props.interval);
      }
    }
    function handleTouchstart(event) {
      var _a;
      if (globalDragging) return;
      if (!((_a = slidesElRef.value) === null || _a === void 0 ? void 0 : _a.contains(getPreciseEventTarget(event)))) {
        return;
      }
      globalDragging = true;
      dragging = true;
      isEffectiveDrag = false;
      dragStartTime = Date.now();
      stopAutoplay();
      if (event.type !== "touchstart" && !event.target.isContentEditable) {
        event.preventDefault();
      }
      const touchEvent = isTouchEvent(event) ? event.touches[0] : event;
      if (verticalRef.value) {
        dragStartY = touchEvent.clientY;
      } else {
        dragStartX = touchEvent.clientX;
      }
      if (props.touchable) {
        on("touchmove", void 0, handleTouchmove);
        on("touchend", void 0, handleTouchend);
        on("touchcancel", void 0, handleTouchend);
      }
      if (props.draggable) {
        on("mousemove", void 0, handleTouchmove);
        on("mouseup", void 0, handleTouchend);
      }
    }
    function handleTouchmove(event) {
      const {
        value: vertical
      } = verticalRef;
      const {
        value: axis
      } = sizeAxisRef;
      const touchEvent = isTouchEvent(event) ? event.touches[0] : event;
      const offset = vertical ? touchEvent.clientY - dragStartY : touchEvent.clientX - dragStartX;
      const perViewSize = perViewSizeRef.value[axis];
      dragOffset = clampValue(offset, -perViewSize, perViewSize);
      if (event.cancelable) {
        event.preventDefault();
      }
      if (sequenceLayoutRef.value) {
        updateTranslate(previousTranslate - dragOffset, 0);
      }
    }
    function handleTouchend() {
      const {
        value: realIndex
      } = realIndexRef;
      let currentIndex = realIndex;
      if (!inTransition && dragOffset !== 0 && sequenceLayoutRef.value) {
        const currentTranslate = previousTranslate - dragOffset;
        const translates = [...slideTranlatesRef.value.slice(0, totalViewRef.value - 1), getLastViewTranslate()];
        let prevOffset = null;
        for (let i = 0; i < translates.length; i++) {
          const offset = Math.abs(translates[i] - currentTranslate);
          if (prevOffset !== null && prevOffset < offset) {
            break;
          }
          prevOffset = offset;
          currentIndex = i;
        }
      }
      if (currentIndex === realIndex) {
        const timeElapsed = Date.now() - dragStartTime;
        const {
          value: axis
        } = sizeAxisRef;
        const perViewSize = perViewSizeRef.value[axis];
        if (dragOffset > perViewSize / 2 || dragOffset / timeElapsed > 0.4) {
          prev();
        } else if (dragOffset < -perViewSize / 2 || dragOffset / timeElapsed < -0.4) {
          next();
        }
      }
      if (currentIndex !== null && currentIndex !== realIndex) {
        isEffectiveDrag = true;
        toRealIndex(currentIndex);
        void nextTick(() => {
          if (!duplicatedableRef.value || uncontrolledDisplayIndexRef.value !== mergedDisplayIndexRef.value) {
            fixTranslate(speedRef.value);
          }
        });
      } else {
        fixTranslate(speedRef.value);
      }
      resetDragStatus();
      resetAutoplay();
    }
    function resetDragStatus() {
      if (dragging) {
        globalDragging = false;
      }
      dragging = false;
      dragStartX = 0;
      dragStartY = 0;
      dragOffset = 0;
      dragStartTime = 0;
      off("touchmove", void 0, handleTouchmove);
      off("touchend", void 0, handleTouchend);
      off("touchcancel", void 0, handleTouchend);
      off("mousemove", void 0, handleTouchmove);
      off("mouseup", void 0, handleTouchend);
    }
    function handleTransitionEnd() {
      if (sequenceLayoutRef.value && inTransition) {
        const {
          value: realIndex
        } = realIndexRef;
        translateTo(realIndex, 0);
      } else {
        resetAutoplay();
      }
      if (sequenceLayoutRef.value) {
        translateStyleRef.value.transitionDuration = "0ms";
      }
      inTransition = false;
    }
    function handleMousewheel(event) {
      event.preventDefault();
      if (inTransition) return;
      let {
        deltaX,
        deltaY
      } = event;
      if (event.shiftKey && !deltaX) {
        deltaX = deltaY;
      }
      const prevMultiplier = -1;
      const nextMultiplier = 1;
      const m = (deltaX || deltaY) > 0 ? nextMultiplier : prevMultiplier;
      let rx = 0;
      let ry = 0;
      if (verticalRef.value) {
        ry = m;
      } else {
        rx = m;
      }
      const responseStep = 10;
      if (ry * deltaY >= responseStep || rx * deltaX >= responseStep) {
        if (m === nextMultiplier && !isNextDisabled()) {
          next();
        } else if (m === prevMultiplier && !isPrevDisabled()) {
          prev();
        }
      }
    }
    function handleResize() {
      perViewSizeRef.value = calculateSize(selfElRef.value, true);
      resetAutoplay();
    }
    function handleSlideResize() {
      if (autoSlideSizeRef.value) {
        slideSizesTrigger.value++;
      }
    }
    function handleMouseenter() {
      if (props.autoplay) {
        stopAutoplay();
      }
    }
    function handleMouseleave() {
      if (props.autoplay) {
        resetAutoplay();
      }
    }
    watch(realIndexRef, (nextRealIndex, lastRealIndex) => {
      if (nextRealIndex === lastRealIndex) {
        expectedTransitionDirection = 0;
        return;
      }
      resetAutoplay();
      if (sequenceLayoutRef.value) {
        if (duplicatedableRef.value) {
          const {
            value: length
          } = totalViewRef;
          if (expectedTransitionDirection === -1 && lastRealIndex === 1 && nextRealIndex === length - 2) {
            nextRealIndex = 0;
          } else if (expectedTransitionDirection === 1 && lastRealIndex === length - 2 && nextRealIndex === 1) {
            nextRealIndex = length - 1;
          }
        }
        translateTo(nextRealIndex, speedRef.value);
      } else {
        fixTranslate();
      }
      expectedTransitionDirection = 0;
    }, {
      immediate: true
    });
    watch([duplicatedableRef, displaySlidesPerViewRef], () => void nextTick(() => {
      toRealIndex(realIndexRef.value);
    }));
    watch(slideTranlatesRef, () => {
      if (sequenceLayoutRef.value) {
        fixTranslate();
      }
    }, {
      deep: true
    });
    watch(sequenceLayoutRef, (value) => {
      if (!value) {
        inTransition = false;
        updateTranslate(previousTranslate = 0);
      } else {
        fixTranslate();
      }
    });
    const slidesControlListenersRef = computed(() => {
      return {
        onTouchstartPassive: props.touchable ? handleTouchstart : void 0,
        onMousedown: props.draggable ? handleTouchstart : void 0,
        onWheel: props.mousewheel ? handleMousewheel : void 0
      };
    });
    const arrowSlotPropsRef = computed(() => Object.assign(Object.assign({}, keep(carouselContext, ["to", "prev", "next", "isPrevDisabled", "isNextDisabled"])), {
      total: displayTotalViewRef.value,
      currentIndex: mergedDisplayIndexRef.value
    }));
    const dotSlotPropsRef = computed(() => ({
      total: displayTotalViewRef.value,
      currentIndex: mergedDisplayIndexRef.value,
      to: carouselContext.to
    }));
    const caroulseExposedMethod = {
      getCurrentIndex: () => mergedDisplayIndexRef.value,
      to,
      prev,
      next
    };
    const themeRef = useTheme("Carousel", "-carousel", style, carouselLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          dotSize,
          dotColor,
          dotColorActive,
          dotColorFocus,
          dotLineWidth,
          dotLineWidthActive,
          arrowColor
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-dot-color": dotColor,
        "--n-dot-color-focus": dotColorFocus,
        "--n-dot-color-active": dotColorActive,
        "--n-dot-size": dotSize,
        "--n-dot-line-width": dotLineWidth,
        "--n-dot-line-width-active": dotLineWidthActive,
        "--n-arrow-color": arrowColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("carousel", void 0, cssVarsRef, props) : void 0;
    return Object.assign(Object.assign({
      mergedClsPrefix: mergedClsPrefixRef,
      selfElRef,
      slidesElRef,
      slideVNodes: slideVNodesRef,
      duplicatedable: duplicatedableRef,
      userWantsControl: userWantsControlRef,
      autoSlideSize: autoSlideSizeRef,
      realIndex: realIndexRef,
      slideStyles: slideStylesRef,
      translateStyle: translateStyleRef,
      slidesControlListeners: slidesControlListenersRef,
      handleTransitionEnd,
      handleResize,
      handleSlideResize,
      handleMouseenter,
      handleMouseleave,
      isActive: isDisplayActive,
      arrowSlotProps: arrowSlotPropsRef,
      dotSlotProps: dotSlotPropsRef
    }, caroulseExposedMethod), {
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    });
  },
  render() {
    var _a;
    const {
      mergedClsPrefix,
      showArrow,
      userWantsControl,
      slideStyles,
      dotType,
      dotPlacement,
      slidesControlListeners,
      transitionProps = {},
      arrowSlotProps,
      dotSlotProps,
      $slots: {
        default: defaultSlot,
        dots: dotsSlot,
        arrow: arrowSlot
      }
    } = this;
    const children = defaultSlot && flatten(defaultSlot()) || [];
    let slides = filterCarouselItem(children);
    if (!slides.length) {
      slides = children.map((ch) => h(NCarouselItem, null, {
        default: () => cloneVNode(ch)
      }));
    }
    if (this.duplicatedable) {
      slides = addDuplicateSlides(slides);
    }
    this.slideVNodes.value = slides;
    if (this.autoSlideSize) {
      slides = slides.map((slide) => h(VResizeObserver, {
        onResize: this.handleSlideResize
      }, {
        default: () => slide
      }));
    }
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h("div", Object.assign({
      ref: "selfElRef",
      class: [this.themeClass, `${mergedClsPrefix}-carousel`, this.direction === "vertical" && `${mergedClsPrefix}-carousel--vertical`, this.showArrow && `${mergedClsPrefix}-carousel--show-arrow`, `${mergedClsPrefix}-carousel--${dotPlacement}`, `${mergedClsPrefix}-carousel--${this.direction}`, `${mergedClsPrefix}-carousel--${this.effect}`, userWantsControl && `${mergedClsPrefix}-carousel--usercontrol`],
      style: this.cssVars
    }, slidesControlListeners, {
      onMouseenter: this.handleMouseenter,
      onMouseleave: this.handleMouseleave
    }), h(VResizeObserver, {
      onResize: this.handleResize
    }, {
      default: () => h("div", {
        ref: "slidesElRef",
        class: `${mergedClsPrefix}-carousel__slides`,
        role: "listbox",
        style: this.translateStyle,
        onTransitionend: this.handleTransitionEnd
      }, userWantsControl ? slides.map((slide, i) => h("div", {
        style: slideStyles[i],
        key: i
      }, withDirectives(h(Transition, Object.assign({}, transitionProps), {
        default: () => slide
      }), [[vShow, this.isActive(i)]]))) : slides)
    }), this.showDots && dotSlotProps.total > 1 && resolveSlotWithTypedProps(dotsSlot, dotSlotProps, () => [h(NCarouselDots, {
      key: dotType + dotPlacement,
      total: dotSlotProps.total,
      currentIndex: dotSlotProps.currentIndex,
      dotType,
      trigger: this.trigger,
      keyboard: this.keyboard
    })]), showArrow && resolveSlotWithTypedProps(arrowSlot, arrowSlotProps, () => [h(NCarouselArrow, null)]));
  }
});
function filterCarouselItem(vnodes) {
  return vnodes.reduce((carouselItems, vnode) => {
    if (isCarouselItem(vnode)) {
      carouselItems.push(vnode);
    }
    return carouselItems;
  }, []);
}

export { NCarousel as N };
//# sourceMappingURL=Carousel-57EBzaGX.mjs.map
