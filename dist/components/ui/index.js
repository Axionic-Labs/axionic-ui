var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};

// src/components/ui/absolute-center.tsx
import { ark } from "@ark-ui/react/factory";

// styled-system/jsx/factory.mjs
import { createElement, forwardRef, useMemo } from "react";

// styled-system/helpers.mjs
function isObject(value) {
  return typeof value === "object" && value != null && !Array.isArray(value);
}
var isObjectOrArray = (obj) => typeof obj === "object" && obj !== null;
function compact(value) {
  return Object.fromEntries(Object.entries(value ?? {}).filter(([_, value2]) => value2 !== undefined));
}
var isBaseCondition = (v) => v === "base";
function filterBaseConditions(c) {
  return c.slice().filter((v) => !isBaseCondition(v));
}
function toChar(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
}
function toName(code) {
  let name = "";
  let x;
  for (x = Math.abs(code);x > 52; x = x / 52 | 0)
    name = toChar(x % 52) + name;
  return toChar(x % 52) + name;
}
function toPhash(h, x) {
  let i = x.length;
  while (i)
    h = h * 33 ^ x.charCodeAt(--i);
  return h;
}
function toHash(value) {
  return toName(toPhash(5381, value) >>> 0);
}
var importantRegex = /\s*!(important)?/i;
function isImportant(value) {
  return typeof value === "string" ? importantRegex.test(value) : false;
}
function withoutImportant(value) {
  return typeof value === "string" ? value.replace(importantRegex, "").trim() : value;
}
function withoutSpace(str) {
  return typeof str === "string" ? str.replaceAll(" ", "_") : str;
}
var memo = (fn) => {
  const cache = /* @__PURE__ */ new Map;
  const get = (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
  return get;
};
var MERGE_OMIT = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]);
function mergeProps(...sources) {
  return sources.reduce((prev, obj) => {
    if (!obj)
      return prev;
    Object.keys(obj).forEach((key) => {
      if (MERGE_OMIT.has(key))
        return;
      const prevValue = prev[key];
      const value = obj[key];
      if (isObject(prevValue) && isObject(value)) {
        prev[key] = mergeProps(prevValue, value);
      } else {
        prev[key] = value;
      }
    });
    return prev;
  }, {});
}
var isNotNullish = (element) => element != null;
function walkObject(target, predicate, options = {}) {
  const { stop, getKey } = options;
  function inner(value, path = []) {
    if (isObjectOrArray(value)) {
      const result = {};
      for (const [prop, child] of Object.entries(value)) {
        const key = getKey?.(prop, child) ?? prop;
        const childPath = [...path, key];
        if (stop?.(value, childPath)) {
          return predicate(value, path);
        }
        const next = inner(child, childPath);
        if (isNotNullish(next)) {
          result[key] = next;
        }
      }
      return result;
    }
    return predicate(value, path);
  }
  return inner(target);
}
function mapObject(obj, fn) {
  if (Array.isArray(obj))
    return obj.map((value) => fn(value));
  if (!isObject(obj))
    return fn(obj);
  return walkObject(obj, (value) => fn(value));
}
function toResponsiveObject(values, breakpoints) {
  return values.reduce((acc, current, index) => {
    const key = breakpoints[index];
    if (current != null) {
      acc[key] = current;
    }
    return acc;
  }, {});
}
function normalizeStyleObject(styles, context, shorthand = true) {
  const { utility, conditions } = context;
  const { hasShorthand, resolveShorthand } = utility;
  return walkObject(styles, (value) => {
    return Array.isArray(value) ? toResponsiveObject(value, conditions.breakpoints.keys) : value;
  }, {
    stop: (value) => Array.isArray(value),
    getKey: shorthand ? (prop) => hasShorthand ? resolveShorthand(prop) : prop : undefined
  });
}
var fallbackCondition = {
  shift: (v) => v,
  finalize: (v) => v,
  breakpoints: { keys: [] }
};
var sanitize = (value) => typeof value === "string" ? value.replaceAll(/[\n\s]+/g, " ") : value;
function createCss(context) {
  const { utility, hash, conditions: conds = fallbackCondition } = context;
  const formatClassName = (str) => [utility.prefix, str].filter(Boolean).join("-");
  const hashFn = (conditions, className) => {
    let result;
    if (hash) {
      const baseArray = [...conds.finalize(conditions), className];
      result = formatClassName(utility.toHash(baseArray, toHash));
    } else {
      const baseArray = [...conds.finalize(conditions), formatClassName(className)];
      result = baseArray.join(":");
    }
    return result;
  };
  return memo(({ base, ...styles } = {}) => {
    const styleObject = Object.assign(styles, base);
    const normalizedObject = normalizeStyleObject(styleObject, context);
    const classNames = /* @__PURE__ */ new Set;
    walkObject(normalizedObject, (value, paths) => {
      if (value == null)
        return;
      const important = isImportant(value);
      const [prop, ...allConditions] = conds.shift(paths);
      const conditions = filterBaseConditions(allConditions);
      const transformed = utility.transform(prop, withoutImportant(sanitize(value)));
      let className = hashFn(conditions, transformed.className);
      if (important)
        className = `${className}!`;
      classNames.add(className);
    });
    return Array.from(classNames).join(" ");
  });
}
function compactStyles(...styles) {
  return styles.flat().filter((style) => isObject(style) && Object.keys(compact(style)).length > 0);
}
function createMergeCss(context) {
  function resolve(styles) {
    const allStyles = compactStyles(...styles);
    if (allStyles.length === 1)
      return allStyles;
    return allStyles.map((style) => normalizeStyleObject(style, context));
  }
  function mergeCss(...styles) {
    return mergeProps(...resolve(styles));
  }
  function assignCss(...styles) {
    return Object.assign({}, ...resolve(styles));
  }
  return { mergeCss: memo(mergeCss), assignCss };
}
var wordRegex = /([A-Z])/g;
var msRegex = /^ms-/;
var hypenateProperty = memo((property) => {
  if (property.startsWith("--"))
    return property;
  return property.replace(wordRegex, "-$1").replace(msRegex, "-ms-").toLowerCase();
});
var fns = ["min", "max", "clamp", "calc"];
var fnRegExp = new RegExp(`^(${fns.join("|")})\\(.*\\)`);
var isCssFunction = (v) => typeof v === "string" && fnRegExp.test(v);
var lengthUnits = "cm,mm,Q,in,pc,pt,px,em,ex,ch,rem,lh,rlh,vw,vh,vmin,vmax,vb,vi,svw,svh,lvw,lvh,dvw,dvh,cqw,cqh,cqi,cqb,cqmin,cqmax,%";
var lengthUnitsPattern = `(?:${lengthUnits.split(",").join("|")})`;
var lengthRegExp = new RegExp(`^[+-]?[0-9]*.?[0-9]+(?:[eE][+-]?[0-9]+)?${lengthUnitsPattern}$`);
var isCssUnit = (v) => typeof v === "string" && lengthRegExp.test(v);
var isCssVar = (v) => typeof v === "string" && /^var\(--.+\)$/.test(v);
var patternFns = {
  map: mapObject,
  isCssFunction,
  isCssVar,
  isCssUnit
};
var getPatternStyles = (pattern, styles) => {
  if (!pattern?.defaultValues)
    return styles;
  const defaults = typeof pattern.defaultValues === "function" ? pattern.defaultValues(styles) : pattern.defaultValues;
  return Object.assign({}, defaults, compact(styles));
};
var getSlotRecipes = (recipe = {}) => {
  const init = (slot) => ({
    className: [recipe.className, slot].filter(Boolean).join("__"),
    base: recipe.base?.[slot] ?? {},
    variants: {},
    defaultVariants: recipe.defaultVariants ?? {},
    compoundVariants: recipe.compoundVariants ? getSlotCompoundVariant(recipe.compoundVariants, slot) : []
  });
  const slots = recipe.slots ?? [];
  const recipeParts = slots.map((slot) => [slot, init(slot)]);
  for (const [variantsKey, variantsSpec] of Object.entries(recipe.variants ?? {})) {
    for (const [variantKey, variantSpec] of Object.entries(variantsSpec)) {
      recipeParts.forEach(([slot, slotRecipe]) => {
        slotRecipe.variants[variantsKey] ??= {};
        slotRecipe.variants[variantsKey][variantKey] = variantSpec[slot] ?? {};
      });
    }
  }
  return Object.fromEntries(recipeParts);
};
var getSlotCompoundVariant = (compoundVariants, slotName) => compoundVariants.filter((compoundVariant) => compoundVariant.css[slotName]).map((compoundVariant) => ({ ...compoundVariant, css: compoundVariant.css[slotName] }));
function splitProps(props, ...keys) {
  const descriptors = Object.getOwnPropertyDescriptors(props);
  const dKeys = Object.keys(descriptors);
  const split = (k) => {
    const clone = {};
    for (let i = 0;i < k.length; i++) {
      const key = k[i];
      if (descriptors[key]) {
        Object.defineProperty(clone, key, descriptors[key]);
        delete descriptors[key];
      }
    }
    return clone;
  };
  const fn = (key) => split(Array.isArray(key) ? key : dKeys.filter(key));
  return keys.map(fn).concat(split(dKeys));
}
var uniq = (...items) => {
  const set = items.reduce((acc, currItems) => {
    if (currItems) {
      currItems.forEach((item) => acc.add(item));
    }
    return acc;
  }, /* @__PURE__ */ new Set([]));
  return Array.from(set);
};
var htmlProps = ["htmlSize", "htmlTranslate", "htmlWidth", "htmlHeight"];
function convert(key) {
  return htmlProps.includes(key) ? key.replace("html", "").toLowerCase() : key;
}
function normalizeHTMLProps(props) {
  return Object.fromEntries(Object.entries(props).map(([key, value]) => [convert(key), value]));
}
normalizeHTMLProps.keys = htmlProps;

// styled-system/css/conditions.mjs
var conditionsStr = "_hover,_focus,_focusWithin,_focusVisible,_disabled,_active,_visited,_target,_readOnly,_readWrite,_empty,_checked,_enabled,_expanded,_highlighted,_complete,_incomplete,_dragging,_before,_after,_firstLetter,_firstLine,_marker,_selection,_file,_backdrop,_first,_last,_only,_even,_odd,_firstOfType,_lastOfType,_onlyOfType,_peerFocus,_peerHover,_peerActive,_peerFocusWithin,_peerFocusVisible,_peerDisabled,_peerChecked,_peerInvalid,_peerExpanded,_peerPlaceholderShown,_groupFocus,_groupHover,_groupActive,_groupFocusWithin,_groupFocusVisible,_groupDisabled,_groupChecked,_groupExpanded,_groupInvalid,_indeterminate,_required,_valid,_invalid,_autofill,_inRange,_outOfRange,_placeholder,_placeholderShown,_pressed,_selected,_grabbed,_underValue,_overValue,_atValue,_default,_optional,_open,_closed,_fullscreen,_loading,_hidden,_current,_currentPage,_currentStep,_today,_unavailable,_rangeStart,_rangeEnd,_now,_topmost,_motionReduce,_motionSafe,_print,_landscape,_portrait,_dark,_light,_osDark,_osLight,_highContrast,_lessContrast,_moreContrast,_ltr,_rtl,_scrollbar,_scrollbarThumb,_scrollbarTrack,_horizontal,_vertical,_icon,_starting,_noscript,_invertedColors,_collapsed,_off,_on,sm,smOnly,smDown,md,mdOnly,mdDown,lg,lgOnly,lgDown,xl,xlOnly,xlDown,2xl,2xlOnly,2xlDown,smToMd,smToLg,smToXl,smTo2xl,mdToLg,mdToXl,mdTo2xl,lgToXl,lgTo2xl,xlTo2xl,base";
var conditions = new Set(conditionsStr.split(","));
var conditionRegex = /^@|&|&$/;
function isCondition(value) {
  return conditions.has(value) || conditionRegex.test(value);
}
var underscoreRegex = /^_/;
var conditionsSelectorRegex = /&|@/;
function finalizeConditions(paths) {
  return paths.map((path) => {
    if (conditions.has(path)) {
      return path.replace(underscoreRegex, "");
    }
    if (conditionsSelectorRegex.test(path)) {
      return `[${withoutSpace(path.trim())}]`;
    }
    return path;
  });
}
function sortConditions(paths) {
  return paths.sort((a, b) => {
    const aa = isCondition(a);
    const bb = isCondition(b);
    if (aa && !bb)
      return 1;
    if (!aa && bb)
      return -1;
    return 0;
  });
}

// styled-system/css/css.mjs
var utilities = "aspectRatio:asp,boxDecorationBreak:bx-db,zIndex:z,boxSizing:bx-s,objectPosition:obj-p,objectFit:obj-f,overscrollBehavior:ovs-b,overscrollBehaviorX:ovs-bx,overscrollBehaviorY:ovs-by,position:pos/1,top:top,left:left,inset:inset,insetInline:inset-x/insetX,insetBlock:inset-y/insetY,insetBlockEnd:inset-be,insetBlockStart:inset-bs,insetInlineEnd:inset-e/insetEnd/end,insetInlineStart:inset-s/insetStart/start,right:right,bottom:bottom,float:float,visibility:vis,display:d,hideFrom:hide,hideBelow:show,flexBasis:flex-b,flex:flex,flexDirection:flex-d/flexDir,flexGrow:flex-g,flexShrink:flex-sh,gridTemplateColumns:grid-tc,gridTemplateRows:grid-tr,gridColumn:grid-c,gridRow:grid-r,gridColumnStart:grid-cs,gridColumnEnd:grid-ce,gridAutoFlow:grid-af,gridAutoColumns:grid-ac,gridAutoRows:grid-ar,gap:gap,gridGap:grid-g,gridRowGap:grid-rg,gridColumnGap:grid-cg,rowGap:rg,columnGap:cg,justifyContent:jc,alignContent:ac,alignItems:ai,alignSelf:as,padding:p/1,paddingLeft:pl/1,paddingRight:pr/1,paddingTop:pt/1,paddingBottom:pb/1,paddingBlock:py/1/paddingY,paddingBlockEnd:pbe,paddingBlockStart:pbs,paddingInline:px/paddingX/1,paddingInlineEnd:pe/1/paddingEnd,paddingInlineStart:ps/1/paddingStart,marginLeft:ml/1,marginRight:mr/1,marginTop:mt/1,marginBottom:mb/1,margin:m/1,marginBlock:my/1/marginY,marginBlockEnd:mbe,marginBlockStart:mbs,marginInline:mx/1/marginX,marginInlineEnd:me/1/marginEnd,marginInlineStart:ms/1/marginStart,spaceX:sx,spaceY:sy,outlineWidth:ring-w/ringWidth,outlineColor:ring-c/ringColor,outline:ring/1,outlineOffset:ring-o/ringOffset,focusRing:focus-ring,focusVisibleRing:focus-v-ring,focusRingColor:focus-ring-c,focusRingOffset:focus-ring-o,focusRingWidth:focus-ring-w,focusRingStyle:focus-ring-s,divideX:dvd-x,divideY:dvd-y,divideColor:dvd-c,divideStyle:dvd-s,width:w/1,inlineSize:w-is,minWidth:min-w/minW,minInlineSize:min-w-is,maxWidth:max-w/maxW,maxInlineSize:max-w-is,height:h/1,blockSize:h-bs,minHeight:min-h/minH,minBlockSize:min-h-bs,maxHeight:max-h/maxH,maxBlockSize:max-b,boxSize:size,color:c,fontFamily:ff,fontSize:fs,fontSizeAdjust:fs-a,fontPalette:fp,fontKerning:fk,fontFeatureSettings:ff-s,fontWeight:fw,fontSmoothing:fsmt,fontVariant:fv,fontVariantAlternates:fv-alt,fontVariantCaps:fv-caps,fontVariationSettings:fv-s,fontVariantNumeric:fv-num,letterSpacing:ls,lineHeight:lh,textAlign:ta,textDecoration:td,textDecorationColor:td-c,textEmphasisColor:te-c,textDecorationStyle:td-s,textDecorationThickness:td-t,textUnderlineOffset:tu-o,textTransform:tt,textIndent:ti,textShadow:tsh,textShadowColor:tsh-c/textShadowColor,WebkitTextFillColor:wktf-c,textOverflow:tov,verticalAlign:va,wordBreak:wb,textWrap:tw,truncate:trunc,lineClamp:lc,listStyleType:li-t,listStylePosition:li-pos,listStyleImage:li-img,listStyle:li-s,backgroundPosition:bg-p/bgPosition,backgroundPositionX:bg-p-x/bgPositionX,backgroundPositionY:bg-p-y/bgPositionY,backgroundAttachment:bg-a/bgAttachment,backgroundClip:bg-cp/bgClip,background:bg/1,backgroundColor:bg-c/bgColor,backgroundOrigin:bg-o/bgOrigin,backgroundImage:bg-i/bgImage,backgroundRepeat:bg-r/bgRepeat,backgroundBlendMode:bg-bm/bgBlendMode,backgroundSize:bg-s/bgSize,backgroundGradient:bg-grad/bgGradient,backgroundLinear:bg-linear/bgLinear,backgroundRadial:bg-radial/bgRadial,backgroundConic:bg-conic/bgConic,textGradient:txt-grad,gradientFromPosition:grad-from-pos,gradientToPosition:grad-to-pos,gradientFrom:grad-from,gradientTo:grad-to,gradientVia:grad-via,gradientViaPosition:grad-via-pos,borderRadius:bdr/rounded,borderTopLeftRadius:bdr-tl/roundedTopLeft,borderTopRightRadius:bdr-tr/roundedTopRight,borderBottomRightRadius:bdr-br/roundedBottomRight,borderBottomLeftRadius:bdr-bl/roundedBottomLeft,borderTopRadius:bdr-t/roundedTop,borderRightRadius:bdr-r/roundedRight,borderBottomRadius:bdr-b/roundedBottom,borderLeftRadius:bdr-l/roundedLeft,borderStartStartRadius:bdr-ss/roundedStartStart,borderStartEndRadius:bdr-se/roundedStartEnd,borderStartRadius:bdr-s/roundedStart,borderEndStartRadius:bdr-es/roundedEndStart,borderEndEndRadius:bdr-ee/roundedEndEnd,borderEndRadius:bdr-e/roundedEnd,border:bd,borderWidth:bd-w,borderTopWidth:bd-t-w,borderLeftWidth:bd-l-w,borderRightWidth:bd-r-w,borderBottomWidth:bd-b-w,borderBlockStartWidth:bd-bs-w,borderBlockEndWidth:bd-be-w,borderColor:bd-c,borderInline:bd-x/borderX,borderInlineWidth:bd-x-w/borderXWidth,borderInlineColor:bd-x-c/borderXColor,borderBlock:bd-y/borderY,borderBlockWidth:bd-y-w/borderYWidth,borderBlockColor:bd-y-c/borderYColor,borderLeft:bd-l,borderLeftColor:bd-l-c,borderInlineStart:bd-s/borderStart,borderInlineStartWidth:bd-s-w/borderStartWidth,borderInlineStartColor:bd-s-c/borderStartColor,borderRight:bd-r,borderRightColor:bd-r-c,borderInlineEnd:bd-e/borderEnd,borderInlineEndWidth:bd-e-w/borderEndWidth,borderInlineEndColor:bd-e-c/borderEndColor,borderTop:bd-t,borderTopColor:bd-t-c,borderBottom:bd-b,borderBottomColor:bd-b-c,borderBlockEnd:bd-be,borderBlockEndColor:bd-be-c,borderBlockStart:bd-bs,borderBlockStartColor:bd-bs-c,opacity:op,boxShadow:bx-sh/shadow,boxShadowColor:bx-sh-c/shadowColor,mixBlendMode:mix-bm,filter:filter,brightness:brightness,contrast:contrast,grayscale:grayscale,hueRotate:hue-rotate,invert:invert,saturate:saturate,sepia:sepia,dropShadow:drop-shadow,blur:blur,backdropFilter:bkdp,backdropBlur:bkdp-blur,backdropBrightness:bkdp-brightness,backdropContrast:bkdp-contrast,backdropGrayscale:bkdp-grayscale,backdropHueRotate:bkdp-hue-rotate,backdropInvert:bkdp-invert,backdropOpacity:bkdp-opacity,backdropSaturate:bkdp-saturate,backdropSepia:bkdp-sepia,borderCollapse:bd-cl,borderSpacing:bd-sp,borderSpacingX:bd-sx,borderSpacingY:bd-sy,tableLayout:tbl,transitionTimingFunction:trs-tmf,transitionDelay:trs-dly,transitionDuration:trs-dur,transitionProperty:trs-prop,transition:trs,animation:anim,animationName:anim-n,animationTimingFunction:anim-tmf,animationDuration:anim-dur,animationDelay:anim-dly,animationPlayState:anim-ps,animationComposition:anim-comp,animationFillMode:anim-fm,animationDirection:anim-dir,animationIterationCount:anim-ic,animationRange:anim-r,animationState:anim-s,animationRangeStart:anim-rs,animationRangeEnd:anim-re,animationTimeline:anim-tl,transformOrigin:trf-o,transformBox:trf-b,transformStyle:trf-s,transform:trf,rotate:rotate,rotateX:rotate-x,rotateY:rotate-y,rotateZ:rotate-z,scale:scale,scaleX:scale-x,scaleY:scale-y,translate:translate,translateX:translate-x/x,translateY:translate-y/y,translateZ:translate-z/z,accentColor:ac-c,caretColor:ca-c,scrollBehavior:scr-bhv,scrollbar:scr-bar,scrollbarColor:scr-bar-c,scrollbarGutter:scr-bar-g,scrollbarWidth:scr-bar-w,scrollMargin:scr-m,scrollMarginLeft:scr-ml,scrollMarginRight:scr-mr,scrollMarginTop:scr-mt,scrollMarginBottom:scr-mb,scrollMarginBlock:scr-my/scrollMarginY,scrollMarginBlockEnd:scr-mbe,scrollMarginBlockStart:scr-mbt,scrollMarginInline:scr-mx/scrollMarginX,scrollMarginInlineEnd:scr-me,scrollMarginInlineStart:scr-ms,scrollPadding:scr-p,scrollPaddingBlock:scr-py/scrollPaddingY,scrollPaddingBlockStart:scr-pbs,scrollPaddingBlockEnd:scr-pbe,scrollPaddingInline:scr-px/scrollPaddingX,scrollPaddingInlineEnd:scr-pe,scrollPaddingInlineStart:scr-ps,scrollPaddingLeft:scr-pl,scrollPaddingRight:scr-pr,scrollPaddingTop:scr-pt,scrollPaddingBottom:scr-pb,scrollSnapAlign:scr-sa,scrollSnapStop:scrs-s,scrollSnapType:scrs-t,scrollSnapStrictness:scrs-strt,scrollSnapMargin:scrs-m,scrollSnapMarginTop:scrs-mt,scrollSnapMarginBottom:scrs-mb,scrollSnapMarginLeft:scrs-ml,scrollSnapMarginRight:scrs-mr,scrollSnapCoordinate:scrs-c,scrollSnapDestination:scrs-d,scrollSnapPointsX:scrs-px,scrollSnapPointsY:scrs-py,scrollSnapTypeX:scrs-tx,scrollSnapTypeY:scrs-ty,scrollTimeline:scrtl,scrollTimelineAxis:scrtl-a,scrollTimelineName:scrtl-n,touchAction:tch-a,userSelect:us,overflow:ov,overflowWrap:ov-wrap,overflowX:ov-x,overflowY:ov-y,overflowAnchor:ov-a,overflowBlock:ov-b,overflowInline:ov-i,overflowClipBox:ovcp-bx,overflowClipMargin:ovcp-m,overscrollBehaviorBlock:ovs-bb,overscrollBehaviorInline:ovs-bi,fill:fill,stroke:stk,strokeWidth:stk-w,strokeDasharray:stk-dsh,strokeDashoffset:stk-do,strokeLinecap:stk-lc,strokeLinejoin:stk-lj,strokeMiterlimit:stk-ml,strokeOpacity:stk-op,srOnly:sr,debug:debug,appearance:ap,backfaceVisibility:bfv,clipPath:cp-path,hyphens:hy,mask:msk,maskImage:msk-i,maskSize:msk-s,textSizeAdjust:txt-adj,container:cq,containerName:cq-n,containerType:cq-t,cursor:cursor,textStyle:textStyle";
var classNameByProp = new Map;
var shorthands = new Map;
utilities.split(",").forEach((utility) => {
  const [prop, meta] = utility.split(":");
  const [className, ...shorthandList] = meta.split("/");
  classNameByProp.set(prop, className);
  if (shorthandList.length) {
    shorthandList.forEach((shorthand) => {
      shorthands.set(shorthand === "1" ? className : shorthand, prop);
    });
  }
});
var resolveShorthand = (prop) => shorthands.get(prop) || prop;
var context = {
  conditions: {
    shift: sortConditions,
    finalize: finalizeConditions,
    breakpoints: { keys: ["base", "sm", "md", "lg", "xl", "2xl"] }
  },
  utility: {
    transform: (prop, value) => {
      const key = resolveShorthand(prop);
      const propKey = classNameByProp.get(key) || hypenateProperty(key);
      return { className: `${propKey}_${withoutSpace(value)}` };
    },
    hasShorthand: true,
    toHash: (path, hashFn) => hashFn(path.join(":")),
    resolveShorthand
  }
};
var cssFn = createCss(context);
var css = (...styles) => cssFn(mergeCss(...styles));
css.raw = (...styles) => mergeCss(...styles);
var { mergeCss, assignCss } = createMergeCss(context);

// styled-system/css/cx.mjs
function cx() {
  let str = "", i = 0, arg;
  for (;i < arguments.length; ) {
    if ((arg = arguments[i++]) && typeof arg === "string") {
      str && (str += " ");
      str += arg;
    }
  }
  return str;
}

// styled-system/css/cva.mjs
var defaults = (conf) => ({
  base: {},
  variants: {},
  defaultVariants: {},
  compoundVariants: [],
  ...conf
});
function cva(config) {
  const { base, variants, defaultVariants, compoundVariants } = defaults(config);
  const getVariantProps = (variants2) => ({ ...defaultVariants, ...compact(variants2) });
  function resolve(props = {}) {
    const computedVariants = getVariantProps(props);
    let variantCss = { ...base };
    for (const [key, value] of Object.entries(computedVariants)) {
      if (variants[key]?.[value]) {
        variantCss = mergeCss(variantCss, variants[key][value]);
      }
    }
    const compoundVariantCss = getCompoundVariantCss(compoundVariants, computedVariants);
    return mergeCss(variantCss, compoundVariantCss);
  }
  function merge(__cva) {
    const override = defaults(__cva.config);
    const variantKeys2 = uniq(__cva.variantKeys, Object.keys(variants));
    return cva({
      base: mergeCss(base, override.base),
      variants: Object.fromEntries(variantKeys2.map((key) => [key, mergeCss(variants[key], override.variants[key])])),
      defaultVariants: mergeProps(defaultVariants, override.defaultVariants),
      compoundVariants: [...compoundVariants, ...override.compoundVariants]
    });
  }
  function cvaFn(props) {
    return css(resolve(props));
  }
  const variantKeys = Object.keys(variants);
  function splitVariantProps(props) {
    return splitProps(props, variantKeys);
  }
  const variantMap = Object.fromEntries(Object.entries(variants).map(([key, value]) => [key, Object.keys(value)]));
  return Object.assign(memo(cvaFn), {
    __cva__: true,
    variantMap,
    variantKeys,
    raw: resolve,
    config,
    merge,
    splitVariantProps,
    getVariantProps
  });
}
function getCompoundVariantCss(compoundVariants, variantMap) {
  let result = {};
  compoundVariants.forEach((compoundVariant) => {
    const isMatching = Object.entries(compoundVariant).every(([key, value]) => {
      if (key === "css")
        return true;
      const values = Array.isArray(value) ? value : [value];
      return values.some((value2) => variantMap[key] === value2);
    });
    if (isMatching) {
      result = mergeCss(result, compoundVariant.css);
    }
  });
  return result;
}
function assertCompoundVariant(name, compoundVariants, variants, prop) {
  if (compoundVariants.length > 0 && typeof variants?.[prop] === "object") {
    throw new Error(`[recipe:${name}:${prop}] Conditions are not supported when using compound variants.`);
  }
}

// styled-system/css/sva.mjs
function sva(config) {
  const slots = Object.entries(getSlotRecipes(config)).map(([slot, slotCva]) => [slot, cva(slotCva)]);
  const defaultVariants = config.defaultVariants ?? {};
  const classNameMap = slots.reduce((acc, [slot, cvaFn]) => {
    if (config.className)
      acc[slot] = cvaFn.config.className;
    return acc;
  }, {});
  function svaFn(props) {
    const result = slots.map(([slot, cvaFn]) => [slot, cx(cvaFn(props), classNameMap[slot])]);
    return Object.fromEntries(result);
  }
  function raw(props) {
    const result = slots.map(([slot, cvaFn]) => [slot, cvaFn.raw(props)]);
    return Object.fromEntries(result);
  }
  const variants = config.variants ?? {};
  const variantKeys = Object.keys(variants);
  function splitVariantProps(props) {
    return splitProps(props, variantKeys);
  }
  const getVariantProps = (variants2) => ({ ...defaultVariants, ...compact(variants2) });
  const variantMap = Object.fromEntries(Object.entries(variants).map(([key, value]) => [key, Object.keys(value)]));
  return Object.assign(memo(svaFn), {
    __cva__: false,
    raw,
    config,
    variantMap,
    variantKeys,
    classNameMap,
    splitVariantProps,
    getVariantProps
  });
}

