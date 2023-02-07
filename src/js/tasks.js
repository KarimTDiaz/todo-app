const taskItemsElement = document.getElementById('task-items');
const getTimeStamp = () => Date.now();

const tasksArray = [];

const createTasks = task => {
  const timeStamp = getTimeStamp();
  const taskItemElement = document.createElement('div');
  const taskLabel = document.createElement('label');
  const taskInput = document.createElement('input');
  const crossElement = document.createElement('img');
  taskItemElement.classList.add('tasks__item');
  taskLabel.classList.add('label');
  taskLabel.textContent = task;
  taskLabel.htmlFor = timeStamp;
  taskInput.id = timeStamp;
  taskInput.type = 'checkbox';
  taskInput.classList.add('input-checked');
  crossElement.src = 'assets/images/icon-cross.svg';
  crossElement.classList.add('cross');
  crossElement.addEventListener(
    'click',
    ev => {
      taskItemElement.remove();
    },
    { once: true }
  );
  taskItemElement.append(taskLabel, taskInput, crossElement);
  taskItemsElement.append(taskItemElement);

  let tasks = [taskInput];
  tasksArray.push(tasks);
  return tasks;
};

export { createTasks, filterTasks, createTaskObj };
