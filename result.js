document.addEventListener('DOMContentLoaded', () => {
    const winsound = new Audio('../assets/sounds/win.mp3');
    const buttonsound = new Audio('../assets/sounds/button.mp3');
    winsound.play();

    document.getElementById('playAgain').addEventListener('click', () => {
        buttonsound.play();
        window.location.href = '../index.html';
    });
    document.getElementById('mainMenu').addEventListener('click', () => {
        buttonsound.play();
        window.location.href = '../pages/welcome.html';
    });
});



