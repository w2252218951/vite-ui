import UnoCss from "unocss/vite";
import {presetAttributify, presetIcons, presetUno} from "unocss";

const colors = [
    "white",
    "black",
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
];

const safeList = [
    ...colors.map(i => `bg-${i}-500`),
    ...colors.map((i) => `hover:bg-${i}-700`),
    ...colors.map((i) => `i-ic-baseline-${i}`),
]

export default () => {
    return  UnoCss({
        safelist: safeList,
        presets: [presetUno(), presetAttributify(), presetIcons()],
    });
}

