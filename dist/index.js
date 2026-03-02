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

//# debugId=7D7BA758A14280EF64756E2164756E21
//# sourceMappingURL=index.js.map
