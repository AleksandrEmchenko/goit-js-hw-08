import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

const formEl= document.querySelector('.feedback-form');
const emailEl= document.querySelector('[name="email"]');
const messageEl= document.querySelector('[name="message"]');

formEl.addEventListener("submit", handleFormControl);
formEl.addEventListener('input', throttle(handleformFildInput, 500));

fillingFilds();

function handleformFildInput(){
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ email: emailEl.value, message: messageEl.value }));
}

function handleFormControl(event) {
  event.preventDefault();

  console.log({ email: emailEl.value, message: messageEl.value });

  event.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function fillingFilds (){
    const formData = localStorage.getItem(STORAGE_KEY);
    
    if(formData){
       const formObject = JSON.parse(formData);
       emailEl.value = formObject.email;
       messageEl.value = formObject.message;
}
}