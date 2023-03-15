'use strict'

// регистрация

// кнопка в меню
let butPerson = document.querySelectorAll('.person');
// окно
let modal = document.querySelector('#modal');
//обработчик
butPerson.forEach(butPersonItem =>{
  butPersonItem.addEventListener('click', person)
})
//открытие
function person(){
  modal.classList.remove('popup');
  modal.classList.add('modal');
}
//кнопка закрытия
let butclosePerson = document.querySelector('.close1');
//обработчик
butclosePerson.addEventListener('click', closePerson);
//закрытие
function closePerson(){
  modal.classList.remove('modal');
  modal.classList.add('popup');
}




//корзина

//кнопка в меню
let butBasket = document.querySelectorAll('.cart');
//окно
let basket = document.querySelector('#basket');
//обработчик
butBasket.forEach(butBasketItem =>{
  butBasketItem.addEventListener('click', openBasket)
})//кнопка закрытия
let butcloseBasket = document.querySelector('.close2');
//обработчик
butcloseBasket.addEventListener('click', closeBasket);
//закрытие
function closeBasket() {
  basket.classList.remove('modal');
  basket.classList.add('popup');
}
// открытие 
function openBasket(){
  basket.classList.remove('popup');
  basket.classList.add('modal');
}



// меню

//кнопка 
let butMenu = document.querySelector('.menu_button');
//меню
let menu = document.querySelector('#menu_min');
//обработчик
butMenu.addEventListener('click', menuup);
//открытие
function menuup() {
  menu.classList.remove('popup');
  menu.classList.add('menu_min');
}
// document.body.addEventListener('click', toCloseModal, toCloseBasket, toCloseMenu);
// function toClose(){
//   if(modal.classList.contaits('modal')){
//     toCloseModal()
//   }else if(basket.classList.contaits('basket')){
//     toCloseBasket()
//   }else if (menu.classList.contaits('menu_min')){
//     toCloseMenu()
//   }
// }
// function toCloseModal(event){
//   if(!event.target.closest('modal')){
//     menu_min.classList.remove('modal');
//     menu_min.classList.add('popup');
//   }
// }
// function toCloseBasket(event){
//   if(!event.target.closest('basket')){
//     menu_min.classList.remove('basket');
//     menu_min.classList.add('popup');
//   }
// }
// function toCloseMenu(event){
//   if(!event.target.closest('menu_min')){
//     menu_min.classList.remove('menu_min');
//     menu_min.classList.add('popup');
//   }
// }





