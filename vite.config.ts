/// <reference types="vitest" />

import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsxPlugin from "@vitejs/plugin-vue-jsx";

import UnoCss from './config/unocss'

const rollupOptions = {
    // make sure to externalize deps that shouldn't be bundled
    // into your library
    external: ['vue', 'vue-router'],
    output: {
        globals: {
            vue: 'Vue',
        }
    }
}
export default defineConfig({
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js'
        }
    },
    plugins: [
        vue(),
        // 添加JSX插件
        vueJsxPlugin({
            // options are passed on to @vue/babel-plugin-jsx
        }),
        // 添加UnoCSS插件
        UnoCss(),
    ],
    build: {
        rollupOptions,
        minify: 'terser', // boolean | 'terser' | 'esbuild'
        sourcemap: true, // 输出单独 source文件
        // 生成压缩大小报告
        // brotliSize: true,
        cssCodeSplit: true,
        lib: {
            entry: './src/entry.ts',
            name: 'SmartyUI',
            fileName: 'smarty-ui',
            // 导出模块格式
            formats: ["es", "umd", "iife"],
        }
    },
    // 如果你使用 vite 的 defineConfig 你还需要将 三斜线指令 写在配置文件的顶部
    test: {
        // 默认情况下，vitest 不显式提供全局 API。如果你更倾向于使用类似 jest 中的全局 API，可以将 --globals 选项传递给 CLI 或在配置中添加
        globals: true,
        // Vitest 中的默认测试环境是一个 Node.js 环境。如果你正在构建 Web 端应用程序，你可以使用 jsdom 或 happy-dom 这种类似浏览器(browser-like)的环境来替代 Node.js。
        // 如果你正在构建边缘计算函数，你可以使用 edge-runtime 环境

       /* // 你可以通过在文件顶部添加包含 @vitest-environment 的文档块或注释，为某个测试文件中的所有测试指定环境
        /!**
         * 文档块格式:
         * @vitest-environment jsdom
         *!/
        // 注释格式: @vitest-environment happy-dom*/
        environment: 'happy-dom',
        // 决定模块的转换方式。
        // 当你使用 JSX 作为 React 以外的组件模型（例如 Vue JSX 或 SolidJS）时，你可能需要进行如下配置以使 .tsx / .jsx 转换为客户端组件：
        transformMode: {
            web: [/\.[jt]sx$/],
        },
    }
})
