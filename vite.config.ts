import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  css: {
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
				modifyVars: {
					'@primary-color': '#135EA8',
				},
			},
		},
  },
  resolve: {
		alias: [
      { find: /^~/, replacement: '' },
    ],
  },
  server: {
		proxy: {
			'^/resources/.*': {
				target: 'http://172.20.20.12:8082',
				changeOrigin: true,
				
			},
			'^/api/.*': {
				target: 'http://172.20.20.12:8082',
				changeOrigin: true,
			
			},
			'^/auth-server/.*': {
				target: 'http://172.20.20.12:8083',
				changeOrigin: true,
			},
		},
	},
})
