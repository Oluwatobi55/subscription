const Name = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');
const btn = document.getElementById('btn');


btn.addEventListener('click', () => {
    let userName = Name.value;
    let userEmail = email.value;
    let userNumber = number.value;

    localStorage.setItem('userName', userName);
    localStorage.setItem('userEmail', userEmail);
    localStorage.setItem('userNumber', userNumber);

    window.location.href = "../Monthly plan/plan.html"
});

