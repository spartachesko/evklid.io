document.querySelector(".burger").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.add("active");
})
document.querySelector(".nav__close").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.remove("active");
})

document.querySelector(".faq__item__top").addEventListener("click", function() {
  document.querySelector(".faq__item__top__btn").classList.add("active");
})

document.querySelector(".faq__item__top").addEventListener("click", function() {
  document.querySelector(".faq__item__top__btn").classList.remove("active");
})

document.querySelector(".faq__item__top__btn").addEventListener("click", function() {
  document.querySelector(".faq__item__top__btn").classList.add("active");
})

document.querySelector(".faq__item__top").addEventListener("click", function() {
  document.querySelector(".faq__item__top__btn").classList.remove("active");
})

