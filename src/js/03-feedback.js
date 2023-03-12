import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

const formEl= document.querySelector('.feedback-form');
const emailEl= document.querySelector('[name="email"]');
const messageEl= document.querySelector('[name="message"]');

formEl.addEventListener("submit", handleFormControl);
formEl.addEventListener('input', throttle(handleformFildInput, 500));

const formObject = {}

formEl.addEventListener('input', (event) => {
    formObject[event.target.name] = event.target.value;
    
});

fillingFilds();

function fillingFilds (){
    const formData = localStorage.getItem(STORAGE_KEY);

    if(formData){
        const formObject = JSON.parse(formData);

        if (formObject) {
            formObject.email ? emailEl.value = formObject.email :  emailEl.value = ''
            formObject.message ? messageEl.value = formObject.message : messageEl.value = ''
           };
}
}

function handleformFildInput(){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formObject));
}

function handleFormControl(event) {
  event.preventDefault();

  console.log(formObject);

  event.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

