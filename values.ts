import type { hashToken, hexDigit } from "./token";

type dimension<T extends string> = `${number}${T}`;

export type cssWideKeywords = "initial" | "inherit" | "unset" | "revert";

export type relativeLengths = dimension<
  | "em"
  | "ex"
  | "cap"
  | "ch"
  | "ic"
  | "rem"
  | "lh"
  | "rlh"
  | "vw"
  | "vh"
  | "vi"
  | "vb"
  | "vmin"
  | "vmax"
>;

export type absoluteLengths = dimension<
  "cm" | "mm" | "Q" | "in" | "pc" | "pt" | "px"
>;

export type fontRelativeLengths = dimension<
  | "em"
  | "rem"
  | "ex"
  | "rex"
  | "cap"
  | "rcap"
  | "ch"
  | "rch"
  | "ic"
  | "ric"
  | "lh"
  | "rlh"
>;

export type dynamicViewportSizes<T extends string> = `${number}${
  | "v"
  | "lv"
  | "sv"
  | "dv"}${T}`;

export type viewportPercentageLengths = dynamicViewportSizes<
  "w" | "h" | "i" | "b" | "min" | "max"
>;

export type length = relativeLengths | absoluteLengths;

export type percentage = `${number}%`;

export type lengthPercentage = length | percentage;

export type frequency = dimension<"Hz" | "kHz">;

export type frequencyPercentage = frequency | percentage;

export type angle = dimension<"deg" | "grad" | "rad" | "turn">;

export type anglePercentage = angle | percentage;

export type time = dimension<"s" | "ms">;

export type timePercentage = time | percentage;

type urlModifier = string;

type urlToken = string;

export type urlFunction = `url(${string} ${urlModifier})` | urlToken;

export type srcFunction = `url(${string} ${urlModifier})`;

// export type url = urlFunction | srcFunction; // Must be this but i cant write this type correctly
export type url = srcFunction;

export type ratio = number | `${number}/${number}`;

export type resolution = dimension<"dpi" | "dpcm" | "dppx" | "x">;

type alphaValue = number | percentage;

type modernRgbSyntaxGroup = number | percentage | "none";
type modernRgbSyntaxAlpha = `/ ${alphaValue | "none"}`;
type modernRgbSyntax =
  | `${modernRgbSyntaxGroup} ${modernRgbSyntaxGroup} ${modernRgbSyntaxGroup}`
  | `${modernRgbSyntaxGroup} ${modernRgbSyntaxGroup} ${modernRgbSyntaxGroup} ${modernRgbSyntaxAlpha}`;
type modernRgbaSyntax = modernRgbSyntax;

type rgbFunction = `rgb(${modernRgbSyntax})`;
type rgbaFunction = `rgba(${modernRgbaSyntax})`;

type hue = number | angle;

type modernHslSyntax =
  | `${hue | "none"} ${percentage | number | "none"} ${
      | percentage
      | number
      | "none"}`
  | `${hue | "none"} ${percentage | number | "none"} ${
      | percentage
      | number
      | "none"} / ${alphaValue | "none"}`;
type modernHslaSyntax = modernHslSyntax;

type hslFunction = `hsl(${modernHslSyntax})`;
type hslaFunction = `hsla(${modernHslaSyntax})`;

type hwbFunctionArgumentGroup = `${hue | "none"} ${
  | percentage
  | number
  | "none"} ${percentage | number | "none"}`;
type hwbFunctionArgument =
  | `${hwbFunctionArgumentGroup}`
  | `${hwbFunctionArgumentGroup} / ${alphaValue | "none"}`;
type hwbFunction = `hwb(${hwbFunctionArgument})`; // Skip first optional argument [from <color>]?

type labFunctionArgumentGroup = percentage | number | "none";
type labFunctionArgument =
  | `${labFunctionArgumentGroup} ${labFunctionArgumentGroup} ${labFunctionArgumentGroup}`
  | `${labFunctionArgumentGroup} ${labFunctionArgumentGroup} ${labFunctionArgumentGroup} / ${
      | alphaValue
      | "none"}`;
