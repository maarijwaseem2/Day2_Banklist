// // import { accounts } from "./data";
// // Display movements
// const containerMovements = document.querySelector('.movements');

// export function displayMovements(account) {
//     containerMovements.innerHTML = '';
//     account.movements.forEach(function (mov, i) {
//       const type = mov > 0 ? 'deposit' : 'withdrawal';
  
//       const html = `
//         <div class="movements__row">
//           <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
//           <div class="movements__date">3 days ago</div>
//           <div class="movements__value">${mov}€</div>
//         </div>
//       `;
  
//       containerMovements.insertAdjacentHTML('afterbegin', html);
//     });
//   }
  