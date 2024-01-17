const popup = document.querySelector('.popup');
const openPopup = document.querySelector('.openPopup')
const closePopup = document.querySelector('.closePopup');
const popupDescription = document.querySelector('.popupDescription');
const popupTitle =  document.querySelector('.popupTitle');
openPopup.addEventListener('click', () => {
    popup.showModal();
});
closePopup.addEventListener('click', () => {
    popup.close();
});
const eventsText={
    1:["Cykla runt växjösjön"],
    2:["Bingo med Berra"],
 };
const eventsTitle={
1:["Cykling"],
2:["Bingo"],
};
function event2(){
    n=2;
    const title = eventsTitle[n];
    const text=eventsText[n];
    popupTitle.textContent=title;
    popupDescription.textContent=text;
};
function event1(){
    n=1;
    const title = eventsTitle[n];
    const text=eventsText[n];
    popupTitle.textContent=title;
    popupDescription.textContent=text;
};
