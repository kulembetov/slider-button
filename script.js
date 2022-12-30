const checkbox = document.querySelector('.input');
const page = document.querySelector('.page')
const darkMode = document.querySelector('.page-dark');

function changeMode () {
  page.classList.toggle('page-dark');
}

checkbox.addEventListener("click", function () {
  changeMode();
});