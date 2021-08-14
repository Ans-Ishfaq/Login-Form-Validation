const form = document.querySelector('form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
function showError(input, message) {
    const targetDiv = input.parentElement;
    targetDiv.className = 'form-control error';
    const small = input.nextElementSibling;
    small.innerText = message;
}
function showSuccess(input) {
    const targetDiv = input.parentElement;
    targetDiv.className = 'form-control success';
}
function validateEmail(email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function checklength(input,min){
    if (input.value.length < min) {
        showError(input, 'Username must be greater than 03 characters');
    } else {
        showSuccess(input);
    }
}
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // if (username.value.length < 4) {
    //  showError(username, 'Username must be greater than 03 characters');
    // } else {
    //  showSuccess(username);
    // }
    checklength (username,4)
    const writtenEmail = email.value;
    const condition = validateEmail(writtenEmail);
    if (condition) {
        // showSucces
        showSuccess(email);
    } else {
        // showError
        showError(email, 'Email not Valid')
    }
    // if (password.value.length < 7) {
    //  showError(password, 'password must be greater than 06 characters');
    // } else {
    //  showSuccess(password);
    // }
    checklength(password,7)
    const passvalue=password.value;
    // console.log(passvalue)
    if (password2.value === passvalue) {
        showSuccess(password2,);
    } else {
        showError(password2,'password must be same');
    }
});