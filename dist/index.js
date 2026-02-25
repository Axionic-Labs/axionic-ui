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
      "1": { value: "#081618" },
      "2": { value: "#1a2e30" },
      "3": { value: "#1e3538" },
      "4": { value: "#223e42" },
      "5": { value: "#2a4a50" },
      "6": { value: "#305558" },
      "7": { value: "#345c62" },
      "8": { value: "#4a7a82" },
      "9": { value: "#5a9aa4" },
      "10": { value: "#6eb0ba" },
      "11": { value: "#a0d8e0" },
      "12": { value: "#e1fdff" },
      a1: { value: "rgba(0, 0, 0, 0)" },
      a2: { value: "rgba(0, 200, 220, 0.06)" },
      a3: { value: "rgba(0, 200, 220, 0.10)" },
      a4: { value: "rgba(0, 200, 220, 0.14)" },
      a5: { value: "rgba(0, 200, 220, 0.18)" },
      a6: { value: "rgba(0, 200, 220, 0.24)" },
      a7: { value: "rgba(0, 200, 220, 0.30)" },
      a8: { value: "rgba(0, 200, 220, 0.40)" },
      a9: { value: "rgba(0, 200, 220, 0.50)" },
      a10: { value: "rgba(0, 200, 220, 0.56)" },
      a11: { value: "rgba(0, 220, 240, 0.78)" },
      a12: { value: "rgba(225, 253, 255, 0.93)" }
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

// src/theme/recipes/absolute-center.ts
import { defineRecipe } from "@pandacss/dev";
var absoluteCenter = defineRecipe({
  className: "absolute-center",
  base: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  defaultVariants: {
    axis: "both"
  },
  variants: {
    axis: {
      horizontal: {
        insetStart: "50%",
        translate: "-50%",
        _rtl: {
          translate: "50%"
        }
      },
      vertical: {
        top: "50%",
        translate: "0 -50%"
      },
      both: {
        insetStart: "50%",
        top: "50%",
        translate: "-50% -50%",
        _rtl: {
          translate: "50% -50%"
        }
      }
    }
  }
});

// src/theme/recipes/accordion.ts
import { accordionAnatomy } from "@ark-ui/react/anatomy";
import { defineSlotRecipe } from "@pandacss/dev";
var accordion = defineSlotRecipe({
  className: "accordion",
  slots: accordionAnatomy.extendWith("itemBody").keys(),
  base: {
    root: {
      width: "full",
      "--accordion-radius": "radii.l2"
    },
    item: {
      overflowAnchor: "none"
    },
    itemTrigger: {
      alignItems: "center",
      borderRadius: "var(--accordion-radius)",
      color: "fg.default",
      cursor: "pointer",
      display: "flex",
      fontWeight: "semibold",
      gap: "3",
      justifyContent: "space-between",
      textAlign: "start",
      textStyle: "lg",
      width: "full",
      _focusVisible: {
        outline: "2px solid",
        outlineColor: "colorPalette.focusRing"
      },
      _disabled: {
        layerStyle: "disabled"
      }
    },
    itemIndicator: {
      transition: "rotate 0.2s",
      transformOrigin: "center",
      color: "fg.subtle",
      _open: {
        rotate: "180deg"
      },
      _icon: {
        width: "1.2em",
        height: "1.2em"
      }
    },
    itemBody: {
      pb: "calc(var(--accordion-padding-y) * 2)",
      color: "fg.muted"
    },
    itemContent: {
      overflow: "hidden",
      borderRadius: "var(--accordion-radius)",
      _open: {
        animationName: "expand-height, fade-in",
        animationDuration: "normal"
      },
      _closed: {
        animationName: "collapse-height, fade-out",
        animationDuration: "normal"
      }
    }
  },
  defaultVariants: {
    size: "md",
    variant: "outline"
  },
  variants: {
    variant: {
      outline: {
        item: {
          borderBottomWidth: "1px"
        }
      },
      plain: {}
    },
    size: {
      md: {
        root: {
          "--accordion-padding-x": "spacing.4",
          "--accordion-padding-y": "spacing.2.5"
        },
        itemTrigger: {
          textStyle: "md",
          py: "var(--accordion-padding-y)"
        }
      }
    }
  }
});

// src/theme/recipes/alert.ts
import { defineSlotRecipe as defineSlotRecipe2 } from "@pandacss/dev";
var alert = defineSlotRecipe2({
  className: "alert",
  slots: ["root", "content", "description", "indicator", "title"],
  base: {
    root: {
      alignItems: "flex-start",
      borderRadius: "l3",
      display: "flex",
      position: "relative",
      width: "full"
    },
    content: {
      display: "flex",
      flex: "1",
      flexDirection: "column",
      gap: "1"
    },
    description: {
      display: "inline"
    },
    indicator: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: "0"
    },
    title: {
      fontWeight: "semibold"
    }
  },
  defaultVariants: {
    size: "md",
    status: "info",
    variant: "subtle"
  },
  variants: {
    size: {
      md: {
        root: {
          gap: "3",
          p: "4",
          textStyle: "sm"
        },
        indicator: {
          _icon: {
            width: "5",
            height: "5"
          }
        }
      },
      lg: {
        root: {
          gap: "4",
          p: "4",
          textStyle: "md"
        },
        indicator: {
          _icon: {
            width: "6",
            height: "6"
          }
        }
      }
    },
    variant: {
      solid: {
        root: {
          bg: "colorPalette.solid.bg",
          color: "colorPalette.solid.fg"
        }
      },
      surface: {
        root: {
          bg: "colorPalette.surface.bg",
          borderWidth: "1px",
          borderColor: "colorPalette.surface.border",
          color: "colorPalette.surface.fg"
        }
      },
      subtle: {
        root: {
          bg: "colorPalette.subtle.bg",
          color: "colorPalette.subtle.fg"
        }
      },
      outline: {
        root: {
          borderWidth: "1px",
          borderColor: "colorPalette.outline.border",
          color: "colorPalette.outline.fg"
        }
      }
    },
    status: {
      info: {
        root: { colorPalette: "blue" }
      },
      warning: {
        root: { colorPalette: "orange" }
      },
      success: {
        root: { colorPalette: "green" }
      },
      error: {
        root: { colorPalette: "red" }
      },
      neutral: {}
    }
  }
});

// src/theme/recipes/avatar.ts
import { avatarAnatomy } from "@ark-ui/react/anatomy";
import { defineSlotRecipe as defineSlotRecipe3 } from "@pandacss/dev";
var avatar = defineSlotRecipe3({
  className: "avatar",
  slots: avatarAnatomy.keys(),
  base: {
    root: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "medium",
      position: "relative",
      verticalAlign: "top",
      flexShrink: "0",
      userSelect: "none",
      width: "var(--avatar-size)",
      height: "var(--avatar-size)",
      fontSize: "var(--avatar-font-size)",
      borderRadius: "var(--avatar-radius)"
    },
    fallback: {
      lineHeight: "1",
      textTransform: "uppercase",
      fontWeight: "medium",
      fontSize: "var(--avatar-font-size)",
      borderRadius: "var(--avatar-radius)"
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "var(--avatar-radius)"
    }
  },
  defaultVariants: {
    size: "md",
    shape: "full",
    variant: "subtle"
  },
  variants: {
    size: {
      full: {
        root: {
          "--avatar-size": "100%",
          "--avatar-font-size": "100%"
        }
      },
      "2xs": {
        root: {
          "--avatar-font-size": "fontSizes.2xs",
          "--avatar-size": "sizes.6"
        },
        fallback: {
          _icon: { width: "3", height: "3" }
        }
      },
      xs: {
        root: {
          "--avatar-font-size": "fontSizes.xs",
          "--avatar-size": "sizes.8"
        },
        fallback: {
          _icon: { width: "4", height: "4" }
        }
      },
      sm: {
        root: {
          "--avatar-font-size": "fontSizes.sm",
          "--avatar-size": "sizes.9"
        },
        fallback: {
          _icon: { width: "4.5", height: "4.5" }
        }
      },
      md: {
        root: {
          "--avatar-font-size": "fontSizes.md",
          "--avatar-size": "sizes.10"
        },
        fallback: {
          _icon: { width: "5", height: "5" }
        }
      },
      lg: {
        root: {
          "--avatar-font-size": "fontSizes.md",
          "--avatar-size": "sizes.11"
        },
        fallback: {
          _icon: { width: "5.5", height: "5.5" }
        }
      },
      xl: {
        root: {
          "--avatar-font-size": "fontSizes.lg",
          "--avatar-size": "sizes.12"
        },
        fallback: {
          _icon: { width: "6", height: "6" }
        }
      },
      "2xl": {
        root: {
          "--avatar-font-size": "fontSizes.xl",
          "--avatar-size": "sizes.16"
        },
        fallback: {
          _icon: { width: "8", height: "8" }
        }
      }
    },
    variant: {
      solid: {
        root: {
          bg: "colorPalette.solid.bg",
          color: "colorPalette.solid.fg"
        }
      },
      surface: {
        root: {
          bg: "colorPalette.surface.bg",
          borderWidth: "1px",
          borderColor: "colorPalette.surface.border",
          color: "colorPalette.surface.fg"
        }
      },
      subtle: {
        root: {
          bg: "colorPalette.subtle.bg",
          color: "colorPalette.subtle.fg"
        }
      },
      outline: {
        root: {
          borderWidth: "1px",
          borderColor: "colorPalette.outline.border",
          color: "colorPalette.outline.fg"
        }
      }
    },
    shape: {
      square: {},
      rounded: {
        root: { "--avatar-radius": "radii.l3" }
      },
      full: {
        root: { "--avatar-radius": "radii.full" }
      }
    }
  }
});

// src/theme/recipes/badge.ts
import { defineRecipe as defineRecipe2 } from "@pandacss/dev";
var badge = defineRecipe2({
  className: "badge",
  base: {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: "l2",
    lineHeight: "1",
    fontWeight: "medium",
    fontVariantNumeric: "tabular-nums",
    whiteSpace: "nowrap",
    userSelect: "none"
  },
  defaultVariants: {
    variant: "subtle",
    size: "md"
  },
  variants: {
    variant: {
      solid: {
        bg: "colorPalette.solid.bg",
        color: "colorPalette.solid.fg"
      },
      surface: {
        bg: "colorPalette.surface.bg",
        borderWidth: "1px",
        borderColor: "colorPalette.surface.border",
        color: "colorPalette.surface.fg"
      },
      subtle: {
        bg: "colorPalette.subtle.bg",
        color: "colorPalette.subtle.fg"
      },
      outline: {
        borderWidth: "1px",
        borderColor: "colorPalette.outline.border",
        color: "colorPalette.outline.fg"
      }
    },
    size: {
      sm: { fontSize: "xs", px: "1.5", h: "4.5", gap: "0.5", _icon: { boxSize: "2.5" } },
      md: { fontSize: "xs", px: "2", h: "5", gap: "1", _icon: { boxSize: "3" } },
      lg: { fontSize: "xs", px: "2.5", h: "5.5", gap: "1", _icon: { boxSize: "3.5" } },
      xl: { fontSize: "sm", px: "2.5", h: "6", gap: "1.5", _icon: { boxSize: "4" } },
      "2xl": { fontSize: "md", px: "3", h: "7", gap: "1.5", _icon: { boxSize: "4.5" } }
    }
  }
});

// src/theme/recipes/breadcrumb.ts
import { defineSlotRecipe as defineSlotRecipe4 } from "@pandacss/dev";
var breadcrumb = defineSlotRecipe4({
  className: "breadcrumb",
  slots: ["root", "list", "link", "item", "separator", "ellipsis"],
  base: {
    list: {
      alignItems: "center",
      display: "flex",
      listStyle: "none",
      wordBreak: "break-word"
    },
    link: {
      alignItems: "center",
      borderRadius: "l1",
      display: "inline-flex",
      focusRing: "outside",
      gap: "2",
      outline: "0",
      textDecoration: "none",
      transition: "color",
      _icon: { boxSize: "1em" }
    },
    item: {
      display: "inline-flex",
      alignItems: "center",
      color: "fg.muted",
      _last: {
        color: "fg.default"
      }
    },
    separator: {
      color: "fg.subtle",
      _icon: { boxSize: "1em" },
      _rtl: { rotate: "180deg" }
    },
    ellipsis: {
      alignItems: "center",
      color: "fg.muted",
      display: "inline-flex",
      justifyContent: "center",
      _icon: { boxSize: "1em" }
    }
  },
  variants: {
    variant: {
      underline: {
        link: {
          textDecoration: "underline",
          textDecorationThickness: "0.1em",
          textUnderlineOffset: "0.125em",
          textDecorationColor: "fg.subtle",
          _hover: { textDecorationColor: "fg.default" }
        }
      },
      plain: {
        link: {
          color: "fg.muted",
          _hover: { color: "fg.default" },
          _currentPage: { color: "fg.default" }
        }
      }
    },
    size: {
      xs: { list: { gap: "1", textStyle: "xs" } },
      sm: { list: { gap: "1", textStyle: "sm" } },
      md: { list: { gap: "1.5", textStyle: "md" } },
      lg: { list: { gap: "2", textStyle: "lg" } }
    }
  },
  defaultVariants: {
    variant: "plain",
    size: "md"
  }
});

// src/theme/recipes/button.ts
import { defineRecipe as defineRecipe3 } from "@pandacss/dev";
var button = defineRecipe3({
  className: "button",
  jsx: ["Button", "IconButton", "CloseButton", "ButtonGroup"],
  base: {
    alignItems: "center",
    appearance: "none",
    borderRadius: "l2",
    cursor: "pointer",
    display: "inline-flex",
    flexShrink: "0",
    fontWeight: "semibold",
    gap: "2",
    isolation: "isolate",
    justifyContent: "center",
    outline: "0",
    position: "relative",
    transition: "colors",
    transitionProperty: "background-color, border-color, color, box-shadow",
    userSelect: "none",
    verticalAlign: "middle",
    whiteSpace: "nowrap",
    _icon: {
      flexShrink: "0"
    },
    _disabled: {
      layerStyle: "disabled"
    },
    focusVisibleRing: "outside"
  },
  defaultVariants: {
    variant: "solid",
    size: "md"
  },
  variants: {
    variant: {
      solid: {
        bg: "colorPalette.solid.bg",
        color: "colorPalette.solid.fg",
        _hover: {
          bg: "colorPalette.solid.bg.hover"
        }
      },
      surface: {
        bg: "colorPalette.surface.bg",
        borderWidth: "1px",
        borderColor: "colorPalette.surface.border",
        color: "colorPalette.surface.fg",
        _hover: {
          borderColor: "colorPalette.surface.border.hover"
        },
        _active: {
          bg: "colorPalette.surface.bg.active"
        },
        _on: {
          bg: "colorPalette.surface.bg.active"
        }
      },
      subtle: {
        bg: "colorPalette.subtle.bg",
        color: "colorPalette.subtle.fg",
        _hover: {
          bg: "colorPalette.subtle.bg.hover"
        },
        _active: {
          bg: "colorPalette.subtle.bg.active"
        },
        _on: {
          bg: "colorPalette.subtle.bg.active"
        }
      },
      outline: {
        borderWidth: "1px",
        borderColor: "colorPalette.outline.border",
        color: "colorPalette.outline.fg",
        _hover: {
          bg: "colorPalette.outline.bg.hover"
        },
        _active: {
          bg: "colorPalette.outline.bg.active"
        },
        _on: {
          bg: "colorPalette.outline.bg.active"
        }
      },
      plain: {
        color: "colorPalette.plain.fg",
        _hover: {
          bg: "colorPalette.plain.bg.hover"
        },
        _active: {
          bg: "colorPalette.plain.bg.active"
        },
        _on: {
          bg: "colorPalette.plain.bg.active"
        }
      },
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
    },
    size: {
      "2xs": { h: "6", minW: "6", textStyle: "xs", px: "2", _icon: { boxSize: "3.5" } },
      xs: { h: "8", minW: "8", textStyle: "sm", px: "2.5", _icon: { boxSize: "4" } },
      sm: { h: "9", minW: "9", textStyle: "sm", px: "3", _icon: { boxSize: "4" } },
      md: { h: "10", minW: "10", textStyle: "sm", px: "3.5", _icon: { boxSize: "5" } },
      lg: { h: "11", minW: "11", textStyle: "md", px: "4", _icon: { boxSize: "5" } },
      xl: { h: "12", minW: "12", textStyle: "md", px: "4.5", _icon: { boxSize: "5.5" } },
      "2xl": { h: "16", minW: "16", textStyle: "xl", px: "6", _icon: { boxSize: "6" } }
    }
  }
});

