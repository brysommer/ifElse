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
        result.insertAdjacentHTML('beforeend', '<span><br>Буває й лінь поїсти<br></span>');
        return;
    };

    if(valueSit === 'getup') {
        console.log('Так троимати');
        result.insertAdjacentHTML('beforeend', '<span>Так тримати<br></span>');
    };

    if(valueRoom === 'bathroom') {
        console.log('Ви прийняли душ');
        result.insertAdjacentHTML('beforeend', '<span>Ви прийняли душ<br></span>');

        return;
    };

    if(valueRoom === 'kitchen') {
        console.log('Продовжуйте в тому ж дусі');
        result.insertAdjacentHTML('beforeend', '<span>Продовжуйте в тому ж дусі<br></span>');
    };

    if(valueRoom === 'toilet') {
        console.log('Сподіваюсь усі справи доведено до кінця');
        result.insertAdjacentHTML('beforeend', '<span>Сподіваюсь усі справи доведено до кінця<br></span>');
        return;
    };

    if(valueRoom === 'badroom') {
        console.log('Солодких снів');
        result.insertAdjacentHTML('beforeend', '<span>Солодких сні<br></span>');
        return;
    };

    if(valueFridge === 'close') {
        console.log('Дієта, справа серйозна');
        result.insertAdjacentHTML('beforeend', '<span>Дієта, справа серйозна<br></span>');
        return;
    };

    if(valueFridge === 'open') {
        console.log('ВИ близькі до цілі');
        result.insertAdjacentHTML('beforeend', '<span>ВИ близькі до цілі<br></span>');
    };

    if(valueFind === 'check2') {
        console.log('На вас напала миш');
        result.insertAdjacentHTML('beforeend', '<span>На вас напала миш<br></span>');
        fight();
        return;
    };

    if(valueFind === 'check1') {
        console.log('Вітаємо');
        result.insertAdjacentHTML('beforeend', '<span>Вітаємо<br></span>');
    };

    if(valueFind === 'check3') {
        console.log('Кефір, це не те що на разі хочеться');
        result.insertAdjacentHTML('beforeend', '<span>Кефір, це не те що на разі хочеться<br></span>');
        return;
    }; 

console.log('Ви добули ковбасу, смачного');  
result.insertAdjacentHTML('beforeend', '<span>Ви добули ковбасу, смачного<br></span>');
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
    result.insertAdjacentHTML('beforeend', '<span>Увімкнули світло<br></span>');  
});

switcherOFF.addEventListener('click', (click) => {
    background.classList.remove('sun');
    console.log('Вимкнули світло'); 
    result.insertAdjacentHTML('beforeend', '<span>Вимкнули світло<br></span>');
});

const fight = () => {
    const message = document.querySelector('.header');
    const weapon = document.querySelector('.weapon');
    message.innerHTML = '<h1>На вас напала миш, захищайся</h1>'
    weapon.addEventListener('click', (punch) => {
        console.log('Використали зброю');
        result.insertAdjacentHTML('beforeend', '<span>Використали зброю<br></span>');
        valueFind = 'check1';
    });
}



