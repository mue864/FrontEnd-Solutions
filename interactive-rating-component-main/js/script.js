const btn1 = document.getElementById('button1');
const btn2 = document.getElementById('button2');
const btn4 = document.getElementById('button4');
const btn5 = document.getElementById('button5');
const btn6 = document.getElementById('button6');
const btn3 = document.getElementById('button3');

btn1.addEventListener('click', () => {
    removeLists()
    btn1.classList.add('clicked');
})

btn2.addEventListener('click', () => {
    removeLists();
    btn2.classList.add('clicked');
})

btn3.addEventListener('click', () => {
    removeLists();
    btn3.classList.add('clicked');
})

btn4.addEventListener('click', () => {
    removeLists();
    btn4.classList.add('clicked');
})

btn5.addEventListener('click', () => {
    removeLists();
    btn5.classList.add('clicked');
})



function removeLists() {
    btn1.classList.remove('clicked');
    btn2.classList.remove('clicked');
    btn3.classList.remove('clicked');
    btn4.classList.remove('clicked');
    btn5.classList.remove('clicked');
    btn6.classList.remove('clicked');
}