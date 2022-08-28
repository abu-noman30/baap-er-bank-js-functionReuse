
// Get Diposit-Withdrawal Input value from input field by ID and return it as a string
function getinputFieldValueById(inputId) {
    let input = document.querySelector(inputId);
    let value = input.value;
    input.value = '';
    return value;
}

// Get Diposit-Withdrawal Field InnerText(current amount) from field by ID and return it as a string
function getAmountFielById(fieldId) {
    let amount = document.querySelector(fieldId);
    let prevAmount = amount.innerText;
    return prevAmount;
} 

// Set Total Diposit-Withdrawal Amount to the Field by InnerText by passing ID and total amount and return nothing
function setAmountFielById(fieldId, totalAmount) {
    let amount = document.querySelector(fieldId);
    amount.innerText = totalAmount;
}

// Get Total-Balance Field InnerText(current amount) from field by ID and return it as a string
function getTotalBalanceFieldById(fieldId){
    let balance = document.querySelector(fieldId);
    let prevBalance = parseFloat(balance.innerText);
    return prevBalance;
}

// Set Total-Balance Amount to the Field by InnerText by passing ID and total amount and return nothing
function setTotalBalanceFieldById(fieldId, totalBalance) {
    let balance = document.querySelector(fieldId);
    balance.innerText = totalBalance;
}