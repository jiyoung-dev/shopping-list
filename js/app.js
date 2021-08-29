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

  // control empty value 
  if (value && !editFlag){
    console.log(`add ${value}!`);
  } else if (value && editFlag){
    console.log('editing!');
  } else {
    console.log('empty value!');
  }
}