// styled-system/jsx/is-valid-prop.mjs
var userGeneratedStr = "css,pos,insetX,insetY,insetEnd,end,insetStart,start,flexDir,p,pl,pr,pt,pb,py,paddingY,paddingX,px,pe,paddingEnd,ps,paddingStart,ml,mr,mt,mb,m,my,marginY,mx,marginX,me,marginEnd,ms,marginStart,ringWidth,ringColor,ring,ringOffset,w,minW,maxW,h,minH,maxH,textShadowColor,bgPosition,bgPositionX,bgPositionY,bgAttachment,bgClip,bg,bgColor,bgOrigin,bgImage,bgRepeat,bgBlendMode,bgSize,bgGradient,bgLinear,bgRadial,bgConic,rounded,roundedTopLeft,roundedTopRight,roundedBottomRight,roundedBottomLeft,roundedTop,roundedRight,roundedBottom,roundedLeft,roundedStartStart,roundedStartEnd,roundedStart,roundedEndStart,roundedEndEnd,roundedEnd,borderX,borderXWidth,borderXColor,borderY,borderYWidth,borderYColor,borderStart,borderStartWidth,borderStartColor,borderEnd,borderEndWidth,borderEndColor,shadow,shadowColor,x,y,z,scrollMarginY,scrollMarginX,scrollPaddingY,scrollPaddingX,aspectRatio,boxDecorationBreak,zIndex,boxSizing,objectPosition,objectFit,overscrollBehavior,overscrollBehaviorX,overscrollBehaviorY,position,top,left,inset,insetInline,insetBlock,insetBlockEnd,insetBlockStart,insetInlineEnd,insetInlineStart,right,bottom,float,visibility,display,hideFrom,hideBelow,flexBasis,flex,flexDirection,flexGrow,flexShrink,gridTemplateColumns,gridTemplateRows,gridColumn,gridRow,gridColumnStart,gridColumnEnd,gridAutoFlow,gridAutoColumns,gridAutoRows,gap,gridGap,gridRowGap,gridColumnGap,rowGap,columnGap,justifyContent,alignContent,alignItems,alignSelf,padding,paddingLeft,paddingRight,paddingTop,paddingBottom,paddingBlock,paddingBlockEnd,paddingBlockStart,paddingInline,paddingInlineEnd,paddingInlineStart,marginLeft,marginRight,marginTop,marginBottom,margin,marginBlock,marginBlockEnd,marginBlockStart,marginInline,marginInlineEnd,marginInlineStart,spaceX,spaceY,outlineWidth,outlineColor,outline,outlineOffset,focusRing,focusVisibleRing,focusRingColor,focusRingOffset,focusRingWidth,focusRingStyle,divideX,divideY,divideColor,divideStyle,width,inlineSize,minWidth,minInlineSize,maxWidth,maxInlineSize,height,blockSize,minHeight,minBlockSize,maxHeight,maxBlockSize,boxSize,color,fontFamily,fontSize,fontSizeAdjust,fontPalette,fontKerning,fontFeatureSettings,fontWeight,fontSmoothing,fontVariant,fontVariantAlternates,fontVariantCaps,fontVariationSettings,fontVariantNumeric,letterSpacing,lineHeight,textAlign,textDecoration,textDecorationColor,textEmphasisColor,textDecorationStyle,textDecorationThickness,textUnderlineOffset,textTransform,textIndent,textShadow,WebkitTextFillColor,textOverflow,verticalAlign,wordBreak,textWrap,truncate,lineClamp,listStyleType,listStylePosition,listStyleImage,listStyle,backgroundPosition,backgroundPositionX,backgroundPositionY,backgroundAttachment,backgroundClip,background,backgroundColor,backgroundOrigin,backgroundImage,backgroundRepeat,backgroundBlendMode,backgroundSize,backgroundGradient,backgroundLinear,backgroundRadial,backgroundConic,textGradient,gradientFromPosition,gradientToPosition,gradientFrom,gradientTo,gradientVia,gradientViaPosition,borderRadius,borderTopLeftRadius,borderTopRightRadius,borderBottomRightRadius,borderBottomLeftRadius,borderTopRadius,borderRightRadius,borderBottomRadius,borderLeftRadius,borderStartStartRadius,borderStartEndRadius,borderStartRadius,borderEndStartRadius,borderEndEndRadius,borderEndRadius,border,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,borderBlockStartWidth,borderBlockEndWidth,borderColor,borderInline,borderInlineWidth,borderInlineColor,borderBlock,borderBlockWidth,borderBlockColor,borderLeft,borderLeftColor,borderInlineStart,borderInlineStartWidth,borderInlineStartColor,borderRight,borderRightColor,borderInlineEnd,borderInlineEndWidth,borderInlineEndColor,borderTop,borderTopColor,borderBottom,borderBottomColor,borderBlockEnd,borderBlockEndColor,borderBlockStart,borderBlockStartColor,opacity,boxShadow,boxShadowColor,mixBlendMode,filter,brightness,contrast,grayscale,hueRotate,invert,saturate,sepia,dropShadow,blur,backdropFilter,backdropBlur,backdropBrightness,backdropContrast,backdropGrayscale,backdropHueRotate,backdropInvert,backdropOpacity,backdropSaturate,backdropSepia,borderCollapse,borderSpacing,borderSpacingX,borderSpacingY,tableLayout,transitionTimingFunction,transitionDelay,transitionDuration,transitionProperty,transition,animation,animationName,animationTimingFunction,animationDuration,animationDelay,animationPlayState,animationComposition,animationFillMode,animationDirection,animationIterationCount,animationRange,animationState,animationRangeStart,animationRangeEnd,animationTimeline,transformOrigin,transformBox,transformStyle,transform,rotate,rotateX,rotateY,rotateZ,scale,scaleX,scaleY,translate,translateX,translateY,translateZ,accentColor,caretColor,scrollBehavior,scrollbar,scrollbarColor,scrollbarGutter,scrollbarWidth,scrollMargin,scrollMarginLeft,scrollMarginRight,scrollMarginTop,scrollMarginBottom,scrollMarginBlock,scrollMarginBlockEnd,scrollMarginBlockStart,scrollMarginInline,scrollMarginInlineEnd,scrollMarginInlineStart,scrollPadding,scrollPaddingBlock,scrollPaddingBlockStart,scrollPaddingBlockEnd,scrollPaddingInline,scrollPaddingInlineEnd,scrollPaddingInlineStart,scrollPaddingLeft,scrollPaddingRight,scrollPaddingTop,scrollPaddingBottom,scrollSnapAlign,scrollSnapStop,scrollSnapType,scrollSnapStrictness,scrollSnapMargin,scrollSnapMarginTop,scrollSnapMarginBottom,scrollSnapMarginLeft,scrollSnapMarginRight,scrollSnapCoordinate,scrollSnapDestination,scrollSnapPointsX,scrollSnapPointsY,scrollSnapTypeX,scrollSnapTypeY,scrollTimeline,scrollTimelineAxis,scrollTimelineName,touchAction,userSelect,overflow,overflowWrap,overflowX,overflowY,overflowAnchor,overflowBlock,overflowInline,overflowClipBox,overflowClipMargin,overscrollBehaviorBlock,overscrollBehaviorInline,fill,stroke,strokeWidth,strokeDasharray,strokeDashoffset,strokeLinecap,strokeLinejoin,strokeMiterlimit,strokeOpacity,srOnly,debug,appearance,backfaceVisibility,clipPath,hyphens,mask,maskImage,maskSize,textSizeAdjust,container,containerName,containerType,cursor,colorPalette,_hover,_focus,_focusWithin,_focusVisible,_disabled,_active,_visited,_target,_readOnly,_readWrite,_empty,_checked,_enabled,_expanded,_highlighted,_complete,_incomplete,_dragging,_before,_after,_firstLetter,_firstLine,_marker,_selection,_file,_backdrop,_first,_last,_only,_even,_odd,_firstOfType,_lastOfType,_onlyOfType,_peerFocus,_peerHover,_peerActive,_peerFocusWithin,_peerFocusVisible,_peerDisabled,_peerChecked,_peerInvalid,_peerExpanded,_peerPlaceholderShown,_groupFocus,_groupHover,_groupActive,_groupFocusWithin,_groupFocusVisible,_groupDisabled,_groupChecked,_groupExpanded,_groupInvalid,_indeterminate,_required,_valid,_invalid,_autofill,_inRange,_outOfRange,_placeholder,_placeholderShown,_pressed,_selected,_grabbed,_underValue,_overValue,_atValue,_default,_optional,_open,_closed,_fullscreen,_loading,_hidden,_current,_currentPage,_currentStep,_today,_unavailable,_rangeStart,_rangeEnd,_now,_topmost,_motionReduce,_motionSafe,_print,_landscape,_portrait,_dark,_light,_osDark,_osLight,_highContrast,_lessContrast,_moreContrast,_ltr,_rtl,_scrollbar,_scrollbarThumb,_scrollbarTrack,_horizontal,_vertical,_icon,_starting,_noscript,_invertedColors,_collapsed,_off,_on,sm,smOnly,smDown,md,mdOnly,mdDown,lg,lgOnly,lgDown,xl,xlOnly,xlDown,2xl,2xlOnly,2xlDown,smToMd,smToLg,smToXl,smTo2xl,mdToLg,mdToXl,mdTo2xl,lgToXl,lgTo2xl,xlTo2xl,textStyle";
var userGenerated = userGeneratedStr.split(",");
var cssPropertiesStr = "WebkitAppearance,WebkitBorderBefore,WebkitBorderBeforeColor,WebkitBorderBeforeStyle,WebkitBorderBeforeWidth,WebkitBoxReflect,WebkitLineClamp,WebkitMask,WebkitMaskAttachment,WebkitMaskClip,WebkitMaskComposite,WebkitMaskImage,WebkitMaskOrigin,WebkitMaskPosition,WebkitMaskPositionX,WebkitMaskPositionY,WebkitMaskRepeat,WebkitMaskRepeatX,WebkitMaskRepeatY,WebkitMaskSize,WebkitOverflowScrolling,WebkitTapHighlightColor,WebkitTextFillColor,WebkitTextStroke,WebkitTextStrokeColor,WebkitTextStrokeWidth,WebkitTouchCallout,WebkitUserModify,WebkitUserSelect,accentColor,alignContent,alignItems,alignSelf,alignTracks,all,anchorName,anchorScope,animation,animationComposition,animationDelay,animationDirection,animationDuration,animationFillMode,animationIterationCount,animationName,animationPlayState,animationRange,animationRangeEnd,animationRangeStart,animationTimeline,animationTimingFunction,appearance,aspectRatio,backdropFilter,backfaceVisibility,background,backgroundAttachment,backgroundBlendMode,backgroundClip,backgroundColor,backgroundImage,backgroundOrigin,backgroundPosition,backgroundPositionX,backgroundPositionY,backgroundRepeat,backgroundSize,blockSize,border,borderBlock,borderBlockColor,borderBlockEnd,borderBlockEndColor,borderBlockEndStyle,borderBlockEndWidth,borderBlockStart,borderBlockStartColor,borderBlockStartStyle,borderBlockStartWidth,borderBlockStyle,borderBlockWidth,borderBottom,borderBottomColor,borderBottomLeftRadius,borderBottomRightRadius,borderBottomStyle,borderBottomWidth,borderCollapse,borderColor,borderEndEndRadius,borderEndStartRadius,borderImage,borderImageOutset,borderImageRepeat,borderImageSlice,borderImageSource,borderImageWidth,borderInline,borderInlineColor,borderInlineEnd,borderInlineEndColor,borderInlineEndStyle,borderInlineEndWidth,borderInlineStart,borderInlineStartColor,borderInlineStartStyle,borderInlineStartWidth,borderInlineStyle,borderInlineWidth,borderLeft,borderLeftColor,borderLeftStyle,borderLeftWidth,borderRadius,borderRight,borderRightColor,borderRightStyle,borderRightWidth,borderSpacing,borderStartEndRadius,borderStartStartRadius,borderStyle,borderTop,borderTopColor,borderTopLeftRadius,borderTopRightRadius,borderTopStyle,borderTopWidth,borderWidth,bottom,boxAlign,boxDecorationBreak,boxDirection,boxFlex,boxFlexGroup,boxLines,boxOrdinalGroup,boxOrient,boxPack,boxShadow,boxSizing,breakAfter,breakBefore,breakInside,captionSide,caret,caretColor,caretShape,clear,clip,clipPath,clipRule,color,colorInterpolationFilters,colorScheme,columnCount,columnFill,columnGap,columnRule,columnRuleColor,columnRuleStyle,columnRuleWidth,columnSpan,columnWidth,columns,contain,containIntrinsicBlockSize,containIntrinsicHeight,containIntrinsicInlineSize,containIntrinsicSize,containIntrinsicWidth,container,containerName,containerType,content,contentVisibility,cornerShape,counterIncrement,counterReset,counterSet,cursor,cx,cy,d,direction,display,dominantBaseline,emptyCells,fieldSizing,fill,fillOpacity,fillRule,filter,flex,flexBasis,flexDirection,flexFlow,flexGrow,flexShrink,flexWrap,float,floodColor,floodOpacity,font,fontFamily,fontFeatureSettings,fontKerning,fontLanguageOverride,fontOpticalSizing,fontPalette,fontSize,fontSizeAdjust,fontSmooth,fontStretch,fontStyle,fontSynthesis,fontSynthesisPosition,fontSynthesisSmallCaps,fontSynthesisStyle,fontSynthesisWeight,fontVariant,fontVariantAlternates,fontVariantCaps,fontVariantEastAsian,fontVariantEmoji,fontVariantLigatures,fontVariantNumeric,fontVariantPosition,fontVariationSettings,fontWeight,forcedColorAdjust,gap,grid,gridArea,gridAutoColumns,gridAutoFlow,gridAutoRows,gridColumn,gridColumnEnd,gridColumnGap,gridColumnStart,gridGap,gridRow,gridRowEnd,gridRowGap,gridRowStart,gridTemplate,gridTemplateAreas,gridTemplateColumns,gridTemplateRows,hangingPunctuation,height,hyphenateCharacter,hyphenateLimitChars,hyphens,imageOrientation,imageRendering,imageResolution,imeMode,initialLetter,initialLetterAlign,inlineSize,inset,insetBlock,insetBlockEnd,insetBlockStart,insetInline,insetInlineEnd,insetInlineStart,interpolateSize,isolation,justifyContent,justifyItems,justifySelf,justifyTracks,left,letterSpacing,lightingColor,lineBreak,lineClamp,lineHeight,lineHeightStep,listStyle,listStyleImage,listStylePosition,listStyleType,margin,marginBlock,marginBlockEnd,marginBlockStart,marginBottom,marginInline,marginInlineEnd,marginInlineStart,marginLeft,marginRight,marginTop,marginTrim,marker,markerEnd,markerMid,markerStart,mask,maskBorder,maskBorderMode,maskBorderOutset,maskBorderRepeat,maskBorderSlice,maskBorderSource,maskBorderWidth,maskClip,maskComposite,maskImage,maskMode,maskOrigin,maskPosition,maskRepeat,maskSize,maskType,masonryAutoFlow,mathDepth,mathShift,mathStyle,maxBlockSize,maxHeight,maxInlineSize,maxLines,maxWidth,minBlockSize,minHeight,minInlineSize,minWidth,mixBlendMode,objectFit,objectPosition,offset,offsetAnchor,offsetDistance,offsetPath,offsetPosition,offsetRotate,opacity,order,orphans,outline,outlineColor,outlineOffset,outlineStyle,outlineWidth,overflow,overflowAnchor,overflowBlock,overflowClipBox,overflowClipMargin,overflowInline,overflowWrap,overflowX,overflowY,overlay,overscrollBehavior,overscrollBehaviorBlock,overscrollBehaviorInline,overscrollBehaviorX,overscrollBehaviorY,padding,paddingBlock,paddingBlockEnd,paddingBlockStart,paddingBottom,paddingInline,paddingInlineEnd,paddingInlineStart,paddingLeft,paddingRight,paddingTop,page,pageBreakAfter,pageBreakBefore,pageBreakInside,paintOrder,perspective,perspectiveOrigin,placeContent,placeItems,placeSelf,pointerEvents,position,positionAnchor,positionArea,positionTry,positionTryFallbacks,positionTryOrder,positionVisibility,printColorAdjust,quotes,r,resize,right,rotate,rowGap,rubyAlign,rubyMerge,rubyPosition,rx,ry,scale,scrollBehavior,scrollMargin,scrollMarginBlock,scrollMarginBlockEnd,scrollMarginBlockStart,scrollMarginBottom,scrollMarginInline,scrollMarginInlineEnd,scrollMarginInlineStart,scrollMarginLeft,scrollMarginRight,scrollMarginTop,scrollPadding,scrollPaddingBlock,scrollPaddingBlockEnd,scrollPaddingBlockStart,scrollPaddingBottom,scrollPaddingInline,scrollPaddingInlineEnd,scrollPaddingInlineStart,scrollPaddingLeft,scrollPaddingRight,scrollPaddingTop,scrollSnapAlign,scrollSnapCoordinate,scrollSnapDestination,scrollSnapPointsX,scrollSnapPointsY,scrollSnapStop,scrollSnapType,scrollSnapTypeX,scrollSnapTypeY,scrollTimeline,scrollTimelineAxis,scrollTimelineName,scrollbarColor,scrollbarGutter,scrollbarWidth,shapeImageThreshold,shapeMargin,shapeOutside,shapeRendering,stopColor,stopOpacity,stroke,strokeDasharray,strokeDashoffset,strokeLinecap,strokeLinejoin,strokeMiterlimit,strokeOpacity,strokeWidth,tabSize,tableLayout,textAlign,textAlignLast,textAnchor,textBox,textBoxEdge,textBoxTrim,textCombineUpright,textDecoration,textDecorationColor,textDecorationLine,textDecorationSkip,textDecorationSkipInk,textDecorationStyle,textDecorationThickness,textEmphasis,textEmphasisColor,textEmphasisPosition,textEmphasisStyle,textIndent,textJustify,textOrientation,textOverflow,textRendering,textShadow,textSizeAdjust,textSpacingTrim,textTransform,textUnderlineOffset,textUnderlinePosition,textWrap,textWrapMode,textWrapStyle,timelineScope,top,touchAction,transform,transformBox,transformOrigin,transformStyle,transition,transitionBehavior,transitionDelay,transitionDuration,transitionProperty,transitionTimingFunction,translate,unicodeBidi,userSelect,vectorEffect,verticalAlign,viewTimeline,viewTimelineAxis,viewTimelineInset,viewTimelineName,viewTransitionName,visibility,whiteSpace,whiteSpaceCollapse,widows,width,willChange,wordBreak,wordSpacing,wordWrap,writingMode,x,y,zIndex,zoom,alignmentBaseline,baselineShift,colorInterpolation,colorRendering,glyphOrientationVertical";
var allCssProperties = cssPropertiesStr.split(",").concat(userGenerated);
var properties = new Map(allCssProperties.map((prop) => [prop, true]));
var cssPropertySelectorRegex = /&|@/;
var isCssProperty = /* @__PURE__ */ memo((prop) => {
  return properties.has(prop) || prop.startsWith("--") || cssPropertySelectorRegex.test(prop);
});

// styled-system/jsx/factory-helper.mjs
var defaultShouldForwardProp = (prop, variantKeys) => !variantKeys.includes(prop) && !isCssProperty(prop);
var composeShouldForwardProps = (tag, shouldForwardProp) => tag.__shouldForwardProps__ && shouldForwardProp ? (propName) => tag.__shouldForwardProps__(propName) && shouldForwardProp(propName) : shouldForwardProp;
var composeCvaFn = (cvaA, cvaB) => {
  if (cvaA && !cvaB)
    return cvaA;
  if (!cvaA && cvaB)
    return cvaB;
  if (cvaA.__cva__ && cvaB.__cva__ || cvaA.__recipe__ && cvaB.__recipe__)
    return cvaA.merge(cvaB);
  const error = new TypeError("Cannot merge cva with recipe. Please use either cva or recipe.");
  TypeError.captureStackTrace?.(error);
  throw error;
};
var getDisplayName = (Component) => {
  if (typeof Component === "string")
    return Component;
  return Component?.displayName || Component?.name || "Component";
};

// styled-system/jsx/factory.mjs
function styledFn(Dynamic, configOrCva = {}, options = {}) {
  const cvaFn = configOrCva.__cva__ || configOrCva.__recipe__ ? configOrCva : cva(configOrCva);
  const forwardFn = options.shouldForwardProp || defaultShouldForwardProp;
  const shouldForwardProp = (prop) => {
    if (options.forwardProps?.includes(prop))
      return true;
    return forwardFn(prop, cvaFn.variantKeys);
  };
  const defaultProps = Object.assign(options.dataAttr && configOrCva.__name__ ? { "data-recipe": configOrCva.__name__ } : {}, options.defaultProps);
  const __cvaFn__ = composeCvaFn(Dynamic.__cva__, cvaFn);
  const __shouldForwardProps__ = composeShouldForwardProps(Dynamic, shouldForwardProp);
  const __base__ = Dynamic.__base__ || Dynamic;
  const StyledComponent = /* @__PURE__ */ forwardRef(function StyledComponent(props, ref) {
    const { as: Element = __base__, unstyled, children, ...restProps } = props;
    const combinedProps = useMemo(() => Object.assign({}, defaultProps, restProps), [restProps]);
    const [htmlProps2, forwardedProps, variantProps, styleProps, elementProps] = useMemo(() => {
      return splitProps(combinedProps, normalizeHTMLProps.keys, __shouldForwardProps__, __cvaFn__.variantKeys, isCssProperty);
    }, [combinedProps]);
    function recipeClass() {
      const { css: cssStyles, ...propStyles } = styleProps;
      const compoundVariantStyles = __cvaFn__.__getCompoundVariantCss__?.(variantProps);
      return cx(__cvaFn__(variantProps, false), css(compoundVariantStyles, propStyles, cssStyles), combinedProps.className);
    }
    function cvaClass() {
      const { css: cssStyles, ...propStyles } = styleProps;
      const cvaStyles = __cvaFn__.raw(variantProps);
      return cx(css(cvaStyles, propStyles, cssStyles), combinedProps.className);
    }
    const classes = () => {
      if (unstyled) {
        const { css: cssStyles, ...propStyles } = styleProps;
        return cx(css(propStyles, cssStyles), combinedProps.className);
      }
      return configOrCva.__recipe__ ? recipeClass() : cvaClass();
    };
    return createElement(Element, {
      ref,
      ...forwardedProps,
      ...elementProps,
      ...normalizeHTMLProps(htmlProps2),
      className: classes()
    }, children ?? combinedProps.children);
  });
  const name = getDisplayName(__base__);
  StyledComponent.displayName = `styled.${name}`;
  StyledComponent.__cva__ = __cvaFn__;
  StyledComponent.__base__ = __base__;
  StyledComponent.__shouldForwardProps__ = shouldForwardProp;
  return StyledComponent;
}
function createJsxFactory() {
  const cache = new Map;
  return new Proxy(styledFn, {
    apply(_, __, args) {
      return styledFn(...args);
    },
    get(_, el) {
      if (!cache.has(el)) {
        cache.set(el, styledFn(el));
      }
      return cache.get(el);
    }
  });
}
var styled = /* @__PURE__ */ createJsxFactory();

// styled-system/jsx/create-style-context.mjs
import { createContext, useContext, createElement as createElement2, forwardRef as forwardRef2 } from "react";
"use client";
function createSafeContext(contextName) {
  const Context = createContext(undefined);
  const useStyleContext = (componentName, slot) => {
    const context2 = useContext(Context);
    if (context2 === undefined) {
      const componentInfo = componentName ? `Component "${componentName}"` : "A component";
      const slotInfo = slot ? ` (slot: "${slot}")` : "";
      throw new Error(`${componentInfo}${slotInfo} cannot access ${contextName} because it's missing its Provider.`);
    }
    return context2;
  };
  return [Context, useStyleContext];
}
function createStyleContext(recipe) {
  const isConfigRecipe = "__recipe__" in recipe;
  const recipeName = isConfigRecipe && recipe.__name__ ? recipe.__name__ : undefined;
  const contextName = recipeName ? `createStyleContext("${recipeName}")` : "createStyleContext";
  const [StyleContext, useStyleContext] = createSafeContext(contextName);
  const svaFn = isConfigRecipe ? recipe : sva(recipe.config);
  const getResolvedProps = (props, slotStyles) => {
    const { unstyled, ...restProps } = props;
    if (unstyled)
      return restProps;
    if (isConfigRecipe) {
      return { ...restProps, className: cx(slotStyles, restProps.className) };
    }
    return { ...slotStyles, ...restProps };
  };
  const withRootProvider = (Component, options) => {
    const WithRootProvider = (props) => {
      const [variantProps, otherProps] = svaFn.splitVariantProps(props);
      const slotStyles = isConfigRecipe ? svaFn(variantProps) : svaFn.raw(variantProps);
      slotStyles._classNameMap = svaFn.classNameMap;
      const mergedProps = options?.defaultProps ? { ...options.defaultProps, ...otherProps } : otherProps;
      return createElement2(StyleContext.Provider, {
        value: slotStyles,
        children: createElement2(Component, mergedProps)
      });
    };
    const componentName = getDisplayName(Component);
    WithRootProvider.displayName = `withRootProvider(${componentName})`;
    return WithRootProvider;
  };
  const withProvider = (Component, slot, options) => {
    const StyledComponent = styled(Component, {}, options);
    const WithProvider = forwardRef2((props, ref) => {
      const [variantProps, restProps] = svaFn.splitVariantProps(props);
      const slotStyles = isConfigRecipe ? svaFn(variantProps) : svaFn.raw(variantProps);
      slotStyles._classNameMap = svaFn.classNameMap;
      const propsWithClass = { ...restProps, className: restProps.className ?? options?.defaultProps?.className };
      const resolvedProps = getResolvedProps(propsWithClass, slotStyles[slot]);
      return createElement2(StyleContext.Provider, {
        value: slotStyles,
        children: createElement2(StyledComponent, {
          ...resolvedProps,
          className: cx(resolvedProps.className, slotStyles._classNameMap[slot]),
          ref
        })
      });
    });
    const componentName = getDisplayName(Component);
    WithProvider.displayName = `withProvider(${componentName})`;
    return WithProvider;
  };
  const withContext = (Component, slot, options) => {
    const StyledComponent = styled(Component, {}, options);
    const componentName = getDisplayName(Component);
    const WithContext = forwardRef2((props, ref) => {
      const slotStyles = useStyleContext(componentName, slot);
      const propsWithClass = { ...props, className: props.className ?? options?.defaultProps?.className };
      const resolvedProps = getResolvedProps(propsWithClass, slotStyles[slot]);
      return createElement2(StyledComponent, {
        ...resolvedProps,
        className: cx(resolvedProps.className, slotStyles._classNameMap[slot]),
        ref
      });
    });
    WithContext.displayName = `withContext(${componentName})`;
    return WithContext;
  };
  return {
    withRootProvider,
    withProvider,
    withContext
  };
}

// styled-system/jsx/stack.mjs
import { createElement as createElement3, forwardRef as forwardRef3 } from "react";

// styled-system/patterns/stack.mjs
var stackConfig = {
  transform(props) {
    const { align, justify, direction, gap, ...rest } = props;
    return {
      display: "flex",
      flexDirection: direction,
      alignItems: align,
      justifyContent: justify,
      gap,
      ...rest
    };
  },
  defaultValues: { direction: "column", gap: "8px" }
};
var getStackStyle = (styles = {}) => {
  const _styles = getPatternStyles(stackConfig, styles);
  return stackConfig.transform(_styles, patternFns);
};
var stack = (styles) => css(getStackStyle(styles));
stack.raw = getStackStyle;

// styled-system/jsx/stack.mjs
var Stack = /* @__PURE__ */ forwardRef3(function Stack2(props, ref) {
  const [patternProps, restProps] = splitProps(props, ["align", "justify", "direction", "gap"]);
  const styleProps = getStackStyle(patternProps);
  const mergedProps = { ref, ...styleProps, ...restProps };
  return createElement3(styled.div, mergedProps);
});

// styled-system/jsx/visually-hidden.mjs
import { createElement as createElement4, forwardRef as forwardRef4 } from "react";

// styled-system/patterns/visually-hidden.mjs
var visuallyHiddenConfig = {
  transform(props) {
    return {
      srOnly: true,
      ...props
    };
  }
};
var getVisuallyHiddenStyle = (styles = {}) => {
  const _styles = getPatternStyles(visuallyHiddenConfig, styles);
  return visuallyHiddenConfig.transform(_styles, patternFns);
};
var visuallyHidden = (styles) => css(getVisuallyHiddenStyle(styles));
visuallyHidden.raw = getVisuallyHiddenStyle;

// styled-system/jsx/visually-hidden.mjs
var VisuallyHidden = /* @__PURE__ */ forwardRef4(function VisuallyHidden2(props, ref) {
  const [patternProps, restProps] = splitProps(props, []);
  const styleProps = getVisuallyHiddenStyle(patternProps);
  const mergedProps = { ref, ...styleProps, ...restProps };
  return createElement4(styled.div, mergedProps);
});

// styled-system/recipes/create-recipe.mjs
var createRecipe = (name, defaultVariants, compoundVariants) => {
  const getVariantProps = (variants) => {
    return {
      [name]: "__ignore__",
      ...defaultVariants,
      ...compact(variants)
    };
  };
  const recipeFn = (variants, withCompoundVariants = true) => {
    const transform = (prop, value) => {
      assertCompoundVariant(name, compoundVariants, variants, prop);
      if (value === "__ignore__") {
        return { className: name };
      }
      value = withoutSpace(value);
      return { className: `${name}--${prop}_${value}` };
    };
    const recipeCss = createCss({
      conditions: {
        shift: sortConditions,
        finalize: finalizeConditions,
        breakpoints: { keys: ["base", "sm", "md", "lg", "xl", "2xl"] }
      },
      utility: {
        toHash: (path, hashFn) => hashFn(path.join(":")),
        transform
      }
    });
    const recipeStyles = getVariantProps(variants);
    if (withCompoundVariants) {
      const compoundVariantStyles = getCompoundVariantCss(compoundVariants, recipeStyles);
      return cx(recipeCss(recipeStyles), css(compoundVariantStyles));
    }
    return recipeCss(recipeStyles);
  };
  return {
    recipeFn,
    getVariantProps,
    __getCompoundVariantCss__: (variants) => {
      return getCompoundVariantCss(compoundVariants, getVariantProps(variants));
    }
  };
};
var mergeRecipes = (recipeA, recipeB) => {
  if (recipeA && !recipeB)
    return recipeA;
  if (!recipeA && recipeB)
    return recipeB;
  const recipeFn = (...args) => cx(recipeA(...args), recipeB(...args));
  const variantKeys = uniq(recipeA.variantKeys, recipeB.variantKeys);
  const variantMap = variantKeys.reduce((acc, key) => {
    acc[key] = uniq(recipeA.variantMap[key], recipeB.variantMap[key]);
    return acc;
  }, {});
  return Object.assign(recipeFn, {
    __recipe__: true,
    __name__: `${recipeA.__name__} ${recipeB.__name__}`,
    raw: (props) => props,
    variantKeys,
    variantMap,
    splitVariantProps(props) {
      return splitProps(props, variantKeys);
    }
  });
};

// styled-system/recipes/absolute-center.mjs
var absoluteCenterFn = /* @__PURE__ */ createRecipe("absolute-center", {
  axis: "both"
}, []);
var absoluteCenterVariantMap = {
  axis: [
    "horizontal",
    "vertical",
    "both"
  ]
};
var absoluteCenterVariantKeys = Object.keys(absoluteCenterVariantMap);
var absoluteCenter = /* @__PURE__ */ Object.assign(memo(absoluteCenterFn.recipeFn), {
  __recipe__: true,
  __name__: "absoluteCenter",
  __getCompoundVariantCss__: absoluteCenterFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: absoluteCenterVariantKeys,
  variantMap: absoluteCenterVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe);
  },
  splitVariantProps(props) {
    return splitProps(props, absoluteCenterVariantKeys);
  },
  getVariantProps: absoluteCenterFn.getVariantProps
});

// styled-system/recipes/badge.mjs
var badgeFn = /* @__PURE__ */ createRecipe("badge", {
  variant: "subtle",
  size: "md"
}, []);
var badgeVariantMap = {
  variant: [
    "solid",
    "surface",
    "subtle",
    "outline"
  ],
  size: [
    "sm",
    "md",
    "lg",
    "xl",
    "2xl"
  ]
};
var badgeVariantKeys = Object.keys(badgeVariantMap);
var badge = /* @__PURE__ */ Object.assign(memo(badgeFn.recipeFn), {
  __recipe__: true,
  __name__: "badge",
  __getCompoundVariantCss__: badgeFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: badgeVariantKeys,
  variantMap: badgeVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe);
  },
  splitVariantProps(props) {
    return splitProps(props, badgeVariantKeys);
  },
  getVariantProps: badgeFn.getVariantProps
});

// styled-system/recipes/button.mjs
var buttonFn = /* @__PURE__ */ createRecipe("button", {
  variant: "solid",
  size: "md"
}, []);
var buttonVariantMap = {
  variant: [
    "ghost",
    "link",
    "solid",
    "surface",
    "subtle",
    "outline",
    "plain",
    "wheat",
    "dark",
    "oauth",
    "outline-brand",
    "ghost-dark"
  ],
  size: [
    "2xs",
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl"
  ]
};
var buttonVariantKeys = Object.keys(buttonVariantMap);
var button = /* @__PURE__ */ Object.assign(memo(buttonFn.recipeFn), {
  __recipe__: true,
  __name__: "button",
  __getCompoundVariantCss__: buttonFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: buttonVariantKeys,
  variantMap: buttonVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe);
  },
  splitVariantProps(props) {
    return splitProps(props, buttonVariantKeys);
  },
  getVariantProps: buttonFn.getVariantProps
});

// styled-system/recipes/code.mjs
var codeFn = /* @__PURE__ */ createRecipe("code", {
  size: "md",
  variant: "subtle"
}, []);
var codeVariantMap = {
  variant: [
    "ghost",
    "solid",
    "surface",
    "subtle",
    "outline",
    "plain"
  ],
  size: [
    "sm",
    "md",
    "lg",
    "xl"
  ]
};
var codeVariantKeys = Object.keys(codeVariantMap);
var code = /* @__PURE__ */ Object.assign(memo(codeFn.recipeFn), {
  __recipe__: true,
  __name__: "code",
  __getCompoundVariantCss__: codeFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: codeVariantKeys,
  variantMap: codeVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe);
  },
  splitVariantProps(props) {
    return splitProps(props, codeVariantKeys);
  },
  getVariantProps: codeFn.getVariantProps
});

// styled-system/recipes/group.mjs
var groupFn = /* @__PURE__ */ createRecipe("group", {
  orientation: "horizontal"
}, [
  {
    orientation: "horizontal",
    attached: true,
    css: {
      "& > *:first-child": {
        borderEndRadius: "0",
        marginEnd: "-1px"
      },
      "& > *:last-child": {
        borderStartRadius: "0"
      },
      "& > *:not(:first-child):not(:last-child)": {
        borderRadius: "0",
        marginEnd: "-1px"
      }
    }
  },
  {
    orientation: "vertical",
    attached: true,
    css: {
      "& > *:first-child": {
        borderBottomRadius: "0",
        marginBottom: "-1px"
      },
      "& > *:last-child": {
        borderTopRadius: "0"
      },
      "& > *:not(:first-child):not(:last-child)": {
        borderRadius: "0",
        marginBottom: "-1px"
      }
    }
  },
  {
    orientation: "horizontal",
    attached: true,
    css: {
      "& > *:first-child": {
        borderEndRadius: "0",
        marginEnd: "-1px"
      },
      "& > *:last-child": {
        borderStartRadius: "0"
      },
      "& > *:not(:first-child):not(:last-child)": {
        borderRadius: "0",
        marginEnd: "-1px"
      }
    }
  },
  {
    orientation: "vertical",
    attached: true,
    css: {
      "& > *:first-child": {
        borderBottomRadius: "0",
        marginBottom: "-1px"
      },
      "& > *:last-child": {
        borderTopRadius: "0"
      },
      "& > *:not(:first-child):not(:last-child)": {
        borderRadius: "0",
        marginBottom: "-1px"
      }
    }
  }
]);
var groupVariantMap = {
  orientation: [
    "horizontal",
    "vertical"
  ],
  attached: [
    "true"
  ],
  grow: [
    "true"
  ]
};
var groupVariantKeys = Object.keys(groupVariantMap);
var group = /* @__PURE__ */ Object.assign(memo(groupFn.recipeFn), {
  __recipe__: true,
  __name__: "group",
  __getCompoundVariantCss__: groupFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: groupVariantKeys,
  variantMap: groupVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe);
  },
  splitVariantProps(props) {
    return splitProps(props, groupVariantKeys);
  },
  getVariantProps: groupFn.getVariantProps
});

// styled-system/recipes/heading.mjs
var headingFn = /* @__PURE__ */ createRecipe("heading", {}, []);
var headingVariantMap = {};
var headingVariantKeys = Object.keys(headingVariantMap);
var heading = /* @__PURE__ */ Object.assign(memo(headingFn.recipeFn), {
  __recipe__: true,
  __name__: "heading",
  __getCompoundVariantCss__: headingFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: headingVariantKeys,
  variantMap: headingVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe);
  },
  splitVariantProps(props) {
    return splitProps(props, headingVariantKeys);
  },
  getVariantProps: headingFn.getVariantProps
});

