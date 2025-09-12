import { sleep } from "./utils";

const container = document.querySelector<HTMLDivElement>(".container")!;
const btnLoadList =
  document.querySelector<HTMLButtonElement>("#btn-load-list")!;

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function http(method: string, url: string) {
  return new Promise<Todo[]>((resolve) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);
    xhr.send();

    xhr.onload = () => resolve(JSON.parse(xhr.responseText));
  });
}

async function handleLoadSingle(e: MouseEvent) {
  const btn = e.currentTarget as HTMLButtonElement;
  btn.innerText += "...";
  console.log("todoId = ", btn.dataset.todoId);
}

async function handleLoadList(e: MouseEvent) {
  const btn = e.currentTarget as HTMLButtonElement;
  btn.innerText = "List...";

  await sleep(2);
  const todos: Todo[] = await http("GET", "http://localhost:4000/todos");

  btn.remove();

  for (const todo of todos) {
    const btn = document.createElement("button");
    btn.dataset.todoId = todo.id.toString();
    btn.innerText = `Todo-${todo.id}`;
    btn.className =
      "text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800";
    btn.addEventListener("click", handleLoadSingle);
    container.appendChild(btn);
  }
}

btnLoadList.addEventListener("click", handleLoadList);
