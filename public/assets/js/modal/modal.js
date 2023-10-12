/** DEFINE MODALS **/
const paymentModal = document.querySelector('#paymentModal');
const payModal = document.querySelector('#payModal');
const paymentConfirmed = document.querySelector('#paymentConfirmed');

const payment = new bootstrap.Modal(paymentModal);
const pay = new bootstrap.Modal(payModal);
const confirmed = new bootstrap.Modal(paymentConfirmed);

const proceedButton = document.querySelector('#btn-proceed');
const statementButton = document.querySelector('#btn-statement');

proceedButton.addEventListener('click', showPay);
statementButton.addEventListener('click', showConfirmed);

function showPay() {
    payment.hide();
    pay.show();
}

function showConfirmed() {
    pay.hide();
    confirmed.show();
}