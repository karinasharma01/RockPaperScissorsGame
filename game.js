const game = () => {
    let playerScore=0;
    let computerScore=0;
    const startGame = () => {
        const playButton = document.querySelector('.start button');
        const introScreen=document.querySelector('.start');
        const start=document.querySelector('.game');

        playButton.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
        });

    };
    //calling the inner functions
    startGame();
};
//calling the main function game to start a match
game();
