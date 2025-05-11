export let tasks = []

export function addTask (task, priority) {
  const newTask = {
    'id': Date.now(), // Unique ID based on timestamp
    task,
    priority,
    'createdAt': new Date() // Current date and time
  }
  tasks.push(newTask)
  renderTasks()
}

export function deleteTask (taskId) {
  tasks = tasks.filter((task) => task.id !== taskId)
  renderTasks()
}

export function filterTasks (priority) {
  return priority === 'all'
    ? tasks
    : tasks.filter((task) => task.priority === priority)
}

export function sortTasks (tasks, sortBy) {
  if (sortBy === 'priority') {
    const priorityOrder = { 'high': 3,
      'medium': 2,
      'low': 1 }
    return tasks.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority])
  } else if (sortBy === 'time') {
    return tasks.sort((a, b) => b.createdAt - a.createdAt)
  }
  return tasks
}

export function createTaskElement (task) {
  const li = document.createElement('li')
  li.className = `priority-${task.priority}`
  li.innerHTML = `
    <span>${task.task}</span>
    <span class="priority-label">${task.priority}</span>
    <button class="delete-btn" data-id="${task.id}">Delete</button>
  `
  return li
}

export function renderTasks () {
  const taskList = document.getElementById('task-list')
  const filterSelect = document.getElementById('filter-select')
  const sortSelect = document.getElementById('sort-select')

  const filteredTasks = filterTasks(filterSelect.value)
  const sortedTasks = sortTasks(filteredTasks, sortSelect.value)

  taskList.innerHTML = '' // Clear the list before rendering
  sortedTasks.forEach((task) => {
    const taskElement = createTaskElement(task)
    taskList.appendChild(taskElement)

    // Add event listener to the newly created delete button
    const deleteBtn = taskElement.querySelector('.delete-btn')
    deleteBtn.addEventListener('click', () => {
      const taskId = parseInt(deleteBtn.getAttribute('data-id'))
      deleteTask(taskId)
    })
  })
}

export function main () {
  const addTaskBtn = document.getElementById('add-task-btn')
  const taskInput = document.getElementById('task-input')
  const prioritySelect = document.getElementById('priority-select')
  const filterSelect = document.getElementById('filter-select')
  const sortSelect = document.getElementById('sort-select')

  addTaskBtn.addEventListener('click', () => {
    const task = taskInput.value.trim()
    const priority = prioritySelect.value
    if (task) {
      addTask(task, priority)
      taskInput.value = '' // Clear input after adding
    }
  })

  filterSelect.addEventListener('change', () => {
    renderTasks()
  })

  sortSelect.addEventListener('change', () => {
    renderTasks()
  })

  // Initial render
  renderTasks()
}
