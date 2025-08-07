// console.log('login js connected');
document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;
    const pinPassword = document.getElementById('pin-number').value;
    if(phoneNumber === '01326596878' && pinPassword === '1234'){
        console.log('you are login');
        window.location.href = './home.html';
    }
    else{
        alert('wrong phone number or wrong pin number! please try again!');
    }
});