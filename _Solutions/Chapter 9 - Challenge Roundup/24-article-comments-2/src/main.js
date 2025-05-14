const GET_COMMENTS_API_ENDPOINT = '/comments'
const POST_COMMENTS_API_ENDPOINT = '/comments/post'
const COMMENTS_CONTAINER_ID = 'commentsContainer'
const COMMENTS_SUBMIT_ID = 'submitBtn'

export const fetchData = async (api) => {
  const res = await fetch(api)
  const comments = await res.json()
  return comments.data
}

const createCommentElement = (data) => {
  const commentElement = document.createElement('div')
  // avatar
  const avatar = document.createElement('img')
  // wrapper
  const wrapper = document.createElement('div')
  // author
  const author = document.createElement('h3')
  // comment
  const comment = document.createElement('p')

  avatar.src = data.avatar
  avatar.alt = data.author
  author.textContent = data.name
  comment.textContent = data.content

  wrapper.appendChild(author)
  wrapper.appendChild(comment)

  commentElement.appendChild(avatar)
  commentElement.appendChild(wrapper)
  return commentElement
}

const renderComment = (comment) => {
  const commentElement = createCommentElement(comment)
  const container = document.querySelector(`#${COMMENTS_CONTAINER_ID}`)
  container.appendChild(commentElement)
}

const postComment = async () => {
  const name = document.querySelector('#name')
  const content = document.querySelector('#comment')

  const comment = {
    'name': name.value,
    'content': content.value
  }

  const res = await fetch(POST_COMMENTS_API_ENDPOINT, {
    'method': 'POST',
    'headers': {
      'Content-Type': 'application/json'
    },
    'body': JSON.stringify(comment)
  })

  const data = await res.json()

  name.value = ''
  content.value = ''

  return data.data
}

export const main = async () => {
  const comments = await fetchData(GET_COMMENTS_API_ENDPOINT)
  comments.forEach(renderComment)

  /*
   * Or, we can use `DocumentFragment` to render multiple comments at once for better performance.
   * https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
   *
   * const fragment = new DocumentFragment()
   * for (const comment of comments) {
   *   const el = createCommentElement(comment)
   *   fragment.append(el)
   * }
   *
   * const container = document.querySelector(`#${COMMENTS_CONTAINER_ID}`)
   * container.append(fragment)
   */

  const submitBtn = document.querySelector(`#${COMMENTS_SUBMIT_ID}`)
  submitBtn.addEventListener('click', async () => {
    const addedComment = await postComment()
    renderComment(JSON.parse(addedComment))
  })
}
