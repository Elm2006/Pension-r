//Sean
const uppknapp = document.querySelector('.uppknapp');
const nerknapp = document.querySelector('.nerknapp')
const main = document.querySelector('.container')

uppknapp.addEventListener('click', () => {
    main.scroll({
        top: 0,
        behavior: "smooth"
    })
})

nerknapp.addEventListener('click', () => {
    main.scroll({
        top: 100000,
        behavior: "smooth"
    })
})