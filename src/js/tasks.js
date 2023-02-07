const taskItemsElement = document.getElementById('task-items');
const leftButtonElement = document.getElementById('items-left');
const getTimeStamp = () => Date.now();
let tasksArray = [];
let itemsLeft = 0;

const taskPrint = fragment => {
  taskItemsElement.innerHTML = '';
  taskItemsElement.append(fragment);
};

const createTasks = tasks => {
  itemsLeft = tasks.filter(task=>!task.checked).length
  setItemsLeft()
  const fragment = document.createDocumentFragment();
  tasks.forEach(task => {
    const taskItemElement = document.createElement('div');
    const taskLabel = document.createElement('label');
    const taskInput = document.createElement('input');
    const crossElement = document.createElement('img');
    taskItemElement.classList.add('tasks__item');
    taskLabel.classList.add('label');
    taskLabel.textContent = task.task;
    taskLabel.htmlFor = task.id;
    taskInput.id = task.id;
    taskInput.checked = task.checked;
    taskInput.type = 'checkbox';
    taskInput.classList.add('input-none-view');
    crossElement.src = 'assets/images/icon-cross.svg';
    crossElement.classList.add('cross');
    taskItemElement.append(taskLabel, taskInput, crossElement);
    fragment.append(taskItemElement);
  });
  taskPrint(fragment);
};

const createTaskObj = task => {
  const timeStamp = getTimeStamp();
  const newObj = {};
  newObj.task = task;
  newObj.id = timeStamp;
  newObj.checked = false;
  tasksArray.push(newObj);
  createTasks(tasksArray);
};
// filtro para cambiar de true a false en checked
const completedTask = id => {
  let arrayFiltered = tasksArray.map(task => {
    
    if (Number(id) === task.id) {
      task.checked = !task.checked;
    }
    return task;
  });
  tasksArray = arrayFiltered;
  createTasks(tasksArray);
};
// filtro para eliminar con la cruz la tarea
const removeTask = id => {
  let arrayFiltered = tasksArray.filter(task => Number(id) !== task.id);
  tasksArray = arrayFiltered;
  createTasks(tasksArray);
};

const filterAllTask = () => {
  createTasks(tasksArray)
}

const filterTaskActive = () => {
  let arrayFiltered = tasksArray.filter(task => !task.checked)
  createTasks(arrayFiltered)
};

const filterTaskComplete = () => {
  let arrayFiltered = tasksArray.filter(task => task.checked)
  createTasks(arrayFiltered)
}

const clearCompleteTask = () => {
  let arrayFiltered = tasksArray.filter(task => !task.checked);
  tasksArray = arrayFiltered;
  createTasks(arrayFiltered)
}

const setItemsLeft = () => {
  leftButtonElement.textContent = itemsLeft + ' items left'
}


export {
  createTasks,
  createTaskObj,
  taskItemsElement,
  removeTask,
  completedTask,
  filterTaskActive,
  filterTaskComplete,
  filterAllTask,
  clearCompleteTask,
  setItemsLeft
};