// styled-system/recipes/icon.mjs
var iconFn = /* @__PURE__ */ createRecipe("icon", {
  size: "md"
}, []);
var iconVariantMap = {
  size: [
    "2xl",
    "2xs",
    "xs",
    "sm",
    "md",
    "lg",
    "xl"
  ]
};
var iconVariantKeys = Object.keys(iconVariantMap);
var icon = /* @__PURE__ */ Object.assign(memo(iconFn.recipeFn), {
  __recipe__: true,
  __name__: "icon",
  __getCompoundVariantCss__: iconFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: iconVariantKeys,
  variantMap: iconVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe);
  },
  splitVariantProps(props) {
    return splitProps(props, iconVariantKeys);
  },
  getVariantProps: iconFn.getVariantProps
});

// styled-system/recipes/input.mjs
var inputFn = /* @__PURE__ */ createRecipe("input", {
  size: "md",
  variant: "outline"
}, []);
var inputVariantMap = {
  variant: [
    "outline",
    "surface",
    "subtle",
    "flushed"
  ],
  size: [
    "2xs",
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl"
  ]
};
var inputVariantKeys = Object.keys(inputVariantMap);
var input = /* @__PURE__ */ Object.assign(memo(inputFn.recipeFn), {
  __recipe__: true,
  __name__: "input",
  __getCompoundVariantCss__: inputFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: inputVariantKeys,
  variantMap: inputVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe);
  },
  splitVariantProps(props) {
    return splitProps(props, inputVariantKeys);
  },
  getVariantProps: inputFn.getVariantProps
});

// styled-system/recipes/input-addon.mjs
var inputAddonFn = /* @__PURE__ */ createRecipe("input-addon", {
  size: "md",
  variant: "outline"
}, []);
var inputAddonVariantMap = {
  variant: [
    "outline",
    "surface",
    "subtle"
  ],
  size: [
    "xs",
    "sm",
    "md",
    "lg",
    "xl"
  ]
};
var inputAddonVariantKeys = Object.keys(inputAddonVariantMap);
var inputAddon = /* @__PURE__ */ Object.assign(memo(inputAddonFn.recipeFn), {
  __recipe__: true,
  __name__: "inputAddon",
  __getCompoundVariantCss__: inputAddonFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: inputAddonVariantKeys,
  variantMap: inputAddonVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe);
  },
  splitVariantProps(props) {
    return splitProps(props, inputAddonVariantKeys);
  },
  getVariantProps: inputAddonFn.getVariantProps
});

// styled-system/recipes/kbd.mjs
var kbdFn = /* @__PURE__ */ createRecipe("kbd", {
  size: "md",
  variant: "subtle"
}, []);
var kbdVariantMap = {
  variant: [
    "solid",
    "surface",
    "outline",
    "subtle",
    "plain"
  ],
  size: [
    "sm",
    "md",
    "lg",
    "xl"
  ]
};
var kbdVariantKeys = Object.keys(kbdVariantMap);
var kbd = /* @__PURE__ */ Object.assign(memo(kbdFn.recipeFn), {
  __recipe__: true,
  __name__: "kbd",
  __getCompoundVariantCss__: kbdFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: kbdVariantKeys,
  variantMap: kbdVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe);
  },
  splitVariantProps(props) {
    return splitProps(props, kbdVariantKeys);
  },
  getVariantProps: kbdFn.getVariantProps
});

// styled-system/recipes/link.mjs
var linkFn = /* @__PURE__ */ createRecipe("link", {
  variant: "underline"
}, []);
var linkVariantMap = {
  variant: [
    "underline",
    "plain"
  ]
};
var linkVariantKeys = Object.keys(linkVariantMap);
var link = /* @__PURE__ */ Object.assign(memo(linkFn.recipeFn), {
  __recipe__: true,
  __name__: "link",
  __getCompoundVariantCss__: linkFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: linkVariantKeys,
  variantMap: linkVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe);
  },
  splitVariantProps(props) {
    return splitProps(props, linkVariantKeys);
  },
  getVariantProps: linkFn.getVariantProps
});

// styled-system/recipes/separator.mjs
var separatorFn = /* @__PURE__ */ createRecipe("separator", {}, []);
var separatorVariantMap = {};
var separatorVariantKeys = Object.keys(separatorVariantMap);
var separator = /* @__PURE__ */ Object.assign(memo(separatorFn.recipeFn), {
  __recipe__: true,
  __name__: "separator",
  __getCompoundVariantCss__: separatorFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: separatorVariantKeys,
  variantMap: separatorVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe);
  },
  splitVariantProps(props) {
    return splitProps(props, separatorVariantKeys);
  },
  getVariantProps: separatorFn.getVariantProps
});

// styled-system/recipes/skeleton.mjs
var skeletonFn = /* @__PURE__ */ createRecipe("skeleton", {
  variant: "pulse",
  loading: true
}, []);
var skeletonVariantMap = {
  loading: [
    "true",
    "false"
  ],
  circle: [
    "true"
  ],
  variant: [
    "pulse",
    "shine",
    "none"
  ]
};
var skeletonVariantKeys = Object.keys(skeletonVariantMap);
var skeleton = /* @__PURE__ */ Object.assign(memo(skeletonFn.recipeFn), {
  __recipe__: true,
  __name__: "skeleton",
  __getCompoundVariantCss__: skeletonFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: skeletonVariantKeys,
  variantMap: skeletonVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe);
  },
  splitVariantProps(props) {
    return splitProps(props, skeletonVariantKeys);
  },
  getVariantProps: skeletonFn.getVariantProps
});

// styled-system/recipes/spinner.mjs
var spinnerFn = /* @__PURE__ */ createRecipe("spinner", {
  size: "md"
}, []);
var spinnerVariantMap = {
  size: [
    "inherit",
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl"
  ]
};
var spinnerVariantKeys = Object.keys(spinnerVariantMap);
var spinner = /* @__PURE__ */ Object.assign(memo(spinnerFn.recipeFn), {
  __recipe__: true,
  __name__: "spinner",
  __getCompoundVariantCss__: spinnerFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: spinnerVariantKeys,
  variantMap: spinnerVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe);
  },
  splitVariantProps(props) {
    return splitProps(props, spinnerVariantKeys);
  },
  getVariantProps: spinnerFn.getVariantProps
});

// styled-system/recipes/text.mjs
var textFn = /* @__PURE__ */ createRecipe("text", {}, []);
var textVariantMap = {
  variant: [
    "heading"
  ],
  size: [
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "5xl",
    "6xl",
    "7xl"
  ]
};
var textVariantKeys = Object.keys(textVariantMap);
var text = /* @__PURE__ */ Object.assign(memo(textFn.recipeFn), {
  __recipe__: true,
  __name__: "text",
  __getCompoundVariantCss__: textFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: textVariantKeys,
  variantMap: textVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe);
  },
  splitVariantProps(props) {
    return splitProps(props, textVariantKeys);
  },
  getVariantProps: textFn.getVariantProps
});

// styled-system/recipes/textarea.mjs
var textareaFn = /* @__PURE__ */ createRecipe("textarea", {
  size: "md",
  variant: "surface"
}, []);
var textareaVariantMap = {
  variant: [
    "outline",
    "surface",
    "subtle",
    "flushed"
  ],
  size: [
    "xs",
    "sm",
    "md",
    "lg",
    "xl"
  ]
};
var textareaVariantKeys = Object.keys(textareaVariantMap);
var textarea = /* @__PURE__ */ Object.assign(memo(textareaFn.recipeFn), {
  __recipe__: true,
  __name__: "textarea",
  __getCompoundVariantCss__: textareaFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: textareaVariantKeys,
  variantMap: textareaVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe);
  },
  splitVariantProps(props) {
    return splitProps(props, textareaVariantKeys);
  },
  getVariantProps: textareaFn.getVariantProps
});

// styled-system/recipes/switch-recipe.mjs
var switchRecipeDefaultVariants = {
  size: "md"
};
var switchRecipeCompoundVariants = [];
var switchRecipeSlotNames = [
  [
    "root",
    "switchRecipe__root"
  ],
  [
    "label",
    "switchRecipe__label"
  ],
  [
    "control",
    "switchRecipe__control"
  ],
  [
    "thumb",
    "switchRecipe__thumb"
  ]
];
var switchRecipeSlotFns = /* @__PURE__ */ switchRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, switchRecipeDefaultVariants, getSlotCompoundVariant(switchRecipeCompoundVariants, slotName))]);
var switchRecipeFn = memo((props = {}) => {
  return Object.fromEntries(switchRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]));
});
var switchRecipeVariantKeys = [
  "size"
];
var getVariantProps = (variants) => ({ ...switchRecipeDefaultVariants, ...compact(variants) });
var switchRecipe = /* @__PURE__ */ Object.assign(switchRecipeFn, {
  __recipe__: false,
  __name__: "switchRecipe",
  raw: (props) => props,
  classNameMap: {},
  variantKeys: switchRecipeVariantKeys,
  variantMap: {
    size: [
      "sm",
      "md",
      "lg"
    ]
  },
  splitVariantProps(props) {
    return splitProps(props, switchRecipeVariantKeys);
  },
  getVariantProps
});

// styled-system/recipes/accordion.mjs
var accordionDefaultVariants = {
  size: "md",
  variant: "outline"
};
var accordionCompoundVariants = [];
var accordionSlotNames = [
  [
    "root",
    "accordion__root"
  ],
  [
    "item",
    "accordion__item"
  ],
  [
    "itemTrigger",
    "accordion__itemTrigger"
  ],
  [
    "itemContent",
    "accordion__itemContent"
  ],
  [
    "itemIndicator",
    "accordion__itemIndicator"
  ],
  [
    "itemBody",
    "accordion__itemBody"
  ],
  [
    "root",
    "accordion__root"
  ],
  [
    "item",
    "accordion__item"
  ],
  [
    "itemTrigger",
    "accordion__itemTrigger"
  ],
  [
    "itemContent",
    "accordion__itemContent"
  ],
  [
    "itemIndicator",
    "accordion__itemIndicator"
  ],
  [
    "root",
    "accordion__root"
  ],
  [
    "item",
    "accordion__item"
  ],
  [
    "itemTrigger",
    "accordion__itemTrigger"
  ],
  [
    "itemContent",
    "accordion__itemContent"
  ],
  [
    "itemIndicator",
    "accordion__itemIndicator"
  ],
  [
    "itemBody",
    "accordion__itemBody"
  ]
];
var accordionSlotFns = /* @__PURE__ */ accordionSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, accordionDefaultVariants, getSlotCompoundVariant(accordionCompoundVariants, slotName))]);
var accordionFn = memo((props = {}) => {
  return Object.fromEntries(accordionSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]));
});
var accordionVariantKeys = [
  "variant",
  "size"
];
var getVariantProps2 = (variants) => ({ ...accordionDefaultVariants, ...compact(variants) });
var accordion = /* @__PURE__ */ Object.assign(accordionFn, {
  __recipe__: false,
  __name__: "accordion",
  raw: (props) => props,
  classNameMap: {},
  variantKeys: accordionVariantKeys,
  variantMap: {
    variant: [
      "outline",
      "plain"
    ],
    size: [
      "md"
    ]
  },
  splitVariantProps(props) {
    return splitProps(props, accordionVariantKeys);
  },
  getVariantProps: getVariantProps2
});

// styled-system/recipes/alert.mjs
var alertDefaultVariants = {
  size: "md",
  status: "info",
  variant: "subtle"
};
var alertCompoundVariants = [];
var alertSlotNames = [
  [
    "root",
    "alert__root"
  ],
  [
    "content",
    "alert__content"
  ],
  [
    "description",
    "alert__description"
  ],
  [
    "indicator",
    "alert__indicator"
  ],
  [
    "title",
    "alert__title"
  ],
  [
    "root",
    "alert__root"
  ],
  [
    "content",
    "alert__content"
  ],
  [
    "description",
    "alert__description"
  ],
  [
    "icon",
    "alert__icon"
  ],
  [
    "title",
    "alert__title"
  ],
  [
    "root",
    "alert__root"
  ],
  [
    "content",
    "alert__content"
  ],
  [
    "description",
    "alert__description"
  ],
  [
    "indicator",
    "alert__indicator"
  ],
  [
    "title",
    "alert__title"
  ]
];
var alertSlotFns = /* @__PURE__ */ alertSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, alertDefaultVariants, getSlotCompoundVariant(alertCompoundVariants, slotName))]);
var alertFn = memo((props = {}) => {
  return Object.fromEntries(alertSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]));
});
var alertVariantKeys = [
  "size",
  "variant",
  "status"
];
var getVariantProps3 = (variants) => ({ ...alertDefaultVariants, ...compact(variants) });
var alert = /* @__PURE__ */ Object.assign(alertFn, {
  __recipe__: false,
  __name__: "alert",
  raw: (props) => props,
  classNameMap: {},
  variantKeys: alertVariantKeys,
  variantMap: {
    size: [
      "md",
      "lg"
    ],
    variant: [
      "solid",
      "surface",
      "subtle",
      "outline"
    ],
    status: [
      "info",
      "warning",
      "success",
      "error",
      "neutral"
    ]
  },
  splitVariantProps(props) {
    return splitProps(props, alertVariantKeys);
  },
  getVariantProps: getVariantProps3
});

// styled-system/recipes/avatar.mjs
var avatarDefaultVariants = {
  size: "md",
  shape: "full",
  variant: "subtle"
};
var avatarCompoundVariants = [];
var avatarSlotNames = [
  [
    "root",
    "avatar__root"
  ],
  [
    "image",
    "avatar__image"
  ],
  [
    "fallback",
    "avatar__fallback"
  ],
  [
    "root",
    "avatar__root"
  ],
  [
    "image",
    "avatar__image"
  ],
  [
    "fallback",
    "avatar__fallback"
  ],
  [
    "root",
    "avatar__root"
  ],
  [
    "image",
    "avatar__image"
  ],
  [
    "fallback",
    "avatar__fallback"
  ]
];
var avatarSlotFns = /* @__PURE__ */ avatarSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, avatarDefaultVariants, getSlotCompoundVariant(avatarCompoundVariants, slotName))]);
var avatarFn = memo((props = {}) => {
  return Object.fromEntries(avatarSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]));
});
var avatarVariantKeys = [
  "size",
  "variant",
  "shape"
];
var getVariantProps4 = (variants) => ({ ...avatarDefaultVariants, ...compact(variants) });
var avatar = /* @__PURE__ */ Object.assign(avatarFn, {
  __recipe__: false,
  __name__: "avatar",
  raw: (props) => props,
  classNameMap: {},
  variantKeys: avatarVariantKeys,
  variantMap: {
    size: [
      "full",
      "2xs",
      "xs",
      "sm",
      "md",
      "lg",
      "xl",
      "2xl"
    ],
    variant: [
      "solid",
      "surface",
      "subtle",
      "outline"
    ],
    shape: [
      "square",
      "rounded",
      "full"
    ]
  },
  splitVariantProps(props) {
    return splitProps(props, avatarVariantKeys);
  },
  getVariantProps: getVariantProps4
});

// styled-system/recipes/breadcrumb.mjs
var breadcrumbDefaultVariants = {
  variant: "plain",
  size: "md"
};
var breadcrumbCompoundVariants = [];
var breadcrumbSlotNames = [
  [
    "root",
    "breadcrumb__root"
  ],
  [
    "list",
    "breadcrumb__list"
  ],
  [
    "link",
    "breadcrumb__link"
  ],
  [
    "item",
    "breadcrumb__item"
  ],
  [
    "separator",
    "breadcrumb__separator"
  ],
  [
    "ellipsis",
    "breadcrumb__ellipsis"
  ],
  [
    "root",
    "breadcrumb__root"
  ],
  [
    "list",
    "breadcrumb__list"
  ],
  [
    "link",
    "breadcrumb__link"
  ],
  [
    "item",
    "breadcrumb__item"
  ],
  [
    "separator",
    "breadcrumb__separator"
  ],
  [
    "ellipsis",
    "breadcrumb__ellipsis"
  ]
];
var breadcrumbSlotFns = /* @__PURE__ */ breadcrumbSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, breadcrumbDefaultVariants, getSlotCompoundVariant(breadcrumbCompoundVariants, slotName))]);
var breadcrumbFn = memo((props = {}) => {
  return Object.fromEntries(breadcrumbSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]));
});
var breadcrumbVariantKeys = [
  "variant",
  "size"
];
var getVariantProps5 = (variants) => ({ ...breadcrumbDefaultVariants, ...compact(variants) });
var breadcrumb = /* @__PURE__ */ Object.assign(breadcrumbFn, {
  __recipe__: false,
  __name__: "breadcrumb",
  raw: (props) => props,
  classNameMap: {},
  variantKeys: breadcrumbVariantKeys,
  variantMap: {
    variant: [
      "underline",
      "plain"
    ],
    size: [
      "xs",
      "sm",
      "md",
      "lg"
    ]
  },
  splitVariantProps(props) {
    return splitProps(props, breadcrumbVariantKeys);
  },
  getVariantProps: getVariantProps5
});

// styled-system/recipes/card.mjs
var cardDefaultVariants = {
  variant: "outline"
};
var cardCompoundVariants = [];
var cardSlotNames = [
  [
    "root",
    "card__root"
  ],
  [
    "header",
    "card__header"
  ],
  [
    "body",
    "card__body"
  ],
  [
    "footer",
    "card__footer"
  ],
  [
    "title",
    "card__title"
  ],
  [
    "description",
    "card__description"
  ],
  [
    "root",
    "card__root"
  ],
  [
    "header",
    "card__header"
  ],
  [
    "body",
    "card__body"
  ],
  [
    "footer",
    "card__footer"
  ],
  [
    "title",
    "card__title"
  ],
  [
    "description",
    "card__description"
  ],
  [
    "root",
    "card__root"
  ],
  [
    "header",
    "card__header"
  ],
  [
    "body",
    "card__body"
  ],
  [
    "footer",
    "card__footer"
  ],
  [
    "title",
    "card__title"
  ],
  [
    "description",
    "card__description"
  ]
];
var cardSlotFns = /* @__PURE__ */ cardSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, cardDefaultVariants, getSlotCompoundVariant(cardCompoundVariants, slotName))]);
var cardFn = memo((props = {}) => {
  return Object.fromEntries(cardSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]));
});
var cardVariantKeys = [
  "variant",
  "hover",
  "dashed"
];
var getVariantProps6 = (variants) => ({ ...cardDefaultVariants, ...compact(variants) });
var card = /* @__PURE__ */ Object.assign(cardFn, {
  __recipe__: false,
  __name__: "card",
  raw: (props) => props,
  classNameMap: {},
  variantKeys: cardVariantKeys,
  variantMap: {
    variant: [
      "elevated",
      "outline",
      "subtle"
    ],
    hover: [
      "true"
    ],
    dashed: [
      "true"
    ]
  },
  splitVariantProps(props) {
    return splitProps(props, cardVariantKeys);
  },
  getVariantProps: getVariantProps6
});

// styled-system/recipes/carousel.mjs
var carouselDefaultVariants = {
  size: "md"
};
var carouselCompoundVariants = [];
var carouselSlotNames = [
  [
    "root",
    "carousel__root"
  ],
  [
    "itemGroup",
    "carousel__itemGroup"
  ],
  [
    "item",
    "carousel__item"
  ],
  [
    "control",
    "carousel__control"
  ],
  [
    "nextTrigger",
    "carousel__nextTrigger"
  ],
  [
    "prevTrigger",
    "carousel__prevTrigger"
  ],
  [
    "indicatorGroup",
    "carousel__indicatorGroup"
  ],
  [
    "indicator",
    "carousel__indicator"
  ],
  [
    "autoplayTrigger",
    "carousel__autoplayTrigger"
  ],
  [
    "progressText",
    "carousel__progressText"
  ],
  [
    "progressText",
    "carousel__progressText"
  ],
  [
    "autoplayIndicator",
    "carousel__autoplayIndicator"
  ],
  [
    "root",
    "carousel__root"
  ],
  [
    "viewport",
    "carousel__viewport"
  ],
  [
    "itemGroup",
    "carousel__itemGroup"
  ],
  [
    "item",
    "carousel__item"
  ],
  [
    "nextTrigger",
    "carousel__nextTrigger"
  ],
  [
    "prevTrigger",
    "carousel__prevTrigger"
  ],
  [
    "indicatorGroup",
    "carousel__indicatorGroup"
  ],
  [
    "indicator",
    "carousel__indicator"
  ],
  [
    "control",
    "carousel__control"
  ],
  [
    "root",
    "carousel__root"
  ],
  [
    "itemGroup",
    "carousel__itemGroup"
  ],
  [
    "item",
    "carousel__item"
  ],
  [
    "control",
    "carousel__control"
  ],
  [
    "nextTrigger",
    "carousel__nextTrigger"
  ],
  [
    "prevTrigger",
    "carousel__prevTrigger"
  ],
  [
    "indicatorGroup",
    "carousel__indicatorGroup"
  ],
  [
    "indicator",
    "carousel__indicator"
  ],
  [
    "autoplayTrigger",
    "carousel__autoplayTrigger"
  ],
  [
    "progressText",
    "carousel__progressText"
  ],
  [
    "progressText",
    "carousel__progressText"
  ],
  [
    "autoplayIndicator",
    "carousel__autoplayIndicator"
  ]
];
var carouselSlotFns = /* @__PURE__ */ carouselSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, carouselDefaultVariants, getSlotCompoundVariant(carouselCompoundVariants, slotName))]);
var carouselFn = memo((props = {}) => {
  return Object.fromEntries(carouselSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]));
});
var carouselVariantKeys = [
  "inline",
  "size"
];
var getVariantProps7 = (variants) => ({ ...carouselDefaultVariants, ...compact(variants) });
var carousel = /* @__PURE__ */ Object.assign(carouselFn, {
  __recipe__: false,
  __name__: "carousel",
  raw: (props) => props,
  classNameMap: {},
  variantKeys: carouselVariantKeys,
  variantMap: {
    inline: [
      "true"
    ],
    size: [
      "sm",
      "md"
    ]
  },
  splitVariantProps(props) {
    return splitProps(props, carouselVariantKeys);
  },
  getVariantProps: getVariantProps7
});

// styled-system/recipes/checkbox.mjs
var checkboxDefaultVariants = {
  variant: "solid",
  size: "md"
};
var checkboxCompoundVariants = [];
var checkboxSlotNames = [
  [
    "root",
    "checkbox__root"
  ],
  [
    "label",
    "checkbox__label"
  ],
  [
    "control",
    "checkbox__control"
  ],
  [
    "indicator",
    "checkbox__indicator"
  ],
  [
    "group",
    "checkbox__group"
  ],
  [
    "root",
    "checkbox__root"
  ],
  [
    "label",
    "checkbox__label"
  ],
  [
    "control",
    "checkbox__control"
  ],
  [
    "indicator",
    "checkbox__indicator"
  ],
  [
    "group",
    "checkbox__group"
  ],
  [
    "root",
    "checkbox__root"
  ],
  [
    "label",
    "checkbox__label"
  ],
  [
    "control",
    "checkbox__control"
  ],
  [
    "indicator",
    "checkbox__indicator"
  ],
  [
    "group",
    "checkbox__group"
  ]
];
var checkboxSlotFns = /* @__PURE__ */ checkboxSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, checkboxDefaultVariants, getSlotCompoundVariant(checkboxCompoundVariants, slotName))]);
var checkboxFn = memo((props = {}) => {
  return Object.fromEntries(checkboxSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]));
});
var checkboxVariantKeys = [
  "size",
  "variant"
];
var getVariantProps8 = (variants) => ({ ...checkboxDefaultVariants, ...compact(variants) });
var checkbox = /* @__PURE__ */ Object.assign(checkboxFn, {
  __recipe__: false,
  __name__: "checkbox",
  raw: (props) => props,
  classNameMap: {},
  variantKeys: checkboxVariantKeys,
  variantMap: {
    size: [
      "sm",
      "md",
      "lg"
    ],
    variant: [
      "solid",
      "surface",
      "subtle",
      "outline",
      "plain"
    ]
  },
  splitVariantProps(props) {
    return splitProps(props, checkboxVariantKeys);
  },
  getVariantProps: getVariantProps8
});

// styled-system/recipes/clipboard.mjs
var clipboardDefaultVariants = {};
var clipboardCompoundVariants = [];
var clipboardSlotNames = [
  [
    "root",
    "clipboard__root"
  ],
  [
    "control",
    "clipboard__control"
  ],
  [
    "trigger",
    "clipboard__trigger"
  ],
  [
    "indicator",
    "clipboard__indicator"
  ],
  [
    "input",
    "clipboard__input"
  ],
  [
    "label",
    "clipboard__label"
  ],
  [
    "root",
    "clipboard__root"
  ],
  [
    "control",
    "clipboard__control"
  ],
  [
    "trigger",
    "clipboard__trigger"
  ],
  [
    "indicator",
    "clipboard__indicator"
  ],
  [
    "input",
    "clipboard__input"
  ],
  [
    "label",
    "clipboard__label"
  ],
  [
    "root",
    "clipboard__root"
  ],
  [
    "control",
    "clipboard__control"
  ],
  [
    "trigger",
    "clipboard__trigger"
  ],
  [
    "indicator",
    "clipboard__indicator"
  ],
  [
    "input",
    "clipboard__input"
  ],
  [
    "label",
    "clipboard__label"
  ]
];
var clipboardSlotFns = /* @__PURE__ */ clipboardSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, clipboardDefaultVariants, getSlotCompoundVariant(clipboardCompoundVariants, slotName))]);
var clipboardFn = memo((props = {}) => {
  return Object.fromEntries(clipboardSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]));
});
var clipboardVariantKeys = [];
var getVariantProps9 = (variants) => ({ ...clipboardDefaultVariants, ...compact(variants) });
var clipboard = /* @__PURE__ */ Object.assign(clipboardFn, {
  __recipe__: false,
  __name__: "clipboard",
  raw: (props) => props,
  classNameMap: {},
  variantKeys: clipboardVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, clipboardVariantKeys);
  },
  getVariantProps: getVariantProps9
});

// styled-system/recipes/collapsible.mjs
var collapsibleDefaultVariants = {};
var collapsibleCompoundVariants = [];
var collapsibleSlotNames = [
  [
    "root",
    "collapsible__root"
  ],
  [
    "trigger",
    "collapsible__trigger"
  ],
  [
    "content",
    "collapsible__content"
  ],
  [
    "indicator",
    "collapsible__indicator"
  ],
  [
    "root",
    "collapsible__root"
  ],
  [
    "trigger",
    "collapsible__trigger"
  ],
  [
    "content",
    "collapsible__content"
  ],
  [
    "root",
    "collapsible__root"
  ],
  [
    "trigger",
    "collapsible__trigger"
  ],
  [
    "content",
    "collapsible__content"
  ],
  [
    "indicator",
    "collapsible__indicator"
  ]
];
var collapsibleSlotFns = /* @__PURE__ */ collapsibleSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, collapsibleDefaultVariants, getSlotCompoundVariant(collapsibleCompoundVariants, slotName))]);
var collapsibleFn = memo((props = {}) => {
  return Object.fromEntries(collapsibleSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]));
});
var collapsibleVariantKeys = [];
var getVariantProps10 = (variants) => ({ ...collapsibleDefaultVariants, ...compact(variants) });
var collapsible = /* @__PURE__ */ Object.assign(collapsibleFn, {
  __recipe__: false,
  __name__: "collapsible",
  raw: (props) => props,
  classNameMap: {},
  variantKeys: collapsibleVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, collapsibleVariantKeys);
  },
  getVariantProps: getVariantProps10
});

// styled-system/recipes/color-picker.mjs
var colorPickerDefaultVariants = {};
var colorPickerCompoundVariants = [];
var colorPickerSlotNames = [
  [
    "root",
    "color-picker__root"
  ],
  [
    "label",
    "color-picker__label"
  ],
  [
    "control",
    "color-picker__control"
  ],
  [
    "trigger",
    "color-picker__trigger"
  ],
  [
    "positioner",
    "color-picker__positioner"
  ],
  [
    "content",
    "color-picker__content"
  ],
  [
    "area",
    "color-picker__area"
  ],
  [
    "areaThumb",
    "color-picker__areaThumb"
  ],
  [
    "valueText",
    "color-picker__valueText"
  ],
  [
    "areaBackground",
    "color-picker__areaBackground"
  ],
  [
    "channelSlider",
    "color-picker__channelSlider"
  ],
  [
    "channelSliderLabel",
    "color-picker__channelSliderLabel"
  ],
  [
    "channelSliderTrack",
    "color-picker__channelSliderTrack"
  ],
  [
    "channelSliderThumb",
    "color-picker__channelSliderThumb"
  ],
  [
    "channelSliderValueText",
    "color-picker__channelSliderValueText"
  ],
  [
    "channelInput",
    "color-picker__channelInput"
  ],
  [
    "transparencyGrid",
    "color-picker__transparencyGrid"
  ],
  [
    "swatchGroup",
    "color-picker__swatchGroup"
  ],
  [
    "swatchTrigger",
    "color-picker__swatchTrigger"
  ],
  [
    "swatchIndicator",
    "color-picker__swatchIndicator"
  ],
  [
    "swatch",
    "color-picker__swatch"
  ],
  [
    "eyeDropperTrigger",
    "color-picker__eyeDropperTrigger"
  ],
  [
    "formatTrigger",
    "color-picker__formatTrigger"
  ],
  [
    "formatSelect",
    "color-picker__formatSelect"
  ],
  [
    "view",
    "color-picker__view"
  ],
  [
    "root",
    "color-picker__root"
  ],
  [
    "label",
    "color-picker__label"
  ],
  [
    "control",
    "color-picker__control"
  ],
  [
    "trigger",
    "color-picker__trigger"
  ],
  [
    "positioner",
    "color-picker__positioner"
  ],
  [
    "content",
    "color-picker__content"
  ],
  [
    "area",
    "color-picker__area"
  ],
  [
    "areaThumb",
    "color-picker__areaThumb"
  ],
  [
    "valueText",
    "color-picker__valueText"
  ],
  [
    "areaBackground",
    "color-picker__areaBackground"
  ],
  [
    "channelSlider",
    "color-picker__channelSlider"
  ],
  [
    "channelSliderLabel",
    "color-picker__channelSliderLabel"
  ],
  [
    "channelSliderTrack",
    "color-picker__channelSliderTrack"
  ],
  [
    "channelSliderThumb",
    "color-picker__channelSliderThumb"
  ],
  [
    "channelSliderValueText",
    "color-picker__channelSliderValueText"
  ],
  [
    "channelInput",
    "color-picker__channelInput"
  ],
  [
    "transparencyGrid",
    "color-picker__transparencyGrid"
  ],
  [
    "swatchGroup",
    "color-picker__swatchGroup"
  ],
  [
    "swatchTrigger",
    "color-picker__swatchTrigger"
  ],
  [
    "swatchIndicator",
    "color-picker__swatchIndicator"
  ],
  [
    "swatch",
    "color-picker__swatch"
  ],
  [
    "eyeDropperTrigger",
    "color-picker__eyeDropperTrigger"
  ],
  [
    "formatTrigger",
    "color-picker__formatTrigger"
  ],
  [
    "formatSelect",
    "color-picker__formatSelect"
  ],
  [
    "view",
    "color-picker__view"
  ],
  [
    "root",
    "color-picker__root"
  ],
  [
    "label",
    "color-picker__label"
  ],
  [
    "control",
    "color-picker__control"
  ],
  [
    "trigger",
    "color-picker__trigger"
  ],
  [
    "positioner",
    "color-picker__positioner"
  ],
  [
    "content",
    "color-picker__content"
  ],
  [
    "area",
    "color-picker__area"
  ],
  [
    "areaThumb",
    "color-picker__areaThumb"
  ],
  [
    "valueText",
    "color-picker__valueText"
  ],
  [
    "areaBackground",
    "color-picker__areaBackground"
  ],
  [
    "channelSlider",
    "color-picker__channelSlider"
  ],
  [
    "channelSliderLabel",
    "color-picker__channelSliderLabel"
  ],
  [
    "channelSliderTrack",
    "color-picker__channelSliderTrack"
  ],
  [
    "channelSliderThumb",
    "color-picker__channelSliderThumb"
  ],
  [
    "channelSliderValueText",
    "color-picker__channelSliderValueText"
  ],
  [
    "channelInput",
    "color-picker__channelInput"
  ],
  [
    "transparencyGrid",
    "color-picker__transparencyGrid"
  ],
  [
    "swatchGroup",
    "color-picker__swatchGroup"
  ],
  [
    "swatchTrigger",
    "color-picker__swatchTrigger"
  ],
  [
    "swatchIndicator",
    "color-picker__swatchIndicator"
  ],
  [
    "swatch",
    "color-picker__swatch"
  ],
  [
    "eyeDropperTrigger",
    "color-picker__eyeDropperTrigger"
  ],
  [
    "formatTrigger",
    "color-picker__formatTrigger"
  ],
  [
    "formatSelect",
    "color-picker__formatSelect"
  ],
  [
    "view",
    "color-picker__view"
  ]
];
var colorPickerSlotFns = /* @__PURE__ */ colorPickerSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, colorPickerDefaultVariants, getSlotCompoundVariant(colorPickerCompoundVariants, slotName))]);
var colorPickerFn = memo((props = {}) => {
  return Object.fromEntries(colorPickerSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]));
});
var colorPickerVariantKeys = [];
var getVariantProps11 = (variants) => ({ ...colorPickerDefaultVariants, ...compact(variants) });
var colorPicker = /* @__PURE__ */ Object.assign(colorPickerFn, {
  __recipe__: false,
  __name__: "colorPicker",
  raw: (props) => props,
  classNameMap: {},
  variantKeys: colorPickerVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, colorPickerVariantKeys);
  },
  getVariantProps: getVariantProps11
});

