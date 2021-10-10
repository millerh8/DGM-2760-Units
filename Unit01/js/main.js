document.getElementById('company').innerHTML = "Joe's Bed and Breakfast";
document.querySelector('header > h2').innerText = "You know you want our biscuits and gravy";

let userName = prompt('What is your name?');
//let message = "Hello " + userName + ", welcome to the best place to stay in Provo!";
let message = `Hello ${userName}, welcome to the best palce to stay in Provo!`;

document.querySelector('#greeting').innerText = message;