export let tasks = []

export function addTask (task, priority) {
  // Add a new task and render the updated list
  const newTask = {
    'id': Date.now(),
    task,
    priority,
    'createdAt': new Date()
  }
  tasks.push(newTask)
  renderTasks()
}
export function deleteTask (taskId) {
  // Remove the task with the given ID and render the updated list
  tasks = tasks.filter((task) => task.id !== taskId)
  renderTasks()
}

export function filterTasks (priority) {
  // return filtered tasks
  return priority === 'all'
    ? tasks
    : tasks.filter((task) => task.priority === priority)
}

export function sortTasks (tasks, sortBy) {
  // return sorted tasks
  if (sortBy === 'priority') {
    const priorityOrder = { 'high': 3,
      'medium': 2,
      'low': 1 }
    return tasks.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority])
  } else if (sortBy == 'time') {
    return tasks.sort((a, b) => b.createdAt - a.createdAt)
  }
  return tasks
}

// Expects a task object
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

  taskList.innerHTML = ''
  sortedTasks.forEach((task) => {
    const taskElement = createTaskElement(task)
    taskList.appendChild(taskElement)

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
  // Add event listeners and handle task addition, filtering, and sorting here

  addTaskBtn.addEventListener('click', () => {
    const task = taskInput.value.trim()
    const priority = prioritySelect.value
    if (task) {
      addTask(task, priority)
      taskInput.value = ' '
    }
    // console.log(tasks)
  })

  filterSelect.addEventListener('change', () => {
    renderTasks()
  })

  sortSelect.addEventListener('change', () => {
    renderTasks()
  })

  renderTasks()
}