// styled-system/recipes/combobox.mjs
var comboboxDefaultVariants = {
  size: "md",
  variant: "outline"
};
var comboboxCompoundVariants = [];
var comboboxSlotNames = [
  [
    "root",
    "combobox__root"
  ],
  [
    "clearTrigger",
    "combobox__clearTrigger"
  ],
  [
    "content",
    "combobox__content"
  ],
  [
    "control",
    "combobox__control"
  ],
  [
    "input",
    "combobox__input"
  ],
  [
    "item",
    "combobox__item"
  ],
  [
    "itemGroup",
    "combobox__itemGroup"
  ],
  [
    "itemGroupLabel",
    "combobox__itemGroupLabel"
  ],
  [
    "itemIndicator",
    "combobox__itemIndicator"
  ],
  [
    "itemText",
    "combobox__itemText"
  ],
  [
    "label",
    "combobox__label"
  ],
  [
    "list",
    "combobox__list"
  ],
  [
    "positioner",
    "combobox__positioner"
  ],
  [
    "trigger",
    "combobox__trigger"
  ],
  [
    "empty",
    "combobox__empty"
  ],
  [
    "indicatorGroup",
    "combobox__indicatorGroup"
  ],
  [
    "root",
    "combobox__root"
  ],
  [
    "clearTrigger",
    "combobox__clearTrigger"
  ],
  [
    "content",
    "combobox__content"
  ],
  [
    "control",
    "combobox__control"
  ],
  [
    "input",
    "combobox__input"
  ],
  [
    "item",
    "combobox__item"
  ],
  [
    "itemGroup",
    "combobox__itemGroup"
  ],
  [
    "itemGroupLabel",
    "combobox__itemGroupLabel"
  ],
  [
    "itemIndicator",
    "combobox__itemIndicator"
  ],
  [
    "itemText",
    "combobox__itemText"
  ],
  [
    "label",
    "combobox__label"
  ],
  [
    "list",
    "combobox__list"
  ],
  [
    "positioner",
    "combobox__positioner"
  ],
  [
    "trigger",
    "combobox__trigger"
  ],
  [
    "root",
    "combobox__root"
  ],
  [
    "clearTrigger",
    "combobox__clearTrigger"
  ],
  [
    "content",
    "combobox__content"
  ],
  [
    "control",
    "combobox__control"
  ],
  [
    "input",
    "combobox__input"
  ],
  [
    "item",
    "combobox__item"
  ],
  [
    "itemGroup",
    "combobox__itemGroup"
  ],
  [
    "itemGroupLabel",
    "combobox__itemGroupLabel"
  ],
  [
    "itemIndicator",
    "combobox__itemIndicator"
  ],
  [
    "itemText",
    "combobox__itemText"
  ],
  [
    "label",
    "combobox__label"
  ],
  [
    "list",
    "combobox__list"
  ],
  [
    "positioner",
    "combobox__positioner"
  ],
  [
    "trigger",
    "combobox__trigger"
  ],
  [
    "empty",
    "combobox__empty"
  ],
  [
    "indicatorGroup",
    "combobox__indicatorGroup"
  ]
];
var comboboxSlotFns = /* @__PURE__ */ comboboxSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, comboboxDefaultVariants, getSlotCompoundVariant(comboboxCompoundVariants, slotName))]);
var comboboxFn = memo((props = {}) => {
  return Object.fromEntries(comboboxSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]));
});
var comboboxVariantKeys = [
  "variant",
  "size"
];
var getVariantProps12 = (variants) => ({ ...comboboxDefaultVariants, ...compact(variants) });
var combobox = /* @__PURE__ */ Object.assign(comboboxFn, {
  __recipe__: false,
  __name__: "combobox",
  raw: (props) => props,
  classNameMap: {},
  variantKeys: comboboxVariantKeys,
  variantMap: {
    variant: [
      "outline",
      "surface",
      "subtle"
    ],
    size: [
      "xs",
      "sm",
      "md",
      "lg",
      "xl"
    ]
  },
  splitVariantProps(props) {
    return splitProps(props, comboboxVariantKeys);
  },
  getVariantProps: getVariantProps12
});

// styled-system/recipes/date-picker.mjs
var datePickerDefaultVariants = {};
var datePickerCompoundVariants = [];
var datePickerSlotNames = [
  [
    "clearTrigger",
    "date-picker__clearTrigger"
  ],
  [
    "content",
    "date-picker__content"
  ],
  [
    "control",
    "date-picker__control"
  ],
  [
    "input",
    "date-picker__input"
  ],
  [
    "label",
    "date-picker__label"
  ],
  [
    "monthSelect",
    "date-picker__monthSelect"
  ],
  [
    "nextTrigger",
    "date-picker__nextTrigger"
  ],
  [
    "positioner",
    "date-picker__positioner"
  ],
  [
    "presetTrigger",
    "date-picker__presetTrigger"
  ],
  [
    "prevTrigger",
    "date-picker__prevTrigger"
  ],
  [
    "rangeText",
    "date-picker__rangeText"
  ],
  [
    "root",
    "date-picker__root"
  ],
  [
    "table",
    "date-picker__table"
  ],
  [
    "tableBody",
    "date-picker__tableBody"
  ],
  [
    "tableCell",
    "date-picker__tableCell"
  ],
  [
    "tableCellTrigger",
    "date-picker__tableCellTrigger"
  ],
  [
    "tableHead",
    "date-picker__tableHead"
  ],
  [
    "tableHeader",
    "date-picker__tableHeader"
  ],
  [
    "tableRow",
    "date-picker__tableRow"
  ],
  [
    "trigger",
    "date-picker__trigger"
  ],
  [
    "view",
    "date-picker__view"
  ],
  [
    "viewControl",
    "date-picker__viewControl"
  ],
  [
    "viewTrigger",
    "date-picker__viewTrigger"
  ],
  [
    "yearSelect",
    "date-picker__yearSelect"
  ],
  [
    "view",
    "date-picker__view"
  ],
  [
    "valueText",
    "date-picker__valueText"
  ],
  [
    "root",
    "date-picker__root"
  ],
  [
    "label",
    "date-picker__label"
  ],
  [
    "clearTrigger",
    "date-picker__clearTrigger"
  ],
  [
    "content",
    "date-picker__content"
  ],
  [
    "control",
    "date-picker__control"
  ],
  [
    "input",
    "date-picker__input"
  ],
  [
    "monthSelect",
    "date-picker__monthSelect"
  ],
  [
    "nextTrigger",
    "date-picker__nextTrigger"
  ],
  [
    "positioner",
    "date-picker__positioner"
  ],
  [
    "prevTrigger",
    "date-picker__prevTrigger"
  ],
  [
    "rangeText",
    "date-picker__rangeText"
  ],
  [
    "table",
    "date-picker__table"
  ],
  [
    "tableBody",
    "date-picker__tableBody"
  ],
  [
    "tableCell",
    "date-picker__tableCell"
  ],
  [
    "tableCellTrigger",
    "date-picker__tableCellTrigger"
  ],
  [
    "tableHead",
    "date-picker__tableHead"
  ],
  [
    "tableHeader",
    "date-picker__tableHeader"
  ],
  [
    "tableRow",
    "date-picker__tableRow"
  ],
  [
    "trigger",
    "date-picker__trigger"
  ],
  [
    "viewTrigger",
    "date-picker__viewTrigger"
  ],
  [
    "viewControl",
    "date-picker__viewControl"
  ],
  [
    "yearSelect",
    "date-picker__yearSelect"
  ],
  [
    "presetTrigger",
    "date-picker__presetTrigger"
  ],
  [
    "view",
    "date-picker__view"
  ],
  [
    "clearTrigger",
    "date-picker__clearTrigger"
  ],
  [
    "content",
    "date-picker__content"
  ],
  [
    "control",
    "date-picker__control"
  ],
  [
    "input",
    "date-picker__input"
  ],
  [
    "label",
    "date-picker__label"
  ],
  [
    "monthSelect",
    "date-picker__monthSelect"
  ],
  [
    "nextTrigger",
    "date-picker__nextTrigger"
  ],
  [
    "positioner",
    "date-picker__positioner"
  ],
  [
    "presetTrigger",
    "date-picker__presetTrigger"
  ],
  [
    "prevTrigger",
    "date-picker__prevTrigger"
  ],
  [
    "rangeText",
    "date-picker__rangeText"
  ],
  [
    "root",
    "date-picker__root"
  ],
  [
    "table",
    "date-picker__table"
  ],
  [
    "tableBody",
    "date-picker__tableBody"
  ],
  [
    "tableCell",
    "date-picker__tableCell"
  ],
  [
    "tableCellTrigger",
    "date-picker__tableCellTrigger"
  ],
  [
    "tableHead",
    "date-picker__tableHead"
  ],
  [
    "tableHeader",
    "date-picker__tableHeader"
  ],
  [
    "tableRow",
    "date-picker__tableRow"
  ],
  [
    "trigger",
    "date-picker__trigger"
  ],
  [
    "view",
    "date-picker__view"
  ],
  [
    "viewControl",
    "date-picker__viewControl"
  ],
  [
    "viewTrigger",
    "date-picker__viewTrigger"
  ],
  [
    "yearSelect",
    "date-picker__yearSelect"
  ],
  [
    "view",
    "date-picker__view"
  ],
  [
    "valueText",
    "date-picker__valueText"
  ]
];
var datePickerSlotFns = /* @__PURE__ */ datePickerSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, datePickerDefaultVariants, getSlotCompoundVariant(datePickerCompoundVariants, slotName))]);
var datePickerFn = memo((props = {}) => {
  return Object.fromEntries(datePickerSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]));
});
var datePickerVariantKeys = [];
var getVariantProps13 = (variants) => ({ ...datePickerDefaultVariants, ...compact(variants) });
var datePicker = /* @__PURE__ */ Object.assign(datePickerFn, {
  __recipe__: false,
  __name__: "datePicker",
  raw: (props) => props,
  classNameMap: {},
  variantKeys: datePickerVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, datePickerVariantKeys);
  },
  getVariantProps: getVariantProps13
});

// styled-system/recipes/dialog.mjs
var dialogDefaultVariants = {
  size: "md",
  scrollBehavior: "outside",
  placement: "center",
  motionPreset: "scale"
};
var dialogCompoundVariants = [];
var dialogSlotNames = [
  [
    "trigger",
    "dialog__trigger"
  ],
  [
    "backdrop",
    "dialog__backdrop"
  ],
  [
    "positioner",
    "dialog__positioner"
  ],
  [
    "content",
    "dialog__content"
  ],
  [
    "title",
    "dialog__title"
  ],
  [
    "description",
    "dialog__description"
  ],
  [
    "closeTrigger",
    "dialog__closeTrigger"
  ],
  [
    "header",
    "dialog__header"
  ],
  [
    "body",
    "dialog__body"
  ],
  [
    "footer",
    "dialog__footer"
  ],
  [
    "trigger",
    "dialog__trigger"
  ],
  [
    "backdrop",
    "dialog__backdrop"
  ],
  [
    "positioner",
    "dialog__positioner"
  ],
  [
    "content",
    "dialog__content"
  ],
  [
    "title",
    "dialog__title"
  ],
  [
    "description",
    "dialog__description"
  ],
  [
    "closeTrigger",
    "dialog__closeTrigger"
  ],
  [
    "trigger",
    "dialog__trigger"
  ],
  [
    "backdrop",
    "dialog__backdrop"
  ],
  [
    "positioner",
    "dialog__positioner"
  ],
  [
    "content",
    "dialog__content"
  ],
  [
    "title",
    "dialog__title"
  ],
  [
    "description",
    "dialog__description"
  ],
  [
    "closeTrigger",
    "dialog__closeTrigger"
  ],
  [
    "header",
    "dialog__header"
  ],
  [
    "body",
    "dialog__body"
  ],
  [
    "footer",
    "dialog__footer"
  ]
];
var dialogSlotFns = /* @__PURE__ */ dialogSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, dialogDefaultVariants, getSlotCompoundVariant(dialogCompoundVariants, slotName))]);
var dialogFn = memo((props = {}) => {
  return Object.fromEntries(dialogSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]));
});
var dialogVariantKeys = [
  "motionPreset",
  "size",
  "placement",
  "scrollBehavior"
];
var getVariantProps14 = (variants) => ({ ...dialogDefaultVariants, ...compact(variants) });
var dialog = /* @__PURE__ */ Object.assign(dialogFn, {
  __recipe__: false,
  __name__: "dialog",
  raw: (props) => props,
  classNameMap: {},
  variantKeys: dialogVariantKeys,
  variantMap: {
    motionPreset: [
      "scale",
      "slide-in-bottom",
      "slide-in-top",
      "slide-in-left",
      "slide-in-right",
      "none"
    ],
    size: [
      "xs",
      "sm",
      "md",
      "lg",
      "xl",
      "cover",
      "full"
    ],
    placement: [
      "center",
      "top",
      "bottom"
    ],
    scrollBehavior: [
      "inside",
      "outside"
    ]
  },
  splitVariantProps(props) {
    return splitProps(props, dialogVariantKeys);
  },
  getVariantProps: getVariantProps14
});

// styled-system/recipes/drawer.mjs
var drawerDefaultVariants = {
  variant: "right",
  placement: "end",
  size: "sm"
};
var drawerCompoundVariants = [];
var drawerSlotNames = [
  [
    "trigger",
    "drawer__trigger"
  ],
  [
    "backdrop",
    "drawer__backdrop"
  ],
  [
    "positioner",
    "drawer__positioner"
  ],
  [
    "content",
    "drawer__content"
  ],
  [
    "title",
    "drawer__title"
  ],
  [
    "description",
    "drawer__description"
  ],
  [
    "closeTrigger",
    "drawer__closeTrigger"
  ],
  [
    "header",
    "drawer__header"
  ],
  [
    "body",
    "drawer__body"
  ],
  [
    "footer",
    "drawer__footer"
  ],
  [
    "trigger",
    "drawer__trigger"
  ],
  [
    "backdrop",
    "drawer__backdrop"
  ],
  [
    "positioner",
    "drawer__positioner"
  ],
  [
    "content",
    "drawer__content"
  ],
  [
    "title",
    "drawer__title"
  ],
  [
    "description",
    "drawer__description"
  ],
  [
    "closeTrigger",
    "drawer__closeTrigger"
  ],
  [
    "header",
    "drawer__header"
  ],
  [
    "body",
    "drawer__body"
  ],
  [
    "footer",
    "drawer__footer"
  ],
  [
    "trigger",
    "drawer__trigger"
  ],
  [
    "backdrop",
    "drawer__backdrop"
  ],
  [
    "positioner",
    "drawer__positioner"
  ],
  [
    "content",
    "drawer__content"
  ],
  [
    "title",
    "drawer__title"
  ],
  [
    "description",
    "drawer__description"
  ],
  [
    "closeTrigger",
    "drawer__closeTrigger"
  ],
  [
    "header",
    "drawer__header"
  ],
  [
    "body",
    "drawer__body"
  ],
  [
    "footer",
    "drawer__footer"
  ]
];
var drawerSlotFns = /* @__PURE__ */ drawerSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, drawerDefaultVariants, getSlotCompoundVariant(drawerCompoundVariants, slotName))]);
var drawerFn = memo((props = {}) => {
  return Object.fromEntries(drawerSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]));
});
var drawerVariantKeys = [
  "variant",
  "size",
  "placement"
];
var getVariantProps15 = (variants) => ({ ...drawerDefaultVariants, ...compact(variants) });
var drawer = /* @__PURE__ */ Object.assign(drawerFn, {
  __recipe__: false,
  __name__: "drawer",
  raw: (props) => props,
  classNameMap: {},
  variantKeys: drawerVariantKeys,
  variantMap: {
    variant: [
      "left",
      "right"
    ],
    size: [
      "xs",
      "sm",
      "md",
      "lg",
      "xl",
      "full"
    ],
    placement: [
      "start",
      "end",
      "top",
      "bottom"
    ]
  },
  splitVariantProps(props) {
    return splitProps(props, drawerVariantKeys);
  },
  getVariantProps: getVariantProps15
});

// styled-system/recipes/editable.mjs
var editableDefaultVariants = {
  size: "md"
};
var editableCompoundVariants = [];
var editableSlotNames = [
  [
    "root",
    "editable__root"
  ],
  [
    "area",
    "editable__area"
  ],
  [
    "label",
    "editable__label"
  ],
  [
    "preview",
    "editable__preview"
  ],
  [
    "input",
    "editable__input"
  ],
  [
    "editTrigger",
    "editable__editTrigger"
  ],
  [
    "submitTrigger",
    "editable__submitTrigger"
  ],
  [
    "cancelTrigger",
    "editable__cancelTrigger"
  ],
  [
    "control",
    "editable__control"
  ],
  [
    "root",
    "editable__root"
  ],
  [
    "area",
    "editable__area"
  ],
  [
    "label",
    "editable__label"
  ],
  [
    "preview",
    "editable__preview"
  ],
  [
    "input",
    "editable__input"
  ],
  [
    "editTrigger",
    "editable__editTrigger"
  ],
  [
    "submitTrigger",
    "editable__submitTrigger"
  ],
  [
    "cancelTrigger",
    "editable__cancelTrigger"
  ],
  [
    "control",
    "editable__control"
  ],
  [
    "root",
    "editable__root"
  ],
  [
    "area",
    "editable__area"
  ],
  [
    "label",
    "editable__label"
  ],
  [
    "preview",
    "editable__preview"
  ],
  [
    "input",
    "editable__input"
  ],
  [
    "editTrigger",
    "editable__editTrigger"
  ],
  [
    "submitTrigger",
    "editable__submitTrigger"
  ],
  [
    "cancelTrigger",
    "editable__cancelTrigger"
  ],
  [
    "control",
    "editable__control"
  ]
];
var editableSlotFns = /* @__PURE__ */ editableSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, editableDefaultVariants, getSlotCompoundVariant(editableCompoundVariants, slotName))]);
var editableFn = memo((props = {}) => {
  return Object.fromEntries(editableSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]));
});
var editableVariantKeys = [
  "size"
];
var getVariantProps16 = (variants) => ({ ...editableDefaultVariants, ...compact(variants) });
var editable = /* @__PURE__ */ Object.assign(editableFn, {
  __recipe__: false,
  __name__: "editable",
  raw: (props) => props,
  classNameMap: {},
  variantKeys: editableVariantKeys,
  variantMap: {
    size: [
      "2xs",
      "xs",
      "sm",
      "md",
      "lg"
    ]
  },
  splitVariantProps(props) {
    return splitProps(props, editableVariantKeys);
  },
  getVariantProps: getVariantProps16
});

// styled-system/recipes/field.mjs
var fieldDefaultVariants = {};
var fieldCompoundVariants = [];
var fieldSlotNames = [
  [
    "root",
    "field__root"
  ],
  [
    "errorText",
    "field__errorText"
  ],
  [
    "helperText",
    "field__helperText"
  ],
  [
    "input",
    "field__input"
  ],
  [
    "label",
    "field__label"
  ],
  [
    "select",
    "field__select"
  ],
  [
    "textarea",
    "field__textarea"
  ],
  [
    "requiredIndicator",
    "field__requiredIndicator"
  ],
  [
    "root",
    "field__root"
  ],
  [
    "errorText",
    "field__errorText"
  ],
  [
    "helperText",
    "field__helperText"
  ],
  [
    "input",
    "field__input"
  ],
  [
    "label",
    "field__label"
  ],
  [
    "select",
    "field__select"
  ],
  [
    "textarea",
    "field__textarea"
  ],
  [
    "root",
    "field__root"
  ],
  [
    "errorText",
    "field__errorText"
  ],
  [
    "helperText",
    "field__helperText"
  ],
  [
    "input",
    "field__input"
  ],
  [
    "label",
    "field__label"
  ],
  [
    "select",
    "field__select"
  ],
  [
    "textarea",
    "field__textarea"
  ],
  [
    "requiredIndicator",
    "field__requiredIndicator"
  ]
];
var fieldSlotFns = /* @__PURE__ */ fieldSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, fieldDefaultVariants, getSlotCompoundVariant(fieldCompoundVariants, slotName))]);
var fieldFn = memo((props = {}) => {
  return Object.fromEntries(fieldSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]));
});
var fieldVariantKeys = [];
var getVariantProps17 = (variants) => ({ ...fieldDefaultVariants, ...compact(variants) });
var field = /* @__PURE__ */ Object.assign(fieldFn, {
  __recipe__: false,
  __name__: "field",
  raw: (props) => props,
  classNameMap: {},
  variantKeys: fieldVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, fieldVariantKeys);
  },
  getVariantProps: getVariantProps17
});

// styled-system/recipes/fieldset.mjs
var fieldsetDefaultVariants = {};
var fieldsetCompoundVariants = [];
var fieldsetSlotNames = [
  [
    "root",
    "fieldset__root"
  ],
  [
    "errorText",
    "fieldset__errorText"
  ],
  [
    "helperText",
    "fieldset__helperText"
  ],
  [
    "legend",
    "fieldset__legend"
  ],
  [
    "content",
    "fieldset__content"
  ],
  [
    "control",
    "fieldset__control"
  ],
  [
    "root",
    "fieldset__root"
  ],
  [
    "errorText",
    "fieldset__errorText"
  ],
  [
    "helperText",
    "fieldset__helperText"
  ],
  [
    "legend",
    "fieldset__legend"
  ],
  [
    "control",
    "fieldset__control"
  ],
  [
    "root",
    "fieldset__root"
  ],
  [
    "errorText",
    "fieldset__errorText"
  ],
  [
    "helperText",
    "fieldset__helperText"
  ],
  [
    "legend",
    "fieldset__legend"
  ],
  [
    "content",
    "fieldset__content"
  ],
  [
    "control",
    "fieldset__control"
  ]
];
var fieldsetSlotFns = /* @__PURE__ */ fieldsetSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, fieldsetDefaultVariants, getSlotCompoundVariant(fieldsetCompoundVariants, slotName))]);
var fieldsetFn = memo((props = {}) => {
  return Object.fromEntries(fieldsetSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]));
});
var fieldsetVariantKeys = [];
var getVariantProps18 = (variants) => ({ ...fieldsetDefaultVariants, ...compact(variants) });
var fieldset = /* @__PURE__ */ Object.assign(fieldsetFn, {
  __recipe__: false,
  __name__: "fieldset",
  raw: (props) => props,
  classNameMap: {},
  variantKeys: fieldsetVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, fieldsetVariantKeys);
  },
  getVariantProps: getVariantProps18
});

// styled-system/recipes/file-upload.mjs
var fileUploadDefaultVariants = {
  size: "md"
};
var fileUploadCompoundVariants = [];
var fileUploadSlotNames = [
  [
    "root",
    "file-upload__root"
  ],
  [
    "dropzone",
    "file-upload__dropzone"
  ],
  [
    "item",
    "file-upload__item"
  ],
  [
    "itemDeleteTrigger",
    "file-upload__itemDeleteTrigger"
  ],
  [
    "itemGroup",
    "file-upload__itemGroup"
  ],
  [
    "itemName",
    "file-upload__itemName"
  ],
  [
    "itemPreview",
    "file-upload__itemPreview"
  ],
  [
    "itemPreviewImage",
    "file-upload__itemPreviewImage"
  ],
  [
    "itemSizeText",
    "file-upload__itemSizeText"
  ],
  [
    "label",
    "file-upload__label"
  ],
  [
    "trigger",
    "file-upload__trigger"
  ],
  [
    "clearTrigger",
    "file-upload__clearTrigger"
  ],
  [
    "root",
    "file-upload__root"
  ],
  [
    "dropzone",
    "file-upload__dropzone"
  ],
  [
    "item",
    "file-upload__item"
  ],
  [
    "itemDeleteTrigger",
    "file-upload__itemDeleteTrigger"
  ],
  [
    "itemGroup",
    "file-upload__itemGroup"
  ],
  [
    "itemName",
    "file-upload__itemName"
  ],
  [
    "itemPreview",
    "file-upload__itemPreview"
  ],
  [
    "itemPreviewImage",
    "file-upload__itemPreviewImage"
  ],
  [
    "itemSizeText",
    "file-upload__itemSizeText"
  ],
  [
    "label",
    "file-upload__label"
  ],
  [
    "trigger",
    "file-upload__trigger"
  ],
  [
    "root",
    "file-upload__root"
  ],
  [
    "dropzone",
    "file-upload__dropzone"
  ],
  [
    "item",
    "file-upload__item"
  ],
  [
    "itemDeleteTrigger",
    "file-upload__itemDeleteTrigger"
  ],
  [
    "itemGroup",
    "file-upload__itemGroup"
  ],
  [
    "itemName",
    "file-upload__itemName"
  ],
  [
    "itemPreview",
    "file-upload__itemPreview"
  ],
  [
    "itemPreviewImage",
    "file-upload__itemPreviewImage"
  ],
  [
    "itemSizeText",
    "file-upload__itemSizeText"
  ],
  [
    "label",
    "file-upload__label"
  ],
  [
    "trigger",
    "file-upload__trigger"
  ],
  [
    "clearTrigger",
    "file-upload__clearTrigger"
  ]
];
var fileUploadSlotFns = /* @__PURE__ */ fileUploadSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, fileUploadDefaultVariants, getSlotCompoundVariant(fileUploadCompoundVariants, slotName))]);
var fileUploadFn = memo((props = {}) => {
  return Object.fromEntries(fileUploadSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]));
});
var fileUploadVariantKeys = [
  "size"
];
var getVariantProps19 = (variants) => ({ ...fileUploadDefaultVariants, ...compact(variants) });
var fileUpload = /* @__PURE__ */ Object.assign(fileUploadFn, {
  __recipe__: false,
  __name__: "fileUpload",
  raw: (props) => props,
  classNameMap: {},
  variantKeys: fileUploadVariantKeys,
  variantMap: {
    size: [
      "md"
    ]
  },
  splitVariantProps(props) {
    return splitProps(props, fileUploadVariantKeys);
  },
  getVariantProps: getVariantProps19
});

// styled-system/recipes/hover-card.mjs
var hoverCardDefaultVariants = {};
var hoverCardCompoundVariants = [];
var hoverCardSlotNames = [
  [
    "arrow",
    "hover-card__arrow"
  ],
  [
    "arrowTip",
    "hover-card__arrowTip"
  ],
  [
    "trigger",
    "hover-card__trigger"
  ],
  [
    "positioner",
    "hover-card__positioner"
  ],
  [
    "content",
    "hover-card__content"
  ],
  [
    "arrow",
    "hover-card__arrow"
  ],
  [
    "arrowTip",
    "hover-card__arrowTip"
  ],
  [
    "trigger",
    "hover-card__trigger"
  ],
  [
    "positioner",
    "hover-card__positioner"
  ],
  [
    "content",
    "hover-card__content"
  ],
  [
    "arrow",
    "hover-card__arrow"
  ],
  [
    "arrowTip",
    "hover-card__arrowTip"
  ],
  [
    "trigger",
    "hover-card__trigger"
  ],
  [
    "positioner",
    "hover-card__positioner"
  ],
  [
    "content",
    "hover-card__content"
  ]
];
var hoverCardSlotFns = /* @__PURE__ */ hoverCardSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, hoverCardDefaultVariants, getSlotCompoundVariant(hoverCardCompoundVariants, slotName))]);
var hoverCardFn = memo((props = {}) => {
  return Object.fromEntries(hoverCardSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]));
});
var hoverCardVariantKeys = [];
var getVariantProps20 = (variants) => ({ ...hoverCardDefaultVariants, ...compact(variants) });
var hoverCard = /* @__PURE__ */ Object.assign(hoverCardFn, {
  __recipe__: false,
  __name__: "hoverCard",
  raw: (props) => props,
  classNameMap: {},
  variantKeys: hoverCardVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, hoverCardVariantKeys);
  },
  getVariantProps: getVariantProps20
});

// styled-system/recipes/input-group.mjs
var inputGroupDefaultVariants = {
  size: "md"
};
var inputGroupCompoundVariants = [];
var inputGroupSlotNames = [
  [
    "root",
    "input-group__root"
  ],
  [
    "element",
    "input-group__element"
  ],
  [
    "root",
    "input-group__root"
  ],
  [
    "element",
    "input-group__element"
  ]
];
var inputGroupSlotFns = /* @__PURE__ */ inputGroupSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, inputGroupDefaultVariants, getSlotCompoundVariant(inputGroupCompoundVariants, slotName))]);
var inputGroupFn = memo((props = {}) => {
  return Object.fromEntries(inputGroupSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]));
});
var inputGroupVariantKeys = [
  "size"
];
var getVariantProps21 = (variants) => ({ ...inputGroupDefaultVariants, ...compact(variants) });
var inputGroup = /* @__PURE__ */ Object.assign(inputGroupFn, {
  __recipe__: false,
  __name__: "inputGroup",
  raw: (props) => props,
  classNameMap: {},
  variantKeys: inputGroupVariantKeys,
  variantMap: {
    size: [
      "xs",
      "sm",
      "md",
      "lg",
      "xl"
    ]
  },
  splitVariantProps(props) {
    return splitProps(props, inputGroupVariantKeys);
  },
  getVariantProps: getVariantProps21
});

// styled-system/recipes/menu.mjs
var menuDefaultVariants = {
  size: "md"
};
var menuCompoundVariants = [];
var menuSlotNames = [
  [
    "arrow",
    "menu__arrow"
  ],
  [
    "arrowTip",
    "menu__arrowTip"
  ],
  [
    "content",
    "menu__content"
  ],
  [
    "contextTrigger",
    "menu__contextTrigger"
  ],
  [
    "indicator",
    "menu__indicator"
  ],
  [
    "item",
    "menu__item"
  ],
  [
    "itemGroup",
    "menu__itemGroup"
  ],
  [
    "itemGroupLabel",
    "menu__itemGroupLabel"
  ],
  [
    "itemIndicator",
    "menu__itemIndicator"
  ],
  [
    "itemText",
    "menu__itemText"
  ],
  [
    "positioner",
    "menu__positioner"
  ],
  [
    "separator",
    "menu__separator"
  ],
  [
    "trigger",
    "menu__trigger"
  ],
  [
    "triggerItem",
    "menu__triggerItem"
  ],
  [
    "arrow",
    "menu__arrow"
  ],
  [
    "arrowTip",
    "menu__arrowTip"
  ],
  [
    "content",
    "menu__content"
  ],
  [
    "contextTrigger",
    "menu__contextTrigger"
  ],
  [
    "indicator",
    "menu__indicator"
  ],
  [
    "item",
    "menu__item"
  ],
  [
    "itemGroup",
    "menu__itemGroup"
  ],
  [
    "itemGroupLabel",
    "menu__itemGroupLabel"
  ],
  [
    "itemIndicator",
    "menu__itemIndicator"
  ],
  [
    "itemText",
    "menu__itemText"
  ],
  [
    "positioner",
    "menu__positioner"
  ],
  [
    "separator",
    "menu__separator"
  ],
  [
    "trigger",
    "menu__trigger"
  ],
  [
    "triggerItem",
    "menu__triggerItem"
  ],
  [
    "arrow",
    "menu__arrow"
  ],
  [
    "arrowTip",
    "menu__arrowTip"
  ],
  [
    "content",
    "menu__content"
  ],
  [
    "contextTrigger",
    "menu__contextTrigger"
  ],
  [
    "indicator",
    "menu__indicator"
  ],
  [
    "item",
    "menu__item"
  ],
  [
    "itemGroup",
    "menu__itemGroup"
  ],
  [
    "itemGroupLabel",
    "menu__itemGroupLabel"
  ],
  [
    "itemIndicator",
    "menu__itemIndicator"
  ],
  [
    "itemText",
    "menu__itemText"
  ],
  [
    "positioner",
    "menu__positioner"
  ],
  [
    "separator",
    "menu__separator"
  ],
  [
    "trigger",
    "menu__trigger"
  ],
  [
    "triggerItem",
    "menu__triggerItem"
  ]
];
var menuSlotFns = /* @__PURE__ */ menuSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, menuDefaultVariants, getSlotCompoundVariant(menuCompoundVariants, slotName))]);
var menuFn = memo((props = {}) => {
  return Object.fromEntries(menuSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]));
});
var menuVariantKeys = [
  "size"
];
var getVariantProps22 = (variants) => ({ ...menuDefaultVariants, ...compact(variants) });
var menu = /* @__PURE__ */ Object.assign(menuFn, {
  __recipe__: false,
  __name__: "menu",
  raw: (props) => props,
  classNameMap: {},
  variantKeys: menuVariantKeys,
  variantMap: {
    size: [
      "xs",
      "sm",
      "md",
      "lg",
      "xl"
    ]
  },
  splitVariantProps(props) {
    return splitProps(props, menuVariantKeys);
  },
  getVariantProps: getVariantProps22
});