// src/theme/recipes/card.ts
import { defineSlotRecipe as defineSlotRecipe5 } from "@pandacss/dev";
var card = defineSlotRecipe5({
  className: "card",
  slots: ["root", "header", "body", "footer", "title", "description"],
  base: {
    root: {
      borderRadius: "l3",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      position: "relative"
    },
    header: {
      display: "flex",
      flexDirection: "column",
      gap: "1",
      p: "6"
    },
    body: {
      display: "flex",
      flex: "1",
      flexDirection: "column",
      pb: "6",
      px: "6"
    },
    footer: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "3",
      pb: "6",
      pt: "2",
      px: "6"
    },
    title: {
      textStyle: "lg",
      fontWeight: "semibold"
    },
    description: {
      color: "fg.muted",
      textStyle: "sm"
    }
  },
  defaultVariants: {
    variant: "outline"
  },
  variants: {
    variant: {
      elevated: {
        root: {
          bg: "gray.surface.bg",
          boxShadow: "lg"
        }
      },
      outline: {
        root: {
          bg: "gray.surface.bg",
          borderWidth: "1px"
        }
      },
      subtle: {
        root: {
          bg: "gray.subtle.bg"
        }
      }
    },
    hover: {
      true: {
        root: {
          cursor: "pointer",
          transition: "all 0.2s",
          _hover: {
            boxShadow: "lg",
            borderColor: "colorPalette.7",
            transform: "translateY(-1px)"
          },
          _focusVisible: {
            outline: "2px solid",
            outlineColor: "colorPalette.8",
            outlineOffset: "2px"
          }
        }
      }
    },
    dashed: {
      true: {
        root: {
          borderStyle: "dashed",
          bg: "gray.subtle.bg/50"
        }
      }
    }
  }
});

// src/theme/recipes/carousel.ts
import { carouselAnatomy } from "@ark-ui/react/anatomy";
import { defineSlotRecipe as defineSlotRecipe6 } from "@pandacss/dev";
var carousel = defineSlotRecipe6({
  className: "carousel",
  slots: carouselAnatomy.keys(),
  base: {
    root: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "2",
      _vertical: {
        flexDirection: "row"
      }
    },
    control: {
      alignItems: "center",
      justifyContent: "space-between",
      borderRadius: "l2",
      display: "flex",
      _vertical: {
        flexDirection: "column"
      }
    },
    itemGroup: {
      flex: "1"
    },
    indicatorGroup: {
      display: "flex",
      _vertical: {
        flexDirection: "column"
      }
    },
    indicator: {
      borderRadius: "full",
      background: "gray.subtle.bg",
      cursor: "pointer",
      _current: {
        background: "colorPalette.solid.bg"
      },
      focusVisibleRing: "outside"
    }
  },
  defaultVariants: {
    size: "md"
  },
  variants: {
    inline: {
      true: {
        control: {
          background: { _light: "white.a11", _dark: "black.a11" },
          bottom: "3",
          left: "50%",
          p: "1",
          position: "absolute",
          transform: "translateX(-50%)"
        }
      }
    },
    size: {
      md: {
        control: {
          gap: "3"
        },
        indicatorGroup: {
          gap: "3"
        },
        indicator: {
          boxSize: "2.5"
        }
      }
    }
  }
});

// src/theme/recipes/checkbox.ts
import { checkboxAnatomy } from "@ark-ui/react/anatomy";
import { defineSlotRecipe as defineSlotRecipe7 } from "@pandacss/dev";
var checkbox = defineSlotRecipe7({
  slots: checkboxAnatomy.keys(),
  className: "checkbox",
  base: {
    root: {
      display: "inline-flex",
      gap: "2",
      alignItems: "center",
      verticalAlign: "top",
      position: "relative",
      _disabled: {
        layerStyle: "disabled"
      }
    },
    control: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: "0",
      borderWidth: "1px",
      borderColor: "transparent",
      borderRadius: "l1",
      cursor: "pointer",
      focusVisibleRing: "outside",
      _icon: {
        boxSize: "full"
      }
    },
    label: {
      fontWeight: "medium",
      userSelect: "none"
    }
  },
  variants: {
    size: {
      sm: {
        root: { gap: "2" },
        label: { textStyle: "sm" },
        control: { boxSize: "4.5", _icon: { boxSize: "3" } }
      },
      md: {
        root: { gap: "3" },
        label: { textStyle: "md" },
        control: { boxSize: "5", _icon: { boxSize: "3.5" } }
      },
      lg: {
        root: { gap: "3" },
        label: { textStyle: "lg" },
        control: { boxSize: "5.5", _icon: { boxSize: "4" } }
      }
    },
    variant: {
      solid: {
        control: {
          control: {
            borderColor: "border",
            _checked: {
              bg: "colorPalette.solid.bg",
              borderColor: "colorPalette.solid.bg",
              color: "colorPalette.solid.fg"
            },
            _invalid: {
              background: "error"
            }
          }
        }
      },
      surface: {
        control: {
          bg: "colorPalette.surface.bg",
          borderWidth: "1px",
          borderColor: "colorPalette.surface.border",
          color: "colorPalette.surface.fg"
        }
      },
      subtle: {
        control: {
          bg: "colorPalette.subtle.bg",
          color: "colorPalette.subtle.fg"
        }
      },
      outline: {
        control: {
          borderWidth: "1px",
          borderColor: "colorPalette.outline.border",
          color: "colorPalette.outline.fg",
          _checked: {
            borderColor: "colorPalette.solid.bg"
          }
        }
      },
      plain: {
        control: {
          color: "colorPalette.plain.fg"
        }
      }
    }
  },
  defaultVariants: {
    variant: "solid",
    size: "md"
  }
});

// src/theme/recipes/clipboard.ts
import { clipboardAnatomy } from "@ark-ui/react/anatomy";
import { defineSlotRecipe as defineSlotRecipe8 } from "@pandacss/dev";
var clipboard = defineSlotRecipe8({
  className: "clipboard",
  slots: clipboardAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "1.5"
    },
    label: {
      fontWeight: "medium",
      textStyle: "sm",
      color: "fg.default",
      gap: "0.5"
    }
  }
});

// src/theme/recipes/code.ts
import { defineRecipe as defineRecipe4 } from "@pandacss/dev";
var code = defineRecipe4({
  className: "code",
  base: {
    alignItems: "center",
    borderRadius: "l2",
    display: "inline-flex",
    fontVariantNumeric: "tabular-nums",
    fontWeight: "medium",
    fontFamily: "code",
    gap: "1",
    lineHeight: "1"
  },
  defaultVariants: {
    size: "md",
    variant: "subtle"
  },
  variants: {
    variant: {
      solid: {
        bg: "colorPalette.solid.bg",
        color: "colorPalette.solid.fg"
      },
      surface: {
        bg: "colorPalette.surface.bg",
        borderWidth: "1px",
        borderColor: "colorPalette.surface.border",
        color: "colorPalette.surface.fg"
      },
      subtle: {
        bg: "colorPalette.subtle.bg",
        color: "colorPalette.subtle.fg"
      },
      outline: {
        borderWidth: "1px",
        borderColor: "colorPalette.outline.border",
        color: "colorPalette.outline.fg"
      },
      plain: {
        color: "colorPalette.plain.fg"
      }
    },
    size: {
      sm: { textStyle: "xs", height: "4.5", minWidth: "4.5", px: "1" },
      md: { textStyle: "sm", height: "5", minWidth: "5", px: "1" },
      lg: { textStyle: "sm", height: "5.5", minWidth: "5.5", px: "1" },
      xl: { textStyle: "md", height: "6", minWidth: "6", px: "1" }
    }
  }
});

// src/theme/recipes/collapsible.ts
import { collapsibleAnatomy } from "@ark-ui/react/anatomy";
import { defineSlotRecipe as defineSlotRecipe9 } from "@pandacss/dev";
var collapsible = defineSlotRecipe9({
  className: "collapsible",
  slots: collapsibleAnatomy.keys(),
  base: {
    content: {
      overflow: "hidden",
      _open: {
        animationName: "expand-height, fade-in",
        animationDuration: "slow"
      },
      _closed: {
        animationName: "collapse-height, fade-out",
        animationDuration: "normal"
      }
    }
  }
});

// src/theme/recipes/color-picker.ts
import { colorPickerAnatomy } from "@ark-ui/react/anatomy";
import { defineSlotRecipe as defineSlotRecipe10 } from "@pandacss/dev";
var colorPicker = defineSlotRecipe10({
  className: "color-picker",
  slots: colorPickerAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5"
    },
    label: {
      color: "fg.default",
      fontWeight: "medium",
      textStyle: "sm"
    },
    control: {
      display: "flex",
      flexDirection: "row",
      gap: "2"
    },
    content: {
      background: "gray.surface.bg",
      borderRadius: "l3",
      boxShadow: "lg",
      display: "flex",
      flexDirection: "column",
      maxWidth: "sm",
      p: "4",
      zIndex: "dropdown",
      _open: {
        animation: "fadeIn 0.25s ease-out"
      },
      _closed: {
        animation: "fadeOut 0.2s ease-out"
      },
      _hidden: {
        display: "none"
      }
    },
    area: {
      height: "36",
      borderRadius: "l2",
      overflow: "hidden"
    },
    areaThumb: {
      borderRadius: "full",
      height: "2.5",
      width: "2.5",
      boxShadow: "white 0px 0px 0px 2px, black 0px 0px 2px 1px",
      outline: "none"
    },
    areaBackground: {
      height: "full"
    },
    channelSlider: {
      borderRadius: "l2"
    },
    channelSliderTrack: {
      height: "3",
      borderRadius: "l2"
    },
    swatchGroup: {
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
      gap: "2",
      background: "gray.surface.bg"
    },
    swatch: {
      height: "6",
      width: "6",
      borderRadius: "l2",
      boxShadow: "0 0 0 1px var(--colors-border-emphasized), 0 0 0 2px var(--colors-bg-default) inset"
    },
    channelSliderThumb: {
      borderRadius: "full",
      height: "2.5",
      width: "2.5",
      boxShadow: "white 0px 0px 0px 2px, black 0px 0px 2px 1px",
      transform: "translate(-50%, -50%)",
      outline: "none"
    },
    transparencyGrid: {
      borderRadius: "l2"
    }
  }
});

// src/theme/recipes/combobox.ts
import { comboboxAnatomy } from "@ark-ui/react/anatomy";
import { defineSlotRecipe as defineSlotRecipe11 } from "@pandacss/dev";

// src/theme/recipes/input.ts
var input = {
  className: "input",
  jsx: ["Input", "Field.Input"],
  base: {
    appearance: "none",
    borderRadius: "l2",
    height: "var(--input-height)",
    minHeight: "var(--input-height)",
    minW: "var(--input-height)",
    outline: "0",
    position: "relative",
    textAlign: "start",
    transition: "colors",
    width: "100%",
    _disabled: {
      layerStyle: "disabled"
    }
  },
  defaultVariants: {
    size: "md",
    variant: "outline"
  },
  variants: {
    variant: {
      outline: {
        borderWidth: "1px",
        borderColor: "gray.outline.border",
        focusVisibleRing: "inside",
        _invalid: {
          focusRingColor: "error",
          borderColor: "error"
        }
      },
      surface: {
        bg: "gray.surface.bg",
        borderWidth: "1px",
        borderColor: "gray.surface.border",
        focusVisibleRing: "inside",
        _invalid: {
          focusRingColor: "error",
          borderColor: "error"
        }
      },
      subtle: {
        borderWidth: "1px",
        borderColor: "transparent",
        bg: "gray.subtle.bg",
        color: "gray.subtle.fg",
        focusVisibleRing: "inside",
        _invalid: {
          focusRingColor: "error",
          borderColor: "error"
        }
      },
      flushed: {
        borderBottomWidth: "1px",
        borderBottomColor: "gray.outline.border",
        borderRadius: "0",
        color: "fg.default",
        px: "0",
        _invalid: {
          borderColor: "error"
        },
        _focus: {
          borderColor: "colorPalette.solid.bg",
          boxShadowColor: "colorPalette.solid.bg",
          boxShadow: "0 1px 0 0 var(--shadow-color)",
          _invalid: {
            borderColor: "error",
            boxShadowColor: "error"
          }
        }
      }
    },
    size: {
      "2xs": { textStyle: "xs", px: "1.5", "--input-height": "sizes.7" },
      xs: { textStyle: "sm", px: "2", "--input-height": "sizes.8" },
      sm: { textStyle: "sm", px: "2.5", "--input-height": "sizes.9" },
      md: { textStyle: "md", px: "3", "--input-height": "sizes.10" },
      lg: { textStyle: "md", px: "3.5", "--input-height": "sizes.11" },
      xl: { textStyle: "lg", px: "4", "--input-height": "sizes.12" },
      "2xl": { textStyle: "3xl", px: "4.5", "--input-height": "sizes.16" }
    }
  }
};

