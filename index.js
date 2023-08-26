const mainContainer = document.querySelector('.main-container');
const thanksContainer = document.querySelector('.thanks-container');
const submitButton = document.querySelector('.btn-submit');

let selectedButton;
let rating;

document.querySelectorAll('.btn')
  .forEach((btn) => {
    btn.addEventListener('click', () => {
      if (selectedButton) {
        selectedButton.classList.remove('selected');
      }
      rating = btn.innerText;
      selectedButton = btn;
      btn.classList.add('selected');
    })
  })

submitButton.addEventListener('click', () => {
  if (rating) {
    mainContainer.classList.add('hidden');
    thanksContainer.classList.remove('hidden');
    document.querySelector('.rating')
      .innerHTML = rating;
  } else {
    alert('Make sure to select a rating first')
  }
})