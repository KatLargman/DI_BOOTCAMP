let color = null;
var mouseDown = new Boolean(false); // when we start  mouseDown  is false because we are not click on element which should be painted  


let body = document.getElementsByTagName("body")[0]; // Find elements by tag name "body"
let colBlock = document.querySelectorAll("#side > *"); //Find elementS by id, tag, class #side
let fill_blocks = document.querySelectorAll("#canvas > *"); // Find elementS by id, tag, class #canvas
let button0 = document.getElementsByTagName("button")[0]; //Find elements by tag name "button"

button0.addEventListener("click", function(){ // registers on click an event for a function to color all elements in color beige
    for (fill_block of fill_blocks){
        fill_block.style.backgroundColor = "beige"; /// do all squares clear / do them beige
    }
});

body.addEventListener("mousedown", function(){ // function when it is triggered when the mouse is pressed over the element. so variable MouseDown should be true 
    mouseDown = true;
})

body.addEventListener("mouseup", function(){ // function opposite to a mousedown, so variable MouseDown should be false
    mouseDown = false;
})


for (color_block of colBlock){ // registers on click an event for a function to color all elements in color
    color_block.addEventListener("click", function(event){
        color = event.target.style.backgroundColor;
    });
}

for (fill_block of fill_blocks){
    fill_block.addEventListener("mouseDown", function(event){ // function if mousedown we want to color it color in that color what we chose before
        if (color == true) event.target.style.backgroundColor = color;
    });
    fill_block.addEventListener("mouseover", function(event){ // function called when we moving the cursor from one object to another
       
        if (mouseDown = true && color != null) event.target.style.backgroundColor = color;
    });
}