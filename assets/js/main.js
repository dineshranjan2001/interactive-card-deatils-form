document.getElementById('holdername-error').style.display = 'none';
document.getElementById('cardnumber-error').style.display = 'none';
document.getElementById('exp-date-error').style.display = 'none';
document.getElementById('cvc-error').style.display = 'none';
document.getElementById('card-input-details').style.display = 'block';
document.getElementById('complete-thankyou').style.display = 'none';


let cardHolderNameInput = document.getElementById('card-holder-input');
let cardNumberInput = document.getElementById('card-number-input');
let expMonthInput = document.getElementById('exp-month-input');
let expYearInput = document.getElementById('exp-year-input');
let cvcNumberInput = document.getElementById('cvc-input');

let cardNumberText = document.getElementById('card-number');
let cardHolderNameText = document.getElementById('card-holder-name');
let expMonthText = document.getElementById('exp-month');
let expYearText = document.getElementById('exp-year');
let cvcNumberText = document.getElementById('cvc-number');

let cardHolderNamePattern = /[a-zA-Z ]{3,50}/g;
cardNumberText.innerText = "0000 0000 0000 0000";
cardHolderNameText.innerText = "JANE APPLESEED";
expMonthText.innerText = "00"
expYearText.innerText = "00"
cvcNumberText.innerText = "000"


let validateCardHolderInput = (event) => {
    if (!event.target.value)
        cardHolderNameText.innerText = "JANE APPLESEED";
    else
        cardHolderNameText.innerText = event.target.value.toUpperCase();
}

let validateCardNumberInput = (event) => {
    if (!event.target.value) {
        cardNumberText.innerText = "0000 0000 0000 0000";
    } else {
        const inputValue = event.target.value.replaceAll(" ", "");
        if (event.target.value.length > 14) {
            event.target.value = inputValue.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
            cardNumberText.innerText = inputValue.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
        } else if (event.target.value.length > 9) {
            event.target.value = inputValue.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
            cardNumberText.innerText = inputValue.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
        } else if (event.target.value.length > 4) {
            event.target.value = inputValue.replace(/(\d{4})(\d{0,4})/, "$1 $2");
            cardNumberText.innerText = inputValue.replace(/(\d{4})(\d{0,4})/, "$1 $2");
        } else
            cardNumberText.innerText = inputValue;
    }
}

let validateMonthInput = (event) => {
    if (!event.target.value)
        expMonthText.innerText = "00";
    else
        expMonthText.innerText = event.target.value;
}

let validateYearInput = (event) => {
    if (!event.target.value)
        expYearText.innerText = "00";
    else
        expYearText.innerText = event.target.value;
}

let validateCvcNumberInput = (event) => {
    if (!event.target.value)
        cvcNumberText.innerText = "000";
    else
        cvcNumberText.innerText = event.target.value;
}

cardHolderNameInput.onblur = (event) => {
    if (!event.target.value.match(cardHolderNamePattern)) {
        cardHolderNameInput.classList.add('invalid');
        document.getElementById('holdername-error').innerText = "Wrong format, letters only.";
        document.getElementById('holdername-error').style.display = 'block';
    }
    cardHolderNameInput.classList.remove('valid');
}
cardHolderNameInput.onfocus = () => {
    if (cardHolderNameInput.classList.contains('invalid')) {
        cardHolderNameInput.classList.remove('invalid');
        cardHolderNameInput.classList.add('valid');
        document.getElementById('holdername-error').innerText = "";
        document.getElementById('holdername-error').style.display = 'none';
    }
    cardHolderNameInput.classList.add('valid');
}

cardNumberInput.onblur = (event) => {
    if (event.target.value.length < 19) {
        cardNumberInput.classList.add('invalid');
        document.getElementById('cardnumber-error').innerText = "The card will contain 16 numbers.";
        document.getElementById('cardnumber-error').style.display = 'block';
    }
    cardNumberInput.classList.remove('valid');
}
cardNumberInput.onfocus = () => {
    if (cardNumberInput.classList.contains('invalid')) {
        cardNumberInput.classList.remove('invalid');
        cardNumberInput.classList.add('valid');
        document.getElementById('cardnumber-error').innerText = "";
        document.getElementById('cardnumber-error').style.display = 'none';
    }
    cardNumberInput.classList.add('valid');
}

