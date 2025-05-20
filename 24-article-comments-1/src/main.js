const GET_COMMENTS_API_ENDPOINT = '/comments'
const POST_COMMENTS_API_ENDPOINT = '/comments/post'
const COMMENTS_CONTAINER_ID = 'commentsContainer'
const COMMENTS_SUBMIT_ID = 'submitBtn'

export const fetchData = async (api) => {
  const res = await fetch(api)
  const comments = await res.json()
  // console.log(comments)
  return comments.data
}

const createCommentElement = (data) => {
  const commentEl = document.createElement('div')
  const avatar = document.createElement('img')
  const wrapper = document.createElement('div')
  const author = document.createElement('h3')
  const comment = document.createElement('p')
  // console.log(data)
  avatar.src = data.avatar
  avatar.alt = data.author
  author.textContent = data.name
  comment.textContent = data.content
  // console.log(data)

  wrapper.appendChild(author)
  wrapper.appendChild(comment)

  commentEl.appendChild(avatar)
  commentEl.appendChild(wrapper)
  return commentEl
}

const renderComment = (comment) => {
  // console.log(comment)
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

  console.log(comment)

  const data = await res.json()

  name.value = ''
  content.value = ''

  return data.data
}

export const main = async () => {
  // Execute your code here
  const comments = await fetchData(GET_COMMENTS_API_ENDPOINT)
  // console.log(comments)
  comments.forEach(renderComment)

  // posting comment
  const submitBtn = document.querySelector(`#${COMMENTS_SUBMIT_ID}`)
  submitBtn.addEventListener('click', async () => {
    const addedComment = await postComment()
    renderComment(JSON.parse(addedComment))
    console.log(JSON.parse(addedComment))
  })
}
