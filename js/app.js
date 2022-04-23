const btn = document.getElementById("btn");
const advNrId = document.getElementById("advNrId");
const advTextId = document.getElementById("advTextId");

var text = document.createTextNode("This just got added");

btn.addEventListener("click", (e) => {
  advTextId.appendChild(text);
});
