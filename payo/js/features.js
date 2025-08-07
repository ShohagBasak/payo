document.getElementById('show-add-money-form')
    .addEventListener('click', function () {
        showSectionById('add-money-form');
        setActiveButtonById('show-add-money-form');
    });
document.getElementById('show-cash-out-form')
    .addEventListener('click', function () {
        showSectionById('cashout-form');
        setActiveButtonById('show-cash-out-form');
    });
document.getElementById('show-get-bonus-form')
    .addEventListener('click', function () {
        showSectionById('get-bonus-form');
        setActiveButtonById('show-get-bonus-form');
    });
document.getElementById('show-pay-bill-form')
    .addEventListener('click', function () {
        showSectionById('pay-bill-form');
        setActiveButtonById('show-pay-bill-form');
    });
document.getElementById('show-transaction-form')
    .addEventListener('click', function () {
        showSectionById('transaction-form');
        setActiveButtonById('show-transaction-form');
    });
// All button select koro
// const buttons = document.querySelectorAll('.grid button');

// // Sob button e event listener add koro
// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         // Prothome sob button theke lime color remove koro
//         buttons.forEach(btn => btn.classList.remove('bg-lime-400'));

//         // Tarpor clicked button e lime color add koro
//         button.classList.add('bg-lime-400');
//     });
// });