const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopUp = document.querySelector('.btnLogin-popup');
const iocnClose = document.querySelector('.icon-close');

registerLink.onclick = () => {
    wrapper.classList.add('active');
}

loginLink.onclick = () => {
    wrapper.classList.remove('active');
}

btnPopUp.onclick = () => {
    wrapper.classList.add('active-popup');
}

iocnClose.onclick = () => {
    wrapper.classList.remove('active-popup');
}

function validateEmail(emailValue) {
    let value = /\S+@\S+\.\S+/;
    return value.test(emailValue);
}