expMonthInput.onblur = () => {
    if (expMonthInput.value === '') {
        expMonthInput.classList.add('invalid');
        document.getElementById('exp-date-error').innerText = "Can't be blank.";
        document.getElementById('exp-date-error').style.display = 'block';
    }
    expMonthInput.classList.remove('valid');
}
expMonthInput.onfocus = () => {
    if (expMonthInput.classList.contains('invalid')) {
        expMonthInput.classList.remove('invalid');
        expMonthInput.classList.add('valid');
        document.getElementById('exp-date-error').innerText = "";
        document.getElementById('exp-date-error').style.display = 'none';
    }
    expMonthInput.classList.add('valid');
}
expYearInput.onblur = (event) => {
    if (expYearInput.value === '') {
        expYearInput.classList.add('invalid');
        document.getElementById('exp-date-error').innerText = "Can't be blank.";
        document.getElementById('exp-date-error').style.display = 'block';
    } else if (event.target.value.length < 2) {
        expYearInput.classList.add('invalid');
        document.getElementById('exp-date-error').innerText = "Invalid year.";
        document.getElementById('exp-date-error').style.display = 'block';
    }
    expYearInput.classList.remove('valid');
}
expYearInput.onfocus = () => {
    if (expYearInput.classList.contains('invalid')) {
        expYearInput.classList.remove('invalid');
        expYearInput.classList.add('valid');
        document.getElementById('exp-date-error').innerText = "";
        document.getElementById('exp-date-error').style.display = 'none';
    }
    expYearInput.classList.add('valid');
}

cvcNumberInput.onblur = (event) => {
    if (cvcNumberInput.value === '') {
        cvcNumberInput.classList.add('invalid');
        document.getElementById('cvc-error').innerText = "Can't be blank.";
        document.getElementById('cvc-error').style.display = 'block';
    } else if (event.target.value.length < 3) {
        cvcNumberInput.classList.add('invalid');
        document.getElementById('cvc-error').innerText = "Invalid cvc number.";
        document.getElementById('cvc-error').style.display = 'block';
    }
    cvcNumberInput.classList.remove('valid');
}
cvcNumberInput.onfocus = () => {
    if (cvcNumberInput.classList.contains('invalid')) {
        cvcNumberInput.classList.remove('invalid');
        cvcNumberInput.classList.add('valid');
        document.getElementById('cvc-error').innerText = "";
        document.getElementById('cvc-error').style.display = 'none';
    }
    cvcNumberInput.classList.add('valid');
}

cardHolderNameInput.addEventListener('keyup', validateCardHolderInput);
cardNumberInput.addEventListener('keyup', validateCardNumberInput);
expMonthInput.addEventListener('keyup', validateMonthInput);
expYearInput.addEventListener('keyup', validateYearInput);
cvcNumberInput.addEventListener('keyup', validateCvcNumberInput);

let form = document.querySelector('#form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    if ((form.elements['cardHolderName'].value !== '' || form.elements['cardHolderName'].value.match(cardHolderNamePattern)) && form.elements['cardNumber'].value !== '' && form.elements['expMonth'].value !== '' && (form.elements['expYear'].value !== '' || form.elements['expYear'].value.length === 2) && (form.elements['cvcNumber'].value !== '' || form.elements['cvcNumber'].value.length === 3)) {
        document.getElementById('card-input-details').style.display = 'none';
        document.getElementById('complete-thankyou').style.display = 'block';
    }
    else {
        event.preventDefault();
    }

});

document.getElementById('continue-btn').addEventListener('click', () => {
    document.getElementById('card-input-details').style.display = 'block';
    document.getElementById('complete-thankyou').style.display = 'none';

    cardHolderNameInput.value = "";
    cardNumberInput.value = "";
    expMonthInput.value = "";
    expYearInput.value = "";
    cvcNumberInput.value = "";

    cardNumberText.innerText = "0000 0000 0000 0000";
    cardHolderNameText.innerText = "JANE APPLESEED";
    expMonthText.innerText = "00"
    expYearText.innerText = "00"
    cvcNumberText.innerText = "000"
});