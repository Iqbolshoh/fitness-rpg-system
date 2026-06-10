let xp = 0;
let level = 1;

function addXP(value) {
  xp += value;

  if (xp >= 100) {
    level++;
    xp = xp - 100;
  }

  document.getElementById("xp").innerText = xp;
  document.getElementById("level").innerText = level;

  document.getElementById("bar").style.width = xp + "%";
}