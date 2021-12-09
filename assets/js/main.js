// Search input
const search_input_btn      = document.getElementById('search-input-btn')
const search_input = document.querySelector('.search-input');

search_input_btn.addEventListener('click', () => {
    search_input.classList.toggle('search-input-visible')
});