const arcade = document.getElementById('arcade');
const advanced = document.getElementById('advanced');
const pro = document.getElementById('pro');

const Ar = document.getElementById('Ar');
const $9 = document.getElementById('$9');
const Ad = document.getElementById('Ad');
const $12 = document.getElementById('$12');
const pr = document.getElementById('pr');
const $15 = document.getElementById('$15');


const btn2 = document.getElementById('btn2');

btn2.addEventListener('click', () => {
    window.location.href = "../Monthly add-ons/add.html";
})


arcade.addEventListener('click', () => {
    arcade.style.border = "2px solid darkblue"
    advanced.style.border = "1px solid rgb(196, 196, 196)"
    pro.style.border = "1px solid rgb(196, 196, 196)"
    let plan = Ar.innerHTML;
    let planPrice = $9.innerHTML;

    localStorage.setItem('plan', Ar.innerHTML);
    localStorage.setItem('planPrice', $9.innerHTML);
});
advanced.addEventListener('click', () => {
    advanced.style.border = "2px solid darkblue"
    arcade.style.border = "1px solid rgb(196, 196, 196)"
    pro.style.border = "1px solid rgb(196, 196, 196)"
    let plan = Ad.innerHTML;
    let planPrice = $12.innerHTML;

    localStorage.setItem('plan', Ad.innerHTML);
    localStorage.setItem('planPrice', $12.innerHTML);
});
pro.addEventListener('click', () => {
    pro.style.border = "2px solid darkblue"
    advanced.style.border = ".5px solid rgb(196, 196, 196)"
    arcade.style.border = ".5px solid rgb(196, 196, 196)"
    console.log(pr.innerHTML, $15.innerHTML);
    let plan = pr.innerHTML;
    let planPrice = $15.innerHTML;

    localStorage.setItem('plan', pr.innerHTML);
    localStorage.setItem('planPrice', $15.innerHTML);
});



