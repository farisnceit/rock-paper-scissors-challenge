//declare Inital Variables at top
var gameInputValues = ['paper', 'scissors', 'rock'];
var userScore = 0,
    computerScore = 0,
    TieScore = 0;
var userInput, computerInput;

var resultData;

console.log('It Works');

gsap.from('#header', { y: '-100%', duration: 1 });
gsap.set('.user-icon,.computer-icon', { opacity: 0, scale: 0 });

var rock = document.querySelectorAll('.icons');

//target element using query Selector
var icons = document.querySelectorAll('.icons');
var userScoreElement = document.getElementById('user-score');
var computerScoreElement = document.getElementById('computer-score');

var gameContainer = document.getElementById('game-container');
var winnerBoard = document.querySelector('.winner-board');

var rulesBtn = document.querySelector('.rules-btn');
var rulesModal = document.querySelector('.rules-modal');
var rulesModalOverlay = document.querySelector('.rules-modal-overlay');
var rulesModalClose = document.querySelector('.rules-modal .close');

var userIcon = document.querySelector('.user-icon');
var computerIcon = document.querySelector('.computer-icon');
var userIconImg = document.querySelector('.user-icon img');
var computerIconImg = document.querySelector('.computer-icon img');
var playAgainBtn = document.querySelector('.play-again');

var result = document.getElementById('result');

//Click EventListener for Opening Modal
rulesBtn.addEventListener('click', params => {
    rulesModal.classList.add('show');
    rulesModalOverlay.classList.add('show');
});

rulesModalClose.addEventListener('click', () => {
    rulesModal.classList.remove('show');
    setInterval(() => {
        rulesModalOverlay.classList.remove('show');
    }, 500);
});

// create Animation Timeline for game icons
var t1 = gsap.timeline();
t1.fromTo('.icons', { scale: 0, autoAlpha: 0 }, { autoAlpha: 1, scale: 1, duration: 1, ease: 'power3.in' }).fromTo(
    '.bg-line',
    { scale: 0, autoAlpha: 0 },
    { scale: 1, autoAlpha: 1, duration: 1, ease: 'power3.in' }
);

//Get the value from user Clicks using dataset
icons.forEach(icon => {
    icon.addEventListener(
        'mouseover',
        function() {
            gsap.set(icon, { scale: 1.1, duration: 0.2 });
        },
        false
    );
    icon.addEventListener(
        'mouseout',
        function() {
            gsap.set(icon, { scale: 1, duration: 0.2 });
        },
        false
    );

    icon.addEventListener('click', e => {
        userInput = icon.dataset.value;
        computerInput = gameInputValues[Math.floor(Math.random() * gameInputValues.length)];

        console.log(userInput);
        console.log(computerInput);

        userIcon.removeAttribute('class');
        userIcon.classList.add(userInput, 'user-icon');

        computerIcon.removeAttribute('class');
        computerIcon.classList.add(computerInput, 'user-icon');

        userIconImg.src = `/images/icon-${userInput}.svg`;
        computerIconImg.src = `/images/icon-${computerInput}.svg`;

        if (userInput === computerInput) {
            TieScore++;
            result.innerHTML = 'TIED';
        } else {
            checkWinner(userInput, computerInput);
        }

        //hiding other elements then Clicked for Animating
        t2.play();
    });
});

var t2 = gsap.timeline({ paused: true });
t2.fromTo('.icons', { scale: 1, autoAlpha: 1 }, { autoAlpha: 0, scale: 0, duration: 0.2, ease: 'power3.in' })
    .fromTo('.bg-line', { scale: 1, autoAlpha: 1 }, { scale: 0, autoAlpha: 0, duration: 0.2, ease: 'power3.in' })
    .to('.user-icon,.computer-icon', { opacity: 1, scale: 1, duration: 1, delay: 0.2, ease: 'back' })
    .fromTo('.winner-board h2', { opacity: 0, y: '-50px' }, { opacity: 1, y: '0', duration: 1 }, '-=1')
    .fromTo(
        '.game-result h3, .game-result button',
        { opacity: 0, y: '50px' },
        { opacity: 1, y: '0', stagger: 0.2, duration: 1 },
        '-=1'
    );

playAgainBtn.addEventListener('click', () => {
    t2.reverse();
});

function checkWinner(userInput, computerInput) {
    switch (userInput + computerInput) {
        case 'scissorspaper':
        case 'paperrock':
        case 'rockscissors':
            console.log('User Wins');
            userScore++;
            userScoreElement.innerHTML = userScore;
            result.innerHTML = 'You Win';

            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            console.log('Computer Wins');
            computerScore++;
            computerScoreElement.innerHTML = computerScore;
            result.innerHTML = 'You Lose';
            break;
    }
}
