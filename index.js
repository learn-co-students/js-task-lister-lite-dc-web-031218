const form = document.getElementById('create-task-form')

form.addEventListener('submit', event => {
  event.preventDefault()
  const userinput = document.getElementById('new-task-description')
  const tasks = document.getElementById('tasks')
  const usertask = document.createElement('li')
  document.getElementById('tasks').appendChild(usertask)
  usertask.innerHTML = userinput.value
 });
