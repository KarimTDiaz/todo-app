const taskItemsElement = document.getElementById('task-items');
const getTimeStamp = () => Date.now();
const tasksArray = [];

const createTasks = task => {
  const timeStamp = getTimeStamp();
  const taskItemElement = document.createElement('div');
  taskItemElement.classList.add('tasks__item');

  const taskLabel = document.createElement('label');
  taskLabel.classList.add('label');
  taskLabel.textContent = task;
  taskLabel.htmlFor = timeStamp;

  const taskInput = document.createElement('input');
  taskInput.id = timeStamp;
  taskInput.type = 'checkbox';
  taskInput.classList.add('input-checked');

  const crossElement = document.createElement('img');
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

const filterTasks = () => {
  console.log(tasksArray);
};

export { createTasks, filterTasks };
