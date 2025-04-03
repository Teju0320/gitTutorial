const mainheading = document.querySelector('#main-heading');
mainheading.style.textAlign = 'Right';

const basketheading = document.querySelector('#basket-heading');
basketheading.style.color = 'brown';
basketheading.style.margin = '30px';

const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'grey';
fruits.style.padding = '30px';
fruits.style.borderRadius = '5px';
fruits.style.margin = '30px';
fruits.style.listStyleType = 'none';

const fruitItems = document.querySelectorAll('.fruit');
for (let i = 0; i < fruitItems.length; i++){
    fruitItems[i].style.padding = '10px';
    fruitItems[i].style.margin = '10px'
    fruitItems[i].style.borderRadius = '5px';
}

const OddFruitItems = document.querySelectorAll('.fruit:nth-child(odd)');
for (let i = 0; i< OddFruitItems.length; i++){
    OddFruitItems[i].style.backgroundColor = 'white';
   
}

const EvenFruitItems = document.querySelectorAll('.fruit:nth-child(even)');
for (let i = 0; i < EvenFruitItems.length; i++) {
    EvenFruitItems[i].style.backgroundColor = 'brown';
    EvenFruitItems[i].style.color = 'white';
}


