
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');

addButton.addEventListener('click', function () {
	const taskText = taskInput.value;

	
	const newTask = document.createElement('li');
	

	newTask.textContent = taskText;
	

	taskList.append(newTask);
	
	
	taskInput.value = '';
});
const taskList = document.getElementById('taskList');

taskList.addEventListener('click', function(evt) {
if (evt.target.tagName === 'LI') {
evt.target.classList.toggle('completed'); 
}
});

