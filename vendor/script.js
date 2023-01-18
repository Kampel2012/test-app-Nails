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
  filtredArr = imgsBaseObj.filter(function (item) {
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

const imgsBaseObj = [
  { src: './images/nails/1.jpg', dataValue: 'short nude noDesign almond' },
  { src: './images/nails/2.jpg', dataValue: 'long nude noDesign almond' },
  { src: './images/nails/3.jpg', dataValue: 'long nude design almond' },
  { src: './images/nails/4.jpg', dataValue: 'short nude noDesign square' },
  { src: './images/nails/5.jpg', dataValue: 'long nude noDesign almond' },
  { src: './images/nails/6.jpg', dataValue: 'short nude noDesign almond' },
  { src: './images/nails/7.jpg', dataValue: 'short nude noDesign almond' },
  { src: './images/nails/8.jpg', dataValue: 'short nude noDesign almond' },
  { src: './images/nails/9.jpg', dataValue: 'short nude noDesign almond' },
  { src: './images/nails/10.jpg', dataValue: 'long nude design almond' },
  { src: './images/nails/11.jpg', dataValue: 'long nude design almond' },
  { src: './images/nails/12.jpg', dataValue: 'short nude design almond' },
  { src: './images/nails/13.jpg', dataValue: 'long color design almond' },
  { src: './images/nails/14.jpg', dataValue: 'short nude design almond' },
  { src: './images/nails/15.jpg', dataValue: 'short color design almond' },
  { src: './images/nails/16.jpg', dataValue: 'long nude design almond' },
  { src: './images/nails/17.jpg', dataValue: 'short nude design almond' },
  { src: './images/nails/18.jpg', dataValue: 'long nude design square' },
  { src: './images/nails/19.jpg', dataValue: 'long nude design square' },
  { src: './images/nails/20.jpg', dataValue: 'short nude design square' },
  { src: './images/nails/21.jpg', dataValue: 'short nude design square' },
  { src: './images/nails/22.jpg', dataValue: 'short nude design square' },
  { src: './images/nails/23.jpg', dataValue: 'short nude design square' },
  { src: './images/nails/24.jpg', dataValue: 'short nude design square' },
  { src: './images/nails/25.jpg', dataValue: 'short color design almond' },
  { src: './images/nails/26.jpg', dataValue: 'short nude design square' },
  { src: './images/nails/27.jpg', dataValue: 'short nude design square' },
  { src: './images/nails/28.jpg', dataValue: 'short nude design square' },
  { src: './images/nails/29.jpg', dataValue: 'short nude design square' },
  { src: './images/nails/30.jpg', dataValue: 'long color design almond' },
  { src: './images/nails/31.jpg', dataValue: 'short nude design square' },
  { src: './images/nails/32.jpg', dataValue: 'short color design square' },
  { src: './images/nails/33.jpg', dataValue: 'long nude design square' },
  { src: './images/nails/34.jpg', dataValue: 'long nude design almond' },
  { src: './images/nails/35.jpg', dataValue: 'long color design almond' },
  { src: './images/nails/36.jpg', dataValue: 'long nude design almond' },
  { src: './images/nails/37.jpg', dataValue: 'long color design almond' },
  { src: './images/nails/38.jpg', dataValue: 'long color design almond' },
  { src: './images/nails/39.jpg', dataValue: 'long nude design almond' },
  { src: './images/nails/40.jpg', dataValue: 'long color design almond' },
  { src: './images/nails/41.jpg', dataValue: 'long nude design almond' },
  { src: './images/nails/42.jpg', dataValue: 'long nude design almond' },
  { src: './images/nails/43.jpg', dataValue: 'long color design almond' },
  { src: './images/nails/44.jpg', dataValue: 'long color design almond' },
  { src: './images/nails/45.jpg', dataValue: 'long nude design square' },
  { src: './images/nails/46.jpg', dataValue: 'long nude design square' },
  { src: './images/nails/47.jpg', dataValue: 'long color design almond' },
  { src: './images/nails/48.jpg', dataValue: 'long color design almond' },
  { src: './images/nails/49.jpg', dataValue: 'long color design almond' },
  { src: './images/nails/50.jpg', dataValue: 'long color design almond' },
  { src: './images/nails/51.jpg', dataValue: 'long color design almond' },
  { src: './images/nails/52.jpg', dataValue: 'short color design square' },
  { src: './images/nails/53.jpg', dataValue: 'long color design almond' },
  { src: './images/nails/54.jpg', dataValue: 'long color design almond' },
  { src: './images/nails/55.jpg', dataValue: 'long color design almond' },
  { src: './images/nails/56.jpg', dataValue: 'long color design almond' },
  { src: './images/nails/57.jpg', dataValue: 'long color design almond' },
  { src: './images/nails/58.jpg', dataValue: 'short color design almond' },
  { src: './images/nails/59.jpg', dataValue: 'short color design almond' },
  { src: './images/nails/60.jpg', dataValue: 'short color design square' },
  { src: './images/nails/61.jpg', dataValue: 'short color design square' },
  { src: './images/nails/62.jpg', dataValue: 'short color design square' },
  { src: './images/nails/63.jpg', dataValue: 'short color design square' },
  { src: './images/nails/64.jpg', dataValue: 'short nude design square' },
  { src: './images/nails/65.jpg', dataValue: 'short nude design square' },
  { src: './images/nails/66.jpg', dataValue: 'long color design square' },
  { src: './images/nails/67.jpg', dataValue: 'short color design square' },
  { src: './images/nails/68.jpg', dataValue: 'short color design square' },
  { src: './images/nails/69.jpg', dataValue: 'short nude design square' },
  { src: './images/nails/70.jpg', dataValue: 'short nude design square' },
  { src: './images/nails/71.jpg', dataValue: 'short color design square' },
  { src: './images/nails/72.jpg', dataValue: 'short color design square' },
  { src: './images/nails/73.jpg', dataValue: 'short color design square' },
  { src: './images/nails/74.jpg', dataValue: 'long nude design square' },
  { src: './images/nails/75.jpg', dataValue: 'long nude design almond' },
  { src: './images/nails/76.jpg', dataValue: 'short color design square' },
  { src: './images/nails/77.jpg', dataValue: 'short color design square' },
  { src: './images/nails/78.jpg', dataValue: 'long color design almond' },
  { src: './images/nails/79.jpg', dataValue: 'long color design almond' },
  { src: './images/nails/80.jpg', dataValue: 'long nude design square' },
  { src: './images/nails/81.jpg', dataValue: 'short nude design square' },
  { src: './images/nails/82.jpg', dataValue: 'long color design square' },
  { src: './images/nails/83.jpg', dataValue: 'short color design square' },
  { src: './images/nails/84.jpg', dataValue: 'short color design square' },
  { src: './images/nails/85.jpg', dataValue: 'long color design square' },
  { src: './images/nails/86.jpg', dataValue: 'short color design square' },
  { src: './images/nails/87.jpg', dataValue: 'short color design square' },
  { src: './images/nails/88.jpg', dataValue: 'short color design square' },
  { src: './images/nails/89.jpg', dataValue: 'short color design square' },
  { src: './images/nails/90.jpg', dataValue: 'long color design square' },
  { src: './images/nails/91.jpg', dataValue: 'long nude design square' },
  { src: './images/nails/91.jpg', dataValue: 'long nude design square' },
  { src: './images/nails/92.jpg', dataValue: 'short color noDesign square' },
  { src: './images/nails/93.jpg', dataValue: 'short color noDesign square' },
  { src: './images/nails/94.jpg', dataValue: 'long color noDesign almond' },
  { src: './images/nails/95.jpg', dataValue: 'long color noDesign square' },
  { src: './images/nails/96.jpg', dataValue: 'short color noDesign almond' },
  { src: './images/nails/97.jpg', dataValue: 'short color noDesign square' },
  { src: './images/nails/98.jpg', dataValue: 'long color noDesign almond' },
  { src: './images/nails/99.jpg', dataValue: 'short nude noDesign almond' },
  { src: './images/nails/100.jpg', dataValue: 'long color noDesign square' },
  { src: './images/nails/101.jpg', dataValue: 'long color noDesign square' },
  { src: './images/nails/102.jpg', dataValue: 'long color noDesign square' },
  { src: './images/nails/103.jpg', dataValue: 'short nude noDesign square' },
  { src: './images/nails/104.jpg', dataValue: 'short color noDesign almond' },
  { src: './images/nails/105.jpg', dataValue: 'short nude design square' },
  { src: './images/nails/106.jpg', dataValue: 'long nude noDesign square' },
  { src: './images/nails/107.jpg', dataValue: 'short color noDesign square' },
  { src: './images/nails/108.jpg', dataValue: 'short nude noDesign square' },
];
