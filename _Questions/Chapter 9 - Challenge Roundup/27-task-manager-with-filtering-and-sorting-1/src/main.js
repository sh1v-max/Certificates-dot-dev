export let tasks = []

export function addTask (task, priority) {
  // Add a new task and render the updated list
}

export function deleteTask (taskId) {
  // Remove the task with the given ID and render the updated list
}

export function filterTasks (priority) {
  // return filtered tasks
}

export function sortTasks (tasks, sortBy) {
  // return sorted tasks
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
}

export function main () {
  const addTaskBtn = document.getElementById('add-task-btn')
  const taskInput = document.getElementById('task-input')
  const prioritySelect = document.getElementById('priority-select')
  const filterSelect = document.getElementById('filter-select')
  const sortSelect = document.getElementById('sort-select')
  // Add event listeners and handle task addition, filtering, and sorting here
}
