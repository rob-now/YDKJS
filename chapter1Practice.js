//Function used to add dollar sign in front of values
function formatSum(result) {
    return "$" + result.toFixed(2);
}

const TAX_RATE = 0.10;
const PHONE_PRICE = 450;
console.log("Price of the phone: " + formatSum(PHONE_PRICE));
const ACCESSORY_PRICE = 5.99;
console.log("Price of the accessory: " + formatSum(ACCESSORY_PRICE) + "\n");

//1a) Account balance hardcoded
/*
var accountBalance = 2100;
console.log("Your account balance is: " + formatSum(accountBalance));
*/

//1b) Account balance as input from user
var accountBalance = prompt("What is your account balance?");
console.log("Your account balance is: $" + accountBalance);

//2a) Accessory spending threshold hardcoded
/*
const ACCESSORY_SPENDING_THRESHOLD = 25;
console.log("Your accessory spending threshold is: " + formatSum(ACCESSORY_SPENDING_THRESHOLD) + "\n");
*/

//2b) Accessory spending threshold as input from user
const ACCESSORY_SPENDING_THRESHOLD = prompt("What is the accessory spending threshold?");
console.log("Your accessory spending threshold is: $" + ACCESSORY_SPENDING_THRESHOLD + "\n");

var phonePriceWithTax = PHONE_PRICE + (PHONE_PRICE * TAX_RATE);
var accessoryPriceWithTax = ACCESSORY_PRICE + (ACCESSORY_PRICE * TAX_RATE);

//Variables to store the increments (number of phones and accessories)
var numOfPhones = 0;
var numOfAccessories = 0;

for (var sum = 0; sum <= accountBalance; sum) {
    //Protection against spending more than account balance
    if (sum > accountBalance - phonePriceWithTax) {
        break;
    }

    //Protection against increasing sum if you cannot buy at least 1 phone
    if (accountBalance < phonePriceWithTax) {
    }
    else sum += phonePriceWithTax;

    if (sum >= phonePriceWithTax) {
        numOfPhones++;
        //Protection against spending more on accessories than threshold
        if (numOfAccessories * accessoryPriceWithTax > ACCESSORY_SPENDING_THRESHOLD - accessoryPriceWithTax) {
        }
        //Additional checking if adding accessory won't exceed the account balance
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