// src/theme/recipes/combobox.ts
var combobox = defineSlotRecipe11({
  className: "combobox",
  slots: comboboxAnatomy.extendWith("indicatorGroup").keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5",
      width: "full"
    },
    label: {
      textStyle: "label"
    },
    input: {
      ...input.base,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    },
    control: {
      position: "relative"
    },
    content: {
      background: "gray.surface.bg",
      borderRadius: "l2",
      boxShadow: "md",
      display: "flex",
      flexDirection: "column",
      maxH: "min(var(--available-height), {sizes.96})",
      minWidth: "max(var(--reference-width), {sizes.40})",
      outline: "0",
      overflowY: "auto",
      zIndex: "dropdown",
      _open: {
        animationStyle: "slide-fade-in",
        animationDuration: "slow"
      },
      _closed: {
        animationStyle: "slide-fade-out",
        animationDuration: "fastest"
      },
      "&[data-empty]:not(:has([data-scope=combobox][data-part=empty]))": {
        opacity: 0
      }
    },
    item: {
      alignItems: "center",
      borderRadius: "l1",
      cursor: "pointer",
      display: "flex",
      justifyContent: "space-between",
      _hover: {
        background: "gray.surface.bg.hover"
      },
      _highlighted: {
        background: "gray.surface.bg.hover"
      },
      _selected: {},
      _disabled: {
        layerStyle: "disabled"
      }
    },
    itemGroup: {
      display: "flex",
      flexDirection: "column"
    },
    itemGroupLabel: {
      alignItems: "flex-start",
      color: "fg.subtle",
      display: "flex",
      flexDirection: "column",
      fontWeight: "medium",
      gap: "1px",
      justifyContent: "center",
      _after: {
        content: '""',
        width: "100%",
        height: "1px",
        bg: "border"
      }
    },
    itemIndicator: {
      color: "colorPalette.plain.fg"
    },
    indicatorGroup: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "1",
      pos: "absolute",
      insetEnd: "0",
      top: "0",
      bottom: "0"
    },
    trigger: {
      color: "fg.subtle"
    },
    clearTrigger: {
      color: "fg.muted"
    },
    empty: {
      display: "flex",
      alignItems: "center",
      color: "fg.subtle"
    }
  },
  defaultVariants: {
    size: "md",
    variant: "outline"
  },
  variants: {
    variant: {
      outline: {
        input: input.variants.variant.outline
      },
      surface: {
        input: input.variants.variant.surface
      },
      subtle: {
        input: input.variants.variant.subtle
      }
    },
    size: {
      xs: {
        input: {
          ...input.variants.size.xs,
          pe: "12"
        },
        content: { p: "1", gap: "0.5", textStyle: "sm" },
        item: { px: "1", minH: "8", gap: "2", _icon: { boxSize: "3.5" } },
        itemGroup: { gap: "0.5" },
        itemGroupLabel: { px: "1", height: "8" },
        indicatorGroup: { px: "2", _icon: { boxSize: "3.5" } },
        empty: { px: "1", minH: "8" }
      },
      sm: {
        input: {
          ...input.variants.size.sm,
          pe: "14"
        },
        content: { p: "1", gap: "0.5", textStyle: "sm" },
        item: { px: "1.5", minH: "9", gap: "2", _icon: { boxSize: "4" } },
        itemGroup: { gap: "0.5" },
        itemGroupLabel: { px: "1.5", height: "9" },
        indicatorGroup: { px: "2.5", _icon: { boxSize: "4" } },
        empty: { px: "1.5", minH: "9" }
      },
      md: {
        input: {
          ...input.variants.size.md,
          pe: "14"
        },
        content: { p: "1", gap: "0.5", textStyle: "md" },
        indicatorGroup: { px: "3", _icon: { boxSize: "4" } },
        item: { px: "2", minH: "10", gap: "2", _icon: { boxSize: "4" } },
        itemGroup: { gap: "0.5" },
        itemGroupLabel: { px: "2", height: "10" },
        empty: { px: "2", minH: "10" }
      },
      lg: {
        input: {
          ...input.variants.size.lg,
          pe: "16"
        },
        content: { p: "1", gap: "0.5", textStyle: "md" },
        item: { px: "2.5", minH: "11", gap: "2", _icon: { boxSize: "4.5" } },
        itemGroup: { gap: "0.5" },
        itemGroupLabel: { px: "2.5", height: "11" },
        indicatorGroup: { px: "3.5", _icon: { boxSize: "4.5" } },
        empty: { px: "2.5", minH: "11" }
      },
      xl: {
        input: {
          ...input.variants.size.xl,
          pe: "16"
        },
        content: { p: "1", gap: "1", textStyle: "lg" },
        item: { px: "3", minH: "12", gap: "3", _icon: { boxSize: "5" } },
        itemGroup: { gap: "1" },
        itemGroupLabel: { px: "3", height: "12" },
        indicatorGroup: { px: "4", _icon: { boxSize: "5" } },
        empty: { px: "3", minH: "12" }
      }
    }
  }
});

// src/theme/recipes/date-picker.ts
import { datePickerAnatomy } from "@ark-ui/react/anatomy";
import { defineSlotRecipe as defineSlotRecipe12 } from "@pandacss/dev";
var datePicker = defineSlotRecipe12({
  className: "date-picker",
  slots: datePickerAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5"
    },
    content: {
      background: "gray.surface.bg",
      borderRadius: "l3",
      boxShadow: "lg",
      display: "flex",
      flexDirection: "column",
      gap: "3",
      p: "4",
      width: "344px",
      zIndex: "dropdown",
      _open: {
        animation: "fadeIn 0.25s ease-out"
      },
      _closed: {
        animation: "fadeOut 0.2s ease-out"
      },
      _hidden: {
        display: "none"
      }
    },
    control: {
      display: "flex",
      flexDirection: "row",
      gap: "2"
    },
    label: {
      color: "fg.default",
      fontWeight: "medium",
      textStyle: "sm"
    },
    tableHeader: {
      color: "fg.muted",
      fontWeight: "semibold",
      height: "10",
      textStyle: "sm"
    },
    viewControl: {
      display: "flex",
      gap: "2",
      justifyContent: "space-between"
    },
    table: {
      width: "full",
      borderCollapse: "separate",
      borderSpacing: "1",
      m: "-1"
    },
    tableCell: {
      textAlign: "center"
    },
    tableCellTrigger: {
      width: "100%",
      _today: {
        _before: {
          content: "'−'",
          color: "colorPalette.solid",
          position: "absolute",
          marginTop: "6"
        }
      },
      "&[data-in-range]": {
        background: "gray.subtle.bg"
      },
      _selected: {
        _before: {
          color: "colorPalette.contrast"
        }
      }
    },
    view: {
      display: "flex",
      flexDirection: "column",
      gap: "3",
      _hidden: {
        display: "none"
      }
    }
  }
});

// src/theme/recipes/dialog.ts
import { dialogAnatomy } from "@ark-ui/react/anatomy";
import { defineSlotRecipe as defineSlotRecipe13 } from "@pandacss/dev";
var dialog = defineSlotRecipe13({
  className: "dialog",
  slots: dialogAnatomy.extendWith("header", "body", "footer").keys(),
  base: {
    backdrop: {
      background: "black.a7",
      height: "100dvh",
      left: "0",
      position: "fixed",
      top: "0",
      width: "100dvw",
      zIndex: "var(--z-index)",
      _open: {
        animationName: "fade-in",
        animationTimingFunction: "emphasized-in",
        animationDuration: "normal"
      },
      _closed: {
        animationName: "fade-out",
        animationTimingFunction: "emphasized-out",
        animationDuration: "fast"
      }
    },
    positioner: {
      "--dialog-z-index": "zIndex.modal",
      display: "flex",
      height: "100dvh",
      justifyContent: "center",
      left: 0,
      overscrollBehaviorY: "none",
      position: "fixed",
      top: 0,
      width: "100dvw",
      zIndex: "calc(var(--dialog-z-index) + var(--layer-index, 0))"
    },
    title: {
      fontWeight: "semibold",
      textStyle: "lg"
    },
    description: {
      color: "fg.muted",
      textStyle: "sm"
    },
    closeTrigger: {
      pos: "absolute",
      top: "3",
      insetEnd: "3"
    },
    content: {
      "--dialog-z-index": "zIndex.modal",
      bg: "gray.surface.bg",
      borderRadius: "l3",
      boxShadow: "lg",
      display: "flex",
      flexDirection: "column",
      my: "var(--dialog-margin, var(--dialog-base-margin))",
      outline: 0,
      position: "relative",
      textStyle: "sm",
      width: "100%",
      zIndex: "calc(var(--dialog-z-index) + var(--layer-index, 0))",
      py: { base: "4", md: "6" },
      gap: { base: "4", md: "6" },
      _open: {
        animationDuration: "slowest"
      },
      _closed: {
        animationDuration: "normal"
      }
    },
    header: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5",
      px: { base: "4", md: "6" },
      flex: "0"
    },
    body: {
      display: "flex",
      flex: "1",
      flexDirection: "column",
      alignItems: "flex-start",
      px: { base: "4", md: "6" }
    },
    footer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      flex: "0",
      gap: "3",
      px: { base: "4", md: "6" }
    }
  },
  defaultVariants: {
    size: "md",
    scrollBehavior: "outside",
    placement: "center",
    motionPreset: "scale"
  },
  variants: {
    motionPreset: {
      scale: {
        content: {
          _open: { animationName: "scale-in, fade-in" },
          _closed: { animationName: "scale-out, fade-out" }
        }
      },
      "slide-in-bottom": {
        content: {
          _open: { animationName: "slide-from-bottom, fade-in" },
          _closed: { animationName: "slide-to-bottom, fade-out" }
        }
      },
      "slide-in-top": {
        content: {
          _open: { animationName: "slide-from-top, fade-in" },
          _closed: { animationName: "slide-to-top, fade-out" }
        }
      },
      "slide-in-left": {
        content: {
          _open: { animationName: "slide-from-left, fade-in" },
          _closed: { animationName: "slide-to-left, fade-out" }
        }
      },
      "slide-in-right": {
        content: {
          _open: { animationName: "slide-from-right, fade-in" },
          _closed: { animationName: "slide-to-right, fade-out" }
        }
      },
      none: {}
    },
    size: {
      xs: { content: { maxW: "xs" } },
      sm: { content: { maxW: "sm" } },
      md: { content: { maxW: "md" } },
      lg: { content: { maxW: "lg" } },
      xl: { content: { maxW: "xl" } },
      cover: {
        positioner: { padding: "8" },
        content: {
          width: "100%",
          height: "100%",
          "--dialog-margin": "0"
        }
      },
      full: {
        content: {
          maxW: "100dvw",
          minH: "100dvh",
          "--dialog-margin": "0",
          borderRadius: "0"
        }
      }
    },
    placement: {
      center: {
        positioner: {
          alignItems: "center"
        },
        content: {
          "--dialog-base-margin": "auto",
          mx: "auto"
        }
      },
      top: {
        positioner: {
          alignItems: "flex-start"
        },
        content: {
          "--dialog-base-margin": "spacing.16",
          mx: "auto"
        }
      },
      bottom: {
        positioner: {
          alignItems: "flex-end"
        },
        content: {
          "--dialog-base-margin": "spacing.16",
          mx: "auto"
        }
      }
    },
    scrollBehavior: {
      inside: {
        positioner: {
          overflow: "hidden"
        },
        content: {
          maxH: "calc(100% - 7.5rem)"
        },
        body: {
          overflow: "auto"
        }
      },
      outside: {
        positioner: {
          overflow: "auto",
          pointerEvents: "auto"
        }
      }
    }
  }
});

// src/theme/recipes/drawer.ts
import { dialogAnatomy as dialogAnatomy2 } from "@ark-ui/react/anatomy";
import { defineSlotRecipe as defineSlotRecipe14 } from "@pandacss/dev";
var drawer = defineSlotRecipe14({
  className: "drawer",
  slots: dialogAnatomy2.extendWith("header", "body", "footer").keys(),
  base: {
    backdrop: {
      background: "black.a7",
      position: "fixed",
      insetInlineStart: "0",
      top: "0",
      width: "100vw",
      height: "100dvh",
      zIndex: "overlay",
      _open: {
        animationName: "fade-in",
        animationTimingFunction: "emphasized-in",
        animationDuration: "slow"
      },
      _closed: {
        animationName: "fade-out",
        animationTimingFunction: "emphasized-out",
        animationDuration: "normal"
      }
    },
    positioner: {
      display: "flex",
      width: "100vw",
      height: "100dvh",
      position: "fixed",
      insetInlineStart: "0",
      top: "0",
      zIndex: "modal",
      overscrollBehaviorY: "none"
    },
    content: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      zIndex: "modal",
      maxH: "100dvh",
      color: "inherit",
      bg: "gray.surface.bg",
      boxShadow: "lg",
      _open: {
        animationDuration: "slowest",
        animationTimingFunction: "cubic-bezier(0.05, 0.7, 0.1, 1.0)"
      },
      _closed: {
        animationDuration: "normal",
        animationTimingFunction: "cubic-bezier(0.3, 0.0, 0.8, 0.15)"
      }
    },
    header: {
      display: "flex",
      flexDirection: "column",
      gap: "1",
      pt: { base: "4", md: "6" },
      pb: "4",
      px: { base: "4", md: "6" },
      flex: "0"
    },
    body: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flex: "1",
      overflow: "auto",
      p: { base: "4", md: "6" }
    },
    footer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      flex: "0",
      gap: "3",
      py: "4",
      px: { base: "4", md: "6" }
    },
    title: {
      color: "fg.default",
      fontWeight: "semibold",
      textStyle: "xl"
    },
    description: {
      color: "fg.muted",
      textStyle: "sm"
    },
    closeTrigger: {
      pos: "absolute",
      top: "3",
      insetEnd: "3"
    }
  },
  defaultVariants: {
    placement: "end",
    size: "sm"
  },
  variants: {
    size: {
      xs: {
        content: {
          maxW: "xs"
        }
      },
      sm: {
        content: {
          maxW: "sm"
        }
      },
      md: {
        content: {
          maxW: "md"
        }
      },
      lg: {
        content: {
          maxW: "lg"
        }
      },
      xl: {
        content: {
          maxW: "xl"
        }
      },
      full: {
        content: {
          maxW: "100vw",
          h: "100dvh"
        }
      }
    },
    placement: {
      start: {
        positioner: {
          justifyContent: "flex-start",
          alignItems: "stretch"
        },
        content: {
          _open: {
            animationName: {
              base: "slide-from-left-full, fade-in",
              _rtl: "slide-from-right-full, fade-in"
            }
          },
          _closed: {
            animationName: {
              base: "slide-to-left-full, fade-out",
              _rtl: "slide-to-right-full, fade-out"
            }
          }
        }
      },
      end: {
        positioner: {
          justifyContent: "flex-end",
          alignItems: "stretch"
        },
        content: {
          _open: {
            animationName: {
              base: "slide-from-right-full, fade-in",
              _rtl: "slide-from-left-full, fade-in"
            }
          },
          _closed: {
            animationName: {
              base: "slide-to-right-full, fade-out",
              _rtl: "slide-to-left-full, fade-out"
            }
          }
        }
      },
      top: {
        positioner: {
          justifyContent: "stretch",
          alignItems: "flex-start"
        },
        content: {
          maxW: "100%",
          _open: { animationName: "slide-from-top-full, fade-in" },
          _closed: { animationName: "slide-to-top-full, fade-out" }
        }
      },
      bottom: {
        positioner: {
          justifyContent: "stretch",
          alignItems: "flex-end"
        },
        content: {
          maxW: "100%",
          _open: { animationName: "slide-from-bottom-full, fade-in" },
          _closed: { animationName: "slide-to-bottom-full, fade-out" }
        }
      }
    }
  }
});

