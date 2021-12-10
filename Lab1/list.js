const addTaskBtn = document.getElementById('task-add')
const deskTaskInput = document.getElementById('task')
const todoWrapper = document.querySelector('.list-wrapper')

let tasks;
!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem(tasks))

function Task(description){
    this.description= description;
    this.completed= false;
}
const createTemplate = (task, index) => {
    return `
        <div class="todo-item">
        <div class="description">${task.description}</div>
</div>
`
  
}
const fillHtmlList = () => {
    todoWrapper.innerHTML = "";
    if(tasks.length > 0){
        tasks.forEach((item, index) => {
            todoWrapper.innerHTML += createTemplate(item, index);
        })
    }
}
const updateLocal= () =>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
}
addTaskBtn.addEventListener('click', () => {
    tasks.push(new Task(deskTaskInput.value));
    updateLocal();
    fillHtmlList();
})