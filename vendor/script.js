import { createImgsBaseObj } from './state.js';
const imageBaseFromState = createImgsBaseObj();
let steps = document.querySelectorAll('.step');
let gallery = document.querySelector('.gallery');
let boxes = document.querySelectorAll('.box');
const showBtn = document.querySelector('.showBtn');
let totalTag = [];
let filteredImages = [];

steps.forEach(el => el.addEventListener('click', randomazer));

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

  for (let i = 0; i < boxes.length - 1; i++) {
    if (this == boxes[i]) {
      boxes[i + 1].classList.toggle('isActive');
    }
  }

  if (totalTag.length == 4) {
    showBtn.classList.add('isActive');
  }
}

function isIncludeAtt(el) {
  if (el.getAttribute('data-value') == totalTag.join(' ')) {
    filteredImages.push(el);
  }
}

function hideShowBtn() {
  showBtn.classList.remove('isActive');
}

function showImageFiltered() {
  imagesFilter();
  generateRandomImg();
  hideShowBtn();
  showImage();
}

let filtredArr = [];
let winnerImgSrc = '';

function imagesFilter() {
  filtredArr = imageBaseFromState.filter(function (item) {
    return item.dataValue == totalTag.join(' ');
  });
}

function generateRandomImg() {
  let randomImgId = Math.floor(Math.random() * filtredArr.length);
  winnerImgSrc = filtredArr[randomImgId].src;
  console.log(winnerImgSrc);
}

function showImage() {
  gallery.classList.add('isActive');
  gallery.style.backgroundImage = `url(${winnerImgSrc})`;
}
