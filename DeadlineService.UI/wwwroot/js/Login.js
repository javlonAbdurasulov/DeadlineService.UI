const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const forgetForm = document.getElementById('forget-form');
const inputPasswordS = document.getElementById('inputPasswordS');
const inputPasswordR = document.getElementById('inputPasswordR');
function toggleForm() {
    if (loginForm.classList.contains('d-none')) {
        inputPasswordR.value = '';
        loginForm.classList.remove('d-none');
        registerForm.classList.add('d-none');
    } else {
        inputPasswordS.value = '';
        loginForm.classList.add('d-none');
        registerForm.classList.remove('d-none');
    }
}
function forgetPassword() {
    if (forgetForm.classList.contains('d-none')) {
        inputPasswordS.value = '';
        loginForm.classList.add('d-none');
        forgetForm.classList.remove('d-none');
    } else {
        loginForm.classList.remove('d-none');
        forgetForm.classList.add('d-none');
    }
}