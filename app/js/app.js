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
function dropDown(toggle, list) {
  toggle.forEach((toggle, toggleIndex) => {
    toggle.addEventListener('click', () => {
      list.forEach((list, listIndex) => {
        if (listIndex === toggleIndex) {
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

if (footerToggle && footerList) {
  dropDown(footerToggle, footerList)
}

//dropdown sidebar
let sidebarToggle = document.querySelectorAll('.sidebar__element-title')
let sidebarList = document.querySelectorAll('.sidebar__element-wrapper')

if (sidebarToggle && sidebarList) {
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
    if (counter <= 0) {
      counter = 0
    }
    counterNum.textContent = counter
  }
})

/// card-info
let infoTitle = document.querySelectorAll('.card-info__title')
let infoWrap = document.querySelectorAll('.card-info__text-wrap')
let infoTitles = document.querySelector('.card-info__titles')
let selected

if(infoTitle){
  infoTitle.forEach(item => {
    item.addEventListener('click', () => {
      console.log('1')
      infoWrap.forEach(table => {
        if (item.getAttribute('tab-index') == table.getAttribute('tab-index')) {
          table.classList.remove('hide')
        }
        else {
          table.classList.add('hide')
        }
      })
    })
  })

  // ------ ошибка в коде ------
  // //Подсвечиваем элементы
  // infoTitles.addEventListener('click', e => {
  //   let target = e.target

  //   if (!target.classList.contains('card-info__title')) return;

  //   highlights(target)
  // })

  function highlights(select) {
    if (selected) {
      selected.classList.remove('card-info__title--active')
    }

    infoTitle.forEach(item => {
      item.classList.remove('card-info__title--active')
    })

    selected = select
    selected.classList.add('card-info__title--active')
  }
}

//dropdown card-info

let mobileToggle = document.querySelectorAll('.card-info__mobile-content-title')
let mobileList = document.querySelectorAll('.card-info__text-wrap')

if(mobileToggle){
  mobileToggle.forEach(item => {
    item.addEventListener('click', () => {
      mobileList.forEach(table => {
        if (item.getAttribute('tab-index') == table.getAttribute('tab-index')) {
          table.classList.toggle('hide')
          item.classList.toggle('arrow--active')
        }
      })
    })
  })
}


//function show modal
function showModal(trigger, content, close, closestParent){
  trigger.addEventListener('click', () => {
    content.classList.remove('hide')
  })
  close.addEventListener('click', () => {
    content.classList.add('hide')
  })

  content.addEventListener('click', (e) => {
    if(!e.target.closest(closestParent)){
      content.classList.add('hide')
    }
  })
}

let calculatorWeightTrigger = document.querySelector('#calculatorWeight')
let calculatorWeightContent = document.querySelector('.calculator-weight')
let calculatorWeightClose = document.querySelector('.calculator-weight__close')

if(calculatorWeightTrigger){
  showModal(calculatorWeightTrigger,calculatorWeightContent, calculatorWeightClose, '.calculator-weight__content' )
}

let calculatorLightTrigger = document.querySelector('#calculatorLight')
let calculatorLightContent = document.querySelector('.calculator-light')
let calculatorLightClose = document.querySelector('.calculator-light__close')

if(calculatorLightTrigger){
  showModal(calculatorLightTrigger,calculatorLightContent, calculatorLightClose, '.calculator-light__content' )
}

let calculatorDeliveryTrigger = document.querySelector('#calculatorDelivery')
let calculatorDeliveryContent = document.querySelector('.calculator-delivery')
let calculatorDeliveryClose = document.querySelector('.calculator-delivery__close')

if(calculatorDeliveryTrigger){
  showModal(calculatorDeliveryTrigger,calculatorDeliveryContent, calculatorDeliveryClose, '.calculator-delivery__content' )
}

let callbackTrigger = document.querySelector('#infoCall')
let callbackContent = document.querySelector('.popup-callback')
let callbackClose = document.querySelector('.popup-callback__close')

if(callbackTrigger){
  showModal(callbackTrigger, callbackContent, callbackClose, '.popup-callback__content' )
}

//custom select

let selectTitle = document.querySelectorAll('.custom__select-title')
let selectContent = document.querySelectorAll('.custom__select-content')
let selectText = document.querySelectorAll('.custom__select-text')
let selectCustom = document.querySelectorAll('.custom__select')

selectContent.forEach((content, contentIndex) => {
  content.addEventListener('click', function(e) {
    if(e.target != this){
      selectTitle.forEach((title, titleIndex) => {
        if(titleIndex == contentIndex){
          title.textContent = e.target.textContent
        }
      })
      selectTitle.forEach((select) => {
        select.classList.remove('custom__select-title--active')
      })
      selectCustom.forEach(select => {
        select.classList.remove('custom__select--active')
      })
      
      content.classList.toggle('hide')
    }
  })
})

selectTitle.forEach((title, titleIndex) => {
  title.addEventListener('click', function(){
    selectContent.forEach((content, contentIndex) => {
      if(titleIndex == contentIndex){
        content.classList.toggle('hide')
      }
      else{
        content.classList.add('hide')
      }
    })
    selectCustom.forEach((select, selectIndex) => {
      if(titleIndex == selectIndex){
        select.classList.toggle('custom__select--active')
      }
      else{
        select.classList.remove('custom__select--active')
      }
    })
    selectTitle.forEach((select, selectIndex) => {
      if(titleIndex == selectIndex){
        select.classList.toggle('custom__select-title--active')
      }
      else{
        select.classList.remove('custom__select-title--active')
      }
    })
  })
})


document.addEventListener('click', e => {
  if(!e.target.closest('.custom__select-content') && !e.target.closest('.custom__select-title')){
    selectContent.forEach(content => {
      content.classList.add('hide')
    })
    selectTitle.forEach(select => {
      select.classList.remove('custom__select-title--active')
    })
    selectCustom.forEach(select => {
      select.classList.remove('custom__select--active')
    })
  }
})