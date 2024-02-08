

const inputBox = document.getElementById("input-box");
const button = document.querySelector("button");
const list = document.getElementById("list-container");
const noTasks = document.getElementById("noTasks");



function addTask(){
    if(inputBox.value === ''){
        alert("Добавьте задачу в поле ввода");
    }else{
        noTasks.remove();
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);
        inputBox.value = '';
        
    }
    saveData();
}
list.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});

button.addEventListener("click", addTask);

function saveData(){
    localStorage.setItem("data", list.innerHTML);
    
}
function showTask(){
    const savedData = localStorage.getItem("data");
    if(savedData){
        list.innerHTML = savedData;
        noTasks.remove();
    }
}
document.getElementById('button').onclick = function() {
    window.localStorage.removeItem('data');
    list.innerHTML = '';
    if(list.innerHTML ===''){
        list.appendChild( noTasks);
    }
	else{
        noTasks.innerHTML = '';
    }

    
  }
window.addEventListener("load", showTask);