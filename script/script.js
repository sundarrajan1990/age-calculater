//elements
const dateEl = document.getElementById('date');
const monthEl = document.getElementById('month');
const yearEl = document.getElementById('year');
const formEl = document.getElementById('form');
const msgEl = document.getElementById('msg');

//global variables
let d, m, y;

//function
function calculateAge() {
  let d1 = dateEl.value;
  let m1 = monthEl.value;
  let y1 = yearEl.value;

  let date = new Date(); //current date & time
  let d2 = date.getDate();

  let m2 = 1 + date.getMonth();
  let y2 = date.getFullYear();
  let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (d1 > d2) {
    d2 = d2 + month[m2 - m1];
    m2 = m2 - 1;
  }

  if (m1 > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }

  d = d2 - d1;
  m = m2 - m1;
  y = y2 - y1;
}

//event listeners
formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  calculateAge();
  msgEl.innerHTML = `You are <span>${y}</span> years... <span>${m}</span> months &
  <span>${d}</span> days old`;
});
