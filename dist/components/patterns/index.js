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
var lengthUnits = "cm,mm,Q,in,pc,pt,px,em,ex,ch,rem,lh,rlh,vw,vh,vmin,vmax,vb,vi,svw,svh,lvw,lvh,dvw,dvh,cqw,cqh,cqi,cqb,cqmin,cqmax,%";
var lengthUnitsPattern = `(?:${lengthUnits.split(",").join("|")})`;
var lengthRegExp = new RegExp(`^[+-]?[0-9]*.?[0-9]+(?:[eE][+-]?[0-9]+)?${lengthUnitsPattern}$`);
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

// src/components/patterns/action-card.tsx
import { jsx, jsxs } from "react/jsx-runtime";
"use client";
var styles = {
  root: css({
    bg: "bg.default",
    borderWidth: "1px",
    borderColor: "border.muted",
    rounded: "l3",
    p: "6",
    cursor: "pointer",
    transition: "all 0.2s ease",
    _hover: { shadow: "md", borderColor: "colorPalette.7", translateY: "-1px" },
    _focusVisible: { outline: "2px solid", outlineColor: "colorPalette.8", outlineOffset: "2px" }
  }),
  iconWrap: css({
    w: "10",
    h: "10",
    rounded: "l2",
    bg: "colorPalette.2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "colorPalette.9",
    mb: "3"
  }),
  title: css({
    textStyle: "label",
    color: "fg.default"
  }),
  description: css({
    textStyle: "small",
    color: "fg.muted",
    mt: "1"
  })
};
function ActionCard({
  title,
  description,
  icon,
  iconBg,
  iconColor,
  onClick,
  className
}) {
  return /* @__PURE__ */ jsxs("div", {
    role: "button",
    tabIndex: 0,
    className: cx(styles.root, className),
    onClick,
    onKeyDown: (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick?.();
      }
    },
    children: [
      icon && /* @__PURE__ */ jsx("div", {
        className: styles.iconWrap,
        style: {
          ...iconBg ? { backgroundColor: iconBg } : {},
          ...iconColor ? { color: iconColor } : {}
        },
        children: icon
      }),
      /* @__PURE__ */ jsx("div", {
        className: styles.title,
        children: title
      }),
      description && /* @__PURE__ */ jsx("div", {
        className: styles.description,
        children: description
      })
    ]
  });
}
// src/components/patterns/gradient-picker.tsx
import { Plus, X } from "lucide-react";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
"use client";
var ANGLE_PRESETS = [45, 90, 135, 180, 225];
function buildGradientStyle(colors, angle) {
  if (colors.length === 1)
    return colors[0];
  return `linear-gradient(${angle}deg, ${colors.join(", ")})`;
}
var swatchStyle = css({
  display: "block",
  w: "8",
  h: "8",
  rounded: "md",
  cursor: "pointer",
  borderWidth: "2px",
  borderColor: "border.default",
  overflow: "hidden",
  _hover: { borderColor: "teal.a5" },
  transition: "colors"
});
var hiddenInput = css({ opacity: 0, position: "absolute", w: 0, h: 0 });
var removeBtn = css({
  position: "absolute",
  top: "-1.5",
  right: "-1.5",
  w: "4",
  h: "4",
  rounded: "full",
  bg: "bg.emphasized",
  color: "fg.default",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  fontSize: "xs",
  _hover: { bg: "bg.subtle" }
});
var addBtn = css({
  w: "8",
  h: "8",
  rounded: "md",
  borderWidth: "1px",
  borderStyle: "dashed",
  borderColor: "border.default",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  color: "fg.subtle",
  _hover: { borderColor: "teal.a5", color: "fg.muted" },
  transition: "colors"
});
var pillBase = css({
  px: "2",
  py: "0.5",
  rounded: "full",
  fontSize: "xs",
  fontWeight: "medium",
  cursor: "pointer",
  transition: "colors",
  _hover: { bg: "teal.a2" }
});
var pillActive = css({ bg: "teal.a3", color: "fg.default" });
var pillInactive = css({ bg: "transparent", color: "fg.subtle" });
var previewBar = css({
  h: "3",
  rounded: "sm",
  borderWidth: "1px",
  borderColor: "border.default"
});
function GradientPicker({
  colors,
  angle,
  onColorsChange,
  onAngleChange,
  className
}) {
  const addColor = () => {
    if (colors.length >= 3)
      return;
    onColorsChange([...colors, "#6366f1"]);
  };
  const removeColor = (index) => {
    if (colors.length <= 1)
      return;
    onColorsChange(colors.filter((_, i) => i !== index));
  };
  const updateColor = (index, value) => {
    const next = [...colors];
    next[index] = value;
    onColorsChange(next);
  };
  return /* @__PURE__ */ jsxs2("div", {
    className: cx(css({ display: "flex", flexDir: "column", gap: "2", minW: 0 }), className),
    children: [
      /* @__PURE__ */ jsxs2("div", {
        className: css({ display: "flex", alignItems: "center", gap: "2" }),
        children: [
          colors.map((color, i) => /* @__PURE__ */ jsxs2("div", {
            className: css({ position: "relative" }),
            children: [
              /* @__PURE__ */ jsx2("label", {
                className: swatchStyle,
                style: { backgroundColor: color },
                children: /* @__PURE__ */ jsx2("input", {
                  type: "color",
                  value: color,
                  onChange: (e) => updateColor(i, e.target.value),
                  className: hiddenInput
                })
              }),
              colors.length > 1 && /* @__PURE__ */ jsx2("button", {
                type: "button",
                onClick: () => removeColor(i),
                className: removeBtn,
                children: /* @__PURE__ */ jsx2(X, {
                  size: 10
                })
              })
            ]
          }, i)),
          colors.length < 3 && /* @__PURE__ */ jsx2("button", {
            type: "button",
            onClick: addColor,
            className: addBtn,
            children: /* @__PURE__ */ jsx2(Plus, {
              size: 14
            })
          })
        ]
      }),
      colors.length > 1 && /* @__PURE__ */ jsx2("div", {
        className: css({ display: "flex", gap: "1" }),
        children: ANGLE_PRESETS.map((preset) => /* @__PURE__ */ jsx2("button", {
          type: "button",
          onClick: () => onAngleChange(preset),
          className: cx(pillBase, angle === preset ? pillActive : pillInactive),
          children: preset
        }, preset))
      }),
      /* @__PURE__ */ jsx2("div", {
        className: previewBar,
        style: { background: buildGradientStyle(colors, angle) }
      })
    ]
  });
}
// src/components/patterns/icon-picker.tsx
import { useMemo as useMemo2, useState } from "react";
import { icons } from "lucide-react";

// src/components/ui/input.tsx
import { Field } from "@ark-ui/react/field";

// styled-system/jsx/factory.mjs
import { createElement, forwardRef, useMemo } from "react";

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

// styled-system/recipes/help-panel.mjs
var helpPanelDefaultVariants = {};
var helpPanelCompoundVariants = [];
var helpPanelSlotNames = [
  [
    "root",
    "help-panel__root"
  ],
  [
    "header",
    "help-panel__header"
  ],
  [
    "headerIcon",
    "help-panel__headerIcon"
  ],
  [
    "tabBar",
    "help-panel__tabBar"
  ],
  [
    "tab",
    "help-panel__tab"
  ],
  [
    "content",
    "help-panel__content"
  ],
  [
    "footer",
    "help-panel__footer"
  ],
  [
    "accentBar",
    "help-panel__accentBar"
  ],
  [
    "root",
    "help-panel__root"
  ],
  [
    "header",
    "help-panel__header"
  ],
  [
    "headerIcon",
    "help-panel__headerIcon"
  ],
  [
    "tabBar",
    "help-panel__tabBar"
  ],
  [
    "tab",
    "help-panel__tab"
  ],
  [
    "content",
    "help-panel__content"
  ],
  [
    "footer",
    "help-panel__footer"
  ],
  [
    "accentBar",
    "help-panel__accentBar"
  ]
];
var helpPanelSlotFns = /* @__PURE__ */ helpPanelSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, helpPanelDefaultVariants, getSlotCompoundVariant(helpPanelCompoundVariants, slotName))]);
var helpPanelFn = memo((props = {}) => {
  return Object.fromEntries(helpPanelSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]));
});
var helpPanelVariantKeys = [];
var getVariantProps = (variants) => ({ ...helpPanelDefaultVariants, ...compact(variants) });
var helpPanel = /* @__PURE__ */ Object.assign(helpPanelFn, {
  __recipe__: false,
  __name__: "helpPanel",
  raw: (props) => props,
  classNameMap: {},
  variantKeys: helpPanelVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, helpPanelVariantKeys);
  },
  getVariantProps
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
var getVariantProps2 = (variants) => ({ ...popoverDefaultVariants, ...compact(variants) });
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
  getVariantProps: getVariantProps2
});

// src/components/ui/input.tsx
var Input = styled(Field.Input, input);

// src/components/ui/popover.tsx
import { ark } from "@ark-ui/react/factory";
import { Popover } from "@ark-ui/react/popover";
import { PopoverContext } from "@ark-ui/react/popover";
import { jsx as jsx3 } from "react/jsx-runtime";
"use client";
var { withRootProvider, withContext } = createStyleContext(popover);
var Root = withRootProvider(Popover.Root, {
  defaultProps: { unmountOnExit: true, lazyMount: true }
});
var RootProvider = withRootProvider(Popover.Root, {
  defaultProps: { unmountOnExit: true, lazyMount: true }
});
var Anchor = withContext(Popover.Anchor, "anchor");
var ArrowTip = withContext(Popover.ArrowTip, "arrowTip");
var Arrow = withContext(Popover.Arrow, "arrow", {
  defaultProps: { children: /* @__PURE__ */ jsx3(ArrowTip, {}) }
});
var CloseTrigger = withContext(Popover.CloseTrigger, "closeTrigger");
var Content = withContext(Popover.Content, "content");
var Description = withContext(Popover.Description, "description");
var Indicator = withContext(Popover.Indicator, "indicator");
var Positioner = withContext(Popover.Positioner, "positioner");
var Title = withContext(Popover.Title, "title");
var Trigger = withContext(Popover.Trigger, "trigger");
var Body = withContext(ark.div, "body");
var Header = withContext(ark.div, "header");
var Footer = withContext(ark.div, "footer");