type labFunction = `lab(${labFunctionArgument})`; // Skip first optional argument [from <color>]?

type lchFunctionArgumentGroup = percentage | number | "none";
type lchFunctionArgument =
  | `${lchFunctionArgumentGroup} ${lchFunctionArgumentGroup} ${hue | "none"}`
  | `${lchFunctionArgumentGroup} ${lchFunctionArgumentGroup} ${
      | hue
      | "none"} / ${alphaValue | "none"}`;
type lchFunction = `lch(${lchFunctionArgument})`; // Skip first optional argument [from <color>]?

type oklabFunction = `oklab(${labFunctionArgument})`; // Skip first optional argument [from <color>]?

type oklchFunction = `oklch(${lchFunctionArgument})`; // Skip first optional argument [from <color>]?

export type dashedIdent = `--${string}`;

type customParams =
  | dashedIdent
  | `${dashedIdent} ${number | percentage | "none"}`; // Group number | precentage | 'none' must be one or more times
type predefinedRgb =
  | "srgb"
  | "srgb-linear"
  | "display-p3"
  | "a98-rgb"
  | "prophoto-rgb"
  | "rec2020";
type predefinedRgbParamsGroup = number | percentage | "none";
type predefinedRgbParams =
  | predefinedRgb
  | `${predefinedRgb} ${predefinedRgbParamsGroup} ${predefinedRgbParamsGroup} ${predefinedRgbParamsGroup}`;
type xyz = "xyz" | "xyz-d50" | "xyz-d65";
type xyzParamsGroup = number | percentage | "none";
type xyzParams =
  | xyz
  | `${xyz} ${xyzParamsGroup} ${xyzParamsGroup} ${xyzParamsGroup}`;
type colorspaceParams = customParams | predefinedRgbParams | xyzParams;
type colorFunctionArgument =
  | colorspaceParams
  | `${colorspaceParams} / ${alphaValue | "none"}`;
type colorFunction = `color(${colorFunctionArgument})`;

type colorFunctions =
  | rgbFunction
  | rgbaFunction
  | hslFunction
  | hslaFunction
  | hwbFunction
  | labFunction
  | lchFunction
  | oklabFunction
  | oklchFunction
  | colorFunction;

type hexColor3 = `${hashToken<hexDigit>}${hexDigit}${hexDigit}`;
// type hexColor4 = `${hashToken<hexDigit>}${hexDigit}${hexDigit}${hexDigit}`;
// type hexColor6 = `${hashToken<hexDigit>}${hexDigit}${hexDigit}${hexDigit}${hexDigit}${hexDigit}`;
// type hexColor8 = `${hashToken<hexDigit>}${hexDigit}${hexDigit}${hexDigit}${hexDigit}${hexDigit}${hexDigit}${hexDigit}`;
// type hexColor = hexColor3 | hexColor4 | hexColor6 | hexColor8;
// Because this type is complicated i use simple variant from all
type hexColor = hexColor3;

