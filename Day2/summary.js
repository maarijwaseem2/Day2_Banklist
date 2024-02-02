// // import { accounts } from "./data";
// // Display summary
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');

// export function displaySummary(account) {
//     const incomes = account.movements
//       .filter(mov => mov > 0)
//       .reduce((acc, mov) => acc + mov, 0);
//     const outflows = account.movements
//       .filter(mov => mov < 0)
//       .reduce((acc, mov) => acc + mov, 0);
//     const interest = (incomes * account.interestRate) / 100;
  
//     labelSumIn.textContent = `${incomes}€`;
//     labelSumOut.textContent = `${Math.abs(outflows)}€`;
//     labelSumInterest.textContent = `${interest}€`;
//   }