let li = document.querySelector('li');
let ul = document.querySelector('ul');
let input = document.querySelector('input');
let buttonCreate = document.querySelector('#createBtn');
let btn = document.querySelector('#remove')
let form = document.querySelector('form');
let div = document.querySelector('div');

async function getTasks() {
    let tasks = await fetch('http://localhost:3000/todos');
    let tasksArr = await tasks.json();
    li.innerHTML = tasksArr.map(text => {
        let li = `<li data-status = ${text.completed}>${text.title}<button data = '${text.id}'>remove</button></li>`;
        return li
    }).join('');
}
getTasks();

form.addEventListener('submit', async function addTodo(e) {
    e.preventDefault();
    let newTodo = await fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            'title': input.value,
            'completed': false
        })
    })
    let newTodoArr = await newTodo.json();
    ul.innerHTML += `<li>${input.value}</li>`;  
    input.value = '';   
})

li.addEventListener('click', async function getStatus(event) {
    event.preventDefault();
    if (event.target.tagName === 'LI'){
    event.target.classList.toggle('active');
      changeStatus(event.target.getAttribute('data'))
    }
});

async function changeStatus(id) {
    let statusArr = await fetch(`http://localhost:3000/todos/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
            'title': input.value,
            'completed': text.completed
        })
    })
    let newStatis = await statusArr.json();
}

li.addEventListener('click',(e) => {
    if (e.target.tagName === "BUTTON") {
        li = e.target.parentNode
        li.remove();
    }
   deleteTask(e.target.getAttribute('data'))
})


async function deleteTask(id) {
    let deleteTodo = await fetch(`http://localhost:3000/todos/${id}`, {
    method: 'DELETE'
    });
}

