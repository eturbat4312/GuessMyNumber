// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 15;
// document.querySelector('.score').textContent = 100;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// let value = document.querySelector('.guess').value;
// let message = document.querySelector('.message').textContent;   
// console.log(value);
// console.log(message);


// const x = function (){
//     console.log(10)
// }
// function number(){
//     return 10
// }
// function sum(a, number()){
//     console.log(a + number());
    
// }


let number


document.querySelector('.check').addEventListener('click', function (number){
    // console.log(document.querySelector('.guess').value);
    number = document.querySelector('.guess').value;
    console.log(number);
    if (number === 15){
        document.querySelector('.message').textContent = '🎉 Zuv taalaa!';
    }
    else if (number > 15){
        document.querySelector('.message').textContent = 'Too high';
    }
    else if (number < 15){
        document.querySelector('.message').textContent = 'Too low';
    }

    // document.querySelector('.message').textContent = '🎉 Zuv taalaa!';
})
