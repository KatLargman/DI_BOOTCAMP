let bankAmount = 50000;

let moneyStuff = ["+200", "-300", "+8", "+100"];

const endOfMonth = (arr) => {
  let vat = 0.17;
  let expenses;
  let negativeInc;
  let newLoss;
  let taxes;
  let newExpenses;
  for (let i = 0; i < arr.length; i++) {
    expenses = parseInt(arr[i]);
    if (expenses < 0) {
      negativeInc = expenses * -vat;
      newLoss = negativeInc - arr[i];
      console.log(newLoss);
    } else {
      taxes = expenses * vat;
      newExpenses = expenses - taxes;
      console.log(newExpenses);
    }
    taxes = expenses * vat;
    newExpenses = expenses - taxes;
  }
  alert(`Your new balance is ${bankAmount + newExpenses - newLoss}`);
};

endOfMonth(moneyStuff);
