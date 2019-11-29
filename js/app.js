//declare Inital Variables at top
var gameInputValues = ['paper', 'scissors', 'rock'];
var userScore = 0;

console.log('It Works');

gsap.from('#header', { y: '-100%', duration: 1 });


var rock = document.querySelector('.rock')
// gsap.set(rock,{x:"-50%"});


rock.addEventListener("mouseover", function(){gsap.set(rock,{scale:1.1});}, false);
rock.addEventListener("mouseout", function(){gsap.set(rock,{scale:1});}, false);

//target element using query Selector
var icons = document.querySelectorAll('.icons');
var userScoreElement = document.getElementById('user-score');

var gameContainer = document.getElementById('game-container');
var winnerBoard = document.querySelector('.winner-board');

//Get the value from user Clicks using dataset
icons.forEach(icon => {
    icon.addEventListener('click', e => {
        var userInput = icon.dataset.value;
        console.log(userInput);
        //console.log(gameInputValues[Math.floor(Math.random() * gameInputValues.length)]);

        userScore++;
        userScoreElement.innerHTML = userScore;

        //Stored in Temp Variable this way to remove object reference
        var tempInput = JSON.parse(JSON.stringify(gameInputValues))

        var index = tempInput.indexOf(userInput);
        if (index !== -1) tempInput.splice(index, 1);

        console.log("filterElements",tempInput);
        console.log('gameInputValues',gameInputValues);

        //hiding other elements then Clicked for Animating
        gsap.to(".bg-line,.icons",{scale:0,duration:1,ease: "power4.out",opacity:0});

        
        setInterval(() => {
            gameContainer.style.display = "none";
            winnerBoard.style.display = "block";            
        }, 1000);

    });
});
