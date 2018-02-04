function formatSum(result) {
    return "$" + result.toFixed(2);
}

const TAX_RATE = 0;
const PHONE_PRICE = 400;
console.log("Price of the phone: " + formatSum(PHONE_PRICE));
const ACCESSORY_PRICE = 5.99;
console.log("Price of the accessory: " + formatSum(ACCESSORY_PRICE) + "\n");

//var accountBalance = 1700;
//console.log("Your account balance is: " + formatSum(accountBalance));
var accountBalance = prompt("What is your account balance?");
console.log("Your account balance is: $" + accountBalance);

//const ACCESSORY_SPENDING_THRESHOLD = 20;
//console.log("Your accessory spending threshold is: " + formatSum(ACCESSORY_SPENDING_THRESHOLD) + "\n");
const ACCESSORY_SPENDING_THRESHOLD = prompt("What is the accessory spending threshold?");
console.log("Your accessory spending threshold is: $" + ACCESSORY_SPENDING_THRESHOLD + "\n");

var phonePriceWithTax = PHONE_PRICE + (PHONE_PRICE * TAX_RATE);
var accessoryPriceWithTax = ACCESSORY_PRICE + (ACCESSORY_PRICE * TAX_RATE);

var numOfPhones = 0;
var numOfAccessories = 0;

for (var sum = 0; sum <= accountBalance; sum) {
    if (sum > accountBalance - phonePriceWithTax) {
        break;
    }

    if (accountBalance < phonePriceWithTax) {
    }
    else sum += phonePriceWithTax;

    if (sum >= phonePriceWithTax) {
        numOfPhones++;
        if (numOfAccessories * accessoryPriceWithTax > ACCESSORY_SPENDING_THRESHOLD - accessoryPriceWithTax) {
        }
        else if (sum <= accountBalance - accessoryPriceWithTax) {
            sum += accessoryPriceWithTax;
            numOfAccessories++;
        }
    }

/*
    console.log("Sum of purchase: " + sum);
    console.log("Number of phones bought: " + numOfPhones);
    console.log("Number of accessories bought: " + numOfAccessories);
*/
}



sum = formatSum(sum);

console.log("\n---SUMMARY---");
console.log("For the sum of purchase: " + sum + " you can buy:");
console.log("Phones: " + numOfPhones);
console.log("Accessories: " + numOfAccessories);