// src/theme/recipes/editable.ts
import { editableAnatomy } from "@ark-ui/react/anatomy";
import { defineSlotRecipe as defineSlotRecipe15 } from "@pandacss/dev";
var editable = defineSlotRecipe15({
  slots: editableAnatomy.keys(),
  className: "editable",
  base: {
    root: {
      alignItems: "center",
      display: "inline-flex",
      gap: "1.5",
      position: "relative",
      width: "full"
    },
    preview: {
      alignItems: "center",
      borderRadius: "l2",
      cursor: "default",
      display: "inline-flex",
      transitionDuration: "normal",
      transitionProperty: "common",
      _disabled: {
        userSelect: "none"
      },
      _hover: {
        bg: "gray.plain.bg.hover"
      }
    },
    input: {
      borderRadius: "l2",
      focusRingWidth: "2px",
      focusRing: "inside",
      transitionDuration: "normal",
      transitionProperty: "common",
      width: "full",
      _focusVisible: {
        outlineOffset: "-1px"
      }
    },
    control: {
      alignItems: "center",
      display: "inline-flex",
      gap: "1.5"
    }
  },
  defaultVariants: {
    size: "md"
  },
  variants: {
    size: {
      "2xs": {
        preview: { textStyle: "xs", px: "2", py: "0.5" },
        input: { textStyle: "xs", px: "2", py: "0.5" }
      },
      xs: {
        preview: { textStyle: "sm", px: "2.5", py: "1.5" },
        input: { textStyle: "sm", px: "2.5", py: "1.5" }
      },
      sm: {
        preview: { textStyle: "sm", px: "3", py: "2" },
        input: { textStyle: "sm", px: "3", py: "2" }
      },
      md: {
        preview: { textStyle: "sm", px: "3.5", py: "2.5" },
        input: { textStyle: "sm", px: "3.5", py: "2.5" }
      },
      lg: {
        preview: { textStyle: "md", px: "4", py: "2.5" },
        input: { textStyle: "md", px: "4", py: "2.5" }
      }
    }
  }
});

// src/theme/recipes/field.ts
import { fieldAnatomy } from "@ark-ui/react/anatomy";
import { defineSlotRecipe as defineSlotRecipe16 } from "@pandacss/dev";
var field = defineSlotRecipe16({
  className: "field",
  slots: fieldAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5"
    },
    label: {
      alignItems: "center",
      color: "fg.default",
      display: "flex",
      gap: "0.5",
      textAlign: "start",
      userSelect: "none",
      textStyle: "label",
      _disabled: {
        layerStyle: "disabled"
      }
    },
    requiredIndicator: {
      color: "colorPalette.solid"
    },
    helperText: {
      color: "fg.muted",
      textStyle: "sm",
      _disabled: {
        layerStyle: "disabled"
      }
    },
    errorText: {
      color: "error",
      textStyle: "sm"
    }
  }
});

// src/theme/recipes/fieldset.ts
import { fieldsetAnatomy } from "@ark-ui/react/anatomy";
import { defineSlotRecipe as defineSlotRecipe17 } from "@pandacss/dev";
var fieldset = defineSlotRecipe17({
  className: "fieldset",
  slots: fieldsetAnatomy.extendWith("content", "control").keys(),
  base: {
    root: {
      display: "flex",
      justifyContent: "space-between",
      width: "full",
      flexDirection: { base: "column", md: "row" },
      gap: { base: "5", md: "8" }
    },
    control: {
      maxW: "xs",
      display: "flex",
      flexDirection: "column",
      width: "full",
      gap: "1"
    },
    content: {
      display: "flex",
      flexDirection: "column",
      width: "full",
      maxW: "2xl",
      gap: "4"
    },
    legend: {
      color: "fg.default",
      fontWeight: "semibold"
    },
    helperText: {
      color: "fg.muted",
      textStyle: "sm"
    },
    errorText: {
      display: "inline-flex",
      alignItems: "center",
      color: "error",
      gap: "2",
      fontWeight: "medium",
      textStyle: "sm"
    }
  }
});

// src/theme/recipes/file-upload.ts
import { fileUploadAnatomy } from "@ark-ui/react/anatomy";
import { defineSlotRecipe as defineSlotRecipe18 } from "@pandacss/dev";
var fileUpload = defineSlotRecipe18({
  className: "file-upload",
  slots: fileUploadAnatomy.keys(),
  base: {
    root: {
      alignItems: "flex-start",
      display: "flex",
      flexDirection: "column",
      gap: "1.5",
      width: "full"
    },
    label: {
      textStyle: "label"
    },
    dropzone: {
      alignItems: "center",
      background: "gray.surface.bg",
      borderRadius: "l3",
      borderStyle: "dashed",
      borderWidth: "2px",
      display: "flex",
      flexDirection: "column",
      focusVisibleRing: "outside",
      justifyContent: "center",
      transition: "backgrounds",
      width: "full",
      _dragging: {
        background: "gray.surface.bg.hover",
        borderStyle: "solid",
        borderColor: "colorPalette.solid.bg"
      }
    },
    item: {
      alignItems: "start",
      animationDuration: "normal",
      animationName: "fade-in",
      background: "gray.surface.bg",
      borderRadius: "l3",
      borderWidth: "1px",
      display: "flex",
      pos: "relative",
      width: "full"
    },
    itemGroup: {
      display: "flex",
      alignItems: "start",
      flexDirection: "column",
      width: "full"
    },
    itemName: {
      color: "fg.default",
      fontWeight: "medium"
    },
    itemSizeText: {
      color: "fg.muted"
    },
    itemDeleteTrigger: {
      color: "fg.subtle"
    },
    itemPreviewImage: {
      aspectRatio: "1",
      objectFit: "cover",
      maxW: "20",
      borderRadius: "l2"
    }
  },
  defaultVariants: {
    size: "md"
  },
  variants: {
    size: {
      md: {
        root: { gap: "4" },
        dropzone: { px: "6", py: "4", minHeight: "xs", gap: "0" },
        item: { p: "4", gap: "3", textStyle: "sm" },
        itemGroup: { gap: "3" },
        itemDeleteTrigger: { _icon: { boxSize: "4" } }
      }
    }
  }
});

// src/theme/recipes/group.ts
import { defineRecipe as defineRecipe5 } from "@pandacss/dev";
var group = defineRecipe5({
  className: "group",
  base: {
    display: "inline-flex",
    position: "relative",
    gap: "2",
    "& > *": {
      _focusVisible: {
        zIndex: 1
      }
    }
  },
  defaultVariants: {
    orientation: "horizontal"
  },
  variants: {
    orientation: {
      horizontal: {
        flexDirection: "row"
      },
      vertical: {
        flexDirection: "column"
      }
    },
    attached: {
      true: {
        gap: "0"
      }
    },
    grow: {
      true: {
        display: "flex",
        "& > *": {
          flex: 1
        }
      }
    }
  },
  compoundVariants: [
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
  ]
});

// src/theme/recipes/heading.ts
import { defineRecipe as defineRecipe6 } from "@pandacss/dev";
var heading = defineRecipe6({
  className: "heading",
  base: {
    fontWeight: "semibold"
  }
});

// src/theme/recipes/hover-card.ts
import { hoverCardAnatomy } from "@ark-ui/react/anatomy";
import { defineSlotRecipe as defineSlotRecipe19 } from "@pandacss/dev";
var hoverCard = defineSlotRecipe19({
  className: "hover-card",
  slots: hoverCardAnatomy.keys(),
  base: {
    content: {
      "--hovercard-bg": "colors.gray.surface.bg",
      bg: "var(--hovercard-bg)",
      borderRadius: "l3",
      boxShadow: "lg",
      display: "flex",
      flexDirection: "column",
      maxWidth: "80",
      outline: "0",
      padding: "4",
      position: "relative",
      textStyle: "sm",
      transformOrigin: "var(--transform-origin)",
      zIndex: "popover",
      _open: {
        animationStyle: "slide-fade-in",
        animationDuration: "fast"
      },
      _closed: {
        animationStyle: "slide-fade-out",
        animationDuration: "faster"
      }
    },
    arrow: {
      "--arrow-size": "sizes.3",
      "--arrow-background": "var(--hovercard-bg)"
    },
    arrowTip: {
      borderTopWidth: "0.5px",
      borderInlineStartWidth: "0.5px"
    }
  }
});

// src/theme/recipes/icon.ts
import { defineRecipe as defineRecipe7 } from "@pandacss/dev";
var icon = defineRecipe7({
  className: "icon",
  base: {
    color: "currentcolor",
    display: "inline-block",
    flexShrink: "0",
    verticalAlign: "middle",
    lineHeight: "1em"
  },
  defaultVariants: {
    size: "md"
  },
  variants: {
    size: {
      "2xs": { boxSize: "3" },
      xs: { boxSize: "4" },
      sm: { boxSize: "4.5" },
      md: { boxSize: "5" },
      lg: { boxSize: "5.5" },
      xl: { boxSize: "6" }
    }
  }
});

// src/theme/recipes/input-addon.ts
import { defineRecipe as defineRecipe8 } from "@pandacss/dev";
var inputAddon = defineRecipe8({
  className: "input-addon",
  base: {
    alignItems: "center",
    alignSelf: "stretch",
    borderRadius: "l2",
    color: "fg.muted",
    display: "flex",
    flex: "0 0 auto",
    whiteSpace: "nowrap",
    width: "auto"
  },
  defaultVariants: {
    size: "md",
    variant: "outline"
  },
  variants: {
    variant: {
      outline: {
        borderWidth: "1px",
        borderColor: "gray.outline.border"
      },
      surface: {
        bg: "gray.surface.bg",
        borderWidth: "1px",
        borderColor: "gray.surface.border"
      },
      subtle: {
        bg: "gray.subtle.bg"
      }
    },
    size: {
      xs: { textStyle: "sm", px: "2", _icon: { boxSize: "4" } },
      sm: { textStyle: "sm", px: "2.5", _icon: { boxSize: "4.5" } },
      md: { textStyle: "md", px: "3", _icon: { boxSize: "5" } },
      lg: { textStyle: "md", px: "3.5", _icon: { boxSize: "5" } },
      xl: { textStyle: "lg", px: "4", _icon: { boxSize: "5.5" } }
    }
  }
});

// src/theme/recipes/input-group.ts
import { defineSlotRecipe as defineSlotRecipe20 } from "@pandacss/dev";
var inputGroup = defineSlotRecipe20({
  className: "input-group",
  slots: ["root", "element"],
  base: {
    root: {
      position: "relative",
      width: "full"
    },
    element: {
      alignItems: "center",
      color: "fg.muted",
      display: "flex",
      height: "full",
      justifyContent: "center",
      position: "absolute",
      zIndex: "2",
      _icon: {
        color: "fg.subtle"
      }
    }
  },
  defaultVariants: {
    size: "md"
  },
  variants: {
    size: {
      xs: {
        element: { minW: "8", _icon: { boxSize: "4" } },
        root: {
          "& > input:not(:first-child)": { ps: "7!" },
          "& > input:not(:last-child)": { pe: "7!" }
        }
      },
      sm: {
        root: {
          "& > input:not(:first-child)": { ps: "8!" },
          "& > input:not(:last-child)": { pe: "8!" }
        },
        element: { minW: "9", _icon: { boxSize: "4.5" } }
      },
      md: {
        root: {
          "& > input:not(:first-child)": { ps: "9!" },
          "& > input:not(:last-child)": { pe: "9!" }
        },
        element: { minW: "10", _icon: { boxSize: "5" } }
      },
      lg: {
        root: {
          "& > input:not(:first-child)": { ps: "10!" },
          "& > input:not(:last-child)": { pe: "10!" }
        },
        element: { minW: "11", _icon: { boxSize: "5" } }
      },
      xl: {
        root: {
          "& > input:not(:first-child)": { ps: "11!" },
          "& > input:not(:last-child)": { pe: "11!" }
        },
        element: { minW: "11", _icon: { boxSize: "5.5" } }
      }
    }
  }
});

// src/theme/recipes/kbd.ts
import { defineRecipe as defineRecipe9 } from "@pandacss/dev";
var kbd = defineRecipe9({
  className: "kbd",
  base: {
    display: "inline-flex",
    alignItems: "center",
    fontWeight: "medium",
    fontFamily: "code",
    flexShrink: "0",
    whiteSpace: "nowrap",
    wordSpacing: "-0.5em",
    userSelect: "none",
    borderRadius: "l2",
    justifyContent: "center"
  },
  variants: {
    variant: {
      solid: {
        bg: "colorPalette.solid.bg",
        color: "colorPalette.solid.fg"
      },
      surface: {
        bg: "colorPalette.surface.bg",
        borderWidth: "1px",
        borderColor: "colorPalette.surface.border",
        color: "colorPalette.surface.fg"
      },
      outline: {
        borderWidth: "1px",
        borderColor: "colorPalette.outline.border",
        color: "colorPalette.outline.fg"
      },
      subtle: {
        bg: "colorPalette.subtle.bg",
        color: "colorPalette.subtle.fg"
      },
      plain: {
        color: "colorPalette.plain.fg"
      }
    },
    size: {
      sm: { textStyle: "xs", height: "4.5", minWidth: "4.5", px: "1" },
      md: { textStyle: "sm", height: "5", minWidth: "5", px: "1" },
      lg: { textStyle: "sm", height: "5.5", minWidth: "5.5", px: "1" },
      xl: { textStyle: "md", height: "6", minWidth: "6", px: "1" }
    }
  },
  defaultVariants: {
    size: "md",
    variant: "subtle"
  }
});

// src/theme/recipes/link.ts
import { defineRecipe as defineRecipe10 } from "@pandacss/dev";
var link = defineRecipe10({
  className: "link",
  base: {
    alignItems: "center",
    borderRadius: "l1",
    cursor: "pointer",
    display: "inline-flex",
    focusVisibleRing: "outside",
    fontWeight: "medium",
    gap: "1.5",
    outline: "none",
    textDecorationLine: "underline",
    textDecorationThickness: "0.1em",
    textUnderlineOffset: "0.125em",
    transitionDuration: "normal",
    transitionProperty: "text-decoration-color",
    _icon: {
      boxSize: "1em"
    }
  },
  defaultVariants: {
    variant: "underline"
  },
  variants: {
    variant: {
      underline: {
        textDecorationColor: "colorPalette.surface.fg/60",
        _hover: {
          textDecorationColor: "colorPalette.surface.fg"
        }
      },
      plain: {
        textDecorationColor: "transparent",
        _hover: {
          textDecorationColor: "colorPalette.surface.fg"
        }
      }
    }
  }
});

