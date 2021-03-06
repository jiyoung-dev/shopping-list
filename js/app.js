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
// clear items
clearBtn.addEventListener('click', clearItems);

// add item function 
function addItem(event){
  event.preventDefault();  

  const value = shopping.value;
  shopping.value = "";

  // get item's unique id
  const id = new Date().getTime().toString();

  if (value && !editFlag){  // create items 
    // add class
    const element = document.createElement('article');
    element.classList.add('shopping-item');
    // add item's id 
    const attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `
          <p class="title">${value}</p>
          <div class="btn-container">
            <button type="button" class="edit-btn">
              <i class="fas fa-edit"></i>
            </button>
            <button type="button" class="delete-btn">
              <i class="fas fa-trash"></i>
            </button>
          </div>
          `;

    // append child
    list.appendChild(element);

    // display alert 
    displayAlert("item added to the list!", "success");
    // show container
    container.classList.add("show-container");
    // Save to local storage
    addToLocalStorage(id, value);


  } else if (value && editFlag){
    console.log('editing!');
  } else {
    // if enter blank, show the danger message 
    displayAlert("please enter value", "danger");
  }
}
 
// clear Items function
function clearItems(){
  const itmes = document.querySelectorAll('.shopping-item');
  
  if (itmes.length > 0){
    itmes.forEach(function (item) {
      list.removeChild(item);
    });
  }
  container.classList.remove("show-container");
  displayAlert("empty list", "danger");

}

// local storage 
function addToLocalStorage(id, value){
  console.log('?????? ???????????? ?????? ??????!!');
}

// display alert function
function displayAlert(text, action){
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  // remove alert after 1 second
  setTimeout(function(){
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1100)
}
