const online = document.getElementById('online');
const larger = document.getElementById('larger');
const customizable = document.getElementById('customizable');

const onlineContainer = document.getElementById('onlineContainer');
const largerContainer = document.getElementById('largerContainer');
const customizableContainer = document.getElementById('customizableContainer');

const btn2 = document.getElementById('btn2');

const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const firstPrice = document.getElementById('firstPrice');
const secondPrice = document.getElementById('secondPrice');
const thirdPrice = document.getElementById('thirdPrice');


btn2.addEventListener('click', () => {
    window.location.href = "../Yearly finish/finish.html";
})
online.addEventListener('change', () => {
    if (online.checked) {
        onlineContainer.style.border = '1px solid darkblue'
        let add1 = first.innerHTML;
    let addPrice1 = firstPrice.innerHTML

    localStorage.setItem("add1", first.innerHTML);
    localStorage.setItem("addPrice1", firstPrice.innerHTML);
    } else {
        onlineContainer.style.border = '1px solid rgb(196,196,196)'
        let add1 = '';
        let addPrice1 = '';

        localStorage.setItem("add1", '');
    localStorage.setItem("addPrice1", '');
    }
    
})
larger.addEventListener('change', () => {
    if (larger.checked) {
        largerContainer.style.border = '1px solid darkblue'
        let add2 = second.innerHTML;
    let addPrice2 = secondPrice.innerHTML

    localStorage.setItem("add2", second.innerHTML);
    localStorage.setItem("addPrice2", secondPrice.innerHTML);
    } else {
        largerContainer.style.border = '1px solid rgb(196,196,196)'
        let add2 = '';
        let addPrice2 = '';

        localStorage.setItem("add2", '');
    localStorage.setItem("addPrice2", '');
    }
    
})
customizable.addEventListener('change', () => {
    if (customizable.checked) {
        customizableContainer.style.border = '1px solid darkblue'
        let add3 = third.innerHTML;
    let addPrice3 = thirdPrice.innerHTML

    localStorage.setItem("add3", third.innerHTML);
    localStorage.setItem("addPrice3", thirdPrice.innerHTML);
    } else {
        customizableContainer.style.border = '1px solid rgb(196,196,196)'
        let add3 = '';
        let addPrice3 = '';

        localStorage.setItem("add3", '');
    localStorage.setItem("addPrice3", '');
    }
    
})