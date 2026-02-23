// src/preset/index.ts
import { definePreset } from "@pandacss/dev";
import { createPreset } from "@park-ui/panda-preset";

// src/preset/colors/teal.ts
var axionicTeal = {
  name: "teal",
  tokens: {
    light: {
      "1": { value: "#f5fafa" },
      "2": { value: "#e3f5f7" },
      "3": { value: "#c5eaed" },
      "4": { value: "#a3dde2" },
      "5": { value: "#7eccd3" },
      "6": { value: "#5ab8c1" },
      "7": { value: "#3a9da7" },
      "8": { value: "#1f808b" },
      "9": { value: "#006270" },
      "10": { value: "#005662" },
      "11": { value: "#004a54" },
      "12": { value: "#003e44" },
      a1: { value: "rgba(0, 98, 112, 0.02)" },
      a2: { value: "rgba(0, 98, 112, 0.06)" },
      a3: { value: "rgba(0, 98, 112, 0.12)" },
      a4: { value: "rgba(0, 98, 112, 0.20)" },
      a5: { value: "rgba(0, 98, 112, 0.30)" },
      a6: { value: "rgba(0, 98, 112, 0.42)" },
      a7: { value: "rgba(0, 98, 112, 0.56)" },
      a8: { value: "rgba(0, 98, 112, 0.70)" },
      a9: { value: "rgba(0, 98, 112, 0.85)" },
      a10: { value: "rgba(0, 98, 112, 0.88)" },
      a11: { value: "rgba(0, 98, 112, 0.92)" },
      a12: { value: "rgba(0, 62, 68, 0.97)" }
    },
    dark: {
      "1": { value: "#061214" },
      "2": { value: "#0b1d20" },
      "3": { value: "#12292d" },
      "4": { value: "#1a363b" },
      "5": { value: "#23444a" },
      "6": { value: "#2e555c" },
      "7": { value: "#3d6f78" },
      "8": { value: "#508d97" },
      "9": { value: "#5ab8c1" },
      "10": { value: "#7eccd3" },
      "11": { value: "#a3dde2" },
      "12": { value: "#e3f5f7" },
      a1: { value: "rgba(90, 184, 193, 0.02)" },
      a2: { value: "rgba(90, 184, 193, 0.06)" },
      a3: { value: "rgba(90, 184, 193, 0.12)" },
      a4: { value: "rgba(90, 184, 193, 0.18)" },
      a5: { value: "rgba(90, 184, 193, 0.24)" },
      a6: { value: "rgba(90, 184, 193, 0.32)" },
      a7: { value: "rgba(90, 184, 193, 0.44)" },
      a8: { value: "rgba(90, 184, 193, 0.58)" },
      a9: { value: "rgba(90, 184, 193, 0.75)" },
      a10: { value: "rgba(90, 184, 193, 0.82)" },
      a11: { value: "rgba(90, 184, 193, 0.88)" },
      a12: { value: "rgba(227, 245, 247, 0.95)" }
    }
  },
  semanticTokens: {
    "1": { value: { _light: "{colors.teal.light.1}", _dark: "{colors.teal.dark.1}" } },
    "2": { value: { _light: "{colors.teal.light.2}", _dark: "{colors.teal.dark.2}" } },
    "3": { value: { _light: "{colors.teal.light.3}", _dark: "{colors.teal.dark.3}" } },
    "4": { value: { _light: "{colors.teal.light.4}", _dark: "{colors.teal.dark.4}" } },
    "5": { value: { _light: "{colors.teal.light.5}", _dark: "{colors.teal.dark.5}" } },
    "6": { value: { _light: "{colors.teal.light.6}", _dark: "{colors.teal.dark.6}" } },
    "7": { value: { _light: "{colors.teal.light.7}", _dark: "{colors.teal.dark.7}" } },
    "8": { value: { _light: "{colors.teal.light.8}", _dark: "{colors.teal.dark.8}" } },
    "9": { value: { _light: "{colors.teal.light.9}", _dark: "{colors.teal.dark.9}" } },
    "10": { value: { _light: "{colors.teal.light.10}", _dark: "{colors.teal.dark.10}" } },
    "11": { value: { _light: "{colors.teal.light.11}", _dark: "{colors.teal.dark.11}" } },
    "12": { value: { _light: "{colors.teal.light.12}", _dark: "{colors.teal.dark.12}" } },
    a1: { value: { _light: "{colors.teal.light.a1}", _dark: "{colors.teal.dark.a1}" } },
    a2: { value: { _light: "{colors.teal.light.a2}", _dark: "{colors.teal.dark.a2}" } },
    a3: { value: { _light: "{colors.teal.light.a3}", _dark: "{colors.teal.dark.a3}" } },
    a4: { value: { _light: "{colors.teal.light.a4}", _dark: "{colors.teal.dark.a4}" } },
    a5: { value: { _light: "{colors.teal.light.a5}", _dark: "{colors.teal.dark.a5}" } },
    a6: { value: { _light: "{colors.teal.light.a6}", _dark: "{colors.teal.dark.a6}" } },
    a7: { value: { _light: "{colors.teal.light.a7}", _dark: "{colors.teal.dark.a7}" } },
    a8: { value: { _light: "{colors.teal.light.a8}", _dark: "{colors.teal.dark.a8}" } },
    a9: { value: { _light: "{colors.teal.light.a9}", _dark: "{colors.teal.dark.a9}" } },
    a10: { value: { _light: "{colors.teal.light.a10}", _dark: "{colors.teal.dark.a10}" } },
    a11: { value: { _light: "{colors.teal.light.a11}", _dark: "{colors.teal.dark.a11}" } },
    a12: { value: { _light: "{colors.teal.light.a12}", _dark: "{colors.teal.dark.a12}" } },
    default: { value: { _light: "{colors.teal.light.9}", _dark: "{colors.teal.dark.9}" } },
    emphasized: { value: { _light: "{colors.teal.light.10}", _dark: "{colors.teal.dark.10}" } },
    fg: { value: { _light: "{colors.teal.light.12}", _dark: "{colors.teal.dark.1}" } },
    text: { value: { _light: "{colors.teal.light.11}", _dark: "{colors.teal.dark.11}" } }
  }
};

