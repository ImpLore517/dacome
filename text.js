const box = document.querySelector('.box');

const num = 5;

var fruits = new Array(num).fill('');


const arr1 = fruits.map(function(index) {
  return `<button>${index}</button>`
}).join('');

box.innerHTML = arr1;

function asd(e,i) {
    const cso = document.querySelectorAll(e);
    const cos = document.querySelectorAll(i);

    console.log(cso);
    console.log(cos);

}

asd(".fifi",".cso");