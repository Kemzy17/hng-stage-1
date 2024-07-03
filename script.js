function updateTime() {
  const now = new Date();
  const utcTime = now.toUTCString();
  const currentDay = now.toLocaleDateString("en-US", { weekday: "long" });
  document.getElementById("currentTimeUTC").textContent = utcTime;
  document.getElementById("currentDay").textContent = currentDay;
}
// display time
updateTime();
// Update time every second
setInterval(updateTime, 1000);