// src/theme/recipes/menu.ts
import { menuAnatomy } from "@ark-ui/react/anatomy";
import { defineSlotRecipe as defineSlotRecipe21 } from "@pandacss/dev";
var menu = defineSlotRecipe21({
  className: "menu",
  slots: menuAnatomy.keys(),
  base: {
    content: {
      "--menu-z-index": "zIndex.dropdown",
      bg: "gray.surface.bg",
      borderRadius: "l3",
      boxShadow: "md",
      display: "flex",
      flexDirection: "column",
      maxH: "min(var(--available-height), {sizes.96})",
      minWidth: "max(var(--reference-width), {sizes.40})",
      outline: "0",
      overflow: "hidden",
      overflowY: "auto",
      position: "relative",
      zIndex: "calc(var(--menu-z-index) + var(--layer-index, 0))",
      _open: {
        animationStyle: "slide-fade-in",
        animationDuration: "fast"
      },
      _closed: {
        animationStyle: "slide-fade-out",
        animationDuration: "faster"
      }
    },
    item: {
      alignItems: "center",
      borderRadius: "l2",
      display: "flex",
      flex: "0 0 auto",
      outline: "0",
      textAlign: "start",
      textDecoration: "none",
      userSelect: "none",
      width: "100%",
      _highlighted: {
        bg: "gray.surface.bg.hover"
      },
      _disabled: {
        layerStyle: "disabled"
      }
    },
    trigger: {
      _focusVisible: {
        focusVisibleRing: "outside"
      }
    },
    itemGroupLabel: {
      alignItems: "flex-start",
      color: "fg.subtle",
      display: "flex",
      flexDirection: "column",
      fontWeight: "medium",
      gap: "1px",
      justifyContent: "center",
      _after: {
        content: '""',
        width: "100%",
        height: "1px",
        bg: "border"
      }
    },
    itemIndicator: {
      justifyContent: "flex-end",
      display: "flex",
      flex: "1",
      _checked: {
        _icon: {
          color: "colorPalette.plain.fg"
        }
      }
    }
  },
  defaultVariants: {
    size: "md"
  },
  variants: {
    size: {
      xs: {
        content: { p: "1", gap: "0.5", textStyle: "sm" },
        item: { px: "1", minH: "8", gap: "2", _icon: { boxSize: "3.5" } },
        itemGroup: { gap: "0.5" },
        itemGroupLabel: { px: "1", height: "8" },
        separator: { mx: "-1", my: "0.5" }
      },
      sm: {
        content: { p: "1", gap: "0.5", textStyle: "sm" },
        item: { px: "1.5", minH: "9", gap: "2", _icon: { boxSize: "4" } },
        itemGroup: { gap: "0.5" },
        itemGroupLabel: { px: "1.5", height: "9" },
        separator: { mx: "-1.5", my: "0.5" }
      },
      md: {
        content: { p: "1", gap: "0.5", textStyle: "md" },
        item: { px: "2", minH: "10", gap: "2", _icon: { boxSize: "4" } },
        itemGroup: { gap: "0.5" },
        itemGroupLabel: { px: "2", height: "10" },
        separator: { mx: "-2", my: "0.5" }
      },
      lg: {
        content: { p: "1", gap: "0.5", textStyle: "md" },
        item: { px: "2.5", minH: "11", gap: "2", _icon: { boxSize: "4.5" } },
        itemGroup: { gap: "0.5" },
        itemGroupLabel: { px: "2.5", height: "11" },
        separator: { mx: "-2.5", my: "0.5" }
      },
      xl: {
        content: { p: "1", gap: "1", textStyle: "lg" },
        item: { px: "3", minH: "12", gap: "3", _icon: { boxSize: "5" } },
        itemGroup: { gap: "1" },
        itemGroupLabel: { px: "3", height: "12" },
        separator: { mx: "-3", my: "0" }
      }
    }
  }
});

// src/theme/recipes/number-input.ts
import { numberInputAnatomy } from "@ark-ui/react/anatomy";
import { defineSlotRecipe as defineSlotRecipe22 } from "@pandacss/dev";
var trigger = {
  alignItems: "center",
  color: "fg.muted",
  cursor: "pointer",
  display: "flex",
  flex: "1",
  justifyContent: "center",
  lineHeight: "1",
  transition: "common",
  userSelect: "none",
  _icon: {
    boxSize: "1em"
  },
  _hover: {
    bg: "gray.surface.bg.hover"
  },
  _active: {
    bg: "gray.surface.bg.active"
  }
};
var numberInput = defineSlotRecipe22({
  className: "number-input",
  slots: numberInputAnatomy.keys(),
  base: {
    root: {
      isolation: "isolate",
      position: "relative",
      _disabled: {
        layerStyle: "disabled"
      }
    },
    control: {
      borderStartWidth: "1px",
      display: "flex",
      divideY: "1px",
      flexDirection: "column",
      height: "calc(100% - 2px)",
      insetEnd: "0px",
      margin: "1px",
      position: "absolute",
      top: "0",
      width: "var(--stepper-width)",
      zIndex: "1"
    },
    input: {
      ...input.base,
      verticalAlign: "top",
      pe: "calc(var(--stepper-width) + 0.5rem)"
    },
    label: {
      color: "fg.default",
      fontWeight: "medium"
    },
    incrementTrigger: {
      ...trigger,
      borderTopRightRadius: "l2"
    },
    decrementTrigger: {
      ...trigger,
      borderBottomRightRadius: "l2"
    }
  },
  defaultVariants: {
    size: "md",
    variant: "outline"
  },
  variants: {
    size: {
      sm: {
        control: {
          "--stepper-width": "sizes.4.5"
        },
        input: input.variants.size.sm
      },
      md: {
        control: {
          "--stepper-width": "sizes.5"
        },
        input: input.variants.size.md
      },
      lg: {
        control: {
          "--stepper-width": "sizes.5.5"
        },
        input: input.variants.size.lg
      },
      xl: {
        control: {
          "--stepper-width": "sizes.6"
        },
        input: input.variants.size.xl
      }
    },
    variant: {
      outline: {
        input: input.variants.variant.outline
      },
      surface: {
        input: input.variants.variant.surface
      }
    }
  }
});

// src/theme/recipes/pagination.ts
import { paginationAnatomy } from "@ark-ui/react/anatomy";
import { defineSlotRecipe as defineSlotRecipe23 } from "@pandacss/dev";
var pagination = defineSlotRecipe23({
  className: "pagination",
  slots: paginationAnatomy.keys(),
  base: {}
});

// src/theme/recipes/pin-input.ts
import { pinInputAnatomy } from "@ark-ui/react/anatomy";
import { defineSlotRecipe as defineSlotRecipe24 } from "@pandacss/dev";
var pinInput = defineSlotRecipe24({
  className: "pin-input",
  slots: pinInputAnatomy.keys(),
  base: {
    input: {
      ...input.base,
      textAlign: "center",
      width: "var(--input-height)",
      px: "1!"
    },
    control: {
      display: "inline-flex",
      gap: "2",
      isolation: "isolate"
    }
  },
  defaultVariants: {
    size: "md",
    variant: "outline"
  },
  variants: {
    size: {
      xs: {
        input: input.variants?.size?.xs
      },
      sm: {
        input: input.variants?.size?.sm
      },
      md: {
        input: input.variants?.size?.md
      },
      lg: {
        input: input.variants?.size?.lg
      },
      xl: {
        input: input.variants?.size?.xl
      },
      "2xl": {
        input: input.variants?.size?.["2xl"]
      }
    },
    variant: {
      outline: { input: input.variants?.variant?.outline },
      subtle: { input: input.variants?.variant?.subtle },
      flushed: { input: input.variants?.variant?.flushed }
    }
  }
});

// src/theme/recipes/popover.ts
import { popoverAnatomy } from "@ark-ui/react/anatomy";
import { defineSlotRecipe as defineSlotRecipe25 } from "@pandacss/dev";
var popover = defineSlotRecipe25({
  className: "popover",
  slots: popoverAnatomy.extendWith("header", "body", "footer").keys(),
  base: {
    content: {
      "--popover-bg": "colors.gray.surface.bg",
      "--popover-padding": "spacing.4",
      background: "var(--popover-bg)",
      borderRadius: "l3",
      boxShadow: "lg",
      display: "flex",
      flexDirection: "column",
      maxHeight: "var(--available-height)",
      outline: "0",
      position: "relative",
      textStyle: "sm",
      transformOrigin: "var(--transform-origin)",
      width: "xs",
      zIndex: "calc(var(--z-index-popover) + var(--layer-index, 0))",
      _open: {
        animationStyle: "scale-fade-in",
        animationDuration: "fast"
      },
      _closed: {
        animationStyle: "scale-fade-out",
        animationDuration: "faster"
      }
    },
    title: {
      color: "fg.default",
      fontWeight: "medium",
      textStyle: "md"
    },
    description: {
      color: "fg.muted",
      textStyle: "sm"
    },
    closeTrigger: {
      position: "absolute",
      top: "1",
      right: "1"
    },
    header: {
      display: "flex",
      flexDirection: "column",
      pt: "var(--popover-padding)",
      px: "var(--popover-padding)"
    },
    body: { p: "var(--popover-padding)", display: "flex", flex: "1", flexDirection: "column" },
    footer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: "3",
      paddingInline: "var(--popover-padding)",
      paddingBottom: "var(--popover-padding)"
    },
    arrow: {
      "--arrow-size": "sizes.3",
      "--arrow-background": "var(--popover-bg)"
    },
    arrowTip: {
      borderTopWidth: "0.5px",
      borderInlineStartWidth: "0.5px"
    }
  }
});

// src/theme/recipes/progress.ts
import { progressAnatomy } from "@ark-ui/react/anatomy";
import { defineSlotRecipe as defineSlotRecipe26 } from "@pandacss/dev";
var progress = defineSlotRecipe26({
  slots: progressAnatomy.keys(),
  className: "progress",
  base: {
    root: {
      textStyle: "sm",
      position: "relative"
    },
    track: {
      overflow: "hidden",
      position: "relative"
    },
    range: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transitionProperty: "width, height",
      transitionDuration: "slow",
      height: "100%",
      bgColor: "var(--track-color)",
      _indeterminate: {
        "--animate-from-x": "-40%",
        "--animate-to-x": "100%",
        position: "absolute",
        willChange: "left",
        minWidth: "50%",
        animation: "position 1s ease infinite normal none running",
        backgroundImage: `linear-gradient(to right, transparent 0%, var(--track-color) 50%, transparent 100%)`
      }
    },
    label: {
      display: "inline-flex",
      fontWeight: "medium",
      alignItems: "center",
      gap: "1"
    },
    valueText: {
      textStyle: "xs",
      lineHeight: "1",
      fontWeight: "medium"
    }
  },
  variants: {
    variant: {
      solid: {
        track: {
          bgColor: "gray.subtle.bg"
        },
        range: {
          bgColor: "colorPalette.solid.bg",
          color: "colorPalette.solid.fg"
        }
      },
      subtle: {
        track: {
          bgColor: "colorPalette.subtle.bg.active"
        },
        range: {
          bgColor: "colorPalette.solid.bg",
          color: "colorPalette.solid.fg"
        }
      }
    },
    shape: {
      square: {},
      rounded: {
        track: {
          borderRadius: "l1"
        }
      },
      full: {
        track: {
          borderRadius: "full"
        }
      }
    },
    striped: {
      true: {
        range: {
          backgroundImage: `linear-gradient(45deg, var(--stripe-color) 25%, transparent 25%, transparent 50%, var(--stripe-color) 50%, var(--stripe-color) 75%, transparent 75%, transparent)`,
          backgroundSize: `var(--stripe-size) var(--stripe-size)`,
          "--stripe-size": "1rem",
          "--stripe-color": {
            _light: "rgba(255, 255, 255, 0.3)",
            _dark: "rgba(0, 0, 0, 0.3)"
          }
        }
      }
    },
    animated: {
      true: {
        range: {
          "--animate-from": "var(--stripe-size)",
          animation: "bg-position 1s linear infinite"
        }
      }
    },
    size: {
      xs: { track: { h: "1.5" } },
      sm: { track: { h: "2" } },
      md: { track: { h: "2.5" } },
      lg: { track: { h: "3" } },
      xl: { track: { h: "3.5" } }
    }
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
    shape: "rounded"
  }
});

// src/theme/recipes/radio-card-group.ts
import { radioGroupAnatomy } from "@ark-ui/react/anatomy";
import { defineSlotRecipe as defineSlotRecipe27 } from "@pandacss/dev";
var radioCardGroup = defineSlotRecipe27({
  className: "radio-card-group",
  slots: radioGroupAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5",
      width: "full"
    },
    item: {
      alignItems: "center",
      borderRadius: "l2",
      cursor: "pointer",
      display: "flex",
      justifyContent: "space-between",
      userSelect: "none",
      width: "full"
    },
    label: {
      textStyle: "label"
    },
    itemControl: {
      alignItems: "center",
      borderRadius: "full",
      display: "inline-flex",
      flexShrink: "0",
      justifyContent: "center",
      verticalAlign: "top",
      _after: {
        content: '""',
        display: "block",
        borderRadius: "full"
      },
      _focusVisible: {
        focusVisibleRing: "outside"
      }
    },
    itemText: {
      textStyle: "label"
    }
  },
  defaultVariants: {
    variant: "outline",
    size: "md"
  },
  variants: {
    variant: {
      subtle: {
        item: {
          background: "gray.subtle.bg",
          color: "gray.subtle.fg",
          _checked: {
            background: "colorPalette.subtle.bg",
            color: "colorPalette.subtle.fg"
          }
        },
        itemControl: {
          borderWidth: "1px",
          borderColor: "gray.subtle.border",
          _checked: {
            borderColor: "colorPalette.solid.bg",
            _after: {
              bg: "colorPalette.solid.bg"
            }
          }
        }
      },
      outline: {
        item: {
          borderWidth: "1px",
          borderColor: "gray.outline.border",
          _checked: {
            boxShadow: "0 0 0 1px var(--shadow-color)",
            boxShadowColor: "colorPalette.solid.bg",
            borderColor: "colorPalette.solid.bg"
          }
        },
        itemControl: {
          borderWidth: "1px",
          borderColor: "gray.outline.border",
          _checked: {
            bg: "colorPalette.solid.bg",
            borderColor: "colorPalette.solid.bg",
            _after: {
              background: "colorPalette.solid.fg"
            }
          }
        }
      },
      surface: {
        item: {
          borderWidth: "1px",
          background: "gray.surface.bg",
          borderColor: "gray.surface.border",
          color: "gray.surface.fg",
          _checked: {
            boxShadow: "0 0 0 1px var(--shadow-color)",
            boxShadowColor: "colorPalette.solid.bg",
            borderColor: "colorPalette.solid.bg"
          }
        },
        itemControl: {
          borderWidth: "1px",
          borderColor: "gray.outline.border",
          _checked: {
            background: "colorPalette.solid.bg",
            borderColor: "colorPalette.solid.bg",
            _after: {
              background: "colorPalette.solid.fg"
            }
          }
        }
      },
      solid: {
        item: {
          borderWidth: "1px",
          _checked: {
            bg: "colorPalette.solid.bg",
            color: "colorPalette.solid.fg",
            borderColor: "colorPalette.solid.bg"
          }
        },
        itemControl: {
          borderWidth: "1px",
          borderColor: "gray.outline.border",
          _checked: {
            background: "colorPalette.solid.fg",
            borderColor: "colorPalette.solid.fg",
            _after: {
              bg: "colorPalette.solid.bg"
            }
          }
        }
      }
    },
    size: {
      md: {
        item: { gap: "2", p: "4" },
        itemControl: { boxSize: "5", _after: { boxSize: "2" } },
        itemText: { textStyle: "sm" }
      }
    }
  }
});

