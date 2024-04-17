// Resultado para caso tenha empate

function Gameboard() {

    const createGameboard = (board) => {
        for (i=0; i < 9; i++) {
            let section = document.createElement('section')
            section.innerHTML = ''
            board.append(section)
        }
    }

    const winningOutcomes = (function () {
        return [[[0], [3], [6]], [[1], [4], [7]], [[2], [5], [8]], [[0], [1], [2]], [[3], [4], [5]], [[6], [7], [8]], [[0], [4], [8]], [[6], [4], [2]]]
    })()

    return { createGameboard , winningOutcomes }
}

function User() {

    const getPlayer = (player) => { return player }

    const switchPlayer = (player) => {
        if (player === 'X') {
            return 'O'
        }
        else {
            return 'X'
        }
    }

    return { getPlayer, switchPlayer }
}

function Game() {

    const checkSections = (winning, board, player) => {

        let counter = 0
        let winningCards = []

        for (i=0; i < winning.length; i ++) {
            for (q = 0; q < 3; q ++) {
                let index = winning[i][q][0]
                if (board[index].innerHTML == player) {
                    counter ++
                    winningCards.push(board[index])
                    if (counter == 3) {
                        winningCards.forEach((w) => {
                            w.style.color = 'red'
                        })
                        return counter 
                    }
                }
            }
            counter = 0 
            winningCards = []
        }
        
        
        return counter

    }

    const checkWin = (counter) => {
        if (counter == 3) {
            return true
        }
    }

    const opponentPlay = (play, player, spots) => {
        while (true && spots < 8) {
            let random = Math.floor(Math.random() * 9)
            if (play[random].innerHTML === '') { 
                play[random].innerHTML = player 
                break
            }
        }
    }

    const finishGame = (showResult, player) => {
        showResult.innerHTML = `<p>${player} won!</p>`
    }

    const checkTies = (section) => {
        let spots = 0
        for (i=0; i < section.length; i++) {
            if (section[i].innerHTML !== '') {
                spots ++
            }
        }

        return spots
    }

    return {checkSections, checkWin, opponentPlay, finishGame, checkTies}
}

function DOMInteraction() {
    
    let dialog = document.querySelector('dialog')
    let main = document.querySelector('.Main')
    let players = document.querySelectorAll('.Player')
    let TicTacToe = document.querySelector('.Tic.Tac.Toe')
    
    let user = User()
    let currentPlayer
    
    let game = Game()
    
    main.style.filter = 'blur(1px)'

    
    players.forEach((player) => {
        player.addEventListener('click', () => {
            currentPlayer = user.getPlayer(player.id)
            dialog.style.display = 'none'
            main.style.filter = 'blur(0px)'
        })
    })
    
    let gameboard = Gameboard()
    gameboard.createGameboard(TicTacToe)
    let winning = gameboard.winningOutcomes
    
    let section = document.querySelectorAll('section')
    let showResult = document.querySelector('.Result')
    let refresh = document.querySelector('.Refresh')

    let result = false
    let tie = 0

    let counter
    
    section.forEach((sect) => {
        sect.addEventListener('click', () => {
  
            if (sect.innerHTML == '') {
                if (result == false || result == undefined) {
                    sect.innerHTML = currentPlayer
                    tie = game.checkTies(section)            
                    counter = game.checkSections(winning, section, currentPlayer)
                    result = game.checkWin(counter)
                }
                
                if (result) { game.finishGame(showResult, currentPlayer) } 
                
                if (result == false || result == undefined) {
                    currentPlayer = user.switchPlayer(currentPlayer) 
                    tie = game.checkTies(section)            
                    game.opponentPlay(section, currentPlayer, tie)
                    counter = game.checkSections(winning, section, currentPlayer)
                    result = game.checkWin(counter)
                }
                
                if (result) { game.finishGame(showResult, currentPlayer) } 
                currentPlayer = user.switchPlayer(currentPlayer)
                
                if (result == undefined && tie > 8) {
                    result = true
                    game.finishGame(showResult, "No one ")
                }

                if (result) { refresh.style.display = 'flex'}
            }
            
            refresh.addEventListener('click', () => { window.location.reload() })

        })
    })
}

document.addEventListener('DOMContentLoaded', DOMInteraction)