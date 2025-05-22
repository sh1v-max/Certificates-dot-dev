---
difficulty: 2
tags: codechallenge, training, JavaScript
chapter: "Chapter 9: Challenge Roundup"
training: true
---

# Task Manager with Filtering and Sorting

# Challenge Description

Your task is to build a **Task Manager** application that allows users to:
- Add tasks with a priority level (Low, Medium, High).
- Filter tasks by priority.
- Sort tasks by priority or creation time.
- Delete tasks.

## Requirements

1. **Add Task Functionality**
   - Users should be able to input a task in a text field.
   - Every task should have the following properties:
     - `id`: A unique identifier (use `Date.now()` to generate a timestamp-based ID).
     - `task`: The task description (the value entered in the input field).
     - `priority`: The priority level (Low, Medium, High) selected from the dropdown.
     - `createdAt`: The creation time of the task (use `new Date()` to capture the current time).
   - Users should type the task name in the `id="task-input"` input element.
   - Users should select a priority level (Low, Medium, High) from the `id="priority-select"` select element.
   - When the `id="add-task-btn"` button is clicked:
     - If the task name is empty or just spaces, do nothing.
     - Otherwise:
       - Create a new task object with the properties mentioned above.
       - Add the task to a `tasks` global array.
       - Render the updated task list by calling the `renderTasks()` function.
       - Empty the task input field after adding the task.

2. **Dynamic Rendering**
   - Use the provided `createTaskElement(task)` function to generate the HTML structure for each task.
   - The `createTaskElement(task)` function returns an `<li>` element with the following structure:
   ```html
    <span>task</span>
    <span class="priority-label">priority</span>
    <button class="delete-btn" data-id="task_id">Delete</button>
   ```
   - Use this function in the `renderTasks()` function to dynamically render the task list inside the `id="task-list"` element.

3. **Filter Functionality**
   - Listen to the `'change'` event in `id="filter-select"` select element.
   - When the filter value changes:
     - Filter the `tasks` based on the selected priority.
     - Render the filtered tasks by calling the `renderTasks()` function.
   - The filter options are:
     - `All`: Show all tasks.
     - `Low`: Show only tasks with "low" priority.
     - `Medium`: Show only tasks with "medium" priority.
     - `High`: Show only tasks with "high" priority.

> 💡 HINT: You can use the `Array.prototype.filter()` method to filter the tasks based on the selected option.
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

4. **Sort Functionality**
   - Listen to the `'change'` event in the `id="sort-select"` select element.
   - When the sort value changes:
     - Sort the `tasks` based on the selected option.
     - Render the sorted tasks by calling the `renderTasks()` function.
   - The sort options are:
     - `priority`: Sort tasks by priority (high > medium > low).
     - `time`: Sort tasks by creation time (newest first).

> 💡 HINT: You can use the `Array.prototype.sort()` method to sort the tasks based on the selected option.
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

5. **Delete Functionality**
   - Each task created by `createTaskElement` should have a `.delete-btn` button.
   - Listen to the `'click'` event on the `.delete-btn` buttons when a new task is rendered.
   - When the "Delete" button is clicked:
     - Complete the `deleteTask()` function to:
       - Remove the task from the `tasks` array using the task's `id`.
       - Render the updated task list by calling the `renderTasks()` function.

> 💡 HINT: Each "Delete" button has a `data-id` attribute that stores the unique `id` of the task it belongs to.
> You can retrieve this `id` using `parseInt(deleteBtn.getAttribute('data-id'))`.

![Screenshot of the solution](https://api.certificates.dev/storage/demo.gif)

## Other Considerations

- All exported functions and variables must remain exported as they are essential for our tests.
