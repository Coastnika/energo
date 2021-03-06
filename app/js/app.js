//init main swiper
if (document.querySelector('.intro__container')) {
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
}
//init watched swiper
if (document.querySelector('.watched__container')) {

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

}

//init about swiper
if (document.querySelector('.certificates__container')) {
  var swiper = new Swiper('.certificates__container', {
    spaceBetween: 20,
    speed: 500,
    loop: true,
    slidesPerView: 4,
    navigation: {
      nextEl: '.certificates-button-next',
      prevEl: '.certificates-button-prev',
    },
  });
}


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

let passwordTrigger = document.querySelector('.settings-password')
let passwordContent = document.querySelector('.change-password')
let passwordClose = document.querySelector('.change-password__backdrop')

if (passwordTrigger && passwordContent) {
  showModal(passwordTrigger, passwordContent, passwordClose, '.change-password__content')
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

//popup login-register
document.querySelector('.fixed__login-link').onclick = e => {
  e.preventDefault()
}

let registerTrigger = document.querySelector('.fixed__login-link')
let registerContent = document.querySelector('.register')
let registerClose = document.querySelector('.register__form-close')

if (registerTrigger) {
  showModal(registerTrigger, registerContent, registerClose, '.register__container')
}


let profileTrigger = document.querySelector('.client__download-link')
let profileContent = document.querySelector('.profile')
let profileClose = document.querySelector('.profile__close')

if (profileTrigger) {
  showModal(profileTrigger, profileContent, profileClose, '.profile__content')
}



let loginTrigger = document.querySelector('.login-trigger')
let loginContent = document.querySelector('.login')
let loginClose = document.querySelector('.register__form-close-login')

if (loginTrigger) {
  loginTrigger.onclick = () => {
    registerContent.classList.add('hide')
  }
  showModal(loginTrigger, loginContent, loginClose, '.register__container')
}

let register2 = document.querySelector('.register-trigger')
if (register2) {
  register2.onclick = () => {
    loginContent.classList.add('hide')
  }
  if (registerTrigger) {
    showModal(register2, registerContent, registerClose, '.register__container')
  }
}

let registerMobileTrigger = document.querySelector('.register__mobile-trigger')

if (registerMobileTrigger) {
  registerMobileTrigger.onclick = () => {
    registerContent.classList.add('hide')
  }
  showModal(registerMobileTrigger, loginContent, loginClose, '.register__container')
}

let loginMobileTrigger = document.querySelector('.register__mobile-trigger-login')

if (registerMobileTrigger) {
  loginMobileTrigger.onclick = () => {
    loginContent.classList.add('hide')
  }
  showModal(loginMobileTrigger, registerContent, registerClose, '.register__container')
}


let callbackTrigger = document.querySelectorAll('.infoCall')
let callbackContent = document.querySelector('.popup-callback')
let callbackClose = document.querySelector('.popup-callback__close')

if (callbackTrigger) {
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

let modalEditTrigger = document.querySelectorAll('.five-list__toggle')
let modalEditContent = document.querySelector('.modal-edit')
let modalEditClose = document.querySelector('.modal-edit-button')

if (modalEditTrigger && modalEditClose && modalEditContent) {
  modalEditTrigger.forEach(trigger => {
    trigger.addEventListener('click', () => {
      modalEditContent.classList.remove('hide')
    })
  })

  modalEditClose.addEventListener('click', () => {
    modalEditContent.classList.add('hide')
  })

  modalEditContent.addEventListener('click', (e) => {

    if (!e.target.closest('.modal-edit__content')) {
      modalEditContent.classList.add('hide')
    }
  })
}


let fastOrderTrigger = document.querySelector('.fixed__mail-link')
let fastOrderContent = document.querySelector('.fast-order')
let fastOrderClose = document.querySelector('.fast-order__close')

if (fastOrderTrigger) {
  showModal(fastOrderTrigger, fastOrderContent, fastOrderClose, '.fast-order__content')
}





//custom select

let selectTitle = document.querySelectorAll('.custom__select-title')
let selectContent = document.querySelectorAll('.custom__select-content')
let selectText = document.querySelectorAll('.custom__select-text')
let selectCustom = document.querySelectorAll('.custom__select')

selectContent.forEach((content, contentIndex) => {
  let select = content.querySelectorAll('.custom__select-text')

  content.addEventListener('click', function (e) {

    select.forEach(item => {
      item.classList.remove('hide')
    })
    e.target.classList.add('hide')

    if (e.target != this) {
      selectTitle.forEach((title, titleIndex) => {
        if (titleIndex == contentIndex) {
          title.textContent = e.target.textContent
        }
        if (titleIndex == contentIndex && title.textContent.toLowerCase() == 'активен') {
          title.classList.add('custom__select-title--green')
          title.classList.remove('custom__select-title--grey')
          console.log('active')
        }
        else if (titleIndex == contentIndex && title.textContent.toLowerCase() == 'неактивен') {
          title.classList.add('custom__select-title--grey')
          title.classList.remove('custom__select-title--green')
          console.log('inactive')
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
      formInputs.forEach(input => {
        //Проверяем на наличие пустой строки
        if (input.value.trim() == '') {
          e.preventDefault()
          input.classList.add('input-error')
        }
        else {
          //e.preventDefault()
        }
      })

      if (customSelect) {
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
if (counterContainer) {
  counters(counterContainer, 1)
}


//counter shortcard
let counterShortContainer = document.querySelectorAll('.products-shortcard__counterп')
if (counterShortContainer) {
  counters(counterShortContainer, 0)
}

function counters(container, count) {
  container.forEach(container => {
    let counterPlus = container.querySelector('.products__card-counter-plus')
    let counterMinus = container.querySelector('.products__card-counter-minus')
    let counterNum = container.querySelector('.products__card-counter-num')
    let inputValue = count;

    counterNum.addEventListener('input', () => {
      inputValue = +counterNum.value
    })

    counterPlus.addEventListener('click', plus)
    counterMinus.addEventListener('click', minus)

    function plus() {
      inputValue++
      counterNum.value = inputValue
    }

    function minus() {
      inputValue--

      if (inputValue <= 0) {
        inputValue = 0
      }
      counterNum.value = inputValue
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
if (counterShortContainer) {
  counterShortContainer.forEach(container => {
    let shortCardMinus = container.querySelector('.shortcard-minus')
    let shortCardPlus = container.querySelector('.shortcard-plus')
    let shortCardNum = container.querySelector('.shortcard-value')
    let value = +shortCardNum.value;
    let counter = 0

    shortCardNum.addEventListener('input', () => {
      value = +shortCardNum.value;
      counter++

      if (counter <= 1) {
        counter = +shortCardNum.value
        counterValue++
        cartCounter.textContent = counterValue;
        cartCounter.classList.remove('hide');
      }

      if (shortCardNum.value == '') {
        counterValue--
        cartCounter.textContent = counterValue;
        counter = 0
      }

    })

    shortCardPlus.addEventListener('click', () => {
      value++
      counter++
      if (value > 0 && value < 2) {
        counterValue++
        cartCounter.textContent = counterValue;
        cartCounter.classList.remove('hide');
      }
    })

    shortCardMinus.addEventListener('click', () => {
      value--
      counter--

      if (counter <= 0) {
        counter = 0
      }

      if (value <= 0) {
        value = 0
      }

      if (+shortCardNum.value == 0) {
        counterValue--
        if (counterValue <= 0) {
          counterValue = 0
        }
        cartCounter.textContent = counterValue;
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

// inputs headline
let inputsContainer = document.querySelectorAll('.form-input')

if (inputsContainer) {
  inputsContainer.forEach(container => {
    let inputHeadline = container.querySelector('.input-headline')

    if (inputHeadline) {
      let headlineText = inputHeadline.placeholder

      let headlineElem = document.createElement('div')

      headlineElem.textContent = headlineText
      headlineElem.classList.add('headline-elem')
      container.appendChild(headlineElem)

      inputHeadline.addEventListener('click', function (e) {
        headlineElem.style.display = "block"
        this.classList.add('input-headline--active')

      })

      window.addEventListener('click', function (e) {
        if (inputHeadline.value == '' && e.target != inputHeadline) {
          inputHeadline.classList.remove('input-headline--active')
          headlineElem.style.display = "none"
        }
      })
    }
  })
}


// buttons-sent

let buttonsDetail = document.querySelector('.buttons-details');
let buttonFile = document.querySelector('.button-details');

let buttonInfo = document.querySelector('.details__info-hide');
let buttonInfoManager = document.querySelector('.details__info-manager');

$('.button-manager').on('click', () => {
  buttonsDetail.hidden = true;
  buttonInfoManager.classList.remove('hide')
})

function uploadFile() {
  let file = document.querySelector('#file_btn')

  if (file.files.length > 0) {
    document.querySelector('.buttons-details').classList.add('hide')
    document.querySelector('.details__check').classList.remove('hide')
  }

}

$('#file_btn').on('input', uploadFile)

//show slider-modal
let boxModal = document.querySelector('.box-modal')
let boxImage = document.querySelectorAll('.certificates__item-image')

if (boxImage) {
  boxImage.forEach((item, index) => {
    item.setAttribute('data-index', index)
    console.log(item)
  })
}

let counter = 0

$('.certificates__container').on('click', e => {
  let { type, index } = e.target.dataset

  if (type == 'image') {
    let src = e.target.getAttribute('src')
    $('.box-modal').removeClass('hide')
    $('.box-modal__image').attr('src', src)
    $('.certificates-button').css('position', 'fixed')
    $('.certificates-button-prev').css('left', '450px')
    $('.certificates-button-next').css('right', '450px')

    counter = index
  }

  else if (type == 'next') {
    if (counter >= boxImage.length - 1) {
      counter = 0
    }
    counter++
    let src = boxImage[counter].getAttribute('src')
    $('.box-modal__image').attr('src', src)
  }

  else if (type == 'prev') {
    if (counter <= 0) {
      counter = boxImage.length
    }
    counter--
    let src = boxImage[counter].getAttribute('src')
    $('.box-modal__image').attr('src', src)
  }

})

//close slider-modal
$('.box-modal').on('click', e => {
  let { type } = e.target.dataset


  if (type == 'close') {
    $('.box-modal').addClass('hide')
    $('.certificates-button').css('position', 'absolute')
    $('.certificates-button-prev').css('left', '135px')
    $('.certificates-button-next').css('right', '135px')
  }
})


// profile-popup type person  // *** cabinet_USER-Client_DetalPage.html ***
$('.profile__content').on('click', e => {
  const { type } = e.target.dataset
  const text = e.target.textContent.toLocaleLowerCase()

  if (type == 'option' && text == 'юридическое лицо') {
    $('#profile-company').removeClass('hide')
    $('#profile-inn').removeClass('hide')
    $('#profile-city').removeClass('hide')
  }
  else if (type == 'option' && text == 'физическое лицо') {
    $('#profile-company').addClass('hide')
    $('#profile-inn').addClass('hide')
    $('#profile-city').addClass('hide')
  }
})

// price list dropdown
$('.price__download-btn').on('click', () => {
  $('.price__sub').toggleClass('hide');
  $('.price__content').toggleClass('hide');
})

$('.price__reload-btn').on('click', () => {
  $('.price__checkbox').addClass('hide');
  $('.price__reload-btn').addClass('hide');
  $('.price__download-error').css('display', 'block');
  $('.requisites__upload-text').css('color', '#EB5757');
})


$('.price__pricelist-content').on('input', function (e) {
  let buttonRecognized = this.querySelector('.checkbox-number__recognized')
  let buttonUnrecognized = this.querySelector('.checkbox-number__unrecognized')

  let contentRecognized = this.querySelector('.price__pricelist-recognized')
  let contentUnrecognized = this.querySelector('.price__pricelist-unrecognized')

  if (buttonRecognized.checked) {
    contentRecognized.classList.remove('hide')

  }
  else if (buttonRecognized.checked == false) {
    contentRecognized.classList.add('hide')
  }

  if (buttonUnrecognized.checked) {
    contentUnrecognized.classList.remove('hide')

  }
  else if (buttonUnrecognized.checked == false) {
    contentUnrecognized.classList.add('hide')
  }
})

$('.price__pricelist-content').on('click', function (e) {
  let { type } = e.target.dataset

  if (type == 'toggle') {
    let buttonRecognized = this.querySelector('.checkbox-number__recognized')
    let buttonUnrecognized = this.querySelector('.checkbox-number__unrecognized')
    let contentRecognized = this.querySelector('.price__pricelist-recognized')
    let contentUnrecognized = this.querySelector('.price__pricelist-unrecognized')

    if (this.classList.contains('price__pricelist__item--active')) {
      this.classList.remove('price__pricelist__item--active')
      contentRecognized.classList.add('hide')
      contentUnrecognized.classList.add('hide')
      buttonRecognized.checked = false
      buttonUnrecognized.checked = false
    }
    else if (!this.classList.contains('price__pricelist__item--active')) {
      this.classList.add('price__pricelist__item--active')
      contentRecognized.classList.remove('hide')
      buttonRecognized.checked = true
    }
  }
})

//price list table dropdown
let tableToggle = document.querySelectorAll('.table__toggle')
let tableContent = document.querySelectorAll('.price__pricelist__subs')

if (tableToggle && tableContent) {
  tableToggle.forEach((item, index) => {
    item.setAttribute('data-index', index)
  })

  tableContent.forEach((item, index) => {
    item.setAttribute('data-index', index)
  })
}

$('.table__toggle').on('click', function (e) {
  let indexItem = +this.dataset.index

  $(this).toggleClass('table__toggle--active')

  $('.price__pricelist__subs').each(function (index) {
    if (indexItem == index) {
      $(this).toggleClass('hide')
    }
  })
})

// new-person ** cabinet_Manager-Structure_Catalog.html **
$('.settings__btn-add').on('click', () => {
  $('.settings__new').removeClass('hide');
  $('.settings__btn-add').addClass('hide');
})

$('.button-settings-cancel').on('click', () => {
  $('.settings__new').addClass('hide');
  $('.settings__btn-add').removeClass('hide');
})




// make template
$('.make-template').on('click', () => {
  $('.template__notification').toggleClass('hide')
  $('.template__content').toggleClass('hide')
})

//dropdown template 

let templateEdit = document.querySelectorAll('.template__edit')
let templateSubmit = document.querySelectorAll('.template__calculator-submit')

if (templateSubmit && templateEdit) {
  templateEdit.forEach((item, index) => {
    item.setAttribute('data-index', index)
  })

  templateSubmit.forEach((item, index) => {
    item.setAttribute('data-index', index)
  })
}

// change template
$('.template__edit').on('click', function () {
  let index = +this.getAttribute('data-index')

  document.querySelectorAll('.template__calculator')[index].classList.toggle('hide')
  console.log(document.querySelectorAll('.template__calculator')[index])
})

$('.template__calculator-submit').on('click', function () {
  let index = +this.getAttribute('data-index')

  document.querySelectorAll('.template__calculator')[index].classList.add('hide')
})

// template case
let modalkeyTrigger = document.querySelector('.template__calculator-toggle')
let modalkeyContent = document.querySelector('.modal-key')
let modalkeyClose = document.querySelector('.modal-key__close')

$('.template__calculator-toggle').on('click', function () {
  $('.modal-key').removeClass('hide')
})


$('.modal-key__close').on('click', function () {
  $('.modal-key').addClass('hide')
})


$('.modal-key__backdrop').on('click', function () {
  $('.modal-key').addClass('hide')
})


$('.modal-key__label').on('click', function () {
  $('.modal-key__wrapper-hide').css('visibility', 'visible')
})


// radio validate

$('.modal-key__form').validate({
  errorClass: 'radio-validate--error',
  messages: {
    key: '',
    postfix: '',
  }
})

$('.form-radio').on('input', function () {
  $('.radio').removeClass('radio-validate--error')
})


// search

// $( "#mr_search" ).autocomplete({
//   source: function(request, response){

//       v = request.term.trim().toLowerCase();

//       data = [];

//       console.log("autocomplete v="+v);
//       limit = $( "#mr_search" ).data('limit')?$( "#mr_search" ).data('limit'):5;

//       console.log("SEARCH: "+v);
//       $.get("/search/cable/?q="+v + '&limit='+limit+'&agg=1').done(function(data) 	{
//           if (data.length==0)
//           {
//               data = [{'real_name':'<i style="font-style:italic !important">Введите название марки, например ААБ2л 1x10</i>', 'power':'', 'p_id':0}];
//           }
//           search_res = data;
//           response(data);
//       });

//   },

//   //Клик по выбранному элементу
//   select: function(event, ui){
//       event.preventDefault();
//       event.stopPropagation();

//       if (ui.p_id > 0)
//           $( "#mr_search" ).val(ui.real_name);
//       redirectToSearchRes(ui.item);
//   },

//   minLength: 2,
//   appendTo : '#search_cable',
//   open: function () {
//       //console.log($(this).data("uiAutocomplete").menu.element[0].className);
//       $(this).data("uiAutocomplete").menu.element.addClass("autocomplete2");
//       //$(this).data("uiAutocomplete").menu.element[0].className = "autocomplete2";
//       //console.log($(this).data("uiAutocomplete").menu.element[0].className);
//   }
// }).autocomplete("instance")._renderItem = function( ul, item ) {

//   return $( "<li>" )
//       .append( '<span class="autocomplete2-item"><em style="font-style:normal">' + item.real_name+'</em>' + item.power + "</span>" )
//       .appendTo( ul );
// };

$(function () {

  let cabels = ["АВВГ", "АВВГ 2х10", "АВВГ 2х16", "АВВГ 2х250", "АВВГ 2х12",
    "АВВГ 2х18", "АВВГ 2х121", "АВВГ 2х230", "АВВГ 2х150", "АВВГ 2х11"];

  $('.input-dashed').autocomplete({
    source: cabels
  })
});


// form-structure

$('.form-list').on('click', function (e) {
  let { type } = e.target.dataset

  if (type == 'toggle') {
    toggleList(e)
  }
})

$('.form-list').on('input', function (e) {
  toggleCheckbox(e)
})

// toggle lists
function toggleList(e) {
  let parentNode = e.target.parentNode
  let nextElem = parentNode.nextElementSibling

  e.target.classList.toggle('list-toggle--active')
  nextElem.classList.toggle('hide')
}

// toggle checkboxes
let toggleCheckbox = function (e) {
  if (!e.target.classList.contains('no-list__checkbox')) {
    let parentNode = e.target.parentNode
    let nextElem = parentNode.nextElementSibling
    let checkboxes = nextElem.querySelectorAll('.checkbox')

    if (e.target.checked == true) {
      checkboxes.forEach(element => {
        element.checked = true
      })
    }

    else {
      checkboxes.forEach(element => {
        element.checked = false
      })
    }
  }
}

let actionsTrigger = document.querySelector('.structure__actions-title')
let actionsContent = document.querySelector('.mass-actions')
let actionsClose = document.querySelector('.mass-actions__backdrop')

if (actionsTrigger && actionsContent) {
  showModal(actionsTrigger, actionsContent, actionsClose, '.mass-actions__content')
}

$('.structure__actions-title').on('click', function () {
  $('.structure__actions-title').toggleClass('structure__actions-title--active')
})

$('.mass-actions-btn').on('click', function () {
  $('.structure__actions-title').removeClass('structure__actions-title--active')
})

$('.mass-actions__backdrop').on('click', function () {
  $('.structure__actions-title').removeClass('structure__actions-title--active')
})


