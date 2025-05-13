import { vi, describe, it, expect, beforeAll, afterAll } from 'vitest'
import { main, fetchData } from '../src/main'
import { setupServer, getURL } from './fixtures/http-server'
import { comments } from '../public/data'


beforeAll(async () => {
  await setupServer()
  const baseURL = getURL()
  // override fetch api
  const _fetch = global.fetch
  global.fetch = function (input) {
    return _fetch(`${baseURL.slice(0, baseURL.length - 1)}${input}`)
  }
})


describe('The challenge', () => {
  it('should work w/ fetch data', async () => {
    const data = await fetchData('/comments')
    expect(data).toEqual(comments)
  })
  it('should work', async () => {
    main()
    await vi.waitUntil(() => document.querySelector('#commentsContainer').innerHTML.includes('<div>'), {
      'timeout': 1500,
      'interval': 20
    })
    const commentElements = Array.from(document.querySelector('#commentsContainer').children)
    comments.forEach((comment, index) => {
      const el = commentElements[index]
      expect(el.innerHTML).toContain(`<img src="${comment.avatar}"`)
      expect(el.innerHTML).toContain(`<h3>${comment.name}</h3>`)
      expect(el.innerHTML).toContain(`<p>${comment.content}</p>`)
    })
  })
})
