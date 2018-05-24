document.addEventListener("DOMContentLoaded", function() {
	let store = []
	let noteId = 0

	class Note{
		constructor(name, description){
			this.name = name
			this.description = description
			this.id = ++noteId
			store.push(this)
		}
	}

	let notes = store
	console.log(notes)
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