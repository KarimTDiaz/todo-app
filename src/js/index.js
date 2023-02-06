// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { createTasks } from './tasks.js';

const inputTaskElement = document.getElementById('create-todo');

inputTaskElement.addEventListener('submit', ev => {
  ev.preventDefault();
  createTasks(ev.target.todo.value);
  ev.target.todo.value = '';
});