// styled-system/recipes/number-input.mjs
var numberInputDefaultVariants = {
  size: "md",
  variant: "outline"
};
var numberInputCompoundVariants = [];
var numberInputSlotNames = [
  [
    "root",
    "number-input__root"
  ],
  [
    "label",
    "number-input__label"
  ],
  [
    "input",
    "number-input__input"
  ],
  [
    "control",
    "number-input__control"
  ],
  [
    "valueText",
    "number-input__valueText"
  ],
  [
    "incrementTrigger",
    "number-input__incrementTrigger"
  ],
  [
    "decrementTrigger",
    "number-input__decrementTrigger"
  ],
  [
    "scrubber",
    "number-input__scrubber"
  ],
  [
    "root",
    "number-input__root"
  ],
  [
    "label",
    "number-input__label"
  ],
  [
    "input",
    "number-input__input"
  ],
  [
    "control",
    "number-input__control"
  ],
  [
    "valueText",
    "number-input__valueText"
  ],
  [
    "incrementTrigger",
    "number-input__incrementTrigger"
  ],
  [
    "decrementTrigger",
    "number-input__decrementTrigger"
  ],
  [
    "scrubber",
    "number-input__scrubber"
  ],
  [
    "root",
    "number-input__root"
  ],
  [
    "label",
    "number-input__label"
  ],
  [
    "input",
    "number-input__input"
  ],
  [
    "control",
    "number-input__control"
  ],
  [
    "valueText",
    "number-input__valueText"
  ],
  [
    "incrementTrigger",
    "number-input__incrementTrigger"
  ],
  [
    "decrementTrigger",
    "number-input__decrementTrigger"
  ],
  [
    "scrubber",
    "number-input__scrubber"
  ]
];
var numberInputSlotFns = /* @__PURE__ */ numberInputSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, numberInputDefaultVariants, getSlotCompoundVariant(numberInputCompoundVariants, slotName))]);
var numberInputFn = memo((props = {}) => {
  return Object.fromEntries(numberInputSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]));
});
var numberInputVariantKeys = [
  "size",
  "variant"
];
var getVariantProps23 = (variants) => ({ ...numberInputDefaultVariants, ...compact(variants) });
var numberInput = /* @__PURE__ */ Object.assign(numberInputFn, {
  __recipe__: false,
  __name__: "numberInput",
  raw: (props) => props,
  classNameMap: {},
  variantKeys: numberInputVariantKeys,
  variantMap: {
    size: [
      "sm",
      "md",
      "lg",
      "xl"
    ],
    variant: [
      "outline",
      "surface"
    ]
  },
  splitVariantProps(props) {
    return splitProps(props, numberInputVariantKeys);
  },
  getVariantProps: getVariantProps23
});

// styled-system/recipes/pagination.mjs
var paginationDefaultVariants = {};
var paginationCompoundVariants = [];
var paginationSlotNames = [
  [
    "root",
    "pagination__root"
  ],
  [
    "item",
    "pagination__item"
  ],
  [
    "ellipsis",
    "pagination__ellipsis"
  ],
  [
    "firstTrigger",
    "pagination__firstTrigger"
  ],
  [
    "prevTrigger",
    "pagination__prevTrigger"
  ],
  [
    "nextTrigger",
    "pagination__nextTrigger"
  ],
  [
    "lastTrigger",
    "pagination__lastTrigger"
  ],
  [
    "root",
    "pagination__root"
  ],
  [
    "item",
    "pagination__item"
  ],
  [
    "ellipsis",
    "pagination__ellipsis"
  ],
  [
    "prevTrigger",
    "pagination__prevTrigger"
  ],
  [
    "nextTrigger",
    "pagination__nextTrigger"
  ],
  [
    "root",
    "pagination__root"
  ],
  [
    "item",
    "pagination__item"
  ],
  [
    "ellipsis",
    "pagination__ellipsis"
  ],
  [
    "firstTrigger",
    "pagination__firstTrigger"
  ],
  [
    "prevTrigger",
    "pagination__prevTrigger"
  ],
  [
    "nextTrigger",
    "pagination__nextTrigger"
  ],
  [
    "lastTrigger",
    "pagination__lastTrigger"
  ]
];
var paginationSlotFns = /* @__PURE__ */ paginationSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, paginationDefaultVariants, getSlotCompoundVariant(paginationCompoundVariants, slotName))]);
var paginationFn = memo((props = {}) => {
  return Object.fromEntries(paginationSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]));
});
var paginationVariantKeys = [];
var getVariantProps24 = (variants) => ({ ...paginationDefaultVariants, ...compact(variants) });
var pagination = /* @__PURE__ */ Object.assign(paginationFn, {
  __recipe__: false,
  __name__: "pagination",
  raw: (props) => props,
  classNameMap: {},
  variantKeys: paginationVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, paginationVariantKeys);
  },
  getVariantProps: getVariantProps24
});

// styled-system/recipes/pin-input.mjs
var pinInputDefaultVariants = {
  size: "md",
  variant: "outline"
};
var pinInputCompoundVariants = [];
var pinInputSlotNames = [
  [
    "root",
    "pin-input__root"
  ],
  [
    "label",
    "pin-input__label"
  ],
  [
    "input",
    "pin-input__input"
  ],
  [
    "control",
    "pin-input__control"
  ],
  [
    "root",
    "pin-input__root"
  ],
  [
    "label",
    "pin-input__label"
  ],
  [
    "input",
    "pin-input__input"
  ],
  [
    "control",
    "pin-input__control"
  ],
  [
    "root",
    "pin-input__root"
  ],
  [
    "label",
    "pin-input__label"
  ],
  [
    "input",
    "pin-input__input"
  ],
  [
    "control",
    "pin-input__control"
  ]
];
var pinInputSlotFns = /* @__PURE__ */ pinInputSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, pinInputDefaultVariants, getSlotCompoundVariant(pinInputCompoundVariants, slotName))]);
var pinInputFn = memo((props = {}) => {
  return Object.fromEntries(pinInputSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]));
});
var pinInputVariantKeys = [
  "size",
  "variant"
];
var getVariantProps25 = (variants) => ({ ...pinInputDefaultVariants, ...compact(variants) });
var pinInput = /* @__PURE__ */ Object.assign(pinInputFn, {
  __recipe__: false,
  __name__: "pinInput",
  raw: (props) => props,
  classNameMap: {},
  variantKeys: pinInputVariantKeys,
  variantMap: {
    size: [
      "xs",
      "sm",
      "md",
      "lg",
      "xl",
      "2xl"
    ],
    variant: [
      "outline",
      "subtle",
      "flushed"
    ]
  },
  splitVariantProps(props) {
    return splitProps(props, pinInputVariantKeys);
  },
  getVariantProps: getVariantProps25
});

// styled-system/recipes/popover.mjs
var popoverDefaultVariants = {};
var popoverCompoundVariants = [];
var popoverSlotNames = [
  [
    "arrow",
    "popover__arrow"
  ],
  [
    "arrowTip",
    "popover__arrowTip"
  ],
  [
    "anchor",
    "popover__anchor"
  ],
  [
    "trigger",
    "popover__trigger"
  ],
  [
    "indicator",
    "popover__indicator"
  ],
  [
    "positioner",
    "popover__positioner"
  ],
  [
    "content",
    "popover__content"
  ],
  [
    "title",
    "popover__title"
  ],
  [
    "description",
    "popover__description"
  ],
  [
    "closeTrigger",
    "popover__closeTrigger"
  ],
  [
    "header",
    "popover__header"
  ],
  [
    "body",
    "popover__body"
  ],
  [
    "footer",
    "popover__footer"
  ],
  [
    "arrow",
    "popover__arrow"
  ],
  [
    "arrowTip",
    "popover__arrowTip"
  ],
  [
    "anchor",
    "popover__anchor"
  ],
  [
    "trigger",
    "popover__trigger"
  ],
  [
    "indicator",
    "popover__indicator"
  ],
  [
    "positioner",
    "popover__positioner"
  ],
  [
    "content",
    "popover__content"
  ],
  [
    "title",
    "popover__title"
  ],
  [
    "description",
    "popover__description"
  ],
  [
    "closeTrigger",
    "popover__closeTrigger"
  ],
  [
    "arrow",
    "popover__arrow"
  ],
  [
    "arrowTip",
    "popover__arrowTip"
  ],
  [
    "anchor",
    "popover__anchor"
  ],
  [
    "trigger",
    "popover__trigger"
  ],
  [
    "indicator",
    "popover__indicator"
  ],
  [
    "positioner",
    "popover__positioner"
  ],
  [
    "content",
    "popover__content"
  ],
  [
    "title",
    "popover__title"
  ],
  [
    "description",
    "popover__description"
  ],
  [
    "closeTrigger",
    "popover__closeTrigger"
  ],
  [
    "header",
    "popover__header"
  ],
  [
    "body",
    "popover__body"
  ],
  [
    "footer",
    "popover__footer"
  ]
];
var popoverSlotFns = /* @__PURE__ */ popoverSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, popoverDefaultVariants, getSlotCompoundVariant(popoverCompoundVariants, slotName))]);
var popoverFn = memo((props = {}) => {
  return Object.fromEntries(popoverSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]));
});
var popoverVariantKeys = [];
var getVariantProps26 = (variants) => ({ ...popoverDefaultVariants, ...compact(variants) });
var popover = /* @__PURE__ */ Object.assign(popoverFn, {
  __recipe__: false,
  __name__: "popover",
  raw: (props) => props,
  classNameMap: {},
  variantKeys: popoverVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, popoverVariantKeys);
  },
  getVariantProps: getVariantProps26
});

// styled-system/recipes/progress.mjs
var progressDefaultVariants = {
  variant: "solid",
  size: "md",
  shape: "rounded"
};
var progressCompoundVariants = [];
var progressSlotNames = [
  [
    "root",
    "progress__root"
  ],
  [
    "label",
    "progress__label"
  ],
  [
    "track",
    "progress__track"
  ],
  [
    "range",
    "progress__range"
  ],
  [
    "valueText",
    "progress__valueText"
  ],
  [
    "view",
    "progress__view"
  ],
  [
    "circle",
    "progress__circle"
  ],
  [
    "circleTrack",
    "progress__circleTrack"
  ],
  [
    "circleRange",
    "progress__circleRange"
  ],
  [
    "root",
    "progress__root"
  ],
  [
    "label",
    "progress__label"
  ],
  [
    "track",
    "progress__track"
  ],
  [
    "range",
    "progress__range"
  ],
  [
    "valueText",
    "progress__valueText"
  ],
  [
    "view",
    "progress__view"
  ],
  [
    "circle",
    "progress__circle"
  ],
  [
    "circleTrack",
    "progress__circleTrack"
  ],
  [
    "circleRange",
    "progress__circleRange"
  ],
  [
    "root",
    "progress__root"
  ],
  [
    "label",
    "progress__label"
  ],
  [
    "track",
    "progress__track"
  ],
  [
    "range",
    "progress__range"
  ],
  [
    "valueText",
    "progress__valueText"
  ],
  [
    "view",
    "progress__view"
  ],
  [
    "circle",
    "progress__circle"
  ],
  [
    "circleTrack",
    "progress__circleTrack"
  ],
  [
    "circleRange",
    "progress__circleRange"
  ]
];
var progressSlotFns = /* @__PURE__ */ progressSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, progressDefaultVariants, getSlotCompoundVariant(progressCompoundVariants, slotName))]);
var progressFn = memo((props = {}) => {
  return Object.fromEntries(progressSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]));
});
var progressVariantKeys = [
  "variant",
  "shape",
  "striped",
  "animated",
  "size"
];
var getVariantProps27 = (variants) => ({ ...progressDefaultVariants, ...compact(variants) });
var progress = /* @__PURE__ */ Object.assign(progressFn, {
  __recipe__: false,
  __name__: "progress",
  raw: (props) => props,
  classNameMap: {},
  variantKeys: progressVariantKeys,
  variantMap: {
    variant: [
      "solid",
      "subtle"
    ],
    shape: [
      "square",
      "rounded",
      "full"
    ],
    striped: [
      "true"
    ],
    animated: [
      "true"
    ],
    size: [
      "xs",
      "sm",
      "md",
      "lg",
      "xl"
    ]
  },
  splitVariantProps(props) {
    return splitProps(props, progressVariantKeys);
  },
  getVariantProps: getVariantProps27
});

// styled-system/recipes/radio-card-group.mjs
var radioCardGroupDefaultVariants = {
  variant: "outline",
  size: "md"
};
var radioCardGroupCompoundVariants = [];
var radioCardGroupSlotNames = [
  [
    "root",
    "radio-card-group__root"
  ],
  [
    "label",
    "radio-card-group__label"
  ],
  [
    "item",
    "radio-card-group__item"
  ],
  [
    "itemText",
    "radio-card-group__itemText"
  ],
  [
    "itemControl",
    "radio-card-group__itemControl"
  ],
  [
    "indicator",
    "radio-card-group__indicator"
  ],
  [
    "root",
    "radio-card-group__root"
  ],
  [
    "label",
    "radio-card-group__label"
  ],
  [
    "item",
    "radio-card-group__item"
  ],
  [
    "itemText",
    "radio-card-group__itemText"
  ],
  [
    "itemControl",
    "radio-card-group__itemControl"
  ],
  [
    "indicator",
    "radio-card-group__indicator"
  ]
];
var radioCardGroupSlotFns = /* @__PURE__ */ radioCardGroupSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, radioCardGroupDefaultVariants, getSlotCompoundVariant(radioCardGroupCompoundVariants, slotName))]);
var radioCardGroupFn = memo((props = {}) => {
  return Object.fromEntries(radioCardGroupSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]));
});
var radioCardGroupVariantKeys = [
  "variant",
  "size"
];
var getVariantProps28 = (variants) => ({ ...radioCardGroupDefaultVariants, ...compact(variants) });
var radioCardGroup = /* @__PURE__ */ Object.assign(radioCardGroupFn, {
  __recipe__: false,
  __name__: "radioCardGroup",
  raw: (props) => props,
  classNameMap: {},
  variantKeys: radioCardGroupVariantKeys,
  variantMap: {
    variant: [
      "subtle",
      "outline",
      "surface",
      "solid"
    ],
    size: [
      "md"
    ]
  },
  splitVariantProps(props) {
    return splitProps(props, radioCardGroupVariantKeys);
  },
  getVariantProps: getVariantProps28
});

// styled-system/recipes/radio-group.mjs
var radioGroupDefaultVariants = {
  variant: "solid",
  size: "md"
};
var radioGroupCompoundVariants = [];
var radioGroupSlotNames = [
  [
    "root",
    "radio-group__root"
  ],
  [
    "label",
    "radio-group__label"
  ],
  [
    "item",
    "radio-group__item"
  ],
  [
    "itemText",
    "radio-group__itemText"
  ],
  [
    "itemControl",
    "radio-group__itemControl"
  ],
  [
    "indicator",
    "radio-group__indicator"
  ],
  [
    "root",
    "radio-group__root"
  ],
  [
    "label",
    "radio-group__label"
  ],
  [
    "item",
    "radio-group__item"
  ],
  [
    "itemText",
    "radio-group__itemText"
  ],
  [
    "itemControl",
    "radio-group__itemControl"
  ],
  [
    "indicator",
    "radio-group__indicator"
  ],
  [
    "root",
    "radio-group__root"
  ],
  [
    "label",
    "radio-group__label"
  ],
  [
    "item",
    "radio-group__item"
  ],
  [
    "itemText",
    "radio-group__itemText"
  ],
  [
    "itemControl",
    "radio-group__itemControl"
  ],
  [
    "indicator",
    "radio-group__indicator"
  ]
];
var radioGroupSlotFns = /* @__PURE__ */ radioGroupSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, radioGroupDefaultVariants, getSlotCompoundVariant(radioGroupCompoundVariants, slotName))]);
var radioGroupFn = memo((props = {}) => {
  return Object.fromEntries(radioGroupSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]));
});
var radioGroupVariantKeys = [
  "variant",
  "size"
];
var getVariantProps29 = (variants) => ({ ...radioGroupDefaultVariants, ...compact(variants) });
var radioGroup = /* @__PURE__ */ Object.assign(radioGroupFn, {
  __recipe__: false,
  __name__: "radioGroup",
  raw: (props) => props,
  classNameMap: {},
  variantKeys: radioGroupVariantKeys,
  variantMap: {
    variant: [
      "solid"
    ],
    size: [
      "sm",
      "md",
      "lg"
    ]
  },
  splitVariantProps(props) {
    return splitProps(props, radioGroupVariantKeys);
  },
  getVariantProps: getVariantProps29
});

// styled-system/recipes/rating-group.mjs
var ratingGroupDefaultVariants = {
  size: "md"
};
var ratingGroupCompoundVariants = [];
var ratingGroupSlotNames = [
  [
    "root",
    "rating-group__root"
  ],
  [
    "label",
    "rating-group__label"
  ],
  [
    "item",
    "rating-group__item"
  ],
  [
    "control",
    "rating-group__control"
  ],
  [
    "itemIndicator",
    "rating-group__itemIndicator"
  ],
  [
    "root",
    "rating-group__root"
  ],
  [
    "label",
    "rating-group__label"
  ],
  [
    "item",
    "rating-group__item"
  ],
  [
    "control",
    "rating-group__control"
  ],
  [
    "root",
    "rating-group__root"
  ],
  [
    "label",
    "rating-group__label"
  ],
  [
    "item",
    "rating-group__item"
  ],
  [
    "control",
    "rating-group__control"
  ],
  [
    "itemIndicator",
    "rating-group__itemIndicator"
  ]
];
var ratingGroupSlotFns = /* @__PURE__ */ ratingGroupSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, ratingGroupDefaultVariants, getSlotCompoundVariant(ratingGroupCompoundVariants, slotName))]);
var ratingGroupFn = memo((props = {}) => {
  return Object.fromEntries(ratingGroupSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]));
});
var ratingGroupVariantKeys = [
  "size"
];
var getVariantProps30 = (variants) => ({ ...ratingGroupDefaultVariants, ...compact(variants) });
var ratingGroup = /* @__PURE__ */ Object.assign(ratingGroupFn, {
  __recipe__: false,
  __name__: "ratingGroup",
  raw: (props) => props,
  classNameMap: {},
  variantKeys: ratingGroupVariantKeys,
  variantMap: {
    size: [
      "xs",
      "sm",
      "md",
      "lg",
      "xl"
    ]
  },
  splitVariantProps(props) {
    return splitProps(props, ratingGroupVariantKeys);
  },
  getVariantProps: getVariantProps30
});

// styled-system/recipes/scroll-area.mjs
var scrollAreaDefaultVariants = {
  size: "md",
  scrollbar: "auto"
};
var scrollAreaCompoundVariants = [];
var scrollAreaSlotNames = [
  [
    "root",
    "scroll-area__root"
  ],
  [
    "viewport",
    "scroll-area__viewport"
  ],
  [
    "content",
    "scroll-area__content"
  ],
  [
    "scrollbar",
    "scroll-area__scrollbar"
  ],
  [
    "thumb",
    "scroll-area__thumb"
  ],
  [
    "corner",
    "scroll-area__corner"
  ],
  [
    "root",
    "scroll-area__root"
  ],
  [
    "viewport",
    "scroll-area__viewport"
  ],
  [
    "content",
    "scroll-area__content"
  ],
  [
    "scrollbar",
    "scroll-area__scrollbar"
  ],
  [
    "thumb",
    "scroll-area__thumb"
  ],
  [
    "corner",
    "scroll-area__corner"
  ]
];
var scrollAreaSlotFns = /* @__PURE__ */ scrollAreaSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, scrollAreaDefaultVariants, getSlotCompoundVariant(scrollAreaCompoundVariants, slotName))]);
var scrollAreaFn = memo((props = {}) => {
  return Object.fromEntries(scrollAreaSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]));
});
var scrollAreaVariantKeys = [
  "scrollbar",
  "size"
];
var getVariantProps31 = (variants) => ({ ...scrollAreaDefaultVariants, ...compact(variants) });
var scrollArea = /* @__PURE__ */ Object.assign(scrollAreaFn, {
  __recipe__: false,
  __name__: "scrollArea",
  raw: (props) => props,
  classNameMap: {},
  variantKeys: scrollAreaVariantKeys,
  variantMap: {
    scrollbar: [
      "auto",
      "visible"
    ],
    size: [
      "xs",
      "sm",
      "md",
      "lg"
    ]
  },
  splitVariantProps(props) {
    return splitProps(props, scrollAreaVariantKeys);
  },
  getVariantProps: getVariantProps31
});

// styled-system/recipes/segment-group.mjs
var segmentGroupDefaultVariants = {
  size: "md"
};
var segmentGroupCompoundVariants = [];
var segmentGroupSlotNames = [
  [
    "root",
    "segment-group__root"
  ],
  [
    "label",
    "segment-group__label"
  ],
  [
    "item",
    "segment-group__item"
  ],
  [
    "itemText",
    "segment-group__itemText"
  ],
  [
    "itemControl",
    "segment-group__itemControl"
  ],
  [
    "indicator",
    "segment-group__indicator"
  ],
  [
    "root",
    "segment-group__root"
  ],
  [
    "label",
    "segment-group__label"
  ],
  [
    "item",
    "segment-group__item"
  ],
  [
    "itemText",
    "segment-group__itemText"
  ],
  [
    "itemControl",
    "segment-group__itemControl"
  ],
  [
    "indicator",
    "segment-group__indicator"
  ],
  [
    "root",
    "segment-group__root"
  ],
  [
    "label",
    "segment-group__label"
  ],
  [
    "item",
    "segment-group__item"
  ],
  [
    "itemText",
    "segment-group__itemText"
  ],
  [
    "itemControl",
    "segment-group__itemControl"
  ],
  [
    "indicator",
    "segment-group__indicator"
  ]
];
var segmentGroupSlotFns = /* @__PURE__ */ segmentGroupSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, segmentGroupDefaultVariants, getSlotCompoundVariant(segmentGroupCompoundVariants, slotName))]);
var segmentGroupFn = memo((props = {}) => {
  return Object.fromEntries(segmentGroupSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]));
});
var segmentGroupVariantKeys = [
  "size",
  "fitted"
];
var getVariantProps32 = (variants) => ({ ...segmentGroupDefaultVariants, ...compact(variants) });
var segmentGroup = /* @__PURE__ */ Object.assign(segmentGroupFn, {
  __recipe__: false,
  __name__: "segmentGroup",
  raw: (props) => props,
  classNameMap: {},
  variantKeys: segmentGroupVariantKeys,
  variantMap: {
    size: [
      "xs",
      "sm",
      "md",
      "lg",
      "xl"
    ],
    fitted: [
      "true"
    ]
  },
  splitVariantProps(props) {
    return splitProps(props, segmentGroupVariantKeys);
  },
  getVariantProps: getVariantProps32
});

// styled-system/recipes/select.mjs
var selectDefaultVariants = {
  size: "md",
  variant: "outline"
};
var selectCompoundVariants = [];
var selectSlotNames = [
  [
    "label",
    "select__label"
  ],
  [
    "positioner",
    "select__positioner"
  ],
  [
    "trigger",
    "select__trigger"
  ],
  [
    "indicator",
    "select__indicator"
  ],
  [
    "clearTrigger",
    "select__clearTrigger"
  ],
  [
    "item",
    "select__item"
  ],
  [
    "itemText",
    "select__itemText"
  ],
  [
    "itemIndicator",
    "select__itemIndicator"
  ],
  [
    "itemGroup",
    "select__itemGroup"
  ],
  [
    "itemGroupLabel",
    "select__itemGroupLabel"
  ],
  [
    "list",
    "select__list"
  ],
  [
    "content",
    "select__content"
  ],
  [
    "root",
    "select__root"
  ],
  [
    "control",
    "select__control"
  ],
  [
    "valueText",
    "select__valueText"
  ],
  [
    "indicatorGroup",
    "select__indicatorGroup"
  ],
  [
    "label",
    "select__label"
  ],
  [
    "positioner",
    "select__positioner"
  ],
  [
    "trigger",
    "select__trigger"
  ],
  [
    "indicator",
    "select__indicator"
  ],
  [
    "clearTrigger",
    "select__clearTrigger"
  ],
  [
    "item",
    "select__item"
  ],
  [
    "itemText",
    "select__itemText"
  ],
  [
    "itemIndicator",
    "select__itemIndicator"
  ],
  [
    "itemGroup",
    "select__itemGroup"
  ],
  [
    "itemGroupLabel",
    "select__itemGroupLabel"
  ],
  [
    "list",
    "select__list"
  ],
  [
    "content",
    "select__content"
  ],
  [
    "root",
    "select__root"
  ],
  [
    "control",
    "select__control"
  ],
  [
    "valueText",
    "select__valueText"
  ],
  [
    "label",
    "select__label"
  ],
  [
    "positioner",
    "select__positioner"
  ],
  [
    "trigger",
    "select__trigger"
  ],
  [
    "indicator",
    "select__indicator"
  ],
  [
    "clearTrigger",
    "select__clearTrigger"
  ],
  [
    "item",
    "select__item"
  ],
  [
    "itemText",
    "select__itemText"
  ],
  [
    "itemIndicator",
    "select__itemIndicator"
  ],
  [
    "itemGroup",
    "select__itemGroup"
  ],
  [
    "itemGroupLabel",
    "select__itemGroupLabel"
  ],
  [
    "list",
    "select__list"
  ],
  [
    "content",
    "select__content"
  ],
  [
    "root",
    "select__root"
  ],
  [
    "control",
    "select__control"
  ],
  [
    "valueText",
    "select__valueText"
  ],
  [
    "indicatorGroup",
    "select__indicatorGroup"
  ]
];
var selectSlotFns = /* @__PURE__ */ selectSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, selectDefaultVariants, getSlotCompoundVariant(selectCompoundVariants, slotName))]);
var selectFn = memo((props = {}) => {
  return Object.fromEntries(selectSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]));
});
var selectVariantKeys = [
  "variant",
  "size"
];
var getVariantProps33 = (variants) => ({ ...selectDefaultVariants, ...compact(variants) });
var select = /* @__PURE__ */ Object.assign(selectFn, {
  __recipe__: false,
  __name__: "select",
  raw: (props) => props,
  classNameMap: {},
  variantKeys: selectVariantKeys,
  variantMap: {
    variant: [
      "ghost",
      "outline",
      "surface"
    ],
    size: [
      "xs",
      "sm",
      "md",
      "lg",
      "xl"
    ]
  },
  splitVariantProps(props) {
    return splitProps(props, selectVariantKeys);
  },
  getVariantProps: getVariantProps33
});

// styled-system/recipes/slider.mjs
var sliderDefaultVariants = {
  size: "md",
  variant: "outline",
  orientation: "horizontal"
};
var sliderCompoundVariants = [];
var sliderSlotNames = [
  [
    "root",
    "slider__root"
  ],
  [
    "label",
    "slider__label"
  ],
  [
    "thumb",
    "slider__thumb"
  ],
  [
    "valueText",
    "slider__valueText"
  ],
  [
    "track",
    "slider__track"
  ],
  [
    "range",
    "slider__range"
  ],
  [
    "control",
    "slider__control"
  ],
  [
    "markerGroup",
    "slider__markerGroup"
  ],
  [
    "marker",
    "slider__marker"
  ],
  [
    "draggingIndicator",
    "slider__draggingIndicator"
  ],
  [
    "markerIndicator",
    "slider__markerIndicator"
  ],
  [
    "root",
    "slider__root"
  ],
  [
    "label",
    "slider__label"
  ],
  [
    "thumb",
    "slider__thumb"
  ],
  [
    "valueText",
    "slider__valueText"
  ],
  [
    "track",
    "slider__track"
  ],
  [
    "range",
    "slider__range"
  ],
  [
    "control",
    "slider__control"
  ],
  [
    "markerGroup",
    "slider__markerGroup"
  ],
  [
    "marker",
    "slider__marker"
  ],
  [
    "root",
    "slider__root"
  ],
  [
    "label",
    "slider__label"
  ],
  [
    "thumb",
    "slider__thumb"
  ],
  [
    "valueText",
    "slider__valueText"
  ],
  [
    "track",
    "slider__track"
  ],
  [
    "range",
    "slider__range"
  ],
  [
    "control",
    "slider__control"
  ],
  [
    "markerGroup",
    "slider__markerGroup"
  ],
  [
    "marker",
    "slider__marker"
  ],
  [
    "draggingIndicator",
    "slider__draggingIndicator"
  ],
  [
    "markerIndicator",
    "slider__markerIndicator"
  ]
];
var sliderSlotFns = /* @__PURE__ */ sliderSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, sliderDefaultVariants, getSlotCompoundVariant(sliderCompoundVariants, slotName))]);
var sliderFn = memo((props = {}) => {
  return Object.fromEntries(sliderSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]));
});
var sliderVariantKeys = [
  "size",
  "variant",
  "orientation"
];
var getVariantProps34 = (variants) => ({ ...sliderDefaultVariants, ...compact(variants) });
var slider = /* @__PURE__ */ Object.assign(sliderFn, {
  __recipe__: false,
  __name__: "slider",
  raw: (props) => props,
  classNameMap: {},
  variantKeys: sliderVariantKeys,
  variantMap: {
    size: [
      "sm",
      "md",
      "lg"
    ],
    variant: [
      "outline"
    ],
    orientation: [
      "vertical",
      "horizontal"
    ]
  },
  splitVariantProps(props) {
    return splitProps(props, sliderVariantKeys);
  },
  getVariantProps: getVariantProps34
});

// styled-system/recipes/splitter.mjs
var splitterDefaultVariants = {};
var splitterCompoundVariants = [];
var splitterSlotNames = [
  [
    "root",
    "splitter__root"
  ],
  [
    "panel",
    "splitter__panel"
  ],
  [
    "resizeTrigger",
    "splitter__resizeTrigger"
  ],
  [
    "resizeTriggerIndicator",
    "splitter__resizeTriggerIndicator"
  ],
  [
    "root",
    "splitter__root"
  ],
  [
    "panel",
    "splitter__panel"
  ],
  [
    "resizeTrigger",
    "splitter__resizeTrigger"
  ],
  [
    "root",
    "splitter__root"
  ],
  [
    "panel",
    "splitter__panel"
  ],
  [
    "resizeTrigger",
    "splitter__resizeTrigger"
  ],
  [
    "resizeTriggerIndicator",
    "splitter__resizeTriggerIndicator"
  ]
];
var splitterSlotFns = /* @__PURE__ */ splitterSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, splitterDefaultVariants, getSlotCompoundVariant(splitterCompoundVariants, slotName))]);
var splitterFn = memo((props = {}) => {
  return Object.fromEntries(splitterSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]));
});
var splitterVariantKeys = [];
var getVariantProps35 = (variants) => ({ ...splitterDefaultVariants, ...compact(variants) });
var splitter = /* @__PURE__ */ Object.assign(splitterFn, {
  __recipe__: false,
  __name__: "splitter",
  raw: (props) => props,
  classNameMap: {},
  variantKeys: splitterVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, splitterVariantKeys);
  },
  getVariantProps: getVariantProps35
});

// styled-system/recipes/table.mjs
var tableDefaultVariants = {
  size: "md",
  variant: "plain"
};
var tableCompoundVariants = [];
var tableSlotNames = [
  [
    "root",
    "table__root"
  ],
  [
    "body",
    "table__body"
  ],
  [
    "cell",
    "table__cell"
  ],
  [
    "foot",
    "table__foot"
  ],
  [
    "head",
    "table__head"
  ],
  [
    "header",
    "table__header"
  ],
  [
    "row",
    "table__row"
  ],
  [
    "caption",
    "table__caption"
  ],
  [
    "root",
    "table__root"
  ],
  [
    "body",
    "table__body"
  ],
  [
    "cell",
    "table__cell"
  ],
  [
    "footer",
    "table__footer"
  ],
  [
    "head",
    "table__head"
  ],
  [
    "header",
    "table__header"
  ],
  [
    "row",
    "table__row"
  ],
  [
    "caption",
    "table__caption"
  ],
  [
    "root",
    "table__root"
  ],
  [
    "body",
    "table__body"
  ],
  [
    "cell",
    "table__cell"
  ],
  [
    "foot",
    "table__foot"
  ],
  [
    "head",
    "table__head"
  ],
  [
    "header",
    "table__header"
  ],
  [
    "row",
    "table__row"
  ],
  [
    "caption",
    "table__caption"
  ]
];
var tableSlotFns = /* @__PURE__ */ tableSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, tableDefaultVariants, getSlotCompoundVariant(tableCompoundVariants, slotName))]);
var tableFn = memo((props = {}) => {
  return Object.fromEntries(tableSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]));
});
var tableVariantKeys = [
  "variant",
  "striped",
  "interactive",
  "columnBorder",
  "stickyHeader",
  "size"
];
var getVariantProps36 = (variants) => ({ ...tableDefaultVariants, ...compact(variants) });
var table = /* @__PURE__ */ Object.assign(tableFn, {
  __recipe__: false,
  __name__: "table",
  raw: (props) => props,
  classNameMap: {},
  variantKeys: tableVariantKeys,
  variantMap: {
    variant: [
      "outline",
      "surface",
      "plain"
    ],
    striped: [
      "true"
    ],
    interactive: [
      "true"
    ],
    columnBorder: [
      "true"
    ],
    stickyHeader: [
      "true"
    ],
    size: [
      "sm",
      "md"
    ]
  },
  splitVariantProps(props) {
    return splitProps(props, tableVariantKeys);
  },
  getVariantProps: getVariantProps36
});

