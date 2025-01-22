const arcade = document.getElementById('arcade');
const advanced = document.getElementById('advanced');
const pro = document.getElementById('pro');


const Ar = document.getElementById('Ar');
const $90 = document.getElementById('$90');
const Ad = document.getElementById('Ad');
const $120 = document.getElementById('$120');
const pr = document.getElementById('pr');
const $150 = document.getElementById('$150');

const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', () => {
    window.location.href = "../Yearly add-ons/add.html";
})

arcade.addEventListener('click', () => {
    arcade.style.border = "2px solid darkblue"
    advanced.style.border = "1px solid rgb(196, 196, 196)"
    pro.style.border = "1px solid rgb(196, 196, 196)"
    let plan = Ar.innerHTML;
    let planPrice = $90.innerHTML;

    localStorage.setItem('plan', Ar.innerHTML);
    localStorage.setItem('planPrice', $90.innerHTML);
    
})
advanced.addEventListener('click', () => {
    advanced.style.border = "2px solid darkblue"
    arcade.style.border = "1px solid rgb(196, 196, 196)"
    pro.style.border = "1px solid rgb(196, 196, 196)"
    let plan = Ad.innerHTML;
    let planPrice = $120.innerHTML;

    localStorage.setItem('plan', Ad.innerHTML);
    localStorage.setItem('planPrice', $120.innerHTML);
})
pro.addEventListener('click', () => {
    pro.style.border = "2px solid darkblue"
    advanced.style.border = ".5px solid rgb(196, 196, 196)"
    arcade.style.border = ".5px solid rgb(196, 196, 196)"
    let plan = pr.innerHTML;
    let planPrice = $150.innerHTML;

    localStorage.setItem('plan', pr.innerHTML);
    localStorage.setItem('planPrice', $150.innerHTML);

})