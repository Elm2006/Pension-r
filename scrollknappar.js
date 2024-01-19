//Sean
const uppknapp = document.querySelector('.uppknapp');
const nerknapp = document.querySelector('.nerknapp')
const container = document.querySelector('.container')

uppknapp.addEventListener('click', () => {
    container.scroll({
        top: 0,
        behavior: "smooth"
    })
})

nerknapp.addEventListener('click', () => {
    container.scroll({
        top: 100000,
        behavior: "smooth"
    })
})