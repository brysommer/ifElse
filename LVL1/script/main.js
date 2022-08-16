const sit = document.querySelector('select[name="sitting"]');
const room = document.querySelector('select[name="room"]');
const fridge = document.querySelector('select[name="fridge"]');
const find = document.querySelector('select[name="find"]');


const run = () => {
    const valueSit = sit.value;
    const valueRoom = room.value;
    const valueFridge = fridge.value;
    const valueFind = find.value;
    if(valueSit === 'getup') {
        console.log('отримали дані');
    }
    console.log(valueSit);
    console.log(valueRoom);
    console.log(valueFridge);
    console.log(valueFind);

};


sit.addEventListener('change', run);
room.addEventListener('change', run);
fridge.addEventListener('change', run);
find.addEventListener('change', run);



const switcher = document.querySelector('.switcher');
const el7 = document.querySelector('.background');



switcher.addEventListener('click', (click) => {

        console.log('Натиснули вимикач');
          
});


const weapon = document.querySelector('.weapon');

weapon.addEventListener('click', (punch) => {
    console.log('Використали зброю');
});


