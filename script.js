const red = document.querySelector('#red');
const blue = document.querySelector('#blue');
const green = document.querySelector('#green');

red.addEventListener('click', () => {
    document.documentElement.style.setProperty('--first-color', '#480000');
    document.documentElement.style.setProperty('--second-color', '#ce3333');
});

blue.addEventListener('click', () => {
    document.documentElement.style.setProperty('--first-color', '#ababef');
    document.documentElement.style.setProperty('--second-color', '#000099');
});

green.addEventListener('click', () => {
    document.documentElement.style.setProperty('--first-color', '#004a09');
    document.documentElement.style.setProperty('--second-color', '#a6f6ae');
});