type namedColor =
  | "aqua"
  | "aquamarine"
  | "azure"
  | "beige"
  | "bisque"
  | "black"
  | "blanchedalmond"
  | "blue"
  | "blueviolet"
  | "brown"
  | "burlywood"
  | "cadetblue"
  | "chartreuse"
  | "chocolate"
  | "coral"
  | "cornflowerblue"
  | "cornsilk"
  | "crimson"
  | "cyan"
  | "darkblue"
  | "darkcyan"
  | "darkgoldenrod"
  | "darkgray"
  | "darkgreen"
  | "darkgrey"
  | "darkkhaki"
  | "darkmagenta"
  | "darkolivegreen"
  | "darkorange"
  | "darkorchid"
  | "darkred"
  | "darksalmon"
  | "darkseagreen"
  | "darkslateblue"
  | "darkslategray"
  | "darkslategrey"
  | "darkturquoise"
  | "darkviolet"
  | "deeppink"
  | "deepskyblue"
  | "dimgray"
  | "dimgrey"
  | "dodgerblue"
  | "firebrick"
  | "floralwhite"
  | "forestgreen"
  | "fuchsia"
  | "gainsboro"
  | "ghostwhite"
  | "gold"
  | "goldenrod"
  | "gray"
  | "green"
  | "greenyellow"
  | "grey"
  | "honeydew"
  | "hotpink"
  | "indianred"
  | "indigo"
  | "ivory"
  | "khaki"
  | "lavender"
  | "lavenderblush"
  | "lawngreen"
  | "lemonchiffon"
  | "lightblue"
  | "lightcoral"
  | "lightcyan"
  | "lightgoldenrodyellow"
  | "lightgray"
  | "lightgreen"
  | "lightgrey"
  | "lightpink"
  | "lightsalmon"
  | "lightseagreen"
  | "lightskyblue"
  | "lightslategray"
  | "lightslategrey"
  | "lightsteelblue"
  | "lightyellow"
  | "lime"
  | "limegreen"
  | "linen"
  | "magenta"
  | "maroon"
  | "mediumaquamarine"
  | "mediumblue"
  | "mediumorchid"
  | "mediumpurple"
  | "mediumseagreen"
  | "mediumslateblue"
  | "mediumspringgreen"
  | "mediumturquoise"
  | "mediumvioletred"
  | "midnightblue"
  | "mintcream"
  | "mistyrose"
  | "moccasin"
  | "navajowhite"
  | "navy"
  | "oldlace"
  | "olive"
  | "olivedrab"
  | "orange"
  | "orangered"
  | "orchid"
  | "palegoldenrod"
  | "palegreen"
  | "paleturquoise"
  | "palevioletred"
  | "papayawhip"
  | "peachpuff"
  | "peru"
  | "pink"
  | "plum"
  | "powderblue"
  | "purple"
  | "rebeccapurple"
  | "red"
  | "rosybrown"
  | "royalblue"
  | "saddlebrown"
  | "salmon"
  | "sandybrown"
  | "seagreen"
  | "seashell"
  | "sienna"
  | "silver"
  | "skyblue"
  | "slateblue"
  | "slategray"
  | "slategrey"
  | "snow"
  | "springgreen"
  | "steelblue"
  | "tan"
  | "teal"
  | "thistle"
  | "tomato"
  | "turquoise"
  | "violet"
  | "wheat"
  | "white"
  | "whitesmoke"
  | "yellow"
  | "yellowgreen";

type colorInterpolationMethod = ``;
type colorMixFunctionArgument =
  | colorInterpolationMethod
  | `${colorInterpolationMethod}, ${colorFunction}, ${percentage}`
  | `${colorInterpolationMethod}, ${percentage}, ${colorFunction}`;
type colorMixFunction = `color-mix(${colorMixFunctionArgument})`;

type colorBase =
  | hexColor
  | colorFunctions
  | namedColor
  | colorMixFunction
  | "transparent";

type systemColor =
  | "AccentColor"
  | "AccentColorText"
  | "ActiveText"
  | "ButtonBorder"
  | "ButtonFace"
  | "ButtonText"
  | "Canvas"
  | "CanvasText"
  | "Field"
  | "FieldText"
  | "GrayText"
  | "Highlight"
  | "HighlightText"
  | "LinkText"
  | "Mark"
  | "MarkText"
  | "SelectedItem"
  | "SelectedItemText"
  | "VisitedText";

type contrastColorFunction = `contrast-color(${string})`;

type cmykComponent = number | percentage | "none";
type modernDeviceCmykSyntaxArgument =
  | `${cmykComponent} ${cmykComponent} ${cmykComponent} ${cmykComponent}`
  | `${cmykComponent} ${cmykComponent} ${cmykComponent} ${cmykComponent} / ${
      | alphaValue
      | "none"}`;
type modernDeviceCmykSyntax = `device-cmyk(${modernDeviceCmykSyntaxArgument})`;
type deviceCmykFunction = modernDeviceCmykSyntax;

type lightDarkFunction = `light-dark(${string}, ${string})`; // Must be: type lightDarkFunction = `light-dark(${color}, ${color})`;

export type color =
  | "currentColor"
  | colorBase
  | systemColor
  | contrastColorFunction
  | deviceCmykFunction
  | lightDarkFunction;