// styled-system/recipes/tabs.mjs
var tabsDefaultVariants = {
  size: "md",
  variant: "line"
};
var tabsCompoundVariants = [
  {
    size: "sm",
    variant: "enclosed",
    css: {
      list: {
        height: "10"
      },
      trigger: {
        h: "8",
        minW: "8",
        textStyle: "sm",
        px: "3"
      },
      content: {
        p: "3.5"
      }
    }
  },
  {
    size: "md",
    variant: "enclosed",
    css: {
      list: {
        height: "11"
      },
      trigger: {
        h: "9",
        minW: "9",
        textStyle: "sm",
        px: "3.5"
      },
      content: {
        p: "4"
      }
    }
  },
  {
    size: "lg",
    variant: "enclosed",
    css: {
      list: {
        height: "12"
      },
      trigger: {
        h: "10",
        minW: "10",
        textStyle: "sm",
        px: "4"
      },
      content: {
        p: "4.5"
      }
    }
  },
  {
    size: "sm",
    variant: "outline",
    css: {
      trigger: {
        h: "9",
        minW: "9",
        textStyle: "sm",
        px: "3.5"
      },
      content: {
        p: "3.5"
      }
    }
  },
  {
    size: "md",
    variant: "outline",
    css: {
      trigger: {
        h: "10",
        minW: "10",
        textStyle: "sm",
        px: "4"
      },
      content: {
        p: "4"
      }
    }
  },
  {
    size: "lg",
    variant: "outline",
    css: {
      trigger: {
        h: "11",
        minW: "11",
        textStyle: "md",
        px: "4.5"
      },
      content: {
        p: "4.5"
      }
    }
  },
  {
    size: "sm",
    variant: "line",
    css: {
      trigger: {
        fontSize: "sm",
        h: "9",
        minW: "9",
        px: "2.5"
      },
      content: {
        pt: "3"
      }
    }
  },
  {
    size: "md",
    variant: "line",
    css: {
      trigger: {
        fontSize: "md",
        h: "10",
        minW: "10",
        px: "3"
      },
      content: {
        pt: "4"
      }
    }
  },
  {
    size: "lg",
    variant: "line",
    css: {
      trigger: {
        px: "3.5",
        h: "11",
        minW: "11",
        fontSize: "md"
      },
      content: {
        pt: "5"
      }
    }
  }
];
var tabsSlotNames = [
  [
    "root",
    "tabs__root"
  ],
  [
    "list",
    "tabs__list"
  ],
  [
    "trigger",
    "tabs__trigger"
  ],
  [
    "content",
    "tabs__content"
  ],
  [
    "indicator",
    "tabs__indicator"
  ],
  [
    "root",
    "tabs__root"
  ],
  [
    "list",
    "tabs__list"
  ],
  [
    "trigger",
    "tabs__trigger"
  ],
  [
    "content",
    "tabs__content"
  ],
  [
    "indicator",
    "tabs__indicator"
  ],
  [
    "root",
    "tabs__root"
  ],
  [
    "list",
    "tabs__list"
  ],
  [
    "trigger",
    "tabs__trigger"
  ],
  [
    "content",
    "tabs__content"
  ],
  [
    "indicator",
    "tabs__indicator"
  ]
];
var tabsSlotFns = /* @__PURE__ */ tabsSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, tabsDefaultVariants, getSlotCompoundVariant(tabsCompoundVariants, slotName))]);
var tabsFn = memo((props = {}) => {
  return Object.fromEntries(tabsSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]));
});
var tabsVariantKeys = [
  "size",
  "variant",
  "fitted"
];
var getVariantProps37 = (variants) => ({ ...tabsDefaultVariants, ...compact(variants) });
var tabs = /* @__PURE__ */ Object.assign(tabsFn, {
  __recipe__: false,
  __name__: "tabs",
  raw: (props) => props,
  classNameMap: {},
  variantKeys: tabsVariantKeys,
  variantMap: {
    size: [
      "xs",
      "sm",
      "md",
      "lg"
    ],
    variant: [
      "outline",
      "line",
      "subtle",
      "enclosed"
    ],
    fitted: [
      "true"
    ]
  },
  splitVariantProps(props) {
    return splitProps(props, tabsVariantKeys);
  },
  getVariantProps: getVariantProps37
});

// styled-system/recipes/tags-input.mjs
var tagsInputDefaultVariants = {
  size: "md",
  variant: "outline"
};
var tagsInputCompoundVariants = [];
var tagsInputSlotNames = [
  [
    "root",
    "tags-input__root"
  ],
  [
    "label",
    "tags-input__label"
  ],
  [
    "control",
    "tags-input__control"
  ],
  [
    "input",
    "tags-input__input"
  ],
  [
    "clearTrigger",
    "tags-input__clearTrigger"
  ],
  [
    "item",
    "tags-input__item"
  ],
  [
    "itemPreview",
    "tags-input__itemPreview"
  ],
  [
    "itemInput",
    "tags-input__itemInput"
  ],
  [
    "itemText",
    "tags-input__itemText"
  ],
  [
    "itemDeleteTrigger",
    "tags-input__itemDeleteTrigger"
  ],
  [
    "root",
    "tags-input__root"
  ],
  [
    "label",
    "tags-input__label"
  ],
  [
    "control",
    "tags-input__control"
  ],
  [
    "input",
    "tags-input__input"
  ],
  [
    "clearTrigger",
    "tags-input__clearTrigger"
  ],
  [
    "item",
    "tags-input__item"
  ],
  [
    "itemPreview",
    "tags-input__itemPreview"
  ],
  [
    "itemInput",
    "tags-input__itemInput"
  ],
  [
    "itemText",
    "tags-input__itemText"
  ],
  [
    "itemDeleteTrigger",
    "tags-input__itemDeleteTrigger"
  ],
  [
    "root",
    "tags-input__root"
  ],
  [
    "label",
    "tags-input__label"
  ],
  [
    "control",
    "tags-input__control"
  ],
  [
    "input",
    "tags-input__input"
  ],
  [
    "clearTrigger",
    "tags-input__clearTrigger"
  ],
  [
    "item",
    "tags-input__item"
  ],
  [
    "itemPreview",
    "tags-input__itemPreview"
  ],
  [
    "itemInput",
    "tags-input__itemInput"
  ],
  [
    "itemText",
    "tags-input__itemText"
  ],
  [
    "itemDeleteTrigger",
    "tags-input__itemDeleteTrigger"
  ]
];
var tagsInputSlotFns = /* @__PURE__ */ tagsInputSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, tagsInputDefaultVariants, getSlotCompoundVariant(tagsInputCompoundVariants, slotName))]);
var tagsInputFn = memo((props = {}) => {
  return Object.fromEntries(tagsInputSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]));
});
var tagsInputVariantKeys = [
  "variant",
  "size"
];
var getVariantProps38 = (variants) => ({ ...tagsInputDefaultVariants, ...compact(variants) });
var tagsInput = /* @__PURE__ */ Object.assign(tagsInputFn, {
  __recipe__: false,
  __name__: "tagsInput",
  raw: (props) => props,
  classNameMap: {},
  variantKeys: tagsInputVariantKeys,
  variantMap: {
    variant: [
      "outline",
      "subtle",
      "surface"
    ],
    size: [
      "xs",
      "sm",
      "md",
      "lg"
    ]
  },
  splitVariantProps(props) {
    return splitProps(props, tagsInputVariantKeys);
  },
  getVariantProps: getVariantProps38
});

// styled-system/recipes/toast.mjs
var toastDefaultVariants = {};
var toastCompoundVariants = [];
var toastSlotNames = [
  [
    "group",
    "toast__group"
  ],
  [
    "root",
    "toast__root"
  ],
  [
    "title",
    "toast__title"
  ],
  [
    "description",
    "toast__description"
  ],
  [
    "actionTrigger",
    "toast__actionTrigger"
  ],
  [
    "closeTrigger",
    "toast__closeTrigger"
  ],
  [
    "group",
    "toast__group"
  ],
  [
    "root",
    "toast__root"
  ],
  [
    "title",
    "toast__title"
  ],
  [
    "description",
    "toast__description"
  ],
  [
    "actionTrigger",
    "toast__actionTrigger"
  ],
  [
    "closeTrigger",
    "toast__closeTrigger"
  ],
  [
    "group",
    "toast__group"
  ],
  [
    "root",
    "toast__root"
  ],
  [
    "title",
    "toast__title"
  ],
  [
    "description",
    "toast__description"
  ],
  [
    "actionTrigger",
    "toast__actionTrigger"
  ],
  [
    "closeTrigger",
    "toast__closeTrigger"
  ]
];
var toastSlotFns = /* @__PURE__ */ toastSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, toastDefaultVariants, getSlotCompoundVariant(toastCompoundVariants, slotName))]);
var toastFn = memo((props = {}) => {
  return Object.fromEntries(toastSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]));
});
var toastVariantKeys = [];
var getVariantProps39 = (variants) => ({ ...toastDefaultVariants, ...compact(variants) });
var toast = /* @__PURE__ */ Object.assign(toastFn, {
  __recipe__: false,
  __name__: "toast",
  raw: (props) => props,
  classNameMap: {},
  variantKeys: toastVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, toastVariantKeys);
  },
  getVariantProps: getVariantProps39
});

// styled-system/recipes/toggle-group.mjs
var toggleGroupDefaultVariants = {
  size: "md",
  variant: "outline"
};
var toggleGroupCompoundVariants = [];
var toggleGroupSlotNames = [
  [
    "root",
    "toggle-group__root"
  ],
  [
    "item",
    "toggle-group__item"
  ],
  [
    "root",
    "toggle-group__root"
  ],
  [
    "item",
    "toggle-group__item"
  ],
  [
    "root",
    "toggle-group__root"
  ],
  [
    "item",
    "toggle-group__item"
  ]
];
var toggleGroupSlotFns = /* @__PURE__ */ toggleGroupSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, toggleGroupDefaultVariants, getSlotCompoundVariant(toggleGroupCompoundVariants, slotName))]);
var toggleGroupFn = memo((props = {}) => {
  return Object.fromEntries(toggleGroupSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]));
});
var toggleGroupVariantKeys = [
  "size",
  "variant"
];
var getVariantProps40 = (variants) => ({ ...toggleGroupDefaultVariants, ...compact(variants) });
var toggleGroup = /* @__PURE__ */ Object.assign(toggleGroupFn, {
  __recipe__: false,
  __name__: "toggleGroup",
  raw: (props) => props,
  classNameMap: {},
  variantKeys: toggleGroupVariantKeys,
  variantMap: {
    size: [
      "sm",
      "md",
      "lg"
    ],
    variant: [
      "ghost",
      "outline"
    ]
  },
  splitVariantProps(props) {
    return splitProps(props, toggleGroupVariantKeys);
  },
  getVariantProps: getVariantProps40
});

// styled-system/recipes/tooltip.mjs
var tooltipDefaultVariants = {};
var tooltipCompoundVariants = [];
var tooltipSlotNames = [
  [
    "trigger",
    "tooltip__trigger"
  ],
  [
    "arrow",
    "tooltip__arrow"
  ],
  [
    "arrowTip",
    "tooltip__arrowTip"
  ],
  [
    "positioner",
    "tooltip__positioner"
  ],
  [
    "content",
    "tooltip__content"
  ],
  [
    "trigger",
    "tooltip__trigger"
  ],
  [
    "arrow",
    "tooltip__arrow"
  ],
  [
    "arrowTip",
    "tooltip__arrowTip"
  ],
  [
    "positioner",
    "tooltip__positioner"
  ],
  [
    "content",
    "tooltip__content"
  ],
  [
    "trigger",
    "tooltip__trigger"
  ],
  [
    "arrow",
    "tooltip__arrow"
  ],
  [
    "arrowTip",
    "tooltip__arrowTip"
  ],
  [
    "positioner",
    "tooltip__positioner"
  ],
  [
    "content",
    "tooltip__content"
  ]
];
var tooltipSlotFns = /* @__PURE__ */ tooltipSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, tooltipDefaultVariants, getSlotCompoundVariant(tooltipCompoundVariants, slotName))]);
var tooltipFn = memo((props = {}) => {
  return Object.fromEntries(tooltipSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]));
});
var tooltipVariantKeys = [];
var getVariantProps41 = (variants) => ({ ...tooltipDefaultVariants, ...compact(variants) });
var tooltip = /* @__PURE__ */ Object.assign(tooltipFn, {
  __recipe__: false,
  __name__: "tooltip",
  raw: (props) => props,
  classNameMap: {},
  variantKeys: tooltipVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, tooltipVariantKeys);
  },
  getVariantProps: getVariantProps41
});

// src/components/ui/absolute-center.tsx
var AbsoluteCenter = styled(ark.div, absoluteCenter);
// src/components/ui/accordion.tsx
var exports_accordion = {};
__export(exports_accordion, {
  RootProvider: () => RootProvider,
  Root: () => Root,
  ItemTrigger: () => ItemTrigger,
  ItemIndicator: () => ItemIndicator,
  ItemContent: () => ItemContent,
  ItemBody: () => ItemBody,
  Item: () => Item,
  Context: () => AccordionContext
});
import { Accordion } from "@ark-ui/react/accordion";
import { ark as ark2 } from "@ark-ui/react/factory";

// node_modules/lucide-react/dist/esm/createLucideIcon.js
import { forwardRef as forwardRef6, createElement as createElement6 } from "react";

// node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();

// node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.js
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

// node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.js
var toCamelCase = (string) => string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase());

// node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.js
var toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};

// node_modules/lucide-react/dist/esm/Icon.js
import { forwardRef as forwardRef5, createElement as createElement5 } from "react";

// node_modules/lucide-react/dist/esm/defaultAttributes.js
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

// node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.js
var hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};

// node_modules/lucide-react/dist/esm/Icon.js
var Icon = forwardRef5(({
  color = "currentColor",
  size = 24,
  strokeWidth = 2,
  absoluteStrokeWidth,
  className = "",
  children,
  iconNode,
  ...rest
}, ref) => createElement5("svg", {
  ref,
  ...defaultAttributes,
  width: size,
  height: size,
  stroke: color,
  strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
  className: mergeClasses("lucide", className),
  ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
  ...rest
}, [
  ...iconNode.map(([tag, attrs]) => createElement5(tag, attrs)),
  ...Array.isArray(children) ? children : [children]
]));

// node_modules/lucide-react/dist/esm/createLucideIcon.js
var createLucideIcon = (iconName, iconNode) => {
  const Component = forwardRef6(({ className, ...props }, ref) => createElement6(Icon, {
    ref,
    iconNode,
    className: mergeClasses(`lucide-${toKebabCase(toPascalCase(iconName))}`, `lucide-${iconName}`, className),
    ...props
  }));
  Component.displayName = toPascalCase(iconName);
  return Component;
};

// node_modules/lucide-react/dist/esm/icons/check.js
var __iconNode = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
var Check = createLucideIcon("check", __iconNode);

// node_modules/lucide-react/dist/esm/icons/chevron-down.js
var __iconNode2 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
var ChevronDown = createLucideIcon("chevron-down", __iconNode2);

// node_modules/lucide-react/dist/esm/icons/chevron-right.js
var __iconNode3 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
var ChevronRight = createLucideIcon("chevron-right", __iconNode3);

// node_modules/lucide-react/dist/esm/icons/chevron-up.js
var __iconNode4 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
var ChevronUp = createLucideIcon("chevron-up", __iconNode4);

// node_modules/lucide-react/dist/esm/icons/chevrons-up-down.js
var __iconNode5 = [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
];
var ChevronsUpDown = createLucideIcon("chevrons-up-down", __iconNode5);

// node_modules/lucide-react/dist/esm/icons/circle-alert.js
var __iconNode6 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
];
var CircleAlert = createLucideIcon("circle-alert", __iconNode6);

// node_modules/lucide-react/dist/esm/icons/circle-check-big.js
var __iconNode7 = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
var CircleCheckBig = createLucideIcon("circle-check-big", __iconNode7);

// node_modules/lucide-react/dist/esm/icons/circle-x.js
var __iconNode8 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
];
var CircleX = createLucideIcon("circle-x", __iconNode8);

// node_modules/lucide-react/dist/esm/icons/copy.js
var __iconNode9 = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
];
var Copy = createLucideIcon("copy", __iconNode9);

// node_modules/lucide-react/dist/esm/icons/ellipsis.js
var __iconNode10 = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
];
var Ellipsis = createLucideIcon("ellipsis", __iconNode10);

// node_modules/lucide-react/dist/esm/icons/file.js
var __iconNode11 = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }]
];
var File = createLucideIcon("file", __iconNode11);

// node_modules/lucide-react/dist/esm/icons/info.js
var __iconNode12 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
var Info = createLucideIcon("info", __iconNode12);

// node_modules/lucide-react/dist/esm/icons/star.js
var __iconNode13 = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
var Star = createLucideIcon("star", __iconNode13);

// node_modules/lucide-react/dist/esm/icons/user.js
var __iconNode14 = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
var User = createLucideIcon("user", __iconNode14);

// node_modules/lucide-react/dist/esm/icons/x.js
var __iconNode15 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
var X = createLucideIcon("x", __iconNode15);
// src/components/ui/accordion.tsx
import { AccordionContext } from "@ark-ui/react/accordion";
import { jsx } from "react/jsx-runtime";
"use client";
var { withProvider, withContext } = createStyleContext(accordion);
var Root = withProvider(Accordion.Root, "root");
var RootProvider = withProvider(Accordion.RootProvider, "root");
var Item = withContext(Accordion.Item, "item");
var ItemContent = withContext(Accordion.ItemContent, "itemContent");
var ItemIndicator = withContext(Accordion.ItemIndicator, "itemIndicator", {
  defaultProps: { children: /* @__PURE__ */ jsx(ChevronDown, {}) }
});
var ItemTrigger = withContext(Accordion.ItemTrigger, "itemTrigger");
var ItemBody = withContext(ark2.div, "itemBody");
// src/components/ui/alert.tsx
var exports_alert = {};
__export(exports_alert, {
  Title: () => Title,
  Root: () => Root2,
  Indicator: () => Indicator,
  Description: () => Description,
  Content: () => Content
});
import { ark as ark3 } from "@ark-ui/react/factory";
import { forwardRef as forwardRef7 } from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
"use client";
var { withProvider: withProvider2, withContext: withContext2 } = createStyleContext(alert);
var Root2 = withProvider2(ark3.div, "root");
var Title = withContext2(ark3.h3, "title");
var Description = withContext2(ark3.div, "description");
var Content = withContext2(ark3.div, "content");
var StyledIndicator = withContext2(ark3.span, "indicator");
var Indicator = forwardRef7(function Indicator2(props, ref) {
  return /* @__PURE__ */ jsx2(StyledIndicator, {
    ref,
    ...props,
    children: /* @__PURE__ */ jsx2(Info, {})
  });
});
// src/components/ui/avatar.tsx
var exports_avatar = {};
__export(exports_avatar, {
  RootProvider: () => RootProvider2,
  Root: () => Root3,
  Image: () => Image,
  Fallback: () => Fallback,
  Context: () => AvatarContext
});
import { Avatar } from "@ark-ui/react/avatar";
import { forwardRef as forwardRef8 } from "react";
import { AvatarContext } from "@ark-ui/react/avatar";
import { jsx as jsx3 } from "react/jsx-runtime";
"use client";
var { withProvider: withProvider3, withContext: withContext3 } = createStyleContext(avatar);
var Root3 = withProvider3(Avatar.Root, "root");
var RootProvider2 = withProvider3(Avatar.RootProvider, "root");
var Image = withContext3(Avatar.Image, "image", {
  defaultProps: {
    draggable: "false",
    referrerPolicy: "no-referrer"
  }
});
var StyledFallback = withContext3(Avatar.Fallback, "fallback");
var Fallback = forwardRef8(function Fallback2(props, ref) {
  const { name, children, asChild, ...rest } = props;
  const fallbackContent = children || asChild ? children : name ? getInitials(name) : /* @__PURE__ */ jsx3(User, {});
  return /* @__PURE__ */ jsx3(StyledFallback, {
    ref,
    ...rest,
    children: fallbackContent
  });
});
var getInitials = (name) => {
  const names = name.trim().split(" ");
  const firstName = names[0] || "";
  const lastName = names.length > 1 ? names[names.length - 1] : "";
  return firstName && lastName ? `${firstName[0]}${lastName[0]}` : firstName[0];
};
// src/components/ui/badge.tsx
import { ark as ark4 } from "@ark-ui/react/factory";
var Badge = styled(ark4.div, badge);
// src/components/ui/breadcrumb.tsx
var exports_breadcrumb = {};
__export(exports_breadcrumb, {
  Separator: () => Separator,
  Root: () => Root4,
  List: () => List,
  Link: () => Link,
  Item: () => Item2,
  Ellipsis: () => Ellipsis2
});
import { ark as ark5 } from "@ark-ui/react/factory";
import { jsx as jsx4 } from "react/jsx-runtime";
"use client";
var { withProvider: withProvider4, withContext: withContext4 } = createStyleContext(breadcrumb);
var Root4 = withProvider4(ark5.nav, "root", { defaultProps: { "aria-label": "breadcrumb" } });
var List = withContext4(ark5.ol, "list");
var Item2 = withContext4(ark5.li, "item");
var Link = withContext4(ark5.a, "link");
var Ellipsis2 = withContext4(ark5.li, "ellipsis", {
  defaultProps: {
    role: "presentation",
    "aria-hidden": true,
    children: "..."
  }
});
var Separator = withContext4(ark5.li, "separator", {
  defaultProps: {
    "aria-hidden": true,
    children: /* @__PURE__ */ jsx4(ChevronRight, {})
  }
});
// src/components/ui/button.tsx
import { ark as ark8 } from "@ark-ui/react/factory";
import { createContext as createContext2, mergeProps as mergeProps2 } from "@ark-ui/react/utils";
import { forwardRef as forwardRef10, useMemo as useMemo2 } from "react";

// src/components/ui/group.tsx
import { ark as ark6 } from "@ark-ui/react";
var Group = styled(ark6.div, group);

// src/components/ui/loader.tsx
import { forwardRef as forwardRef9 } from "react";

// src/components/ui/span.tsx
var Span = styled("span");

// src/components/ui/spinner.tsx
import { ark as ark7 } from "@ark-ui/react/factory";
var Spinner = styled(ark7.span, spinner);

// src/components/ui/loader.tsx
import { jsx as jsx5, jsxs } from "react/jsx-runtime";
"use client";
var Loader = forwardRef9(function Loader2(props, ref) {
  const {
    spinner: spinner2 = /* @__PURE__ */ jsx5(Spinner, {
      size: "inherit",
      borderWidth: "0.125em",
      color: "inherit"
    }),
    spinnerPlacement = "start",
    children,
    text: text2,
    visible = true,
    ...rest
  } = props;
  if (!visible)
    return children;
  if (text2) {
    return /* @__PURE__ */ jsxs(Span, {
      ref,
      display: "contents",
      ...rest,
      children: [
        spinnerPlacement === "start" && spinner2,
        text2,
        spinnerPlacement === "end" && spinner2
      ]
    });
  }
  if (spinner2) {
    return /* @__PURE__ */ jsxs(Span, {
      ref,
      display: "contents",
      ...rest,
      children: [
        /* @__PURE__ */ jsx5(AbsoluteCenter, {
          display: "inline-flex",
          children: spinner2
        }),
        /* @__PURE__ */ jsx5(Span, {
          visibility: "hidden",
          display: "contents",
          children
        })
      ]
    });
  }
  return /* @__PURE__ */ jsx5(Span, {
    ref,
    display: "contents",
    ...rest,
    children
  });
});

// src/components/ui/button.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
"use client";
var BaseButton = styled(ark8.button, button);
var Button = forwardRef10(function Button2(props, ref) {
  const propsContext = useButtonPropsContext();
  const buttonProps = useMemo2(() => mergeProps2(propsContext, props), [propsContext, props]);
  const { loading, loadingText, children, spinner: spinner2, spinnerPlacement, ...rest } = buttonProps;
  return /* @__PURE__ */ jsx6(BaseButton, {
    type: "button",
    ref,
    ...rest,
    "data-loading": loading ? "" : undefined,
    disabled: loading || rest.disabled,
    children: !props.asChild && loading ? /* @__PURE__ */ jsx6(Loader, {
      spinner: spinner2,
      text: loadingText,
      spinnerPlacement,
      children
    }) : children
  });
});
var ButtonGroup = forwardRef10(function ButtonGroup2(props, ref) {
  const [variantProps, otherProps] = useMemo2(() => button.splitVariantProps(props), [props]);
  return /* @__PURE__ */ jsx6(ButtonPropsProvider, {
    value: variantProps,
    children: /* @__PURE__ */ jsx6(Group, {
      ref,
      ...otherProps
    })
  });
});
var [ButtonPropsProvider, useButtonPropsContext] = createContext2({
  name: "ButtonPropsContext",
  hookName: "useButtonPropsContext",
  providerName: "<PropsProvider />",
  strict: false
});
// src/components/ui/card.tsx
var exports_card = {};
__export(exports_card, {
  Title: () => Title2,
  Root: () => Root5,
  Header: () => Header,
  Footer: () => Footer,
  Description: () => Description2,
  Body: () => Body
});
import { ark as ark9 } from "@ark-ui/react/factory";
"use client";
var { withProvider: withProvider5, withContext: withContext5 } = createStyleContext(card);
var Root5 = withProvider5(ark9.div, "root");
var Header = withContext5(ark9.div, "header");
var Body = withContext5(ark9.div, "body");
var Footer = withContext5(ark9.h3, "footer");
var Title2 = withContext5(ark9.h3, "title");
var Description2 = withContext5(ark9.div, "description");
// src/components/ui/carousel.tsx
var exports_carousel = {};
__export(exports_carousel, {
  RootProvider: () => RootProvider3,
  Root: () => Root6,
  PrevTrigger: () => PrevTrigger,
  NextTrigger: () => NextTrigger,
  ItemGroup: () => ItemGroup,
  Item: () => Item3,
  IndicatorGroup: () => IndicatorGroup,
  Indicator: () => Indicator3,
  Control: () => Control,
  Context: () => CarouselContext,
  AutoplayTrigger: () => AutoplayTrigger
});
import { Carousel, useCarouselContext } from "@ark-ui/react/carousel";
import { forwardRef as forwardRef11 } from "react";
import { CarouselContext } from "@ark-ui/react/carousel";
import { jsx as jsx7 } from "react/jsx-runtime";
"use client";
var { withProvider: withProvider6, withContext: withContext6 } = createStyleContext(carousel);
var Root6 = withProvider6(Carousel.Root, "root", {
  forwardProps: ["page"],
  defaultProps: { spacing: "16px" }
});
var RootProvider3 = withProvider6(Carousel.RootProvider, "root");
var AutoplayTrigger = withContext6(Carousel.AutoplayTrigger, "autoplayTrigger");
var Control = withContext6(Carousel.Control, "control");
var Indicator3 = withContext6(Carousel.Indicator, "indicator");
var Item3 = withContext6(Carousel.Item, "item");
var ItemGroup = withContext6(Carousel.ItemGroup, "itemGroup");
var NextTrigger = withContext6(Carousel.NextTrigger, "nextTrigger");
var PrevTrigger = withContext6(Carousel.PrevTrigger, "prevTrigger");
var StyledIndicatorGroup = withContext6(Carousel.IndicatorGroup, "indicatorGroup");
var IndicatorGroup = forwardRef11((props, ref) => {
  const carousel2 = useCarouselContext();
  return /* @__PURE__ */ jsx7(StyledIndicatorGroup, {
    ...props,
    ref,
    children: carousel2.pageSnapPoints.map((_, index) => /* @__PURE__ */ jsx7(Indicator3, {
      index
    }, index))
  });
});
// src/components/ui/checkbox.tsx
var exports_checkbox = {};
__export(exports_checkbox, {
  RootProvider: () => RootProvider4,
  Root: () => Root7,
  Label: () => Label,
  Indicator: () => Indicator4,
  HiddenInput: () => HiddenInput,
  GroupProvider: () => CheckboxGroupProvider,
  Group: () => Group2,
  Control: () => Control2
});
import { Checkbox, useCheckboxContext } from "@ark-ui/react/checkbox";
import { forwardRef as forwardRef12 } from "react";
import {
  CheckboxGroupProvider
} from "@ark-ui/react/checkbox";
import { jsx as jsx8, jsxs as jsxs2 } from "react/jsx-runtime";
"use client";
var { withProvider: withProvider7, withContext: withContext7 } = createStyleContext(checkbox);
var Root7 = withProvider7(Checkbox.Root, "root");
var RootProvider4 = withProvider7(Checkbox.RootProvider, "root");
var Control2 = withContext7(Checkbox.Control, "control");
var Group2 = withProvider7(Checkbox.Group, "group");
var Label = withContext7(Checkbox.Label, "label");
var HiddenInput = Checkbox.HiddenInput;
var Indicator4 = forwardRef12(function Indicator5(props, ref) {
  const { indeterminate, checked } = useCheckboxContext();
  return /* @__PURE__ */ jsx8(Checkbox.Indicator, {
    indeterminate,
    asChild: true,
    children: /* @__PURE__ */ jsxs2(styled.svg, {
      ref,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "3px",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsx8("title", {
          children: "Checkmark"
        }),
        indeterminate ? /* @__PURE__ */ jsx8("path", {
          d: "M5 12h14"
        }) : checked ? /* @__PURE__ */ jsx8("path", {
          d: "M20 6 9 17l-5-5"
        }) : null
      ]
    })
  });
});
// src/components/ui/clipboard.tsx
var exports_clipboard = {};
__export(exports_clipboard, {
  Trigger: () => Trigger,
  RootProvider: () => RootProvider5,
  Root: () => Root8,
  Label: () => Label2,
  Input: () => Input,
  Indicator: () => Indicator6,
  CopyText: () => CopyText,
  Control: () => Control3,
  Context: () => ClipboardContext
});
import { Clipboard } from "@ark-ui/react/clipboard";
import { forwardRef as forwardRef13 } from "react";
import { ClipboardContext } from "@ark-ui/react/clipboard";
import { jsx as jsx9 } from "react/jsx-runtime";
"use client";
var { withProvider: withProvider8, withContext: withContext8 } = createStyleContext(clipboard);
var Root8 = withProvider8(Clipboard.Root, "root");
var RootProvider5 = withProvider8(Clipboard.RootProvider, "root");
var Control3 = withContext8(Clipboard.Control, "control");
var Input = withContext8(Clipboard.Input, "input");
var Label2 = withContext8(Clipboard.Label, "label");
var Trigger = withContext8(Clipboard.Trigger, "trigger");
var StyledIndicator2 = withContext8(Clipboard.Indicator, "indicator");
var Indicator6 = forwardRef13(function Indicator7(props, ref) {
  return /* @__PURE__ */ jsx9(StyledIndicator2, {
    ref,
    copied: /* @__PURE__ */ jsx9(Check, {}),
    ...props,
    children: /* @__PURE__ */ jsx9(Copy, {})
  });
});
var CopyText = forwardRef13(function CopyText2(props, ref) {
  return /* @__PURE__ */ jsx9(StyledIndicator2, {
    ref,
    copied: "Copied",
    ...props,
    children: "Copy"
  });
});
// src/components/ui/close-button.tsx
import { forwardRef as forwardRef15 } from "react";

// src/components/ui/icon-button.tsx
import { forwardRef as forwardRef14 } from "react";
import { jsx as jsx10 } from "react/jsx-runtime";
var IconButton = forwardRef14(function IconButton2(props, ref) {
  return /* @__PURE__ */ jsx10(Button, {
    px: "0",
    py: "0",
    ref,
    ...props
  });
});

