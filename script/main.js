const sit = document.querySelector('select[name="sitting"]');
const room = document.querySelector('select[name="room"]');
const fridge = document.querySelector('select[name="fridge"]');
const find = document.querySelector('select[name="find"]');


const run = () => {
    const valueSit = sit.value;
    const valueRoom = room.value;
    const valueFridge = fridge.value;
    const valueFind = find.value;

    if(valueSit === 'keepcalm') {
        console.log('Буває й лінь поїсти');
        return;
    };

    if(valueRoom === 'bathroom') {
        console.log('Ви прийняли душ');
        return;
    };

    if(valueRoom === 'toilet') {
        console.log('Сподіваюсь усі справи доведено до кінця');
        return;
    };

    if(valueRoom === 'badroom') {
        console.log('Солодких снів');
        return;
    };

    if(valueFridge === 'close') {
        console.log('Дієта, справа серйозна');
        return;
    };

    if(valueFind === 'check1') {
        console.log('На вас напала миш');
        return;
    };

    if(valueFind === 'check3') {
        console.log('Кефір, це не те що на разі хочеться');
        return;
    }; 
console.log('Ви голодні');    
};

run();
sit.addEventListener('change', run);
room.addEventListener('change', run);
fridge.addEventListener('change', run);
find.addEventListener('change', run);

const switcher = document.querySelector('.switcher');
const background = document.querySelector('.background');

switcher.addEventListener('click', (click) => {
    background.style.backgroundColor = 'yellow';
    console.log('Натиснули вимикач');    
});

const weapon = document.querySelector('.weapon');

weapon.addEventListener('click', (punch) => {
    console.log('Використали зброю');
});


