var Enter_button = document.querySelector("button");//body>button
var Enter_Keypress = document.querySelector("input");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var del = document.querySelectorAll("li button");



function CreateTask() {
	var create_li = document.createElement("li");
	var create_del = document.createElement("button");

	create_del.className = "button";

	create_del.appendChild(document.createTextNode("delete"));
	create_li.appendChild(document.createTextNode(Enter_Keypress.value));
	create_li.appendChild(create_del);
	ul.appendChild(create_li);
	
	
	del = document.querySelectorAll("li button");
	li = document.querySelectorAll("li");

	del[li.length-1].addEventListener("click",DelTask,false);
	li[li.length-1].addEventListener("click",ToggleDone,false);

	Enter_Keypress.value = "";
}

function InputLength() {
	return Enter_Keypress.value.length;
}

function AddTaskByButton() {
	if(InputLength())
		CreateTask();
}

function AddTaskByEnter(e) {
	if(e.keyCode === 13 && InputLength())
		CreateTask();
} 

function ToggleDone(e) {
	console.log("event ToggleDone");
	e.target.classList.toggle("done");
}

function DelTask(e) {
	console.log("event DelTask");
	e.target.parentElement.remove();
}


for(var i=0; i<li.length; i++) {
	li[i].addEventListener("click",ToggleDone,false);	
}

for(var i=0; i<li.length; i++) {
	del[i].addEventListener("click",DelTask,false);
}

Enter_button.addEventListener("click",AddTaskByButton,false);


Enter_Keypress.addEventListener("keyup",AddTaskByEnter,false);

