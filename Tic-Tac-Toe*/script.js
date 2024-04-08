
function Gameboard() {

    const createGameboard = (function () {
        return [[''], [''], [''],
        [''], [''], [''],
        [''], [''], ['']]
    })();

    const winningOutcomes = (function () {
        return [[[0], [3], [6]], [[1], [4], [7]], [[2], [5], [8]], [[0], [1], [2]], [[3], [4], [5]], [[6], [7], [8]], [[0], [4], [8]], [[6], [4], [2]]]
    })()

    return { createGameboard, winningOutcomes }
}


function Game() {

    // Inicializa o game
    let gameboard = Gameboard()
    let board = gameboard.createGameboard
    let winning = gameboard.winningOutcomes

    let currentPlayer = 'O'
    let user = User(currentPlayer)
    
    let counter = 0
    let spots = 0

    while (true) {


        while (true) {

            let random = Math.floor(Math.random() * 9)
            
            if (board[random] == '') {
                board[random] = user.getPlayer(currentPlayer)
                spots = spots + 1
                break
            }
        }
        console.log(board)

        const findWinner = () => {
            for (i = 0; i < winning.length; i++) {
                for (q = 0; q < 3; q++) {
                    let index = winning[i][q][0]
                    if (board[index][0] == currentPlayer[0]) {
                        counter++
                    }
                }
                if (counter > 2) {
                    console.log(`${currentPlayer} won! ${counter}`)
                    return true
                }
                counter = 0
            }
        }

        if (findWinner()) { break }
        if (spots > 8) { 
            console.log('Its a tie!')
            break
        }

        currentPlayer = user.switchPlayer(currentPlayer)
    }

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

Game()



