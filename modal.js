//Isak
const popup = document.querySelector('.popup');
const openPopups = document.querySelectorAll('.openPopup');
const closePopups = document.querySelectorAll('.closePopup');
const popupTitle = document.querySelector('.popupTitle');
const popupDescription = document.querySelector('.popupDescription');//Skapar mina klasser i Javascript, Isak

openPopups.forEach((openPopup, index) => {
    openPopup.addEventListener('click', () => {
        popup.showModal();
        const Title={
            0:["Promenad runt Växjösjön"],
            1:["Bingo"],
            2:["Baka"],
            3:["Golf"],
            4:["Händelse"]
        };
        const text={
            0:["Promenad runt Växjösjön uppföljt av fika"],
            1:["Bingo med bullar"],
            2:["Baka bullar och sötsaker"],
            3:["Golf för de tålmodiga"],
            4:["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam ratione eaque rerum, et reiciendis delectus, vitae ipsum optio modi quae autem iure voluptatem molestias veritatis placeat perspiciatis! Ducimus, ipsam esse!"]
        };
        popupTitle.textContent=Title[index];
        popupDescription.textContent=text[index];
    });
});//Gör så man kan öppna popupen, visar texten beroende på vliken knapp du trykte på medhjälp av index, Isak

closePopups.forEach((closePopup, index) => {
    closePopup.addEventListener('click', () => {
        popup.close();
    });
});//Stänger ned popupen,Isak