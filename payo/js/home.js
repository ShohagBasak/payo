document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const addMoney = getInputFieldValueById('input-add-money');
        const pinNumber = getInputFieldValueById('input-pin-number');
        if (pinNumber === 1234) {
            const balance = getTextFieldValueByid('account-balance');
            const newBalance = balance + addMoney;

            document.getElementById('account-balance').innerText = newBalance;

            // add to transaction history
            const div = document.createElement('div');
            div.classList.add('bg-yellow-500');
            div.innerHTML = `
            <h4 class = "text-xl font-bold"> Add Money </h4>
            <p>${addMoney}Tk Added Money. New Balance ${newBalance} Tk</p>
        `
            document.getElementById('transaction-container').appendChild(div);
        } else {
            alert('money added failed! please try again');
        }
    });
document.getElementById('btn-cashout-money')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const cashOut = getInputFieldValueById('input-cash-out');
        const pinNumber = getInputFieldValueById('input-cash-out-pin');
        if (pinNumber === 1234) {
            const balance = getTextFieldValueByid('account-balance');
            const cashOutBalance = balance - cashOut;

            document.getElementById('account-balance').innerText = cashOutBalance;

            // add to transaction history
            const div = document.createElement('div');
            div.classList.add('bg-red-500');
            div.innerHTML = `
            <h4 class = "text-xl font-bold"> Cash Out </h4>
            <p>${cashOut}Tk Added Money. New Balance ${cashOutBalance} Tk</p>
        `
            document.getElementById('transaction-container').appendChild(div);
        } else {
            alert('cashout faild ! please try again');
        }
    });
document.getElementById('btn-get-bonus')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const getCoupon = document.getElementById('input-get-coupon').value.trim(); // fixed line

        if (getCoupon === 'ontor vai gay') {
            const availableBal = getTextFieldValueByid('account-balance');
            const bonusAmount = 1000;
            const newBalance = availableBal + bonusAmount;

            document.getElementById('account-balance').innerText = newBalance; // fixed typo: innerText

            // add to transaction history
            const div = document.createElement('div');
            div.classList.add('bg-green-300');
            div.innerHTML = `
            <h4 class = "text-xl font-bold"> Get Bonus </h4>
            <p>${bonusAmount}Tk Added Bonus Amount. New Balance ${newBalance} Tk</p>
        `
            document.getElementById('transaction-container').appendChild(div);
        } else {
            alert('Invalid coupon code');
        }
    });
document.getElementById('btn-paynow-money')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const billerNumber = document.getElementById('input-biller-num').value;
        const addPay = getInputFieldValueById('input-add-pay');
        const pinNum = getInputFieldValueById('input-pay-now-pin');
        if (isNaN(addPay)) {
            alert('type only number do not type any letter!');
            return;
        };
        if (billerNumber === '01326596878' && pinNum === 1234) {
            const mainBalance = getTextFieldValueByid('account-balance');
            const newBalance = mainBalance - addPay;

            document.getElementById('account-balance').innerText = newBalance;
         
            // add to transaction history
        const div = document.createElement('div');
        div.classList.add('bg-blue-500');
        div.innerHTML =`
            <h4 class = "text-xl font-bold"> Pay Bill </h4>
            <p>${addPay}Tk Pay Bill. New Balance ${newBalance} Tk</p>
        `
        document.getElementById('transaction-container').appendChild(div);
        } else {
            alert('payment method failed ! please try again');
        }
    });