// src/theme/recipes/radio-group.ts
import { radioGroupAnatomy as radioGroupAnatomy2 } from "@ark-ui/react/anatomy";
import { defineSlotRecipe as defineSlotRecipe28 } from "@pandacss/dev";
var radioGroup = defineSlotRecipe28({
  className: "radio-group",
  slots: radioGroupAnatomy2.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "3"
    },
    itemControl: {
      alignItems: "center",
      borderRadius: "full",
      display: "inline-flex",
      flexShrink: 0,
      justifyContent: "center",
      verticalAlign: "top",
      _after: {
        content: '""',
        display: "block",
        borderRadius: "full",
        boxSize: "40%"
      },
      _focusVisible: {
        focusVisibleRing: "outside"
      }
    },
    item: {
      alignItems: "center",
      cursor: "pointer",
      display: "flex",
      _disabled: {
        layerStyle: "disabled"
      }
    },
    itemText: {
      fontWeight: "medium",
      userSelect: "none"
    }
  },
  defaultVariants: {
    variant: "solid",
    size: "md"
  },
  variants: {
    variant: {
      solid: {
        itemControl: {
          boxShadow: "inset 0 0 0 1px var(--shadow-color)",
          boxShadowColor: "gray.surface.border",
          _checked: {
            bg: "colorPalette.solid.bg",
            color: "colorPalette.solid.fg",
            boxShadowColor: "colorPalette.solid.bg",
            _after: {
              background: "colorPalette.solid.fg"
            }
          }
        }
      }
    },
    size: {
      sm: {
        item: { gap: "2" },
        itemControl: { boxSize: "4.5" },
        itemText: { textStyle: "sm" }
      },
      md: {
        item: { gap: "3" },
        itemControl: { boxSize: "5" },
        itemText: { textStyle: "md" }
      },
      lg: {
        item: { gap: "3" },
        itemControl: { boxSize: "5.5" },
        itemText: { textStyle: "lg" }
      }
    }
  }
});

// src/theme/recipes/rating-group.ts
import { ratingGroupAnatomy } from "@ark-ui/react/anatomy";
import { defineSlotRecipe as defineSlotRecipe29 } from "@pandacss/dev";
var ratingGroup = defineSlotRecipe29({
  className: "rating-group",
  slots: ratingGroupAnatomy.extendWith("itemIndicator").keys(),
  base: {
    root: {
      alignItems: "center",
      display: "inline-flex",
      verticalAlign: "top"
    },
    control: {
      alignItems: "center",
      display: "inline-flex",
      gap: "0.5"
    },
    item: {
      alignItems: "center",
      display: "inline-flex",
      justifyContent: "center",
      userSelect: "none"
    },
    label: {
      fontWeight: "medium",
      userSelect: "none"
    },
    itemIndicator: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      "--clip-path": { base: "inset(0 50% 0 0)", _rtl: "inset(0 0 0 50%)" },
      _icon: {
        stroke: "currentColor",
        display: "inline-block",
        flexShrink: 0,
        position: "absolute",
        width: "inherit",
        height: "inherit",
        left: 0,
        top: 0
      },
      "& [data-bg]": {
        color: "gray.subtle.bg"
      },
      "& [data-fg]": {
        color: "transparent"
      },
      "&[data-highlighted]:not([data-half])": {
        "& [data-fg]": {
          color: "colorPalette.solid.bg"
        }
      },
      "&[data-half]": {
        "& [data-fg]": {
          color: "colorPalette.solid.bg",
          clipPath: "var(--clip-path)"
        }
      }
    }
  },
  variants: {
    size: {
      xs: { root: { gap: "2" }, itemIndicator: { width: "4", height: "4" } },
      sm: { root: { gap: "2" }, itemIndicator: { width: "4.5", height: "4.5" } },
      md: { root: { gap: "3" }, itemIndicator: { width: "5", height: "5" } },
      lg: { root: { gap: "3" }, itemIndicator: { width: "5.5", height: "5.5" } },
      xl: { root: { gap: "3" }, itemIndicator: { width: "6", height: "6" } }
    }
  },
  defaultVariants: {
    size: "md"
  }
});

// src/theme/recipes/scroll-area.ts
import { defineSlotRecipe as defineSlotRecipe30 } from "@pandacss/dev";
var scrollArea = defineSlotRecipe30({
  className: "scroll-area",
  slots: ["root", "viewport", "content", "scrollbar", "thumb", "corner"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
      position: "relative",
      overflow: "hidden",
      "--scrollbar-margin": "0px",
      "--scrollbar-size": "calc(var(--thumb-size) + calc(var(--scrollbar-margin) * 2))"
    },
    viewport: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      width: "100%",
      WebkitOverflowScrolling: "touch",
      scrollbarWidth: "none",
      "&::-webkit-scrollbar": {
        display: "none"
      },
      "&[data-overflow-x] [data-pinned]": {
        _after: {
          content: '""',
          position: "absolute",
          pointerEvents: "none",
          top: "0",
          bottom: "-1px",
          width: "32px"
        }
      },
      '&[data-overflow-x]:not([data-at-left]) [data-pinned="left"]': {
        _after: {
          insetInlineEnd: "0",
          translate: "100% 0",
          boxShadow: "inset"
        }
      }
    },
    scrollbar: {
      alignItems: "center",
      display: "flex",
      position: "relative",
      touchAction: "none",
      userSelect: "none",
      zIndex: "overlay",
      _vertical: {
        flexDirection: "column",
        width: "var(--scrollbar-size)",
        py: "var(--scrollbar-margin)",
        "&:not([data-overflow-y])": {
          display: "none"
        }
      },
      _horizontal: {
        flexDirection: "row",
        height: "var(--scrollbar-size)",
        px: "var(--scrollbar-margin)",
        "&:not([data-overflow-x])": {
          display: "none"
        }
      }
    },
    thumb: {
      borderRadius: "full",
      bg: "var(--thumb-bg)",
      transitionDuration: "normal",
      transitionProperty: "background, color, box-shadow",
      transitionTimingFunction: "default",
      _vertical: { width: "var(--thumb-size)" },
      _horizontal: { height: "var(--thumb-size)" }
    },
    corner: {}
  },
  defaultVariants: {
    size: "md",
    scrollbar: "auto"
  },
  variants: {
    scrollbar: {
      auto: {
        scrollbar: {
          "&[data-scrolling], &[data-hover]": {
            "--thumb-bg": "{colors.gray.subtle.bg.active}"
          }
        }
      },
      visible: {
        content: {
          "&[data-overflow-y]": {
            pe: "var(--scrollbar-size)"
          },
          "&[data-overflow-x]": {
            pb: "var(--scrollbar-size)"
          }
        },
        scrollbar: {
          bg: "gray.subtle.bg",
          borderRadius: "full"
        },
        thumb: {
          "--thumb-bg": "{colors.gray.subtle.bg.active}"
        }
      }
    },
    size: {
      xs: { root: { "--thumb-size": "sizes.1" } },
      sm: { root: { "--thumb-size": "sizes.1.5" } },
      md: { root: { "--thumb-size": "sizes.2" } },
      lg: { root: { "--thumb-size": "sizes.2.5" } }
    }
  }
});

// src/theme/recipes/segment-group.ts
import { segmentGroupAnatomy } from "@ark-ui/react/anatomy";
import { defineSlotRecipe as defineSlotRecipe31 } from "@pandacss/dev";
var segmentGroup = defineSlotRecipe31({
  className: "segment-group",
  slots: segmentGroupAnatomy.keys(),
  base: {
    root: {
      bg: {
        _light: "gray.2",
        _dark: "gray.1"
      },
      borderRadius: "l3",
      boxShadow: "inset 0 0 0px 1px var(--shadow-color)",
      boxShadowColor: "border",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      isolation: "isolate",
      pos: "relative",
      _vertical: {
        flexDirection: "column",
        alignItems: "stretch"
      }
    },
    item: {
      alignItems: "center",
      borderRadius: "l3",
      display: "inline-flex",
      flexShrink: "0",
      fontWeight: "medium",
      gap: "2",
      justifyContent: "center",
      position: "relative",
      userSelect: "none",
      _disabled: {
        opacity: "0.5"
      },
      "&:has(input:focus-visible)": {
        focusVisibleRing: "outside"
      },
      _before: {
        content: '""',
        position: "absolute",
        bg: "gray.surface.border",
        transition: "opacity 0.2s"
      },
      _horizontal: {
        _before: {
          insetInlineStart: "0",
          insetBlock: "1.5",
          width: "1px"
        }
      },
      _vertical: {
        _before: {
          insetBlockStart: "0",
          insetInline: "1.5",
          height: "1px"
        }
      },
      "& + &[data-state=checked], &[data-state=checked] + &, &:first-of-type": {
        _before: {
          opacity: "0"
        }
      }
    },
    indicator: {
      bg: {
        _light: "white",
        _dark: "gray.2"
      },
      borderWidth: "1px",
      borderColor: "gray.surface.border",
      borderRadius: "l3",
      height: "var(--height)",
      pos: "absolute",
      width: "var(--width)",
      zIndex: -1
    }
  },
  variants: {
    size: {
      xs: { item: { h: "8", minW: "8", textStyle: "sm", px: "2.5", _icon: { boxSize: "4" } } },
      sm: { item: { h: "9", minW: "9", textStyle: "sm", px: "3", _icon: { boxSize: "4" } } },
      md: { item: { h: "10", minW: "10", textStyle: "sm", px: "3.5", _icon: { boxSize: "5" } } },
      lg: { item: { h: "11", minW: "11", textStyle: "md", px: "4", _icon: { boxSize: "5" } } },
      xl: { item: { h: "12", minW: "12", textStyle: "md", px: "4.5", _icon: { boxSize: "5.5" } } }
    },
    fitted: {
      true: {
        root: {
          display: "flex"
        },
        item: {
          flex: "1"
        }
      }
    }
  },
  defaultVariants: {
    size: "md"
  }
});

// src/theme/recipes/select.ts
import { selectAnatomy } from "@ark-ui/react/anatomy";
import { defineSlotRecipe as defineSlotRecipe32 } from "@pandacss/dev";
var select = defineSlotRecipe32({
  className: "select",
  slots: selectAnatomy.extendWith("indicatorGroup").keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5",
      width: "full"
    },
    content: {
      background: "gray.surface.bg",
      borderRadius: "l2",
      boxShadow: "md",
      display: "flex",
      flexDirection: "column",
      maxH: "min(var(--available-height), {sizes.96})",
      minWidth: "max(var(--reference-width), {sizes.40})",
      outline: 0,
      overflowY: "auto",
      zIndex: "dropdown",
      _open: {
        animationStyle: "slide-fade-in",
        animationDuration: "slow"
      },
      _closed: {
        animationStyle: "slide-fade-out",
        animationDuration: "fastest"
      }
    },
    item: {
      alignItems: "center",
      borderRadius: "l1",
      cursor: "pointer",
      display: "flex",
      justifyContent: "space-between",
      userSelect: "none",
      _hover: {
        background: "gray.surface.bg.hover"
      },
      _highlighted: {
        background: "gray.surface.bg.hover"
      },
      _selected: {},
      _disabled: {
        layerStyle: "disabled"
      }
    },
    indicatorGroup: {
      display: "flex",
      alignItems: "center",
      gap: "1",
      pointerEvents: "none"
    },
    indicator: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: { base: "fg.subtle" }
    },
    itemGroupLabel: {
      alignItems: "flex-start",
      color: "fg.subtle",
      display: "flex",
      flexDirection: "column",
      fontWeight: "medium",
      gap: "1px",
      justifyContent: "center",
      _after: {
        content: '""',
        width: "100%",
        height: "1px",
        bg: "gray.4"
      }
    },
    itemIndicator: {
      color: "colorPalette.plain.fg"
    },
    label: {
      fontWeight: "medium",
      userSelect: "none",
      textStyle: "sm"
    },
    trigger: {
      alignItems: "center",
      borderRadius: "l2",
      cursor: "pointer",
      display: "flex",
      justifyContent: "space-between",
      minWidth: "0",
      outline: "0",
      textAlign: "start",
      transition: "common",
      userSelect: "none",
      width: "full",
      _placeholderShown: {
        color: "fg.subtle"
      },
      _disabled: {
        layerStyle: "disabled"
      }
    },
    valueText: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  },
  defaultVariants: {
    size: "md",
    variant: "outline"
  },
  variants: {
    variant: {
      outline: {
        trigger: {
          borderWidth: "1px",
          borderColor: "gray.outline.border",
          focusVisibleRing: "inside"
        }
      },
      surface: {
        trigger: {
          bg: "gray.surface.bg",
          borderWidth: "1px",
          borderColor: "gray.surface.border",
          focusVisibleRing: "inside"
        }
      }
    },
    size: {
      xs: {
        content: { p: "1", gap: "0.5", textStyle: "sm" },
        item: { px: "1", minH: "8", gap: "2", _icon: { boxSize: "3.5" } },
        itemGroup: { gap: "0.5" },
        itemGroupLabel: { px: "1", height: "8" },
        trigger: { px: "2", h: "8", textStyle: "sm", gap: "2", _icon: { boxSize: "3.5" } }
      },
      sm: {
        content: { p: "1", gap: "0.5", textStyle: "sm" },
        item: { px: "1.5", minH: "9", gap: "2", _icon: { boxSize: "4" } },
        itemGroup: { gap: "0.5" },
        itemGroupLabel: { px: "1.5", height: "9" },
        trigger: { px: "2.5", h: "9", textStyle: "sm", gap: "2", _icon: { boxSize: "4" } }
      },
      md: {
        content: { p: "1", gap: "0.5", textStyle: "md" },
        item: { px: "2", minH: "10", gap: "2", _icon: { boxSize: "4" } },
        itemGroup: { gap: "0.5" },
        itemGroupLabel: { px: "2", height: "10" },
        trigger: { px: "3", h: "10", textStyle: "md", gap: "2", _icon: { boxSize: "4" } }
      },
      lg: {
        content: { p: "1", gap: "0.5", textStyle: "md" },
        item: { px: "2.5", minH: "11", gap: "2", _icon: { boxSize: "4.5" } },
        itemGroup: { gap: "0.5" },
        itemGroupLabel: { px: "2.5", height: "11" },
        trigger: { px: "3.5", h: "11", textStyle: "md", gap: "2", _icon: { boxSize: "4.5" } }
      },
      xl: {
        content: { p: "1", gap: "1", textStyle: "lg" },
        item: { px: "3", minH: "12", gap: "3", _icon: { boxSize: "5" } },
        itemGroup: { gap: "1" },
        itemGroupLabel: { px: "3", height: "12" },
        trigger: { px: "4", h: "12", textStyle: "lg", gap: "3", _icon: { boxSize: "5" } }
      }
    }
  }
});

// src/theme/recipes/separator.ts
import { defineRecipe as defineRecipe11 } from "@pandacss/dev";
var separator = defineRecipe11({
  className: "separator",
  jsx: ["Separator"],
  base: {
    borderColor: "border.default",
    "&[data-orientation=horizontal]": {
      width: "full",
      borderBottomWidth: "1px"
    },
    "&[data-orientation=vertical]": {
      height: "full",
      borderInlineStartWidth: "1px"
    }
  },
  defaultVariants: {}
});

