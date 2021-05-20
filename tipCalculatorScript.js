


//A global variable that is manipulated by html code, that changes the value of the variable depending which button is pressed(15,20 or 25)
var percentage



function totalAmmount() {

    var userError = document.getElementById('user-error')
    userError.innerHTML = '';
    var totalDiv = document.getElementById('total-div')
    totalDiv.innerHTML = '';





    //Gets the value from custom tip field  
    var customTip = document.getElementById('Custom-tip').value;

    // If user preses the percent button, the tip will be calculated by converting the percentage into a decimal and multiplying by the intial amount 
    if (customTip === "") {
        var initialAmount = document.getElementById("bill-amount").value;
        var decimal = percentage / 100
        var tip = initialAmount * decimal
    }

    //If user enters the custom tip amount in USD
    else {
        var initialAmount = document.getElementById("bill-amount").value;
        var tip = customTip
    }

    //======Error checking======

    //If the user leaves the Bill Ammount blank and tip unselected
    if (isNaN(tip) && initialAmount === "") {
        var writeUserError = document.createElement('p')
        writeUserError.innerHTML = 'Please enter your Bill Amount and select a tip'
        userError.appendChild(writeUserError);
    }
    //If the user enters amount, but does not select a tip 
    else if (initialAmount !== "" && isNaN(tip)) {
        var writeUserError = document.createElement('p')
        writeUserError.innerHTML = 'Please select a tip'
        userError.appendChild(writeUserError);
    }

    //If all errors are false, the program will display to the user, initial amount, tip and the total amount 
    else {
        var writeTotal = document.createElement('p')
        writeTotal.innerText = 'Initial Bill: $' + initialAmount + '\n' + 'Tip : $' + tip + '\n' + '  Ammount Due: $' + (parseInt(tip) + parseInt(initialAmount))
        totalDiv.appendChild(writeTotal);
    }





}



var calculateButton = document.getElementById('Calculate-button')
calculateButton.addEventListener('click', totalAmmount);








