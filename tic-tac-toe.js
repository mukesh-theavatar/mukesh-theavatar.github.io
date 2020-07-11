//The Javascript File for Tic-tac-toe Game
const X_play = 'x'
const C_play ='circle'
const Possible_Wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  //Defing the contraints for Game Functions
const boxElements = document.querySelectorAll('[data-box]')
const tictactoe = document.getElementById('tictactoe')
const GameResultMessageElement = document.getElementById('gameResult')
const rematchButton = document.getElementById('rematchButton')
const GameResultMessageTextElement = document.querySelector('[data-game-result-message]')
let cTurn
//Calling the PlayGame Function to Start the Game
playGame()

rematchButton.addEventListener('click', playGame)

function playGame(){
    cTurn = false
    boxElements.forEach(box => {
        box.classList.remove(X_play)
        box.classList.remove(C_play)
        box.removeEventListener('click', handleClick)
        box.addEventListener('click', handleClick, { once: true})
    })
    setTicTacToeHoverPlay()
    GameResultMessageElement.classList.remove('show')
}

function handleClick(m){
const box = m.target
const currentPlay = cTurn ? C_play : X_play
placeMark(box, currentPlay)
  if (checkWin(currentPlay)){
    exitGame(false)
    //console.log('Winner')
} else if(isDraw()) {
    exitGame(true)
} else {
    switchTurns()     
    setTicTacToeHoverPlay()
 }  
}

function exitGame(draw){
    if(draw){
        GameResultMessageTextElement.innerText = 'Draw!'
    } else{
        GameResultMessageTextElement.innerText = `${cTurn ? "0's" : "X's"} Wins!`
    }
    GameResultMessageElement.classList.add('show')
}

function isDraw() {  
    return [...boxElements].every(box => {
        return box.classList.contains(X_play) || box.classList.contains(C_play)
    })
}


function placeMark(box, currentPlay){
    box.classList.add(currentPlay)
}

function switchTurns(){
    cTurn = !cTurn
}

function setTicTacToeHoverPlay(){
tictactoe.classList.remove(X_play)
tictactoe.classList.remove(C_play)
    if (cTurn) {
        tictactoe.classList.add(C_play)
    } else{
        tictactoe.classList.add(X_play)
    }
}

function checkWin(currentPlay){
    return Possible_Wins.some(combination => {
        return combination.every(index => {
            return boxElements[index].classList.contains(currentPlay)
        })
    })
}