// src/components/ui/close-button.tsx
import { jsx as jsx11 } from "react/jsx-runtime";
var CloseButton = forwardRef15(function CloseButton2(props, ref) {
  return /* @__PURE__ */ jsx11(IconButton, {
    variant: "plain",
    colorPalette: "gray",
    "aria-label": "Close",
    ref,
    ...props,
    children: props.children ?? /* @__PURE__ */ jsx11(X, {})
  });
});
// src/components/ui/code.tsx
import { ark as ark10 } from "@ark-ui/react/factory";
var Code = styled(ark10.code, code);
// src/components/ui/collapsible.tsx
var exports_collapsible = {};
__export(exports_collapsible, {
  Trigger: () => Trigger2,
  RootProvider: () => RootProvider6,
  Root: () => Root9,
  Indicator: () => Indicator8,
  Context: () => CollapsibleContext,
  Content: () => Content2
});
import { Collapsible } from "@ark-ui/react/collapsible";
import { CollapsibleContext } from "@ark-ui/react/collapsible";
"use client";
var { withProvider: withProvider9, withContext: withContext9 } = createStyleContext(collapsible);
var Root9 = withProvider9(Collapsible.Root, "root");
var RootProvider6 = withProvider9(Collapsible.RootProvider, "root");
var Content2 = withContext9(Collapsible.Content, "content");
var Indicator8 = withContext9(Collapsible.Indicator, "indicator");
var Trigger2 = withContext9(Collapsible.Trigger, "trigger");
// src/components/ui/color-picker.tsx
var exports_color_picker = {};
__export(exports_color_picker, {
  View: () => View,
  ValueText: () => ValueText,
  ValueSwatch: () => ValueSwatch,
  Trigger: () => Trigger3,
  TransparencyGrid: () => TransparencyGrid,
  SwatchTrigger: () => SwatchTrigger,
  SwatchIndicator: () => SwatchIndicator,
  SwatchGroup: () => SwatchGroup,
  Swatch: () => Swatch,
  RootProvider: () => RootProvider7,
  Root: () => Root10,
  Positioner: () => Positioner,
  Label: () => Label3,
  HiddenInput: () => HiddenInput2,
  FormatTrigger: () => FormatTrigger,
  FormatSelect: () => FormatSelect,
  EyeDropperTrigger: () => EyeDropperTrigger,
  Control: () => Control4,
  Context: () => ColorPickerContext,
  Content: () => Content3,
  ChannelSliderValueText: () => ChannelSliderValueText,
  ChannelSliderTrack: () => ChannelSliderTrack,
  ChannelSliderThumb: () => ChannelSliderThumb,
  ChannelSliderLabel: () => ChannelSliderLabel,
  ChannelSlider: () => ChannelSlider,
  ChannelInput: () => ChannelInput,
  AreaThumb: () => AreaThumb,
  AreaBackground: () => AreaBackground,
  Area: () => Area
});
import { ColorPicker } from "@ark-ui/react/color-picker";
import { ColorPickerContext } from "@ark-ui/react/color-picker";
"use client";
var { withProvider: withProvider10, withContext: withContext10 } = createStyleContext(colorPicker);
var Root10 = withProvider10(ColorPicker.Root, "root");
var RootProvider7 = withProvider10(ColorPicker.RootProvider, "root");
var Area = withContext10(ColorPicker.Area, "area");
var AreaBackground = withContext10(ColorPicker.AreaBackground, "areaBackground");
var AreaThumb = withContext10(ColorPicker.AreaThumb, "areaThumb");
var ChannelInput = withContext10(ColorPicker.ChannelInput, "channelInput");
var ChannelSlider = withContext10(ColorPicker.ChannelSlider, "channelSlider");
var ChannelSliderLabel = withContext10(ColorPicker.ChannelSliderLabel, "channelSliderLabel");
var ChannelSliderThumb = withContext10(ColorPicker.ChannelSliderThumb, "channelSliderThumb");
var ChannelSliderTrack = withContext10(ColorPicker.ChannelSliderTrack, "channelSliderTrack");
var ChannelSliderValueText = withContext10(ColorPicker.ChannelSliderValueText, "channelSliderValueText");
var Content3 = withContext10(ColorPicker.Content, "content");
var Control4 = withContext10(ColorPicker.Control, "control");
var EyeDropperTrigger = withContext10(ColorPicker.EyeDropperTrigger, "eyeDropperTrigger");
var FormatSelect = withContext10(ColorPicker.FormatSelect, "formatSelect");
var FormatTrigger = withContext10(ColorPicker.FormatTrigger, "formatTrigger");
var HiddenInput2 = ColorPicker.HiddenInput;
var Label3 = withContext10(ColorPicker.Label, "label");
var Positioner = withContext10(ColorPicker.Positioner, "positioner");
var Swatch = withContext10(ColorPicker.Swatch, "swatch");
var SwatchGroup = withContext10(ColorPicker.SwatchGroup, "swatchGroup");
var SwatchIndicator = withContext10(ColorPicker.SwatchIndicator, "swatchIndicator");
var SwatchTrigger = withContext10(ColorPicker.SwatchTrigger, "swatchTrigger");
var TransparencyGrid = withContext10(ColorPicker.TransparencyGrid, "transparencyGrid");
var Trigger3 = withContext10(ColorPicker.Trigger, "trigger");
var ValueSwatch = ColorPicker.ValueSwatch;
var ValueText = withContext10(ColorPicker.ValueText, "valueText");
var View = withContext10(ColorPicker.View, "view");
// src/components/ui/combobox.tsx
var exports_combobox = {};
__export(exports_combobox, {
  Trigger: () => Trigger4,
  RootProvider: () => RootProvider8,
  Root: () => Root11,
  Positioner: () => Positioner2,
  List: () => List2,
  Label: () => Label4,
  ItemText: () => ItemText,
  ItemIndicator: () => ItemIndicator2,
  ItemGroupLabel: () => ItemGroupLabel,
  ItemGroup: () => ItemGroup2,
  Item: () => Item4,
  Input: () => Input2,
  IndicatorGroup: () => IndicatorGroup2,
  Empty: () => Empty,
  Control: () => Control5,
  Context: () => ComboboxContext,
  Content: () => Content4,
  ClearTrigger: () => ClearTrigger
});
import { Combobox, useComboboxItemContext } from "@ark-ui/react/combobox";
import { ark as ark11 } from "@ark-ui/react/factory";
import { forwardRef as forwardRef16 } from "react";
import { ComboboxContext } from "@ark-ui/react/combobox";
import { jsx as jsx12 } from "react/jsx-runtime";
"use client";
var { withProvider: withProvider11, withContext: withContext11 } = createStyleContext(combobox);
var Root11 = withProvider11(Combobox.Root, "root", {
  defaultProps: { positioning: { sameWidth: false } }
});
var RootProvider8 = withProvider11(Combobox.RootProvider, "root");
var ClearTrigger = withContext11(Combobox.ClearTrigger, "clearTrigger", {
  defaultProps: { children: /* @__PURE__ */ jsx12(X, {}) }
});
var Content4 = withContext11(Combobox.Content, "content");
var Control5 = withContext11(Combobox.Control, "control");
var Empty = withContext11(Combobox.Empty, "empty");
var IndicatorGroup2 = withContext11(ark11.div, "indicatorGroup");
var Input2 = withContext11(Combobox.Input, "input");
var Item4 = withContext11(Combobox.Item, "item");
var ItemGroup2 = withContext11(Combobox.ItemGroup, "itemGroup");
var ItemGroupLabel = withContext11(Combobox.ItemGroupLabel, "itemGroupLabel");
var ItemText = withContext11(Combobox.ItemText, "itemText");
var Label4 = withContext11(Combobox.Label, "label");
var List2 = withContext11(Combobox.List, "list");
var Positioner2 = withContext11(Combobox.Positioner, "positioner");
var Trigger4 = withContext11(Combobox.Trigger, "trigger", {
  defaultProps: { children: /* @__PURE__ */ jsx12(ChevronsUpDown, {}) }
});
var StyledItemIndicator = withContext11(Combobox.ItemIndicator, "itemIndicator");
var ItemIndicator2 = forwardRef16(function ItemIndicator3(props, ref) {
  const item = useComboboxItemContext();
  return item.selected ? /* @__PURE__ */ jsx12(StyledItemIndicator, {
    ref,
    ...props,
    children: /* @__PURE__ */ jsx12(Check, {})
  }) : /* @__PURE__ */ jsx12("svg", {
    "aria-hidden": "true",
    focusable: "false"
  });
});
// src/components/ui/date-picker.tsx
var exports_date_picker = {};
__export(exports_date_picker, {
  YearSelect: () => YearSelect,
  ViewTrigger: () => ViewTrigger,
  ViewControl: () => ViewControl,
  View: () => View2,
  Trigger: () => Trigger5,
  TableRow: () => TableRow,
  TableHeader: () => TableHeader,
  TableHead: () => TableHead,
  TableCellTrigger: () => TableCellTrigger,
  TableCell: () => TableCell,
  TableBody: () => TableBody,
  Table: () => Table,
  RootProvider: () => RootProvider9,
  Root: () => Root12,
  RangeText: () => RangeText,
  PrevTrigger: () => PrevTrigger2,
  PresetTrigger: () => PresetTrigger,
  Positioner: () => Positioner3,
  NextTrigger: () => NextTrigger2,
  MonthSelect: () => MonthSelect,
  Label: () => Label5,
  Input: () => Input3,
  Control: () => Control6,
  Context: () => DatePickerContext,
  Content: () => Content5,
  ClearTrigger: () => ClearTrigger2
});
import { DatePicker } from "@ark-ui/react/date-picker";
import { DatePickerContext } from "@ark-ui/react/date-picker";
"use client";
var { withProvider: withProvider12, withContext: withContext12 } = createStyleContext(datePicker);
var Root12 = withProvider12(DatePicker.Root, "root");
var RootProvider9 = withProvider12(DatePicker.RootProvider, "root");
var ClearTrigger2 = withContext12(DatePicker.ClearTrigger, "clearTrigger");
var Content5 = withContext12(DatePicker.Content, "content");
var Control6 = withContext12(DatePicker.Control, "control");
var Input3 = withContext12(DatePicker.Input, "input");
var Label5 = withContext12(DatePicker.Label, "label");
var MonthSelect = withContext12(DatePicker.MonthSelect, "monthSelect");
var NextTrigger2 = withContext12(DatePicker.NextTrigger, "nextTrigger");
var Positioner3 = withContext12(DatePicker.Positioner, "positioner");
var PresetTrigger = withContext12(DatePicker.PresetTrigger, "presetTrigger");
var PrevTrigger2 = withContext12(DatePicker.PrevTrigger, "prevTrigger");
var RangeText = withContext12(DatePicker.RangeText, "rangeText");
var Table = withContext12(DatePicker.Table, "table");
var TableBody = withContext12(DatePicker.TableBody, "tableBody");
var TableCell = withContext12(DatePicker.TableCell, "tableCell");
var TableCellTrigger = withContext12(DatePicker.TableCellTrigger, "tableCellTrigger");
var TableHead = withContext12(DatePicker.TableHead, "tableHead");
var TableHeader = withContext12(DatePicker.TableHeader, "tableHeader");
var TableRow = withContext12(DatePicker.TableRow, "tableRow");
var Trigger5 = withContext12(DatePicker.Trigger, "trigger");
var View2 = withContext12(DatePicker.View, "view");
var ViewControl = withContext12(DatePicker.ViewControl, "viewControl");
var ViewTrigger = withContext12(DatePicker.ViewTrigger, "viewTrigger");
var YearSelect = withContext12(DatePicker.YearSelect, "yearSelect");
// src/components/ui/dialog.tsx
var exports_dialog = {};
__export(exports_dialog, {
  Trigger: () => Trigger6,
  Title: () => Title3,
  RootProvider: () => RootProvider10,
  Root: () => Root13,
  Positioner: () => Positioner4,
  Header: () => Header2,
  Footer: () => Footer2,
  Description: () => Description3,
  Context: () => DialogContext,
  Content: () => Content6,
  CloseTrigger: () => CloseTrigger,
  Body: () => Body2,
  Backdrop: () => Backdrop,
  ActionTrigger: () => ActionTrigger
});
import { Dialog, useDialogContext } from "@ark-ui/react/dialog";
import { ark as ark12 } from "@ark-ui/react/factory";
import { forwardRef as forwardRef17 } from "react";
import { DialogContext } from "@ark-ui/react/dialog";
import { jsx as jsx13 } from "react/jsx-runtime";
"use client";
var { withRootProvider, withContext: withContext13 } = createStyleContext(dialog);
var Root13 = withRootProvider(Dialog.Root, {
  defaultProps: { unmountOnExit: true, lazyMount: true }
});
var RootProvider10 = withRootProvider(Dialog.RootProvider, {
  defaultProps: { unmountOnExit: true, lazyMount: true }
});
var Backdrop = withContext13(Dialog.Backdrop, "backdrop");
var CloseTrigger = withContext13(Dialog.CloseTrigger, "closeTrigger");
var Content6 = withContext13(Dialog.Content, "content");
var Description3 = withContext13(Dialog.Description, "description");
var Positioner4 = withContext13(Dialog.Positioner, "positioner");
var Title3 = withContext13(Dialog.Title, "title");
var Trigger6 = withContext13(Dialog.Trigger, "trigger");
var Body2 = withContext13(ark12.div, "body");
var Header2 = withContext13(ark12.div, "header");
var Footer2 = withContext13(ark12.div, "footer");
var StyledButton = styled(ark12.button);
var ActionTrigger = forwardRef17(function ActionTrigger2(props, ref) {
  const dialog2 = useDialogContext();
  return /* @__PURE__ */ jsx13(StyledButton, {
    ...props,
    ref,
    onClick: () => dialog2.setOpen(false)
  });
});
// src/components/ui/display-value.tsx
import { jsx as jsx14, jsxs as jsxs3, Fragment } from "react/jsx-runtime";
"use client";
var DisplayValue = (props) => {
  const { value, formatValue } = props;
  const formattedValue = isNotEmpty(value) ? formatValue?.(value) ?? String(value) : null;
  if (formattedValue) {
    return formattedValue;
  }
  return /* @__PURE__ */ jsxs3(Fragment, {
    children: [
      /* @__PURE__ */ jsx14(Span, {
        color: "fg.subtle",
        "aria-hidden": true,
        children: "—"
      }),
      /* @__PURE__ */ jsx14(VisuallyHidden, {
        children: "No value available"
      })
    ]
  });
};
var isString = (value) => typeof value === "string";
var isNotEmpty = (value) => {
  if (value == null)
    return false;
  if (isString(value) || Array.isArray(value))
    return value.length > 0;
  return true;
};
// src/components/ui/drawer.tsx
var exports_drawer = {};
__export(exports_drawer, {
  Trigger: () => Trigger7,
  Title: () => Title4,
  RootProvider: () => RootProvider11,
  Root: () => Root14,
  Positioner: () => Positioner5,
  Header: () => Header3,
  Footer: () => Footer3,
  Description: () => Description4,
  Context: () => DialogContext2,
  Content: () => Content7,
  CloseTrigger: () => CloseTrigger2,
  Body: () => Body3,
  Backdrop: () => Backdrop2
});
import { Dialog as Dialog2 } from "@ark-ui/react/dialog";
import { ark as ark13 } from "@ark-ui/react/factory";
import { DialogContext as DialogContext2 } from "@ark-ui/react/dialog";
"use client";
var { withRootProvider: withRootProvider2, withContext: withContext14 } = createStyleContext(drawer);
var Root14 = withRootProvider2(Dialog2.Root, {
  defaultProps: { unmountOnExit: true, lazyMount: true }
});
var RootProvider11 = withRootProvider2(Dialog2.Root, {
  defaultProps: { unmountOnExit: true, lazyMount: true }
});
var Backdrop2 = withContext14(Dialog2.Backdrop, "backdrop");
var Positioner5 = withContext14(Dialog2.Positioner, "positioner");
var CloseTrigger2 = withContext14(Dialog2.CloseTrigger, "closeTrigger");
var Content7 = withContext14(Dialog2.Content, "content");
var Description4 = withContext14(Dialog2.Description, "description");
var Title4 = withContext14(Dialog2.Title, "title");
var Trigger7 = withContext14(Dialog2.Trigger, "trigger");
var Body3 = withContext14(ark13.div, "body");
var Header3 = withContext14(ark13.div, "header");
var Footer3 = withContext14(ark13.div, "footer");
// src/components/ui/editable.tsx
var exports_editable = {};
__export(exports_editable, {
  SubmitTrigger: () => SubmitTrigger,
  RootProvider: () => RootProvider12,
  Root: () => Root15,
  Preview: () => Preview,
  Label: () => Label6,
  Input: () => Input4,
  EditTrigger: () => EditTrigger,
  Control: () => Control7,
  Context: () => EditableContext,
  CancelTrigger: () => CancelTrigger,
  Area: () => Area2
});
import { Editable } from "@ark-ui/react/editable";
import { EditableContext } from "@ark-ui/react/editable";
"use client";
var { withProvider: withProvider13, withContext: withContext15 } = createStyleContext(editable);
var Root15 = withProvider13(Editable.Root, "root");
var RootProvider12 = withProvider13(Editable.RootProvider, "root");
var Area2 = withContext15(Editable.Area, "area");
var CancelTrigger = withContext15(Editable.CancelTrigger, "cancelTrigger");
var Control7 = withContext15(Editable.Control, "control");
var EditTrigger = withContext15(Editable.EditTrigger, "editTrigger");
var Input4 = withContext15(Editable.Input, "input");
var Label6 = withContext15(Editable.Label, "label");
var Preview = withContext15(Editable.Preview, "preview");
var SubmitTrigger = withContext15(Editable.SubmitTrigger, "submitTrigger");
// src/components/ui/field.tsx
var exports_field = {};
__export(exports_field, {
  RootProvider: () => RootProvider13,
  Root: () => Root16,
  RequiredIndicator: () => RequiredIndicator,
  Label: () => Label7,
  HelperText: () => HelperText,
  ErrorText: () => ErrorText,
  Context: () => FieldContext
});
import { Field } from "@ark-ui/react/field";
import { FieldContext } from "@ark-ui/react/field";
"use client";
var { withProvider: withProvider14, withContext: withContext16 } = createStyleContext(field);
var Root16 = withProvider14(Field.Root, "root");
var RootProvider13 = withProvider14(Field.RootProvider, "root");
var ErrorText = withContext16(Field.ErrorText, "errorText");
var HelperText = withContext16(Field.HelperText, "helperText");
var Label7 = withContext16(Field.Label, "label");
var RequiredIndicator = withContext16(Field.RequiredIndicator, "requiredIndicator");
// src/components/ui/fieldset.tsx
var exports_fieldset = {};
__export(exports_fieldset, {
  RootProvider: () => RootProvider14,
  Root: () => Root17,
  Legend: () => Legend,
  HelperText: () => HelperText2,
  ErrorText: () => ErrorText2,
  Control: () => Control8,
  Context: () => FieldsetContext,
  Content: () => Content8
});
import { ark as ark14 } from "@ark-ui/react/factory";
import { Fieldset } from "@ark-ui/react/fieldset";
import { FieldsetContext } from "@ark-ui/react/fieldset";
"use client";
var { withProvider: withProvider15, withContext: withContext17 } = createStyleContext(fieldset);
var Root17 = withProvider15(Fieldset.Root, "root");
var RootProvider14 = withProvider15(Fieldset.RootProvider, "root");
var Legend = withContext17(Fieldset.Legend, "legend");
var HelperText2 = withContext17(Fieldset.HelperText, "helperText");
var ErrorText2 = withContext17(Fieldset.ErrorText, "errorText");
var Content8 = withContext17(ark14.div, "content");
var Control8 = withContext17(ark14.div, "control");
// src/components/ui/file-upload.tsx
var exports_file_upload = {};
__export(exports_file_upload, {
  Trigger: () => Trigger8,
  RootProvider: () => RootProvider15,
  Root: () => Root18,
  List: () => List3,
  Label: () => Label8,
  Items: () => Items,
  ItemSizeText: () => ItemSizeText,
  ItemPreviewImage: () => ItemPreviewImage,
  ItemPreview: () => ItemPreview,
  ItemName: () => ItemName,
  ItemGroup: () => ItemGroup3,
  ItemDeleteTrigger: () => ItemDeleteTrigger,
  Item: () => Item5,
  HiddenInput: () => HiddenInput3,
  FileText: () => FileText,
  Dropzone: () => Dropzone,
  Context: () => FileUploadContext,
  ClearTrigger: () => ClearTrigger3
});
import { FileUpload, useFileUploadContext } from "@ark-ui/react/file-upload";
import { forwardRef as forwardRef18, useMemo as useMemo3 } from "react";
import { FileUploadContext } from "@ark-ui/react/file-upload";
import { jsx as jsx15, jsxs as jsxs4 } from "react/jsx-runtime";
"use client";
var { withProvider: withProvider16, withContext: withContext18 } = createStyleContext(fileUpload);
var Root18 = withProvider16(FileUpload.Root, "root");
var RootProvider15 = withProvider16(FileUpload.RootProvider, "root");
var ClearTrigger3 = withContext18(FileUpload.ClearTrigger, "clearTrigger");
var Dropzone = withContext18(FileUpload.Dropzone, "dropzone");
var HiddenInput3 = FileUpload.HiddenInput;
var Item5 = withContext18(FileUpload.Item, "item");
var ItemDeleteTrigger = withContext18(FileUpload.ItemDeleteTrigger, "itemDeleteTrigger", {
  defaultProps: { children: /* @__PURE__ */ jsx15(X, {}) }
});
var ItemGroup3 = withContext18(FileUpload.ItemGroup, "itemGroup");
var ItemName = withContext18(FileUpload.ItemName, "itemName");
var ItemPreview = withContext18(FileUpload.ItemPreview, "itemPreview", {
  defaultProps: {
    children: /* @__PURE__ */ jsx15(File, {})
  }
});
var ItemPreviewImage = withContext18(FileUpload.ItemPreviewImage, "itemPreviewImage");
var ItemSizeText = withContext18(FileUpload.ItemSizeText, "itemSizeText");
var Label8 = withContext18(FileUpload.Label, "label");
var Trigger8 = withContext18(FileUpload.Trigger, "trigger");
var Items = (props) => {
  const { showSize, clearable, files, ...rest } = props;
  const fileUpload2 = useFileUploadContext();
  const acceptedFiles = files ?? fileUpload2.acceptedFiles;
  return acceptedFiles.map((file) => /* @__PURE__ */ jsxs4(Item5, {
    file,
    ...rest,
    children: [
      /* @__PURE__ */ jsx15(ItemPreview, {}),
      /* @__PURE__ */ jsxs4(Stack, {
        gap: "0.5",
        flex: "1",
        children: [
          /* @__PURE__ */ jsx15(ItemName, {}),
          showSize && /* @__PURE__ */ jsx15(ItemSizeText, {})
        ]
      }),
      clearable && /* @__PURE__ */ jsx15(ItemDeleteTrigger, {})
    ]
  }, file.name));
};
var List3 = forwardRef18(function FileUploadList(props, ref) {
  const { showSize, clearable, files, ...rest } = props;
  return /* @__PURE__ */ jsx15(ItemGroup3, {
    ref,
    ...rest,
    children: /* @__PURE__ */ jsx15(Items, {
      showSize,
      clearable,
      files
    })
  });
});
var FileText = forwardRef18(function FileUploadFileText(props, ref) {
  const { fallback = "Select file(s)", ...rest } = props;
  const fileUpload2 = useFileUploadContext();
  const acceptedFiles = fileUpload2.acceptedFiles;
  const fileText = useMemo3(() => {
    if (acceptedFiles.length === 1) {
      return acceptedFiles[0].name;
    }
    if (acceptedFiles.length > 1) {
      return `${acceptedFiles.length} files`;
    }
    return fallback;
  }, [acceptedFiles, fallback]);
  return /* @__PURE__ */ jsx15(Span, {
    ref,
    "data-placeholder": fileText === fallback ? "" : undefined,
    "data-scope": "file-upload",
    "data-part": "file-text",
    ...rest,
    children: fileText
  });
});
// src/components/ui/heading.tsx
var Heading = styled("h2", heading);
// src/components/ui/hover-card.tsx
var exports_hover_card = {};
__export(exports_hover_card, {
  Trigger: () => Trigger9,
  RootProvider: () => RootProvider16,
  Root: () => Root19,
  Positioner: () => Positioner6,
  Context: () => HoverCardContext,
  Content: () => Content9,
  ArrowTip: () => ArrowTip,
  Arrow: () => Arrow
});
import { HoverCard } from "@ark-ui/react/hover-card";
import { HoverCardContext } from "@ark-ui/react/hover-card";
"use client";
var { withRootProvider: withRootProvider3, withContext: withContext19 } = createStyleContext(hoverCard);
var Root19 = withRootProvider3(HoverCard.Root);
var RootProvider16 = withRootProvider3(HoverCard.RootProvider);
var Arrow = withContext19(HoverCard.Arrow, "arrow");
var ArrowTip = withContext19(HoverCard.ArrowTip, "arrowTip");
var Content9 = withContext19(HoverCard.Content, "content");
var Positioner6 = withContext19(HoverCard.Positioner, "positioner");
var Trigger9 = withContext19(HoverCard.Trigger, "trigger");
// src/components/ui/icon.tsx
import { ark as ark15 } from "@ark-ui/react/factory";
var Icon2 = styled(ark15.svg, icon, {
  defaultProps: { asChild: true }
});
// src/components/ui/image.tsx
import { forwardRef as forwardRef19 } from "react";
import { jsx as jsx16 } from "react/jsx-runtime";
var StyledImage = styled("img");
var Image2 = forwardRef19(function Image3(props, ref) {
  const { align, fit = "cover", ...rest } = props;
  return /* @__PURE__ */ jsx16(StyledImage, {
    ref,
    objectFit: fit,
    objectPosition: align,
    ...rest
  });
});
// src/components/ui/input.tsx
import { Field as Field2 } from "@ark-ui/react/field";
var Input5 = styled(Field2.Input, input);
// src/components/ui/input-addon.tsx
import { ark as ark16 } from "@ark-ui/react/factory";
var InputAddon = styled(ark16.div, inputAddon);
// src/components/ui/input-group.tsx
import { ark as ark17 } from "@ark-ui/react/factory";
import { forwardRef as forwardRef20 } from "react";
import { jsx as jsx17, jsxs as jsxs5 } from "react/jsx-runtime";
"use client";
var { withProvider: withProvider17, withContext: withContext20 } = createStyleContext(inputGroup);
var Root20 = withProvider17(ark17.div, "root");
var Element = withContext20(ark17.div, "element");
var InputGroup = forwardRef20(function InputGroup2(props, ref) {
  const { startElement, endElement, children, ...rest } = props;
  return /* @__PURE__ */ jsxs5(Root20, {
    ref,
    ...rest,
    children: [
      startElement && /* @__PURE__ */ jsx17(Element, {
        insetInlineStart: "0",
        top: "0",
        children: startElement
      }),
      children,
      endElement && /* @__PURE__ */ jsx17(Element, {
        insetInlineEnd: "0",
        top: "0",
        children: endElement
      })
    ]
  });
});
// src/components/ui/kbd.tsx
import { ark as ark18 } from "@ark-ui/react/factory";
var Kbd = styled(ark18.kbd, kbd);
// src/components/ui/label.tsx
import { ark as ark19 } from "@ark-ui/react/factory";
var Label9 = styled(ark19.label, {
  base: { fontWeight: "medium", fontSize: "sm", color: "fg.default" }
});
// src/components/ui/link.tsx
import { ark as ark20 } from "@ark-ui/react/factory";
var Link2 = styled(ark20.a, link);
// src/components/ui/menu.tsx
var exports_menu = {};
__export(exports_menu, {
  TriggerItem: () => TriggerItem,
  Trigger: () => Trigger10,
  Separator: () => Separator2,
  RootProvider: () => RootProvider17,
  Root: () => Root21,
  RadioItemGroup: () => RadioItemGroup,
  RadioItem: () => RadioItem,
  Positioner: () => Positioner7,
  ItemText: () => ItemText2,
  ItemIndicator: () => ItemIndicator4,
  ItemGroupLabel: () => ItemGroupLabel2,
  ItemGroup: () => ItemGroup4,
  Item: () => Item6,
  Indicator: () => Indicator9,
  ContextTrigger: () => ContextTrigger,
  Context: () => MenuContext,
  Content: () => Content10,
  CheckboxItem: () => CheckboxItem,
  ArrowTip: () => ArrowTip2,
  Arrow: () => Arrow2
});
import { Menu, useMenuItemContext } from "@ark-ui/react/menu";
import { forwardRef as forwardRef21 } from "react";
import {
  MenuContext
} from "@ark-ui/react/menu";
import { jsx as jsx18 } from "react/jsx-runtime";
"use client";
var { withRootProvider: withRootProvider4, withContext: withContext21 } = createStyleContext(menu);
var Root21 = withRootProvider4(Menu.Root, {
  defaultProps: { unmountOnExit: true, lazyMount: true }
});
var RootProvider17 = withRootProvider4(Menu.Root, {
  defaultProps: { unmountOnExit: true, lazyMount: true }
});
var Arrow2 = withContext21(Menu.Arrow, "arrow");
var ArrowTip2 = withContext21(Menu.ArrowTip, "arrowTip");
var CheckboxItem = withContext21(Menu.CheckboxItem, "item");
var Content10 = withContext21(Menu.Content, "content");
var ContextTrigger = withContext21(Menu.ContextTrigger, "contextTrigger");
var Indicator9 = withContext21(Menu.Indicator, "indicator", {
  defaultProps: { children: /* @__PURE__ */ jsx18(ChevronDown, {}) }
});
var Item6 = withContext21(Menu.Item, "item");
var ItemGroup4 = withContext21(Menu.ItemGroup, "itemGroup");
var ItemGroupLabel2 = withContext21(Menu.ItemGroupLabel, "itemGroupLabel");
var ItemText2 = withContext21(Menu.ItemText, "itemText");
var Positioner7 = withContext21(Menu.Positioner, "positioner");
var RadioItem = withContext21(Menu.RadioItem, "item");
var RadioItemGroup = withContext21(Menu.RadioItemGroup, "itemGroup");
var Separator2 = withContext21(Menu.Separator, "separator");
var Trigger10 = withContext21(Menu.Trigger, "trigger");
var TriggerItem = withContext21(Menu.TriggerItem, "item");
var StyledItemIndicator2 = withContext21(Menu.ItemIndicator, "itemIndicator");
var ItemIndicator4 = forwardRef21(function ItemIndicator5(props, ref) {
  const item = useMenuItemContext();
  return item.checked ? /* @__PURE__ */ jsx18(StyledItemIndicator2, {
    ref,
    ...props,
    children: /* @__PURE__ */ jsx18(Check, {})
  }) : /* @__PURE__ */ jsx18("svg", {
    "aria-hidden": "true",
    focusable: "false"
  });
});
// src/components/ui/number-input.tsx
var exports_number_input = {};
__export(exports_number_input, {
  ValueText: () => ValueText2,
  Scrubber: () => Scrubber,
  RootProvider: () => RootProvider18,
  Root: () => Root22,
  Label: () => Label10,
  Input: () => Input6,
  IncrementTrigger: () => IncrementTrigger,
  DecrementTrigger: () => DecrementTrigger,
  Control: () => Control9,
  Context: () => NumberInputContext
});
import { NumberInput } from "@ark-ui/react/number-input";
import { NumberInputContext } from "@ark-ui/react/number-input";
import { jsx as jsx19, jsxs as jsxs6, Fragment as Fragment2 } from "react/jsx-runtime";
"use client";
var { withProvider: withProvider18, withContext: withContext22 } = createStyleContext(numberInput);
var Root22 = withProvider18(NumberInput.Root, "root");
var RootProvider18 = withProvider18(NumberInput.RootProvider, "root");
var DecrementTrigger = withContext22(NumberInput.DecrementTrigger, "decrementTrigger", {
  defaultProps: { children: /* @__PURE__ */ jsx19(ChevronDown, {}) }
});
var IncrementTrigger = withContext22(NumberInput.IncrementTrigger, "incrementTrigger", {
  defaultProps: { children: /* @__PURE__ */ jsx19(ChevronUp, {}) }
});
var Input6 = withContext22(NumberInput.Input, "input");
var Label10 = withContext22(NumberInput.Label, "label");
var Scrubber = withContext22(NumberInput.Scrubber, "scrubber");
var ValueText2 = withContext22(NumberInput.ValueText, "valueText");
var Control9 = withContext22(NumberInput.Control, "control", {
  defaultProps: {
    children: /* @__PURE__ */ jsxs6(Fragment2, {
      children: [
        /* @__PURE__ */ jsx19(IncrementTrigger, {}),
        /* @__PURE__ */ jsx19(DecrementTrigger, {})
      ]
    })
  }
});
// src/components/ui/pagination.tsx
var exports_pagination = {};
__export(exports_pagination, {
  RootProvider: () => RootProvider19,
  Root: () => Root23,
  PrevTrigger: () => PrevTrigger3,
  NextTrigger: () => NextTrigger3,
  Items: () => Items2,
  Item: () => Item7,
  Ellipsis: () => Ellipsis3,
  Context: () => PaginationContext
});
import { Pagination, usePaginationContext } from "@ark-ui/react/pagination";
import { PaginationContext } from "@ark-ui/react/pagination";
import { jsx as jsx20 } from "react/jsx-runtime";
"use client";
var { withProvider: withProvider19, withContext: withContext23 } = createStyleContext(pagination);
var Root23 = withProvider19(Pagination.Root, "root");
var RootProvider19 = withProvider19(Pagination.RootProvider, "root");
var Item7 = withContext23(Pagination.Item, "item");
var Ellipsis3 = withContext23(Pagination.Ellipsis, "ellipsis");
var PrevTrigger3 = withContext23(Pagination.PrevTrigger, "prevTrigger");
var NextTrigger3 = withContext23(Pagination.NextTrigger, "nextTrigger");
var Items2 = (props) => {
  const ctx = usePaginationContext();
  const { render, ellipsis, ...rest } = props;
  return ctx.pages.map((page, index) => {
    if (page.type === "ellipsis") {
      return /* @__PURE__ */ jsx20(Ellipsis3, {
        asChild: true,
        index,
        ...rest,
        children: ellipsis || /* @__PURE__ */ jsx20(IconButton, {
          as: "span",
          colorPalette: "gray",
          children: /* @__PURE__ */ jsx20(Ellipsis, {})
        })
      }, index);
    }
    return /* @__PURE__ */ jsx20(Item7, {
      asChild: true,
      type: "page",
      value: page.value,
      ...rest,
      children: render({ ...page, selected: ctx.page === page.value })
    }, index);
  });
};
// src/components/ui/pin-input.tsx
var exports_pin_input = {};
__export(exports_pin_input, {
  RootProvider: () => RootProvider20,
  Root: () => Root24,
  Label: () => Label11,
  Input: () => Input7,
  HiddenInput: () => HiddenInput4,
  Control: () => Control10,
  Context: () => PinInputContext
});
import { PinInput } from "@ark-ui/react/pin-input";
import { PinInputContext } from "@ark-ui/react/pin-input";
"use client";
var { withProvider: withProvider20, withContext: withContext24 } = createStyleContext(pinInput);
var Root24 = withProvider20(PinInput.Root, "root", {
  forwardProps: ["mask"]
});
var RootProvider20 = withProvider20(PinInput.RootProvider, "root");
var Control10 = withContext24(PinInput.Control, "control");
var HiddenInput4 = PinInput.HiddenInput;
var Input7 = withContext24(PinInput.Input, "input");
var Label11 = withContext24(PinInput.Label, "label");
// src/components/ui/popover.tsx
var exports_popover = {};
__export(exports_popover, {
  Trigger: () => Trigger11,
  Title: () => Title5,
  RootProvider: () => RootProvider21,
  Root: () => Root25,
  Positioner: () => Positioner8,
  Indicator: () => Indicator10,
  Header: () => Header4,
  Footer: () => Footer4,
  Description: () => Description5,
  Context: () => PopoverContext,
  Content: () => Content11,
  CloseTrigger: () => CloseTrigger3,
  Body: () => Body4,
  ArrowTip: () => ArrowTip3,
  Arrow: () => Arrow3,
  Anchor: () => Anchor
});
import { ark as ark21 } from "@ark-ui/react/factory";
import { Popover } from "@ark-ui/react/popover";
import { PopoverContext } from "@ark-ui/react/popover";
import { jsx as jsx21 } from "react/jsx-runtime";
"use client";
var { withRootProvider: withRootProvider5, withContext: withContext25 } = createStyleContext(popover);
var Root25 = withRootProvider5(Popover.Root, {
  defaultProps: { unmountOnExit: true, lazyMount: true }
});
var RootProvider21 = withRootProvider5(Popover.Root, {
  defaultProps: { unmountOnExit: true, lazyMount: true }
});
var Anchor = withContext25(Popover.Anchor, "anchor");
var ArrowTip3 = withContext25(Popover.ArrowTip, "arrowTip");
var Arrow3 = withContext25(Popover.Arrow, "arrow", {
  defaultProps: { children: /* @__PURE__ */ jsx21(ArrowTip3, {}) }
});
var CloseTrigger3 = withContext25(Popover.CloseTrigger, "closeTrigger");
var Content11 = withContext25(Popover.Content, "content");
var Description5 = withContext25(Popover.Description, "description");
var Indicator10 = withContext25(Popover.Indicator, "indicator");
var Positioner8 = withContext25(Popover.Positioner, "positioner");
var Title5 = withContext25(Popover.Title, "title");
var Trigger11 = withContext25(Popover.Trigger, "trigger");
var Body4 = withContext25(ark21.div, "body");
var Header4 = withContext25(ark21.div, "header");
var Footer4 = withContext25(ark21.div, "footer");
// src/components/ui/progress.tsx
var exports_progress = {};
__export(exports_progress, {
  View: () => View3,
  ValueText: () => ValueText3,
  Track: () => Track,
  RootProvider: () => RootProvider22,
  Root: () => Root26,
  Range: () => Range,
  Label: () => Label12,
  CircleTrack: () => CircleTrack,
  CircleRange: () => CircleRange,
  Circle: () => Circle
});
import { Progress } from "@ark-ui/react/progress";
"use client";
var { withProvider: withProvider21, withContext: withContext26 } = createStyleContext(progress);
var Root26 = withProvider21(Progress.Root, "root");
var RootProvider22 = withProvider21(Progress.RootProvider, "root");
var Circle = withContext26(Progress.Circle, "circle");
var CircleRange = withContext26(Progress.CircleRange, "circleRange");
var CircleTrack = withContext26(Progress.CircleTrack, "circleTrack");
var Label12 = withContext26(Progress.Label, "label");
var Range = withContext26(Progress.Range, "range");
var Track = withContext26(Progress.Track, "track");
var ValueText3 = withContext26(Progress.ValueText, "valueText");
var View3 = withContext26(Progress.View, "view");
// src/components/ui/radio-card-group.tsx
var exports_radio_card_group = {};
__export(exports_radio_card_group, {
  RootProvider: () => RootProvider23,
  Root: () => Root27,
  Label: () => Label13,
  ItemText: () => ItemText3,
  ItemHiddenInput: () => ItemHiddenInput,
  ItemControl: () => ItemControl,
  Item: () => Item8,
  Indicator: () => Indicator11,
  Context: () => RadioGroupContext
});
import { RadioGroup } from "@ark-ui/react/radio-group";
import { RadioGroupContext } from "@ark-ui/react/radio-group";
"use client";
var { withProvider: withProvider22, withContext: withContext27 } = createStyleContext(radioCardGroup);
var Root27 = withProvider22(RadioGroup.Root, "root");
var RootProvider23 = withProvider22(RadioGroup.RootProvider, "root");
var Indicator11 = withContext27(RadioGroup.Indicator, "indicator");
var Item8 = withContext27(RadioGroup.Item, "item");
var ItemControl = withContext27(RadioGroup.ItemControl, "itemControl");
var ItemText3 = withContext27(RadioGroup.ItemText, "itemText");
var Label13 = withContext27(RadioGroup.Label, "label");
var ItemHiddenInput = RadioGroup.ItemHiddenInput;
// src/components/ui/radio-group.tsx
var exports_radio_group = {};
__export(exports_radio_group, {
  RootProvider: () => RootProvider24,
  Root: () => Root28,
  Label: () => Label14,
  ItemText: () => ItemText4,
  ItemHiddenInput: () => ItemHiddenInput2,
  ItemControl: () => ItemControl2,
  Item: () => Item9,
  Indicator: () => Indicator12,
  Context: () => RadioGroupContext2
});
import { RadioGroup as RadioGroup2 } from "@ark-ui/react/radio-group";
import { RadioGroupContext as RadioGroupContext2 } from "@ark-ui/react/radio-group";
"use client";
var { withProvider: withProvider23, withContext: withContext28 } = createStyleContext(radioGroup);
var Root28 = withProvider23(RadioGroup2.Root, "root");
var RootProvider24 = withProvider23(RadioGroup2.RootProvider, "root");
var Indicator12 = withContext28(RadioGroup2.Indicator, "indicator");
var Item9 = withContext28(RadioGroup2.Item, "item");
var ItemControl2 = withContext28(RadioGroup2.ItemControl, "itemControl");
var ItemText4 = withContext28(RadioGroup2.ItemText, "itemText");
var Label14 = withContext28(RadioGroup2.Label, "label");
var ItemHiddenInput2 = RadioGroup2.ItemHiddenInput;
// src/components/ui/rating-group.tsx
var exports_rating_group = {};
__export(exports_rating_group, {
  RootProvider: () => RootProvider25,
  Root: () => Root29,
  Label: () => Label15,
  Items: () => Items3,
  ItemIndicator: () => ItemIndicator6,
  ItemContext: () => RatingGroupItemContext,
  Item: () => Item10,
  HiddenInput: () => HiddenInput5,
  Control: () => Control11,
  Context: () => RatingGroupContext
});
import {
  RatingGroup,
  useRatingGroupContext,
  useRatingGroupItemContext
} from "@ark-ui/react/rating-group";
import {
  cloneElement,
  forwardRef as forwardRef22,
  isValidElement
} from "react";
import {
  RatingGroupContext,
  RatingGroupItemContext
} from "@ark-ui/react/rating-group";
import { jsx as jsx22, jsxs as jsxs7 } from "react/jsx-runtime";
"use client";
var { withProvider: withProvider24, withContext: withContext29 } = createStyleContext(ratingGroup);
var Root29 = withProvider24(RatingGroup.Root, "root");
var RootProvider25 = withProvider24(RatingGroup.RootProvider, "root");
var Item10 = withContext29(RatingGroup.Item, "item");
var Label15 = withContext29(RatingGroup.Label, "label");
var HiddenInput5 = RatingGroup.HiddenInput;
var StyledItemIndicator3 = withContext29("span", "itemIndicator");
var cloneIcon = (icon2, type) => {
  if (!isValidElement(icon2))
    return null;
  const props = { [`data-${type}`]: "", "aria-hidden": true, fill: "currentColor" };
  return cloneElement(icon2, props);
};
var ItemIndicator6 = forwardRef22(function ItemIndicator7(props, ref) {
  const { icon: icon2 = /* @__PURE__ */ jsx22(Star, {}), ...rest } = props;
  const item = useRatingGroupItemContext();
  return /* @__PURE__ */ jsxs7(StyledItemIndicator3, {
    ref,
    ...rest,
    "data-highlighted": item.highlighted ? "" : undefined,
    "data-checked": item.checked ? "" : undefined,
    "data-half": item.half ? "" : undefined,
    children: [
      cloneIcon(icon2, "bg"),
      cloneIcon(icon2, "fg")
    ]
  });
});
var Items3 = (props) => {
  const { icon: icon2, ...rest } = props;
  const ratingGroup2 = useRatingGroupContext();
  return ratingGroup2.items.map((item) => /* @__PURE__ */ jsx22(Item10, {
    index: item,
    ...rest,
    children: /* @__PURE__ */ jsx22(ItemIndicator6, {
      icon: icon2
    })
  }, item));
};
var Control11 = withContext29(RatingGroup.Control, "control", {
  defaultProps: { children: /* @__PURE__ */ jsx22(Items3, {}) }
});
// src/components/ui/scroll-area.tsx
var exports_scroll_area = {};
__export(exports_scroll_area, {
  Viewport: () => Viewport,
  Thumb: () => Thumb,
  Scrollbar: () => Scrollbar,
  RootProvider: () => RootProvider26,
  Root: () => Root30,
  Corner: () => Corner,
  Context: () => ScrollAreaContext,
  Content: () => Content12
});
import { ScrollArea } from "@ark-ui/react/scroll-area";
import { ScrollAreaContext } from "@ark-ui/react/scroll-area";
import { jsx as jsx23 } from "react/jsx-runtime";
"use client";
var { withProvider: withProvider25, withContext: withContext30 } = createStyleContext(scrollArea);
var Root30 = withProvider25(ScrollArea.Root, "root");
var RootProvider26 = withProvider25(ScrollArea.Root, "root");
var Content12 = withContext30(ScrollArea.Content, "content");
var Corner = withContext30(ScrollArea.Corner, "corner");
var Thumb = withContext30(ScrollArea.Thumb, "thumb");
var Scrollbar = withContext30(ScrollArea.Scrollbar, "scrollbar", {
  defaultProps: { children: /* @__PURE__ */ jsx23(Thumb, {}) }
});
var Viewport = withContext30(ScrollArea.Viewport, "viewport");
// src/components/ui/segment-group.tsx
var exports_segment_group = {};
__export(exports_segment_group, {
  RootProvider: () => RootProvider27,
  Root: () => Root31,
  Label: () => Label16,
  Items: () => Items4,
  ItemText: () => ItemText5,
  ItemHiddenInput: () => ItemHiddenInput3,
  ItemControl: () => ItemControl3,
  Item: () => Item11,
  Indicator: () => Indicator13,
  Context: () => SegmentGroupContext
});
import { SegmentGroup } from "@ark-ui/react/segment-group";
import { useMemo as useMemo4 } from "react";
import { SegmentGroupContext } from "@ark-ui/react/segment-group";
import { jsx as jsx24, jsxs as jsxs8 } from "react/jsx-runtime";
"use client";
var { withProvider: withProvider26, withContext: withContext31 } = createStyleContext(segmentGroup);
var Root31 = withProvider26(SegmentGroup.Root, "root", {
  defaultProps: { orientation: "horizontal" },
  forwardProps: ["orientation"]
});
var RootProvider27 = withProvider26(SegmentGroup.RootProvider, "root");
var Indicator13 = withContext31(SegmentGroup.Indicator, "indicator");
var Item11 = withContext31(SegmentGroup.Item, "item");
var ItemControl3 = withContext31(SegmentGroup.ItemControl, "itemControl");
var ItemHiddenInput3 = SegmentGroup.ItemHiddenInput;
var ItemText5 = withContext31(SegmentGroup.ItemText, "itemText");
var Label16 = withContext31(SegmentGroup.Label, "label");
var Items4 = (props) => {
  const { items, ...itemProps } = props;
  const data = useMemo4(() => normalize(items), [items]);
  return data.map((item) => /* @__PURE__ */ jsxs8(Item11, {
    value: item.value,
    disabled: item.disabled,
    ...itemProps,
    children: [
      /* @__PURE__ */ jsx24(ItemText5, {
        children: item.label
      }),
      /* @__PURE__ */ jsx24(ItemHiddenInput3, {})
    ]
  }, item.value));
};
var normalize = (items) => items.map((item) => typeof item === "string" ? { value: item, label: item } : item);
// src/components/ui/select.tsx
var exports_select = {};
__export(exports_select, {
  ValueText: () => ValueText4,
  Trigger: () => Trigger12,
  Root: () => Root32,
  Positioner: () => Positioner9,
  List: () => List4,
  Label: () => Label17,
  ItemText: () => ItemText6,
  ItemIndicator: () => ItemIndicator8,
  ItemGroupLabel: () => ItemGroupLabel3,
  ItemGroup: () => ItemGroup5,
  ItemContext: () => SelectItemContext,
  Item: () => Item12,
  IndicatorGroup: () => IndicatorGroup3,
  Indicator: () => Indicator14,
  HiddenSelect: () => HiddenSelect,
  Control: () => Control12,
  Context: () => SelectContext,
  Content: () => Content13,
  ClearTrigger: () => ClearTrigger4
});
import { ark as ark22 } from "@ark-ui/react/factory";
import { Select, useSelectItemContext } from "@ark-ui/react/select";
import { forwardRef as forwardRef23 } from "react";
import {
  SelectContext,
  SelectItemContext
} from "@ark-ui/react/select";
import { jsx as jsx25 } from "react/jsx-runtime";
"use client";
var { withProvider: withProvider27, withContext: withContext32 } = createStyleContext(select);
var Root32 = withProvider27(Select.Root, "root");
var ClearTrigger4 = withContext32(Select.ClearTrigger, "clearTrigger");
var Content13 = withContext32(Select.Content, "content");
var Control12 = withContext32(Select.Control, "control");
var IndicatorGroup3 = withContext32(ark22.div, "indicatorGroup");
var Item12 = withContext32(Select.Item, "item");
var ItemGroup5 = withContext32(Select.ItemGroup, "itemGroup");
var ItemGroupLabel3 = withContext32(Select.ItemGroupLabel, "itemGroupLabel");
var ItemText6 = withContext32(Select.ItemText, "itemText");
var Label17 = withContext32(Select.Label, "label");
var List4 = withContext32(Select.List, "list");
var Positioner9 = withContext32(Select.Positioner, "positioner");
var Trigger12 = withContext32(Select.Trigger, "trigger");
var ValueText4 = withContext32(Select.ValueText, "valueText");
var Indicator14 = withContext32(Select.Indicator, "indicator", {
  defaultProps: { children: /* @__PURE__ */ jsx25(ChevronsUpDown, {}) }
});
var HiddenSelect = Select.HiddenSelect;
var StyledItemIndicator4 = withContext32(Select.ItemIndicator, "itemIndicator");
var ItemIndicator8 = forwardRef23(function ItemIndicator9(props, ref) {
  const item = useSelectItemContext();
  return item.selected ? /* @__PURE__ */ jsx25(StyledItemIndicator4, {
    ref,
    ...props,
    children: /* @__PURE__ */ jsx25(Check, {})
  }) : /* @__PURE__ */ jsx25("svg", {
    "aria-hidden": "true",
    focusable: "false"
  });
});
// src/components/ui/separator.tsx
import { ark as ark23 } from "@ark-ui/react/factory";
var Separator3 = styled(ark23.hr, separator, {
  defaultProps: { "data-orientation": "horizontal" }
});
// src/components/ui/skeleton.tsx
import { ark as ark24 } from "@ark-ui/react/factory";
import { forwardRef as forwardRef24 } from "react";
import { jsx as jsx26 } from "react/jsx-runtime";
var Skeleton = styled(ark24.div, skeleton);
var SkeletonCircle = styled(ark24.div, skeleton, { defaultProps: { circle: true } });
var SkeletonText = forwardRef24(function SkeletonText2(props, ref) {
  const { noOfLines = 3, gap, rootProps, ...skeletonProps } = props;
  return /* @__PURE__ */ jsx26(Stack, {
    ref,
    gap,
    width: "full",
    ...rootProps,
    children: [...Array(noOfLines).keys()].map((index) => /* @__PURE__ */ jsx26(Skeleton, {
      height: "4",
      _last: { maxW: noOfLines === 1 ? "100%" : "80%" },
      ...skeletonProps
    }, index))
  });
});
// src/components/ui/slider.tsx
var exports_slider = {};
__export(exports_slider, {
  ValueText: () => ValueText5,
  Track: () => Track2,
  Thumbs: () => Thumbs,
  Thumb: () => Thumb2,
  Root: () => Root33,
  Range: () => Range2,
  Marks: () => Marks,
  MarkerIndicator: () => MarkerIndicator,
  MarkerGroup: () => MarkerGroup,
  Marker: () => Marker,
  Label: () => Label18,
  HiddenInput: () => HiddenInput6,
  DraggingIndicator: () => DraggingIndicator,
  Control: () => Control13,
  Context: () => SliderContext
});
import { ark as ark25 } from "@ark-ui/react/factory";
import { Slider, useSliderContext } from "@ark-ui/react/slider";
import { forwardRef as forwardRef25 } from "react";
import { SliderContext } from "@ark-ui/react/slider";
import { jsx as jsx27, jsxs as jsxs9 } from "react/jsx-runtime";
"use client";
var { withProvider: withProvider28, withContext: withContext33 } = createStyleContext(slider);
var Root33 = withProvider28(Slider.Root, "root");
var Control13 = withContext33(Slider.Control, "control");
var DraggingIndicator = withContext33(Slider.DraggingIndicator, "draggingIndicator");
var Label18 = withContext33(Slider.Label, "label");
var Marker = withContext33(Slider.Marker, "marker");
var MarkerIndicator = withContext33(ark25.div, "markerIndicator");
var MarkerGroup = withContext33(Slider.MarkerGroup, "markerGroup");
var Range2 = withContext33(Slider.Range, "range");
var Thumb2 = withContext33(Slider.Thumb, "thumb");
var Track2 = withContext33(Slider.Track, "track");
var ValueText5 = withContext33(Slider.ValueText, "valueText");
var HiddenInput6 = Slider.HiddenInput;
var Marks = forwardRef25(function Marks2(props, ref) {
  const { marks, ...rest } = props;
  if (!marks?.length)
    return null;
  return /* @__PURE__ */ jsx27(MarkerGroup, {
    ref,
    ...rest,
    children: marks.map((mark, index) => {
      const value = typeof mark === "number" ? mark : mark.value;
      const label = typeof mark === "number" ? undefined : mark.label;
      return /* @__PURE__ */ jsxs9(Marker, {
        value,
        children: [
          /* @__PURE__ */ jsx27(MarkerIndicator, {}),
          label != null && /* @__PURE__ */ jsx27("span", {
            children: label
          })
        ]
      }, index);
    })
  });
});
var Thumbs = (props) => {
  const slider2 = useSliderContext();
  return slider2.value.map((_, index) => /* @__PURE__ */ jsx27(Thumb2, {
    index,
    ...props,
    children: /* @__PURE__ */ jsx27(HiddenInput6, {})
  }, index));
};
// src/components/ui/splitter.tsx
var exports_splitter = {};
__export(exports_splitter, {
  RootProvider: () => RootProvider28,
  Root: () => Root34,
  ResizeTrigger: () => ResizeTrigger,
  Panel: () => Panel,
  Context: () => SplitterContext
});
import { Splitter } from "@ark-ui/react/splitter";
import { SplitterContext } from "@ark-ui/react/splitter";
"use client";
var { withProvider: withProvider29, withContext: withContext34 } = createStyleContext(splitter);
var Root34 = withProvider29(Splitter.Root, "root");
var RootProvider28 = withProvider29(Splitter.RootProvider, "root");
var Panel = withContext34(Splitter.Panel, "panel");
var ResizeTrigger = withContext34(Splitter.ResizeTrigger, "resizeTrigger");
// src/components/ui/switch.tsx
var exports_switch = {};
__export(exports_switch, {
  ThumbIndicator: () => ThumbIndicator,
  Thumb: () => Thumb3,
  RootProvider: () => RootProvider29,
  Root: () => Root35,
  Label: () => Label19,
  Indicator: () => Indicator15,
  HiddenInput: () => HiddenInput7,
  Control: () => Control14,
  Context: () => SwitchContext
});
import { ark as ark26 } from "@ark-ui/react";
import { Switch, useSwitchContext } from "@ark-ui/react/switch";
import { forwardRef as forwardRef26 } from "react";
import { SwitchContext } from "@ark-ui/react/switch";
import { jsx as jsx28 } from "react/jsx-runtime";
"use client";
var { withProvider: withProvider30, withContext: withContext35 } = createStyleContext(switchRecipe);
var Root35 = withProvider30(Switch.Root, "root");
var RootProvider29 = withProvider30(Switch.RootProvider, "root");
var Label19 = withContext35(Switch.Label, "label");
var Thumb3 = withContext35(Switch.Thumb, "thumb");
var HiddenInput7 = Switch.HiddenInput;
var Control14 = withContext35(Switch.Control, "control", {
  defaultProps: { children: /* @__PURE__ */ jsx28(Thumb3, {}) }
});
var StyledIndicator3 = withContext35(ark26.span, "indicator");
var Indicator15 = forwardRef26(function Indicator16(props, ref) {
  const { fallback, children, ...rest } = props;
  const api = useSwitchContext();
  return /* @__PURE__ */ jsx28(StyledIndicator3, {
    ref,
    "data-checked": api.checked ? "" : undefined,
    ...rest,
    children: api.checked ? children : fallback
  });
});
var StyledThumbIndicator = styled(ark26.span);
var ThumbIndicator = forwardRef26(function SwitchThumbIndicator(props, ref) {
  const { fallback, children, ...rest } = props;
  const api = useSwitchContext();
  return /* @__PURE__ */ jsx28(StyledThumbIndicator, {
    ref,
    "data-checked": api.checked ? "" : undefined,
    ...rest,
    children: api.checked ? children : fallback
  });
});
// src/components/ui/table.tsx
var exports_table = {};
__export(exports_table, {
  Row: () => Row,
  Root: () => Root36,
  Header: () => Header5,
  Head: () => Head,
  Foot: () => Foot,
  Cell: () => Cell,
  Caption: () => Caption,
  Body: () => Body5
});
import { ark as ark27 } from "@ark-ui/react/factory";
"use client";
var { withProvider: withProvider31, withContext: withContext36 } = createStyleContext(table);
var Root36 = withProvider31(ark27.table, "root");
var Body5 = withContext36(ark27.tbody, "body");
var Caption = withContext36(ark27.caption, "caption");
var Cell = withContext36(ark27.td, "cell");
var Foot = withContext36(ark27.tfoot, "foot");
var Head = withContext36(ark27.thead, "head");
var Header5 = withContext36(ark27.th, "header");
var Row = withContext36(ark27.tr, "row");
// src/components/ui/tabs.tsx
var exports_tabs = {};
__export(exports_tabs, {
  Trigger: () => Trigger13,
  RootProvider: () => RootProvider30,
  Root: () => Root37,
  List: () => List5,
  Indicator: () => Indicator17,
  Context: () => TabsContext,
  Content: () => Content14
});
import { Tabs } from "@ark-ui/react/tabs";
import { TabsContext } from "@ark-ui/react/tabs";
"use client";
var { withProvider: withProvider32, withContext: withContext37 } = createStyleContext(tabs);
var Root37 = withProvider32(Tabs.Root, "root");
var RootProvider30 = withProvider32(Tabs.RootProvider, "root");
var List5 = withContext37(Tabs.List, "list");
var Trigger13 = withContext37(Tabs.Trigger, "trigger");
var Content14 = withContext37(Tabs.Content, "content");
var Indicator17 = withContext37(Tabs.Indicator, "indicator");
// src/components/ui/tags-input.tsx
var exports_tags_input = {};
__export(exports_tags_input, {
  RootProvider: () => RootProvider31,
  Root: () => Root38,
  Label: () => Label20,
  Items: () => Items5,
  ItemText: () => ItemText7,
  ItemPreview: () => ItemPreview2,
  ItemInput: () => ItemInput,
  ItemDeleteTrigger: () => ItemDeleteTrigger2,
  Item: () => Item13,
  Input: () => Input8,
  HiddenInput: () => HiddenInput8,
  Control: () => Control15,
  Context: () => TagsInputContext,
  ClearTrigger: () => ClearTrigger5
});
import { TagsInput, useTagsInputContext } from "@ark-ui/react/tags-input";
import { TagsInputContext } from "@ark-ui/react/tags-input";
import { jsx as jsx29, jsxs as jsxs10 } from "react/jsx-runtime";
"use client";
var { withProvider: withProvider33, withContext: withContext38 } = createStyleContext(tagsInput);
var Root38 = withProvider33(TagsInput.Root, "root");
var RootProvider31 = withProvider33(TagsInput.RootProvider, "root");
var ClearTrigger5 = withContext38(TagsInput.ClearTrigger, "clearTrigger", {
  defaultProps: { children: /* @__PURE__ */ jsx29(X, {}) }
});
var Control15 = withContext38(TagsInput.Control, "control");
var HiddenInput8 = TagsInput.HiddenInput;
var Input8 = withContext38(TagsInput.Input, "input");
var Item13 = withContext38(TagsInput.Item, "item");
var ItemDeleteTrigger2 = withContext38(TagsInput.ItemDeleteTrigger, "itemDeleteTrigger", {
  defaultProps: { children: /* @__PURE__ */ jsx29(X, {}) }
});
var ItemInput = withContext38(TagsInput.ItemInput, "itemInput");
var ItemPreview2 = withContext38(TagsInput.ItemPreview, "itemPreview");
var ItemText7 = withContext38(TagsInput.ItemText, "itemText");
var Label20 = withContext38(TagsInput.Label, "label");
var Items5 = (props) => {
  const context2 = useTagsInputContext();
  return context2.value.map((item, index) => /* @__PURE__ */ jsxs10(Item13, {
    index,
    value: item,
    ...props,
    children: [
      /* @__PURE__ */ jsxs10(ItemPreview2, {
        children: [
          /* @__PURE__ */ jsx29(ItemText7, {
            children: item
          }),
          /* @__PURE__ */ jsx29(ItemDeleteTrigger2, {})
        ]
      }),
      /* @__PURE__ */ jsx29(ItemInput, {})
    ]
  }, index));
};
// src/components/ui/text.tsx
var Text = styled("p", text);
// src/components/ui/textarea.tsx
import { Field as Field3 } from "@ark-ui/react/field";
var Textarea = styled(Field3.Textarea, textarea);
// src/components/ui/toast.tsx
import { Portal } from "@ark-ui/react/portal";
import { Toaster as ArkToaster, createToaster, Toast, useToastContext } from "@ark-ui/react/toast";
import { forwardRef as forwardRef27 } from "react";
import { jsx as jsx30, jsxs as jsxs11 } from "react/jsx-runtime";
"use client";
var { withProvider: withProvider34, withContext: withContext39 } = createStyleContext(toast);
var Root39 = withProvider34(Toast.Root, "root");
var Title6 = withContext39(Toast.Title, "title");
var Description6 = withContext39(Toast.Description, "description");
var ActionTrigger3 = withContext39(Toast.ActionTrigger, "actionTrigger");
var CloseTrigger4 = withContext39(Toast.CloseTrigger, "closeTrigger");
var StyledToaster = styled(ArkToaster);
var iconMap = {
  warning: CircleAlert,
  success: CircleCheckBig,
  error: CircleX
};
var Indicator18 = forwardRef27((props, ref) => {
  const toast2 = useToastContext();
  const StatusIcon = iconMap[toast2.type];
  if (!StatusIcon)
    return null;
  return /* @__PURE__ */ jsx30(Icon2, {
    ref,
    "data-type": toast2.type,
    ...props,
    children: /* @__PURE__ */ jsx30(StatusIcon, {})
  });
});
var toaster = createToaster({
  placement: "bottom-end",
  pauseOnPageIdle: true,
  overlap: false,
  gap: 12,
  max: 5
});
var Toaster = () => {
  return /* @__PURE__ */ jsx30(Portal, {
    children: /* @__PURE__ */ jsx30(StyledToaster, {
      toaster,
      insetInline: { mdDown: "4" },
      children: (toast2) => /* @__PURE__ */ jsxs11(Root39, {
        children: [
          toast2.type === "loading" ? /* @__PURE__ */ jsx30(Spinner, {
            color: "colorPalette.plain.fg"
          }) : /* @__PURE__ */ jsx30(Indicator18, {}),
          /* @__PURE__ */ jsxs11(Stack, {
            gap: "3",
            alignItems: "start",
            children: [
              /* @__PURE__ */ jsxs11(Stack, {
                gap: "1",
                children: [
                  toast2.title && /* @__PURE__ */ jsx30(Title6, {
                    children: toast2.title
                  }),
                  toast2.description && /* @__PURE__ */ jsx30(Description6, {
                    children: toast2.description
                  })
                ]
              }),
              toast2.action && /* @__PURE__ */ jsx30(ActionTrigger3, {
                children: toast2.action.label
              })
            ]
          }),
          toast2.closable && /* @__PURE__ */ jsx30(CloseTrigger4, {
            asChild: true,
            children: /* @__PURE__ */ jsx30(CloseButton, {
              size: "sm"
            })
          })
        ]
      })
    })
  });
};
// src/components/ui/toggle-group.tsx
var exports_toggle_group = {};
__export(exports_toggle_group, {
  RootProvider: () => RootProvider32,
  Root: () => Root40,
  Item: () => Item14,
  Context: () => ToggleGroupContext
});
import { ToggleGroup } from "@ark-ui/react/toggle-group";
import { ToggleGroupContext } from "@ark-ui/react/toggle-group";
"use client";
var { withProvider: withProvider35, withContext: withContext40 } = createStyleContext(toggleGroup);
var Root40 = withProvider35(ToggleGroup.Root, "root");
var RootProvider32 = withProvider35(ToggleGroup.RootProvider, "root");
var Item14 = withContext40(ToggleGroup.Item, "item");
// src/components/ui/tooltip.tsx
import { Portal as Portal2 } from "@ark-ui/react/portal";
import { Tooltip as ArkTooltip } from "@ark-ui/react/tooltip";
import { forwardRef as forwardRef28 } from "react";
import { TooltipContext } from "@ark-ui/react/tooltip";
import { jsx as jsx31, jsxs as jsxs12 } from "react/jsx-runtime";
"use client";
var { withRootProvider: withRootProvider6, withContext: withContext41 } = createStyleContext(tooltip);
var Root41 = withRootProvider6(ArkTooltip.Root, {
  defaultProps: { unmountOnExit: true, lazyMount: true }
});
var Arrow4 = withContext41(ArkTooltip.Arrow, "arrow");
var ArrowTip4 = withContext41(ArkTooltip.ArrowTip, "arrowTip");
var Content15 = withContext41(ArkTooltip.Content, "content");
var Positioner10 = withContext41(ArkTooltip.Positioner, "positioner");
var Trigger14 = withContext41(ArkTooltip.Trigger, "trigger");
var Tooltip = forwardRef28(function Tooltip2(props, ref) {
  const {
    showArrow,
    children,
    disabled,
    portalled = true,
    content,
    contentProps,
    portalRef,
    ...rootProps
  } = props;
  if (disabled)
    return children;
  return /* @__PURE__ */ jsxs12(Root41, {
    ...rootProps,
    children: [
      /* @__PURE__ */ jsx31(Trigger14, {
        asChild: true,
        children
      }),
      /* @__PURE__ */ jsx31(Portal2, {
        disabled: !portalled,
        container: portalRef,
        children: /* @__PURE__ */ jsx31(Positioner10, {
          children: /* @__PURE__ */ jsxs12(Content15, {
            ref,
            ...contentProps,
            children: [
              showArrow && /* @__PURE__ */ jsx31(Arrow4, {
                children: /* @__PURE__ */ jsx31(ArrowTip4, {})
              }),
              content
            ]
          })
        })
      })
    ]
  });
});
export {
  toaster,
  Tooltip,
  exports_toggle_group as ToggleGroup,
  Toaster,
  Textarea,
  Text,
  exports_tags_input as TagsInput,
  exports_tabs as Tabs,
  exports_table as Table,
  exports_switch as Switch,
  exports_splitter as Splitter,
  Spinner,
  Span,
  exports_slider as Slider,
  SkeletonText,
  SkeletonCircle,
  Skeleton,
  Separator3 as Separator,
  exports_select as Select,
  exports_segment_group as SegmentGroup,
  exports_scroll_area as ScrollArea,
  exports_rating_group as RatingGroup,
  exports_radio_group as RadioGroup,
  exports_radio_card_group as RadioCardGroup,
  exports_progress as Progress,
  exports_popover as Popover,
  exports_pin_input as PinInput,
  exports_pagination as Pagination,
  exports_number_input as NumberInput,
  exports_menu as Menu,
  Loader,
  Link2 as Link,
  Label9 as Label,
  Kbd,
  InputGroup,
  InputAddon,
  Input5 as Input,
  Image2 as Image,
  IconButton,
  Icon2 as Icon,
  exports_hover_card as HoverCard,
  Heading,
  Group,
  exports_file_upload as FileUpload,
  exports_fieldset as Fieldset,
  exports_field as Field,
  exports_editable as Editable,
  exports_drawer as Drawer,
  DisplayValue,
  exports_dialog as Dialog,
  exports_date_picker as DatePicker,
  exports_combobox as Combobox,
  exports_color_picker as ColorPicker,
  exports_collapsible as Collapsible,
  Code,
  CloseButton,
  exports_clipboard as Clipboard,
  exports_checkbox as Checkbox,
  exports_carousel as Carousel,
  exports_card as Card,
  ButtonGroup,
  Button,
  exports_breadcrumb as Breadcrumb,
  Badge,
  exports_avatar as Avatar,
  exports_alert as Alert,
  exports_accordion as Accordion,
  AbsoluteCenter
};

//# debugId=803E5E1EF00BC55764756E2164756E21
//# sourceMappingURL=index.js.map
