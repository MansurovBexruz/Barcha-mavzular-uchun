import { sleep } from './utils';

const btnGetList = document.querySelector('.btn-get-list') as HTMLButtonElement;
const btnGetSingle = document.querySelector('.btn-get-single') as HTMLButtonElement;
const btnPostSingle = document.querySelector('.btn-post-single') as HTMLButtonElement;
const btnPutSingle = document.querySelector('.btn-put-single') as HTMLButtonElement;
const btnDeleteSingle = document.querySelector('.btn-delete-single') as HTMLButtonElement;

const baseURL = 'http://localhost:4000';
const todoId = 'e28f73a3-99d3-40a7-a034-2e2e432d5474';
interface Todo {
	id: string;
	title: string;
	completed: boolean;
}

// function http<T>(method: string, url: string, body?: any) {
// 	return new Promise<T>((resolve) => {
// 		const xhr = new XMLHttpRequest();

// 		xhr.open(method, url);
// 		xhr.setRequestHeader('Content-Type', 'application/json');
// 		xhr.send(body ? JSON.stringify(body) : undefined);

// 		xhr.onload = () => resolve(JSON.parse(xhr.responseText));
// 	});
// }
async function http(method: string, url: string, body?: any) {
	const response = await fetch(url, { method, body });
	const data = await response.json();
	return data;
}

btnGetList.onclick = async () => {
	console.log('Getting list...');
	await sleep(0.5);
	const todos = await http('GET', `${baseURL}/todos`);
	console.log('todos = ', todos);
};
btnGetSingle.onclick = async () => {
	console.log('Getting single...');
	await sleep(0.5);
	const todo = await http('GET', `${baseURL}/todos/${todoId}`);
	console.log('todo = ', todo);
};
btnPostSingle.onclick = async () => {
	console.log('Posting single...');
	await sleep(0.5);
};
btnPutSingle.onclick = async () => {
	console.log('Putting single...');
	await sleep(0.5);
};
btnDeleteSingle.onclick = async () => {
	console.log('Deleting single...');
	await sleep(0.5);
};

const response = await fetch('http://localhost:4000/todos', { method: 'GET' });
const todos: Todo[] = await response.json();
console.log('todos = ', todos);


/**
	* Parking System
	* -----
	*
	*
	*
	*
	*
 */