// src/preset/colors/sand.ts
var axionicSand = {
  name: "sand",
  tokens: {
    light: {
      "1": { value: "#fdfdfc" },
      "2": { value: "#f9f9f8" },
      "3": { value: "#f1f0ef" },
      "4": { value: "#e9e8e6" },
      "5": { value: "#e2e1de" },
      "6": { value: "#d9d8d5" },
      "7": { value: "#cfceca" },
      "8": { value: "#bcbbb5" },
      "9": { value: "#8d8d86" },
      "10": { value: "#82827c" },
      "11": { value: "#63635e" },
      "12": { value: "#21201c" },
      a1: { value: "rgba(85, 85, 0, 0.01)" },
      a2: { value: "rgba(85, 85, 0, 0.03)" },
      a3: { value: "rgba(75, 65, 0, 0.06)" },
      a4: { value: "rgba(65, 55, 0, 0.10)" },
      a5: { value: "rgba(60, 50, 0, 0.13)" },
      a6: { value: "rgba(55, 45, 0, 0.17)" },
      a7: { value: "rgba(50, 40, 0, 0.21)" },
      a8: { value: "rgba(45, 40, 0, 0.29)" },
      a9: { value: "rgba(30, 30, 0, 0.48)" },
      a10: { value: "rgba(25, 25, 0, 0.51)" },
      a11: { value: "rgba(15, 15, 0, 0.63)" },
      a12: { value: "rgba(5, 5, 0, 0.89)" }
    },
    dark: {
      "1": { value: "#111110" },
      "2": { value: "#191918" },
      "3": { value: "#222221" },
      "4": { value: "#2a2a28" },
      "5": { value: "#31312e" },
      "6": { value: "#3b3b37" },
      "7": { value: "#494844" },
      "8": { value: "#62625b" },
      "9": { value: "#6f6f68" },
      "10": { value: "#7c7c74" },
      "11": { value: "#b5b5ad" },
      "12": { value: "#eeeeec" },
      a1: { value: "rgba(0, 0, 0, 0)" },
      a2: { value: "rgba(245, 245, 200, 0.04)" },
      a3: { value: "rgba(235, 235, 195, 0.08)" },
      a4: { value: "rgba(230, 230, 175, 0.11)" },
      a5: { value: "rgba(225, 225, 170, 0.14)" },
      a6: { value: "rgba(220, 220, 165, 0.18)" },
      a7: { value: "rgba(215, 215, 160, 0.24)" },
      a8: { value: "rgba(210, 210, 155, 0.34)" },
      a9: { value: "rgba(210, 210, 165, 0.39)" },
      a10: { value: "rgba(210, 210, 170, 0.44)" },
      a11: { value: "rgba(230, 230, 200, 0.68)" },
      a12: { value: "rgba(250, 250, 240, 0.93)" }
    }
  },
  semanticTokens: {
    "1": { value: { _light: "{colors.sand.light.1}", _dark: "{colors.sand.dark.1}" } },
    "2": { value: { _light: "{colors.sand.light.2}", _dark: "{colors.sand.dark.2}" } },
    "3": { value: { _light: "{colors.sand.light.3}", _dark: "{colors.sand.dark.3}" } },
    "4": { value: { _light: "{colors.sand.light.4}", _dark: "{colors.sand.dark.4}" } },
    "5": { value: { _light: "{colors.sand.light.5}", _dark: "{colors.sand.dark.5}" } },
    "6": { value: { _light: "{colors.sand.light.6}", _dark: "{colors.sand.dark.6}" } },
    "7": { value: { _light: "{colors.sand.light.7}", _dark: "{colors.sand.dark.7}" } },
    "8": { value: { _light: "{colors.sand.light.8}", _dark: "{colors.sand.dark.8}" } },
    "9": { value: { _light: "{colors.sand.light.9}", _dark: "{colors.sand.dark.9}" } },
    "10": { value: { _light: "{colors.sand.light.10}", _dark: "{colors.sand.dark.10}" } },
    "11": { value: { _light: "{colors.sand.light.11}", _dark: "{colors.sand.dark.11}" } },
    "12": { value: { _light: "{colors.sand.light.12}", _dark: "{colors.sand.dark.12}" } },
    a1: { value: { _light: "{colors.sand.light.a1}", _dark: "{colors.sand.dark.a1}" } },
    a2: { value: { _light: "{colors.sand.light.a2}", _dark: "{colors.sand.dark.a2}" } },
    a3: { value: { _light: "{colors.sand.light.a3}", _dark: "{colors.sand.dark.a3}" } },
    a4: { value: { _light: "{colors.sand.light.a4}", _dark: "{colors.sand.dark.a4}" } },
    a5: { value: { _light: "{colors.sand.light.a5}", _dark: "{colors.sand.dark.a5}" } },
    a6: { value: { _light: "{colors.sand.light.a6}", _dark: "{colors.sand.dark.a6}" } },
    a7: { value: { _light: "{colors.sand.light.a7}", _dark: "{colors.sand.dark.a7}" } },
    a8: { value: { _light: "{colors.sand.light.a8}", _dark: "{colors.sand.dark.a8}" } },
    a9: { value: { _light: "{colors.sand.light.a9}", _dark: "{colors.sand.dark.a9}" } },
    a10: { value: { _light: "{colors.sand.light.a10}", _dark: "{colors.sand.dark.a10}" } },
    a11: { value: { _light: "{colors.sand.light.a11}", _dark: "{colors.sand.dark.a11}" } },
    a12: { value: { _light: "{colors.sand.light.a12}", _dark: "{colors.sand.dark.a12}" } },
    default: { value: { _light: "{colors.sand.light.9}", _dark: "{colors.sand.dark.9}" } },
    emphasized: { value: { _light: "{colors.sand.light.10}", _dark: "{colors.sand.dark.10}" } },
    fg: { value: { _light: "white", _dark: "white" } },
    text: { value: { _light: "{colors.sand.light.12}", _dark: "{colors.sand.dark.12}" } }
  }
};

