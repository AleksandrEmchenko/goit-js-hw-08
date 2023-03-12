import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

const formEl= document.querySelector('.feedback-form');
const emailEl= document.querySelector('[name="email"]');
const messageEl= document.querySelector('[name="message"]');

formEl.addEventListener("submit", handleFormControl);
formEl.addEventListener('input', throttle(handleformFildInput, 500));

const formObject = {};
let localObject;

function checkFild(){
    localObject = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (localObject) {
        localObject.email ? emailEl.value = localObject.email :  emailEl.value = '';
        localObject.message ? messageEl.value = localObject.message : messageEl.value = '';
       };
}

checkFild();

function handleformFildInput(event){
        formObject[event.target.name] = event.target.value;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formObject));
    }

function handleFormControl(event) {
    event.preventDefault();
  
    console.log(localObject);
  
    event.target.reset();
    localStorage.removeItem(STORAGE_KEY);
  }