document.querySelector('header > h1').innerText = "Inspector Clouseau";
document.querySelector('header > h2').innerText = "You sir, are the idiom!";

function reDisplay() {
    let windowSizes = `Window size is ${window.innerWidth} pixels wide by ${window.innerHeight} pixels tall.`;

    let offset = `Window offset is ${window.screenX} pixels from the left edge and ${window.screenY} pixels from the top.`;

    let windowURL = `The URL for this page is ${document.URL}`; 

    let myWindow = document.querySelector('#myWindow').innerText = windowSizes + '\n' + offset + '\n' + windowURL;
}
document.querySelector('header > h1').innerText = "Inspector Clouseau";
document.querySelector('header > h2').innerText = "You sir, are the idiom!";

function reDisplay() {
    let windowSizes = `Window size is ${window.innerWidth} pixels wide by ${window.innerHeight} pixels tall.`;

    let offset = `Window offset is ${window.screenX} pixels from the left edge and ${window.screenY} pixels from the top.`;

    let windowURL = `The URL for this page is ${document.URL}`; 

    let myWindow = document.querySelector('#myWindow').innerText = windowSizes + '\n' + offset + '\n' + windowURL;
}
