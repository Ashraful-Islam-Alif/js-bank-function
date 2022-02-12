let input = document.getElementById('deposit-input');
let depositeTotal = document.getElementById('deposit-total')
let withdrawInput = document.getElementById('withdraw-input');
let withdrawTotal = document.getElementById('withdraw-total')
let balanceTotal = document.getElementById('balance-total');
// deposite button with onclick
function depositeButton() {
    //let depositButton = document.getElementById('deposit-button');

    /* depositeTotal.innerText = parseFloat(depositeTotal.innerText) + parseFloat(input.value) */

    const totalBalance = addMoney(depositeTotal.innerText, input.value)
    depositeTotal.innerText = totalBalance;
    /* 
    balanceTotal.innerText = parseFloat(balanceTotal.innerText) + parseFloat(input.value) */
    const displayBalanceTotal = addMoney(balanceTotal.innerText, input.value)
    balanceTotal.innerText = displayBalanceTotal
    input.value = ''
}


// withdraw button with addEventListener
document.getElementById('withdraw-button').addEventListener('click', function () {
    //let depositButton = document.getElementById('withdraw-button');
    const totalWithdraw = addMoney(withdrawTotal.innerText, withdrawInput.value)
    withdrawTotal.innerText = totalWithdraw;
    // withdrawTotal.innerText = parseFloat(withdrawTotal.innerText) + parseFloat(withdrawInput.value)
    const balanceWithdraw = subMoney(balanceTotal.innerText, withdrawInput.value)
    balanceTotal.innerText = balanceWithdraw;
    // balanceTotal.innerText = parseFloat(balanceTotal.innerText) - parseFloat(withdrawInput.value)

    withdrawInput.value = ''
})
function addMoney(currentInput, newAmount) {
    return parseFloat(currentInput) + parseFloat(newAmount);
}
function subMoney(currentInput, newAmount) {
    return parseFloat(currentInput) - parseFloat(newAmount);
}
