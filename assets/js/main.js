const openIcon = document.getElementById('open')
const closeIcon = document.getElementById('close')
const menubar = document.querySelector('.left-panel')

function load_events() {
    openIcon.addEventListener('click', openToggle)
    closeIcon.addEventListener('click', closeToggle)
}

if (window.innerWidth < '991') {
    load_events()
}

function openToggle() {
    openIcon.style.display = 'none'
    closeIcon.style.display = 'block'

    menubar.style.transform = 'translateX(0)'
    menubar.style.position = 'fixed'
    document.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            menubar.style.top = '48px'
        } else {
            menubar.style.top = '115px'
        }
    })
}

function closeToggle() {
    closeIcon.style.display = 'none'
    openIcon.style.display = 'block'

    menubar.style.transform = 'translateX(-32rem)'
}