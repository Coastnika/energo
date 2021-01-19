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

  breakpoints: {
    480: {
      slidesPerView: 4,
    }
  },
  slidesPerView: 1,
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

//dropdown mobile-menu
let mobileSubmenuToggle = document.querySelectorAll('.mobile-menu__dropdown')
let mobileSubmenuContent = document.querySelectorAll('.mobile-menu__content')

if (mobileSubmenuToggle && mobileSubmenuContent) {
  dropDown(mobileSubmenuToggle, mobileSubmenuContent)
}

// dropdown footer
let footerToggle = document.querySelectorAll('.footer__dropdown')
let footerList = document.querySelectorAll('.footer__nav-list')

if (footerToggle && footerList) {
  dropDown(footerToggle, footerList)
}






/// card-info
let infoTitle = document.querySelectorAll('.card-info__title')
let infoWrap = document.querySelectorAll('.card-info__text-wrap')
let infoTitles = document.querySelector('.card-info__titles')
let selected

if (infoTitle) {
  infoTitle.forEach(item => {
    item.addEventListener('click', () => {
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
  if (infoTitles) {
    infoTitles.addEventListener('click', e => {
      let target = e.target

      if (!target.classList.contains('card-info__title')) return;

      highlights(target)
    })
  }
}

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


//dropdown card-info-mobile

let mobileToggle = document.querySelectorAll('.card-info__mobile-content-title')
let mobileList = document.querySelectorAll('.card-info__text-wrap')

if (mobileToggle) {
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

let mobileToggleOthers = document.querySelectorAll('.card-info__mobile-content-title')
let mobileListOthers = document.querySelectorAll('.card-info__text-content')

if (mobileToggleOthers) {
  mobileToggleOthers.forEach(item => {
    item.addEventListener('click', () => {
      mobileListOthers.forEach(table => {
        if (item.getAttribute('tab-index') == table.getAttribute('tab-index')) {
          table.classList.toggle('hide')
          item.classList.toggle('arrow--active')
        }
      })
    })
  })
}


//function show modal
function showModal(trigger, content, close, closestParent) {
  trigger.addEventListener('click', () => {
    content.classList.remove('hide')
  })
  close.addEventListener('click', () => {
    content.classList.add('hide')
  })

  content.addEventListener('click', (e) => {
    if (!e.target.closest(closestParent)) {
      content.classList.add('hide')
    }
  })
}

let mobileMenuTrigger = document.querySelector('.header__toggle')
let mobileMenuContent = document.querySelector('.mobile-menu')
let mobileMenuClose = document.querySelector('.mobile-menu__close')

if (mobileMenuTrigger) {
  showModal(mobileMenuTrigger, mobileMenuContent, mobileMenuClose, '.mobile-menu')
}

let calculatorWeightTrigger = document.querySelector('#calculatorWeight')
let calculatorWeightContent = document.querySelector('.calculator-weight')
let calculatorWeightClose = document.querySelector('.calculator-weight__close')

if (calculatorWeightTrigger) {
  showModal(calculatorWeightTrigger, calculatorWeightContent, calculatorWeightClose, '.calculator-weight__content')
}

let calculatorLightTrigger = document.querySelector('#calculatorLight')
let calculatorLightContent = document.querySelector('.calculator-light')
let calculatorLightClose = document.querySelector('.calculator-light__close')

if (calculatorLightTrigger) {
  showModal(calculatorLightTrigger, calculatorLightContent, calculatorLightClose, '.calculator-light__content')
}

let calculatorDeliveryTrigger = document.querySelector('#calculatorDelivery')
let calculatorDeliveryContent = document.querySelector('.calculator-delivery')
let calculatorDeliveryClose = document.querySelector('.calculator-delivery__close')

if (calculatorDeliveryTrigger) {
  showModal(calculatorDeliveryTrigger, calculatorDeliveryContent, calculatorDeliveryClose, '.calculator-delivery__content')
}

let callbackTrigger = document.querySelectorAll('.infoCall')
let callbackContent = document.querySelector('.popup-callback')
let callbackClose = document.querySelector('.popup-callback__close')

if (callbackTrigger) {
  // showModal(callbackTrigger, callbackContent, callbackClose, '.popup-callback__content')
  callbackTrigger.forEach(trigger => {
    trigger.addEventListener('click', () => {
      callbackContent.classList.remove('hide')
    })
  })
  callbackClose.addEventListener('click', () => {
    callbackContent.classList.add('hide')
  })

  callbackContent.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-callback__content')) {
      callbackContent.classList.add('hide')
    }
  })
}

//custom select

let selectTitle = document.querySelectorAll('.custom__select-title')
let selectContent = document.querySelectorAll('.custom__select-content')
let selectText = document.querySelectorAll('.custom__select-text')
let selectCustom = document.querySelectorAll('.custom__select')

selectContent.forEach((content, contentIndex) => {
  content.addEventListener('click', function (e) {
    if (e.target != this) {
      selectTitle.forEach((title, titleIndex) => {
        if (titleIndex == contentIndex) {
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
  title.addEventListener('click', function () {
    selectContent.forEach((content, contentIndex) => {
      if (titleIndex == contentIndex) {
        content.classList.toggle('hide')
      }
      else {
        content.classList.add('hide')
      }
    })
    selectCustom.forEach((select, selectIndex) => {
      if (titleIndex == selectIndex) {
        select.classList.toggle('custom__select--active')
      }
      else {
        select.classList.remove('custom__select--active')
      }
    })
    selectTitle.forEach((select, selectIndex) => {
      if (titleIndex == selectIndex) {
        select.classList.toggle('custom__select-title--active')
      }
      else {
        select.classList.remove('custom__select-title--active')
      }
    })
  })
})


document.addEventListener('click', e => {
  if (!e.target.closest('.custom__select-content') && !e.target.closest('.custom__select-title')) {
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

//Phone mask

var elements = document.getElementsByClassName('input-phone');
for (var i = 0; i < elements.length; i++) {
  new IMask(elements[i], {
    mask: '+{7} (000) 000-00-00',
  });
}

let phoneInputs = document.querySelectorAll('.input-phone')

phoneInputs.forEach(phone => {
  phone.addEventListener('keypress', function (e) {
    if (this.value.length == 0 && e.key == 8) {
      e.preventDefault()
      this.value += '+7 '
    }
  })
})


//valid form

// validation Form
let form = document.querySelectorAll('.form')

let formSubmits = document.querySelectorAll('.form__payer button[type="submit"]')
let errorText = document.querySelectorAll('.input-error-text')

form.forEach(form => {
  let formInputs = form.querySelectorAll('.input-valid')
  let submit = form.querySelectorAll('.submit')
  let customSelect = form.querySelectorAll('.custom__select')

  submit.forEach(submit => {
    submit.addEventListener('click', (e) => {
      e.preventDefault()
      formInputs.forEach((input, inputIndex) => {
        //Проверяем на наличие пустой строки
        if (input.value.trim() == '') {
          input.classList.add('input-error')
          errorText.forEach((text, textIndex) => {
            if (inputIndex == textIndex) {
              text.classList.add('input-error-text--active')
            }
          })
        }
        else {
          return false
          //Асинхронная отправка формы
        }
      })

      if(customSelect){
        customSelect.forEach(select => {
          if (select.querySelector('.custom__select-title').textContent == "Тип объекта") {
            select.classList.add('input-error')
          }
        })
      }
    })
  })
})

let customSelect = document.querySelectorAll('.custom__select')
customSelect.forEach(select => {
  select.addEventListener('click', () => {
    select.classList.remove('input-error')
  })
})

let formInputs = document.querySelectorAll('.input-valid')
//Убираем класс error если пользователь начал ввод
formInputs.forEach((input, inputIndex) => {
  input.addEventListener('input', () => {
    input.classList.remove('input-error')
    errorText.forEach((text, textIndex) => {
      if (textIndex == inputIndex) {
        text.classList.remove('input-error-text--active')
      }
    })
  })
})

//scroll
$(document).ready(function () {
  if (!$(".to-top").length) {
    $("body").prepend('<div id="totop"></div>');
  }

  $(document).on('click', '.to-top', function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 900);
  });
})


//counter cards

let counterContainer = document.querySelectorAll('.products__card-counter')
if(counterContainer){
  counters(counterContainer, 1)
}


//counter shortcard
let counterShortContainer = document.querySelectorAll('.products-shortcard')
if(counterShortContainer){
  counters(counterShortContainer, 0)
}

function counters(container, count){
  container.forEach(container => {
    let counterPlus = container.querySelector('.products__card-counter-plus')
    let counterMinus = container.querySelector('.products__card-counter-minus')
    let counterNum = container.querySelector('.products__card-counter-num')
    let counter = count
  
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
}



// card-buttons-logic 
let buttonBuy = document.querySelectorAll('.button-buy')
let cartCounter = document.querySelector('.fixed__cart-counter')

let counterValue = 0;

if (buttonBuy) {
  buttonBuy.forEach(button => {
    button.addEventListener('click', function () {
      let value = 0;
      let buttonsContainer = this.closest('.products__wrapper')

      if (buttonsContainer) {
        let buttonCart = buttonsContainer.querySelector('.button-cart')

        this.classList.add('hide')
        buttonCart.classList.remove('hide')
      }

      cartCounter.classList.remove('hide');
      value++
      counterValue += value
      cartCounter.textContent = counterValue;
    })
  })
}

//shortcard logic
if(counterShortContainer){
  counterShortContainer.forEach(container => {
    let shortCardMinus = container.querySelector('.shortcard-minus')
    let shortCardPlus = container.querySelector('.shortcard-plus')
    let value = 0;

    shortCardPlus.addEventListener('click', () => {
      value++
      if(value >= 0 && value < 2){
        cartCounter.classList.remove('hide');
        counterValue++
        cartCounter.textContent = counterValue
      }
    })

    shortCardMinus.addEventListener('click', () => {
      value -- 
      if(value == 0){
        counterValue--
        cartCounter.textContent = counterValue
      }
      if(counterValue == 0) {
        cartCounter.classList.add('hide');
      }
    })
  })
}

//dropdown sidebar
let sidebarToggle = document.querySelectorAll('.sidebar__element-title')
let sidebarList = document.querySelectorAll('.sidebar__element-wrapper')

if (sidebarToggle && sidebarList) {
  dropDown(sidebarToggle, sidebarList)
}

if (sidebarList) {
  if (innerWidth < 540) {
    sidebarList[0].classList.remove('show')
  }

}
