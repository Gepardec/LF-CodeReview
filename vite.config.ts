import { defineConfig } from 'vite'

// Workaround: Vite's default CSS minifier (lightningcss) chokes on a rule in
// Slidev's own client CSS. Skipping CSS minification costs a few KB and nothing else.
export default defineConfig({
  build: { cssMinify: false },
})
