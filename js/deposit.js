/* function depositInputValueById(inputId) {
    let depostiInput = document.querySelector(inputId);
    let depositValue = depostiInput.value;
    return depositValue;
}
 */

function onDeposit() {
    let depositValue = getinputFieldValueById('#deposit-input');
    console.log(typeof depositValue);

    if (depositValue === '') {
        alert('Please enter a valid amount');
        return;
    } else if (depositValue < 0) {
        alert('Please enter a positive number');
        return;
        
    } else { 
        
    let prevDepositAmount = getAmountFielById('#deposit-amount');
    let newDepositAmount = depositValue;
    
    let totalDepositAmount = (parseFloat(prevDepositAmount) + parseFloat(newDepositAmount)).toFixed(2);

    setAmountFielById('#deposit-amount', totalDepositAmount);

    let prevBalance = getTotalBalanceFieldById('#tolal-balance');

    let newBalance = depositValue;
    let totalBalance = (parseFloat(prevBalance) + parseFloat(newBalance)).toFixed(2);

    setTotalBalanceFieldById('#tolal-balance', totalBalance)
    }

} 





/* function onDeposit() {
    let depostiInput = document.querySelector('#deposit-input');
    let depositValue = depostiInput.value;

    console.log(typeof depositValue);

    if (depositValue === '') {
        alert('Please enter a valid amount');
        return;
    } else if (depositValue < 0) {
        alert('Please enter a positive number');
        return;
        
    } else { 
        
    let depositAmount = document.querySelector('#deposit-amount');
    let prevDepositAmount = depositAmount.innerText;
    let newDepositAmount = depositValue;
    
    let totalDepositAmount = (parseFloat(prevDepositAmount) + parseFloat(newDepositAmount)).toFixed(2);
    depositAmount.innerText = totalDepositAmount;

    let balance = document.querySelector('#tolal-balance');
    let prevBalance = parseFloat(balance.innerText);

    let newBalance = depositValue;
    let totalBalance = (parseFloat(prevBalance) + parseFloat(newBalance)).toFixed(2);
    balance.innerText = totalBalance;

    depostiInput.value = '';
    }

} */