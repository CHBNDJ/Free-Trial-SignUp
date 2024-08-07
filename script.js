const signup = document.querySelector('.signup-content'); 
const form = document.getElementById('signup-form');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submitBtn = document.getElementById('submit-btn');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const input = document.querySelectorAll('input');

const errorMessage = document.querySelector('.error-message');
const errorFirstName = document.getElementById('first-name-error');
const errorLastName = document.getElementById('last-name-error');
const errorMail = document.getElementById('email-error');
const errorPassword = document.getElementById('password-error');

const errorIconFirst = document.getElementById('error_icon_first');
const errorIconLast = document.getElementById('error_icon_last');
const errorIconMail = document.getElementById('error_icon_mail');
const errorIconPass = document.getElementById('error_icon_password');



submitBtn.addEventListener('click', (e) => {
     e.preventDefault();
    let hasErrors = false;
    
    if (firstNameInput.value === '') {
        firstNameInput.style.border = '1px solid #FF7979';
        errorFirstName.textContent = 'First Name cannot be empty';
        errorFirstName.classList.add('show');
        errorIconFirst.classList.add('block');
        hasErrors = true;
    } else {
        firstNameInput.style.border = '';
        errorFirstName.textContent = '';
        errorFirstName.classList.remove('show');
        errorIconFirst.classList.remove('block');
    }

    if (lastNameInput.value === '') {
        lastNameInput.style.border = '1px solid #FF7979';
        errorLastName.textContent = 'Last Name cannot be empty';
        errorLastName.classList.add('show');
        errorIconLast.classList.add('block');
        hasErrors = true;
    } else {
        lastNameInput.style.border = '';
        errorLastName.textContent = '';
        errorLastName.classList.remove('show');
        errorIconLast.classList.remove('block');
    }

    if (email.value.match(emailRegex)) {
        email.style.border = '';
        errorMail.textContent = '';
        errorMail.classList.remove('show');
        errorIconMail.classList.remove('block');
    } else {
        email.style.border = '1px solid #FF7979';
        errorMail.textContent = 'Looks like this is not an email';
        errorMail.classList.add('show');
        errorIconMail.classList.add('block');
        hasErrors = true;
    }

    if (password.value === '') {
        password.style.border = '1px solid #FF7979';
        errorPassword.textContent = 'Password cannot be empty';
        errorPassword.classList.add('show');
        errorIconPass.classList.add('block');
        hasErrors = true;
    } else {
        password.style.border = '';
        errorPassword.textContent = '';
        errorPassword.classList.remove('show');
        errorIconPass.classList.remove('block');
    }


    if (hasErrors) {
        signup.classList.add('expanded');
    } else {
        signup.classList.remove('expanded');
        form.reset(); 
    }



    

    firstNameInput.addEventListener('click', () => {
        firstNameInput.style.border = '';
        errorFirstName.textContent = '';
        errorIconFirst.classList.remove('block');
    })
    
    lastNameInput.addEventListener('click', () => {
        lastNameInput.style.border = '';
        errorLastName.textContent = '';
        errorIconLast.classList.remove('block');
    })
    
    email.addEventListener('click', () => {
        email.style.border = '';
        errorMail.textContent = '';
        errorIconMail.classList.remove('block');
    })
    
    password.addEventListener('click', () => {
        password.style.border = '';
        errorPassword.textContent = '';
        errorIconPass.classList.remove('block');
    })


});


