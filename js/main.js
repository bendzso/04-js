function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);

    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    
    showSumPrice(price, amountNumber);
}

function showSumPrice(price = 1000, amountNumber = 1) {

    let showAmount = document.querySelector("span.show-amount");

    if (amountNumber > 10) {
        alert("Maximum 10 hamburger rendelhető");
    }
    else if (amountNumber < 1) {
        alert("Minimum 1 terméket kell vásárolni!");
    }
    else {
        let amount = amountNumber * price;
        showAmount.innerHTML = amount;
    }
}

// Nevek: legyen egyértelmű

let numberOfProducts;

// Ne legyen félrevezető

// Kerüljük az O és I betűket