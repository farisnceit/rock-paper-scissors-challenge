//declare Inital Variables at top
var gameInputValues = ['paper', 'scissors', 'rock'];
var userScore = 0;

console.log('It Works');

gsap.from('#header', { y: '-100%', duration: 1 });

//target element using query Selector
var icons = document.querySelectorAll('.icons');
var userScoreElement = document.getElementById('user-score');

//Get the value from user Clicks using dataset
icons.forEach(icon => {
    icon.addEventListener('click', e => {
        var userInput = icon.dataset.value;
        console.log(userInput);
        console.log(gameInputValues[Math.floor(Math.random() * gameInputValues.length)]);

        userScore++;
        userScoreElement.innerHTML = userScore;
    });
});
