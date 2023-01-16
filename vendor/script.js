let steps = document.querySelectorAll('.step');
let gallery = document.querySelector('.gallery');
let boxes = document.querySelectorAll('.box');
let images = gallery.querySelectorAll('.gallery-item');
const showBtn = document.querySelector('.showBtn');
let totalTag = [];
let filteredImages = [];

steps.forEach(el => el.addEventListener('click', randomazer));

showBtn.addEventListener('click', filterImages);
showBtn.addEventListener('click', showImageFiltered);

function randomazer(e) {
  let BtnRandom = this.querySelector('.box__btn_random');
  if (e.target == BtnRandom) {
    let box = e.currentTarget.querySelectorAll('.box__btn');
    let randomValue = Math.floor(Math.random() * 10) + 1;
    let random = randomValue % 2;
    totalTag.push(box[random].getAttribute('data-value'));
  } else {
    totalTag.push(e.target.getAttribute('data-value'));
  }
  this.classList.toggle('isActive');

  for (let i = 0; i < boxes.length; i++) {
    if (this == boxes[i]) {
      boxes[i + 1].classList.toggle('isActive');
    }
  }

  if (totalTag.length == 4) {
    showBtn.classList.add('isActive');
  }
}

function isIncludeAtt(el) {
  if (
    el.getAttribute('data-value').includes(totalTag[0]) &&
    el.getAttribute('data-value').includes(totalTag[1]) &&
    el.getAttribute('data-value').includes(totalTag[2]) &&
    el.getAttribute('data-value').includes(totalTag[3])
  ) {
    filteredImages.push(el);
  }
}

function filterImages() {
  images.forEach(el => {
    isIncludeAtt(el);
  });
}

function showImageFiltered() {
  let randomImgId = Math.floor(Math.random() * filteredImages.length);
  filteredImages[randomImgId].classList.add('isActive');
  showBtn.classList.remove('isActive');
}
