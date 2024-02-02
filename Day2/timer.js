// // Function to start the logout timer
// const labelTimer = document.querySelector('.timer');
// const containerApp = document.querySelector('.app');

// function startLogoutTimer() {
//     let time = 300; // 5 minutes in seconds
//     displayLogoutTime(time);
//     const timer = setInterval(function () {
//       time--;
  
//       displayLogoutTime(time);
  
//       if (time === 0) {
//         logoutUser();
//         clearInterval(timer);
//       }
//     }, 1000);
//   }
//   function displayLogoutTime(seconds) {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
  
//     const display = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
//     labelTimer.textContent = display;
//   }
  
//   function logoutUser() {
//     containerApp.style.opacity = 0;
//     alert('You have been logged out. Please log in again.');
//   }
  