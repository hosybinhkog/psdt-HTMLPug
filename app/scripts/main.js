const btnMenuMobile = document.querySelector('.icon-menu')

const menu = document.querySelector('.header-menu')

btnMenuMobile.addEventListener('click',()=>{
    menu.classList.toggle('is-active')
})


document.addEventListener('click',(e)=>{
    if (!menu.contains(e.target) && !e.target.matches(".icon-menu")) {
        menu.classList.remove("is-active");
      }
})