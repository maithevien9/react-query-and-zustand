/// <reference types="vitest" />
/// <reference types="vite/client" />
import react from '@vitejs/plugin-react'
import { loadEnv } from 'vite'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

function htmlPlugin(env: Record<string, string | undefined>) {
  return {
    name: 'html-transform',
    transformIndexHtml: {
      enforce: 'pre',
      transform: (html: string) => {
        return html.replace(/<%=(.*?)%>/g, (match, p1) => env[p1] ?? match)
      }
    }
  }
}

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    build: {
      outDir: 'build',
      sourcemap: true
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
        }
      }
    },
    optimizeDeps: {
      include: ['@ant-design/icons', 'lodash-es']
    },
    plugins: [svgr(), react(), htmlPlugin(env), tsconfigPaths()],
    resolve: {
      alias: []
    },
    server: {
      port: 4000,
      open: true
    },
    test: {
      testTimeout: 15000,
      globals: true,
      environment: 'jsdom',
      deps: {
        inline: ['vitest-canvas-mock']
      },
      setupFiles: './src/setupTests.ts',
      coverage: {
        reporter: ['text', 'html'],
        exclude: ['node_modules/', 'src/setupTests.ts']
      },
      include: ['**/*.{test,spec}.{ts,tsx}']
    }
  }
}
