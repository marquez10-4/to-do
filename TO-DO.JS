function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
  
    if (taskText === '') {
      alert('Please enter a task');
      return;
    }
  
    const taskList = document.getElementById('task-list');
  
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
  
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    taskContent.addEventListener('click', () => toggleTaskCompletion(taskItem));
  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => taskList.removeChild(taskItem));
  
    taskItem.appendChild(taskContent);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
  
    taskInput.value = '';
  }
  
  function toggleTaskCompletion(taskItem) {
    taskItem.classList.toggle('completed');
  }
  