

const clocks = document.querySelectorAll('.clock');

function updateClock() {
  let now = new Date();
  let hours = now.getHours() % 12 || 12;
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let timeFormat = hours < 12 ? 'AM' : 'PM';

  clocks.forEach((clock) => {
    clock.querySelector('#time').innerHTML = 
    `${hours.toString().padStart(2,'0')} :
     ${minutes.toString().padStart(2,'0')} : 
     ${seconds.toString().padStart(2,'0')}`;
    clock.querySelector('#timeFormat').innerHTML = timeFormat;
  });
}

setInterval(updateClock, 1000);
updateClock();    
