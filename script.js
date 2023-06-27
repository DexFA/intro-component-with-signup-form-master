function validateForm() {
    const firstName = document.querySelector('input[data-label="First Name"]').value;
    const firstNameError = document.getElementById('error-first-name');
    const lastName = document.querySelector('input[data-label="Last Name"]').value;
    const lastNameError = document.getElementById('error-last-name');
    const email = document.querySelector('input[data-label="Email Address"]').value;
    const emailError = document.getElementById('error-email');
    const password = document.querySelector('input[data-label="Password"]').value;
    const passwordError = document.getElementById('error-password');

    const firstNameInput = document.querySelector('input[data-label="First Name"]');
    const lastNameInput = document.querySelector('input[data-label="Last Name"]');
    const emailInput = document.querySelector('input[data-label="Email Address"]');
    const passwordInput = document.querySelector('input[data-label="Password"]');

    // Store original placeholders
    const firstNamePlaceholder = firstNameInput.getAttribute('placeholder');
    const lastNamePlaceholder = lastNameInput.getAttribute('placeholder');
    const emailPlaceholder = emailInput.getAttribute('placeholder');
    const passwordPlaceholder = passwordInput.getAttribute('placeholder');

    let hasErrors = false;

    if (!firstName) {
        firstNameError.textContent = 'First Name cannot be empty';
        firstNameInput.classList.add('error');
        firstNameInput.setAttribute('placeholder', '');
        hasErrors = true;
    } else {
        firstNameError.textContent = '';
        firstNameInput.classList.remove('error');
        firstNameInput.setAttribute('placeholder', firstNamePlaceholder);
    }

    if (!lastName) {
        lastNameError.textContent = 'Last Name cannot be empty';
        lastNameInput.classList.add('error');
        lastNameInput.setAttribute('placeholder', '');
        hasErrors = true;
    } else {
        lastNameError.textContent = '';
        lastNameInput.classList.remove('error');
        lastNameInput.setAttribute('placeholder', lastNamePlaceholder);
    }

    if (!email) {
        emailError.textContent = 'Email cannot be empty';
        emailInput.classList.add('error');
        emailInput.setAttribute('placeholder', '');
        hasErrors = true;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+(\.[a-zA-Z]{2,})+$/.test(email)) {
        emailError.textContent = 'Looks like this is not an email';
        emailInput.classList.add('error');
        emailInput.setAttribute('placeholder', '');
        hasErrors = true;
    } else {
        emailError.textContent = '';
        emailInput.classList.remove('error');
        emailInput.setAttribute('placeholder', emailPlaceholder);
    }

    if (!password) {
        passwordError.textContent = 'Password cannot be empty';
        passwordInput.classList.add('error');
        passwordInput.setAttribute('placeholder', '');
        hasErrors = true;
    } else {
        passwordError.textContent = '';
        passwordInput.classList.remove('error');
        passwordInput.setAttribute('placeholder', passwordPlaceholder);
    }

    if (!hasErrors) {
        document.getElementById('signup-form').submit();
    }
}

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});
