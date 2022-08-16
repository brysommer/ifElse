const sit = document.querySelector('select[name="sitting"]');
const room = document.querySelector('select[name="room"]');
const fridge = document.querySelector('select[name="fridge"]');
const find = document.querySelector('select[name="find"]');
const result = document.querySelector('.result > span')

const run = () => {
    const valueSit = sit.value;
    const valueRoom = room.value;
    const valueFridge = fridge.value;
    let valueFind = find.value;

    if(valueSit === 'keepcalm') {
        console.log('Буває й лінь поїсти');
        return;
    };

    if(valueSit === 'getup') {
        console.log('Так троимати');
    };

    if(valueRoom === 'bathroom') {
        console.log('Ви прийняли душ');
        return;
    };

    if(valueRoom === 'kitchen') {
        console.log('Продовжуйте в тому ж дусі');
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

    if(valueFridge === 'open') {
        console.log('ВИ близькі до цілі');
    };

    if(valueFind === 'check2') {
        console.log('На вас напала миш');
        fight();
        return;
    };

    if(valueFind === 'check1') {
        console.log('Вітаємо');
    };

    if(valueFind === 'check3') {
        console.log('Кефір, це не те що на разі хочеться');
        return;
    }; 
    
console.log('Ви добули ковбасу, смачного');    
};

run();
sit.addEventListener('change', run);
room.addEventListener('change', run);
fridge.addEventListener('change', run);
find.addEventListener('change', run);

const switcherON = document.querySelector('.switcherON');
const switcherOFF = document.querySelector('.switcherOFF');
const background = document.querySelector('.background');

switcherON.addEventListener('click', (click) => {
    background.classList.add('sun');
    console.log('Увімкнули світло');    
});

switcherOFF.addEventListener('click', (click) => {
    background.classList.remove('sun');
    console.log('Вимкнули світло');    
});

const fight = () => {
    const message = document.querySelector('.header');
    const weapon = document.querySelector('.weapon');
    message.innerHTML = '<h1>На вас напала миш, захищайся</h1>'
    weapon.addEventListener('click', (punch) => {
        console.log('Використали зброю');
        valueFind = 'check1';
    });
}



