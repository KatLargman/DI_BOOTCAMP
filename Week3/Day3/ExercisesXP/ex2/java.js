const fill = document.querySelector(".fill");
const boxes = document.querySelectorAll(".empty"); //goes into node list

//fill listeners
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

//loop through empty areas and calling my drag events

for (const empty of boxes) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

//drag functions
function dragStart() {
  this.className += " hold";
  setTimeout(() => ((this.className = "invisible"), 0)); //disappears
  console.log("start");
}

function dragEnd() {
  this.className = "fill"; //reappears
  console.log("end");
}

function dragOver(event) {
  event.preventDefault();
}

function dragEnter(event) {
  event.preventDefault();
  this.className += " hovered"; //appending, so add space, adds to the class that already exists
}
function dragLeave() {
  this.className = "empty";
}
function dragDrop() {
  this.className = "empty";
  this.append(fill);
}
