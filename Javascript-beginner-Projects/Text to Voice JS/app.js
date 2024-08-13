

let button = document.getElementById('button');
let inputField = document.getElementById('input');

button.addEventListener('click',() => {
    let text = inputField.value;
    let utterence = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterence);
});