// src/components/patterns/icon-picker.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
"use client";
var CURATED_ICONS = [
  "Brain",
  "Bot",
  "Cpu",
  "Rocket",
  "Sparkles",
  "Zap",
  "Target",
  "Shield",
  "Star",
  "Heart",
  "Gem",
  "Crown",
  "Flame",
  "Lightbulb",
  "Atom",
  "Orbit",
  "Globe",
  "Compass",
  "Telescope",
  "Microscope",
  "Dna",
  "FlaskConical",
  "Gauge",
  "Activity",
  "TrendingUp",
  "BarChart3",
  "PieChart",
  "LineChart",
  "Code",
  "Terminal",
  "Server",
  "Database",
  "HardDrive",
  "Cloud",
  "Wifi",
  "Radio",
  "Satellite",
  "Cable",
  "Network",
  "Router",
  "Lock",
  "Key",
  "Fingerprint",
  "Eye",
  "ScanFace",
  "ShieldCheck",
  "MessageSquare",
  "Mail",
  "Send",
  "Bell",
  "Megaphone",
  "Mic",
  "Image",
  "Camera",
  "Video",
  "Music",
  "Palette",
  "Paintbrush",
  "Pen",
  "PenTool",
  "Layers",
  "Grid3x3",
  "Box",
  "Package",
  "Truck",
  "Plane",
  "Car",
  "Bike",
  "Ship",
  "TrainFront",
  "Home",
  "Building2",
  "Factory",
  "Store",
  "Landmark",
  "Hospital",
  "User",
  "Users",
  "UserCheck",
  "Briefcase",
  "GraduationCap",
  "Award",
  "Wrench",
  "Settings",
  "Cog",
  "Hammer",
  "Drill",
  "Plug"
];
var triggerStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "2",
  px: "3",
  py: "1.5",
  rounded: "md",
  borderWidth: "1px",
  borderColor: "border.default",
  cursor: "pointer",
  bg: "bg.default",
  _hover: { borderColor: "teal.a5" },
  transition: "colors"
});
var gridStyle = css({
  display: "grid",
  gridTemplateColumns: "repeat(6, 1fr)",
  gap: "1",
  maxH: "220px",
  overflowY: "auto"
});
var cellBase = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  w: "10",
  h: "10",
  rounded: "md",
  cursor: "pointer",
  transition: "colors",
  _hover: { bg: "teal.a2" }
});
var cellActive = css({ bg: "teal.a3" });
var labelStyle = css({ fontSize: "sm", color: "fg.muted" });
var emptyStyle = css({ fontSize: "sm", color: "fg.subtle", textAlign: "center", py: "4" });
function IconPicker({ value, onChange, className }) {
  const [search, setSearch] = useState("");
  const displayedIcons = useMemo2(() => {
    if (!search.trim()) {
      return CURATED_ICONS.filter((name) => (name in icons));
    }
    const query = search.toLowerCase();
    return Object.keys(icons).filter((name) => name.toLowerCase().includes(query)).slice(0, 60);
  }, [search]);
  const SelectedIcon = icons[value];
  return /* @__PURE__ */ jsxs3(Root, {
    portalled: true,
    children: [
      /* @__PURE__ */ jsx4(Trigger, {
        asChild: true,
        children: /* @__PURE__ */ jsxs3("button", {
          type: "button",
          className: cx(triggerStyle, className),
          children: [
            SelectedIcon && /* @__PURE__ */ jsx4(SelectedIcon, {
              size: 16
            }),
            /* @__PURE__ */ jsx4("span", {
              className: labelStyle,
              children: value
            })
          ]
        })
      }),
      /* @__PURE__ */ jsx4(Positioner, {
        className: css({ zIndex: "popover" }),
        children: /* @__PURE__ */ jsxs3(Content, {
          className: css({ w: "280px", p: "3", bg: "bg.default", borderWidth: "1px", borderColor: "border.default", shadow: "lg", rounded: "lg" }),
          children: [
            /* @__PURE__ */ jsx4(Input, {
              type: "text",
              value: search,
              onChange: (e) => setSearch(e.target.value),
              placeholder: "Search icons...",
              size: "sm",
              className: css({ mb: "2" })
            }),
            /* @__PURE__ */ jsx4("div", {
              className: gridStyle,
              children: displayedIcons.map((name) => {
                const Icon = icons[name];
                if (!Icon)
                  return null;
                return /* @__PURE__ */ jsx4("button", {
                  type: "button",
                  title: name,
                  onClick: () => {
                    onChange(name);
                    setSearch("");
                  },
                  className: cx(cellBase, name === value && cellActive),
                  children: /* @__PURE__ */ jsx4(Icon, {
                    size: 18
                  })
                }, name);
              })
            }),
            displayedIcons.length === 0 && /* @__PURE__ */ jsx4("p", {
              className: emptyStyle,
              children: "No icons found"
            })
          ]
        })
      })
    ]
  });
}
// src/components/patterns/model-icon-customizer.tsx
import { icons as icons2 } from "lucide-react";
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
"use client";
var DEFAULT_ICON_CONFIG = {
  iconName: "Cpu",
  bgColors: ["#5AB8C4", "#9333ea"],
  bgAngle: 135,
  iconColor: "#ffffff"
};
var cardIconBase = css({
  rounded: "lg",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
});
function ModelCardIcon({
  config,
  size = 40,
  iconSize = 20,
  className
}) {
  const c = config ?? DEFAULT_ICON_CONFIG;
  const Icon = icons2[c.iconName];
  return /* @__PURE__ */ jsx5("div", {
    className: cx(cardIconBase, className),
    style: {
      width: size,
      height: size,
      background: buildGradientStyle(c.bgColors, c.bgAngle ?? 135)
    },
    children: Icon && /* @__PURE__ */ jsx5(Icon, {
      size: iconSize,
      style: { color: c.iconColor ?? "#ffffff" }
    })
  });
}
var swatchStyle2 = css({
  display: "block",
  w: "8",
  h: "8",
  rounded: "md",
  cursor: "pointer",
  borderWidth: "2px",
  borderColor: "border.default",
  overflow: "hidden",
  _hover: { borderColor: "teal.a5" },
  transition: "colors"
});
var hiddenInput2 = css({ opacity: 0, position: "absolute", w: 0, h: 0 });
var rowStyle = css({ display: "flex", alignItems: "center", gap: "3" });
var rowStartStyle = css({ display: "flex", alignItems: "flex-start", gap: "3" });
var labelStyle2 = css({ fontSize: "sm", color: "fg.muted", w: "20", flexShrink: 0 });
var labelTopStyle = css({ fontSize: "sm", color: "fg.muted", w: "20", flexShrink: 0, pt: "1" });
function ModelIconCustomizer({
  value,
  onChange,
  className
}) {
  return /* @__PURE__ */ jsxs4("div", {
    className: cx(css({ display: "flex", gap: "4", alignItems: "flex-start" }), className),
    children: [
      /* @__PURE__ */ jsx5(ModelCardIcon, {
        config: value,
        size: 48,
        iconSize: 24
      }),
      /* @__PURE__ */ jsxs4("div", {
        className: css({ display: "flex", flexDir: "column", gap: "3", flex: 1, minW: 0 }),
        children: [
          /* @__PURE__ */ jsxs4("div", {
            className: rowStyle,
            children: [
              /* @__PURE__ */ jsx5("label", {
                className: labelStyle2,
                children: "Icon"
              }),
              /* @__PURE__ */ jsx5(IconPicker, {
                value: value.iconName,
                onChange: (iconName) => onChange({ ...value, iconName })
              })
            ]
          }),
          /* @__PURE__ */ jsxs4("div", {
            className: rowStartStyle,
            children: [
              /* @__PURE__ */ jsx5("label", {
                className: labelTopStyle,
                children: "Background"
              }),
              /* @__PURE__ */ jsx5(GradientPicker, {
                colors: value.bgColors,
                angle: value.bgAngle ?? 135,
                onColorsChange: (bgColors) => onChange({ ...value, bgColors }),
                onAngleChange: (bgAngle) => onChange({ ...value, bgAngle })
              })
            ]
          }),
          /* @__PURE__ */ jsxs4("div", {
            className: rowStyle,
            children: [
              /* @__PURE__ */ jsx5("label", {
                className: labelStyle2,
                children: "Icon Color"
              }),
              /* @__PURE__ */ jsx5("label", {
                className: swatchStyle2,
                style: { backgroundColor: value.iconColor ?? "#ffffff" },
                children: /* @__PURE__ */ jsx5("input", {
                  type: "color",
                  value: value.iconColor ?? "#ffffff",
                  onChange: (e) => onChange({ ...value, iconColor: e.target.value }),
                  className: hiddenInput2
                })
              })
            ]
          })
        ]
      })
    ]
  });
}
// src/components/patterns/empty-state.tsx
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
"use client";
var styles2 = {
  root: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    py: "16",
    px: "6"
  }),
  iconWrap: css({
    w: "14",
    h: "14",
    rounded: "full",
    bg: "colorPalette.2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "colorPalette.9",
    mb: "4"
  }),
  title: css({
    textStyle: "h3",
    color: "fg.default"
  }),
  description: css({
    textStyle: "body",
    color: "fg.muted",
    mt: "2",
    maxW: "md"
  }),
  action: css({
    mt: "6"
  })
};
function EmptyState({ icon, title, description, action, className }) {
  return /* @__PURE__ */ jsxs5("div", {
    className: cx(styles2.root, className),
    children: [
      icon && /* @__PURE__ */ jsx6("div", {
        className: styles2.iconWrap,
        children: icon
      }),
      /* @__PURE__ */ jsx6("h3", {
        className: styles2.title,
        children: title
      }),
      description && /* @__PURE__ */ jsx6("p", {
        className: styles2.description,
        children: description
      }),
      action && /* @__PURE__ */ jsx6("div", {
        className: styles2.action,
        children: action
      })
    ]
  });
}
// src/components/patterns/feature-card.tsx
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
"use client";
var styles3 = {
  root: css({
    bg: "bg.default",
    borderWidth: "1px",
    borderColor: "border.muted",
    rounded: "l3",
    p: "6",
    transition: "border-color 0.2s ease",
    _hover: { borderColor: "colorPalette.7" }
  }),
  iconWrap: css({
    w: "10",
    h: "10",
    rounded: "l2",
    bg: "colorPalette.2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "colorPalette.9",
    mb: "4"
  }),
  title: css({
    textStyle: "label",
    color: "fg.default",
    mb: "2"
  }),
  description: css({
    textStyle: "small",
    color: "fg.muted"
  })
};
function FeatureCard({ title, description, icon, className }) {
  return /* @__PURE__ */ jsxs6("div", {
    className: cx(styles3.root, className),
    children: [
      icon && /* @__PURE__ */ jsx7("div", {
        className: styles3.iconWrap,
        children: icon
      }),
      /* @__PURE__ */ jsx7("div", {
        className: styles3.title,
        children: title
      }),
      /* @__PURE__ */ jsx7("div", {
        className: styles3.description,
        children: description
      })
    ]
  });
}
// src/components/patterns/file-tree.tsx
import { ChevronRight, File, Folder, FolderOpen } from "lucide-react";
import { useCallback, useState as useState2 } from "react";
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
"use client";
var styles4 = {
  root: css({
    overflow: "auto"
  }),
  node: css({
    display: "flex",
    alignItems: "center",
    gap: "1.5",
    py: "1",
    px: "2",
    cursor: "pointer",
    rounded: "l1",
    textStyle: "sm",
    color: "fg.default",
    transition: "background 0.1s",
    userSelect: "none",
    _hover: {
      bg: "gray.subtle.bg"
    }
  }),
  nodeSelected: css({
    bg: "colorPalette.2",
    color: "colorPalette.11",
    _hover: {
      bg: "colorPalette.3"
    }
  }),
  chevron: css({
    flexShrink: 0,
    w: "3.5",
    h: "3.5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "fg.muted"
  }),
  chevronPlaceholder: css({
    flexShrink: 0,
    w: "3.5"
  }),
  folderIcon: css({
    flexShrink: 0,
    w: "3.5",
    h: "3.5",
    color: "colorPalette.9"
  }),
  fileIcon: css({
    flexShrink: 0,
    w: "3.5",
    h: "3.5",
    color: "fg.muted"
  }),
  label: css({
    truncate: true
  }),
  children: css({})
};
function TreeNode({ node, depth, selectedId, expandedIds, onToggle, onSelect }) {
  const isFolder = node.type === "folder";
  const isExpanded = expandedIds.has(node.id);
  const isSelected = selectedId === node.id;
  const handleClick = () => {
    if (isFolder) {
      onToggle(node.id);
    } else {
      onSelect?.(node);
    }
  };
  return /* @__PURE__ */ jsxs7("div", {
    children: [
      /* @__PURE__ */ jsxs7("div", {
        className: cx(styles4.node, isSelected && styles4.nodeSelected),
        style: { paddingLeft: `${depth * 20 + 8}px` },
        onClick: handleClick,
        onKeyDown: (e) => {
          if (e.key === "Enter" || e.key === " ")
            handleClick();
        },
        role: "treeitem",
        tabIndex: 0,
        "aria-selected": isSelected,
        "aria-expanded": isFolder ? isExpanded : undefined,
        children: [
          isFolder ? /* @__PURE__ */ jsx8(ChevronRight, {
            className: styles4.chevron,
            "aria-hidden": "true",
            style: {
              transform: isExpanded ? "rotate(90deg)" : undefined,
              transition: "transform 0.15s"
            }
          }) : /* @__PURE__ */ jsx8("span", {
            className: styles4.chevronPlaceholder
          }),
          node.icon ? /* @__PURE__ */ jsx8("span", {
            className: isFolder ? styles4.folderIcon : styles4.fileIcon,
            children: node.icon
          }) : isFolder ? isExpanded ? /* @__PURE__ */ jsx8(FolderOpen, {
            className: styles4.folderIcon,
            "aria-hidden": "true"
          }) : /* @__PURE__ */ jsx8(Folder, {
            className: styles4.folderIcon,
            "aria-hidden": "true"
          }) : /* @__PURE__ */ jsx8(File, {
            className: styles4.fileIcon,
            "aria-hidden": "true"
          }),
          /* @__PURE__ */ jsx8("span", {
            className: styles4.label,
            children: node.name
          })
        ]
      }),
      isFolder && isExpanded && node.children && /* @__PURE__ */ jsx8("div", {
        className: styles4.children,
        role: "group",
        children: node.children.map((child) => /* @__PURE__ */ jsx8(TreeNode, {
          node: child,
          depth: depth + 1,
          selectedId,
          expandedIds,
          onToggle,
          onSelect
        }, child.id))
      })
    ]
  });
}
function FileTree({
  nodes,
  onSelect,
  selectedId,
  defaultExpanded = [],
  className
}) {
  const [expandedIds, setExpandedIds] = useState2(() => new Set(defaultExpanded));
  const handleToggle = useCallback((id) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);
  return /* @__PURE__ */ jsx8("div", {
    className: cx(styles4.root, className),
    role: "tree",
    children: nodes.map((node) => /* @__PURE__ */ jsx8(TreeNode, {
      node,
      depth: 0,
      selectedId,
      expandedIds,
      onToggle: handleToggle,
      onSelect
    }, node.id))
  });
}
// src/components/patterns/help-panel.tsx
import { ark as ark2 } from "@ark-ui/react/factory";
import { X as X2 } from "lucide-react";
import { forwardRef as forwardRef3 } from "react";
import { jsx as jsx9, jsxs as jsxs8, Fragment } from "react/jsx-runtime";
"use client";
var { withRootProvider: withRootProvider2, withContext: withContext2 } = createStyleContext(helpPanel);
var HeaderContainer = withContext2(ark2.div, "header");
var HeaderIconBadge = withContext2(ark2.div, "headerIcon");
var AccentBar = withContext2(ark2.div, "accentBar");
var TabButton = withContext2(ark2.button, "tab");
var FooterContainer = withContext2(ark2.div, "footer");
var Root2 = withRootProvider2(ark2.div);
Root2.displayName = "HelpPanel.Root";
var Header2 = forwardRef3(({ icon, title, subtitle, onClose, closeIcon, accentBar = true, className }, ref) => /* @__PURE__ */ jsxs8(HeaderContainer, {
  ref,
  className,
  children: [
    accentBar && /* @__PURE__ */ jsx9(AccentBar, {
      style: { top: 0 }
    }),
    /* @__PURE__ */ jsxs8("div", {
      className: css({ display: "flex", alignItems: "center", gap: "3" }),
      children: [
        icon && /* @__PURE__ */ jsx9(HeaderIconBadge, {
          children: icon
        }),
        /* @__PURE__ */ jsxs8("div", {
          children: [
            /* @__PURE__ */ jsx9("h2", {
              className: css({
                fontSize: "sm",
                fontWeight: "semibold",
                color: "fg.default",
                letterSpacing: "wide"
              }),
              children: title
            }),
            subtitle && /* @__PURE__ */ jsx9("p", {
              className: css({ fontSize: "xs", color: "fg.subtle" }),
              children: subtitle
            })
          ]
        })
      ]
    }),
    onClose && /* @__PURE__ */ jsx9("button", {
      onClick: onClose,
      type: "button",
      className: css({
        w: "7",
        h: "7",
        borderRadius: "l1",
        bg: "bg.subtle",
        borderWidth: "1px",
        borderColor: "border.default/50",
        color: "fg.muted",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "all",
        _hover: {
          color: "fg.default",
          borderColor: "colorPalette.8"
        }
      }),
      children: closeIcon ?? /* @__PURE__ */ jsx9(X2, {
        size: 14,
        "aria-label": "Close"
      })
    })
  ]
}));
Header2.displayName = "HelpPanel.Header";
var TabBar = withContext2(ark2.div, "tabBar");
TabBar.displayName = "HelpPanel.TabBar";
var Tab = forwardRef3(({ active, icon, label, onClick, title, className }, ref) => /* @__PURE__ */ jsxs8(TabButton, {
  ref,
  type: "button",
  onClick,
  title,
  "data-selected": active ? "" : undefined,
  className,
  children: [
    icon,
    /* @__PURE__ */ jsx9("span", {
      className: css({ display: { base: "none", sm: "inline" } }),
      children: label
    })
  ]
}));
Tab.displayName = "HelpPanel.Tab";
var Content2 = withContext2(ark2.div, "content");
Content2.displayName = "HelpPanel.Content";
var Footer2 = forwardRef3(({ hint, shortcutKey, accentBar = true, children, className }, ref) => /* @__PURE__ */ jsxs8(FooterContainer, {
  ref,
  className,
  children: [
    accentBar && /* @__PURE__ */ jsx9(AccentBar, {
      style: { bottom: 0, opacity: 0.3 }
    }),
    children ?? /* @__PURE__ */ jsxs8(Fragment, {
      children: [
        hint && /* @__PURE__ */ jsx9("span", {
          children: hint
        }),
        shortcutKey && /* @__PURE__ */ jsx9("kbd", {
          className: css({
            px: "1.5",
            py: "0.5",
            fontSize: "xs",
            fontFamily: "mono",
            bg: "bg.subtle",
            borderWidth: "1px",
            borderColor: "border.default/50",
            borderRadius: "l1",
            color: "fg.muted"
          }),
          children: shortcutKey
        })
      ]
    })
  ]
}));
Footer2.displayName = "HelpPanel.Footer";
function SectionHeading({ label, dotColor, className }) {
  return /* @__PURE__ */ jsxs8("h4", {
    className: cx(css({
      display: "flex",
      alignItems: "center",
      gap: "2",
      fontSize: "xs",
      fontWeight: "semibold",
      textTransform: "uppercase",
      letterSpacing: "wide",
      mb: "2",
      color: "colorPalette.11"
    }), className),
    children: [
      /* @__PURE__ */ jsx9("span", {
        className: css({
          w: "1.5",
          h: "1.5",
          borderRadius: "full",
          bg: "colorPalette.11"
        }),
        style: dotColor ? { backgroundColor: dotColor } : undefined
      }),
      label
    ]
  });
}
var HelpPanel = {
  Root: Root2,
  Header: Header2,
  TabBar,
  Tab,
  Content: Content2,
  Footer: Footer2,
  SectionHeading
};
// src/components/patterns/help-trigger.tsx
import { useCallback as useCallback2 } from "react";
import { jsx as jsx10 } from "react/jsx-runtime";
"use client";
function HelpTrigger({ active, onActivate, children }) {
  const handleMouseEnter = useCallback2(() => {
    if (active) {
      onActivate();
    }
  }, [active, onActivate]);
  return /* @__PURE__ */ jsx10("div", {
    style: { display: "contents" },
    onMouseEnter: handleMouseEnter,
    role: "group",
    children
  });
}
// src/components/patterns/icon-badge.tsx
import { jsx as jsx11 } from "react/jsx-runtime";
"use client";
var base = css({
  rounded: "l2",
  bg: "colorPalette.2",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "colorPalette.9",
  flexShrink: 0
});
var sizes = {
  sm: css({ w: "8", h: "8" }),
  md: css({ w: "10", h: "10" }),
  lg: css({ w: "14", h: "14" })
};
function IconBadge({ icon, size = "md", className }) {
  return /* @__PURE__ */ jsx11("div", {
    className: cx(base, sizes[size], className),
    children: icon
  });
}
// src/components/patterns/line-chart.tsx
import { useRef } from "react";

