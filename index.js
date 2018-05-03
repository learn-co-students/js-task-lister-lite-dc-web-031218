function handleSubmit(e){
	e.preventDefault();
	console.log("in here");
	let input = e.target.children[1].value;
	let taskList = document.getElementById('tasks');
	if(input != ""){
		taskList.innerHTML += `<li>${input}</li>`;
		e.target.children[1].value = "";
	}
}

document.addEventListener("DOMContentLoaded", ()=>{
	let form = document.getElementById("create-task-form");
	form.addEventListener("submit", handleSubmit);
})