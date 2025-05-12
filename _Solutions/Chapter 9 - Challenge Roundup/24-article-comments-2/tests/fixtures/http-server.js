import { createApp, eventHandler, toNodeListener, getQuery } from 'h3'
import { listen } from 'listhen'
import { comments } from '../../public/data'

const app = createApp()
let listener
export const getURL = () => listener.url

function sleep (number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, number)
  })
}

export async function setupServer () {
  app.use('/comments', eventHandler(async () => {
    await sleep(200)
    return {
      'data': comments
    }
  }))


  listener = await listen(toNodeListener(app))
}

export function closeServer () {
  listener.close().catch(console.error)
}