// styled-system/tokens/index.mjs
var tokens = {
  "animations.backdrop-in": {
    value: "fade-in 250ms var(--easings-emphasized-in)",
    variable: "var(--animations-backdrop-in)"
  },
  "animations.backdrop-out": {
    value: "fade-out 200ms var(--easings-emphasized-out)",
    variable: "var(--animations-backdrop-out)"
  },
  "animations.dialog-in": {
    value: "slide-in 400ms var(--easings-emphasized-in)",
    variable: "var(--animations-dialog-in)"
  },
  "animations.dialog-out": {
    value: "slide-out 200ms var(--easings-emphasized-out)",
    variable: "var(--animations-dialog-out)"
  },
  "animations.drawer-in-left": {
    value: "slide-in-left 400ms var(--easings-emphasized-in)",
    variable: "var(--animations-drawer-in-left)"
  },
  "animations.drawer-out-left": {
    value: "slide-out-left 200ms var(--easings-emphasized-out)",
    variable: "var(--animations-drawer-out-left)"
  },
  "animations.drawer-in-right": {
    value: "slide-in-right 400ms var(--easings-emphasized-in)",
    variable: "var(--animations-drawer-in-right)"
  },
  "animations.drawer-out-right": {
    value: "slide-out-right 200ms var(--easings-emphasized-out)",
    variable: "var(--animations-drawer-out-right)"
  },
  "animations.skeleton-pulse": {
    value: "skeleton-pulse 2s var(--easings-pulse) infinite",
    variable: "var(--animations-skeleton-pulse)"
  },
  "animations.fade-in": {
    value: "fade-in 400ms var(--easings-emphasized-in)",
    variable: "var(--animations-fade-in)"
  },
  "animations.collapse-in": {
    value: "collapse-in 250ms var(--easings-emphasized-in)",
    variable: "var(--animations-collapse-in)"
  },
  "animations.collapse-out": {
    value: "collapse-out 200ms var(--easings-emphasized-out)",
    variable: "var(--animations-collapse-out)"
  },
  "animations.spin": {
    value: "spin 1s linear infinite",
    variable: "var(--animations-spin)"
  },
  "blurs.sm": {
    value: "4px",
    variable: "var(--blurs-sm)"
  },
  "blurs.base": {
    value: "8px",
    variable: "var(--blurs-base)"
  },
  "blurs.md": {
    value: "12px",
    variable: "var(--blurs-md)"
  },
  "blurs.lg": {
    value: "16px",
    variable: "var(--blurs-lg)"
  },
  "blurs.xl": {
    value: "24px",
    variable: "var(--blurs-xl)"
  },
  "blurs.2xl": {
    value: "40px",
    variable: "var(--blurs-2xl)"
  },
  "blurs.3xl": {
    value: "64px",
    variable: "var(--blurs-3xl)"
  },
  "borders.none": {
    value: "none",
    variable: "var(--borders-none)"
  },
  "durations.fastest": {
    value: "50ms",
    variable: "var(--durations-fastest)"
  },
  "durations.faster": {
    value: "100ms",
    variable: "var(--durations-faster)"
  },
  "durations.fast": {
    value: "150ms",
    variable: "var(--durations-fast)"
  },
  "durations.normal": {
    value: "200ms",
    variable: "var(--durations-normal)"
  },
  "durations.slow": {
    value: "300ms",
    variable: "var(--durations-slow)"
  },
  "durations.slower": {
    value: "400ms",
    variable: "var(--durations-slower)"
  },
  "durations.slowest": {
    value: "500ms",
    variable: "var(--durations-slowest)"
  },
  "easings.pulse": {
    value: "cubic-bezier(0.4, 0.0, 0.6, 1.0)",
    variable: "var(--easings-pulse)"
  },
  "easings.default": {
    value: "cubic-bezier(0.2, 0.0, 0, 1.0)",
    variable: "var(--easings-default)"
  },
  "easings.emphasized-in": {
    value: "cubic-bezier(0.05, 0.7, 0.1, 1.0)",
    variable: "var(--easings-emphasized-in)"
  },
  "easings.emphasized-out": {
    value: "cubic-bezier(0.3, 0.0, 0.8, 0.15)",
    variable: "var(--easings-emphasized-out)"
  },
  "fontSizes.2xs": {
    value: "0.5rem",
    variable: "var(--font-sizes-2xs)"
  },
  "fontSizes.xs": {
    value: "0.75rem",
    variable: "var(--font-sizes-xs)"
  },
  "fontSizes.sm": {
    value: "0.875rem",
    variable: "var(--font-sizes-sm)"
  },
  "fontSizes.md": {
    value: "1rem",
    variable: "var(--font-sizes-md)"
  },
  "fontSizes.lg": {
    value: "1.125rem",
    variable: "var(--font-sizes-lg)"
  },
  "fontSizes.xl": {
    value: "1.25rem",
    variable: "var(--font-sizes-xl)"
  },
  "fontSizes.2xl": {
    value: "1.5rem",
    variable: "var(--font-sizes-2xl)"
  },
  "fontSizes.3xl": {
    value: "1.875rem",
    variable: "var(--font-sizes-3xl)"
  },
  "fontSizes.4xl": {
    value: "2.25rem",
    variable: "var(--font-sizes-4xl)"
  },
  "fontSizes.5xl": {
    value: "3rem",
    variable: "var(--font-sizes-5xl)"
  },
  "fontSizes.6xl": {
    value: "3.75rem",
    variable: "var(--font-sizes-6xl)"
  },
  "fontSizes.7xl": {
    value: "4.5rem",
    variable: "var(--font-sizes-7xl)"
  },
  "fontSizes.8xl": {
    value: "6rem",
    variable: "var(--font-sizes-8xl)"
  },
  "fontSizes.9xl": {
    value: "8rem",
    variable: "var(--font-sizes-9xl)"
  },
  "fontWeights.thin": {
    value: "100",
    variable: "var(--font-weights-thin)"
  },
  "fontWeights.extralight": {
    value: "200",
    variable: "var(--font-weights-extralight)"
  },
  "fontWeights.light": {
    value: "300",
    variable: "var(--font-weights-light)"
  },
  "fontWeights.normal": {
    value: "400",
    variable: "var(--font-weights-normal)"
  },
  "fontWeights.medium": {
    value: "500",
    variable: "var(--font-weights-medium)"
  },
  "fontWeights.semibold": {
    value: "600",
    variable: "var(--font-weights-semibold)"
  },
  "fontWeights.bold": {
    value: "700",
    variable: "var(--font-weights-bold)"
  },
  "fontWeights.extrabold": {
    value: "800",
    variable: "var(--font-weights-extrabold)"
  },
  "fontWeights.black": {
    value: "900",
    variable: "var(--font-weights-black)"
  },
  "letterSpacings.tighter": {
    value: "-0.05em",
    variable: "var(--letter-spacings-tighter)"
  },
  "letterSpacings.tight": {
    value: "-0.025em",
    variable: "var(--letter-spacings-tight)"
  },
  "letterSpacings.normal": {
    value: "0em",
    variable: "var(--letter-spacings-normal)"
  },
  "letterSpacings.wide": {
    value: "0.025em",
    variable: "var(--letter-spacings-wide)"
  },
  "letterSpacings.wider": {
    value: "0.05em",
    variable: "var(--letter-spacings-wider)"
  },
  "letterSpacings.widest": {
    value: "0.1em",
    variable: "var(--letter-spacings-widest)"
  },
  "lineHeights.none": {
    value: "1",
    variable: "var(--line-heights-none)"
  },
  "lineHeights.tight": {
    value: "1.25",
    variable: "var(--line-heights-tight)"
  },
  "lineHeights.normal": {
    value: "1.5",
    variable: "var(--line-heights-normal)"
  },
  "lineHeights.relaxed": {
    value: "1.75",
    variable: "var(--line-heights-relaxed)"
  },
  "lineHeights.loose": {
    value: "2",
    variable: "var(--line-heights-loose)"
  },
  "radii.none": {
    value: "0",
    variable: "var(--radii-none)"
  },
  "radii.2xs": {
    value: "0.0625rem",
    variable: "var(--radii-2xs)"
  },
  "radii.xs": {
    value: "0.125rem",
    variable: "var(--radii-xs)"
  },
  "radii.sm": {
    value: "0.25rem",
    variable: "var(--radii-sm)"
  },
  "radii.md": {
    value: "0.375rem",
    variable: "var(--radii-md)"
  },
  "radii.lg": {
    value: "0.5rem",
    variable: "var(--radii-lg)"
  },
  "radii.xl": {
    value: "0.75rem",
    variable: "var(--radii-xl)"
  },
  "radii.2xl": {
    value: "1rem",
    variable: "var(--radii-2xl)"
  },
  "radii.3xl": {
    value: "1.5rem",
    variable: "var(--radii-3xl)"
  },
  "radii.full": {
    value: "9999px",
    variable: "var(--radii-full)"
  },
  "sizes.0": {
    value: "0rem",
    variable: "var(--sizes-0)"
  },
  "sizes.1": {
    value: "0.25rem",
    variable: "var(--sizes-1)"
  },
  "sizes.2": {
    value: "0.5rem",
    variable: "var(--sizes-2)"
  },
  "sizes.3": {
    value: "0.75rem",
    variable: "var(--sizes-3)"
  },
  "sizes.4": {
    value: "1rem",
    variable: "var(--sizes-4)"
  },
  "sizes.5": {
    value: "1.25rem",
    variable: "var(--sizes-5)"
  },
  "sizes.6": {
    value: "1.5rem",
    variable: "var(--sizes-6)"
  },
  "sizes.7": {
    value: "1.75rem",
    variable: "var(--sizes-7)"
  },
  "sizes.8": {
    value: "2rem",
    variable: "var(--sizes-8)"
  },
  "sizes.9": {
    value: "2.25rem",
    variable: "var(--sizes-9)"
  },
  "sizes.10": {
    value: "2.5rem",
    variable: "var(--sizes-10)"
  },
  "sizes.11": {
    value: "2.75rem",
    variable: "var(--sizes-11)"
  },
  "sizes.12": {
    value: "3rem",
    variable: "var(--sizes-12)"
  },
  "sizes.14": {
    value: "3.5rem",
    variable: "var(--sizes-14)"
  },
  "sizes.16": {
    value: "4rem",
    variable: "var(--sizes-16)"
  },
  "sizes.20": {
    value: "5rem",
    variable: "var(--sizes-20)"
  },
  "sizes.24": {
    value: "6rem",
    variable: "var(--sizes-24)"
  },
  "sizes.28": {
    value: "7rem",
    variable: "var(--sizes-28)"
  },
  "sizes.32": {
    value: "8rem",
    variable: "var(--sizes-32)"
  },
  "sizes.36": {
    value: "9rem",
    variable: "var(--sizes-36)"
  },
  "sizes.40": {
    value: "10rem",
    variable: "var(--sizes-40)"
  },
  "sizes.44": {
    value: "11rem",
    variable: "var(--sizes-44)"
  },
  "sizes.48": {
    value: "12rem",
    variable: "var(--sizes-48)"
  },
  "sizes.52": {
    value: "13rem",
    variable: "var(--sizes-52)"
  },
  "sizes.56": {
    value: "14rem",
    variable: "var(--sizes-56)"
  },
  "sizes.60": {
    value: "15rem",
    variable: "var(--sizes-60)"
  },
  "sizes.64": {
    value: "16rem",
    variable: "var(--sizes-64)"
  },
  "sizes.72": {
    value: "18rem",
    variable: "var(--sizes-72)"
  },
  "sizes.80": {
    value: "20rem",
    variable: "var(--sizes-80)"
  },
  "sizes.96": {
    value: "24rem",
    variable: "var(--sizes-96)"
  },
  "sizes.0.5": {
    value: "0.125rem",
    variable: "var(--sizes-0\\.5)"
  },
  "sizes.1.5": {
    value: "0.375rem",
    variable: "var(--sizes-1\\.5)"
  },
  "sizes.2.5": {
    value: "0.625rem",
    variable: "var(--sizes-2\\.5)"
  },
  "sizes.3.5": {
    value: "0.875rem",
    variable: "var(--sizes-3\\.5)"
  },
  "sizes.4.5": {
    value: "1.125rem",
    variable: "var(--sizes-4\\.5)"
  },
  "sizes.2xs": {
    value: "16rem",
    variable: "var(--sizes-2xs)"
  },
  "sizes.xs": {
    value: "20rem",
    variable: "var(--sizes-xs)"
  },
  "sizes.sm": {
    value: "24rem",
    variable: "var(--sizes-sm)"
  },
  "sizes.md": {
    value: "28rem",
    variable: "var(--sizes-md)"
  },
  "sizes.lg": {
    value: "32rem",
    variable: "var(--sizes-lg)"
  },
  "sizes.xl": {
    value: "36rem",
    variable: "var(--sizes-xl)"
  },
  "sizes.2xl": {
    value: "42rem",
    variable: "var(--sizes-2xl)"
  },
  "sizes.3xl": {
    value: "48rem",
    variable: "var(--sizes-3xl)"
  },
  "sizes.4xl": {
    value: "56rem",
    variable: "var(--sizes-4xl)"
  },
  "sizes.5xl": {
    value: "64rem",
    variable: "var(--sizes-5xl)"
  },
  "sizes.6xl": {
    value: "72rem",
    variable: "var(--sizes-6xl)"
  },
  "sizes.7xl": {
    value: "80rem",
    variable: "var(--sizes-7xl)"
  },
  "sizes.8xl": {
    value: "90rem",
    variable: "var(--sizes-8xl)"
  },
  "sizes.full": {
    value: "100%",
    variable: "var(--sizes-full)"
  },
  "sizes.min": {
    value: "min-content",
    variable: "var(--sizes-min)"
  },
  "sizes.max": {
    value: "max-content",
    variable: "var(--sizes-max)"
  },
  "sizes.fit": {
    value: "fit-content",
    variable: "var(--sizes-fit)"
  },
  "sizes.breakpoint-sm": {
    value: "640px",
    variable: "var(--sizes-breakpoint-sm)"
  },
  "sizes.breakpoint-md": {
    value: "768px",
    variable: "var(--sizes-breakpoint-md)"
  },
  "sizes.breakpoint-lg": {
    value: "1024px",
    variable: "var(--sizes-breakpoint-lg)"
  },
  "sizes.breakpoint-xl": {
    value: "1280px",
    variable: "var(--sizes-breakpoint-xl)"
  },
  "sizes.breakpoint-2xl": {
    value: "1536px",
    variable: "var(--sizes-breakpoint-2xl)"
  },
  "spacing.0": {
    value: "0rem",
    variable: "var(--spacing-0)"
  },
  "spacing.1": {
    value: "0.25rem",
    variable: "var(--spacing-1)"
  },
  "spacing.2": {
    value: "0.5rem",
    variable: "var(--spacing-2)"
  },
  "spacing.3": {
    value: "0.75rem",
    variable: "var(--spacing-3)"
  },
  "spacing.4": {
    value: "1rem",
    variable: "var(--spacing-4)"
  },
  "spacing.5": {
    value: "1.25rem",
    variable: "var(--spacing-5)"
  },
  "spacing.6": {
    value: "1.5rem",
    variable: "var(--spacing-6)"
  },
  "spacing.7": {
    value: "1.75rem",
    variable: "var(--spacing-7)"
  },
  "spacing.8": {
    value: "2rem",
    variable: "var(--spacing-8)"
  },
  "spacing.9": {
    value: "2.25rem",
    variable: "var(--spacing-9)"
  },
  "spacing.10": {
    value: "2.5rem",
    variable: "var(--spacing-10)"
  },
  "spacing.11": {
    value: "2.75rem",
    variable: "var(--spacing-11)"
  },
  "spacing.12": {
    value: "3rem",
    variable: "var(--spacing-12)"
  },
  "spacing.14": {
    value: "3.5rem",
    variable: "var(--spacing-14)"
  },
  "spacing.16": {
    value: "4rem",
    variable: "var(--spacing-16)"
  },
  "spacing.20": {
    value: "5rem",
    variable: "var(--spacing-20)"
  },
  "spacing.24": {
    value: "6rem",
    variable: "var(--spacing-24)"
  },
  "spacing.28": {
    value: "7rem",
    variable: "var(--spacing-28)"
  },
  "spacing.32": {
    value: "8rem",
    variable: "var(--spacing-32)"
  },
  "spacing.36": {
    value: "9rem",
    variable: "var(--spacing-36)"
  },
  "spacing.40": {
    value: "10rem",
    variable: "var(--spacing-40)"
  },
  "spacing.44": {
    value: "11rem",
    variable: "var(--spacing-44)"
  },
  "spacing.48": {
    value: "12rem",
    variable: "var(--spacing-48)"
  },
  "spacing.52": {
    value: "13rem",
    variable: "var(--spacing-52)"
  },
  "spacing.56": {
    value: "14rem",
    variable: "var(--spacing-56)"
  },
  "spacing.60": {
    value: "15rem",
    variable: "var(--spacing-60)"
  },
  "spacing.64": {
    value: "16rem",
    variable: "var(--spacing-64)"
  },
  "spacing.72": {
    value: "18rem",
    variable: "var(--spacing-72)"
  },
  "spacing.80": {
    value: "20rem",
    variable: "var(--spacing-80)"
  },
  "spacing.96": {
    value: "24rem",
    variable: "var(--spacing-96)"
  },
  "spacing.0.5": {
    value: "0.125rem",
    variable: "var(--spacing-0\\.5)"
  },
  "spacing.1.5": {
    value: "0.375rem",
    variable: "var(--spacing-1\\.5)"
  },
  "spacing.2.5": {
    value: "0.625rem",
    variable: "var(--spacing-2\\.5)"
  },
  "spacing.3.5": {
    value: "0.875rem",
    variable: "var(--spacing-3\\.5)"
  },
  "spacing.4.5": {
    value: "1.125rem",
    variable: "var(--spacing-4\\.5)"
  },
  "zIndex.hide": {
    value: -1,
    variable: "var(--z-index-hide)"
  },
  "zIndex.base": {
    value: 0,
    variable: "var(--z-index-base)"
  },
  "zIndex.docked": {
    value: 10,
    variable: "var(--z-index-docked)"
  },
  "zIndex.dropdown": {
    value: 1000,
    variable: "var(--z-index-dropdown)"
  },
  "zIndex.sticky": {
    value: 1100,
    variable: "var(--z-index-sticky)"
  },
  "zIndex.banner": {
    value: 1200,
    variable: "var(--z-index-banner)"
  },
  "zIndex.overlay": {
    value: 1300,
    variable: "var(--z-index-overlay)"
  },
  "zIndex.modal": {
    value: 1400,
    variable: "var(--z-index-modal)"
  },
  "zIndex.popover": {
    value: 1500,
    variable: "var(--z-index-popover)"
  },
  "zIndex.skipLink": {
    value: 1600,
    variable: "var(--z-index-skip-link)"
  },
  "zIndex.toast": {
    value: 1700,
    variable: "var(--z-index-toast)"
  },
  "zIndex.tooltip": {
    value: 1800,
    variable: "var(--z-index-tooltip)"
  },
  "fonts.sans": {
    value: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    variable: "var(--fonts-sans)"
  },
  "fonts.serif": {
    value: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    variable: "var(--fonts-serif)"
  },
  "fonts.body": {
    value: '"Graphik", "Satoshi", sans-serif',
    variable: "var(--fonts-body)"
  },
  "fonts.display": {
    value: '"Satoshi", "Graphik", sans-serif',
    variable: "var(--fonts-display)"
  },
  "fonts.mono": {
    value: '"JetBrains Mono", "Consolas", monospace',
    variable: "var(--fonts-mono)"
  },
  "colors.current": {
    value: "currentColor",
    variable: "var(--colors-current)"
  },
  "colors.black": {
    value: "#000000",
    variable: "var(--colors-black)"
  },
  "colors.black.a1": {
    value: "rgba(0, 0, 0, 0.05)",
    variable: "var(--colors-black-a1)"
  },
  "colors.black.a2": {
    value: "rgba(0, 0, 0, 0.1)",
    variable: "var(--colors-black-a2)"
  },
  "colors.black.a3": {
    value: "rgba(0, 0, 0, 0.15)",
    variable: "var(--colors-black-a3)"
  },
  "colors.black.a4": {
    value: "rgba(0, 0, 0, 0.2)",
    variable: "var(--colors-black-a4)"
  },
  "colors.black.a5": {
    value: "rgba(0, 0, 0, 0.3)",
    variable: "var(--colors-black-a5)"
  },
  "colors.black.a6": {
    value: "rgba(0, 0, 0, 0.4)",
    variable: "var(--colors-black-a6)"
  },
  "colors.black.a7": {
    value: "rgba(0, 0, 0, 0.5)",
    variable: "var(--colors-black-a7)"
  },
  "colors.black.a8": {
    value: "rgba(0, 0, 0, 0.6)",
    variable: "var(--colors-black-a8)"
  },
  "colors.black.a9": {
    value: "rgba(0, 0, 0, 0.7)",
    variable: "var(--colors-black-a9)"
  },
  "colors.black.a10": {
    value: "rgba(0, 0, 0, 0.8)",
    variable: "var(--colors-black-a10)"
  },
  "colors.black.a11": {
    value: "rgba(0, 0, 0, 0.9)",
    variable: "var(--colors-black-a11)"
  },
  "colors.black.a12": {
    value: "rgba(0, 0, 0, 0.95)",
    variable: "var(--colors-black-a12)"
  },
  "colors.white": {
    value: "#ffffff",
    variable: "var(--colors-white)"
  },
  "colors.white.a1": {
    value: "rgba(255, 255, 255, 0.05)",
    variable: "var(--colors-white-a1)"
  },
  "colors.white.a2": {
    value: "rgba(255, 255, 255, 0.1)",
    variable: "var(--colors-white-a2)"
  },
  "colors.white.a3": {
    value: "rgba(255, 255, 255, 0.15)",
    variable: "var(--colors-white-a3)"
  },
  "colors.white.a4": {
    value: "rgba(255, 255, 255, 0.2)",
    variable: "var(--colors-white-a4)"
  },
  "colors.white.a5": {
    value: "rgba(255, 255, 255, 0.3)",
    variable: "var(--colors-white-a5)"
  },
  "colors.white.a6": {
    value: "rgba(255, 255, 255, 0.4)",
    variable: "var(--colors-white-a6)"
  },
  "colors.white.a7": {
    value: "rgba(255, 255, 255, 0.5)",
    variable: "var(--colors-white-a7)"
  },
  "colors.white.a8": {
    value: "rgba(255, 255, 255, 0.6)",
    variable: "var(--colors-white-a8)"
  },
  "colors.white.a9": {
    value: "rgba(255, 255, 255, 0.7)",
    variable: "var(--colors-white-a9)"
  },
  "colors.white.a10": {
    value: "rgba(255, 255, 255, 0.8)",
    variable: "var(--colors-white-a10)"
  },
  "colors.white.a11": {
    value: "rgba(255, 255, 255, 0.9)",
    variable: "var(--colors-white-a11)"
  },
  "colors.white.a12": {
    value: "rgba(255, 255, 255, 0.95)",
    variable: "var(--colors-white-a12)"
  },
  "colors.transparent": {
    value: "rgb(0 0 0 / 0)",
    variable: "var(--colors-transparent)"
  },
  "colors.red.light.1": {
    value: "#fffcfc",
    variable: "var(--colors-red-light-1)"
  },
  "colors.red.light.2": {
    value: "#fff7f7",
    variable: "var(--colors-red-light-2)"
  },
  "colors.red.light.3": {
    value: "#feebec",
    variable: "var(--colors-red-light-3)"
  },
  "colors.red.light.4": {
    value: "#ffdbdc",
    variable: "var(--colors-red-light-4)"
  },
  "colors.red.light.5": {
    value: "#ffcdce",
    variable: "var(--colors-red-light-5)"
  },
  "colors.red.light.6": {
    value: "#fdbdbe",
    variable: "var(--colors-red-light-6)"
  },
  "colors.red.light.7": {
    value: "#f4a9aa",
    variable: "var(--colors-red-light-7)"
  },
  "colors.red.light.8": {
    value: "#eb8e90",
    variable: "var(--colors-red-light-8)"
  },
  "colors.red.light.9": {
    value: "#e5484d",
    variable: "var(--colors-red-light-9)"
  },
  "colors.red.light.10": {
    value: "#dc3e42",
    variable: "var(--colors-red-light-10)"
  },
  "colors.red.light.11": {
    value: "#ce2c31",
    variable: "var(--colors-red-light-11)"
  },
  "colors.red.light.12": {
    value: "#641723",
    variable: "var(--colors-red-light-12)"
  },
  "colors.red.light.a1": {
    value: "#ff000003",
    variable: "var(--colors-red-light-a1)"
  },
  "colors.red.light.a2": {
    value: "#ff000008",
    variable: "var(--colors-red-light-a2)"
  },
  "colors.red.light.a3": {
    value: "#f3000d14",
    variable: "var(--colors-red-light-a3)"
  },
  "colors.red.light.a4": {
    value: "#ff000824",
    variable: "var(--colors-red-light-a4)"
  },
  "colors.red.light.a5": {
    value: "#ff000632",
    variable: "var(--colors-red-light-a5)"
  },
  "colors.red.light.a6": {
    value: "#f8000442",
    variable: "var(--colors-red-light-a6)"
  },
  "colors.red.light.a7": {
    value: "#df000356",
    variable: "var(--colors-red-light-a7)"
  },
  "colors.red.light.a8": {
    value: "#d2000571",
    variable: "var(--colors-red-light-a8)"
  },
  "colors.red.light.a9": {
    value: "#db0007b7",
    variable: "var(--colors-red-light-a9)"
  },
  "colors.red.light.a10": {
    value: "#d10005c1",
    variable: "var(--colors-red-light-a10)"
  },
  "colors.red.light.a11": {
    value: "#c40006d3",
    variable: "var(--colors-red-light-a11)"
  },
  "colors.red.light.a12": {
    value: "#55000de8",
    variable: "var(--colors-red-light-a12)"
  },
  "colors.red.dark.1": {
    value: "#191111",
    variable: "var(--colors-red-dark-1)"
  },
  "colors.red.dark.2": {
    value: "#201314",
    variable: "var(--colors-red-dark-2)"
  },
  "colors.red.dark.3": {
    value: "#3b1219",
    variable: "var(--colors-red-dark-3)"
  },
  "colors.red.dark.4": {
    value: "#500f1c",
    variable: "var(--colors-red-dark-4)"
  },
  "colors.red.dark.5": {
    value: "#611623",
    variable: "var(--colors-red-dark-5)"
  },
  "colors.red.dark.6": {
    value: "#72232d",
    variable: "var(--colors-red-dark-6)"
  },
  "colors.red.dark.7": {
    value: "#8c333a",
    variable: "var(--colors-red-dark-7)"
  },
  "colors.red.dark.8": {
    value: "#b54548",
    variable: "var(--colors-red-dark-8)"
  },
  "colors.red.dark.9": {
    value: "#e5484d",
    variable: "var(--colors-red-dark-9)"
  },
  "colors.red.dark.10": {
    value: "#ec5d5e",
    variable: "var(--colors-red-dark-10)"
  },
  "colors.red.dark.11": {
    value: "#ff9592",
    variable: "var(--colors-red-dark-11)"
  },
  "colors.red.dark.12": {
    value: "#ffd1d9",
    variable: "var(--colors-red-dark-12)"
  },
  "colors.red.dark.a1": {
    value: "#f4121209",
    variable: "var(--colors-red-dark-a1)"
  },
  "colors.red.dark.a2": {
    value: "#f22f3e11",
    variable: "var(--colors-red-dark-a2)"
  },
  "colors.red.dark.a3": {
    value: "#ff173f2d",
    variable: "var(--colors-red-dark-a3)"
  },
  "colors.red.dark.a4": {
    value: "#fe0a3b44",
    variable: "var(--colors-red-dark-a4)"
  },
  "colors.red.dark.a5": {
    value: "#ff204756",
    variable: "var(--colors-red-dark-a5)"
  },
  "colors.red.dark.a6": {
    value: "#ff3e5668",
    variable: "var(--colors-red-dark-a6)"
  },
  "colors.red.dark.a7": {
    value: "#ff536184",
    variable: "var(--colors-red-dark-a7)"
  },
  "colors.red.dark.a8": {
    value: "#ff5d61b0",
    variable: "var(--colors-red-dark-a8)"
  },
  "colors.red.dark.a9": {
    value: "#fe4e54e4",
    variable: "var(--colors-red-dark-a9)"
  },
  "colors.red.dark.a10": {
    value: "#ff6465eb",
    variable: "var(--colors-red-dark-a10)"
  },
  "colors.red.dark.a11": {
    value: "#ff9592",
    variable: "var(--colors-red-dark-a11)"
  },
  "colors.red.dark.a12": {
    value: "#ffd1d9",
    variable: "var(--colors-red-dark-a12)"
  },
  "colors.gray.light.1": {
    value: "#fdfdfc",
    variable: "var(--colors-gray-light-1)"
  },
  "colors.gray.light.2": {
    value: "#f9f9f8",
    variable: "var(--colors-gray-light-2)"
  },
  "colors.gray.light.3": {
    value: "#f1f0ef",
    variable: "var(--colors-gray-light-3)"
  },
  "colors.gray.light.4": {
    value: "#e9e8e6",
    variable: "var(--colors-gray-light-4)"
  },
  "colors.gray.light.5": {
    value: "#e2e1de",
    variable: "var(--colors-gray-light-5)"
  },
  "colors.gray.light.6": {
    value: "#d9d8d5",
    variable: "var(--colors-gray-light-6)"
  },
  "colors.gray.light.7": {
    value: "#cfceca",
    variable: "var(--colors-gray-light-7)"
  },
  "colors.gray.light.8": {
    value: "#bcbbb5",
    variable: "var(--colors-gray-light-8)"
  },
  "colors.gray.light.9": {
    value: "#8d8d86",
    variable: "var(--colors-gray-light-9)"
  },
  "colors.gray.light.10": {
    value: "#82827c",
    variable: "var(--colors-gray-light-10)"
  },
  "colors.gray.light.11": {
    value: "#63635e",
    variable: "var(--colors-gray-light-11)"
  },
  "colors.gray.light.12": {
    value: "#21201c",
    variable: "var(--colors-gray-light-12)"
  },
  "colors.gray.light.a1": {
    value: "rgba(85, 85, 0, 0.01)",
    variable: "var(--colors-gray-light-a1)"
  },
  "colors.gray.light.a2": {
    value: "rgba(85, 85, 0, 0.03)",
    variable: "var(--colors-gray-light-a2)"
  },
  "colors.gray.light.a3": {
    value: "rgba(75, 65, 0, 0.06)",
    variable: "var(--colors-gray-light-a3)"
  },
  "colors.gray.light.a4": {
    value: "rgba(65, 55, 0, 0.10)",
    variable: "var(--colors-gray-light-a4)"
  },
  "colors.gray.light.a5": {
    value: "rgba(60, 50, 0, 0.13)",
    variable: "var(--colors-gray-light-a5)"
  },
  "colors.gray.light.a6": {
    value: "rgba(55, 45, 0, 0.17)",
    variable: "var(--colors-gray-light-a6)"
  },
  "colors.gray.light.a7": {
    value: "rgba(50, 40, 0, 0.21)",
    variable: "var(--colors-gray-light-a7)"
  },
  "colors.gray.light.a8": {
    value: "rgba(45, 40, 0, 0.29)",
    variable: "var(--colors-gray-light-a8)"
  },
  "colors.gray.light.a9": {
    value: "rgba(30, 30, 0, 0.48)",
    variable: "var(--colors-gray-light-a9)"
  },
  "colors.gray.light.a10": {
    value: "rgba(25, 25, 0, 0.51)",
    variable: "var(--colors-gray-light-a10)"
  },
  "colors.gray.light.a11": {
    value: "rgba(15, 15, 0, 0.63)",
    variable: "var(--colors-gray-light-a11)"
  },
  "colors.gray.light.a12": {
    value: "rgba(5, 5, 0, 0.89)",
    variable: "var(--colors-gray-light-a12)"
  },
  "colors.gray.dark.1": {
    value: "#081618",
    variable: "var(--colors-gray-dark-1)"
  },
  "colors.gray.dark.2": {
    value: "#1a2e30",
    variable: "var(--colors-gray-dark-2)"
  },
  "colors.gray.dark.3": {
    value: "#1e3538",
    variable: "var(--colors-gray-dark-3)"
  },
  "colors.gray.dark.4": {
    value: "#223e42",
    variable: "var(--colors-gray-dark-4)"
  },
  "colors.gray.dark.5": {
    value: "#2a4a50",
    variable: "var(--colors-gray-dark-5)"
  },
  "colors.gray.dark.6": {
    value: "#305558",
    variable: "var(--colors-gray-dark-6)"
  },
  "colors.gray.dark.7": {
    value: "#345c62",
    variable: "var(--colors-gray-dark-7)"
  },
  "colors.gray.dark.8": {
    value: "#4a7a82",
    variable: "var(--colors-gray-dark-8)"
  },
  "colors.gray.dark.9": {
    value: "#5a9aa4",
    variable: "var(--colors-gray-dark-9)"
  },
  "colors.gray.dark.10": {
    value: "#6eb0ba",
    variable: "var(--colors-gray-dark-10)"
  },
  "colors.gray.dark.11": {
    value: "#a0d8e0",
    variable: "var(--colors-gray-dark-11)"
  },
  "colors.gray.dark.12": {
    value: "#e1fdff",
    variable: "var(--colors-gray-dark-12)"
  },
  "colors.gray.dark.a1": {
    value: "rgba(0, 0, 0, 0)",
    variable: "var(--colors-gray-dark-a1)"
  },
  "colors.gray.dark.a2": {
    value: "rgba(0, 200, 220, 0.06)",
    variable: "var(--colors-gray-dark-a2)"
  },
  "colors.gray.dark.a3": {
    value: "rgba(0, 200, 220, 0.10)",
    variable: "var(--colors-gray-dark-a3)"
  },
  "colors.gray.dark.a4": {
    value: "rgba(0, 200, 220, 0.14)",
    variable: "var(--colors-gray-dark-a4)"
  },
  "colors.gray.dark.a5": {
    value: "rgba(0, 200, 220, 0.18)",
    variable: "var(--colors-gray-dark-a5)"
  },
  "colors.gray.dark.a6": {
    value: "rgba(0, 200, 220, 0.24)",
    variable: "var(--colors-gray-dark-a6)"
  },
  "colors.gray.dark.a7": {
    value: "rgba(0, 200, 220, 0.30)",
    variable: "var(--colors-gray-dark-a7)"
  },
  "colors.gray.dark.a8": {
    value: "rgba(0, 200, 220, 0.40)",
    variable: "var(--colors-gray-dark-a8)"
  },
  "colors.gray.dark.a9": {
    value: "rgba(0, 200, 220, 0.50)",
    variable: "var(--colors-gray-dark-a9)"
  },
  "colors.gray.dark.a10": {
    value: "rgba(0, 200, 220, 0.56)",
    variable: "var(--colors-gray-dark-a10)"
  },
  "colors.gray.dark.a11": {
    value: "rgba(0, 220, 240, 0.78)",
    variable: "var(--colors-gray-dark-a11)"
  },
  "colors.gray.dark.a12": {
    value: "rgba(225, 253, 255, 0.93)",
    variable: "var(--colors-gray-dark-a12)"
  },
  "colors.teal.light.1": {
    value: "#F2F8F8",
    variable: "var(--colors-teal-light-1)"
  },
  "colors.teal.light.2": {
    value: "#E5F0F1",
    variable: "var(--colors-teal-light-2)"
  },
  "colors.teal.light.3": {
    value: "#D4E6E8",
    variable: "var(--colors-teal-light-3)"
  },
  "colors.teal.light.4": {
    value: "#C0DBDD",
    variable: "var(--colors-teal-light-4)"
  },
  "colors.teal.light.5": {
    value: "#A8CDD0",
    variable: "var(--colors-teal-light-5)"
  },
  "colors.teal.light.6": {
    value: "#8FBDC0",
    variable: "var(--colors-teal-light-6)"
  },
  "colors.teal.light.7": {
    value: "#7AABAF",
    variable: "var(--colors-teal-light-7)"
  },
  "colors.teal.light.8": {
    value: "#5E9398",
    variable: "var(--colors-teal-light-8)"
  },
  "colors.teal.light.9": {
    value: "#4A7D82",
    variable: "var(--colors-teal-light-9)"
  },
  "colors.teal.light.10": {
    value: "#336569",
    variable: "var(--colors-teal-light-10)"
  },
  "colors.teal.light.11": {
    value: "#2A4F54",
    variable: "var(--colors-teal-light-11)"
  },
  "colors.teal.light.12": {
    value: "#1A3D42",
    variable: "var(--colors-teal-light-12)"
  },
  "colors.teal.light.a1": {
    value: "rgba(26, 61, 66, 0.02)",
    variable: "var(--colors-teal-light-a1)"
  },
  "colors.teal.light.a2": {
    value: "rgba(26, 61, 66, 0.06)",
    variable: "var(--colors-teal-light-a2)"
  },
  "colors.teal.light.a3": {
    value: "rgba(26, 61, 66, 0.12)",
    variable: "var(--colors-teal-light-a3)"
  },
  "colors.teal.light.a4": {
    value: "rgba(26, 61, 66, 0.20)",
    variable: "var(--colors-teal-light-a4)"
  },
  "colors.teal.light.a5": {
    value: "rgba(26, 61, 66, 0.30)",
    variable: "var(--colors-teal-light-a5)"
  },
  "colors.teal.light.a6": {
    value: "rgba(26, 61, 66, 0.42)",
    variable: "var(--colors-teal-light-a6)"
  },
  "colors.teal.light.a7": {
    value: "rgba(26, 61, 66, 0.52)",
    variable: "var(--colors-teal-light-a7)"
  },
  "colors.teal.light.a8": {
    value: "rgba(26, 61, 66, 0.65)",
    variable: "var(--colors-teal-light-a8)"
  },
  "colors.teal.light.a9": {
    value: "rgba(26, 61, 66, 0.75)",
    variable: "var(--colors-teal-light-a9)"
  },
  "colors.teal.light.a10": {
    value: "rgba(26, 61, 66, 0.82)",
    variable: "var(--colors-teal-light-a10)"
  },
  "colors.teal.light.a11": {
    value: "rgba(26, 61, 66, 0.88)",
    variable: "var(--colors-teal-light-a11)"
  },
  "colors.teal.light.a12": {
    value: "rgba(26, 61, 66, 0.95)",
    variable: "var(--colors-teal-light-a12)"
  },
  "colors.teal.dark.1": {
    value: "#061214",
    variable: "var(--colors-teal-dark-1)"
  },
  "colors.teal.dark.2": {
    value: "#0b1d20",
    variable: "var(--colors-teal-dark-2)"
  },
  "colors.teal.dark.3": {
    value: "#12292d",
    variable: "var(--colors-teal-dark-3)"
  },
  "colors.teal.dark.4": {
    value: "#1a363b",
    variable: "var(--colors-teal-dark-4)"
  },
  "colors.teal.dark.5": {
    value: "#23444a",
    variable: "var(--colors-teal-dark-5)"
  },
  "colors.teal.dark.6": {
    value: "#2e555c",
    variable: "var(--colors-teal-dark-6)"
  },
  "colors.teal.dark.7": {
    value: "#3d6f78",
    variable: "var(--colors-teal-dark-7)"
  },
  "colors.teal.dark.8": {
    value: "#508d97",
    variable: "var(--colors-teal-dark-8)"
  },
  "colors.teal.dark.9": {
    value: "#5ab8c1",
    variable: "var(--colors-teal-dark-9)"
  },
  "colors.teal.dark.10": {
    value: "#7eccd3",
    variable: "var(--colors-teal-dark-10)"
  },
  "colors.teal.dark.11": {
    value: "#a3dde2",
    variable: "var(--colors-teal-dark-11)"
  },
  "colors.teal.dark.12": {
    value: "#e3f5f7",
    variable: "var(--colors-teal-dark-12)"
  },
  "colors.teal.dark.a1": {
    value: "rgba(90, 184, 193, 0.02)",
    variable: "var(--colors-teal-dark-a1)"
  },
  "colors.teal.dark.a2": {
    value: "rgba(90, 184, 193, 0.06)",
    variable: "var(--colors-teal-dark-a2)"
  },
  "colors.teal.dark.a3": {
    value: "rgba(90, 184, 193, 0.12)",
    variable: "var(--colors-teal-dark-a3)"
  },
  "colors.teal.dark.a4": {
    value: "rgba(90, 184, 193, 0.18)",
    variable: "var(--colors-teal-dark-a4)"
  },
  "colors.teal.dark.a5": {
    value: "rgba(90, 184, 193, 0.24)",
    variable: "var(--colors-teal-dark-a5)"
  },
  "colors.teal.dark.a6": {
    value: "rgba(90, 184, 193, 0.32)",
    variable: "var(--colors-teal-dark-a6)"
  },
  "colors.teal.dark.a7": {
    value: "rgba(90, 184, 193, 0.44)",
    variable: "var(--colors-teal-dark-a7)"
  },
  "colors.teal.dark.a8": {
    value: "rgba(90, 184, 193, 0.58)",
    variable: "var(--colors-teal-dark-a8)"
  },
  "colors.teal.dark.a9": {
    value: "rgba(90, 184, 193, 0.75)",
    variable: "var(--colors-teal-dark-a9)"
  },
  "colors.teal.dark.a10": {
    value: "rgba(90, 184, 193, 0.82)",
    variable: "var(--colors-teal-dark-a10)"
  },
  "colors.teal.dark.a11": {
    value: "rgba(90, 184, 193, 0.88)",
    variable: "var(--colors-teal-dark-a11)"
  },
  "colors.teal.dark.a12": {
    value: "rgba(227, 245, 247, 0.95)",
    variable: "var(--colors-teal-dark-a12)"
  },
  "colors.wheat.light.1": {
    value: "#fefcf8",
    variable: "var(--colors-wheat-light-1)"
  },
  "colors.wheat.light.2": {
    value: "#fdf5eb",
    variable: "var(--colors-wheat-light-2)"
  },
  "colors.wheat.light.3": {
    value: "#faecd6",
    variable: "var(--colors-wheat-light-3)"
  },
  "colors.wheat.light.4": {
    value: "#f5dfc0",
    variable: "var(--colors-wheat-light-4)"
  },
  "colors.wheat.light.5": {
    value: "#f0d2ab",
    variable: "var(--colors-wheat-light-5)"
  },
  "colors.wheat.light.6": {
    value: "#e6b685",
    variable: "var(--colors-wheat-light-6)"
  },
  "colors.wheat.light.7": {
    value: "#d4a070",
    variable: "var(--colors-wheat-light-7)"
  },
  "colors.wheat.light.8": {
    value: "#c28a5b",
    variable: "var(--colors-wheat-light-8)"
  },
  "colors.wheat.light.9": {
    value: "#e6b685",
    variable: "var(--colors-wheat-light-9)"
  },
  "colors.wheat.light.10": {
    value: "#d4a070",
    variable: "var(--colors-wheat-light-10)"
  },
  "colors.wheat.light.11": {
    value: "#8b6c44",
    variable: "var(--colors-wheat-light-11)"
  },
  "colors.wheat.light.12": {
    value: "#5c3d1e",
    variable: "var(--colors-wheat-light-12)"
  },
  "colors.wheat.dark.1": {
    value: "#1a1410",
    variable: "var(--colors-wheat-dark-1)"
  },
  "colors.wheat.dark.2": {
    value: "#261e16",
    variable: "var(--colors-wheat-dark-2)"
  },
  "colors.wheat.dark.3": {
    value: "#352a1e",
    variable: "var(--colors-wheat-dark-3)"
  },
  "colors.wheat.dark.4": {
    value: "#443626",
    variable: "var(--colors-wheat-dark-4)"
  },
  "colors.wheat.dark.5": {
    value: "#54432f",
    variable: "var(--colors-wheat-dark-5)"
  },
  "colors.wheat.dark.6": {
    value: "#6b5539",
    variable: "var(--colors-wheat-dark-6)"
  },
  "colors.wheat.dark.7": {
    value: "#8b6c44",
    variable: "var(--colors-wheat-dark-7)"
  },
  "colors.wheat.dark.8": {
    value: "#b08a5a",
    variable: "var(--colors-wheat-dark-8)"
  },
  "colors.wheat.dark.9": {
    value: "#e6b685",
    variable: "var(--colors-wheat-dark-9)"
  },
  "colors.wheat.dark.10": {
    value: "#f0c898",
    variable: "var(--colors-wheat-dark-10)"
  },
  "colors.wheat.dark.11": {
    value: "#f5dfc0",
    variable: "var(--colors-wheat-dark-11)"
  },
  "colors.wheat.dark.12": {
    value: "#fdf5eb",
    variable: "var(--colors-wheat-dark-12)"
  },
  "breakpoints.sm": {
    value: "640px",
    variable: "var(--breakpoints-sm)"
  },
  "breakpoints.md": {
    value: "768px",
    variable: "var(--breakpoints-md)"
  },
  "breakpoints.lg": {
    value: "1024px",
    variable: "var(--breakpoints-lg)"
  },
  "breakpoints.xl": {
    value: "1280px",
    variable: "var(--breakpoints-xl)"
  },
  "breakpoints.2xl": {
    value: "1536px",
    variable: "var(--breakpoints-2xl)"
  },
  "radii.l1": {
    value: "var(--radii-xs)",
    variable: "var(--radii-l1)"
  },
  "radii.l2": {
    value: "var(--radii-sm)",
    variable: "var(--radii-l2)"
  },
  "radii.l3": {
    value: "var(--radii-md)",
    variable: "var(--radii-l3)"
  },
  "spacing.-1": {
    value: "calc(var(--spacing-1) * -1)",
    variable: "var(--spacing-1)"
  },
  "spacing.-2": {
    value: "calc(var(--spacing-2) * -1)",
    variable: "var(--spacing-2)"
  },
  "spacing.-3": {
    value: "calc(var(--spacing-3) * -1)",
    variable: "var(--spacing-3)"
  },
  "spacing.-4": {
    value: "calc(var(--spacing-4) * -1)",
    variable: "var(--spacing-4)"
  },
  "spacing.-5": {
    value: "calc(var(--spacing-5) * -1)",
    variable: "var(--spacing-5)"
  },
  "spacing.-6": {
    value: "calc(var(--spacing-6) * -1)",
    variable: "var(--spacing-6)"
  },
  "spacing.-7": {
    value: "calc(var(--spacing-7) * -1)",
    variable: "var(--spacing-7)"
  },
  "spacing.-8": {
    value: "calc(var(--spacing-8) * -1)",
    variable: "var(--spacing-8)"
  },
  "spacing.-9": {
    value: "calc(var(--spacing-9) * -1)",
    variable: "var(--spacing-9)"
  },
  "spacing.-10": {
    value: "calc(var(--spacing-10) * -1)",
    variable: "var(--spacing-10)"
  },
  "spacing.-11": {
    value: "calc(var(--spacing-11) * -1)",
    variable: "var(--spacing-11)"
  },
  "spacing.-12": {
    value: "calc(var(--spacing-12) * -1)",
    variable: "var(--spacing-12)"
  },
  "spacing.-14": {
    value: "calc(var(--spacing-14) * -1)",
    variable: "var(--spacing-14)"
  },
  "spacing.-16": {
    value: "calc(var(--spacing-16) * -1)",
    variable: "var(--spacing-16)"
  },
  "spacing.-20": {
    value: "calc(var(--spacing-20) * -1)",
    variable: "var(--spacing-20)"
  },
  "spacing.-24": {
    value: "calc(var(--spacing-24) * -1)",
    variable: "var(--spacing-24)"
  },
  "spacing.-28": {
    value: "calc(var(--spacing-28) * -1)",
    variable: "var(--spacing-28)"
  },
  "spacing.-32": {
    value: "calc(var(--spacing-32) * -1)",
    variable: "var(--spacing-32)"
  },
  "spacing.-36": {
    value: "calc(var(--spacing-36) * -1)",
    variable: "var(--spacing-36)"
  },
  "spacing.-40": {
    value: "calc(var(--spacing-40) * -1)",
    variable: "var(--spacing-40)"
  },
  "spacing.-44": {
    value: "calc(var(--spacing-44) * -1)",
    variable: "var(--spacing-44)"
  },
  "spacing.-48": {
    value: "calc(var(--spacing-48) * -1)",
    variable: "var(--spacing-48)"
  },
  "spacing.-52": {
    value: "calc(var(--spacing-52) * -1)",
    variable: "var(--spacing-52)"
  },
  "spacing.-56": {
    value: "calc(var(--spacing-56) * -1)",
    variable: "var(--spacing-56)"
  },
  "spacing.-60": {
    value: "calc(var(--spacing-60) * -1)",
    variable: "var(--spacing-60)"
  },
  "spacing.-64": {
    value: "calc(var(--spacing-64) * -1)",
    variable: "var(--spacing-64)"
  },
  "spacing.-72": {
    value: "calc(var(--spacing-72) * -1)",
    variable: "var(--spacing-72)"
  },
  "spacing.-80": {
    value: "calc(var(--spacing-80) * -1)",
    variable: "var(--spacing-80)"
  },
  "spacing.-96": {
    value: "calc(var(--spacing-96) * -1)",
    variable: "var(--spacing-96)"
  },
  "spacing.-0.5": {
    value: "calc(var(--spacing-0\\.5) * -1)",
    variable: "var(--spacing-0\\.5)"
  },
  "spacing.-1.5": {
    value: "calc(var(--spacing-1\\.5) * -1)",
    variable: "var(--spacing-1\\.5)"
  },
  "spacing.-2.5": {
    value: "calc(var(--spacing-2\\.5) * -1)",
    variable: "var(--spacing-2\\.5)"
  },
  "spacing.-3.5": {
    value: "calc(var(--spacing-3\\.5) * -1)",
    variable: "var(--spacing-3\\.5)"
  },
  "spacing.-4.5": {
    value: "calc(var(--spacing-4\\.5) * -1)",
    variable: "var(--spacing-4\\.5)"
  },
  "shadows.xs": {
    value: "var(--shadows-xs)",
    variable: "var(--shadows-xs)"
  },
  "shadows.sm": {
    value: "var(--shadows-sm)",
    variable: "var(--shadows-sm)"
  },
  "shadows.md": {
    value: "var(--shadows-md)",
    variable: "var(--shadows-md)"
  },
  "shadows.lg": {
    value: "var(--shadows-lg)",
    variable: "var(--shadows-lg)"
  },
  "shadows.xl": {
    value: "var(--shadows-xl)",
    variable: "var(--shadows-xl)"
  },
  "shadows.2xl": {
    value: "var(--shadows-2xl)",
    variable: "var(--shadows-2xl)"
  },
  "colors.red.1": {
    value: "var(--colors-red-1)",
    variable: "var(--colors-red-1)"
  },
  "colors.red.2": {
    value: "var(--colors-red-2)",
    variable: "var(--colors-red-2)"
  },
  "colors.red.3": {
    value: "var(--colors-red-3)",
    variable: "var(--colors-red-3)"
  },
  "colors.red.4": {
    value: "var(--colors-red-4)",
    variable: "var(--colors-red-4)"
  },
  "colors.red.5": {
    value: "var(--colors-red-5)",
    variable: "var(--colors-red-5)"
  },
  "colors.red.6": {
    value: "var(--colors-red-6)",
    variable: "var(--colors-red-6)"
  },
  "colors.red.7": {
    value: "var(--colors-red-7)",
    variable: "var(--colors-red-7)"
  },
  "colors.red.8": {
    value: "var(--colors-red-8)",
    variable: "var(--colors-red-8)"
  },
  "colors.red.9": {
    value: "var(--colors-red-9)",
    variable: "var(--colors-red-9)"
  },
  "colors.red.10": {
    value: "var(--colors-red-10)",
    variable: "var(--colors-red-10)"
  },
  "colors.red.11": {
    value: "var(--colors-red-11)",
    variable: "var(--colors-red-11)"
  },
  "colors.red.12": {
    value: "var(--colors-red-12)",
    variable: "var(--colors-red-12)"
  },
  "colors.red.a1": {
    value: "var(--colors-red-a1)",
    variable: "var(--colors-red-a1)"
  },
  "colors.red.a2": {
    value: "var(--colors-red-a2)",
    variable: "var(--colors-red-a2)"
  },
  "colors.red.a3": {
    value: "var(--colors-red-a3)",
    variable: "var(--colors-red-a3)"
  },
  "colors.red.a4": {
    value: "var(--colors-red-a4)",
    variable: "var(--colors-red-a4)"
  },
  "colors.red.a5": {
    value: "var(--colors-red-a5)",
    variable: "var(--colors-red-a5)"
  },
  "colors.red.a6": {
    value: "var(--colors-red-a6)",
    variable: "var(--colors-red-a6)"
  },
  "colors.red.a7": {
    value: "var(--colors-red-a7)",
    variable: "var(--colors-red-a7)"
  },
  "colors.red.a8": {
    value: "var(--colors-red-a8)",
    variable: "var(--colors-red-a8)"
  },
  "colors.red.a9": {
    value: "var(--colors-red-a9)",
    variable: "var(--colors-red-a9)"
  },
  "colors.red.a10": {
    value: "var(--colors-red-a10)",
    variable: "var(--colors-red-a10)"
  },
  "colors.red.a11": {
    value: "var(--colors-red-a11)",
    variable: "var(--colors-red-a11)"
  },
  "colors.red.a12": {
    value: "var(--colors-red-a12)",
    variable: "var(--colors-red-a12)"
  },
  "colors.red.default": {
    value: "var(--colors-red-default)",
    variable: "var(--colors-red-default)"
  },
  "colors.red.emphasized": {
    value: "var(--colors-red-emphasized)",
    variable: "var(--colors-red-emphasized)"
  },
  "colors.red.fg": {
    value: "var(--colors-red-fg)",
    variable: "var(--colors-red-fg)"
  },
  "colors.red.text": {
    value: "var(--colors-red-text)",
    variable: "var(--colors-red-text)"
  },
  "colors.gray.1": {
    value: "var(--colors-gray-1)",
    variable: "var(--colors-gray-1)"
  },
  "colors.gray.2": {
    value: "var(--colors-gray-2)",
    variable: "var(--colors-gray-2)"
  },
  "colors.gray.3": {
    value: "var(--colors-gray-3)",
    variable: "var(--colors-gray-3)"
  },
  "colors.gray.4": {
    value: "var(--colors-gray-4)",
    variable: "var(--colors-gray-4)"
  },
  "colors.gray.5": {
    value: "var(--colors-gray-5)",
    variable: "var(--colors-gray-5)"
  },
  "colors.gray.6": {
    value: "var(--colors-gray-6)",
    variable: "var(--colors-gray-6)"
  },
  "colors.gray.7": {
    value: "var(--colors-gray-7)",
    variable: "var(--colors-gray-7)"
  },
  "colors.gray.8": {
    value: "var(--colors-gray-8)",
    variable: "var(--colors-gray-8)"
  },
  "colors.gray.9": {
    value: "var(--colors-gray-9)",
    variable: "var(--colors-gray-9)"
  },
  "colors.gray.10": {
    value: "var(--colors-gray-10)",
    variable: "var(--colors-gray-10)"
  },
  "colors.gray.11": {
    value: "var(--colors-gray-11)",
    variable: "var(--colors-gray-11)"
  },
  "colors.gray.12": {
    value: "var(--colors-gray-12)",
    variable: "var(--colors-gray-12)"
  },
  "colors.gray.a1": {
    value: "var(--colors-gray-a1)",
    variable: "var(--colors-gray-a1)"
  },
  "colors.gray.a2": {
    value: "var(--colors-gray-a2)",
    variable: "var(--colors-gray-a2)"
  },
  "colors.gray.a3": {
    value: "var(--colors-gray-a3)",
    variable: "var(--colors-gray-a3)"
  },
  "colors.gray.a4": {
    value: "var(--colors-gray-a4)",
    variable: "var(--colors-gray-a4)"
  },
  "colors.gray.a5": {
    value: "var(--colors-gray-a5)",
    variable: "var(--colors-gray-a5)"
  },
  "colors.gray.a6": {
    value: "var(--colors-gray-a6)",
    variable: "var(--colors-gray-a6)"
  },
  "colors.gray.a7": {
    value: "var(--colors-gray-a7)",
    variable: "var(--colors-gray-a7)"
  },
  "colors.gray.a8": {
    value: "var(--colors-gray-a8)",
    variable: "var(--colors-gray-a8)"
  },
  "colors.gray.a9": {
    value: "var(--colors-gray-a9)",
    variable: "var(--colors-gray-a9)"
  },
  "colors.gray.a10": {
    value: "var(--colors-gray-a10)",
    variable: "var(--colors-gray-a10)"
  },
  "colors.gray.a11": {
    value: "var(--colors-gray-a11)",
    variable: "var(--colors-gray-a11)"
  },
  "colors.gray.a12": {
    value: "var(--colors-gray-a12)",
    variable: "var(--colors-gray-a12)"
  },
  "colors.gray.default": {
    value: "var(--colors-gray-default)",
    variable: "var(--colors-gray-default)"
  },
  "colors.gray.emphasized": {
    value: "var(--colors-gray-emphasized)",
    variable: "var(--colors-gray-emphasized)"
  },
  "colors.gray.fg": {
    value: "var(--colors-gray-fg)",
    variable: "var(--colors-gray-fg)"
  },
  "colors.gray.text": {
    value: "var(--colors-gray-text)",
    variable: "var(--colors-gray-text)"
  },
  "colors.teal.1": {
    value: "var(--colors-teal-1)",
    variable: "var(--colors-teal-1)"
  },
  "colors.teal.2": {
    value: "var(--colors-teal-2)",
    variable: "var(--colors-teal-2)"
  },
  "colors.teal.3": {
    value: "var(--colors-teal-3)",
    variable: "var(--colors-teal-3)"
  },
  "colors.teal.4": {
    value: "var(--colors-teal-4)",
    variable: "var(--colors-teal-4)"
  },
  "colors.teal.5": {
    value: "var(--colors-teal-5)",
    variable: "var(--colors-teal-5)"
  },
  "colors.teal.6": {
    value: "var(--colors-teal-6)",
    variable: "var(--colors-teal-6)"
  },
  "colors.teal.7": {
    value: "var(--colors-teal-7)",
    variable: "var(--colors-teal-7)"
  },
  "colors.teal.8": {
    value: "var(--colors-teal-8)",
    variable: "var(--colors-teal-8)"
  },
  "colors.teal.9": {
    value: "var(--colors-teal-9)",
    variable: "var(--colors-teal-9)"
  },
  "colors.teal.10": {
    value: "var(--colors-teal-10)",
    variable: "var(--colors-teal-10)"
  },
  "colors.teal.11": {
    value: "var(--colors-teal-11)",
    variable: "var(--colors-teal-11)"
  },
  "colors.teal.12": {
    value: "var(--colors-teal-12)",
    variable: "var(--colors-teal-12)"
  },
  "colors.teal.a1": {
    value: "var(--colors-teal-a1)",
    variable: "var(--colors-teal-a1)"
  },
  "colors.teal.a2": {
    value: "var(--colors-teal-a2)",
    variable: "var(--colors-teal-a2)"
  },
  "colors.teal.a3": {
    value: "var(--colors-teal-a3)",
    variable: "var(--colors-teal-a3)"
  },
  "colors.teal.a4": {
    value: "var(--colors-teal-a4)",
    variable: "var(--colors-teal-a4)"
  },
  "colors.teal.a5": {
    value: "var(--colors-teal-a5)",
    variable: "var(--colors-teal-a5)"
  },
  "colors.teal.a6": {
    value: "var(--colors-teal-a6)",
    variable: "var(--colors-teal-a6)"
  },
  "colors.teal.a7": {
    value: "var(--colors-teal-a7)",
    variable: "var(--colors-teal-a7)"
  },
  "colors.teal.a8": {
    value: "var(--colors-teal-a8)",
    variable: "var(--colors-teal-a8)"
  },
  "colors.teal.a9": {
    value: "var(--colors-teal-a9)",
    variable: "var(--colors-teal-a9)"
  },
  "colors.teal.a10": {
    value: "var(--colors-teal-a10)",
    variable: "var(--colors-teal-a10)"
  },
  "colors.teal.a11": {
    value: "var(--colors-teal-a11)",
    variable: "var(--colors-teal-a11)"
  },
  "colors.teal.a12": {
    value: "var(--colors-teal-a12)",
    variable: "var(--colors-teal-a12)"
  },
  "colors.teal.default": {
    value: "var(--colors-teal-default)",
    variable: "var(--colors-teal-default)"
  },
  "colors.teal.emphasized": {
    value: "var(--colors-teal-emphasized)",
    variable: "var(--colors-teal-emphasized)"
  },
  "colors.teal.fg": {
    value: "var(--colors-teal-fg)",
    variable: "var(--colors-teal-fg)"
  },
  "colors.teal.text": {
    value: "var(--colors-teal-text)",
    variable: "var(--colors-teal-text)"
  },
  "colors.fg.default": {
    value: "var(--colors-fg-default)",
    variable: "var(--colors-fg-default)"
  },
  "colors.fg.muted": {
    value: "var(--colors-fg-muted)",
    variable: "var(--colors-fg-muted)"
  },
  "colors.fg.subtle": {
    value: "var(--colors-fg-subtle)",
    variable: "var(--colors-fg-subtle)"
  },
  "colors.fg.disabled": {
    value: "var(--colors-fg-disabled)",
    variable: "var(--colors-fg-disabled)"
  },
  "colors.fg.success": {
    value: "var(--colors-fg-success)",
    variable: "var(--colors-fg-success)"
  },
  "colors.fg.warning": {
    value: "var(--colors-fg-warning)",
    variable: "var(--colors-fg-warning)"
  },
  "colors.fg.info": {
    value: "var(--colors-fg-info)",
    variable: "var(--colors-fg-info)"
  },
  "colors.fg.error": {
    value: "var(--colors-fg-error)",
    variable: "var(--colors-fg-error)"
  },
  "colors.bg.canvas": {
    value: "var(--colors-bg-canvas)",
    variable: "var(--colors-bg-canvas)"
  },
  "colors.bg.default": {
    value: "var(--colors-bg-default)",
    variable: "var(--colors-bg-default)"
  },
  "colors.bg.subtle": {
    value: "var(--colors-bg-subtle)",
    variable: "var(--colors-bg-subtle)"
  },
  "colors.bg.muted": {
    value: "var(--colors-bg-muted)",
    variable: "var(--colors-bg-muted)"
  },
  "colors.bg.emphasized": {
    value: "var(--colors-bg-emphasized)",
    variable: "var(--colors-bg-emphasized)"
  },
  "colors.bg.disabled": {
    value: "var(--colors-bg-disabled)",
    variable: "var(--colors-bg-disabled)"
  },
  "colors.bg.success": {
    value: "var(--colors-bg-success)",
    variable: "var(--colors-bg-success)"
  },
  "colors.bg.warning": {
    value: "var(--colors-bg-warning)",
    variable: "var(--colors-bg-warning)"
  },
  "colors.bg.info": {
    value: "var(--colors-bg-info)",
    variable: "var(--colors-bg-info)"
  },
  "colors.bg.error": {
    value: "var(--colors-bg-error)",
    variable: "var(--colors-bg-error)"
  },
  "colors.bg.deep": {
    value: "var(--colors-bg-deep)",
    variable: "var(--colors-bg-deep)"
  },
  "colors.bg.navbar": {
    value: "var(--colors-bg-navbar)",
    variable: "var(--colors-bg-navbar)"
  },
  "colors.bg.navbarIdle": {
    value: "var(--colors-bg-navbar-idle)",
    variable: "var(--colors-bg-navbar-idle)"
  },
  "colors.border.default": {
    value: "var(--colors-border-default)",
    variable: "var(--colors-border-default)"
  },
  "colors.border.muted": {
    value: "var(--colors-border-muted)",
    variable: "var(--colors-border-muted)"
  },
  "colors.border.subtle": {
    value: "var(--colors-border-subtle)",
    variable: "var(--colors-border-subtle)"
  },
  "colors.border.disabled": {
    value: "var(--colors-border-disabled)",
    variable: "var(--colors-border-disabled)"
  },
  "colors.border.outline": {
    value: "var(--colors-border-outline)",
    variable: "var(--colors-border-outline)"
  },
  "colors.border.success": {
    value: "var(--colors-border-success)",
    variable: "var(--colors-border-success)"
  },
  "colors.border.warning": {
    value: "var(--colors-border-warning)",
    variable: "var(--colors-border-warning)"
  },
  "colors.border.info": {
    value: "var(--colors-border-info)",
    variable: "var(--colors-border-info)"
  },
  "colors.border.error": {
    value: "var(--colors-border-error)",
    variable: "var(--colors-border-error)"
  },
  "colors.wheat.1": {
    value: "var(--colors-wheat-1)",
    variable: "var(--colors-wheat-1)"
  },
  "colors.wheat.2": {
    value: "var(--colors-wheat-2)",
    variable: "var(--colors-wheat-2)"
  },
  "colors.wheat.3": {
    value: "var(--colors-wheat-3)",
    variable: "var(--colors-wheat-3)"
  },
  "colors.wheat.4": {
    value: "var(--colors-wheat-4)",
    variable: "var(--colors-wheat-4)"
  },
  "colors.wheat.5": {
    value: "var(--colors-wheat-5)",
    variable: "var(--colors-wheat-5)"
  },
  "colors.wheat.6": {
    value: "var(--colors-wheat-6)",
    variable: "var(--colors-wheat-6)"
  },
  "colors.wheat.7": {
    value: "var(--colors-wheat-7)",
    variable: "var(--colors-wheat-7)"
  },
  "colors.wheat.8": {
    value: "var(--colors-wheat-8)",
    variable: "var(--colors-wheat-8)"
  },
  "colors.wheat.9": {
    value: "var(--colors-wheat-9)",
    variable: "var(--colors-wheat-9)"
  },
  "colors.wheat.10": {
    value: "var(--colors-wheat-10)",
    variable: "var(--colors-wheat-10)"
  },
  "colors.wheat.11": {
    value: "var(--colors-wheat-11)",
    variable: "var(--colors-wheat-11)"
  },
  "colors.wheat.12": {
    value: "var(--colors-wheat-12)",
    variable: "var(--colors-wheat-12)"
  },
  "colors.wheat.default": {
    value: "var(--colors-wheat-default)",
    variable: "var(--colors-wheat-default)"
  },
  "colors.wheat.emphasized": {
    value: "var(--colors-wheat-emphasized)",
    variable: "var(--colors-wheat-emphasized)"
  },
  "colors.wheat.fg": {
    value: "var(--colors-wheat-fg)",
    variable: "var(--colors-wheat-fg)"
  },
  "colors.wheat.text": {
    value: "var(--colors-wheat-text)",
    variable: "var(--colors-wheat-text)"
  },
  "colors.colorPalette": {
    value: "var(--colors-color-palette)",
    variable: "var(--colors-color-palette)"
  },
  "colors.colorPalette.a1": {
    value: "var(--colors-color-palette-a1)",
    variable: "var(--colors-color-palette-a1)"
  },
  "colors.colorPalette.a2": {
    value: "var(--colors-color-palette-a2)",
    variable: "var(--colors-color-palette-a2)"
  },
  "colors.colorPalette.a3": {
    value: "var(--colors-color-palette-a3)",
    variable: "var(--colors-color-palette-a3)"
  },
  "colors.colorPalette.a4": {
    value: "var(--colors-color-palette-a4)",
    variable: "var(--colors-color-palette-a4)"
  },
  "colors.colorPalette.a5": {
    value: "var(--colors-color-palette-a5)",
    variable: "var(--colors-color-palette-a5)"
  },
  "colors.colorPalette.a6": {
    value: "var(--colors-color-palette-a6)",
    variable: "var(--colors-color-palette-a6)"
  },
  "colors.colorPalette.a7": {
    value: "var(--colors-color-palette-a7)",
    variable: "var(--colors-color-palette-a7)"
  },
  "colors.colorPalette.a8": {
    value: "var(--colors-color-palette-a8)",
    variable: "var(--colors-color-palette-a8)"
  },
  "colors.colorPalette.a9": {
    value: "var(--colors-color-palette-a9)",
    variable: "var(--colors-color-palette-a9)"
  },
  "colors.colorPalette.a10": {
    value: "var(--colors-color-palette-a10)",
    variable: "var(--colors-color-palette-a10)"
  },
  "colors.colorPalette.a11": {
    value: "var(--colors-color-palette-a11)",
    variable: "var(--colors-color-palette-a11)"
  },
  "colors.colorPalette.a12": {
    value: "var(--colors-color-palette-a12)",
    variable: "var(--colors-color-palette-a12)"
  },
  "colors.colorPalette.light.1": {
    value: "var(--colors-color-palette-light-1)",
    variable: "var(--colors-color-palette-light-1)"
  },
  "colors.colorPalette.1": {
    value: "var(--colors-color-palette-1)",
    variable: "var(--colors-color-palette-1)"
  },
  "colors.colorPalette.light.2": {
    value: "var(--colors-color-palette-light-2)",
    variable: "var(--colors-color-palette-light-2)"
  },
  "colors.colorPalette.2": {
    value: "var(--colors-color-palette-2)",
    variable: "var(--colors-color-palette-2)"
  },
  "colors.colorPalette.light.3": {
    value: "var(--colors-color-palette-light-3)",
    variable: "var(--colors-color-palette-light-3)"
  },
  "colors.colorPalette.3": {
    value: "var(--colors-color-palette-3)",
    variable: "var(--colors-color-palette-3)"
  },
  "colors.colorPalette.light.4": {
    value: "var(--colors-color-palette-light-4)",
    variable: "var(--colors-color-palette-light-4)"
  },
  "colors.colorPalette.4": {
    value: "var(--colors-color-palette-4)",
    variable: "var(--colors-color-palette-4)"
  },
  "colors.colorPalette.light.5": {
    value: "var(--colors-color-palette-light-5)",
    variable: "var(--colors-color-palette-light-5)"
  },
  "colors.colorPalette.5": {
    value: "var(--colors-color-palette-5)",
    variable: "var(--colors-color-palette-5)"
  },
  "colors.colorPalette.light.6": {
    value: "var(--colors-color-palette-light-6)",
    variable: "var(--colors-color-palette-light-6)"
  },
  "colors.colorPalette.6": {
    value: "var(--colors-color-palette-6)",
    variable: "var(--colors-color-palette-6)"
  },
  "colors.colorPalette.light.7": {
    value: "var(--colors-color-palette-light-7)",
    variable: "var(--colors-color-palette-light-7)"
  },
  "colors.colorPalette.7": {
    value: "var(--colors-color-palette-7)",
    variable: "var(--colors-color-palette-7)"
  },
  "colors.colorPalette.light.8": {
    value: "var(--colors-color-palette-light-8)",
    variable: "var(--colors-color-palette-light-8)"
  },
  "colors.colorPalette.8": {
    value: "var(--colors-color-palette-8)",
    variable: "var(--colors-color-palette-8)"
  },
  "colors.colorPalette.light.9": {
    value: "var(--colors-color-palette-light-9)",
    variable: "var(--colors-color-palette-light-9)"
  },
  "colors.colorPalette.9": {
    value: "var(--colors-color-palette-9)",
    variable: "var(--colors-color-palette-9)"
  },
  "colors.colorPalette.light.10": {
    value: "var(--colors-color-palette-light-10)",
    variable: "var(--colors-color-palette-light-10)"
  },
  "colors.colorPalette.10": {
    value: "var(--colors-color-palette-10)",
    variable: "var(--colors-color-palette-10)"
  },
  "colors.colorPalette.light.11": {
    value: "var(--colors-color-palette-light-11)",
    variable: "var(--colors-color-palette-light-11)"
  },
  "colors.colorPalette.11": {
    value: "var(--colors-color-palette-11)",
    variable: "var(--colors-color-palette-11)"
  },
  "colors.colorPalette.light.12": {
    value: "var(--colors-color-palette-light-12)",
    variable: "var(--colors-color-palette-light-12)"
  },
  "colors.colorPalette.12": {
    value: "var(--colors-color-palette-12)",
    variable: "var(--colors-color-palette-12)"
  },
  "colors.colorPalette.light.a1": {
    value: "var(--colors-color-palette-light-a1)",
    variable: "var(--colors-color-palette-light-a1)"
  },
  "colors.colorPalette.light.a2": {
    value: "var(--colors-color-palette-light-a2)",
    variable: "var(--colors-color-palette-light-a2)"
  },
  "colors.colorPalette.light.a3": {
    value: "var(--colors-color-palette-light-a3)",
    variable: "var(--colors-color-palette-light-a3)"
  },
  "colors.colorPalette.light.a4": {
    value: "var(--colors-color-palette-light-a4)",
    variable: "var(--colors-color-palette-light-a4)"
  },
  "colors.colorPalette.light.a5": {
    value: "var(--colors-color-palette-light-a5)",
    variable: "var(--colors-color-palette-light-a5)"
  },
  "colors.colorPalette.light.a6": {
    value: "var(--colors-color-palette-light-a6)",
    variable: "var(--colors-color-palette-light-a6)"
  },
  "colors.colorPalette.light.a7": {
    value: "var(--colors-color-palette-light-a7)",
    variable: "var(--colors-color-palette-light-a7)"
  },
  "colors.colorPalette.light.a8": {
    value: "var(--colors-color-palette-light-a8)",
    variable: "var(--colors-color-palette-light-a8)"
  },
  "colors.colorPalette.light.a9": {
    value: "var(--colors-color-palette-light-a9)",
    variable: "var(--colors-color-palette-light-a9)"
  },
  "colors.colorPalette.light.a10": {
    value: "var(--colors-color-palette-light-a10)",
    variable: "var(--colors-color-palette-light-a10)"
  },
  "colors.colorPalette.light.a11": {
    value: "var(--colors-color-palette-light-a11)",
    variable: "var(--colors-color-palette-light-a11)"
  },
  "colors.colorPalette.light.a12": {
    value: "var(--colors-color-palette-light-a12)",
    variable: "var(--colors-color-palette-light-a12)"
  },
  "colors.colorPalette.dark.1": {
    value: "var(--colors-color-palette-dark-1)",
    variable: "var(--colors-color-palette-dark-1)"
  },
  "colors.colorPalette.dark.2": {
    value: "var(--colors-color-palette-dark-2)",
    variable: "var(--colors-color-palette-dark-2)"
  },
  "colors.colorPalette.dark.3": {
    value: "var(--colors-color-palette-dark-3)",
    variable: "var(--colors-color-palette-dark-3)"
  },
  "colors.colorPalette.dark.4": {
    value: "var(--colors-color-palette-dark-4)",
    variable: "var(--colors-color-palette-dark-4)"
  },
  "colors.colorPalette.dark.5": {
    value: "var(--colors-color-palette-dark-5)",
    variable: "var(--colors-color-palette-dark-5)"
  },
  "colors.colorPalette.dark.6": {
    value: "var(--colors-color-palette-dark-6)",
    variable: "var(--colors-color-palette-dark-6)"
  },
  "colors.colorPalette.dark.7": {
    value: "var(--colors-color-palette-dark-7)",
    variable: "var(--colors-color-palette-dark-7)"
  },
  "colors.colorPalette.dark.8": {
    value: "var(--colors-color-palette-dark-8)",
    variable: "var(--colors-color-palette-dark-8)"
  },
  "colors.colorPalette.dark.9": {
    value: "var(--colors-color-palette-dark-9)",
    variable: "var(--colors-color-palette-dark-9)"
  },
  "colors.colorPalette.dark.10": {
    value: "var(--colors-color-palette-dark-10)",
    variable: "var(--colors-color-palette-dark-10)"
  },
  "colors.colorPalette.dark.11": {
    value: "var(--colors-color-palette-dark-11)",
    variable: "var(--colors-color-palette-dark-11)"
  },
  "colors.colorPalette.dark.12": {
    value: "var(--colors-color-palette-dark-12)",
    variable: "var(--colors-color-palette-dark-12)"
  },
  "colors.colorPalette.dark.a1": {
    value: "var(--colors-color-palette-dark-a1)",
    variable: "var(--colors-color-palette-dark-a1)"
  },
  "colors.colorPalette.dark.a2": {
    value: "var(--colors-color-palette-dark-a2)",
    variable: "var(--colors-color-palette-dark-a2)"
  },
  "colors.colorPalette.dark.a3": {
    value: "var(--colors-color-palette-dark-a3)",
    variable: "var(--colors-color-palette-dark-a3)"
  },
  "colors.colorPalette.dark.a4": {
    value: "var(--colors-color-palette-dark-a4)",
    variable: "var(--colors-color-palette-dark-a4)"
  },
  "colors.colorPalette.dark.a5": {
    value: "var(--colors-color-palette-dark-a5)",
    variable: "var(--colors-color-palette-dark-a5)"
  },
  "colors.colorPalette.dark.a6": {
    value: "var(--colors-color-palette-dark-a6)",
    variable: "var(--colors-color-palette-dark-a6)"
  },
  "colors.colorPalette.dark.a7": {
    value: "var(--colors-color-palette-dark-a7)",
    variable: "var(--colors-color-palette-dark-a7)"
  },
  "colors.colorPalette.dark.a8": {
    value: "var(--colors-color-palette-dark-a8)",
    variable: "var(--colors-color-palette-dark-a8)"
  },
  "colors.colorPalette.dark.a9": {
    value: "var(--colors-color-palette-dark-a9)",
    variable: "var(--colors-color-palette-dark-a9)"
  },
  "colors.colorPalette.dark.a10": {
    value: "var(--colors-color-palette-dark-a10)",
    variable: "var(--colors-color-palette-dark-a10)"
  },
  "colors.colorPalette.dark.a11": {
    value: "var(--colors-color-palette-dark-a11)",
    variable: "var(--colors-color-palette-dark-a11)"
  },
  "colors.colorPalette.dark.a12": {
    value: "var(--colors-color-palette-dark-a12)",
    variable: "var(--colors-color-palette-dark-a12)"
  },
  "colors.colorPalette.default": {
    value: "var(--colors-color-palette-default)",
    variable: "var(--colors-color-palette-default)"
  },
  "colors.colorPalette.emphasized": {
    value: "var(--colors-color-palette-emphasized)",
    variable: "var(--colors-color-palette-emphasized)"
  },
  "colors.colorPalette.fg": {
    value: "var(--colors-color-palette-fg)",
    variable: "var(--colors-color-palette-fg)"
  },
  "colors.colorPalette.text": {
    value: "var(--colors-color-palette-text)",
    variable: "var(--colors-color-palette-text)"
  },
  "colors.colorPalette.muted": {
    value: "var(--colors-color-palette-muted)",
    variable: "var(--colors-color-palette-muted)"
  },
  "colors.colorPalette.subtle": {
    value: "var(--colors-color-palette-subtle)",
    variable: "var(--colors-color-palette-subtle)"
  },
  "colors.colorPalette.disabled": {
    value: "var(--colors-color-palette-disabled)",
    variable: "var(--colors-color-palette-disabled)"
  },
  "colors.colorPalette.success": {
    value: "var(--colors-color-palette-success)",
    variable: "var(--colors-color-palette-success)"
  },
  "colors.colorPalette.warning": {
    value: "var(--colors-color-palette-warning)",
    variable: "var(--colors-color-palette-warning)"
  },
  "colors.colorPalette.info": {
    value: "var(--colors-color-palette-info)",
    variable: "var(--colors-color-palette-info)"
  },
  "colors.colorPalette.error": {
    value: "var(--colors-color-palette-error)",
    variable: "var(--colors-color-palette-error)"
  },
  "colors.colorPalette.canvas": {
    value: "var(--colors-color-palette-canvas)",
    variable: "var(--colors-color-palette-canvas)"
  },
  "colors.colorPalette.deep": {
    value: "var(--colors-color-palette-deep)",
    variable: "var(--colors-color-palette-deep)"
  },
  "colors.colorPalette.navbar": {
    value: "var(--colors-color-palette-navbar)",
    variable: "var(--colors-color-palette-navbar)"
  },
  "colors.colorPalette.navbarIdle": {
    value: "var(--colors-color-palette-navbar-idle)",
    variable: "var(--colors-color-palette-navbar-idle)"
  },
  "colors.colorPalette.outline": {
    value: "var(--colors-color-palette-outline)",
    variable: "var(--colors-color-palette-outline)"
  }
};
function token(path, fallback) {
  return tokens[path]?.value || fallback;
}
function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback;
}
token.var = tokenVar;

