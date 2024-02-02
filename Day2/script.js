'use strict';
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// // // Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

let currentAccount;

// Functions

// Display movements
function displayMovements(account) {
  containerMovements.innerHTML = '';
  account.movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}

// Display balance
function displayBalance(account) {
  const balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance}€`;
}

// Display summary
function displaySummary(account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  const outflows = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  const interest = (incomes * account.interestRate) / 100;

  labelSumIn.textContent = `${incomes}€`;
  labelSumOut.textContent = `${Math.abs(outflows)}€`;
  labelSumInterest.textContent = `${interest}€`;
}

// Update UI
function updateUI(account) {
  // Display movements
  displayMovements(account);

  // Display balance
  displayBalance(account);

  // Display summary
  displaySummary(account);

  // Start the logout timer
  startLogoutTimer();
}

// Event handlers for Login
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  const username = inputLoginUsername.value;
  const pin = Number(inputLoginPin.value);

  currentAccount = accounts.find(acc => acc.owner === username && acc.pin === pin);

  if (currentAccount) {
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 1;

    const now = new Date();
    const options = {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    labelDate.textContent = new Intl.DateTimeFormat('en-US', options).format(now);

    updateUI(currentAccount);

    // Reset login form
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
  } else {
    // Wrong username or PIN
    containerApp.style.opacity = 0;
    alert('Invalid username or PIN. Please try again.');
  }
});

// Event handlers for Sort Movement
btnSort.addEventListener('click', function () {
  // Sort movements array in place
  currentAccount.movements.sort((a, b) => a - b);

  updateUI(currentAccount);
});

// Event handlers for transfer
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const transferTo = inputTransferTo.value;
  const transferAmount = Number(inputTransferAmount.value);
  if (
    transferAmount > 0 &&
    transferAmount <= currentAccount.balance &&
    transferTo &&
    transferTo !== currentAccount.owner
  ) {
    const recipientAccount = accounts.find(acc => acc.owner === transferTo);

    if (recipientAccount) {
      currentAccount.movements.push(-transferAmount);
      recipientAccount.movements.push(transferAmount);

      updateUI(currentAccount);
      updateUI(recipientAccount);
    } else {
      alert('Recipient account not found. Please check the name and try again.');
    }
  } else {
    alert('Invalid transfer. Please check the amount and recipient and try again.');
  }

  inputTransferTo.value = inputTransferAmount.value = '';
});
// Function to log out (close) an account
function logoutAccount(username, pin) {
  const accountToLogout = accounts.find(acc => acc.owner === username && acc.pin === pin);

  if (!accountToLogout) {
    alert(`Logout successful for ${username}.`);
    location.reload();
  } else {
    console.log('Invalid username or PIN. Please try again.');
  }
}

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  
  const usernameToLogout = inputCloseUsername.value;
  const pinToLogout = inputClosePin.value;

  logoutAccount(usernameToLogout, pinToLogout);
});

// Function to start the logout timer
function startLogoutTimer() {
  let time = 300;

  displayLogoutTime(time);

  const timer = setInterval(function () {
    time--;

    displayLogoutTime(time);

    if (time === 0) {
      logoutUser();
      clearInterval(timer);
    }
  }, 1000);
}

function displayLogoutTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const display = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  labelTimer.textContent = display;
}

function logoutUser() {
  containerApp.style.opacity = 0;
  alert('You have been logged out. Please log in again.');
}