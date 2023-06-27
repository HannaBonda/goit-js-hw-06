
const formEl = document.querySelector(".login-form");

formEl.addEventListener('submit', onSendForm);

function onSendForm (event) {
    event.preventDefault();

    const formData = {};

    const form = event.currentTarget.elements;
    const email = form.email;
    const password = form.password;

    if (email.value === "" || password.value === "") {
        alert('All fields must fill');
    } else {
        formData.email = email.value;
        formData.password = password.value;
    console.log(formData);
    };
    event.currentTarget.reset();    
};






