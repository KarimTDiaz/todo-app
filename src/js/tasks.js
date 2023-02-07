const taskItemsElement = document.getElementById('task-items');
const getTimeStamp = () => Date.now();
let tasksArray = [];

const taskPrint = fragment => {
  taskItemsElement.innerHTML = '';
  taskItemsElement.append(fragment);
};

const createTasks = tasksArray => {
  const fragment = document.createDocumentFragment();
  tasksArray.forEach(task => {
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
    taskInput.classList.add('input-checked');
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

const removeTask = id => {
  let arrayFiltered = tasksArray.filter(task => Number(id) !== task.id);
  tasksArray = arrayFiltered;
  createTasks(tasksArray);
};

const completedTask = id => {
  let arrayFiltered = tasksArray.map(task => {
    console.log(task.id);
    if (Number(id) === task.id) {
      task.checked = !task.checked;
    }
    return task;
  });
  tasksArray = arrayFiltered;
  createTasks(tasksArray);
};

const filterTasks = ev => {
  console.log(ev);
};

export {
  createTasks,
  createTaskObj,
  taskItemsElement,
  tasksArray,
  removeTask,
  completedTask,
  filterTasks
};
