const task = document.querySelector('#task')
const nodelist = document.querySelectorAll('li');
const fort = document.querySelector('.mb-3');
let deletebtn;


function inhtm (todo) {
    const li = document.createElement('li');
    const girdi = document.querySelector('#minitask');
    const list = document.querySelector('#list');
    li.classList.add('list-group-item');
    li.innerHTML = todo.text;
    const btn = document.createElement('button');
    btn.classList.add('silb');
    btn.innerHTML = 'X';
    list.appendChild(li);
    li.appendChild(btn);
    

}

function config (todo) {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if(!todos){
        localStorage.setItem('todos', JSON.stringify([]));
    } else {
        todos.forEach(todo => {
            inhtm(todo);
        });
        deletebtn = document.querySelectorAll('.silb');
        console.log(deletebtn);
    }
}
config();

const addb = (e) => {
    e.preventDefault();

    const girdi = document.querySelector('#minitask');
    const list = document.querySelector('#list');
    let localtext = girdi.value;
    if(localtext == ''){
        alert('Lütfen bir not ekleyiniz');
    } else {
    var todo = {
        text: localtext,
        done: false
    }
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerHTML = todo.text;
    const btn = document.createElement('button');
    btn.classList.add('silb');
    btn.innerHTML = 'X';
    list.appendChild(li);
    li.appendChild(btn);
    const todos = JSON.parse(localStorage.getItem('todos'));
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}
}

function delbtn (e) {
    const todo = e.target.parentElement;
    const text = todo.firstChild.textContent;
    let todos = JSON.parse(localStorage.getItem('todos'));
    todos = todos.filter(td => td.text != text);
    localStorage.setItem('todos', JSON.stringify(todos));
    todo.remove();
}

task.addEventListener('submit' , addb );
deletebtn.forEach(btn => btn.addEventListener('click', delbtn));