// src/preset/recipes/button.ts
import { defineRecipe } from "@pandacss/dev";
var buttonRecipe = defineRecipe({
  className: "button",
  variants: {
    variant: {
      wheat: {
        bg: "{colors.wheat.9}",
        color: "{colors.wheat.12}",
        fontWeight: "600",
        _hover: { bg: "{colors.wheat.10}" },
        _active: { bg: "{colors.wheat.8}" }
      },
      dark: {
        bg: "colorPalette.12",
        color: "bg.canvas",
        fontWeight: "600",
        _hover: { bg: "colorPalette.11" },
        _active: { bg: "colorPalette.10" }
      },
      oauth: {
        bg: "bg.default",
        color: "fg.default",
        borderWidth: "1px",
        borderColor: "border.default",
        fontWeight: "500",
        _hover: { bg: "bg.subtle", borderColor: "colorPalette.7" }
      },
      "outline-brand": {
        borderWidth: "1px",
        borderColor: "colorPalette.7",
        color: "colorPalette.11",
        _hover: { bg: "colorPalette.a2" }
      },
      "ghost-dark": {
        color: "bg.canvas",
        _hover: { bg: "colorPalette.a3" }
      }
    }
  }
});

// src/preset/recipes/card.ts
import { defineSlotRecipe } from "@pandacss/dev";
var cardSlotRecipe = defineSlotRecipe({
  className: "card",
  slots: ["root", "header", "body", "footer", "title", "description"],
  variants: {
    variant: {
      hover: {
        root: {
          transition: "all 0.2s ease",
          _hover: { shadow: "lg", translateY: "-1px" }
        }
      },
      dashed: {
        root: {
          borderStyle: "dashed",
          borderWidth: "2px",
          borderColor: "border.muted"
        }
      }
    }
  }
});

