let xp = 0;
let level = 1;

function addXP(value) {
  xp += value;

  if (xp >= 100) {
    level++;
    xp = xp - 100;
  }

  const xpEl = document.getElementById("xp");
  const lvlEl = document.getElementById("level");
  const bar = document.getElementById("bar");

  if (xpEl) xpEl.innerText = xp;
  if (lvlEl) lvlEl.innerText = level;
  if (bar) bar.style.width = xp + "%";
}

/* BACKGROUND SLIDER */
let index = 0;
const backgrounds = document.querySelectorAll(".bg");

function changeBg() {
  backgrounds.forEach(b => b.classList.remove("active"));
  index = (index + 1) % backgrounds.length;
  backgrounds[index].classList.add("active");
}

setInterval(changeBg, 4000);