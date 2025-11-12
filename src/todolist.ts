const inputTodo = document.querySelector(".todo-value") as HTMLInputElement;
const addbtnTdo = document.querySelector(".add-todo")!;
const listTodo = document.querySelector(".todoList")!;
const clearTodo = document.querySelector(".clear-todos")!;

interface Todo {
  id: string;
  title: string;
  isComplete: boolean;
}

let todos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");

const handleSubmit = (event: Event) => {
  event.preventDefault();
  const newTodo: Todo = {
    id: crypto.randomUUID(),
    title: inputTodo.value,
    isComplete: false,
  };
  addTodoDom(newTodo);
  todos.push(newTodo);
  saveTodosInLocalStorage();
  inputTodo.value = "";
  inputTodo.focus();
};

const addTodoDom = (todo: Todo) => {
  listTodo.insertAdjacentHTML(
    "beforeend",
    `
        <li>
          ${todo.title}<span class="icon"
            ><i onclick="removeTodo('${todo.id}')" class="fas fa-trash"></i
          ></span>
        </li>
        `
  );
};

const removeTodo = (todoId: string) => {
  todos = todos.filter((todo) => todo.id !== todoId);
  saveTodosInLocalStorage();
  listTodo.innerHTML = "";
};

const saveTodosInLocalStorage = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
  return true;
};

addbtnTdo.addEventListener("click", (event) => {
  handleSubmit(event);
});

window.addEventListener("DOMContentLoaded", () => {
  todos.forEach((todo) => {
    addTodoDom(todo);
  });
});

clearTodo.addEventListener("click", () => {
  listTodo.innerHTML = "";
  todos = [];
  saveTodosInLocalStorage();
});
