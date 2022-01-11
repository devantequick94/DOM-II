import './less/index.less'

// Your code goes here!


//click
const newButton = document.querySelector(".nav-container");
newButton.addEventListener("click", changeColor)

function changeColor() {
    newButton.style.color="pink"
}

//wheel
const navBar = document.querySelector(".main-navigation");

function changeNavBar (event) {
    event.target.style.background = "lemonchiffon";
    event.stopPropagation()
}



//mouseover
const h2Elements = document.querySelector("h2:nth-of-type(1)")
h2Elements.addEventListener("mouseover",()=>{
h2Elements.style.fontStyle="italic"
} )


//dblclick
const homeButton = document.querySelector("a");

function doubleClick(){
    homeButton.style.fontSize = "2rem";
}

homeButton.addEventListener("dblclick", doubleClick)


//scroll
window.addEventListener("scroll", () => {
    console.log("Scrolling...");
});



// load
window.addEventListener("load", () => {
    console.log('page loaded');
});


//keydown
const title = document.querySelectorAll("h2");
document.addEventListener("keydown", (evt) => {
    console.log(evt);
    if (evt.key === "Escape") {
        alert("Sorry you cant use" + " " + evt.key);
    }
});


//resize
function reportWindowSize() {
    console.log('broswer height ', window.innerHeight);
    console.log('browser width ', window.innerWidth)
}

window.addEventListener("resize", reportWindowSize);

//copy

window.addEventListener('copy', function(){
    alert('Copied something?')
});


// prevent default
document.getElementById("a").addEventListener("click", function(event){
    event.preventDefault()
  });





