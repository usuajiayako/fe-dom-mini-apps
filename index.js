const tasks = [...document.getElementsByClassName("task")];

const addTick = (event) => {
  if (event.target.innerText.endsWith("✔️")) {
    event.target.innerText = event.target.innerText.slice(0, -2);
  } else {
    event.target.innerText += "✔️";
  }
};

tasks.forEach((task) => {
  task.addEventListener("click", addTick);
});

const [submit] = document.getElementsByClassName("submit");

const createNewTask = () => {
  const newTask = document.getElementById("new-task").value;
  const listNode = document.createElement("LI");
  const buttonNode = document.createElement("BUTTON");
  buttonNode.className = "task";
  const submitNode = document.createTextNode(newTask);
  buttonNode.appendChild(submitNode);
  listNode.appendChild(buttonNode);
  const createdTask = document.getElementById("tasks").appendChild(listNode);
  createdTask.addEventListener("click", addTick);
};

submit.addEventListener("click", createNewTask);
