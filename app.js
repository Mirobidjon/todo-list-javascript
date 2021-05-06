const taskInput =document.querySelector('#task')
const form = document.querySelector('form')
const ul = document.querySelector('.collection') 
const clearBtn =document.querySelector('.clear-tasks')
const filter =document.querySelector('#filter')



// addeventlistener
document.addEventListener('DOMContentLoaded', getTask);
form.addEventListener('submit', addTask);
ul.addEventListener('click' , removeTask);
clearBtn.addEventListener('click' , clearTasks);
filter.addEventListener('keyup' , filterTask );


// get tasks from localstorage
function getTask(){
    let tasks;

    if (localStorage.getItem('tasks') === null) {
        tasks = [];

    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach(function(task){
        const li =document.createElement('li');
        li.className='collection-item';
        li.appendChild(document.createTextNode(task));
    
        const link =document.createElement('a');
        link.className='delete-item secondary-content';
        link.innerText='X';
        link.href='#';
    
        // append
    
        li.append(link);
        ul.append(li);
    });

}


// add task

 function addTask (e){

    e.preventDefault();
    
    if (taskInput.value=== ''){
        alert('Add Task');
        return;
    }

    // store localstorage

storeLocalStorage(taskInput.value);

    // create li and a
    const li =document.createElement('li');
    li.className='collection-item';
    li.appendChild(document.createTextNode(taskInput.value));

    const link =document.createElement('a');
    link.className='delete-item secondary-content';
    link.innerText='X';
    link.href='#';

    // append

    li.append(link);
    ul.append(li);
    taskInput.value='';    


 }


 function storeLocalStorage(task){
     let tasks;

     if (localStorage.getItem('tasks') === null) {
         tasks = [];

     }else{
         tasks = JSON.parse(localStorage.getItem('tasks'))
     }
     tasks.push(task);

     localStorage.setItem('tasks', JSON.stringify(tasks));
 }


//  Remove task

function removeTask(e){
    e.preventDefault();

    if(e.target.classList.contains('delete-item')){
        if(confirm('Are you sure'))
        e.target.parentElement.remove();

    }
    // if (e.target.className === 'delete-item secondary-content'){
        

    // }
}


function clearTasks(){
    

    ul.innerHTML='';

    clearTasksFromLocalStorage();
}
    // clear task from local storage

function clearTasksFromLocalStorage(){
    localStorage.clear();
}


// Filter function

function filterTask(e){
    let text =e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task){

        let item =task.firstChild.textContent.toLowerCase();
        if(item.indexOf(text) != -1){
            task.style.display='block';
        }else {
            task.style.display='none';
        };

    });
}























