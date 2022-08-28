function onWithdraw() {
   let withdrawValue = getinputFieldValueById('#withdraw-input');

    if (withdrawValue === '') {
        alert('Please enter a valid amount');
        return;
    } else if (withdrawValue < 0) {
        alert('Please enter a positive number');
        return;
        
    } else { 
        
    let prevWithdrawAmount = getAmountFielById('#withdraw-amount');
    let newWithdrawAmount = withdrawValue;
    
    let totalWithdrawAmount = (parseFloat(prevWithdrawAmount) + parseFloat(newWithdrawAmount)).toFixed(2);

    setAmountFielById('#withdraw-amount',totalWithdrawAmount);

    let prevBalance = getTotalBalanceFieldById('#tolal-balance');

    
    let newBalance = withdrawValue;
    let totalBalance = (parseFloat(prevBalance) - parseFloat(newBalance)).toFixed(2);

    setTotalBalanceFieldById('#tolal-balance', totalBalance)
    }

}






/* function onWithdraw() {
    let withdrawInput = document.querySelector('#withdraw-input');
    let withdrawValue = withdrawInput.value;

    if (withdrawValue === '') {
        alert('Please enter a valid amount');
        return;
    } else if (withdrawValue < 0) {
        alert('Please enter a positive number');
        return;
        
    } else { 
        
    let withdrawAmount = document.querySelector('#withdraw-amount');
    let prevWithdrawAmount = parseFloat(withdrawAmount.innerText);
    let newWithdrawAmount = withdrawValue;
    
    let totalWithdrawAmount = (parseFloat(prevWithdrawAmount) + parseFloat(newWithdrawAmount)).toFixed(2);
    withdrawAmount.innerText = totalWithdrawAmount;

    let balance = document.querySelector('#tolal-balance');
    let prevBalance = parseFloat(balance.innerText);

    let newBalance = withdrawValue;
    let totalBalance = (parseFloat(prevBalance) - parseFloat(newBalance)).toFixed(2);
    balance.innerText = totalBalance;

    withdrawInput.value = '';
    }

}

 */