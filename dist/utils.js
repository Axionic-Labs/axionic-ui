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

// src/utils.ts
function cn(...inputs) {
  return cx(...inputs.filter(Boolean));
}
export {
  cx,
  cn
};

//# debugId=12E69FC6AB7E1D1764756E2164756E21
//# sourceMappingURL=utils.js.map
