// const utcDate = new Date(Date.UTC(2025, 2, 1, 21, 27, 0));

// console.log(utcDate.toUTCString())

function updateCurrentTime() {
  const currentTime = new Date();
  const utcTime = currentTime.toUTCString();

  document.querySelector('[data-testid="currentTimeUTC"]').innerHTML = utcTime;
}

updateCurrentTime();