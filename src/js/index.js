// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import {
  createTaskObj,
  taskItemsElement,
  removeTask,
  completedTask,
  filterTaskActive,
  filterTaskComplete,
  filterAllTask,
  clearCompleteTask,
  setItemsLeft
} from './tasks.js';

const inputTaskElement = document.getElementById('create-todo');
const filterElements = document.getElementById('task-filters');

inputTaskElement.addEventListener('submit', ev => {
  ev.preventDefault();
  createTaskObj(ev.target.todo.value);
  ev.target.todo.value = '';
  setItemsLeft()
});

taskItemsElement.addEventListener('click', ev => {
  if (ev.target.classList.contains('cross')) {
    removeTask(ev.target.previousElementSibling.id);
    return;
  }
  if (ev.target.tagName === 'LABEL') {
    completedTask(ev.target.htmlFor);
  }

});

filterElements.addEventListener('click', ev => {
  if (ev.target.classList.contains('button--active')) {
    filterTaskActive();
  } else if(ev.target.classList.contains('button--completed')){
    filterTaskComplete();
  } else if(ev.target.classList.contains('button--all')){
    filterAllTask()
  } else if(ev.target.classList.contains('button--clear')){
    clearCompleteTask()
  }
});
