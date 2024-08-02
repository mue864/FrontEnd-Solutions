const btn1 = document.getElementById('button1');
const btn2 = document.getElementById('button2');
const btn4 = document.getElementById('button4');
const btn5 = document.getElementById('button5');
const btn6 = document.getElementById('button6');
const btn3 = document.getElementById('button3');
const firstPage = document.getElementById('page');
const secondPage = document.getElementById('second-page');
const btnNumbers = document.getElementById('round-btn');
let num;

btn1.addEventListener('click', () => {
    removeLists()
    btn1.classList.add('clicked');
    num = btn1.innerHTML;
})

btn2.addEventListener('click', () => {
    removeLists();
    btn2.classList.add('clicked');
    num = btn2.innerHTML;
})

btn3.addEventListener('click', () => {
    removeLists();
    btn3.classList.add('clicked');
    num = btn3.innerHTML;
})

btn4.addEventListener('click', () => {
    removeLists();
    btn4.classList.add('clicked');
    num = btn4.innerHTML;
})

btn5.addEventListener('click', () => {
    removeLists();
    btn5.classList.add('clicked');
    num = btn5.innerHTML;
})

btn6.addEventListener('click', () => {
    if (num === undefined) {
        console.log("undifined shuwa");
        warning();
    } else {
        document.getElementById('result').innerHTML = num;
        firstPage.classList.add('hide-page');
        secondPage.classList.add('second-page');
        btnNumbers.classList.remove('warning');
        secondPage.style.display = 'inherit';
    }
    
})

// change color to red if unclicked
function warning() {
    btn1.classList.add('warning');
    btn2.classList.add('warning');
    btn3.classList.add('warning');
    btn4.classList.add('warning');
    btn5.classList.add('warning');
}

function removeLists() {
    btn1.classList.remove('clicked');
    btn2.classList.remove('clicked');
    btn3.classList.remove('clicked');
    btn4.classList.remove('clicked');
    btn5.classList.remove('clicked');
    btn6.classList.remove('clicked');

    // remove warning
    btn1.classList.remove('warning');
    btn2.classList.remove('warning');
    btn3.classList.remove('warning');
    btn4.classList.remove('warning');
    btn5.classList.remove('warning');
}

// checking the button that has been clicked
