//Sean
const uppknapp = document.querySelector('.uppknapp') //Skapar en konstant med ett värde av hela html elementet från klassen uppknapp
const nerknapp = document.querySelector('.nerknapp') //Skapar en konstant med ett värde av hela html elementet från klassen nerknapp
const container = document.querySelector('.container') //Skapar en konstant med ett värde av hela html elementet från klassen container

uppknapp.addEventListener('click', () => { //Event listener:n "lyssnar" efter klick på konstanten uppknapp som då har värdet av html elementet från klassen uppknapp, alltså att den väntar tills man klickar på knappen
    container.scroll({ //När man klickar på knappen så ska konstanten container med värdet av hela html elementet från klassen container scrolla
        top: 0, //Den scrollar upp tills top har ett värde av 0, alltså att den är längst upp inom main
        behavior: "smooth" //Gör så att scroll animationen scrollar uppåt på ett fint och vänligare sätt
    })
})

nerknapp.addEventListener('click', () => { //Event listener:n "lyssnar" efter klick på konstanten nerknapp som då har värdet av html elementet från klassen nerknapp
    container.scroll({ //När man klickar på knappen så ska konstanten container med värdet av hela html elementet från klassen container scrolla
        top: 100000,//Den scrollar upp tills top har ett värde av 100000, alltså att den är längst ner inom main
        behavior: "smooth"
    })
})