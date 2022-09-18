const openPopUp = document.getElementById('open_search_pop_up')
const closePopUp = document.getElementById('search_pop_up_close')
const popUp = document.getElementById('search_pop_up')
const body = document.body

// reesters

const modal = document.querySelector('.modal-content')
modal.addEventListener('click', function (e) {
  if (modal.classList.contains('show')) {
    e.classList.remove('show')
    document.body.style.overflow = 'auto'
  } else {
    return modal
  }
})

// const modalWindow = document.querySelector('modal-content')
// modalWindow.addEventListener('click', function () {
//   modalWindow.classList.remove('.show')
//   document.body.style.overflow = 'auto'
// })

// modal window of search
openPopUp.addEventListener('click', function (e) {
  e.preventDefault()
  popUp.classList.add('active')
  body.classList.add('no-overflow')
})

closePopUp.addEventListener('click', function () {
  popUp.classList.remove('active')
  body.classList.remove('no-overflow')
})

// закрытие по фейду
popUp.addEventListener('click', function () {
  popUp.classList.remove('active')
  body.classList.remove('no-overflow')
})

popUp.querySelector('.pop_up_body').addEventListener('click', function (e) {
  e.stopPropagation()
})
