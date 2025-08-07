function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    console.log(inputNumber);
    return inputNumber;
};

function getTextFieldValueByid(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
};

function showSectionById(id) {
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cashout-form').classList.add('hidden');
    document.getElementById('get-bonus-form').classList.add('hidden');
    document.getElementById('pay-bill-form').classList.add('hidden');
    document.getElementById('transaction-form').classList.add('hidden');
    // show the sec with the provide id as parameter
    document.getElementById(id).classList.remove('hidden');
}

function setActiveButtonById(id) {
    const buttons = document.querySelectorAll('.grid button');

    // Remove lime color from all buttons
    buttons.forEach(btn => btn.classList.remove('bg-lime-400'));

    // Add lime color to the active one
    const activeBtn = document.getElementById(id);
    activeBtn.classList.add('bg-lime-400');
}