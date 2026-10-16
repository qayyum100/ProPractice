import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  if (env.GEMINI_API_KEY || env.VITE_GEMINI_API_KEY) {
    process.env.GEMINI_API_KEY = env.GEMINI_API_KEY || env.VITE_GEMINI_API_KEY
  }

  return {
    plugins: [
      react(),
      {
        name: 'vite-api-server-middleware',
        configureServer(server) {
          server.middlewares.use('/api/amazon-quiz', async (req, res) => {
            try {
              const apiModule = await server.ssrLoadModule('/api/amazon-quiz.ts')
              await apiModule.default(req, res)
            } catch (err: any) {
              res.statusCode = 500
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ error: 'Local API middleware failed', details: err?.message }))
            }
          })
        }
      }
    ],
  }
})
