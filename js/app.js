// select items
const form = document.querySelector('.shopping-form');
const alert = document.querySelector('.alert');
const shopping = document.querySelector('#shopping');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.shopping-container');
const list = document.querySelector('.shopping-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFlag = false;
let editID = "";

// submit form 
form.addEventListener('submit', addItem);

// add item function 
function addItem(event){
  event.preventDefault();  

  const value = shopping.value;
  shopping.value = "";

  // get item's unique id
  const id = new Date().getTime().toString();

  if (value && !editFlag){
    console.log(`add ${value}!`);
  } else if (value && editFlag){
    console.log('editing!');
  } else {
    // if enter blank, show the danger message 
    displayAlert("please enter value", "danger");
  }
}

// display alert function
function displayAlert(text, action){
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  // remove alert after 1 second
  setTimeout(function(){
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000)
}
