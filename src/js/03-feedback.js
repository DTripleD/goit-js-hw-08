import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('submit', formSubmit);
form.addEventListener('input', throttle(inputSaver, 1000));

updateOutput();

function updateOutput() {
  const keysOwner = JSON.parse(localStorage.getItem(STORAGE_KEY));

    try {
        form.email.value = keysOwner.email;
    } catch (error) {
        form.email.value = "";
    }

    try {
        form.message.value = keysOwner.message;
    } catch (error) {
        form.message.value = "";
    }
};

function inputSaver(event){
    event.preventDefault();

    const { email, message } = form;
  
    const data = {
      email: email.value,
      message: message.value,
    };
  
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function formSubmit(event){
    event.preventDefault();

    const { email, message } = event.target;
  
    if (email.value === "" || message.value === "") {
      return alert("Please fill in all the fields!");
    }
  
    console.log({email: email.value, message: message.value});
    event.target.reset();
    localStorage.clear();

}






