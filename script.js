const addTodo = document.querySelector("#addTodo");

addTodo.addEventListener("click", function (event) {
  event.preventDefault()
  console.log("Knappen er trykket!");
// /*skal hente innhold
const userInput = document.querySelector("#userInput").value;

console.log(userInput);
// /skal lagre data - hvor informasjon skal synes på side
const todoList = document.querySelector("#todoList");
// /Steg 3: Lag et element til informasjonene som skal synes

const todoItem = document.createElement("li");
// /*hvilken informasjon som skal synes/
todoItem.textContent = userInput;
// /legg informasjon til i listen som synes/

todoList.appendChild(todoItem);

// /steg1 lage element til slet knappen
const deleteButton = document.createElement("button");
// /gi slett knappen text innhold
deleteButton.textContent = "Slett";
// /leg slett knapen til gjøremål
todoItem.appendChild(deleteButton);

}); 