// src/components/patterns/line-chart.tsx
import { jsx as jsx12, jsxs as jsxs9 } from "react/jsx-runtime";
"use client";
var styles5 = {
  root: css({
    w: "full"
  })
};
function LineChart({
  data,
  color,
  height = 120,
  showGrid = true,
  showAxis = false,
  showPoints,
  gradientFill = false,
  className
}) {
  const idRef = useRef(`lc-${Math.random().toString(36).slice(2, 8)}`);
  const gradientId = `${idRef.current}-grad`;
  if (data.length === 0)
    return null;
  const resolvedColor = color ? token.var(color, color) : "var(--colors-color-palette-9, var(--colors-teal-9))";
  const padding = {
    top: 10,
    right: 10,
    bottom: showAxis ? 20 : 10,
    left: showAxis ? 30 : 10
  };
  const width = 200;
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  const xMin = Math.min(...data.map((d) => d.x));
  const xMax = Math.max(...data.map((d) => d.x));
  const yMin = Math.min(...data.map((d) => d.y)) * 0.9;
  const yMax = Math.max(...data.map((d) => d.y)) * 1.1;
  const scaleX = (x) => padding.left + (x - xMin) / (xMax - xMin || 1) * chartWidth;
  const scaleY = (y) => padding.top + chartHeight - (y - yMin) / (yMax - yMin || 1) * chartHeight;
  const linePath = data.map((d, i) => `${i === 0 ? "M" : "L"} ${scaleX(d.x)} ${scaleY(d.y)}`).join(" ");
  const areaPath = `${linePath} L ${scaleX(data[data.length - 1].x)} ${padding.top + chartHeight}` + ` L ${scaleX(data[0].x)} ${padding.top + chartHeight} Z`;
  const pointsVisible = showPoints ?? data.length < 20;
  const gridColor = "var(--colors-border-muted, currentColor)";
  return /* @__PURE__ */ jsxs9("svg", {
    viewBox: `0 0 ${width} ${height}`,
    className: cx(styles5.root, className),
    preserveAspectRatio: "none",
    role: "img",
    "aria-label": "Line chart",
    children: [
      /* @__PURE__ */ jsx12("defs", {
        children: gradientFill && /* @__PURE__ */ jsxs9("linearGradient", {
          id: gradientId,
          x1: "0%",
          y1: "0%",
          x2: "0%",
          y2: "100%",
          children: [
            /* @__PURE__ */ jsx12("stop", {
              offset: "0%",
              stopColor: resolvedColor,
              stopOpacity: "0.3"
            }),
            /* @__PURE__ */ jsx12("stop", {
              offset: "100%",
              stopColor: resolvedColor,
              stopOpacity: "0"
            })
          ]
        })
      }),
      showGrid && /* @__PURE__ */ jsx12("g", {
        opacity: "0.2",
        children: [0, 0.25, 0.5, 0.75, 1].map((ratio) => /* @__PURE__ */ jsx12("line", {
          x1: padding.left,
          y1: padding.top + chartHeight * ratio,
          x2: width - padding.right,
          y2: padding.top + chartHeight * ratio,
          stroke: gridColor,
          strokeDasharray: "2,4"
        }, ratio))
      }),
      gradientFill && /* @__PURE__ */ jsx12("path", {
        d: areaPath,
        fill: `url(#${gradientId})`
      }),
      /* @__PURE__ */ jsx12("path", {
        d: linePath,
        fill: "none",
        stroke: resolvedColor,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }),
      pointsVisible && data.map((d, i) => /* @__PURE__ */ jsx12("circle", {
        cx: scaleX(d.x),
        cy: scaleY(d.y),
        r: "3",
        fill: resolvedColor,
        opacity: "0.8"
      }, `${d.x}-${d.y}-${i}`)),
      showAxis && /* @__PURE__ */ jsxs9("g", {
        children: [
          /* @__PURE__ */ jsx12("text", {
            x: padding.left - 4,
            y: padding.top + 4,
            textAnchor: "end",
            fontSize: "8",
            fill: gridColor,
            children: yMax.toFixed(0)
          }),
          /* @__PURE__ */ jsx12("text", {
            x: padding.left - 4,
            y: padding.top + chartHeight,
            textAnchor: "end",
            fontSize: "8",
            fill: gridColor,
            children: yMin.toFixed(0)
          })
        ]
      })
    ]
  });
}
// src/components/patterns/stat-card.tsx
import { jsx as jsx13, jsxs as jsxs10 } from "react/jsx-runtime";
"use client";
var styles6 = {
  root: css({
    bg: "bg.default",
    borderWidth: "1px",
    borderColor: "border.muted",
    rounded: "l3",
    p: "6",
    display: "flex",
    alignItems: "flex-start",
    gap: "4"
  }),
  iconWrap: css({
    flexShrink: 0,
    w: "10",
    h: "10",
    rounded: "l2",
    bg: "colorPalette.2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "colorPalette.9"
  }),
  content: css({
    flex: 1,
    minW: 0
  }),
  title: css({
    textStyle: "caption",
    color: "fg.muted",
    textTransform: "uppercase",
    letterSpacing: "0.05em"
  }),
  value: css({
    textStyle: "h2",
    color: "fg.default",
    mt: "1"
  }),
  change: css({
    textStyle: "small",
    mt: "1"
  })
};
function StatCard({
  title,
  value,
  change,
  changeType = "neutral",
  icon,
  iconBg,
  iconColor,
  badge,
  badgeColor,
  badgeBg,
  className
}) {
  const changeColor = changeType === "positive" ? css({ color: "fg.success" }) : changeType === "negative" ? css({ color: "fg.error" }) : css({ color: "fg.muted" });
  return /* @__PURE__ */ jsxs10("div", {
    className: cx(styles6.root, className),
    children: [
      icon && /* @__PURE__ */ jsx13("div", {
        className: styles6.iconWrap,
        style: {
          ...iconBg ? { backgroundColor: iconBg } : {},
          ...iconColor ? { color: iconColor } : {}
        },
        children: icon
      }),
      /* @__PURE__ */ jsxs10("div", {
        className: styles6.content,
        children: [
          /* @__PURE__ */ jsx13("div", {
            className: styles6.title,
            children: title
          }),
          /* @__PURE__ */ jsx13("div", {
            className: styles6.value,
            children: value
          }),
          /* @__PURE__ */ jsxs10("div", {
            className: css({ display: "flex", alignItems: "center", gap: "2", mt: "1" }),
            children: [
              change && /* @__PURE__ */ jsx13("span", {
                className: cx(styles6.change, changeColor),
                children: change
              }),
              badge && /* @__PURE__ */ jsx13("span", {
                className: css({
                  textStyle: "small",
                  px: "2",
                  py: "0.5",
                  rounded: "full",
                  fontSize: "xs"
                }),
                style: {
                  color: badgeColor,
                  backgroundColor: badgeBg
                },
                children: badge
              })
            ]
          })
        ]
      })
    ]
  });
}
// src/components/patterns/step-card.tsx
import { jsx as jsx14, jsxs as jsxs11 } from "react/jsx-runtime";
"use client";
var styles7 = {
  root: css({
    display: "flex",
    gap: "4"
  }),
  number: css({
    w: "8",
    h: "8",
    rounded: "full",
    bg: "colorPalette.9",
    color: "colorPalette.fg",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textStyle: "label",
    flexShrink: 0
  }),
  content: css({
    flex: 1,
    minW: 0
  }),
  title: css({
    textStyle: "label",
    color: "fg.default"
  }),
  description: css({
    textStyle: "small",
    color: "fg.muted",
    mt: "1"
  })
};
function StepCard({ step, title, description, children, className }) {
  return /* @__PURE__ */ jsxs11("div", {
    className: cx(styles7.root, className),
    children: [
      /* @__PURE__ */ jsx14("div", {
        className: styles7.number,
        children: step
      }),
      /* @__PURE__ */ jsxs11("div", {
        className: styles7.content,
        children: [
          /* @__PURE__ */ jsx14("div", {
            className: styles7.title,
            children: title
          }),
          description && /* @__PURE__ */ jsx14("div", {
            className: styles7.description,
            children: description
          }),
          children
        ]
      })
    ]
  });
}
// src/components/patterns/streaming-status.tsx
import { jsx as jsx15, jsxs as jsxs12 } from "react/jsx-runtime";
"use client";
var styles8 = {
  root: css({
    bg: "bg.default",
    borderWidth: "1px",
    borderColor: "border.muted",
    rounded: "l3",
    p: "4"
  }),
  compactRoot: css({
    display: "flex",
    alignItems: "center",
    gap: "2",
    textStyle: "sm"
  }),
  header: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mb: "3"
  }),
  headerLeft: css({
    display: "flex",
    alignItems: "center",
    gap: "3"
  }),
  statusLabel: css({
    textStyle: "sm",
    fontWeight: "medium",
    color: "fg.default"
  }),
  statusLabelError: css({
    color: "fg.error"
  }),
  progressHint: css({
    textStyle: "xs",
    color: "fg.muted"
  }),
  trackWrap: css({
    mb: "3"
  }),
  track: css({
    h: "2",
    bg: "border.muted",
    rounded: "full",
    overflow: "hidden"
  }),
  range: css({
    h: "full",
    bg: "colorPalette.9",
    transition: "width 0.3s ease-out",
    rounded: "full"
  }),
  errorBox: css({
    p: "3",
    bg: "bg.error",
    borderWidth: "1px",
    borderColor: "border.error",
    rounded: "l2",
    display: "flex",
    alignItems: "flex-start",
    gap: "2"
  }),
  errorText: css({
    textStyle: "sm",
    color: "fg.error"
  }),
  successBox: css({
    p: "3",
    bg: "bg.success",
    borderWidth: "1px",
    borderColor: "border.success",
    rounded: "l2",
    display: "flex",
    alignItems: "center",
    gap: "2"
  }),
  successText: css({
    textStyle: "sm",
    color: "fg.success"
  }),
  stepsGrid: css({
    mt: "4",
    display: "grid",
    gap: "2"
  }),
  step: css({
    textAlign: "center",
    p: "2",
    rounded: "l2",
    borderWidth: "1px",
    transition: "all 0.15s",
    textStyle: "xs"
  }),
  stepActive: css({
    bg: "colorPalette.2",
    borderColor: "colorPalette.6",
    color: "colorPalette.11"
  }),
  stepDone: css({
    bg: "bg.success",
    borderColor: "border.success",
    color: "fg.success"
  }),
  stepPending: css({
    bg: "gray.subtle.bg",
    borderColor: "border.muted",
    color: "fg.muted"
  }),
  abortButton: css({
    appearance: "none",
    border: "none",
    bg: "transparent",
    cursor: "pointer",
    p: "2",
    rounded: "l2",
    color: "fg.muted",
    transition: "all 0.15s",
    _hover: {
      bg: "gray.subtle.bg",
      color: "fg.default"
    }
  }),
  iconWrap: css({
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  })
};
function StreamingStatus({
  status,
  progress,
  steps,
  currentStep,
  error,
  message,
  compact: compact2 = false,
  onAbort,
  activeIcon,
  completeIcon,
  errorIcon,
  isComplete = false,
  className
}) {
  const isActive = !isComplete && !error;
  const hasProgress = typeof progress === "number";
  if (compact2) {
    return /* @__PURE__ */ jsxs12("div", {
      className: cx(styles8.compactRoot, className),
      children: [
        isActive && activeIcon && /* @__PURE__ */ jsx15("span", {
          className: styles8.iconWrap,
          children: activeIcon
        }),
        isComplete && completeIcon && /* @__PURE__ */ jsx15("span", {
          className: styles8.iconWrap,
          children: completeIcon
        }),
        error && errorIcon && /* @__PURE__ */ jsx15("span", {
          className: styles8.iconWrap,
          children: errorIcon
        }),
        /* @__PURE__ */ jsx15("span", {
          className: cx(styles8.statusLabel, error ? styles8.statusLabelError : undefined),
          children: message || status
        }),
        isActive && hasProgress && /* @__PURE__ */ jsxs12("span", {
          className: styles8.progressHint,
          children: [
            "(",
            progress,
            "%)"
          ]
        }),
        onAbort && isActive && /* @__PURE__ */ jsx15("button", {
          type: "button",
          onClick: onAbort,
          className: styles8.abortButton,
          title: "Abort operation",
          children: "×"
        })
      ]
    });
  }
  const stepKeys = steps?.map((s) => s.key) ?? [];
  const currentIdx = currentStep ? stepKeys.indexOf(currentStep) : -1;
  return /* @__PURE__ */ jsxs12("div", {
    className: cx(styles8.root, className),
    children: [
      /* @__PURE__ */ jsxs12("div", {
        className: styles8.header,
        children: [
          /* @__PURE__ */ jsxs12("div", {
            className: styles8.headerLeft,
            children: [
              isActive && activeIcon && /* @__PURE__ */ jsx15("span", {
                className: styles8.iconWrap,
                children: activeIcon
              }),
              isComplete && completeIcon && /* @__PURE__ */ jsx15("span", {
                className: styles8.iconWrap,
                children: completeIcon
              }),
              error && errorIcon && /* @__PURE__ */ jsx15("span", {
                className: styles8.iconWrap,
                children: errorIcon
              }),
              /* @__PURE__ */ jsxs12("div", {
                children: [
                  /* @__PURE__ */ jsx15("div", {
                    className: cx(styles8.statusLabel, error ? styles8.statusLabelError : undefined),
                    children: message || status
                  }),
                  isActive && hasProgress && /* @__PURE__ */ jsxs12("div", {
                    className: styles8.progressHint,
                    children: [
                      progress,
                      "% complete"
                    ]
                  })
                ]
              })
            ]
          }),
          onAbort && isActive && /* @__PURE__ */ jsx15("button", {
            type: "button",
            onClick: onAbort,
            className: styles8.abortButton,
            title: "Abort operation",
            children: "×"
          })
        ]
      }),
      isActive && hasProgress && /* @__PURE__ */ jsx15("div", {
        className: styles8.trackWrap,
        children: /* @__PURE__ */ jsx15("div", {
          className: styles8.track,
          children: /* @__PURE__ */ jsx15("div", {
            className: styles8.range,
            style: { width: `${progress}%` }
          })
        })
      }),
      error && /* @__PURE__ */ jsxs12("div", {
        className: styles8.errorBox,
        children: [
          errorIcon && /* @__PURE__ */ jsx15("span", {
            className: styles8.iconWrap,
            children: errorIcon
          }),
          /* @__PURE__ */ jsx15("span", {
            className: styles8.errorText,
            children: error
          })
        ]
      }),
      isComplete && !error && /* @__PURE__ */ jsxs12("div", {
        className: styles8.successBox,
        children: [
          completeIcon && /* @__PURE__ */ jsx15("span", {
            className: styles8.iconWrap,
            children: completeIcon
          }),
          /* @__PURE__ */ jsx15("span", {
            className: styles8.successText,
            children: "Operation completed successfully"
          })
        ]
      }),
      steps && steps.length > 0 && isActive && /* @__PURE__ */ jsx15("div", {
        className: styles8.stepsGrid,
        style: { gridTemplateColumns: `repeat(${steps.length}, 1fr)` },
        children: steps.map((step, idx) => {
          const isCurrent = step.key === currentStep;
          const isDone = currentIdx >= 0 && idx < currentIdx;
          return /* @__PURE__ */ jsx15("div", {
            className: cx(styles8.step, isCurrent ? styles8.stepActive : isDone ? styles8.stepDone : styles8.stepPending),
            children: step.label
          }, step.key);
        })
      })
    ]
  });
}
export {
  buildGradientStyle,
  StreamingStatus,
  StepCard,
  StatCard,
  ModelIconCustomizer,
  ModelCardIcon,
  LineChart,
  IconPicker,
  IconBadge,
  HelpTrigger,
  HelpPanel,
  GradientPicker,
  FileTree,
  FeatureCard,
  EmptyState,
  DEFAULT_ICON_CONFIG,
  ActionCard
};

//# debugId=D19F11E7C42E8E1464756E2164756E21
//# sourceMappingURL=index.js.map
