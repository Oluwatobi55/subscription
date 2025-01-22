const btn2 = document.getElementById('btn2');

btn2.addEventListener('click', () => {
    window.location.href = "../Thanks/thanks.html";
    
})

const first = document.getElementById('first');
const second = document.getElementById('second');

let plan = localStorage.getItem('plan');
let planPrice = localStorage.getItem('planPrice');

first.innerHTML = plan + '  (Yearly)';
second.innerHTML = planPrice;

let add1 = localStorage.getItem('add1');
let add2 = localStorage.getItem('add2');
let add3 = localStorage.getItem('add3');
let addPrice1 = localStorage.getItem('addPrice1');
let addPrice2 = localStorage.getItem('addPrice2');
let addPrice3 = localStorage.getItem('addPrice3');

third.innerHTML = add1;
fourth.innerHTML = add2;
fifth.innerHTML = add3;
sixth.innerHTML = addPrice1;
seventh.innerHTML = addPrice2;
eight.innerHTML = addPrice3;

// const Prices = {
//     "plan a": 90,
//     "plan b": 120,
//     "plan c": 150
// }
// const addOns = {
//     "addOns1": 10,
//     "addOns2": 20,
//     "addOns3": 20
// }

const arPrice1 = parseFloat(planPrice.slice(1, -3)) ;
const arPrice2 = parseFloat(addPrice1.slice(2, -3)) ;
const arPrice3 = parseFloat(addPrice2.slice(2, -3)) ;
const arPrice4 = parseFloat(addPrice3.slice(2, -3)) ;

const totalPrice = arPrice1 + arPrice2 + arPrice3 + arPrice4;

ninth.innerHTML = "$" + totalPrice + "/yr";


window.addEventListener('beforeunload', () => {
    localStorage.removeItem('add1');
    localStorage.removeItem('add2');
    localStorage.removeItem('add3');
    localStorage.removeItem('addPrice1');
    localStorage.removeItem('addPrice2');
    localStorage.removeItem('addPrice3');
})