import { defineConfig } from 'vite'
import { comments } from './public/data'


function sleep (number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, number)
  })
}

export default defineConfig({
  'test': {
    'environment': 'jsdom',
    'include': ['tests/**/*.test.js'],
    'setupFiles': './tests/setup.js'
  },
  'plugins': [
    {
      'name': 'server',
      configureServer (server) {
        let _comments = comments
        server.middlewares.use(async (req, res, next) => {
          if (req.url?.startsWith('/comments/post')) {
            if (req.method !== 'POST') {
              res.writeHead(405)
              res.write(JSON.stringify({ 'error': { 'message': 'Method must be POST!' }}))
              res.end()
            }

            if (req.headers['content-type'] && req.headers['content-type'] !== 'application/json') {
              res.writeHead(400)
              res.write(JSON.stringify({ 'error': { 'message': 'Invalid or missing Content-Type' }}))
              res.end()
            }

            let body = ''
            req.on('data', async (chunk) => {
              body += chunk
              body = JSON.stringify({ ...JSON.parse(body),
                'avatar': 'https://i.pravatar.cc/96?u=42854' })
              _comments.push(JSON.parse(body))

              await sleep(200)
              res.write(JSON.stringify({ 'data': body }))
              res.end()
            })
          } else if (req.url?.startsWith('/comments')) {
            await sleep(200)
            res.write(JSON.stringify({ 'data': comments }))
            res.end()
          } else {
            next()
          }
        })
      }
    }
  ]
})
