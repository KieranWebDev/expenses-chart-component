import jsonData from './data.json' assert { type: 'json' };

const dailyAmount = document.querySelectorAll('.daily-amount-spent');
const graphBars = document.querySelectorAll('.graph-bar');

// console.log(jsonData);
console.log(jsonData);
console.log(dailyAmount);

// for (const data of jsonData) {
//   for (const amount of dailyAmount) {
//     data.textContent = amount.dailyAmount;
//   }
// }

dailyAmount.forEach((amount, index) => {
  amount.textContent = `$${jsonData[index].amount}`;
});

// if amount is greater than 50 then flexbasis is 100%. otherwise glex basis is amount * 2
graphBars.forEach((bar, index) => {
  if (jsonData[index].amount > 50) {
    bar.style.flexBasis = '100%';
  } else {
    bar.style.flexBasis = `${jsonData[index].amount * 1.5}%`;
  }
});
