import { describe, it, expect, beforeAll, beforeEach } from 'vitest'
import { main, addTask, deleteTask, filterTasks, sortTasks, tasks } from '../src/main'

beforeAll(() => {
  main()
})

beforeEach(() => {
  tasks.length = 0
})

describe('Task Manager', () => {
  it('should add a task', () => {
    const taskInput = document.getElementById('task-input')
    const prioritySelect = document.getElementById('priority-select')
    const addTaskBtn = document.getElementById('add-task-btn')

    taskInput.value = 'Test Task'
    prioritySelect.value = 'high'
    addTaskBtn.click()

    expect(tasks.length).toBe(1)
    expect(tasks[0].task).toBe('Test Task')
    expect(tasks[0].priority).toBe('high')
  })

  it('should delete a task', () => {
    addTask('Test Task', 'high')
    const taskId = tasks[0].id
    deleteTask(taskId)

    expect(tasks.length).toBe(0)
  })

  it('should filter tasks by priority', () => {
    addTask('Low Priority Task', 'low')
    addTask('High Priority Task', 'high')

    const filteredTasks = filterTasks('high')
    expect(filteredTasks.length).toBe(1)
    expect(filteredTasks[0].task).toBe('High Priority Task')
  })

  it('should sort tasks by priority', () => {
    addTask('Low Priority Task', 'low')
    addTask('High Priority Task', 'high')
    addTask('Medium Priority Task', 'medium')

    const sortedTasks = sortTasks(tasks, 'priority')
    expect(sortedTasks[0].priority).toBe('high')
    expect(sortedTasks[1].priority).toBe('medium')
    expect(sortedTasks[2].priority).toBe('low')
  })

  it('should sort tasks by creation time', () => {
    addTask('First Task', 'low')
    addTask('Second Task', 'high')

    const sortedTasks = sortTasks(tasks, 'time')
    expect(sortedTasks[0].task).toBe('Second Task')
    expect(sortedTasks[1].task).toBe('First Task')
  })

  it('should render tasks', () => {
    addTask('Test Task', 'high')
    const taskList = document.getElementById('task-list')
    expect(taskList.children.length).toBe(1)
    expect(taskList.children[0].textContent).toContain('Test Task')
  })
})