// src/preset/text-styles.ts
import { defineTextStyles } from "@pandacss/dev";
var textStyles = defineTextStyles({
  display: {
    value: { fontFamily: "display", fontSize: "3.5rem", fontWeight: "700", lineHeight: "1.1", letterSpacing: "-0.02em" }
  },
  h1: {
    value: { fontFamily: "body", fontSize: "2.25rem", fontWeight: "700", lineHeight: "1.2", letterSpacing: "-0.01em" }
  },
  h2: {
    value: { fontFamily: "body", fontSize: "1.875rem", fontWeight: "600", lineHeight: "1.3" }
  },
  h3: {
    value: { fontFamily: "body", fontSize: "1.5rem", fontWeight: "600", lineHeight: "1.4" }
  },
  body: {
    value: { fontFamily: "body", fontSize: "1rem", fontWeight: "400", lineHeight: "1.6" }
  },
  small: {
    value: { fontFamily: "body", fontSize: "0.875rem", fontWeight: "400", lineHeight: "1.5" }
  },
  caption: {
    value: { fontFamily: "body", fontSize: "0.75rem", fontWeight: "500", lineHeight: "1.4" }
  },
  label: {
    value: { fontFamily: "body", fontSize: "0.875rem", fontWeight: "600", lineHeight: "1.4" }
  },
  code: {
    value: { fontFamily: "mono", fontSize: "0.875rem", fontWeight: "400", lineHeight: "1.6" }
  }
});

// src/preset/keyframes.ts
var keyframes = {
  "fade-up": {
    from: { opacity: "0", transform: "translateY(8px)" },
    to: { opacity: "1", transform: "translateY(0)" }
  },
  "fade-in": {
    from: { opacity: "0" },
    to: { opacity: "1" }
  },
  "scale-in": {
    from: { opacity: "0", transform: "scale(0.95)" },
    to: { opacity: "1", transform: "scale(1)" }
  },
  "slide-up": {
    from: { transform: "translateY(100%)" },
    to: { transform: "translateY(0)" }
  },
  "slide-down": {
    from: { transform: "translateY(-100%)" },
    to: { transform: "translateY(0)" }
  },
  pulse: {
    "0%, 100%": { opacity: "1" },
    "50%": { opacity: "0.5" }
  },
  spin: {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" }
  }
};

// src/preset/global-css.ts
import { defineGlobalStyles } from "@pandacss/dev";
var globalCss = defineGlobalStyles({
  html: {
    colorPalette: "teal"
  },
  body: {
    fontFamily: "body",
    color: "fg.default",
    bg: "bg.canvas",
    lineHeight: "1.6",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale"
  },
  "*, *::before, *::after": {
    borderColor: "border.muted"
  },
  "::selection": {
    bg: "colorPalette.a4",
    color: "colorPalette.12"
  }
});