// src/theme/recipes/skeleton.ts
import { defineRecipe as defineRecipe12 } from "@pandacss/dev";
var skeleton = defineRecipe12({
  className: "skeleton",
  jsx: ["Skeleton", "SkeletonCircle", "SkeletonText"],
  base: {},
  variants: {
    loading: {
      true: {
        borderRadius: "l2",
        boxShadow: "none",
        backgroundClip: "padding-box",
        cursor: "default",
        color: "transparent",
        pointerEvents: "none",
        userSelect: "none",
        flexShrink: "0",
        "&::before, &::after, *": {
          visibility: "hidden"
        }
      },
      false: {
        background: "unset",
        animation: "fade-in var(--fade-duration, 0.1s) ease-out !important"
      }
    },
    circle: {
      true: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "0 0 auto",
        borderRadius: "9999px"
      }
    },
    variant: {
      pulse: {
        background: "gray.subtle.bg.active",
        animation: "pulse",
        animationDuration: "var(--duration, 1.2s)"
      },
      shine: {
        "--animate-from": "200%",
        "--animate-to": "-200%",
        "--start-color": "colors.gray.subtle.bg",
        "--end-color": "colors.gray.subtle.bg.active",
        backgroundImage: "linear-gradient(270deg,var(--start-color),var(--end-color),var(--end-color),var(--start-color))",
        backgroundSize: "400% 100%",
        animation: "bg-position var(--duration, 5s) ease-in-out infinite"
      },
      none: {
        animation: "none"
      }
    }
  },
  defaultVariants: {
    variant: "pulse",
    loading: true
  }
});

// src/theme/recipes/slider.ts
import { sliderAnatomy } from "@ark-ui/react/anatomy";
import { defineSlotRecipe as defineSlotRecipe33 } from "@pandacss/dev";
var slider = defineSlotRecipe33({
  className: "slider",
  slots: sliderAnatomy.extendWith("markerIndicator").keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "1",
      textStyle: "sm",
      position: "relative",
      isolation: "isolate",
      touchAction: "none",
      width: "full"
    },
    label: {
      fontWeight: "medium",
      textStyle: "sm"
    },
    control: {
      display: "inline-flex",
      alignItems: "center"
    },
    track: {
      overflow: "hidden",
      borderRadius: "full",
      flex: "1"
    },
    range: {
      width: "inherit",
      height: "inherit"
    },
    markerGroup: {
      position: "absolute!",
      zIndex: "1"
    },
    marker: {
      display: "flex",
      alignItems: "center",
      gap: "calc(var(--slider-thumb-size) / 2)",
      color: "fg.muted",
      textStyle: "xs"
    },
    markerIndicator: {
      width: "var(--slider-marker-size)",
      height: "var(--slider-marker-size)",
      borderRadius: "full",
      bg: "colorPalette.solid.fg"
    },
    thumb: {
      width: "var(--slider-thumb-size)",
      height: "var(--slider-thumb-size)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      outline: 0,
      zIndex: "2",
      borderRadius: "full",
      _focusVisible: {
        ring: "2px",
        ringColor: "colorPalette.solid",
        ringOffset: "2px",
        ringOffsetColor: "bg"
      }
    }
  },
  defaultVariants: {
    size: "md",
    variant: "outline",
    orientation: "horizontal"
  },
  variants: {
    size: {
      sm: {
        root: {
          "--slider-thumb-size": "sizes.5",
          "--slider-track-size": "sizes.2",
          "--slider-marker-center": "8px",
          "--slider-marker-size": "sizes.1",
          "--slider-marker-inset": "4px"
        }
      },
      md: {
        root: {
          "--slider-thumb-size": "sizes.5",
          "--slider-track-size": "sizes.2",
          "--slider-marker-center": "8px",
          "--slider-marker-size": "sizes.1",
          "--slider-marker-inset": "4px"
        }
      },
      lg: {
        root: {
          "--slider-thumb-size": "sizes.5",
          "--slider-track-size": "sizes.2",
          "--slider-marker-center": "8px",
          "--slider-marker-size": "sizes.1",
          "--slider-marker-inset": "4px"
        }
      }
    },
    variant: {
      outline: {
        thumb: {
          bg: "gray.surface.bg",
          borderWidth: "2px",
          borderColor: "colorPalette.solid.bg",
          boxShadow: "xs"
        },
        range: {
          bg: "colorPalette.solid.bg"
        },
        track: {
          bg: "border"
        }
      }
    },
    orientation: {
      vertical: {
        root: {
          display: "inline-flex"
        },
        control: {
          flexDirection: "column",
          height: "100%",
          minWidth: "var(--slider-thumb-size)",
          "&[data-has-mark-label]": {
            marginEnd: "4"
          }
        },
        track: {
          width: "var(--slider-track-size)"
        },
        thumb: {
          left: "50%",
          translate: "-50% 0"
        },
        markerGroup: {
          insetStart: "var(--slider-marker-center)",
          insetBlock: "var(--slider-marker-inset)"
        },
        marker: {
          flexDirection: "row"
        }
      },
      horizontal: {
        control: {
          flexDirection: "row",
          width: "100%",
          minHeight: "var(--slider-thumb-size)",
          "&[data-has-mark-label]": {
            marginBottom: "4"
          }
        },
        track: {
          height: "var(--slider-track-size)"
        },
        thumb: {
          top: "50%",
          translate: "0 -50%"
        },
        markerGroup: {
          top: "var(--slider-marker-center)",
          insetInline: "var(--slider-marker-inset)"
        },
        marker: {
          flexDirection: "column"
        }
      }
    }
  }
});

// src/theme/recipes/spinner.ts
import { defineRecipe as defineRecipe13 } from "@pandacss/dev";
var spinner = defineRecipe13({
  className: "spinner",
  base: {
    "--spinner-track-color": "transparent",
    animation: "spin",
    animationDuration: "slowest",
    borderBottomColor: "var(--spinner-track-color)",
    borderColor: "currentColor",
    borderInlineStartColor: "var(--spinner-track-color)",
    borderRadius: "full",
    borderStyle: "solid",
    borderWidth: "2px",
    display: "inline-block",
    height: "var(--spinner-size)",
    width: "var(--spinner-size)"
  },
  defaultVariants: {
    size: "md"
  },
  variants: {
    size: {
      inherit: { "--spinner-size": "1em" },
      xs: { "--spinner-size": "sizes.3" },
      sm: { "--spinner-size": "sizes.4" },
      md: { "--spinner-size": "sizes.5" },
      lg: { "--spinner-size": "sizes.6" },
      xl: { "--spinner-size": "sizes.7" },
      "2xl": { "--spinner-size": "sizes.8" }
    }
  }
});

// src/theme/recipes/splitter.ts
import { splitterAnatomy } from "@ark-ui/react/anatomy";
import { defineSlotRecipe as defineSlotRecipe34 } from "@pandacss/dev";
var splitter = defineSlotRecipe34({
  className: "splitter",
  slots: splitterAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      gap: "2"
    },
    panel: {
      borderRadius: "l3",
      display: "flex",
      background: "gray.surface.bg",
      borderWidth: "1px",
      p: "4"
    },
    resizeTrigger: {
      borderRadius: "l3",
      transition: "common",
      outline: "0",
      background: "gray.subtle.bg",
      _horizontal: {
        minWidth: "1.5"
      },
      _vertical: {
        minHeight: "1.5"
      }
    }
  }
});

// src/theme/recipes/switch.ts
import { defineSlotRecipe as defineSlotRecipe35 } from "@pandacss/dev";
var switchRecipe = defineSlotRecipe35({
  className: "switch",
  jsx: ["Switch", /Switch\.+/],
  slots: ["root", "label", "control", "thumb", "indicator"],
  base: {
    root: {
      display: "inline-flex",
      alignItems: "center",
      position: "relative",
      verticalAlign: "middle",
      "--switch-diff": "calc(var(--switch-width) - var(--switch-height))",
      "--switch-x": {
        base: "var(--switch-diff)",
        _rtl: "calc(var(--switch-diff) * -1)"
      }
    },
    label: {
      fontWeight: "medium",
      userSelect: "none",
      lineHeight: "1"
    },
    indicator: {
      position: "absolute",
      height: "var(--switch-height)",
      width: "var(--switch-height)",
      fontSize: "var(--switch-indicator-font-size)",
      fontWeight: "medium",
      flexShrink: 0,
      userSelect: "none",
      display: "grid",
      placeContent: "center",
      transition: "inset-inline-start 0.12s ease",
      insetInlineStart: "calc(var(--switch-x) - 2px)",
      _checked: {
        insetInlineStart: "2px"
      }
    },
    control: {
      display: "inline-flex",
      gap: "0.5rem",
      flexShrink: 0,
      justifyContent: "flex-start",
      cursor: "pointer",
      borderRadius: "full",
      position: "relative",
      width: "var(--switch-width)",
      height: "var(--switch-height)",
      transition: "backgrounds",
      focusVisibleRing: "outside",
      _disabled: {
        layerStyle: "disabled"
      },
      _invalid: {
        outline: "2px solid",
        outlineColor: "error",
        outlineOffset: "2px"
      }
    },
    thumb: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      transitionProperty: "translate",
      transitionDuration: "fast",
      borderRadius: "inherit",
      _checked: {
        translate: "var(--switch-x) 0"
      }
    }
  },
  defaultVariants: {
    variant: "solid",
    size: "md"
  },
  variants: {
    variant: {
      solid: {
        control: {
          borderRadius: "full",
          bg: "gray.subtle.bg",
          focusVisibleRing: "outside",
          _checked: {
            bg: "colorPalette.solid.bg"
          }
        },
        thumb: {
          bg: "white",
          _checked: {
            bg: "colorPalette.solid.fg"
          },
          width: "var(--switch-height)",
          height: "var(--switch-height)",
          scale: "0.8",
          boxShadow: "xs"
        }
      }
    },
    size: {
      xs: {
        root: {
          gap: "2",
          "--switch-width": "sizes.8",
          "--switch-height": "sizes.4",
          "--switch-indicator-font-size": "fontSizes.xs"
        },
        label: { fontSize: "sm" }
      },
      sm: {
        root: {
          gap: "2",
          "--switch-width": "sizes.9",
          "--switch-height": "sizes.4.5",
          "--switch-indicator-font-size": "fontSizes.xs"
        },
        label: { fontSize: "sm" }
      },
      md: {
        root: {
          gap: "3",
          "--switch-width": "sizes.10",
          "--switch-height": "sizes.5",
          "--switch-indicator-font-size": "fontSizes.sm"
        },
        label: { fontSize: "md" }
      },
      lg: {
        root: {
          gap: "3",
          "--switch-width": "sizes.11",
          "--switch-height": "sizes.5.5",
          "--switch-indicator-font-size": "fontSizes.md"
        },
        label: { fontSize: "lg" }
      }
    }
  }
});

// src/theme/recipes/table.ts
import { defineSlotRecipe as defineSlotRecipe36 } from "@pandacss/dev";
var table = defineSlotRecipe36({
  className: "table",
  slots: ["root", "body", "cell", "foot", "head", "header", "row", "caption"],
  base: {
    root: {
      borderCollapse: "collapse",
      fontVariantNumeric: "lining-nums tabular-nums",
      textAlign: "start",
      verticalAlign: "top",
      width: "full"
    },
    cell: {
      alignItems: "center",
      color: "fg.muted",
      textAlign: "start",
      textOverflow: "ellipsis",
      textStyle: "sm",
      whiteSpace: "nowrap",
      overflow: "hidden",
      boxShadow: "inset 0 -1px 0 0 var(--shadow-color)",
      shadowColor: "border",
      _pinned: {
        bg: "inherit",
        boxShadow: "inset 0 -1px 0 0 var(--shadow-color)",
        overflow: "unset",
        position: "sticky",
        shadowColor: "border",
        zIndex: 1
      }
    },
    row: {
      _last: { "& td": { boxShadow: "none" } }
    },
    header: {
      textAlign: "left",
      verticalAlign: "middle",
      boxShadow: "inset 0 -1px 0 0 var(--shadow-color)",
      shadowColor: "border",
      _pinned: {
        position: "sticky",
        bg: "inherit",
        zIndex: 2
      }
    },
    head: {
      color: "fg.muted",
      fontWeight: "semibold",
      textAlign: "start",
      whiteSpace: "nowrap",
      textStyle: "xs"
    },
    caption: {
      color: "fg.subtle",
      fontWeight: "medium"
    },
    foot: {
      fontWeight: "medium",
      "& td": { boxShadow: "inset 0 1px 0 0 var(--shadow-color)!", shadowColor: "border" }
    }
  },
  defaultVariants: {
    size: "md",
    variant: "plain"
  },
  variants: {
    variant: {
      surface: {
        header: { bg: "gray.surface.bg.hover" },
        row: { bg: "gray.surface.bg" }
      },
      plain: {}
    },
    striped: {
      true: {
        row: { "&:nth-of-type(odd) td": { bg: "gray.surface.bg.hover" } }
      }
    },
    interactive: {
      true: {
        body: { "& tr": { _hover: { bg: "gray.surface.bg.hover" } } }
      }
    },
    columnBorder: {
      true: {
        header: { "&:not(:last-of-type)": { borderInlineEndWidth: "1px" } },
        cell: { "&:not(:last-of-type)": { borderInlineEndWidth: "1px" } }
      }
    },
    stickyHeader: {
      true: {
        head: {
          "& :where(tr)": {
            top: "var(--table-sticky-offset, 0)",
            position: "sticky",
            zIndex: 2
          }
        }
      }
    },
    size: {
      md: {
        root: { textStyle: "sm" },
        header: { px: "3", py: "3" },
        cell: { px: "3", py: "3" }
      }
    }
  }
});

