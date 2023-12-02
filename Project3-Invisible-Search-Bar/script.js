const searchbar = document.querySelector('.search-bar.hidden')
const btn = document.querySelector('.btn')

btn.addEventListener('click' , () => {
    searchbar.classList.toggle('hidden')
})