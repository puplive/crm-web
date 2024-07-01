import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    cors: true, // 默认启用并允许任何源
    proxy: {
      '/api': {  // 这里是你希望代理的请求前缀
        target: 'https://crm-api.exposaas.cn',  // 目标服务器的地址
        changeOrigin: true,  // 是否改变请求头中的 Host 字段
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    },
  },
})
