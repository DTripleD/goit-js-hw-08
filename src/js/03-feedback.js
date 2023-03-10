const form = document.querySelector(".feedback-form");

const STORAGE_KEY = "feedback-form-state";


form.addEventListener("input", (event) => {
    event.preventDefault();

    const {email, message} = event.currentTarget;

    const data = {
        email: email.value,
        message: message.value,
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

    updateOutput()


});


function updateOutput(event) {
    const {email, message} = event.currentTarget;
    email.textContent = localStorage.getItem(STORAGE_KEY) || "";
}