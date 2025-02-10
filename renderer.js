document.addEventListener('DOMContentLoaded', () => {
    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    const statusDisplay = document.getElementById('status');
    const cells = document.querySelectorAll('.cell');
    const buttons = document.querySelectorAll('button');
    const resetButton = document.getElementById('reset');

    const selectsound = new Audio('./assets/sounds/select.mp3');
    const buttonsound = new Audio('./assets/sounds/button.mp3');

    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    function endGame(result) {
        gameActive = false;
        
        // Highlight winning line if applicable
        if (result === 'win' || result === 'lose') {
            highlightWinningLine();
        }

        // Show countdown before redirect
        let countdown = 1;
        statusDisplay.textContent = `Results in ${countdown}...`;
        const countdownInterval = setInterval(() => {
            countdown--;
            statusDisplay.textContent = `Results in ${countdown}...`;
        }, 1000);

        setTimeout(() => {
            clearInterval(countdownInterval);
            switch(result) {
                case 'win':
                    window.location.href = 'pages/win.html';
                    break;
                case 'lose':
                    window.location.href = 'pages/lose.html';
                    break;
                case 'draw':
                    window.location.href = 'pages/draw.html';
                    break;
            }
        }, 1500); // 1.5 second delay
    }

    function highlightWinningLine() {
        const winningCombo = getWinningCombo();
        if (winningCombo) {
            winningCombo.forEach(index => {
                cells[index].classList.add('winning-cell');
            });
        }
    }

    function getWinningCombo() {
        for (let combo of winningCombinations) {
            const [a, b, c] = combo;
            if (gameBoard[a] !== '' && 
                gameBoard[a] === gameBoard[b] && 
                gameBoard[b] === gameBoard[c]) {
                return combo;
            }
        }
        return null;
    }

    function handleCellClick(e) {
        if (currentPlayer !== 'X' || !gameActive) return;

        const cell = e.target;
        const cellIndex = parseInt(cell.dataset.index);

        if (gameBoard[cellIndex] !== '') return;

        // User's move
        selectsound.play();
        makeMove(cellIndex, 'X');
        
        if (checkWin('X')) {
            statusDisplay.textContent = 'You win!';
            gameActive = false;
            endGame('win');
            return;
        }
        
        if (checkDraw()) {
            statusDisplay.textContent = "Game ended in a draw!";
            gameActive = false;
            endGame('draw');
            return;
        }
        
        // Switch to computer's turn
        currentPlayer = 'O';
        statusDisplay.textContent = "My turn...";
        
        setTimeout(computerMove, 500);
    }

    function makeMove(index, player) {
        gameBoard[index] = player;
        const cell = cells[index];
        
        // Remove text content
        cell.textContent = '';
        
        // Add appropriate class
        cell.classList.add(player.toLowerCase());
    }

    function computerMove() {
        let move = findWinningMove('O') || findBlockingMove() || getRandomMove();
        
        makeMove(move, 'O');
        
        if (checkWin('O')) {
            statusDisplay.textContent = 'Amir wins!';
            gameActive = false;
            endGame('lose');
            return;
        }
        
        if (checkDraw()) {
            statusDisplay.textContent = "Game ended in a draw!";
            gameActive = false;
            endGame('draw');
            return;
        }
        
        currentPlayer = 'X';
        statusDisplay.textContent = "Your turn";
    }

    function checkWin(player) {
        return winningCombinations.some(combination => {
            return combination.every(index => {
                return gameBoard[index] === player;
            });
        });
    }

    function checkDraw() {
        return gameBoard.every(cell => cell !== '');
    }

    function findWinningMove(symbol) {
        for (let combo of winningCombinations) {
            const [a, b, c] = combo;
            if (gameBoard[a] === symbol && gameBoard[b] === symbol && gameBoard[c] === '') return c;
            if (gameBoard[a] === symbol && gameBoard[c] === symbol && gameBoard[b] === '') return b;
            if (gameBoard[b] === symbol && gameBoard[c] === symbol && gameBoard[a] === '') return a;
        }
        return null;
    }

    function findBlockingMove() {
        return findWinningMove('X');
    }

    function getRandomMove() {
        const emptyCells = gameBoard
            .map((cell, index) => cell === '' ? index : null)
            .filter(cell => cell !== null);
        return emptyCells[Math.floor(Math.random() * emptyCells.length)];
    }

    function resetGame() {
        buttonsound.play();
        currentPlayer = 'X';
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        gameActive = true;
        statusDisplay.textContent = "Your turn";
        cells.forEach(cell => {
            cell.textContent = '';
            cell.classList.remove('x', 'o');
        });
    }

    // Event Listeners
    cells.forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });

    buttons.forEach(button => {
        button.addEventListener('click', buttonsound.play());
    });

    resetButton.addEventListener('click', resetGame);

});