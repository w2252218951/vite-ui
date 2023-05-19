import {defineConfig} from "vite";

import vueJsxPlugin from "@vitejs/plugin-vue-jsx";
import UnoCss from '../config/unocss'

export default defineConfig({
    plugins: [
        // 添加JSX插件
        vueJsxPlugin(),
        UnoCss(),
    ],
})
