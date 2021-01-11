//init main swiper
var swiper = new Swiper('.intro__container', {
  speed: 500,
  loop: true,
  navigation: {
    nextEl: '.intro-button-next',
    prevEl: '.intro-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

//init watched swiper
var swiper = new Swiper('.watched__container', {
  slidesPerView: 4,
  spaceBetween: 24,
  speed: 500,
  loop: true,
  navigation: {
    nextEl: '.watched-button-next',
    prevEl: '.watched-button-prev',
  },
  // pagination: {
  //   el: '.swiper-pagination',
  //   type: 'bullets',
  //   clickable: true,
  // },
});


//dropdown function
function dropDown(toggle, list){
  toggle.forEach((toggle, toggleIndex) => {
    toggle.addEventListener('click', () => {
      list.forEach((list, listIndex) => {
        if(listIndex === toggleIndex){
          list.classList.toggle('show')
          toggle.classList.toggle('arrow--active')
        }
      })
    })
  })
}

// dropdown footer
let footerToggle = document.querySelectorAll('.footer__dropdown')
let footerList = document.querySelectorAll('.footer__nav-list')

if(footerToggle && footerList){
  dropDown(footerToggle, footerList)
}

//dropdown sidebar
let sidebarToggle = document.querySelectorAll('.sidebar__element-title')
let sidebarList = document.querySelectorAll('.sidebar__element-wrapper')

if(sidebarToggle && sidebarList){
  dropDown(sidebarToggle, sidebarList)
}

//counter cards
let counterContainer = document.querySelectorAll('.products__card-counter')

counterContainer.forEach(container => {
  let counterPlus = container.querySelector('.products__card-counter-plus')
  let counterMinus = container.querySelector('.products__card-counter-minus')
  let counterNum = container.querySelector('.products__card-counter-num')
  let counter = 0

  counterPlus.addEventListener('click', plus)
  counterMinus.addEventListener('click', minus)

  function plus() {
    counter++
    counterNum.textContent = counter
  }

  function minus() {
    counter--
    if(counter <= 0){
      counter = 0
    }
    counterNum.textContent = counter
  }
})