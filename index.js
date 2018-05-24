document.addEventListener("DOMContentLoaded", function() {
	let submit = document.getElementById('create-task-form')
	submit.addEventListener('submit', function(e){
		// fetch = 'post request'
		e.preventDefault()
		let tasks = document.getElementById('tasks')
		task = document.createElement('p')
		task.innerText = document.getElementById('new-task-description').value
		tasks.appendChild(task)
    });
})