// src/theme/recipes/tabs.ts
import { tabsAnatomy } from "@ark-ui/react/anatomy";
import { defineSlotRecipe as defineSlotRecipe37 } from "@pandacss/dev";
var tabs = defineSlotRecipe37({
  slots: tabsAnatomy.keys(),
  className: "tabs",
  base: {
    root: {
      position: "relative",
      display: "flex",
      alignItems: "start",
      _horizontal: {
        flexDirection: "column",
        gap: "2"
      },
      _vertical: {
        flexDirection: "row",
        gap: "4"
      }
    },
    list: {
      display: "flex",
      position: "relative",
      isolation: "isolate",
      _horizontal: {
        flexDirection: "row"
      },
      _vertical: {
        flexDirection: "column"
      }
    },
    trigger: {
      alignItems: "center",
      cursor: "pointer",
      display: "flex",
      fontWeight: "semibold",
      outline: "0",
      position: "relative",
      _focusVisible: {
        zIndex: 1,
        focusVisibleRing: "outside"
      },
      _disabled: {
        layerStyle: "disabled"
      }
    },
    content: {
      focusVisibleRing: "inside",
      _horizontal: {
        width: "100%"
      },
      _vertical: {
        height: "100%"
      }
    },
    indicator: {
      width: "var(--width)",
      height: "var(--height)",
      zIndex: -1
    }
  },
  variants: {
    size: {
      xs: {
        list: { gap: "1" },
        trigger: { h: "8", minW: "8", textStyle: "xs", px: "3", gap: "2" }
      },
      sm: {
        list: { gap: "1" },
        trigger: { h: "9", minW: "9", textStyle: "sm", px: "3.5", gap: "2" }
      },
      md: {
        list: { gap: "1" },
        trigger: { h: "10", minW: "10", textStyle: "sm", px: "4", gap: "2" }
      },
      lg: {
        list: { gap: "1" },
        trigger: { h: "11", minW: "11", textStyle: "md", px: "4.5", gap: "2" }
      }
    },
    variant: {
      line: {
        root: {
          alignItems: "stretch"
        },
        list: {
          _horizontal: {
            borderBottomWidth: "1px"
          },
          _vertical: {
            borderStartWidth: "1px"
          }
        },
        indicator: {
          background: "colorPalette.solid.bg",
          _horizontal: {
            bottom: "0",
            height: "0.5",
            transform: "translateY(1px)"
          },
          _vertical: {
            left: "0",
            width: "0.5",
            transform: "translateX(-1px)"
          }
        },
        trigger: {
          color: "fg.muted",
          _selected: {
            color: "colorPalette.plain.fg"
          }
        }
      },
      subtle: {
        trigger: {
          color: "fg.muted",
          _selected: {
            color: "colorPalette.subtle.fg"
          }
        },
        indicator: {
          bg: "colorPalette.subtle.bg",
          color: "colorPalette.subtle.fg",
          borderRadius: "l2"
        }
      },
      enclosed: {
        list: {
          bg: {
            _light: "gray.2",
            _dark: "gray.1"
          },
          boxShadow: "inset 0 0 0px 1px var(--shadow-color)",
          boxShadowColor: "border",
          borderRadius: "l3",
          p: "1"
        },
        trigger: {
          color: "fg.muted",
          _selected: {
            color: "colorPalette.surface.fg"
          }
        },
        indicator: {
          borderRadius: "l2",
          boxShadow: {
            _light: "xs",
            _dark: "none"
          },
          bg: {
            _light: "white",
            _dark: "gray.2"
          }
        }
      }
    },
    fitted: {
      true: {
        root: {
          alignItems: "stretch"
        },
        trigger: {
          flex: 1,
          textAlign: "center",
          justifyContent: "center"
        }
      }
    }
  },
  defaultVariants: {
    size: "md",
    variant: "line"
  }
});

// src/theme/recipes/tags-input.ts
import { tagsInputAnatomy } from "@ark-ui/react/anatomy";
import { defineSlotRecipe as defineSlotRecipe38 } from "@pandacss/dev";
var tagsInput = defineSlotRecipe38({
  className: "tags-input",
  slots: tagsInputAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5",
      width: "full"
    },
    label: {
      textStyle: "label"
    },
    control: {
      "--focus-color": "colors.colorPalette.solid.bg",
      "--error-color": "colors.error",
      "--input-height": "var(--tags-input-height)",
      minH: "var(--tags-input-height)",
      px: "var(--tags-input-px)",
      alignItems: "center",
      borderRadius: "l2",
      display: "flex",
      flexWrap: "wrap",
      pos: "relative",
      transitionDuration: "normal",
      transitionProperty: "border-color, box-shadow",
      _disabled: {
        opacity: "0.5"
      },
      _invalid: {
        borderColor: "var(--error-color)"
      }
    },
    clearTrigger: {
      boxSize: "calc(var(--tags-input-item-height) / 1.5)",
      alignItems: "center",
      borderRadius: "l1",
      color: "fg.muted",
      display: "flex",
      focusRingWidth: "2px",
      focusVisibleRing: "inside",
      justifyContent: "center",
      cursor: { base: "button", _disabled: "initial" },
      _icon: {
        boxSize: "5"
      }
    },
    input: {
      px: "calc(var(--tags-input-item-px) / 1.25)",
      height: "var(--tags-input-item-height)",
      flex: "1",
      minWidth: "20",
      outline: "none",
      _readOnly: {
        display: "none"
      }
    },
    itemInput: {
      px: "var(--tags-input-item-px)",
      height: "var(--tags-input-item-height)",
      lineHeight: "1",
      minWidth: "2ch",
      outline: "none",
      verticalAlign: "middle"
    },
    itemDeleteTrigger: {
      display: "flex",
      borderRadius: "l1",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      _hover: {
        bg: "colorPalette.plain.bg.hover"
      }
    },
    itemPreview: {
      height: "var(--tags-input-item-height)",
      px: "var(--tags-input-item-px)",
      alignItems: "center",
      borderRadius: "l1",
      display: "inline-flex",
      userSelect: "none"
    },
    itemText: {
      lineClamp: "1"
    }
  },
  defaultVariants: {
    size: "md",
    variant: "outline"
  },
  variants: {
    variant: {
      outline: {
        control: {
          borderWidth: "1px",
          _focus: {
            outlineWidth: "1px",
            outlineStyle: "solid",
            outlineColor: "var(--focus-color)",
            borderColor: "var(--focus-color)",
            _invalid: {
              outlineColor: "var(--error-color)",
              borderColor: "var(--error-color)"
            }
          }
        },
        itemPreview: {
          bg: "colorPalette.subtle.bg",
          color: "colorPalette.subtle.fg",
          _highlighted: {
            bg: "colorPalette.subtle.bg.hover"
          }
        }
      },
      subtle: {
        control: {
          bg: "gray.subtle.bg",
          color: "gray.subtle.fg",
          borderWidth: "1px",
          borderColor: "transparent",
          _focus: {
            outlineWidth: "1px",
            outlineStyle: "solid",
            outlineColor: "var(--focus-color)",
            borderColor: "var(--focus-color)",
            _invalid: {
              outlineColor: "var(--error-color)",
              borderColor: "var(--error-color)"
            }
          }
        },
        itemPreview: {
          bg: "gray.surface.bg",
          borderWidth: "1px",
          _highlighted: {
            bg: "gray.surface.bg.hover",
            borderColor: "gray.surface.border.hover"
          }
        }
      },
      surface: {
        control: {
          bg: "gray.surface.bg",
          borderWidth: "1px",
          borderColor: "gray.surface.border",
          _focus: {
            outlineWidth: "1px",
            outlineStyle: "solid",
            outlineColor: "var(--focus-color)",
            borderColor: "var(--focus-color)",
            _invalid: {
              outlineColor: "var(--error-color)",
              borderColor: "var(--error-color)"
            }
          }
        },
        itemPreview: {
          bg: "colorPalette.subtle.bg",
          color: "colorPalette.subtle.fg",
          _highlighted: {
            bg: "colorPalette.subtle.bg.hover"
          }
        }
      }
    },
    size: {
      xs: {
        root: {
          "--tags-input-height": "sizes.8",
          "--tags-input-px": "spacing.1.5",
          "--tags-input-item-height": "sizes.5",
          "--tags-input-item-px": "spacing.1",
          _icon: { boxSize: "3" },
          textStyle: "xs"
        },
        control: { gap: "1" },
        itemPreview: { gap: "1" },
        itemDeleteTrigger: { boxSize: "3.5", me: "-1px" }
      },
      sm: {
        root: {
          "--tags-input-height": "sizes.9",
          "--tags-input-px": "spacing.1.5",
          "--tags-input-item-height": "sizes.6",
          "--tags-input-item-px": "spacing.1.5",
          _icon: { boxSize: "3.5" },
          textStyle: "sm"
        },
        control: { gap: "1" },
        itemPreview: { gap: "1" },
        itemDeleteTrigger: { boxSize: "4.5", me: "-0.5" }
      },
      md: {
        root: {
          "--tags-input-height": "sizes.10",
          "--tags-input-px": "spacing.1.5",
          "--tags-input-item-height": "sizes.7",
          "--tags-input-item-px": "spacing.2",
          _icon: { boxSize: "3.5" },
          textStyle: "sm"
        },
        control: { gap: "1.5" },
        itemPreview: { gap: "1" },
        itemDeleteTrigger: { boxSize: "5", me: "-1" }
      },
      lg: {
        root: {
          "--tags-input-height": "sizes.11",
          "--tags-input-px": "spacing.1.5",
          "--tags-input-item-height": "sizes.8",
          "--tags-input-item-px": "spacing.2.5",
          _icon: { boxSize: "4" },
          textStyle: "md"
        },
        control: { gap: "1.5" },
        itemPreview: { gap: "1" },
        itemDeleteTrigger: { boxSize: "6", me: "-1.5" }
      }
    }
  }
});

// src/theme/recipes/text.ts
import { defineRecipe as defineRecipe14 } from "@pandacss/dev";
var text = defineRecipe14({
  className: "text",
  variants: {}
});

// src/theme/recipes/textarea.ts
import { defineRecipe as defineRecipe15 } from "@pandacss/dev";
var textarea = defineRecipe15({
  className: "textarea",
  base: {
    appearance: "none",
    borderRadius: "l2",
    minWidth: "0",
    outline: "0",
    position: "relative",
    transition: "colors",
    transitionProperty: "box-shadow, border-color",
    width: "100%",
    _disabled: {
      layerStyle: "disabled"
    }
  },
  defaultVariants: {
    size: "md",
    variant: "surface"
  },
  variants: {
    variant: {
      outline: {
        borderWidth: "1px",
        borderColor: "gray.outline.border",
        focusVisibleRing: "inside",
        _invalid: {
          borderColor: "error",
          focusRingColor: "error"
        }
      },
      surface: {
        bg: "gray.surface.bg",
        borderWidth: "1px",
        borderColor: "gray.surface.border",
        focusVisibleRing: "inside",
        _invalid: {
          borderColor: "error",
          focusRingColor: "error"
        }
      },
      subtle: {
        borderWidth: "1px",
        borderColor: "transparent",
        bg: "gray.subtle.bg",
        color: "gray.subtle.fg",
        focusVisibleRing: "inside",
        _invalid: {
          borderColor: "error",
          focusRingColor: "error"
        }
      },
      flushed: {
        borderBottomWidth: "1px",
        borderBottomColor: "gray.outline.border",
        borderRadius: "0",
        color: "fg.default",
        px: "0",
        _invalid: {
          borderColor: "error"
        },
        _focus: {
          borderColor: "colorPalette.solid.bg",
          boxShadowColor: "colorPalette.solid.bg",
          boxShadow: "0 1px 0 0 var(--shadow-color)",
          _invalid: {
            borderColor: "error",
            boxShadowColor: "error"
          }
        }
      }
    },
    size: {
      xs: { textStyle: "sm", px: "2", py: "5px", scrollPaddingBottom: "5px" },
      sm: { textStyle: "sm", px: "2.5", py: "7px", scrollPaddingBottom: "7px" },
      md: { textStyle: "md", px: "3", py: "7px", scrollPaddingBottom: "7px" },
      lg: { textStyle: "md", px: "3.5", py: "9px", scrollPaddingBottom: "9px" },
      xl: { textStyle: "lg", px: "4", py: "9px", scrollPaddingBottom: "9px" }
    }
  }
});

// src/theme/recipes/toast.ts
import { toastAnatomy } from "@ark-ui/react/anatomy";
import { defineSlotRecipe as defineSlotRecipe39 } from "@pandacss/dev";
var toast = defineSlotRecipe39({
  className: "toast",
  slots: toastAnatomy.keys(),
  base: {
    root: {
      alignItems: "start",
      background: "gray.surface.bg",
      borderRadius: "l3",
      boxShadow: "lg",
      display: "flex",
      gap: "4",
      height: "var(--height)",
      minWidth: "sm",
      opacity: "var(--opacity)",
      overflowWrap: "anywhere",
      p: "4",
      position: "relative",
      scale: "var(--scale)",
      transitionDuration: "slow",
      transitionProperty: "translate, scale, opacity, height",
      transitionTimingFunction: "default",
      translate: "var(--x) var(--y)",
      width: "full",
      willChange: "translate, opacity, scale",
      zIndex: "var(--z-index)"
    },
    title: {
      color: "fg.default",
      fontWeight: "medium",
      textStyle: "sm"
    },
    description: {
      color: "fg.muted",
      textStyle: "sm"
    },
    actionTrigger: {
      color: "colorPalette.plain.fg",
      cursor: "pointer",
      fontWeight: "semibold",
      textStyle: "sm"
    },
    closeTrigger: {
      position: "absolute",
      top: "2",
      insetEnd: "2"
    }
  }
});

// src/theme/recipes/toggle-group.ts
import { toggleGroupAnatomy } from "@ark-ui/react/anatomy";
import { defineSlotRecipe as defineSlotRecipe40 } from "@pandacss/dev";
var toggleGroup = defineSlotRecipe40({
  className: "toggle-group",
  slots: toggleGroupAnatomy.keys(),
  base: {
    root: {}
  },
  variants: {
    variant: {
      outline: {
        root: {
          borderRadius: "l3",
          borderWidth: "1px",
          gap: "1",
          p: "1"
        }
      }
    }
  }
});

// src/theme/recipes/tooltip.ts
import { tooltipAnatomy } from "@ark-ui/react/anatomy";
import { defineSlotRecipe as defineSlotRecipe41 } from "@pandacss/dev";
var tooltip = defineSlotRecipe41({
  className: "tooltip",
  slots: tooltipAnatomy.keys(),
  base: {
    content: {
      "--tooltip-bg": "colors.gray.solid.bg",
      bg: "var(--tooltip-bg)",
      color: "gray.solid.fg",
      borderRadius: "l2",
      boxShadow: "sm",
      fontWeight: "semibold",
      px: "2",
      py: "1.5",
      textStyle: "xs",
      maxWidth: "xs",
      _open: {
        animationStyle: "scale-fade-in",
        animationDuration: "fast"
      },
      _closed: {
        animationStyle: "scale-fade-out",
        animationDuration: "faster"
      }
    },
    arrow: {
      "--arrow-size": "sizes.2",
      "--arrow-background": "var(--tooltip-bg)"
    },
    arrowTip: {
      borderTopWidth: "1px",
      borderInlineStartWidth: "1px",
      borderColor: "var(--tooltip-bg)"
    }
  }
});

// src/theme/recipes/index.ts
var recipes = {
  absoluteCenter,
  badge,
  button,
  code,
  group,
  heading,
  icon,
  input,
  inputAddon,
  kbd,
  link,
  separator,
  skeleton,
  spinner,
  text,
  textarea
};
var slotRecipes = {
  accordion,
  alert,
  avatar,
  breadcrumb,
  card,
  carousel,
  checkbox,
  clipboard,
  collapsible,
  colorPicker,
  combobox,
  datePicker,
  dialog,
  drawer,
  editable,
  field,
  fieldset,
  fileUpload,
  hoverCard,
  inputGroup,
  menu,
  numberInput,
  pagination,
  pinInput,
  popover,
  progress,
  radioCardGroup,
  radioGroup,
  ratingGroup,
  scrollArea,
  segmentGroup,
  select,
  slider,
  splitter,
  switch: switchRecipe,
  table,
  tabs,
  tagsInput,
  toast,
  toggleGroup,
  tooltip
};

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
              info: { value: { _light: "rgba(37, 99, 235, 0.08)", _dark: "rgba(96, 165, 250, 0.12)" } },
              deep: { value: { _light: "{colors.gray.light.1}", _dark: "#061012" } },
              navbar: { value: { _light: "rgba(253, 253, 252, 0.85)", _dark: "rgba(26, 46, 48, 0.85)" } },
              navbarIdle: { value: { _light: "rgba(253, 253, 252, 0.6)", _dark: "rgba(26, 46, 48, 0.6)" } }
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
        recipes,
        slotRecipes
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

//# debugId=D48F706ABE48066E64756E2164756E21
//# sourceMappingURL=index.js.map
