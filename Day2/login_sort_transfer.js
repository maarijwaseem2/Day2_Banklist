// // import {updateUI} from './data'
// import { accounts,updateUI } from './data';
// // Event handlers
// const btnLogin = document.querySelector('.login__btn');
// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// let currentAccount;
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const containerApp = document.querySelector('.app');
// const btnSort = document.querySelector('.btn--sort');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');


// btnLogin.addEventListener('click', function (e) {
//     e.preventDefault();
  
//     const username = inputLoginUsername.value;
//     const pin = Number(inputLoginPin.value);
  
//     currentAccount = accounts.find(acc => acc.owner === username && acc.pin === pin);
  
//     if (currentAccount) {
//       // Display UI and welcome message
//       labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
//       containerApp.style.opacity = 1;
  
//       // Display date
//       const now = new Date();
//       const options = {
//         day: 'numeric',
//         month: 'numeric',
//         year: 'numeric',
//         hour: '2-digit',
//         minute: '2-digit',
//       };
//       labelDate.textContent = new Intl.DateTimeFormat('en-US', options).format(now);
  
//       // Update UI
//       updateUI(currentAccount);
  
//       // Reset login form
//       inputLoginUsername.value = inputLoginPin.value = '';
//       inputLoginPin.blur();
//     } else {
//       // Wrong username or PIN
//       containerApp.style.opacity = 0;
//       alert('Invalid username or PIN. Please try again.');
//     }
//   });
//   btnSort.addEventListener('click', function () {
//     // Sort movements array in place
//     currentAccount.movements.sort((a, b) => a - b);
  
//     // Update the UI to display the sorted movements
//     updateUI(currentAccount);
//   });
//   btnTransfer.addEventListener('click', function (e) {
//     e.preventDefault();
//     const transferTo = inputTransferTo.value;
//     const transferAmount = Number(inputTransferAmount.value);
  
//     if (
//       transferAmount > 0 &&
//       transferAmount <= currentAccount.balance &&
//       transferTo &&
//       transferTo !== currentAccount.owner
//     ) {
//       const recipientAccount = accounts.find(acc => acc.owner === transferTo);
  
//       if (recipientAccount) {
//         currentAccount.movements.push(-transferAmount);
//         recipientAccount.movements.push(transferAmount);
  
//         updateUI(currentAccount);
//         updateUI(recipientAccount);
//       } else {
//         alert('Recipient account not found. Please check the name and try again.');
//       }
//     } else {
//       alert('Invalid transfer. Please check the amount and recipient and try again.');
//     }
//     inputTransferTo.value = inputTransferAmount.value = '';
//   });
  