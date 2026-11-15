
// document.addEventListener('DOMContentLoaded', () => {
//     const grid = document.querySelector('.grid');
//     let squares = Array.from(document.querySelectorAll('.grid div'));
//     const width = 10
//     console.log(squares);
// });

// const name = ['Jordan', 'Akhai'];
// function showAlert() {
//     //your code here
//     alert(name[0] + ' ' + name[1] + ' you have been alerted!');
// }
// showAlert();

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid div');
    const scoreDisplay = document.getElementById('#score');
    const startButton = document.getElementById('#start-button');
    const resetButton = document.getElementById('#reset-button');
    const width = 10
});

let names = ['Jordan', 'David', 'Adam', 'Bob']

names.forEach(name => {
    console.log(name + ' is a Player.');
}); 