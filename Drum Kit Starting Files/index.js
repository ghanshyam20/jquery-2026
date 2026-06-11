var numberOfDrumButtons=document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfDrumButtons; i++){



document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    alert("I got clicked!");
});
}


// Detecting Button Press

var numberOfDrumButtons=document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfDrumButtons; i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonInnerHTML=this.innerHTML;
    alert(buttonInnerHTML);
});
}

// Detecting Keyboard Press

document.addEventListener("keypress",function(event){
    alert("A key was pressed!");
});

document.addEventListener("keypress",function(event){
    alert(event.key);
});




