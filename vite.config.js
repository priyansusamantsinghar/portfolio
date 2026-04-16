import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'api-server-simulator',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url === '/api/chat' && req.method === 'POST') {
              console.log('API Request received. Loading env...');
              let body = ''
              req.on('data', chunk => { body += chunk })
              req.on('end', async () => {
                try {
                  const data = JSON.parse(body)
                  const apiKey = env.GROQ_API_KEY
                  
                  console.log('API Key found:', apiKey ? 'YES' : 'NO');

                  if (!apiKey) {
                    res.statusCode = 500
                    res.end(JSON.stringify({ error: 'API key not configured' }))
                    return
                  }

                  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${apiKey}`,
                    },
                    body: JSON.stringify({
                      model: 'llama-3.3-70b-versatile',
                      messages: [
                        { role: 'system', content: data.systemContext },
                        ...data.history,
                        { role: 'user', content: data.userMsg }
                      ],
                    }),
                  })

                  const result = await response.json()
                  res.setHeader('Content-Type', 'application/json')
                  res.end(JSON.stringify(result))
                } catch (error) {
                  res.statusCode = 500
                  res.end(JSON.stringify({ error: error.message }))
                }
              })
              return
            }
            next()
          })
        }
      }
    ],
  }
})