// src/preset/index.ts
function createAxionicPreset() {
  return definePreset({
    name: "@axionic/ui",
    presets: [
      createPreset({
        accentColor: axionicTeal,
        grayColor: axionicSand,
        radius: "sm"
      })
    ],
    theme: {
      extend: {
        tokens: {
          fonts: {
            body: { value: '"Mulish", sans-serif' },
            display: { value: '"Mulish", sans-serif' },
            mono: { value: '"JetBrains Mono", "Consolas", monospace' }
          },
          colors: {
            wheat: {
              light: {
                "1": { value: "#fefcf8" },
                "2": { value: "#fdf5eb" },
                "3": { value: "#faecd6" },
                "4": { value: "#f5dfc0" },
                "5": { value: "#f0d2ab" },
                "6": { value: "#e6b685" },
                "7": { value: "#d4a070" },
                "8": { value: "#c28a5b" },
                "9": { value: "#e6b685" },
                "10": { value: "#d4a070" },
                "11": { value: "#8b6c44" },
                "12": { value: "#5c3d1e" }
              },
              dark: {
                "1": { value: "#1a1410" },
                "2": { value: "#261e16" },
                "3": { value: "#352a1e" },
                "4": { value: "#443626" },
                "5": { value: "#54432f" },
                "6": { value: "#6b5539" },
                "7": { value: "#8b6c44" },
                "8": { value: "#b08a5a" },
                "9": { value: "#e6b685" },
                "10": { value: "#f0c898" },
                "11": { value: "#f5dfc0" },
                "12": { value: "#fdf5eb" }
              }
            }
          }
        },
        semanticTokens: {
          colors: {
            fg: {
              success: { value: { _light: "#16a34a", _dark: "#4ade80" } },
              warning: { value: { _light: "#d97706", _dark: "#fbbf24" } },
              info: { value: { _light: "#2563eb", _dark: "#60a5fa" } }
            },
            bg: {
              success: { value: { _light: "rgba(22, 163, 74, 0.08)", _dark: "rgba(74, 222, 128, 0.12)" } },
              warning: { value: { _light: "rgba(217, 119, 6, 0.08)", _dark: "rgba(251, 191, 36, 0.12)" } },
              info: { value: { _light: "rgba(37, 99, 235, 0.08)", _dark: "rgba(96, 165, 250, 0.12)" } }
            },
            border: {
              success: { value: { _light: "rgba(22, 163, 74, 0.3)", _dark: "rgba(74, 222, 128, 0.3)" } },
              warning: { value: { _light: "rgba(217, 119, 6, 0.3)", _dark: "rgba(251, 191, 36, 0.3)" } },
              info: { value: { _light: "rgba(37, 99, 235, 0.3)", _dark: "rgba(96, 165, 250, 0.3)" } }
            },
            wheat: {
              "1": { value: { _light: "{colors.wheat.light.1}", _dark: "{colors.wheat.dark.1}" } },
              "2": { value: { _light: "{colors.wheat.light.2}", _dark: "{colors.wheat.dark.2}" } },
              "3": { value: { _light: "{colors.wheat.light.3}", _dark: "{colors.wheat.dark.3}" } },
              "4": { value: { _light: "{colors.wheat.light.4}", _dark: "{colors.wheat.dark.4}" } },
              "5": { value: { _light: "{colors.wheat.light.5}", _dark: "{colors.wheat.dark.5}" } },
              "6": { value: { _light: "{colors.wheat.light.6}", _dark: "{colors.wheat.dark.6}" } },
              "7": { value: { _light: "{colors.wheat.light.7}", _dark: "{colors.wheat.dark.7}" } },
              "8": { value: { _light: "{colors.wheat.light.8}", _dark: "{colors.wheat.dark.8}" } },
              "9": { value: { _light: "{colors.wheat.light.9}", _dark: "{colors.wheat.dark.9}" } },
              "10": { value: { _light: "{colors.wheat.light.10}", _dark: "{colors.wheat.dark.10}" } },
              "11": { value: { _light: "{colors.wheat.light.11}", _dark: "{colors.wheat.dark.11}" } },
              "12": { value: { _light: "{colors.wheat.light.12}", _dark: "{colors.wheat.dark.12}" } },
              default: { value: { _light: "{colors.wheat.light.9}", _dark: "{colors.wheat.dark.9}" } },
              emphasized: { value: { _light: "{colors.wheat.light.10}", _dark: "{colors.wheat.dark.10}" } },
              fg: { value: { _light: "{colors.wheat.light.12}", _dark: "{colors.wheat.dark.1}" } },
              text: { value: { _light: "{colors.wheat.light.11}", _dark: "{colors.wheat.dark.11}" } }
            }
          }
        },
        textStyles,
        keyframes,
        recipes: {
          button: buttonRecipe
        },
        slotRecipes: {
          card: cardSlotRecipe
        }
      }
    },
    globalCss
  });
}
// src/utils.ts
import { cx } from "styled-system/css";
function cn(...inputs) {
  return cx(...inputs.filter(Boolean));
}
export {
  cx,
  createAxionicPreset,
  cn,
  axionicTeal,
  axionicSand
};

//# debugId=A4921B06A822108764756E2164756E21
//# sourceMappingURL=index.js.map
