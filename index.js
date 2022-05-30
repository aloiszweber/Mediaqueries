
let burgerBox = document.getElementById('burger_box');
let burger = document.getElementById('burger');

let contactUs = document.getElementById('contactUs');
let boxContactUs = document.getElementById('box_contactUs');
let message = document.getElementById('alert');

let mediaMin470 = window.matchMedia("(min-width:500px)");
let mediaMax768 = window.matchMedia("(max-width:768px)");
let mediaMin768 = window.matchMedia("(min-width:768px)");

let searchValue = document.getElementById("search").value;
let makeSearch = document.getElementById("make_search");

// Display and hide the burger menu

burger.addEventListener('click', (e) => {

    if (e.target.classList.contains("active")) {
        e.target.classList = '';
        burgerBox.style.visibility = "hidden";
        console.log(e.target);
    }
 
    else {
        burger.classList = 'active';
        burgerBox.style.visibility = "visible";
        burgerBox.style.transform = "translate(-1px, 50px)";
        
    }
})

// Display and hide the contact us box

contactUs.addEventListener('click', (e) => {

    if (e.target.classList.contains("active")) {
        contactUs.classList = '';
        boxContactUs.style.display = "none";
    }
 
    else {
        contactUs.classList = 'active';
        boxContactUs.style.display = "block";
        boxContactUs.style.transform = "translate(0px, 0px)";
    }
})

// Move the message box to the current screen according to the good size screen

window.addEventListener('load', (e) => {
    if (mediaMin470.matches && mediaMax768.matches) {
    message.style.transform = "translate(200px, 90px)";
    }
    else if (mediaMin768.matches) {
    message.style.transform = "translate(520px, 25px)";
    }

    else {
        message.style.transform = "translate(-400px, 0px)";
    }
})

let enter = document.getElementById('enter');

let cancel = document.getElementById('cancel');

enter.addEventListener('click', () => {
    message.style.transform = "translate(-400px, 0px)";
})

cancel.addEventListener('click', () => {
    window.close();
    //history.back();
})

// input search some things

makeSearch.addEventListener('click', (e) => {
    e.preventDefault();
    let content = document.body.textContent;
    let inputValue = document.getElementById('search').value;
    if(content.includes(inputValue)) {
        console.log(inputValue);
        console.log(window.location);
    }
    else {
        console.log("The reference doesn\'t exist, sorry.");
    }
})





