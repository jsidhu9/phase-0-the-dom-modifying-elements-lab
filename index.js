const testVar = "hi"

document.querySelector("main#main").remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.innerHTML = "Jaz is the champion!";
newHeader.className = "victory";