import './src/style.css'

const navs = [
  {
    'title': 'All Exercises',
    'id': 'index'
  },
  {
    'title': 'Requirement 1',
    'id': '1-requirement'
  },
  {
    'title': 'Requirement 2',
    'id': '2-requirement'
  }
]

const navContianer = document.querySelector('#nav')

if (navContianer) {
  navs.forEach((nav) => {
    const item = document.createElement('li')
    const a = document.createElement('a')
    a.href = `./${nav.id}.html`
    a.textContent = nav.title
    item.appendChild(a)
    navContianer.appendChild(item)
  })
}

