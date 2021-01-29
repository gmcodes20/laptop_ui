const nav = document.querySelector('.nav-links');
const harmburger = document.querySelector('.harmburger')
const navList = document.querySelectorAll('.nav-link');
// const line = 


harmburger.addEventListener('click', menuToggle);

function menuToggle(e) {
  console.log(nav)
  nav.classList.toggle('open');
  harmburger.classList.toggle('open')


  e.preventDefault()

}

navList.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    harmburger.classList.remove('open');
  })
})